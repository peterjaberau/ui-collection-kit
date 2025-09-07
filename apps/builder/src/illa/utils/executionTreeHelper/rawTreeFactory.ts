import { generateRawAction } from "../executionTreeHelper/generateRawAction"
import { generateRawWidget } from "../executionTreeHelper/generateRawWidget"
import { CUSTOM_STORAGE_PREFIX } from "../storage"
import { generateGlobalData } from "./generateGlobalData"
import { generateCurrentPageInfo, generatePageInfos } from "./generatePageInfo"
import { generateUrlParams } from "./generateUrlParams"

export const CURRENT_USER_INFO_ACCESS_LIST_KEY = [
  "userID",
  "nickname",
  "email",
  "avatar",
  "language",
  "createdAt",
  "updatedAt",
]

export class RawTreeFactory {
  static create(seeds: any): any {
    const { widgets, actions, builderInfo, currentUserInfo, globalData } = seeds
    const rawTree: any = {} as any

    actions.forEach((action) => {
      rawTree[action.displayName] = generateRawAction(action)
    })

    Object.keys(widgets).forEach((key) => {
      rawTree[key] = generateRawWidget(widgets[key])
    })

    const customStorage = localStorage[CUSTOM_STORAGE_PREFIX]

    const canShownUserInfo: any = Object.keys(
      currentUserInfo,
    ).reduce((acc, key) => {
      if (
        CURRENT_USER_INFO_ACCESS_LIST_KEY.includes(key) &&
        currentUserInfo[key as keyof typeof currentUserInfo]
      ) {
        acc[key as any] = currentUserInfo[
          key as keyof typeof currentUserInfo
        ] as string
      }
      return acc
    }, {} as any)

    rawTree.builderInfo = builderInfo
    rawTree.currentUserInfo = canShownUserInfo
    rawTree.globalData = generateGlobalData(globalData)
    rawTree.urlParams = generateUrlParams()
    rawTree.localStorage = customStorage ? JSON.parse(customStorage) : {}
    rawTree.currentPageInfo = generateCurrentPageInfo()
    rawTree.pageInfos = generatePageInfos(widgets)
    return rawTree
  }
}
