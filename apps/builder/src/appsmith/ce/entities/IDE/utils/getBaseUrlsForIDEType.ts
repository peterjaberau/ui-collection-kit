import { IDEBasePaths } from "ce/IDE/constants/routes";
import type { IDEType } from "ce/IDE/Interfaces/IDETypes";

export function getBaseUrlsForIDEType(type: IDEType): string[] {
  return IDEBasePaths[type];
}
