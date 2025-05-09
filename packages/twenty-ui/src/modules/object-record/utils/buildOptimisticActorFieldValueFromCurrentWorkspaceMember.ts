import { CurrentWorkspaceMember } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { FieldActorValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const buildOptimisticActorFieldValueFromCurrentWorkspaceMember = (
  currentWorkspaceMember: CurrentWorkspaceMember | null,
): FieldActorValue => {
  const defaultActorFieldValue: FieldActorValue = {
    context: {},
    name: '',
    source: 'MANUAL',
    workspaceMemberId: null,
  };

  if (!isDefined(currentWorkspaceMember)) {
    return defaultActorFieldValue;
  }

  const {
    id: workspaceMemberId,
    name: { firstName, lastName },
  } = currentWorkspaceMember;
  const name = `${firstName} ${lastName}`;
  return {
    ...defaultActorFieldValue,
    name: name,
    workspaceMemberId,
  };
};
