'use client';

import * as React from 'react';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import { settingsModalOpenAtom } from '@/components/settings-modal';

import ContactInformation from './contact-information';
import DiscountReminder from './discount-reminder';
import StoreDetails from './store-details';

export default function StoreSettings() {
  const setSettingsModalOpen = useSetAtom(settingsModalOpenAtom);

  return (
    <div className=''>
      <div className='flex w-full flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center'>
        <div className='flex-1'>
          <DialogPrimitives.Title className='text-label-md text-text-strong-950'>
            General Settings
          </DialogPrimitives.Title>
          <DialogPrimitives.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Manage your store details and basic configurations
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

      <TabMenuHorizontal.Root defaultValue='store-details'>
        <TabMenuHorizontal.List className='px-5'>
          <TabMenuHorizontal.Trigger value='store-details'>
            Store Details
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='contact-information'>
            Contact Information
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='discount-reminder'>
            Discount Reminder
          </TabMenuHorizontal.Trigger>
        </TabMenuHorizontal.List>

        <TabMenuHorizontal.Content
          value='store-details'
          className='animate-setting-tab'
        >
          <StoreDetails />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='contact-information'
          className='animate-setting-tab'
        >
          <ContactInformation />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='discount-reminder'
          className='animate-setting-tab'
        >
          <DiscountReminder />
        </TabMenuHorizontal.Content>
      </TabMenuHorizontal.Root>
    </div>
  );
}
