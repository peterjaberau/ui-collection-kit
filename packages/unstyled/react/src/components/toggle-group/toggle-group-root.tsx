import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { type UseToggleGroupProps, useToggleGroup } from './use-toggle-group'
import { ToggleGroupProvider } from './use-toggle-group-context'

export interface ToggleGroupRootBaseProps extends UseToggleGroupProps, PolymorphicProps {}
export interface ToggleGroupRootProps extends Assign<HTMLProps<'div'>, ToggleGroupRootBaseProps> {}

export const ToggleGroupRoot = forwardRef<HTMLDivElement, ToggleGroupRootProps>((props, ref) => {
  const [useToggleGroupProps, localProps] = createSplitProps<UseToggleGroupProps>()(props, [
    'defaultValue',
    'deselectable',
    'disabled',
    'id',
    'ids',
    'loopFocus',
    'multiple',
    'onValueChange',
    'orientation',
    'rovingFocus',
    'value',
  ])
  const togglegroup = useToggleGroup(useToggleGroupProps)
  const mergedProps = mergeProps(togglegroup.getRootProps(), localProps)

  return (
    <ToggleGroupProvider value={togglegroup}>
      <ark.div {...mergedProps} ref={ref} />
    </ToggleGroupProvider>
  )
})

ToggleGroupRoot.displayName = 'ToggleGroupRoot'
