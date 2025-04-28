'use client';

import * as React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiMore2Line,
} from '@remixicon/react';
import { useSetAtom } from 'jotai';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as CompactButton from '@/components/ui/compact-button';
import { DashedDivider } from '@/components/dashed-divider';

import { ProductData } from './data';
import { editProductDrawerOpenAtom } from './edit-product-drawer';
import { ProductImagesSlider } from './product-card-slider';

const salesData = [
  { date: '2024-01-01', value: 45 },
  { date: '2024-01-02', value: 62 },
  { date: '2024-01-03', value: 28 },
  { date: '2024-01-04', value: 85 },
  { date: '2024-01-05', value: 73 },
  { date: '2024-01-06', value: 35 },
  { date: '2024-01-07', value: 78 },
  { date: '2024-01-08', value: 42 },
  { date: '2024-01-09', value: 65 },
  { date: '2024-01-10', value: 55 },
  { date: '2024-01-11', value: 40 },
  { date: '2024-01-12', value: 45 },
  { date: '2024-01-13', value: 38 },
  { date: '2024-01-14', value: 65 },
  { date: '2024-01-15', value: 78 },
];

const stockData = [
  { date: '2024-01-01', value: 150 },
  { date: '2024-01-02', value: 142 },
  { date: '2024-01-03', value: 165 },
  { date: '2024-01-04', value: 135 },
  { date: '2024-01-05', value: 128 },
  { date: '2024-01-06', value: 148 },
  { date: '2024-01-07', value: 155 },
  { date: '2024-01-08', value: 168 },
  { date: '2024-01-09', value: 145 },
  { date: '2024-01-10', value: 138 },
  { date: '2024-01-11', value: 162 },
  { date: '2024-01-12', value: 158 },
  { date: '2024-01-13', value: 172 },
  { date: '2024-01-14', value: 165 },
  { date: '2024-01-15', value: 155 },
];

const viewsData = [
  { date: '2024-01-01', value: 1250 },
  { date: '2024-01-02', value: 1480 },
  { date: '2024-01-03', value: 1320 },
  { date: '2024-01-04', value: 1650 },
  { date: '2024-01-05', value: 1420 },
  { date: '2024-01-06', value: 1580 },
  { date: '2024-01-07', value: 1720 },
  { date: '2024-01-08', value: 1380 },
  { date: '2024-01-09', value: 1540 },
  { date: '2024-01-10', value: 1620 },
  { date: '2024-01-11', value: 1480 },
  { date: '2024-01-12', value: 1550 },
  { date: '2024-01-13', value: 1680 },
  { date: '2024-01-14', value: 1450 },
  { date: '2024-01-15', value: 1580 },
];

const datas = {
  sales: salesData,
  views: viewsData,
  stock: stockData,
} as const;

export function ProductCard({ images, title, category }: ProductData) {
  const setEditDrawerOpen = useSetAtom(editProductDrawerOpenAtom);
  const [expanded, setExpanded] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'sales' | 'views' | 'stock'>(
    'sales',
  );

  const activeChartData = React.useMemo(() => {
    return datas[activeTab];
  }, [activeTab]);

  return (
    <div
      className={cn(
        'relative flex h-[258px] flex-col overflow-hidden rounded-2xl bg-bg-weak-50 pt-8 transition-all duration-500',
        {
          'h-[540px]': expanded,
        },
      )}
      style={{
        transitionTimingFunction: 'cubic-bezier(.6,.6,0,1)',
      }}
    >
      <CompactButton.Root
        variant='ghost'
        size='large'
        className='absolute right-3 top-3'
        onClick={() => setEditDrawerOpen(true)}
      >
        <CompactButton.Icon as={RiMore2Line} />
      </CompactButton.Root>

      <ProductImagesSlider slides={images} />

      <div
        className={cn('mt-auto pt-0 transition-all duration-200', {
          'p-1.5': expanded,
        })}
      >
        <div
          className={cn(
            'w-full overflow-hidden rounded-xl p-4 transition-all duration-200',
            {
              'shadow-custom-xs bg-bg-white-0': expanded,
            },
          )}
        >
          <button
            type='button'
            className='w-full text-left'
            onClick={() => setExpanded((p) => !p)}
          >
            <div className='flex items-center gap-4'>
              <div className='flex-1 truncate text-label-sm text-text-strong-950'>
                {title}
              </div>
              <RiArrowDownSLine
                className={cn(
                  'size-[18px] shrink-0 text-text-soft-400 transition-all duration-200',
                  {
                    'text-text-sub-600 -rotate-180': expanded,
                  },
                )}
              />
            </div>
            <p className='mt-1 text-paragraph-xs text-text-sub-600'>
              {category}
            </p>
          </button>

          <div
            className={cn('flex flex-col transition duration-200', {
              'opacity-0': !expanded,
            })}
          >
            <div className='my-4'>
              <DashedDivider />
            </div>
            <div className='flex gap-8'>
              <div>
                <div className='text-label-xs text-text-soft-400'>Price</div>
                <div className='mt-1 text-label-sm text-text-sub-600'>
                  $948.00
                </div>
              </div>
              <div>
                <div className='text-label-xs text-text-soft-400'>Stock</div>
                <div className='mt-1 flex items-center gap-0.5 text-label-sm text-text-sub-600'>
                  48 units
                  <RiArrowRightUpLine className='size-4 shrink-0 text-success-base' />
                </div>
              </div>
            </div>
            <div className='my-4'>
              <DashedDivider />
            </div>
            <ToggleGroup.Root
              type='single'
              defaultValue='sales'
              value={activeTab}
              onValueChange={(v) => setActiveTab(v as any)}
              className='grid grid-cols-3 gap-2'
            >
              <ToggleGroup.Item
                value='sales'
                className='flex h-6 items-center justify-center rounded-md text-center text-label-xs text-text-sub-600 transition duration-200 ease-out data-[state=on]:bg-primary-alpha-10 data-[state=on]:text-primary-base'
              >
                Sales
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value='views'
                className='flex h-6 items-center justify-center rounded-md text-center text-label-xs text-text-sub-600 transition duration-200 ease-out data-[state=on]:bg-primary-alpha-10 data-[state=on]:text-primary-base'
              >
                Views
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value='stock'
                className='flex h-6 items-center justify-center rounded-md text-center text-label-xs text-text-sub-600 transition duration-200 ease-out data-[state=on]:bg-primary-alpha-10 data-[state=on]:text-primary-base'
              >
                Stock
              </ToggleGroup.Item>
            </ToggleGroup.Root>

            <div className='my-4 h-[84px]'>
              <ResponsiveContainer width='100%' height={84}>
                <LineChart
                  data={activeChartData}
                  margin={{ top: 2, right: 0, left: 0, bottom: 2 }}
                >
                  <CartesianGrid
                    strokeDasharray='4 4'
                    className='stroke-stroke-soft-200'
                    vertical={false}
                  />
                  <XAxis hide dataKey='date' />
                  <YAxis
                    hide
                    type='number'
                    dataKey='value'
                    domain={['dataMin', 'dataMax']}
                  />
                  <Line
                    type='monotone'
                    dataKey='value'
                    className='stroke-primary-base'
                    stroke='hsl(var(--primary-base))'
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive
                    animationDuration={400}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              onClick={() => setEditDrawerOpen(true)}
            >
              Edit Product
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
