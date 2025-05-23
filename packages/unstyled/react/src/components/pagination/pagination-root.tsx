import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { type UsePaginationProps, usePagination } from './use-pagination'
import { PaginationProvider } from './use-pagination-context'

export interface PaginationRootBaseProps extends UsePaginationProps, PolymorphicProps {}
export interface PaginationRootProps extends HTMLProps<'nav'>, PaginationRootBaseProps {}

export const PaginationRoot = forwardRef<HTMLElement, PaginationRootProps>((props, ref) => {
  const [paginationProps, localProps] = createSplitProps<UsePaginationProps>()(props, [
    'count',
    'defaultPage',
    'defaultPageSize',
    'id',
    'ids',
    'onPageChange',
    'onPageSizeChange',
    'page',
    'pageSize',
    'siblingCount',
    'translations',
    'type',
  ])

  const pagination = usePagination(paginationProps)
  const mergedProps = mergeProps(pagination.getRootProps(), localProps)

  return (
    <PaginationProvider value={pagination}>
      <ark.nav {...mergedProps} ref={ref} />
    </PaginationProvider>
  )
})

PaginationRoot.displayName = 'PaginationRoot'
