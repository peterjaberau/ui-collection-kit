import { RecordGqlFields } from '@twenty-modules/object-record/graphql/types/RecordGqlFields';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const isRecordGqlFieldsNode = (
  recordGql: RecordGqlFields | boolean | undefined,
): recordGql is RecordGqlFields =>
  isDefined(recordGql) &&
  typeof recordGql === 'object' &&
  recordGql !== null &&
  !Array.isArray(recordGql);
