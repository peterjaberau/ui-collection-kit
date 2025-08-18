import { createMachine, setup, assign, spawnChild  } from "xstate"
import { uid, ICustomEvent, EventContainer } from '#packages/shared'

export const defaultWorkspaceProps = {

}

export const coreDesignerWorkspaceMachine = createMachine({
  context: ({ input }: any) => {
    return {
      ...defaultWorkspaceProps,
      ...input,
      id: input.id || uid,
      title: input.title || null,
      description: input.description || null,
      viewport: null,
      outline: null,
      operation: null,
      history: null,
      props: null,
    }
  }
})
