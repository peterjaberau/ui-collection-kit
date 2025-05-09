import { ReactNode } from 'react';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { RecordTableContextProvider as RecordTableContextInternalProvider } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';

import { visibleTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/visibleTableColumnsComponentSelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

type RecordTableContextProviderProps = {
  viewBarId: string;
  recordTableId: string;
  objectNameSingular: string;
  children: ReactNode;
};

export const RecordTableContextProvider = ({
  viewBarId,
  recordTableId,
  objectNameSingular,
  children,
}: RecordTableContextProviderProps) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const visibleTableColumns = useRecoilComponentValueV2(
    visibleTableColumnsComponentSelector,
    recordTableId,
  );

  return (
    <RecordTableContextInternalProvider
      value={{
        viewBarId,
        objectMetadataItem,
        visibleTableColumns,
        recordTableId,
        objectNameSingular,
      }}
    >
      {children}
    </RecordTableContextInternalProvider>
  );
};
