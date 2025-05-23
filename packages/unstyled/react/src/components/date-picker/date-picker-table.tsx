import type { TableProps } from '@ui-collection-kit/date-picker'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef, useId } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useDatePickerContext } from './use-date-picker-context'
import { DatePickerTablePropsProvider } from './use-date-picker-table-props-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerTableBaseProps extends Pick<TableProps, 'columns'>, PolymorphicProps {}
export interface DatePickerTableProps extends HTMLProps<'table'>, DatePickerTableBaseProps {}

export const DatePickerTable = forwardRef<HTMLTableElement, DatePickerTableProps>((props, ref) => {
  const [{ columns }, localProps] = createSplitProps<Pick<TableProps, 'columns'>>()(props, ['columns'])
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const tableProps = { columns, id: useId(), ...viewProps }
  const mergedProps = mergeProps(datePicker.getTableProps(tableProps), localProps)

  return (
    <DatePickerTablePropsProvider value={tableProps}>
      <ark.table {...mergedProps} ref={ref} />
    </DatePickerTablePropsProvider>
  )
})

DatePickerTable.displayName = 'DatePickerTable'
