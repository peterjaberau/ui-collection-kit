import { getActor } from "./utils"

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

export const getLoadingEntities = (context: any) => {
  return context.loadingEntities
}
