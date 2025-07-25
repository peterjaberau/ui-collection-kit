import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Portal",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { PortalBasic as Basic } from "../compositions/examples/portal-basic"
export { PortalWithIframe as Iframe } from "../compositions/examples/portal-with-iframe"
export { PortalWithContainer as Container } from "../compositions/examples/portal-with-container"
