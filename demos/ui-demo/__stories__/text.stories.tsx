import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / Text",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TextBasic as Basic } from "../__compositions__/examples/components/text/text-basic"
export { TextWithAsProp as AsProps } from "../__compositions__/examples/components/text/text-with-as-prop"
export { TextWithTruncate as Truncate } from "../__compositions__/examples/components/text/text-with-truncate"
export { TextWithLineClamp as LineClamp } from "../__compositions__/examples/components/text/text-with-line-clamp"
export { TextWithSizes as Sizes } from "../__compositions__/examples/components/text/text-with-sizes"
export { TextWithWeights as Weights } from "../__compositions__/examples/components/text/text-with-weights"
