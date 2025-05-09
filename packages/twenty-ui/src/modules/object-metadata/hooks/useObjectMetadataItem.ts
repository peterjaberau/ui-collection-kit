import { useRecoilValue } from 'recoil';

import { ObjectMetadataItemNotFoundError } from '@twenty-modules/object-metadata/errors/ObjectMetadataNotFoundError';
import { objectMetadataItemFamilySelector } from '@twenty-modules/object-metadata/states/objectMetadataItemFamilySelector';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';

import { isWorkflowRelatedObjectMetadata } from '@twenty-modules/object-metadata/utils/isWorkflowRelatedObjectMetadata';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import { FeatureFlagKey } from '@twenty-ui/front/generated-metadata/graphql';
import { ObjectMetadataItemIdentifier } from '../types/ObjectMetadataItemIdentifier';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useObjectMetadataItem = ({
  objectNameSingular,
}: ObjectMetadataItemIdentifier) => {
  const objectMetadataItem = useRecoilValue(
    objectMetadataItemFamilySelector({
      objectName: objectNameSingular,
      objectNameType: 'singular',
    }),
  );

  const isWorkflowEnabled = useIsFeatureEnabled(
    FeatureFlagKey.IsWorkflowEnabled,
  );

  const isWorkflowToBeFiltered =
    !isWorkflowEnabled && isWorkflowRelatedObjectMetadata(objectNameSingular);

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  if (isWorkflowToBeFiltered) {
    throw new Error(
      'Workflow is not enabled. If you want to use it, please enable it in the lab.',
    );
  }

  if (!isDefined(objectMetadataItem)) {
    throw new ObjectMetadataItemNotFoundError(
      objectNameSingular,
      objectMetadataItems,
    );
  }

  return {
    objectMetadataItem,
  };
};
