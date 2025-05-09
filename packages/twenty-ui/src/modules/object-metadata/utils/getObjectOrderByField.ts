import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

import { getLabelIdentifierFieldMetadataItem } from '@twenty-modules/object-metadata/utils/getLabelIdentifierFieldMetadataItem';
import { getOrderByForFieldMetadataType } from '@twenty-modules/object-metadata/utils/getOrderByForFieldMetadataType';
import { RecordGqlOperationOrderBy } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationOrderBy';
import { OrderBy } from '@twenty-modules/types/OrderBy';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getOrderByFieldForObjectMetadataItem = (
  objectMetadataItem: ObjectMetadataItem,
  orderBy?: OrderBy | null,
): RecordGqlOperationOrderBy => {
  const labelIdentifierFieldMetadata =
    getLabelIdentifierFieldMetadataItem(objectMetadataItem);

  if (isDefined(labelIdentifierFieldMetadata)) {
    return getOrderByForFieldMetadataType(
      labelIdentifierFieldMetadata,
      orderBy,
    );
  } else {
    return [
      {
        createdAt: orderBy ?? 'DescNullsLast',
      },
    ];
  }
};
