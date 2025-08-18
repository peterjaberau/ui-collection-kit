import { Badge, FormatNumber, IconButton, Table } from '@chakra-ui/react'
import { LuDownload } from 'react-icons/lu'
import type { Invoice } from './data'

interface InvoiceTableProps {
  invoices: Invoice[]
}

export const InvoiceTable = (props: InvoiceTableProps) => {
  const { invoices } = props
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Reference</Table.ColumnHeader>
          <Table.ColumnHeader>Amount incl. tax</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          <Table.ColumnHeader>Date</Table.ColumnHeader>
          <Table.ColumnHeader />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {invoices.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>
              <FormatNumber value={item.amount} currency={item.currency} style="currency" />
            </Table.Cell>
            <Table.Cell>
              <Badge variant="solid" colorPalette={item.status === 'paid' ? 'green' : 'red'}>
                {item.status}
              </Badge>
            </Table.Cell>
            <Table.Cell>{item.created}</Table.Cell>
            <Table.Cell>
              <IconButton variant="ghost" size="xs">
                <LuDownload />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
