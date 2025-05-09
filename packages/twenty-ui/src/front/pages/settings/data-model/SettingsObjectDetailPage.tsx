import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { ObjectFields } from '@twenty-modules/settings/data-model/object-details/components/tabs/ObjectFields';
import { ObjectIndexes } from '@twenty-modules/settings/data-model/object-details/components/tabs/ObjectIndexes';
import { ObjectSettings } from '@twenty-modules/settings/data-model/object-details/components/tabs/ObjectSettings';
import { SettingsDataModelObjectTypeTag } from '@twenty-modules/settings/data-model/objects/components/SettingsDataModelObjectTypeTag';
import { getObjectTypeLabel } from '@twenty-modules/settings/data-model/utils/getObjectTypeLabel';
import { AppPath } from '@twenty-modules/types/AppPath';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { TabList } from '@twenty-modules/ui/layout/tab/components/TabList';
import { isAdvancedModeEnabledState } from '@twenty-modules/ui/navigation/navigation-drawer/states/isAdvancedModeEnabledState';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';

import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useLingui } from '@lingui/react/macro';
import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';
import { SETTINGS_OBJECT_DETAIL_TABS } from '@twenty-ui/front/pages/settings/data-model/constants/SettingsObjectDetailTabs';
import { updatedObjectNamePluralState } from '@twenty-ui/front/pages/settings/data-model/states/updatedObjectNamePluralState';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { Button } from '@twenty-ui//input';
import {
  H3Title,
  IconCodeCircle,
  IconListDetails,
  IconPlus,
  IconPoint,
  IconSettings,
} from '@twenty-ui//display';
import { MAIN_COLORS } from '@twenty-ui//theme';
import { UndecoratedLink } from '@twenty-ui//navigation';

const StyledContentContainer = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 0;
`;

const StyledObjectTypeTag = styled(SettingsDataModelObjectTypeTag)`
  box-sizing: border-box;
  height: ${({ theme }) => theme.spacing(5)};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const StyledTitleContainer = styled.div`
  display: flex;
`;

export const SettingsObjectDetailPage = () => {
  const navigateApp = useNavigateApp();
  const { t } = useLingui();

  const { objectNamePlural = '' } = useParams();
  const { findActiveObjectMetadataItemByNamePlural } =
    useFilteredObjectMetadataItems();

  const [updatedObjectNamePlural, setUpdatedObjectNamePlural] = useRecoilState(
    updatedObjectNamePluralState,
  );
  const objectMetadataItem =
    findActiveObjectMetadataItemByNamePlural(objectNamePlural) ??
    findActiveObjectMetadataItemByNamePlural(updatedObjectNamePlural);

  const activeTabId = useRecoilComponentValueV2(
    activeTabIdComponentState,
    SETTINGS_OBJECT_DETAIL_TABS.COMPONENT_INSTANCE_ID,
  );

  const isAdvancedModeEnabled = useRecoilValue(isAdvancedModeEnabledState);
  const isUniqueIndexesEnabled = useIsFeatureEnabled(
    FeatureFlagKey.IsUniqueIndexesEnabled,
  );

  useEffect(() => {
    if (objectNamePlural === updatedObjectNamePlural)
      setUpdatedObjectNamePlural('');
    if (!isDefined(objectMetadataItem)) navigateApp(AppPath.NotFound);
  }, [
    objectMetadataItem,
    navigateApp,
    objectNamePlural,
    updatedObjectNamePlural,
    setUpdatedObjectNamePlural,
  ]);

  if (!isDefined(objectMetadataItem)) return <></>;

  const tabs = [
    {
      id: SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.FIELDS,
      title: t`Fields`,
      Icon: IconListDetails,
      hide: false,
    },
    {
      id: SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.SETTINGS,
      title: t`Settings`,
      Icon: IconSettings,
      hide: false,
    },
    {
      id: SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.INDEXES,
      title: t`Indexes`,
      Icon: IconCodeCircle,
      hide: !isAdvancedModeEnabled || !isUniqueIndexesEnabled,
      pill: (
        <IconPoint
          size={12}
          color={MAIN_COLORS.yellow}
          fill={MAIN_COLORS.yellow}
        />
      ),
    },
  ];

  const renderActiveTabContent = () => {
    switch (activeTabId) {
      case SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.FIELDS:
        return <ObjectFields objectMetadataItem={objectMetadataItem} />;
      case SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.SETTINGS:
        return <ObjectSettings objectMetadataItem={objectMetadataItem} />;
      case SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.INDEXES:
        return <ObjectIndexes objectMetadataItem={objectMetadataItem} />;
      default:
        return <></>;
    }
  };

  const objectTypeLabel = getObjectTypeLabel(objectMetadataItem);

  return (
    <>
      <SubMenuTopBarContainer
        title={
          <StyledTitleContainer>
            <H3Title title={objectMetadataItem.labelPlural} />
            <StyledObjectTypeTag objectTypeLabel={objectTypeLabel} />
          </StyledTitleContainer>
        }
        links={[
          {
            children: t`Workspace`,
            href: getSettingsPath(SettingsPath.Workspace),
          },
          { children: t`Objects`, href: getSettingsPath(SettingsPath.Objects) },
          {
            children: objectMetadataItem.labelPlural,
          },
        ]}
        actionButton={
          activeTabId === SETTINGS_OBJECT_DETAIL_TABS.TABS_IDS.FIELDS && (
            <UndecoratedLink to={'./new-field/select'}>
              <Button
                title={t`New Field`}
                variant="primary"
                size="small"
                accent="blue"
                Icon={IconPlus}
              />
            </UndecoratedLink>
          )
        }
      >
        <SettingsPageContainer>
          <TabList
            tabs={tabs}
            componentInstanceId={
              SETTINGS_OBJECT_DETAIL_TABS.COMPONENT_INSTANCE_ID
            }
          />
          <StyledContentContainer>
            {renderActiveTabContent()}
          </StyledContentContainer>
        </SettingsPageContainer>
      </SubMenuTopBarContainer>
    </>
  );
};
