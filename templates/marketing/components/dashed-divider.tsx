import { cn } from '@/utils/cn';

export function DashedDivider({ className }: { className?: string }) {
  return (
    <div className={cn('relative h-0 w-full', className)}>
      <div
        className='absolute left-0 top-1/2 h-px w-full -translate-y-1/2 text-stroke-soft-200'
        style={{
          background:
            'linear-gradient(90deg, currentColor 4px, transparent 4px) 50% 50% / 10px 1px repeat no-repeat',
        }}
      />
    </div>
  );
}

export function DashedDividerVertical({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-0', className)}>
      <div
        className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 text-stroke-soft-200'
        style={{
          background:
            'linear-gradient(180deg, currentColor 4px, transparent 4px) 50% 50% / 1px 10px no-repeat repeat',
        }}
      />
    </div>
  );
}
