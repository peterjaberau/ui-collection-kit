import { getDefaultFunctionInputFromInputSchema } from '@twenty-modules/serverless-functions/utils/getDefaultFunctionInputFromInputSchema';
import { getFunctionInputSchema } from '@twenty-modules/serverless-functions/utils/getFunctionInputSchema';
import { FunctionInput } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/types/FunctionInput';
import { isObject } from '@sniptt/guards';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getFunctionInputFromSourceCode = (
  sourceCode?: string,
): FunctionInput => {
  if (!isDefined(sourceCode)) {
    throw new Error('Source code is not defined');
  }

  const functionInputSchema = getFunctionInputSchema(sourceCode);

  const result = getDefaultFunctionInputFromInputSchema(functionInputSchema)[0];

  if (!isObject(result)) {
    return {};
  }

  return result;
};
