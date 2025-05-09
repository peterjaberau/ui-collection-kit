import { useObjectLabel } from '@twenty-modules/object-metadata/hooks/useObjectLabel';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableEmptyStateDisplay } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateDisplay';
import { useCreateNewIndexRecord } from '@twenty-modules/object-record/record-table/hooks/useCreateNewIndexRecord';
import { IconPlus } from '@twenty-ui/display';

export const RecordTableEmptyStateNoRecordFoundForFilter = () => {
  const { objectMetadataItem } = useRecordTableContextOrThrow();

  const { createNewIndexRecord } = useCreateNewIndexRecord({
    objectMetadataItem,
  });

  const handleButtonClick = () => {
    createNewIndexRecord();
  };

  const objectLabel = useObjectLabel(objectMetadataItem);

  const buttonTitle = `Add a ${objectLabel}`;

  const title = `No ${objectLabel} found`;

  const subTitle = 'No records matching the filter criteria were found.';

  return (
    <RecordTableEmptyStateDisplay
      buttonTitle={buttonTitle}
      subTitle={subTitle}
      title={title}
      ButtonIcon={IconPlus}
      animatedPlaceholderType="noMatchRecord"
      onClick={handleButtonClick}
    />
  );
};
