import type { IndicatorProps } from '@ui-collection-kit/carousel'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselIndicatorBaseProps extends IndicatorProps, PolymorphicProps {}
export interface CarouselIndicatorProps extends HTMLProps<'button'>, CarouselIndicatorBaseProps {}

export const CarouselIndicator = forwardRef<HTMLButtonElement, CarouselIndicatorProps>((props, ref) => {
  const [indicatorProps, localProps] = createSplitProps<IndicatorProps>()(props, ['readOnly', 'index'])

  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getIndicatorProps(indicatorProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
})

CarouselIndicator.displayName = 'CarouselIndicator'
