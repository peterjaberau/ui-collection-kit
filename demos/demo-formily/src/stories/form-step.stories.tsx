import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Step",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormStepMarkup } from "../examples/form-step/form-step.markup"
export { FormStepSchema } from "../examples/form-step/form-step.schema"
