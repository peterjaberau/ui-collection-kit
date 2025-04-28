'use client';

import { RiCalendarLine, RiFilter3Line } from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Select from '@/components/ui/select';
import Header from '@/components/header';
import { NewProductButton } from '@/components/new-product-button';
import { WidgetCustomerSegments } from '@/components/widgets/customer-segments';
import { WidgetMarketingChannels } from '@/components/widgets/marketing-channels';
import { WidgetProductCategories } from '@/components/widgets/product-categories';
import { WidgetRecentActivities } from '@/components/widgets/recent-activities';
import { WidgetCampaignData } from '@/components/widgets/widget-campaign-data';
import { WidgetConversionRate } from '@/components/widgets/widget-conversion-rate';
import { WidgetGeography } from '@/components/widgets/widget-geogprahy';
import { WidgetMyProducts } from '@/components/widgets/widget-my-products';
import { WidgetProductPerformance } from '@/components/widgets/widget-product-performance';
import { WidgetRealTime } from '@/components/widgets/widget-real-time';
import { WidgetSalesChannels } from '@/components/widgets/widget-sales-channels';
import { WidgetShippingTracking } from '@/components/widgets/widget-shipping-tracking';
import { WidgetSupportAnalytics } from '@/components/widgets/widget-support-analytics';
import { WidgetTotalSales } from '@/components/widgets/widget-total-sales';
import { WidgetTotalVisitors } from '@/components/widgets/widget-total-visitors';
import { WidgetUserRetention } from '@/components/widgets/widget-user-retention';
import { WidgetVisitorChannels } from '@/components/widgets/widget-visitor-channels';
import { WidgetWeeklyVisitors } from '@/components/widgets/widget-weekly-visitors';

export default function PageHome() {
  return (
    <>
      <Header
        icon={
          <Avatar.Root size='48'>
            <Avatar.Image src='/images/avatar/illustration/james.png' alt='' />
          </Avatar.Root>
        }
        title='James Brown'
        description='Welcome back to Catalyst 👋🏻'
      >
        <div className='hidden gap-3 xl:flex'>
          <Select.Root defaultValue='last-month'>
            <Select.Trigger className='w-auto'>
              <Select.TriggerIcon as={RiCalendarLine} />
              <Select.Value placeholder='Filter by date' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='last-week'>Last week</Select.Item>
              <Select.Item value='last-month'>Last month</Select.Item>
              <Select.Item value='last-year'>Last year</Select.Item>
            </Select.Content>
          </Select.Root>
          <Button.Root variant='neutral' mode='stroke'>
            <Button.Icon as={RiFilter3Line} />
            Filter by
          </Button.Root>
        </div>
        <NewProductButton />
      </Header>

      <div className='flex flex-col gap-6 overflow-hidden px-4 pb-6 lg:px-8 lg:pt-1'>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(344px,1fr))] items-start justify-center gap-6'>
          <WidgetTotalSales />
          <WidgetTotalVisitors />
          <WidgetConversionRate />
          <WidgetVisitorChannels />
          <WidgetUserRetention />
          <WidgetWeeklyVisitors />
          <WidgetGeography />
          <WidgetMarketingChannels />
          <WidgetRealTime />
          <div className='col-span-full grid grid-cols-[repeat(auto-fill,minmax(344px,1fr))] items-start justify-center gap-6'>
            <WidgetShippingTracking />
            <div className='flex flex-col gap-6'>
              <WidgetSalesChannels />
              <WidgetCampaignData />
            </div>
            <WidgetProductPerformance />
            <WidgetMyProducts />
            <div className='-col-end-1 row-span-2 row-start-1'>
              <WidgetSupportAnalytics />
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <WidgetProductCategories />
            <WidgetCustomerSegments />
          </div>
          <WidgetRecentActivities />
        </div>
      </div>
    </>
  );
}
