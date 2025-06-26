import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / QrCode",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { QrCodeBasic as Basic } from "../__compositions__/examples/components/qr-code/qr-code-basic"
export { QrCodeWithErrorLevel as WithErrorLevel } from "../__compositions__/examples/components/qr-code/qr-code-with-error-level"
export { QrCodeWithExport as WithExport } from "../__compositions__/examples/components/qr-code/qr-code-with-export"
export { QrCodeWithExportWithLogo as WithExportLogo } from "../__compositions__/examples/components/qr-code/qr-code-with-export-with-logo"
export { QrCodeWithFill as WithFill } from "../__compositions__/examples/components/qr-code/qr-code-with-fill"
export { QrCodeWithInput as WithInput } from "../__compositions__/examples/components/qr-code/qr-code-with-input"
export { QrCodeWithOverlay as WithOverlay } from "../__compositions__/examples/components/qr-code/qr-code-with-overlay"
export { QrCodeWithSizes as WithSizes } from "../__compositions__/examples/components/qr-code/qr-code-with-sizes"
export { QrCodeWithSpinner as WithSpinner } from "../__compositions__/examples/components/qr-code/qr-code-with-spinner"
export { QrCodeWithStore as WithStore } from "../__compositions__/examples/components/qr-code/qr-code-with-store"
