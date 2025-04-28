'use client';

import {
  RiArrowRightSLine,
  RiFileCopyLine,
  RiShareForwardBoxFill,
  RiShareLine,
  RiUserSettingsLine,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import Header from '@/components/header';

export default function PageProfileSettings() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiUserSettingsLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Profile Settings'
        description='Customize and edit essential profile details.'
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
        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>Apex ID</div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              A-12341234
            </div>
          </div>
          <div className='flex gap-3'>
            <Button.Root variant='neutral' mode='stroke' size='xsmall'>
              <Button.Icon as={RiFileCopyLine} />
              Copy ID
            </Button.Root>
            <Button.Root variant='neutral' mode='stroke' size='xsmall'>
              <Button.Icon as={RiShareLine} />
              Share ID
            </Button.Root>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Profile Photo
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Min 400x400px, PNG or JPEG formats.
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <Avatar.Root size='56' />
            <Button.Root variant='neutral' mode='stroke' size='xsmall'>
              Upload
            </Button.Root>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>Full Name</div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Your name will be visible to your contacts.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              Arthur Taylor
            </div>
            <LinkButton.Root variant='primary' size='medium'>
              Edit
              <LinkButton.Icon as={RiArrowRightSLine} />
            </LinkButton.Root>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Email Address
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Business email address recommended.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              arthur@alignui.com
            </div>
            <LinkButton.Root variant='primary' size='medium'>
              Edit
              <LinkButton.Icon as={RiArrowRightSLine} />
            </LinkButton.Root>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Phone Number
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Business phone number recommended.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              +1 (012) 345-6789
            </div>
            <LinkButton.Root variant='primary' size='medium'>
              Edit
              <LinkButton.Icon as={RiArrowRightSLine} />
            </LinkButton.Root>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>
              Legal Address
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Legal residential address for billing details.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              12 Rue Principale
              <br />
              Ville de Québec,
              <br />
              Québec, Canada
            </div>
            <LinkButton.Root variant='primary' size='medium'>
              Edit
              <LinkButton.Icon as={RiArrowRightSLine} />
            </LinkButton.Root>
          </div>
        </div>
      </div>
    </>
  );
}
