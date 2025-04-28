'use client';

import * as React from 'react';
import { RiAddLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { DashedDivider } from '@/components/dashed-divider';

export default function ShippingZones() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Shipping Zones
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Configure shipping rates by region
          </div>
        </div>

        <Button.Root
          variant='primary'
          mode='lighter'
          size='xsmall'
          className='rounded-10'
        >
          <Button.Icon as={RiAddLine} />
          Add Zone
        </Button.Root>
      </div>

      <DashedDivider />

      <div className='flex items-center justify-between gap-3.5'>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Domestic</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Turkey (All regions)
          </div>
          <div className='mt-3 flex flex-wrap gap-2'>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              Standard: $29.90
            </Badge.Root>
            <Badge.Root variant='lighter' color='green' size='medium'>
              Active
            </Badge.Root>
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Edit Regions
        </Button.Root>
      </div>

      <DashedDivider />

      <div className='flex items-center justify-between gap-3.5'>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Europe</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            European Union Countries
          </div>
          <div className='mt-3 flex flex-wrap gap-2'>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              Standard: $29.90
            </Badge.Root>
            <Badge.Root variant='lighter' color='green' size='medium'>
              Active
            </Badge.Root>
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Edit Regions
        </Button.Root>
      </div>

      <DashedDivider />

      <div className='flex items-center justify-between gap-3.5'>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>
            International
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Rest of the World
          </div>
          <div className='mt-3 flex flex-wrap gap-2'>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              Standard: $29.90
            </Badge.Root>
            <Badge.Root variant='lighter' color='orange' size='medium'>
              Limited
            </Badge.Root>
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Edit Regions
        </Button.Root>
      </div>
    </div>
  );
}
