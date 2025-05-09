import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useFindOneRecord } from '@twenty-modules/object-record/hooks/useFindOneRecord';
import { buildFindOneRecordForShowPageOperationSignature } from '@twenty-modules/object-record/record-show/graphql/operations/factories/findOneRecordForShowPageOperationSignatureFactory';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type RecordShowEffectProps = {
  objectNameSingular: string;
  recordId: string;
};

export const RecordShowEffect = ({
  objectNameSingular,
  recordId,
}: RecordShowEffectProps) => {
  const { objectMetadataItem } = useObjectMetadataItem({ objectNameSingular });
  const { objectMetadataItems } = useObjectMetadataItems();

  const FIND_ONE_RECORD_FOR_SHOW_PAGE_OPERATION_SIGNATURE =
    buildFindOneRecordForShowPageOperationSignature({
      objectMetadataItem,
      objectMetadataItems,
    });

  const { record } = useFindOneRecord({
    objectRecordId: recordId,
    objectNameSingular,
    recordGqlFields: FIND_ONE_RECORD_FOR_SHOW_PAGE_OPERATION_SIGNATURE.fields,
    withSoftDeleted: true,
  });

  const [recordFromStore, setRecordFromStore] = useRecoilState(
    recordStoreFamilyState(recordId),
  );

  useEffect(() => {
    if (isDefined(record) && !isDeeplyEqual(record, recordFromStore)) {
      setRecordFromStore(record);
    }
  }, [record, recordFromStore, setRecordFromStore]);

  return <></>;
};
