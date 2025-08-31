import { isObject, set } from "lodash";
import { klona } from "klona/json";


export function makeEntityConfigsAsObjProperties(
  dataTree: any,
  option = {} as any,
): any {
  const { evalProps, sanitizeDataTree = true } = option;
  const newDataTree: any = {};

  for (const entityName of Object.keys(dataTree)) {
    const entity = dataTree[entityName];

    newDataTree[entityName] = isObject(entity)
      ? Object.assign({}, entity)
      : entity;
  }

  const dataTreeToReturn = sanitizeDataTree ? klona(newDataTree) : newDataTree;

  if (!evalProps) return dataTreeToReturn;

  for (const [entityName, entityEvalProps] of Object.entries(evalProps) as any) {
    if (!entityEvalProps.__evaluation__) continue;

    set(
      dataTreeToReturn[entityName],
      "__evaluation__",
      klona({ errors: entityEvalProps.__evaluation__.errors }),
    );
  }

  return dataTreeToReturn;
}
