import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Textarea",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TextareaBasic as Basic } from "../__compositions__/examples/components/textarea/textarea-basic"
export { TextareaSizeTable as Sizes } from "../__compositions__/examples/components/textarea/textarea-size-table"
export { TextareaVariantTable as Variants } from "../__compositions__/examples/components/textarea/textarea-variant-table"
export { TextareaWithAutoresize as Autoresize } from "../__compositions__/examples/components/textarea/textarea-with-autoresize"
export { TextareaWithAutoresizeMaxRows as AutoresizeMaxRows } from "../__compositions__/examples/components/textarea/textarea-with-autoresize-max-rows"
export { TextareaWithErrorText as ErrorText } from "../__compositions__/examples/components/textarea/textarea-with-error-text"
export { TextareaWithField as Field } from "../__compositions__/examples/components/textarea/textarea-with-field"
export { TextareaWithForm as Form } from "../__compositions__/examples/components/textarea/textarea-with-form"
export { TextareaWithHelperText as HelperText } from "../__compositions__/examples/components/textarea/textarea-with-helper-text"
export { TextareaWithHookForm as HookForm } from "../__compositions__/examples/components/textarea/textarea-with-hook-form"
export { TextareaWithResize as Resize } from "../__compositions__/examples/components/textarea/textarea-with-resize"
