import { mergeProps } from '@ui-collection-kit/react'
import type { StepActionTriggerProps } from '@ui-collection-kit/tour'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useTourContext } from './use-tour-context'

export interface TourActionTriggerBaseProps extends PolymorphicProps, StepActionTriggerProps {}
export interface TourActionTriggerProps extends HTMLProps<'button'>, TourActionTriggerBaseProps {}

export const TourActionTrigger = forwardRef<HTMLButtonElement, TourActionTriggerProps>((props, ref) => {
  const [actionTriggerProps, localProps] = createSplitProps<StepActionTriggerProps>()(props, ['action'])
  const tour = useTourContext()
  const mergedProps = mergeProps(tour.getActionTriggerProps(actionTriggerProps), localProps)

  return (
    <ark.button {...mergedProps} ref={ref}>
      {mergedProps.children || actionTriggerProps.action.label}
    </ark.button>
  )
})

TourActionTrigger.displayName = 'TourActionTrigger'
