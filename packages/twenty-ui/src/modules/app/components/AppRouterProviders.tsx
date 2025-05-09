import { ApolloProvider } from '@twenty-modules/apollo/components/ApolloProvider';
import { GotoHotkeysEffectsProvider } from '@twenty-modules/app/effect-components/GotoHotkeysEffectsProvider';
import { PageChangeEffect } from '@twenty-modules/app/effect-components/PageChangeEffect';
import { AuthProvider } from '@twenty-modules/auth/components/AuthProvider';
import { CaptchaProvider } from '@twenty-modules/captcha/components/CaptchaProvider';
import { ChromeExtensionSidecarEffect } from '@twenty-modules/chrome-extension-sidecar/components/ChromeExtensionSidecarEffect';
import { ChromeExtensionSidecarProvider } from '@twenty-modules/chrome-extension-sidecar/components/ChromeExtensionSidecarProvider';
import { ClientConfigProvider } from '@twenty-modules/client-config/components/ClientConfigProvider';
import { ClientConfigProviderEffect } from '@twenty-modules/client-config/components/ClientConfigProviderEffect';
import { MainContextStoreProvider } from '@twenty-modules/context-store/components/MainContextStoreProvider';
import { PromiseRejectionEffect } from '@twenty-modules/error-handler/components/PromiseRejectionEffect';
import { ApolloMetadataClientProvider } from '@twenty-modules/object-metadata/components/ApolloMetadataClientProvider';
import { ObjectMetadataItemsLoadEffect } from '@twenty-modules/object-metadata/components/ObjectMetadataItemsLoadEffect';
import { ObjectMetadataItemsProvider } from '@twenty-modules/object-metadata/components/ObjectMetadataItemsProvider';
import { PrefetchDataProvider } from '@twenty-modules/prefetch/components/PrefetchDataProvider';
import { DialogManager } from '@twenty-modules/ui/feedback/dialog-manager/components/DialogManager';
import { DialogManagerScope } from '@twenty-modules/ui/feedback/dialog-manager/scopes/DialogManagerScope';
import { SnackBarProvider } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBarProvider';
import { BaseThemeProvider } from '@twenty-modules/ui/theme/components/BaseThemeProvider';
import { UserThemeProviderEffect } from '@twenty-modules/ui/theme/components/UserThemeProviderEffect';
import { PageFavicon } from '@twenty-modules/ui/utilities/page-favicon/components/PageFavicon';
import { PageTitle } from '@twenty-modules/ui/utilities/page-title/components/PageTitle';
import { UserProvider } from '@twenty-modules/users/components/UserProvider';
import { UserProviderEffect } from '@twenty-modules/users/components/UserProviderEffect';
import { WorkspaceProviderEffect } from '@twenty-modules/workspace/components/WorkspaceProviderEffect';
import { StrictMode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageTitleFromPath } from '@twenty-ui/front/utils/title-utils';

export const AppRouterProviders = () => {
  const { pathname } = useLocation();
  const pageTitle = getPageTitleFromPath(pathname);

  return (
    <CaptchaProvider>
      <ApolloProvider>
        <BaseThemeProvider>
          <ClientConfigProviderEffect />
          <ClientConfigProvider>
            <ChromeExtensionSidecarEffect />
            <ChromeExtensionSidecarProvider>
              <UserProviderEffect />
              <WorkspaceProviderEffect />
              <UserProvider>
                <AuthProvider>
                  <ApolloMetadataClientProvider>
                    <ObjectMetadataItemsLoadEffect />
                    <ObjectMetadataItemsProvider>
                      <PrefetchDataProvider>
                        <UserThemeProviderEffect />
                        <SnackBarProvider>
                          <DialogManagerScope dialogManagerScopeId="dialog-manager">
                            <DialogManager>
                              <StrictMode>
                                <PromiseRejectionEffect />
                                <GotoHotkeysEffectsProvider />
                                <PageTitle title={pageTitle} />
                                <PageFavicon />
                                <Outlet />
                              </StrictMode>
                            </DialogManager>
                          </DialogManagerScope>
                        </SnackBarProvider>
                        <MainContextStoreProvider />
                      </PrefetchDataProvider>
                      <PageChangeEffect />
                    </ObjectMetadataItemsProvider>
                  </ApolloMetadataClientProvider>
                </AuthProvider>
              </UserProvider>
            </ChromeExtensionSidecarProvider>
          </ClientConfigProvider>
        </BaseThemeProvider>
      </ApolloProvider>
    </CaptchaProvider>
  );
};
