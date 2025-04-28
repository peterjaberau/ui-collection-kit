'use client';

import * as React from 'react';
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiLockFill,
} from '@remixicon/react';
import { useSetAtom } from 'jotai';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LevelBar from '@/components/level-bar';

import { nextStepAtom } from './store';

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

export default function OnboardingStepPassword() {
  const goToNextStep = useSetAtom(nextStepAtom);
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [criteria, setCriteria] = React.useState({
    length: false,
    uppercase: false,
    number: false,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setCriteria({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
    });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordValid =
    criteria.length && criteria.uppercase && criteria.number;

  const countTrueCriteria = (criteria: { [key: string]: boolean }): number => {
    return Object.values(criteria).filter((value) => value).length;
  };

  const trueCriteriaCount = countTrueCriteria(criteria);

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
            <RiLockFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>Password Setup</div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Set up a secure password to protect your account.
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div>
        <div className='space-y-3'>
          <div className='space-y-1'>
            <Label.Root htmlFor='password'>
              Create a Password <Label.Asterisk />
            </Label.Root>
            <PasswordInput
              id='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className='space-y-1'>
            <Label.Root htmlFor='confirm-password'>
              Confirm Password <Label.Asterisk />
            </Label.Root>
            <PasswordInput
              id='confirm-password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>

        <div className='mt-2.5 space-y-2'>
          <LevelBar.Root levels={3} level={trueCriteriaCount} />
          <div className='text-paragraph-xs text-text-sub-600'>
            Must contain at least;
          </div>
          <div
            className={cn(
              'flex items-center gap-1.5 text-paragraph-xs text-text-sub-600',
            )}
          >
            {criteria.uppercase ? (
              <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
            ) : (
              <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
            )}
            At least 1 uppercase
          </div>
          <div
            className={cn(
              'flex items-center gap-1.5 text-paragraph-xs text-text-sub-600',
            )}
          >
            {criteria.number ? (
              <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
            ) : (
              <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
            )}
            At least 1 number
          </div>
          <div
            className={cn(
              'flex items-center gap-1.5 text-paragraph-xs text-text-sub-600',
            )}
          >
            {criteria.length ? (
              <RiCheckboxCircleFill className='size-4 shrink-0 text-success-base' />
            ) : (
              <RiCloseCircleFill className='size-4 shrink-0 text-text-soft-400' />
            )}
            At least 8 characters
          </div>
        </div>
      </div>

      <FancyButton.Root variant='primary' size='medium' onClick={goToNextStep}>
        Continue
      </FancyButton.Root>
    </div>
  );
}
