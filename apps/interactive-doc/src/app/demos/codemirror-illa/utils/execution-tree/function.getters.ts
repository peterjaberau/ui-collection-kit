import { IMMEDIATE_PARENT_REGEX } from "./constants"

export function getDisplayNameAndPropertyPath(fullPath: string): {
  displayName: string
  attrPath: string
} {
  const indexOfFirstDot = fullPath.indexOf(".")
  if (indexOfFirstDot === -1) {
    return {
      displayName: fullPath,
      attrPath: "",
    }
  }
  const displayName = fullPath.substring(0, indexOfFirstDot)
  const attrPath = fullPath.substring(indexOfFirstDot + 1)
  return { displayName, attrPath }
}

export const getImmediateParentsOfPropertyPaths = (propertyPaths: string[]): string[] => {
  const parents: Set<string> = new Set()

  propertyPaths.forEach((path) => {
    const matches: any = path.match(IMMEDIATE_PARENT_REGEX)

    if (matches !== null) {
      parents.add(matches[1])
    }
  })

  return Array.from(parents)
}

export function getObjectPaths(obj: Record<string, unknown>, currentPath = "") {
  let paths: string[] = []

  if (typeof obj === "object" && obj !== null) {
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
      const newPath = Array.isArray(obj) ? `${currentPath}.${key}` : `${currentPath ? currentPath + "." : ""}${key}`
      if (typeof value === "object" && value !== null) {
        paths = paths.concat(getObjectPaths(value as Record<string, unknown>, newPath))
      } else {
        paths.push(newPath)
      }
    })
  }

  return paths.map((path) => (path.startsWith(".") ? path.substr(1) : path))
}
