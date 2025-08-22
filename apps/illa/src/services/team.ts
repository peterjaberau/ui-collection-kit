import { authCloudRequest } from "@/public/net"
import { TeamInfo } from "@/public/public-types"

export const fetchMyTeamsInfo = () => {
  return authCloudRequest<TeamInfo[]>({
    url: "/teams/my",
    method: "GET",
  })
}
