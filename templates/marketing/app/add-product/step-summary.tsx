'use client';

import * as React from 'react';
import { RiShoppingBasket2Fill, RiStarFill } from '@remixicon/react';
import { useAtom } from 'jotai';

import { currencyFormatter } from '@/utils/number-formatter';
import * as Button from '@/components/ui/button';
import {
  DashedDivider,
  DashedDividerVertical,
} from '@/components/dashed-divider';

import { filledProduct, productAtom } from './store-product';

export default function StepSummary() {
  const [product, setProduct] = useAtom(productAtom);

  React.useEffect(() => {
    setProduct(filledProduct);
  }, []);

  return (
    <div className='mx-auto flex w-full max-w-[372px] flex-col gap-5 md:gap-8'>
      <div className='flex w-full flex-col gap-6'>
        <RiShoppingBasket2Fill className='size-7 text-primary-base' />
        <div className=''>
          <div className='text-title-h5 text-text-strong-950'>Summary</div>
          <div className='mt-2 text-paragraph-md text-text-sub-600'>
            Quick overview of product details and inventory
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6 pt-6'>
        <div>
          <div className='text-label-xs text-text-soft-400'>Name</div>
          <div className='mt-1 text-label-md text-text-strong-950'>
            {product.name}
          </div>
        </div>
        <DashedDivider />
        <div>
          <div className='text-label-xs text-text-soft-400'>Descriptions</div>
          <div className='mt-1 text-label-md text-text-strong-950'>
            {product.description}
          </div>
        </div>
        <DashedDivider />
        <div className='flex gap-7'>
          <div className='flex-1'>
            <div className='text-label-xs text-text-soft-400'>Category</div>
            <div className='mt-1 text-label-md text-text-strong-950'>
              {product.category}
            </div>
          </div>
          <DashedDividerVertical />
          <div className='flex-1'>
            <div className='text-label-xs text-text-soft-400'>Price</div>
            <div className='mt-1 text-label-md text-text-strong-950'>
              {currencyFormatter.format(product.price!)}
            </div>
          </div>
          <DashedDividerVertical />
          <div className='flex-1'>
            <div className='text-label-xs text-text-soft-400'>Stock</div>
            <div className='mt-1 text-label-md text-text-strong-950'>
              {product.stock} units
            </div>
          </div>
        </div>
        <DashedDivider />
        <div>
          <div className='text-label-xs text-text-soft-400'>Product Images</div>
          <div className='mt-2 flex flex-wrap gap-2'>
            {product.images.map(({ file, url, isMain }) => (
              <div
                key={url}
                className='relative flex size-[72px] shrink-0 items-center justify-center rounded-lg bg-bg-weak-50'
              >
                <img
                  src={url}
                  alt={file.name}
                  className='size-16 object-contain'
                />
                {isMain && (
                  <div className='absolute right-1 top-1 flex size-4 items-center justify-center rounded bg-feature-base'>
                    <RiStarFill className='size-2.5 text-text-white-0' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button.Root>Complete</Button.Root>
    </div>
  );
}
