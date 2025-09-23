import { createStore } from "@xstate/store"
import { databaseStoreSamples, configStoreSamples } from "./data-samples"

export const databaseStore = createStore({
  context: databaseStoreSamples,
  on: {

  },
})


export const configStore = createStore({
  context: configStoreSamples,
  on: {
  },
})


export const interfaceStore = createStore({
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
  },
  on: {
  },
})
