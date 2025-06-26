import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Portal",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { PortalBasic as Basic } from "../__compositions__/examples/components/portal/portal-basic"
export { PortalWithIframe as Iframe } from "../__compositions__/examples/components/portal/portal-with-iframe"
export { PortalWithContainer as Container } from "../__compositions__/examples/components/portal/portal-with-container"
