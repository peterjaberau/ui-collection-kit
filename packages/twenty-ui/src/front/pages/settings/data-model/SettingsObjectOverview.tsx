import { ReactFlowProvider } from '@xyflow/react';

import { SettingsDataModelOverview } from '@twenty-modules/settings/data-model/graph-overview/components/SettingsDataModelOverview';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsObjectOverview = () => {
  return (
    <SubMenuTopBarContainer
      links={[
        {
          children: 'Workspace',
          href: getSettingsPath(SettingsPath.Workspace),
        },
        { children: 'Objects', href: '/settings/objects' },
        {
          children: 'Overview',
        },
      ]}
    >
      <ReactFlowProvider>
        <SettingsDataModelOverview />
      </ReactFlowProvider>
    </SubMenuTopBarContainer>
  );
};
