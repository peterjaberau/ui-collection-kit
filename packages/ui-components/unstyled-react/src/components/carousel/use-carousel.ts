import * as carousel from '@ui-collection-kit/carousel'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseCarouselProps extends Optional<Omit<carousel.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseCarouselReturn extends carousel.Api<PropTypes> {}

export const useCarousel = (props: UseCarouselProps): UseCarouselReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: carousel.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(carousel.machine, machineProps)
  return carousel.connect(service, normalizeProps)
}
