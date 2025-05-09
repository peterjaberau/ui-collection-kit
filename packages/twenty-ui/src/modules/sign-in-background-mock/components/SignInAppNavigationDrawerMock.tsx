import { SupportDropdown } from '@twenty-modules/support/components/SupportDropdown';
import { NavigationDrawer } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawer';
import { NavigationDrawerFixedContent } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerFixedContent';

import { NavigationDrawerSectionForObjectMetadataItems } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItems';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { NavigationDrawerItem } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerItem';
import { NavigationDrawerSection } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerSection';
import { DEFAULT_WORKSPACE_NAME } from '@twenty-modules/ui/navigation/navigation-drawer/constants/DefaultWorkspaceName';
import styled from '@emotion/styled';
import { useLingui } from '@lingui/react/macro';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { IconSearch, IconSettings } from '@twenty-ui/display';
import { getOsControlSymbol, useIsMobile } from '@twenty-ui/utilities';

const StyledMainSection = styled(NavigationDrawerSection)`
  min-height: fit-content;
`;

const WORKSPACE_FAVORITES = [
  'person',
  'company',
  'opportunity',
  'task',
  'note',
];

export type SignInAppNavigationDrawerMockProps = {
  className?: string;
};

export const SignInAppNavigationDrawerMock = ({
  className,
}: SignInAppNavigationDrawerMockProps) => {
  const isMobile = useIsMobile();
  const { t } = useLingui();

  return (
    <NavigationDrawer className={className} title={DEFAULT_WORKSPACE_NAME}>
      {!isMobile && (
        <StyledMainSection>
          <NavigationDrawerItem
            label={t`Search`}
            Icon={IconSearch}
            onClick={() => {}}
            keyboard={[getOsControlSymbol(), 'K']}
          />
          <NavigationDrawerItem
            label={t`Settings`}
            to={getSettingsPath(SettingsPath.ProfilePage)}
            onClick={() => {}}
            Icon={IconSettings}
          />
        </StyledMainSection>
      )}
      <NavigationDrawerSectionForObjectMetadataItems
        sectionTitle={t`Workspace`}
        isRemote={false}
        objectMetadataItems={generatedMockObjectMetadataItems.filter((item) =>
          WORKSPACE_FAVORITES.includes(item.nameSingular),
        )}
      />
      <NavigationDrawerFixedContent>
        <SupportDropdown />
      </NavigationDrawerFixedContent>
    </NavigationDrawer>
  );
};
