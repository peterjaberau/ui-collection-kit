'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import * as Badge from '@/components/ui/badge';
import * as Switch from '@/components/ui/switch';
import { ThemedImage } from '@/components/themed-image';
import type { IntegrationItem } from '@/app/(main)/integrations/data';

export function IntegrationCard({
  id,
  icon,
  name,
  description,
  isActive = false,
  soon,
}: IntegrationItem & {
  soon?: boolean;
}) {
  const [checked, setChecked] = React.useState(isActive);

  return (
    <LabelPrimitives.Root className='relative flex cursor-pointer items-center gap-3.5 rounded-xl bg-bg-white-0 p-4 pr-16 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <Switch.Root
        checked={checked}
        onCheckedChange={setChecked}
        className='absolute right-5 top-5'
        disabled={soon}
      />

      <div className='flex size-10 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
        <ThemedImage
          src={icon[0]}
          srcDark={icon[1]}
          className='size-6'
          alt={name + ' logo'}
        />
      </div>

      <div className='space-y-1'>
        <div className='flex items-center gap-1 text-label-sm'>
          <span>{name}</span>
          {soon && (
            <Badge.Root variant='lighter' size='small' color='gray'>
              SOON
            </Badge.Root>
          )}
        </div>
        {description && (
          <div className='text-paragraph-xs text-text-sub-600'>
            {description}
          </div>
        )}
      </div>
    </LabelPrimitives.Root>
  );
}
