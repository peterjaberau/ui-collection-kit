import type { Meta } from "@storybook/react-vite"
import { Box } from "@ui-kit/components"

export default {
  title: "Components / Collapsible",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { CollapsibleBasic as Basic } from "../compositions/examples/collapsible-basic"
export { CollapsibleLazyMounted as LazyMounted } from "../compositions/examples/collapsible-lazy-mounted"
