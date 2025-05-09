import { useObjectLabel } from '@twenty-modules/object-metadata/hooks/useObjectLabel';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableEmptyStateDisplay } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateDisplay';
import { getEmptyStateSubTitle } from '@twenty-modules/object-record/record-table/empty-state/utils/getEmptyStateSubTitle';
import { getEmptyStateTitle } from '@twenty-modules/object-record/record-table/empty-state/utils/getEmptyStateTitle';
import { useCreateNewIndexRecord } from '@twenty-modules/object-record/record-table/hooks/useCreateNewIndexRecord';
import { IconPlus } from '@twenty-ui/display';

export const RecordTableEmptyStateNoGroupNoRecordAtAll = () => {
  const { objectMetadataItem } = useRecordTableContextOrThrow();

  const { createNewIndexRecord } = useCreateNewIndexRecord({
    objectMetadataItem,
  });

  const handleButtonClick = () => {
    createNewIndexRecord();
  };

  const objectLabel = useObjectLabel(objectMetadataItem);

  const buttonTitle = `Add a ${objectLabel}`;

  const title = getEmptyStateTitle(
    objectMetadataItem.nameSingular,
    objectLabel,
  );

  const subTitle = getEmptyStateSubTitle(
    objectMetadataItem.nameSingular,
    objectLabel,
  );

  return (
    <RecordTableEmptyStateDisplay
      buttonTitle={buttonTitle}
      subTitle={subTitle}
      title={title}
      ButtonIcon={IconPlus}
      animatedPlaceholderType="noRecord"
      onClick={handleButtonClick}
    />
  );
};
