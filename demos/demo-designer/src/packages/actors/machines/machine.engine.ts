import { createMachine  } from "xstate"
import { createDesigner, Shortcut, KeyCode } from "#packages/core"
import { saveSchema } from "#packages/formily/antd/playground/service"


export const engineMachine = createMachine({
  context: ({ input }: any) => {
    const engine = createDesigner({
      shortcuts: [
        new Shortcut({
          codes: [
            [KeyCode.Meta, KeyCode.S],
            [KeyCode.Control, KeyCode.S],
          ],
          handler(ctx) {
            saveSchema(ctx.engine)
          },
        }),
      ],
      rootComponentName: "Form",
    })
    return {
      engine: engine,
      ...input,
    }
  },
})
