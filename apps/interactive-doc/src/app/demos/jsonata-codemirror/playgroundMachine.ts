import { setup } from "xstate";
import jsonata from "jsonata";

// Define context type
interface PlaygroundContext {
  jsonInput: string;
  formula: string;
  result: string;
}

// Define events type
type PlaygroundEvent =
  | { type: "UPDATE_JSON"; value: string }
  | { type: "UPDATE_FORMULA"; value: string }
  | { type: "RUN" }
  | { type: "LOAD_EXAMPLE"; data: string; formula: string };

// Create machine
export const playgroundMachine = setup({
  types: {
    context: {} as PlaygroundContext,
    events: {} as PlaygroundEvent,
  },
}).createMachine<any>({
  id: "playground",
  context: {
    jsonInput: "{}",
    formula: "",
    result: "",
  },
  on: {
    UPDATE_JSON: {
      actions: ({ context, event }: any) => {
        context.jsonInput = event.value;
      },
    },
    UPDATE_FORMULA: {
      actions: ({ context, event }: any) => {
        context.formula = event.value;
      },
    },
    LOAD_EXAMPLE: {
      actions: ({ context, event, self }: any) => {
        context.jsonInput = event.data;
        context.formula = event.formula;
        // immediately run after loading example
        self.send({ type: "RUN" });
      },
    },
    RUN: {
      actions: ({ context }: any) => {
        try {
          const data = JSON.parse(context.jsonInput);
          const expr = jsonata(context.formula);
          const evalResult = expr.evaluate(data);

          if (evalResult === undefined) {
            context.result = "null";
          } else if (typeof evalResult === "string") {
            context.result = evalResult;
          } else {
            context.result = JSON.stringify(evalResult, null, 2);
          }
        } catch (err: any) {
          context.result = `Error: ${err.message}`;
        }
      },
    },
  },
});
