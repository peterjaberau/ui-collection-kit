import { atom } from 'jotai';

import { ONBOARDING_STEPS } from './header';

const MAX_STEP = ONBOARDING_STEPS.length - 1;
const MIN_STEP = 0;

export const activeStepAtom = atom(0);

export const prevStepAtom = atom(
  (get) => get(activeStepAtom),
  (get, set) => {
    const currentStep = get(activeStepAtom);
    set(activeStepAtom, Math.max(currentStep - 1, MIN_STEP));
  },
);

export const nextStepAtom = atom(
  (get) => get(activeStepAtom),
  (get, set) => {
    const currentStep = get(activeStepAtom);
    set(activeStepAtom, Math.min(currentStep + 1, MAX_STEP));
  },
);
