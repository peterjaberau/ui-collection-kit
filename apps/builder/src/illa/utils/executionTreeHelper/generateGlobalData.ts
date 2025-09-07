import { hasDynamicStringSnippet } from "#illa/packages/public/dynamic-string"
import { klona } from "klona"
import { isObject } from "../typeHelper"

export const generateGlobalData = (globalData: any) => {
  const clonedGlobalData = klona(globalData)
  const $dynamicAttrPaths: string[] = []
  if (isObject(globalData)) {
    Object.keys(globalData).forEach((key) => {
      if (hasDynamicStringSnippet(globalData[key])) {
        $dynamicAttrPaths.push(key)
      }
    })
  }
  clonedGlobalData.$dynamicAttrPaths = $dynamicAttrPaths
  return clonedGlobalData
}
