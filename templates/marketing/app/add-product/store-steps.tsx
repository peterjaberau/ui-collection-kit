import { atom } from 'jotai';

import StepAddProductDetails from './step-add-product-details';

type AddProductStepItem = {
  index: number;
  label: string;
  comp: React.ElementType;
};

export const ADD_PRODUCT_STEPS: AddProductStepItem[] = [
  { index: 0, label: 'General Information', comp: StepAddProductDetails },
  { index: 1, label: 'Pricing Details', comp: StepAddProductDetails },
  { index: 2, label: 'Product Image', comp: StepAddProductDetails },
  { index: 3, label: 'Stock Status', comp: StepAddProductDetails },
  { index: 4, label: 'Summary', comp: StepAddProductDetails },
];

const MAX_STEP = ADD_PRODUCT_STEPS.length - 1;
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
