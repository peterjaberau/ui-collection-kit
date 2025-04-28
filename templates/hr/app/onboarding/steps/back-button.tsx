'use client';

import Link from 'next/link';
import { RiArrowLeftSLine } from '@remixicon/react';
import { useAtomValue, useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';

import { activeStepAtom, prevStepAtom } from './store';

export default function BackButton() {
  const activeStep = useAtomValue(activeStepAtom);
  const goToPrevStep = useSetAtom(prevStepAtom);

  return (
    <>
      {activeStep === 0 ? (
        <Button.Root variant='neutral' mode='stroke' size='xsmall' asChild>
          <Link href='/onboarding'>
            <Button.Icon as={RiArrowLeftSLine} />
            Back
          </Link>
        </Button.Root>
      ) : (
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='xsmall'
          onClick={goToPrevStep}
        >
          <Button.Icon as={RiArrowLeftSLine} />
          Back
        </Button.Root>
      )}
    </>
  );
}
