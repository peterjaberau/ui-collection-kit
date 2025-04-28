'use client';

import {
  RiArrowRightSLine,
  RiFileCopyLine,
  RiGlobalLine,
  RiShareForwardBoxFill,
  RiShareLine,
} from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import Header from '@/components/header';

export default function PageLocalizationSettings() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiGlobalLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Localization'
        description='Customize preferences for a tailored user experience.'
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
            <div className='text-label-sm text-text-strong-950'>Language</div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Display the app in your selected language.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              English (ENG)
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
            <div className='text-label-sm text-text-strong-950'>Currency</div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              View balances in your selected currency.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              United States Dollar (USD)
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
              Timezone and Format
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Choose your timezone and preferred format.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              (GMT +03:00) Istanbul
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
              Date Format
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Choose your preferred date format.
            </div>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-paragraph-sm text-text-strong-950'>
              DD / MM / YYYY
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
