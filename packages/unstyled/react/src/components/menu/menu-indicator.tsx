import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useMenuContext } from './use-menu-context'

export interface MenuIndicatorBaseProps extends PolymorphicProps {}
export interface MenuIndicatorProps extends HTMLProps<'div'>, MenuIndicatorBaseProps {}

export const MenuIndicator = forwardRef<HTMLDivElement, MenuIndicatorProps>((props, ref) => {
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getIndicatorProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

MenuIndicator.displayName = 'MenuIndicator'
