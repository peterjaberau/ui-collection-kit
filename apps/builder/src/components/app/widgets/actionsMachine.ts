import { createMachine, setup, assign, log, enqueueActions } from "xstate"
import { initiateActionTriggerExecution } from "#components/app/widgets/actions"

/*
{
    "triggerPropertyName": "onClick",
    "dynamicString": "{{storeValue('localCalculatedVar', calculatedTxt.setText(Input1.text));}}",
    "event": {
      "type": "ON_CLICK"
    },
    "source": {
      "id": "tl8xbeqhua",
      "name": "btnCalculate"
    }
  }
 */

const executeTriggerMachine = setup({
  actions: {
    evaluateAndExecuteDynamicTrigger: assign(({ context, event }) => {

    }),

    getUnevalTreeWithWidgetsRegistered: assign(({ context, event }) => {

    }),

    executeActionTriggers: assign(({ context, event }) => {

    }),

  },

  guards: {
    isDynamicString: ({ context }) => {
      const { dynamicString } = context
      return !dynamicString || typeof dynamicString !== "string"
    },
  },
}).createMachine({
  initiate: "idle",
  context: ({ input }) => {
    return {
      payload: input.payload,
    }
  },
  states: {
    idle: {
      on: {
        EXECUTE_TRIGGER_REQUEST: {
          target: "actionExecutionStarted",
        },
      },
    },
    actionExecutionStarted: {
      always: [
        {
          guard: "isDynamicString",
          target: "evaluatingAndExecuting",
        },
        {
          target: "actionExecutionFailed",
        },
      ],
    },

    actionExecutionFailed: {
      entry: [
        {
          actions: log("action execution failed, invalid dynamic string"),
        },
      ],
      type: "final",
    },

    evaluatingAndExecuting: {
      entry: enqueueActions(({ context, event, enqueue, check }) => {

        enqueue('evaluateAndExecuteDynamicTrigger')

        enqueue('executeActionTriggers')




      }),
    },
  },
})
