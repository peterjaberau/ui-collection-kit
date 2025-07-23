import * as toast from '@ui-kit/core-toast'

export interface CreateToasterProps extends toast.StoreProps {}

export interface CreateToasterReturn extends toast.Store {}

export const createToaster = (props: toast.StoreProps): toast.Store => {
  return toast.createStore(props)
}
