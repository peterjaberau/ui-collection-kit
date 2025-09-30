export const getActor = (systemId: string, system: any) => {
  return system?.get(systemId)
}

export const getSystem = (actorRef: any) => {
  return actorRef?.system
}

export const getSpawnedActor = (systemId: string, actorRef: any) => {
  return actorRef?.system.get(systemId)
}
