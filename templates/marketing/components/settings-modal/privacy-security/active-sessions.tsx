'use client';

import * as Button from '@/components/ui/button';

import SessionsTable from './sessions-table';

export default function ActiveSessions() {
  return (
    <div className='flex w-full min-w-0 flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:flex sm:items-center sm:justify-between md:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Active Sessions
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Monitor and manage all your active sessions.
          </div>
        </div>

        <Button.Root variant='error' mode='stroke' size='xsmall'>
          Log Out All Sessions
        </Button.Root>
      </div>

      <SessionsTable />
    </div>
  );
}
