import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useStepsContext } from './use-steps-context'
import { useStepsItemPropsContext } from './use-steps-item-props-context'

export interface StepsIndicatorBaseProps extends PolymorphicProps {}
export interface StepsIndicatorProps extends HTMLProps<'div'>, StepsIndicatorBaseProps {}

export const StepsIndicator = forwardRef<HTMLDivElement, StepsIndicatorProps>((props, ref) => {
  const steps = useStepsContext()
  const itemProps = useStepsItemPropsContext()
  const mergedProps = mergeProps(steps.getIndicatorProps(itemProps), props)

  return <ark.div {...mergedProps} ref={ref} />
})

StepsIndicator.displayName = 'StepsIndicator'
