import { AppRouterProviders } from '@twenty-modules/app/components/AppRouterProviders';
import { SettingsRoutes } from '@twenty-modules/app/components/SettingsRoutes';
import { VerifyLoginTokenEffect } from '@twenty-modules/auth/components/VerifyLoginTokenEffect';

import { VerifyEmailEffect } from '@twenty-modules/auth/components/VerifyEmailEffect';
import indexAppPath from '@twenty-modules/navigation/utils/indexAppPath';
import { AppPath } from '@twenty-modules/types/AppPath';
import { BlankLayout } from '@twenty-modules/ui/layout/page/components/BlankLayout';
import { DefaultLayout } from '@twenty-modules/ui/layout/page/components/DefaultLayout';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Authorize } from '@twenty-ui/front/pages/auth/Authorize';
import { PasswordReset } from '@twenty-ui/front/pages/auth/PasswordReset';
import { SignInUp } from '@twenty-ui/front/pages/auth/SignInUp';
import { NotFound } from '@twenty-ui/front/pages/not-found/NotFound';
import { RecordIndexPage } from '@twenty-ui/front/pages/object-record/RecordIndexPage';
import { RecordShowPage } from '@twenty-ui/front/pages/object-record/RecordShowPage';
import { ChooseYourPlan } from '@twenty-ui/front/pages/onboarding/ChooseYourPlan';
import { CreateProfile } from '@twenty-ui/front/pages/onboarding/CreateProfile';
import { CreateWorkspace } from '@twenty-ui/front/pages/onboarding/CreateWorkspace';
import { InviteTeam } from '@twenty-ui/front/pages/onboarding/InviteTeam';
import { PaymentSuccess } from '@twenty-ui/front/pages/onboarding/PaymentSuccess';
import { SyncEmails } from '@twenty-ui/front/pages/onboarding/SyncEmails';

export const useCreateAppRouter = (
  isFunctionSettingsEnabled?: boolean,
  isAdminPageEnabled?: boolean,
) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<AppRouterProviders />}
        // To switch state to `loading` temporarily to enable us
        // to set scroll position before the page is rendered
        loader={async () => Promise.resolve(null)}
      >
        <Route element={<DefaultLayout />}>
          <Route path={AppPath.Verify} element={<VerifyLoginTokenEffect />} />
          <Route path={AppPath.VerifyEmail} element={<VerifyEmailEffect />} />
          <Route path={AppPath.SignInUp} element={<SignInUp />} />
          <Route path={AppPath.Invite} element={<SignInUp />} />
          <Route path={AppPath.ResetPassword} element={<PasswordReset />} />
          <Route path={AppPath.CreateWorkspace} element={<CreateWorkspace />} />
          <Route path={AppPath.CreateProfile} element={<CreateProfile />} />
          <Route path={AppPath.SyncEmails} element={<SyncEmails />} />
          <Route path={AppPath.InviteTeam} element={<InviteTeam />} />
          <Route path={AppPath.PlanRequired} element={<ChooseYourPlan />} />
          <Route
            path={AppPath.PlanRequiredSuccess}
            element={<PaymentSuccess />}
          />
          <Route path={indexAppPath.getIndexAppPath()} element={<></>} />
          <Route path={AppPath.RecordIndexPage} element={<RecordIndexPage />} />
          <Route path={AppPath.RecordShowPage} element={<RecordShowPage />} />
          <Route
            path={AppPath.SettingsCatchAll}
            element={
              <SettingsRoutes
                isFunctionSettingsEnabled={isFunctionSettingsEnabled}
                isAdminPageEnabled={isAdminPageEnabled}
              />
            }
          />
          <Route path={AppPath.NotFoundWildcard} element={<NotFound />} />
        </Route>
        <Route element={<BlankLayout />}>
          <Route path={AppPath.Authorize} element={<Authorize />} />
        </Route>
      </Route>,
    ),
  );
