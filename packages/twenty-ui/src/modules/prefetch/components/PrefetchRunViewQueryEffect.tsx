import { useEffect } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { findAllViewsOperationSignatureFactory } from '@twenty-modules/prefetch/graphql/operation-signatures/factories/findAllViewsOperationSignatureFactory';
import { prefetchViewsState } from '@twenty-modules/prefetch/states/prefetchViewsState';
import { isPersistingViewFieldsState } from '@twenty-modules/views/states/isPersistingViewFieldsState';
import { View } from '@twenty-modules/views/types/View';
import { useIsWorkspaceActivationStatusEqualsTo } from '@twenty-modules/workspace/hooks/useIsWorkspaceActivationStatusEqualsTo';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

export const PrefetchRunViewQueryEffect = () => {
  const currentUser = useRecoilValue(currentUserState);

  const isWorkspaceActive = useIsWorkspaceActivationStatusEqualsTo(
    WorkspaceActivationStatus.ACTIVE,
  );

  const { objectMetadataItems } = useObjectMetadataItems();

  const findAllViewsOperationSignature = findAllViewsOperationSignatureFactory({
    objectMetadataItem: objectMetadataItems.find(
      (item) => item.nameSingular === CoreObjectNameSingular.View,
    ),
  });

  const { records } = useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.View,
    filter: findAllViewsOperationSignature.variables.filter,
    recordGqlFields: findAllViewsOperationSignature.fields,
    skip: !currentUser || !isWorkspaceActive,
  });

  const setPrefetchViewsState = useRecoilCallback(
    ({ set, snapshot }) =>
      (views: View[]) => {
        const existingViews = snapshot
          .getLoadable(prefetchViewsState)
          .getValue();

        if (!isDeeplyEqual(existingViews, views)) {
          set(prefetchViewsState, views);
        }
      },
    [],
  );

  const isPersistingViewFields = useRecoilValue(isPersistingViewFieldsState);

  useEffect(() => {
    if (isDefined(records) && !isPersistingViewFields) {
      setPrefetchViewsState(records as View[]);
    }
  }, [isPersistingViewFields, records, setPrefetchViewsState]);

  return <></>;
};
