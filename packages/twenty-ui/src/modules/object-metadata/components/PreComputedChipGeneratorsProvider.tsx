import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { PreComputedChipGeneratorsContext } from '@twenty-modules/object-metadata/contexts/PreComputedChipGeneratorsContext';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { getRecordChipGenerators } from '@twenty-modules/object-record/utils/getRecordChipGenerators';

export const PreComputedChipGeneratorsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const { chipGeneratorPerObjectPerField, identifierChipGeneratorPerObject } =
    useMemo(() => {
      return getRecordChipGenerators(objectMetadataItems);
    }, [objectMetadataItems]);

  return (
    <>
      <PreComputedChipGeneratorsContext.Provider
        value={{
          chipGeneratorPerObjectPerField,
          identifierChipGeneratorPerObject,
        }}
      >
        {children}
      </PreComputedChipGeneratorsContext.Provider>
    </>
  );
};
