import { createMachine, setup, assign, spawnChild, enqueueActions, fromPromise } from "xstate"
import { Ok, Result } from "ts-results"

export const actionsMachine = setup({
  types: {} as any,
  actions: {
    initiateActionTriggerExecution: assign(({ context, event }) => {
      const { event: payloadEvent, source, triggerPropertyName } = event.payload

      console.log("initiateActionTriggerExecution---", event.payload)
    }),
    executeAppAction: assign(({ context, event }) => {
      const {
        dynamicString,
        event: { type },
        source,
        triggerPropertyName,
      } = event.payload

      if (!dynamicString || typeof dynamicString !== "string") {
        console.log("Attempted to execute action with invalid dynamicString: ", event.payload)
      }
      return
    }),
    evaluateAndExecuteDynamicTrigger: assign(({ context, event }) => {
      const {
        dynamicString,
        event: { type },
        source,
        triggerPropertyName,
      } = event.payload

      if (!dynamicString || typeof dynamicString !== "string") {
        console.log("Attempted to execute action with invalid dynamicString: ", event.payload)
      }
      return
    }),
    updateContext: assign(({ context, event }) => {
      context.lastEvent = event
      context.payload = event.payload || {}
    }),

    getWidget: assign(({ context, event }) => {}),
    getUsedWidgetTypes: assign(({ context, event }) => {
      context.lastEvent = event
      context.payload = event.payload || {}
    }),
    getAllUniqueWidgetTypesInUiModules: assign(({ context, event }) => {
      context.lastEvent = event
      context.payload = event.payload || {}
    }),
    getAppMode: assign(({ context, event }) => {}),
    getRegisteredWidgetsCount: assign(({ context, event }) => {}),
    incrementWidgetConfigsVersion: assign(({ context, event }) => {}),
  },
  actors: {
    loadWidget: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),
    loadAllWidgets: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),

    executeAppActionFn: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),

    getAppDetails: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),

    clearAllWidgetFactoryCache: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),

    withBaseWidgetHOC: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),
    widgetFactoryInitializer: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({})
    }),
  },
  guards: {
    isDynamicString: (({ context }: any) => {
      const { dynamicString } = context.payload
      return !!dynamicString && typeof dynamicString === "string"
    }) as any,
    hasWidgetsToRegister: (({ context }: any) => {
      return true
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
          target: "initiatingActionTriggerExecution",
        },
      },
    },
    initiatingActionTriggerExecution: {
      entry: [
        {
          actions: ["initiateActionTriggerExecution"],
          target: "executingAppAction",
        },
      ],
    },
    executingAppAction: {
      entry: [
        {
          guard: "isDynamicString",
          actions: ["executeAppAction"],
          target: "evaluatingAndExecutingDynamicTrigger",
        },
        {
          target: "idle",
        },
      ],
    },

    initiateActionTriggerExecutionState: {
      entry: [
        {
          guard: "isDynamicString",
          target: "executeAppActionState",
        },
        {
          target: "idle",
        },
      ],
    },
    executeAppActionState: {
      invoke: "executeAppActionFn",
      onDone: {
        target: "evaluatingAndExecutingDynamicTrigger",
      },
      onError: {
        target: "idle",
      },
    },

    evaluatingAndExecutingDynamicTrigger: {
      entry: [
        {
          target: "gettingUnevalTreeWithWidgetsRegistered",
        },
      ],
    },

    gettingUnevalTreeWithWidgetsRegistered: {
      entry: [
        {
          target: "loadingAndRegisteringOnlyCanvasWidgets",
        },
      ],
    },

    loadingAndRegisteringOnlyCanvasWidgets: {
      entry: enqueueActions(({ context, event, enqueue }) => {
        enqueue("getUsedWidgetTypes")
        enqueue("getAllUniqueWidgetTypesInUiModules")
      }),
      always: {
        target: "loadingWidget",
      },
    },

    loadingWidget: {
      entry: [],
    },

    widgetsRegistrationInitiated: {
      entry: [
        {
          actions: ["getRegisteredWidgetsCount"],
          target: "widgetsRegistrationProcessing",
        },
      ],
    },
    widgetsRegistrationProcessing: {
      entry: [
        {
          guard: "hasWidgetsToRegister",
          target: "widgetRegistration",
        },
        {
          target: "idle",
        },
      ],
    },
    widgetRegistration: {
      entry: enqueueActions(({ context, event, enqueue, check }) => {
        if (check({ type: "hasWidgetsToRegister" })) {
          enqueue("withBaseWidgetHOC")
          enqueue("widgetFactoryInitializer")
          enqueue("incrementWidgetConfigsVersion")
        }
      }),
      always: {
        target: "widgetsRegistrationProcessing",
      },
    },
  },
})

/*
function initiateActionTriggerExecution {

  if !guard(dynamicString) return

  //
  // loadAndRegisterOnlyCanvasWidgets
  //
  const widgetTypes = getUsedWidgetTypesSelector();
  const uiModuleTypes = getAllUniqueWidgetTypesInUiModulesSelector();
  const uniqueWidgetTypes = [...uiModuleTypes, ...widgetTypes, "SKELETON_WIDGET"]
  const unregisteredWidgetTypes = uniqueWidgetTypes.filter
  if (!unregisteredWidgetTypes.length) return []
  const loadedWidgets = unregisteredWidgetTypes.map( await loadWidget())

  //
  // appDetails
  //
  const appDetails = {
   pageId: state.entities.pageList.currentPageId,
    appId: state.ui.applications.currentApplication?.id || "",
    appMode,
    appName: state.ui.applications.currentApplication?.name || "",
    isExampleApp: state.ui.applications.currentApplication?.appIsExample || false,
    instanceId: state.organization?.instanceId,
  }

  //
  // registerWidgets
  //
  loadedWidgets.forEach(widget) => {
    WidgetFactory.initialize(widget) // registerWidget
  }

  //
  // getUnevalTreeWithWidgetsRegistered
  //
  const unEvalTree = getUnevaluatedDataTreeSelector();
  const evalWorkerResponse = await evalWorker()
  const { errors = [] } = response;


  //
  // transformTriggerEvalErrors
  //
  const transformedErrors = errors


  //
  // showExecutionErrors
  //
  if (transformedErrors.length) {
    for (const error of errors) {
      const errorMessage = error.message
      showToastOnExecutionError(errorMessage)
    }}


  //
  // logDynamicTriggerExecution
  //
  if !triggerMeta.EVENT_EXECUTION => return
  const isUnsuccessfulExecution = errors > 0
  const widget = state.entities.canvasWidgets[widgetId]
  const dynamicPropertyPathList = widget?.dynamicPropertyPathList
  const isJSToggled = !!dynamicPropertyPathList?.find((property) => property.key === triggerMeta.triggerPropertyName)
  logEvent(appId, appMode, isUnsuccessfulExecution....)


  //
  // return
  //
  return evalWorkerResponse

}


*/
