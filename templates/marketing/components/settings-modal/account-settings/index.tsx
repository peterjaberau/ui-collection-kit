'use client';

import * as React from 'react';
import * as DialogPrimitives from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';

import * as Button from '@/components/ui/button';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import { settingsModalOpenAtom } from '@/components/settings-modal';

import LanguageRegionSettings from './language-region-settings';
import NotificationsSettings from './notifications-settings';
import ProfileSettings from './profile-settings';

export default function AccountSettings() {
  const setSettingsModalOpen = useSetAtom(settingsModalOpenAtom);

  return (
    <div className=''>
      <div className='flex w-full flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center'>
        <div className='flex-1'>
          <DialogPrimitives.Title className='text-label-md text-text-strong-950'>
            Account Settings
          </DialogPrimitives.Title>
          <DialogPrimitives.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Manage and collaborate on your account settings
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

      <TabMenuHorizontal.Root defaultValue='profile'>
        <TabMenuHorizontal.List className='px-5'>
          <TabMenuHorizontal.Trigger value='profile'>
            Profile
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='notifications'>
            Notifications
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='language-region'>
            Language & Region
          </TabMenuHorizontal.Trigger>
        </TabMenuHorizontal.List>

        <TabMenuHorizontal.Content
          value='profile'
          className='animate-setting-tab'
        >
          <ProfileSettings />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='notifications'
          className='animate-setting-tab'
        >
          <NotificationsSettings />
        </TabMenuHorizontal.Content>
        <TabMenuHorizontal.Content
          value='language-region'
          className='animate-setting-tab'
        >
          <LanguageRegionSettings />
        </TabMenuHorizontal.Content>
      </TabMenuHorizontal.Root>
    </div>
  );
}
