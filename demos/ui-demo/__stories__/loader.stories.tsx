import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Loader",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { LoaderBasic as Basic } from "../__compositions__/examples/components/loader/loader-basic"
export { LoaderWithBadge as WithBadge } from "../__compositions__/examples/components/loader/loader-with-badge"
export { LoaderWithOverlay as WithOverlay } from "../__compositions__/examples/components/loader/loader-with-overlay"
