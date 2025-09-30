import { useActors } from "../../hooks/useActors"

export const teamSelector = () => {
  const { teamActorRef: teamRef } = useActors()
  const teamState = teamRef?.getSnapshot()
  const teamContext = teamState?.context

  return {
    teamRef,
    teamState,
    teamContext,
  }
}
