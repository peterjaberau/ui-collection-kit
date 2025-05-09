import React from 'react';
import { useRecoilValue } from 'recoil';

import { isCurrentUserLoadedState } from '@twenty-modules/auth/states/isCurrentUserLoadingState';
import { dateTimeFormatState } from '@twenty-modules/localization/states/dateTimeFormatState';
import { AppPath } from '@twenty-modules/types/AppPath';
import { UserContext } from '@twenty-modules/users/contexts/UserContext';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';
import { UserOrMetadataLoader } from '@twenty-ui/front/loading/components/UserOrMetadataLoader';

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const isCurrentUserLoaded = useRecoilValue(isCurrentUserLoadedState);
  const { isMatchingLocation } = useIsMatchingLocation();

  const dateTimeFormat = useRecoilValue(dateTimeFormatState);

  return !isCurrentUserLoaded &&
    !isMatchingLocation(AppPath.Verify) &&
    !isMatchingLocation(AppPath.VerifyEmail) &&
    !isMatchingLocation(AppPath.CreateWorkspace) ? (
    <UserOrMetadataLoader />
  ) : (
    <UserContext.Provider
      value={{
        dateFormat: dateTimeFormat.dateFormat,
        timeFormat: dateTimeFormat.timeFormat,
        timeZone: dateTimeFormat.timeZone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
