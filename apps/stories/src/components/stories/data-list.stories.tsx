import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Data List",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { DataListBasic as Basic } from "../compositions/examples/data-list-basic"
export { DataListSizeTable as Sizes } from "../compositions/examples/data-list-size-table"
export { DataListVertical as Vertical } from "../compositions/examples/data-list-vertical"
export { DataListWithInfo as Info } from "../compositions/examples/data-list-with-info"
export { DataListWithSeparator as Separator } from "../compositions/examples/data-list-with-separator"
export { DataListWithVariants as Variants } from "../compositions/examples/data-list-with-variants"
