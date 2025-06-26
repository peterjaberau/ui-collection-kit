import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Clipboard",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ClipboardBasic as Basic } from "../__compositions__/examples/components/clipboard/clipboard-basic"
export { ClipboardWithButton as Button } from "../__compositions__/examples/components/clipboard/clipboard-with-button"
export { ClipboardWithTimeout as Timeout } from "../__compositions__/examples/components/clipboard/clipboard-with-timeout"
export { ClipboardWithInput as Input } from "../__compositions__/examples/components/clipboard/clipboard-with-input"
export { ClipboardWithLink as Link } from "../__compositions__/examples/components/clipboard/clipboard-with-link"
