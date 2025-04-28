'use client';

import * as React from 'react';

import { DashedDivider } from '@/components/dashed-divider';
import * as Select from '@/components/select-transparent';

export default function CurrencySettings() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Store Currency
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set your store&apos;s primary currency
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

      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),256px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Currency Format
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Choose how currency values are displayed
          </div>
        </div>
        <Select.Root defaultValue='symbol-before-space'>
          <Select.Trigger>
            <Select.Value placeholder='Select currency format' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='symbol-before'>$1,234.56</Select.Item>
            <Select.Item value='symbol-before-space'>$ 1,234.56</Select.Item>
            <Select.Item value='symbol-after'>1,234.56 $</Select.Item>
            <Select.Item value='code-before'>USD 1,234.56</Select.Item>
            <Select.Item value='code-after'>1,234.56 USD</Select.Item>
            <Select.Item value='european-comma'>1.234,56 €</Select.Item>
            <Select.Item value='european-space'>1 234,56 €</Select.Item>
            <Select.Item value='indian'>₹ 1,23,456.00</Select.Item>
            <Select.Item value='japanese'>¥1,234</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
