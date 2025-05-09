import { useContext } from 'react';

import { FieldActorValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';

import { AuthContext } from '@twenty-modules/auth/contexts/AuthContext';
import { FieldContext } from '../../contexts/FieldContext';

export const useActorFieldDisplay = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  const { currentWorkspaceMembers } = useContext(AuthContext);

  const fieldName = fieldDefinition.metadata.fieldName;

  const fieldValue = useRecordFieldValue<FieldActorValue | undefined>(
    recordId,
    fieldName,
  );

  return {
    fieldDefinition,
    fieldValue: {
      ...fieldValue,
      workspaceMember: currentWorkspaceMembers?.find(
        (member) => member.id === fieldValue?.workspaceMemberId,
      ),
    },
  };
};
