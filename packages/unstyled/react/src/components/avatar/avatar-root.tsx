import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { type UseAvatarProps, useAvatar } from './use-avatar'
import { AvatarProvider } from './use-avatar-context'

export interface AvatarRootBaseProps extends UseAvatarProps, PolymorphicProps {}
export interface AvatarRootProps extends HTMLProps<'div'>, AvatarRootBaseProps {}

export const AvatarRoot = forwardRef<HTMLDivElement, AvatarRootProps>((props, ref) => {
  const [useAvatarProps, localProps] = createSplitProps<UseAvatarProps>()(props, ['id', 'ids', 'onStatusChange'])
  const avatar = useAvatar(useAvatarProps)
  const mergedProps = mergeProps(avatar.getRootProps(), localProps)

  return (
    <AvatarProvider value={avatar}>
      <ark.div {...mergedProps} ref={ref} />
    </AvatarProvider>
  )
})

AvatarRoot.displayName = 'AvatarRoot'
