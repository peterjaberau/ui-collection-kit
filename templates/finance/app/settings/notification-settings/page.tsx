'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import {
  RiArrowRightSLine,
  RiNotificationBadgeLine,
  RiShareForwardBoxFill,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import * as Radio from '@/components/ui/radio';
import * as Switch from '@/components/ui/switch';
import Header from '@/components/header';

export default function PageNotificationSettings() {
  const uniqueId = React.useId();

  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiNotificationBadgeLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Notification Settings'
        description='Customize and edit notification preferences.'
      >
        <Button.Root
          variant='neutral'
          mode='stroke'
          className='w-full md:w-auto'
        >
          <Button.Icon as={RiShareForwardBoxFill} />
          Export
        </Button.Root>
      </Header>

      <div className='px-4 lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex w-full flex-col gap-5 px-4 py-6 lg:px-8'>
        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              General Notifications
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Notifications about transactions, balance and exclusive offers.
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-start gap-2'>
              <Switch.Root id={`${uniqueId}-trx-alerts`} defaultChecked />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-trx-alerts`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  Transaction Alerts
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Receive notifications for every transaction.
                </div>
              </LabelPrimitives.Root>
            </div>
            <div className='flex items-start gap-2'>
              <Switch.Root id={`${uniqueId}-low-balance-alert`} />
              <div>
                <LabelPrimitives.Root
                  className='cursor-pointer'
                  htmlFor={`${uniqueId}-low-balance-alert`}
                >
                  <div className='text-label-sm text-text-strong-950'>
                    Low Balance Alert
                  </div>
                  <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                    Receive a warning if your balance falls below $10,000.00.
                  </div>
                </LabelPrimitives.Root>
                <LinkButton.Root
                  variant='primary'
                  size='medium'
                  className='mt-2.5'
                >
                  Edit
                  <LinkButton.Icon as={RiArrowRightSLine} />
                </LinkButton.Root>
              </div>
            </div>
            <div className='flex items-start gap-2'>
              <Switch.Root id={`${uniqueId}-exclusive-offers`} />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-exclusive-offers`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  Exclusive Offers
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Get exclusive access to promotions, discounts, and more.
                </div>
              </LabelPrimitives.Root>
            </div>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Notification Method
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Choose how you prefer to receive notifications.
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-start gap-2'>
              <Checkbox.Root
                id={`${uniqueId}-email-notifications`}
                defaultChecked
              />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-email-notifications`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  Email Notifications
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Receive notifications via email
                </div>
              </LabelPrimitives.Root>
            </div>
            <div className='flex items-start gap-2'>
              <Checkbox.Root
                id={`${uniqueId}-push-notifications`}
                defaultChecked
              />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-push-notifications`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  Push Notifications
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Get real-time updates and alerts directly on your device
                </div>
              </LabelPrimitives.Root>
            </div>
            <div className='flex items-start gap-2'>
              <Checkbox.Root id={`${uniqueId}-sms-notifications`} />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-sms-notifications`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  SMS Notifications
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Receive notifications via SMS
                </div>
              </LabelPrimitives.Root>
            </div>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Theme Options
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Pick theme to personalize experience.
            </div>
          </div>
          <Radio.Group defaultValue='light' className='flex flex-col gap-5'>
            <div className='flex items-start gap-2'>
              <Radio.Item
                value='light'
                id={`${uniqueId}-light`}
                defaultChecked
              />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-light`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  Light Mode{' '}
                  <span className='text-paragraph-xs text-text-sub-600'>
                    (Default)
                  </span>
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Pick a clean and classic light theme.
                </div>
              </LabelPrimitives.Root>
            </div>
            <div className='flex items-start gap-2'>
              <Radio.Item value='dark' id={`${uniqueId}-dark`} />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-dark`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  Dark Mode
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Select a sleek and modern dark theme.
                </div>
              </LabelPrimitives.Root>
            </div>
            <div className='flex items-start gap-2'>
              <Radio.Item value='system' id={`${uniqueId}-system`} />
              <LabelPrimitives.Root
                className='cursor-pointer'
                htmlFor={`${uniqueId}-system`}
              >
                <div className='text-label-sm text-text-strong-950'>
                  System Mode
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  Adapts to your device&apos;s theme.
                </div>
              </LabelPrimitives.Root>
            </div>
          </Radio.Group>
        </div>
      </div>
    </>
  );
}
