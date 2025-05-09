import { ROLE_FRAGMENT } from '@twenty-modules/settings/roles/graphql/fragments/roleFragment';
import { gql } from '@apollo/client';

export const UPDATE_WORKSPACE = gql`
  ${ROLE_FRAGMENT}
  mutation UpdateWorkspace($input: UpdateWorkspaceInput!) {
    updateWorkspace(data: $input) {
      id
      customDomain
      subdomain
      displayName
      logo
      allowImpersonation
      isPublicInviteLinkEnabled
      isGoogleAuthEnabled
      isMicrosoftAuthEnabled
      isPasswordAuthEnabled
      defaultRole {
        ...RoleFragment
      }
    }
  }
`;
