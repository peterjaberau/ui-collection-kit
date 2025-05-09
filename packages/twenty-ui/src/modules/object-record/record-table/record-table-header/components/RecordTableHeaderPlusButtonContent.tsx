import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useTableColumns } from '@twenty-modules/object-record/record-table/hooks/useTableColumns';
import { hiddenTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/hiddenTableColumnsComponentSelector';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { navigationMemorizedUrlState } from '@twenty-modules/ui/navigation/states/navigationMemorizedUrlState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { useLingui } from '@lingui/react/macro';
import { IconSettings, useIcons } from '@twenty-ui/display';
import { MenuItem, UndecoratedLink } from '@twenty-ui/navigation';

export const RecordTableHeaderPlusButtonContent = () => {
  const { t } = useLingui();
  const { objectMetadataItem } = useRecordTableContextOrThrow();

  const { closeDropdown } = useDropdown();

  const hiddenTableColumns = useRecoilComponentValueV2(
    hiddenTableColumnsComponentSelector,
  );

  const { getIcon } = useIcons();
  const { handleColumnVisibilityChange } = useTableColumns();

  const handleAddColumn = useCallback(
    (column: ColumnDefinition<FieldMetadata>) => {
      closeDropdown();
      handleColumnVisibilityChange(column);
    },
    [handleColumnVisibilityChange, closeDropdown],
  );

  const location = useLocation();
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );

  return (
    <>
      <DropdownMenuItemsContainer>
        {hiddenTableColumns.map((column) => (
          <MenuItem
            key={column.fieldMetadataId}
            onClick={() => handleAddColumn(column)}
            LeftIcon={getIcon(column.iconName)}
            text={column.label}
          />
        ))}
      </DropdownMenuItemsContainer>
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer scrollable={false}>
        <UndecoratedLink
          fullWidth
          to={getSettingsPath(SettingsPath.Objects, {
            objectNamePlural: objectMetadataItem.namePlural,
          })}
          onClick={() => {
            setNavigationMemorizedUrl(location.pathname + location.search);
          }}
        >
          <MenuItem LeftIcon={IconSettings} text={t`Customize fields`} />
        </UndecoratedLink>
      </DropdownMenuItemsContainer>
    </>
  );
};
