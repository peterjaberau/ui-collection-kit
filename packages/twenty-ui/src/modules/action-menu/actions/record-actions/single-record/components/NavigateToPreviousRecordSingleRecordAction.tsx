import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useRecordShowPagePagination } from '@twenty-modules/object-record/record-show/hooks/useRecordShowPagePagination';

export const NavigateToPreviousRecordSingleRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const recordId = useSelectedRecordIdOrThrow();

  const { navigateToPreviousRecord } = useRecordShowPagePagination(
    objectMetadataItem.nameSingular,
    recordId,
  );

  return <Action onClick={navigateToPreviousRecord} />;
};
