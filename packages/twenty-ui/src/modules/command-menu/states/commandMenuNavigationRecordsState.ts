import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { createState } from '@twenty-ui/utilities';

export const commandMenuNavigationRecordsState = createState<
  {
    objectMetadataItem: ObjectMetadataItem;
    record: ObjectRecord;
  }[]
>({
  key: 'command-menu/commandMenuNavigationRecordsState',
  defaultValue: [],
});
