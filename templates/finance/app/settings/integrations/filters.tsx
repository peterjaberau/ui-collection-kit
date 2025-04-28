'use client';

import { RiFilter3Fill, RiSearch2Line, RiSortDesc } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';
import * as SegmentedControl from '@/components/ui/segmented-control';

import IconCmd from '~/icons/icon-cmd.svg';

export function Filters() {
  return (
    <div className='flex flex-col justify-between gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-3'>
      <Input.Root className='lg:hidden'>
        <Input.Wrapper>
          <Input.Icon as={RiSearch2Line} />
          <Input.Input placeholder='Search...' />
          <button type='button'>
            <RiFilter3Fill className='size-5 text-text-soft-400' />
          </button>
        </Input.Wrapper>
      </Input.Root>

      <SegmentedControl.Root defaultValue='all' className='lg:w-80'>
        <SegmentedControl.List>
          <SegmentedControl.Trigger value='all'>
            All Apps
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value='connected'>
            Connected
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value='disconnected'>
            Disconnected
          </SegmentedControl.Trigger>
        </SegmentedControl.List>
      </SegmentedControl.Root>

      <div className='hidden flex-wrap gap-3 min-[560px]:flex-nowrap lg:flex'>
        <Input.Root size='small' className='w-[300px]'>
          <Input.Wrapper>
            <Input.Icon as={RiSearch2Line} />
            <Input.Input placeholder='Search...' />
            <Kbd.Root>
              <IconCmd className='size-2.5' />1
            </Kbd.Root>
          </Input.Wrapper>
        </Input.Root>

        <Button.Root
          variant='neutral'
          mode='stroke'
          size='small'
          className='flex-1 min-[560px]:flex-none'
        >
          <Button.Icon as={RiFilter3Fill} />
          Filter
        </Button.Root>
      </div>
    </div>
  );
}
