import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { CalendarChannel } from '@twenty-modules/accounts/types/CalendarChannel';
import { ConnectedAccount } from '@twenty-modules/accounts/types/ConnectedAccount';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { SettingsAccountsCalendarChannelDetails } from '@twenty-modules/settings/accounts/components/SettingsAccountsCalendarChannelDetails';
import { SettingsAccountsCalendarChannelsGeneral } from '@twenty-modules/settings/accounts/components/SettingsAccountsCalendarChannelsGeneral';
import { SettingsNewAccountSection } from '@twenty-modules/settings/accounts/components/SettingsNewAccountSection';
import { SETTINGS_ACCOUNT_CALENDAR_CHANNELS_TAB_LIST_COMPONENT_ID } from '@twenty-modules/settings/accounts/constants/SettingsAccountCalendarChannelsTabListComponentId';
import { TabList } from '@twenty-modules/ui/layout/tab/components/TabList';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import React from 'react';

const StyledCalenderContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const SettingsAccountsCalendarChannelsContainer = () => {
  const activeTabId = useRecoilComponentValueV2(
    activeTabIdComponentState,
    SETTINGS_ACCOUNT_CALENDAR_CHANNELS_TAB_LIST_COMPONENT_ID,
  );
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);

  const { records: accounts } = useFindManyRecords<ConnectedAccount>({
    objectNameSingular: CoreObjectNameSingular.ConnectedAccount,
    filter: {
      accountOwnerId: {
        eq: currentWorkspaceMember?.id,
      },
    },
  });

  const { records: calendarChannels } = useFindManyRecords<
    CalendarChannel & {
      connectedAccount: ConnectedAccount;
    }
  >({
    objectNameSingular: CoreObjectNameSingular.CalendarChannel,
    filter: {
      connectedAccountId: {
        in: accounts.map((account) => account.id),
      },
    },
    skip: !accounts.length,
  });

  const tabs = [
    ...calendarChannels.map((calendarChannel) => ({
      id: calendarChannel.id,
      title: calendarChannel.handle,
    })),
  ];

  if (!calendarChannels.length) {
    return <SettingsNewAccountSection />;
  }

  return (
    <>
      {tabs.length > 1 && (
        <StyledCalenderContainer>
          <TabList
            tabs={tabs}
            componentInstanceId={
              SETTINGS_ACCOUNT_CALENDAR_CHANNELS_TAB_LIST_COMPONENT_ID
            }
          />
        </StyledCalenderContainer>
      )}
      {calendarChannels.map((calendarChannel) => (
        <React.Fragment key={calendarChannel.id}>
          {(calendarChannels.length === 1 ||
            calendarChannel.id === activeTabId) && (
            <SettingsAccountsCalendarChannelDetails
              calendarChannel={calendarChannel}
            />
          )}
        </React.Fragment>
      ))}
      {false && activeTabId === 'general' && (
        <SettingsAccountsCalendarChannelsGeneral />
      )}
    </>
  );
};
