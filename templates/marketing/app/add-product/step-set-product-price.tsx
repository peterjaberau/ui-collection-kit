'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiPriceTag3Fill } from '@remixicon/react';
import { useAtom, useSetAtom } from 'jotai';
import { PrimeReactProvider } from 'primereact/api';
import { InputNumber } from 'primereact/inputnumber';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';
import { CustomInput } from '@/components/custom-input';
import { DashedDivider } from '@/components/dashed-divider';

import { productPriceAtom } from './store-product';
import { nextStepAtom } from './store-steps';
import IconInfo2 from '~/icons/icon-info-2.svg';
import IconInfoCustom from '~/icons/icon-info-custom-fill.svg';

export default function StepSetProductPrice() {
  const [productPrice, setProductPrice] = useAtom(productPriceAtom);
  const goToNextStep = useSetAtom(nextStepAtom);

  return (
    <div className='mx-auto flex w-full max-w-[372px] flex-col gap-5 md:gap-8'>
      <div className='flex w-full flex-col gap-6'>
        <RiPriceTag3Fill className='size-7 text-primary-base' />
        <div className=''>
          <div className='text-title-h5 text-text-strong-950'>
            Set product price
          </div>
          <div className='mt-2 text-paragraph-md text-text-sub-600'>
            Define strategic pricing for market success
          </div>
        </div>
      </div>

      <DashedDivider />

      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1'>
            <LabelPrimitives.Root
              htmlFor='product-price'
              className='cursor-pointer text-label-sm text-text-sub-600'
            >
              Product pricing
            </LabelPrimitives.Root>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Enter your product&apos;s price
              </Tooltip.Content>
            </Tooltip.Root>
          </div>

          <PrimeReactProvider
            value={{
              unstyled: true,
              pt: {
                inputnumber: {
                  input: {
                    root: () => ({
                      className: cn(
                        'h-10 w-full bg-transparent bg-none text-title-h4 text-text-strong-950',
                        'caret-primary-base',
                        'placeholder:text-text-soft-400',
                        'focus:outline-none',
                      ),
                    }),
                  },
                },
              },
            }}
          >
            <CustomInput
              size='large'
              customInput={
                <InputNumber
                  inputId='product-price'
                  value={productPrice}
                  onChange={(e) => {
                    setProductPrice(e.value as number);
                  }}
                  mode='currency'
                  currency='USD'
                  locale='en-US'
                  placeholder='$0.00'
                  className=''
                />
              }
            />
          </PrimeReactProvider>
          <div className='mt-2.5 flex items-center gap-1.5'>
            <IconInfo2 className='size-3 shrink-0 text-text-disabled-300' />
            <div className='text-label-xs text-text-soft-400'>
              Similar products in the{' '}
              <span className='text-text-sub-600'>
                market are priced $999-1499
              </span>
            </div>
          </div>
        </div>
      </div>

      <Button.Root disabled={!productPrice} onClick={goToNextStep}>
        Continue
      </Button.Root>
    </div>
  );
}
