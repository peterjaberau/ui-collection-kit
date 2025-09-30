import { useActors } from "../hooks/useActors"

export const aiAgentSelector = () => {
  const { aiAgentActorRef: aiAgentRef } = useActors()
  const aiAgentState = aiAgentRef?.getSnapshot()
  const aiAgentContext = aiAgentState?.context

  return {
    aiAgentRef,
    aiAgentState,
    aiAgentContext,
  }
}
