export function recursiveDelete(
  obj: any,
  ignoredKeys?: string[],
): any {
  const newObj: any = {}

  for (let key in obj) {
    if (!key.startsWith("$") && !ignoredKeys?.includes(key)) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        newObj[key] = recursiveDelete(obj[key] as any, ignoredKeys)
      } else {
        newObj[key] = obj[key]
      }
    }
  }

  return newObj
}
