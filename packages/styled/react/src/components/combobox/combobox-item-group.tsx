import type { ItemGroupProps } from '@ui-collection-kit/combobox'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef, useId } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useComboboxContext } from './use-combobox-context'
import { ComboboxItemGroupPropsProvider } from './use-combobox-item-group-props-context'

export interface ComboboxItemGroupBaseProps extends PolymorphicProps {}
export interface ComboboxItemGroupProps extends HTMLProps<'div'>, ComboboxItemGroupBaseProps {}

export const ComboboxItemGroup = forwardRef<HTMLDivElement, ComboboxItemGroupProps>((props, ref) => {
  const id = useId()
  const [_itemGroupProps, localProps] = createSplitProps<Partial<ItemGroupProps>>()(props, ['id'])
  const itemGroupProps = { id, ..._itemGroupProps }

  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getItemGroupProps(itemGroupProps), localProps)

  return (
    <ComboboxItemGroupPropsProvider value={itemGroupProps}>
      <ark.div {...mergedProps} ref={ref} />
    </ComboboxItemGroupPropsProvider>
  )
})

ComboboxItemGroup.displayName = 'ComboboxItemGroup'
