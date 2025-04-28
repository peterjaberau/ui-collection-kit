'use client';

import * as React from 'react';
import { RiSettings2Line } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Switch from '@/components/ui/switch';
import { ThemedImage } from '@/components/themed-image';

import { type IntegrationItem } from './data';

function IntegrationCard({
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
    <div className='relative flex flex-col items-start gap-3.5 rounded-xl bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
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

      <div className='mt-auto w-full'>
        <Button.Root
          variant='neutral'
          mode='stroke'
          size='small'
          className='w-full'
        >
          <Button.Icon as={RiSettings2Line} />
          Manage
        </Button.Root>
      </div>
    </div>
  );
}

export function IntegrationsGrid({
  title,
  description,
  integrations,
}: {
  title: string;
  description: string;
  integrations: IntegrationItem[];
}) {
  return (
    <div className='mt-8 flex flex-col gap-5 lg:mt-6'>
      <div className='space-y-1'>
        <div className='text-label-md'>{title}</div>
        <div className='text-paragraph-sm text-text-sub-600'>{description}</div>
      </div>

      <div className='grid gap-x-6 gap-y-5 md:grid-cols-2 xl:grid-cols-3'>
        {integrations.map((item) => (
          <IntegrationCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
