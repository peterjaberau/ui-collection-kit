import { atom } from 'jotai';

export const FLOW_STEPS = [
  { label: 'Recipient Selection', indicator: '1' },
  { label: 'Method & Details', indicator: '2' },
  { label: 'Source & Amount', indicator: '3' },
  { label: 'Transfer Summary', indicator: '4' },
];

export const activeStepAtom = atom(0);

export const MAX_STEP = FLOW_STEPS.length - 1;
export const MIN_STEP = 0;

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
