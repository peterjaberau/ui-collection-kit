import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { ItemProps, FileUploadProps } from "./file-upload.types"

export const props = createProps<FileUploadProps>()([
  "accept",
  "allowDrop",
  "capture",
  "dir",
  "directory",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "locale",
  "maxFiles",
  "maxFileSize",
  "minFileSize",
  "name",
  "invalid",
  "onFileAccept",
  "onFileReject",
  "onFileChange",
  "preventDocumentDrop",
  "required",
  "translations",
  "validate",
])
export const splitProps = createSplitProps<Partial<FileUploadProps>>(props)

export const itemProps = createProps<ItemProps>()(["file"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
