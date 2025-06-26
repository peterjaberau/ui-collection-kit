import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Data List",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { DataListBasic as Basic } from "../__compositions__/examples/components/data-list/data-list-basic"
export { DataListSizeTable as Sizes } from "../__compositions__/examples/components/data-list/data-list-size-table"
export { DataListVertical as Vertical } from "../__compositions__/examples/components/data-list/data-list-vertical"
export { DataListWithInfo as Info } from "../__compositions__/examples/components/data-list/data-list-with-info"
export { DataListWithSeparator as Separator } from "../__compositions__/examples/components/data-list/data-list-with-separator"
export { DataListWithVariants as Variants } from "../__compositions__/examples/components/data-list/data-list-with-variants"
