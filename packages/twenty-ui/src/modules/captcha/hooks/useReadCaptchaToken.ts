import { useRecoilCallback } from 'recoil';

import { captchaTokenState } from '@twenty-modules/captcha/states/captchaTokenState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useReadCaptchaToken = () => {
  const readCaptchaToken = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const existingCaptchaToken = snapshot
          .getLoadable(captchaTokenState)
          .getValue();

        if (isDefined(existingCaptchaToken)) {
          return existingCaptchaToken;
        }
      },
    [],
  );

  return { readCaptchaToken };
};
