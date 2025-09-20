"use client";

import React, { createContext, useContext, useState } from "react";
import { useSelector } from "@xstate/react";
import { createActor } from "xstate";
import { jsonataMachine } from "./jsonata.machine";
import type { ActorRefFrom } from "xstate";

type JsonataActor = ActorRefFrom<typeof jsonataMachine>;

const JsonataContext = createContext<JsonataActor | undefined>(undefined);

export const JsonataProvider = ({ children }: { children: React.ReactNode }) => {
  const [jsonataActor] = useState(() => createActor(jsonataMachine).start());

  return (
    <JsonataContext.Provider value={jsonataActor}>
      {children}
    </JsonataContext.Provider>
  );
};

// The hook is updated to use useSelector
export const useJsonata = () => {
  const jsonataActor = useContext(JsonataContext);

  if (!jsonataActor) {
    throw new Error("useJsonata must be used within a JsonataProvider");
  }

  // Use the useSelector hook for an efficient, granular subscription to the actor's state.
  // This replaces `useActor`.
  const state = useSelector(jsonataActor, (snapshot) => snapshot);

  /*


   datasets: storedState.datasets,
    expressionSets: storedState.expressionSets,
    activeDatasetKey: initialDatasetKey,
    activeExpressionSetKey: storedState.lastSelectedExpressionSet || null,
    dataCode: initialDataCode,
    expressionCode: '// Select an expression',
    resultCode: '// Result will appear here',
    error: null,
   */





  return {
    state,
    context: state.context,
    datasets: state.context.datasets,
    expressionSets: state.context.expressionSets,
    activeDatasetKey: state.context.activeDatasetKey,
    activeExpressionSetKey: state.context.activeExpressionSetKey,
    dataCode: state.context.dataCode,
    expressionCode: state.context.expressionCode,
    resultCode: state.context.resultCode,
    expressions: state.context.expressions,
    error: state.context.error,
    isLoading: state.matches("evaluating"),
    send: jsonataActor.send,
  };
};
