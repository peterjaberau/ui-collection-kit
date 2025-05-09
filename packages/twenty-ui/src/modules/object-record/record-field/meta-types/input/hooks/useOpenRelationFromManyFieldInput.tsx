import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import {
  FieldRelationFromManyValue,
  FieldRelationValue,
} from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useMultipleRecordPickerPerformSearch } from '@twenty-modules/object-record/record-picker/multiple-record-picker/hooks/useMultipleRecordPickerPerformSearch';
import { multipleRecordPickerPickableMorphItemsComponentState } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/multipleRecordPickerPickableMorphItemsComponentState';
import { multipleRecordPickerSearchableObjectMetadataItemsComponentState } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/multipleRecordPickerSearchableObjectMetadataItemsComponentState';
import { MultipleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/multiple-record-picker/types/MultipleRecordPickerHotkeyScope';
import { RecordPickerPickableMorphItem } from '@twenty-modules/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useRecoilCallback } from 'recoil';

export const useOpenRelationFromManyFieldInput = () => {
  const { performSearch } = useMultipleRecordPickerPerformSearch();

  const { setHotkeyScopeAndMemorizePreviousScope } = usePreviousHotkeyScope();

  const openRelationFromManyFieldInput = useRecoilCallback(
    ({ set, snapshot }) =>
      ({
        fieldName,
        objectNameSingular,
        recordId,
      }: {
        fieldName: string;
        objectNameSingular: string;
        recordId: string;
      }) => {
        const recordPickerInstanceId = `relation-from-many-field-input-${recordId}`;

        const fieldValue = snapshot
          .getLoadable<FieldRelationValue<FieldRelationFromManyValue>>(
            recordStoreFamilySelector({
              recordId,
              fieldName,
            }),
          )
          .getValue();

        const objectMetadataItems = snapshot
          .getLoadable(objectMetadataItemsState)
          .getValue();

        const objectMetadataItem = objectMetadataItems.find(
          (objectMetadataItem) =>
            objectMetadataItem.nameSingular === objectNameSingular,
        );

        if (!objectMetadataItem) {
          return;
        }

        const pickableMorphItems: RecordPickerPickableMorphItem[] =
          fieldValue.map((record) => {
            return {
              objectMetadataId: objectMetadataItem.id,
              recordId: record.id,
              isSelected: true,
              isMatchingSearchFilter: true,
            };
          });

        for (const record of fieldValue) {
          set(recordStoreFamilyState(record.id), record);
        }

        set(
          multipleRecordPickerPickableMorphItemsComponentState.atomFamily({
            instanceId: recordPickerInstanceId,
          }),
          pickableMorphItems,
        );

        set(
          multipleRecordPickerSearchableObjectMetadataItemsComponentState.atomFamily(
            { instanceId: recordPickerInstanceId },
          ),
          [objectMetadataItem],
        );

        performSearch({
          multipleRecordPickerInstanceId: recordPickerInstanceId,
          forceSearchFilter: '',
          forceSearchableObjectMetadataItems: [objectMetadataItem],
          forcePickableMorphItems: pickableMorphItems,
        });

        setHotkeyScopeAndMemorizePreviousScope(
          MultipleRecordPickerHotkeyScope.MultipleRecordPicker,
        );
      },
    [performSearch, setHotkeyScopeAndMemorizePreviousScope],
  );

  return { openRelationFromManyFieldInput };
};
