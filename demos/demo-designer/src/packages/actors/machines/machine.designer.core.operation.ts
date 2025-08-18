import { createMachine, setup, assign, spawnChild  } from "xstate"
import { uid } from "#packages/shared"
import { defaultWorkspaceProps } from "#packages/actors/machines/machine.designer.core.workspace"

export const defaultOperationProps = {

}

export const coreDesignerOperationMachine = createMachine({
  context: ({ input }: any) => {
    return {
      ...defaultOperationProps,
      ...input,
      tree: null,
      hover: null,
      selection: null,
      moveHelper: null,
      transformHelper: null,
    }
  }
})
