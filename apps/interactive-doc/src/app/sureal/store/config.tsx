import { unique } from "radash"
import { createStore } from "@xstate/store"
import { configStoreSamples } from "./data"
import { MAX_HISTORY_SIZE, SANDBOX } from "../constants"
import { createBaseConfig, createBaseQuery } from "./defaults"
import { newId, uniqueName } from "../utils/helpers"
import { configStoreDemo } from './data'
import { createStoreHook } from "@xstate/store/react"

function modifyConnection(context: any, connection: string, modifier: any) {
  if (connection === SANDBOX) {
    return {
      sandbox: {
        ...context.sandbox,
        ...modifier(context.sandbox),
        id: SANDBOX,
      },
    }
  }

  return {
    connections: context.connections.map((con: any) => {
      return con.id === connection ? { ...con, ...modifier(con), id: con.id } : con
    }),
  }
}

export const useConfigStore = createStoreHook({
  context: {
    ...createBaseConfig(),
  } as any,
  on: {
    loadSample: (context) => ({
      context: configStoreDemo
    }),

    applyPreference: (context, event: { updater: any; value: any }) => {
      const { updater, value } = event
      updater(context, value)
      return context
    },

    addConnection: (context, event: { connection: any }) => ({
      ...context,
      connections: [...context.connections, event.connection],
    }),

    removeConnection: (context, event: { connectionId: any }) => ({
      ...context,
      connections: context.connections.filter((connection: any) => connection.id !== event.connectionId),
    }),

    updateConnection: (context, event: { connection: any }) => {
      return {
        ...context,
        ...modifyConnection(context, event.connection.id, () => event.connection),
      }
    },

    setConnections: (context, event: { connections: any }) => ({
      ...context,
      connections: event.connections,
    }),

    setActiveResource: (context, event: { activeResource: any }) => ({
      ...context,
      activeResource: event.activeResource,
    }),

    addQueryTab: (context, event: { connectionId: any; options: any }) => ({
      ...context,
      ...modifyConnection(context, event.connectionId, (current: any) => {
        const tabId = newId()
        const existing = current.queries.map((query: any) => query.name ?? "")
        const queryName = uniqueName(event.options?.name || "New query", existing)

        return {
          ...context,
          queries: [
            ...current.queries,
            {
              ...createBaseQuery(context.settings, event.options?.type),
              query: event.options?.query || "",
              variables: event.options?.variables || "{}",
              name: queryName,
              id: tabId,
            },
          ],
          activeQuery: tabId,
        }
      }),
    }),

    removeQueryTab: (context, event: { connectionId: any; queryId: any }) => ({
      ...context,
      ...modifyConnection(context, event.connectionId, (current: any) => {
        const index = current.queries.findIndex((query: any) => query.id === event.queryId)

        if (index < 0) {
          return {}
        }

        let activeQuery = current.activeQuery

        if (current.activeQuery === event.queryId) {
          activeQuery =
            index === current.queries.length - 1 ? current.queries[index - 1]?.id : current.queries[index + 1]?.id
        }

        return {
          queries: current.queries.toSpliced(index, 1),
          activeQuery,
        }
      }),
    }),

    updateQueryTab: (context, event: { connectionId: any; connection: any }) => ({
      ...context,
      ...modifyConnection(context, event.connectionId, (current: any) => {
        const index = current.queries.findIndex((query: any) => query.id === event.connection.id)

        if (index < 0) {
          return {}
        }

        return {
          queries: current.queries.with(index, {
            ...current.queries[index],
            connection: event.connection,
          }),
        }
      }),
    }),

    setActiveQueryTab: (context, event: { connectionId: any; tabId: any }) => ({
      ...context,
      ...modifyConnection(context, event.connectionId, () => ({
        activeQuery: event.tabId,
      })),
    }),

    saveQuery: (context, event: { query: any }) => {
      const savedQueries = [...context.savedQueries]
      const index = savedQueries.findIndex((entry) => entry.id === event.query.id)

      if (index < 0) {
        savedQueries.push(event.query)
      } else {
        savedQueries[index] = event.query
      }

      return {
        ...context,
        savedQueries,
      }
    },

    removeSavedQuery: (context, event: { savedId: any }) => ({
      ...context,
      savedQueries: context.savedQueries.filter((entry: any) => entry.id !== event.savedId),
    }),

    setSavedQueries: (context, event: { savedQueries: any }) => ({
      ...context,
      savedQueries: event.savedQueries,
    }),

    setLastPromptedVersion: (context, event: { lastPromptedVersion: any }) => ({
      ...context,
      lastPromptedVersion: event.lastPromptedVersion,
    }),

    addHistoryEntry: (context, event: { connectionId: any; entry: any }) => ({
      ...context,
      ...modifyConnection(context, event.connectionId, (current: any) => {
        const queryHistory = [...current.queryHistory]

        queryHistory.push(event.entry)

        if (queryHistory.length > MAX_HISTORY_SIZE) {
          queryHistory.shift()
        }

        return {
          queryHistory,
        }
      }),
    }),

    toggleTablePin: (context, event: { connectionId: any; table: any }) => ({
      ...context,
      ...modifyConnection(context, event.connectionId, (current: any) => {
        const pinnedTables = [...current.pinnedTables]
        const index = pinnedTables.indexOf(event.table)

        if (index < 0) {
          pinnedTables.push(event.table)
        } else {
          pinnedTables.splice(index, 1)
        }

        return {
          pinnedTables,
        }
      }),
    }),

    setFeatureFlag:
      (context, event: { key: any; value: any }) =>
      ({ featureFlags }: any) => ({
        ...context,
        featureFlags: {
          ...featureFlags,
          [event.key]: event.value,
        },
      }),

    updateBehaviorSettings: (context, event: { settings: any }) => ({
      ...context,
      settings: {
        ...context.settings,
        behavior: {
          ...context.settings.behavior,
          ...event.settings,
        },
      },
    }),

    updateAppearanceSettings: (context, event: { settings: any }) => ({
      ...context,
      settings: {
        ...context.settings,
        appearance: {
          ...context.settings.appearance,
          ...event.settings,
        },
      },
    }),

    updateTemplateSettings: (context, event: { settings: any }) => ({
      ...context,
      settings: {
        ...context.settings,
        templates: {
          ...context.settings.templates,
          ...event.settings,
        },
      },
    }),

    updateServingSettings: (context, event: { settings: any }) => ({
      ...context,
      settings: {
        ...context.settings,
        serving: {
          ...context.settings.serving,
          ...event.settings,
        },
      },
    }),

    updateCloudSettings: (context, event: { settings: any }) => ({
      ...context,
      settings: {
        ...context.settings,
        cloud: {
          ...context.settings.cloud,
          ...event.settings,
        },
      },
    }),

    updateGtmSettings: (context, event: { settings: any }) => ({
      ...context,
      settings: {
        ...context.settings,
        gtm: {
          ...context.settings.gtm,
          ...event.settings,
        },
      },
    }),

    pushCommand: (context, event: { command: any }) => {
      const commandHistory = [...context.commandHistory]
      const index = commandHistory.indexOf(event.command)

      if (index >= 0) {
        commandHistory.splice(index, 1)
      }

      commandHistory.unshift(event.command)

      if (commandHistory.length > 3) {
        commandHistory.pop()
      }

      return {
        ...context,
        commandHistory,
      }
    },

    setPreviousVersion: (context, event: { previousVersion: any }) => ({
      ...context,
      previousVersion: event.previousVersion,
    }),

    updateViewedNews: (context) => ({
      ...context,
      lastViewedNewsAt: Date.now(),
    }),

    completeOnboarding: (context, event: { key: any }) => ({
      ...context,
      onboarding: unique([...context.onboarding, event.key]),
    }),

    resetOnboardings: (context) => ({
      ...context,
      onboarding: [],
    }),

    setOpenDesignerPanels: (context, event: { openDesignerPanels: any }) => ({
      ...context,
      openDesignerPanels: event.openDesignerPanels,
    }),

    setKeybinding: (context, event: { command: any; action: any }) => {
      return {
        ...context,
        keybindings: { ...context.keybindings, [event.command]: event.action },
      }
    },

    removeKeybinding: (context, event: { command: any }) => {
      const keybindings = { ...context.keybindings }
      delete keybindings[event.command]
      return {
        ...context,
        keybindings,
      }
    },
  },
})
