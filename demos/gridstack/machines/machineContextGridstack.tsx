import { machineGridstack } from "./machineGridstack.ts";
import { createActorContext } from "@xstate/react";

export const MachineContextGridstack = createActorContext(machineGridstack, {
  // inspect
  inspect: (inpectionEvent) => {
    console.log(inpectionEvent);
  },
});

export const MachineProviderGridstack = ({ children }: any) => {
  return <MachineContextGridstack.Provider>{children}</MachineContextGridstack.Provider>;
};
