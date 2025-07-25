import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Radio",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { RadioBasic as Basic } from "../compositions/examples/radio-basic"
export { RadioControlled as Controlled } from "../compositions/examples/radio-controlled"
export { RadioSizeTable as Sizes } from "../compositions/examples/radio-size-table"
export { RadioVariantTable as Variants } from "../compositions/examples/radio-variant-table"
export { RadioWithColors as Colors } from "../compositions/examples/radio-with-colors"
export { RadioWithHookForm as HookForm } from "../compositions/examples/radio-with-hook-form"
export { RadioWithVariants as DocsVariants } from "../compositions/examples/radio-with-variants"
