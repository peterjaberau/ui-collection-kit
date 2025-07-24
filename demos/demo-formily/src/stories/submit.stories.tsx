import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Submit",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { SubmitOrdinary as Ordinary } from "../examples/submit/submit.ordinary"
export { SubmitPreventDuplicate as PreventDuplicate } from "../examples/submit/submit.prevent-duplicate"
