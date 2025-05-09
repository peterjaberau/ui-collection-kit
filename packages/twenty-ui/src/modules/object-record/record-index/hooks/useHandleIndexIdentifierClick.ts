import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { getAppPath } from '@twenty-ui/front/utils/navigation/getAppPath';

export const useHandleIndexIdentifierClick = ({
  objectMetadataItem,
  recordIndexId,
}: {
  recordIndexId: string;
  objectMetadataItem: ObjectMetadataItem;
}) => {
  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
    recordIndexId,
  );

  const indexIdentifierUrl = (recordId: string) => {
    return getAppPath(
      AppPath.RecordShowPage,
      {
        objectNameSingular: objectMetadataItem.nameSingular,
        objectRecordId: recordId,
      },
      {
        viewId: currentViewId,
      },
    );
  };

  return { indexIdentifierUrl };
};
