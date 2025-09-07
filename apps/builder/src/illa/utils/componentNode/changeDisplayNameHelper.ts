import { DisplayNameGenerator } from "../generators/generateDisplayName"

export const changeDisplayNameHelperWhenUndoRedo = (
  node: any,
) => {
  const newDisplayName = DisplayNameGenerator.updateOrGenerateDisplayName(
    node.displayName,
  )

  node.displayName = newDisplayName

  const childrenNode =
    node.childrenNode?.map((item) => {
      item.parentNode = newDisplayName
      return changeDisplayNameHelperWhenUndoRedo(item)
    }) ?? []

  node.childrenNode = childrenNode

  return node
}
