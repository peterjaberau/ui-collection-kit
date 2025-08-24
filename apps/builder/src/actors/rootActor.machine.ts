import { createMachine, spawnChild } from "xstate"
import { entitiesMachine } from "./machines/entities.machine"
import { evaluationsMachine } from "./machines/evaluations.machine"
import { formMachine } from "./machines/form.machine"
import { gitMachine } from "./machines/git.machine"
import { lintingMachine } from "./machines/linting.machine"
import { organizationMachine } from "./machines/organization.machine"
import { settingsMachine } from "./machines/settings.machine"
import { uiMachine } from "./machines/ui.machine"



export const rootActorMachine = createMachine({
  entry: [
    spawnChild(entitiesMachine, { systemId: "entities" }),
    spawnChild(evaluationsMachine, { systemId: "evaluations" }),
    spawnChild(formMachine, { systemId: "form" }),
    spawnChild(gitMachine, { systemId: "git" }),
    spawnChild(lintingMachine, { systemId: "linting" }),
    spawnChild(organizationMachine, { systemId: "organization" }),
    spawnChild(settingsMachine, { systemId: "settings" }),
    spawnChild(uiMachine, { systemId: "ui" }),
  ],
})
