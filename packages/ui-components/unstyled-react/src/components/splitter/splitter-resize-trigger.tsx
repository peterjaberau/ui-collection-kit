import { mergeProps } from '@ui-collection-kit/react'
import type { ResizeTriggerProps } from '@ui-collection-kit/splitter'
import { forwardRef } from 'react'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterResizeTriggerBaseProps extends ResizeTriggerProps, PolymorphicProps {}
export interface SplitterResizeTriggerProps extends Assign<HTMLProps<'button'>, SplitterResizeTriggerBaseProps> {}

export const SplitterResizeTrigger = forwardRef<HTMLButtonElement, SplitterResizeTriggerProps>((props, ref) => {
  const [triggerProps, localProps] = createSplitProps<ResizeTriggerProps>()(props, ['disabled', 'id'])
  const splitter = useSplitterContext()
  const mergedProps = mergeProps(splitter.getResizeTriggerProps(triggerProps), localProps)

  return <ark.button ref={ref} {...mergedProps} />
})

SplitterResizeTrigger.displayName = 'SplitterResizeTrigger'
