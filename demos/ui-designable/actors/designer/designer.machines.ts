import { createMachine } from 'xstate';
import { createDesigner } from '#packages/core';

export const designerEngineMachine = createMachine({
  initial: 'loading',
  context: (({ input }: any) => {
    const engine = createDesigner()
    return {
      engine: engine,
      ...input
    }
  }),

})
