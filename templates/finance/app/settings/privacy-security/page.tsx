'use client';

import {
  RiArrowRightSLine,
  RiFileCopyLine,
  RiShareForwardBoxFill,
  RiShareLine,
  RiShieldUserLine,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import Header from '@/components/header';

import SessionsTable from './table';

export default function PageProfileSettings() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiShieldUserLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Privacy & Security'
        description='Personalize your privacy settings and enhance the security of your account.'
      >
        <Button.Root
          variant='neutral'
          mode='stroke'
          className='w-full md:w-auto'
        >
          <Button.Icon as={RiShareForwardBoxFill} />
          Export
        </Button.Root>
      </Header>

      <div className='px-4 lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex w-full flex-col gap-5 px-4 py-6 lg:px-8'>
        <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Change Password
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Update password for enhanced account security.
            </div>
          </div>

          <Button.Root variant='neutral' mode='stroke'>
            Change Password
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Backup Codes
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Create and store new backup codes for use in the event of losing
              access to your authentication app.
            </div>
          </div>

          <Button.Root variant='neutral' mode='stroke'>
            Generate Codes
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Two-factor Authentication
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Add an extra layer of protection to your account.
            </div>
          </div>

          <Button.Root variant='neutral' mode='stroke'>
            Manage Authentication
          </Button.Root>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Active Sessions
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Monitor and manage all your active sessions.
            </div>
          </div>

          <Button.Root variant='error' mode='stroke'>
            Log Out All Sessions
          </Button.Root>
        </div>

        <SessionsTable />
      </div>
    </>
  );
}
