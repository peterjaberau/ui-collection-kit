import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Download Trigger",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { DownloadTriggerBasic as Basic } from "../compositions/examples/download-trigger-basic"
export { DownloadTriggerWithFileSize as FileSize } from "../compositions/examples/download-trigger-with-file-size"
export { DownloadTriggerSvg as Svg } from "../compositions/examples/download-trigger-svg"
export { DownloadTriggerWithPromise as Promise } from "../compositions/examples/download-trigger-with-promise"
