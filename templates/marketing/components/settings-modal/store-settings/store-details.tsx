'use client';

import { DashedDivider } from '@/components/dashed-divider';
import { EditableInput } from '@/components/editable-input';
import * as Select from '@/components/select-transparent';

export default function StoreDetails() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Store Name</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enter your store&apos;s display name for customer visibility.
          </div>
        </div>
        <EditableInput placeholder='Enter your store name' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Store Description
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Add a brief overview of your store and services.
          </div>
        </div>
        <EditableInput placeholder='Brief description of your store...' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Country/Region
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Select your store&apos;s primary location and market.
          </div>
        </div>
        <Select.Root defaultValue='TR'>
          <Select.Trigger>
            <Select.Value placeholder='Select Country/Region' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='US'>United States</Select.Item>
            <Select.Item value='GB'>United Kingdom</Select.Item>
            <Select.Item value='DE'>Germany</Select.Item>
            <Select.Item value='FR'>France</Select.Item>
            <Select.Item value='IT'>Italy</Select.Item>
            <Select.Item value='ES'>Spain</Select.Item>
            <Select.Item value='TR'>Turkey</Select.Item>
            <Select.Item value='RU'>Russia</Select.Item>
            <Select.Item value='CN'>China</Select.Item>
            <Select.Item value='JP'>Japan</Select.Item>
            <Select.Item value='IN'>India</Select.Item>
            <Select.Item value='BR'>Brazil</Select.Item>
            <Select.Item value='CA'>Canada</Select.Item>
            <Select.Item value='AU'>Australia</Select.Item>
            <Select.Item value='AE'>United Arab Emirates</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Time Zone</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Select your store timezone.
          </div>
        </div>
        <Select.Root defaultValue='europe-istanbul'>
          <Select.Trigger>
            <Select.Value placeholder='Select timezone' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='pacific-honolulu'>
              (GMT-10:00) Hawaii
            </Select.Item>
            <Select.Item value='america-los_angeles'>
              (GMT-07:00) Pacific Time
            </Select.Item>
            <Select.Item value='america-denver'>
              (GMT-06:00) Mountain Time
            </Select.Item>
            <Select.Item value='america-chicago'>
              (GMT-05:00) Central Time
            </Select.Item>
            <Select.Item value='america-new_york'>
              (GMT-04:00) Eastern Time
            </Select.Item>
            <Select.Item value='europe-london'>(GMT+01:00) London</Select.Item>
            <Select.Item value='europe-paris'>(GMT+02:00) Paris</Select.Item>
            <Select.Item value='europe-istanbul'>
              (GMT+03:00) Istanbul
            </Select.Item>
            <Select.Item value='asia-dubai'>(GMT+04:00) Dubai</Select.Item>
            <Select.Item value='asia-singapore'>
              (GMT+08:00) Singapore
            </Select.Item>
            <Select.Item value='asia-tokyo'>(GMT+09:00) Tokyo</Select.Item>
            <Select.Item value='pacific-sydney'>(GMT+11:00) Sydney</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Store URL</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Your unique store address for customer access.
          </div>
        </div>
        <EditableInput prefix='alignui.com/' placeholder='username' />
      </div>
    </div>
  );
}
