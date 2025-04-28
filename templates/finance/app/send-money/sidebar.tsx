'use client';

import * as React from 'react';
import * as TabsPrimitives from '@radix-ui/react-tabs';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
  RiHeadphoneLine,
} from '@remixicon/react';
import { useAtom, useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as VerticalStepper from '@/components/ui/vertical-stepper';

import {
  activeStepAtom,
  FLOW_STEPS,
  MAX_STEP,
  MIN_STEP,
  nextStepAtom,
  prevStepAtom,
} from './store';

export default function FlowSidebar() {
  const [activeStep, setActiveStep] = useAtom(activeStepAtom);

  const goToPrevStep = useSetAtom(prevStepAtom);
  const goToNextStep = useSetAtom(nextStepAtom);

  const getState = (index: number) => {
    if (activeStep > index) return 'completed';
    if (activeStep === index) return 'active';
    return 'default';
  };

  return (
    <>
      {/* mobile */}
      <div className='border-b border-stroke-soft-200 lg:hidden'>
        <div className='px-2.5 pb-3.5 pt-2.5'>
          <div className='relative flex h-9 items-center justify-between'>
            <div className='flex gap-2'>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                onClick={goToPrevStep}
                disabled={activeStep === MIN_STEP}
              >
                <Button.Icon as={RiArrowLeftSLine} />
                Prev
              </Button.Root>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                onClick={goToNextStep}
                disabled={activeStep === MAX_STEP}
              >
                <Button.Icon as={RiArrowRightSLine} />
                Next
              </Button.Root>
            </div>
            <Button.Root variant='neutral' mode='ghost'>
              <Button.Icon as={RiCloseLine} />
            </Button.Root>
          </div>
        </div>
        <div className='h-1 w-full bg-bg-soft-200'>
          <div
            className='h-full bg-primary-base transition-all duration-200 ease-out'
            style={{
              width: `${(100 / FLOW_STEPS.length) * (activeStep + 1)}%`,
            }}
          />
        </div>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-2'>
            <div className='flex size-5 items-center justify-center rounded-full bg-primary-base text-label-xs text-static-white'>
              {FLOW_STEPS[activeStep].indicator}
            </div>
            <span className='text-paragraph-sm text-text-strong-950'>
              {FLOW_STEPS[activeStep].label}
            </span>
          </div>
          <div className='text-right text-paragraph-sm text-text-soft-400'>
            {activeStep + 1}/{FLOW_STEPS.length}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className='hidden flex-1 flex-col self-stretch p-2 lg:flex'>
        <div className='flex w-[264px] flex-1 shrink-0 flex-col gap-3 rounded-2xl bg-bg-weak-50 px-4 pb-4 pt-5'>
          <div className='w-full flex-1'>
            <div className='mb-3 text-subheading-xs uppercase text-text-soft-400'>
              Transfer Sequence
            </div>
            <TabsPrimitives.Root
              value={`${activeStep}`}
              onValueChange={(v) => setActiveStep(Number.parseInt(v))}
            >
              <VerticalStepper.Root className='w-[232px] shrink-0' asChild>
                <TabsPrimitives.List>
                  {FLOW_STEPS.map((step, index) => (
                    <React.Fragment key={step.indicator}>
                      <VerticalStepper.Item state={getState(index)} asChild>
                        <TabsPrimitives.Trigger value={`${index}`}>
                          <VerticalStepper.ItemIndicator>
                            {step.indicator}
                          </VerticalStepper.ItemIndicator>
                          {step.label}
                          {getState(index) === 'active' && (
                            <VerticalStepper.Arrow />
                          )}
                        </TabsPrimitives.Trigger>
                      </VerticalStepper.Item>
                    </React.Fragment>
                  ))}
                </TabsPrimitives.List>
              </VerticalStepper.Root>
            </TabsPrimitives.Root>
          </div>

          <div className='flex flex-col gap-4 text-center'>
            <div className='text-paragraph-sm text-text-sub-600'>
              Having trouble with transfer?
            </div>
            <Button.Root variant='neutral' mode='stroke'>
              <Button.Icon as={RiHeadphoneLine} />
              Contact
            </Button.Root>
          </div>

          <div className='text-center text-paragraph-xs text-text-soft-400'>
            © 2023 Apex Financial
          </div>
        </div>
      </div>
    </>
  );
}
