'use client';

import * as React from 'react';
import { RiImageAddFill, RiMore2Line, RiStarSFill } from '@remixicon/react';
import { useAtom, useSetAtom } from 'jotai';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';

import { productImagesAtom } from './store-product';
import { nextStepAtom } from './store-steps';

const mockImagesData = [
  {
    url: '/images/products/airpods-max-1.png',
    isMain: true,
    file: {
      name: 'airpods-max',
      ext: '.jpg',
    },
    size: '753.99 KB',
  },
  {
    url: '/images/products/apple-watch-1.png',
    file: {
      name: 'apple-watch',
      ext: '.jpg',
    },
    size: '655.45 KB',
  },
  {
    url: '/images/products/homepod-mini-1.png',
    file: {
      name: 'homepod',
      ext: '.jpg',
    },
    size: '234.55 KB',
  },
];

export default function StepAddProductImage() {
  const [productImages, setProductImages] = useAtom(productImagesAtom);
  const goToNextStep = useSetAtom(nextStepAtom);

  return (
    <div className='mx-auto flex w-full max-w-[372px] flex-col gap-5 md:gap-6'>
      <div className='flex w-full flex-col gap-6'>
        <RiImageAddFill className='size-7 text-primary-base' />
        <div className=''>
          <div className='text-title-h5 text-text-strong-950'>
            Add product images
          </div>
          <div className='mt-2 text-paragraph-md text-text-sub-600'>
            Showcase products with quality visuals
          </div>
        </div>
      </div>

      <div
        onClick={() => setProductImages(mockImagesData)}
        className='w-full cursor-pointer rounded-2xl border border-dashed border-stroke-sub-300 bg-bg-white-0 p-6'
      >
        <div className='text-label-md text-text-sub-600'>
          Choose a file or drag & drop it here.
        </div>
        <div className='mt-1 text-label-sm text-text-soft-400'>
          JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
        </div>
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='xsmall'
          className='mt-4'
        >
          Browse files
        </Button.Root>
      </div>

      {productImages.length > 0 && (
        <div className='flex w-full flex-col gap-5'>
          {productImages.map(({ url, file, size, isMain }) => (
            <div key={url} className='flex items-center gap-4'>
              <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-bg-weak-50'>
                <img
                  src={url}
                  alt={file.name}
                  className='size-10 object-contain'
                />
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-2'>
                  <div className='text-label-md text-text-sub-600'>
                    {file.name}
                    <span className='text-text-soft-400'>{file.ext}</span>
                  </div>
                  {isMain && (
                    <Badge.Root variant='lighter' color='purple' size='medium'>
                      <Badge.Icon as={RiStarSFill} />
                      Primary
                    </Badge.Root>
                  )}
                </div>
                <div className='mt-1 text-paragraph-sm text-text-soft-400'>
                  {size}
                </div>
              </div>
              <Button.Root variant='neutral' mode='ghost' size='xxsmall'>
                <Button.Icon as={RiMore2Line} />
              </Button.Root>
            </div>
          ))}
        </div>
      )}

      <Button.Root disabled={productImages.length === 0} onClick={goToNextStep}>
        Continue
      </Button.Root>
    </div>
  );
}
