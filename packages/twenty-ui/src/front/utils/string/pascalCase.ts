import camelCase from 'lodash.camelcase';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const pascalCase = (str: string) => capitalize(camelCase(str));
