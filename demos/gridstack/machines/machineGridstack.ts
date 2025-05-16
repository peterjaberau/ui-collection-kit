import {
  setup,
  raise,
  spawnChild,
  sendTo,
  assign,
  fromPromise,
  fromCallback,
} from "xstate";
import { Ok } from "ts-results";
import { defaultPreset, definitions, options } from "./machineConfigGridstack.ts";
import { v4 as uuidv4 } from "uuid";
import {
  handlerGetNewSessionActor,
  handlerLoadExampleActor,
  isNewSessionLoadedGuard,
} from "./machineActionsGridstack.ts";

export const machineGridstack = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    setterNewSessionAction: assign(({ context, event }) => {
      const dashboardPreset = event.output.val;
      return {
        ...context,
        dashboard: {
          ...context.definitions.defaultGridOptions,
          ...dashboardPreset,
        },
      }
    }),
    addWidgetAction: assign(({ context, event }) => {
      console.log('action.addWidgetAction----', { context: context, event: event });
    }),
    addCustomAction: assign(({ context, event }) => {
      console.log('action.addCustomAction----', { context: context, event: event });
    }),





    //ReactGridLayoutApp
    renameCanvasAction: assign(({ context, event }) => {
      console.log('action.renameCanvasAction----', { context: context, event: event });
    }),
    setterLoadExampleAction: assign(({ context, event }) => {
      console.log('action.setterLoadExampleAction----', { context: context, event: event });
    }),
    addCanvasAction: assign(({ context, event }) => {
      console.log('action.addCanvasAction----', { context: context, event: event });
    }),
    removeCanvasAction: assign(({ context, event }) => {
      console.log('action.removeCanvasAction----', { context: context, event: event });
    }),
    updateCanvasAction: assign(({ context, event }) => {
      console.log('action.updateCanvasAction----', { context: context, event: event });
    }),
    createWidgetAction: assign(({ context, event }) => {
      console.log('action.createWidgetAction----', { context: context, event: event });
    }),
    openWidgetPopoverAction: assign(({ context, event }) => {
      console.log('action.openWidgetPopoverAction----', { context: context, event: event });
    }),
    closeWidgetPopoverAction: assign(({ context, event }) => {
      console.log('action.closeWidgetPopoverAction----', { context: context, event: event });
    }),
    openLoadFromMenuPopoverAction: assign(({ context, event }) => {

        console.log('action.openLoadFromMenuPopoverAction----', { context: context, event: event });

    }),
    closeLoadFromMenuPopoverAction: assign(({ context, event }) => {
      console.log('action.closeLoadFromMenuPopoverAction----', { context: context, event: event });
    }),
    openGlobalJsonAction: assign(({ context, event }) => {
      console.log('action.openGlobalJsonAction----', { context: context, event: event });
    }),
    closeGlobalJsonAction: assign(({ context, event }) => {
      console.log('action.closeGlobalJsonAction----', { context: context, event: event });
    }),


    //CanvasHeader
    startEditingCanvasAction: assign(({ context, event }) => {
      console.log('action.startEditingCanvasAction----', { context: context, event: event });
    }),
    cancelEditingCanvasAction: assign(({ context, event }) => {
      console.log('action.cancelEditingCanvasAction----', { context: context, event: event });
    }),
    updateLocalCanvasNameAction: assign(({ context, event }) => {
      console.log('action.updateLocalCanvasNameAction----', { context: context, event: event });
    }),

    saveCanvasNameAction: assign(({ context, event }) => {

     console.log('action.saveCanvasNameAction----', { context: context, event: event });
    }),


    moveToCanvasAction: assign(({ context, event }) => {
      console.log('action.moveToCanvasAction----', { context: context, event: event });
    }),

    toggleSettingsCanvasAction: assign(({ context, event }) => {
      console.log('action.toggleSettingsCanvasAction----', { context: context, event: event });
    }),
    changeConfigCanvasAction: assign(({ context, event }) => {
     console.log('action.changeConfigCanvasAction----', { context: context, event: event });
    }),
    openWidgetCanvasPopoverAction: assign(({ context, event }) => {
      console.log('action.openWidgetCanvasPopoverAction----', { context: context, event: event });
    }),
    closeWidgetCanvasPopoverAction: assign(({ context, event }) => {
      console.log('action.closeWidgetCanvasPopoverAction----', { context: context, event: event });
    }),
    createWidgetFromCanvasHeaderAction: assign(({ context, event }) => {
      console.log('action.createWidgetFromCanvasHeaderAction----', { context: context, event: event });
    }),


  },
  actors: {
    handlerGetNewSessionActor,
    handlerLoadExampleActor,
  },
  guards: {
    isNewSessionLoadedGuard,
  },
}).createMachine({
  id: "machine-gridstack",
  initial: "idle",
  context: {
    definitions: {
      defaultGridOptions: definitions.defaultGridOptions,
    },
    dashboard: {},
    selected: {
      dashboardId: "showcase",
    },
    states: {
     session: {
       isFirstSessionLoaded: false,
     },
      render: {
       isMounted: false,
      }
    },
  } as any,
  states: {
    idle: {
      always: [
        {
          target: "stateNewSession",
          guard: "isNewSessionLoadedGuard",
        },
      ],
    },
    ready: {
      on: {
        //Gridstack
        ADD_WIDGET: {
          actions: "addWidgetAction",
        },


        //Gridstack Examples
        ADD_TEXT_WIDGET: {
          actions: "addWidgetAction",
        },
        ADD_SUBGRID_WIDGET: {
          actions: "addWidgetAction",
        },
        ADD_COMPLEX_CARD_WIDGET: {
          actions: "addWidgetAction",
        },
        ADD_COMPONENT_INFO: {
          actions: "addCustomAction",
        },
        ADD_COUNTER_WIDGET: {
          actions: "addCustomAction",
        },


        //ReactGridLayoutApp
        LOAD_EXAMPLE: {
          target: "stateLoadExample",
        },
        NEW_SESSION: {
          target: "stateNewSession",
        },
        REMOVE_CANVAS: {
          actions: "removeCanvasAction",
        },
        ADD_CANVAS: {
          actions: "addCanvasAction",
        },
        RENAME_CANVAS: {
          actions: "renameCanvasAction",
        },
        UPDATE_CANVAS: {
          actions: "updateCanvasAction",
        },
        CREATE_WIDGET: {
          actions: "createWidgetAction",
        },
        OPEN_WIDGET_POPOVER: {
          actions: "openWidgetPopoverAction",
        },
        CLOSE_WIDGET_POPOVER: {
          actions: "closeWidgetPopoverAction",
        },
        OPEN_LOAD_FROM_MENU_POPOVER: {
          actions: "openLoadFromMenuPopoverAction",
        },
        OPEN_GLOBAL_JSON: {
          actions: "openGlobalJsonAction",
        },
        CLOSE_GLOBAL_JSON: {
          actions: "closeGlobalJsonAction",
        },

        //CanvasHeader
        MOVE_TO_CANVAS: {
          actions: "moveToCanvasAction",
        },
        CANVAS_START_EDITING: {
          actions: "startEditingCanvasAction",
        },
        CANVAS_UPDATE_LOCAL_NAME: {
          actions: ["updateLocalCanvasNameAction"],
        },
        CANVAS_SAVE_NAME: {
          actions: ["saveCanvasNameAction", "cancelEditingCanvasAction"],
        },
        CANVAS_CANCEL_EDITING: {
          actions: "cancelEditingCanvasAction",
        },
        CANVAS_TOGGLE_SETTINGS: {
          actions: "toggleSettingsCanvasAction",
        },
        CANVAS_CONFIG_CHANGE: {
          actions: "changeConfigCanvasAction",
        },
        CANVAS_OPEN_WIDGET_POPOVER: {
          actions: "openWidgetCanvasPopoverAction",
        },
        CANVAS_CLOSE_WIDGET_POPOVER: {
          actions: "closeWidgetCanvasPopoverAction",
        },
        CANVAS_CREATE_WIDGET_FROM_CANVAS_HEADER: {
          actions: "createWidgetFromCanvasHeaderAction",
        },


      },
    },
    stateNewSession: {
      invoke: {
        src: "handlerGetNewSessionActor",
        id: "handlerGetNewSessionActor",
        input: ({ context, event }: any) => ({
          context: context,
          event: event,
        }),
        onDone: {
          target: "stateCompleted",
          actions: "setterNewSessionAction",
        },
      },
    },

    stateLoadExample: {
      invoke: {
        src: "handlerLoadExampleActor",
        id: "handlerLoadExampleActor",
        input: ({ context, event }: any) => ({
          context: context,
          event: event,
          params: { exampleId: event.params.exampleId },
        }),
        onDone: {
          target: "stateCompleted",
          actions: ["setterLoadExampleAction", "closeLoadFromMenuPopoverAction"],
        },
      },
    },

    stateCompleted: {
      always: [
        {
          target: "ready",
        },
      ],
    },
  },
});
