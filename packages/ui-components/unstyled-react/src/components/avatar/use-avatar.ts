import * as avatar from '@ui-collection-kit/avatar'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseAvatarProps extends Optional<Omit<avatar.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseAvatarReturn extends avatar.Api<PropTypes> {}

export const useAvatar = (props?: UseAvatarProps): UseAvatarReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const context: avatar.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(avatar.machine, context)
  return avatar.connect(service, normalizeProps)
}
