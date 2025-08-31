import { ExecutionType } from "#actor-constants"
import set from "lodash/set";
import { addFn } from "#actor-workers/Evaluation/fns/utils/fnGuard";
import {
  getEntityFunctions,
  getPlatformFunctions,
} from "#actor-workers/Evaluation/fns";
import { getEntityForEvalContext } from "#actor-workers/Evaluation/getEntityForContext";
import { klona } from "klona/full";
import { isEmpty } from "lodash";
import setters from "#actor-workers/Evaluation/setters";
declare global {
  interface Window {
    $isDataField: boolean;
    $isAsync: boolean;
    $evaluationVersion: number;
    $cloudHosting: boolean;
  }
}


export const getDataTreeContext = (args: any) => {
  const {
    configTree,
    dataTree,
    isTriggerBased,
    removeEntityFunctions = false,
  } = args;
  const EVAL_CONTEXT: any = {};

  const dataTreeEntries = Object.entries(dataTree);
  const entityFunctionCollection: Record<string, Record<string, Function>> = {};

  if (isTriggerBased && !removeEntityFunctions) setters.clear();

  for (const [entityName, entity] of dataTreeEntries as any) {
    EVAL_CONTEXT[entityName] = getEntityForEvalContext(entity, entityName);

    // when we evaluate data field and removeEntityFunctions is true then we skip adding entity function to evalContext
    const skipEntityFunctions = !removeEntityFunctions && !isTriggerBased;

    if (skipEntityFunctions) continue;

    for (const entityFn of getEntityFunctions()) {
      if (!entityFn.qualifier(entity)) continue;

      const func = entityFn.fn(entity, entityName);
      const fullPath = `${entityFn.path || `${entityName}.${entityFn.name}`}`;

      set(entityFunctionCollection, fullPath, func);
    }

    // Don't add entity function ( setter method ) to evalContext if removeEntityFunctions is true
    if (removeEntityFunctions) continue;

    const entityConfig = configTree[entityName];
    const entityMethodMap = setters.getEntitySettersFromConfig(
      entityConfig,
      entityName,
      entity,
    );

    if (isEmpty(entityMethodMap)) continue;

    EVAL_CONTEXT[entityName] = Object.assign(
      {},
      dataTree[entityName],
      entityMethodMap,
    );
  }

  if (removeEntityFunctions) {
    removeEntityFunctionsFromEvalContext(
      entityFunctionCollection,
      EVAL_CONTEXT,
    );

    return EVAL_CONTEXT;
  }

  if (!isTriggerBased) {
    return EVAL_CONTEXT;
  }

  // if eval is not trigger based i.e., sync eval then we skip adding entity function to evalContext
  addEntityFunctionsToEvalContext(EVAL_CONTEXT, entityFunctionCollection);

  return EVAL_CONTEXT;
};

export const addEntityFunctionsToEvalContext = (
  evalContext: any,
  entityFunctionCollection: Record<string, Record<string, Function>>,
) => {
  for (const [entityName, funcObj] of Object.entries(
    entityFunctionCollection,
  )) {
    evalContext[entityName] = Object.assign(
      {},
      evalContext[entityName],
      funcObj,
    );
  }
};

// TODO: Fix this the next time the file is edited
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addPlatformFunctionsToEvalContext = (context: any) => {
  for (const fnDef of getPlatformFunctions()) {
    addFn(context, fnDef.name, fnDef.fn.bind(context));
  }
};

export function getAllSetterFunctions(
  dataTree: any,
  configTree: any,
) {
  const entitiesSetterFunctions: Record<string, true> = {};
  const dataTreeEntries = Object.entries(dataTree);

  for (const [entityName, entity] of dataTreeEntries) {
    const entityConfig = configTree[entityName];
    const entityMethodMap: any = setters.getEntitySettersFromConfig(
      entityConfig,
      entityName,
      entity as any,
    );

    if (isEmpty(entityMethodMap)) continue;

    for (const methodName of Object.keys(entityMethodMap)) {
      entitiesSetterFunctions[`${entityName}.${methodName}`] = true;
    }
  }

  return entitiesSetterFunctions;
}

export function getEntitySetterFunctions(
  entityConfig: any,
  entityName: string,
  entity: any,
) {
  const entitySetterFunctions: Record<string, true> = {};
  const entityMethodMap = setters.getEntitySettersFromConfig(
    entityConfig,
    entityName,
    entity,
  );

  for (const methodName of Object.keys(entityMethodMap)) {
    entitySetterFunctions[`${entityName}.${methodName}`] = true;
  }

  return entitySetterFunctions;
}

export const getAllAsyncFunctions = (
  dataTree: any,
  configTree: any,
) => {
  let allAsyncFunctions: Record<string, true> = {};
  const dataTreeEntries = Object.entries(dataTree);

  for (const [entityName, entity] of dataTreeEntries) {
    for (const entityFn of getEntityFunctions()) {
      if (!entityFn.qualifier(entity)) continue;

      const fullPath = `${entityFn.path || `${entityName}.${entityFn.name}`}`;

      allAsyncFunctions[fullPath] = true;
    }
  }

  const setterMethods = getAllSetterFunctions(dataTree, configTree);

  allAsyncFunctions = { ...allAsyncFunctions, ...setterMethods };

  for (const platformFn of getPlatformFunctions()) {
    allAsyncFunctions[platformFn.name] = true;
  }

  return allAsyncFunctions;
};

export const removeEntityFunctionsFromEvalContext = (
  entityFunctionCollection: Record<string, Record<string, Function>>,
  evalContext: any,
) => {
  for (const [entityName, funcObj] of Object.entries(
    entityFunctionCollection,
  )) {
    const entity = klona(evalContext[entityName]);

    Object.keys(funcObj).forEach((entityFn) => {
      delete entity[entityFn];
    });
    evalContext[entityName] = entity;
  }
};
