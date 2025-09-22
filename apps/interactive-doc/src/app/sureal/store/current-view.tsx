import { createStoreHook } from "@xstate/store/react"

export const useCurrentViewStore: any = createStoreHook({
  context: {
    viewId: 'dashboard',
    sidebarOffset: 190,
    sidebarMode: 'wide',
    queryOrientation: "horizontal", //horizontal | "vertical"
    variablesOrientation: "vertical", //horizontal | "vertical"

  },
  on: {
    setViewId: (context, event: { viewId: any }) => ({
      ...context,
      viewId: event.viewId,
    }),
    setQueryOrientation: (context) => ({
      ...context,
      queryOrientation: context.queryOrientation === "horizontal" ? "vertical" : "horizontal",
      variablesOrientation: context.queryOrientation === "horizontal" ? "vertical" : "horizontal",
    }),
  }
})

