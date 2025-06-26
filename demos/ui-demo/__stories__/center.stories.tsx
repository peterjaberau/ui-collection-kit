import { Box } from "@chakra-ui/react"

export default {
  title: "Layout / Center",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { CenterBasic as Basic } from "../__compositions__/examples/components/center/center-basic"
export { CenterWithAbsolute as Absolute } from "../__compositions__/examples/components/center/center-with-absolute"
export { CenterWithIcons as Icons } from "../__compositions__/examples/components/center/center-with-icons"
export { CenterWithInline as Inline } from "../__compositions__/examples/components/center/center-with-inline"
export { CenterWithSquare as Square } from "../__compositions__/examples/components/center/center-with-square"
