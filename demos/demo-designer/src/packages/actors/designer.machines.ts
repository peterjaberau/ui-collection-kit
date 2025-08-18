import { createMachine } from "xstate"
import { widgetSchemas } from "./designer.defaults"



export const designerSchemasMachine = createMachine({
  context: ({ input }: any) => {
    return {
      widgets: widgetSchemas,
      ...input,
    }
  },
})
