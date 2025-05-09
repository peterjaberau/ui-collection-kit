import { ROLE_FRAGMENT } from '@twenty-modules/settings/roles/graphql/fragments/roleFragment';
import { gql } from '@apollo/client';

export const CREATE_ROLE = gql`
  ${ROLE_FRAGMENT}
  mutation CreateOneRole($createRoleInput: CreateRoleInput!) {
    createOneRole(createRoleInput: $createRoleInput) {
      ...RoleFragment
    }
  }
`;
