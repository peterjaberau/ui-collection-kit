import { ApiConfig } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const apiConfigState = createState<ApiConfig | null>({
  key: 'apiConfigState',
  defaultValue: null,
});
