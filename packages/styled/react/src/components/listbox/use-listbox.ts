import * as listbox from '@ui-collection-kit/listbox'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'
import type { CollectionItem, ListCollection } from '../collection'

export interface UseListboxProps<T extends CollectionItem>
  extends Optional<Omit<listbox.Props<T>, 'dir' | 'getRootNode' | 'collection'>, 'id'> {
  /**
   * The collection of items
   */
  collection: ListCollection<T>
}

export interface UseListboxReturn<T extends CollectionItem> extends listbox.Api<PropTypes, T> {}

export const useListbox = <T extends CollectionItem>(props: UseListboxProps<T>): UseListboxReturn<T> => {
  const id = useId()
  const { dir } = useLocaleContext()
  const { getRootNode } = useEnvironmentContext()

  const machineProps: listbox.Props<T> = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(listbox.machine, machineProps)
  return listbox.connect(service, normalizeProps)
}
