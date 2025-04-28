'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { RiCloseLine, RiHeadphoneLine } from '@remixicon/react';
import { useAtomValue } from 'jotai';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';

import FlowSidebar from './sidebar';
import SendMoneyStep1 from './step-1';
import SendMoneyStep2 from './step-2';
import SendMoneyStep3 from './step-3';
import SendMoneyStep4 from './step-4';
import { activeStepAtom } from './store';

type StepComponents = {
  [key: number]: React.ComponentType;
};

const stepComponents: StepComponents = {
  0: SendMoneyStep1,
  1: SendMoneyStep2,
  2: SendMoneyStep3,
  3: SendMoneyStep4,
};

export default function PageSendMoney() {
  const activeStep = useAtomValue(activeStepAtom);

  return (
    <div className='flex min-h-screen flex-col lg:grid lg:grid-cols-[auto,minmax(0,1fr)] lg:items-start'>
      <FlowSidebar />
      <div className='relative isolate mx-auto flex w-full max-w-[1392px] flex-1 flex-col'>
        <img
          src='/images/onboarding-pattern.svg'
          alt=''
          width={964}
          height={456}
          className='pointer-events-none absolute left-1/2 top-0 -z-10 hidden -translate-x-1/2 lg:block'
        />

        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className='fixed right-8 top-6 hidden lg:flex'
        >
          <Button.Icon as={RiCloseLine} />
        </Button.Root>

        <TabsPrimitive.Root
          value={`${activeStep}`}
          className='flex w-full justify-center py-12'
        >
          {Object.values(stepComponents).map((Step, i) => (
            <TabsPrimitive.Content
              key={i}
              value={`${i}`}
              className={cn(
                'w-full outline-none focus:outline-none min-[390px]:w-max ',
                // active
                'data-[state=active]:duration-500 data-[state=active]:ease-out data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-3',
              )}
            >
              <Step key={i} />
            </TabsPrimitive.Content>
          ))}
        </TabsPrimitive.Root>

        <div className='mx-auto flex w-full max-w-md flex-col gap-3 p-4 lg:hidden'>
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
    </div>
  );
}
