import type { StepAction } from '@ui-collection-kit/tour'
import type { ReactNode } from 'react'
import { useTourContext } from './use-tour-context'

export interface TourActionsProps {
  children: (actions: StepAction[]) => ReactNode
}

export const TourActions = (props: TourActionsProps) => props.children(useTourContext().step?.actions ?? [])
