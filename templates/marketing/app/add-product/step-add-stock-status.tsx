'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiPieChartFill } from '@remixicon/react';
import { useAtom, useSetAtom } from 'jotai';
import {
  Input as ReactAriaInput,
  Label as ReactAriaLabel,
  NumberField as ReactAriaNumberField,
} from 'react-aria-components';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';
import CheckButton from '@/components/check-button';
import { CustomInput } from '@/components/custom-input';
import { DashedDivider } from '@/components/dashed-divider';

import { productStockAtom } from './store-product';
import { nextStepAtom } from './store-steps';
import IconInfoCustom from '~/icons/icon-info-custom-fill.svg';

export default function StepAddProductStockStatus() {
  const [stock, setStock] = useAtom(productStockAtom);
  const goToNextStep = useSetAtom(nextStepAtom);

  const predefinedStocks = [50, 100, 200, 400, 800, 1200];

  return (
    <div className='mx-auto flex w-full max-w-[372px] flex-col gap-5 md:gap-8'>
      <div className='flex w-full flex-col gap-6'>
        <RiPieChartFill className='size-7 text-primary-base' />
        <div className=''>
          <div className='text-title-h5 text-text-strong-950'>
            Add stock status
          </div>
          <div className='mt-2 text-paragraph-md text-text-sub-600'>
            Highlight stock status with dynamic indicators
          </div>
        </div>
      </div>

      <DashedDivider />

      <div className=''>
        <ReactAriaNumberField
          minValue={0}
          value={stock}
          onChange={setStock}
          className='flex flex-col gap-1.5'
        >
          <div className='flex items-center gap-1'>
            <LabelPrimitives.Root
              htmlFor='product-stock'
              className='cursor-pointer text-label-sm text-text-sub-600'
              asChild
            >
              <ReactAriaLabel>Set Custom Stock Status</ReactAriaLabel>
            </LabelPrimitives.Root>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Enter the current quantity of this product available in stock
              </Tooltip.Content>
            </Tooltip.Root>
          </div>

          <CustomInput id='product-stock' placeholder='0' size='large' asChild>
            <ReactAriaInput />
          </CustomInput>

          <div className='mt-2.5 flex flex-wrap gap-2'>
            {predefinedStocks.map((s) => (
              <CheckButton
                key={s}
                checked={s === stock}
                onClick={() => setStock(s)}
              >
                {s}
              </CheckButton>
            ))}
          </div>
        </ReactAriaNumberField>
      </div>

      <Button.Root disabled={stock === null} onClick={goToNextStep}>
        Continue
      </Button.Root>
    </div>
  );
}
