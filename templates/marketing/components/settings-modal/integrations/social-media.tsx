'use client';

import * as Button from '@/components/ui/button';
import { DashedDivider } from '@/components/dashed-divider';

export default function SocialMedia() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/social/facebook.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Facebook</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Connect your Facebook account to share products and manage ads
          </div>
        </div>
        <Button.Root variant='error' mode='stroke' size='xsmall'>
          Disconnect
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/social/instagram.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Instagram</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Share your products and stories directly to Instagram Shopping
          </div>
        </div>
        <Button.Root variant='error' mode='stroke' size='xsmall'>
          Disconnect
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/social/x.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>X (Twitter)</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Share updates and engage with customers on X (Twitter)
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Connect
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/social/tiktok.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>Tiktok</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Create and manage TikTok shop listings and ad campaigns
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Connect
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-3.5 sm:flex-row sm:items-center'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
          <img src='/images/social/whatsapp.svg' alt='' className='size-6' />
        </div>
        <div className='flex-1'>
          <div className='text-label-sm text-text-strong-950'>WhatsApp</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable customer messaging and order updates via WhatsApp
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Connect
        </Button.Root>
      </div>
    </div>
  );
}
