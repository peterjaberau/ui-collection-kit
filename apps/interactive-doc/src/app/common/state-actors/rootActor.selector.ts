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

  return {
    rootRef,
    rootState,
    rootContext,

    root: {
      aiAgent: aiAgentSelector(),
      builderInfo: builderInfoSelector(),
      config: configSelector(),

      currentApp: currentAppSelector(),
      currentAppHistory: currentAppHistorySelector(),
      guide: guideSelector(),
      resource: resourceSelector(),
      currentUser: currentUserSelector(),
      team: teamSelector(),
    },
  }
}
