import { PreComputedChipGeneratorsContext } from '@twenty-modules/object-metadata/contexts/PreComputedChipGeneratorsContext';
import { generateDefaultRecordChipData } from '@twenty-modules/object-metadata/utils/generateDefaultRecordChipData';
import { RecordChipData } from '@twenty-modules/object-record/record-field/types/RecordChipData';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { useContext } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type UseRecordChipDataArgs = {
  objectNameSingular: string;
  record: ObjectRecord;
};
type UseRecordChipDataReturnType = {
  recordChipData: RecordChipData;
};
export const useRecordChipData = ({
  objectNameSingular,
  record,
}: UseRecordChipDataArgs): UseRecordChipDataReturnType => {
  const { identifierChipGeneratorPerObject } = useContext(
    PreComputedChipGeneratorsContext,
  );

  const identifierChipGenerator =
    identifierChipGeneratorPerObject[objectNameSingular];

  if (isDefined(identifierChipGenerator)) {
    return {
      recordChipData: identifierChipGenerator(record),
    };
  }

  return {
    recordChipData: generateDefaultRecordChipData({
      objectNameSingular,
      record,
    }),
  };
};
