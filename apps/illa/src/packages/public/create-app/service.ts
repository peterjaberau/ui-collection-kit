import { builderRequest, marketplaceTeamRequest } from "@/public/net"
import { AppProductResponse } from "@/public/market-app"
import { ActionContent, ActionItem } from "@/public/public-types"
import { IResourceMeta } from "./CreateFromResource/interface"

export const fetchResourceMeta = async (
  resourceID: string,
  teamID: string,
  signal?: AbortSignal,
) => {
  return builderRequest<IResourceMeta>(
    {
      url: `/resources/${resourceID}/meta`,
      method: "GET",
      signal,
    },
    {
      teamID,
    },
  )
}

interface batchCreateCreationResponse {
  actions: ActionItem<ActionContent>[]
}
export const fetchBatchCreateAction = async (
  teamID: string,
  appId: string,
  actions: Omit<ActionItem<ActionContent>, "actionID">[],
) => {
  const response = await builderRequest<batchCreateCreationResponse>(
    {
      url: `/apps/${appId}/actions/byBatch`,
      method: "POST",
      data: {
        actions,
      },
    },
    { teamID },
  )
  return response.data.actions
}

export interface FetchTemplateListParams {
  search?: string
  hashtags?: string
}

export const fetchTemplateList = async (
  params: FetchTemplateListParams,
  signal?: AbortSignal,
) => {
  return marketplaceTeamRequest<AppProductResponse>({
    url: "/products/apps",
    method: "GET",
    signal: signal,
    params: {
      ...params,
      page: 1,
      isGetTemplate: true,
    },
  })
}
