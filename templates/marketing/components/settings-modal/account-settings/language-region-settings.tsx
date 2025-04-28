'use client';

import * as React from 'react';

import { DashedDivider } from '@/components/dashed-divider';
import * as Select from '@/components/select-transparent';

export default function LanguageRegionSettings() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Language</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Display the app in your selected language.
          </div>
        </div>
        <Select.Root defaultValue='en-US'>
          <Select.Trigger>
            <Select.Value placeholder='Select language' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='en-US'>English (US)</Select.Item>
            <Select.Item value='en-GB'>English (UK)</Select.Item>
            <Select.Item value='es'>Español</Select.Item>
            <Select.Item value='fr'>Français</Select.Item>
            <Select.Item value='de'>Deutsch</Select.Item>
            <Select.Item value='it'>Italiano</Select.Item>
            <Select.Item value='pt'>Português</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Currency</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            View balances in your selected currency.
          </div>
        </div>
        <Select.Root defaultValue='usd'>
          <Select.Trigger>
            <Select.Value placeholder='Select currency' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='usd'>US Dollar (USD)</Select.Item>
            <Select.Item value='eur'>Euro (EUR)</Select.Item>
            <Select.Item value='gbp'>British Pound (GBP)</Select.Item>
            <Select.Item value='jpy'>Japanese Yen (JPY)</Select.Item>
            <Select.Item value='aud'>Australian Dollar (AUD)</Select.Item>
            <Select.Item value='cad'>Canadian Dollar (CAD)</Select.Item>
            <Select.Item value='chf'>Swiss Franc (CHF)</Select.Item>
            <Select.Item value='cny'>Chinese Yuan (CNY)</Select.Item>
            <Select.Item value='inr'>Indian Rupee (INR)</Select.Item>
            <Select.Item value='sgd'>Singapore Dollar (SGD)</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <DashedDivider />
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Timezone and Format
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Choose your timezone and preferred format.
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
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Date Format</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Choose your preferred date format.
          </div>
        </div>
        <Select.Root defaultValue='dd-mm-yyyy'>
          <Select.Trigger>
            <Select.Value placeholder='Select date format' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='dd-mm-yyyy'>DD/MM/YYYY</Select.Item>
            <Select.Item value='mm-dd-yyyy'>MM/DD/YYYY</Select.Item>
            <Select.Item value='yyyy-mm-dd'>YYYY/MM/DD</Select.Item>
            <Select.Item value='dd-mmm-yyyy'>DD MMM YYYY</Select.Item>
            <Select.Item value='mmm-dd-yyyy'>MMM DD, YYYY</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
