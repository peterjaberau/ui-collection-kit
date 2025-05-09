import { useContext, useEffect } from 'react';

import { useFindOneRecord } from '@twenty-modules/object-record/hooks/useFindOneRecord';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { FieldRelationMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useUpsertRecordsInStore } from '@twenty-modules/object-record/record-store/hooks/useUpsertRecordsInStore';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type RecordDetailRelationRecordsListItemEffectProps = {
  relationRecordId: string;
};

export const RecordDetailRelationRecordsListItemEffect = ({
  relationRecordId,
}: RecordDetailRelationRecordsListItemEffectProps) => {
  const { fieldDefinition } = useContext(FieldContext);

  const { relationObjectMetadataNameSingular } =
    fieldDefinition.metadata as FieldRelationMetadata;

  const { record } = useFindOneRecord({
    objectNameSingular: relationObjectMetadataNameSingular,
    objectRecordId: relationRecordId,
  });

  const { upsertRecords } = useUpsertRecordsInStore();

  useEffect(() => {
    if (isDefined(record)) {
      upsertRecords([record]);
    }
  }, [record, upsertRecords]);

  return null;
};
