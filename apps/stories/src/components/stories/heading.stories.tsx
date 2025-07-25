import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / Heading",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { HeadingBasic as Basic } from "../compositions/examples/heading-basic"
export { HeadingWithSizes as Sizes } from "../compositions/examples/heading-with-sizes"
export { HeadingWithAsProp as AsProps } from "../compositions/examples/heading-with-as-prop"
export { HeadingWithWeights as Weights } from "../compositions/examples/heading-with-weights"
export { HeadingWithHighlight as Highlight } from "../compositions/examples/heading-with-highlight"
export { HeadingWithComposition as Composition } from "../compositions/examples/heading-with-composition"
export { HeadingWithGradient as Gradient } from "../compositions/examples/heading-with-gradient"
