'use client';

import * as React from 'react';
import * as AccordionPrimivites from '@radix-ui/react-accordion';
import {
  RemixiconComponentType,
  RiArrowDownSLine,
  RiCalendarEventLine,
  RiCloseCircleLine,
  RiDiscussLine,
  RiLayoutGridLine,
  RiSpamFill,
  RiSpamLine,
  RiTimeFill,
} from '@remixicon/react';

import { cn, cnExt } from '@/utils/cn';
import * as CompactButton from '@/components/ui/compact-button';
import * as LinkButton from '@/components/ui/link-button';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

const events = [
  {
    title: 'Weekly Team Meeting',
    time: '3:00 PM - 4:30 PM',
    status: {
      type: 'success',
      text: 'Today',
      buttonLabel: 'Join Meeting',
      icon: RiTimeFill,
    },
  },
  {
    title: 'Product Launch Event',
    time: '3:00 PM - 4:30 PM',
    status: {
      type: 'warning',
      text: '2 Conflicted',
      buttonLabel: 'See Conflict',
      icon: RiSpamFill,
    },
  },
  {
    title: 'Team Building Workshop',
    time: '9:00 AM - 12:00 PM',
    status: {
      type: 'error',
      text: 'Cancelled',
      date: 'Jan 06, 2024',
      icon: RiTimeFill,
    },
  },
  {
    title: 'Marketing Campaign Strategy',
    time: '2:30 PM - 4:00 PM',
    status: {
      type: 'neutral',
      text: '3 days later',
      date: 'Jan 06, 2024',
      icon: RiTimeFill,
    },
  },
];

type EventItemProps = {
  title: string;
  time: string;
  status: {
    type: 'success' | 'warning' | 'error' | 'neutral' | (string & {});
    text: string;
    buttonLabel?: string;
    date?: string;
    icon: RemixiconComponentType;
  };
  index?: number;
};

function EventItem({ title, time, status, index = 0 }: EventItemProps) {
  const Icon = status.icon;

  return (
    <div
      key={index}
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
      className={cn(
        'flex flex-col rounded-xl bg-bg-white-0 p-4 ring-1 ring-inset ring-stroke-soft-200',
        // animation
        '-translate-x-4 opacity-0',
        'group-data-[state=active]/tab-menu:animate-event-item-show',
      )}
    >
      <div className='text-label-sm'>{title}</div>
      <div className='mt-1 text-paragraph-xs text-text-sub-600'>{time}</div>
      <div className='mt-auto'>
        <div
          className={cn(
            '-mx-2 -mb-2 mt-3 flex items-center gap-1.5 rounded-lg p-2 pr-3',
            {
              'bg-success-lighter': status.type === 'success',
              'bg-warning-lighter': status.type === 'warning',
              'bg-error-lighter': status.type === 'error',
              'bg-neutral-lighter': status.type === 'neutral',
            },
          )}
        >
          <Icon
            className={cn('size-4', {
              'text-success-base': status.type === 'success',
              'text-warning-base': status.type === 'warning',
              'text-error-base': status.type === 'error',
              'text-text-sub-600': status.type === 'neutral',
            })}
          />
          <div className='flex-1 text-label-xs'>{status.text}</div>
          {status.buttonLabel && (
            <LinkButton.Root variant='gray' size='small' underline>
              {status.buttonLabel}
            </LinkButton.Root>
          )}
          {status.date && (
            <div className='text-paragraph-xs text-text-sub-600'>
              {status.date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CalendarTabs({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabMenuHorizontal.Root>) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <AccordionPrimivites.Root
      type='single'
      collapsible
      defaultValue='accordion'
    >
      <AccordionPrimivites.Item
        value='accordion'
        className={cnExt('group/accordion', className)}
      >
        <TabMenuHorizontal.Root defaultValue='all' {...rest}>
          <div className='relative'>
            <TabMenuHorizontal.List
              wrapperClassName='-mx-4 pr-28 lg:mx-0'
              className='-mr-28 px-4 pr-28 lg:border-t-0 lg:px-0'
              ref={containerRef}
            >
              <TabMenuHorizontal.Trigger value='all'>
                <TabMenuHorizontal.Icon as={RiLayoutGridLine} />
                All Scheduled
              </TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value='meetings'>
                <TabMenuHorizontal.Icon as={RiDiscussLine} />
                Meetings (8)
              </TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value='events'>
                <TabMenuHorizontal.Icon as={RiCalendarEventLine} />
                Events (4)
              </TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value='conflicted'>
                <TabMenuHorizontal.Icon as={RiSpamLine} />
                Conflicted (2)
              </TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value='canceled'>
                <TabMenuHorizontal.Icon as={RiCloseCircleLine} />
                Canceled (1)
              </TabMenuHorizontal.Trigger>
            </TabMenuHorizontal.List>
            <div
              className={cn(
                'absolute right-0 top-3',
                'before:pointer-events-none before:absolute before:-inset-y-2.5 before:-right-4 before:w-28 before:bg-[linear-gradient(90deg,#0000,theme(colors.bg[white-0])_55%)]',
              )}
            >
              <AccordionPrimivites.Trigger asChild>
                <CompactButton.Root variant='stroke' size='large' fullRadius>
                  <CompactButton.Icon
                    as={RiArrowDownSLine}
                    className='group-data-[state=open]/accordion:-rotate-180'
                  />
                </CompactButton.Root>
              </AccordionPrimivites.Trigger>
            </div>
          </div>

          <AccordionPrimivites.Content className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'>
            <div className='pt-4'>
              <TabMenuHorizontal.Content value='all' className='group/tab-menu'>
                <div className='-mx-4 grid auto-cols-[264px] grid-flow-col gap-4 overflow-auto px-4 lg:mx-0 lg:px-0'>
                  {events.map((event, index) => (
                    <EventItem
                      key={index}
                      title={event.title}
                      time={event.time}
                      status={event.status}
                      index={index}
                    />
                  ))}
                </div>
              </TabMenuHorizontal.Content>
              <TabMenuHorizontal.Content
                value='meetings'
                className='group/tab-menu'
              >
                <div className='-mx-4 grid auto-cols-[264px] grid-flow-col gap-4 overflow-auto px-4 lg:mx-0 lg:px-0'>
                  {[events[2], events[0]].map((event, index) => (
                    <EventItem
                      key={index}
                      title={event.title}
                      time={event.time}
                      status={event.status}
                      index={index}
                    />
                  ))}
                </div>
              </TabMenuHorizontal.Content>
              <TabMenuHorizontal.Content
                value='events'
                className='group/tab-menu'
              >
                <div className='-mx-4 grid auto-cols-[264px] grid-flow-col gap-4 overflow-auto px-4 lg:mx-0 lg:px-0'>
                  {[events[1], events[3]].map((event, index) => (
                    <EventItem
                      key={index}
                      title={event.title}
                      time={event.time}
                      status={event.status}
                      index={index}
                    />
                  ))}
                </div>
              </TabMenuHorizontal.Content>
              <TabMenuHorizontal.Content
                value='conflicted'
                className='group/tab-menu'
              >
                <div className='-mx-4 grid auto-cols-[264px] grid-flow-col gap-4 overflow-auto px-4 lg:mx-0 lg:px-0'>
                  {[events[2], events[1]].map((event, index) => (
                    <EventItem
                      key={index}
                      title={event.title}
                      time={event.time}
                      status={event.status}
                      index={index}
                    />
                  ))}
                </div>
              </TabMenuHorizontal.Content>
              <TabMenuHorizontal.Content
                value='canceled'
                className='group/tab-menu'
              >
                <div className='-mx-4 grid auto-cols-[264px] grid-flow-col gap-4 overflow-auto px-4 lg:mx-0 lg:px-0'>
                  {[events[2]].map((event, index) => (
                    <EventItem
                      key={index}
                      title={event.title}
                      time={event.time}
                      status={event.status}
                      index={index}
                    />
                  ))}
                </div>
              </TabMenuHorizontal.Content>
            </div>
          </AccordionPrimivites.Content>
        </TabMenuHorizontal.Root>
      </AccordionPrimivites.Item>
    </AccordionPrimivites.Root>
  );
}
