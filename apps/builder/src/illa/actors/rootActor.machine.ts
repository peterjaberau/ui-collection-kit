import { SYSTEM_ACTOR_ID } from "./constants"
import { assign } from "xstate"
import { createMachine } from "xstate"
import { aiAgentMachine } from "./aiAgent/aiAgent.machine"
import { builderInfoMachine } from "./builderInfo/builderInfo.machine"
import { configMachine } from "./config/config.machine"
import { currentAppHistoryMachine } from "./currentAppHistory/currentAppHistory.machine"
import { guideMachine } from "./guide/guide.machine"
import { resourceMachine } from "./resource/resource.machine"
import { currentUserMachine } from "./userInfo/currentUser/currentUser.machine"
import { teamMachine } from "./userInfo/team/team.machine"

import { actionMachine } from "./currentApp/action/action.machine"
import { appInfoMachine } from "./currentApp/appInfo/appInfo.machine"
import { collaboratorsMachine } from "./currentApp/collaborators/collaborators.machine"
import { componentsMachine } from "./currentApp/components/components.machine"
import { cursorMachine } from "./currentApp/cursor/cursor.machine"
import { dragShadowMachine } from "./currentApp/dragShadow/dragShadow.machine"
import { executionMachine } from "./currentApp/executionTree/execution.machine"
import { layoutInfoMachine } from "./currentApp/layoutInfo/layoutInfo.machine"

export const rootActorMachine = createMachine({
  entry:  assign({
    aiAgent: ({ spawn }) => spawn(aiAgentMachine, { systemId: SYSTEM_ACTOR_ID.AI_AGENT }),
    builderInfo: ({ spawn }) => spawn(builderInfoMachine, { systemId: SYSTEM_ACTOR_ID.BUILDER_INFO }),
    config: ({ spawn }) => spawn(configMachine, { systemId: SYSTEM_ACTOR_ID.CONFIG }),
    currentAppHistory: ({ spawn }) => spawn(currentAppHistoryMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_HISTORY }),
    guide: ({ spawn }) => spawn(guideMachine, { systemId: SYSTEM_ACTOR_ID.GUIDE }),
    resource: ({ spawn }) => spawn(resourceMachine, { systemId: SYSTEM_ACTOR_ID.RESOURCE }),
    currentUser: ({ spawn }) => spawn(currentUserMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_USER }),
    team: ({ spawn }) => spawn(teamMachine, { systemId: SYSTEM_ACTOR_ID.TEAM }),
    currentApp: ({ spawn }) => ({
      action: spawn(actionMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_ACTION }),
      appInfo: spawn(appInfoMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_APP_INFO }),
      collaborators: spawn(collaboratorsMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_COLLABORATORS }),
      components: spawn(componentsMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_COMPONENTS }),
      cursor: spawn(cursorMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_CURSOR }),
      dragShadow: spawn(dragShadowMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_DRAG_SHADOW }),
      executionTree: spawn(executionMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_EXECUTION }),
      layoutInfo: spawn(layoutInfoMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_LAYOUT_INFO }),
    }),
  }),
})
