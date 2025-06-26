import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Tag",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TagBasic as Basic } from "../__compositions__/examples/components/tag/tag-basic"
export { TagWithAvatar as Avatar } from "../__compositions__/examples/components/tag/tag-with-avatar"
export { TagWithClose as Close } from "../__compositions__/examples/components/tag/tag-with-close"
export { TagWithColors as Colors } from "../__compositions__/examples/components/tag/tag-with-colors"
export { TagVariantTable as Variants } from "../__compositions__/examples/components/tag/tag-variant-table"
export { TagSizeTable as Sizes } from "../__compositions__/examples/components/tag/tag-size-table"
export { TagWithOverflow as Overflow } from "../__compositions__/examples/components/tag/tag-with-overflow"
