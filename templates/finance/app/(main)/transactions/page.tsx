'use client';

import {
  RiArrowDownSLine,
  RiComputerLine,
  RiDownload2Line,
  RiFlashlightLine,
  RiHistoryLine,
  RiLineChartLine,
  RiPieChartLine,
  RiShareForwardBoxFill,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import Header from '@/components/header';
import { MoveMoneyButton } from '@/components/move-money-button';
import {
  TransactionsTable,
  TransactionTablePagination,
  type TransactionTableData,
} from '@/components/transactions-table';

import { Filters } from './filters';

const data: TransactionTableData[] = [
  {
    id: '326860a3',
    toFrom: {
      label: 'Investment Return',
      icon: RiLineChartLine,
    },
    amount: {
      type: 'enter',
      value: 560,
    },
    account: {
      label: 'Checking',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'wire',
  },
  {
    id: '326860b3',
    toFrom: {
      label: 'James Brown',
      avatar: '/images/avatar/illustration/james.png',
    },
    amount: {
      type: 'exit',
      value: 35.2,
    },
    account: {
      label: 'Ops Payroll',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'transfer-exit',
  },
  {
    id: '326860c3',
    toFrom: {
      label: 'Stock Dividend',
      icon: RiPieChartLine,
    },
    amount: {
      type: 'enter',
      value: 1250,
    },
    account: {
      label: 'AP',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'ach',
  },
  {
    id: '326860d3',
    toFrom: {
      label: 'Sophia Williams',
      avatar: '/images/avatar/illustration/sophia.png',
    },
    amount: {
      type: 'enter',
      value: 150,
    },
    account: {
      label: 'Checking',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'transfer-enter',
  },
  {
    id: '326860e3',
    toFrom: {
      label: 'Freelance Income',
      icon: RiComputerLine,
    },
    amount: {
      type: 'enter',
      value: 250,
    },
    account: {
      label: 'Checking',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'ach',
  },
  {
    id: '326860f3',
    toFrom: {
      label: 'Emma Wright',
    },
    amount: {
      type: 'exit',
      value: 21.8,
    },
    account: {
      label: 'AP',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'wire',
  },
  {
    id: '326860g3',
    toFrom: {
      label: 'Utilities Payment',
      icon: RiFlashlightLine,
    },
    amount: {
      type: 'exit',
      value: 63.75,
    },
    account: {
      label: 'Ops Payroll',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'ach',
  },
  {
    id: '326860h3',
    toFrom: {
      label: 'Matthew Johnson',
      avatar: '/images/avatar/illustration/matthew.png',
    },
    amount: {
      type: 'exit',
      value: 45,
    },
    account: {
      label: 'Checking',
    },
    date: {
      label: '2024-09-12T00:00:00Z',
    },
    method: 'transfer-exit',
  },
];

export default function PageTransactions() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiHistoryLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Transactions'
        description='Track your financial transactions to stay in control of your income and expenses.'
      >
        <Button.Root
          variant='neutral'
          mode='stroke'
          className='w-full md:w-auto'
        >
          <Button.Icon as={RiShareForwardBoxFill} />
          Export
        </Button.Root>
        <MoveMoneyButton className='hidden lg:flex' />
      </Header>

      <div className='px-4 lg:px-8'>
        <Divider.Root />
        <div className='flex items-center gap-3 py-4'>
          <div className='flex-1'>
            <div className='flex items-center gap-1.5'>
              <div className='text-label-md text-text-strong-950'>
                All Cards
              </div>
              <CompactButton.Root variant='stroke' size='medium' fullRadius>
                <CompactButton.Icon as={RiArrowDownSLine} />
              </CompactButton.Root>
            </div>
            <div className='mt-1 text-paragraph-sm text-text-sub-600'>
              Monitor and manage transactions across all your cards.
            </div>
          </div>
          <Button.Root variant='neutral' mode='stroke'>
            <Button.Icon as={RiDownload2Line} />
            Export As
          </Button.Root>
        </div>
        <Divider.Root />
      </div>

      <div className='flex flex-1 flex-col gap-4 px-4 py-6 lg:px-8'>
        <Filters />
        <TransactionsTable data={data} />
        <TransactionTablePagination />
      </div>
    </>
  );
}
