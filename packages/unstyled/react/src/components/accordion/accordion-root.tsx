import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  splitRenderStrategyProps,
} from '../../utils/render-strategy'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { type UseAccordionProps, useAccordion } from './use-accordion'
import { AccordionProvider } from './use-accordion-context'

export interface AccordionRootBaseProps extends UseAccordionProps, RenderStrategyProps, PolymorphicProps {}
export interface AccordionRootProps extends Assign<HTMLProps<'div'>, AccordionRootBaseProps> {}

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>((props, ref) => {
  const [renderStrategyProps, accordionProps] = splitRenderStrategyProps(props)
  const [useAccordionProps, localProps] = createSplitProps<UseAccordionProps>()(accordionProps, [
    'collapsible',
    'defaultValue',
    'disabled',
    'id',
    'ids',
    'multiple',
    'onFocusChange',
    'onValueChange',
    'orientation',
    'value',
  ])
  const accordion = useAccordion(useAccordionProps)
  const mergedProps = mergeProps(accordion.getRootProps(), localProps)

  return (
    <AccordionProvider value={accordion}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </AccordionProvider>
  )
})

AccordionRoot.displayName = 'AccordionRoot'
