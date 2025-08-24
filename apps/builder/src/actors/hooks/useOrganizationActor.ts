import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useOrganizationActor() {
  const { rootActorRef } = useRootActor();

  const organizationActorRef = rootActorRef.system.get('organization');
  const sendToOrganization = organizationActorRef.send;

  const orgState: any = useSelector(organizationActorRef, (state) => state);
  const orgContext = orgState.context;

  const orgUserPermissions = orgContext.userPermissions;
  const orgConfiguration = orgContext.organizationConfiguration;
  const orgNew = orgContext.new;
  const orgIsLoading = orgContext.isLoading;
  const orgInstanceId = orgContext.instanceId;
  const orgTenantId = orgContext.tenantId;
  const orgMyOrganizations = orgContext.myOrganizations;
  const orgIsFetchingMyOrganizations = orgContext.isFetchingMyOrganizations;

  return {
    organizationActorRef,
    sendToOrganization,

    orgState,
    orgContext,

    orgUserPermissions,
    orgConfiguration,
    orgNew,
    orgIsLoading,
    orgInstanceId,
    orgTenantId,
    orgMyOrganizations,
    orgIsFetchingMyOrganizations,

  };
}
