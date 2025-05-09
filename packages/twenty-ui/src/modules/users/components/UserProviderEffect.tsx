import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { currentUserWorkspaceState } from '@twenty-modules/auth/states/currentUserWorkspaceState';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceMembersState } from '@twenty-modules/auth/states/currentWorkspaceMembersStates';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { isCurrentUserLoadedState } from '@twenty-modules/auth/states/isCurrentUserLoadingState';
import { workspacesState } from '@twenty-modules/auth/states/workspaces';
import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { dateTimeFormatState } from '@twenty-modules/localization/states/dateTimeFormatState';
import { detectDateFormat } from '@twenty-modules/localization/utils/detectDateFormat';
import { detectTimeFormat } from '@twenty-modules/localization/utils/detectTimeFormat';
import { detectTimeZone } from '@twenty-modules/localization/utils/detectTimeZone';
import { getDateFormatFromWorkspaceDateFormat } from '@twenty-modules/localization/utils/getDateFormatFromWorkspaceDateFormat';
import { getTimeFormatFromWorkspaceTimeFormat } from '@twenty-modules/localization/utils/getTimeFormatFromWorkspaceTimeFormat';
import { AppPath } from '@twenty-modules/types/AppPath';
import { ColorScheme } from '@twenty-modules/workspace-member/types/WorkspaceMember';
import { APP_LOCALES, SOURCE_LOCALE } from '@ui-collection-kit/twenty-shared/src/translations';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceMember } from '@twenty-ui/front/generated-metadata/graphql';
import { useGetCurrentUserQuery } from '@twenty-ui/front/generated/graphql';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';
import { dynamicActivate } from '@twenty-ui/front/utils/i18n/dynamicActivate';

export const UserProviderEffect = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isMatchingLocation } = useIsMatchingLocation();

  const [isCurrentUserLoaded, setIsCurrentUserLoaded] = useRecoilState(
    isCurrentUserLoadedState,
  );
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setCurrentWorkspace = useSetRecoilState(currentWorkspaceState);
  const setCurrentUserWorkspace = useSetRecoilState(currentUserWorkspaceState);
  const setWorkspaces = useSetRecoilState(workspacesState);

  const setDateTimeFormat = useSetRecoilState(dateTimeFormatState);

  const setCurrentWorkspaceMember = useSetRecoilState(
    currentWorkspaceMemberState,
  );
  const setCurrentWorkspaceMembers = useSetRecoilState(
    currentWorkspaceMembersState,
  );

  const { loading: queryLoading, data: queryData } = useGetCurrentUserQuery({
    skip:
      isCurrentUserLoaded ||
      isMatchingLocation(AppPath.Verify) ||
      isMatchingLocation(AppPath.VerifyEmail),
  });

  useEffect(() => {
    if (!queryLoading) {
      setIsLoading(false);
      setIsCurrentUserLoaded(true);
    }

    if (!isDefined(queryData?.currentUser)) return;

    setCurrentUser(queryData.currentUser);

    if (isDefined(queryData.currentUser.currentWorkspace)) {
      setCurrentWorkspace({
        ...queryData.currentUser.currentWorkspace,
        defaultRole: queryData.currentUser.currentWorkspace.defaultRole ?? null,
      });
    }

    if (isDefined(queryData.currentUser.currentUserWorkspace)) {
      setCurrentUserWorkspace(queryData.currentUser.currentUserWorkspace);
    }

    const {
      workspaceMember,
      workspaceMembers,
      workspaces: userWorkspaces,
    } = queryData.currentUser;

    const affectDefaultValuesOnEmptyWorkspaceMemberFields = (
      workspaceMember: WorkspaceMember,
    ) => {
      return {
        ...workspaceMember,
        colorScheme: (workspaceMember.colorScheme as ColorScheme) ?? 'Light',
        locale:
          (workspaceMember.locale as keyof typeof APP_LOCALES) ?? SOURCE_LOCALE,
      };
    };

    if (isDefined(workspaceMember)) {
      setCurrentWorkspaceMember(
        affectDefaultValuesOnEmptyWorkspaceMemberFields(workspaceMember),
      );

      // TODO: factorize
      setDateTimeFormat({
        timeZone:
          workspaceMember.timeZone && workspaceMember.timeZone !== 'system'
            ? workspaceMember.timeZone
            : detectTimeZone(),
        dateFormat: isDefined(workspaceMember.dateFormat)
          ? getDateFormatFromWorkspaceDateFormat(workspaceMember.dateFormat)
          : DateFormat[detectDateFormat()],
        timeFormat: isDefined(workspaceMember.timeFormat)
          ? getTimeFormatFromWorkspaceTimeFormat(workspaceMember.timeFormat)
          : TimeFormat[detectTimeFormat()],
      });

      dynamicActivate(
        (workspaceMember.locale as keyof typeof APP_LOCALES) ?? SOURCE_LOCALE,
      );
    }

    if (isDefined(workspaceMembers)) {
      setCurrentWorkspaceMembers(
        workspaceMembers.map(affectDefaultValuesOnEmptyWorkspaceMemberFields) ??
          [],
      );
    }

    if (isDefined(userWorkspaces)) {
      const workspaces = userWorkspaces
        .map(({ workspace }) => workspace)
        .filter(isDefined);

      setWorkspaces(workspaces);
    }
  }, [
    setCurrentUser,
    setCurrentUserWorkspace,
    setCurrentWorkspaceMembers,
    isLoading,
    queryLoading,
    setCurrentWorkspace,
    setCurrentWorkspaceMember,
    setWorkspaces,
    queryData?.currentUser,
    setIsCurrentUserLoaded,
    setDateTimeFormat,
  ]);

  return <></>;
};
