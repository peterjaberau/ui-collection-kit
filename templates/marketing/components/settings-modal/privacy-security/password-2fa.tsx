'use client';

import * as Button from '@/components/ui/button';
import { DashedDivider } from '@/components/dashed-divider';

export default function Password2FA() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Change Password
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Update password for enhanced account security.
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Change Password
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Backup Codes</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Generate backup codes for your 2FA device.
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Generate Codes
        </Button.Root>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            2FA-Authentication
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Add an extra layer of protection to your account.
          </div>
        </div>
        <Button.Root variant='neutral' mode='stroke' size='xsmall'>
          Manage Authentication
        </Button.Root>
      </div>
    </div>
  );
}
