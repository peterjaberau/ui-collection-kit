import { useEffect } from 'react';

import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectNameSingularFromPlural } from '@twenty-modules/object-metadata/hooks/useObjectNameSingularFromPlural';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { useSetTableColumns } from '@twenty-modules/object-record/record-table/hooks/useSetTableColumns';
import { SIGN_IN_BACKGROUND_MOCK_COLUMN_DEFINITIONS } from '@twenty-modules/sign-in-background-mock/constants/SignInBackgroundMockColumnDefinitions';
import { SIGN_IN_BACKGROUND_MOCK_VIEW_FIELDS } from '@twenty-modules/sign-in-background-mock/constants/SignInBackgroundMockViewFields';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useInitViewBar } from '@twenty-modules/views/hooks/useInitViewBar';
import { mapViewFieldsToColumnDefinitions } from '@twenty-modules/views/utils/mapViewFieldsToColumnDefinitions';

type SignInBackgroundMockContainerEffectProps = {
  objectNamePlural: string;
  recordTableId: string;
  viewId: string;
};

export const SignInBackgroundMockContainerEffect = ({
  objectNamePlural,
  recordTableId,
  viewId,
}: SignInBackgroundMockContainerEffectProps) => {
  const [
    contextStoreCurrentObjectMetadataItemId,
    setContextStoreCurrentObjectMetadataItemId,
  ] = useRecoilComponentStateV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
    MAIN_CONTEXT_STORE_INSTANCE_ID,
  );

  const { setAvailableTableColumns } = useRecordTable({
    recordTableId,
  });

  const { setTableColumns } = useSetTableColumns();

  const { objectNameSingular } = useObjectNameSingularFromPlural({
    objectNamePlural,
  });

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { setAvailableFieldDefinitions, setViewObjectMetadataId } =
    useInitViewBar(viewId);

  useEffect(() => {
    setViewObjectMetadataId?.(objectMetadataItem.id);

    setAvailableFieldDefinitions?.(SIGN_IN_BACKGROUND_MOCK_COLUMN_DEFINITIONS);

    setAvailableTableColumns(SIGN_IN_BACKGROUND_MOCK_COLUMN_DEFINITIONS);

    setTableColumns(
      mapViewFieldsToColumnDefinitions({
        viewFields: SIGN_IN_BACKGROUND_MOCK_VIEW_FIELDS,
        columnDefinitions: SIGN_IN_BACKGROUND_MOCK_COLUMN_DEFINITIONS,
      }),
      recordTableId,
    );

    if (contextStoreCurrentObjectMetadataItemId !== objectMetadataItem.id) {
      setContextStoreCurrentObjectMetadataItemId(objectMetadataItem.id);
    }
  }, [
    setViewObjectMetadataId,
    setAvailableFieldDefinitions,
    objectMetadataItem,
    setAvailableTableColumns,
    setTableColumns,
    recordTableId,
    setContextStoreCurrentObjectMetadataItemId,
    contextStoreCurrentObjectMetadataItemId,
  ]);

  return <></>;
};
