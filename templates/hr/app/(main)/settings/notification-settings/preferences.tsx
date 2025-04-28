'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';
import * as Switch from '@/components/ui/switch';

export default function Preferences() {
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Notification Preferences</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Choose what notifications you want to receive.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex items-start gap-2'>
          <Switch.Root id={`${uniqueId}-news`} defaultChecked />
          <Label.Root
            className='flex-col items-start gap-1'
            htmlFor={`${uniqueId}-news`}
          >
            News and Updates
            <div className='text-paragraph-xs text-text-sub-600'>
              Stay informed about the latest news, updates, and announcements.
            </div>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Switch.Root id={`${uniqueId}-reminders`} defaultChecked />
          <Label.Root
            className='flex-col items-start gap-1'
            htmlFor={`${uniqueId}-reminders`}
          >
            Reminders and Events
            <div className='text-paragraph-xs text-text-sub-600'>
              Get reminders for upcoming events, deadlines, and appointments.
            </div>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Switch.Root id={`${uniqueId}-promotions`} />
          <Label.Root
            className='flex-col items-start gap-1'
            htmlFor={`${uniqueId}-promotions`}
          >
            Promotions and Offers
            <div className='text-paragraph-xs text-text-sub-600'>
              Receive notifications about special promotions, discounts, and
              exclusive offers.
            </div>
          </Label.Root>
        </div>
      </div>

      <Alert.Root variant='lighter' status='information' size='xsmall'>
        <Alert.Icon as={RiInformationFill} />
        Maximize your app usage by leaving notification settings active.
      </Alert.Root>

      <div className='mt-1 grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke'>
          Discard
        </Button.Root>
        <Button.Root>Apply Changes</Button.Root>
      </div>
    </div>
  );
}
