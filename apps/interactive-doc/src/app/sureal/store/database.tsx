import { omit } from 'lodash'
import { createStoreHook } from "@xstate/store/react"
import { databaseStoreSamples } from "./data"
import { createConnectionSchema } from "./defaults"
import { databaseStoreDemo } from './data'

export const useDatabaseStore: any = createStoreHook({
  context: {
    isServing: false,
    servePending: false,
    currentState: "disconnected",
    latestError: "",
    isQueryActive: false,
    isGraphqlQueryActive: false,
    consoleOutput: [],
    connectionSchema: createConnectionSchema,
    version: "",
    queryResponses: {},
    graphqlResponse: {},
  } as any,
  on: {
    loadSample: (context) => ({
      ...databaseStoreDemo
    }),

    setQueryActive: (context, event: { isQueryActive: any }) => ({
      ...context,
      isQueryActive: event.isQueryActive,
    }),
    setGraphqlQueryActive: (context, event: { isGraphqlQueryActive: any }) => ({
      ...context,
      isGraphqlQueryActive: event.isGraphqlQueryActive,
    }),

    clearSchema: (context) => ({
      ...context,
      connectionSchema: createConnectionSchema(),
    }),
    prepareServe: (context) => ({
      ...context,
      servePending: true,
      consoleOutput: [],
    }),
    confirmServing: (context) => ({
      ...context,
      isServing: true,
      servePending: false,
    }),
    stopServing: (context) => ({
      ...context,
      isServing: false,
      servePending: false,
    }),
    cancelServe: (context) => ({
      ...context,
      servePending: true
    }),
    pushConsoleLine: (context, event: { line: any, max: any }) => ({
      ...context,
      consoleOutput: [...context.consoleOutput, event.line].slice(-event.max),
    }),
    clearConsole: (context) => ({
      ...context,
      consoleOutput: [],
    }),
    setDatabaseSchema: (context, event: { databaseSchema: any }) => ({
      ...context,
      connectionSchema: event.databaseSchema,
    }),
    setCurrentState: (context, event: { currentState: any }) => ({
      ...context,
      currentState: event.currentState,
    }),
    setLatestError: (context, event: { latestError: any }) => ({
      ...context,
      latestError: event.latestError,
    }),
    setVersion: (context, event: { version: any }) => ({
      ...context,
      version: event.version,
    }),
    setQueryResponse: (context, event: { tab: any, response: any }) => ({
      ...context,
      queryResponses: {
        ...context.queryResponses,
        [event.tab]: event.response,
      },
    }),
    clearQueryResponse: (context, event: { tab: any }) => ({
      ...context,
      queryResponses: omit(context.queryResponses, [event.tab]),
    }),
    setGraphqlResponse: (context, event: { connection: any, response: any }) => ({
      ...context,
      graphqlResponse: {
        ...context.graphqlResponse,
        [event.connection]: event.response,
      },
    }),
    clearGraphqlResponse: (context, event: { connection: any }) => ({
      ...context,
      graphqlResponse: omit(context.graphqlResponse, [event.connection]),
    }),
  }
})

