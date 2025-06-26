import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Image",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ImageBasic as Basic } from "../__compositions__/examples/components/image/image-basic"
export { ImageCircular as Circular } from "../__compositions__/examples/components/image/image-circular"
export { ImageWithAspectRatio as AspectRatio } from "../__compositions__/examples/components/image/image-with-aspect-ratio"
export { ImageWithFit as Fit } from "../__compositions__/examples/components/image/image-with-fit"
export { ImageWithHeight as Height } from "../__compositions__/examples/components/image/image-with-height"
export { ImageWithHtmlHeight as HtmlHeight } from "../__compositions__/examples/components/image/image-with-html-height"
