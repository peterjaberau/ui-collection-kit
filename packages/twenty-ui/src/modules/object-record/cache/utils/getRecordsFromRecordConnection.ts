import { getRecordFromRecordNode } from '@twenty-modules/object-record/cache/utils/getRecordFromRecordNode';
import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const getRecordsFromRecordConnection = <T extends ObjectRecord>({
  recordConnection,
}: {
  recordConnection: RecordGqlConnection;
}): T[] => {
  return recordConnection?.edges?.map((edge) =>
    getRecordFromRecordNode<T>({ recordNode: edge.node }),
  );
};
