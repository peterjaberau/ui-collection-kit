import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { CombinedFindManyRecordsQueryResult } from '@twenty-modules/object-record/multiple-objects/types/CombinedFindManyRecordsQueryResult';
import { multiRecordPickerFormatSearchResults } from '@twenty-modules/object-record/record-picker/multiple-record-picker/utils/multiRecordPickerFormatSearchResults';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const multipleRecordPickerformatQueryResultAsRecordsWithObjectMetadataId =
  ({
    objectMetadataItems,
    searchQueryResult,
  }: {
    objectMetadataItems: ObjectMetadataItem[];
    searchQueryResult: CombinedFindManyRecordsQueryResult;
  }) => {
    const formattedSearchQueryResult =
      multiRecordPickerFormatSearchResults(searchQueryResult);

    const recordsWithObjectMetadataId = Object.entries(
      formattedSearchQueryResult,
    ).flatMap(([namePlural, objectRecordConnection]) => {
      const objectMetadataItem = objectMetadataItems.find(
        (objectMetadataItem) => objectMetadataItem.namePlural === namePlural,
      );

      if (!isDefined(objectMetadataItem)) return [];

      return objectRecordConnection.edges.map(({ node }) => ({
        objectMetadataItem,
        record: node,
      }));
    });

    return {
      recordsWithObjectMetadataId,
    };
  };
