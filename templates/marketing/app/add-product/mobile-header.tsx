'use client';

import Link from 'next/link';
import { RiArrowLeftSLine, RiCloseLine } from '@remixicon/react';
import { useAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';

import { activeStepAtom, ADD_PRODUCT_STEPS, prevStepAtom } from './store-steps';

export default function AddProductMobileHeader() {
  const [activeStep, setActiveStep] = useAtom(activeStepAtom);
  const [prevStep, goToPrevStep] = useAtom(prevStepAtom);

  return (
    <div className='lg:hidden'>
      <div className='px-2.5 pb-3.5 pt-2.5'>
        <div className='relative flex h-9 items-center'>
          {activeStep > 0 && (
            <LinkButton.Root
              variant='gray'
              size='medium'
              onClick={goToPrevStep}
            >
              <LinkButton.Icon as={RiArrowLeftSLine} />
              Back to {ADD_PRODUCT_STEPS[prevStep - 1].label}
            </LinkButton.Root>
          )}

          <div className='flex-1' />

          <Link
            href='/'
            className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block'
          >
            <img
              src='/images/placeholder/catalyst.svg'
              alt=''
              className='size-9'
            />
          </Link>

          <Button.Root variant='neutral' mode='ghost' asChild>
            <Link href='/'>
              <Button.Icon as={RiCloseLine} />
            </Link>
          </Button.Root>
        </div>
      </div>
      <div className='h-1 w-full bg-bg-soft-200'>
        <div
          className='h-full bg-primary-base transition-all duration-200 ease-out'
          style={{
            width: `${(100 / ADD_PRODUCT_STEPS.length) * (activeStep + 1)}%`,
          }}
        />
      </div>
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-2'>
          <div className='flex size-5 items-center justify-center rounded-full bg-primary-base text-label-xs text-static-white'>
            {activeStep + 1}
          </div>
          <span className='text-paragraph-sm text-text-strong-950'>
            {ADD_PRODUCT_STEPS[activeStep].label}
          </span>
        </div>
        <div className='text-right text-paragraph-sm text-text-soft-400'>
          {activeStep + 1}/{ADD_PRODUCT_STEPS.length}
        </div>
      </div>
    </div>
  );
}
