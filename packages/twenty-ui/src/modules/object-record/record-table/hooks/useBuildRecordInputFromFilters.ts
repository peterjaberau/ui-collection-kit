import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { buildValueFromFilter } from '@twenty-modules/object-record/record-table/utils/buildRecordInputFromFilter';

import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useBuildRecordInputFromFilters = ({
  objectMetadataItem,
}: {
  objectMetadataItem: ObjectMetadataItem;
}) => {
  // we might need to build a recoil callback for better performance
  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);

  const buildRecordInputFromFilters = (): Partial<ObjectRecord> => {
    const recordInput: Partial<ObjectRecord> = {};

    currentRecordFilters.forEach((filter) => {
      const fieldMetadataItem = objectMetadataItem.fields.find(
        (field) => field.id === filter.fieldMetadataId,
      );

      if (!isDefined(fieldMetadataItem)) {
        return;
      }
      if (fieldMetadataItem.type === 'RELATION') {
        const value = buildValueFromFilter({
          filter,
          options: fieldMetadataItem.options ?? undefined,
          relationType: fieldMetadataItem.relationDefinition?.direction,
          currentWorkspaceMember: currentWorkspaceMember ?? undefined,
          label: filter.label,
        });
        if (!isDefined(value)) {
          return;
        }
        recordInput[`${fieldMetadataItem.name}Id`] = value;
      } else {
        recordInput[fieldMetadataItem.name] = buildValueFromFilter({
          filter,
          options: fieldMetadataItem.options ?? undefined,
        });
      }
    });

    return recordInput;
  };

  return { buildRecordInputFromFilters };
};
