import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / Highlight",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { HighlightBasic as Basic } from "../compositions/examples/highlight-basic"
export { HighlightMultiple as Multiple } from "../compositions/examples/highlight-multiple"
export { HighlightSearchQuery as SearchQuery } from "../compositions/examples/highlight-search-query"
export { HighlightWithCustomStyle as CustomStyle } from "../compositions/examples/highlight-with-custom-style"
export { HighlightWithSquiggle as Squiggle } from "../compositions/examples/highlight-with-squiggle"
