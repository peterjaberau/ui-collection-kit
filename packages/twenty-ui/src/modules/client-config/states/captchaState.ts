import { Captcha } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const captchaState = createState<Captcha | null>({
  key: 'captchaState',
  defaultValue: null,
});
