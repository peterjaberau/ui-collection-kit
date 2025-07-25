import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Collapsible",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { CollapsibleBasic as Basic } from "../compositions/examples/collapsible-basic"
export { CollapsibleLazyMounted as LazyMounted } from "../compositions/examples/collapsible-lazy-mounted"
