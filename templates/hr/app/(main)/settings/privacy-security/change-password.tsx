'use client';

import * as React from 'react';
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LevelBar from '@/components/level-bar';

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof Input.Input>
>(({ ...rest }, forwardedRef) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input.Root>
      <Input.Wrapper>
        <Input.Icon as={RiLock2Line} />
        <Input.Input
          ref={forwardedRef}
          type={showPassword ? 'text' : 'password'}
          placeholder='• • • • • • • • • • '
          {...rest}
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
});
PasswordInput.displayName = 'PasswordInput';

export default function ChangePassword() {
  const uniqueId = React.useId();
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [criteria, setCriteria] = React.useState({
    length: false,
    uppercase: false,
    number: false,
  });

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    setCriteria({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
    });
  };

  const isPasswordValid =
    criteria.length && criteria.uppercase && criteria.number;

  const countTrueCriteria = (criteria: { [key: string]: boolean }): number => {
    return Object.values(criteria).filter((value) => value).length;
  };

  const trueCriteriaCount = countTrueCriteria(criteria);

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Change Password</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Update password for enhanced account security.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-current-password`}>
            Current Password <Label.Asterisk />
          </Label.Root>

          <PasswordInput
            id={`${uniqueId}-current-password`}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-new-password`}>
            New Password <Label.Asterisk />
          </Label.Root>

          <PasswordInput
            id={`${uniqueId}-new-password`}
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-confirm-password`}>
            Confirm New Password <Label.Asterisk />
          </Label.Root>

          <PasswordInput
            id={`${uniqueId}-confirm-password`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className='-mt-0.5 space-y-2'>
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

      <div className='mt-1 grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke'>
          Discard
        </Button.Root>
        <Button.Root>Apply Changes</Button.Root>
      </div>
    </div>
  );
}
