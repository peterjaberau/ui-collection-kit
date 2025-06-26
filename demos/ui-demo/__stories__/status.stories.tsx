import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Status",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { StatusBasic as Basic } from "../__compositions__/examples/components/status/status-basic"
export { StatusWithLabel as Label } from "../__compositions__/examples/components/status/status-with-label"
export { StatusSizeTable as Sizes } from "../__compositions__/examples/components/status/status-size-table"
