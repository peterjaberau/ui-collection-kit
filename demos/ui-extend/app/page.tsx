'use client';
import { useState, useEffect } from 'react';
import AppLayout from '#components/ui/app-layout';

import { RemoteController } from '#components/dev-tools/RemoteController';
import {
  DemoPageHeaderCenter,
  DemoPageHeaderEnd,
  DemoPageHeaderStart,
} from '#components/demos/demo.page.header';
import {
  DemoPageFooterCenter,
  DemoPageFooterEnd,
  DemoPageFooterStart,
} from '#components/demos/demo.page.footer';

import {
  DemoPageToolbarCenter,
  DemoPageToolbarEnd,
  DemoPageToolbarStart,
} from '#components/demos/demo.page.toolbar';

import {
  DemoPanelAsideLeftStart,
  DemoPanelAsideLeftCenter,
  DemoPanelAsideLeftEnd,
  DemoPanelAsideRightStart,
  DemoPanelAsideRightCenter,
  DemoPanelAsideRightEnd,
} from '#components/demos/demo.panel.aside';
import { ActionColor } from '#components/demos/components/ActionColor';
import { ActionMenu } from '#components/demos/components/ActionMenu';
import { ActionPopover } from '#components/demos/components/ActionPopover';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && <RemoteController />}

      <AppLayout
        header={{
          start: <DemoPageHeaderStart />,
          center: <DemoPageHeaderCenter />,
          end: <DemoPageHeaderEnd />,
        }}
        footer={{
          start: <DemoPageFooterStart />,
          center: <DemoPageFooterCenter />,
          end: <DemoPageFooterEnd />,
        }}
        barLeft={{
          start: <DemoPanelAsideLeftStart />,
          center: <DemoPanelAsideLeftCenter />,
          end: <DemoPanelAsideLeftEnd />,
        }}
        barRight={{
          start: <DemoPanelAsideRightStart />,
          center: <DemoPanelAsideRightCenter />,
          end: <DemoPanelAsideRightEnd />,
        }}
        toolbar={{
          start: (
            <>
              <DemoPageToolbarStart />
              <ActionColor />
              <ActionMenu />
              <ActionPopover />
            </>
          ),
          center: <DemoPageToolbarCenter />,
          end: <DemoPageToolbarEnd />,
        }}
        sideLeft='side-Left'
        sideRight='side-Right'
        sideContent='side-Content'

      />
    </>
  );
}
