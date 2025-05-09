import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';

export type TabVisibilityConfig = {
  ifMobile: boolean;
  ifDesktop: boolean;
  ifInRightDrawer: boolean;
  ifFeaturesDisabled: FeatureFlagKey[];
  ifRequiredObjectsInactive: CoreObjectNameSingular[];
  ifRelationsMissing: string[];
};
