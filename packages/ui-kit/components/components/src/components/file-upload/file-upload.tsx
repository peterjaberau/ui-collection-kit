"use client"

import type { Assign } from "@ui-kit/base"
import {
  FileUpload as ArkFileUpload,
  useFileUploadContext,
} from "@ui-kit/base/file-upload"
import { forwardRef, useMemo } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { For } from "../for"
import { CloseIcon, FileIcon } from "../icons"
import { Span } from "../span"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useFileUploadStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "fileUpload" })

export { useFileUploadStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadRootProviderBaseProps
  extends Assign<
      ArkFileUpload.RootProviderBaseProps,
      SlotRecipeProps<"fileUpload">
    >,
    UnstyledProp {}

export interface FileUploadRootProviderProps
  extends HTMLUIKitProps<"div", FileUploadRootProviderBaseProps> {}

export const FileUploadRootProvider = withProvider<
  HTMLDivElement,
  FileUploadRootProviderProps
>(ArkFileUpload.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadRootBaseProps
  extends Assign<ArkFileUpload.RootBaseProps, SlotRecipeProps<"fileUpload">>,
    UnstyledProp {}

export interface FileUploadRootProps
  extends HTMLUIKitProps<"div", FileUploadRootBaseProps> {}

export const FileUploadRoot = withProvider<HTMLDivElement, FileUploadRootProps>(
  ArkFileUpload.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const FileUploadPropsProvider =
  PropsProvider as React.Provider<FileUploadRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadClearTriggerProps
  extends HTMLUIKitProps<"button"> {}

export const FileUploadClearTrigger = withContext<
  HTMLButtonElement,
  FileUploadClearTriggerProps
>(ArkFileUpload.ClearTrigger, "clearTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadDropzoneProps
  extends HTMLUIKitProps<"li", ArkFileUpload.DropzoneBaseProps> {}

export const FileUploadDropzone = withContext<
  HTMLDivElement,
  FileUploadDropzoneProps
>(ArkFileUpload.Dropzone, "dropzone", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadDropzoneContentProps
  extends HTMLUIKitProps<"div"> {}

export const FileUploadDropzoneContent = withContext<
  HTMLDivElement,
  FileUploadDropzoneContentProps
>("div", "dropzoneContent")

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemProps
  extends HTMLUIKitProps<"li", ArkFileUpload.ItemBaseProps> {}

export const FileUploadItem = withContext<HTMLLIElement, FileUploadItemProps>(
  ArkFileUpload.Item,
  "item",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemContentProps extends HTMLUIKitProps<"div"> {}

export const FileUploadItemContent = withContext<
  HTMLDivElement,
  FileUploadItemContentProps
>("div", "itemContent")

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemDeleteTriggerProps
  extends HTMLUIKitProps<"button", ArkFileUpload.ItemDeleteTriggerBaseProps> {}

export const FileUploadItemDeleteTrigger = withContext<
  HTMLButtonElement,
  FileUploadItemDeleteTriggerProps
>(ArkFileUpload.ItemDeleteTrigger, "itemDeleteTrigger", {
  forwardAsChild: true,
  defaultProps: {
    children: <CloseIcon />,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemGroupProps
  extends HTMLUIKitProps<"ul", ArkFileUpload.ItemGroupBaseProps> {}

export const FileUploadItemGroup = withContext<
  HTMLUListElement,
  FileUploadItemGroupProps
>(ArkFileUpload.ItemGroup, "itemGroup", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemNameProps
  extends HTMLUIKitProps<"span", ArkFileUpload.ItemNameBaseProps> {}

export const FileUploadItemName = withContext<
  HTMLSpanElement,
  FileUploadItemNameProps
>(ArkFileUpload.ItemName, "itemName", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemPreviewProps
  extends HTMLUIKitProps<"div", ArkFileUpload.ItemPreviewBaseProps> {}

export const FileUploadItemPreview = withContext<
  HTMLDivElement,
  FileUploadItemPreviewProps
>(ArkFileUpload.ItemPreview, "itemPreview", {
  forwardAsChild: true,
  defaultProps: {
    children: <FileIcon />,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemPreviewImageProps
  extends HTMLUIKitProps<"img", ArkFileUpload.ItemPreviewImageBaseProps> {}

export const FileUploadItemPreviewImage = withContext<
  HTMLImageElement,
  FileUploadItemPreviewImageProps
>(ArkFileUpload.ItemPreviewImage, "itemPreviewImage", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemSizeTextProps
  extends HTMLUIKitProps<"span", ArkFileUpload.ItemSizeTextBaseProps> {}

export const FileUploadItemSizeText = withContext<
  HTMLSpanElement,
  FileUploadItemSizeTextProps
>(ArkFileUpload.ItemSizeText, "itemSizeText", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadLabelProps
  extends HTMLUIKitProps<"label", ArkFileUpload.LabelBaseProps> {}

export const FileUploadLabel = withContext<
  HTMLLabelElement,
  FileUploadLabelProps
>(ArkFileUpload.Label, "label", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadTriggerProps
  extends HTMLUIKitProps<"button", ArkFileUpload.TriggerBaseProps> {}

export const FileUploadTrigger = withContext<
  HTMLButtonElement,
  FileUploadTriggerProps
>(ArkFileUpload.Trigger, "trigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadItemsBaseProps {
  showSize?: boolean | undefined
  clearable?: boolean | undefined
  files?: File[] | undefined
}

export interface FileUploadItemsProps
  extends Omit<FileUploadItemProps, "file">,
    FileUploadItemsBaseProps {}

export const FileUploadItems = (props: FileUploadItemsProps) => {
  const { showSize, clearable, files, ...rest } = props
  const fileUpload = useFileUploadContext()
  const acceptedFiles = files ?? fileUpload.acceptedFiles
  return (
    <For each={acceptedFiles}>
      {(file) => (
        <FileUploadItem file={file} key={file.name} {...rest}>
          <FileUploadItemPreview />
          {showSize ? (
            <FileUploadItemContent>
              <FileUploadItemName />
              <FileUploadItemSizeText />
            </FileUploadItemContent>
          ) : (
            <FileUploadItemName flex="1" />
          )}
          {clearable && <FileUploadItemDeleteTrigger />}
        </FileUploadItem>
      )}
    </For>
  )
}

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadListProps extends FileUploadItemsBaseProps {}

export const FileUploadList = forwardRef<HTMLUListElement, FileUploadListProps>(
  function FileUploadList(props, ref) {
    const { showSize, clearable, files, ...rest } = props
    return (
      <FileUploadItemGroup ref={ref} {...rest}>
        <FileUploadItems
          showSize={showSize}
          clearable={clearable}
          files={files}
        />
      </FileUploadItemGroup>
    )
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface FileUploadFileTextProps extends HTMLUIKitProps<"span"> {
  fallback?: string | undefined
}

export const FileUploadFileText = forwardRef<
  HTMLSpanElement,
  FileUploadFileTextProps
>(function FileUploadFileText(props, ref) {
  const { fallback = "Select file(s)", ...rest } = props

  const fileUpload = useFileUploadContext()
  const styles = useFileUploadStyles()

  const acceptedFiles = fileUpload.acceptedFiles

  const fileText = useMemo(() => {
    if (acceptedFiles.length === 1) {
      return acceptedFiles[0].name
    }
    if (acceptedFiles.length > 1) {
      return `${acceptedFiles.length} files`
    }
    return fallback
  }, [acceptedFiles, fallback])

  return (
    <Span
      ref={ref}
      data-placeholder={fileText === fallback ? "" : undefined}
      {...rest}
      css={[styles.fileText, props.css]}
    >
      {fileText}
    </Span>
  )
})

////////////////////////////////////////////////////////////////////////////////////

export const FileUploadContext = ArkFileUpload.Context
export const FileUploadHiddenInput = ArkFileUpload.HiddenInput

export interface FileUploadFileAcceptDetails
  extends ArkFileUpload.FileAcceptDetails {}

export interface FileUploadFileRejectDetails
  extends ArkFileUpload.FileRejectDetails {}

export interface FileUploadFileChangeDetails
  extends ArkFileUpload.FileChangeDetails {}
