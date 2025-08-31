import { get, isEmpty, isUndefined, set } from "lodash";
import { getEvalValuePath } from "#actor-utils/DynamicBindingUtils";
import { EvalErrorTypes, DataTreeDiffEvent } from "#actor-constants"
import { parseJSObject, isJSFunctionProperty } from "#actor-lib/ast";
import type DataTreeEvaluator from "#actor-workers/common/DataTreeEvaluator";
import { evaluateSync } from "#actor-workers/Evaluation/evaluate";
import {
  getEntityNameAndPropertyPath,
  isJSAction,
} from "#actor-workers/Evaluation/evaluationUtils";
import {
  removeFunctionsAndVariableJSCollection,
  updateJSCollectionInUnEvalTree,
} from "#actor-workers/Evaluation/JSObject/utils";
import { dataTreeEvaluator } from "../handlers/evalTree";
import JSObjectCollection from "./Collection";
import ExecutionMetaData from "../fns/utils/ExecutionMetaData";
import { jsPropertiesState } from "./jsPropertiesState";
import { getFixedTimeDifference } from "#actor-workers/common/DataTreeEvaluator/utils";


export const getUpdatedLocalUnEvalTreeAfterJSUpdates = (
  jsUpdates: any,
  localUnEvalTree: any,
  configTree: any,
) => {
  if (!isEmpty(jsUpdates)) {
    Object.entries(jsUpdates).forEach(([entityName, jsEntity]: any) => {
      const entity = localUnEvalTree[entityName] as any;
      const parsedBody = jsEntity.parsedBody;

      if (isJSAction(entity)) {
        if (!!parsedBody) {
          //add/delete/update functions from dataTree
          localUnEvalTree = updateJSCollectionInUnEvalTree(
            parsedBody,
            entity,
            localUnEvalTree,
            configTree,
            entityName,
          );
        } else {
          //if parse error remove functions and variables from dataTree
          localUnEvalTree = removeFunctionsAndVariableJSCollection(
            localUnEvalTree,
            entity,
            entityName,
            configTree,
          );
        }
      }
    });
  }

  return localUnEvalTree;
};

export const validJSBodyRegex = new RegExp(/^export default[\s]*?({[\s\S]*?})/);

/**
 * Here we parse the JSObject and then determine
 * 1. it's nature : async or sync
 * 2. Find arguments of JS Actions
 *
 * @param dataTreeEvalRef
 * @param entity
 * @param jsUpdates
 * @param unEvalDataTree
 * @param entityName
 * @returns
 */
export function saveResolvedFunctionsAndJSUpdates(
  dataTreeEvalRef: DataTreeEvaluator,
  entity: any,
  jsUpdates: any,
  unEvalDataTree: any,
  entityName: string,
) {
  jsPropertiesState.delete(entityName);
  const correctFormat =
    entity.hasOwnProperty("body") &&
    !isUndefined(entity.body) &&
    validJSBodyRegex.test(entity.body);
  const isEmptyBody =
    entity.hasOwnProperty("body") &&
    !isUndefined(entity.body) &&
    entity?.body.trim() === "";

  if (!isUndefined(entity.body) && (correctFormat || isEmptyBody)) {
    try {
      JSObjectCollection.deleteResolvedFunction(entityName);
      JSObjectCollection.deleteUnEvalState(entityName);
      JSObjectCollection.clearCachedVariablesForEvaluationContext(entityName);

      const parseStartTime = performance.now();
      const { parsedObject, success } = parseJSObject(entity.body);
      const parseEndTime = performance.now();
      const JSObjectASTParseTime = getFixedTimeDifference(
        parseEndTime,
        parseStartTime,
      );

      dataTreeEvalRef.logs.push({
        JSObjectName: entityName,
        JSObjectASTParseTime,
      });

      const actionsMap: any = {};
      const variablesMap: Record<string, { name: string; value: unknown }> = {};

      if (success) {
        if (!!parsedObject) {
          jsPropertiesState.update(entityName, parsedObject);
          parsedObject.forEach((parsedElement:any) => {
            if (isJSFunctionProperty(parsedElement)) {
              if (actionsMap[parsedElement.key]) return;

              try {
                ExecutionMetaData.setExecutionMetaData({
                  enableJSVarUpdateTracking: false,
                  enableJSFnPostProcessors: false,
                });
                const { result } = evaluateSync(
                  parsedElement.value,
                  unEvalDataTree,
                  false,
                );

                ExecutionMetaData.setExecutionMetaData({
                  enableJSVarUpdateTracking: true,
                  enableJSFnPostProcessors: true,
                });

                if (!!result) {
                  let params: Array<{ name: string; value: unknown }> = [];

                  if (parsedElement.arguments) {
                    params = parsedElement.arguments.map(
                      ({ defaultValue, paramName }: any) => ({
                        name: paramName,
                        value: defaultValue,
                      }),
                    );
                  }

                  const functionString = parsedElement.value;

                  JSObjectCollection.updateResolvedFunctions(
                    `${entityName}.${parsedElement.key}`,
                    result,
                  );
                  JSObjectCollection.updateUnEvalState(
                    `${entityName}.${parsedElement.key}`,
                    functionString,
                  );
                  actionsMap[parsedElement.key] = {
                    name: parsedElement.key,
                    body: functionString,
                    arguments: params,
                  };
                }
              } catch {
                // in case we need to handle error state
              }
            } else if (parsedElement.type !== "literal") {
              // when a jsobject property is of the type "prop1" or 'prop1', ast outputs the
              // key as "\"prop1\"" or "\'prop1\'". We need to remove the extra quotes.
              const isStringRepresentation =
                parsedElement.key.startsWith("'") ||
                parsedElement.key.startsWith('"');
              const parsedKey = isStringRepresentation
                ? parsedElement.key.slice(1, -1)
                : parsedElement.key;

              variablesMap[parsedKey] = {
                name: parsedKey,
                value: parsedElement.value,
              };
              JSObjectCollection.updateUnEvalState(
                `${entityName}.${parsedElement.key}`,
                parsedElement.value,
              );
            }
          });
          const parsedBody = {
            body: entity.body,
            actions: Object.values(actionsMap),
            variables: Object.values(variablesMap),
          };

          set(jsUpdates, `${entityName}`, {
            parsedBody,
            id: entity.actionId,
          });
        } else {
          set(jsUpdates, `${entityName}`, {
            parsedBody: undefined,
            id: entity.actionId,
          });
        }
      }
    } catch (e) {
      dataTreeEvalRef.errors.push({
        type: EvalErrorTypes.PARSE_JS_ERROR,
        message: (e as Error).message,
        stack: (e as Error).stack,
        context: {
          entityType: entity.ENTITY_TYPE,
          propertyPath: entityName + ".body",
        },
      });
    }
  } else {
    const parsedBody = {
      body: entity.body,
      actions: [],
      variables: [],
    };

    set(jsUpdates, `${entityName}`, {
      parsedBody: parsedBody,
      id: entity.actionId,
    });
  }

  if (!correctFormat && !isUndefined(entity.body)) {
    const errors = {
      type: EvalErrorTypes.PARSE_JS_ERROR,
      context: {
        entity: entity,
        propertyPath: entityName + ".body",
      },
      message: "Start object with export default",
    };

    dataTreeEvalRef.errors.push(errors);
  }

  return jsUpdates;
}

export function parseJSActions(
  dataTreeEvalRef: DataTreeEvaluator,
  unEvalDataTree: any,
  oldUnEvalTree?: any,
  differences?: any[],
) {
  const resolvedFunctions = JSObjectCollection.getResolvedFunctions();
  const unEvalState = JSObjectCollection.getUnEvalState();
  let jsUpdates: any = {};

  if (!!differences && !!oldUnEvalTree) {
    differences.forEach((diff) => {
      const { entityName, propertyPath } = getEntityNameAndPropertyPath(
        diff.payload.propertyPath,
      );
      const entity = unEvalDataTree[entityName];

      if (!isJSAction(entity)) return false;

      if (diff.event === DataTreeDiffEvent.DELETE) {
        // when JSObject is deleted, we remove it from currentJSCollectionState & resolvedFunctions
        if (unEvalState && unEvalState[diff.payload.propertyPath]) {
          JSObjectCollection.deleteUnEvalState(diff.payload.propertyPath);
        }

        if (resolvedFunctions && resolvedFunctions[diff.payload.propertyPath]) {
          JSObjectCollection.deleteResolvedFunction(diff.payload.propertyPath);
        }
      }

      if (
        (diff.event === DataTreeDiffEvent.EDIT && propertyPath === "body") ||
        (diff.event === DataTreeDiffEvent.NEW && propertyPath === "")
      ) {
        jsUpdates = saveResolvedFunctionsAndJSUpdates(
          dataTreeEvalRef,
          entity,
          jsUpdates,
          unEvalDataTree,
          entityName,
        );
      }
    });
  } else {
    Object.keys(unEvalDataTree).forEach((entityName) => {
      const entity = unEvalDataTree[entityName];

      if (!isJSAction(entity)) {
        return;
      }

      jsUpdates = saveResolvedFunctionsAndJSUpdates(
        dataTreeEvalRef,
        entity,
        jsUpdates,
        unEvalDataTree,
        entityName,
      );
    });
  }

  Object.keys(jsUpdates).forEach((entityName) => {
    const parsedBody = jsUpdates[entityName].parsedBody;

    if (!parsedBody) return;

    parsedBody.actions = parsedBody.actions.map((action:any) => {
      return {
        ...action,
      } as any;
    });
  });

  return { jsUpdates };
}

export function getJSEntities(dataTree: any) {
  const jsCollections: any = {};

  Object.keys(dataTree).forEach((entityName: string) => {
    const entity = dataTree[entityName];

    if (isJSAction(entity)) {
      jsCollections[entityName] = entity;
    }
  });

  return jsCollections;
}

export function updateEvalTreeWithJSCollectionState(evalTree: any) {
  // loop through jsCollectionState and set all values to evalTree
  const jsCollections = JSObjectCollection.getVariableState();
  const jsCollectionEntries = Object.entries(jsCollections);

  for (const [jsObjectName, variableState] of jsCollectionEntries) {
    if (!evalTree[jsObjectName]) continue;

    evalTree[jsObjectName] = Object.assign(
      evalTree[jsObjectName],
      variableState,
    );
  }
}

export function updateEvalTreeValueFromContext(paths: string[][]) {
  const currentEvalContext = self;

  if (!dataTreeEvaluator) return;

  const evalTree = dataTreeEvaluator.getEvalTree();

  for (const fullPathArray of paths) {
    const [jsObjectName, variableName]: any = fullPathArray;
    const entity = evalTree[jsObjectName];

    if (jsObjectName && variableName && isJSAction(entity)) {
      if (!(jsObjectName in currentEvalContext)) continue;

      const variableValue = get(currentEvalContext, [
        jsObjectName,
        variableName,
      ]);
      const value = variableValue;

      JSObjectCollection.setVariableValue(
        value,
        `${jsObjectName}.${variableName}`,
      );
      /*
      JSobject variable values are picked from evalProps until the unevalValue is not modified.
      Hence, we need to set the value in evalProps to ensure it doesn't have stale values.
      */
      set(
        dataTreeEvaluator.evalProps,
        getEvalValuePath(`${jsObjectName}.${variableName}`, {
          isPopulated: true,
          fullPath: true,
        }),
        value,
      );
    }
  }
}
