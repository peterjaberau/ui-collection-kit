import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useCreateFavorite } from '@twenty-modules/favorites/hooks/useCreateFavorite';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const AddToFavoritesSingleRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const recordId = useSelectedRecordIdOrThrow();

  const { createFavorite } = useCreateFavorite();

  const selectedRecord = useRecoilValue(recordStoreFamilyState(recordId));

  const handleClick = () => {
    if (!isDefined(selectedRecord)) {
      return;
    }

    createFavorite(selectedRecord, objectMetadataItem.nameSingular);
  };

  return <Action onClick={handleClick} />;
};
