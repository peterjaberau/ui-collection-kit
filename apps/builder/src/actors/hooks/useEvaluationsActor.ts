import { useSelector } from "@xstate/react"
import { useRootActor } from "./useRootActor"

export function useEvaluationsActor() {
  const { rootActorRef } = useRootActor()

  const evaluationsActorRef = rootActorRef.system.get("evaluations")
  const evaluationsActorState: any = useSelector(evaluationsActorRef, (state) => state)
  const evaluationsContext = evaluationsActorState.context
  const sendToEvaluationsActor = evaluationsActorRef.send

  const evaluationsTree = evaluationsContext.tree
  const evaluationsDependencies = evaluationsContext.dependencies
  const evaluationsLoadingEntities = evaluationsContext.loadingEntities
  const evaluationsFormEvaluation = evaluationsContext.formEvaluation
  const evaluationsTriggers = evaluationsContext.triggers
  const evaluationsFirstEvaluation = evaluationsContext.firstEvaluation



  return {
    evaluationsActorRef,
    evaluationsActorState,
    evaluationsContext,
    sendToEvaluationsActor,

    evaluationsTree,
    evaluationsDependencies,
    evaluationsLoadingEntities,
    evaluationsFormEvaluation,
    evaluationsTriggers,
    evaluationsFirstEvaluation,
  }
}
