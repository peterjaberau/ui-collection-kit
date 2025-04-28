'use client';

import * as React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {
  RiArrowDownSLine,
  RiFilter3Line,
  RiLayoutGridLine,
  RiListUnordered,
  RiSearch2Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';

export default function ProductListFilters() {
  const [viewType, setViewType] = React.useState<'grid' | 'list'>('grid');

  return (
    <div className='flex flex-col gap-3 py-6 md:flex-row'>
      <Input.Root size='small' className='flex-1 rounded-10'>
        <Input.Wrapper>
          <Input.Icon as={RiSearch2Line} />
          <Input.Input type='text' placeholder='Search products...' />
        </Input.Wrapper>
      </Input.Root>

      <div className='flex flex-wrap gap-3 sm:flex-nowrap'>
        <RadioGroup.Root
          value={viewType}
          onValueChange={(v) => setViewType(v as any)}
          className='flex h-9 items-center rounded-10 bg-bg-white-0 px-0.5 ring-1 ring-inset ring-stroke-soft-200'
        >
          <RadioGroup.Item
            value='grid'
            id='grid'
            className='flex h-7 items-center px-2 text-text-sub-600 transition duration-200 ease-out data-[state=checked]:text-primary-base'
          >
            <RiLayoutGridLine className='size-5' />
          </RadioGroup.Item>
          <div className='relative h-4 w-0 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-stroke-soft-200' />
          <RadioGroup.Item
            value='list'
            id='list'
            className='flex h-7 items-center px-2 text-text-sub-600 transition duration-200 ease-out data-[state=checked]:text-primary-base'
          >
            <RiListUnordered className='size-5' />
          </RadioGroup.Item>
        </RadioGroup.Root>

        <Button.Root
          size='small'
          variant='neutral'
          mode='stroke'
          className='rounded-10'
        >
          Last 7 days
          <Button.Icon as={RiArrowDownSLine} />
        </Button.Root>

        <Button.Root
          size='small'
          variant='neutral'
          mode='stroke'
          className='rounded-10'
        >
          Newest
          <Button.Icon as={RiArrowDownSLine} />
        </Button.Root>

        <Button.Root
          size='small'
          variant='neutral'
          mode='stroke'
          className='rounded-10'
        >
          <Button.Icon as={RiFilter3Line} />
          Filter
        </Button.Root>
      </div>
    </div>
  );
}
