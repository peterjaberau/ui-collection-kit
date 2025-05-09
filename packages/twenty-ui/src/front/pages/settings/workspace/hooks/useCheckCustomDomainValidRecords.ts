import { customDomainRecordsState } from '@twenty-ui/front/pages/settings/workspace/states/customDomainRecordsState';
import { useCheckCustomDomainValidRecordsMutation } from '@twenty-ui/front/generated/graphql';
import { useSetRecoilState } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCheckCustomDomainValidRecords = () => {
  const [checkCustomDomainValidRecords] =
    useCheckCustomDomainValidRecordsMutation();

  const setCustomDomainRecords = useSetRecoilState(customDomainRecordsState);

  const checkCustomDomainRecords = () => {
    setCustomDomainRecords((currentState) => ({
      ...currentState,
      isLoading: true,
    }));
    checkCustomDomainValidRecords({
      onCompleted: (data) => {
        setCustomDomainRecords((currentState) => ({
          ...currentState,
          isLoading: false,
          ...(isDefined(data.checkCustomDomainValidRecords)
            ? { customDomainRecords: data.checkCustomDomainValidRecords }
            : {}),
        }));
      },
    });
  };

  return {
    checkCustomDomainRecords,
  };
};
