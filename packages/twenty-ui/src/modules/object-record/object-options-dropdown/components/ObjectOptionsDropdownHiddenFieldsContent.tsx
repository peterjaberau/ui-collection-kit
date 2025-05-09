import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useObjectNamePluralFromSingular } from '@twenty-modules/object-metadata/hooks/useObjectNamePluralFromSingular';

import { useObjectOptionsForBoard } from '@twenty-modules/object-record/object-options-dropdown/hooks/useObjectOptionsForBoard';
import { useObjectOptionsForTable } from '@twenty-modules/object-record/object-options-dropdown/hooks/useObjectOptionsForTable';
import { useOptionsDropdown } from '@twenty-modules/object-record/object-options-dropdown/hooks/useOptionsDropdown';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { navigationMemorizedUrlState } from '@twenty-modules/ui/navigation/states/navigationMemorizedUrlState';
import { ViewFieldsVisibilityDropdownSection } from '@twenty-modules/views/components/ViewFieldsVisibilityDropdownSection';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { useLingui } from '@lingui/react/macro';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { IconChevronLeft, IconSettings } from '@twenty-ui/display';
import { MenuItem, UndecoratedLink } from '@twenty-ui/navigation';

export const ObjectOptionsDropdownHiddenFieldsContent = () => {
  const { t } = useLingui();
  const {
    viewType,
    recordIndexId,
    objectMetadataItem,
    onContentChange,
    closeDropdown,
  } = useOptionsDropdown();

  const { objectNamePlural } = useObjectNamePluralFromSingular({
    objectNameSingular: objectMetadataItem.nameSingular,
  });

  const settingsUrl = getSettingsPath(SettingsPath.ObjectDetail, {
    objectNamePlural,
  });

  const { handleColumnVisibilityChange, hiddenTableColumns } =
    useObjectOptionsForTable(recordIndexId);

  const { hiddenBoardFields, handleBoardFieldVisibilityChange } =
    useObjectOptionsForBoard({
      objectNameSingular: objectMetadataItem.nameSingular,
      recordBoardId: recordIndexId,
      viewBarId: recordIndexId,
    });

  const hiddenRecordFields =
    viewType === ViewType.Kanban ? hiddenBoardFields : hiddenTableColumns;

  const handleChangeFieldVisibility =
    viewType === ViewType.Kanban
      ? handleBoardFieldVisibilityChange
      : handleColumnVisibilityChange;

  const location = useLocation();
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );

  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={() => onContentChange('fields')}
            Icon={IconChevronLeft}
          />
        }
      >
        {t`Hidden Fields`}
      </DropdownMenuHeader>
      {hiddenRecordFields.length > 0 && (
        <ViewFieldsVisibilityDropdownSection
          title={t`Hidden`}
          fields={hiddenRecordFields}
          isDraggable={false}
          onVisibilityChange={handleChangeFieldVisibility}
          showSubheader={false}
          showDragGrip={false}
        />
      )}
      <DropdownMenuSeparator />
      <UndecoratedLink
        to={settingsUrl}
        onClick={() => {
          setNavigationMemorizedUrl(location.pathname + location.search);
          closeDropdown();
        }}
      >
        <DropdownMenuItemsContainer scrollable={false}>
          <MenuItem LeftIcon={IconSettings} text={t`Edit Fields`} />
        </DropdownMenuItemsContainer>
      </UndecoratedLink>
    </>
  );
};
