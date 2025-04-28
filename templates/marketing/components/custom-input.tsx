'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';

const CustomInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<'input'>, 'size' | 'prefix'> & {
    size?: 'medium' | 'large';
    customInput?: React.ReactNode;
    asChild?: boolean;
  }
>(
  (
    {
      className,
      size = 'medium',
      type = 'text',
      asChild,
      customInput,
      ...rest
    },
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : 'input';

    return (
      <div
        className={cn(
          'relative flex w-full items-center pb-3.5',
          'before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-stroke-soft-200',
          'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-base after:transition-all after:duration-200 after:ease-out focus-within:after:w-full',
        )}
      >
        {customInput || (
          <Component
            type={type}
            ref={forwardedRef}
            className={cn(
              'h-6 w-full bg-transparent bg-none text-label-lg text-text-strong-950',
              'caret-primary-base',
              'placeholder:text-text-soft-400',
              'focus:outline-none',
              {
                'h-10 text-title-h4': size === 'large',
              },
              className,
            )}
            {...rest}
          />
        )}
      </div>
    );
  },
);
CustomInput.displayName = 'CustomInput';

export { CustomInput };
