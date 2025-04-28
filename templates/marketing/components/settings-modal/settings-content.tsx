'use client';

import * as React from 'react';
import * as TabPrimitives from '@radix-ui/react-tabs';
import {
  RiArrowRightSLine,
  RiBankCardLine,
  RiEqualizerLine,
  RiPaletteLine,
  RiShieldUserLine,
  RiShoppingBag3Line,
  RiStore2Line,
  RiTruckLine,
  RiUser6Line,
} from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as Select from '@/components/ui/select';

import AccountSettings from './account-settings';
import Appearance from './appearance';
import Integrations from './integrations';
import PaymentBilling from './payment-billing';
import PrivacySecurity from './privacy-security';
import ProductSettings from './product-settings';
import ShippingDelivery from './shipping-delivery';
import StoreSettings from './store-settings';

type PersonalSettingKeys =
  | 'account-settings'
  | 'privacy-security'
  | 'integrations'
  | 'appearance';
type GeneralSettingKeys =
  | 'store-settings'
  | 'product-settings'
  | 'payment-billing'
  | 'shipping-delivery';
type AllSettingKeys = PersonalSettingKeys | GeneralSettingKeys;

type SettingPageItem = {
  group: string;
  items: {
    [K in AllSettingKeys]?: {
      icon: React.ElementType;
      label: string;
    };
  };
};

const settingPageItems: SettingPageItem[] = [
  {
    group: 'PERSONAL SETTINGS',
    items: {
      'account-settings': {
        icon: RiUser6Line,
        label: 'Account Settings',
      },
      'privacy-security': {
        icon: RiShieldUserLine,
        label: 'Privacy & Security',
      },
      integrations: {
        icon: RiEqualizerLine,
        label: 'Integrations',
      },
      appearance: {
        icon: RiPaletteLine,
        label: 'Appearance',
      },
    },
  },
  {
    group: 'GENERAL SETTINGS',
    items: {
      'store-settings': {
        icon: RiStore2Line,
        label: 'Store Settings',
      },
      'product-settings': {
        icon: RiShoppingBag3Line,
        label: 'Products Settings',
      },
      'payment-billing': {
        icon: RiBankCardLine,
        label: 'Payment & Billing',
      },
      'shipping-delivery': {
        icon: RiTruckLine,
        label: 'Shipping & Delivery',
      },
    },
  },
] as const;

type SettingPageKeys = keyof (typeof settingPageItems)[number]['items'];

export default function SettingsContent() {
  const [activePage, setActivePage] =
    React.useState<SettingPageKeys>('account-settings');

  return (
    <>
      <TabPrimitives.Root
        value={activePage}
        onValueChange={(v) => setActivePage(v as any)}
        orientation='vertical'
        className='flex w-full flex-col lg:flex-row'
      >
        {/* sidebar */}
        <TabPrimitives.List className='hidden w-64 shrink-0 flex-col gap-4 border-r border-stroke-soft-200 p-4 lg:flex'>
          {settingPageItems.map(({ group, items }, i, arr) => (
            <React.Fragment key={group}>
              <div className='flex flex-col gap-2'>
                <Divider.Root variant='text'>{group}</Divider.Root>
                {Object.entries(items).map(([key, v]) => {
                  let Icon = v.icon;

                  return (
                    <TabPrimitives.Trigger
                      key={key}
                      value={key}
                      className={cn(
                        'group flex h-9 w-full items-center gap-2 rounded-10 bg-bg-white-0 px-2 text-left text-label-sm text-text-sub-600',
                        'transition duration-200 ease-out',
                        'hover:bg-bg-weak-50',
                        'focus:outline-none',
                        {
                          'text-text-strong-950 bg-bg-weak-50':
                            activePage === key,
                        },
                      )}
                    >
                      <Icon
                        className={cn(
                          'size-5 shrink-0 text-text-soft-400 transition duration-200 ease-out',
                          {
                            'text-primary-base': activePage === key,
                            'group-hover:text-text-sub-600': activePage !== key,
                          },
                        )}
                      />
                      <div className='flex-1'>{v.label}</div>
                      {activePage === key && (
                        <RiArrowRightSLine className='size-[18px] shrink-0 text-text-sub-600' />
                      )}
                    </TabPrimitives.Trigger>
                  );
                })}
              </div>
              {i < arr.length - 1 && <Divider.Root variant='line-spacing' />}
            </React.Fragment>
          ))}
        </TabPrimitives.List>

        <div className='p-4 pb-0 lg:hidden'>
          <Select.Root
            defaultValue={activePage}
            onValueChange={(v) => setActivePage(v as any)}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {settingPageItems.map(({ group, items }) => (
                <Select.Group key={group}>
                  <Select.GroupLabel className='mb-1 mt-2 px-2 py-1 text-subheading-xs text-text-soft-400'>
                    {group}
                  </Select.GroupLabel>
                  {Object.entries(items).map(([key, v]) => {
                    let Icon = v.icon;

                    return (
                      <Select.Item key={key} value={key}>
                        <Select.ItemIcon as={Icon} />
                        {v.label}
                      </Select.Item>
                    );
                  })}
                </Select.Group>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        <div className='w-full min-w-0'>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='account-settings'
          >
            <AccountSettings />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='privacy-security'
          >
            <PrivacySecurity />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='integrations'
          >
            <Integrations />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='appearance'
          >
            <Appearance />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='store-settings'
          >
            <StoreSettings />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='product-settings'
          >
            <ProductSettings />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='payment-billing'
          >
            <PaymentBilling />
          </TabPrimitives.Content>
          <TabPrimitives.Content
            className='animate-setting-page'
            value='shipping-delivery'
          >
            <ShippingDelivery />
          </TabPrimitives.Content>
        </div>
      </TabPrimitives.Root>
    </>
  );
}
