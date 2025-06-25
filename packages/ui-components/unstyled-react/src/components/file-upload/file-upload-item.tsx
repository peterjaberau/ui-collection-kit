import type { ItemProps } from '@ui-collection-kit/file-upload'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useFileUploadContext } from './use-file-upload-context'
import { FileUploadItemPropsProvider } from './use-file-upload-item-props-context'

export interface FileUploadItemBaseProps extends ItemProps, PolymorphicProps {}
export interface FileUploadItemProps extends HTMLProps<'li'>, FileUploadItemBaseProps {}

export const FileUploadItem = forwardRef<HTMLLIElement, FileUploadItemProps>((props, ref) => {
  const [itemProps, localProps] = createSplitProps<ItemProps>()(props, ['file'])
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getItemProps(itemProps), localProps)

  return (
    <FileUploadItemPropsProvider value={itemProps}>
      <ark.li {...mergedProps} ref={ref} />
    </FileUploadItemPropsProvider>
  )
})

FileUploadItem.displayName = 'FileUploadItem'
