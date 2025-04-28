'use client';

import * as React from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

import { cn } from '@/utils/cn';

const CheckButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    MotionProps & {
      checked?: boolean;
    }
>(({ checked, children, ...rest }, forwardedRef) => {
  return (
    <motion.button
      ref={forwardedRef}
      type='button'
      className={cn(
        'flex h-7 items-center rounded-lg bg-bg-white-0 px-2.5 text-label-sm text-text-sub-600 ring-1 ring-inset ring-stroke-soft-200',
        'transition-colors duration-200 ease-out',
        'hover:bg-bg-weak-50',
        'disabled:pointer-events-none disabled:bg-bg-weak-50 disabled:text-text-disabled-300',
        {
          'ring-transparent bg-primary-alpha-10 text-primary-base': checked,
        },
      )}
      {...rest}
    >
      <AnimatePresence initial={false} mode='popLayout'>
        {checked && (
          <>
            <motion.svg
              key='check-icon'
              initial={{ opacity: 0, width: 0, height: 0 }}
              animate={{ opacity: 1, width: 12, height: 12 }}
              exit={{
                opacity: 0,
                width: 0,
                height: 0,
              }}
              transition={{
                type: 'spring',
                duration: 0.3,
                bounce: 0.23,
              }}
              className='shrink-0'
              width={12}
              height={12}
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 12A6 6 0 116 0a6 6 0 010 12zm-.598-3.6l4.242-4.243-.849-.848-3.393 3.394-1.698-1.697-.848.848L5.402 8.4z'
                fill='currentColor'
              />
            </motion.svg>
            <motion.div
              key='space'
              className='w-1.5'
              initial={{ width: 0 }}
              animate={{ width: 6 }}
              exit={{ width: 0 }}
              transition={{
                type: 'spring',
                duration: 0.3,
                bounce: 0.23,
              }}
            />
          </>
        )}
      </AnimatePresence>
      {children}
    </motion.button>
  );
});
CheckButton.displayName = 'CheckButton';

export default CheckButton;
