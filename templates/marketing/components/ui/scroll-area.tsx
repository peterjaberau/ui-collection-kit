import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { cn } from '@/utils/cn';

const ScrollAreaRoot = ScrollArea.Root;
const ScrollAreaViewport = ScrollArea.Viewport;

const ScrollAreaScrollbarVertical = React.forwardRef<
  React.ComponentRef<typeof ScrollArea.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollArea.ScrollAreaScrollbar>
>(({ className, ...rest }, ref) => {
  return (
    <ScrollArea.Scrollbar
      ref={ref}
      className={cn(
        'relative z-30 flex w-[22px] touch-none select-none justify-center border-l border-stroke-soft-200 bg-bg-white-0 py-1.5',
        className,
      )}
      orientation='vertical'
      {...rest}
    >
      <ScrollArea.Thumb className='!w-1.5 shrink-0 rounded-full bg-stroke-soft-200' />
    </ScrollArea.Scrollbar>
  );
});
ScrollAreaScrollbarVertical.displayName = 'ScrollbarVertical';

const ScrollAreaScrollbarHorizontal = React.forwardRef<
  React.ComponentRef<typeof ScrollArea.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollArea.ScrollAreaScrollbar>
>(({ className, ...rest }, ref) => {
  return (
    <ScrollArea.Scrollbar
      ref={ref}
      className={cn(
        'relative z-30 flex h-[22px] touch-none select-none justify-center border-t border-stroke-soft-200 bg-bg-white-0 px-1.5',
        className,
      )}
      orientation='horizontal'
      {...rest}
    >
      <ScrollArea.Thumb className='!h-1.5 shrink-0 rounded-full bg-stroke-soft-200' />
    </ScrollArea.Scrollbar>
  );
});
ScrollAreaScrollbarHorizontal.displayName = 'ScrollbarHorizontal';

export {
  ScrollAreaRoot as Root,
  ScrollAreaViewport as Viewport,
  ScrollAreaScrollbarVertical as ScrollbarVertical,
  ScrollAreaScrollbarHorizontal as ScrollbarHorizontal,
};
