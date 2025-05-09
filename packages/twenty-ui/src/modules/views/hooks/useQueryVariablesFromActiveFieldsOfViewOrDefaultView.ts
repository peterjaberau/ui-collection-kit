import { useActiveFieldMetadataItems } from '@twenty-modules/object-metadata/hooks/useActiveFieldMetadataItems';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { useViewOrDefaultViewFromPrefetchedViews } from '@twenty-modules/views/hooks/useViewOrDefaultViewFromPrefetchedViews';
import { getQueryVariablesFromView } from '@twenty-modules/views/utils/getQueryVariablesFromView';

export const useQueryVariablesFromActiveFieldsOfViewOrDefaultView = ({
  objectMetadataItem,
}: {
  objectMetadataItem: ObjectMetadataItem;
}) => {
  const { view } = useViewOrDefaultViewFromPrefetchedViews({
    objectMetadataItemId: objectMetadataItem.id,
  });

  const { activeFieldMetadataItems } = useActiveFieldMetadataItems({
    objectMetadataItem,
  });

  const { filterValueDependencies } = useFilterValueDependencies();

  const { filter, orderBy } = getQueryVariablesFromView({
    fieldMetadataItems: activeFieldMetadataItems,
    objectMetadataItem,
    view,
    filterValueDependencies,
  });

  return {
    filter,
    orderBy,
  };
};
