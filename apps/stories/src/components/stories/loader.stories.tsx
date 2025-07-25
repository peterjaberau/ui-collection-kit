import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Loader",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { LoaderBasic as Basic } from "../compositions/examples/loader-basic"
export { LoaderWithBadge as WithBadge } from "../compositions/examples/loader-with-badge"
export { LoaderWithOverlay as WithOverlay } from "../compositions/examples/loader-with-overlay"
