import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { ConnectedAccount } from '@twenty-modules/accounts/types/ConnectedAccount';
import { MessageChannel } from '@twenty-modules/accounts/types/MessageChannel';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { SettingsAccountsMessageChannelDetails } from '@twenty-modules/settings/accounts/components/SettingsAccountsMessageChannelDetails';
import { SettingsNewAccountSection } from '@twenty-modules/settings/accounts/components/SettingsNewAccountSection';
import { SETTINGS_ACCOUNT_MESSAGE_CHANNELS_TAB_LIST_COMPONENT_ID } from '@twenty-modules/settings/accounts/constants/SettingsAccountMessageChannelsTabListComponentId';
import { TabList } from '@twenty-modules/ui/layout/tab/components/TabList';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import React from 'react';

const StyledMessageContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const SettingsAccountsMessageChannelsContainer = () => {
  const activeTabId = useRecoilComponentValueV2(
    activeTabIdComponentState,
    SETTINGS_ACCOUNT_MESSAGE_CHANNELS_TAB_LIST_COMPONENT_ID,
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

  const { records: messageChannels } = useFindManyRecords<
    MessageChannel & {
      connectedAccount: ConnectedAccount;
    }
  >({
    objectNameSingular: CoreObjectNameSingular.MessageChannel,
    filter: {
      connectedAccountId: {
        in: accounts.map((account) => account.id),
      },
    },
    skip: !accounts.length,
  });

  const tabs = [
    ...messageChannels.map((messageChannel) => ({
      id: messageChannel.id,
      title: messageChannel.handle,
    })),
  ];

  if (!messageChannels.length) {
    return <SettingsNewAccountSection />;
  }

  return (
    <>
      {tabs.length > 1 && (
        <StyledMessageContainer>
          <TabList
            tabs={tabs}
            componentInstanceId={
              SETTINGS_ACCOUNT_MESSAGE_CHANNELS_TAB_LIST_COMPONENT_ID
            }
          />
        </StyledMessageContainer>
      )}
      {messageChannels.map((messageChannel) => (
        <React.Fragment key={messageChannel.id}>
          {(messageChannels.length === 1 ||
            messageChannel.id === activeTabId) && (
            <SettingsAccountsMessageChannelDetails
              messageChannel={messageChannel}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};
