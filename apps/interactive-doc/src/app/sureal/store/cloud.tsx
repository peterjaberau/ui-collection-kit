import { createStore } from "@xstate/store"
import { cloudStoreDemo } from './data'
import { createStoreHook } from "@xstate/store/react"

export const EMPTY_PROFILE = {
  username: "",
  name: "",
  default_org: "",
  enabled_features: [],
}

export const useCloudStore = createStoreHook({
  context: {
    authState: "unknown",
    authError: "",
    accessToken: "",
    sessionToken: "",
    userId: "",
    authProvider: "",
    isSupported: true,
    failedConnect: false,
    profile: EMPTY_PROFILE,
    instanceTypes: [],
    instanceVersions: [],
    regions: [],
    billingCountries: [],
    sessionExpired: false,
    isProvisioning: false,
    isProvisionDone: false,
    provisioning: null,
    chatConversation: [],
    chatLastResponse: "",
  } as any,
  on: {

    loadSample: (context) => ({
      context: cloudStoreDemo
    }),

    setLoading: (context) => ({ ...context, authState: "loading" }),

    setAuthError: (context, event: { error: any }) => ({
      ...context,
      authError: event.error,
    }),

    setAccessToken: (context, event: { token: any }) => ({
      ...context,
      accessToken: event.token,
    }),

    setSessionToken: (context, event: { token: any }) => ({
      ...context,
      sessionToken: event.token,
    }),

    setUserId: (context, event: { id: any }) => ({
      ...context,
      userId: event.id,
    }),

    setAuthProvider: (context, event: { provider: any }) => ({
      ...context,
      authProvider: event.provider,
    }),

    setAccountProfile: (context, event: { profile: any }) => ({
      ...context,
      ...event.profile,
    }),

    setIsSupported: (context, event: { isSupported: any }) => ({
      ...context,
      ...event.isSupported,
    }),

    setCloudValues: (context, event: { values: any }) => ({
      context,
      authState: "authenticated",
      ...event.values,
    }),

    setFailedConnected: (context, event: { failed: any }) => ({
      ...context,
      failedConnect: event.failed,
    }),

    setProfile: (context, event: { profile: any }) => ({
      ...context,
      profile: event.profile,
    }),

    clearSession: (context) => ({
      ...context,
      authState: "unauthenticated",
      sessionToken: "",
      profile: EMPTY_PROFILE,
    }),

    setSessionExpired: (context, event: { expired: any }) => ({
      ...context,
      sessionExpired: event.expired,
    }),
  },
})
