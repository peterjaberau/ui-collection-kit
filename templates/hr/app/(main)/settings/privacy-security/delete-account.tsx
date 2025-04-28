'use client';

import * as React from 'react';
import {
  RiErrorWarningFill,
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export default function DeleteAccount() {
  const uniqueId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Delete Account</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Manage the process of deleting account.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <Alert.Root variant='lighter' status='error' size='xsmall'>
        <Alert.Icon as={RiErrorWarningFill} />
        This action cannot be undone.
      </Alert.Root>

      <p className='text-paragraph-sm text-text-sub-600'>
        All of your data, including your profile, posts, and personal
        information, will be permanently removed.
        <br />
        <br />
        By entering your password, you confirm that you understand and accept
        the consequences of deleting your account.
      </p>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor={`${uniqueId}-confirm`}>
          Confirm Deletion <Label.Asterisk />
        </Label.Root>

        <Input.Root>
          <Input.Wrapper>
            <Input.Icon as={RiLock2Line} />
            <Input.Input
              id={`${uniqueId}-confirm`}
              type={showPassword ? 'text' : 'password'}
              placeholder='• • • • • • • • • • '
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

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          Provide your password to proceed with account deletion.
        </Hint.Root>
      </div>

      <div className='mt-1 grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke'>
          Cancel
        </Button.Root>
        <Button.Root variant='error'>Delete Account</Button.Root>
      </div>
    </div>
  );
}
