'use client';

import * as LabelPrimitives from '@radix-ui/react-label';
import { RiShoppingBag3Fill } from '@remixicon/react';
import { useAtom, useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';
import { CustomInput } from '@/components/custom-input';
import * as CustomSelect from '@/components/custom-select';
import { CustomTextarea } from '@/components/custom-textarea';
import { DashedDivider } from '@/components/dashed-divider';

import {
  productCategoryAtom,
  productDescriptionAtom,
  productNameAtom,
} from './store-product';
import { nextStepAtom } from './store-steps';
import IconInfoCustom from '~/icons/icon-info-custom-fill.svg';

export default function StepAddProductDetails() {
  const [productName, setProductName] = useAtom(productNameAtom);
  const [productCategory, setProductCategory] = useAtom(productCategoryAtom);
  const [productDescription, setProductDescription] = useAtom(
    productDescriptionAtom,
  );
  const goToNextStep = useSetAtom(nextStepAtom);

  return (
    <div className='mx-auto flex w-full max-w-[372px] flex-col gap-5 md:gap-8'>
      <div className='flex w-full flex-col gap-6'>
        <RiShoppingBag3Fill className='size-7 text-primary-base' />
        <div className=''>
          <div className='text-title-h5 text-text-strong-950'>
            Add product details
          </div>
          <div className='mt-2 text-paragraph-md text-text-sub-600'>
            Boost sales with detailed product information
          </div>
        </div>
      </div>

      <DashedDivider />

      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1'>
            <LabelPrimitives.Root
              htmlFor='product-name'
              className='cursor-pointer text-label-sm text-text-sub-600'
            >
              Product name
            </LabelPrimitives.Root>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Enter your product&apos;s full name including brand, model, and
                key features to help customers find it easily
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
          <CustomInput
            id='product-name'
            placeholder='Enter product name...'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1'>
            <LabelPrimitives.Root
              htmlFor='product-category'
              className='cursor-pointer text-label-sm text-text-sub-600'
            >
              Category
            </LabelPrimitives.Root>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Choose the main category where customers can find this product
                in your store
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
          <CustomSelect.Root
            value={productCategory}
            onValueChange={setProductCategory}
          >
            <CustomSelect.Trigger id='product-category'>
              <CustomSelect.Value placeholder='Select category...' />
            </CustomSelect.Trigger>
            <CustomSelect.Content>
              <CustomSelect.Item value='Electronics & Accessories'>
                Electronics & Accessories
              </CustomSelect.Item>
              <CustomSelect.Item value='Clothing & Fashion'>
                Clothing & Fashion
              </CustomSelect.Item>
              <CustomSelect.Item value='Home & Garden'>
                Home & Garden
              </CustomSelect.Item>
              <CustomSelect.Item value='Beauty & Personal Care'>
                Beauty & Personal Care
              </CustomSelect.Item>
              <CustomSelect.Item value='Sports & Outdoors'>
                Sports & Outdoors
              </CustomSelect.Item>
              <CustomSelect.Item value='Technology'>
                Technology
              </CustomSelect.Item>
              <CustomSelect.Item value='Toys & Games'>
                Toys & Games
              </CustomSelect.Item>
              <CustomSelect.Item value='Books & Media'>
                Books & Media
              </CustomSelect.Item>
              <CustomSelect.Item value='Health & Wellness'>
                Health & Wellness
              </CustomSelect.Item>
              <CustomSelect.Item value='Food & Beverages'>
                Food & Beverages
              </CustomSelect.Item>
              <CustomSelect.Item value='Automotive & Industrial'>
                Automotive & Industrial
              </CustomSelect.Item>
              <CustomSelect.Item value='Pet Supplies'>
                Pet Supplies
              </CustomSelect.Item>
              <CustomSelect.Item value='Jewelry & Watches'>
                Jewelry & Watches
              </CustomSelect.Item>
              <CustomSelect.Item value='Art & Collectibles'>
                Art & Collectibles
              </CustomSelect.Item>
              <CustomSelect.Item value='Office Supplies'>
                Office Supplies
              </CustomSelect.Item>
              <CustomSelect.Item value='Tools & Home Improvement'>
                Tools & Home Improvement
              </CustomSelect.Item>
            </CustomSelect.Content>
          </CustomSelect.Root>
        </div>

        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1'>
            <LabelPrimitives.Root
              htmlFor='product-description'
              className='cursor-pointer text-label-sm text-text-sub-600'
            >
              Description
            </LabelPrimitives.Root>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Enter a detailed description of your product, including key
                features, benefits, and specifications to help customers make
                informed purchasing decisions
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
          <CustomTextarea
            id='product-description'
            placeholder='Enter product description...'
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
      </div>

      <Button.Root
        disabled={!productName || !productCategory || !productDescription}
        onClick={goToNextStep}
      >
        Continue
      </Button.Root>
    </div>
  );
}
