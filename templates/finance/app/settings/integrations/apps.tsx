'use client';

import * as React from 'react';
import { RiSettings2Line } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import { ThemedImage } from '@/components/themed-image';

type App = {
  logo: string | string[];
  name: string;
  description: string;
  connected: boolean;
};

const apps: App[] = [
  {
    logo: '/images/major-brands/microsoft-office.svg',
    name: 'Microsoft Office 365',
    description: 'Seamless collaboration and document management.',
    connected: true,
  },
  {
    logo: '/images/major-brands/slack.svg',
    name: 'Slack',
    description: 'For team communication and real-time collaboration.',
    connected: true,
  },
  {
    logo: '/images/major-brands/asana.svg',
    name: 'Asana',
    description: 'For project management and task tracking.',
    connected: false,
  },
  {
    logo: '/images/major-brands/zoom.svg',
    name: 'Zoom',
    description: 'For conducting virtual meetings and interviews.',
    connected: true,
  },
  {
    logo: '/images/major-brands/dropbox.svg',
    name: 'Dropbox',
    description:
      'Cloud-based platform for storing, sharing, and synchronizing files.',
    connected: true,
  },
  {
    logo: [
      '/images/major-brands/zendesk.svg',
      '/images/major-brands/zendesk-white.svg',
    ],
    name: 'Zendesk',
    description: 'For customer support and ticket management.',
    connected: false,
  },
];

export default function Apps() {
  return (
    <div className='flex flex-col gap-5 py-5'>
      {apps.map(({ name, logo, description, connected }, i, arr) => (
        <React.Fragment key={name}>
          <div className='grid gap-4 sm:flex sm:items-center sm:gap-3'>
            <div className='flex flex-1 items-center gap-3'>
              <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200'>
                {Array.isArray(logo) ? (
                  <ThemedImage
                    src={logo[0]}
                    srcDark={logo[1]}
                    alt=''
                    className='size-8 object-contain'
                  />
                ) : (
                  <img src={logo} alt='' className='size-8 object-contain' />
                )}
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-1'>
                  <div className='text-label-md text-text-strong-950'>
                    {name}
                  </div>
                  {!connected && (
                    <Badge.Root color='gray' variant='lighter' size='small'>
                      Disconnected
                    </Badge.Root>
                  )}
                </div>
                <div className='text-paragraph-sm text-text-sub-600'>
                  {description}
                </div>
              </div>
            </div>
            <Button.Root variant='neutral' mode='stroke' size='small'>
              <Button.Icon as={RiSettings2Line} />
              Manage
            </Button.Root>
          </div>
          {i < arr.length - 1 && <Divider.Root variant='line-spacing' />}
        </React.Fragment>
      ))}
    </div>
  );
}
