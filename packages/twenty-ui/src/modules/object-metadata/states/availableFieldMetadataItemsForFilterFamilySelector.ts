import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { getFilterFilterableFieldMetadataItems } from '@twenty-modules/object-metadata/utils/getFilterFilterableFieldMetadataItems';
import { checkIfFeatureFlagIsEnabledOnWorkspace } from '@twenty-modules/workspace/utils/checkIfFeatureFlagIsEnabledOnWorkspace';
import { selectorFamily } from 'recoil';
import { FeatureFlagKey } from '@twenty-ui/front/generated-metadata/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const availableFieldMetadataItemsForFilterFamilySelector =
  selectorFamily({
    key: 'availableFieldMetadataItemsForFilterFamilySelector',
    get:
      ({ objectMetadataItemId }: { objectMetadataItemId: string }) =>
      ({ get }) => {
        const currentWorkspace = get(currentWorkspaceState);
        const objectMetadataItems = get(objectMetadataItemsState);

        const objectMetadataItem = objectMetadataItems.find(
          (item) => item.id === objectMetadataItemId,
        );

        if (!isDefined(objectMetadataItem)) {
          return [];
        }

        const isJsonFeatureFlagEnabled = checkIfFeatureFlagIsEnabledOnWorkspace(
          FeatureFlagKey.IsJsonFilterEnabled,
          currentWorkspace,
        );

        const filterFilterableFieldMetadataItems =
          getFilterFilterableFieldMetadataItems({
            isJsonFilterEnabled: isJsonFeatureFlagEnabled,
          });

        const availableFieldMetadataItemsForFilter =
          objectMetadataItem.fields.filter(filterFilterableFieldMetadataItems);

        return availableFieldMetadataItemsForFilter;
      },
  });
