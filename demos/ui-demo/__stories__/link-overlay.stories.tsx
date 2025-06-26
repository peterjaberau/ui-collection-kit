import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / LinkOverlay",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { LinkOverlayBasic as Basic } from "../__compositions__/examples/components/link/link-overlay-basic"
export { LinkOverlayArticle as Article } from "../__compositions__/examples/components/link/link-overlay-article"
