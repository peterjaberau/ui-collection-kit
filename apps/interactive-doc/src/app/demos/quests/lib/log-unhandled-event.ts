import type { AnyActorRef, AnyEventObject } from "xstate";


export function logUnhandledEvent({
  captureException,
  event,
  self,
}: {
  captureException: any;
  event: AnyEventObject;
  self: AnyActorRef;
}) {
  if (event.type.startsWith("xstate.")) {
    return;
  }
  let name: string;
  if (typeof self.src === "string") {
    name = self.src;
  } else if (typeof self.src === "object" && "id" in self.src) {
    name = (self.src as { id: string }).id;
  } else {
    name = "";
  }

  const snapshot = self.getSnapshot() as { value: unknown };
  captureException(new Error("Unhandled event in state machine"), {
    machine_name: name,
    machine_state: JSON.stringify(snapshot.value),
    scopes: ["workspace"],
    unhandled_event: event.type,
  });
}
