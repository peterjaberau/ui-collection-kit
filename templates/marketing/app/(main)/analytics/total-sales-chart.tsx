'use client';

import * as React from 'react';
import { format, getWeek } from 'date-fns';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { cn } from '@/utils/cn';
import useBreakpoint from '@/hooks/use-breakpoint';

function useTooltipPosition(chartRef: React.RefObject<HTMLDivElement>) {
  const [tooltipPos, setTooltipPos] = React.useState({
    x: 0,
    y: 0,
    position: 'left' as 'left' | 'right',
  });

  React.useEffect(() => {
    const handleUpdate = () => {
      if (chartRef.current) {
        const activeDot = chartRef.current.querySelector(
          '.recharts-active-dot',
        ) as HTMLElement;

        if (activeDot) {
          const chartRect = chartRef.current.getBoundingClientRect();
          const activeDotRect = activeDot.getBoundingClientRect();

          // Calculate the x position relative to the chart
          const xPos = activeDotRect.x - chartRect.x + activeDotRect.width / 2;
          const yPos = activeDotRect.y - chartRect.y + activeDotRect.height / 2;

          // Determine if the dot is in the left or right half of the chart
          const position = xPos > chartRect.width / 2 ? 'right' : 'left';

          setTooltipPos({
            x: xPos,
            y: yPos,
            position,
          });
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleUpdate);
    const mutationObserver = new MutationObserver(handleUpdate);

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
      mutationObserver.observe(chartRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    handleUpdate();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [chartRef]);

  return tooltipPos;
}

type CustomTooltipProps = React.ComponentProps<typeof RechartsTooltip>;

const CustomTooltip = ({
  active,
  payload,
  wrapperClassName,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className={cn('group', wrapperClassName)}>
        <div
          className={cn(
            'relative whitespace-nowrap rounded-10 bg-bg-white-0 px-3 py-2.5 ring-1 ring-stroke-soft-200',
            '-translate-y-1/2',
            'group-[&.left]:translate-x-[21px]',
            'group-[&.right]:-translate-x-[calc(100%+21px)]',
          )}
          style={{
            filter:
              'drop-shadow(0px 12px 24px rgba(14, 18, 27, 0.06)) drop-shadow(0px 1px 2px rgba(14, 18, 27, 0.03))',
          }}
        >
          <div className='text-label-xs text-text-soft-400'>
            {format(payload[0].payload.date, 'E, MMM d')}
          </div>
          <div className='mt-1 flex items-center gap-1.5'>
            <div className='text-label-lg text-text-strong-950'>
              {payload[0].payload.value.toLocaleString()}
            </div>
            <div className='text-label-xs text-text-sub-600'>
              <span
                className={cn({
                  'text-success-base': payload[0].payload.prev.startsWith('+'),
                  'text-error-base': payload[0].payload.prev.startsWith('-'),
                })}
              >
                {payload[0].payload.prev}
              </span>{' '}
              vs prev
            </div>
          </div>
          <div
            className={cn(
              'absolute top-1/2 size-3 -translate-y-1/2',
              'group-[&.right]:right-0 group-[&.right]:translate-x-[calc(100%-6px)]',
              'group-[&.left]:left-0 group-[&.left]:-translate-x-[calc(100%-6px)]',
            )}
          >
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 border [clip-path:polygon(0_100%,0_0,100%_100%)]',
                'size-3 rounded-bl-sm',
                'border-stroke-soft-200 bg-bg-white-0',
                'group-[&.left]:rotate-45',
                'group-[&.right]:-rotate-[135deg]',
              )}
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default function TotalSalesChart({
  period,
  data,
}: {
  period: 'daily' | 'weekly' | 'monthly';
  data: { date: string; value: number; prev: string }[];
}) {
  const isFirstLoad = React.useRef(true);
  const { sm } = useBreakpoint();
  const chartRef = React.useRef<HTMLDivElement>(null);
  const { x: tooltipX, y: tooltipY, position } = useTooltipPosition(chartRef);

  React.useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  const formatXAxis = (dateStr: string) => {
    const date = new Date(dateStr);

    switch (period) {
      case 'daily':
        return format(date, 'EEEE');
      case 'weekly':
        return `Week ${getWeek(date)}`;
      case 'monthly':
        return format(date, 'MMM');
      default:
        return dateStr;
    }
  };

  return (
    <ResponsiveContainer width='100%' height={192} ref={chartRef}>
      <LineChart
        data={data}
        margin={{ top: 6, right: 0, left: 0, bottom: 6 }}
        className={cn(
          '[&_.recharts-cartesian-grid-horizontal>line]:stroke-bg-weak-50 [&_.recharts-cartesian-grid-horizontal>line]:[stroke-dasharray:0]',
          '[&_.recharts-cartesian-grid-vertical>line:last-child]:opacity-0 [&_.recharts-cartesian-grid-vertical>line:nth-last-child(2)]:opacity-0',
        )}
      >
        <RechartsTooltip
          content={<CustomTooltip />}
          cursor={false}
          isAnimationActive={true}
          animationDuration={100}
          offset={0}
          position={{ x: tooltipX, y: tooltipY }}
          wrapperClassName={position}
        />
        <CartesianGrid
          strokeDasharray='4 4'
          className='stroke-stroke-soft-200'
        />
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickMargin={8}
          tickFormatter={formatXAxis}
          minTickGap={40}
          padding={{ left: sm ? 30 : 4, right: sm ? 30 : 4 }}
          className='[&_.recharts-cartesian-axis-tick_text]:fill-text-soft-400 [&_.recharts-cartesian-axis-tick_text]:text-label-xs'
        />
        <YAxis
          type='number'
          dataKey='value'
          domain={['auto', 'auto']}
          orientation='right'
          axisLine={false}
          tickLine={false}
          tickMargin={16}
          className='[&_.recharts-cartesian-axis-tick_text]:fill-text-soft-400 [&_.recharts-cartesian-axis-tick_text]:text-label-xs'
          tickFormatter={(value) =>
            new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
              value,
            )
          }
        />
        <Line
          // type='monotone'
          dataKey='value'
          stroke='hsl(var(--primary-base))'
          strokeWidth={2}
          dot={false}
          strokeLinejoin='round'
          isAnimationActive={isFirstLoad.current}
          activeDot={{
            r: 5.5,
            strokeWidth: 3,
            className: cn(
              'stroke-stroke-white-0 [filter:drop-shadow(0_6px_10px_#0e121b0f)_drop-shadow(0_2px_4px_#0e121b08)]',
            ),
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
