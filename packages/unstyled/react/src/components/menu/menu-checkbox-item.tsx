import type { OptionItemProps } from '@ui-collection-kit/menu'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useMenuContext } from './use-menu-context'
import { MenuItemProvider } from './use-menu-item-context'
import { MenuOptionItemPropsProvider } from './use-menu-option-item-props-context'

type PartialOptionItemProps = Omit<OptionItemProps, 'type'>

export interface MenuCheckboxItemBaseProps extends PartialOptionItemProps, PolymorphicProps {}
export interface MenuCheckboxItemProps extends HTMLProps<'div'>, MenuCheckboxItemBaseProps {}

export const MenuCheckboxItem = forwardRef<HTMLDivElement, MenuCheckboxItemProps>((props, ref) => {
  const [partialOptionItemProps, localProps] = createSplitProps<PartialOptionItemProps>()(props, [
    'checked',
    'closeOnSelect',
    'disabled',
    'onCheckedChange',
    'value',
    'valueText',
  ])
  const optionItemProps: OptionItemProps = {
    ...partialOptionItemProps,
    type: 'checkbox',
  }
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getOptionItemProps(optionItemProps), localProps)
  const optionItemState = menu.getOptionItemState(optionItemProps)

  return (
    <MenuOptionItemPropsProvider value={optionItemProps}>
      <MenuItemProvider value={optionItemState}>
        <ark.div {...mergedProps} ref={ref} />
      </MenuItemProvider>
    </MenuOptionItemPropsProvider>
  )
})

MenuCheckboxItem.displayName = 'MenuCheckboxItem'
