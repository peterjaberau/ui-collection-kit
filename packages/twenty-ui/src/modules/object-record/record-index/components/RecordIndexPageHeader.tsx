import { RecordIndexActionMenu } from '@twenty-modules/action-menu/components/RecordIndexActionMenu';
import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { PageHeaderToggleCommandMenuButton } from '@twenty-modules/ui/layout/page-header/components/PageHeaderToggleCommandMenuButton';
import { PageHeader } from '@twenty-modules/ui/layout/page/components/PageHeader';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import styled from '@emotion/styled';
import { t } from '@lingui/core/macro';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useIcons } from '@twenty-ui/display';

const StyledTitleWithSelectedRecords = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  padding-right: ${({ theme }) => theme.spacing(0.5)};
`;

const StyledSelectedRecordsCount = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
  padding-left: ${({ theme }) => theme.spacing(0.5)};
`;

export const RecordIndexPageHeader = () => {
  const { findObjectMetadataItemByNamePlural } =
    useFilteredObjectMetadataItems();

  const contextStoreNumberOfSelectedRecords = useRecoilComponentValueV2(
    contextStoreNumberOfSelectedRecordsComponentState,
  );

  const { objectNamePlural } = useRecordIndexContextOrThrow();

  const objectMetadataItem =
    findObjectMetadataItemByNamePlural(objectNamePlural);

  const { getIcon } = useIcons();
  const Icon = getIcon(objectMetadataItem?.icon);

  const label = objectMetadataItem?.labelPlural ?? capitalize(objectNamePlural);

  const pageHeaderTitle =
    contextStoreNumberOfSelectedRecords > 0 ? (
      <StyledTitleWithSelectedRecords>
        <StyledTitle>{label}</StyledTitle>
        <>{'->'}</>
        <StyledSelectedRecordsCount>
          {t`${contextStoreNumberOfSelectedRecords} selected`}
        </StyledSelectedRecordsCount>
      </StyledTitleWithSelectedRecords>
    ) : (
      label
    );

  const contextStoreCurrentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
    MAIN_CONTEXT_STORE_INSTANCE_ID,
  );

  return (
    <PageHeader title={pageHeaderTitle} Icon={Icon}>
      {isDefined(contextStoreCurrentViewId) && (
        <>
          <RecordIndexActionMenu />
          <PageHeaderToggleCommandMenuButton />
        </>
      )}
    </PageHeader>
  );
};
