import {
  generateRawAction,
  generateRawWidget,
  generateGlobalData,
  generateUrlParams,
  generateCurrentPageInfo,
  generatePageInfos,
  CURRENT_USER_INFO_ACCESS_LIST_KEY,
} from "."

export const toRawExecutionTreeTransformer = (seeds: any) => {
  const { widgets, actions, builderInfo, currentUserInfo, globalData } = seeds
  const rawTree: any = {}

  actions.forEach((action) => {
    rawTree[action.displayName] = generateRawAction(action)
  })

  Object.keys(widgets).forEach((key) => {
    rawTree[key] = generateRawWidget(widgets[key])
  })

  //     const customStorage = localStorage[CUSTOM_STORAGE_PREFIX]

  const canShownUserInfo: any = Object.keys(currentUserInfo).reduce((acc, key) => {
    if (CURRENT_USER_INFO_ACCESS_LIST_KEY.includes(key) && currentUserInfo[key as keyof typeof currentUserInfo]) {
      acc[key as keyof CurrentUserInfoInTree] = currentUserInfo[key as keyof typeof currentUserInfo] as string
    }
    return acc
  }, {} as CurrentUserInfoInTree)

  rawTree.builderInfo = builderInfo
  rawTree.currentUserInfo = canShownUserInfo
  rawTree.globalData = generateGlobalData(globalData)
  rawTree.urlParams = generateUrlParams()
  // rawTree.localStorage = customStorage ? JSON.parse(customStorage) : {}
  rawTree.currentPageInfo = generateCurrentPageInfo()
  rawTree.pageInfos = generatePageInfos(widgets)

  return rawTree
}

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

    // const customStorage = localStorage[CUSTOM_STORAGE_PREFIX]

    const canShownUserInfo: any = Object.keys(
      currentUserInfo,
    ).reduce((acc, key) => {
      if (
        CURRENT_USER_INFO_ACCESS_LIST_KEY.includes(key) &&
        currentUserInfo[key as keyof typeof currentUserInfo]
      ) {
        acc[key as keyof CurrentUserInfoInTree] = currentUserInfo[
          key as keyof typeof currentUserInfo
          ] as string
      }
      return acc
    }, {} as CurrentUserInfoInTree)

    rawTree.builderInfo = builderInfo
    rawTree.currentUserInfo = canShownUserInfo
    rawTree.globalData = generateGlobalData(globalData)
    rawTree.urlParams = generateUrlParams()
    // rawTree.localStorage = customStorage ? JSON.parse(customStorage) : {}
    rawTree.currentPageInfo = generateCurrentPageInfo()
    rawTree.pageInfos = generatePageInfos(widgets)


    return rawTree
  }
}
