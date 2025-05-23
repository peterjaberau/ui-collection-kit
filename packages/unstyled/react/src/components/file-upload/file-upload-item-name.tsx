import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export interface FileUploadItemNameBaseProps extends PolymorphicProps {}
export interface FileUploadItemNameProps extends HTMLProps<'div'>, FileUploadItemNameBaseProps {}

export const FileUploadItemName = forwardRef<HTMLDivElement, FileUploadItemNameProps>((props, ref) => {
  const { children, ...rest } = props
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(fileUpload.getItemNameProps(itemProps), rest)

  return (
    <ark.div {...mergedProps} ref={ref}>
      {children || itemProps.file.name}
    </ark.div>
  )
})

FileUploadItemName.displayName = 'FileUploadItemName'
