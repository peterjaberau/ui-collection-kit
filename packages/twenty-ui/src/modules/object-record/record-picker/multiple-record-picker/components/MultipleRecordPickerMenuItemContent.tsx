import styled from '@emotion/styled';

import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getAvatarType } from '@twenty-modules/object-metadata/utils/getAvatarType';
import { MultipleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/contexts/MultipleRecordPickerComponentInstanceContext';
import { multipleRecordPickerIsSelectedComponentFamilySelector } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/selectors/multipleRecordPickerIsSelectedComponentFamilySelector';
import { getMultipleRecordPickerSelectableListId } from '@twenty-modules/object-record/record-picker/multiple-record-picker/utils/getMultipleRecordPickerSelectableListId';
import { RecordPickerPickableMorphItem } from '@twenty-modules/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { isSelectedItemIdComponentFamilySelector } from '@twenty-modules/ui/layout/selectable-list/states/selectors/isSelectedItemIdComponentFamilySelector';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentFamilyValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyValueV2';
import { Avatar } from '@twenty-ui/display';
import { MenuItemMultiSelectAvatar } from '@twenty-ui/navigation';
import { SearchRecord } from '@twenty-ui/front/generated-metadata/graphql';

export const StyledSelectableItem = styled(SelectableListItem)`
  height: 100%;
  width: 100%;
`;

type MultipleRecordPickerMenuItemContentProps = {
  searchRecord: SearchRecord;
  objectMetadataItem: ObjectMetadataItem;
  onChange: (morphItem: RecordPickerPickableMorphItem) => void;
};

export const MultipleRecordPickerMenuItemContent = ({
  searchRecord,
  objectMetadataItem,
  onChange,
}: MultipleRecordPickerMenuItemContentProps) => {
  const componentInstanceId = useAvailableComponentInstanceIdOrThrow(
    MultipleRecordPickerComponentInstanceContext,
  );

  const selectableListComponentInstanceId =
    getMultipleRecordPickerSelectableListId(componentInstanceId);

  const isSelectedByKeyboard = useRecoilComponentFamilyValueV2(
    isSelectedItemIdComponentFamilySelector,
    searchRecord.recordId,
    selectableListComponentInstanceId,
  );

  const isRecordSelectedWithObjectItem = useRecoilComponentFamilyValueV2(
    multipleRecordPickerIsSelectedComponentFamilySelector,
    searchRecord.recordId,
    componentInstanceId,
  );

  const handleSelectChange = (isSelected: boolean) => {
    onChange({
      recordId: searchRecord.recordId,
      objectMetadataId: objectMetadataItem.id,
      isSelected,
      isMatchingSearchFilter: true,
    });
  };

  return (
    <StyledSelectableItem
      itemId={searchRecord.recordId}
      key={searchRecord.recordId}
      onEnter={() => handleSelectChange(!isRecordSelectedWithObjectItem)}
    >
      <MenuItemMultiSelectAvatar
        onSelectChange={(isSelected) => handleSelectChange(isSelected)}
        isKeySelected={isSelectedByKeyboard}
        selected={isRecordSelectedWithObjectItem}
        avatar={
          <Avatar
            avatarUrl={searchRecord.imageUrl}
            placeholderColorSeed={searchRecord.recordId}
            placeholder={searchRecord.label}
            size="md"
            type={getAvatarType(objectMetadataItem.nameSingular) ?? 'rounded'}
          />
        }
        text={searchRecord.label}
      />
    </StyledSelectableItem>
  );
};
