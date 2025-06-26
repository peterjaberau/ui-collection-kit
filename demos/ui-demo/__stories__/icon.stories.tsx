import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Icon",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { IconBasic as Basic } from "../__compositions__/examples/components/icon/icon-basic"
export { IconWithAsProp as AsProp } from "../__compositions__/examples/components/icon/icon-with-as-prop"
export { IconWithCreateIcon as CreateIcon } from "../__compositions__/examples/components/icon/icon-with-create-icon"
export { IconWithCustomSvg as CustomSvg } from "../__compositions__/examples/components/icon/icon-with-custom-svg"
export { IconWithReactIcon as ReactIcon } from "../__compositions__/examples/components/icon/icon-with-react-icon"
export { IconWithSizes as Sizes } from "../__compositions__/examples/components/icon/icon-with-sizes"
