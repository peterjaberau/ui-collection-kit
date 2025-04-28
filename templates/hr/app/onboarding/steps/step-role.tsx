'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {
  RiSuitcaseLine,
  RiUser2Line,
  RiUserSettingsFill,
} from '@remixicon/react';
import { useSetAtom } from 'jotai';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Radio from '@/components/ui/radio';

import { nextStepAtom } from './store';

export default function OnboardingStepRole() {
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
            <RiUserSettingsFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>Role Selection</div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Choose your role within Synergy.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <Radio.Group className='space-y-3'>
        <LabelPrimitive.Root
          className={cn(
            'flex cursor-pointer items-start gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out',
            // checked
            'has-[[data-state=checked]]:shadow-none has-[[data-state=checked]]:ring-primary-base',
          )}
        >
          <div className='flex size-10 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
            <RiUser2Line className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>I&apos;m an Employee</div>
            <div className='text-paragraph-xs text-text-sub-600'>
              Join as an employee to access Synergy.
            </div>
          </div>
          <Radio.Item value='employee' />
        </LabelPrimitive.Root>
        <LabelPrimitive.Root
          className={cn(
            'flex cursor-pointer items-start gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 transition duration-200 ease-out',
            // checked
            'has-[[data-state=checked]]:shadow-none has-[[data-state=checked]]:ring-primary-base',
          )}
        >
          <div className='flex size-10 items-center justify-center rounded-full ring-1 ring-inset ring-stroke-soft-200'>
            <RiSuitcaseLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-label-sm'>I&apos;m an Employer</div>
            <div className='text-paragraph-xs text-text-sub-600'>
              Join as an employer to access Synergy.
            </div>
          </div>
          <Radio.Item value='employer' />
        </LabelPrimitive.Root>
      </Radio.Group>

      <FancyButton.Root variant='primary' size='medium' onClick={goToNextStep}>
        Continue
      </FancyButton.Root>
    </div>
  );
}
