import { getAvatarType } from '@twenty-modules/object-metadata/utils/getAvatarType';
import { getBasePathToShowPage } from '@twenty-modules/object-metadata/utils/getBasePathToShowPage';
import { SingleRecordPickerRecord } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerRecord';
import { SearchRecord } from '@twenty-ui/front/generated/graphql';

export const formatSearchRecordAsSingleRecordPickerRecord = (
  searchRecord: SearchRecord,
): SingleRecordPickerRecord => {
  return {
    id: searchRecord.recordId,
    name: searchRecord.label,
    avatarUrl: searchRecord.imageUrl ?? undefined,
    avatarType: getAvatarType(searchRecord.objectNameSingular),
    linkToShowPage:
      getBasePathToShowPage({
        objectNameSingular: searchRecord.objectNameSingular,
      }) + searchRecord.recordId,
    record: {
      id: searchRecord.recordId,
      __typename: searchRecord.objectNameSingular,
    },
  };
};
