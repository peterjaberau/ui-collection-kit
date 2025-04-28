'use client';

import * as React from 'react';
import { useMeasure } from '@uidotdev/usehooks';

export function ProgressChart({ value }: { value: number }) {
  const [containerRef, { width }] = useMeasure();

  const computedProgress = React.useMemo(() => {
    const progressWidth = (value / 100) * width!;
    return Math.round(progressWidth / 9) * 9;
  }, [value, width]);

  const computedWidth = React.useMemo(() => {
    return Math.round(width! / 9) * 9;
  }, [width]);

  return (
    <div ref={containerRef} className='w-full'>
      <div
        className='relative h-8 w-full bg-bg-soft-200'
        style={{
          WebkitMaskImage: `linear-gradient(90deg, #000 6px, #0000 6px)`,
          maskImage: `linear-gradient(90deg, #000 6px, #0000 6px)`,
          maskSize: '9px 100%',
          maskRepeat: 'space',
          backgroundPosition: '0 0',
          width: computedWidth,
        }}
      >
        <div
          className='h-full [clip-path:inset(0)]'
          style={{
            width: `${computedProgress}px`,
          }}
        >
          <div className='absolute inset-0 bg-primary-base' />
        </div>
      </div>
    </div>
  );
}

// Duplicate of ProgressChart with style differences
export function ProgressChartStockStatus({
  value,
  max = 100,
}: {
  value: number;
  max?: number;
}) {
  const [containerRef, { width }] = useMeasure();

  const computedProgress = React.useMemo(() => {
    const progressWidth = (value / max) * width!;
    return Math.round(progressWidth / 10) * 10;
  }, [value, width]);

  const computedWidth = React.useMemo(() => {
    return Math.round(width! / 10) * 10;
  }, [width]);

  return (
    <div ref={containerRef} className='w-full'>
      <div
        className='relative h-6 w-full bg-bg-soft-200'
        style={{
          // 1px rounded rectangles
          WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='24' fill='none' viewBox='0 0 7 24'%3E%3Crect width='5.625' height='24' x='.625' fill='%23000' rx='1'/%3E%3C/svg%3E")`,
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='24' fill='none' viewBox='0 0 7 24'%3E%3Crect width='5.625' height='24' x='.625' fill='%23000' rx='1'/%3E%3C/svg%3E")`,
          maskSize: '10px 100%',
          maskRepeat: 'space',
          backgroundPosition: '0 0',
          width: computedWidth,
        }}
      >
        <div
          className='h-full [clip-path:inset(0)]'
          style={{
            width: `${computedProgress}px`,
          }}
        >
          <div className='absolute inset-0 bg-primary-base' />
        </div>
      </div>
    </div>
  );
}
