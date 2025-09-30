import { assign, createMachine } from "xstate"

import { actionMachine } from "./action/action.machine"
import { appInfoMachine } from "./appInfo/appInfo.machine"
import { collaboratorsMachine } from "./collaborators/collaborators.machine"
import { componentsMachine } from "./components/components.machine"
import { cursorMachine } from "./cursor/cursor.machine"
import { dragShadowMachine } from "./dragShadow/dragShadow.machine"
import { executionMachine } from "./executionTree/execution.machine"
import { layoutInfoMachine } from "./layoutInfo/layoutInfo.machine"
import { SYSTEM_ACTOR_ID } from "#app/common/state-actors/constants"

export const currentAppMachine = createMachine({
  entry: assign({
    action: ({ spawn }) => spawn(actionMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_ACTION }),
    appInfo: ({ spawn }) => spawn(appInfoMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_APP_INFO }),
    collaborators: ({ spawn }) => spawn(collaboratorsMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_COLLABORATORS }),
    components: ({ spawn }) => spawn(componentsMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_COMPONENTS }),
    cursor: ({ spawn }) => spawn(cursorMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_CURSOR }),
    dragShadow: ({ spawn }) => spawn(dragShadowMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_DRAG_SHADOW }),
    executionTree: ({ spawn }) => spawn(executionMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_EXECUTION }),
    layoutInfo: ({ spawn }) => spawn(layoutInfoMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_LAYOUT_INFO }),
  }),
})
