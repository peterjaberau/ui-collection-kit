import { createMachine, setup, assign, spawnChild } from "xstate"

export const triggerMachine = setup({
  types: {} as any,
  actions: {
    initiateActionTriggerExecution: assign(({ context, event, system }) => {
      const { event: payloadEvent, source, triggerPropertyName } = event.payload

      const entitiesActorRef = system.get("entities")


      console.log("initiateActionTriggerExecution---", {
        payload: event.payload,
        entitiesActorRef: entitiesActorRef
      })
    }),
    updateContext: assign(({ context, event }) => {
      context.lastEvent = event
      context.payload = event.payload || {}
    }),

  },
  actors: {},
  guards: {
    isDynamicString: (({ context }: any) => {
      const { dynamicString } = context.payload
      return !!dynamicString && typeof dynamicString === "string"
    }) as any,
  },
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      payload: {},
      lastEvent: null,
      ...input,
    }
  },
  states: {
    idle: {
      on: {
        EXECUTE_TRIGGER_REQUEST: {
          actions: ["updateContext"],
          target: "executing",
        },
      },
    },
    executing: {
      always: [
        {
          guard: "isDynamicString",
          actions: "initiateActionTriggerExecution",
          target: "idle",
        },
        {
          target: "idle",
        },
      ],
    }
  }
})
