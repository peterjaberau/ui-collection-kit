import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Empty State",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { EmptyStateBasic as Basic } from "../__compositions__/examples/components/empty/empty-state-basic"
export { EmptyStateWithAction as Action } from "../__compositions__/examples/components/empty/empty-state-with-action"
export { EmptyStateWithList as List } from "../__compositions__/examples/components/empty/empty-state-with-list"
export { EmptyStateSizes as Sizes } from "../__compositions__/examples/components/empty/empty-state-sizes"
