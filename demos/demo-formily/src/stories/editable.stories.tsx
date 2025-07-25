import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Editable",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { EditableMarkup } from "../examples/editable/Markup"
export { EditablePureJsx } from "../examples/editable/PureJsx"
export { EditableSchema } from "../examples/editable/Schema"
