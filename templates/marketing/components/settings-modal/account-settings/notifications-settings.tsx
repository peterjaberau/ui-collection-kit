'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import * as Switch from '@/components/ui/switch';
import { DashedDivider } from '@/components/dashed-divider';

export default function NotificationsSettings() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center gap-5'>
        <Switch.Root defaultChecked id={`${uniqueId}-s1`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-s1`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Sales Reports
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Receive daily, weekly, or monthly reports
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Switch.Root defaultChecked id={`${uniqueId}-s2`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-s2`}
        >
          <div className='text-label-sm text-text-strong-950'>New Orders</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Get notified when you receive a new order
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Switch.Root id={`${uniqueId}-s3`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-s3`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Marketing Updates
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            News about products and features
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Switch.Root id={`${uniqueId}-s4`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-s4`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Orders Alerts
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Get instant push alerts for order status changes
          </div>
        </LabelPrimitives.Root>
      </div>
    </div>
  );
}
