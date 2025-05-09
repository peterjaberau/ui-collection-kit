import { atom } from 'recoil';
import { PublicFeatureFlag } from '@twenty-ui/front/generated/graphql';

export const labPublicFeatureFlagsState = atom<PublicFeatureFlag[]>({
  key: 'labPublicFeatureFlagsState',
  default: [],
});
