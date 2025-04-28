'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useAtomValue } from 'jotai';

import { cn } from '@/utils/cn';

import OnboardingStepPassword from './step-password';
import OnboardingStepPersonal from './step-personal';
import OnboardingStepPosition from './step-position';
import OnboardingStepRole from './step-role';
import OnboardingStepSummary from './step-summary';
import { activeStepAtom } from './store';

type StepComponents = {
  [key: number]: React.ComponentType;
};

const stepComponents: StepComponents = {
  0: OnboardingStepPersonal,
  1: OnboardingStepRole,
  2: OnboardingStepPosition,
  3: OnboardingStepPassword,
  4: OnboardingStepSummary,
};

export default function PageOnboardingSteps() {
  const activeStep = useAtomValue(activeStepAtom);

  return (
    <TabsPrimitive.Root
      value={`${activeStep}`}
      className='flex justify-center py-6 lg:py-12'
    >
      {Object.values(stepComponents).map((Step, i) => (
        <TabsPrimitive.Content
          key={i}
          value={`${i}`}
          className={cn(
            'w-full outline-none focus:outline-none',
            // active
            'data-[state=active]:duration-500 data-[state=active]:ease-out data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-3',
          )}
        >
          <Step />
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
