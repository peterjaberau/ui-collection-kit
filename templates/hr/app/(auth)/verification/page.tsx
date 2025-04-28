'use client';

import * as React from 'react';
import { RiMailCheckLine } from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as DigitInput from '@/components/ui/digit-input';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as LinkButton from '@/components/ui/link-button';

export default function PageResetPassword() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <>
      <div className='flex flex-col items-center space-y-2'>
        {/* icon */}
        <div
          className={cn(
            'relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-24',
            // bg
            'before:absolute before:inset-0 before:rounded-full',
            'before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10',
            // stroke
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-gradient-to-b after:from-neutral-500 after:to-transparent after:opacity-[.16]',
            'after:mask-exclude after:p-px',
          )}
        >
          <div className='relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 lg:size-16'>
            <RiMailCheckLine className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>
            Enter Verification Code
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            We’ve sent a code to{' '}
            <span className='text-label-md text-text-strong-950'>
              james@alignui.com
            </span>
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <DigitInput.Root
        numInputs={4}
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
        shouldAutoFocus
      />

      <FancyButton.Root variant='primary'>Verify</FancyButton.Root>

      <div className='flex flex-col items-center gap-1 text-center'>
        <span className='text-paragraph-sm text-text-sub-600'>
          Experiencing issues receiving the code?
        </span>
        <LinkButton.Root variant='black' underline>
          Resend code
        </LinkButton.Root>
      </div>
    </>
  );
}
