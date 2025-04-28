'use client';

import * as LabelPrimitives from '@radix-ui/react-label';
import { RiAddLine, RiBankCardLine, RiBankLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Switch from '@/components/ui/switch';
import { DashedDivider } from '@/components/dashed-divider';

export default function PaymentMethod() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Payment Methods
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Configure available payment options
          </div>
        </div>

        <Button.Root
          variant='primary'
          mode='lighter'
          size='xsmall'
          className='rounded-10'
        >
          <Button.Icon as={RiAddLine} />
          Add Payment Method
        </Button.Root>
      </div>

      <DashedDivider />

      <LabelPrimitives.Root className='flex cursor-pointer items-center justify-between gap-3.5'>
        <div className='flex flex-1 items-start gap-3.5'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
            <RiBankCardLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1'>
            <div className='text-label-sm text-text-strong-950'>
              Credit Card
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Accept Visa, Mastercard, American Express
            </div>
            <div className='mt-3 flex flex-wrap gap-2'>
              <Badge.Root variant='lighter' color='gray' size='medium'>
                2.9% + €0.30
              </Badge.Root>
              <Badge.Root variant='lighter' color='green' size='medium'>
                Active
              </Badge.Root>
            </div>
          </div>
        </div>
        <Switch.Root defaultChecked />
      </LabelPrimitives.Root>

      <DashedDivider />

      <LabelPrimitives.Root className='flex cursor-pointer items-center justify-between gap-3.5'>
        <div className='flex flex-1 items-start gap-3.5'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
            <RiBankLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1'>
            <div className='text-label-sm text-text-strong-950'>
              Bank Transfer
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Manual bank transfer payments
            </div>
            <div className='mt-3 flex flex-wrap gap-2'>
              <Badge.Root variant='lighter' color='gray' size='medium'>
                No fee
              </Badge.Root>
              <Badge.Root variant='lighter' color='green' size='medium'>
                Active
              </Badge.Root>
            </div>
          </div>
        </div>
        <Switch.Root defaultChecked />
      </LabelPrimitives.Root>
    </div>
  );
}
