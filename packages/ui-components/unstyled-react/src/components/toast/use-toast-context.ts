import type { PropTypes } from '@ui-collection-kit/react'
import type * as toast from '@ui-collection-kit/toast'
import type { ReactNode } from 'react'
import { createContext } from '../../utils/create-context'

export interface UseToastContext extends toast.Api<PropTypes, ReactNode> {}

export const [ToastProvider, useToastContext] = createContext<UseToastContext>({
  name: 'ToastContext',
  hookName: 'useToastContext',
  providerName: '<ToastProvider />',
})
