'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  RiCheckboxCircleFill,
  RiGiftLine,
  RiMapPinTimeLine,
  RiMore2Line,
  RiShoppingBag2Line,
  RiTimeLine,
} from '@remixicon/react';
import { atom, useAtom } from 'jotai';

import { cn } from '@/utils/cn';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import Drawer from '@/components/ui/drawer';
import * as StatusBadge from '@/components/ui/status-badge';
import { DashedDivider } from '@/components/dashed-divider';

export const orderDetailDrawerOpenAtom = atom(false);

type Timeline = {
  status: 'out' | 'transit' | 'prepared' | 'confirmed';
  title: string;
  description: string;
  date: string;
};

const timeline: Timeline[] = [
  {
    status: 'out',
    title: 'Order confirmed',
    description: 'Order placed and confirmed',
    date: '4 Nov 2024, 05:16',
  },
  {
    status: 'transit',
    title: 'Package prepared',
    description: 'Packed and handed to DHL Express',
    date: '4 Nov 2024, 09:45',
  },
  {
    status: 'prepared',
    title: 'In transit',
    description: 'Package in transit',
    date: '4 Nov 2024, 14:30',
  },
  {
    status: 'confirmed',
    title: 'Out for delivery',
    description: 'Will be delivered today',
    date: '4 Nov 2024, 16:45',
  },
];

const TIMELINE_ICONS: Record<
  Timeline['status'],
  {
    color: string;
    icon: React.ElementType;
  }
> = {
  out: {
    color: 'text-success-base',
    icon: RiShoppingBag2Line,
  },
  transit: {
    color: 'text-feature-base',
    icon: RiGiftLine,
  },
  prepared: {
    color: 'text-warning-base',
    icon: RiTimeLine,
  },
  confirmed: {
    color: 'text-faded-base',
    icon: RiMapPinTimeLine,
  },
};

export default function OrderDetailDrawer() {
  const [open, setOpen] = useAtom(orderDetailDrawerOpenAtom);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className='flex items-start gap-4 p-5'>
        <div className='flex-1'>
          <DialogPrimitive.Title className='text-label-lg text-text-strong-950'>
            Order #98745
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Oct 29, 2024 • $478.80
          </DialogPrimitive.Description>
        </div>

        <StatusBadge.Root variant='light' status='completed'>
          <StatusBadge.Icon as={RiCheckboxCircleFill} />
          Paid
        </StatusBadge.Root>

        <Button.Root variant='neutral' mode='ghost' size='xxsmall'>
          <Button.Icon as={RiMore2Line} />
        </Button.Root>
      </div>

      <Divider.Root variant='solid-text'>ORDER SUMMARY</Divider.Root>

      <div className='flex flex-col gap-4 p-5'>
        <div className='flex items-center gap-4'>
          <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-bg-weak-50'>
            <img
              src='/images/products/apple-watch-1.png'
              alt=''
              className='size-11 object-contain'
            />
          </div>
          <div>
            <div className='text-label-md text-text-strong-950'>
              Apple Watch S5 GPS 40MM
            </div>
            <div className='mt-1 text-label-sm text-text-soft-400'>
              MWVE2LL/A
            </div>
          </div>
        </div>

        <DashedDivider />

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>Subtotal</div>
            <div className='text-right text-paragraph-sm text-text-strong-950'>
              $399.00
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-paragraph-sm text-text-sub-600'>
              VAT (20.00%)
            </div>
            <div className='text-right text-paragraph-sm text-text-strong-950'>
              $79.80
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-label-sm text-text-sub-600'>Total</div>
            <div className='text-right text-paragraph-sm text-text-strong-950'>
              $478.80
            </div>
          </div>
        </div>
      </div>

      <Divider.Root variant='solid-text'>CUSTOMER</Divider.Root>

      <div className='p-5'>
        <div className='flex items-center gap-4'>
          <Avatar.Root size='48' color='yellow'>
            SW
          </Avatar.Root>

          <div className=''>
            <div className='text-label-md text-text-strong-950'>
              Sophia Williams
            </div>
            <div className='mt-1 text-paragraph-sm text-text-sub-600'>
              sophia@alignui.com
            </div>
          </div>
        </div>
      </div>

      <Divider.Root variant='solid-text'>TIMELINE</Divider.Root>

      <div className='flex flex-col gap-6 p-5'>
        {timeline.map((item, i, arr) => {
          let Icon = TIMELINE_ICONS[item.status].icon;
          return (
            <div key={i} className='relative flex items-start gap-4'>
              {/* line */}
              {i < arr.length - 1 && (
                <div className='absolute -bottom-4 left-3.5 top-9 w-px bg-stroke-soft-200' />
              )}

              <div className='flex size-7 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
                <Icon
                  className={cn('size-4', TIMELINE_ICONS[item.status].color)}
                />
              </div>
              <div className='flex-1'>
                <div className='flex items-center justify-between gap-1.5'>
                  <div className='text-label-sm text-text-strong-950'>
                    {item.title}
                  </div>
                  <div className='text-right text-subheading-2xs uppercase text-text-soft-400'>
                    {item.date}
                  </div>
                </div>
                <div className='mt-1 text-paragraph-xs text-text-sub-600'>
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-auto'>
        <Divider.Root />
        <div className='grid grid-cols-2 gap-4 p-5'>
          <Button.Root
            variant='neutral'
            mode='stroke'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button.Root>
          <Button.Root onClick={() => setOpen(false)}>Save Changes</Button.Root>
        </div>
      </div>
    </Drawer>
  );
}
