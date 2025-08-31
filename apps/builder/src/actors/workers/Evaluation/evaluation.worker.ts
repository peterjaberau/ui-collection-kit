// Workers do not have access to log.error
/* eslint-disable no-console */
import {
  syncHandlerMap,
  asyncHandlerMap,
  transmissionErrorHandlerMap,
} from "./handlers";
import { MessageType } from "#actor-constants";
import { WorkerMessenger } from "./fns/utils/Messenger";

//TODO: Create a more complete RPC setup in the subtree-eval branch.
function syncRequestMessageListener(
  e: any,
) {
  const { messageType } = e.data;

  if (messageType !== MessageType.REQUEST) return;

  const startTime = Date.now();
  const { body, messageId } = e.data;
  const { method } = body;

  if (!method) return;

  const messageHandler = syncHandlerMap[method];

  if (typeof messageHandler !== "function") return;

  const responseData = messageHandler(body);
  const transmissionErrorHandler = transmissionErrorHandlerMap[method];
  const endTime = Date.now();

  WorkerMessenger.respond(
    messageId,
    responseData,
    startTime,
    endTime,
    transmissionErrorHandler,
  );
}

async function asyncRequestMessageListener(
  e: any,
) {
  const { messageType } = e.data;

  if (messageType !== MessageType.REQUEST) return;

  const start = Date.now();
  const { body, messageId } = e.data;
  const { method } = body;

  if (!method) return;

  const messageHandler = asyncHandlerMap[method];

  if (typeof messageHandler !== "function") return;

  const data = await messageHandler(body);
  const end = Date.now();
  const transmissionErrorHandler = transmissionErrorHandlerMap[method];

  WorkerMessenger.respond(
    messageId,
    data,
    start,
    end,
    transmissionErrorHandler,
  );
}

self.addEventListener("message", syncRequestMessageListener);
self.addEventListener("message", asyncRequestMessageListener);

self.addEventListener("error", (e) => {
  e.preventDefault();
  console.error(e.message);
});

self.addEventListener("unhandledrejection", (e) => {
  e.preventDefault();
  // We might want to send this error to the main thread in the future.
  // console error will log the error to the logs tab against trigger field.
  console.error(e.reason.message);
});
