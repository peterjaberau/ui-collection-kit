import { isObject, isArray, _get, _has, isFunction, isObjType } from '../utils';

const executeCallBack = (watchItem: any, value: any, path: string, index?: any) => {
  if (isFunction(watchItem)) {
    try {
      watchItem(value, index);
    } catch (error) {
      console.log(`${path} corresponding to the watch function execution error:`, error);
    }
  }

  if (isFunction(watchItem?.handler)) {
    try {
      watchItem.handler(value, index);
    } catch (error) {
      console.log(`${path} corresponding to the watch function execution error:`, error);
    }
  }
};

const traverseValues = ({ changedValues, allValues, flatValues }: any) => {
  const traverseArray = (list: any[], fullList: any, path: string, index: number[]) => {
    if (!list.length) {
      return;
    }

    const _path = (path += '[]');
    const filterLength = list.filter((item) => item || item === undefined).length;

    let flag = filterLength !== fullList.length || list.length === 1;
    let isRemove = false;
    if (filterLength > 1 && filterLength < fullList.length) {
      flag = false;
      isRemove = true;
    }

    list.forEach((item: any, idx: number) => {
      if (!isRemove) {
        flatValues[_path] = { value: fullList[idx], index };
      }
      if (isObject(item)) {
        traverseObj(item, fullList[idx], _path, [...index, idx], !flag);
      }
      if (isArray(item)) {
        traverseArray(item, fullList[idx], _path, [...index, idx]);
      }
    });
  };

  const traverseObj = (obj: any, fullObj: any, path: string, index: number[], flag?: boolean) => {
    Object.keys(obj).forEach((key: string) => {
      const item = obj[key];
      const fullItem = fullObj?.[key];
      let value = item;

      const _path = path ? path + '.' + key : key;

      let last = true;

      if (isArray(item)) {
        value = fullItem ? [...fullItem] : fullItem;
        last = false;
        traverseArray(item, fullItem, _path, index);
      }

      if (isObject(item)) {
        last = false;
        traverseObj(item, fullItem, _path, index, flag);
      }

      if (!last || !flag) {
        flatValues[_path] = { value, index };
      }
    });
  };

  traverseObj(changedValues, allValues, null as any, []);
};

export const valuesWatch = (changedValues: any, allValues: any, watch: any) => {
  if (Object.keys(watch || {})?.length === 0) {
    return;
  }

  const flatValues = {
    '#': { value: allValues, index: changedValues },
  };

  traverseValues({ changedValues, allValues, flatValues });

  Object.keys(watch).forEach((path) => {
    if (!_has(flatValues, path)) {
      return;
    }
    const { value, index } = _get(flatValues, path) as { value: any; index: any };
    const item = watch[path];
    executeCallBack(item, value, path, index);
  });
};

export const transformFieldsData = (_fieldsError: any, getFieldName: any) => {
  let fieldsError = _fieldsError;
  if (isObject(fieldsError)) {
    fieldsError = [fieldsError];
  }

  if (!(isArray(fieldsError) && fieldsError.length > 0)) {
    return;
  }

  return fieldsError.map((field: any) => ({ errors: field.error, ...field, name: getFieldName(field.name) }));
};

export const immediateWatch = (watch: any, values: any) => {
  if (Object.keys(watch || {})?.length === 0) {
    return;
  }

  const watchObj: any = {};
  Object.keys(watch).forEach((key) => {
    const watchItem = watch[key];
    if (watchItem?.immediate && isFunction(watchItem?.handler)) {
      watchObj[key] = watchItem;
    }
  });

  valuesWatch(values, values, watchObj);
};

export const getSchemaFullPath = (path: string, schema: any) => {
  if (!path || !path.includes('.')) {
    return 'properties.' + path;
  }

  //Complete list type path path
  while (path.includes('[]')) {
    const index = path.indexOf('[]');
    path = path.substring(0, index) + '.items' + path.substring(index + 2);
  }

  //Complete object type path path
  let result = 'properties';
  const pathList = path.split('.');
  pathList.forEach((item, index) => {
    const key = result + '.' + item;
    const itemSchema = _get(schema, key, {});
    if (isObjType(itemSchema) && index !== pathList.length - 1) {
      result = key + '.properties';
      return;
    }
    result = key;
  });

  return result;
};

export function yymmdd(timeStamp: any) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = (num: any) => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function msToTime(duration: any) {
  let seconds: any = Math.floor((duration / 1000) % 60);
  let minutes: any = Math.floor((duration / (1000 * 60)) % 60);
  let hours: any = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export const getSessionItem = (key: string) => {
  return Number(sessionStorage.getItem(key) || 0);
};

export const setSessionItem = (key: string, data: any) => {
  sessionStorage.setItem(key, data + '');
};
