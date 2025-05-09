import { ConnectedAccount } from '@twenty-modules/accounts/types/ConnectedAccount';
import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { InformationBannerKeys } from '@twenty-modules/information-banner/types/InformationBannerKeys';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindOneRecord } from '@twenty-modules/object-record/hooks/useFindOneRecord';
import { useRecoilValue } from 'recoil';

export const useAccountToReconnect = (key: InformationBannerKeys) => {
  const currentUser = useRecoilValue(currentUserState);

  const userVars = currentUser?.userVars;

  const firstAccountIdToReconnect = userVars?.[key]?.[0];

  const accountToReconnect = useFindOneRecord<ConnectedAccount>({
    objectNameSingular: CoreObjectNameSingular.ConnectedAccount,
    objectRecordId: firstAccountIdToReconnect,
    skip: !firstAccountIdToReconnect,
  });

  return {
    accountToReconnect: accountToReconnect?.record,
  };
};
