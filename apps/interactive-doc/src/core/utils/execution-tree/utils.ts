import { toPath } from "lodash"
import { convertPathToString, isObject } from "#core-utils"

export function isWidget(entity: Record<string, any>) {
  return typeof entity === "object" && "$type" in entity && entity.$type === "WIDGET"
}

export function isAction(entity: Record<string, any>) {
  return typeof entity === "object" && "$type" in entity && entity.$type === "ACTION"
}

export const removeIgnoredKeys = (result: Record<string, unknown>) => {
  return Object.keys(result).reduce((acc: Record<string, unknown>, key: string) => {
    const componentOrAction = result[key]
    if (isObject(componentOrAction)) {
      const updatedComponentOrAction = Object.keys(componentOrAction).reduce(
        (obj: Record<string, unknown>, innerKey: string) => {
          if (!innerKey.startsWith("$")) {
            obj[innerKey] = componentOrAction[innerKey]
          }
          return obj
        },
        {},
      )
      acc[key] = updatedComponentOrAction
    } else {
      acc[key] = componentOrAction
    }
    return acc
  }, {})
}

export const removeParentPath = (paths: string[]) => {
  const dotPaths = paths.map((path) => toPath(path).join("."))

  const filteredPaths = dotPaths.filter((path, index, array) => {
    return !array.some((otherPath, otherIndex) => {
      if (index === otherIndex) return false
      return otherPath.startsWith(`${path}.`)
    })
  })

  return filteredPaths.map((path) => convertPathToString(toPath(path)))
}

export const removeWidgetOrActionMethods = (result: Record<string, unknown>) => {
  return Object.keys(result).reduce((acc: Record<string, unknown>, key: string) => {
    if (key === "utils") return acc
    const componentOrAction = result[key]
    if (isObject(componentOrAction) && (componentOrAction.$type === "WIDGET" || componentOrAction.$type === "ACTION")) {
      const updatedComponentOrAction = Object.keys(componentOrAction).reduce(
        (obj: Record<string, unknown>, innerKey: string) => {
          const innerValue = componentOrAction[innerKey]
          if (typeof innerValue !== "function") {
            obj[innerKey] = componentOrAction[innerKey]
          }
          return obj
        },
        {},
      )
      acc[key] = updatedComponentOrAction
    } else {
      acc[key] = componentOrAction
    }
    return acc
  }, {})
}

export function recursiveDelete(obj: Record<string, unknown>, ignoredKeys?: string[]): Record<string, unknown> {
  const newObj: Record<string, unknown> = {}

  for (let key in obj) {
    if (!key.startsWith("$") && !ignoredKeys?.includes(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        newObj[key] = recursiveDelete(obj[key] as Record<string, unknown>, ignoredKeys)
      } else {
        newObj[key] = obj[key]
      }
    }
  }

  return newObj
}
