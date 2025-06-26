import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / File Upload",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { FileUploadAcceptedFiles as AcceptedFiles } from "../__compositions__/examples/components/file-upload/file-upload-accepted-files"
export { FileUploadBasic as Basic } from "../__compositions__/examples/components/file-upload/file-upload-basic"
export { FileUploadCustomPreview as CustomPreview } from "../__compositions__/examples/components/file-upload/file-upload-custom-preview"
export { FileUploadDirectory as Directory } from "../__compositions__/examples/components/file-upload/file-upload-directory"
export { FileUploadInDialog as Dialog } from "../__compositions__/examples/components/file-upload/file-upload-in-dialog"
export { FileUploadMediaCapture as MediaCapture } from "../__compositions__/examples/components/file-upload/file-upload-media-capture"
export { FileUploadMultiple as Multiple } from "../__compositions__/examples/components/file-upload/file-upload-multiple"
export { FileUploadWithDropzone as Dropzone } from "../__compositions__/examples/components/file-upload/file-upload-with-dropzone"
export { FileUploadWithHookForm as HookForm } from "../__compositions__/examples/components/file-upload/file-upload-with-hook-form"
export { FileUploadWithInput as Input } from "../__compositions__/examples/components/file-upload/file-upload-with-input"
export { FileUploadWithInputClear as InputClear } from "../__compositions__/examples/components/file-upload/file-upload-with-input-clear"
export { FileUploadWithPasteEvent as PasteEvent } from "../__compositions__/examples/components/file-upload/file-upload-with-paste-event"
export { FileUploadWithStore as Store } from "../__compositions__/examples/components/file-upload/file-upload-with-store"
