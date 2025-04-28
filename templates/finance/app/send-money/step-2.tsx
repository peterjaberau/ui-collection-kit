import { RiBankFill, RiBankLine } from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Hint from '@/components/ui/hint';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Select from '@/components/ui/select';
import * as Tooltip from '@/components/ui/tooltip';

import IconInfoCustomFill from '~/icons/icon-info-custom-fill.svg';

export default function SendMoneyStep2() {
  return (
    <div className='flex w-full max-w-[572px] shrink-0 flex-col items-center gap-6 px-4'>
      <div className='flex w-full flex-col items-center gap-2'>
        {/* icon */}
        <div
          className={cn(
            'relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-24',
            // bg
            'before:absolute before:inset-0 before:rounded-full',
            'before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10',
          )}
        >
          <div className='relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 lg:size-16'>
            <RiBankFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>Method & Details</div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Select a payment method and see recipient bank details.
          </div>
        </div>
      </div>

      <div className='w-full shrink-0 rounded-20 bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 min-[420px]:w-[400px]'>
        <div className='flex items-center gap-3.5 p-4'>
          <Avatar.Root size='40'>
            <Avatar.Image src='/images/avatar/illustration/james.png' />
          </Avatar.Root>
          <div className='flex-1'>
            <div className='text-label-sm text-text-strong-950'>
              James Brown
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              james@alignui.com
            </div>
          </div>
          <LinkButton.Root variant='primary' size='medium'>
            Edit
          </LinkButton.Root>
        </div>

        <Divider.Root variant='solid-text'>Payment Method</Divider.Root>

        <div className='flex flex-col gap-1 p-4'>
          <Label.Root htmlFor='payment-method'>
            Select Payment Method <Label.Asterisk />
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Choose your preferred payment option for completing the
                purchase.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root defaultValue='wire'>
            <Select.Trigger id='payment-method'>
              <Select.Value placeholder='Select a payment method' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='wire'>Wire</Select.Item>
              <Select.Item value='credit-card'>Credit Card</Select.Item>
              <Select.Item value='paypal'>PayPal</Select.Item>
              <Select.Item value='apple-pay'>Apple Pay</Select.Item>
              <Select.Item value='google-pay'>Google Pay</Select.Item>
            </Select.Content>
          </Select.Root>

          <Hint.Root>Same-day transfer, no fees.</Hint.Root>
        </div>

        <Divider.Root variant='solid-text'>
          Recıpient’s Bank Details
        </Divider.Root>

        <div className='flex items-center gap-3.5 p-4'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiBankLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1'>
            <div className='text-label-sm text-text-strong-950'>
              Summit Finance International
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Account ••9876 · Routing ••5432
            </div>
          </div>
          <LinkButton.Root variant='primary' size='medium'>
            Edit
          </LinkButton.Root>
        </div>

        <Divider.Root />

        <div className='grid grid-cols-2 gap-4 p-4'>
          <Button.Root variant='neutral' mode='stroke'>
            Back
          </Button.Root>
          <Button.Root variant='primary' mode='filled'>
            Next
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
