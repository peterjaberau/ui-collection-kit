import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';

import { getOrderByFieldForObjectMetadataItem } from '@twenty-modules/object-metadata/utils/getObjectOrderByField';
import { RecordGqlOperationOrderBy } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationOrderBy';
import { OrderBy } from '@twenty-modules/types/OrderBy';

export const useGetObjectOrderByField = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const getObjectOrderByField = (
    orderBy: OrderBy,
  ): RecordGqlOperationOrderBy => {
    return getOrderByFieldForObjectMetadataItem(objectMetadataItem, orderBy);
  };

  return { getObjectOrderByField };
};
