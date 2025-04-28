'use client';

import * as React from 'react';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import { settingsModalOpenAtom } from '@/components/settings-modal';

import CurrencySettings from './currency-settings';
import PaymentMethod from './payment-method';
import TaxSettings from './tax-settings';

export default function PaymentBilling() {
  const setSettingsModalOpen = useSetAtom(settingsModalOpenAtom);

  return (
    <div className=''>
      <div className='flex w-full flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center'>
        <div className='flex-1'>
          <DialogPrimitives.Title className='text-label-md text-text-strong-950'>
            Payment & Billing
          </DialogPrimitives.Title>
          <DialogPrimitives.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Configure your payment methods and billing preferences
          </DialogPrimitives.Description>
        </div>
        <div className='grid grid-cols-2 items-center gap-3 sm:flex'>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='small'
            className='rounded-10'
            onClick={() => setSettingsModalOpen(false)}
          >
            Discard
          </Button.Root>
          <Button.Root size='small' className='rounded-10'>
            Save Changes
          </Button.Root>
        </div>
      </div>

      <TabMenuHorizontal.Root defaultValue='payment-mehod'>
        <TabMenuHorizontal.List className='px-5'>
          <TabMenuHorizontal.Trigger value='payment-mehod'>
            Payment Method
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='currency-settings'>
            Currency Settings
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='tax-settings'>
            Tax Settings
          </TabMenuHorizontal.Trigger>
        </TabMenuHorizontal.List>

        <TabMenuHorizontal.Content
          value='payment-mehod'
          className='animate-setting-tab'
        >
          <PaymentMethod />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='currency-settings'
          className='animate-setting-tab'
        >
          <CurrencySettings />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='tax-settings'
          className='animate-setting-tab'
        >
          <TaxSettings />
        </TabMenuHorizontal.Content>
      </TabMenuHorizontal.Root>
    </div>
  );
}
