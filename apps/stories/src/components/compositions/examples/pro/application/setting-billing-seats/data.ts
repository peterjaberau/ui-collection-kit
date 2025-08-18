export interface Invoice {
  id: string
  amount: number
  status: 'paid' | 'failed'
  created: string
  invoice_pdf: string | null
  hosted_invoice_url: string | null
  currency: string
  customer_email: string
  period_start: string
  period_end: string
}

export const invoices: Invoice[] = [
  {
    id: 'in_1234567890',
    amount: 39.99,
    status: 'paid',
    created: '2024-01-15',
    invoice_pdf: '#',
    hosted_invoice_url: '#',
    currency: 'usd',
    customer_email: 'user@example.com',
    period_start: '2024-01-01',
    period_end: '2024-01-31',
  },
  {
    id: 'in_0987654321',
    amount: 39.99,
    status: 'paid',
    created: '2023-12-15',
    invoice_pdf: '#',
    hosted_invoice_url: '#',
    currency: 'usd',
    customer_email: 'user@example.com',
    period_start: '2023-12-01',
    period_end: '2023-12-31',
  },
  {
    id: 'in_5432109876',
    amount: 39.99,
    status: 'failed',
    created: '2023-11-15',
    invoice_pdf: null,
    hosted_invoice_url: null,
    currency: 'usd',
    customer_email: 'user@example.com',
    period_start: '2023-11-01',
    period_end: '2023-11-30',
  },
]
