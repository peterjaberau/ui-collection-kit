import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';

export type FeatureFlag = {
  key: FeatureFlagKey;
  value: boolean;
};
