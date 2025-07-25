import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / LinkOverlay",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { LinkOverlayBasic as Basic } from "../compositions/examples/link-overlay-basic"
export { LinkOverlayArticle as Article } from "../compositions/examples/link-overlay-article"
