import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / Prose",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ProseBasic as Basic } from "../__compositions__/examples/components/prose/prose-basic"
export { ProseSink as Sink } from "../__compositions__/examples/components/prose/prose-sink"
export { ProseWithBlockquote as Blockquote } from "../__compositions__/examples/components/prose/prose-with-blockquote"
export { ProseWithList as List } from "../__compositions__/examples/components/prose/prose-with-list"
export { ProseWithReactMarkdown as ReactMarkdown } from "../__compositions__/examples/components/prose/prose-with-react-markdown"
export { ProseWithTable as Table } from "../__compositions__/examples/components/prose/prose-with-table"
