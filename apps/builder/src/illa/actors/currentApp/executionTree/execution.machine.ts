import { createMachine, setup, assign, spawnChild } from "xstate"
import { applyChange } from "deep-diff"
import { has, set } from "lodash"
import { executionInitialState } from "./execution.defaults"
import { CUSTOM_STORAGE_PREFIX } from "#illa/utils/storage"
import { isObject } from "#illa/utils/typeHelper"
import { stateMock } from "#illa/actors/mock"

export const executionMachine = setup({
  types: {} as any,
  actions: {
    clearLocalStorageInExecutionReducer: assign(({ context }) => {
      const newResult = { ...context.result, localStorage: {} }
      window.localStorage.removeItem(CUSTOM_STORAGE_PREFIX)
      return { ...context, result: newResult }
    }),

    resetExecutionResultReducer: assign(() => {
      return { ...executionInitialState }
    }),

    setDependenciesReducer: assign(({ context, event }) => {
      return { ...context, dependencies: event.payload }
    }),

    setExecutionErrorReducer: assign(({ context, event }) => {
      return { ...context, error: event.payload }
    }),

    setExecutionResultReducer: assign(({ context, event }) => {
      const newResult = { ...context.result }
      for (const update of event.payload.updates ?? []) {
        try {
          applyChange(newResult, undefined, update)
        } catch (e) {
          console.error(e)
        }
      }
      return { ...context, result: newResult }
    }),

    setGlobalStateInExecutionReducer: assign(({ context, event }) => {
      const { key, value } = event.payload
      const newResult = { ...context.result }
      if (!newResult.globalData || !newResult.root?.globalData) return context
      newResult.globalData[key] = value
      newResult.root.globalData[key] = value
      return { ...context, result: newResult }
    }),

    setInGlobalStateInExecutionReducer: assign(({ context, event }) => {
      const { key, path, value } = event.payload
      const newResult = { ...context.result }
      const globalState = newResult.globalData
      const rootGlobalState = newResult.root?.globalData
      if (!isObject(globalState) || !isObject(rootGlobalState)) return context

      const targetState = globalState[key]
      const targetRootState = rootGlobalState[key]
      if ((isObject(targetState) || Array.isArray(targetState)) && has(targetState, path)) {
        set(targetState, path, value)
        set(targetRootState as Record<string, any>, path, value)
      }
      return { ...context, result: newResult }
    }),

    setIndependenciesReducer: assign(({ context, event }) => {
      return { ...context, independencies: event.payload }
    }),

    setLocalStorageInExecutionReducer: assign(({ context, event }) => {
      const { key, value } = event.payload
      const localStorage = context.result.localStorage ?? {}
      const newLocalStorage = { ...localStorage, [key]: value }
      const newResult = { ...context.result, localStorage: newLocalStorage }
      window.localStorage.setItem(CUSTOM_STORAGE_PREFIX, JSON.stringify(newLocalStorage))
      return { ...context, result: newResult }
    }),

    startExecutionReducer: assign(({ context }) => {
      return { ...context }
    }),

    updateCurrentPagePathReducer: assign(({ context, event }) => {
      // direct port of Redux code, adapted for immutable context updates
      const { pageDisplayName, subPagePath } = event.payload
      const newResult = { ...context.result }
      const rootNode = newResult.root
      if (!rootNode?.$childrenNode) return context

      const currentIndex = rootNode.$childrenNode.findIndex((pageName: string) => pageName === pageDisplayName)
      if (currentIndex === -1) return context

      rootNode.currentSubPagePath = subPagePath
      rootNode.currentPageIndex = currentIndex

      const pageChildrenNodeDisplayName: string[] = newResult[pageDisplayName].$childrenNode
      if (subPagePath) {
        pageChildrenNodeDisplayName.forEach((sectionDisplayName) => {
          const sectionNode = newResult[sectionDisplayName]
          if (!sectionNode || sectionNode.$widgetType === "MODAL_SECTION_NODE") return
          const sectionViewConfig = sectionNode.sectionViewConfigs.find(
            (config: Record<string, string>) => config.path === subPagePath,
          )
          let sectionIndex = sectionNode.viewSortedKey.findIndex(
            (viewDisplayName: string) => viewDisplayName === sectionViewConfig?.viewDisplayName,
          )
          if (sectionIndex === -1) sectionIndex = 0
          sectionNode.currentViewIndex = sectionIndex
        })
      } else {
        pageChildrenNodeDisplayName.forEach((sectionDisplayName) => {
          const sectionNode = newResult[sectionDisplayName]
          if (!sectionNode || sectionNode.$widgetType === "MODAL_SECTION_NODE") return
          let sectionIndex = 0
          const defaultViewPath = sectionNode.defaultViewKey
          const defaultSectionViewConfig = sectionNode.sectionViewConfigs.find(
            (config: Record<string, string>) => config.path === defaultViewPath,
          )
          sectionIndex = sectionNode.viewSortedKey.findIndex(
            (viewDisplayName: string) => viewDisplayName === defaultSectionViewConfig?.viewDisplayName,
          )
          if (sectionIndex === -1) sectionIndex = 0
          sectionNode.currentViewIndex = sectionIndex
        })
      }
      return { ...context, result: newResult }
    }),

    updateExecutionByDisplayNameReducer: assign(({ context, event }) => {
      const { displayName, value } = event.payload
      return {
        ...context,
        result: {
          ...context.result,
          [displayName]: {
            ...context.result[displayName],
            ...value,
          },
        },
      }
    }),

    updateExecutionByMultiDisplayNameReducer: assign(({ context, event }) => {
      const newResult = { ...context.result }
      event.payload.forEach(({ displayName, value }) => {
        newResult[displayName] = {
          ...newResult[displayName],
          ...value,
        }
      })
      return { ...context, result: newResult }
    }),

    updateModalDisplayReducer: assign(({ context, event }) => {
      const { displayName, display } = event.payload
      const newResult = { ...context.result }
      const currentNode = newResult[displayName]
      if (!currentNode) return context
      const parentNode = newResult[currentNode.$parentNode]
      if (!parentNode?.$childrenNode) return context

      currentNode.isVisible = display
      if (display) {
        parentNode.$childrenNode.forEach((key: string) => {
          if (key !== displayName && newResult[key]) {
            newResult[key].isVisible = false
          }
        })
      }
      return { ...context, result: newResult }
    }),
  },
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => ({
    ...executionInitialState,
    ...stateMock.currentApp.execution,
    ...input,
  }),
  initial: "idle",
  states: {
    idle: {
      on: {
        clearLocalStorageInExecution: { actions: ["clearLocalStorageInExecutionReducer"] },
        resetExecutionResult: { actions: ["resetExecutionResultReducer"] },
        setDependencies: { actions: ["setDependenciesReducer"] },
        setExecutionError: { actions: ["setExecutionErrorReducer"] },
        setExecutionResult: { actions: ["setExecutionResultReducer"] },
        setGlobalStateInExecution: { actions: ["setGlobalStateInExecutionReducer"] },
        setInGlobalStateInExecution: { actions: ["setInGlobalStateInExecutionReducer"] },
        setIndependencies: { actions: ["setIndependenciesReducer"] },
        setLocalStorageInExecution: { actions: ["setLocalStorageInExecutionReducer"] },
        startExecution: { actions: ["startExecutionReducer"] },
        updateCurrentPagePath: { actions: ["updateCurrentPagePathReducer"] },
        updateExecutionByDisplayName: { actions: ["updateExecutionByDisplayNameReducer"] },
        updateExecutionByMultiDisplayName: { actions: ["updateExecutionByMultiDisplayNameReducer"] },
        updateModalDisplay: { actions: ["updateModalDisplayReducer"] },
      },
    },
  },
})
