import dataDefault from "./data.default"

export const rootMachine = createMachine({
  context: ({ input }) => ({
    definitions: dataDefault.definitions,
    input,
  }),
})

export const globalSessionMachine = createMachine({
  context: ({ input }) => ({
    globalSession: dataDefault.globalSession,
    input,
  }),
})

export const appSessionMachine = createMachine({
  context: ({ input }) => ({
    appSession: dataDefault.appSession,
    input,
  }),
})

export const pageSessionMachine = createMachine({
  context: ({ input }) => ({
    pageSession: dataDefault.pageSession,
    input,
  }),
})
