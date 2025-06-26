import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Layout / SimpleGrid",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SimpleGridBasic as Basic } from "../__compositions__/examples/components/simple-grid/simple-grid-basic"
export { SimpleGridWithAutofit as AutoFit } from "../__compositions__/examples/components/simple-grid/simple-grid-with-autofit"
export { SimpleGridWithColSpan as ColSpan } from "../__compositions__/examples/components/simple-grid/simple-grid-with-col-span"
export { SimpleGridWithColumns as Columns } from "../__compositions__/examples/components/simple-grid/simple-grid-with-columns"
export { SimpleGridWithRowAndColGap as RowColGap } from "../__compositions__/examples/components/simple-grid/simple-grid-with-row-and-col-gap"
