import {
  RiAddLine,
  RiGroupLine,
  RiShareForwardBoxLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import Header from '@/app/(main)/header';

import { MembersTable } from './table';

export default function PageTeams() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiGroupLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Teams'
        description="Manage and collaborate within your organization's teams."
      >
        <Button.Root
          variant='neutral'
          mode='stroke'
          className='w-full lg:hidden'
        >
          <Button.Icon as={RiShareForwardBoxLine} />
          Export
        </Button.Root>
        <Button.Root className='w-full lg:hidden'>
          <Button.Icon as={RiAddLine} />
          Invite Member
        </Button.Root>
      </Header>

      <div className='lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex flex-1 flex-col px-4 lg:px-8 lg:pb-6'>
        <div className='flex items-center gap-3 pb-4 pt-5 lg:pt-4'>
          <div className='flex-1 space-y-1'>
            <div className='text-label-lg'>Members</div>
            <div className='text-paragraph-sm text-text-sub-600'>
              Display all the team members and essential details.
            </div>
          </div>

          <div className='hidden gap-3 lg:flex'>
            <Button.Root variant='neutral' mode='stroke'>
              <Button.Icon as={RiShareForwardBoxLine} />
              Export
            </Button.Root>
            <Button.Root>
              <Button.Icon as={RiAddLine} />
              Invite Member
            </Button.Root>
          </div>
        </div>

        <Divider.Root className='hidden lg:flex' />

        <MembersTable className='lg:mt-5' />
      </div>
    </>
  );
}
