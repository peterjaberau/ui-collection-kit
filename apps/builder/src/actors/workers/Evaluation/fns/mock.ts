import { ENTITY_TYPE } from "#actor-constants";
import { createEvaluationContext } from "workers/Evaluation/evaluate";

const dataTree: any = {
  action1: {
    actionId: "123",
    data: {},
    config: {},
    datasourceUrl: "",
    isLoading: false,
    run: {},
    clear: {},
    responseMeta: { isExecutionSuccess: false },
    ENTITY_TYPE: ENTITY_TYPE.ACTION,
  },
};

export const evalContext = createEvaluationContext({
  dataTree,
  isTriggerBased: true,
  context: {},
});
