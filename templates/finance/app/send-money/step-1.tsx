import { RiAddLine, RiSearch2Line, RiUser6Fill } from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';
import * as Label from '@/components/ui/label';

import IconCmd from '~/icons/icon-cmd.svg';

function CustomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx={8} cy={8} r={7.875} className='fill-bg-white-0' />
      <circle cx={8} cy={8} r={6.75} fill='#1FC16B' />
      <path
        d='M8 10.263l-2.781 1.675.756-3.126L3.5 6.723l3.248-.257L8 3.5 9.25 6.466l3.249.257-2.475 2.09.756 3.124L8 10.264z'
        className='fill-text-white-0'
      />
    </svg>
  );
}

export default function SendMoneyStep1() {
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
            <RiUser6Fill className='size-6 text-text-sub-600 lg:size-8' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='text-title-h6 lg:text-title-h5'>
            Recipient Selection
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Select who will receive your money transfer.
          </div>
        </div>
      </div>

      <div className='flex w-full shrink-0 flex-col gap-3 min-[390px]:w-[352px]'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='search'>Choose Recipient</Label.Root>
          <Input.Root size='medium'>
            <Input.Wrapper>
              <Input.Icon as={RiSearch2Line} />
              <Input.Input id='search' placeholder='Search for recipients...' />
              <Kbd.Root>
                <IconCmd className='size-2.5' />1
              </Kbd.Root>
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1 rounded-20 bg-bg-white-0 p-2 pt-3 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <Divider.Root variant='text'>Saved Recipients</Divider.Root>

          <div className='flex items-center gap-3 p-2'>
            <Avatar.Root size='40'>
              <Avatar.Image src='/images/avatar/illustration/james.png' />
              <Avatar.Indicator position='top'>
                <CustomIcon />
              </Avatar.Indicator>
            </Avatar.Root>
            <div className='flex-1'>
              <div className='text-label-sm text-text-strong-950'>
                James Brown
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                james@alignui.com
              </div>
            </div>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              A-52112
            </Badge.Root>
          </div>

          <Divider.Root variant='line-spacing' />

          <div className='flex items-center gap-3 p-2'>
            <Avatar.Root size='40'>
              <Avatar.Image src='/images/avatar/illustration/sophia.png' />
            </Avatar.Root>
            <div className='flex-1'>
              <div className='text-label-sm text-text-strong-950'>
                Sophia Williams
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                +44 01 2345 6789
              </div>
            </div>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              A-52132
            </Badge.Root>
          </div>

          <Divider.Root variant='line-spacing' />

          <div className='flex items-center gap-3 p-2'>
            <Avatar.Root size='40' color='blue'>
              EW
            </Avatar.Root>
            <div className='flex-1'>
              <div className='text-label-sm text-text-strong-950'>
                Emma Wright
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                james@alignui.com
              </div>
            </div>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              A-52184
            </Badge.Root>
          </div>

          <Divider.Root variant='line-spacing' />

          <div className='flex items-center gap-3 p-2'>
            <Avatar.Root size='40' color='purple'>
              MJ
            </Avatar.Root>
            <div className='flex-1'>
              <div className='text-label-sm text-text-strong-950'>
                Matthew Johnson
              </div>
              <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                +1 (456) 789-0123
              </div>
            </div>
            <Badge.Root variant='lighter' color='gray' size='medium'>
              A-52114
            </Badge.Root>
          </div>

          <div className='p-2'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='w-full'
            >
              <Button.Icon as={RiAddLine} />
              New Recipient
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
