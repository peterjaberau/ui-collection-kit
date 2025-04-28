'use client';

import * as React from 'react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as Tooltip from '@/components/ui/tooltip';

import IconInfoCustomFill from '~/icons/icon-info-custom-fill.svg';

const langs = [
  {
    value: 'en-US',
    flag: '/flags/US.svg',
    label: 'English (US)',
  },
  {
    value: 'en-GB',
    flag: '/flags/GB.svg',
    label: 'English (UK)',
  },
  {
    value: 'en-ES',
    flag: '/flags/ES.svg',
    label: 'Spanish (Spain)',
  },
  {
    value: 'es-MX',
    flag: '/flags/MX.svg',
    label: 'Spanish (Mexico)',
  },
  {
    value: 'fr-FR',
    flag: '/flags/FR.svg',
    label: 'French (France)',
  },
  {
    value: 'de-DE',
    flag: '/flags/DE.svg',
    label: 'German',
  },
  {
    value: 'zh-CN',
    flag: '/flags/CN.svg',
    label: 'Chinese (Simplified)',
  },
  {
    value: 'ja-JP',
    flag: '/flags/JP.svg',
    label: 'Japanese',
  },
  {
    value: 'ko-KR',
    flag: '/flags/KR.svg',
    label: 'Korean',
  },
];

export default function RegionalPreferences() {
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Regional Preferences</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Select your preferences for your region.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-language`}>
            Language <Label.Asterisk />
          </Label.Root>

          <Select.Root defaultValue='en-US'>
            <Select.Trigger id={`${uniqueId}-language`}>
              <Select.Value placeholder='Select a time format' />
            </Select.Trigger>
            <Select.Content>
              {langs.map(({ flag, label, value }) => (
                <Select.Item key={value} value={value}>
                  <Select.ItemIcon as='img' src={flag} alt='US flag' />
                  {label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-timezone`}>
            Timezone <Label.Asterisk />
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                The current time zone setting. Select the time zone that matches
                your location.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root defaultValue='GMT-04:00'>
            <Select.Trigger id={`${uniqueId}-timezone`}>
              <Select.Value placeholder='Select a timezone' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='GMT-12:00'>
                GMT-12:00 - International Date Line West
              </Select.Item>
              <Select.Item value='GMT-11:00'>
                GMT-11:00 - Midway Island, Samoa
              </Select.Item>
              <Select.Item value='GMT-10:00'>GMT-10:00 - Hawaii</Select.Item>
              <Select.Item value='GMT-09:00'>GMT-09:00 - Alaska</Select.Item>
              <Select.Item value='GMT-08:00'>
                GMT-08:00 - Pacific Time (US & Canada)
              </Select.Item>
              <Select.Item value='GMT-07:00'>
                GMT-07:00 - Mountain Time (US & Canada)
              </Select.Item>
              <Select.Item value='GMT-06:00'>
                GMT-06:00 - Central Time (US & Canada)
              </Select.Item>
              <Select.Item value='GMT-05:00'>
                GMT-05:00 - Eastern Time (US & Canada)
              </Select.Item>
              <Select.Item value='GMT-04:00'>
                GMT-04:00 - Atlantic Standard Time (AST)
              </Select.Item>
              <Select.Item value='GMT-03:00'>
                GMT-03:00 - Buenos Aires
              </Select.Item>
              <Select.Item value='GMT-02:00'>
                GMT-02:00 - Mid-Atlantic
              </Select.Item>
              <Select.Item value='GMT-01:00'>GMT-01:00 - Azores</Select.Item>
              <Select.Item value='GMT+00:00'>
                GMT+00:00 - London, Lisbon
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-time-format`}>
            Time Format <Label.Sub>(Optional)</Label.Sub>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Choose between a 12-hour or 24-hour clock display format.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root defaultValue='24-hours'>
            <Select.Trigger id={`${uniqueId}-time-format`}>
              <Select.Value placeholder='Select a time format' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='12-hours'>12 hours</Select.Item>
              <Select.Item value='24-hours'>24 hours</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-date-format`}>
            Date Format <Label.Sub>(Optional)</Label.Sub>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Select how you want the date to be displayed.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root defaultValue='DD/MM/YY'>
            <Select.Trigger id={`${uniqueId}-date-format`}>
              <Select.Value placeholder='Select a date format' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='MM/DD/YY'>MM/DD/YY</Select.Item>
              <Select.Item value='DD/MM/YY'>DD/MM/YY</Select.Item>
              <Select.Item value='YY/MM/DD'>YY/MM/DD</Select.Item>
              <Select.Item value='YYYY-MM-DD'>YYYY-MM-DD</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className='mt-1 grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke'>
          Discard
        </Button.Root>
        <Button.Root>Apply Changes</Button.Root>
      </div>
    </div>
  );
}
