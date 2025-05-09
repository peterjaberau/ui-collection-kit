import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { ObjectMetadataItemIdentifier } from '@twenty-modules/object-metadata/types/ObjectMetadataItemIdentifier';
import { getRecordsFromRecordConnection } from '@twenty-modules/object-record/cache/utils/getRecordsFromRecordConnection';
import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';
import { RecordGqlOperationFindDuplicatesResult } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFindDuplicatesResults';
import { useFindDuplicateRecordsQuery } from '@twenty-modules/object-record/hooks/useFindDuplicatesRecordsQuery';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { getFindDuplicateRecordsQueryResponseField } from '@twenty-modules/object-record/utils/getFindDuplicateRecordsQueryResponseField';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { logError } from '@twenty-ui/front/utils/logError';

export const useFindDuplicateRecords = <T extends ObjectRecord = ObjectRecord>({
  objectRecordIds = [],
  objectNameSingular,
  onCompleted,
  skip,
}: ObjectMetadataItemIdentifier & {
  objectRecordIds: string[] | undefined;
  onCompleted?: (data: RecordGqlConnection[]) => void;
  skip?: boolean;
}) => {
  const findDuplicateQueryStateIdentifier = objectNameSingular;

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { findDuplicateRecordsQuery } = useFindDuplicateRecordsQuery({
    objectNameSingular,
  });

  const { enqueueSnackBar } = useSnackBar();

  const queryResponseField = getFindDuplicateRecordsQueryResponseField(
    objectMetadataItem.nameSingular,
  );

  const { data, loading, error } =
    useQuery<RecordGqlOperationFindDuplicatesResult>(
      findDuplicateRecordsQuery,
      {
        skip: !!skip,
        variables: {
          ids: objectRecordIds,
        },
        onCompleted: (data) => {
          onCompleted?.(data[queryResponseField]);
        },
        onError: (error) => {
          logError(
            `useFindDuplicateRecords for "${objectMetadataItem.nameSingular}" error : ` +
              error,
          );
          enqueueSnackBar(`Error finding duplicates:", ${error.message}`, {
            variant: SnackBarVariant.Error,
          });
        },
      },
    );

  const objectResults = data?.[queryResponseField];

  const results = useMemo(
    () =>
      objectResults?.map((result: RecordGqlConnection) => {
        return result
          ? (getRecordsFromRecordConnection({
              recordConnection: result,
            }) as T[])
          : [];
      }),
    [objectResults],
  );

  return {
    objectMetadataItem,
    results,
    loading,
    error,
    queryStateIdentifier: findDuplicateQueryStateIdentifier,
  };
};
