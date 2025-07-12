'use client'
import { Page } from '../page';
import { PageHeader } from '../page.header';
import { PageFooter } from '../page.footer';
import { PageBody } from '../page.body';
import { PageAside } from '../page.aside';
import { PageContent } from '../page.content';
import { PageContentLayout } from '../page.content.layout';
import { PageToolbar } from '#components/ui/navigation-system/page.toolbar';

export const NavigationSystemDemo = () => {
  return (
    <Page>
      <PageHeader>page header</PageHeader>
      <PageBody>
        <PageAside>aside left</PageAside>
        <PageContent>
          <PageContentLayout type='split' defaultSize={[15, 70, 15]}>
            <PageContentLayout>PageContentComponent</PageContentLayout>

            <PageContentLayout direction='column'>
              <PageToolbar>PageToolbar</PageToolbar>

              <PageContentLayout type='split' direction="column" defaultSize={[70, 30]}>
                <PageContentLayout type='split' defaultSize={[20, 20, 60]}>
                  <PageContentLayout type='component'>
                    component
                  </PageContentLayout>
                  <PageContentLayout>component</PageContentLayout>
                  <PageContentLayout>
                    <PageContentLayout type='split' defaultSize={[20, 20, 60]}>
                      <PageContentLayout type='component'>
                        component
                      </PageContentLayout>
                      <PageContentLayout>component</PageContentLayout>
                      <PageContentLayout>component</PageContentLayout>
                    </PageContentLayout>
                  </PageContentLayout>
                </PageContentLayout>
              </PageContentLayout>
            </PageContentLayout>

            <PageContentLayout>PageContentComponent</PageContentLayout>
          </PageContentLayout>
        </PageContent>
        <PageAside>PageAside</PageAside>
      </PageBody>
      <PageFooter>page footer</PageFooter>
    </Page>
  );
};
