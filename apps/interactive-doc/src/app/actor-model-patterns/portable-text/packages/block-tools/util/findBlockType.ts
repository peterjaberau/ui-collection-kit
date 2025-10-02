
export function findBlockType(type: any): any {
  if (type.type) {
    return findBlockType(type.type)
  }

  if (type.name === 'block') {
    return true
  }

  return false
}
