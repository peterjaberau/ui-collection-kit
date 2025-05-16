import { MachineContextGridstack } from "./machineContextGridstack.tsx"

export const useMachineGridstack: any = () => {

  const actor = MachineContextGridstack.useActorRef();
  const state = MachineContextGridstack.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state,
    components: state.context.components,
    global: state.context.global,
  }
}
