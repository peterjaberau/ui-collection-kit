import pick from 'lodash.pick';

import { getRecordsFromRecordConnection } from '@twenty-modules/object-record/cache/utils/getRecordsFromRecordConnection';
import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getRecordFromRecordNode = <T extends ObjectRecord>({
  recordNode,
}: {
  recordNode: RecordGqlNode;
}): T => {
  return {
    ...Object.fromEntries(
      Object.entries(recordNode).map(([fieldName, value]) => {
        if (
          isUndefinedOrNull(value) ||
          Array.isArray(value) ||
          typeof value !== 'object'
        ) {
          return [fieldName, value];
        }

        return isDefined(value.edges)
          ? [
              fieldName,
              getRecordsFromRecordConnection({ recordConnection: value }),
            ]
          : [fieldName, getRecordFromRecordNode<T>({ recordNode: value })];
      }),
    ),
    // Only adds `id` and `__typename` if they exist.
    // RawJson field value passes through this method and does not have `id` or `__typename`.
    // This prevents adding an undefined `id` and `__typename` to the RawJson field value,
    // which is invalid JSON.
    ...pick(recordNode, ['id', '__typename'] as const),
  } as T;
};
