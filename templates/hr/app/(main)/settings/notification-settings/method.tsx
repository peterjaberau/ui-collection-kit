'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';

export default function Method() {
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Notification Method</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Choose how you prefer to receive notifications.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex items-start gap-2'>
          <Checkbox.Root id={`${uniqueId}-email`} defaultChecked />
          <Label.Root
            className='flex-col items-start gap-1'
            htmlFor={`${uniqueId}-email`}
          >
            Email Notifications
            <div className='text-paragraph-xs text-text-sub-600'>
              Receive notifications via email
            </div>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Checkbox.Root id={`${uniqueId}-push`} defaultChecked />
          <Label.Root
            className='flex-col items-start gap-1'
            htmlFor={`${uniqueId}-push`}
          >
            Push Notifications
            <div className='text-paragraph-xs text-text-sub-600'>
              Get real-time updates and alerts directly on your device
            </div>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Checkbox.Root id={`${uniqueId}-sms`} />
          <Label.Root
            className='flex-col items-start gap-1'
            htmlFor={`${uniqueId}-sms`}
          >
            SMS Notifications
            <div className='text-paragraph-xs text-text-sub-600'>
              Receive notifications via SMS
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
