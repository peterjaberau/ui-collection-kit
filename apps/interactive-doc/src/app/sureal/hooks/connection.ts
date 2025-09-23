export function useConnection({ state, connectionId = "P7KsZvPVl" }: any) {
  return state.config.connections.find((c: any) => c.id === connectionId)
}

//snapshot --> query Store
export function useActiveQuery({ state, activeQueryId = "KSCG0Cp7D" }: any) {
  return state.connection.queries.find((q: any) => q.id === activeQueryId)
}
