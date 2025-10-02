import getRandomValues from "get-random-values"

export function isKeyedSegment(segment: unknown) {
  return typeof segment === "object" && segment !== null && "_key" in segment
}

export const defaultKeyGenerator = (): string => randomKey(12)

export const getByteHexTable = (() => {
  let table: any[]
  return () => {
    if (table) {
      return table
    }

    table = []
    for (let i = 0; i < 256; ++i) {
      table[i] = (i + 0x100).toString(16).slice(1)
    }
    return table
  }
})()

export function whatwgRNG(length = 16) {
  const rnds8 = new Uint8Array(length)
  getRandomValues(rnds8)
  return rnds8
}

export function randomKey(length?: number): string {
  const table = getByteHexTable()
  return whatwgRNG(length)
    .reduce((str, n) => str + table[n], "")
    .slice(0, length)
}
