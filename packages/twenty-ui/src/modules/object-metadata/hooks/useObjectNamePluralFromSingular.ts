import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { objectMetadataItemFamilySelector } from '@twenty-modules/object-metadata/states/objectMetadataItemFamilySelector';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { isWorkspaceActiveOrSuspended } from '@ui-collection-kit/twenty-shared/src/workspace';

export const useObjectNamePluralFromSingular = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  let objectMetadataItem = useRecoilValue(
    objectMetadataItemFamilySelector({
      objectName: objectNameSingular,
      objectNameType: 'singular',
    }),
  );

  if (!isWorkspaceActiveOrSuspended(currentWorkspace)) {
    objectMetadataItem =
      generatedMockObjectMetadataItems.find(
        (objectMetadataItem) =>
          objectMetadataItem.nameSingular === objectNameSingular,
      ) ?? null;
  }

  if (!isDefined(objectMetadataItem)) {
    throw new Error(
      `Object metadata item not found for ${objectNameSingular} object`,
    );
  }

  return { objectNamePlural: objectMetadataItem.namePlural };
};
