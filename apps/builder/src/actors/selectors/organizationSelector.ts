import { getActor } from "./utils"

export const organizationSelector = (system: any) => {
  const getOrganizationActor = getActor("organization", system)
  const getOrganizationState = getOrganizationActor?.getSnapshot()
  const getOrganizationContext = getOrganizationState?.context

  return {
    getOrganizationActor,
    getOrganizationState,
    getOrganizationContext,
  }
}
