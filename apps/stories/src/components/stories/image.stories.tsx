import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Image",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ImageBasic as Basic } from "../compositions/examples/image-basic"
export { ImageCircular as Circular } from "../compositions/examples/image-circular"
export { ImageWithAspectRatio as AspectRatio } from "../compositions/examples/image-with-aspect-ratio"
export { ImageWithFit as Fit } from "../compositions/examples/image-with-fit"
export { ImageWithHeight as Height } from "../compositions/examples/image-with-height"
export { ImageWithHtmlHeight as HtmlHeight } from "../compositions/examples/image-with-html-height"
