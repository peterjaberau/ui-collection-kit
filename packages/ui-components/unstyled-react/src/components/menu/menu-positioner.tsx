import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { usePresenceContext } from '../presence'
import { useMenuContext } from './use-menu-context'

export interface MenuPositionerBaseProps extends PolymorphicProps {}
export interface MenuPositionerProps extends HTMLProps<'div'>, MenuPositionerBaseProps {}

export const MenuPositioner = forwardRef<HTMLDivElement, MenuPositionerProps>((props, ref) => {
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getPositionerProps(), props)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
})

MenuPositioner.displayName = 'MenuPositioner'
