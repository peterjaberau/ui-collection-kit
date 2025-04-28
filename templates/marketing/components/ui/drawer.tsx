'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';

export default function Drawer({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) {
  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            // base
            'fixed inset-0 z-50 grid grid-cols-1 place-items-end overflow-hidden bg-overlay',
            // animation
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        >
          <DialogPrimitive.Content
            className={cn(
              // base
              'flex size-full max-w-[416px] flex-col overflow-y-auto p-2',
              // animation
              'data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=open]:animate-in',
              'data-[state=closed]:duration-200 data-[state=closed]:ease-in data-[state=closed]:animate-out',
              'data-[state=open]:slide-in-from-right-full',
              'data-[state=closed]:slide-out-to-right-full',
            )}
          >
            <div className='relative flex w-full flex-1 flex-col rounded-20 bg-bg-white-0 shadow-custom-md'>
              {children}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
