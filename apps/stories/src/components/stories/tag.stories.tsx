import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Tag",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { TagBasic as Basic } from "../compositions/examples/tag-basic"
export { TagWithAvatar as Avatar } from "../compositions/examples/tag-with-avatar"
export { TagWithClose as Close } from "../compositions/examples/tag-with-close"
export { TagWithColors as Colors } from "../compositions/examples/tag-with-colors"
export { TagVariantTable as Variants } from "../compositions/examples/tag-variant-table"
export { TagSizeTable as Sizes } from "../compositions/examples/tag-size-table"
export { TagWithOverflow as Overflow } from "../compositions/examples/tag-with-overflow"
