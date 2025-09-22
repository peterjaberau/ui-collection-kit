export const connectionSchemaDefaults = {
  root: {
    namespaces: [],
    accesses: [],
    users: [],
  },
  namespace: {
    databases: [],
    accesses: [],
    users: [],
  },
  database: {
    tables: [],
    accesses: [],
    users: [],
    functions: [],
    models: [],
    params: [],
  },
}

export const databaseStoreDefaults = {
  isServing: false,
  servePending: false,
  currentState: "disconnected",
  latestError: "",
  isQueryActive: false,
  isGraphqlQueryActive: false,
  consoleOutput: [],
  connectionSchema: connectionSchemaDefaults,
  version: "",
  queryResponses: {},
  graphqlResponse: {},
}
