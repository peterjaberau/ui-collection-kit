import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselItemGroupBaseProps extends PolymorphicProps {}
export interface CarouselItemGroupProps extends HTMLProps<'div'>, CarouselItemGroupBaseProps {}

export const CarouselItemGroup = forwardRef<HTMLDivElement, CarouselItemGroupProps>((props, ref) => {
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getItemGroupProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

CarouselItemGroup.displayName = 'CarouselItemGroup'
