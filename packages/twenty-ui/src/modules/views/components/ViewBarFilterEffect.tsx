import { isNonEmptyString } from '@sniptt/guards';
import { useEffect } from 'react';

import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';

import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { objectFilterDropdownSelectedOptionValuesComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSelectedOptionValuesComponentState';
import { objectFilterDropdownSelectedRecordIdsComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSelectedRecordIdsComponentState';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { jsonRelationFilterValueSchema } from '@twenty-modules/views/view-filter-value/validation-schemas/jsonRelationFilterValueSchema';
import { simpleRelationFilterValueSchema } from '@twenty-modules/views/view-filter-value/validation-schemas/simpleRelationFilterValueSchema';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type ViewBarFilterEffectProps = {
  filterDropdownId: string;
};

export const ViewBarFilterEffect = ({
  filterDropdownId,
}: ViewBarFilterEffectProps) => {
  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
    filterDropdownId,
  );

  const setObjectFilterDropdownSelectedRecordIds = useSetRecoilComponentStateV2(
    objectFilterDropdownSelectedRecordIdsComponentState,
    filterDropdownId,
  );

  const setObjectFilterDropdownSelectedOptionValues =
    useSetRecoilComponentStateV2(
      objectFilterDropdownSelectedOptionValuesComponentState,
      filterDropdownId,
    );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  useEffect(() => {
    if (fieldMetadataItemUsedInDropdown?.type === 'RELATION') {
      const recordFilterUsedInDropdown = currentRecordFilters.find(
        (filter) =>
          filter.fieldMetadataId === fieldMetadataItemUsedInDropdown?.id,
      );

      const { selectedRecordIds } = jsonRelationFilterValueSchema
        .catch({
          isCurrentWorkspaceMemberSelected: false,
          selectedRecordIds: simpleRelationFilterValueSchema.parse(
            recordFilterUsedInDropdown?.value,
          ),
        })
        .parse(recordFilterUsedInDropdown?.value);

      setObjectFilterDropdownSelectedRecordIds(selectedRecordIds);
    } else if (
      isDefined(fieldMetadataItemUsedInDropdown) &&
      ['SELECT', 'MULTI_SELECT'].includes(fieldMetadataItemUsedInDropdown.type)
    ) {
      const recordFilterUsedInDropdown = currentRecordFilters.find(
        (filter) =>
          filter.fieldMetadataId === fieldMetadataItemUsedInDropdown?.id,
      );

      const recordFilterSelectedRecords = isNonEmptyString(
        recordFilterUsedInDropdown?.value,
      )
        ? JSON.parse(recordFilterUsedInDropdown.value)
        : [];
      setObjectFilterDropdownSelectedOptionValues(recordFilterSelectedRecords);
    }
  }, [
    fieldMetadataItemUsedInDropdown,
    setObjectFilterDropdownSelectedRecordIds,
    setObjectFilterDropdownSelectedOptionValues,
    currentRecordFilters,
  ]);

  return <></>;
};
