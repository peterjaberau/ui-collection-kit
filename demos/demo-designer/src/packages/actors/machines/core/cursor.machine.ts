import { createMachine, setup, assign, spawnChild, enqueueActions } from "xstate"
import { globalThisPolyfill, isValidNumber, requestIdle } from "#packages/shared"

const calcPositionDelta = (end: any, start: any): any => {
  return Object.keys(end || {}).reduce((buf, key) => {
    if (isValidNumber(end?.[key]) && isValidNumber(start?.[key])) {
      buf[key] = end[key] - start[key]
    } else {
      buf[key] = end[key]
    }
    return buf
  }, {})
}

export enum CursorStatus {
  Normal = "NORMAL",
  DragStart = "DRAG_START",
  Dragging = "DRAGGING",
  DragStop = "DRAG_STOP",
}

export enum CursorDragType {
  Move = "MOVE",
  Resize = "RESIZE",
  Rotate = "ROTATE",
  Scale = "SCALE",
  Translate = "TRANSLATE",
  Round = "ROUND",
}

export enum CursorType {
  Normal = "NORMAL",
  Selection = "SELECTION",
  Sketch = "SKETCH",
}

const DEFAULT_POSITION = {
  pageX: 0,
  pageY: 0,
  clientX: 0,
  clientY: 0,
  topPageX: 0,
  topPageY: 0,
  topClientX: 0,
  topClientY: 0,
}

export const cursorMachine = setup({
  types: {} as any,
  actions: {
    setStatus: assign(({ context, event }) => {
      context.status = event.params.status
    }),

    setPosition: assign(({ context, event }) => {
      context.dragAtomDelta = calcPositionDelta(context.position, event.position)
      context.position = { ...event.position }
      if (context.status === CursorStatus.Dragging) {
        context.dragStartToCurrentDelta = calcPositionDelta(context.position, context.dragStartPosition)
      }
    }),

    setDragStartPosition: assign(({ context, event }) => {
      if (event.position) {
        context.dragStartPosition = { ...event.position }
      } else {
        context.dragStartPosition = null
        context.dragStartToCurrentDelta = DEFAULT_POSITION
      }
    }),

    setDragType: assign(({ context, event }) => {}),
    setType: assign(({ context, event }) => {}),
    setStyle: assign(({ context, event }) => {}),
    setDragEndPosition: assign(({ context, event }) => {}),

    transformCoordinates: assign(({ context, event }) => {
      const { frameElement } = context.data?.view || {}
      if (frameElement && context.data.view !== globalThisPolyfill) {
        const frameRect = frameElement.getBoundingClientRect()
        const scale = frameRect.width / frameElement["offsetWidth"]
        context.data.topClientX = context.data.clientX * scale + frameRect.x
        context.data.topClientY = context.data.clientY * scale + frameRect.y
        context.data.topPageX = context.data.pageX + frameRect.x - context.data.view.scrollX
        context.data.topPageY = context.data.pageY + frameRect.y - context.data.view.scrollY
        const topElement = document.elementFromPoint(context.data.topPageX, context.data.topClientY)
        if (topElement !== frameElement) {
          context.data.target = topElement
        }
      } else {
        context.data.topClientX = context.data.clientX
        context.data.topClientY = context.data.clientY
        context.data.topPageX = context.data.pageX
        context.data.topPageY = context.data.pageY
      }
    }),
  },
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      data: input.data || {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        target: null,
        view: globalThisPolyfill,
      },

      type: CursorType.Normal,
      dragType: CursorDragType.Move,
      status: CursorStatus.Normal,
      position: DEFAULT_POSITION,
      dragAtomDelta: DEFAULT_POSITION,
      dragStartToCurrentDelta: DEFAULT_POSITION,
      dragStartToEndDelta: DEFAULT_POSITION,
    }
  },
  entry: [
    {
      type: "transformCoordinates",
    },
  ],
  on: {
    "mouse:move": {
      actions: enqueueActions(({ enqueue, context, check, event }) => {
        enqueue.assign(({ context, event }) => {
          if (event.status === CursorStatus.Dragging || event.status === CursorStatus.DragStart) {
            context.status = event.status
          } else {
            context.status = CursorStatus.Normal
          }
        })
        enqueue({ type: "setDragStartPosition", params: event.data })
      }),
    },

    "drag:start": {
      actions: enqueueActions(({ enqueue, context, check, event }) => {
        enqueue({ type: "setStatus", params: { status: CursorStatus.DragStart } })
        enqueue({ type: "setPosition", params: event.data })
      }),
    },

    "drag:move": {
      actions: enqueueActions(({ enqueue, context, check, event }) => {
        enqueue({ type: "setStatus", params: { status: CursorStatus.Dragging } })
        enqueue({ type: "setPosition", params: event.data })
      }),
    },

    "drag:stop": {
      actions: enqueueActions(({ enqueue, context, check, event }) => {
        enqueue({ type: "setStatus", params: { status: CursorStatus.DragStop } })
        enqueue({ type: "setDragEndPosition", params: event.data })
        enqueue({ type: "setDragStartPosition", params: null })
        requestIdle(() => {
          enqueue({ type: "setStatus", params: { status: CursorStatus.Normal } })
        })
      }),
    },
    "mouse:click": {},
    "mouse:dblclick": {},
  },
})
