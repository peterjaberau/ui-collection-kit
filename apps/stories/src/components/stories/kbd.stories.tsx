import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Kbd",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { KbdBasic as Basic } from "../compositions/examples/kbd-basic"
export { KbdFunctionKeys as FunctionKeys } from "../compositions/examples/kbd-function-keys"
export { KbdSizeTable as Sizes } from "../compositions/examples/kbd-size-table"
export { KbdVariantTable as Variants } from "../compositions/examples/kbd-variant-table"
export { KbdWithCombinations as Combinations } from "../compositions/examples/kbd-with-combinations"
