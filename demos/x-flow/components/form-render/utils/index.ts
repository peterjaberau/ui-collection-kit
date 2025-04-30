import { isMatch, some, set, get, cloneDeep, has as _has, merge, mergeWith, isUndefined, omitBy } from 'lodash-es';

export const _set = set;
export const _get: any = get;
export const _cloneDeep = cloneDeep;
// export const _has = has;
export { _has };
export const _merge = merge;
export const _mergeWith = mergeWith;
export const _isUndefined = isUndefined;
export const _omitBy: any = omitBy;
export const _some: any = some;
export const _isMatch = isMatch;

export const isObject = (data: any) => {
  const str = Object.prototype.toString.call(data);
  return str.indexOf('Object') > -1;
};

export const isArray = (data: any) => {
  const str = Object.prototype.toString.call(data);
  return str.indexOf('Array') > -1;
};

export const isFunction = (data: any) => typeof data === 'function';

export function isUrl(string: string) {
  const protocolRE = /^(?:\w+:)?\/\/(\S+)$/;
  // const domainRE = /^[^\s\.]+\.\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export const isNumber = (str: string | number) => !isNaN(Number(str));

export const getArray = (arr: any, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export function getFormat(format: any) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

// TODO: to support case that item is not an object
export function isObjType(schema: any) {
  //return schema?.type === 'object' && schema.properties && !schema.widget;
  return schema?.type === 'object' && schema?.properties && schema?.widgetType !== 'field';
}

export function isListType(schema: any) {
  return schema?.type === 'array' && isObjType(schema?.items) && schema?.enum === undefined;
}

export function isCheckBoxType(schema: any, readOnly: boolean) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

export const translation = (configCtx: any) => (key: string) => {
  const locale = configCtx?.locale.FormRender;
  return locale[key];
};

export const hasFuncProperty = (obj: any) => {
  return _some(obj, (value: any) => {
    if (isFunction(value)) {
      return true;
    }
    if (isObject(value)) {
      return hasFuncProperty(value);
    }
    return false;
  });
};

/**
 * Safely get the value of an object, if the value is null or undefined, return defaultValue.
 *
 * @param {Object} object - the object to get the value of.
 * @param {string|Array} path - the path to get, can be a string or array.
 * @param {*} [defaultValue] - if the value is null or undefined, return defaultValue.
 * @returns {*} - returns the value obtained, or the default value.
 */
export const safeGet = (object: any, path: string, defaultValue: any) => {
  return get(object, path, defaultValue) ?? defaultValue;
};
