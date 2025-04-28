'use client';

import {
  RiArrowRightSLine,
  RiBuilding2Line,
  RiShareForwardBoxFill,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import Header from '@/components/header';

export default function PageCompanySettings() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiBuilding2Line className='size-6 text-text-sub-600' />
          </div>
        }
        title='Company Settings'
        description='Customize and edit essential company details.'
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
            <div className='text-label-sm text-text-strong-950'>
              Upload Logo
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Min 400x400px, PNG or JPEG formats.
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <Avatar.Root size='56' placeholderType='company' />
            <Button.Root variant='neutral' mode='stroke' size='xsmall'>
              Upload
            </Button.Root>
          </div>
        </div>

        <Divider.Root variant='line-spacing' />

        <div className='grid gap-6 md:grid-cols-[minmax(0,26fr),minmax(0,37fr)]'>
          <div>
            <div className='text-label-sm text-text-strong-950'>Legal Name</div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              The official legal name of your company.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              Apex Financial, Inc.
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
              Tax ID Number
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Registered in the official jurisdiction of your company.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              123456789RC0001
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
              The official email address for billings and contact requests.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              apex@alignui.com
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
              The official phone number for billing and contact requests.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              +1 (416) 555-7890
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
              The official residential address for billing details and
              shipments.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              123 Main Street
              <br />
              Suite 456
              <br />
              Toronto, ON M1A 1A1
              <br />
              Canada
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
            <div className='text-label-sm text-text-strong-950'>Web Links</div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Links for your company&apos;s website and social media accounts.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              apexfinancial.com
              <br />
              linkedin.com/company/apexfinancial
              <br />
              facebook.com/apexfinancial
              <br />
              twitter.com/apexfinancial
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
