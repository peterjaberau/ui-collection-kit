import {
  RiArrowDownSLine,
  RiBankLine,
  RiMoneyDollarCircleFill,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Switch from '@/components/ui/switch';
import * as Textarea from '@/components/ui/textarea';
import * as Tooltip from '@/components/ui/tooltip';

import IconInfoCustomFill from '~/icons/icon-info-custom-fill.svg';

export default function SendMoneyStep3() {
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
            <RiMoneyDollarCircleFill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>Source & Amount</div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Choose the funding source and enter the amount to send money.
          </div>
        </div>
      </div>

      <div className='w-full shrink-0 rounded-20 bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 min-[420px]:w-[400px]'>
        <div className='flex items-center gap-3.5 py-4 pl-5 pr-6'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiBankLine className='size-5 text-text-sub-600' />
          </div>
          <div className='flex-1'>
            <div className='text-label-sm text-text-strong-950'>
              Checking ••0123
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              Available: $15,000.00
            </div>
          </div>
          <CompactButton.Root variant='stroke' size='large'>
            <CompactButton.Icon as={RiArrowDownSLine} />
          </CompactButton.Root>
        </div>

        <Divider.Root variant='solid-text'>Recipient Receives</Divider.Root>

        <div className='flex flex-col gap-3 p-4'>
          <div className='flex flex-col gap-1'>
            <Label.Root htmlFor='payment-method'>
              Enter Amount
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <IconInfoCustomFill className='size-5 text-text-disabled-300' />
                </Tooltip.Trigger>
                <Tooltip.Content side='top' size='xsmall'>
                  Specify the amount you wish to pay or transfer.
                </Tooltip.Content>
              </Tooltip.Root>
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.InlineAffix>$</Input.InlineAffix>
                <Input.Input placeholder='0.00' />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className='flex flex-col gap-1'>
            <Label.Root htmlFor='payment-method'>
              Description
              <Label.Sub>(Optional)</Label.Sub>
            </Label.Root>

            <Textarea.Root
              placeholder='The message you wish to send to the recipient...'
              className='min-h-[66px]'
            >
              <Textarea.CharCounter current={0} max={200} />
            </Textarea.Root>
          </div>
        </div>

        <Divider.Root />

        <div className='flex items-center gap-2 px-5 py-4'>
          <Switch.Root />
          <div className='text-paragraph-sm text-text-strong-950'>
            Recurring payment
          </div>
        </div>

        <Divider.Root />

        <div className='grid grid-cols-2 gap-4 px-5 py-4'>
          <Button.Root variant='neutral' mode='stroke' size='small'>
            Back
          </Button.Root>
          <Button.Root variant='primary' mode='filled' size='small'>
            Next
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
