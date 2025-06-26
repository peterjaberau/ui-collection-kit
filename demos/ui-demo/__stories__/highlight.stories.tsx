import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / Highlight",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { HighlightBasic as Basic } from "../__compositions__/examples/components/highlight/highlight-basic"
export { HighlightMultiple as Multiple } from "../__compositions__/examples/components/highlight/highlight-multiple"
export { HighlightSearchQuery as SearchQuery } from "../__compositions__/examples/components/highlight/highlight-search-query"
export { HighlightWithCustomStyle as CustomStyle } from "../__compositions__/examples/components/highlight/highlight-with-custom-style"
export { HighlightWithSquiggle as Squiggle } from "../__compositions__/examples/components/highlight/highlight-with-squiggle"
