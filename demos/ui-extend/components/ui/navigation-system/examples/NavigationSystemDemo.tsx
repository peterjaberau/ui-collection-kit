'use client';
import { Page } from '../page';
import {
  PageHeader,
  PageHeaderStart,
  PageHeaderCenter,
  PageHeaderEnd,
} from '../page.header';
import {
  PageFooter,
  PageFooterStart,
  PageFooterCenter,
  PageFooterEnd,
} from '../page.footer';
import { PageBody } from '../page.body';
import {
  PageAside,
  PageAsideStart,
  PageAsideCenter,
  PageAsideEnd,
} from '../page.aside';
import { PageContent } from '../page.content';
import { PageContentLayout } from '../page.content.layout';
import { PageToolbar } from '#components/ui/navigation-system/page.toolbar';
import { useNavigationSystem } from '#actors/hooks/useNavigationSystem';
import { useEffect, useState } from 'react';
import { PageSidePanel } from '#components/ui/navigation-system/page.sidepanel';
import { useSidePanels } from '#actors/hooks/useSidePanels';
import {
  DemoPanelAsideLeftStart,
  DemoPanelAsideLeftCenter,
  DemoPanelAsideLeftEnd,
  DemoPanelAsideRightStart,
  DemoPanelAsideRightCenter,
  DemoPanelAsideRightEnd,
} from './components/demo.panel.aside';
import {
  DemoPageHeaderStart,
  DemoPageHeaderCenter,
  DemoPageHeaderEnd,
} from './components/demo.page.header';

import {
  DemoPageFooterStart,
  DemoPageFooterCenter,
  DemoPageFooterEnd,
} from './components/demo.page.footer';

export const NavigationSystemDemo = () => {
  const { visibleItems } = useNavigationSystem();

  const { sidePanelsState } = useSidePanels();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Page>
      {visibleItems.header && (
        <PageHeader>
          <PageHeaderStart>
            <DemoPageHeaderStart />
          </PageHeaderStart>
          <PageHeaderCenter>
            <DemoPageHeaderCenter />
          </PageHeaderCenter>
          <PageHeaderEnd>
            <DemoPageHeaderEnd />
          </PageHeaderEnd>
        </PageHeader>
      )}
      <PageBody>
        {visibleItems.asideLeft && (
          <PageAside position={'left'}>
            <PageAsideStart>
              <DemoPanelAsideLeftStart />
            </PageAsideStart>
            <PageAsideCenter>
              <DemoPanelAsideLeftCenter />
            </PageAsideCenter>
            <PageAsideEnd>
              <DemoPanelAsideLeftEnd />
            </PageAsideEnd>
          </PageAside>
        )}


        {mounted && (
          <PageSidePanel actorId={'panelLeft'}>left side panel</PageSidePanel>
        )}

        <PageContent>
          <PageContentLayout type='split' defaultSize={[100]}>
            {/*<PageContentLayout>PageContentComponent</PageContentLayout>*/}

            <PageContentLayout direction='column'>
              {visibleItems.toolbar && <PageToolbar>PageToolbar</PageToolbar>}

              <PageContentLayout
                type='split'
                direction='column'
                defaultSize={[70, 30]}
              >
                <PageContentLayout type='split' defaultSize={[20, 20, 60]}>
                  <PageContentLayout type='component'>
                    component
                  </PageContentLayout>
                  <PageContentLayout>component</PageContentLayout>
                  <PageContentLayout>
                    <PageContentLayout
                      type='split'
                      direction='column'
                      defaultSize={[20, 20, 60]}
                    >
                      <PageContentLayout type='component'>
                        PageContentComponent
                      </PageContentLayout>
                      <PageContentLayout>component</PageContentLayout>
                      <PageContentLayout>component</PageContentLayout>
                    </PageContentLayout>
                  </PageContentLayout>
                </PageContentLayout>
                <PageContentLayout>component</PageContentLayout>
              </PageContentLayout>
            </PageContentLayout>

            {/*<PageContentLayout>PageContentComponent</PageContentLayout>*/}
          </PageContentLayout>
          {/*{mounted && (*/}
          {/*  <PageSidePanel actorId={'panelBottom'}>bottom side panel</PageSidePanel>*/}
          {/*)}*/}

        </PageContent>


        {mounted && (
          <PageSidePanel actorId={'panelRight'}>right side panel</PageSidePanel>
        )}
        {visibleItems.asideRight && (
          <PageAside position={'right'}>
            <PageAsideStart>
              <DemoPanelAsideRightStart />
            </PageAsideStart>
            <PageAsideCenter>
              <DemoPanelAsideRightCenter />
            </PageAsideCenter>
            <PageAsideEnd>
              <DemoPanelAsideRightEnd />
            </PageAsideEnd>
          </PageAside>
        )}
      </PageBody>
      {visibleItems.footer && (
        <PageFooter>
          <PageFooterStart>
            <DemoPageFooterStart />
          </PageFooterStart>
          <PageFooterCenter>
            <DemoPageFooterCenter />
          </PageFooterCenter>
          <PageFooterEnd>
            <DemoPageFooterEnd />
          </PageFooterEnd>
        </PageFooter>
      )}
    </Page>
  );
};
