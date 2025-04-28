'use client';

import * as React from 'react';
import { RiMagicFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Divider from '@/components/ui/divider';
import type { IntegrationItem } from '@/app/(main)/integrations/data';

import { IntegrationCard } from './integration-card';

const integrations: IntegrationItem[] = [
  {
    id: 'jira',
    name: 'Jira',
    description: 'For agile project management and issue tracking.',
    isActive: false,
    icon: ['/images/major-brands/jira.svg'],
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'For project management and task tracking.',
    isActive: false,
    icon: ['/images/major-brands/asana.svg'],
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    description: 'For customer support and ticket management.',
    isActive: false,
    icon: [
      '/images/major-brands/zendesk.svg',
      '/images/major-brands/zendesk-white.svg',
    ],
  },
  {
    id: 'evernote',
    name: 'Evernote',
    description: 'For note-taking and knowledge management.',
    isActive: false,
    icon: ['/images/major-brands/evernote.svg'],
  },
];

export default function Upcoming() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Upcoming Integrations</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Preview of upcoming integrations.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id} soon {...integration} />
        ))}

        <Alert.Root variant='lighter' status='feature' size='small'>
          <Alert.Icon as={RiMagicFill} />
          These integrations are on their way and will be added soon.
        </Alert.Root>
      </div>
    </div>
  );
}
