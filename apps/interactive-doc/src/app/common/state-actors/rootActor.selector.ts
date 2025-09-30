import { useActors } from "./hooks/useActors"
import { currentAppSelector } from "./currentApp/currentApp.selector"
import { aiAgentSelector } from "./aiAgent/aiAgent.selector"
import { builderInfoSelector } from "./builderInfo/builderInfo.selector"
import { configSelector } from "./config/config.selector"
import { currentAppHistorySelector } from "./currentAppHistory/currentAppHistory.selector"
import { guideSelector } from "./guide/guide.selector"
import { resourceSelector } from "./resource/resource.selector"
import { currentUserSelector } from "./userInfo/currentUser/currentUser.selector"
import { teamSelector } from "./userInfo/team/team.selector"

export const rootActorSelector = () => {
  const { rootActorRef: rootRef } = useActors()
  const rootState = rootRef?.getSnapshot()
  const rootContext = rootState?.context

  const { aiAgentContext } = aiAgentSelector()
  const { builderInfoContext } = builderInfoSelector()
  const { configContext } = configSelector()

  const { currentApp } = currentAppSelector()
  const { currentAppHistoryContext } = currentAppHistorySelector()
  const { guideContext } = guideSelector()
  const { resourceContext } = resourceSelector()
  const { currentUserContext } = currentUserSelector()
  const { teamContext } = teamSelector()



  return {
    rootRef,
    rootState,
    rootContext,

    root: {
      aiAgent: aiAgentContext,
      builderInfo: builderInfoContext,
      config: configContext,
      currentApp: currentApp,
      currentAppHistory: currentAppHistoryContext,
      guide: guideContext,
      resource: rootContext,
      currentUser: currentUserContext,
      team: teamContext,
    },
  }
}
