import { RecordIndexContextProvider } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';

import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { getActionMenuIdFromRecordIndexId } from '@twenty-modules/action-menu/utils/getActionMenuIdFromRecordIndexId';
import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { lastShowPageRecordIdState } from '@twenty-modules/object-record/record-field/states/lastShowPageRecordId';
import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { RecordIndexContainer } from '@twenty-modules/object-record/record-index/components/RecordIndexContainer';
import { RecordIndexContainerContextStoreNumberOfSelectedRecordsEffect } from '@twenty-modules/object-record/record-index/components/RecordIndexContainerContextStoreNumberOfSelectedRecordsEffect';
import { RecordIndexLoadBaseOnContextStoreEffect } from '@twenty-modules/object-record/record-index/components/RecordIndexLoadBaseOnContextStoreEffect';
import { RecordIndexPageHeader } from '@twenty-modules/object-record/record-index/components/RecordIndexPageHeader';
import { useHandleIndexIdentifierClick } from '@twenty-modules/object-record/record-index/hooks/useHandleIndexIdentifierClick';
import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { PageBody } from '@twenty-modules/ui/layout/page/components/PageBody';
import { PageTitle } from '@twenty-modules/ui/utilities/page-title/components/PageTitle';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';
import styled from '@emotion/styled';
import { useRecoilCallback } from 'recoil';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

const StyledIndexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const RecordIndexContainerGater = () => {
  const contextStoreCurrentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
    MAIN_CONTEXT_STORE_INSTANCE_ID,
  );

  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const recordIndexId = getRecordIndexIdFromObjectNamePluralAndViewId(
    objectMetadataItem.namePlural,
    contextStoreCurrentViewId || '',
  );

  const handleIndexRecordsLoaded = useRecoilCallback(
    ({ set }) =>
      () => {
        // TODO: find a better way to reset this state ?
        set(lastShowPageRecordIdState, null);
      },
    [],
  );

  const { indexIdentifierUrl } = useHandleIndexIdentifierClick({
    objectMetadataItem,
    recordIndexId,
  });

  return (
    <>
      <RecordIndexContextProvider
        value={{
          recordIndexId,
          objectNamePlural: objectMetadataItem.namePlural,
          objectNameSingular: objectMetadataItem.nameSingular,
          objectMetadataItem,
          onIndexRecordsLoaded: handleIndexRecordsLoaded,
          indexIdentifierUrl,
        }}
      >
        <ViewComponentInstanceContext.Provider
          value={{ instanceId: recordIndexId }}
        >
          <RecordFilterGroupsComponentInstanceContext.Provider
            value={{ instanceId: recordIndexId }}
          >
            <RecordFiltersComponentInstanceContext.Provider
              value={{ instanceId: recordIndexId }}
            >
              <RecordSortsComponentInstanceContext.Provider
                value={{ instanceId: recordIndexId }}
              >
                <ActionMenuComponentInstanceContext.Provider
                  value={{
                    instanceId: getActionMenuIdFromRecordIndexId(recordIndexId),
                  }}
                >
                  <PageTitle
                    title={`${capitalize(objectMetadataItem.namePlural)}`}
                  />
                  <RecordIndexPageHeader />
                  <PageBody>
                    <StyledIndexContainer>
                      <RecordIndexContainerContextStoreNumberOfSelectedRecordsEffect />
                      <RecordIndexContainer />
                    </StyledIndexContainer>
                  </PageBody>
                </ActionMenuComponentInstanceContext.Provider>
              </RecordSortsComponentInstanceContext.Provider>
            </RecordFiltersComponentInstanceContext.Provider>
          </RecordFilterGroupsComponentInstanceContext.Provider>
          <RecordIndexLoadBaseOnContextStoreEffect />
        </ViewComponentInstanceContext.Provider>
      </RecordIndexContextProvider>
    </>
  );
};
