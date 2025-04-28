'use client';

import * as React from 'react';
import { RiAddLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import type { IntegrationItem } from '@/app/(main)/integrations/data';

import { IntegrationCard } from './integration-card';

const integrations: IntegrationItem[] = [
  {
    id: 'microsoft-office-365',
    name: 'Microsoft Office 365',
    description: 'Seamless collaboration and document management.',
    isActive: false,
    icon: ['/images/major-brands/microsoft-office.svg'],
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'For conducting virtual meetings and interviews.',
    isActive: false,
    icon: ['/images/major-brands/zoom.svg'],
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'For team communication and real-time collaboration.',
    isActive: false,
    icon: ['/images/major-brands/slack.svg'],
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'For task management and project collaboration.',
    isActive: false,
    icon: ['/images/major-brands/trello.svg'],
  },
];

export default function Integrations() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Integrations</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Connect and sync with essential tools and platforms.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id} {...integration} />
        ))}
      </div>

      <Button.Root mode='stroke' className='mt-1 w-full'>
        <Button.Icon as={RiAddLine} />
        Add Integration
      </Button.Root>
    </div>
  );
}
