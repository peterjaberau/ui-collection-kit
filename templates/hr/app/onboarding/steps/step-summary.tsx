'use client';

import * as React from 'react';
import {
  RiAccountPinBoxLine,
  RiAccountPinCircleLine,
  RiAtLine,
  RiBuilding2Line,
  RiCheckboxCircleFill,
  RiMailLine,
  RiPencilLine,
} from '@remixicon/react';
import { useSetAtom } from 'jotai';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';

import { activeStepAtom } from './store';

export default function OnboardingStepSummary() {
  const setActiveStep = useSetAtom(activeStepAtom);

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
            <RiCheckboxCircleFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>
            Onboarding Summary
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Review and complete your account setup.
          </div>
        </div>
      </div>

      <div className='space-y-4 rounded-2xl bg-bg-white-0 px-4 py-[15px] ring-1 ring-inset ring-stroke-soft-200'>
        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-faded-lighter'>
            <RiAccountPinBoxLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-subheading-xs uppercase text-text-sub-600'>
              Full Name
            </div>
            <div className='text-label-sm'>James Brown</div>
          </div>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            onClick={() => setActiveStep(0)}
          >
            <Button.Icon as={RiPencilLine} />
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-faded-lighter'>
            <RiAtLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-subheading-xs uppercase text-text-sub-600'>
              Username
            </div>
            <div className='text-label-sm'>@jamesbrown</div>
          </div>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            onClick={() => setActiveStep(1)}
          >
            <Button.Icon as={RiPencilLine} />
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-faded-lighter'>
            <RiMailLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-subheading-xs uppercase text-text-sub-600'>
              Email Address
            </div>
            <div className='text-label-sm'>james@alignui.com</div>
          </div>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            onClick={() => setActiveStep(2)}
          >
            <Button.Icon as={RiPencilLine} />
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-faded-lighter'>
            <RiAccountPinCircleLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-subheading-xs uppercase text-text-sub-600'>
              Title
            </div>
            <div className='text-label-sm'>Marketing Manager</div>
          </div>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            onClick={() => setActiveStep(3)}
          >
            <Button.Icon as={RiPencilLine} />
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-faded-lighter'>
            <RiBuilding2Line className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1 space-y-1'>
            <div className='text-subheading-xs uppercase text-text-sub-600'>
              Department
            </div>
            <div className='text-label-sm'>Marketing</div>
          </div>
          <Button.Root
            variant='neutral'
            mode='ghost'
            size='xsmall'
            onClick={() => setActiveStep(4)}
          >
            <Button.Icon as={RiPencilLine} />
          </Button.Root>
        </div>
      </div>

      <FancyButton.Root variant='primary' size='medium'>
        Complete
      </FancyButton.Root>
    </div>
  );
}
