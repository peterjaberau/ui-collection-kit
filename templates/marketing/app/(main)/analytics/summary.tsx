import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';

function DividerVertical({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative w-0 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stroke-soft-200',
        className,
      )}
    />
  );
}

export default function AnalyticsSummary() {
  return (
    <div className='flex flex-col flex-wrap gap-4 pb-6 xl:flex-row xl:gap-0'>
      <div className='w-full first:pl-0 last:pr-0 xl:w-1/3 xl:px-7'>
        <div className='text-label-sm text-text-sub-600'>Current Sales</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>3,484</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-success-base'>+7.1%</span> vs prev
          </div>
        </div>
      </div>

      <DividerVertical className='hidden xl:block' />
      <Divider.Root className='xl:hidden' />

      <div className='w-full first:pl-0 last:pr-0 xl:w-1/3 xl:px-7'>
        <div className='text-label-sm text-text-sub-600'>Daily Average</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>486</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-success-base'>+2%</span> vs last week
          </div>
        </div>
      </div>

      <DividerVertical className='hidden xl:block' />
      <Divider.Root className='xl:hidden' />

      <div className='w-full first:pl-0 last:pr-0 xl:w-1/3 xl:px-7'>
        <div className='text-label-sm text-text-sub-600'>Conversion Rate</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>3.8%</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-error-base'>-0.5%</span> vs last week
          </div>
        </div>
      </div>
    </div>
  );
}
