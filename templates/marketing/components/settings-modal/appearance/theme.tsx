'use client';

import * as React from 'react';
import * as LabelPrimivites from '@radix-ui/react-label';
import { useTheme } from 'next-themes';

import * as ColorPicker from '@/components/ui/color-picker';
import * as Radio from '@/components/ui/radio';
import { DashedDivider } from '@/components/dashed-divider';
import * as Select from '@/components/select-transparent';

const colorSwatches = [
  '#FA7319',
  '#335CFF',
  '#FB3748',
  '#1FC16B',
  '#F6B51E',
  '#7D52F4',
  '#47C2FF',
  '#FB4BA3',
  '#22D3BB',
];

export default function Theme() {
  const uniqueId = React.useId();
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex w-full min-w-0 flex-col gap-5 p-6'>
      <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Interface Theme
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Select and customize your UI theme.
          </div>
        </div>

        <Radio.Group
          defaultValue={theme}
          onValueChange={(newTheme) => setTheme(newTheme)}
          className='flex items-center gap-5 text-label-sm text-text-sub-600'
        >
          <div className='flex items-center gap-1.5'>
            <Radio.Item value='light' id={`${uniqueId}-light`} />
            <LabelPrimivites.Root
              htmlFor={`${uniqueId}-light`}
              className='cursor-pointer'
            >
              Light
            </LabelPrimivites.Root>
          </div>
          <div className='flex items-center gap-1.5'>
            <Radio.Item value='dark' id={`${uniqueId}-dark`} />
            <LabelPrimivites.Root
              htmlFor={`${uniqueId}-dark`}
              className='cursor-pointer'
            >
              Dark
            </LabelPrimivites.Root>
          </div>
          <div className='flex items-center gap-1.5'>
            <Radio.Item value='system' id={`${uniqueId}-system`} />
            <LabelPrimivites.Root
              htmlFor={`${uniqueId}-system`}
              className='cursor-pointer'
            >
              System
            </LabelPrimivites.Root>
          </div>
        </Radio.Group>
      </div>
      <DashedDivider />
      <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Brand Color</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Select or customize your brand color.
          </div>
        </div>

        <ColorPicker.SwatchPicker
          defaultValue='#FA7319'
          layout='stack'
          className='w-auto gap-0'
        >
          {colorSwatches.map((color) => (
            <ColorPicker.SwatchPickerItem key={color} color={color}>
              <ColorPicker.Swatch
                style={{
                  ['--tw-ring-color' as any]: color,
                }}
              />
            </ColorPicker.SwatchPickerItem>
          ))}
        </ColorPicker.SwatchPicker>
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Sidebar Feautre
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            What’s shows in the destkop sidebar.
          </div>
        </div>
        <Select.Root defaultValue='recent-changes'>
          <Select.Trigger>
            <Select.Value placeholder='Select Sidebar Feature' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='recent-changes'>Recent Changes</Select.Item>
            <Select.Item value='favorites'>Favorites</Select.Item>
            <Select.Item value='quick-actions'>Quick Actions</Select.Item>
            <Select.Item value='notifications'>Notifications</Select.Item>
            <Select.Item value='bookmarks'>Bookmarks</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
