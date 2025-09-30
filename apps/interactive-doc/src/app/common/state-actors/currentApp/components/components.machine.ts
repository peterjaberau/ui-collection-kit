import { assign, setup } from "xstate"
import { componentsInitialState } from "./components.defaults"
import { getFromMock } from "#state-actors/mock"
// import { searchComponentFromMap } from "./components.selector"

export const componentsMachine = setup({
  types: {} as any,
  actions: {
    initComponentReducer: assign(({ context, event }) => {
      /*
      return { ...context, ...event.payload }
       */
    }),

    addComponentReducer: assign(({ context, event }) => {
      /*
      const payload = event.payload

      const componentsMap = { ...context }

      payload.forEach((rootNode) => {
        if (!rootNode.parentNode) return

        const parentNode = searchComponentFromMap(componentsMap, rootNode.parentNode)
        if (!parentNode) return

        // update root node props
        if (rootNode.props) {
          rootNode.props = getNewWidgetPropsByUpdateSlice(rootNode.props ?? {}, {})
        }

        // update parent's childrenNode
        parentNode.childrenNode = Array.isArray(parentNode.childrenNode)
          ? [...parentNode.childrenNode, rootNode.displayName]
          : [rootNode.displayName]

        // flatten tree and merge into context
        const flattened = flatTreeToMap(rootNode)
        Object.keys(flattened).forEach((key) => {
          const node = flattened[key]
          if (node.props) {
            node.props = getNewWidgetPropsByUpdateSlice(node.props ?? {}, {})
          }
          componentsMap[key] = node
        })
      })

      return componentsMap
       */
    }),

    addModalComponentReducer: assign(({ context, event }) => {}),
    addPageNodeWithSortOrderReducer: assign(({ context, event }) => {}),
    addSectionViewConfigByConfigReducer: assign(({ context, event }) => {}),
    addSectionViewReducer: assign(({ context, event }) => {}),
    addSubPageReducer: assign(({ context, event }) => {}),
    addTargetPageSectionReducer: assign(({ context, event }) => {}),
    batchUpdateComponentLayoutInfoReducer: assign(({ context, event }) => {}),
    batchUpdateComponentLayoutInfoWhenReflowReducer: assign(({ context, event }) => {}),
    batchUpdateMultiComponentSlicePropsReducer: assign(({ context, event }) => {}),
    deleteComponentNodeReducer: assign(({ context, event }) => {}),
    deleteCurrentPageStyleReducer: assign(({ context, event }) => {}),
    deleteGlobalStateByKeyReducer: assign(({ context, event }) => {}),
    deletePageNodeReducer: assign(({ context, event }) => {}),
    deleteSectionViewReducer: assign(({ context, event }) => {}),
    deleteSubPageViewNodeReducer: assign(({ context, event }) => {}),
    deleteTargetPageSectionReducer: assign(({ context, event }) => {}),

    resetComponentsReducer: assign(({ context, event }) => {}),
    setComponentPropsReducer: assign(({ context, event }) => {}),
    setGlobalStateReducer: assign(({ context, event }) => {}),
    sortComponentNodeChildrenReducer: assign(({ context, event }) => {}),
    updateComponentDisplayNameReducer: assign(({ context, event }) => {}),
    updateComponentLayoutInfoReducer: assign(({ context, event }) => {}),
    updateComponentNodeHeightReducer: assign(({ context, event }) => {}),
    updateComponentPositionReducer: assign(({ context, event }) => {}),
    updateComponentPropsReducer: assign(({ context, event }) => {}),
    updateComponentReflowReducer: assign(({ context, event }) => {}),
    updateCurrentPageStyleReducer: assign(({ context, event }) => {}),
    updateDefaultSubPagePathReducer: assign(({ context, event }) => {}),
    updateMultiComponentPropsReducer: assign(({ context, event }) => {}),
    updateRootNodePropsReducer: assign(({ context, event }) => {}),
    updateSectionViewPropsReducer: assign(({ context, event }) => {}),
    updateSubPagePathReducer: assign(({ context, event }) => {}),
    updateTargetPageLayoutReducer: assign(({ context, event }) => {}),
    updateTargetPagePropsReducer: assign(({ context, event }) => {}),
    updateViewportSizeReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "components",
  initial: "idle",
  context: ({ input }: any) => ({
    ...componentsInitialState,
    ...getFromMock().currentApp.components,
    ...input,
  }),
  states: {
    idle: {
      on: {
        addComponent: { actions: ["addComponentReducer"] },
        addModalComponent: { actions: ["addModalComponentReducer"] },
        addPageNodeWithSortOrder: { actions: ["addPageNodeWithSortOrderReducer"] },
        addSectionView: { actions: ["addSectionViewReducer"] },
        addSectionViewConfigByConfig: { actions: ["addSectionViewConfigByConfigReducer"] },
        addSubPage: { actions: ["addSubPageReducer"] },
        addTargetPageSection: { actions: ["addTargetPageSectionReducer"] },
        batchUpdateComponentLayoutInfo: { actions: ["batchUpdateComponentLayoutInfoReducer"] },
        batchUpdateComponentLayoutInfoWhenReflow: {
          actions: ["batchUpdateComponentLayoutInfoWhenReflowReducer"],
        },
        batchUpdateMultiComponentSliceProps: {
          actions: ["batchUpdateMultiComponentSlicePropsReducer"],
        },
        deleteComponentNode: { actions: ["deleteComponentNodeReducer"] },
        deleteCurrentPageStyle: { actions: ["deleteCurrentPageStyleReducer"] },
        deleteGlobalStateByKey: { actions: ["deleteGlobalStateByKeyReducer"] },
        deletePageNode: { actions: ["deletePageNodeReducer"] },
        deleteSectionView: { actions: ["deleteSectionViewReducer"] },
        deleteSubPageViewNode: { actions: ["deleteSubPageViewNodeReducer"] },
        deleteTargetPageSection: { actions: ["deleteTargetPageSectionReducer"] },
        initComponent: { actions: ["initComponentReducer"] },
        resetComponents: { actions: ["resetComponentsReducer"] },
        setComponentProps: { actions: ["setComponentPropsReducer"] },
        setGlobalState: { actions: ["setGlobalStateReducer"] },
        sortComponentNodeChildren: { actions: ["sortComponentNodeChildrenReducer"] },
        updateComponentDisplayName: { actions: ["updateComponentDisplayNameReducer"] },
        updateComponentLayoutInfo: { actions: ["updateComponentLayoutInfoReducer"] },
        updateComponentNodeHeight: { actions: ["updateComponentNodeHeightReducer"] },
        updateComponentPosition: { actions: ["updateComponentPositionReducer"] },
        updateComponentProps: { actions: ["updateComponentPropsReducer"] },
        updateComponentReflow: { actions: ["updateComponentReflowReducer"] },
        updateCurrentPageStyle: { actions: ["updateCurrentPageStyleReducer"] },
        updateDefaultSubPagePath: { actions: ["updateDefaultSubPagePathReducer"] },
        updateMultiComponentProps: { actions: ["updateMultiComponentPropsReducer"] },
        updateRootNodeProps: { actions: ["updateRootNodePropsReducer"] },
        updateSectionViewProps: { actions: ["updateSectionViewPropsReducer"] },
        updateSubPagePath: { actions: ["updateSubPagePathReducer"] },
        updateTargetPageLayout: { actions: ["updateTargetPageLayoutReducer"] },
        updateTargetPageProps: { actions: ["updateTargetPagePropsReducer"] },
        updateViewportSize: { actions: ["updateViewportSizeReducer"] },
      },
    },
  },
})
