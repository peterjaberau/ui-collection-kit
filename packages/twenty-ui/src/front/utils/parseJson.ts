import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
export const parseJson = <T>(json: string | undefined | null) => {
  if (!isDefined(json)) {
    return null;
  }

  try {
    return JSON.parse(json) as T;
  } catch (e) {
    return null;
  }
};
