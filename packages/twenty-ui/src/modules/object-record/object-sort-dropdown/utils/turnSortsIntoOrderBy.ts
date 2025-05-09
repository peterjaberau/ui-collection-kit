import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

import { RecordGqlOperationOrderBy } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationOrderBy';
import { mapArrayToObject } from '@twenty-ui/front/utils/array/mapArrayToObject';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getOrderByForFieldMetadataType } from '@twenty-modules/object-metadata/utils/getOrderByForFieldMetadataType';
import { hasObjectMetadataItemPositionField } from '@twenty-modules/object-metadata/utils/hasObjectMetadataItemPositionField';
import { RecordSort } from '@twenty-modules/object-record/record-sort/types/RecordSort';
import { OrderBy } from '@twenty-modules/types/OrderBy';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const turnSortsIntoOrderBy = (
  objectMetadataItem: ObjectMetadataItem,
  sorts: RecordSort[],
): RecordGqlOperationOrderBy => {
  const fields: Pick<FieldMetadataItem, 'id' | 'name' | 'type'>[] =
    objectMetadataItem?.fields ?? [];

  const fieldsById = mapArrayToObject(fields, ({ id }) => id);

  const sortsOrderBy = sorts
    .map((sort) => {
      const correspondingField = fieldsById[sort.fieldMetadataId];

      if (isUndefinedOrNull(correspondingField)) {
        return undefined;
      }

      const direction: OrderBy =
        sort.direction === 'asc' ? 'AscNullsFirst' : 'DescNullsLast';

      return getOrderByForFieldMetadataType(correspondingField, direction);
    })
    .filter(isDefined);

  if (
    !objectMetadataItem.isRemote &&
    hasObjectMetadataItemPositionField(objectMetadataItem)
  ) {
    const positionOrderBy = [
      {
        position: 'AscNullsFirst',
      },
    ] satisfies RecordGqlOperationOrderBy;

    return [...sortsOrderBy, ...positionOrderBy].flat();
  }

  return sortsOrderBy.flat();
};
