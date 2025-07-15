'use client';
import { Page } from './page';
import { PageHeader } from './page.header';
import { PageFooter } from './page.footer';
import { PageBody, PageBodyInner } from './page.body';
import { PageSideBar } from './page.sidebar';
import { PageContent } from './page.content';
import { PageContentLayout } from './page.content.layout';
import { PageToolbar } from './page.toolbar';
import { useEffect, useState } from 'react';
import { PageSidePanel } from './page.sidepanel';
import { PageSideResizable } from './page.sideresizable';

const Index = ({
  children,
  header,
  footer,
  barLeft,
  barRight,
  sideLeft,
  sideRight,
  sideBottom,
  sideContent,
  toolbar,
}: {
  children?: any;
  header?: any;
  footer?: any;
  barLeft?: any;
  barRight?: any;
  sideLeft?: any;
  sideRight?: any;
  sideBottom?: any;
  sideContent?: any;
  toolbar?: any;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Page
      header={
        header && (
          <PageHeader
            start={header?.start || null}
            center={header?.center || null}
            end={header?.end || null}
          />
        )
      }
      footer={
        footer && (
          <PageFooter
            start={footer?.start || null}
            center={footer?.center || null}
            end={footer?.end || null}
          />
        )
      }
    >
      <PageBody>
        {barLeft && (
          <PageSideBar
            position={'left'}
            start={barLeft?.start || null}
            center={barLeft?.center || null}
            end={barLeft?.end || null}
          />
        )}

        <PageBodyInner
          sideBottom={
            sideBottom && (
              <PageSidePanel actorId={'panelBottom'}>
                bottom side panel
              </PageSidePanel>
            )
          }
        >
          {sideLeft && mounted && (
            <PageSideResizable actorId={'panelLeft'}>{sideLeft}</PageSideResizable>
            // <PageSidePanel actorId={'panelLeft'}>{sideLeft}</PageSidePanel>
          )}

          <PageContent
            toolbar={
              toolbar && (
                <PageToolbar
                  start={toolbar?.start || null}
                  center={toolbar?.center || null}
                  end={toolbar?.end || null}
                />
              )
            }
            sideContent={
              sideContent && (
                <PageSidePanel actorId={'panelContentBottom'}>
                  {sideContent}
                </PageSidePanel>
              )
            }
          >
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
          </PageContent>

          {sideRight && mounted && (
            <PageSidePanel actorId={'panelRight'}>{sideRight}</PageSidePanel>
          )}
        </PageBodyInner>

        {barRight && (
          <PageSideBar
            position={'right'}
            start={barRight?.start || null}
            center={barRight?.center || null}
            end={barRight?.end || null}
          />
        )}
      </PageBody>
    </Page>
  );
};

export default Index;
