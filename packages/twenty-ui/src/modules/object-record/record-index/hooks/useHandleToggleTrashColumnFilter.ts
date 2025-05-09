import { useCallback } from 'react';
import { v4 } from 'uuid';

import { useColumnDefinitionsFromFieldMetadata } from '@twenty-modules/object-metadata/hooks/useColumnDefinitionsFromFieldMetadata';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { useUpsertRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useUpsertRecordFilter';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { isSoftDeleteFilterActiveComponentState } from '@twenty-modules/object-record/record-table/states/isSoftDeleteFilterActiveComponentState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';

import { ViewFilterOperand } from '@twenty-modules/views/types/ViewFilterOperand';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type UseHandleToggleTrashColumnFilterProps = {
  objectNameSingular: string;
  viewBarId: string;
};

export const useHandleToggleTrashColumnFilter = ({
  viewBarId,
  objectNameSingular,
}: UseHandleToggleTrashColumnFilterProps) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { columnDefinitions } =
    useColumnDefinitionsFromFieldMetadata(objectMetadataItem);

  const isSoftDeleteFilterActiveComponentRecoilState =
    useRecoilComponentCallbackStateV2(
      isSoftDeleteFilterActiveComponentState,
      viewBarId,
    );

  const { upsertRecordFilter } = useUpsertRecordFilter();

  const handleToggleTrashColumnFilter = useCallback(() => {
    const trashFieldMetadata = objectMetadataItem.fields.find(
      (field: { name: string }) => field.name === 'deletedAt',
    );

    if (!isDefined(trashFieldMetadata)) return;

    const correspondingColumnDefinition = columnDefinitions.find(
      (columnDefinition) =>
        columnDefinition.fieldMetadataId === trashFieldMetadata.id,
    );

    if (!isDefined(correspondingColumnDefinition)) return;

    const filterType = getFilterTypeFromFieldType(
      correspondingColumnDefinition?.type,
    );

    const newFilter: RecordFilter = {
      id: v4(),
      fieldMetadataId: trashFieldMetadata.id,
      operand: ViewFilterOperand.IsNotEmpty,
      displayValue: '',
      type: filterType,
      label: `Deleted`,
      value: '',
    };

    upsertRecordFilter(newFilter);
  }, [columnDefinitions, objectMetadataItem, upsertRecordFilter]);

  const toggleSoftDeleteFilterState = useRecoilCallback(
    ({ set }) =>
      (currentState: boolean) => {
        set(isSoftDeleteFilterActiveComponentRecoilState, currentState);
      },
    [isSoftDeleteFilterActiveComponentRecoilState],
  );
  return {
    handleToggleTrashColumnFilter,
    toggleSoftDeleteFilterState,
  };
};
