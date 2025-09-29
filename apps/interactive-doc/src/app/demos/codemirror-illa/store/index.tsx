import { createStoreHook } from "@xstate/store/react"
import { updateComponentPropsReducer } from "#codemirror-illa/store/reducers"

export const useRootStore: any = createStoreHook({
  context: {
    config: {
      openLeftPanel: true,
      mode: 'edit',
      openBottomPanel: true,
      openRightPanel: true,
      openDebugger: false,
      scale: 100,
      selectedComponents: [
        'txt_left_summary'
      ],
      selectedAction: null,
      cachedAction: null,
      showDot: false,
      expandedKeys: [],
      canvasHeight: 280,
      canvasWidth: 775,
      isOnline: true,
      hoveredComponents: [],
      expandedWidgets: {
        canvas1: true,
        toolPanelLeft: true,
        'bodySection1-bodySectionContainer1': true,
        bodySection1: true,
        page1: true,
        root: true,
        canvas13: true,
        summaryLeft: true
      },
      wsStatus: {
        DASHBOARD: 'INIT',
        APP: 'CONNECTED',
        APP_BINARY: 'CONNECTED',
        AI_AGENT: 'INIT'
      },
      draggingComponentIDs: [],
      resizingComponentIDs: []
    },
    currentApp: {
      components: {
        root: {
          version: 0,
          displayName: 'root',
          parentNode: '',
          showName: 'root',
          childrenNode: [
            'page1',
            'page2'
          ],
          type: 'DOT_PANEL',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {
            currentPageIndex: 0,
            pageSortedKey: [
              'page1',
              'page2'
            ],
            viewportSizeType: 'fluid'
          }
        },
        page1: {
          version: 0,
          displayName: 'page1',
          parentNode: 'root',
          showName: 'page',
          childrenNode: [
            'bodySection1',
            'modalSection1'
          ],
          type: 'PAGE_NODE',
          containerType: 'EDITOR_PAGE_SQUARE',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: 'auto',
            canvasWidth: 100,
            footerColumns: 32,
            hasFooter: false,
            hasHeader: false,
            hasLeft: false,
            hasRight: false,
            headerColumns: 32,
            isFooterFixed: true,
            isHeaderFixed: true,
            isLeftFixed: true,
            isRightFixed: true,
            layout: 'default',
            leftColumns: 8,
            leftPosition: 'NONE',
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: 'NONE',
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0
          }
        },
        bodySection1: {
          version: 0,
          displayName: 'bodySection1',
          parentNode: 'page1',
          showName: 'bodySection',
          childrenNode: [
            'bodySection1-bodySectionContainer1'
          ],
          type: 'SECTION_NODE',
          containerType: 'EDITOR_LAYOUT_SQUARE',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {
            currentViewIndex: 0,
            defaultViewKey: 'sub-page1',
            sectionViewConfigs: [
              {
                id: '35169c4f-77f0-4695-b77d-348ca0d341cb',
                key: 'sub-page1',
                path: 'sub-page1',
                viewDisplayName: 'bodySection1-bodySectionContainer1'
              }
            ],
            style: {
              padding: {
                mode: 'all',
                size: '24'
              }
            },
            viewSortedKey: [
              'bodySection1-bodySectionContainer1'
            ]
          }
        },
        'bodySection1-bodySectionContainer1': {
          version: 0,
          displayName: 'bodySection1-bodySectionContainer1',
          parentNode: 'bodySection1',
          showName: 'bodySection1-bodySectionContainer1',
          childrenNode: [
            'toolPanelLeft',
            'toolPanelRight',
            'contentLeft',
            'contentRight',
            'summaryLeft',
            'summaryRight'
          ],
          type: 'CONTAINER_NODE',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        toolPanelLeft: {
          version: 0,
          displayName: 'toolPanelLeft',
          parentNode: 'bodySection1-bodySectionContainer1',
          showName: 'container',
          childrenNode: [
            'canvas1'
          ],
          type: 'CONTAINER_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 13,
          w: 12,
          minH: 3,
          minW: 1,
          x: 1,
          y: 12,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ]
          }
        },
        canvas1: {
          version: 0,
          displayName: 'canvas1',
          parentNode: 'toolPanelLeft',
          showName: 'canvas',
          childrenNode: [
            'btn_left_right',
            'btn_left_left',
            'btn_left_reset'
          ],
          type: 'CANVAS',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 1,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        btn_left_right: {
          version: 0,
          displayName: 'btn_left_right',
          parentNode: 'canvas1',
          showName: 'button',
          childrenNode: [],
          type: 'BUTTON_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 11,
          minH: 3,
          minW: 1,
          x: 11,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856',
                widgetID: 'txt_left_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: {{txt_right_static.value}}'
              }
            ],
            hidden: false,
            text: 'Left from Right\n',
            variant: 'fill'
          }
        },
        btn_left_left: {
          version: 0,
          displayName: 'btn_left_left',
          parentNode: 'canvas1',
          showName: 'button',
          childrenNode: [],
          type: 'BUTTON_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 10,
          minH: 3,
          minW: 1,
          x: 0,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77',
                widgetID: 'txt_left_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: {{txt_left_static.value}}'
              }
            ],
            hidden: false,
            text: 'Left from Left ',
            variant: 'fill'
          }
        },
        btn_left_reset: {
          version: 0,
          displayName: 'btn_left_reset',
          parentNode: 'canvas1',
          showName: 'button',
          childrenNode: [],
          type: 'BUTTON_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 9,
          minH: 3,
          minW: 1,
          x: 23,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-d1e58278-9cdf-442c-afe2-f31002abc738',
                widgetID: 'txt_left_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: -'
              }
            ],
            hidden: false,
            text: 'Left Reset',
            variant: 'fill'
          }
        },
        toolPanelRight: {
          version: 0,
          displayName: 'toolPanelRight',
          parentNode: 'bodySection1-bodySectionContainer1',
          showName: 'container',
          childrenNode: [
            'canvas4'
          ],
          type: 'CONTAINER_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 13,
          w: 12,
          minH: 3,
          minW: 1,
          x: 15,
          y: 11,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ]
          }
        },
        canvas4: {
          version: 0,
          displayName: 'canvas4',
          parentNode: 'toolPanelRight',
          showName: 'canvas',
          childrenNode: [
            'btn_right_right',
            'btn_right_left',
            'btn_right_reset'
          ],
          type: 'CANVAS',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 1,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        btn_right_right: {
          version: 0,
          displayName: 'btn_right_right',
          parentNode: 'canvas4',
          showName: 'button',
          childrenNode: [],
          type: 'BUTTON_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 11,
          minH: 3,
          minW: 1,
          x: 0,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-5ae6905f-9994-4c38-8a32-12b267349c83',
                widgetID: 'txt_right_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: {{txt_right_static.value}}'
              }
            ],
            hidden: false,
            text: 'Right from Right\n',
            variant: 'fill'
          }
        },
        btn_right_left: {
          version: 0,
          displayName: 'btn_right_left',
          parentNode: 'canvas4',
          showName: 'button',
          childrenNode: [],
          type: 'BUTTON_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 12,
          minH: 3,
          minW: 1,
          x: 11,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302',
                widgetID: 'txt_right_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: {{txt_left_static.value}}'
              }
            ],
            hidden: false,
            text: 'Right from Left\n',
            variant: 'fill'
          }
        },
        btn_right_reset: {
          version: 0,
          displayName: 'btn_right_reset',
          parentNode: 'canvas4',
          showName: 'button',
          childrenNode: [],
          type: 'BUTTON_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 9,
          minH: 3,
          minW: 1,
          x: 23,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-40c8fbdc-8700-4007-a641-8a2a2117ba32',
                widgetID: 'txt_right_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: -'
              }
            ],
            hidden: false,
            text: 'Right Reset\n',
            variant: 'fill'
          }
        },
        contentLeft: {
          version: 0,
          displayName: 'contentLeft',
          parentNode: 'bodySection1-bodySectionContainer1',
          showName: 'container',
          childrenNode: [
            'canvas7'
          ],
          type: 'CONTAINER_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 13,
          w: 12,
          minH: 3,
          minW: 1,
          x: 1,
          y: 39,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ]
          }
        },
        canvas7: {
          version: 0,
          displayName: 'canvas7',
          parentNode: 'contentLeft',
          showName: 'canvas',
          childrenNode: [
            'txt_left_static',
            'txt_left_dynamic'
          ],
          type: 'CANVAS',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 1,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        txt_left_static: {
          version: 0,
          displayName: 'txt_left_static',
          parentNode: 'canvas7',
          showName: 'text',
          childrenNode: [],
          type: 'TEXT_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 32,
          minH: 3,
          minW: 1,
          x: 0,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'STATIC text from left container',
            verticalAlign: 'center',
            weight: 400
          }
        },
        txt_left_dynamic: {
          version: 0,
          displayName: 'txt_left_dynamic',
          parentNode: 'canvas7',
          showName: 'text',
          childrenNode: [],
          type: 'TEXT_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 32,
          minH: 3,
          minW: 1,
          x: 0,
          y: 9,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'dynamic left',
            verticalAlign: 'center',
            weight: 400
          }
        },
        contentRight: {
          version: 0,
          displayName: 'contentRight',
          parentNode: 'bodySection1-bodySectionContainer1',
          showName: 'container',
          childrenNode: [
            'canvas10'
          ],
          type: 'CONTAINER_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 21,
          w: 12,
          minH: 3,
          minW: 1,
          x: 15,
          y: 39,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ]
          }
        },
        canvas10: {
          version: 0,
          displayName: 'canvas10',
          parentNode: 'contentRight',
          showName: 'canvas',
          childrenNode: [
            'txt_right_static',
            'txt_right_dynamic'
          ],
          type: 'CANVAS',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 1,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        txt_right_static: {
          version: 0,
          displayName: 'txt_right_static',
          parentNode: 'canvas10',
          showName: 'text',
          childrenNode: [],
          type: 'TEXT_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 31,
          minH: 3,
          minW: 1,
          x: 0,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'STATIC text from right container',
            verticalAlign: 'center',
            weight: 400
          }
        },
        txt_right_dynamic: {
          version: 0,
          displayName: 'txt_right_dynamic',
          parentNode: 'canvas10',
          showName: 'text',
          childrenNode: [],
          type: 'TEXT_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 32,
          minH: 3,
          minW: 1,
          x: 0,
          y: 9,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'dynamic right',
            verticalAlign: 'center',
            weight: 400
          }
        },
        summaryLeft: {
          version: 0,
          displayName: 'summaryLeft',
          parentNode: 'bodySection1-bodySectionContainer1',
          showName: 'container',
          childrenNode: [
            'canvas13'
          ],
          type: 'CONTAINER_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 21,
          w: 12,
          minH: 3,
          minW: 1,
          x: 1,
          y: 66,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ]
          }
        },
        canvas13: {
          version: 0,
          displayName: 'canvas13',
          parentNode: 'summaryLeft',
          showName: 'canvas',
          childrenNode: [
            'txt_left_summary'
          ],
          type: 'CANVAS',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 1,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        txt_left_summary: {
          version: 0,
          displayName: 'txt_left_summary',
          parentNode: 'canvas13',
          showName: 'text',
          childrenNode: [],
          type: 'TEXT_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 32,
          minH: 3,
          minW: 1,
          x: 0,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [
              'value'
            ],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'auto',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'HORIZONTAL',
            value: 'Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}]',
            verticalAlign: 'center',
            weight: 400
          }
        },
        summaryRight: {
          version: 0,
          displayName: 'summaryRight',
          parentNode: 'bodySection1-bodySectionContainer1',
          showName: 'container',
          childrenNode: [
            'canvas16'
          ],
          type: 'CONTAINER_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 21,
          w: 12,
          minH: 3,
          minW: 1,
          x: 15,
          y: 66,
          z: 0,
          props: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'View 1',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ]
          }
        },
        canvas16: {
          version: 0,
          displayName: 'canvas16',
          parentNode: 'summaryRight',
          showName: 'canvas',
          childrenNode: [
            'txt_right_summary'
          ],
          type: 'CANVAS',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 1,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        txt_right_summary: {
          version: 0,
          displayName: 'txt_right_summary',
          parentNode: 'canvas16',
          showName: 'text',
          childrenNode: [],
          type: 'TEXT_WIDGET',
          containerType: 'EDITOR_SCALE_SQUARE',
          h: 5,
          w: 32,
          minH: 3,
          minW: 1,
          x: 0,
          y: 0,
          z: 0,
          props: {
            $dynamicAttrPaths: [
              'value'
            ],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'auto',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'HORIZONTAL',
            value: 'Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]',
            verticalAlign: 'center',
            weight: 400
          }
        },
        modalSection1: {
          version: 0,
          displayName: 'modalSection1',
          parentNode: 'page1',
          showName: 'modalSection',
          childrenNode: [],
          type: 'MODAL_SECTION_NODE',
          containerType: 'EDITOR_LAYOUT_SQUARE',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        page2: {
          version: 0,
          displayName: 'page2',
          parentNode: 'root',
          showName: 'page',
          childrenNode: [
            'bodySection2',
            'modalSection2'
          ],
          type: 'PAGE_NODE',
          containerType: 'EDITOR_PAGE_SQUARE',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: 'auto',
            canvasWidth: 100,
            footerColumns: 32,
            hasFooter: false,
            hasHeader: false,
            hasLeft: false,
            hasRight: false,
            headerColumns: 32,
            isFooterFixed: true,
            isHeaderFixed: true,
            isLeftFixed: true,
            isRightFixed: true,
            layout: 'default',
            leftColumns: 8,
            leftPosition: 'NONE',
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: 'NONE',
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0
          }
        },
        bodySection2: {
          version: 0,
          displayName: 'bodySection2',
          parentNode: 'page2',
          showName: 'bodySection',
          childrenNode: [
            'bodySection2-bodySectionContainer1'
          ],
          type: 'SECTION_NODE',
          containerType: 'EDITOR_LAYOUT_SQUARE',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {
            currentViewIndex: 0,
            defaultViewKey: 'sub-page1',
            sectionViewConfigs: [
              {
                id: '59985592-a6f2-4f0b-90f3-a197944fd46d',
                key: 'sub-page1',
                path: 'sub-page1',
                viewDisplayName: 'bodySection2-bodySectionContainer1'
              }
            ],
            style: {
              padding: {
                mode: 'all',
                size: '24'
              }
            },
            viewSortedKey: [
              'bodySection2-bodySectionContainer1'
            ]
          }
        },
        'bodySection2-bodySectionContainer1': {
          version: 0,
          displayName: 'bodySection2-bodySectionContainer1',
          parentNode: 'bodySection2',
          showName: 'bodySectionContainer',
          childrenNode: [],
          type: 'CONTAINER_NODE',
          containerType: 'EDITOR_DOT_PANEL',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        },
        modalSection2: {
          version: 0,
          displayName: 'modalSection2',
          parentNode: 'page2',
          showName: 'modalSection',
          childrenNode: [],
          type: 'MODAL_SECTION_NODE',
          containerType: 'EDITOR_LAYOUT_SQUARE',
          h: 0,
          w: 0,
          minH: 0,
          minW: 0,
          x: -1,
          y: -1,
          z: 0,
          props: {}
        }
      },
      action: [],
      appInfo: {
        appId: 'ILAfx4p1C7dV',
        uid: 'b64ff14c-3a60-4925-883a-76d85e99d619',
        teamID: 'ILAfx4p1C7d0',
        appName: 'app-dynamic-string-triggers',
        releaseVersion: 3,
        mainlineVersion: 3,
        deployed: true,
        config: {
          'public': false,
          waterMark: true,
          description: '',
          publishedToMarketplace: false,
          publishWithAIAgent: false,
          cover: '',
          appType: 'pc',
          components: [
            'BUTTON_WIDGET',
            'CONTAINER_WIDGET',
            'TEXT_WIDGET'
          ],
          actions: []
        },
        updatedBy: 'ILAfx4p1C7dZ',
        updatedAt: '2025-09-29T02:12:23.275136Z',
        appActivity: {
          modifier: 'root',
          modifiedAt: '2025-09-29T02:12:23.275136Z'
        },
        editedBy: [
          {
            userID: 'ILAfx4p1C7dZ',
            nickname: 'root',
            email: 'root',
            avatar: '',
            editedAt: '2025-09-29T02:12:23.275136669Z'
          }
        ]
      },
      collaborators: {
        inRoomUsers: [
          {
            id: 'ILAfx4p1C7dZ',
            nickname: 'root',
            avatar: ''
          }
        ],
        components: {
          btn_left_left: [],
          txt_left_summary: [
            {
              id: 'ILAfx4p1C7dZ',
              nickname: 'root',
              avatar: ''
            }
          ]
        }
      },
      execution: {
        dependencies: {
          'btn_left_right.events[0].widgetTargetValue': [
            'txt_right_static.value'
          ],
          'btn_left_left.events[0].widgetTargetValue': [
            'txt_left_static.value'
          ],
          'btn_right_right.events[0].widgetTargetValue': [
            'txt_right_static.value'
          ],
          'btn_right_left.events[0].widgetTargetValue': [
            'txt_left_static.value'
          ],
          'txt_left_summary.value': [
            'txt_left_static.value',
            'txt_left_dynamic.value'
          ],
          'txt_right_summary.value': [
            'txt_right_static.value',
            'txt_right_dynamic.value'
          ],
          'currentPageInfo.pagePath': [
            'root.pageSortedKey',
            'root.currentPageIndex'
          ],
          'currentPageInfo.subPagePath': [
            'root.currentSubPagePath'
          ]
        },
        result: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: [
              'page1',
              'page2'
            ],
            viewportSizeType: 'fluid',
            displayName: 'root',
            $parentNode: '',
            $type: 'WIDGET',
            $widgetType: 'DOT_PANEL',
            $childrenNode: [
              'page1',
              'page2'
            ]
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: 'auto',
            canvasWidth: 100,
            footerColumns: 32,
            hasFooter: false,
            hasHeader: false,
            hasLeft: false,
            hasRight: false,
            headerColumns: 32,
            isFooterFixed: true,
            isHeaderFixed: true,
            isLeftFixed: true,
            isRightFixed: true,
            layout: 'default',
            leftColumns: 8,
            leftPosition: 'NONE',
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: 'NONE',
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: 'page1',
            $parentNode: 'root',
            $type: 'WIDGET',
            $widgetType: 'PAGE_NODE',
            $childrenNode: [
              'bodySection1',
              'modalSection1'
            ],
            $parentPageName: 'page1'
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: 'sub-page1',
            sectionViewConfigs: [
              {
                id: '35169c4f-77f0-4695-b77d-348ca0d341cb',
                key: 'sub-page1',
                path: 'sub-page1',
                viewDisplayName: 'bodySection1-bodySectionContainer1'
              }
            ],
            style: {
              padding: {
                mode: 'all',
                size: '24'
              }
            },
            viewSortedKey: [
              'bodySection1-bodySectionContainer1'
            ],
            displayName: 'bodySection1',
            $parentNode: 'page1',
            $type: 'WIDGET',
            $widgetType: 'SECTION_NODE',
            $childrenNode: [
              'bodySection1-bodySectionContainer1'
            ],
            $parentPageName: 'page1'
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ],
            displayName: 'toolPanelLeft',
            $parentNode: 'bodySection1-bodySectionContainer1',
            $type: 'WIDGET',
            $widgetType: 'CONTAINER_WIDGET',
            $childrenNode: [
              'canvas1'
            ],
            $parentPageName: 'page1',
            $validationPaths: {
              viewList: [
                {
                  key: 'String',
                  label: 'String',
                  disabled: 'Boolean',
                  hidden: 'Boolean'
                }
              ],
              tooltipText: 'String'
            }
          },
          canvas1: {
            displayName: 'canvas1',
            $parentNode: 'toolPanelLeft',
            $type: 'WIDGET',
            $widgetType: 'CANVAS',
            $childrenNode: [
              'btn_left_right',
              'btn_left_left',
              'btn_left_reset'
            ],
            $parentPageName: 'page1'
          },
          btn_left_right: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856',
                widgetID: 'txt_left_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: STATIC text from right container'
              }
            ],
            hidden: false,
            text: 'Left from Right\n',
            variant: 'fill',
            displayName: 'btn_left_right',
            $parentNode: 'canvas1',
            $type: 'WIDGET',
            $widgetType: 'BUTTON_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              text: 'String',
              events: [
                {
                  widgetSwitchTargetValue: 'Boolean',
                  pageIndex: 'Number',
                  sortKey: 'String',
                  sortOrder: 'String',
                  filters: 'Array',
                  operator: 'String',
                  disabled: 'Boolean',
                  script: 'String',
                  url: 'String',
                  newTab: 'Boolean',
                  key: 'String',
                  index: 'Number',
                  showNextViewLoopBack: 'Boolean',
                  showNextVisibleViewLoopBack: 'Boolean',
                  showPreviousViewLoopBack: 'Boolean',
                  showPreviousVisibleViewLoopBack: 'Boolean',
                  title: 'String',
                  description: 'String',
                  pagePath: 'String',
                  viewPath: 'String',
                  duration: 'Number',
                  fileName: 'String',
                  fileType: 'String',
                  enabled: 'Boolean',
                  widgetTargetValue: 'String'
                }
              ],
              loading: 'Boolean',
              disabled: 'Boolean',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          btn_left_left: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77',
                widgetID: 'txt_left_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: STATIC text from left container'
              }
            ],
            hidden: false,
            text: 'Left from Left ',
            variant: 'fill',
            displayName: 'btn_left_left',
            $parentNode: 'canvas1',
            $type: 'WIDGET',
            $widgetType: 'BUTTON_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              text: 'String',
              events: [
                {
                  widgetSwitchTargetValue: 'Boolean',
                  pageIndex: 'Number',
                  sortKey: 'String',
                  sortOrder: 'String',
                  filters: 'Array',
                  operator: 'String',
                  disabled: 'Boolean',
                  script: 'String',
                  url: 'String',
                  newTab: 'Boolean',
                  key: 'String',
                  index: 'Number',
                  showNextViewLoopBack: 'Boolean',
                  showNextVisibleViewLoopBack: 'Boolean',
                  showPreviousViewLoopBack: 'Boolean',
                  showPreviousVisibleViewLoopBack: 'Boolean',
                  title: 'String',
                  description: 'String',
                  pagePath: 'String',
                  viewPath: 'String',
                  duration: 'Number',
                  fileName: 'String',
                  fileType: 'String',
                  enabled: 'Boolean',
                  widgetTargetValue: 'String'
                }
              ],
              loading: 'Boolean',
              disabled: 'Boolean',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-d1e58278-9cdf-442c-afe2-f31002abc738',
                widgetID: 'txt_left_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: -'
              }
            ],
            hidden: false,
            text: 'Left Reset',
            variant: 'fill',
            displayName: 'btn_left_reset',
            $parentNode: 'canvas1',
            $type: 'WIDGET',
            $widgetType: 'BUTTON_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              text: 'String',
              events: [
                {
                  widgetSwitchTargetValue: 'Boolean',
                  pageIndex: 'Number',
                  sortKey: 'String',
                  sortOrder: 'String',
                  filters: 'Array',
                  operator: 'String',
                  disabled: 'Boolean',
                  script: 'String',
                  url: 'String',
                  newTab: 'Boolean',
                  key: 'String',
                  index: 'Number',
                  showNextViewLoopBack: 'Boolean',
                  showNextVisibleViewLoopBack: 'Boolean',
                  showPreviousViewLoopBack: 'Boolean',
                  showPreviousVisibleViewLoopBack: 'Boolean',
                  title: 'String',
                  description: 'String',
                  pagePath: 'String',
                  viewPath: 'String',
                  duration: 'Number',
                  fileName: 'String',
                  fileType: 'String',
                  enabled: 'Boolean',
                  widgetTargetValue: 'String'
                }
              ],
              loading: 'Boolean',
              disabled: 'Boolean',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ],
            displayName: 'toolPanelRight',
            $parentNode: 'bodySection1-bodySectionContainer1',
            $type: 'WIDGET',
            $widgetType: 'CONTAINER_WIDGET',
            $childrenNode: [
              'canvas4'
            ],
            $parentPageName: 'page1',
            $validationPaths: {
              viewList: [
                {
                  key: 'String',
                  label: 'String',
                  disabled: 'Boolean',
                  hidden: 'Boolean'
                }
              ],
              tooltipText: 'String'
            }
          },
          canvas4: {
            displayName: 'canvas4',
            $parentNode: 'toolPanelRight',
            $type: 'WIDGET',
            $widgetType: 'CANVAS',
            $childrenNode: [
              'btn_right_right',
              'btn_right_left',
              'btn_right_reset'
            ],
            $parentPageName: 'page1'
          },
          btn_right_right: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-5ae6905f-9994-4c38-8a32-12b267349c83',
                widgetID: 'txt_right_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: STATIC text from right container'
              }
            ],
            hidden: false,
            text: 'Right from Right\n',
            variant: 'fill',
            displayName: 'btn_right_right',
            $parentNode: 'canvas4',
            $type: 'WIDGET',
            $widgetType: 'BUTTON_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              text: 'String',
              events: [
                {
                  widgetSwitchTargetValue: 'Boolean',
                  pageIndex: 'Number',
                  sortKey: 'String',
                  sortOrder: 'String',
                  filters: 'Array',
                  operator: 'String',
                  disabled: 'Boolean',
                  script: 'String',
                  url: 'String',
                  newTab: 'Boolean',
                  key: 'String',
                  index: 'Number',
                  showNextViewLoopBack: 'Boolean',
                  showNextVisibleViewLoopBack: 'Boolean',
                  showPreviousViewLoopBack: 'Boolean',
                  showPreviousVisibleViewLoopBack: 'Boolean',
                  title: 'String',
                  description: 'String',
                  pagePath: 'String',
                  viewPath: 'String',
                  duration: 'Number',
                  fileName: 'String',
                  fileType: 'String',
                  enabled: 'Boolean',
                  widgetTargetValue: 'String'
                }
              ],
              loading: 'Boolean',
              disabled: 'Boolean',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          btn_right_left: {
            $dynamicAttrPaths: [
              'events[0].widgetTargetValue'
            ],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302',
                widgetID: 'txt_right_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: STATIC text from left container'
              }
            ],
            hidden: false,
            text: 'Right from Left\n',
            variant: 'fill',
            displayName: 'btn_right_left',
            $parentNode: 'canvas4',
            $type: 'WIDGET',
            $widgetType: 'BUTTON_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              text: 'String',
              events: [
                {
                  widgetSwitchTargetValue: 'Boolean',
                  pageIndex: 'Number',
                  sortKey: 'String',
                  sortOrder: 'String',
                  filters: 'Array',
                  operator: 'String',
                  disabled: 'Boolean',
                  script: 'String',
                  url: 'String',
                  newTab: 'Boolean',
                  key: 'String',
                  index: 'Number',
                  showNextViewLoopBack: 'Boolean',
                  showNextVisibleViewLoopBack: 'Boolean',
                  showPreviousViewLoopBack: 'Boolean',
                  showPreviousVisibleViewLoopBack: 'Boolean',
                  title: 'String',
                  description: 'String',
                  pagePath: 'String',
                  viewPath: 'String',
                  duration: 'Number',
                  fileName: 'String',
                  fileType: 'String',
                  enabled: 'Boolean',
                  widgetTargetValue: 'String'
                }
              ],
              loading: 'Boolean',
              disabled: 'Boolean',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: 'blue',
            events: [
              {
                actionType: 'widget',
                eventType: 'click',
                id: 'events-40c8fbdc-8700-4007-a641-8a2a2117ba32',
                widgetID: 'txt_right_dynamic',
                widgetMethod: 'setValue',
                widgetTargetValue: 'Dynamic: -'
              }
            ],
            hidden: false,
            text: 'Right Reset\n',
            variant: 'fill',
            displayName: 'btn_right_reset',
            $parentNode: 'canvas4',
            $type: 'WIDGET',
            $widgetType: 'BUTTON_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              text: 'String',
              events: [
                {
                  widgetSwitchTargetValue: 'Boolean',
                  pageIndex: 'Number',
                  sortKey: 'String',
                  sortOrder: 'String',
                  filters: 'Array',
                  operator: 'String',
                  disabled: 'Boolean',
                  script: 'String',
                  url: 'String',
                  newTab: 'Boolean',
                  key: 'String',
                  index: 'Number',
                  showNextViewLoopBack: 'Boolean',
                  showNextVisibleViewLoopBack: 'Boolean',
                  showPreviousViewLoopBack: 'Boolean',
                  showPreviousVisibleViewLoopBack: 'Boolean',
                  title: 'String',
                  description: 'String',
                  pagePath: 'String',
                  viewPath: 'String',
                  duration: 'Number',
                  fileName: 'String',
                  fileType: 'String',
                  enabled: 'Boolean',
                  widgetTargetValue: 'String'
                }
              ],
              loading: 'Boolean',
              disabled: 'Boolean',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ],
            displayName: 'contentLeft',
            $parentNode: 'bodySection1-bodySectionContainer1',
            $type: 'WIDGET',
            $widgetType: 'CONTAINER_WIDGET',
            $childrenNode: [
              'canvas7'
            ],
            $parentPageName: 'page1',
            $validationPaths: {
              viewList: [
                {
                  key: 'String',
                  label: 'String',
                  disabled: 'Boolean',
                  hidden: 'Boolean'
                }
              ],
              tooltipText: 'String'
            }
          },
          canvas7: {
            displayName: 'canvas7',
            $parentNode: 'contentLeft',
            $type: 'WIDGET',
            $widgetType: 'CANVAS',
            $childrenNode: [
              'txt_left_static',
              'txt_left_dynamic'
            ],
            $parentPageName: 'page1'
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'STATIC text from left container',
            verticalAlign: 'center',
            weight: 400,
            displayName: 'txt_left_static',
            $parentNode: 'canvas7',
            $type: 'WIDGET',
            $widgetType: 'TEXT_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              value: 'String',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'dynamic left',
            verticalAlign: 'center',
            weight: 400,
            displayName: 'txt_left_dynamic',
            $parentNode: 'canvas7',
            $type: 'WIDGET',
            $widgetType: 'TEXT_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              value: 'String',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ],
            displayName: 'contentRight',
            $parentNode: 'bodySection1-bodySectionContainer1',
            $type: 'WIDGET',
            $widgetType: 'CONTAINER_WIDGET',
            $childrenNode: [
              'canvas10'
            ],
            $parentPageName: 'page1',
            $validationPaths: {
              viewList: [
                {
                  key: 'String',
                  label: 'String',
                  disabled: 'Boolean',
                  hidden: 'Boolean'
                }
              ],
              tooltipText: 'String'
            }
          },
          canvas10: {
            displayName: 'canvas10',
            $parentNode: 'contentRight',
            $type: 'WIDGET',
            $widgetType: 'CANVAS',
            $childrenNode: [
              'txt_right_static',
              'txt_right_dynamic'
            ],
            $parentPageName: 'page1'
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'STATIC text from right container',
            verticalAlign: 'center',
            weight: 400,
            displayName: 'txt_right_static',
            $parentNode: 'canvas10',
            $type: 'WIDGET',
            $widgetType: 'TEXT_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              value: 'String',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'fixed',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'ALL',
            value: 'dynamic right',
            verticalAlign: 'center',
            weight: 400,
            displayName: 'txt_right_dynamic',
            $parentNode: 'canvas10',
            $type: 'WIDGET',
            $widgetType: 'TEXT_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              value: 'String',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'defaultView',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ],
            displayName: 'summaryLeft',
            $parentNode: 'bodySection1-bodySectionContainer1',
            $type: 'WIDGET',
            $widgetType: 'CONTAINER_WIDGET',
            $childrenNode: [
              'canvas13'
            ],
            $parentPageName: 'page1',
            $validationPaths: {
              viewList: [
                {
                  key: 'String',
                  label: 'String',
                  disabled: 'Boolean',
                  hidden: 'Boolean'
                }
              ],
              tooltipText: 'String'
            }
          },
          canvas13: {
            displayName: 'canvas13',
            $parentNode: 'summaryLeft',
            $type: 'WIDGET',
            $widgetType: 'CANVAS',
            $childrenNode: [
              'txt_left_summary'
            ],
            $parentPageName: 'page1'
          },
          txt_left_summary: {
            $dynamicAttrPaths: [
              'value'
            ],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'auto',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'HORIZONTAL',
            value: 'Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left]',
            verticalAlign: 'center',
            weight: 400,
            displayName: 'txt_left_summary',
            $parentNode: 'canvas13',
            $type: 'WIDGET',
            $widgetType: 'TEXT_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              value: 'String',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: '#ffffffff',
            currentIndex: 0,
            currentKey: 'View 1',
            dynamicHeight: 'auto',
            padding: {
              mode: 'all',
              size: '24'
            },
            radius: '4px',
            resizeDirection: 'HORIZONTAL',
            shadow: 'small',
            viewList: [
              {
                id: 'e8bd1b6b-733d-4510-bcee-14ac2f58f8ba',
                key: 'defaultView',
                label: 'defaultView'
              }
            ],
            displayName: 'summaryRight',
            $parentNode: 'bodySection1-bodySectionContainer1',
            $type: 'WIDGET',
            $widgetType: 'CONTAINER_WIDGET',
            $childrenNode: [
              'canvas16'
            ],
            $parentPageName: 'page1',
            $validationPaths: {
              viewList: [
                {
                  key: 'String',
                  label: 'String',
                  disabled: 'Boolean',
                  hidden: 'Boolean'
                }
              ],
              tooltipText: 'String'
            }
          },
          canvas16: {
            displayName: 'canvas16',
            $parentNode: 'summaryRight',
            $type: 'WIDGET',
            $widgetType: 'CANVAS',
            $childrenNode: [
              'txt_right_summary'
            ],
            $parentPageName: 'page1'
          },
          txt_right_summary: {
            $dynamicAttrPaths: [
              'value'
            ],
            colorScheme: 'grayBlue',
            disableMarkdown: true,
            dynamicHeight: 'auto',
            fs: '14px',
            hidden: false,
            horizontalAlign: 'start',
            resizeDirection: 'HORIZONTAL',
            value: 'Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]',
            verticalAlign: 'center',
            weight: 400,
            displayName: 'txt_right_summary',
            $parentNode: 'canvas16',
            $type: 'WIDGET',
            $widgetType: 'TEXT_WIDGET',
            $childrenNode: [],
            $parentPageName: 'page1',
            $validationPaths: {
              value: 'String',
              tooltipText: 'String',
              hidden: 'Boolean'
            }
          },
          modalSection1: {
            displayName: 'modalSection1',
            $parentNode: 'page1',
            $type: 'WIDGET',
            $widgetType: 'MODAL_SECTION_NODE',
            $childrenNode: [],
            $parentPageName: 'page1'
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: 'auto',
            canvasWidth: 100,
            footerColumns: 32,
            hasFooter: false,
            hasHeader: false,
            hasLeft: false,
            hasRight: false,
            headerColumns: 32,
            isFooterFixed: true,
            isHeaderFixed: true,
            isLeftFixed: true,
            isRightFixed: true,
            layout: 'default',
            leftColumns: 8,
            leftPosition: 'NONE',
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: 'NONE',
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: 'page2',
            $parentNode: 'root',
            $type: 'WIDGET',
            $widgetType: 'PAGE_NODE',
            $childrenNode: [
              'bodySection2',
              'modalSection2'
            ],
            $parentPageName: 'page2'
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: 'sub-page1',
            sectionViewConfigs: [
              {
                id: '59985592-a6f2-4f0b-90f3-a197944fd46d',
                key: 'sub-page1',
                path: 'sub-page1',
                viewDisplayName: 'bodySection2-bodySectionContainer1'
              }
            ],
            style: {
              padding: {
                mode: 'all',
                size: '24'
              }
            },
            viewSortedKey: [
              'bodySection2-bodySectionContainer1'
            ],
            displayName: 'bodySection2',
            $parentNode: 'page2',
            $type: 'WIDGET',
            $widgetType: 'SECTION_NODE',
            $childrenNode: [
              'bodySection2-bodySectionContainer1'
            ],
            $parentPageName: 'page2'
          },
          modalSection2: {
            displayName: 'modalSection2',
            $parentNode: 'page2',
            $type: 'WIDGET',
            $widgetType: 'MODAL_SECTION_NODE',
            $childrenNode: [],
            $parentPageName: 'page2'
          },
          builderInfo: {
            version: '4.8.3',
            language: 'English'
          },
          currentUserInfo: {
            userID: 'ILAfx4p1C7dZ',
            nickname: 'root',
            email: 'root',
            language: 'en-US',
            createdAt: '2025-08-20T00:20:06.088056Z',
            updatedAt: '2025-08-20T00:29:59.556997Z'
          },
          urlParams: {
            query: {},
            url: 'http://localhost:3000/0/app/ILAfx4p1C7dV',
            appURL: 'http://localhost:3000/0/app/ILAfx4p1C7dV'
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: 'page1',
            $dynamicAttrPaths: [
              'pagePath',
              'subPagePath'
            ]
          },
          pageInfos: [
            {
              pagePath: '/page1',
              subPagePath: '/page1/sub-page1',
              pageName: 'page1',
              subPageName: 'sub-page1',
              isHomePage: true,
              subPageGroup: ''
            },
            {
              pagePath: '/page2',
              subPagePath: '/page2/sub-page1',
              pageName: 'page2',
              subPageName: 'sub-page1',
              isHomePage: false,
              subPageGroup: ''
            }
          ]
        },
        error: {},
        independencies: {
          'root.currentSubPagePath': [
            'currentPageInfo.subPagePath'
          ],
          'root.pageSortedKey': [
            'currentPageInfo.pagePath'
          ],
          'root.currentPageIndex': [
            'currentPageInfo.pagePath'
          ],
          'txt_right_static.value': [
            'txt_right_summary.value',
            'btn_right_right.events[0].widgetTargetValue',
            'btn_left_right.events[0].widgetTargetValue'
          ],
          'txt_right_dynamic.value': [
            'txt_right_summary.value'
          ],
          'txt_left_static.value': [
            'txt_left_summary.value',
            'btn_right_left.events[0].widgetTargetValue',
            'btn_left_left.events[0].widgetTargetValue'
          ],
          'txt_left_dynamic.value': [
            'txt_left_summary.value'
          ]
        }
      },
      cursor: {},
      dragShadow: {},
      layoutInfo: {
        widgetsLayoutInfo: {
          root: {
            displayName: 'root',
            parentNode: '',
            widgetType: 'DOT_PANEL',
            childrenNode: [
              'page1',
              'page2'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          page1: {
            displayName: 'page1',
            parentNode: 'root',
            widgetType: 'PAGE_NODE',
            childrenNode: [
              'bodySection1',
              'modalSection1'
            ],
            containerType: 'EDITOR_PAGE_SQUARE',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          bodySection1: {
            displayName: 'bodySection1',
            parentNode: 'page1',
            widgetType: 'SECTION_NODE',
            childrenNode: [
              'bodySection1-bodySectionContainer1'
            ],
            containerType: 'EDITOR_LAYOUT_SQUARE',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          'bodySection1-bodySectionContainer1': {
            displayName: 'bodySection1-bodySectionContainer1',
            parentNode: 'bodySection1',
            widgetType: 'CONTAINER_NODE',
            childrenNode: [
              'toolPanelLeft',
              'toolPanelRight',
              'contentLeft',
              'contentRight',
              'summaryLeft',
              'summaryRight'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          toolPanelLeft: {
            displayName: 'toolPanelLeft',
            parentNode: 'bodySection1-bodySectionContainer1',
            widgetType: 'CONTAINER_WIDGET',
            childrenNode: [
              'canvas1'
            ],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 1,
              y: 12,
              z: 0,
              w: 12,
              h: 13,
              minW: 1,
              minH: 3
            }
          },
          canvas1: {
            displayName: 'canvas1',
            parentNode: 'toolPanelLeft',
            widgetType: 'CANVAS',
            childrenNode: [
              'btn_left_right',
              'btn_left_left',
              'btn_left_reset'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          btn_left_right: {
            displayName: 'btn_left_right',
            parentNode: 'canvas1',
            widgetType: 'BUTTON_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 11,
              y: 0,
              z: 0,
              w: 11,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          btn_left_left: {
            displayName: 'btn_left_left',
            parentNode: 'canvas1',
            widgetType: 'BUTTON_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 0,
              z: 0,
              w: 10,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          btn_left_reset: {
            displayName: 'btn_left_reset',
            parentNode: 'canvas1',
            widgetType: 'BUTTON_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 23,
              y: 0,
              z: 0,
              w: 9,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          toolPanelRight: {
            displayName: 'toolPanelRight',
            parentNode: 'bodySection1-bodySectionContainer1',
            widgetType: 'CONTAINER_WIDGET',
            childrenNode: [
              'canvas4'
            ],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 15,
              y: 11,
              z: 0,
              w: 12,
              h: 13,
              minW: 1,
              minH: 3
            }
          },
          canvas4: {
            displayName: 'canvas4',
            parentNode: 'toolPanelRight',
            widgetType: 'CANVAS',
            childrenNode: [
              'btn_right_right',
              'btn_right_left',
              'btn_right_reset'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          btn_right_right: {
            displayName: 'btn_right_right',
            parentNode: 'canvas4',
            widgetType: 'BUTTON_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 0,
              z: 0,
              w: 11,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          btn_right_left: {
            displayName: 'btn_right_left',
            parentNode: 'canvas4',
            widgetType: 'BUTTON_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 11,
              y: 0,
              z: 0,
              w: 12,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          btn_right_reset: {
            displayName: 'btn_right_reset',
            parentNode: 'canvas4',
            widgetType: 'BUTTON_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 23,
              y: 0,
              z: 0,
              w: 9,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          contentLeft: {
            displayName: 'contentLeft',
            parentNode: 'bodySection1-bodySectionContainer1',
            widgetType: 'CONTAINER_WIDGET',
            childrenNode: [
              'canvas7'
            ],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 1,
              y: 39,
              z: 0,
              w: 12,
              h: 22,
              minW: 1,
              minH: 3
            }
          },
          canvas7: {
            displayName: 'canvas7',
            parentNode: 'contentLeft',
            widgetType: 'CANVAS',
            childrenNode: [
              'txt_left_static',
              'txt_left_dynamic'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          txt_left_static: {
            displayName: 'txt_left_static',
            parentNode: 'canvas7',
            widgetType: 'TEXT_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 0,
              z: 0,
              w: 32,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          txt_left_dynamic: {
            displayName: 'txt_left_dynamic',
            parentNode: 'canvas7',
            widgetType: 'TEXT_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 9,
              z: 0,
              w: 32,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          contentRight: {
            displayName: 'contentRight',
            parentNode: 'bodySection1-bodySectionContainer1',
            widgetType: 'CONTAINER_WIDGET',
            childrenNode: [
              'canvas10'
            ],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 15,
              y: 39,
              z: 0,
              w: 12,
              h: 22,
              minW: 1,
              minH: 3
            }
          },
          canvas10: {
            displayName: 'canvas10',
            parentNode: 'contentRight',
            widgetType: 'CANVAS',
            childrenNode: [
              'txt_right_static',
              'txt_right_dynamic'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          txt_right_static: {
            displayName: 'txt_right_static',
            parentNode: 'canvas10',
            widgetType: 'TEXT_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 0,
              z: 0,
              w: 31,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          txt_right_dynamic: {
            displayName: 'txt_right_dynamic',
            parentNode: 'canvas10',
            widgetType: 'TEXT_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 9,
              z: 0,
              w: 32,
              h: 5,
              minW: 1,
              minH: 3
            }
          },
          summaryLeft: {
            displayName: 'summaryLeft',
            parentNode: 'bodySection1-bodySectionContainer1',
            widgetType: 'CONTAINER_WIDGET',
            childrenNode: [
              'canvas13'
            ],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 1,
              y: 66,
              z: 0,
              w: 12,
              h: 18,
              minW: 1,
              minH: 3
            }
          },
          canvas13: {
            displayName: 'canvas13',
            parentNode: 'summaryLeft',
            widgetType: 'CANVAS',
            childrenNode: [
              'txt_left_summary'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          txt_left_summary: {
            displayName: 'txt_left_summary',
            parentNode: 'canvas13',
            widgetType: 'TEXT_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 0,
              z: 0,
              w: 32,
              h: 10,
              minW: 1,
              minH: 3
            }
          },
          summaryRight: {
            displayName: 'summaryRight',
            parentNode: 'bodySection1-bodySectionContainer1',
            widgetType: 'CONTAINER_WIDGET',
            childrenNode: [
              'canvas16'
            ],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 15,
              y: 66,
              z: 0,
              w: 12,
              h: 18,
              minW: 1,
              minH: 3
            }
          },
          canvas16: {
            displayName: 'canvas16',
            parentNode: 'summaryRight',
            widgetType: 'CANVAS',
            childrenNode: [
              'txt_right_summary'
            ],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          txt_right_summary: {
            displayName: 'txt_right_summary',
            parentNode: 'canvas16',
            widgetType: 'TEXT_WIDGET',
            childrenNode: [],
            containerType: 'EDITOR_SCALE_SQUARE',
            layoutInfo: {
              x: 0,
              y: 0,
              z: 0,
              w: 32,
              h: 10,
              minW: 1,
              minH: 3
            }
          },
          modalSection1: {
            displayName: 'modalSection1',
            parentNode: 'page1',
            widgetType: 'MODAL_SECTION_NODE',
            childrenNode: [],
            containerType: 'EDITOR_LAYOUT_SQUARE',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          page2: {
            displayName: 'page2',
            parentNode: 'root',
            widgetType: 'PAGE_NODE',
            childrenNode: [
              'bodySection2',
              'modalSection2'
            ],
            containerType: 'EDITOR_PAGE_SQUARE',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          bodySection2: {
            displayName: 'bodySection2',
            parentNode: 'page2',
            widgetType: 'SECTION_NODE',
            childrenNode: [
              'bodySection2-bodySectionContainer1'
            ],
            containerType: 'EDITOR_LAYOUT_SQUARE',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          'bodySection2-bodySectionContainer1': {
            displayName: 'bodySection2-bodySectionContainer1',
            parentNode: 'bodySection2',
            widgetType: 'CONTAINER_NODE',
            childrenNode: [],
            containerType: 'EDITOR_DOT_PANEL',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          },
          modalSection2: {
            displayName: 'modalSection2',
            parentNode: 'page2',
            widgetType: 'MODAL_SECTION_NODE',
            childrenNode: [],
            containerType: 'EDITOR_LAYOUT_SQUARE',
            layoutInfo: {
              x: -1,
              y: -1,
              z: 0,
              w: 0,
              h: 0,
              minW: 1,
              minH: 0
            }
          }
        }
      }
    },
    currentAppHistory: {
      snapshotList: [],
      totalPages: 0,
      currentPage: 0,
      hasMore: false
    },
    builderInfo: {
      version: '4.8.3',
      language: 'English'
    },
    resource: [
      {
        resourceID: 'ILAfx4p1C7dZ',
        uid: '1363c8fc-955a-4235-9d8a-558f872b83b7',
        teamID: 'ILAfx4p1C7d0',
        resourceName: 'test rest api',
        resourceType: 'restapi',
        content: {
          authContent: {
            password: '123',
            username: 'user1'
          },
          authentication: 'basic',
          baseUrl: 'http://localhost:3000',
          certs: {
            caCert: '',
            clientCert: '',
            clientKey: '',
            mode: 'verify-full'
          },
          password: '123',
          username: 'user1'
        },
        createdAt: '2025-09-09T09:49:32.421005Z',
        createdBy: 'ILAfx4p1C7dZ',
        updatedAt: '2025-09-09T09:49:32.421005Z',
        updatedBy: 'ILAfx4p1C7dZ'
      }
    ],
    guide: {
      currentStep: 0,
      isOpen: false
    },
    currentUser: {
      userID: 'ILAfx4p1C7dZ',
      uid: '158504d6-a47d-43a0-879e-79a57981cecc',
      nickname: 'root',
      email: 'root',
      avatar: '',
      language: 'en-US',
      isTutorialViewed: true,
      createdAt: '2025-08-20T00:20:06.088056Z',
      updatedAt: '2025-08-20T00:29:59.556997Z'
    },
    team: {
      currentId: 'ILAfx4p1C7d0',
      items: [
        {
          id: 'ILAfx4p1C7d0',
          uid: '83cfb484-0a3f-4bfd-aab3-70432d021cab',
          name: 'my-team',
          identifier: '0',
          icon: 'https://cdn.illacloud.com/email-template/people.png',
          myRole: 1,
          teamMemberID: 'ILAfx4p1C7dZ',
          teamMemberPermission: {
            config: 0
          },
          permission: {
            allowEditorInvite: true,
            allowViewerInvite: true,
            allowEditorManageTeamMember: true,
            allowViewerManageTeamMember: true,
            inviteLinkEnabled: true,
            blockRegister: false
          }
        }
      ]
    },
    aiAgent: {
      list: []
    }
  },
  on: {
    updateComponentPropsReducer(context: any, event: any) {
      updateComponentPropsReducer({
        context: context.currentApp.components,
        event
      })
      return context
    },


    updateWidgetKeyValue: (context: any, event: { displayName: any, value: any }) => ({
      ...context,
      currentApp: {
        ...context.currentApp,
        components: {
          ...context.components,
          [event.displayName]: {
            ...context.components[event.displayName],
            value: event.value
          }
        }
      }


    }),

    setVariables: (context, event: { value: any }) => ({
      ...context,
      variables: event.value,
    }),
    setVariablesValid: (context, event: boolean ) => (
      {
        ...context,
        isVariablesValid: event,
      }
    )
  }
})

