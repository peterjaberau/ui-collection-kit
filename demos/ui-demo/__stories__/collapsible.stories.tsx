import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Collapsible",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { CollapsibleBasic as Basic } from "../__compositions__/examples/components/collapsible/collapsible-basic"
export { CollapsibleLazyMounted as LazyMounted } from "../__compositions__/examples/components/collapsible/collapsible-lazy-mounted"
