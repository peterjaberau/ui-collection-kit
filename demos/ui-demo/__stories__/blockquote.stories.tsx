import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Blockquote",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { BlockquoteBasic as Basic } from "../__compositions__/examples/components/blockquote/blockquote-basic"
export { BlockquoteVariantTable as Variants } from "../__compositions__/examples/components/blockquote/blockquote-variant-table"
export { BlockquoteWithAvatar as Avatar } from "../__compositions__/examples/components/blockquote/blockquote-with-avatar"
export { BlockquoteWithCite as Cite } from "../__compositions__/examples/components/blockquote/blockquote-with-cite"
export { BlockquoteWithCustomIcon as CustomIcon } from "../__compositions__/examples/components/blockquote/blockquote-with-custom-icon"
export { BlockquoteWithIcon as Icon } from "../__compositions__/examples/components/blockquote/blockquote-with-icon"
export { BlockquoteWithJustify as Justify } from "../__compositions__/examples/components/blockquote/blockquote-with-justify"
