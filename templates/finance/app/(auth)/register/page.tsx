'use client';

import * as React from 'react';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
  RiMailLine,
  RiUserAddFill,
  RiUserFill,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';

function PasswordInput(
  props: React.ComponentPropsWithoutRef<typeof Input.Input>,
) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input.Root>
      <Input.Wrapper>
        <Input.Icon as={RiLock2Line} />
        <Input.Input
          type={showPassword ? 'text' : 'password'}
          placeholder='••••••••••'
          {...props}
        />
        <button type='button' onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? (
            <RiEyeOffLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
          ) : (
            <RiEyeLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
          )}
        </button>
      </Input.Wrapper>
    </Input.Root>
  );
}

export default function PageRegister() {
  return (
    <div className='w-full max-w-[472px] px-4'>
      <div className='flex w-full flex-col gap-6 rounded-20 bg-bg-white-0 p-5 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 md:p-8'>
        <div className='flex flex-col items-center gap-2'>
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
              <RiUserAddFill className='size-6 text-text-sub-600 lg:size-8' />
            </div>
          </div>

          <div className='space-y-1 text-center'>
            <div className='text-title-h6 lg:text-title-h5'>
              Create a new account
            </div>
            <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
              Enter your details to register.
            </div>
          </div>
        </div>

        <Divider.Root />

        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <Label.Root htmlFor='fullname'>
              Full Name <Label.Asterisk />
            </Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Icon as={RiMailLine} />
                <Input.Input
                  id='fullname'
                  type='text'
                  placeholder='James Brown'
                  required
                />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className='flex flex-col gap-1'>
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
          </div>

          <div className='flex flex-col gap-1'>
            <Label.Root htmlFor='password'>
              Password <Label.Asterisk />
            </Label.Root>
            <PasswordInput id='password' required />
            <div className='flex gap-1 text-paragraph-xs text-text-sub-600'>
              <RiInformationFill className='size-4 shrink-0 text-text-soft-400' />
              Must contain 1 uppercase letter, 1 number, min. 8 characters.
            </div>
          </div>
        </div>

        <FancyButton.Root variant='primary' size='medium'>
          Register
        </FancyButton.Root>

        <div className='text-center text-paragraph-sm text-text-sub-600'>
          By clicking Register, you agree to accept Apex Financial&apos;s
          <div className='inline-block pt-1 align-baseline'>
            <LinkButton.Root
              variant='black'
              size='medium'
              underline
              className='px-1'
            >
              Terms of Service
            </LinkButton.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
