'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import * as Checkbox from '@/components/ui/checkbox';
import { DashedDivider } from '@/components/dashed-divider';

export default function Preferences() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center gap-5'>
        <Checkbox.Root defaultChecked id={`${uniqueId}-c1`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c1`}
        >
          <div className='text-label-sm text-text-strong-950'>Compact Mode</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Control the density of your interface layout.
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Checkbox.Root defaultChecked id={`${uniqueId}-c2`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c2`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Grid Lines
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Add visual separation to tables and lists.
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Checkbox.Root id={`${uniqueId}-c3`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c3`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Tooltips
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Show helpful hints when hovering over elements.
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Checkbox.Root id={`${uniqueId}-c4`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c4`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Enable Animations
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Add smooth transitions between interface states.
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Checkbox.Root id={`${uniqueId}-c5`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c5`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Breadcrumbs
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Show your current location in navigation hierarchy.
          </div>
        </LabelPrimitives.Root>
      </div>
    </div>
  );
}
