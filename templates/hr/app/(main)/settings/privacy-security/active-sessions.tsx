'use client';

import * as React from 'react';
import {
  RiChromeLine,
  RiCloseLine,
  RiFirefoxLine,
  RiMacbookLine,
  RiSmartphoneLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';

export default function ActiveSessions() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Active Sessions</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Monitor and manage all your active sessions.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <div className='flex size-10 items-center justify-center rounded-full bg-faded-lighter'>
            <RiMacbookLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>
              Macbook Pro
              <span className='ml-1 text-paragraph-xs text-text-sub-600'>
                (15 mins ago)
              </span>
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>
              London, United Kingdom
            </div>
          </div>
          <button type='button'>
            <RiCloseLine className='size-5 text-text-sub-600' />
          </button>
        </div>

        <div className='flex items-center gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <div className='flex size-10 items-center justify-center rounded-full bg-faded-lighter'>
            <RiSmartphoneLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>
              iPhone X
              <span className='ml-1 text-paragraph-xs text-text-sub-600'>
                (30 mins ago)
              </span>
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>
              London, United Kingdom
            </div>
          </div>
          <button type='button'>
            <RiCloseLine className='size-5 text-text-sub-600' />
          </button>
        </div>

        <div className='flex items-center gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <div className='flex size-10 items-center justify-center rounded-full bg-faded-lighter'>
            <RiFirefoxLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>
              Mozilla Firefox
              <span className='ml-1 text-paragraph-xs text-text-sub-600'>
                (45 mins ago)
              </span>
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>
              London, United Kingdom
            </div>
          </div>
          <button type='button'>
            <RiCloseLine className='size-5 text-text-sub-600' />
          </button>
        </div>

        <div className='flex items-center gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <div className='flex size-10 items-center justify-center rounded-full bg-faded-lighter'>
            <RiChromeLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>
              Google Chrome
              <span className='ml-1 text-paragraph-xs text-text-sub-600'>
                (2 hours ago)
              </span>
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>
              London, United Kingdom
            </div>
          </div>
          <button type='button'>
            <RiCloseLine className='size-5 text-text-sub-600' />
          </button>
        </div>
      </div>

      <Button.Root variant='error' mode='stroke' className='mt-1 w-full'>
        Select Devices to Log Out
      </Button.Root>
    </div>
  );
}
