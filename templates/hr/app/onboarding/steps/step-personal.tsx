'use client';

import * as React from 'react';
import { RiAccountPinBoxFill } from '@remixicon/react';
import { useSetAtom } from 'jotai';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import { PhoneNumberInput } from '@/components/phone-number-input';

import { nextStepAtom } from './store';

export default function OnboardingStepPersonal() {
  const goToNextStep = useSetAtom(nextStepAtom);

  return (
    <div className='mx-auto flex w-full max-w-[392px] flex-col gap-6'>
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
            <RiAccountPinBoxFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>
            Personal Information
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Provide essential information to proceed.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

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
              />
            </Input.Wrapper>
          </Input.Root>
        </div>
        <div className='space-y-1'>
          <Label.Root htmlFor='username'>
            Username <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>

          <Input.Root>
            <Input.Affix>synergy.com/</Input.Affix>
            <Input.Wrapper>
              <Input.Input
                id='username'
                type='text'
                placeholder='jamesbrown123'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>
        <div className='space-y-1'>
          <Label.Root htmlFor='phone'>
            Phone Number <Label.Asterisk />
          </Label.Root>

          <PhoneNumberInput inputId='phone' />
        </div>
      </div>

      <FancyButton.Root variant='primary' size='medium' onClick={goToNextStep}>
        Continue
      </FancyButton.Root>
    </div>
  );
}
