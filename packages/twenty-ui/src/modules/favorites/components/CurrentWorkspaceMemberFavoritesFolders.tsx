import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { CurrentWorkspaceMemberOrphanFavorites } from '@twenty-modules/favorites/components/CurrentWorkspaceMemberOrphanFavorites';
import { FavoritesDragProvider } from '@twenty-modules/favorites/components/FavoritesDragProvider';
import { FavoriteFolders } from '@twenty-modules/favorites/components/FavoritesFolders';
import { FavoritesSkeletonLoader } from '@twenty-modules/favorites/components/FavoritesSkeletonLoader';
import { useFavorites } from '@twenty-modules/favorites/hooks/useFavorites';
import { useFavoritesByFolder } from '@twenty-modules/favorites/hooks/useFavoritesByFolder';
import { isFavoriteFolderCreatingState } from '@twenty-modules/favorites/states/isFavoriteFolderCreatingState';
import { useIsPrefetchLoading } from '@twenty-modules/prefetch/hooks/useIsPrefetchLoading';
import { NavigationDrawerAnimatedCollapseWrapper } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerAnimatedCollapseWrapper';
import { NavigationDrawerSection } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerSection';
import { NavigationDrawerSectionTitle } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerSectionTitle';
import { useNavigationSection } from '@twenty-modules/ui/navigation/navigation-drawer/hooks/useNavigationSection';
import { useLingui } from '@lingui/react/macro';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconFolderPlus } from '@twenty-ui/display';
import { LightIconButton } from '@twenty-ui/input';

export const CurrentWorkspaceMemberFavoritesFolders = () => {
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);
  const { sortedFavorites: favorites } = useFavorites();
  const { favoritesByFolder } = useFavoritesByFolder();

  const [isFavoriteFolderCreating, setIsFavoriteFolderCreating] =
    useRecoilState(isFavoriteFolderCreatingState);

  const loading = useIsPrefetchLoading();

  const { t } = useLingui();

  const {
    toggleNavigationSection,
    isNavigationSectionOpenState,
    openNavigationSection,
  } = useNavigationSection('Favorites');
  const isNavigationSectionOpen = useRecoilValue(isNavigationSectionOpenState);

  const toggleNewFolder = () => {
    openNavigationSection();
    setIsFavoriteFolderCreating((current) => !current);
  };

  if (loading && isDefined(currentWorkspaceMember)) {
    return <FavoritesSkeletonLoader />;
  }

  if (
    (!favorites || favorites.length === 0) &&
    !isFavoriteFolderCreating &&
    (!favoritesByFolder || favoritesByFolder.length === 0)
  ) {
    return null;
  }

  return (
    <NavigationDrawerSection>
      <NavigationDrawerAnimatedCollapseWrapper>
        <NavigationDrawerSectionTitle
          label={t`Favorites`}
          onClick={toggleNavigationSection}
          rightIcon={
            <LightIconButton
              Icon={IconFolderPlus}
              onClick={toggleNewFolder}
              accent="tertiary"
            />
          }
        />
      </NavigationDrawerAnimatedCollapseWrapper>
      {isNavigationSectionOpen && (
        <FavoritesDragProvider>
          <FavoriteFolders isNavigationSectionOpen={isNavigationSectionOpen} />
          <CurrentWorkspaceMemberOrphanFavorites />
        </FavoritesDragProvider>
      )}
    </NavigationDrawerSection>
  );
};
