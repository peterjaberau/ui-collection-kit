'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import {
  RiChatSmileLine,
  RiMailLine,
  RiShieldKeyholeLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Radio from '@/components/ui/radio';

export default function TwoFactorSecurity() {
  const [selectedMethod, setSelectedMethod] = React.useState('');

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>2FA Security</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Enable two-factor authentication to your account.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <Radio.Group
        className='flex flex-col gap-3'
        value={selectedMethod}
        onValueChange={setSelectedMethod}
      >
        <LabelPrimitives.Root className='flex cursor-pointer items-start gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[[data-state=checked]]:shadow-none has-[[data-state=checked]]:ring-primary-base'>
          <div className='flex size-10 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiChatSmileLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>SMS Code</div>
            <div className='text-paragraph-xs text-text-sub-600'>
              Receive a one-time verification code via SMS to enter during
              login.
            </div>
          </div>
          <Radio.Item id='sms' value='sms' />
        </LabelPrimitives.Root>

        <LabelPrimitives.Root className='flex cursor-pointer items-start gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[[data-state=checked]]:shadow-none has-[[data-state=checked]]:ring-primary-base'>
          <div className='flex size-10 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiMailLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>Email Code</div>
            <div className='text-paragraph-xs text-text-sub-600'>
              Get a temporary verification code sent to your email for added
              security.
            </div>
          </div>
          <Radio.Item id='email' value='email' />
        </LabelPrimitives.Root>

        <LabelPrimitives.Root className='flex cursor-pointer items-start gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:ring-transparent has-[[data-state=checked]]:shadow-none has-[[data-state=checked]]:ring-primary-base'>
          <div className='flex size-10 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiShieldKeyholeLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>Authenticator App</div>
            <div className='text-paragraph-xs text-text-sub-600'>
              Use an authenticator app to generate time-based verification codes
              for login.
            </div>
          </div>
          <Radio.Item id='authenticator' value='authenticator' />
        </LabelPrimitives.Root>
      </Radio.Group>

      <Button.Root className='mt-1 w-full' disabled={!selectedMethod}>
        Enable 2FA Security
      </Button.Root>
    </div>
  );
}
