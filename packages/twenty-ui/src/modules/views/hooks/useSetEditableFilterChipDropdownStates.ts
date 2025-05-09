import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { objectFilterDropdownSelectedOptionValuesComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSelectedOptionValuesComponentState';
import { objectFilterDropdownSelectedRecordIdsComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSelectedRecordIdsComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { subFieldNameUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/subFieldNameUsedInDropdownComponentState';
import { useFilterableFieldMetadataItemsInRecordIndexContext } from '@twenty-modules/object-record/record-filter/hooks/useFilterableFieldMetadataItemsInRecordIndexContext';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { jsonRelationFilterValueSchema } from '@twenty-modules/views/view-filter-value/validation-schemas/jsonRelationFilterValueSchema';
import { simpleRelationFilterValueSchema } from '@twenty-modules/views/view-filter-value/validation-schemas/simpleRelationFilterValueSchema';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSetEditableFilterChipDropdownStates = () => {
  const { filterableFieldMetadataItems } =
    useFilterableFieldMetadataItemsInRecordIndexContext();

  const setEditableFilterChipDropdownStates = useRecoilCallback(
    ({ set }) =>
      (recordFilter: RecordFilter) => {
        const fieldMetadataItem = filterableFieldMetadataItems.find(
          (fieldMetadataItem) =>
            fieldMetadataItem.id === recordFilter.fieldMetadataId,
        );

        if (!isDefined(fieldMetadataItem)) {
          return;
        }

        set(
          fieldMetadataItemIdUsedInDropdownComponentState.atomFamily({
            instanceId: recordFilter.id,
          }),
          fieldMetadataItem.id,
        );

        set(
          selectedOperandInDropdownComponentState.atomFamily({
            instanceId: recordFilter.id,
          }),
          recordFilter.operand,
        );

        set(
          objectFilterDropdownCurrentRecordFilterComponentState.atomFamily({
            instanceId: recordFilter.id,
          }),
          recordFilter,
        );

        set(
          subFieldNameUsedInDropdownComponentState.atomFamily({
            instanceId: recordFilter.id,
          }),
          recordFilter.subFieldName,
        );

        if (recordFilter.type === 'RELATION') {
          const { selectedRecordIds } = jsonRelationFilterValueSchema
            .catch({
              isCurrentWorkspaceMemberSelected: false,
              selectedRecordIds: simpleRelationFilterValueSchema.parse(
                recordFilter.value,
              ),
            })
            .parse(recordFilter.value);

          set(
            objectFilterDropdownSelectedRecordIdsComponentState.atomFamily({
              instanceId: recordFilter.id,
            }),
            selectedRecordIds,
          );
        } else if (['SELECT', 'MULTI_SELECT'].includes(recordFilter.type)) {
          try {
            const selectedOptions = JSON.parse(recordFilter.value);

            set(
              objectFilterDropdownSelectedOptionValuesComponentState.atomFamily(
                {
                  instanceId: recordFilter.id,
                },
              ),
              selectedOptions,
            );
          } catch {
            set(
              objectFilterDropdownSelectedOptionValuesComponentState.atomFamily(
                {
                  instanceId: recordFilter.id,
                },
              ),
              [],
            );
          }
        }
      },
    [filterableFieldMetadataItems],
  );

  return {
    setEditableFilterChipDropdownStates,
  };
};
