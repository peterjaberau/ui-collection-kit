'use client';

import { RiShoppingBag2Line } from '@remixicon/react';

import { DashedDivider } from '@/components/dashed-divider';
import Header from '@/components/header';
import { NewProductButton } from '@/components/new-product-button';

import EditProductDrawer from './edit-product-drawer';
import ProductListFilters from './filters';
import ProductsList from './list';
import ProductsSummary from './summary';

export default function PageProducts() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiShoppingBag2Line className='size-6 text-text-sub-600' />
          </div>
        }
        title='My Products'
        description='Manage and collaborate on your product listings.'
        contentClassName='hidden lg:flex'
      >
        <NewProductButton className='hidden lg:flex' />
      </Header>

      <div className='px-4 pb-6 lg:px-8'>
        <DashedDivider />
        <ProductsSummary />
        <DashedDivider />

        <ProductListFilters />
        <ProductsList />
        <EditProductDrawer />
      </div>
    </>
  );
}
