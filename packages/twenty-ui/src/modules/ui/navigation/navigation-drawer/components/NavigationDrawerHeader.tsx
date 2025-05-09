import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { MultiWorkspaceDropdownButton } from '@twenty-modules/ui/navigation/navigation-drawer/components/MultiWorkspaceDropdown/MultiWorkspaceDropdownButton';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';

import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { NavigationDrawerCollapseButton } from './NavigationDrawerCollapseButton';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.spacing(8)};
  user-select: none;
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

const StyledNavigationDrawerCollapseButton = styled(
  NavigationDrawerCollapseButton,
)<{ show?: boolean }>`
  height: ${({ theme }) => theme.spacing(4)};
  margin-left: auto;
  opacity: ${({ show }) => (show ? 1 : 0)};
  padding-right: ${({ theme }) => theme.spacing(1)};
  transition: opacity ${({ theme }) => theme.animation.duration.normal}s;
  width: ${({ theme }) => theme.spacing(4)};
`;

type NavigationDrawerHeaderProps = {
  showCollapseButton: boolean;
};

export const NavigationDrawerHeader = ({
  showCollapseButton,
}: NavigationDrawerHeaderProps) => {
  const isMobile = useIsMobile();

  const isNavigationDrawerExpanded = useRecoilValue(
    isNavigationDrawerExpandedState,
  );

  return (
    <StyledContainer>
      <MultiWorkspaceDropdownButton />
      {!isMobile && isNavigationDrawerExpanded && (
        <StyledNavigationDrawerCollapseButton
          direction="left"
          show={showCollapseButton}
        />
      )}
    </StyledContainer>
  );
};
