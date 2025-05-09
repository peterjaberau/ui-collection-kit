import { AuthModal } from '@twenty-modules/auth/components/AuthModal';
import { CommandMenuRouter } from '@twenty-modules/command-menu/components/CommandMenuRouter';
import { AppErrorBoundary } from '@twenty-modules/error-handler/components/AppErrorBoundary';
import { AppFullScreenErrorFallback } from '@twenty-modules/error-handler/components/AppFullScreenErrorFallback';
import { AppPageErrorFallback } from '@twenty-modules/error-handler/components/AppPageErrorFallback';
import { KeyboardShortcutMenu } from '@twenty-modules/keyboard-shortcut-menu/components/KeyboardShortcutMenu';
import { AppNavigationDrawer } from '@twenty-modules/navigation/components/AppNavigationDrawer';
import { MobileNavigationBar } from '@twenty-modules/navigation/components/MobileNavigationBar';
import { useIsSettingsPage } from '@twenty-modules/navigation/hooks/useIsSettingsPage';
import { OBJECT_SETTINGS_WIDTH } from '@twenty-modules/settings/data-model/constants/ObjectSettings';
import { SignInAppNavigationDrawerMock } from '@twenty-modules/sign-in-background-mock/components/SignInAppNavigationDrawerMock';
import { SignInBackgroundMockPage } from '@twenty-modules/sign-in-background-mock/components/SignInBackgroundMockPage';
import { useShowFullscreen } from '@twenty-modules/ui/layout/fullscreen/hooks/useShowFullscreen';
import { useShowAuthModal } from '@twenty-modules/ui/layout/hooks/useShowAuthModal';
import { NAV_DRAWER_WIDTHS } from '@twenty-modules/ui/navigation/navigation-drawer/constants/NavDrawerWidths';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { Global, css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useScreenSize } from '@twenty-ui/utilities';

const StyledLayout = styled.div`
  background: ${({ theme }) => theme.background.noisy};
  display: flex;
  flex-direction: column;
  height: 100dvh;
  position: relative;
  scrollbar-color: ${({ theme }) => theme.border.color.medium} transparent;
  scrollbar-width: 4px;
  width: 100%;

  *::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.border.radius.sm};
  }
`;

const StyledPageContainer = styled(motion.div)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  min-height: 0;
`;

const StyledAppNavigationDrawer = styled(AppNavigationDrawer)`
  flex-shrink: 0;
`;

const StyledAppNavigationDrawerMock = styled(SignInAppNavigationDrawerMock)`
  flex-shrink: 0;
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex: 0 1 100%;
  overflow: hidden;
`;

export const DefaultLayout = () => {
  const isMobile = useIsMobile();
  const isSettingsPage = useIsSettingsPage();
  const theme = useTheme();
  const windowsWidth = useScreenSize().width;
  const showAuthModal = useShowAuthModal();
  const useShowFullScreen = useShowFullscreen();

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${theme.background.tertiary};
          }
        `}
      />
      <StyledLayout>
        <AppErrorBoundary FallbackComponent={AppFullScreenErrorFallback}>
          <StyledPageContainer
            animate={{
              marginLeft:
                isSettingsPage && !isMobile && !useShowFullScreen
                  ? (windowsWidth -
                      (OBJECT_SETTINGS_WIDTH +
                        NAV_DRAWER_WIDTHS.menu.desktop.expanded +
                        76)) /
                    2
                  : 0,
            }}
            transition={{
              duration: theme.animation.duration.normal,
            }}
          >
            {!showAuthModal && (
              <>
                <CommandMenuRouter />
                <KeyboardShortcutMenu />
              </>
            )}
            {showAuthModal ? (
              <StyledAppNavigationDrawerMock />
            ) : useShowFullScreen ? null : (
              <StyledAppNavigationDrawer />
            )}
            {showAuthModal ? (
              <>
                <StyledMainContainer>
                  <SignInBackgroundMockPage />
                </StyledMainContainer>
                <AnimatePresence mode="wait">
                  <LayoutGroup>
                    <AuthModal>
                      <Outlet />
                    </AuthModal>
                  </LayoutGroup>
                </AnimatePresence>
              </>
            ) : (
              <StyledMainContainer>
                <AppErrorBoundary FallbackComponent={AppPageErrorFallback}>
                  <Outlet />
                </AppErrorBoundary>
              </StyledMainContainer>
            )}
          </StyledPageContainer>
          {isMobile && !showAuthModal && <MobileNavigationBar />}
        </AppErrorBoundary>
      </StyledLayout>
    </>
  );
};
