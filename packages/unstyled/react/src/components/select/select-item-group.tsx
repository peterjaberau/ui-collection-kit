import { mergeProps } from '@ui-collection-kit/react'
import type { ItemGroupProps } from '@ui-collection-kit/select'
import { forwardRef, useId } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useSelectContext } from './use-select-context'
import { SelectItemGroupPropsProvider } from './use-select-item-group-props'

export interface SelectItemGroupBaseProps extends PolymorphicProps {}
export interface SelectItemGroupProps extends HTMLProps<'div'>, SelectItemGroupBaseProps {}

export const SelectItemGroup = forwardRef<HTMLDivElement, SelectItemGroupProps>((props, ref) => {
  const id = useId()
  const [_itemGroupProps, localProps] = createSplitProps<Partial<ItemGroupProps>>()(props, ['id'])
  const itemGroupProps = { id, ..._itemGroupProps }

  const select = useSelectContext()
  const mergedProps = mergeProps(select.getItemGroupProps(itemGroupProps), localProps)

  return (
    <SelectItemGroupPropsProvider value={itemGroupProps}>
      <ark.div {...mergedProps} ref={ref} />
    </SelectItemGroupPropsProvider>
  )
})

SelectItemGroup.displayName = 'SelectItemGroup'
