'use client';

import * as React from 'react';
import Link from 'next/link';
import * as LabelPrimitive from '@radix-ui/react-label';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
  RiUserLine,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as SocialButton from '@/components/ui/social-button';

import IconApple from '~/icons/brands/apple.svg';
import IconGoogle from '~/icons/brands/google.svg';
import IconLinkedin from '~/icons/brands/linkedin.svg';

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

export default function PageLogin() {
  return (
    <>
      <div className='flex flex-col items-center gap-2'>
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
            <RiUserLine className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>
            Login to your account
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Enter your details to login.
          </div>
        </div>
      </div>

      <div className='grid w-full auto-cols-fr grid-flow-col gap-3'>
        <SocialButton.Root
          mode='stroke'
          brand='apple'
          className='text-social-apple'
        >
          <SocialButton.Icon as={IconApple} />
        </SocialButton.Root>
        <SocialButton.Root mode='stroke' brand='google'>
          <SocialButton.Icon as={IconGoogle} />
        </SocialButton.Root>
        <SocialButton.Root mode='stroke' brand='linkedin'>
          <SocialButton.Icon as={IconLinkedin} />
        </SocialButton.Root>
      </div>

      <Divider.Root variant='line-text'>OR</Divider.Root>

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
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='password'>
            Password <Label.Asterisk />
          </Label.Root>
          <PasswordInput id='password' required />
        </div>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-start gap-2'>
          <Checkbox.Root id='agree' />
          <LabelPrimitive.Root
            htmlFor='agree'
            className='block cursor-pointer text-paragraph-sm'
          >
            Keep me logged in
          </LabelPrimitive.Root>
        </div>
        <LinkButton.Root variant='gray' size='medium' underline asChild>
          <Link href='/reset-password'>Forgot password?</Link>
        </LinkButton.Root>
      </div>

      <FancyButton.Root variant='primary' size='medium'>
        Login
      </FancyButton.Root>
    </>
  );
}
