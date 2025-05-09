import { useEffect } from 'react';

import { useViewFromQueryParams } from '@twenty-modules/views/hooks/internal/useViewFromQueryParams';
import { useApplyViewFiltersToCurrentRecordFilters } from '@twenty-modules/views/hooks/useApplyViewFiltersToCurrentRecordFilters';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';

export const QueryParamsFiltersEffect = () => {
  const {
    hasFiltersQueryParams,
    getFiltersFromQueryParams,
    objectMetadataItem,
  } = useViewFromQueryParams();

  const { currentView } = useGetCurrentViewOnly();

  const { applyViewFiltersToCurrentRecordFilters } =
    useApplyViewFiltersToCurrentRecordFilters();

  const currentViewObjectMetadataItemIsDifferentFromURLObjectMetadataItem =
    currentView?.objectMetadataId !== objectMetadataItem.id;

  useEffect(() => {
    if (
      !hasFiltersQueryParams ||
      currentViewObjectMetadataItemIsDifferentFromURLObjectMetadataItem
    ) {
      return;
    }

    getFiltersFromQueryParams().then((filtersFromParams) => {
      if (Array.isArray(filtersFromParams)) {
        applyViewFiltersToCurrentRecordFilters(filtersFromParams);
      }
    });
  }, [
    currentViewObjectMetadataItemIsDifferentFromURLObjectMetadataItem,
    applyViewFiltersToCurrentRecordFilters,
    getFiltersFromQueryParams,
    hasFiltersQueryParams,
  ]);

  return <></>;
};
