import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getObjectRecordIdentifier } from '@twenty-modules/object-metadata/utils/getObjectRecordIdentifier';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const getSelectedRecordsContextText = (
  objectMetadataItem: ObjectMetadataItem,
  records: ObjectRecord[],
  totalCount: number,
) => {
  return totalCount === 1
    ? getObjectRecordIdentifier({ objectMetadataItem, record: records[0] }).name
    : `${totalCount} ${capitalize(objectMetadataItem.namePlural)}`;
};
