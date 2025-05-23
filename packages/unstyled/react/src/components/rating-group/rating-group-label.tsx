import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useRatingGroupContext } from './use-rating-group-context'

export interface RatingGroupLabelBaseProps extends PolymorphicProps {}
export interface RatingGroupLabelProps extends HTMLProps<'label'>, RatingGroupLabelBaseProps {}

export const RatingGroupLabel = forwardRef<HTMLLabelElement, RatingGroupLabelProps>((props, ref) => {
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.getLabelProps(), props)

  return <ark.label {...mergedProps} ref={ref} />
})

RatingGroupLabel.displayName = 'RatingGroupLabel'
