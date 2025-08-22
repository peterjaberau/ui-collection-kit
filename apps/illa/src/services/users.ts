import {
  authCloudRequest,
  notNeedAuthCloudRequest,
} from "@/public/net"
import { CurrentUserInfo } from "@/public/public-types"
import { getAuthToken } from "@/public/utils"

export const fetchUserInfo = () => {
  return authCloudRequest<CurrentUserInfo>({
    url: "/users",
  })
}

export const tryFetchUserInfo = async () => {
  const token = getAuthToken()

  try {
    return await notNeedAuthCloudRequest<CurrentUserInfo>({
      url: "/users",
      headers: {
        Authorization: token,
      },
    })
  } catch (e) {
    return undefined
  }
}

export const updateTutorialViewed = async (isTutorialViewed: boolean) => {
  await authCloudRequest({
    url: "/users/tutorialViewed",
    method: "PATCH",
    data: {
      isTutorialViewed,
    },
  })
}
