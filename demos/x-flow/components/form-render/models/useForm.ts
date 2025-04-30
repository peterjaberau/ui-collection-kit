import { useRef } from 'react';
import { Form } from 'antd';
import { cloneDeep } from 'lodash-es';

import { transformFieldsData, getSchemaFullPath } from './formCoreUtils';
import { parseBindToValues, parseValuesToBind } from './bindValues';
import {
  _isMatch,
  _set,
  _get,
  _has,
  _merge,
  _mergeWith,
  isFunction,
  isObject,
  isArray,
  _isUndefined,
  hasFuncProperty,
} from '../utils';
import filterValuesUndefined from './filterValuesUndefined';
import filterValuesHidden from './filterValuesHidden';
import { flattenSchema as flatten } from './flattenSchema';
import type { FormInstance } from '../type';

const updateSchemaByPath = (_path: string, _newSchema: any, formSchema: any) => {
  const path = getSchemaFullPath(_path, formSchema);
  const currSchema = _get(formSchema, path, {});
  const newSchema = isFunction(_newSchema) ? _newSchema(currSchema) : _newSchema;

  const result = {
    ...currSchema,
    ...newSchema,
  };

  if (newSchema.props) {
    result.props = {
      ...currSchema?.props,
      ...newSchema.props,
    };
  }

  _set(formSchema, path, result);
};

const getFieldName = (_path: any): any => {
  if (!_path) {
    return undefined;
  }

  if (typeof _path === 'boolean') {
    return _path;
  }

  let result: any[] = [];

  if (isArray(_path)) {
    result = _path.map((item: any) => {
      return item.split('.').map((ite: any) => {
        if (!isNaN(Number(ite))) {
          return ite * 1;
        }
        return ite;
      });
    });
  }

  result = _path.split('.').map((item: any) => {
    if (!isNaN(Number(item))) {
      return item * 1;
    }
    return item;
  });

  result = result.map((item) => {
    if (typeof item === 'string' && item?.indexOf('[') === 0 && item?.indexOf(']') === item?.length - 1) {
      return Number(item.substring(1, item.length - 1));
    }
    return item;
  });

  return result;
};

const useForm = () => {
  const [form] = Form.useForm();

  const flattenSchemaRef: any = useRef({});
  const storeRef: any = useRef(null);
  const schemaRef: any = useRef({});
  const fieldRefs: any = useRef({});

  const {
    getFieldError,
    getFieldsError,
    getFieldInstance,
    setFieldsValue,
    setFields,
    scrollToField,
    isFieldsTouched,
    isFieldTouched,
    isFieldValidating,
    resetFields,
    validateFields,
    ...otherForm
  } = form;

  const xform: any = otherForm;

  const setStoreData = (data: any) => {
    const { setState } = storeRef.current;

    if (!setState) {
      setTimeout(() => {
        setState({ schema: schemaRef.current, flattenSchema: flattenSchemaRef.current });
      }, 0);
    }
    setState(data);
  };

  // Update the protocol
  const handleSchemaUpdate = (newSchema: any) => {
    // form.__schema = Object.freeze(newSchema);
    flattenSchemaRef.current = flatten(newSchema) || {};
    schemaRef.current = newSchema;
    setStoreData({ schema: newSchema, flattenSchema: flattenSchemaRef.current });
  };

  // Set up the protocol
  xform.setSchema = (obj: any, cover = false) => {
    if (!isObject(obj)) {
      return;
    }

    if (cover) {
      handleSchemaUpdate(obj);
      return;
    }

    const schema = cloneDeep(schemaRef.current);
    Object.keys(obj || {}).forEach((path) => {
      updateSchemaByPath(path, obj[path], schema);
    });

    handleSchemaUpdate(schema);
  };

  // Set the protocol for a field
  xform.setSchemaByPath = (_path: string, _newSchema: any) => {
    // diff determines whether an update is needed, and skips if there is a function
    if (!hasFuncProperty(_newSchema) && _isMatch(_newSchema, xform.getSchemaByPath(_path))) {
      return;
    }

    const schema = cloneDeep(schemaRef.current);
    updateSchemaByPath(_path, _newSchema, schema);
    handleSchemaUpdate(schema);
  };

  // form.setSchemaByFullPath = (path: string, newSchema: any) => {
  //   const schema = _cloneDeep(schemaRef.current);
  //   const currSchema = _get(schema, path, {});

  //   const result = _mergeWith(currSchema, newSchema, (objValue, srcValue, key) => {
  //     return srcValue;
  //   });

  //   _set(schema, path, result);
  // handleSchemaUpdate(schema);
  // }

  // Set the form data
  xform.setValues = (_values: any) => {
    const values = parseBindToValues(_values, flattenSchemaRef.current);
    setFieldsValue(values);
  };

  // Get form data
  xform.getValues = (
    nameList?: any,
    filterFunc?: any,
    notFilterUndefined?: boolean,
    notFilterHideData: boolean = true,
  ) => {
    let values = cloneDeep(form.getFieldsValue(getFieldName(nameList), filterFunc));
    const { removeHiddenData } = storeRef.current?.getState() || {};
    if (notFilterHideData && removeHiddenData) {
      values = filterValuesHidden(values, flattenSchemaRef.current);
    }
    if (!notFilterUndefined) {
      values = filterValuesUndefined(values);
    }
    return parseValuesToBind(values, flattenSchemaRef.current);
  };

  xform.getValueByPath = (path: string) => {
    const name = getFieldName(path);
    return form.getFieldValue(name);
  };

  // Set the value of a field
  xform.setValueByPath = (path: string, value: any) => {
    if (!form.setFieldValue) {
      const values = form.getFieldsValue();
      _set(values, path, value);
      xform.setValues(values);
      return;
    }

    const name = getFieldName(path);
    form.setFieldValue(name, value);

    try {
      if (JSON.stringify(form.getFieldValue(name)) !== JSON.stringify(value)) {
        form.setFieldValue(name, value);
      }
    } catch (error) {}
  };

  // Through the schema of a field
  xform.getSchemaByPath = (_path: string) => {
    if (typeof _path !== 'string') {
      console.warn('Please enter the correct path');
    }
    const path = getSchemaFullPath(_path, schemaRef.current);
    return _get(schemaRef.current, path);
  };

  // Get the protocol
  xform.getSchema = () => {
    return schemaRef.current;
  };

  // Set a set of field errors
  xform.setErrorFields = (fieldsError: any[]) => {
    const fieldsData = transformFieldsData(fieldsError, getFieldName);
    if (!fieldsData) {
      return;
    }

    setFields(fieldsData);
  };

  // Clear the error of a field
  xform.removeErrorField = (path: any) => {
    setFields([{ name: getFieldName(path), errors: [] }]);
  };

  // Get the error information of the corresponding field name
  xform.getFieldError = (path: string) => {
    const name = getFieldName(path);
    return form.getFieldError(name);
  };

  // Get the error information corresponding to a set of field names and return it in array form
  xform.getFieldsError = (path: string[]) => {
    const name = getFieldName(path);
    return getFieldsError(name);
  };

  // Get the corresponding field instance
  xform.getFieldInstance = (path: string) => {
    const name = getFieldName(path);
    return getFieldInstance(name);
  };

  // Get hidden field data
  xform.getHiddenValues = () => {
    const values = xform.getValues();
    const allValues = xform.getValues(true);
    const hiddenValues = {};

    const recursion = (obj1: any, obj2: any, path: any) => {
      Object.keys(obj1).forEach((key: string) => {
        const value = obj1[key];
        const _path = path ? `${path}.${key}` : key;
        if (!obj2.hasOwnProperty(key)) {
          _set(hiddenValues, _path, value);
          return;
        }

        if (isObject(value)) {
          recursion(value, obj2[key], _path);
        }

        if (isArray(value)) {
          value.map((item: any, index: number) => {
            recursion(item, _get(obj2, `${key}[${index}]`, []), `${_path}[${index}]`);
          });
        }
      });
    };

    recursion(allValues, values, null);
    return hiddenValues;
  };

  // Set a set of field states
  xform.setFields = (nameList: any[]) => {
    const fieldsData = transformFieldsData(nameList, getFieldName);
    if (!fieldsData) {
      return;
    }
    setFields(fieldsData);
  };

  xform.__initStore = (store: any) => {
    storeRef.current = store;
  };

  //Scroll to the corresponding field position
  xform.scrollToPath = (path: string, ...rest: any[]) => {
    const name = getFieldName(path);
    scrollToField(name, ...rest);
  };

  // Check if a set of fields have been touched by the user. If allTouched is true, check if all fields have been touched.
  xform.isFieldsTouched = (pathList?: string[], allTouched?: boolean) => {
    const nameList = (pathList || []).map((path) => getFieldName(path));
    return isFieldsTouched(nameList, allTouched);
  };

  // Check whether the corresponding field has been operated by the user
  xform.isFieldTouched = (path: string) => {
    const name = getFieldName(path);
    return isFieldTouched(name);
  };

  // Check whether the corresponding field has been operated by the user
  xform.isFieldValidating = (path: string) => {
    const name = getFieldName(path);
    return isFieldValidating(name);
  };

  xform.resetFields = (pathList?: string[]) => {
    const nameList = (pathList || []).map((path) => getFieldName(path));
    if (nameList.length > 0) {
      resetFields(nameList);
    } else {
      resetFields();
    }
  };

  // Trigger form validation
  xform.validateFields = (pathList?: string[], config?: object) => {
    const nameList = (pathList || []).map((path) => getFieldName(path));
    if (nameList.length > 0) {
      return validateFields(nameList, config);
    }
    return validateFields();
  };

  xform.getFlattenSchema = (path?: string) => {
    if (!path) {
      return flattenSchemaRef.current;
    }
    return flattenSchemaRef.current?.[path];
  };

  // Old API compatibility
  xform.onItemChange = xform.setValueByPath;

  xform.setFieldRef = (path: string, ref: any) => {
    if (!path) {
      return;
    }
    fieldRefs.current[path] = ref;
  };

  xform.getFieldRef = (path: string) => {
    return fieldRefs.current[path];
  };

  return xform as FormInstance;
};

export default useForm;
