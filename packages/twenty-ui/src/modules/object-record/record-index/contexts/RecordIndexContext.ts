import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { createRequiredContext } from '@twenty-ui/front/utils/createRequiredContext';

export type RecordIndexContextValue = {
  indexIdentifierUrl: (recordId: string) => string;
  onIndexRecordsLoaded: () => void;
  objectNamePlural: string;
  objectNameSingular: string;
  objectMetadataItem: ObjectMetadataItem;
  recordIndexId: string;
};

export const [RecordIndexContextProvider, useRecordIndexContextOrThrow] =
  createRequiredContext<RecordIndexContextValue>('RecordIndexContext');
