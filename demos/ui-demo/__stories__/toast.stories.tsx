import type { Meta } from "@storybook/react"
import { Toaster } from "@ui-collection-kit/ui"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Toast",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
        <Toaster />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ToasterBasic as Basic } from "../__compositions__/examples/components/toaster/toaster-basic"
export { ToasterClosable as Closable } from "../__compositions__/examples/components/toaster/toaster-closable"
export { ToasterLifecycle as Lifecycle } from "../__compositions__/examples/components/toaster/toaster-lifecycle"
export { ToasterPersistent as Persistent } from "../__compositions__/examples/components/toaster/toaster-persistent"
export { ToasterStatic as Static } from "../__compositions__/examples/components/toaster/toaster-static"
export { ToasterWithAction as Action } from "../__compositions__/examples/components/toaster/toaster-with-action"
export { ToasterWithDuration as Duration } from "../__compositions__/examples/components/toaster/toaster-with-duration"
export { ToasterWithExternalClose as ExternalClose } from "../__compositions__/examples/components/toaster/toaster-with-external-close"
export { ToasterWithPromise as Promise } from "../__compositions__/examples/components/toaster/toaster-with-promise"
export { ToasterWithStatus as Status } from "../__compositions__/examples/components/toaster/toaster-with-status"
export { ToasterWithUpdate as Update } from "../__compositions__/examples/components/toaster/toaster-with-update"
