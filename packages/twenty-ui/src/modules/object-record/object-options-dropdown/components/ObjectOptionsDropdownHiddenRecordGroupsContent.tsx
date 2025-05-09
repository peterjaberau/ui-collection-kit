import { useEffect } from 'react';

import { useObjectNamePluralFromSingular } from '@twenty-modules/object-metadata/hooks/useObjectNamePluralFromSingular';

import { useOptionsDropdown } from '@twenty-modules/object-record/object-options-dropdown/hooks/useOptionsDropdown';
import { RecordGroupsVisibilityDropdownSection } from '@twenty-modules/object-record/record-group/components/RecordGroupsVisibilityDropdownSection';
import { useRecordGroupVisibility } from '@twenty-modules/object-record/record-group/hooks/useRecordGroupVisibility';
import { recordGroupFieldMetadataComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupFieldMetadataComponentState';
import { hiddenRecordGroupIdsComponentSelector } from '@twenty-modules/object-record/record-group/states/selectors/hiddenRecordGroupIdsComponentSelector';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { navigationMemorizedUrlState } from '@twenty-modules/ui/navigation/states/navigationMemorizedUrlState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useLingui } from '@lingui/react/macro';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { IconChevronLeft, IconSettings } from '@twenty-ui/display';
import { MenuItem, UndecoratedLink } from '@twenty-ui/navigation';

export const ObjectOptionsDropdownHiddenRecordGroupsContent = () => {
  const { t } = useLingui();
  const {
    viewType,
    currentContentId,
    objectMetadataItem,
    onContentChange,
    closeDropdown,
  } = useOptionsDropdown();

  const recordGroupFieldMetadata = useRecoilComponentValueV2(
    recordGroupFieldMetadataComponentState,
  );

  const hiddenRecordGroupIds = useRecoilComponentValueV2(
    hiddenRecordGroupIdsComponentSelector,
  );

  const { objectNamePlural } = useObjectNamePluralFromSingular({
    objectNameSingular: objectMetadataItem.nameSingular,
  });

  const { handleVisibilityChange: handleRecordGroupVisibilityChange } =
    useRecordGroupVisibility({
      viewType,
    });

  const viewGroupSettingsUrl = getSettingsPath(SettingsPath.ObjectFieldEdit, {
    objectNamePlural,
    fieldName: recordGroupFieldMetadata?.name ?? '',
  });

  const location = useLocation();
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );

  useEffect(() => {
    if (
      currentContentId === 'hiddenRecordGroups' &&
      hiddenRecordGroupIds.length === 0
    ) {
      onContentChange('recordGroups');
    }
  }, [hiddenRecordGroupIds, currentContentId, onContentChange]);

  return (
    <>
      <DropdownMenuItemsContainer>
        <DropdownMenuHeader
          StartComponent={
            <DropdownMenuHeaderLeftComponent
              onClick={() => onContentChange('recordGroups')}
              Icon={IconChevronLeft}
            />
          }
        >
          Hidden {recordGroupFieldMetadata?.label}
        </DropdownMenuHeader>
      </DropdownMenuItemsContainer>

      <RecordGroupsVisibilityDropdownSection
        title={`Hidden ${recordGroupFieldMetadata?.label}`}
        recordGroupIds={hiddenRecordGroupIds}
        onVisibilityChange={handleRecordGroupVisibilityChange}
        isDraggable={false}
        showSubheader={false}
        showDragGrip={false}
      />
      <DropdownMenuSeparator />
      <UndecoratedLink
        to={viewGroupSettingsUrl}
        onClick={() => {
          setNavigationMemorizedUrl(location.pathname + location.search);
          closeDropdown();
        }}
      >
        <DropdownMenuItemsContainer>
          <MenuItem LeftIcon={IconSettings} text={t`Edit field values`} />
        </DropdownMenuItemsContainer>
      </UndecoratedLink>
    </>
  );
};
