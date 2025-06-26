import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Show",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ShowBasic as Basic } from "../__compositions__/examples/components/show/show-basic"
export { ShowWithFallback as WithFallback } from "../__compositions__/examples/components/show/show-with-fallback"
export { ShowWithRenderProp as WithRenderProp } from "../__compositions__/examples/components/show/show-with-render-prop"
