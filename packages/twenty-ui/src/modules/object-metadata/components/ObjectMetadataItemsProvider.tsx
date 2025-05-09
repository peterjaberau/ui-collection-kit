import React from 'react';
import { useRecoilValue } from 'recoil';

import { PreComputedChipGeneratorsProvider } from '@twenty-modules/object-metadata/components/PreComputedChipGeneratorsProvider';
import { isAppWaitingForFreshObjectMetadataState } from '@twenty-modules/object-metadata/states/isAppWaitingForFreshObjectMetadataState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { UserOrMetadataLoader } from '@twenty-ui/front/loading/components/UserOrMetadataLoader';

export const ObjectMetadataItemsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const isAppWaitingForFreshObjectMetadata = useRecoilValue(
    isAppWaitingForFreshObjectMetadataState,
  );

  const shouldDisplayChildren =
    !isAppWaitingForFreshObjectMetadata && objectMetadataItems.length > 0;

  return (
    <>
      {shouldDisplayChildren ? (
        <PreComputedChipGeneratorsProvider>
          {children}
        </PreComputedChipGeneratorsProvider>
      ) : (
        <UserOrMetadataLoader />
      )}
    </>
  );
};
