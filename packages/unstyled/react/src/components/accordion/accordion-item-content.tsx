import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { Collapsible } from '../collapsible'
import type { HTMLProps, PolymorphicProps } from '../factory'
import { useAccordionContext } from './use-accordion-context'
import { useAccordionItemPropsContext } from './use-accordion-item-props-context'

export interface AccordionItemContentBaseProps extends PolymorphicProps {}
export interface AccordionItemContentProps extends HTMLProps<'div'>, AccordionItemContentBaseProps {}

interface VisibilityProps {
  hidden?: boolean
  'data-state'?: string
}

const splitVisibilityProps = createSplitProps<VisibilityProps>()

export const AccordionItemContent = forwardRef<HTMLDivElement, AccordionItemContentProps>((props, ref) => {
  const accordion = useAccordionContext()
  const itemProps = useAccordionItemPropsContext()

  const contentProps = accordion.getItemContentProps(itemProps)
  const [, itemContentProps] = splitVisibilityProps(contentProps, ['hidden', 'data-state'])

  const mergedProps = mergeProps(itemContentProps, props)

  return <Collapsible.Content ref={ref} {...mergedProps} />
})

AccordionItemContent.displayName = 'AccordionItemContent'
