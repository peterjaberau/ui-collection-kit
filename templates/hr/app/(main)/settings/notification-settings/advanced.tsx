'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';
import * as Switch from '@/components/ui/switch';

export default function Advanced() {
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Advanced Preferences</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Choose advanced notifications you want to receive.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex items-start gap-2'>
          <Switch.Root id={`${uniqueId}-leave-attendance`} defaultChecked />
          <Label.Root
            className='flex-col gap-1 items-start'
            htmlFor={`${uniqueId}-leave-attendance`}
          >
            Leave and Attendance
            <div className='text-paragraph-xs text-text-sub-600'>
              Updates on approved leaves, attendance records, and important
              attendance-related reminders.
            </div>
          </Label.Root>
        </div>

        <div className='flex items-start gap-2'>
          <Switch.Root id={`${uniqueId}-deadline`} defaultChecked />
          <Label.Root
            className='flex-col gap-1 items-start'
            htmlFor={`${uniqueId}-deadline`}
          >
            Deadline Notification
            <div className='text-paragraph-xs text-text-sub-600'>
              Receive timely reminders before approaching deadlines.
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
