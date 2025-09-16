import { assign, enqueueActions, setup, raise } from "xstate"
import { layoutOptions } from "./flexlayout.store"
import { Actions, DockLocation, Model } from "#modules/flex-layout"

export const flexLayoutInstanceMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    setLayoutConfig: assign(({ context, event }: any) => {
      const name = event?.payload?.name || "simple"
      const props = layoutOptions[name]
      context.layout.config = {
        name: name,
        props: props,
      }
    }),

    createLayoutModelFromJson: assign(({ context }: any) => {
      context.layout.model = Model.fromJson(context.layout.config.props)
    }),

    addTab: assign(({ context, event }: any) => {
      const node = event.payload
      context.layout.model?.doAction(
        Actions.addNode(
          {
            component: "widget-placeholder",
            name: "New Tab " + (Math.floor(Math.random() * 99) + 1),
          },
          node.getId(),
          DockLocation.CENTER,
          -1,
          true,
        ),
      )
    }),
  },
  actors: {},
  guards: {},
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      layout: {
        config: {
          name: "simple",
          props: {
            global: layoutOptions.simple.global,
            borders: layoutOptions.simple.borders,
            layout: layoutOptions.simple.layout,
          },
        },
        model: null,
      },
      ...input,
    }
  },
  states: {
    idle: {
      on: {
        onLoad: {
          target: "loading",
          actions: ["setLayoutConfig"],
        },
      },
    },
    loading: {
      entry: enqueueActions(({ context, enqueue }) => {
        enqueue("createLayoutModelFromJson")
      }),
      always: {
        target: "ready",
      },
    },
    ready: {
      on: {
        onRenderTab: {
          entry: enqueueActions(({ enqueue, event }) => {
            console.log("---onRenderTab----", {
              enqueue,
              event,
            })
          }),
        },

        addTabEvent: {
          actions: ["addTab"],
        },
      },
    },
  },
})
