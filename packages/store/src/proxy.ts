// Credits: https://github.com/pmndrs/valtio

import { getUntracked, markToTrack } from "proxy-compare"
import { globalRef, refSet } from "./global"
import { canProxy, isDev, isObject } from "./utils"

type AsRef = { $$valtioRef: true }

type ProxyObject = object

type Path = (string | symbol)[]

type Op = [op: "set", path: Path, value: unknown, prevValue: unknown] | [op: "delete", path: Path, prevValue: unknown]

type Listener = (op: Op, nextVersion: number) => void

export type Snapshot<T> = T

type CreateSnapshot = <T extends object>(target: T, version: number) => T

type RemoveListener = () => void
type AddListener = (listener: Listener) => RemoveListener

type ProxyState = readonly [
  target: object,
  ensureVersion: (nextCheckVersion?: number) => number,
  createSnapshot: CreateSnapshot,
  addListener: AddListener,
]

const proxyStateMap = globalRef("__uiCollectionKit__proxyStateMap", () => new WeakMap<ProxyObject, ProxyState>())

const buildProxyFunction = (
  objectIs = Object.is,

  newProxy = <T extends object>(target: T, handler: ProxyHandler<T>): T => new Proxy(target, handler),

  snapCache = new WeakMap<object, [version: number, snap: unknown]>(),

  createSnapshot: CreateSnapshot = <T extends object>(target: T, version: number): T => {
    const cache = snapCache.get(target)
    if (cache?.[0] === version) {
      return cache[1] as T
    }
    const snap: any = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target))
    markToTrack(snap, true) // mark to track
    snapCache.set(target, [version, snap])
    Reflect.ownKeys(target).forEach((key) => {
      const value = Reflect.get(target, key)
      if (refSet.has(value as object)) {
        markToTrack(value as object, false) // mark not to track
        snap[key] = value
      } else if (proxyStateMap.has(value as object)) {
        snap[key] = snapshot(value as object)
      } else {
        snap[key] = value
      }
    })
    return Object.freeze(snap)
  },

  proxyCache = new WeakMap<object, ProxyObject>(),

  versionHolder = [1, 1] as [number, number],

  proxyFunction = <T extends object>(initialObject: T): T => {
    if (!isObject(initialObject)) {
      throw new Error("object required")
    }
    const found = proxyCache.get(initialObject) as T | undefined
    if (found) {
      return found
    }
    let version = versionHolder[0]
    const listeners = new Set<Listener>()
    const notifyUpdate = (op: Op, nextVersion = ++versionHolder[0]) => {
      if (version !== nextVersion) {
        version = nextVersion
        listeners.forEach((listener) => listener(op, nextVersion))
      }
    }
    let checkVersion = versionHolder[1]
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
        checkVersion = nextCheckVersion
        propProxyStates.forEach(([propProxyState]) => {
          const propVersion = propProxyState[1](nextCheckVersion)
          if (propVersion > version) {
            version = propVersion
          }
        })
      }
      return version
    }
    const createPropListener =
      (prop: string | symbol): Listener =>
      (op, nextVersion) => {
        const newOp: Op = [...op]
        newOp[1] = [prop, ...(newOp[1] as Path)]
        notifyUpdate(newOp, nextVersion)
      }
    const propProxyStates = new Map<string | symbol, readonly [ProxyState, RemoveListener?]>()
    const addPropListener = (prop: string | symbol, propProxyState: ProxyState) => {
      if (isDev() && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists")
      }
      if (listeners.size) {
        const remove = propProxyState[3](createPropListener(prop))
        propProxyStates.set(prop, [propProxyState, remove])
      } else {
        propProxyStates.set(prop, [propProxyState])
      }
    }
    const removePropListener = (prop: string | symbol) => {
      const entry = propProxyStates.get(prop)
      if (entry) {
        propProxyStates.delete(prop)
        entry[1]?.()
      }
    }
    const addListener = (listener: Listener) => {
      listeners.add(listener)
      if (listeners.size === 1) {
        propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
          if (isDev() && prevRemove) {
            throw new Error("remove already exists")
          }
          const remove = propProxyState[3](createPropListener(prop))
          propProxyStates.set(prop, [propProxyState, remove])
        })
      }
      const removeListener = () => {
        listeners.delete(listener)
        if (listeners.size === 0) {
          propProxyStates.forEach(([propProxyState, remove], prop) => {
            if (remove) {
              remove()
              propProxyStates.set(prop, [propProxyState])
            }
          })
        }
      }
      return removeListener
    }
    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject))
    const handler: ProxyHandler<T> = {
      deleteProperty(target: T, prop: string | symbol) {
        const prevValue = Reflect.get(target, prop)
        removePropListener(prop)
        const deleted = Reflect.deleteProperty(target, prop)
        if (deleted) {
          notifyUpdate(["delete", [prop], prevValue])
        }
        return deleted
      },
      set(target: T, prop: string | symbol, value: any, receiver: object) {
        const hasPrevValue = Reflect.has(target, prop)
        const prevValue = Reflect.get(target, prop, receiver)
        if (
          hasPrevValue &&
          (objectIs(prevValue, value) || (proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value))))
        ) {
          return true
        }
        removePropListener(prop)
        if (isObject(value)) {
          value = getUntracked(value) || value
        }
        let nextValue = value
        if (Object.getOwnPropertyDescriptor(target, prop)?.set) {
          // do nothing
        } else {
          if (!proxyStateMap.has(value) && canProxy(value)) {
            nextValue = proxy(value)
          }
          const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue)
          if (childProxyState) {
            addPropListener(prop, childProxyState)
          }
        }
        Reflect.set(target, prop, nextValue, receiver)
        notifyUpdate(["set", [prop], value, prevValue])
        return true
      },
    }
    const proxyObject = newProxy(baseObject, handler)
    proxyCache.set(initialObject, proxyObject)
    const proxyState: ProxyState = [baseObject, ensureVersion, createSnapshot, addListener]
    proxyStateMap.set(proxyObject, proxyState)
    Reflect.ownKeys(initialObject).forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(initialObject, key) as PropertyDescriptor
      if (desc.get || desc.set) {
        Object.defineProperty(baseObject, key, desc)
      } else {
        proxyObject[key as keyof T] = initialObject[key as keyof T]
      }
    })
    return proxyObject
  },
) =>
  [
    // public functions
    proxyFunction,
    // shared state
    proxyStateMap,
    refSet,
    // internal things
    objectIs,
    newProxy,
    canProxy,
    snapCache,
    createSnapshot,
    proxyCache,
    versionHolder,
  ] as const

const [proxyFunction] = buildProxyFunction()

export function proxy<T extends object>(initialObject: T = {} as T): T {
  return proxyFunction(initialObject)
}

export function getVersion(proxyObject: unknown): number | undefined {
  const proxyState = proxyStateMap.get(proxyObject as object)
  return proxyState?.[1]()
}

export function subscribe<T extends object>(
  proxyObject: T,
  callback: (ops: Op[]) => void,
  notifyInSync?: boolean,
): () => void {
  const proxyState = proxyStateMap.get(proxyObject as object)
  if (isDev() && !proxyState) {
    console.warn("Please use proxy object")
  }
  let promise: Promise<void> | undefined
  const ops: Op[] = []
  const addListener = (proxyState as ProxyState)[3]
  let isListenerActive = false
  const listener: Listener = (op) => {
    ops.push(op)
    if (notifyInSync) {
      callback(ops.splice(0))
      return
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = undefined
        if (isListenerActive) {
          callback(ops.splice(0))
        }
      })
    }
  }
  const removeListener = addListener(listener)
  isListenerActive = true
  return () => {
    isListenerActive = false
    removeListener()
  }
}

export function snapshot<T extends object>(proxyObject: T): T {
  const proxyState = proxyStateMap.get(proxyObject as object)
  if (isDev() && !proxyState) {
    console.warn("Please use proxy object")
  }
  const [target, ensureVersion, createSnapshot] = proxyState as ProxyState
  return createSnapshot(target, ensureVersion()) as T
}

export function ref<T extends object>(obj: T): Ref<T> {
  refSet.add(obj)
  return obj as T & AsRef
}

export type Ref<T> = T & AsRef
