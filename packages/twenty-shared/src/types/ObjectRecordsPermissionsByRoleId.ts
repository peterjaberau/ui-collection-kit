import type { ObjectRecordsPermissions } from './ObjectRecordsPermissions';

export type ObjectRecordsPermissionsByRoleId = {
  [roleId: string]: ObjectRecordsPermissions;
};
