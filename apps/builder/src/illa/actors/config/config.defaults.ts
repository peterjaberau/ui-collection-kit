export enum ILLA_WEBSOCKET_STATUS {
  INIT = "INIT",
  CONNECTING = "CONNECTING",
  CONNECTED = "CONNECTED",
  CLOSED = "CLOSED",
  FAILED = "FAILED",
  LOCKING = "LOCKING",
}

export enum ILLA_WEBSOCKET_CONTEXT {
  DASHBOARD = "DASHBOARD",
  APP = "APP",
  APP_BINARY = "APP_BINARY",
  AI_AGENT = "AI_AGENT",
}


export const configInitialState = {
  openLeftPanel: true,
  mode: "edit",
  openBottomPanel: true,
  openRightPanel: true,
  openDebugger: false,
  scale: 100,
  selectedComponents: [],
  selectedAction: null,
  cachedAction: null,
  showDot: false,
  expandedKeys: [],
  canvasHeight: 1080,
  canvasWidth: 1920,
  isOnline: true,
  hoveredComponents: [],
  expandedWidgets: {},
  wsStatus: {
    [ILLA_WEBSOCKET_CONTEXT.DASHBOARD]: ILLA_WEBSOCKET_STATUS.INIT,
    [ILLA_WEBSOCKET_CONTEXT.APP]: ILLA_WEBSOCKET_STATUS.INIT,
    [ILLA_WEBSOCKET_CONTEXT.APP_BINARY]: ILLA_WEBSOCKET_STATUS.INIT,
    [ILLA_WEBSOCKET_CONTEXT.AI_AGENT]: ILLA_WEBSOCKET_STATUS.INIT,
  },
  draggingComponentIDs: [],
  resizingComponentIDs: [],
}
