'use client';

import { RiHistoryLine } from '@remixicon/react';

import { DashedDivider } from '@/components/dashed-divider';
import Header from '@/components/header';
import { NewProductButton } from '@/components/new-product-button';

import OrdersSummary from './summary';
import { OrdersTable } from './table';

export default function PageOrders() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiHistoryLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Orders'
        description='Manage and track your orders'
        contentClassName='hidden lg:flex'
      >
        <NewProductButton className='hidden lg:flex' />
      </Header>

      <div className='flex flex-1 flex-col px-4 pb-6 lg:px-8'>
        <DashedDivider />
        <OrdersSummary />
        <DashedDivider />

        <OrdersTable />
      </div>
    </>
  );
}
