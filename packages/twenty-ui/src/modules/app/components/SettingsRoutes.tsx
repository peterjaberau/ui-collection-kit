import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SettingsProtectedRouteWrapper } from '@twenty-modules/settings/components/SettingsProtectedRouteWrapper';
import { SettingsSkeletonLoader } from '@twenty-modules/settings/components/SettingsSkeletonLoader';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SettingPermissionType } from '@twenty-ui/front/generated/graphql';

const SettingsApiKeys = lazy(() =>
  import('@twenty-ui/front/pages/settings/developers/api-keys/SettingsApiKeys').then(
    (module) => ({
      default: module.SettingsApiKeys,
    }),
  ),
);

const SettingsGraphQLPlayground = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/developers/playground/SettingsGraphQLPlayground'
  ).then((module) => ({
    default: module.SettingsGraphQLPlayground,
  })),
);

const SettingsRestPlayground = lazy(() =>
  import('@twenty-ui/front/pages/settings/developers/playground/SettingsRestPlayground').then(
    (module) => ({
      default: module.SettingsRestPlayground,
    }),
  ),
);

const SettingsWebhooks = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/developers/webhooks/components/SettingsWebhooks'
  ).then((module) => ({
    default: module.SettingsWebhooks,
  })),
);

const SettingsAccountsCalendars = lazy(() =>
  import('@twenty-ui/front/pages/settings/accounts/SettingsAccountsCalendars').then(
    (module) => ({
      default: module.SettingsAccountsCalendars,
    }),
  ),
);

const SettingsAccountsEmails = lazy(() =>
  import('@twenty-ui/front/pages/settings/accounts/SettingsAccountsEmails').then((module) => ({
    default: module.SettingsAccountsEmails,
  })),
);

const SettingsNewAccount = lazy(() =>
  import('@twenty-ui/front/pages/settings/accounts/SettingsNewAccount').then((module) => ({
    default: module.SettingsNewAccount,
  })),
);

const SettingsNewObject = lazy(() =>
  import('@twenty-ui/front/pages/settings/data-model/SettingsNewObject').then((module) => ({
    default: module.SettingsNewObject,
  })),
);

const SettingsObjectDetailPage = lazy(() =>
  import('@twenty-ui/front/pages/settings/data-model/SettingsObjectDetailPage').then(
    (module) => ({
      default: module.SettingsObjectDetailPage,
    }),
  ),
);

const SettingsObjectOverview = lazy(() =>
  import('@twenty-ui/front/pages/settings/data-model/SettingsObjectOverview').then(
    (module) => ({
      default: module.SettingsObjectOverview,
    }),
  ),
);

const SettingsDevelopersApiKeyDetail = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/developers/api-keys/SettingsDevelopersApiKeyDetail'
  ).then((module) => ({
    default: module.SettingsDevelopersApiKeyDetail,
  })),
);

const SettingsDevelopersApiKeysNew = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/developers/api-keys/SettingsDevelopersApiKeysNew'
  ).then((module) => ({
    default: module.SettingsDevelopersApiKeysNew,
  })),
);

const Releases = lazy(() =>
  import('@twenty-ui/front/pages/settings/Releases').then((module) => ({
    default: module.Releases,
  })),
);

const SettingsServerlessFunctions = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/serverless-functions/SettingsServerlessFunctions'
  ).then((module) => ({ default: module.SettingsServerlessFunctions })),
);

const SettingsServerlessFunctionDetail = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/serverless-functions/SettingsServerlessFunctionDetail'
  ).then((module) => ({
    default: module.SettingsServerlessFunctionDetail,
  })),
);

const SettingsServerlessFunctionsNew = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/serverless-functions/SettingsServerlessFunctionsNew'
  ).then((module) => ({
    default: module.SettingsServerlessFunctionsNew,
  })),
);

const SettingsWorkspace = lazy(() =>
  import('@twenty-ui/front/pages/settings/SettingsWorkspace').then((module) => ({
    default: module.SettingsWorkspace,
  })),
);

const SettingsDomain = lazy(() =>
  import('@twenty-ui/front/pages/settings/workspace/SettingsDomain').then((module) => ({
    default: module.SettingsDomain,
  })),
);

const SettingsWorkspaceMembers = lazy(() =>
  import('@twenty-ui/front/pages/settings/SettingsWorkspaceMembers').then((module) => ({
    default: module.SettingsWorkspaceMembers,
  })),
);

const SettingsProfile = lazy(() =>
  import('@twenty-ui/front/pages/settings/SettingsProfile').then((module) => ({
    default: module.SettingsProfile,
  })),
);

const SettingsExperience = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/profile/appearance/components/SettingsExperience'
  ).then((module) => ({
    default: module.SettingsExperience,
  })),
);

const SettingsAccounts = lazy(() =>
  import('@twenty-ui/front/pages/settings/accounts/SettingsAccounts').then((module) => ({
    default: module.SettingsAccounts,
  })),
);

const SettingsBilling = lazy(() =>
  import('@twenty-ui/front/pages/settings/SettingsBilling').then((module) => ({
    default: module.SettingsBilling,
  })),
);

const SettingsIntegrations = lazy(() =>
  import('@twenty-ui/front/pages/settings/integrations/SettingsIntegrations').then(
    (module) => ({
      default: module.SettingsIntegrations,
    }),
  ),
);

const SettingsObjects = lazy(() =>
  import('@twenty-ui/front/pages/settings/data-model/SettingsObjects').then((module) => ({
    default: module.SettingsObjects,
  })),
);

const SettingsDevelopersWebhooksDetail = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/developers/webhooks/components/SettingsDevelopersWebhookDetail'
  ).then((module) => ({
    default: module.SettingsDevelopersWebhooksDetail,
  })),
);

const SettingsIntegrationDatabase = lazy(() =>
  import('@twenty-ui/front/pages/settings/integrations/SettingsIntegrationDatabase').then(
    (module) => ({
      default: module.SettingsIntegrationDatabase,
    }),
  ),
);

const SettingsIntegrationNewDatabaseConnection = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationNewDatabaseConnection'
  ).then((module) => ({
    default: module.SettingsIntegrationNewDatabaseConnection,
  })),
);

const SettingsIntegrationEditDatabaseConnection = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationEditDatabaseConnection'
  ).then((module) => ({
    default: module.SettingsIntegrationEditDatabaseConnection,
  })),
);

const SettingsIntegrationShowDatabaseConnection = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationShowDatabaseConnection'
  ).then((module) => ({
    default: module.SettingsIntegrationShowDatabaseConnection,
  })),
);

const SettingsObjectNewFieldSelect = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/data-model/SettingsObjectNewField/SettingsObjectNewFieldSelect'
  ).then((module) => ({
    default: module.SettingsObjectNewFieldSelect,
  })),
);

const SettingsObjectNewFieldConfigure = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/data-model/SettingsObjectNewField/SettingsObjectNewFieldConfigure'
  ).then((module) => ({
    default: module.SettingsObjectNewFieldConfigure,
  })),
);
const SettingsObjectFieldEdit = lazy(() =>
  import('@twenty-ui/front/pages/settings/data-model/SettingsObjectFieldEdit').then(
    (module) => ({
      default: module.SettingsObjectFieldEdit,
    }),
  ),
);

const SettingsSecurity = lazy(() =>
  import('@twenty-ui/front/pages/settings/security/SettingsSecurity').then((module) => ({
    default: module.SettingsSecurity,
  })),
);

const SettingsSecuritySSOIdentifyProvider = lazy(() =>
  import('@twenty-ui/front/pages/settings/security/SettingsSecuritySSOIdentifyProvider').then(
    (module) => ({
      default: module.SettingsSecuritySSOIdentifyProvider,
    }),
  ),
);

const SettingsSecurityApprovedAccessDomain = lazy(() =>
  import('@twenty-ui/front/pages/settings/security/SettingsSecurityApprovedAccessDomain').then(
    (module) => ({
      default: module.SettingsSecurityApprovedAccessDomain,
    }),
  ),
);

const SettingsAdmin = lazy(() =>
  import('@twenty-ui/front/pages/settings/admin-panel/SettingsAdmin').then((module) => ({
    default: module.SettingsAdmin,
  })),
);

const SettingsAdminIndicatorHealthStatus = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/admin-panel/SettingsAdminIndicatorHealthStatus'
  ).then((module) => ({
    default: module.SettingsAdminIndicatorHealthStatus,
  })),
);

const SettingsAdminConfigVariableDetails = lazy(() =>
  import(
    '@twenty-ui/front/pages/settings/admin-panel/SettingsAdminConfigVariableDetails'
  ).then((module) => ({
    default: module.SettingsAdminConfigVariableDetails,
  })),
);

const SettingsLab = lazy(() =>
  import('@twenty-ui/front/pages/settings/lab/SettingsLab').then((module) => ({
    default: module.SettingsLab,
  })),
);

const SettingsRoles = lazy(() =>
  import('@twenty-ui/front/pages/settings/roles/SettingsRoles').then((module) => ({
    default: module.SettingsRoles,
  })),
);

const SettingsRoleCreate = lazy(() =>
  import('@twenty-ui/front/pages/settings/roles/SettingsRoleCreate').then((module) => ({
    default: module.SettingsRoleCreate,
  })),
);

const SettingsRoleEdit = lazy(() =>
  import('@twenty-ui/front/pages/settings/roles/SettingsRoleEdit').then((module) => ({
    default: module.SettingsRoleEdit,
  })),
);

const SettingsRoleObjectLevel = lazy(() =>
  import('@twenty-ui/front/pages/settings/roles/SettingsRoleObjectLevel').then((module) => ({
    default: module.SettingsRoleObjectLevel,
  })),
);

type SettingsRoutesProps = {
  isFunctionSettingsEnabled?: boolean;
  isAdminPageEnabled?: boolean;
};

export const SettingsRoutes = ({
  isFunctionSettingsEnabled,
  isAdminPageEnabled,
}: SettingsRoutesProps) => (
  <Suspense fallback={<SettingsSkeletonLoader />}>
    <Routes>
      <Route path={SettingsPath.ProfilePage} element={<SettingsProfile />} />
      <Route path={SettingsPath.Experience} element={<SettingsExperience />} />
      <Route path={SettingsPath.Accounts} element={<SettingsAccounts />} />
      <Route path={SettingsPath.NewAccount} element={<SettingsNewAccount />} />
      <Route
        path={SettingsPath.AccountsCalendars}
        element={<SettingsAccountsCalendars />}
      />
      <Route
        path={SettingsPath.AccountsEmails}
        element={<SettingsAccountsEmails />}
      />
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.WORKSPACE}
          />
        }
      >
        <Route path={SettingsPath.Workspace} element={<SettingsWorkspace />} />
        <Route path={SettingsPath.Billing} element={<SettingsBilling />} />
        <Route path={SettingsPath.Domain} element={<SettingsDomain />} />
      </Route>
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.WORKSPACE_MEMBERS}
          />
        }
      >
        <Route
          path={SettingsPath.WorkspaceMembersPage}
          element={<SettingsWorkspaceMembers />}
        />
      </Route>
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.DATA_MODEL}
          />
        }
      >
        <Route path={SettingsPath.Objects} element={<SettingsObjects />} />
        <Route
          path={SettingsPath.ObjectOverview}
          element={<SettingsObjectOverview />}
        />
        <Route
          path={SettingsPath.ObjectDetail}
          element={<SettingsObjectDetailPage />}
        />
        <Route path={SettingsPath.NewObject} element={<SettingsNewObject />} />
        <Route
          path={SettingsPath.ObjectNewFieldSelect}
          element={<SettingsObjectNewFieldSelect />}
        />
        <Route
          path={SettingsPath.ObjectNewFieldConfigure}
          element={<SettingsObjectNewFieldConfigure />}
        />
        <Route
          path={SettingsPath.ObjectFieldEdit}
          element={<SettingsObjectFieldEdit />}
        />
      </Route>
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.ROLES}
          />
        }
      >
        <Route path={SettingsPath.Roles} element={<SettingsRoles />} />
        <Route path={SettingsPath.RoleDetail} element={<SettingsRoleEdit />} />
        <Route
          path={SettingsPath.RoleCreate}
          element={<SettingsRoleCreate />}
        />
        <Route
          path={SettingsPath.RoleObjectLevel}
          element={<SettingsRoleObjectLevel />}
        />
      </Route>
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.API_KEYS_AND_WEBHOOKS}
          />
        }
      >
        <Route path={SettingsPath.APIs} element={<SettingsApiKeys />} />
        <Route path={SettingsPath.Webhooks} element={<SettingsWebhooks />} />
        <Route
          path={`${SettingsPath.GraphQLPlayground}`}
          element={<SettingsGraphQLPlayground />}
        />
        <Route
          path={`${SettingsPath.RestPlayground}/*`}
          element={<SettingsRestPlayground />}
        />
        <Route
          path={SettingsPath.DevelopersNewApiKey}
          element={<SettingsDevelopersApiKeysNew />}
        />
        <Route
          path={SettingsPath.DevelopersApiKeyDetail}
          element={<SettingsDevelopersApiKeyDetail />}
        />
        <Route
          path={SettingsPath.DevelopersNewWebhookDetail}
          element={<SettingsDevelopersWebhooksDetail />}
        />
        <Route
          path={SettingsPath.Integrations}
          element={<SettingsIntegrations />}
        />
        <Route
          path={SettingsPath.IntegrationDatabase}
          element={<SettingsIntegrationDatabase />}
        />
        <Route
          path={SettingsPath.IntegrationNewDatabaseConnection}
          element={<SettingsIntegrationNewDatabaseConnection />}
        />
        <Route
          path={SettingsPath.IntegrationEditDatabaseConnection}
          element={<SettingsIntegrationEditDatabaseConnection />}
        />
        <Route
          path={SettingsPath.IntegrationDatabaseConnection}
          element={<SettingsIntegrationShowDatabaseConnection />}
        />
      </Route>
      {isFunctionSettingsEnabled && (
        <>
          <Route
            path={SettingsPath.ServerlessFunctions}
            element={<SettingsServerlessFunctions />}
          />
          <Route
            path={SettingsPath.NewServerlessFunction}
            element={<SettingsServerlessFunctionsNew />}
          />
          <Route
            path={SettingsPath.ServerlessFunctionDetail}
            element={<SettingsServerlessFunctionDetail />}
          />
        </>
      )}
      <Route path={SettingsPath.Releases} element={<Releases />} />
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.SECURITY}
          />
        }
      >
        <Route path={SettingsPath.Security} element={<SettingsSecurity />} />
        <Route
          path={SettingsPath.NewSSOIdentityProvider}
          element={<SettingsSecuritySSOIdentifyProvider />}
        />
        <Route
          path={SettingsPath.NewApprovedAccessDomain}
          element={<SettingsSecurityApprovedAccessDomain />}
        />
      </Route>

      {isAdminPageEnabled && (
        <>
          <Route path={SettingsPath.AdminPanel} element={<SettingsAdmin />} />
          <Route
            path={SettingsPath.AdminPanelIndicatorHealthStatus}
            element={<SettingsAdminIndicatorHealthStatus />}
          />

          <Route
            path={SettingsPath.AdminPanelConfigVariableDetails}
            element={<SettingsAdminConfigVariableDetails />}
          />
        </>
      )}
      <Route
        element={
          <SettingsProtectedRouteWrapper
            settingsPermission={SettingPermissionType.WORKSPACE}
          />
        }
      >
        <Route path={SettingsPath.Lab} element={<SettingsLab />} />
      </Route>
    </Routes>
  </Suspense>
);
