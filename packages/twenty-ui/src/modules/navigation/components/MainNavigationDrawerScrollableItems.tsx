import { CurrentWorkspaceMemberFavoritesFolders } from '@twenty-modules/favorites/components/CurrentWorkspaceMemberFavoritesFolders';
import { WorkspaceFavorites } from '@twenty-modules/favorites/components/WorkspaceFavorites';
import { NavigationDrawerOpenedSection } from '@twenty-modules/object-metadata/components/NavigationDrawerOpenedSection';
import { RemoteNavigationDrawerSection } from '@twenty-modules/object-metadata/components/RemoteNavigationDrawerSection';
import styled from '@emotion/styled';

const StyledScrollableItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const MainNavigationDrawerScrollableItems = () => {
  return (
    <StyledScrollableItemsContainer>
      <NavigationDrawerOpenedSection />
      <CurrentWorkspaceMemberFavoritesFolders />
      <WorkspaceFavorites />
      <RemoteNavigationDrawerSection />
    </StyledScrollableItemsContainer>
  );
};
