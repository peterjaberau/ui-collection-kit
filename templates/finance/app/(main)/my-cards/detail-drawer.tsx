'use client';

import * as React from 'react';
import { RiHistoryLine } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import { currencyFormatter } from '@/utils/number-formatter';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Drawer from '@/components/ui/drawer';
import { PhysicalCard } from '@/components/physical-card';
import { TransactionItem } from '@/components/transaction-item';
import { VirtualCard } from '@/components/virtual-card';

import { myCardDetailDataAtom, myCardDetailModalOpenAtom } from './list';

const MTransactionItem = motion(TransactionItem);

const recentTransactionItemVariants = (i: number) => ({
  initial: {
    opacity: 0,
    translateY: 8,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.08 * i + 0.1 },
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.08 * i + 0.1 },
  },
});

export function MyCardDetailDrawer() {
  const [detailModalOpen, setDetailModalOpen] = useAtom(
    myCardDetailModalOpenAtom,
  );
  const [detailData, setDetailData] = useAtom(myCardDetailDataAtom);

  if (!detailData) return;

  const isPhysicalCard = detailData.type === 'physical';

  return (
    <Drawer.Root open={detailModalOpen} onOpenChange={setDetailModalOpen}>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            {isPhysicalCard ? 'Physical' : 'Virtual'} Card
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Divider.Root />

          <div className='flex flex-col gap-4 p-5'>
            {isPhysicalCard ? (
              <PhysicalCard name={detailData.name} />
            ) : (
              <VirtualCard
                name={detailData.name}
                balance={detailData.balance}
                logo={detailData.logo}
                status={detailData.status}
              />
            )}

            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between gap-5'>
                <div className='text-paragraph-sm text-text-sub-600'>
                  Card Number
                </div>
                <div className='text-label-sm text-text-strong-950'>
                  {detailData.cardNumber}
                </div>
              </div>
              <div className='flex items-center justify-between gap-5'>
                <div className='text-paragraph-sm text-text-sub-600'>
                  Expiry Date
                </div>
                <div className='text-label-sm text-text-strong-950'>
                  {detailData.expiryDate}
                </div>
              </div>
              <div className='flex items-center justify-between gap-5'>
                <div className='text-paragraph-sm text-text-sub-600'>CVC</div>
                <div className='text-label-sm text-text-strong-950'>
                  {detailData.cvc}
                </div>
              </div>
              <div className='flex items-center justify-between gap-5'>
                <div className='text-paragraph-sm text-text-sub-600'>
                  Spending Limit (Monthly)
                </div>
                <div className='text-label-sm text-text-strong-950'>
                  {currencyFormatter.format(detailData.limit)}
                </div>
              </div>
            </div>

            <div className='flex gap-3'>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                className='w-full'
              >
                Unhide
              </Button.Root>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                className='w-[120px] shrink-0'
              >
                Adjust Limit
              </Button.Root>
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                className='w-full'
              >
                More
              </Button.Root>
            </div>
          </div>

          <Divider.Root variant='solid-text'>Recent Transactions</Divider.Root>

          <div className='flex flex-col gap-2 px-5 py-3'>
            <AnimatePresence mode='wait'>
              {detailData.recentTransactions.map((trx, i) => (
                <MTransactionItem
                  key={trx.id}
                  variants={recentTransactionItemVariants(i)}
                  initial='initial'
                  animate='animate'
                  name={trx.name}
                  description={trx.description}
                  transaction={trx.transaction}
                  date={trx.date}
                  icon={trx.icon}
                  type={trx.type}
                />
              ))}
            </AnimatePresence>
          </div>
        </Drawer.Body>

        <Drawer.Footer>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='medium'
            className='w-full'
          >
            <Button.Icon as={RiHistoryLine} />
            See All Transactions
          </Button.Root>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  );
}
