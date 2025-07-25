import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / Text",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { TextBasic as Basic } from "../compositions/examples/text-basic"
export { TextWithAsProp as AsProps } from "../compositions/examples/text-with-as-prop"
export { TextWithTruncate as Truncate } from "../compositions/examples/text-with-truncate"
export { TextWithLineClamp as LineClamp } from "../compositions/examples/text-with-line-clamp"
export { TextWithSizes as Sizes } from "../compositions/examples/text-with-sizes"
export { TextWithWeights as Weights } from "../compositions/examples/text-with-weights"
