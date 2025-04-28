'use client';

import Link from 'next/link';
import { RiArrowLeftSLine, RiCloseLine } from '@remixicon/react';
import { useAtom } from 'jotai';

import * as CompactButton from '@/components/ui/compact-button';
import * as LinkButton from '@/components/ui/link-button';

import { activeStepAtom, ADD_PRODUCT_STEPS, prevStepAtom } from './store-steps';

export default function AddProductHeaderNavigation() {
  const [activeStep, setActiveStep] = useAtom(activeStepAtom);

  const [prevStep, goToPrevStep] = useAtom(prevStepAtom);

  return (
    <div className='relative z-20 mt-8 hidden w-full items-center lg:flex'>
      {activeStep > 0 && (
        <LinkButton.Root variant='gray' size='medium' onClick={goToPrevStep}>
          <LinkButton.Icon as={RiArrowLeftSLine} />
          Back to {ADD_PRODUCT_STEPS[prevStep - 1].label}
        </LinkButton.Root>
      )}

      <div className='flex-1' />

      <CompactButton.Root variant='ghost' size='medium' asChild>
        <Link href='/'>
          <CompactButton.Icon as={RiCloseLine} />
        </Link>
      </CompactButton.Root>
    </div>
  );
}
