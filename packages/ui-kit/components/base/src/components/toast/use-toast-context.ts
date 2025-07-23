import type { PropTypes } from '@ui-kit/core-react'
import type * as toast from '@ui-kit/core-toast'
import type { ReactNode } from 'react'
import { createContext } from '../../utils/create-context'

export interface UseToastContext extends toast.Api<PropTypes, ReactNode> {}

export const [ToastProvider, useToastContext] = createContext<UseToastContext>({
  name: 'ToastContext',
  hookName: 'useToastContext',
  providerName: '<ToastProvider />',
})
