import { get } from 'lodash-es';
import { isObject, _cloneDeep, isArray } from '../utils/index';
import { createDataSkeleton } from './formDataSkeleton';

export const isExpression = (str: string) => {
  if (typeof str !== 'string') {
    return false;
  }

  // @ts-ignore
  const pattern = /^{\s*{(.+)}\s*}$/s;
  const reg1 = /^{\s*{function\(.+}\s*}$/;
  return str.match(pattern) && !str.match(reg1);
};

export const isHasExpression = (schema: any) => {
  const result = Object.keys(schema).some((key: string) => {
    const item = schema[key];

    // The subprotocol does not do recursive confirmation
    if (key === 'properties') {
      return false;
    }

    const recursionArray = (list: any[]) => {
      const result = list.some((ite) => {
        if (isArray(ite)) {
          return recursionArray(ite);
        }

        if (isObject(ite)) {
          return isHasExpression(ite);
        }
        return isExpression(ite);
      });
      return result;
    };

    if (isArray(item)) {
      return recursionArray(item);
    }

    if (isObject(item)) {
      return isHasExpression(item);
    }

    return isExpression(item);
  });

  return result;
};

const parseFunc = (funcBody: string) => {
  const funcBodyTemp = funcBody.replace(/(\.|\?\.)/g, '?.'); // Replace . and ?. with ?.
  const funcBodyStr = funcBodyTemp.replace(/(\d+)\?\.(\d+)/g, '$1.$2'); // Exclude the ? in the number.
  const result = [...funcBodyStr].reduce((acc, char, index) => {
    if (char === '[') {
      if (index > 0 && funcBodyStr[index - 1] !== '\n') {
        // Exclude the beginning []
        return `${acc}?.${char}`;
      }
    }
    return `${acc}${char}`;
  }, '');
  return result;
};

export const parseExpression = (func: any, formData = {}, parentPath: string | []) => {
  const parentData = get(formData, parentPath) || {};

  if (typeof func === 'string') {
    const funcBody = func
      .replace(/^{\s*{/g, '')
      .replace(/}\s*}$/g, '')
      .trim();
    let isHandleData = funcBody?.startsWith('formData') || funcBody?.startsWith('rootValue');

    let funcBodyStr = isHandleData ? parseFunc(funcBody) : funcBody;

    const funcStr = `
      return ${funcBodyStr
        .replace(/formData/g, JSON.stringify(formData))
        .replace(/rootValue/g, JSON.stringify(parentData))}
    `;
    try {
      const result = Function(funcStr)();
      return result;
    } catch (error) {
      console.log(error, funcStr, parentPath);
      return null; // If the calculation is wrong, return null is the most appropriate
    }
  }

  return func;
};

export function getRealDataPath(path: any) {
  if (typeof path !== 'string') {
    throw Error(`id ${path} is not a string!!! Something wrong here`);
  }

  if (path.match(/[$]void_[^.]+$/)) {
    return undefined;
  }

  return path.replace(/[$]void_[^.]+./g, '');
}

export function getValueByPath(formData: any, path: any) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    const realPath = getRealDataPath(path);
    return realPath && get(formData, realPath);
  } else {
    console.error('path has to be a string');
  }
}

export const parseAllExpression = (_schema: any, _formData: any, dataPath: string, formSchema?: any) => {
  const schema = _cloneDeep(_schema);
  let formData = _formData;
  if (formSchema) {
    formData = createDataSkeleton(formSchema, formData);
  }

  const recursionArray: any = (list: any[]) => {
    const result = list.map((item) => {
      if (isArray(item)) {
        return recursionArray(item);
      }
      if (isObject(item)) {
        return parseAllExpression(item, formData, dataPath);
      }

      if (isExpression(item)) {
        return parseExpression(item, formData, dataPath);
      }
      return item;
    });

    return result;
  };

  Object.keys(schema).forEach((key) => {
    const value = schema[key];

    if (isArray(value)) {
      schema[key] = recursionArray(value);
    }
    if (isObject(value) && (value.mustacheParse ?? true)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseExpression(value, formData, dataPath);
    }
  });

  return schema;
};
