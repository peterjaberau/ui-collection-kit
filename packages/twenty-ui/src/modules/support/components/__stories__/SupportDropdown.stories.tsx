import { Meta, StoryObj } from '@storybook/react';
import { useSetRecoilState } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { supportChatState } from '@twenty-modules/client-config/states/supportChatState';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import {
  mockCurrentWorkspace,
  mockedUserData,
  mockedWorkspaceMemberData,
} from '@twenty-ui/front/testing/mock-data/users';

import { SupportDropdown } from '@twenty-modules/support/components/SupportDropdown';
import { PrefetchLoadedDecorator } from '@twenty-ui/front/testing/decorators/PrefetchLoadedDecorator';

const meta: Meta<typeof SupportDropdown> = {
  title: 'Modules/Support/SupportDropdown',
  component: SupportDropdown,
  decorators: [
    (Story) => {
      const setCurrentUser = useSetRecoilState(currentUserState);
      const setSupportChat = useSetRecoilState(supportChatState);
      const setCurrentWorkspace = useSetRecoilState(currentWorkspaceState);
      const setCurrentWorkspaceMember = useSetRecoilState(
        currentWorkspaceMemberState,
      );

      setCurrentWorkspace(mockCurrentWorkspace);
      setCurrentWorkspaceMember(mockedWorkspaceMemberData);
      setCurrentUser(mockedUserData);
      setSupportChat({ supportDriver: 'front', supportFrontChatId: '1234' });

      return <Story />;
    },
    PrefetchLoadedDecorator,
  ],
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof SupportDropdown>;

export const Default: Story = {
};
