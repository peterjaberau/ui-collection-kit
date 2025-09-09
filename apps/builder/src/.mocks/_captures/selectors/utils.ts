export const getActor = (systemId: string, system: any) => {
  return system?.get(systemId);
}

export const getActorState = (actor: any) => {
  return actor?.getSnapshot();
}

export const getActorContext = (actor: any) => {
  return actor?.getSnapshot()?.context;
}
