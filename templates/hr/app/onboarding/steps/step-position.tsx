'use client';

import * as React from 'react';
import { RiAccountPinCircleFill, RiInformationFill } from '@remixicon/react';
import { useSetAtom } from 'jotai';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Hint from '@/components/ui/hint';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Select from '@/components/ui/select';
import * as Textarea from '@/components/ui/textarea';
import * as Tooltip from '@/components/ui/tooltip';

import { nextStepAtom } from './store';
import IconInfoCustomFill from '~/icons/icon-info-custom-fill.svg';

export default function OnboardingStepPosition() {
  const goToNextStep = useSetAtom(nextStepAtom);
  const [biography, setBiography] = React.useState('');

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
            <RiAccountPinCircleFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>
            Position Selection
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Select your department and title.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='space-y-3'>
        <div className='space-y-1'>
          <Label.Root htmlFor='department'>
            Select Department <Label.Asterisk />
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Choose a department from the list.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root>
            <Select.Trigger id='department'>
              <Select.Value placeholder='e.g. Human Resources' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='human-resources'>Human Resources</Select.Item>
              <Select.Item value='Sales'>Sales</Select.Item>
              <Select.Item value='it'>IT</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='title'>
            Select Title
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Pick a title for the selected department.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root>
            <Select.Trigger id='title'>
              <Select.Value placeholder='Your Title' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='frontend'>Frontend</Select.Item>
              <Select.Item value='backend'>Backend</Select.Item>
              <Select.Item value='fullstack'>Fullstack</Select.Item>
              <Select.Item value='devops'>Devops</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='biography'>
            Biography <Label.Asterisk /> <Label.Sub>(Optional)</Label.Sub>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Enter a brief biography or personal description.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Textarea.Root
            id='biography'
            placeholder='Describe yourself...'
            className='min-h-[58px]'
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          >
            <Textarea.CharCounter current={biography.length} max={200} />
          </Textarea.Root>

          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            It will be displayed on your profile.
          </Hint.Root>
        </div>
      </div>

      <FancyButton.Root variant='primary' size='medium' onClick={goToNextStep}>
        Continue
      </FancyButton.Root>

      <div className='text-center text-paragraph-sm text-text-sub-600'>
        Want to fill in later?{' '}
        <LinkButton.Root variant='black' underline onClick={goToNextStep}>
          Skip this step
        </LinkButton.Root>
      </div>
    </div>
  );
}
