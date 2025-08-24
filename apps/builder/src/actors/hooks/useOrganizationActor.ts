import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useOrganizationActor() {
  const { rootActorRef } = useRootActor();

  const organizationActorRef = rootActorRef.system.get('organization');
  const organizationActorState: any = useSelector(organizationActorRef, (state) => state);
  const sendToOrganizationActor = organizationActorRef.send;

  return {
    organizationActorRef,
    organizationActorState,
    sendToOrganizationActor,

  };
}
