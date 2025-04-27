import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselNextTriggerBaseProps extends PolymorphicProps {}
export interface CarouselNextTriggerProps extends HTMLProps<'button'>, CarouselNextTriggerBaseProps {}

export const CarouselNextTrigger = forwardRef<HTMLButtonElement, CarouselNextTriggerProps>((props, ref) => {
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getNextTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

CarouselNextTrigger.displayName = 'CarouselNextTrigger'
