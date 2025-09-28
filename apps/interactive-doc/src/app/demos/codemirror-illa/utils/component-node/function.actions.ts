import { DynamicAttrPathActions } from "./constants"

export const generateDynamicAttrPaths = (current: string[], update: any): string[] => {
  if (update.action === DynamicAttrPathActions.ADD) {
    current.push(update.attrPath)
  } else if (update.action === DynamicAttrPathActions.REMOVE) {
    current = current.filter((path) => path !== update.attrPath)
  }
  return current
}
