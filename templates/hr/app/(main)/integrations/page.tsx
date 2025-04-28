import { RiAddLine, RiEqualizerLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import Header from '@/app/(main)/header';

import { availableIntegrations, upcomingIntegrations } from './data';
import { IntegrationsFilters } from './filters';
import { IntegrationsGrid } from './grid';

const upcomingIntegrationsExtended = upcomingIntegrations.map((item) => ({
  ...item,
  soon: true,
}));

export default function PageIntegrations() {
  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiEqualizerLine className='size-6 text-text-sub-600' />
          </div>
        }
        title='Integrations'
        description='Manage your integrations to enhance and automate your workflow.'
      >
        <Button.Root className='w-full md:w-auto'>
          <Button.Icon as={RiAddLine} />
          Add Integration
        </Button.Root>
      </Header>

      <div className='hidden px-4 lg:block lg:px-8'>
        <Divider.Root />
      </div>

      <div className='flex flex-1 flex-col px-4 pb-6 lg:px-8 lg:pt-5'>
        <IntegrationsFilters />

        <IntegrationsGrid
          title='Available Integrations'
          description='Access the integrated tools and apps ready for your HR tasks.'
          integrations={availableIntegrations}
        />
        <IntegrationsGrid
          title='Upcoming Integrations'
          description='Explore the upcoming tools and apps that will soon be available for your HR tasks.'
          integrations={upcomingIntegrationsExtended}
        />
      </div>
    </>
  );
}
