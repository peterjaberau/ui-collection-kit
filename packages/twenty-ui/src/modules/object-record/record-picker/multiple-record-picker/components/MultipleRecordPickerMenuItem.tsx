import styled from '@emotion/styled';

import { useRecordPickerGetSearchRecordAndObjectMetadataItemFromRecordId } from '@twenty-modules/object-record/record-picker/hooks/useRecordPickerGetSearchRecordAndObjectMetadataItemFromRecordId';
import { MultipleRecordPickerMenuItemContent } from '@twenty-modules/object-record/record-picker/multiple-record-picker/components/MultipleRecordPickerMenuItemContent';
import { RecordPickerPickableMorphItem } from '@twenty-modules/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const StyledSelectableItem = styled(SelectableListItem)`
  height: 100%;
  width: 100%;
`;

type MultipleRecordPickerMenuItemProps = {
  recordId: string;
  onChange: (morphItem: RecordPickerPickableMorphItem) => void;
};

export const MultipleRecordPickerMenuItem = ({
  recordId,
  onChange,
}: MultipleRecordPickerMenuItemProps) => {
  const { searchRecord, objectMetadataItem } =
    useRecordPickerGetSearchRecordAndObjectMetadataItemFromRecordId({
      recordId,
    });

  if (!isDefined(searchRecord) || !isDefined(objectMetadataItem)) {
    return null;
  }

  return (
    <MultipleRecordPickerMenuItemContent
      searchRecord={searchRecord}
      objectMetadataItem={objectMetadataItem}
      onChange={onChange}
    />
  );
};
