import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Layout / Container",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ContainerBasic as Basic } from "../compositions/examples/container-basic"
export { ContainerWithSizes as Sizes } from "../compositions/examples/container-with-sizes"
export { ContainerWithFluid as Fluid } from "../compositions/examples/container-with-fluid"
