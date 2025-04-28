'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import * as SelectPrimitives from '@radix-ui/react-select';
import { RiArrowDownSLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Select from '@/components/ui/select';
import { DashedDivider } from '@/components/dashed-divider';

export default function TaxSettings() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Tax Rate</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set default tax rate for all products
          </div>
        </div>
        <Select.Root defaultValue='18'>
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
            <Select.Item value='0'>0%</Select.Item>
            <Select.Item value='5'>5%</Select.Item>
            <Select.Item value='8'>8%</Select.Item>
            <Select.Item value='10'>10%</Select.Item>
            <Select.Item value='13'>13%</Select.Item>
            <Select.Item value='15'>15%</Select.Item>
            <Select.Item value='18'>18%</Select.Item>
            <Select.Item value='20'>20%</Select.Item>
            <Select.Item value='25'>25%</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c1`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Include Tax in Prices
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Show product prices with tax included
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c1`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c2`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Tax Details
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Display tax breakdown in cart
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c2`} defaultChecked />
      </div>
    </div>
  );
}
