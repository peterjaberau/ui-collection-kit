'use client';

import {
  RiArrowDownSLine,
  RiCalendarLine,
  RiFilter3Line,
  RiSearch2Line,
  RiShareForwardBoxLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as ButtonGroup from '@/components/ui/button-group';
import * as Input from '@/components/ui/input';

export function OrdersTableFilters() {
  return (
    <div className='flex flex-col gap-3 pb-[26px] pt-6 xl:flex-row'>
      <div className='flex flex-1 flex-col gap-3 sm:flex-row'>
        <Input.Root size='small' className='flex-1 rounded-10 sm:max-w-[352px]'>
          <Input.Wrapper>
            <Input.Icon as={RiSearch2Line} />
            <Input.Input type='text' placeholder='Search orders...' />
          </Input.Wrapper>
        </Input.Root>

        <ButtonGroup.Root size='small' className='min-w-0'>
          <ButtonGroup.Item className='pr-5'>
            Last 7 days
            <ButtonGroup.Icon as={RiArrowDownSLine} />
          </ButtonGroup.Item>
          <ButtonGroup.Item className='min-w-0 pl-5'>
            <ButtonGroup.Icon as={RiCalendarLine} />
            <div className='truncate'>Feb 04 - Feb 11, 2024</div>
          </ButtonGroup.Item>
        </ButtonGroup.Root>
      </div>

      <div className='flex flex-wrap gap-3 sm:flex-nowrap'>
        <Button.Root
          size='small'
          variant='neutral'
          mode='stroke'
          className='rounded-10'
        >
          All Status
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

        <Button.Root
          size='small'
          variant='neutral'
          mode='stroke'
          className='rounded-10'
        >
          <Button.Icon as={RiShareForwardBoxLine} />
          Export
        </Button.Root>
      </div>
    </div>
  );
}
