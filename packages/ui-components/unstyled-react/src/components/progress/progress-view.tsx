import type { ViewProps } from '@ui-collection-kit/progress'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useProgressContext } from './use-progress-context'

export interface ProgressViewBaseProps extends ViewProps, PolymorphicProps {}
export interface ProgressViewProps extends HTMLProps<'span'>, ProgressViewBaseProps {}

export const ProgressView = forwardRef<HTMLSpanElement, ProgressViewProps>((props, ref) => {
  const [viewProps, localProps] = createSplitProps<ViewProps>()(props, ['state'])
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getViewProps(viewProps), localProps)

  return <ark.span {...mergedProps} ref={ref} />
})

ProgressView.displayName = 'ProgressView'
