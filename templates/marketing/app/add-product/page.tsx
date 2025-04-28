'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useAtomValue } from 'jotai';

import AddProductHeaderNavigation from './header-navigation';
import AddProductMobileHeader from './mobile-header';
import PreviewCard from './preview-card';
import AddProductSidebar from './sidebar';
import StepAddProductDetails from './step-add-product-details';
import StepAddProductImage from './step-add-product-image';
import StepAddProductStockStatus from './step-add-stock-status';
import StepSetProductPrice from './step-set-product-price';
import StepSummary from './step-summary';
import { activeStepAtom } from './store-steps';

export default function AddProductFlow() {
  const activeStep = useAtomValue(activeStepAtom);

  return (
    <div className='flex min-h-screen flex-col bg-bg-white-0 lg:flex-row'>
      <AddProductSidebar />
      <AddProductMobileHeader />
      <div className='flex flex-col-reverse md:grid md:flex-1 md:grid-cols-[minmax(0,600fr),minmax(0,628fr)]'>
        <div className='flex flex-col md:py-2 md:pl-2 lg:pl-0'>
          <div className='flex w-full flex-1 flex-col items-center justify-center overflow-hidden bg-bg-weak-50 py-9 md:rounded-2xl lg:py-0'>
            <div className='min-[400px]:w-auto flex w-full flex-col gap-5 px-4 md:[@media_(min-height:720px)]:mt-[-68px]'>
              <div>
                <div className='text-label-md text-text-sub-600'>Preview</div>
                <div className='mt-1 text-label-sm text-text-soft-400'>
                  This is how your product will appear.
                </div>
              </div>
              <PreviewCard />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center px-4 py-9 md:px-8 lg:py-0'>
          <AddProductHeaderNavigation />
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={`active-step-${activeStep}`}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, filter: 'blur(6px)', scale: 0.98 }}
              initial={{ opacity: 0, filter: 'blur(6px)', scale: 0.98 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              className='flex h-full w-full flex-col justify-center md:py-9 md:[@media_(min-height:900px)]:-mt-[52px]'
            >
              {activeStep === 0 && <StepAddProductDetails />}
              {activeStep === 1 && <StepSetProductPrice />}
              {activeStep === 2 && <StepAddProductImage />}
              {activeStep === 3 && <StepAddProductStockStatus />}
              {activeStep === 4 && <StepSummary />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
