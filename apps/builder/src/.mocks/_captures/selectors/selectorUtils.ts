
export const getActor = (systemId: string, system: any) => {
  return system?.get(systemId)
}

export const entitiesSelector = (system: any) => {
  const getEntitiesActor = getActor("entities", system)
  const getEntitiesState = getEntitiesActor?.getSnapshot()
  const getEntitiesContext = getEntitiesState?.context

  return {
    getEntitiesActor,
    getEntitiesState,
    getEntitiesContext,
  }
}

export const uiSelector = (system: any) => {
  const getUiActor = getActor("ui", system)
  const getUiState = getUiActor?.getSnapshot()
  const getUiContext = getUiState?.context

  return {
    getUiActor,
    getUiState,
    getUiContext,
  }
}

export const evaluationsSelector = (system: any) => {
  const getEvaluationsActor = getActor("evaluations", system)
  const getEvaluationsState = getEvaluationsActor?.getSnapshot()
  const getEvaluationsContext = getEvaluationsState?.context

  return {
    getEvaluationsActor,
    getEvaluationsState,
    getEvaluationsContext,
  }
}

export const organizationSelector = (system: any) => {
  const getOrganizationActor = getActor("organization", system)
  const getOrganizationState = getOrganizationActor?.getSnapshot()
  const getOrganizationContext = getOrganizationState?.context

  return {
    getOrganizationActor,
    getOrganizationState,
    getOrganizationContext,
  }
}

export const settingsSelector = (system: any) => {
  const getSettingsActor = getActor("settings", system)
  const getSettingsState = getSettingsActor?.getSnapshot()
  const getSettingsContext = getSettingsContext?.context

  return {
    getSettingsActor,
    getSettingsState,
    getSettingsContext,
  }
}

export const lintingSelector = (system: any) => {
  const getLintingActor = getActor("linting", system)
  const getLintingState = getLintingActor?.getSnapshot()
  const getLintingContext = getLintingState?.context

  return {
    getLintingActor,
    getLintingState,
    getLintingContext,
  }
}
