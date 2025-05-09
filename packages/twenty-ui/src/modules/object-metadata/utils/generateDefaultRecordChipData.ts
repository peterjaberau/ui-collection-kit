import { RecordChipData } from '@twenty-modules/object-record/record-field/types/RecordChipData';
import { isFieldFullNameValue } from '@twenty-modules/object-record/record-field/types/guards/isFieldFullNameValue';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

type GenerateDefaultRecordChipDataArgs = {
  record: ObjectRecord;
  objectNameSingular: string;
};
export const generateDefaultRecordChipData = ({
  objectNameSingular,
  record,
}: GenerateDefaultRecordChipDataArgs): RecordChipData => {
  const name = isFieldFullNameValue(record.name)
    ? `${record.name.firstName} ${record.name.lastName}`
    : (record.name ?? '');

  return {
    avatarType: 'rounded',
    avatarUrl: name,
    isLabelIdentifier: false,
    name,
    objectNameSingular,
    recordId: record.id,
  };
};
