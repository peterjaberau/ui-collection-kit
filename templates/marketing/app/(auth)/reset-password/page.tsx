'use client';

import * as React from 'react';
import {
  RiDoorLockLine,
  RiInformationFill,
  RiMailLine,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';

export default function PageResetPassword() {
  return (
    <>
      <div className='flex flex-col items-center space-y-2'>
        {/* icon */}
        <div
          className={cn(
            'relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-20',
            // bg
            'before:absolute before:inset-0 before:rounded-full',
            'before:bg-gradient-to-b before:from-primary-base before:to-transparent before:opacity-10',
          )}
        >
          <div
            className='relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200 lg:size-14'
            style={{
              boxShadow:
                '0 0 0 1px rgba(183, 83, 16, 0.04), 0 1px 1px 0.5px rgba(183, 83, 16, 0.04), 0 3px 3px -1.5px rgba(183, 83, 16, 0.02), 0 6px 6px -3px rgba(183, 83, 16, 0.04), 0 12px 12px -6px rgba(183, 83, 16, 0.04), 0px 24px 24px -12px rgba(183, 83, 16, 0.04), 0px 48px 48px -24px rgba(183, 83, 16, 0.04), inset 0px -1px 1px -0.5px rgba(183, 83, 16, 0.06)',
            }}
          >
            <RiDoorLockLine className='size-6 text-warning-base lg:size-7' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='font-inter-var text-title-h6 lg:text-title-h5'>
            Reset Password
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Enter your email to reset your password.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='space-y-3'>
        <div className='space-y-1'>
          <Label.Root htmlFor='email'>
            Email Address <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiMailLine} />
              <Input.Input
                id='email'
                type='email'
                placeholder='hello@alignui.com'
                required
              />
            </Input.Wrapper>
          </Input.Root>
          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            Enter the email with which you&apos;ve registered.
          </Hint.Root>
        </div>
      </div>

      <FancyButton.Root variant='primary' size='medium'>
        Reset Password
      </FancyButton.Root>

      <div className='flex flex-col items-center gap-1 text-center'>
        <span className='text-paragraph-sm text-text-sub-600'>
          Don’t have access anymore?
        </span>
        <LinkButton.Root variant='black' size='medium' underline>
          Try another method
        </LinkButton.Root>
      </div>
    </>
  );
}
