import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useTabsContext } from './use-tabs-context'

export interface TabIndicatorBaseProps extends PolymorphicProps {}
export interface TabIndicatorProps extends HTMLProps<'div'>, TabIndicatorBaseProps {}

export const TabIndicator = forwardRef<HTMLDivElement, TabIndicatorProps>((props, ref) => {
  const tabs = useTabsContext()
  const mergedProps = mergeProps(tabs.getIndicatorProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

TabIndicator.displayName = 'TabIndicator'
