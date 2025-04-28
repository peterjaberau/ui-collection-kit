import { cn } from '@/utils/cn';

function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative w-0 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stroke-soft-200',
        className,
      )}
    />
  );
}

export default function ProductsSummary() {
  return (
    <div className='flex flex-wrap py-6'>
      <div className='w-full pb-4 first:pl-0 last:pr-0 sm:w-1/2 sm:px-7 sm:pb-0 xl:w-1/4 xl:pb-0'>
        <div className='text-label-sm text-text-sub-600'>Total Products</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>248</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-success-base'>+12</span> this week
          </div>
        </div>
      </div>

      <Divider className='hidden sm:block' />

      <div className='w-full border-t border-stroke-soft-200 pb-4 pt-4 first:pl-0 last:pr-0 sm:w-1/2 sm:border-transparent sm:px-7 sm:pt-0 xl:w-1/4 xl:pb-0'>
        <div className='text-label-sm text-text-sub-600'>Active Listings</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>186</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-success-base'>+2%</span> of total
          </div>
        </div>
      </div>

      <Divider className='hidden xl:block' />

      <div className='w-full border-t border-stroke-soft-200 pb-4 pt-4 first:pl-0 last:pr-0 sm:w-1/2 sm:px-7 sm:pb-0 xl:w-1/4 xl:border-transparent xl:pt-0 [&:nth-child(5)]:pl-0 xl:[&:nth-child(5)]:pl-7'>
        <div className='text-label-sm text-text-sub-600'>Total Sales</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>8,944</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-success-base'>+2.1%</span> this week
          </div>
        </div>
      </div>

      <Divider className='hidden sm:block' />

      <div className='w-full border-t border-stroke-soft-200 pt-4 first:pl-0 last:pr-0 sm:w-1/2 sm:px-7 xl:w-1/4 xl:border-transparent xl:pt-0'>
        <div className='text-label-sm text-text-sub-600'>Total Revenue</div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='text-title-h5 text-text-strong-950'>$8,944</div>
          <div className='text-label-xs text-text-sub-600'>
            <span className='text-error-base'>-0.5%</span> vs last week
          </div>
        </div>
      </div>
    </div>
  );
}
