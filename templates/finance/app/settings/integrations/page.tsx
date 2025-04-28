'use client';

import * as React from 'react';
import { RiEqualizerLine, RiShareForwardBoxFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import Header from '@/components/header';

import Apps from './apps';
import { Filters } from './filters';

export default function PageIntegrations() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiEqualizerLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Integrations'
        description='Connect and sync with essential tools and platforms.'
      >
        <Button.Root
          variant='neutral'
          mode='stroke'
          className='w-full md:w-auto'
        >
          <Button.Icon as={RiShareForwardBoxFill} />
          Export
        </Button.Root>
      </Header>

      <div className='px-4 lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex w-full flex-1 flex-col px-4 py-6 lg:px-8'>
        <div className='pb-5'>
          <Filters />
        </div>
        <Divider.Root variant='line-spacing' />
        <div className='pb-5 pt-6'>
          <div className='text-label-md text-text-strong-950'>All Apps</div>
          <div className='mt-1 text-paragraph-sm text-text-sub-600'>
            Access all the integrated tools and apps ready for your Finance &
            Banking experience.
          </div>
        </div>
        <Divider.Root variant='line-spacing' />

        <Apps />
      </div>
    </>
  );
}
