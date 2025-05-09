import { useUpsertObjectFilterDropdownCurrentFilter } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useUpsertObjectFilterDropdownCurrentFilter';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { useCreateEmptyRecordFilterFromFieldMetadataItem } from '@twenty-modules/object-record/record-filter/hooks/useCreateEmptyRecordFilterFromFieldMetadataItem';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { RecordFilterOperand } from '@twenty-modules/object-record/record-filter/types/RecordFilterOperand';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useApplyObjectFilterDropdownOperand = () => {
  const objectFilterDropdownCurrentRecordFilter = useRecoilComponentValueV2(
    objectFilterDropdownCurrentRecordFilterComponentState,
  );

  const setSelectedOperandInDropdown = useSetRecoilComponentStateV2(
    selectedOperandInDropdownComponentState,
  );

  const objectFilterDropdownFilterIsCreated = isDefined(
    objectFilterDropdownCurrentRecordFilter,
  );

  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const { upsertObjectFilterDropdownCurrentFilter } =
    useUpsertObjectFilterDropdownCurrentFilter();

  const { createEmptyRecordFilterFromFieldMetadataItem } =
    useCreateEmptyRecordFilterFromFieldMetadataItem();

  const applyObjectFilterDropdownOperand = (
    newOperand: RecordFilterOperand,
  ) => {
    const isValuelessOperand = [
      RecordFilterOperand.IsEmpty,
      RecordFilterOperand.IsNotEmpty,
      RecordFilterOperand.IsInPast,
      RecordFilterOperand.IsInFuture,
      RecordFilterOperand.IsToday,
    ].includes(newOperand);

    if (objectFilterDropdownFilterIsCreated) {
      const newCurrentRecordFilter = {
        ...objectFilterDropdownCurrentRecordFilter,
        operand: newOperand,
      } satisfies RecordFilter;

      upsertObjectFilterDropdownCurrentFilter(newCurrentRecordFilter);
    } else if (isValuelessOperand) {
      if (!isDefined(fieldMetadataItemUsedInDropdown)) {
        throw new Error(
          'FieldMetadataItemUsedInDropdown is not defined, cannot create empty record filter, this should not happen',
        );
      }

      const { newRecordFilter: emptyRecordFilter } =
        createEmptyRecordFilterFromFieldMetadataItem(
          fieldMetadataItemUsedInDropdown,
        );

      const recordFilterToCreate = {
        ...emptyRecordFilter,
        operand: newOperand,
      } satisfies RecordFilter;

      upsertObjectFilterDropdownCurrentFilter(recordFilterToCreate);
    }

    setSelectedOperandInDropdown(newOperand);
  };

  return {
    applyObjectFilterDropdownOperand,
  };
};
