import { assign, setup } from "xstate"
import { teamInitialState } from "./team.defaults"
import { stateMock } from "#illa/actors/mock"

export const teamMachine = setup({
  types: {} as any,
  actions: {
    updateTeamReducer: assign(({ context, event }) => {}),
    updateCurrentIdReducer: assign(({ context, event }) => {}),
    updateTeamItemsReducer: assign(({ context, event }) => {}),
    updateCurrentRoleReducer: assign(({ context, event }) => {}),
    updateMemberListReducer: assign(({ context, event }) => {}),
    updateTransUserRoleReducer: assign(({ context, event }) => {}),
    updateTeamMemberUserRoleReducer: assign(({ context, event }) => {}),
    updateTeamMemberPermissionReducer: assign(({ context, event }) => {}),
    updateTeamMemberSubscribeReducer: assign(({ context, event }) => {}),
    updateCurrentTeamLicenseReducer: assign(({ context, event }) => {}),
    updateCurrentTeamPersonalConfigReducer: assign(({ context, event }) => {}),
    addTeamItemReducer: assign(({ context, event }) => {}),
    updateCurrentMemberListReducer: assign(({ context, event }) => {}),
    deleteMemberListReducer: assign(({ context, event }) => {}),
    updateInvitedUserReducer: assign(({ context, event }) => {}),
    deleteTeamInfoReducer: assign(({ context, event }) => {}),
    updateCurrentTeamLicenseByTeamIDReducer: assign(({ context, event }) => {}),
    updateCurrentTeamInfoReducer: assign(({ context, event }) => {}),
    updateTargetTeamInfoCustomInfoReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "team",
  initial: "idle",
  context: ({ input }: any) => ({
    ...teamInitialState,
    ...stateMock.team,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateTeam: { actions: ["updateTeamReducer"] },
        updateCurrentId: { actions: ["updateCurrentIdReducer"] },
        updateTeamItems: { actions: ["updateTeamItemsReducer"] },
        updateCurrentRole: { actions: ["updateCurrentRoleReducer"] },
        updateMemberList: { actions: ["updateMemberListReducer"] },
        updateTransUserRole: { actions: ["updateTransUserRoleReducer"] },
        updateTeamMemberUserRole: { actions: ["updateTeamMemberUserRoleReducer"] },
        updateTeamMemberPermission: { actions: ["updateTeamMemberPermissionReducer"] },
        updateTeamMemberSubscribe: { actions: ["updateTeamMemberSubscribeReducer"] },
        updateCurrentTeamLicense: { actions: ["updateCurrentTeamLicenseReducer"] },
        updateCurrentTeamPersonalConfig: { actions: ["updateCurrentTeamPersonalConfigReducer"] },
        addTeamItem: { actions: ["addTeamItemReducer"] },
        updateCurrentMemberList: { actions: ["updateCurrentMemberListReducer"] },
        deleteMemberList: { actions: ["deleteMemberListReducer"] },
        updateInvitedUser: { actions: ["updateInvitedUserReducer"] },
        deleteTeamInfo: { actions: ["deleteTeamInfoReducer"] },
        updateCurrentTeamLicenseByTeamID: { actions: ["updateCurrentTeamLicenseByTeamIDReducer"] },
        updateCurrentTeamInfo: { actions: ["updateCurrentTeamInfoReducer"] },
        updateTargetTeamInfoCustomInfo: { actions: ["updateTargetTeamInfoCustomInfoReducer"] },
      },
    },
  },
})
