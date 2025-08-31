import { createMachine, setup, assign, spawnChild } from "xstate"

export const widgetMachine = setup({
  types: {} as any,
  actions: {
    executeAction: assign((context, event) => {})
  },
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      triggerPropertyName: "onClick",
      dynamicString: 'this.props.onClick',
      event: {
        type: 'EventType.ON_CLICK',
        callback: 'this.handleActionComplete'
      },
      ...input,

    }
  },
  on: {
    'EXECUTE_ACTION': {
      actions: ['executeAction']
    }
  }
})
