import {
  RiArrowDownSLine,
  RiBankLine,
  RiMoneyDollarCircleFill,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';

export default function SendMoneyStep4() {
  return (
    <div className='flex w-full max-w-[572px] shrink-0 flex-col items-center gap-6 px-4'>
      <div className='flex w-full flex-col items-center gap-2'>
        {/* icon */}
        <div
          className={cn(
            'relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-24',
            // bg
            'before:absolute before:inset-0 before:rounded-full',
            'before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10',
          )}
        >
          <div className='relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 lg:size-16'>
            <RiMoneyDollarCircleFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>Transfer Summary</div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Review summary and confirm it before finalizing your transfer.
          </div>
        </div>
      </div>

      <div className='w-full shrink-0 rounded-20 bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 min-[420px]:w-[400px]'>
        <div className='p-4 text-center'>
          <div className='text-paragraph-xs text-text-sub-600'>
            Wire to James Brown
          </div>
          <div className='mt-1 text-title-h4 text-text-strong-950'>
            $8,400.00
          </div>
        </div>

        <Divider.Root variant='solid-text'>Recipient Details</Divider.Root>

        <div className='flex flex-col gap-2 p-4'>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>Recipient</div>
            <div className='text-right text-label-sm text-text-strong-950'>
              James Brown
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>Bank</div>
            <div className='text-right text-label-sm text-text-strong-950'>
              Summit Finance Intl.
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>
              Account Number
            </div>
            <div className='text-right text-label-sm text-text-strong-950'>
              123450123
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>
              Routing Number
            </div>
            <div className='text-right text-label-sm text-text-strong-950'>
              98765432
            </div>
          </div>
        </div>

        <Divider.Root variant='solid-text'>Funding Source</Divider.Root>

        <div className='flex flex-col gap-2 p-4'>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>From</div>
            <div className='text-right text-label-sm text-text-strong-950'>
              Apex Financial, Inc.
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>Account</div>
            <div className='text-right text-label-sm text-text-strong-950'>
              Checking ••0123
            </div>
          </div>
        </div>

        <Divider.Root variant='solid-text'>Description</Divider.Root>

        <div className='flex flex-col gap-2 p-4'>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>
              Sender’s Note
            </div>
            <div className='text-right text-label-sm text-text-strong-950'>
              Best wishes!
            </div>
          </div>
        </div>

        <Divider.Root />

        <div className='grid grid-cols-2 gap-4 px-5 py-4'>
          <Button.Root variant='neutral' mode='stroke' size='small'>
            Discard
          </Button.Root>
          <Button.Root variant='primary' mode='filled' size='small'>
            Send Money
          </Button.Root>
        </div>

        <div className='px-4 pb-4 text-center text-paragraph-xs text-text-soft-400'>
          By clicking Send Money, I grant Apex permission to proceed with the
          detailed transaction.
        </div>
      </div>
    </div>
  );
}
