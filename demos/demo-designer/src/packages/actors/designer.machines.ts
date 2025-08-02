import { createMachine, setup, fromPromise, assign, spawnChild } from "xstate"
import { createDesigner, Shortcut, KeyCode } from "#packages/core"
import { saveSchema } from "#packages/formily/antd/playground/service"
import { widgetSchemas } from "./designer.defaults"

export const designerEngineMachine = createMachine({
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

export const designerSchemasMachine = createMachine({
  context: ({ input }: any) => {
    return {
      widgets: widgetSchemas,
      ...input,
    }
  },
})
