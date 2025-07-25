import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Icon",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { IconBasic as Basic } from "../compositions/examples/icon-basic"
export { IconWithAsProp as AsProp } from "../compositions/examples/icon-with-as-prop"
export { IconWithCreateIcon as CreateIcon } from "../compositions/examples/icon-with-create-icon"
export { IconWithCustomSvg as CustomSvg } from "../compositions/examples/icon-with-custom-svg"
export { IconWithReactIcon as ReactIcon } from "../compositions/examples/icon-with-react-icon"
export { IconWithSizes as Sizes } from "../compositions/examples/icon-with-sizes"
