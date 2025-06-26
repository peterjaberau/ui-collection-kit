import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Editable",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { EditableBasic as Basic } from "../__compositions__/examples/components/editable/editable-basic"
export { EditableControlled as Controlled } from "../__compositions__/examples/components/editable/editable-controlled"
export { EditableDisabled as Disabled } from "../__compositions__/examples/components/editable/editable-disabled"
export { EditableWithControls as Controls } from "../__compositions__/examples/components/editable/editable-with-controls"
export { EditableWithDoubleClick as DoubleClick } from "../__compositions__/examples/components/editable/editable-with-double-click"
export { EditableWithFinalFocus as FinalFocus } from "../__compositions__/examples/components/editable/editable-with-final-focus"
export { EditableWithStore as Store } from "../__compositions__/examples/components/editable/editable-with-store"
export { EditableWithTextarea as Textarea } from "../__compositions__/examples/components/editable/editable-with-textarea"
