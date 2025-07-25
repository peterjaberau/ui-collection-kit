import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Space",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { SpaceMarkup } from "../examples/space/Markup"
export { SpacePureJsx } from "../examples/space/PureJsx"
export { SpaceSchema } from "../examples/space/Schema"
