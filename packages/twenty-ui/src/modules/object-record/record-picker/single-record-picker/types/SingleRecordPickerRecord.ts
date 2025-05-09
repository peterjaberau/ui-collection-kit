import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { ObjectRecordIdentifier } from '@twenty-modules/object-record/types/ObjectRecordIdentifier';

export type SingleRecordPickerRecord = ObjectRecordIdentifier & {
  record: ObjectRecord;
};
