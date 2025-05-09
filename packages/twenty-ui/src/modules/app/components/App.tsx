import { AppRouter } from '@twenty-modules/app/components/AppRouter';
import { ApolloDevLogEffect } from '@twenty-modules/debug/components/ApolloDevLogEffect';
import { RecoilDebugObserverEffect } from '@twenty-modules/debug/components/RecoilDebugObserver';
import { AppErrorBoundary } from '@twenty-modules/error-handler/components/AppErrorBoundary';
import { AppRootErrorFallback } from '@twenty-modules/error-handler/components/AppRootErrorFallback';
import { ExceptionHandlerProvider } from '@twenty-modules/error-handler/components/ExceptionHandlerProvider';
import { SnackBarProviderScope } from '@twenty-modules/ui/feedback/snack-bar-manager/scopes/SnackBarProviderScope';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { IconsProvider } from '@twenty-ui/display';
import { initialI18nActivate } from '@twenty-ui/front/utils/i18n/initialI18nActivate';

initialI18nActivate();

export const App = () => {
  return (
    <RecoilRoot>
      <AppErrorBoundary
        resetOnLocationChange={false}
        FallbackComponent={AppRootErrorFallback}
      >
        <I18nProvider i18n={i18n}>
          <RecoilDebugObserverEffect />
          <ApolloDevLogEffect />
          <SnackBarProviderScope snackBarManagerScopeId="snack-bar-manager">
            <IconsProvider>
              <ExceptionHandlerProvider>
                <HelmetProvider>
                  <AppRouter />
                </HelmetProvider>
              </ExceptionHandlerProvider>
            </IconsProvider>
          </SnackBarProviderScope>
        </I18nProvider>
      </AppErrorBoundary>
    </RecoilRoot>
  );
};
