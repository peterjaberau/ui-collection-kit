import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Checkmark",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { CheckmarkBasic as Basic } from "../__compositions__/examples/components/checkmark/checkmark-basic"
