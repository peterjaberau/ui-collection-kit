import styled from '@emotion/styled';

import { SupportButtonSkeletonLoader } from '@twenty-modules/support/components/SupportButtonSkeletonLoader';
import { useSupportChat } from '@twenty-modules/support/hooks/useSupportChat';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { useRecoilValue } from 'recoil';
import { Button, LightIconButton } from '@twenty-ui/input';
import { IconHelpCircle } from '@twenty-ui/display';

const StyledButtonContainer = styled.div`
  display: flex;
`;

export const SupportButton = () => {
  const { loading, isFrontChatLoaded } = useSupportChat();

  const isNavigationDrawerExpanded = useRecoilValue(
    isNavigationDrawerExpandedState,
  );
  if (loading) {
    return <SupportButtonSkeletonLoader />;
  }

  if (!isFrontChatLoaded) {
    return;
  }

  return isNavigationDrawerExpanded ? (
    <StyledButtonContainer>
      <Button
        variant="tertiary"
        size="small"
        title="Support"
        Icon={IconHelpCircle}
      />
    </StyledButtonContainer>
  ) : (
    <LightIconButton Icon={IconHelpCircle} />
  );
};
