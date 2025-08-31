import { uniqueId } from "lodash";
import { dataTreeEvaluator } from "../handlers/evalTree";
import ExecutionMetaData from "./utils/ExecutionMetaData";
import { promisify } from "./utils/Promisify";
import TriggerEmitter from "./utils/TriggerEmitter";
import { BatchKey } from "#actor-constants"

export let geoLocationListener: ((e: MessageEvent<any>) => void) | null = null;

function getGeoLocationFnDescriptor(
  successCallback?: (position: GeolocationPosition) => unknown,
  errorCallback?: (err: unknown) => unknown,
  options?: {
    maximumAge?: number;
    timeout?: number;
    enableHighAccuracy?: boolean;
  },
) {
  return {
    type: "GET_CURRENT_LOCATION" as const,
    payload: {
      options,
    },
  };
}


export async function getGeoLocation(...args: Parameters<typeof getGeoLocationFnDescriptor>) {
  const [successCallback, errorCallback, options] = args
  const executor = promisify(getGeoLocationFnDescriptor)
  let response

  try {
    response = await executor(successCallback, errorCallback, options)

    // @ts-ignore
    const geolocation = self.appsmith?.geolocation

    if (geolocation) {
      geolocation.currentPosition = response
    }

    if (typeof successCallback === "function") {
      successCallback(response)

      return
    }
  } catch (e) {
    if (typeof errorCallback === "function") {
      errorCallback(e)

      return
    }

    throw e
  }

  return response
}

function watchGeoLocationFnDescriptor(
  this: any,
  onSuccessCallback?: (...args: any) => any,
  onErrorCallback?: (...args: any) => any,
  options?: {
    maximumAge?: number;
    timeout?: number;
    enableHighAccuracy?: boolean;
  },
) {
  return {
    type: "WATCH_CURRENT_LOCATION" as const,
    payload: {
      options,
      listenerId: this.listenerId,
    },
  };
}

export function watchGeoLocation(...args: any) {
  const metaData = ExecutionMetaData.getExecutionMetaData();
  const [onSuccessCallback, onErrorCallback] = args;
  const listenerId = uniqueId("geoLocationListener_");

  TriggerEmitter.emit(BatchKey.process_batched_triggers, {
    trigger: watchGeoLocationFnDescriptor.apply({ listenerId }, args),
    ...metaData,
  });
  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messageHandler = (event: any) => {
    const message = event.data;

    if (message.messageId !== listenerId) return;

    ExecutionMetaData.setExecutionMetaData(metaData);
    const { body } = message;

    if (!dataTreeEvaluator) throw new Error("No data tree evaluator found");

    ExecutionMetaData.setExecutionMetaData(metaData);
    self["$isDataField"] = false;

    if (body.data) {
      if (typeof onSuccessCallback === "function") onSuccessCallback(body.data);
    } else if (body.error) {
      if (typeof onErrorCallback === "function") onErrorCallback(body.error);

      self.removeEventListener("message", messageHandler);
      geoLocationListener = null;
    }
  };

  self.addEventListener("message", messageHandler);
  geoLocationListener = messageHandler;
}

function stopWatchGeoLocationFnDescriptor(this: any) {
  return {
    type: "STOP_WATCHING_CURRENT_LOCATION" as const,
    payload: {},
  };
}


export async function stopWatchGeoLocation() {
  const executor = promisify(stopWatchGeoLocationFnDescriptor);
  let response;

  try {
    response = await executor();
    geoLocationListener = null;
  } catch (e) {
    throw e;
  }

  return response;
}
