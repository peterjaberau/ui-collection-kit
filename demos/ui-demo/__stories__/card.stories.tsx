import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Card",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { CardBasic as Basic } from "../__compositions__/examples/components/card/card-basic"
export { CardVariantTable as Variants } from "../__compositions__/examples/components/card/card-variant-table"
export { CardSizeTable as Sizes } from "../__compositions__/examples/components/card/card-size-table"
export { CardWithAvatar as Avatar } from "../__compositions__/examples/components/card/card-with-avatar"
export { CardWithImage as Image } from "../__compositions__/examples/components/card/card-with-image"
export { CardHorizontal as Horizontal } from "../__compositions__/examples/components/card/card-horizontal"
export { CardWithForm as Form } from "../__compositions__/examples/components/card/card-with-form"
