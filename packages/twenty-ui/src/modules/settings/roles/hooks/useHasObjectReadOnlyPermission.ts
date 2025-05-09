import { currentUserWorkspaceState } from '@twenty-modules/auth/states/currentUserWorkspaceState';
import { useRecoilValue } from 'recoil';
import { PermissionsOnAllObjectRecords } from '@ui-collection-kit/twenty-shared/src/constants';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useHasObjectReadOnlyPermission = () => {
  const currentUserWorkspace = useRecoilValue(currentUserWorkspaceState);

  if (!isDefined(currentUserWorkspace?.objectRecordsPermissions)) {
    return false;
  }

  if (currentUserWorkspace?.objectRecordsPermissions.length === 0) {
    return true;
  }

  return (
    currentUserWorkspace?.objectRecordsPermissions.length === 1 &&
    currentUserWorkspace?.objectRecordsPermissions.includes(
      PermissionsOnAllObjectRecords.READ_ALL_OBJECT_RECORDS,
    )
  );
};
