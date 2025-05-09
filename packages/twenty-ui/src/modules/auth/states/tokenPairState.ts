import { AuthTokenPair } from '@twenty-ui/front/generated/graphql';
import { cookieStorageEffect } from '@twenty-ui/front/utils/recoil-effects';
import { createState } from '@twenty-ui/utilities';

export const tokenPairState = createState<AuthTokenPair | null>({
  key: 'tokenPairState',
  defaultValue: null,
  effects: [
    cookieStorageEffect(
      'tokenPair',
      {},
      {
        validateInitFn: (payload: AuthTokenPair) =>
          Boolean(payload['accessToken']),
      },
    ),
  ],
});
