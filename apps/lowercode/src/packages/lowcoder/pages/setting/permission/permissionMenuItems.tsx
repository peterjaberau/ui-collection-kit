import { OrgGroup } from "#lowcoder/constants/orgConstants";

export function usePermissionMenuItems(orgId: string) {
  return {
    nameSuffixFunc: (group?: OrgGroup) => <></>,
    menuItemsFunc: undefined as Function | undefined,
    menuExtraView: undefined,
  } as any;
}
