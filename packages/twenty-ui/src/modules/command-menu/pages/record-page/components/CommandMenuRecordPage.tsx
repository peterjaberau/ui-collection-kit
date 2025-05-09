import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { TimelineActivityContext } from '@twenty-modules/activities/timeline-activities/contexts/TimelineActivityContext';
import { viewableRecordIdComponentState } from '@twenty-modules/command-menu/pages/record-page/states/viewableRecordIdComponentState';
import { viewableRecordNameSingularComponentState } from '@twenty-modules/command-menu/pages/record-page/states/viewableRecordNameSingularComponentState';
import { CommandMenuPageComponentInstanceContext } from '@twenty-modules/command-menu/states/contexts/CommandMenuPageComponentInstanceContext';
import { ContextStoreComponentInstanceContext } from '@twenty-modules/context-store/states/contexts/ContextStoreComponentInstanceContext';
import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { RecordShowContainer } from '@twenty-modules/object-record/record-show/components/RecordShowContainer';
import { RecordShowEffect } from '@twenty-modules/object-record/record-show/components/RecordShowEffect';
import { useRecordShowPage } from '@twenty-modules/object-record/record-show/hooks/useRecordShowPage';
import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { RecordValueSetterEffect } from '@twenty-modules/object-record/record-store/components/RecordValueSetterEffect';
import { RecordFieldValueSelectorContextProvider } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { useComponentInstanceStateContext } from '@twenty-modules/ui/utilities/state/component-state/hooks/useComponentInstanceStateContext';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import styled from '@emotion/styled';

const StyledRightDrawerRecord = styled.div<{ isMobile: boolean }>`
  height: ${({ theme, isMobile }) =>
    isMobile ? `calc(100% - ${theme.spacing(16)})` : '100%'};
`;

export const CommandMenuRecordPage = () => {
  const isMobile = useIsMobile();

  const viewableRecordNameSingular = useRecoilComponentValueV2(
    viewableRecordNameSingularComponentState,
  );

  const viewableRecordId = useRecoilComponentValueV2(
    viewableRecordIdComponentState,
  );

  if (!viewableRecordNameSingular) {
    throw new Error(`Object name is not defined`);
  }

  if (!viewableRecordId) {
    throw new Error(`Record id is not defined`);
  }

  const { objectNameSingular, objectRecordId } = useRecordShowPage(
    viewableRecordNameSingular,
    viewableRecordId,
  );

  const commandMenuPageInstanceId = useComponentInstanceStateContext(
    CommandMenuPageComponentInstanceContext,
  )?.instanceId;

  if (!commandMenuPageInstanceId) {
    throw new Error('Command menu page instance id is not defined');
  }

  return (
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
            value={{
              instanceId: commandMenuPageInstanceId,
            }}
          >
            <ActionMenuComponentInstanceContext.Provider
              value={{ instanceId: commandMenuPageInstanceId }}
            >
              <StyledRightDrawerRecord isMobile={isMobile}>
                <RecordFieldValueSelectorContextProvider>
                  <RecordValueSetterEffect recordId={objectRecordId} />
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
                      isInRightDrawer={true}
                    />
                  </TimelineActivityContext.Provider>
                </RecordFieldValueSelectorContextProvider>
              </StyledRightDrawerRecord>
            </ActionMenuComponentInstanceContext.Provider>
          </ContextStoreComponentInstanceContext.Provider>
        </RecordSortsComponentInstanceContext.Provider>
      </RecordFiltersComponentInstanceContext.Provider>
    </RecordFilterGroupsComponentInstanceContext.Provider>
  );
};
