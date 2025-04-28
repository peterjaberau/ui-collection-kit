'use client';

import * as React from 'react';
import * as SelectPrimitives from '@radix-ui/react-select';
import { RiArrowDownSLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Select from '@/components/ui/select';

import TotalSalesChart from './total-sales-chart';
import {
  dailySalesData,
  monthlySalesData,
  weeklySalesData,
} from './total-sales-data';

export default function TotalSales() {
  const [period, setPeriod] = React.useState<'daily' | 'weekly' | 'monthly'>(
    'weekly',
  );

  const activeData = React.useMemo(() => {
    switch (period) {
      case 'daily':
        return dailySalesData;
      case 'weekly':
        return weeklySalesData;
      case 'monthly':
        return monthlySalesData;
      default:
        return monthlySalesData;
    }
  }, [period]);

  return (
    <div>
      <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-center min-[1100px]:flex-col min-[1100px]:items-start xl:flex-row xl:items-center'>
        <div>
          <div className='text-label-sm text-text-sub-600'>Total Sales</div>
          <div className='mt-1 flex items-center gap-2'>
            <div className='text-title-h5 text-text-strong-950'>8,944</div>
            <Badge.Root variant='lighter' color='green' size='medium'>
              +2.1%
            </Badge.Root>
            <div className='text-label-xs text-text-sub-600'>vs last week</div>
          </div>
        </div>

        <div className='flex gap-3'>
          <Select.Root
            value={period}
            onValueChange={(value) => setPeriod(value as any)}
          >
            <SelectPrimitives.Trigger asChild>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xxsmall'
                className='gap-2 px-2.5'
              >
                <Select.Value />
                <Button.Icon as={RiArrowDownSLine} />
              </Button.Root>
            </SelectPrimitives.Trigger>
            <Select.Content>
              <Select.Item value='daily'>Daily</Select.Item>
              <Select.Item value='weekly'>Weekly</Select.Item>
              <Select.Item value='monthly'>Monthly</Select.Item>
            </Select.Content>
          </Select.Root>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='xxsmall'
            className='gap-2 px-2.5'
          >
            All Products
            <Button.Icon as={RiArrowDownSLine} />
          </Button.Root>
        </div>
      </div>

      <div className='mt-4'>
        <TotalSalesChart period={period} data={activeData} />
      </div>
    </div>
  );
}
