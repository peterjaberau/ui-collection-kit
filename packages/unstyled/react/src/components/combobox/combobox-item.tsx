import type { ItemProps } from '@ui-collection-kit/combobox'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useComboboxContext } from './use-combobox-context'
import { ComboboxItemProvider } from './use-combobox-item-context'
import { ComboboxItemPropsProvider } from './use-combobox-item-props-context'

export interface ComboboxItemBaseProps extends ItemProps, PolymorphicProps {}
export interface ComboboxItemProps extends HTMLProps<'div'>, ComboboxItemBaseProps {}

export const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItemProps>((props, ref) => {
  const [itemProps, localProps] = createSplitProps<ItemProps>()(props, ['item', 'persistFocus'])
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getItemProps(itemProps), localProps)
  const itemState = combobox.getItemState(itemProps)

  return (
    <ComboboxItemPropsProvider value={itemProps}>
      <ComboboxItemProvider value={itemState}>
        <ark.div {...mergedProps} ref={ref} />
      </ComboboxItemProvider>
    </ComboboxItemPropsProvider>
  )
})

ComboboxItem.displayName = 'ComboboxItem'
