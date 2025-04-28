'use client';

import {
  RiArrowDownSLine,
  RiCalendarLine,
  RiFilter3Fill,
  RiSearch2Line,
  RiSettings2Line,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as ButtonGroup from '@/components/ui/button-group';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';

import IconCmd from '~/icons/icon-cmd.svg';

export default function CalendarFilters() {
  return (
    <div className='-mt-1 flex flex-col justify-between gap-4 lg:mt-0 lg:flex-row lg:flex-wrap lg:gap-3'>
      <div className='flex flex-row-reverse gap-3 lg:flex-row'>
        <Button.Root variant='neutral' mode='stroke' size='small'>
          Today
        </Button.Root>

        <ButtonGroup.Root size='small' className='min-w-0'>
          <ButtonGroup.Item>
            Last 7 days
            <ButtonGroup.Icon as={RiArrowDownSLine} />
          </ButtonGroup.Item>
          <ButtonGroup.Item className='min-w-0'>
            <ButtonGroup.Icon as={RiCalendarLine} />
            <div className='truncate'>Feb 04 - Feb 11 2024</div>
          </ButtonGroup.Item>
        </ButtonGroup.Root>
      </div>

      <Input.Root className='lg:hidden'>
        <Input.Wrapper>
          <Input.Icon as={RiSearch2Line} />
          <Input.Input placeholder='Search...' />
          <button type='button'>
            <RiFilter3Fill className='size-5 text-text-soft-400' />
          </button>
        </Input.Wrapper>
      </Input.Root>

      <div className='hidden gap-3 lg:flex'>
        <div className='w-[300px] whitespace-nowrap'>
          <Input.Root size='small'>
            <Input.Wrapper>
              <Input.Icon as={RiSearch2Line} />
              <Input.Input placeholder='Search...' />
              <Kbd.Root>
                <IconCmd className='size-2.5' />1
              </Kbd.Root>
            </Input.Wrapper>
          </Input.Root>
        </div>

        <Button.Root variant='neutral' mode='stroke' size='small'>
          <Button.Icon as={RiFilter3Fill} />
          Filter
        </Button.Root>

        <Button.Root variant='neutral' mode='stroke' size='small'>
          <Button.Icon as={RiSettings2Line} />
        </Button.Root>
      </div>
    </div>
  );
}
