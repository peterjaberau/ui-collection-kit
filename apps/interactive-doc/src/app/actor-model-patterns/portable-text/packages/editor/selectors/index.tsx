import { isKeyedSegment, sliceBlocks } from '../utils'

export const getSelectedValue: any = (snapshot: any) => {
  const selection = snapshot.context.selection

  if (!selection) {
    return []
  }

  const startPoint = getSelectionStartPoint(selection)
  const endPoint = getSelectionEndPoint(selection)
  const startBlockKey = getBlockKeyFromSelectionPoint(startPoint)
  const endBlockKey = getBlockKeyFromSelectionPoint(endPoint)

  if (!startBlockKey || !endBlockKey) {
    return []
  }

  const startBlockIndex = snapshot.blockIndexMap.get(startBlockKey)
  const endBlockIndex = snapshot.blockIndexMap.get(endBlockKey)

  if (startBlockIndex === undefined || endBlockIndex === undefined) {
    return []
  }

  const startBlock = snapshot.context.value.at(startBlockIndex)
  const slicedStartBlock = startBlock
    ? sliceBlocks({
      context: snapshot.context,
      blocks: [startBlock],
    }).at(0)
    : undefined

  if (startBlockIndex === endBlockIndex) {
    return slicedStartBlock ? [slicedStartBlock] : []
  }

  const endBlock = snapshot.context.value.at(endBlockIndex)
  const slicedEndBlock = endBlock
    ? sliceBlocks({
      context: snapshot.context,
      blocks: [endBlock],
    }).at(0)
    : undefined

  const middleBlocks = snapshot.context.value.slice(
    startBlockIndex + 1,
    endBlockIndex,
  )

  return [
    ...(slicedStartBlock ? [slicedStartBlock] : []),
    ...middleBlocks,
    ...(slicedEndBlock ? [slicedEndBlock] : []),
  ]
}

export function getSelectionStartPoint(selection: any) {
  if (!selection) {
    return null as any
  }

  return (
    selection.backward ? selection.focus : selection.anchor
  ) as any
}

export const getSelectionEndPoint: any = (snapshot: any) => {
  if (!snapshot.context.selection) {
    return undefined
  }

  return snapshot.context.selection.backward
    ? snapshot.context.selection.anchor
    : snapshot.context.selection.focus
}


export function getBlockKeyFromSelectionPoint(point: any) {
  const blockPathSegment = point.path.at(0)

  if (isKeyedSegment(blockPathSegment)) {
    return blockPathSegment._key
  }

  return undefined
}

export function getChildKeyFromSelectionPoint(point: any) {
  const childPathSegment = point.path.at(2)

  if (isKeyedSegment(childPathSegment)) {
    return childPathSegment._key
  }

  return undefined
}
