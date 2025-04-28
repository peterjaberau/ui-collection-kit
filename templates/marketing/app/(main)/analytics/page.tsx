'use client';

import { RiArrowDownSLine, RiCalendarLine } from '@remixicon/react';

import * as Avatar from '@/components/ui/avatar';
import * as ButtonGroup from '@/components/ui/button-group';
import * as Divider from '@/components/ui/divider';
import {
  DashedDivider,
  DashedDividerVertical,
} from '@/components/dashed-divider';
import Header from '@/components/header';
import { CustomerSegments } from '@/components/widgets/customer-segments';
import { MarketingChannels } from '@/components/widgets/marketing-channels';
import { ProductCategories } from '@/components/widgets/product-categories';
import { RecentActivities } from '@/components/widgets/recent-activities';

import AnalyticsSummary from './summary';
import TotalSales from './total-sales';

export default function PageAnalytics() {
  return (
    <>
      <Header
        icon={
          <Avatar.Root size='48'>
            <Avatar.Image src='/images/avatar/illustration/james.png' />
          </Avatar.Root>
        }
        title='James Brown'
        description='Welcome back to Catalyst 👋🏻'
        contentClassName='hidden lg:flex'
      >
        <ButtonGroup.Root size='xsmall' className='min-w-0'>
          <ButtonGroup.Item className='pr-5'>
            Last 7 days
            <ButtonGroup.Icon as={RiArrowDownSLine} />
          </ButtonGroup.Item>
          <ButtonGroup.Item className='min-w-0 pl-5'>
            <ButtonGroup.Icon as={RiCalendarLine} />
            <div className='truncate'>Feb 04 - Feb 11, 2024</div>
          </ButtonGroup.Item>
        </ButtonGroup.Root>
      </Header>

      <div className='px-4 lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex flex-1 flex-col gap-6 px-4 py-6 lg:px-8 min-[1100px]:flex-row'>
        <div className='min-w-0 flex-1'>
          <AnalyticsSummary />
          <DashedDivider />

          <div className='mt-6'>
            <TotalSales />
          </div>

          <div className='my-8'>
            <DashedDivider />
          </div>

          <div className='relative flex w-full flex-col gap-8 min-[1440px]:flex-row'>
            <div className='relative flex shrink-0 flex-col gap-8 pt-8 min-[1440px]:w-[324px]'>
              <div className='absolute -right-8 top-0 z-10 hidden size-5 -translate-y-1/2 translate-x-1/2 items-center justify-center bg-bg-white-0 min-[1440px]:flex'>
                <div className='size-[5px] rounded-full bg-stroke-soft-200' />
              </div>

              <ProductCategories />
              <div className='relative min-[1440px]:-mr-8'>
                <DashedDivider />
                <div className='absolute right-0 top-1/2 z-10 hidden size-5 -translate-y-1/2 translate-x-1/2 items-center justify-center bg-bg-white-0 min-[1440px]:flex'>
                  <div className='size-[5px] rounded-full bg-stroke-soft-200' />
                </div>
              </div>
              <CustomerSegments />
            </div>

            <DashedDividerVertical className='hidden min-[1440px]:block' />

            <DashedDivider className='min-[1440px]:hidden' />

            <div className='w-full min-[1440px]:pt-8'>
              <MarketingChannels />
            </div>
          </div>
        </div>

        <div className='w-px bg-stroke-soft-200 lg:block' />

        <div className='shrink-0 min-[1100px]:w-[328px]'>
          <RecentActivities />
        </div>
      </div>
    </>
  );
}
