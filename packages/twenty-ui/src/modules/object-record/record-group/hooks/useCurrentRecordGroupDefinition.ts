import { RecordGroupContext } from '@twenty-modules/object-record/record-group/states/context/RecordGroupContext';
import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { useContext } from 'react';
import { useRecoilValue } from 'recoil';

export const useCurrentRecordGroupDefinition = () => {
  const context = useContext(RecordGroupContext);

  const recordGroupDefinition = useRecoilValue(
    recordGroupDefinitionFamilyState(context?.recordGroupId),
  );

  return recordGroupDefinition;
};
