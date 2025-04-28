import { RiCalendarLine } from '@remixicon/react';

import * as Divider from '@/components/ui/divider';
import { BigCalendar, type CalendarData } from '@/components/big-calendar';
import { CreateRequestButton } from '@/components/create-request-button';
import { ScheduleButton } from '@/components/schedule-button';
import Header from '@/app/(main)/header';

import CalendarFilters from './filters';
import CalendarTabs from './tabs';

const calendarData: CalendarData[] = [
  {
    startDate: new Date('2024-11-04T09:00:00'),
    endDate: new Date('2024-11-04T09:15:00'),
    title: 'Brainstorming Session',
    completed: true,
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-04T09:15:00'),
    endDate: new Date('2024-11-04T09:45:00'),
    title: 'Bi-Weekly Marketing Team Meeting',
    completed: true,
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-04T11:45:00'),
    endDate: new Date('2024-11-04T13:00:00'),
    title: 'Workshop: "Mastering Design Thinking"',
    type: 'event',
    location: 'Venue: XYZ Conference Center',
  },
  {
    startDate: new Date('2024-11-05T09:00:00'),
    endDate: new Date('2024-11-05T09:30:00'),
    title: 'Project Review Meeting',
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-05T10:00:00'),
    endDate: new Date('2024-11-05T11:30:00'),
    title: 'Sales Team Training Session - Improving Sales Techniques',
    type: 'meeting',
    people: [
      {
        alt: 'James',
        image: '/images/avatar/illustration/james.png',
        color: 'blue',
      },
      {
        alt: 'Arthur',
        image: '/images/avatar/illustration/arthur.png',
      },
      {
        alt: 'Sophia',
        image: '/images/avatar/illustration/sophia.png',
        color: 'purple',
      },
      {
        alt: 'Emma',
        image: '/images/avatar/illustration/emma.png',
        color: 'yellow',
      },
      {
        alt: 'Wei',
        image: '/images/avatar/illustration/wei.png',
        color: 'red',
      },
    ],
    platform: 'on Zoom',
  },
  {
    startDate: new Date('2024-11-05T12:00:00'),
    endDate: new Date('2024-11-05T12:30:00'),
    title: 'Quarterly Financial Review - Analyzing Revenue Growth',
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-05T12:30:00'),
    endDate: new Date('2024-11-05T13:00:00'),
    title: 'Sales Performance Review',
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-06T09:30:00'),
    endDate: new Date('2024-11-06T10:00:00'),
    title: 'Marketing Strategy Discussion',
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-06T11:00:00'),
    endDate: new Date('2024-11-06T11:30:00'),
    title: 'Strategy Planning for Company Expansion',
    type: 'meeting',
  },
  {
    startDate: new Date('2024-11-06T11:30:00'),
    endDate: new Date('2024-11-06T13:00:00'),
    title: 'New Feature Implementation and Roadmap Discussion',
    type: 'meeting',
    people: [
      {
        alt: 'James',
        image: '/images/avatar/illustration/james.png',
        color: 'blue',
      },
      {
        alt: 'Arthur',
        image: '/images/avatar/illustration/arthur.png',
      },
      {
        alt: 'Sophia',
        image: '/images/avatar/illustration/sophia.png',
        color: 'purple',
      },
      {
        alt: 'Emma',
        image: '/images/avatar/illustration/emma.png',
        color: 'yellow',
      },
    ],
    platform: 'on Zoom',
  },
  {
    startDate: new Date('2024-11-07T09:00:00'),
    endDate: new Date('2024-11-07T10:00:00'),
    title: 'Customer Feedback Analysis',
    type: 'meeting',
    people: [
      {
        alt: 'James',
        image: '/images/avatar/illustration/james.png',
        color: 'blue',
      },
      {
        alt: 'Arthur',
        image: '/images/avatar/illustration/arthur.png',
      },
      {
        alt: 'Sophia',
        image: '/images/avatar/illustration/sophia.png',
        color: 'purple',
      },
      {
        alt: 'Emma',
        image: '/images/avatar/illustration/emma.png',
        color: 'yellow',
      },
    ],
    platform: 'on Meet',
  },
  {
    startDate: new Date('2024-11-07T11:30:00'),
    endDate: new Date('2024-11-07T13:00:00'),
    title: 'Webinar: "Digital Marketing Trends for 2023"',
    type: 'event',
    link: 'www.examplewebinar.com',
  },
  // disabled hour
  {
    startDate: new Date('2024-11-08T09:00:00'),
    endDate: new Date('2024-11-08T14:00:00'),
    disabled: true,
  },
  // {
  //   startDate: new Date('2024-11-10T06:30:00'),
  //   endDate: new Date('2024-11-10T08:30:00'),
  //   title: 'A mysterious event',
  //   type: 'event',
  //   link: 'www.alignui.com',
  // },
];

export default function PageCalendar() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiCalendarLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='February 04, 2024'
        description='You have 2 meetings and 1 events today 🗓️'
      >
        <ScheduleButton className='w-full md:w-auto' />
        <CreateRequestButton className='w-full md:w-auto' />
      </Header>

      <div className='hidden px-8 lg:block'>
        <Divider.Root />
      </div>

      <div className='flex flex-1 flex-col px-4 pb-[18px] lg:px-8 lg:pb-6 lg:pt-4'>
        <CalendarFilters />

        <CalendarTabs className='mt-5 lg:mt-3' />

        <BigCalendar
          className='mt-4'
          defaultStartDate={new Date('2024-11-04T00:00:00')}
          events={calendarData}
        />
      </div>
    </>
  );
}
