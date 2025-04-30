import Color from 'color';
import { isUrl, isObject, isFunction } from '../utils';
import { cloneDeep } from 'lodash-es';

const insertLengthRule = (schema: any, rules: any[]) => {
  const { type, max, min, message } = schema;

  if (max || max === 0) {
    rules.push({ type, max, message: message?.max });
  }

  if (min || min === 0) {
    rules.push({ type, min, message: message?.min });
  }
};

const insertRequiredRule = (schema: any, rules: any[]) => {
  let {
    type,
    format,
    required,
    message,
    widget,
    title
  } = schema;

  const requiredAlready = schema?.rules?.some((item: any) => item?.required);

  // required is not declared, or required check already exists
  if (!required || requiredAlready) {
    return;
  }

  let rule: any = { required: true, message: message?.required };

  if (['year','quarter', 'month', 'week', 'date', 'dateTime', 'time'].includes(format) && type === 'range') {
    rule = {
      type: 'array',
      required: true,
      only: 2,
      fields: {
        0: { type: 'string', required: true },
        1: { type: 'string', required: true },
      }
    };
  } else if (widget === 'checkbox') {
    rule = { type, required: true,  whitespace: true, message: title + '必填' };
  } else if (type === 'string') {
    rule = { type: 'string', required: true,  whitespace: true, message: message?.required || (!title ? '内容必填' : undefined) };
  }

  rules.push(rule);
};

export const transformRules = (rules = [], methods: any, form: any) => {
  return rules.map(((item: any) => {
    if (item.validator && !item.transformed) {
      const validator = isFunction(item.validator) ? item.validator : methods[item.validator];
      item.validator = async (_: any, value: any) => {
        const result = await validator(_, value, { form });
        if (isObject(result)) {
          return result?.status ? Promise.resolve() : Promise.reject(new Error(result.message || item.message));
        }
        return result ? Promise.resolve() : Promise.reject(new Error(item.message));
      };;
      item.transformed = true;
    }
    return item;
  }));
};

export default (_schema: any, form: any, methods: any, fieldRef: any) => {
  const schema = cloneDeep(_schema);
  let {
    format,
    rules: ruleList = [],
    pattern,
    message,
  } = schema;

  const rules: any = [...ruleList];

  insertRequiredRule(schema, rules);
  insertLengthRule(schema, rules);

  rules.push({
    validator: async (_: any) => {
      if (!isFunction(fieldRef?.current?.validator)) {
        return true;
      }
      const res = await fieldRef.current?.validator();
      return res;
    }
  });

  if (pattern) {
    rules.push({ pattern, message: message?.pattern });
  }

  if (format === 'url') {
    rules.push({ type: 'url', message: message?.url });
  }

  if (format === 'email') {
    rules.push({ type: 'email', message: message?.email });
  }

  if (format === 'image') {
    rules.push({
      validator: (_: any, value: any) => {
        if (!value) {
          return true;
        }
        const imagePattern = '([/|.|w|s|-])*.(?:jpg|gif|png|bmp|apng|webp|jpeg|json)';
        const _isUrl = isUrl(value);
        const _isImg = new RegExp(imagePattern).test(value);
        return _isUrl || _isImg;
      },
      message: message?.email ?? 'Please enter the correct image format'
    });
  }

  if (format === 'color') {
    rules.push({
      validator: (_: any, value: any) => {
        try {
          Color(value || null); // Empty string cannot be parsed and an error will be reported. If it is empty, pass null
          return true;
        } catch (e) {
          return false;
        }
      },
      message: message?.color ?? 'Please fill in the correct color format'
    });
  }

  return transformRules(rules, methods, form);
}
