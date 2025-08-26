import { useSelector } from "@xstate/react"
import { useRootActor } from "./useRootActor"

export function useEvaluationsActor() {
  const { rootActorRef } = useRootActor()

  const evaluationsActorRef = rootActorRef.system.get("evaluations")
  const sendToEvaluations = evaluationsActorRef.send

  const evaluationsState: any = useSelector(evaluationsActorRef, (state) => state)
  const evaluationsContext = evaluationsState.context

  const evaluationsTree = evaluationsContext.tree
  const evaluationsDependencies = evaluationsContext.dependencies
  const evaluationsLoadingEntities = evaluationsContext.loadingEntities
  const evaluationsFormEvaluation = evaluationsContext.formEvaluation
  const evaluationsTriggers = evaluationsContext.triggers
  const evaluationsFirstEvaluation = evaluationsContext.firstEvaluation

  // selectors
  const renderPage = evaluationsContext.firstEvaluation?.renderPage ?? false

  // guards
  const isFirstPageLoad = evaluationsContext.firstEvaluation?.isFirstPageLoad ?? false

  return {
    evaluationsActorRef,
    sendToEvaluations,

    evaluationsState,
    evaluationsContext,

    evaluationsTree,
    evaluationsDependencies,
    evaluationsLoadingEntities,
    evaluationsFormEvaluation,
    evaluationsTriggers,
    evaluationsFirstEvaluation,

    // selectors
    renderPage,

    // guards
    isFirstPageLoad,
  }
}
