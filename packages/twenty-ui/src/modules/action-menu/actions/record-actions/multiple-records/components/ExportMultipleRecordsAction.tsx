import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useExportRecords } from '@twenty-modules/object-record/record-index/export/hooks/useExportRecords';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const ExportMultipleRecordsAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const contextStoreCurrentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  if (!contextStoreCurrentViewId) {
    throw new Error('Current view ID is not defined');
  }

  const { download } = useExportRecords({
    delayMs: 100,
    objectMetadataItem,
    recordIndexId: getRecordIndexIdFromObjectNamePluralAndViewId(
      objectMetadataItem.namePlural,
      contextStoreCurrentViewId,
    ),
    filename: `${objectMetadataItem.nameSingular}.csv`,
  });

  return <Action onClick={download} />;
};
