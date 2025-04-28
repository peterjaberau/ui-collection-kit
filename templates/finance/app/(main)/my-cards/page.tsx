'use client';

import { RiBankCardLine } from '@remixicon/react';

import * as Divider from '@/components/ui/divider';
import Header from '@/components/header';
import { MoveMoneyButton } from '@/components/move-money-button';

import { Filters } from './filters';
import CardsList from './list';

export default function PageMyCards() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiBankCardLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='My Cards'
        description='Organize and access your payment cards.'
        contentClassName='hidden lg:flex'
      >
        <MoveMoneyButton />
      </Header>

      <div className='lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex flex-col gap-6 px-4 py-6 lg:px-8'>
        <Filters />
        <CardsList />
      </div>
    </>
  );
}
