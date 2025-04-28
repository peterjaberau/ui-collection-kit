'use client';

import * as Button from '@/components/ui/button';
import { DashedDivider } from '@/components/dashed-divider';

export default function Connections() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img
            src='/images/integration/shopify.svg'
            alt=''
            className='size-6'
          />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Shopify</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Manage your online store and sync your product inventory
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Manage
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/integration/stripe.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Stripe</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Process payments securely and manage your transactions
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Manage
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/integration/paypal.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Paypal</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable secure payment options and handle transactions
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Manage
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img
            src='/images/integration/mailchimp.svg'
            alt=''
            className='size-6'
          />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Mailchimp</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Create email campaigns and manage customer communications
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Manage
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/integration/amazon.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Amazon</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            List and sell products on Amazon marketplace
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Manage
        </Button.Root>
      </div>
    </div>
  );
}
