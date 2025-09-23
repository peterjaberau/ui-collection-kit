import { uid } from "radash";

export function newId() {
  return uid(9);
}

export function uniqueName(baseName: string, existing: string[]) {
  let tempName = "";
  let counter = 0;

  do {
    tempName = `${baseName} ${counter ? counter + 1 : ""}`.trim();
    counter++;
  } while (existing.includes(tempName));

  return tempName;
}
