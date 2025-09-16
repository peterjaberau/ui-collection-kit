import { AnyActorRef } from "xstate";




export type EditorMachineContextType = {
  selectedNodeId: string | null;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
  actors: Record<string, AnyActorRef>;
};

export type EditorMachineInputType = {
    inputs: Record<string, any>;
    outputs: Record<string, any>;
    actors: Record<string, AnyActorRef>;
};

export type EditorMachineEventType =
  | {}
  | {
      type: "SET_SELECTED_NODE_ID";
      params: {
        id: string | null;
      };
    }
  | {
      type: "SPAWN";
      params: {
        id: string;
        parentId?: string;
        systemId: string;
        machineId: string;
        input: Record<string, any> & {
          parent?: string;
        };
      };
    }
  | {
      type: "SPAWN_RUN";
      persisted: boolean;
      params: {
        id: string;
        parentId: string;
        systemId: string;
        machineId: string;
        input: Record<string, any> & {
          parent?: string;
        };
      };
    }
  | {
      type: "DESTROY";
      params: {
        id: string;
      };
    }
  | {
      type: "ADD_INPUT_SOCKET";
      params: {
        socket: AnyActorRef;
      };
    }
  | {
      type: "REMOVE_INPUT_SOCKET";
      params: {
        id: string;
      };
    }
  | {
      type: "ADD_OUTPUT_SOCKET";
      params: {
        socket: AnyActorRef;
      };
    }
  | {
      type: "REMOVE_OUTPUT_SOCKET";
      params: {
        id: string;
      };
    }
  | {
      type: "INITIALIZE";
    };
