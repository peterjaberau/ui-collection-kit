'use client';

import * as Avatar from '@/components/ui/avatar';
import Header from '@/components/header';
import { MoveMoneyButton } from '@/components/move-money-button';
import { WidgetBudgetOverviewEmpty } from '@/components/widgets/widget-budget-overview';
import { WidgetCreditScoreEmpty } from '@/components/widgets/widget-credit-score';
import { WidgetExchangeEmpty } from '@/components/widgets/widget-exchange';
import { WidgetMajorExpensesEmpty } from '@/components/widgets/widget-major-expenses';
import { WidgetMyCardsEmpty } from '@/components/widgets/widget-my-cards';
import { WidgetMyCardsCompactEmpty } from '@/components/widgets/widget-my-cards-compact';
import { WidgetMySubscriptionsEmpty } from '@/components/widgets/widget-my-subscriptions';
import { WidgetQuickTransferEmpty } from '@/components/widgets/widget-quick-transfer';
import { WidgetRecentTransactionsEmpty } from '@/components/widgets/widget-recent-transactions';
import { WidgetSavedActionsEmpty } from '@/components/widgets/widget-saved-actions';
import { WidgetSpendingSummaryEmpty } from '@/components/widgets/widget-spending-summary';
import { WidgetTotalBalanceEmpty } from '@/components/widgets/widget-total-balance';
import { WidgetTotalExpensesEmpty } from '@/components/widgets/widget-total-expenses';
import WidgetTransactionsTable from '@/components/widgets/widget-transactions-table';

export default function PageHome() {
  return (
    <>
      <Header
        icon={
          <Avatar.Root size='48' color='blue'>
            <Avatar.Image src='/images/avatar/illustration/arthur.png' alt='' />
          </Avatar.Root>
        }
        title='Arthur Taylor'
        description='Welcome back to Apex 👋🏻'
      >
        <MoveMoneyButton className='hidden lg:flex' />
      </Header>

      <div className='flex flex-col gap-6 overflow-hidden px-4 pb-6 lg:px-8 lg:pt-1'>
        <div className='mx-auto grid w-full max-w-md grid-cols-1 items-start gap-6 lg:max-w-3xl lg:grid-cols-2 lg:justify-center min-[1300px]:max-w-4xl min-[1400px]:max-w-full min-[1400px]:grid-cols-3'>
          <WidgetMyCardsEmpty className='lg:row-span-2' />
          <WidgetBudgetOverviewEmpty className='[grid-column:1/-1] min-[1300px]:col-span-2' />
          <WidgetSpendingSummaryEmpty />
          <WidgetExchangeEmpty />
          <WidgetMyCardsCompactEmpty />
          <div className='grid gap-6'>
            <WidgetTotalExpensesEmpty />
            <WidgetTotalBalanceEmpty />
          </div>
          <WidgetQuickTransferEmpty />
          <WidgetRecentTransactionsEmpty />
          <WidgetMySubscriptionsEmpty />
          <WidgetSavedActionsEmpty />
          <WidgetCreditScoreEmpty />
          <WidgetMajorExpensesEmpty />
          <WidgetTransactionsTable className='[grid-column:1/-1]' />
        </div>
      </div>
    </>
  );
}
