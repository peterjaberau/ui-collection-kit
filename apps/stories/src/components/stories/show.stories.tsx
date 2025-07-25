import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Show",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ShowBasic as Basic } from "../compositions/examples/show-basic"
export { ShowWithFallback as WithFallback } from "../compositions/examples/show-with-fallback"
export { ShowWithRenderProp as WithRenderProp } from "../compositions/examples/show-with-render-prop"
