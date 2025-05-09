import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { objectMetadataItemFamilySelector } from '@twenty-modules/object-metadata/states/objectMetadataItemFamilySelector';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { isWorkspaceActiveOrSuspended } from '@ui-collection-kit/twenty-shared/src/workspace';

export const useObjectNameSingularFromPlural = ({
  objectNamePlural,
}: {
  objectNamePlural: string;
}) => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  let objectMetadataItem = useRecoilValue(
    objectMetadataItemFamilySelector({
      objectName: objectNamePlural,
      objectNameType: 'plural',
    }),
  );

  if (!isWorkspaceActiveOrSuspended(currentWorkspace)) {
    objectMetadataItem =
      generatedMockObjectMetadataItems.find(
        (objectMetadataItem) =>
          objectMetadataItem.namePlural === objectNamePlural,
      ) ?? null;
  }

  if (!isDefined(objectMetadataItem)) {
    throw new Error(
      `Object metadata item not found for ${objectNamePlural} object`,
    );
  }

  return { objectNameSingular: objectMetadataItem.nameSingular };
};
