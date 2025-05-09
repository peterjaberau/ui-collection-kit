import { InputSchemaPropertyType } from '@twenty-modules/workflow/types/InputSchema';
import { BaseOutputSchema } from '@twenty-modules/workflow/workflow-variables/types/StepOutputSchema';
import { isObject } from '@sniptt/guards';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

const getValueType = (value: any): InputSchemaPropertyType => {
  if (!isDefined(value) || value === null) {
    return 'unknown';
  }
  if (typeof value === 'string') {
    return 'string';
  }
  if (typeof value === 'number') {
    return 'number';
  }
  if (typeof value === 'boolean') {
    return 'boolean';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  if (isObject(value)) {
    return 'object';
  }
  return 'unknown';
};

export const getFunctionOutputSchema = (testResult: object) => {
  return testResult
    ? Object.entries(testResult).reduce(
        (acc: BaseOutputSchema, [key, value]) => {
          if (isObject(value) && !Array.isArray(value)) {
            acc[key] = {
              isLeaf: false,
              icon: 'IconVariable',
              value: getFunctionOutputSchema(value),
            };
          } else {
            acc[key] = {
              isLeaf: true,
              value,
              type: getValueType(value),
              icon: 'IconVariable',
              label: key,
            };
          }
          return acc;
        },
        {},
      )
    : {};
};
