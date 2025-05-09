import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useLazyFindManyRecords } from '@twenty-modules/object-record/hooks/useLazyFindManyRecords';
import { useFindManyRecordIndexTableParams } from '@twenty-modules/object-record/record-index/hooks/useFindManyRecordIndexTableParams';
import { useRecordTableRecordGqlFields } from '@twenty-modules/object-record/record-index/hooks/useRecordTableRecordGqlFields';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { SIGN_IN_BACKGROUND_MOCK_COMPANIES } from '@twenty-modules/sign-in-background-mock/constants/SignInBackgroundMockCompanies';
import { useShowAuthModal } from '@twenty-modules/ui/layout/hooks/useShowAuthModal';

export const useLazyLoadRecordIndexTable = (objectNameSingular: string) => {
  const showAuthModal = useShowAuthModal();

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { setRecordTableData, setIsRecordTableInitialLoading } =
    useRecordTable();

  const params = useFindManyRecordIndexTableParams(objectNameSingular);

  const recordGqlFields = useRecordTableRecordGqlFields({ objectMetadataItem });

  const {
    findManyRecords,
    records,
    loading,
    totalCount,
    fetchMoreRecords,
    queryStateIdentifier,
    hasNextPage,
  } = useLazyFindManyRecords({
    ...params,
    recordGqlFields,
    onCompleted: () => {
      setIsRecordTableInitialLoading(false);
    },
    onError: () => {
      setIsRecordTableInitialLoading(false);
    },
  });

  return {
    findManyRecords,
    records: !showAuthModal ? records : SIGN_IN_BACKGROUND_MOCK_COMPANIES,
    totalCount: totalCount,
    loading,
    fetchMoreRecords,
    queryStateIdentifier,
    setRecordTableData,
    hasNextPage,
  };
};
