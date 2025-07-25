import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Reset",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ResetForceEmpty } from "../examples/reset/ForceEmpty"
export { ResetForceEmptyAndVerify } from "../examples/reset/ForceEmptyAndVerify"
export { ResetNormal } from "../examples/reset/Normal"
export { ResetVerify } from "../examples/reset/Verify"
