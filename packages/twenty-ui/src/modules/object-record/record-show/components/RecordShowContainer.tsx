import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ShowPageContainer } from '@twenty-modules/ui/layout/page/components/ShowPageContainer';

import { InformationBannerDeletedRecord } from '@twenty-modules/information-banner/components/deleted-record/InformationBannerDeletedRecord';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { RecordShowContainerContextStoreTargetedRecordsEffect } from '@twenty-modules/object-record/record-show/components/RecordShowContainerContextStoreTargetedRecordsEffect';
import { useRecordShowContainerData } from '@twenty-modules/object-record/record-show/hooks/useRecordShowContainerData';
import { useRecordShowContainerTabs } from '@twenty-modules/object-record/record-show/hooks/useRecordShowContainerTabs';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { ShowPageSubContainer } from '@twenty-modules/ui/layout/show-page/components/ShowPageSubContainer';
import { useRecoilValue } from 'recoil';

type RecordShowContainerProps = {
  objectNameSingular: string;
  objectRecordId: string;
  loading: boolean;
  isInRightDrawer?: boolean;
  isNewRightDrawerItemLoading?: boolean;
};

export const RecordShowContainer = ({
  objectNameSingular,
  objectRecordId,
  loading,
  isInRightDrawer = false,
}: RecordShowContainerProps) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { isPrefetchLoading, recordLoading } = useRecordShowContainerData({
    objectNameSingular,
    objectRecordId,
  });

  const recordDeletedAt = useRecoilValue<string | null>(
    recordStoreFamilySelector({
      recordId: objectRecordId,
      fieldName: 'deletedAt',
    }),
  );

  const { layout, tabs } = useRecordShowContainerTabs(
    loading,
    objectNameSingular as CoreObjectNameSingular,
    isInRightDrawer,
    objectMetadataItem,
  );

  return (
    <>
      <RecordShowContainerContextStoreTargetedRecordsEffect
        recordId={objectRecordId}
      />
      {recordDeletedAt && (
        <InformationBannerDeletedRecord
          recordId={objectRecordId}
          objectNameSingular={objectNameSingular}
        />
      )}
      <ShowPageContainer>
        <ShowPageSubContainer
          tabs={tabs}
          layout={layout}
          targetableObject={{
            id: objectRecordId,
            targetObjectNameSingular: objectMetadataItem?.nameSingular,
          }}
          isInRightDrawer={isInRightDrawer}
          loading={isPrefetchLoading || loading || recordLoading}
        />
      </ShowPageContainer>
    </>
  );
};
