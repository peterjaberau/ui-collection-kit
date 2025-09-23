import { createStoreHook } from "@xstate/store/react"


export const useSessionStore = createStoreHook({
  context: {
    current: {
      view: "dashboard",
      activeQuery: "KSCG0Cp7D"
    },
  } as any,
  on: {
    setCurrentView: (context, event: { view: any }) => ({
      ...context,
      current: {
        ...context.current,
        view: event.view,
      },

    }),
    setActiveQueryId: (context, event: { activeQuery: any }) => ({
      ...context,
      current: {
        ...context.current,
        activeQuery: event.activeQuery

      },

    }),


  },
})
