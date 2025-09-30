"use client"
import React from "react"
import { createActorContext } from "@xstate/react"
import { createMachine, assign } from "xstate"
import { SYSTEM_ACTOR_ID } from "./constants"

import { configMachine } from "./config/config.machine"
import { aiAgentMachine } from "./aiAgent/aiAgent.machine"
import { builderInfoMachine } from "./builderInfo/builderInfo.machine"
import { currentAppHistoryMachine } from "./currentAppHistory/currentAppHistory.machine"
import { guideMachine } from "./guide/guide.machine"
import { resourceMachine } from "./resource/resource.machine"
import { currentUserMachine } from "./userInfo/currentUser/currentUser.machine"
import { teamMachine } from "./userInfo/team/team.machine"
import { currentAppMachine } from "./currentApp/currentApp.machine"

export const rootActorMachine = createMachine({
  entry: assign({
    aiAgent: ({ spawn }) => spawn(aiAgentMachine, { systemId: SYSTEM_ACTOR_ID.AI_AGENT }),
    builderInfo: ({ spawn }) => spawn(builderInfoMachine, { systemId: SYSTEM_ACTOR_ID.BUILDER_INFO }),
    config: ({ spawn }) => spawn(configMachine, { systemId: SYSTEM_ACTOR_ID.CONFIG }),
    currentApp: ({ spawn }) => spawn(currentAppMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP }),
    currentAppHistory: ({ spawn }) =>
      spawn(currentAppHistoryMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_APP_HISTORY }),
    currentUser: ({ spawn }) => spawn(currentUserMachine, { systemId: SYSTEM_ACTOR_ID.CURRENT_USER }),
    guide: ({ spawn }) => spawn(guideMachine, { systemId: SYSTEM_ACTOR_ID.GUIDE }),
    resource: ({ spawn }) => spawn(resourceMachine, { systemId: SYSTEM_ACTOR_ID.RESOURCE }),
    team: ({ spawn }) => spawn(teamMachine, { systemId: SYSTEM_ACTOR_ID.TEAM }),
  }),
})

export const RootActorContext = createActorContext(rootActorMachine)

export const RootActorProvider = ({ children }: any) => {
  return <RootActorContext.Provider>{children}</RootActorContext.Provider>
}
