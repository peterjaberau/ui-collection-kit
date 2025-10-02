import { isTextBlock, isSpan } from "#actor-portable-text/packages/schema"
import {
  getSelectionStartPoint,
  getSelectionEndPoint,
  getBlockKeyFromSelectionPoint,
  getChildKeyFromSelectionPoint,
} from "#actor-portable-text/packages/editor/selectors"
import { parseBlock } from './parsers'
import { defaultKeyGenerator } from './public'


export function sliceBlocks({ context, blocks }: any) {
  const slice: any[] = []

  if (!context.selection) {
    return slice
  }

  let startBlock: any
  const middleBlocks: any[] = []
  let endBlock: any

  const startPoint = getSelectionStartPoint(context.selection)
  const endPoint = getSelectionEndPoint(context.selection)
  const startBlockKey = getBlockKeyFromSelectionPoint(startPoint)
  const startChildKey = getChildKeyFromSelectionPoint(startPoint)
  const endBlockKey = getBlockKeyFromSelectionPoint(endPoint)
  const endChildKey = getChildKeyFromSelectionPoint(endPoint)

  if (!startBlockKey || !endBlockKey) {
    return slice
  }

  for (const block of blocks) {
    if (!isTextBlock(context, block)) {
      if (block._key === startBlockKey && block._key === endBlockKey) {
        startBlock = block
        break
      }
    }

    if (block._key === startBlockKey) {
      if (!isTextBlock(context, block)) {
        startBlock = block
        continue
      }

      if (startChildKey) {
        for (const child of block.children) {
          if (child._key === startChildKey) {
            if (isSpan(context, child)) {
              const text =
                child._key === endChildKey
                  ? child.text.slice(startPoint.offset, endPoint.offset)
                  : child.text.slice(startPoint.offset)

              startBlock = {
                ...block,
                children: [
                  {
                    ...child,
                    text,
                  },
                ],
              }
            } else {
              startBlock = {
                ...block,
                children: [child],
              }
            }

            if (startChildKey === endChildKey) {
              break
            }
            continue
          }

          if (startBlock && isTextBlock(context, startBlock)) {
            if (endChildKey && child._key === endChildKey && isSpan(context, child)) {
              startBlock.children.push({
                ...child,
                text: child.text.slice(0, endPoint.offset),
              })
            } else {
              startBlock.children.push(child)
            }

            if (block._key === endBlockKey && endChildKey && child._key === endChildKey) {
              break
            }
          }
        }

        if (startBlockKey === endBlockKey) {
          break
        }

        continue
      }

      startBlock = block

      if (startBlockKey === endBlockKey) {
        break
      }
    }

    if (block._key === endBlockKey) {
      if (!isTextBlock(context, block)) {
        endBlock = block
        break
      }

      if (endChildKey) {
        endBlock = {
          ...block,
          children: [],
        }

        for (const child of block.children) {
          if (endBlock && isTextBlock(context, endBlock)) {
            if (child._key === endChildKey && isSpan(context, child)) {
              endBlock.children.push({
                ...child,
                text: child.text.slice(0, endPoint.offset),
              })

              break
            }

            endBlock.children.push(child)

            if (endChildKey && child._key === endChildKey) {
              break
            }
          }
        }

        break
      }

      endBlock = block

      break
    }

    if (startBlock) {
      middleBlocks.push(
        parseBlock({
          context: {
            ...context,
            keyGenerator: defaultKeyGenerator,
          },
          block,
          options: { removeUnusedMarkDefs: true, validateFields: false },
        }) ?? block,
      )
    }
  }

  const parsedStartBlock = startBlock
    ? parseBlock({
      context: {
        ...context,
        keyGenerator: defaultKeyGenerator,
      },
      block: startBlock,
      options: { removeUnusedMarkDefs: true, validateFields: false },
    })
    : undefined

  const parsedEndBlock = endBlock
    ? parseBlock({
      context: {
        ...context,
        keyGenerator: defaultKeyGenerator,
      },
      block: endBlock,
      options: { removeUnusedMarkDefs: true, validateFields: false },
    })
    : undefined

  return [...(parsedStartBlock ? [parsedStartBlock] : []), ...middleBlocks, ...(parsedEndBlock ? [parsedEndBlock] : [])]
}
