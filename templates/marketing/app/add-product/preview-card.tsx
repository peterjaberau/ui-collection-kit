'use client';

import * as React from 'react';
import { RiAddLine } from '@remixicon/react';
import { useAtomValue } from 'jotai';

import { cn } from '@/utils/cn';
import { currencyFormatter } from '@/utils/number-formatter';
import * as Tooltip from '@/components/ui/tooltip';
import { DashedDivider } from '@/components/dashed-divider';
import { ProgressChartStockStatus } from '@/components/progress-chart';
import { ThemedImage } from '@/components/themed-image';

import { productAtom } from './store-product';
import IconInfoCustom from '~/icons/icon-info-2.svg';

export default function PreviewCard() {
  const product = useAtomValue(productAtom);

  const randomUsedStock = React.useMemo(() => {
    return !product.stock
      ? 0
      : Math.floor(Math.random() * ((product.stock || 0) + 1));
  }, [product.stock]);

  return (
    <div className='relative w-full min-w-0 min-[400px]:w-[352px] min-[400px]:shrink-0'>
      <ThemedImage
        src='/images/add-product-bg-pattern.png'
        srcDark='/images/add-product-bg-pattern-dark.png'
        alt=''
        width={532}
        height={511}
        className='pointer-events-none absolute h-[511px] w-[532px] max-w-none object-contain object-left-top'
        style={{
          left: 78,
          bottom: -248,
        }}
      />

      <div className='relative z-10 flex w-full flex-col gap-6 rounded-3xl bg-bg-white-0 p-6 pb-7 shadow-custom-md'>
        <div className='flex items-center gap-1.5'>
          <Tooltip.Root>
            <Tooltip.Trigger className='shrink-0'>
              <IconInfoCustom className='size-3.5 text-text-disabled-300' />
            </Tooltip.Trigger>
            <Tooltip.Content size='small' className='max-w-52'>
              Unique product identifier (Stock Keeping Unit).
            </Tooltip.Content>
          </Tooltip.Root>
          <div className='text-label-sm text-text-soft-400'>
            SKU: 000-00-0000
          </div>
        </div>

        <div className='flex h-[224px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-stroke-soft-200 bg-bg-white-0 text-center'>
          {product.images.length > 0 ? (
            <>
              <img
                src={product.images[0].url}
                alt={product.images[0].file.name}
                className='size-[200px] object-contain'
              />
            </>
          ) : (
            <>
              <div className='flex size-11 items-center justify-center rounded-full bg-bg-weak-50'>
                <RiAddLine className='size-6 text-text-soft-400' />
              </div>
              <div className='mt-3 text-label-sm text-text-soft-400'>
                Product Image
              </div>
              <div className='mt-1 text-paragraph-sm text-text-soft-400'>
                400x400px
              </div>
            </>
          )}
        </div>

        <div className='w-full'>
          <div className='text-label-md text-text-soft-400'>
            {product.category || 'Category name'}
          </div>
          <div className='mt-2 line-clamp-3 text-label-lg text-text-sub-600'>
            {product.name || 'The product name is here.'}
          </div>
          <div
            className={cn('mt-2 text-title-h4 text-text-sub-600', {
              'text-text-strong-950': (product.price || 0) > 0,
            })}
          >
            {(product.price && currencyFormatter.format(product.price)) ||
              '$0.00'}
          </div>
        </div>

        <DashedDivider />

        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <div className='text-label-md text-text-soft-400'>Stock Status</div>
            <div className='text-label-sm text-text-soft-400'>
              {randomUsedStock || 0} out of {product.stock || 0} units
            </div>
          </div>

          <ProgressChartStockStatus
            value={randomUsedStock || 0}
            max={product.stock || 100}
          />
        </div>
      </div>
    </div>
  );
}
