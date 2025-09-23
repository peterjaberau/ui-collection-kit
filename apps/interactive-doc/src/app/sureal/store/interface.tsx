import { createStore } from "@xstate/store"
import { interfaceStoreDemo } from './data'
import { createStoreHook } from "@xstate/store/react"

export const useInterfaceStore = createStoreHook({
  context: {
    title: "",
    colorScheme: "dark",
    availableUpdate: null,
    showAvailableUpdate: false,
    showConnectionEditor: false,
    isCreatingConnection: false,
    editingConnectionId: "",
    showTableCreator: false,
    liveTabs: new Set<string>(),
    liveQueryMessages: {},
    showAccessSignup: false,
    showChangelogAlert: false,
    hasReadChangelog: false,
    showQueryVariables: false,
    showGraphqlVariables: false,
    overlaySidebar: false,
    docsTable: "",
  } as any,
  on: {
    loadSample: (context) => ({
      context: interfaceStoreDemo
    }),

    setWindowTitle: (context, event: { title: any }) => ({
      ...context,
      title: event.title,
    }),

    setColorScheme: (context, event: { colorScheme: any }) => ({
      ...context,
      colorScheme: event.colorScheme,
    }),

    setAvailableUpdate: (context, event: { availableUpdate: any; showAvailableUpdate: any }) => ({
      ...context,
      availableUpdate: event.availableUpdate,
      showAvailableUpdate: event.showAvailableUpdate,
    }),

    hideAvailableUpdate: (context) => ({
      ...context,
      showAvailableUpdate: false,
    }),

    openTableCreator: (context) => ({
      ...context,
      showTableCreator: true,
    }),

    closeTableCreator: (context) => ({
      ...context,
      showTableCreator: false,
    }),

    setIsLive: (context, event: { id: any; live: any }) => {
      const liveTabs = new Set(context.liveTabs)

      const { id, live } = event

      if (live) {
        liveTabs.add(id)
      } else {
        liveTabs.delete(id)
      }

      return {
        ...context,
        liveTabs,
      }
    },

    pushLiveQueryMessage: (context, event: { id: any; message: any }) => ({
      ...context,
      liveQueryMessages: {
        ...context.liveQueryMessages,
        [event.id]: [event.message, ...(context.liveQueryMessages[event.id] || []).slice(0, 50)],
      },
    }),

    clearLiveQueryMessages: (context, event: { id: any }) => {
      const { id } = event

      const liveQueryMessages = { ...context.liveQueryMessages }

      delete liveQueryMessages[id]

      return {
        ...context,
        liveQueryMessages,
      }

      // ...context,
      // variables: event.value,
    },

    openAccessSignup: (context) => ({
      ...context,
      showAccessSignup: true,
    }),

    closeAccessSignup: (context) => ({
      ...context,
      showAccessSignup: false,
    }),

    showChangelog: (context) => ({
      ...context,
      showChangelogAlert: true,
    }),

    readChangelog: (context) => ({
      ...context,
      hasReadChangelog: true,
    }),

    setOverlaySidebar: (context, event: { overlaySidebar: any }) => ({
      ...context,
      overlaySidebar: event.overlaySidebar,
    }),

    setDocsTable: (context, event: { docsTable: any }) => ({
      ...context,
      docsTable: event.docsTable,
    }),
  },
})
