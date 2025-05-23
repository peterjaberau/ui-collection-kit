import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import type { UseSplitterReturn } from './use-splitter'
import { SplitterProvider } from './use-splitter-context'

interface RootProviderProps {
  value: UseSplitterReturn
}

export interface SplitterRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface SplitterRootProviderProps extends HTMLProps<'div'>, SplitterRootProviderBaseProps {}

export const SplitterRootProvider = forwardRef<HTMLDivElement, SplitterRootProviderProps>((props, ref) => {
  const [{ value: splitter }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(splitter.getRootProps(), localProps)

  return (
    <SplitterProvider value={splitter}>
      <ark.div {...mergedProps} ref={ref} />
    </SplitterProvider>
  )
})

SplitterRootProvider.displayName = 'SplitterRootProvider'
