import dayjs from "dayjs"
import { klona } from "klona/json"
// @ts-ignore
import _ from "lodash"
import numbro from "numbro"
import Papa from "papaparse"
import { NIL, parse, stringify, v1, v3, v4, v5, validate, version } from "uuid"
import {
  copyToClipboard, downloadFile, goToURL, setRouter, showNotification,
  clearLocalStorage, setValueLocalStorage, setGlobalDataIn, setGlobalDataValue,
} from "#core-utils"
import { setup, assign, fromPromise } from 'xstate'

const THIRD_PARTY_PACKAGES = {
  _: {
    ..._,
  },
  uuid: {
    NIL,
    parse,
    stringify,
    v1,
    v3,
    v4,
    v5,
    validate,
    version,
  },
  dayjs,
  numbro,
  Papa,
}

const getExecutionResultActor = fromPromise(async () => {
  return {}
})

const getExecutionResultToCurrentPageCodeMirrorActor = fromPromise(async () => {
  return {}
})

const getExecutionResultToGlobalCodeMirrorActor = fromPromise(async () => {
  return {}
})

const runActionWithExecutionResultActor = fromPromise(async ({ input }: { input: any }) => {
  return { result: input.prev, success: true }
})

const updateModalDisplayActor = fromPromise(async ({ input }: { input: any }) => {
  return { display: input.display, displayName: input.displayName, success: true }
})

export const ILLAEditorRuntimePropsCollectorMachine: any = setup({
  types: {
    context: {} as any,
    events:{} as any
    } as any,
  actions: {
    getRuntimeProps: assign(({ context, event }) => {
      return context._runtimeProps
    }),
    addRuntimeProp: assign(({ context, event }) => {
      if (event.type !== 'addRuntimeProp') return context
      return {
        _runtimeProps: {
          ...context._runtimeProps,
          [event.displayName]: event.runtimeProp
        }
      }
    }),
    deleteRuntimeProp: assign(({ context, event }) => {
      if (event.type !== 'deleteRuntimeProp') return context
      const newRuntimeProps = { ...context._runtimeProps }
      delete newRuntimeProps[event.displayName]
      return { _runtimeProps: newRuntimeProps }
    }),
    initializeRuntimeProps: assign({
      _runtimeProps: () => ({
        ...THIRD_PARTY_PACKAGES,
        utils: {
          goToURL,
          showNotification,
          copyToClipboard,
          setRouter,
          downloadFile,
          setGlobalDataIn,
          setGlobalDataValue,
          setLocalStorage: setValueLocalStorage,
          clearLocalStorage,
        },
      })
    }),
    setExecutionResult: assign(({ context, event }) => {
      if (event.type !== 'done.invoke.getExecutionResult') return context
      return {
        executionResult: event.output
      }
    }),
    setCurrentPageResult: assign(({ context, event }) => {
      if (event.type !== 'done.invoke.getCurrentPageResult') return context
      return {
        currentPageResult: event.output
      }
    }),
    setGlobalResult: assign(({ context, event }) => {
      if (event.type !== 'done.invoke.getGlobalResult') return context
      return {
        globalResult: event.output
      }
    }),
    formatExecutionResult: assign(({ context }) => {
      if (!context.executionResult) return context

      const formatedExecutionResult = Object.keys(context.executionResult).reduce(
        (acc, prevKey) => {
          const prev = context.executionResult![prevKey]
          if (!prev) return acc

          if (prev.$type === "ACTION") {
            return {
              ...acc,
              [prev.displayName]: {
                ...prev,
                trigger: () => ({ type: 'START_RUN_ACTION_WITH_EXECUTION', prev })
              }
            }
          }

          if (prev.$type === "WIDGET") {
            const runtimePros = context._runtimeProps[prev.displayName]
            if (runtimePros) {
              return {
                ...acc,
                [prev.displayName]: {
                  ...prev,
                  ...runtimePros,
                }
              }
            }
          }

          return { ...acc, [prevKey]: prev }
        },
        {} as Record<string, any>
      )

      return {
        formattedResult: formatedExecutionResult
      }
    }),
    formatCurrentPageWithModals: assign(({ context }) => {
      if (!context.currentPageResult) return context

      const formatedExecutionResult = Object.keys(context.currentPageResult).reduce(
        (acc, prevKey) => {
          const prev = context.currentPageResult![prevKey]
          if (!prev) return acc

          if ((Object.hasOwn && Object.hasOwn(prev, "actionType")) ||
            Object.prototype.hasOwnProperty.call(prev, "actionType")) {
            return {
              ...acc,
              [prev.displayName]: {
                ...prev,
                trigger: () => ({ type: 'START_RUN_ACTION_WITH_EXECUTION', prev })
              }
            }
          }

          if (prev.$type === "WIDGET" && prev.$widgetType === "MODAL_WIDGET") {
            return {
              ...acc,
              [prevKey]: {
                ...prev,
                openModal: () => ({ type: 'UPDATE_MODAL_DISPLAY', display: true, displayName: prevKey }),
                closeModal: () => ({ type: 'UPDATE_MODAL_DISPLAY', display: false, displayName: prevKey })
              }
            }
          }

          return { ...acc, [prevKey]: prev }
        },
        {} as Record<string, any>
      )

      return {
        formattedResult: formatedExecutionResult
      }
    })
  },
  actors: {
    getExecutionResult: getExecutionResultActor,
    getCurrentPageResult: getExecutionResultToCurrentPageCodeMirrorActor,
    getGlobalResult: getExecutionResultToGlobalCodeMirrorActor,
    runActionWithExecutionResult: runActionWithExecutionResultActor,
    updateModalDisplay: updateModalDisplayActor
  },
  guards: {
    hasRuntimeProp: ({ context, event }) => {
      if (event.type !== 'deleteRuntimeProp') return false
      return !!context._runtimeProps[event.displayName]
    },
    hasExecutionResult: ({ context }) => {
      return !!context.executionResult
    },
    hasCurrentPageResult: ({ context }) => {
      return !!context.currentPageResult
    }
  },
}).createMachine({
  id: 'ILLAEditorRuntimePropsCollector',
  initial: "idle",
  context: {
    _runtimeProps: {
      ...THIRD_PARTY_PACKAGES,
      utils: {
        goToURL,
        showNotification,
        copyToClipboard,
        setRouter,
        downloadFile,
        setGlobalDataIn,
        setGlobalDataValue,
        setLocalStorage: setValueLocalStorage,
        clearLocalStorage,
      },
    }
  },
  states: {
    idle: {
      on: {
        addRuntimeProp: {
          actions: 'addRuntimeProp'
        },
        deleteRuntimeProp: {
          guard: 'hasRuntimeProp',
          actions: 'deleteRuntimeProp'
        },
        getRuntimeProps: {
          actions: [({ context }) => {
            return context._runtimeProps
          }]
        },
        getThirdPartyPackages: {
          actions: [() => {
            return THIRD_PARTY_PACKAGES
          }]
        },
        FETCH_EXECUTION_RESULT: {
          target: "fetchingExecutionResult"
        },
        FETCH_CURRENT_PAGE_RESULT: {
          target: "fetchingCurrentPageResult"
        },
        FETCH_GLOBAL_RESULT: {
          target: "fetchingGlobalResult"
        },
        getGlobalCalcContext: {
          target: "formattingGlobalContext"
        },
        getCurrentPageCalcContext: {
          target: "formattingCurrentPageContext"
        },
        getGlobalCalcContextWithLimit: {
          actions: [({ context, event }) => {
            if (!context.globalResult) return

            const utils = context._runtimeProps.utils as Record<string, unknown>
            return {
              ...context.globalResult,
              ...THIRD_PARTY_PACKAGES,
              utils,
              ...(event.otherContext || {})
            }
          }]
        },
        START_RUN_ACTION_WITH_EXECUTION: {
          target: "runningActionWithExecution"
        },
        UPDATE_MODAL_DISPLAY: {
          target: "updatingModalDisplay"
        }
      }
    },
    fetchingExecutionResult: {
      invoke: {
        id: "getExecutionResult",
        src: "getExecutionResult",
        onDone: {
          target: "idle",
          actions: 'setExecutionResult'
        },
        onError: {
          target: "idle",
          actions: [({ event }) => {
            console.error('Failed to fetch execution result:', event.error)
          }]
        }
      }
    },
    fetchingCurrentPageResult: {
      invoke: {
        id: "getCurrentPageResult",
        src: "getCurrentPageResult",
        onDone: {
          target: "idle",
          actions: 'setCurrentPageResult'
        },
        onError: {
          target: "idle",
          actions: [({ event }) => {
            console.error('Failed to fetch current page result:', event.error)
          }]
        }
      }
    },
    fetchingGlobalResult: {
      invoke: {
        id: "getGlobalResult",
        src: "getGlobalResult",
        onDone: {
          target: "idle",
          actions: 'setGlobalResult'
        },
        onError: {
          target: "idle",
          actions: [({ event }) => {
            console.error('Failed to fetch global result:', event.error)
          }]
        }
      }
    },
    formattingGlobalContext: {
      always: [
        {
          guard: 'hasExecutionResult',
          actions: 'formatExecutionResult',
          target: 'idle'
        },
        {
          target: 'fetchingExecutionResult'
        }
      ]
    },
    formattingCurrentPageContext: {
      always: [
        {
          guard: 'hasCurrentPageResult',
          actions: ['formatExecutionResult', 'formatCurrentPageWithModals'],
          target: 'idle'
        },
        {
          target: 'fetchingCurrentPageResult'
        }
      ]
    },
    runningActionWithExecution: {
      invoke: {
        id: "runActionWithExecutionResult",
        src: "runActionWithExecutionResult",
        input: ({ event }: any) => {
          if (event.type === 'START_RUN_ACTION_WITH_EXECUTION') {
            return { prev: event.prev }
          }
          return {}
        },
        onDone: {
          target: "idle",
          actions: [({ event }) => {
            return event.output
          }]
        },
        onError: {
          target: "idle",
          actions: [({ event }) => {
            console.error('Action execution failed:', event.error)
          }]
        }
      }
    },
    updatingModalDisplay: {
      invoke: {
        id: "updateModalDisplay",
        src: "updateModalDisplay",
        input: ({ event }: any) => {
          if (event.type === 'UPDATE_MODAL_DISPLAY') {
            return { display: event.display, displayName: event.displayName }
          }
          return {}
        },
        onDone: {
          target: "idle"
        },
        onError: {
          target: "idle",
          actions: [({ event }) => {
            console.error('Modal update failed:', event.error)
          }]
        }
      }
    }
  }
})

// Singleton instance with proper service management
let service: any = null

export const ILLAEditorRuntimePropsCollectorInstance = {
  send: (event: any) => {
    if (!service) {
      // Initialize the service on first use
      const { createActor } = ILLAEditorRuntimePropsCollectorMachine
      service = createActor()
      service.start()
    }
    service.send(event)
  },
  getRuntimeProps: () => {
    return ILLAEditorRuntimePropsCollectorInstance.send({ type: 'getRuntimeProps' })
  },
  getThirdPartyPackages: () => {
    return ILLAEditorRuntimePropsCollectorInstance.send({ type: 'getThirdPartyPackages' })
  },
  // Add other method equivalents as needed
}
