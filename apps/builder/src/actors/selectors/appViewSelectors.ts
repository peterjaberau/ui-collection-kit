import { useUiActor } from "#actors/hooks/useUiActor"
import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"

export const useAppView = () => {
  const { uiAppView } = useUiActor()
  const { entitiesPageList } = useEntitiesActor()

  const appView = uiAppView
  const pageList = entitiesPageList.pages.length > 0 ? entitiesPageList.pages : undefined
  const isFetchingPage = uiAppView.isFetchingPage
  const isInitialized = uiAppView.initialized
  const currentDSLPageId = entitiesPageList.currentPageId
  const appViewHeaderHeight = uiAppView.headerHeight

  return {
    appView,
    pageList,
    isFetchingPage,
    isInitialized,
    currentDSLPageId,
    appViewHeaderHeight,
  }
}
