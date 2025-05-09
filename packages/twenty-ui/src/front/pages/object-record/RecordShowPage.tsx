import { useParams } from 'react-router-dom';

import { RecordShowActionMenu } from '@twenty-modules/action-menu/components/RecordShowActionMenu';
import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { TimelineActivityContext } from '@twenty-modules/activities/timeline-activities/contexts/TimelineActivityContext';
import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { ContextStoreComponentInstanceContext } from '@twenty-modules/context-store/states/contexts/ContextStoreComponentInstanceContext';
import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { RecordShowContainer } from '@twenty-modules/object-record/record-show/components/RecordShowContainer';
import { RecordShowEffect } from '@twenty-modules/object-record/record-show/components/RecordShowEffect';
import { useRecordShowPage } from '@twenty-modules/object-record/record-show/hooks/useRecordShowPage';
import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { RecordValueSetterEffect } from '@twenty-modules/object-record/record-store/components/RecordValueSetterEffect';
import { RecordFieldValueSelectorContextProvider } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { PageHeaderToggleCommandMenuButton } from '@twenty-modules/ui/layout/page-header/components/PageHeaderToggleCommandMenuButton';
import { PageBody } from '@twenty-modules/ui/layout/page/components/PageBody';
import { PageContainer } from '@twenty-modules/ui/layout/page/components/PageContainer';
import { RecordShowPageHeader } from '@twenty-ui/front/pages/object-record/RecordShowPageHeader';
import { RecordShowPageTitle } from '@twenty-ui/front/pages/object-record/RecordShowPageTitle';

export const RecordShowPage = () => {
  const parameters = useParams<{
    objectNameSingular: string;
    objectRecordId: string;
  }>();

  const { objectNameSingular, objectRecordId } = useRecordShowPage(
    parameters.objectNameSingular ?? '',
    parameters.objectRecordId ?? '',
  );

  return (
    <RecordFieldValueSelectorContextProvider>
      <RecordFilterGroupsComponentInstanceContext.Provider
        value={{ instanceId: `record-show-${objectRecordId}` }}
      >
        <RecordFiltersComponentInstanceContext.Provider
          value={{ instanceId: `record-show-${objectRecordId}` }}
        >
          <RecordSortsComponentInstanceContext.Provider
            value={{ instanceId: `record-show-${objectRecordId}` }}
          >
            <ContextStoreComponentInstanceContext.Provider
              value={{ instanceId: MAIN_CONTEXT_STORE_INSTANCE_ID }}
            >
              <ActionMenuComponentInstanceContext.Provider
                value={{ instanceId: `record-show-${objectRecordId}` }}
              >
                <RecordValueSetterEffect recordId={objectRecordId} />
                <PageContainer>
                  <RecordShowPageTitle
                    objectNameSingular={objectNameSingular}
                    objectRecordId={objectRecordId}
                  />
                  <RecordShowPageHeader
                    objectNameSingular={objectNameSingular}
                    objectRecordId={objectRecordId}
                  >
                    <RecordShowActionMenu />
                    <PageHeaderToggleCommandMenuButton />
                  </RecordShowPageHeader>
                  <PageBody>
                    <TimelineActivityContext.Provider
                      value={{
                        recordId: objectRecordId,
                      }}
                    >
                      <RecordShowEffect
                        objectNameSingular={objectNameSingular}
                        recordId={objectRecordId}
                      />
                      <RecordShowContainer
                        objectNameSingular={objectNameSingular}
                        objectRecordId={objectRecordId}
                        loading={false}
                      />
                    </TimelineActivityContext.Provider>
                  </PageBody>
                </PageContainer>
              </ActionMenuComponentInstanceContext.Provider>
            </ContextStoreComponentInstanceContext.Provider>
          </RecordSortsComponentInstanceContext.Provider>
        </RecordFiltersComponentInstanceContext.Provider>
      </RecordFilterGroupsComponentInstanceContext.Provider>
    </RecordFieldValueSelectorContextProvider>
  );
};
