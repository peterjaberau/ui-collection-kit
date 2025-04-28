'use client';

import * as React from 'react';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import { settingsModalOpenAtom } from '@/components/settings-modal';

import ApiSettings from './api-settings';
import Connections from './connections';
import SocialMedia from './social-media';

export default function Integrations() {
  const setSettingsModalOpen = useSetAtom(settingsModalOpenAtom);

  return (
    <div className=''>
      <div className='flex w-full flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center'>
        <div className='flex-1'>
          <DialogPrimitives.Title className='text-label-md text-text-strong-950'>
            Integrations
          </DialogPrimitives.Title>
          <DialogPrimitives.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Connect and sync with essential tools and platforms
          </DialogPrimitives.Description>
        </div>
        <div className='grid grid-cols-2 items-center gap-3 sm:flex'>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='small'
            className='rounded-10'
            onClick={() => setSettingsModalOpen(false)}
          >
            Discard
          </Button.Root>
          <Button.Root size='small' className='rounded-10'>
            Save Changes
          </Button.Root>
        </div>
      </div>

      <TabMenuHorizontal.Root defaultValue='social-media'>
        <TabMenuHorizontal.List className='px-5'>
          <TabMenuHorizontal.Trigger value='social-media'>
            Social Media
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='api-settings'>
            API Settings
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='connections'>
            Connections
          </TabMenuHorizontal.Trigger>
        </TabMenuHorizontal.List>

        <TabMenuHorizontal.Content
          value='social-media'
          className='animate-setting-tab'
        >
          <SocialMedia />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='api-settings'
          className='animate-setting-tab'
        >
          <ApiSettings />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='connections'
          className='animate-setting-tab'
        >
          <Connections />
        </TabMenuHorizontal.Content>
      </TabMenuHorizontal.Root>
    </div>
  );
}
