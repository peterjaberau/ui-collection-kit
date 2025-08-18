import { createMachine, setup, assign, spawnChild  } from "xstate"
import { DEFAULT_DRIVERS, DEFAULT_EFFECTS, DEFAULT_SHORTCUTS } from "#packages/core/presets"

export const defaultEngineProps = {
  shortcuts: [],
  effects: [],
  drivers: [],
  rootComponentName: 'Root',
  sourceIdAttrName: 'data-designer-source-id',
  nodeIdAttrName: 'data-designer-node-id',
  contentEditableAttrName: 'data-content-editable',
  contentEditableNodeIdAttrName: 'data-content-editable-node-id',
  clickStopPropagationAttrName: 'data-click-stop-propagation',
  nodeSelectionIdAttrName: 'data-designer-node-helpers-id',
  nodeDragHandlerAttrName: 'data-designer-node-drag-handler',
  screenResizeHandlerAttrName: 'data-designer-screen-resize-handler',
  nodeResizeHandlerAttrName: 'data-designer-node-resize-handler',
  outlineNodeIdAttrName: 'data-designer-outline-node-id',
  nodeTranslateAttrName: 'data-designer-node-translate-handler',
  defaultScreenType: 'PC'
}

export const coreDesignerEngineMachine = createMachine({
  context: ({ input }: any) => {
    const drivers = input.drivers || []
    const effects = input.effects || []
    const shortcuts = input.shortcuts || []

    return {
      ...defaultEngineProps,
      ...input,
      effects: [...effects, ...DEFAULT_EFFECTS],
      drivers: [...drivers, ...DEFAULT_DRIVERS],
      shortcuts: [...shortcuts, ...DEFAULT_SHORTCUTS],
      workbench: null,
      keyboard: null,
      cursor: null,
      screen: null,
    }

  }
})
