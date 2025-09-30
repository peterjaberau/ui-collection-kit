export function searchComponentFromMap(components: any, findDisplayName: string | null) {
  if (components == null || findDisplayName == null) {
    return null
  }
  return components[findDisplayName]
}

