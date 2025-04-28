'use client';

import * as Avatar from '@/components/ui/avatar';
import { CreateRequestButton } from '@/components/create-request-button';
import { ScheduleButton } from '@/components/schedule-button';
import WidgetCourseProgress from '@/components/widgets/widget-course-progress';
import WidgetCourses from '@/components/widgets/widget-courses';
import WidgetCurrentProject from '@/components/widgets/widget-current-project';
import WidgetDailyFeedback from '@/components/widgets/widget-daily-feedback';
import WidgetDailyWorkHours from '@/components/widgets/widget-daily-work-hours';
import WidgetEmployeeRating from '@/components/widgets/widget-employee-rating';
import WidgetEmployeeSpotlight from '@/components/widgets/widget-employee-spotlight';
import WidgetNotes from '@/components/widgets/widget-notes';
import WidgetSchedule from '@/components/widgets/widget-schedule';
import WidgetStatusTracker from '@/components/widgets/widget-status-tracker';
import WidgetTimeOff from '@/components/widgets/widget-time-off';
import WidgetTimeTracker from '@/components/widgets/widget-time-tracker';
import WidgetTrainingAnalysis from '@/components/widgets/widget-training-analysis';
import WidgetWorkHourAnalysis from '@/components/widgets/widget-work-hour-analysis';

import Header from './header';

export default function PageHome() {
  return (
    <>
      <Header
        icon={
          <Avatar.Root size='48' color='yellow'>
            <Avatar.Image src='/images/avatar/illustration/sophia.png' alt='' />
          </Avatar.Root>
        }
        title='Sophia Williams'
        description='Welcome back to Synergy 👋🏻'
        contentClassName='hidden lg:flex'
      >
        <ScheduleButton className='hidden lg:flex' />
        <CreateRequestButton className='hidden lg:flex' />
      </Header>

      <div className='flex flex-col gap-6 px-4 pb-6 lg:px-8 lg:pt-1'>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(344px,1fr))] items-start justify-center gap-6'>
          <WidgetTimeOff />
          <WidgetCurrentProject />
          <WidgetSchedule className='row-span-2' />
          <WidgetStatusTracker />
          <WidgetNotes />
          <div className='grid gap-6'>
            <WidgetCourseProgress />
            <WidgetDailyWorkHours />
          </div>
          <WidgetDailyFeedback />
          <WidgetEmployeeSpotlight />
          <WidgetCourses className='[grid-column:1/-1] xl:col-span-2' />
          <WidgetTimeTracker />
          <div className='grid grid-cols-3 gap-6 [grid-column:1/-1] xl:grid-cols-6'>
            <div className='col-span-3 grid gap-6'>
              <WidgetEmployeeRating />
              <WidgetTrainingAnalysis />
            </div>
            <WidgetWorkHourAnalysis className='col-span-3' />
          </div>
        </div>
      </div>
    </>
  );
}
