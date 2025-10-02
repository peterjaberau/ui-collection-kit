import { fromCallback } from "xstate"

export async function updateValue({ context, sendBack, slateEditor, streamBlocks, value }: any) {
  let doneSyncing = false
  let isChanged = false
  let isValid = true

  const hadSelection = !!slateEditor.selection

  // If empty value, remove everything in the editor and insert a placeholder block
  if (!value || value.length === 0) {
    console.log("Value is empty")
    // Editor.withoutNormalizing(slateEditor, () => {
    //   withoutSaving(slateEditor, () => {
    //     withRemoteChanges(slateEditor, () => {
    //       withoutPatching(slateEditor, () => {
    //         if (doneSyncing) {
    //           return
    //         }
    //
    //         if (hadSelection) {
    //           Transforms.deselect(slateEditor)
    //         }
    //
    //         const childrenLength = slateEditor.children.length
    //
    //         slateEditor.children.forEach((_, index) => {
    //           Transforms.removeNodes(slateEditor, {
    //             at: [childrenLength - 1 - index],
    //           })
    //         })
    //
    //         Transforms.insertNodes(
    //           slateEditor,
    //           slateEditor.pteCreateTextBlock({decorators: []}),
    //           {at: [0]},
    //         )
    //
    //         // Add a new selection in the top of the document
    //         if (hadSelection) {
    //           Transforms.select(slateEditor, [0, 0])
    //         }
    //       })
    //     })
    //   })
    // })
    isChanged = true
  }
  // Remove, replace or add nodes according to what is changed.
  if (value && value.length > 0) {
    const slateValueFromProps: any = {}

    if (streamBlocks) {
      await new Promise<void>((resolve) => {
        resolve()
      })
    } else {
      //Editor.withoutNormalizing
    }
  }

  if (!isValid) {
    console.log("Invalid value, returning")
    doneSyncing = true
    sendBack({ type: "done syncing", value })
    return
  }

  if (isChanged) {
    console.log("Server value changed, syncing editor")
    try {
      slateEditor.onChange()
    } catch (err) {
      console.error(err)
      sendBack({
        type: "invalid value",
        resolution: null,
        value,
      })
      doneSyncing = true
      sendBack({ type: "done syncing", value })
      return
    }
    if (hadSelection && !slateEditor.selection) {
      // Transforms.select(slateEditor, {
      //   anchor: {path: [0, 0], offset: 0},
      //   focus: {path: [0, 0], offset: 0},
      // })
      slateEditor.onChange()
    }
    sendBack({ type: "value changed", value })
  } else {
    console.log("Server value and editor value is equal, no need to sync.")
  }

  doneSyncing = true
  sendBack({ type: "done syncing", value })
}

export const syncValueCallback: any = ({ sendBack, input }: any) => {
  updateValue({
    context: input.context,
    sendBack,
    slateEditor: input.slateEditor,
    value: input.value,
    streamBlocks: input.streamBlocks,
  })
}

export const syncValueLogic = fromCallback(syncValueCallback)

export function fromSlateValue(value: any, textBlockType: any, keyMap: any) {
  return {} as any
}

export function createEditorDom(sendBack: (event: any) => void, slateEditor: any): any {
  return {
    getBlockNodes: (snapshot: any) => getBlockNodes(slateEditor, snapshot),
    getChildNodes: (snapshot: any) => getChildNodes(slateEditor, snapshot),
    setDragGhost: ({ event, ghost }: any) => setDragGhost({ sendBack, event, ghost }),
  }
}

export function createEditorSnapshot({ converters, editor, keyGenerator, readOnly, schema }: any) {
  // const selection = editor.selection
  //   ? slateRangeToSelection({
  //     schema,
  //     editor,
  //     range: editor.selection,
  //   })
  //   : null

  const selection = null

  const context = {
    converters,
    keyGenerator,
    readOnly,
    schema,
    selection,
    value: editor.value,
  } as any

  return {
    blockIndexMap: editor.blockIndexMap,
    context,
    decoratorState: editor.decoratorState,
  } as any
}

export function getBlockNodes(slateEditor: any, snapshot: any) {
  if (!snapshot.context.selection) {
    return []
  }

  const range: any[] = []

  if (!range) {
    return []
  }

  try {
    const blockEntries: any = []
    return blockEntries
    // return blockEntries.map(([blockNode]: any) =>
    // DOMEditor.toDOMNode(slateEditor, blockNode),
    // )
  } catch {
    return []
  }
}

export function getChildNodes(slateEditor: any, snapshot: any) {
  if (!snapshot.context.selection) {
    return []
  }

  try {
    const childEntries: any[] = []
    return childEntries

    // DOMEditor.toDOMNode(slateEditor, childNode),
  } catch {
    return []
  }
}

export function setDragGhost({ sendBack, event, ghost }: any) {
  event.originEvent.dataTransfer.setDragImage(ghost.element, ghost.x, ghost.y)

  sendBack({
    type: "set drag ghost",
    ghost: ghost.element,
  })
}

export function rerouteExternalBehaviorEvent({ event, slateEditor }: any) {
  switch (event.type) {
    case "blur":
      return {
        type: "blur",
        editor: slateEditor,
      }

    case "focus":
      return {
        type: "focus",
        editor: slateEditor,
      }

    case "insert.block object":
      return {
        type: "behavior event",
        behaviorEvent: {
          type: "insert.block",
          block: {
            _type: event.blockObject.name,
            ...(event.blockObject.value ?? {}),
          },
          placement: event.placement,
        },
        editor: slateEditor,
      }

    default:
      return {
        type: "behavior event",
        behaviorEvent: event,
        editor: slateEditor,
      }
  }
}
