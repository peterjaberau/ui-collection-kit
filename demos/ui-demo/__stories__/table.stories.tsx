import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Table",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TableBasic as Basic } from "../__compositions__/examples/components/table/table-basic"
export { TableWithColumnBorder as ColumnBorder } from "../__compositions__/examples/components/table/table-with-column-border"
export { TableWithColumnGroup as ColumnGroup } from "../__compositions__/examples/components/table/table-with-column-group"
export { TableWithInteractive as Interactive } from "../__compositions__/examples/components/table/table-with-interactive"
export { TableWithOverflow as Overflow } from "../__compositions__/examples/components/table/table-with-overflow"
export { TableWithPagination as Pagination } from "../__compositions__/examples/components/table/table-with-pagination"
export { TableWithStickyColumn as StickyColumn } from "../__compositions__/examples/components/table/table-with-sticky-column"
export { TableWithStickyHeader as StickyHeader } from "../__compositions__/examples/components/table/table-with-sticky-header"
export { TableWithStriped as Stripe } from "../__compositions__/examples/components/table/table-with-striped"
export { TableWithSelection as Selection } from "../__compositions__/examples/components/table/table-with-selection"
export { TableWithSelectionActionBar as SelectionActionBar } from "../__compositions__/examples/components/table/table-with-selection-action-bar"
export { TableVariantTable as Variants } from "../__compositions__/examples/components/table/table-variant-table"
export { TableSizeTable as Sizes } from "../__compositions__/examples/components/table/table-size-table"
