'use client';

import * as React from 'react';
import { RiBankCardLine } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import { atom, useAtomValue, useSetAtom } from 'jotai';

import {
  physicalCardsData,
  virtualCardsData,
  type TypePhysicalCard,
  type TypeVirtualCard,
} from '@/lib/cards-data';
import * as Button from '@/components/ui/button';
import { PhysicalCard } from '@/components/physical-card';
import { VirtualCard } from '@/components/virtual-card';

import { MyCardDetailDrawer } from './detail-drawer';
import { filteredCardTypeAtom } from './filters';

export const myCardDetailDataAtom = atom<
  TypeVirtualCard | TypePhysicalCard | null
>(null);
export const myCardDetailModalOpenAtom = atom(false);

function CardBox({
  children,
  title,
  cardData,
}: {
  children: React.ReactNode;
  title: string;
  cardData: TypeVirtualCard | TypePhysicalCard;
}) {
  const setDetailModalOpen = useSetAtom(myCardDetailModalOpenAtom);
  const setDetailData = useSetAtom(myCardDetailDataAtom);

  return (
    <div className='flex w-full flex-col gap-4 rounded-2xl bg-bg-white-0 p-4 ring-1 ring-inset ring-stroke-soft-200 '>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <RiBankCardLine className='size-6 shrink-0 text-text-sub-600' />
          <span className='text-label-md text-text-strong-950'>{title}</span>
        </div>
        <Button.Root
          onClick={() => {
            setDetailData(cardData);
            setDetailModalOpen(true);
          }}
          variant='neutral'
          mode='stroke'
          size='xsmall'
        >
          Details
        </Button.Root>
      </div>
      {children}
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between gap-5'>
          <div className='text-paragraph-sm text-text-sub-600'>Card Number</div>
          <div className='text-label-sm text-text-strong-950'>
            {cardData.cardNumber}
          </div>
        </div>
        <div className='flex items-center justify-between gap-5'>
          <div className='text-paragraph-sm text-text-sub-600'>Expiry Date</div>
          <div className='text-label-sm text-text-strong-950'>
            {cardData.expiryDate}
          </div>
        </div>
        <div className='flex items-center justify-between gap-5'>
          <div className='text-paragraph-sm text-text-sub-600'>CVC</div>
          <div className='text-label-sm text-text-strong-950'>
            {cardData.cvc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardsList() {
  const filteredCardType = useAtomValue(filteredCardTypeAtom);

  const filteredData = React.useMemo(() => {
    const all = [...virtualCardsData, ...physicalCardsData];

    if (filteredCardType === 'virtual') return virtualCardsData;
    if (filteredCardType === 'physical') return physicalCardsData;
    return all;
  }, [filteredCardType]);

  return (
    <>
      <div className='-mx-3 md:mx-0'>
        <div className='mx-auto grid w-full max-w-[352px] items-start gap-6 md:mx-0 md:max-w-full md:grid-cols-[repeat(auto-fill,352px)]'>
          <AnimatePresence mode='popLayout'>
            {filteredData.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
                layout='position'
              >
                {p.type === 'virtual' ? (
                  <CardBox title='Virtual Card' cardData={p}>
                    <VirtualCard
                      status={p.status}
                      name={p.name}
                      balance={p.balance}
                      logo={p.logo}
                    />
                  </CardBox>
                ) : (
                  <CardBox title='Physical Card' cardData={p}>
                    <PhysicalCard name={p.name} />
                  </CardBox>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <MyCardDetailDrawer />
    </>
  );
}
