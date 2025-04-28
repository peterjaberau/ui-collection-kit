'use client';

import * as React from 'react';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import { settingsModalOpenAtom } from '@/components/settings-modal';

import DeliveryOptions from './delivery-options';
import ShippingMethods from './shipping-methods';
import ShippingZones from './shipping-zones';

export default function ShippingDelivery() {
  const setSettingsModalOpen = useSetAtom(settingsModalOpenAtom);

  return (
    <div className=''>
      <div className='flex w-full flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center'>
        <div className='flex-1'>
          <DialogPrimitives.Title className='text-label-md text-text-strong-950'>
            Shipping & Delivery
          </DialogPrimitives.Title>
          <DialogPrimitives.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Configure your shipping and delivery settings
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

      <TabMenuHorizontal.Root defaultValue='shipping-methods'>
        <TabMenuHorizontal.List className='px-5'>
          <TabMenuHorizontal.Trigger value='shipping-methods'>
            Shipping Methods
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='delivery-options'>
            Delivery Options
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='shipping-zones'>
            Shipping Zones
          </TabMenuHorizontal.Trigger>
        </TabMenuHorizontal.List>

        <TabMenuHorizontal.Content
          value='shipping-methods'
          className='animate-setting-tab'
        >
          <ShippingMethods />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='delivery-options'
          className='animate-setting-tab'
        >
          <DeliveryOptions />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='shipping-zones'
          className='animate-setting-tab'
        >
          <ShippingZones />
        </TabMenuHorizontal.Content>
      </TabMenuHorizontal.Root>
    </div>
  );
}
