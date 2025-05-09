import { useObjectOptionsForBoard } from '@twenty-modules/object-record/object-options-dropdown/hooks/useObjectOptionsForBoard';
import { useObjectOptionsForTable } from '@twenty-modules/object-record/object-options-dropdown/hooks/useObjectOptionsForTable';
import { useOptionsDropdown } from '@twenty-modules/object-record/object-options-dropdown/hooks/useOptionsDropdown';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { ViewFieldsVisibilityDropdownSection } from '@twenty-modules/views/components/ViewFieldsVisibilityDropdownSection';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { useLingui } from '@lingui/react/macro';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { IconChevronLeft, IconEyeOff } from '@twenty-ui/display';
import { MenuItemNavigate } from '@twenty-ui/navigation';

export const ObjectOptionsDropdownFieldsContent = () => {
  const { t } = useLingui();
  const {
    viewType,
    recordIndexId,
    objectMetadataItem,
    onContentChange,
    resetContent,
  } = useOptionsDropdown();

  const {
    handleColumnVisibilityChange,
    handleReorderColumns,
    visibleTableColumns,
  } = useObjectOptionsForTable(recordIndexId);

  const {
    visibleBoardFields,
    handleReorderBoardFields,
    handleBoardFieldVisibilityChange,
  } = useObjectOptionsForBoard({
    objectNameSingular: objectMetadataItem.nameSingular,
    recordBoardId: recordIndexId,
    viewBarId: recordIndexId,
  });

  const visibleRecordFields =
    viewType === ViewType.Kanban ? visibleBoardFields : visibleTableColumns;

  const handleReorderFields =
    viewType === ViewType.Kanban
      ? handleReorderBoardFields
      : handleReorderColumns;

  const handleChangeFieldVisibility =
    viewType === ViewType.Kanban
      ? handleBoardFieldVisibilityChange
      : handleColumnVisibilityChange;

  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={resetContent}
            Icon={IconChevronLeft}
          />
        }
      >
        {t`Fields`}
      </DropdownMenuHeader>
      <ViewFieldsVisibilityDropdownSection
        title={t`Visible`}
        fields={visibleRecordFields}
        isDraggable
        onDragEnd={handleReorderFields}
        onVisibilityChange={handleChangeFieldVisibility}
        showSubheader={false}
        showDragGrip={true}
      />
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer scrollable={false}>
        <MenuItemNavigate
          onClick={() => onContentChange('hiddenFields')}
          LeftIcon={IconEyeOff}
          text={t`Hidden Fields`}
        />
      </DropdownMenuItemsContainer>
    </>
  );
};
