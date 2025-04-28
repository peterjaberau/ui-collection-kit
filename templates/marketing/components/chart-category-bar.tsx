import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { scaleLinear } from 'd3-scale';

import { cn } from '@/utils/cn';
import { LegendDot } from '@/components/legend-dot';

export const COLORS = ['bg-warning-base', 'bg-away-base', 'bg-stable-base'];

type LegendProps = {
  color?: (typeof COLORS)[number] | (string & {});
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

const Legend = React.forwardRef<HTMLDivElement, LegendProps>(
  ({ children, className, color, asChild, ...rest }, forwardedRef) => {
    const Component = asChild ? Slot : 'div';

    return (
      <Component
        ref={forwardedRef}
        className={cn(
          'flex items-center gap-1 text-left text-label-xs text-text-sub-600',
          className,
        )}
        {...rest}
      >
        <LegendDot className={color} />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);
Legend.displayName = 'Legend';

export type CategoryBarChartProps = {
  data: {
    label: string;
    value: number;
  }[];
  wrapperClassName?: string;
  categoryClassName?: string;
  colors?: string[];
  showLabels?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function CategoryBarChart({
  data,
  className,
  wrapperClassName,
  categoryClassName,
  colors = COLORS,
  showLabels = true,
  ...rest
}: CategoryBarChartProps) {
  const TOTAL_VALUE = data.reduce((acc, curr) => curr.value + acc, 0);
  const getValue = scaleLinear().domain([0, TOTAL_VALUE]).range([0, 100]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn('flex flex-col gap-4', className)} {...rest}>
      <div className={cn('flex gap-[5px]', wrapperClassName)}>
        {data.map((p, i) => (
          <div
            key={p.label}
            className={cn('h-2 rounded-sm transition-all', categoryClassName)}
            style={{
              width: `${getValue(p.value)}%`,
            }}
          >
            {mounted && (
              <div
                style={{
                  ['--i' as any]: i,
                }}
                className={cn(
                  'chart-category-cell-load h-full rounded-sm',
                  colors[i % colors.length],
                )}
              />
            )}
          </div>
        ))}
      </div>
      {showLabels && (
        <div className='flex flex-wrap gap-4'>
          {data.map((d, i) => (
            <Legend key={d.label} color={colors[i % colors.length]}>
              {d.label}
            </Legend>
          ))}
        </div>
      )}
    </div>
  );
}

export type CategoryBarChartEmptyProps = {
  labels: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function CategoryBarChartEmpty({
  className,
  labels,
  ...rest
}: CategoryBarChartEmptyProps) {
  return (
    <div className={cn('space-y-4', className)} {...rest}>
      <div className='flex gap-[5px]'>
        {labels.map((label) => (
          <div key={label} className='h-2.5 w-1/3 rounded-sm bg-bg-soft-200' />
        ))}
      </div>
      <div className='flex flex-wrap gap-4'>
        {labels.map((label, i) => (
          <Legend
            key={label}
            className='text-text-disabled-300'
            color='bg-text-disabled-300'
          >
            {label}
          </Legend>
        ))}
      </div>
    </div>
  );
}
