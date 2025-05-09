import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type UseIsRecordReadOnlyParams = {
  recordId: string;
};

export const useIsRecordReadOnly = ({
  recordId,
}: UseIsRecordReadOnlyParams) => {
  const recordDeletedAt = useRecoilValue<ObjectRecord | null>(
    recordStoreFamilySelector({
      recordId,
      fieldName: 'deletedAt',
    }),
  );

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  return hasObjectReadOnlyPermission || isDefined(recordDeletedAt);
};
