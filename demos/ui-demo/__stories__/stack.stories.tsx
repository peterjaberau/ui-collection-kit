import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Styled / Layout / Stack",

} 

export { StackBasic as Basic } from "../__compositions__/examples/components/stack/stack-basic"
export { StackHorizontal as Horizontal } from "../__compositions__/examples/components/stack/stack-horizontal"
export { StackWithHstack as HStack } from "../__compositions__/examples/components/stack/stack-with-hstack"
export { StackWithVstack as VStack } from "../__compositions__/examples/components/stack/stack-with-vstack"
export { StackWithSeparator as Separator } from "../__compositions__/examples/components/stack/stack-with-separator"
export { StackWithResponsiveDirection as ResponsiveDirection } from "../__compositions__/examples/components/stack/stack-with-responsive-direction"
export { StackWithCustomSeparator as CustomSeparator } from "../__compositions__/examples/components/stack/stack-with-custom-separator"
export { StackWithResponsiveSeparator as ResponsiveSeparator } from "../__compositions__/examples/components/stack/stack-with-responsive-separator"
