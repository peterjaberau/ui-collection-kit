import type { ItemProps } from '@ui-collection-kit/carousel'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselItemBaseProps extends ItemProps, PolymorphicProps {}
export interface CarouselItemProps extends HTMLProps<'div'>, CarouselItemBaseProps {}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>((props, ref) => {
  const [itemProps, localProps] = createSplitProps<ItemProps>()(props, ['index', 'snapAlign'])
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getItemProps(itemProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
})

CarouselItem.displayName = 'CarouselItem'
