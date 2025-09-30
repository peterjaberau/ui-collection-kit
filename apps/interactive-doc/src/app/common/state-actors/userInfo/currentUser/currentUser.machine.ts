import { assign, setup } from "xstate"
import { currentUserInitialState } from "./currentUser.defaults"
import { getFromMock } from "#state-actors/mock"

export const currentUserMachine = setup({
  types: {} as any,
  actions: {
    updateCurrentUserReducer: assign(({ context, event }) => {}),
    updateUserAvatarReducer: assign(({ context, event }) => {}),
    updateUserIsTutorialViewedReducer: assign(({ context, event }) => {}),
    updateUserInfoReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "currentUser",
  initial: "idle",
  context: ({ input }: any) => ({
    ...currentUserInitialState,
    ...getFromMock().currentUser,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateCurrentUser: { actions: ["updateCurrentUserReducer"] },
        updateUserAvatar: { actions: ["updateUserAvatarReducer"] },
        updateUserIsTutorialViewed: { actions: ["updateUserIsTutorialViewedReducer"] },
        updateUserInfo: { actions: ["updateUserInfoReducer"] },
      },
    },
  },
})
