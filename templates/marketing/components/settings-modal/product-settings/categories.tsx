'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import * as SelectPrimitives from '@radix-ui/react-select';
import { RiArrowDownSLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Select from '@/components/ui/select';
import * as Switch from '@/components/ui/switch';
import { DashedDivider } from '@/components/dashed-divider';

export default function Categories() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Electronics</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Electronic devices, gadgets and accessories
          </div>
        </div>
        <Select.Root defaultValue='active'>
          <SelectPrimitives.Trigger asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='rounded-10'
            >
              <Select.Value />
              <Button.Icon as={RiArrowDownSLine} />
            </Button.Root>
          </SelectPrimitives.Trigger>
          <Select.Content>
            <Select.Item value='active'>Active</Select.Item>
            <Select.Item value='draft'>Draft</Select.Item>
            <Select.Item value='hidden'>Hidden</Select.Item>
            <Select.Item value='archived'>Archived</Select.Item>
            <Select.Item value='scheduled'>Scheduled</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Clothing</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Fashion items and accessories
          </div>
        </div>
        <Select.Root defaultValue='active'>
          <SelectPrimitives.Trigger asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='rounded-10'
            >
              <Select.Value />
              <Button.Icon as={RiArrowDownSLine} />
            </Button.Root>
          </SelectPrimitives.Trigger>
          <Select.Content>
            <Select.Item value='active'>Active</Select.Item>
            <Select.Item value='draft'>Draft</Select.Item>
            <Select.Item value='hidden'>Hidden</Select.Item>
            <Select.Item value='archived'>Archived</Select.Item>
            <Select.Item value='scheduled'>Scheduled</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Home & Garden
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Home decoration and garden supplies
          </div>
        </div>
        <Select.Root defaultValue='active'>
          <SelectPrimitives.Trigger asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='rounded-10'
            >
              <Select.Value />
              <Button.Icon as={RiArrowDownSLine} />
            </Button.Root>
          </SelectPrimitives.Trigger>
          <Select.Content>
            <Select.Item value='active'>Active</Select.Item>
            <Select.Item value='draft'>Draft</Select.Item>
            <Select.Item value='hidden'>Hidden</Select.Item>
            <Select.Item value='archived'>Archived</Select.Item>
            <Select.Item value='scheduled'>Scheduled</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-s1`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Category Description
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Show descriptions in category listings
          </div>
        </LabelPrimitives.Root>
        <Switch.Root id={`${uniqueId}-s1`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-s2`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Product Count
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Show number of items in categories
          </div>
        </LabelPrimitives.Root>
        <Switch.Root id={`${uniqueId}-s2`} defaultChecked />
      </div>
      <DashedDivider />
    </div>
  );
}
