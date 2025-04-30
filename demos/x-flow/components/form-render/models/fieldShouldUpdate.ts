import { parseExpression } from './expression';

// Extract the string starting with formData.
const extractFormDataStrings = (list: string[]) => {
  let result: any = [];
  list.forEach((str) => {
    // TODO: Why do we need to disassemble it to get it?
    // const regex = /formData.\w+(.\w+)*(\(.*\))?/g; // Match formData. followed by a combination of letters, numbers, and underscores
    // const regex = /formData(\.\w+|\[\w+\])(\.\w+|\[\w+\])*/g; // 1. Match two formats at the same time
    const regex = /formData(\.\w+|\[(['"])?\w+\2?\])*(\.\w+)?/g; // 1. Support formData.xx format and formData[] format. Variable names in [] can only contain letters, numbers, and underscores (_)
    const matches = str.match(regex);
    if (matches) {
      result = result.concat(matches);
    }
  });

  return result;
};

// Extract the string starting with rootValue.
const extractRootValueStrings = (list: string[]) => {
  let result: any = [];
  list.forEach((str) => {
    // const regex = /rootValue.\w+(.\w+)*(\(.*\))?/g; // Match formData. Followed by a combination of letters, numbers, and underscores
    // const regex = /rootValue(\.\w+|\[\w+\])(\.\w+|\[\w+\])*/g; // 1. Match two formats at the same time
    const regex = /rootValue(\.\w+|\[(['"])?\w+\2?\])*(\.\w+)?/g; // 1. Support rootValue.xx format and rootValue[] format. Variable names in [] can only contain letters, numbers, and underscores (_)
    const matches = str.match(regex);
    if (matches) {
      result = result.concat(matches);
    }
  });
  return result;
};

// Extract the contents of {{ }}
const findStrList = (str: any, type: string) => {
  const regex = /{{(.*?)}}/g;
  const matches = [];
  let match;
  while ((match = regex.exec(str)) !== null) {
    matches.push(match[1]);
  }

  if (type === 'formData') {
    return extractFormDataStrings(matches);
  }

  if (type === 'rootValue') {
    return extractRootValueStrings(matches);
  }
  return [];
};

const getListEveryResult = (list: string[], preValue: any, nextValue: any, dataPath: string) => {
  return list.every((item) => {
    const pre = parseExpression(item, preValue, dataPath);
    const curr = parseExpression(item, nextValue, dataPath);
    return pre === curr;
  });
};

// @ts-ignore
export default (str: string, dataPath: string, dependencies: any[], shouldUpdateOpen?: boolean) =>
  (preValue: any, nextValue: any) => {
    // dependencies are not processed yet
    if (dependencies) {
      return true;
    }

    const formDataList = findStrList(str, 'formData');
    const rootValueList = findStrList(str, 'rootValue');
    const formDataRes = getListEveryResult(formDataList, preValue, nextValue, dataPath);
    const rootValueRes = getListEveryResult(rootValueList, preValue, nextValue, dataPath);

    if (formDataRes && rootValueRes) {
      return false;
    }

    return true;
  };
