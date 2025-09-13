import set from "lodash/set";
import { traverse } from "./object-utils";
import jsonata from "jsonata";

export const generateOutput = async (input: any, transformers: any) => {
  const output = {};
  for (let [key, value, path, parent] of traverse(transformers)) {
    if (value === null || typeof value !== "object") {
      const inputValue = await jsonata(value).evaluate(input);
      set(output, path, inputValue || null);
    }
  }
  return output;
};
