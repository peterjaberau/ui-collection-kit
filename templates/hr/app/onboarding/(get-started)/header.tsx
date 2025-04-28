import Link from 'next/link';
import { RiCloseLine, RiHeadphoneLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';

export default function Header() {
  return (
    <div className='border-b border-stroke-soft-200 bg-bg-white-0 lg:h-[88px]'>
      <div className='mx-auto flex h-full w-full max-w-[1392px] items-center justify-between gap-6 px-4 pb-3.5 pt-2.5 lg:px-5 lg:py-0'>
        <Link href='/' className='shrink-0'>
          <img
            src='/images/placeholder/synergy.svg'
            alt=''
            className='size-10'
          />
        </Link>
        <div className='flex gap-3'>
          <div className='flex items-center gap-4'>
            <span className='text-paragraph-sm text-text-sub-600'>
              Need help?
            </span>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='lg:hidden'
            >
              <Button.Icon as={RiHeadphoneLine} />
            </Button.Root>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='medium'
              className='hidden lg:flex'
            >
              <Button.Icon as={RiHeadphoneLine} />
              Contact Us
            </Button.Root>
          </div>
          <div className='flex w-1 shrink-0 items-center before:h-full before:w-px before:bg-stroke-soft-200 lg:hidden' />
          <Button.Root variant='neutral' mode='ghost' className='ml-auto'>
            <Button.Icon as={RiCloseLine} />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
