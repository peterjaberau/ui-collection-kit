'use client';

import * as React from 'react';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
  RiMailLine,
  RiUserAddLine,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
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

export default function PageRegister() {
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
            <RiUserAddLine className='size-6 text-warning-base lg:size-7' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='font-inter-var text-title-h6 lg:text-title-h5'>
            Create a new account
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Enter your details to register.
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
          <Label.Root htmlFor='fullname'>
            Full Name <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id='fullname'
                type='text'
                placeholder='James Brown'
                required
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

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
          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            Must contain 1 uppercase letter, 1 number, min. 8 characters.
          </Hint.Root>
        </div>
      </div>

      <FancyButton.Root variant='primary' size='medium'>
        Register
      </FancyButton.Root>
    </>
  );
}
