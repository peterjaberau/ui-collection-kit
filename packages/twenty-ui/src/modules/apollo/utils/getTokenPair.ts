import { cookieStorage } from '@twenty-ui/front/utils/cookie-storage';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { AuthTokenPair } from '@twenty-ui/front/generated/graphql';

export const getTokenPair = () => {
  const stringTokenPair = cookieStorage.getItem('tokenPair');
  return isDefined(stringTokenPair)
    ? (JSON.parse(stringTokenPair) as AuthTokenPair)
    : undefined;
};
