import {createContext} from 'react'


export function getGlobalScope() {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof window !== 'undefined') return window
  if (typeof self !== 'undefined') return self
  if (typeof global !== 'undefined') return global

  throw new Error('@portabletext/editor: could not locate global scope')
}

export const globalScope = getGlobalScope() as any

export function createGloballyScopedContext(key: `@portabletext/editor/context/${string}`, defaultValue: any) {
  const symbol = Symbol.for(key)

  if (typeof document === 'undefined') {
    return createContext(defaultValue)
  }

  globalScope[symbol] = globalScope[symbol] ?? createContext(defaultValue)

  return globalScope[symbol]
}
