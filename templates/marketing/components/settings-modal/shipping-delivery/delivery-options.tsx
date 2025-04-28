'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import * as Checkbox from '@/components/ui/checkbox';
import { DashedDivider } from '@/components/dashed-divider';
import * as Select from '@/components/select-transparent';

export default function DeliveryOptions() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Order Processing Time
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set preparation time before shipping
          </div>
        </div>
        <Select.Root defaultValue='1-2-days'>
          <Select.Trigger>
            <Select.Value placeholder='Select processing time' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='same-day'>Same day processing</Select.Item>
            <Select.Item value='next-day'>Next business day</Select.Item>
            <Select.Item value='1-2-days'>1-2 business days</Select.Item>
            <Select.Item value='2-3-days'>2-3 business days</Select.Item>
            <Select.Item value='3-5-days'>3-5 business days</Select.Item>
            <Select.Item value='5-7-days'>5-7 business days</Select.Item>
            <Select.Item value='7-10-days'>7-10 business days</Select.Item>
            <Select.Item value='custom'>Custom handling time</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Estimated Delivery Time
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set expected delivery time frame
          </div>
        </div>
        <Select.Root defaultValue='3-5-days'>
          <Select.Trigger>
            <Select.Value placeholder='Select processing time' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='same-day'>Same day processing</Select.Item>
            <Select.Item value='next-day'>Next business day</Select.Item>
            <Select.Item value='1-2-days'>1-2 business days</Select.Item>
            <Select.Item value='2-3-days'>2-3 business days</Select.Item>
            <Select.Item value='3-5-days'>3-5 business days</Select.Item>
            <Select.Item value='5-7-days'>5-7 business days</Select.Item>
            <Select.Item value='7-10-days'>7-10 business days</Select.Item>
            <Select.Item value='custom'>Custom handling time</Select.Item>
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
            Order Tracking
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable order tracking for customers
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root defaultChecked id={`${uniqueId}-c1`} />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c2`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Delivery Updates
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Send email updates about delivery status
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root defaultChecked id={`${uniqueId}-c2`} />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c3`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Signature Required
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Require signature upon delivery
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c3`} />
      </div>
    </div>
  );
}
