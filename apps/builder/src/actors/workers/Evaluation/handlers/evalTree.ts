import type ReplayEntity from "#actor-workers/core/Replay"
import ReplayCanvas from "#actor-workers/core/Replay/ReplayCanvas"
import { isEmpty } from "lodash"
import { EvalErrorTypes, MessageType } from "#actor-constants"
import DataTreeEvaluator from "workers/common/DataTreeEvaluator"
import type { EvalMetaUpdates } from "#actor-workers/common/DataTreeEvaluator/types"
import { makeEntityConfigsAsObjProperties } from "#actor-workers/Evaluation/dataTreeUtils"
import { serialiseToBigInt, getSafeToRenderDataTree } from "#actor-workers/Evaluation/evaluationUtils"
import { clearAllIntervals } from "../fns/overrides/interval"
import JSObjectCollection from "#actor-workers/Evaluation/JSObject/Collection"
import { getJSVariableCreatedEvents } from "../JSObject/JSVariableEvents"
import { errorModifier } from "../errorModifier"
import { generateOptimisedUpdatesAndSetPrevState, uniqueOrderUpdatePaths, updateEvalProps } from "../helpers"
import DataStore from "../dataStore"
import { sendMessage } from "#actor-utils"

// import {
//   profileFn,
//   newWebWorkerSpanData,
//   profileAsyncFn,
// } from "instrumentation/generateWebWorkerTraces";

import { updateActionsToEvalTree } from "./updateActionData"

export let replayMap: any
export let dataTreeEvaluator: any
export const CANVAS = "canvas"
export let canvasWidgetsMeta: any
export let metaWidgetsCache: any
export let canvasWidgets: any

export async function evalTree(request: any) {
  const { data } = request
  // const { data, webworkerTelemetry } = request;
  // webworkerTelemetry["transferDataToWorkerThread"].endTime = Date.now();

  let evalOrder: string[] = []
  let jsUpdates: any = {}
  let unEvalUpdates: any[] = []
  let isCreateFirstTree = false
  let dataTree: any = {}
  let errors: EvalError[] = []
  let logs: any[] = []
  let dependencies: any = {}
  let evalMetaUpdates: EvalMetaUpdates = []
  let configTree: any = {}
  let staleMetaIds: string[] = []
  let removedPaths: any = []
  let isNewWidgetAdded = false
  let executeReactiveActions: string[] = []

  const {
    actionDataPayloadConsolidated,
    affectedJSObjects,
    allActionValidationConfig,
    appMode,
    cacheProps,
    forceEvaluation,
    metaWidgets,
    shouldReplay,
    shouldRespondWithLogs,
    theme,
    unevalTree: __unevalTree__,
    widgets,
    widgetsMeta,
    widgetTypeConfigMap,
  } = data

  const unevalTree = __unevalTree__.unEvalTree

  configTree = __unevalTree__.configTree as any
  canvasWidgets = widgets
  canvasWidgetsMeta = widgetsMeta
  metaWidgetsCache = metaWidgets
  let isNewTree = false

  try {
    // (webworkerTelemetry.__spanAttributes as any)["firstEvaluation"] =
    //   !dataTreeEvaluator;

    if (!dataTreeEvaluator) {
      isCreateFirstTree = true
      replayMap = replayMap || {}
      replayMap[CANVAS] = new ReplayCanvas({ widgets, theme })
      errorModifier.init(appMode)
      dataTreeEvaluator = new DataTreeEvaluator(widgetTypeConfigMap, allActionValidationConfig)

      // const setupFirstTreeResponse = await profileAsyncFn(
      //   "setupFirstTree",
      //   (dataTreeEvaluator as DataTreeEvaluator).setupFirstTree.bind(
      //     dataTreeEvaluator,
      //     unevalTree,
      //     configTree,
      //     webworkerTelemetry,
      //     cacheProps,
      //   ),
      //   webworkerTelemetry,
      //   { description: "during initialisation" },
      // );

      // evalOrder = setupFirstTreeResponse.evalOrder;
      // jsUpdates = setupFirstTreeResponse.jsUpdates;

      // const dataTreeResponse = profileFn(
      //   "evalAndValidateFirstTree",
      //   { description: "during initialisation" },
      //   webworkerTelemetry,
      //   (dataTreeEvaluator as DataTreeEvaluator).evalAndValidateFirstTree.bind(
      //     dataTreeEvaluator,
      //   ),
      // );

      dataTree = updateEvalProps(dataTreeEvaluator) || {}

      // staleMetaIds = dataTreeResponse.staleMetaIds;
      // executeReactiveActions = dataTreeResponse.executeReactiveActions;
      isNewTree = true
    } else if (dataTreeEvaluator.hasCyclicalDependency || forceEvaluation) {
      if (dataTreeEvaluator && !isEmpty(allActionValidationConfig)) {
        //allActionValidationConfigs may not be set in dataTreeEvaluator. Therefore, set it explicitly via setter method
        dataTreeEvaluator.setAllActionValidationConfig(allActionValidationConfig)
      }

      if (shouldReplay && replayMap) {
        replayMap[CANVAS]?.update({ widgets, theme })
      }

      dataTreeEvaluator = new DataTreeEvaluator(widgetTypeConfigMap, allActionValidationConfig)

      if (dataTreeEvaluator && !isEmpty(allActionValidationConfig)) {
        dataTreeEvaluator.setAllActionValidationConfig(allActionValidationConfig)
      }

      // const setupFirstTreeResponse = await profileAsyncFn(
      //   "setupFirstTree",
      //   (dataTreeEvaluator as DataTreeEvaluator).setupFirstTree.bind(
      //     dataTreeEvaluator,
      //     unevalTree,
      //     configTree,
      //     webworkerTelemetry,
      //     cacheProps,
      //   ),
      //   webworkerTelemetry,
      //   { description: "non-initialisation" },
      // );

      isCreateFirstTree = true
      // evalOrder = setupFirstTreeResponse.evalOrder;
      // jsUpdates = setupFirstTreeResponse.jsUpdates;

      // const dataTreeResponse = profileFn(
      //   "evalAndValidateFirstTree",
      //   { description: "non-initialisation" },
      //   webworkerTelemetry,
      //   () =>
      //     (dataTreeEvaluator as DataTreeEvaluator).evalAndValidateFirstTree(),
      // );

      dataTree = updateEvalProps(dataTreeEvaluator) || {}

      // staleMetaIds = dataTreeResponse.staleMetaIds;
      // executeReactiveActions = dataTreeResponse.executeReactiveActions;
      isNewTree = true
    } else {
      const tree = dataTreeEvaluator.getEvalTree()

      updateActionsToEvalTree(tree, actionDataPayloadConsolidated)

      if (dataTreeEvaluator && !isEmpty(allActionValidationConfig)) {
        dataTreeEvaluator.setAllActionValidationConfig(allActionValidationConfig)
      }

      isCreateFirstTree = false

      if (shouldReplay && replayMap) {
        replayMap[CANVAS]?.update({ widgets, theme })
      }

      // const setupUpdateTreeResponse = profileFn(
      //   "setupUpdateTree",
      //   undefined,
      //   webworkerTelemetry,
      //   () =>
      //     (dataTreeEvaluator as DataTreeEvaluator).setupUpdateTree(
      //       unevalTree,
      //       configTree,
      //       webworkerTelemetry,
      //       affectedJSObjects,
      //       actionDataPayloadConsolidated,
      //     ),
      // );

      // evalOrder = setupUpdateTreeResponse.evalOrder;
      // jsUpdates = setupUpdateTreeResponse.jsUpdates;
      // unEvalUpdates = setupUpdateTreeResponse.unEvalUpdates;
      // removedPaths = setupUpdateTreeResponse.removedPaths;
      // isNewWidgetAdded = setupUpdateTreeResponse.isNewWidgetAdded;

      // const updateResponse = profileFn(
      //   "evalAndValidateSubTree",
      //   undefined,
      //   webworkerTelemetry,
      //   () =>
      //     (dataTreeEvaluator as DataTreeEvaluator).evalAndValidateSubTree(
      //       evalOrder,
      //       configTree,
      //       unEvalUpdates,
      //       Object.keys(metaWidgets),
      //     ),
      // );

      dataTree = updateEvalProps(dataTreeEvaluator) || {}

      // evalMetaUpdates = JSON.parse(
      //   JSON.stringify(updateResponse.evalMetaUpdates),
      // );
      // staleMetaIds = updateResponse.staleMetaIds;
      // executeReactiveActions = updateResponse.executeReactiveActions;
      isNewTree = false
    }

    dependencies = dataTreeEvaluator.inverseDependencies
    errors = dataTreeEvaluator.errors
    dataTreeEvaluator.clearErrors()
    logs = dataTreeEvaluator.logs

    if (shouldReplay && replayMap) {
      if (replayMap[CANVAS]?.logs) logs = logs.concat(replayMap[CANVAS]?.logs)

      replayMap[CANVAS]?.clearLogs()
    }

    dataTreeEvaluator.clearLogs()
  } catch (error) {
    if (dataTreeEvaluator !== undefined) {
      errors = dataTreeEvaluator.errors
      logs = dataTreeEvaluator.logs
    }

    errors.push({
      type: EvalErrorTypes.EVAL_TREE_ERROR,
      message: (error as Error).message,
      stack: (error as Error).stack,
    } as any)

    console.error(error)

    dataTree = getSafeToRenderDataTree(
      makeEntityConfigsAsObjProperties(unevalTree, {
        sanitizeDataTree: false,
        evalProps: dataTreeEvaluator?.evalProps,
      }),
      widgetTypeConfigMap,
      configTree,
    )
    unEvalUpdates = []
    isNewTree = true
  }

  const jsVarsCreatedEvent = getJSVariableCreatedEvents(jsUpdates)

  // const updates = profileFn(
  //   "diffAndGenerateSerializeUpdates",
  //   undefined,
  //   webworkerTelemetry,
  //   () => {
  //     let updates;
  //
  //     if (isNewTree) {
  //       try {
  //         //for new tree send the whole thing, don't diff at all
  //         updates = serialiseToBigInt([{ kind: "newTree", rhs: dataTree }]);
  //         const parsedUpdates = JSON.parse(updates);
  //
  //         dataTreeEvaluator?.setPrevState(parsedUpdates[0].rhs);
  //       } catch (e) {
  //         updates = "[]";
  //
  //         errors.push({
  //           type: EvalErrorTypes.EVAL_TREE_ERROR,
  //           message: (e as Error).message,
  //           stack: (e as Error).stack,
  //         } as any);
  //       }
  //       isNewTree = false;
  //     } else {
  //       const allUnevalUpdates = unEvalUpdates.map(
  //         (update) => update.payload.propertyPath,
  //       );
  //
  //       const completeEvalOrder = uniqueOrderUpdatePaths([
  //         ...allUnevalUpdates,
  //         ...evalOrder,
  //       ]);
  //
  //       updates = generateOptimisedUpdatesAndSetPrevState(
  //         dataTree,
  //         dataTreeEvaluator,
  //         completeEvalOrder,
  //         undefined,
  //         true,
  //       );
  //     }
  //
  //     return updates;
  //   },
  // );

  const evalTreeResponse = {
    // updates,
    dependencies,
    errors,
    evalMetaUpdates,
    evaluationOrder: evalOrder,
    jsUpdates,
    // webworkerTelemetry,
    logs: shouldRespondWithLogs ? logs : [],
    unEvalUpdates,
    isCreateFirstTree,
    staleMetaIds,
    removedPaths,
    isNewWidgetAdded,
    undefinedEvalValuesMap: dataTreeEvaluator?.undefinedEvalValuesMap || {},
    jsVarsCreatedEvent,
    executeReactiveActions,
  }

  // webworkerTelemetry["transferDataToMainThread"] = newWebWorkerSpanData(
  //   "transferDataToMainThread",
  //   {},
  // );

  return evalTreeResponse
}

export const evalTreeTransmissionErrorHandler: any = (
  messageId: string,
  startTime: number,
  endTime: number,
  responseData: unknown,
) => {
  const sanitizedData = JSON.parse(JSON.stringify(responseData))

  sendMessage.call(self, {
    messageId,
    messageType: MessageType.RESPONSE,
    body: { data: sanitizedData, startTime, endTime },
  })
}

export function clearCache() {
  dataTreeEvaluator = undefined
  clearAllIntervals()
  JSObjectCollection.clear()
  DataStore.clear()

  return true
}
