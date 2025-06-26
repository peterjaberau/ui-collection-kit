import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Download Trigger",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { DownloadTriggerBasic as Basic } from "../__compositions__/examples/components/download/download-trigger-basic"
export { DownloadTriggerWithFileSize as FileSize } from "../__compositions__/examples/components/download/download-trigger-with-file-size"
export { DownloadTriggerSvg as Svg } from "../__compositions__/examples/components/download/download-trigger-svg"
export { DownloadTriggerWithPromise as Promise } from "../__compositions__/examples/components/download/download-trigger-with-promise"
