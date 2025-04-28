'use client';

import * as React from 'react';
import { RiGroupLine, RiShareForwardBoxFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import Header from '@/components/header';

import { Filters } from './filters';
import { TeamMembersTable } from './table';

export default function PageTeamSettings() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiGroupLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Team'
        description='Display team members and personalize preferences.'
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

      <div className='flex w-full flex-1 flex-col gap-4 px-4 py-6 lg:px-8'>
        <Filters />
        <TeamMembersTable />
      </div>
    </>
  );
}
