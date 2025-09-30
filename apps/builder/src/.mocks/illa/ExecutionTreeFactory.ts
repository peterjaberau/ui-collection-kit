const BaseInputMock: any = {
  beforeUpdate: [
    {
      props: {
        isSetterSingleRow: true,
        attrName: "value",
        expectedType: "String",
        value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}]",
        widgetDisplayName: "txt_left_summary",
        widgetType: "TEXT_WIDGET",
        onlyHasSetter: false,
      },
    },
    {
      listWidgets: {},
    },
    {
      currentListDisplayName: "",
    },
    {
      finalValue: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}]",
    },
  ],
  onChange: [
    {
      onChange: {
        value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] b",
        output: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] b",
        attrName: "value",
        handleUpdateDsl: {},
      },

      onChangeEffectWorkflow: {
        actionNames: [
          "setExecutionResultReducer",
          "setDependenciesReducer",
          "setIndependenciesReducer",
          "setExecutionErrorReducer",
        ],
        actions: [
          {
            type: "execution/setExecutionResultReducer",
            payload: {
              updates: [
                {
                  kind: "E",
                  path: ["txt_left_summary", "value"],
                  lhs: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] b",
                  rhs: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] bc",
                },
                {
                  kind: "E",
                  path: ["globalData"],
                  lhs: {
                    $dynamicAttrPaths: [],
                  },
                },
              ],
            },
          },
          {
            type: "execution/setDependenciesReducer",
            payload: {
              "btn_left_right.events[0].widgetTargetValue": ["txt_right_static.value"],
              "btn_left_left.events[0].widgetTargetValue": ["txt_left_static.value"],
              "btn_right_right.events[0].widgetTargetValue": ["txt_right_static.value"],
              "btn_right_left.events[0].widgetTargetValue": ["txt_left_static.value"],
              "txt_left_summary.value": ["txt_left_static.value", "txt_left_dynamic.value"],
              "txt_right_summary.value": ["txt_right_static.value", "txt_right_dynamic.value"],
              "currentPageInfo.pagePath": ["root.pageSortedKey", "root.currentPageIndex"],
              "currentPageInfo.subPagePath": ["root.currentSubPagePath"],
            },
          },
          {
            type: "execution/setIndependenciesReducer",
            payload: {
              "root.currentSubPagePath": ["currentPageInfo.subPagePath"],
              "root.pageSortedKey": ["currentPageInfo.pagePath"],
              "root.currentPageIndex": ["currentPageInfo.pagePath"],
              "txt_right_static.value": [
                "txt_right_summary.value",
                "btn_right_right.events[0].widgetTargetValue",
                "btn_left_right.events[0].widgetTargetValue",
              ],
              "txt_right_dynamic.value": ["txt_right_summary.value"],
              "txt_left_static.value": [
                "txt_left_summary.value",
                "btn_right_left.events[0].widgetTargetValue",
                "btn_left_left.events[0].widgetTargetValue",
              ],
              "txt_left_dynamic.value": ["txt_left_summary.value"],
            },
          },
          {
            type: "execution/setExecutionErrorReducer",
            payload: {},
          },
        ],
      },
    },
  ],
  afterUpdate: [
    {
      isSetterSingleRow: true,
      attrName: "value",
      expectedType: "String",
      value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] 1",
      widgetDisplayName: "txt_left_summary",
      widgetType: "TEXT_WIDGET",
      onlyHasSetter: false,
    },
    {
      listWidgets: {},
    },
    {
      currentListDisplayName: "",
    },
    {
      finalValue: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] 1",
    },
  ],
}

const ExecutionTreeFactoryLoadingPage: any = [
  {
    // 94
    initTree: {
      input: {
        rawTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "{{root.pageSortedKey[root.currentPageIndex]}}",
            subPagePath: "{{root.currentSubPagePath}}",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
      },
      output: {
        dependencyTree: {
          "btn_left_right.events[0].widgetTargetValue": ["txt_right_static.value"],
          "btn_left_left.events[0].widgetTargetValue": ["txt_left_static.value"],
          "btn_right_right.events[0].widgetTargetValue": ["txt_right_static.value"],
          "btn_right_left.events[0].widgetTargetValue": ["txt_left_static.value"],
          "txt_left_summary.value": ["txt_left_static.value", "txt_left_dynamic.value"],
          "txt_right_summary.value": ["txt_right_static.value", "txt_right_dynamic.value"],
          "currentPageInfo.pagePath": ["root.pageSortedKey", "root.currentPageIndex"],
          "currentPageInfo.subPagePath": ["root.currentSubPagePath"],
        },
        evaluatedTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "page1",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
        errorTree: {},
        independencyTree: {
          "root.currentSubPagePath": ["currentPageInfo.subPagePath"],
          "root.pageSortedKey": ["currentPageInfo.pagePath"],
          "root.currentPageIndex": ["currentPageInfo.pagePath"],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue",
          ],
          "txt_right_dynamic.value": ["txt_right_summary.value"],
          "txt_left_static.value": [
            "txt_left_summary.value",
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue",
          ],
          "txt_left_dynamic.value": ["txt_left_summary.value"],
        },
      },
    },
  },
  {
    //   746
    generateDependenciesMap: {
      input: {
        rawTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "{{root.pageSortedKey[root.currentPageIndex]}}",
            subPagePath: "{{root.currentSubPagePath}}",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
      },
      // iterate rawTree for each listEntityDependencies
      logic: [
        {
          listEntityDependencies: [
            {
              input: {
                widgetOrAction: {
                  currentPageIndex: 0,
                  pageSortedKey: ["page1", "page2"],
                  viewportSizeType: "fluid",
                  displayName: "root",
                  $parentNode: "",
                  $type: "WIDGET",
                  $widgetType: "DOT_PANEL",
                  $childrenNode: ["page1", "page2"],
                },
                displayName: "root",
              },
              output: {
                dependenciesMap: {},
              },
            },
            {
              input: {
                widgetOrAction: {
                  bodyColumns: 32,
                  bottomHeight: 0,
                  canvasSize: "auto",
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
                  layout: "default",
                  leftColumns: 8,
                  leftPosition: "NONE",
                  leftWidth: 0,
                  rightColumns: 8,
                  rightPosition: "NONE",
                  rightWidth: 0,
                  showLeftFoldIcon: false,
                  showRightFoldIcon: false,
                  topHeight: 0,
                  displayName: "page1",
                  $parentNode: "root",
                  $type: "WIDGET",
                  $widgetType: "PAGE_NODE",
                  $childrenNode: ["bodySection1", "modalSection1"],
                  $parentPageName: "page1",
                },
                displayName: "page1",
              },
              output: {
                dependenciesMap: {},
              },
            },
            {
              input: {
                widgetOrAction: {
                  currentViewIndex: 0,
                  defaultViewKey: "sub-page1",
                  sectionViewConfigs: [
                    {
                      id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                      key: "sub-page1",
                      path: "sub-page1",
                      viewDisplayName: "bodySection1-bodySectionContainer1",
                    },
                  ],
                  style: {
                    padding: {
                      mode: "all",
                      size: "24",
                    },
                  },
                  viewSortedKey: ["bodySection1-bodySectionContainer1"],
                  displayName: "bodySection1",
                  $parentNode: "page1",
                  $type: "WIDGET",
                  $widgetType: "SECTION_NODE",
                  $childrenNode: ["bodySection1-bodySectionContainer1"],
                  $parentPageName: "page1",
                },
                displayName: "bodySection1",
              },
              output: {
                dependenciesMap: {},
              },
            },
            {
              input: {
                widgetOrAction: {
                  $dynamicAttrPaths: [],
                  backgroundColor: "#ffffffff",
                  currentIndex: 0,
                  currentKey: "defaultView",
                  dynamicHeight: "auto",
                  padding: {
                    mode: "all",
                    size: "24",
                  },
                  radius: "4px",
                  resizeDirection: "HORIZONTAL",
                  shadow: "small",
                  viewList: [
                    {
                      id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                      key: "defaultView",
                      label: "defaultView",
                    },
                  ],
                  displayName: "toolPanelLeft",
                  $parentNode: "bodySection1-bodySectionContainer1",
                  $type: "WIDGET",
                  $widgetType: "CONTAINER_WIDGET",
                  $childrenNode: ["canvas1"],
                  $parentPageName: "page1",
                  $validationPaths: {
                    viewList: [
                      {
                        key: "String",
                        label: "String",
                        disabled: "Boolean",
                        hidden: "Boolean",
                      },
                    ],
                    tooltipText: "String",
                  },
                },
                displayName: "toolPanelLeft",
              },
              output: {
                dependenciesMap: {},
              },
            },
            {
              input: {
                widgetOrAction: {
                  $dynamicAttrPaths: ["events[0].widgetTargetValue"],
                  colorScheme: "blue",
                  events: [
                    {
                      actionType: "widget",
                      eventType: "click",
                      id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                      widgetID: "txt_left_dynamic",
                      widgetMethod: "setValue",
                      widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
                    },
                  ],
                  hidden: false,
                  text: "Left from Right\n",
                  variant: "fill",
                  displayName: "btn_left_right",
                  $parentNode: "canvas1",
                  $type: "WIDGET",
                  $widgetType: "BUTTON_WIDGET",
                  $childrenNode: [],
                  $parentPageName: "page1",
                  $validationPaths: {
                    text: "String",
                    events: [
                      {
                        widgetSwitchTargetValue: "Boolean",
                        pageIndex: "Number",
                        sortKey: "String",
                        sortOrder: "String",
                        filters: "Array",
                        operator: "String",
                        disabled: "Boolean",
                        script: "String",
                        url: "String",
                        newTab: "Boolean",
                        key: "String",
                        index: "Number",
                        showNextViewLoopBack: "Boolean",
                        showNextVisibleViewLoopBack: "Boolean",
                        showPreviousViewLoopBack: "Boolean",
                        showPreviousVisibleViewLoopBack: "Boolean",
                        title: "String",
                        description: "String",
                        pagePath: "String",
                        viewPath: "String",
                        duration: "Number",
                        fileName: "String",
                        fileType: "String",
                        enabled: "Boolean",
                        widgetTargetValue: "String",
                      },
                    ],
                    loading: "Boolean",
                    disabled: "Boolean",
                    tooltipText: "String",
                    hidden: "Boolean",
                  },
                },
                displayName: "btn_left_right",
              },
              output: {
                dependenciesMap: {
                  "btn_left_right.events[0].widgetTargetValue": ["txt_right_static.value"],
                },
              },
            },
            {
              input: {
                widgetOrAction: {
                  $dynamicAttrPaths: ["events[0].widgetTargetValue"],
                  colorScheme: "blue",
                  events: [
                    {
                      actionType: "widget",
                      eventType: "click",
                      id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                      widgetID: "txt_left_dynamic",
                      widgetMethod: "setValue",
                      widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
                    },
                  ],
                  hidden: false,
                  text: "Left from Left ",
                  variant: "fill",
                  displayName: "btn_left_left",
                  $parentNode: "canvas1",
                  $type: "WIDGET",
                  $widgetType: "BUTTON_WIDGET",
                  $childrenNode: [],
                  $parentPageName: "page1",
                  $validationPaths: {
                    text: "String",
                    events: [
                      {
                        widgetSwitchTargetValue: "Boolean",
                        pageIndex: "Number",
                        sortKey: "String",
                        sortOrder: "String",
                        filters: "Array",
                        operator: "String",
                        disabled: "Boolean",
                        script: "String",
                        url: "String",
                        newTab: "Boolean",
                        key: "String",
                        index: "Number",
                        showNextViewLoopBack: "Boolean",
                        showNextVisibleViewLoopBack: "Boolean",
                        showPreviousViewLoopBack: "Boolean",
                        showPreviousVisibleViewLoopBack: "Boolean",
                        title: "String",
                        description: "String",
                        pagePath: "String",
                        viewPath: "String",
                        duration: "Number",
                        fileName: "String",
                        fileType: "String",
                        enabled: "Boolean",
                        widgetTargetValue: "String",
                      },
                    ],
                    loading: "Boolean",
                    disabled: "Boolean",
                    tooltipText: "String",
                    hidden: "Boolean",
                  },
                },
                displayName: "btn_left_left",
              },
              output: {
                dependenciesMap: {
                  "btn_left_left.events[0].widgetTargetValue": ["txt_left_static.value"],
                },
              },
            },
            {
              input: {
                widgetOrAction: {
                  $dynamicAttrPaths: ["value"],
                  colorScheme: "grayBlue",
                  disableMarkdown: true,
                  dynamicHeight: "auto",
                  fs: "14px",
                  hidden: false,
                  horizontalAlign: "start",
                  resizeDirection: "HORIZONTAL",
                  value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] bxy",
                  verticalAlign: "center",
                  weight: 400,
                  displayName: "txt_left_summary",
                  $parentNode: "canvas13",
                  $type: "WIDGET",
                  $widgetType: "TEXT_WIDGET",
                  $childrenNode: [],
                  $parentPageName: "page1",
                  $validationPaths: {
                    value: "String",
                    tooltipText: "String",
                    hidden: "Boolean",
                  },
                },
                displayName: "txt_left_summary",
              },
              output: {
                dependenciesMap: {
                  "txt_left_summary.value": ["txt_left_static.value", "txt_left_dynamic.value"],
                },
              },
            },
          ],
        },
      ],
      output: {
        "btn_left_right.events[0].widgetTargetValue": ["txt_right_static.value"],
        "btn_left_left.events[0].widgetTargetValue": ["txt_left_static.value"],
        "btn_right_right.events[0].widgetTargetValue": ["txt_right_static.value"],
        "btn_right_left.events[0].widgetTargetValue": ["txt_left_static.value"],
        "txt_left_summary.value": ["txt_left_static.value", "txt_left_dynamic.value"],
        "txt_right_summary.value": ["txt_right_static.value", "txt_right_dynamic.value"],
        "currentPageInfo.pagePath": ["root.pageSortedKey", "root.currentPageIndex"],
        "currentPageInfo.subPagePath": ["root.currentSubPagePath"],
      },
    },
  },
  {
    sortEvalOrder: {
      input: {
        dependenciesMap: {
          "btn_left_right.events[0].widgetTargetValue": ["txt_right_static.value"],
          "btn_left_left.events[0].widgetTargetValue": ["txt_left_static.value"],
          "btn_right_right.events[0].widgetTargetValue": ["txt_right_static.value"],
          "btn_right_left.events[0].widgetTargetValue": ["txt_left_static.value"],
          "txt_left_summary.value": ["txt_left_static.value", "txt_left_dynamic.value"],
          "txt_right_summary.value": ["txt_right_static.value", "txt_right_dynamic.value"],
          "currentPageInfo.pagePath": ["root.pageSortedKey", "root.currentPageIndex"],
          "currentPageInfo.subPagePath": ["root.currentSubPagePath"],
        },
      },
      output: {
        result: [
          "root.currentSubPagePath",
          "currentPageInfo.subPagePath",
          "root.currentPageIndex",
          "root.pageSortedKey",
          "currentPageInfo.pagePath",
          "txt_right_dynamic.value",
          "txt_right_static.value",
          "txt_right_summary.value",
          "txt_left_dynamic.value",
          "txt_left_static.value",
          "txt_left_summary.value",
          "btn_right_left.events[0].widgetTargetValue",
          "btn_right_right.events[0].widgetTargetValue",
          "btn_left_left.events[0].widgetTargetValue",
          "btn_left_right.events[0].widgetTargetValue",
        ],
      },
    },
  },
  {
    generateInDependenciesMap: {
      input: {
        inverseDag: {
          "root.currentSubPagePath": ["currentPageInfo.subPagePath"],
          "root.pageSortedKey": ["currentPageInfo.pagePath"],
          "root.currentPageIndex": ["currentPageInfo.pagePath"],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue",
          ],
          "txt_right_dynamic.value": ["txt_right_summary.value"],
          "txt_left_static.value": [
            "txt_left_summary.value",
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue",
          ],
          "txt_left_dynamic.value": ["txt_left_summary.value"],
        },
      },
      output: {
        inverseDag: {
          "root.currentSubPagePath": ["currentPageInfo.subPagePath"],
          "root.pageSortedKey": ["currentPageInfo.pagePath"],
          "root.currentPageIndex": ["currentPageInfo.pagePath"],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue",
          ],
          "txt_right_dynamic.value": ["txt_right_summary.value"],
          "txt_left_static.value": [
            "txt_left_summary.value",
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue",
          ],
          "txt_left_dynamic.value": ["txt_left_summary.value"],
        },
      },
    },
  },
  {
    executeTree: {
      input: {
        oldRawTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_right_static.value}}",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: {{txt_left_static.value}}",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "{{root.pageSortedKey[root.currentPageIndex]}}",
            subPagePath: "{{root.currentSubPagePath}}",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
        sortedEvalOrder: [
          "root.currentSubPagePath",
          "currentPageInfo.subPagePath",
          "root.currentPageIndex",
          "root.pageSortedKey",
          "currentPageInfo.pagePath",
          "txt_right_dynamic.value",
          "txt_right_static.value",
          "txt_right_summary.value",
          "txt_left_dynamic.value",
          "txt_left_static.value",
          "txt_left_summary.value",
          "btn_right_left.events[0].widgetTargetValue",
          "btn_right_right.events[0].widgetTargetValue",
          "btn_left_left.events[0].widgetTargetValue",
          "btn_left_right.events[0].widgetTargetValue",
        ],
        point: -1,
      },
      output: {
        evaluatedTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "page1",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
        oldLocalRawTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "page1",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
        errorTree: {},
      },
    },
  },
  {
    validateTree: {
      input: {
        tree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "page1",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
      },
      output: {
        validateResultTree: {
          root: {
            currentPageIndex: 0,
            pageSortedKey: ["page1", "page2"],
            viewportSizeType: "fluid",
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1", "page2"],
          },
          page1: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
          bodySection1: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "35169c4f-77f0-4695-b77d-348ca0d341cb",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
          toolPanelLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas1"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas1: {
            displayName: "canvas1",
            $parentNode: "toolPanelLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_left_right", "btn_left_left", "btn_left_reset"],
            $parentPageName: "page1",
          },
          btn_left_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Left from Right\n",
            variant: "fill",
            displayName: "btn_left_right",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Left from Left ",
            variant: "fill",
            displayName: "btn_left_left",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_left_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                widgetID: "txt_left_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Left Reset",
            variant: "fill",
            displayName: "btn_left_reset",
            $parentNode: "canvas1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          toolPanelRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "toolPanelRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas4"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas4: {
            displayName: "canvas4",
            $parentNode: "toolPanelRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["btn_right_right", "btn_right_left", "btn_right_reset"],
            $parentPageName: "page1",
          },
          btn_right_right: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from right container",
              },
            ],
            hidden: false,
            text: "Right from Right\n",
            variant: "fill",
            displayName: "btn_right_right",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_left: {
            $dynamicAttrPaths: ["events[0].widgetTargetValue"],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: STATIC text from left container",
              },
            ],
            hidden: false,
            text: "Right from Left\n",
            variant: "fill",
            displayName: "btn_right_left",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          btn_right_reset: {
            $dynamicAttrPaths: [],
            colorScheme: "blue",
            events: [
              {
                actionType: "widget",
                eventType: "click",
                id: "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                widgetID: "txt_right_dynamic",
                widgetMethod: "setValue",
                widgetTargetValue: "Dynamic: -",
              },
            ],
            hidden: false,
            text: "Right Reset\n",
            variant: "fill",
            displayName: "btn_right_reset",
            $parentNode: "canvas4",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              events: [
                {
                  widgetSwitchTargetValue: "Boolean",
                  pageIndex: "Number",
                  sortKey: "String",
                  sortOrder: "String",
                  filters: "Array",
                  operator: "String",
                  disabled: "Boolean",
                  script: "String",
                  url: "String",
                  newTab: "Boolean",
                  key: "String",
                  index: "Number",
                  showNextViewLoopBack: "Boolean",
                  showNextVisibleViewLoopBack: "Boolean",
                  showPreviousViewLoopBack: "Boolean",
                  showPreviousVisibleViewLoopBack: "Boolean",
                  title: "String",
                  description: "String",
                  pagePath: "String",
                  viewPath: "String",
                  duration: "Number",
                  fileName: "String",
                  fileType: "String",
                  enabled: "Boolean",
                  widgetTargetValue: "String",
                },
              ],
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas7"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas7: {
            displayName: "canvas7",
            $parentNode: "contentLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_static", "txt_left_dynamic"],
            $parentPageName: "page1",
          },
          txt_left_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from left container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_static",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_left_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic left",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_dynamic",
            $parentNode: "canvas7",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          contentRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "contentRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas10"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas10: {
            displayName: "canvas10",
            $parentNode: "contentRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_static", "txt_right_dynamic"],
            $parentPageName: "page1",
          },
          txt_right_static: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "STATIC text from right container",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_static",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          txt_right_dynamic: {
            $dynamicAttrPaths: [],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "fixed",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "ALL",
            value: "dynamic right",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_dynamic",
            $parentNode: "canvas10",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryLeft: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "defaultView",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryLeft",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas13"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas13: {
            displayName: "canvas13",
            $parentNode: "summaryLeft",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_left_summary"],
            $parentPageName: "page1",
          },
          txt_left_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] bxy",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_left_summary",
            $parentNode: "canvas13",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          summaryRight: {
            $dynamicAttrPaths: [],
            backgroundColor: "#ffffffff",
            currentIndex: 0,
            currentKey: "View 1",
            dynamicHeight: "auto",
            padding: {
              mode: "all",
              size: "24",
            },
            radius: "4px",
            resizeDirection: "HORIZONTAL",
            shadow: "small",
            viewList: [
              {
                id: "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                key: "defaultView",
                label: "defaultView",
              },
            ],
            displayName: "summaryRight",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "CONTAINER_WIDGET",
            $childrenNode: ["canvas16"],
            $parentPageName: "page1",
            $validationPaths: {
              viewList: [
                {
                  key: "String",
                  label: "String",
                  disabled: "Boolean",
                  hidden: "Boolean",
                },
              ],
              tooltipText: "String",
            },
          },
          canvas16: {
            displayName: "canvas16",
            $parentNode: "summaryRight",
            $type: "WIDGET",
            $widgetType: "CANVAS",
            $childrenNode: ["txt_right_summary"],
            $parentPageName: "page1",
          },
          txt_right_summary: {
            $dynamicAttrPaths: ["value"],
            colorScheme: "grayBlue",
            disableMarkdown: true,
            dynamicHeight: "auto",
            fs: "14px",
            hidden: false,
            horizontalAlign: "start",
            resizeDirection: "HORIZONTAL",
            value: "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            verticalAlign: "center",
            weight: 400,
            displayName: "txt_right_summary",
            $parentNode: "canvas16",
            $type: "WIDGET",
            $widgetType: "TEXT_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              value: "String",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
          modalSection1: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
          page2: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
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
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page2",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection2", "modalSection2"],
            $parentPageName: "page2",
          },
          bodySection2: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "59985592-a6f2-4f0b-90f3-a197944fd46d",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection2-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection2-bodySectionContainer1"],
            displayName: "bodySection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection2-bodySectionContainer1"],
            $parentPageName: "page2",
          },
          modalSection2: {
            displayName: "modalSection2",
            $parentNode: "page2",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page2",
          },
          builderInfo: {
            version: "4.8.3",
            language: "English",
          },
          currentUserInfo: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
          globalData: {
            $dynamicAttrPaths: [],
          },
          urlParams: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dV",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dV",
          },
          localStorage: {},
          currentPageInfo: {
            pagePath: "page1",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
          pageInfos: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
            {
              pagePath: "/page2",
              subPagePath: "/page2/sub-page1",
              pageName: "page2",
              subPageName: "sub-page1",
              isHomePage: false,
              subPageGroup: "",
            },
          ],
        },
        validateErrors: {},
      },
    },
  },
  {
    initTree: {
      input: {},
      output: {},
    },
  },

  //  THEN setExecutionResultReducer
]

const ExecutionTreeFactoryUpdadeCodeEditor: any = [
  "updateTree",
  "generateDependenciesMap --> forEach listEntityDependencies",
  "sortEvalOrder",
  "generateInDependenciesMap",
  "getUpdatePathFromDifferences",
  "updateExecutionTreeByUpdatePaths",
  "calcSubTreeSortOrder",
  "getCompleteSortOrder",
  "getEvaluationSortOrder",
  "mergeOrderPathAndUpdateMapActions",
  "executeTree",
  "validateTree",
  "mergeErrorTree",
  "updateTree",
  //   then setExecutionResultReducer

  {
    updateTree: {
      input: {
        "rawTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_right_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_left_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_right_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_left_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "globalData": {
            "$dynamicAttrPaths": []
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "{{root.pageSortedKey[root.currentPageIndex]}}",
            "subPagePath": "{{root.currentSubPagePath}}",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "isAddAction": false
      },
      output: {
        "dependencyTree": {
          "btn_left_right.events[0].widgetTargetValue": [
            "txt_right_static.value"
          ],
          "btn_left_left.events[0].widgetTargetValue": [
            "txt_left_static.value"
          ],
          "btn_right_right.events[0].widgetTargetValue": [
            "txt_right_static.value"
          ],
          "btn_right_left.events[0].widgetTargetValue": [
            "txt_left_static.value"
          ],
          "txt_left_summary.value": [
            "txt_left_static.value",
            "txt_left_dynamic.value"
          ],
          "txt_right_summary.value": [
            "txt_right_static.value",
            "txt_right_dynamic.value"
          ],
          "currentPageInfo.pagePath": [
            "root.pageSortedKey",
            "root.currentPageIndex"
          ],
          "currentPageInfo.subPagePath": [
            "root.currentSubPagePath"
          ]
        },
        "evaluatedTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "errorTree": {},
        "independencyTree": {
          "root.currentSubPagePath": [
            "currentPageInfo.subPagePath"
          ],
          "root.pageSortedKey": [
            "currentPageInfo.pagePath"
          ],
          "root.currentPageIndex": [
            "currentPageInfo.pagePath"
          ],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue"
          ],
          "txt_right_dynamic.value": [
            "txt_right_summary.value"
          ],
          "txt_left_static.value": [
            "txt_left_summary.value",
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue"
          ],
          "txt_left_dynamic.value": [
            "txt_left_summary.value"
          ]
        }
      },
    },
  },
  {
    generateDependenciesMap: {
      input: {
        "rawTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_right_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_left_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_right_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_left_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "globalData": {
            "$dynamicAttrPaths": []
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "{{root.pageSortedKey[root.currentPageIndex]}}",
            "subPagePath": "{{root.currentSubPagePath}}",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        }
      },
      // iteration through listEntityDependencies
      logic: {
        listEntityDependencies: [
          {
            input: {
              "widgetOrAction": {
                "currentPageIndex": 0,
                "pageSortedKey": [
                  "page1",
                  "page2"
                ],
                "viewportSizeType": "fluid",
                "displayName": "root",
                "$parentNode": "",
                "$type": "WIDGET",
                "$widgetType": "DOT_PANEL",
                "$childrenNode": [
                  "page1",
                  "page2"
                ]
              },
              "displayName": "root"
            },
            output: {
              "dependenciesMap": {}
            }
          },
          {
            input: {
              "widgetOrAction": {
                "$dynamicAttrPaths": [
                  "value"
                ],
                "colorScheme": "grayBlue",
                "disableMarkdown": true,
                "dynamicHeight": "auto",
                "fs": "14px",
                "hidden": false,
                "horizontalAlign": "start",
                "resizeDirection": "HORIZONTAL",
                "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
                "verticalAlign": "center",
                "weight": 400,
                "displayName": "txt_left_summary",
                "$parentNode": "canvas13",
                "$type": "WIDGET",
                "$widgetType": "TEXT_WIDGET",
                "$childrenNode": [],
                "$parentPageName": "page1",
                "$validationPaths": {
                  "value": "String",
                  "tooltipText": "String",
                  "hidden": "Boolean"
                }
              },
              "displayName": "txt_left_summary"
            },
            output: {
              "dependenciesMap": {}
            }
          },
          , {
            input: {},
            output: {}
          }
          , {
            input: {},
            output: {}
          }
        ]
      },
      output: {
        "dependenciesMap": {
          "btn_left_right.events[0].widgetTargetValue": [
            "txt_right_static.value"
          ],
          "btn_left_left.events[0].widgetTargetValue": [
            "txt_left_static.value"
          ],
          "btn_right_right.events[0].widgetTargetValue": [
            "txt_right_static.value"
          ],
          "btn_right_left.events[0].widgetTargetValue": [
            "txt_left_static.value"
          ],
          "txt_left_summary.value": [
            "txt_left_static.value",
            "txt_left_dynamic.value"
          ],
          "txt_right_summary.value": [
            "txt_right_static.value",
            "txt_right_dynamic.value"
          ],
          "currentPageInfo.pagePath": [
            "root.pageSortedKey",
            "root.currentPageIndex"
          ],
          "currentPageInfo.subPagePath": [
            "root.currentSubPagePath"
          ]
        }
      },
    },
  },
  {
    sortEvalOrder: {
      input: {
        "dependenciesMap": {
          "btn_left_right.events[0].widgetTargetValue": [
            "txt_right_static.value"
          ],
          "btn_left_left.events[0].widgetTargetValue": [
            "txt_left_static.value"
          ],
          "btn_right_right.events[0].widgetTargetValue": [
            "txt_right_static.value"
          ],
          "btn_right_left.events[0].widgetTargetValue": [
            "txt_left_static.value"
          ],
          "txt_left_summary.value": [
            "txt_left_static.value",
            "txt_left_dynamic.value"
          ],
          "txt_right_summary.value": [
            "txt_right_static.value",
            "txt_right_dynamic.value"
          ],
          "currentPageInfo.pagePath": [
            "root.pageSortedKey",
            "root.currentPageIndex"
          ],
          "currentPageInfo.subPagePath": [
            "root.currentSubPagePath"
          ]
        }
      },
      output: {
        "result": [
          "root.currentSubPagePath",
          "currentPageInfo.subPagePath",
          "root.currentPageIndex",
          "root.pageSortedKey",
          "currentPageInfo.pagePath",
          "txt_right_dynamic.value",
          "txt_right_static.value",
          "txt_right_summary.value",
          "txt_left_dynamic.value",
          "txt_left_static.value",
          "txt_left_summary.value",
          "btn_right_left.events[0].widgetTargetValue",
          "btn_right_right.events[0].widgetTargetValue",
          "btn_left_left.events[0].widgetTargetValue",
          "btn_left_right.events[0].widgetTargetValue"
        ]
      },
    },
  },
  {
    generateInDependenciesMap: {
      input: {
        "inverseDag": {
          "root.currentSubPagePath": [
            "currentPageInfo.subPagePath"
          ],
          "root.pageSortedKey": [
            "currentPageInfo.pagePath"
          ],
          "root.currentPageIndex": [
            "currentPageInfo.pagePath"
          ],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue"
          ],
          "txt_right_dynamic.value": [
            "txt_right_summary.value"
          ],
          "txt_left_static.value": [
            "txt_left_summary.value",
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue"
          ],
          "txt_left_dynamic.value": [
            "txt_left_summary.value"
          ]
        }
      },
      output: {
        "inverseDag": {
          "root.currentSubPagePath": [
            "currentPageInfo.subPagePath"
          ],
          "root.pageSortedKey": [
            "currentPageInfo.pagePath"
          ],
          "root.currentPageIndex": [
            "currentPageInfo.pagePath"
          ],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue"
          ],
          "txt_right_dynamic.value": [
            "txt_right_summary.value"
          ],
          "txt_left_static.value": [
            "txt_left_summary.value",
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue"
          ],
          "txt_left_dynamic.value": [
            "txt_left_summary.value"
          ]
        }
      },
    },
  },
  {
    getUpdatePathFromDifferences: {
      input: {
        "differences": [
          {
            "kind": "E",
            "path": [
              "txt_left_summary",
              "value"
            ],
            "lhs": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] test",
            "rhs": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t"
          }
        ]
      },
      output: {
        "updatePathMapAction": {
          "txt_left_summary.value": "UPDATE"
        }
      },
    },
  },
  {
    updateExecutionTreeByUpdatePaths: {
      input: {
        "updatePathMapAction": {
          "txt_left_summary.value": "UPDATE"
        },
        "executionTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] test",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "rawTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_right_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_left_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_right_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: {{txt_left_static.value}}"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_right_static.value}}]; [Dynamic - {{txt_right_dynamic.value}}]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "globalData": {
            "$dynamicAttrPaths": []
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "{{root.pageSortedKey[root.currentPageIndex]}}",
            "subPagePath": "{{root.currentSubPagePath}}",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "walkedPath": {}
      },
      output: {
        "currentExecutionTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        }
      },
    },
  },
  {
    calcSubTreeSortOrder: {
      input: {
        "differences": [
          {
            "kind": "E",
            "path": [
              "txt_left_summary",
              "value"
            ],
            "lhs": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] test",
            "rhs": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t"
          }
        ],
        "rawTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "isIgnoreDynamicPaths": true
      },
      output: {},
    },
  },
  {
    getCompleteSortOrder: {
      input: [
        "txt_left_summary.value"
      ],
      output: {
        "root.currentSubPagePath": [
          "currentPageInfo.subPagePath"
        ],
        "root.pageSortedKey": [
          "currentPageInfo.pagePath"
        ],
        "root.currentPageIndex": [
          "currentPageInfo.pagePath"
        ],
        "txt_right_static.value": [
          "txt_right_summary.value",
          "btn_right_right.events[0].widgetTargetValue",
          "btn_left_right.events[0].widgetTargetValue"
        ],
        "txt_right_dynamic.value": [
          "txt_right_summary.value"
        ],
        "txt_left_static.value": [
          "txt_left_summary.value",
          "btn_right_left.events[0].widgetTargetValue",
          "btn_left_left.events[0].widgetTargetValue"
        ],
        "txt_left_dynamic.value": [
          "txt_left_summary.value"
        ]
      },
    },
  },
  {
    getEvaluationSortOrder: {
      input: {
        "changes": [
          "txt_left_summary.value"
        ],
        "inverseMap": {
          "root.currentSubPagePath": [
            "currentPageInfo.subPagePath"
          ],
          "root.pageSortedKey": [
            "currentPageInfo.pagePath"
          ],
          "root.currentPageIndex": [
            "currentPageInfo.pagePath"
          ],
          "txt_right_static.value": [
            "txt_right_summary.value",
            "btn_right_right.events[0].widgetTargetValue",
            "btn_left_right.events[0].widgetTargetValue"
          ],
          "txt_right_dynamic.value": [
            "txt_right_summary.value"
          ],
          "txt_left_static.value": [
            "btn_right_left.events[0].widgetTargetValue",
            "btn_left_left.events[0].widgetTargetValue"
          ],
          "txt_left_dynamic.value": []
        }
      },
      output: {
        "sortOrder": [
          "txt_left_summary.value"
        ]
      },
    },
  },
  {
    mergeOrderPathAndUpdateMapActions: {
      input: {
        "orderPaths": [
          "txt_left_summary.value"
        ],
        "updateMapActions": {
          "txt_left_summary.value": "UPDATE"
        }
      },
      output: {
        "newUpdateMapActions": {
          "txt_left_summary.value": "UPDATE"
        }
      },
    },
  },
  {
    executeTree: {
      input: {
        "oldRawTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "sortedEvalOrder": [
          "txt_left_summary.value"
        ],
        "point": -1
      },
      output: {
        "evaluatedTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "oldLocalRawTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "errorTree": {}
      },
    },
  },
  {
    validateTree: {
      input: {
        "tree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        }
      },
      output: {
        "validateResultTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1",
              "page2"
            ],
            "viewportSizeType": "fluid",
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1",
              "page2"
            ]
          },
          "page1": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          },
          "bodySection1": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "35169c4f-77f0-4695-b77d-348ca0d341cb",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          },
          "toolPanelLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas1"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas1": {
            "displayName": "canvas1",
            "$parentNode": "toolPanelLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_left_right",
              "btn_left_left",
              "btn_left_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_left_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-65a4ce9c-c799-4f99-b6b6-168bbdd6f856",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Left from Right\n",
            "variant": "fill",
            "displayName": "btn_left_right",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-6365986f-7c10-4cc7-93c4-f53b8cc6ae77",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Left from Left ",
            "variant": "fill",
            "displayName": "btn_left_left",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_left_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-d1e58278-9cdf-442c-afe2-f31002abc738",
                "widgetID": "txt_left_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Left Reset",
            "variant": "fill",
            "displayName": "btn_left_reset",
            "$parentNode": "canvas1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "toolPanelRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "toolPanelRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas4"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas4": {
            "displayName": "canvas4",
            "$parentNode": "toolPanelRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "btn_right_right",
              "btn_right_left",
              "btn_right_reset"
            ],
            "$parentPageName": "page1"
          },
          "btn_right_right": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-5ae6905f-9994-4c38-8a32-12b267349c83",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from right container"
              }
            ],
            "hidden": false,
            "text": "Right from Right\n",
            "variant": "fill",
            "displayName": "btn_right_right",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_left": {
            "$dynamicAttrPaths": [
              "events[0].widgetTargetValue"
            ],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-b0452bf3-52c3-48a1-8f33-3dbbc3f7c302",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: STATIC text from left container"
              }
            ],
            "hidden": false,
            "text": "Right from Left\n",
            "variant": "fill",
            "displayName": "btn_right_left",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "btn_right_reset": {
            "$dynamicAttrPaths": [],
            "colorScheme": "blue",
            "events": [
              {
                "actionType": "widget",
                "eventType": "click",
                "id": "events-40c8fbdc-8700-4007-a641-8a2a2117ba32",
                "widgetID": "txt_right_dynamic",
                "widgetMethod": "setValue",
                "widgetTargetValue": "Dynamic: -"
              }
            ],
            "hidden": false,
            "text": "Right Reset\n",
            "variant": "fill",
            "displayName": "btn_right_reset",
            "$parentNode": "canvas4",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "events": [
                {
                  "widgetSwitchTargetValue": "Boolean",
                  "pageIndex": "Number",
                  "sortKey": "String",
                  "sortOrder": "String",
                  "filters": "Array",
                  "operator": "String",
                  "disabled": "Boolean",
                  "script": "String",
                  "url": "String",
                  "newTab": "Boolean",
                  "key": "String",
                  "index": "Number",
                  "showNextViewLoopBack": "Boolean",
                  "showNextVisibleViewLoopBack": "Boolean",
                  "showPreviousViewLoopBack": "Boolean",
                  "showPreviousVisibleViewLoopBack": "Boolean",
                  "title": "String",
                  "description": "String",
                  "pagePath": "String",
                  "viewPath": "String",
                  "duration": "Number",
                  "fileName": "String",
                  "fileType": "String",
                  "enabled": "Boolean",
                  "widgetTargetValue": "String"
                }
              ],
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas7"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas7": {
            "displayName": "canvas7",
            "$parentNode": "contentLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_static",
              "txt_left_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from left container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_static",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_left_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic left",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_dynamic",
            "$parentNode": "canvas7",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "contentRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "contentRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas10"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas10": {
            "displayName": "canvas10",
            "$parentNode": "contentRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_static",
              "txt_right_dynamic"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_static": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "STATIC text from right container",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_static",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "txt_right_dynamic": {
            "$dynamicAttrPaths": [],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "fixed",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "ALL",
            "value": "dynamic right",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_dynamic",
            "$parentNode": "canvas10",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryLeft": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "defaultView",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryLeft",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas13"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas13": {
            "displayName": "canvas13",
            "$parentNode": "summaryLeft",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_left_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_left_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] t",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary",
            "$parentNode": "canvas13",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "summaryRight": {
            "$dynamicAttrPaths": [],
            "backgroundColor": "#ffffffff",
            "currentIndex": 0,
            "currentKey": "View 1",
            "dynamicHeight": "auto",
            "padding": {
              "mode": "all",
              "size": "24"
            },
            "radius": "4px",
            "resizeDirection": "HORIZONTAL",
            "shadow": "small",
            "viewList": [
              {
                "id": "e8bd1b6b-733d-4510-bcee-14ac2f58f8ba",
                "key": "defaultView",
                "label": "defaultView"
              }
            ],
            "displayName": "summaryRight",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "CONTAINER_WIDGET",
            "$childrenNode": [
              "canvas16"
            ],
            "$parentPageName": "page1",
            "$validationPaths": {
              "viewList": [
                {
                  "key": "String",
                  "label": "String",
                  "disabled": "Boolean",
                  "hidden": "Boolean"
                }
              ],
              "tooltipText": "String"
            }
          },
          "canvas16": {
            "displayName": "canvas16",
            "$parentNode": "summaryRight",
            "$type": "WIDGET",
            "$widgetType": "CANVAS",
            "$childrenNode": [
              "txt_right_summary"
            ],
            "$parentPageName": "page1"
          },
          "txt_right_summary": {
            "$dynamicAttrPaths": [
              "value"
            ],
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from right container]; [Dynamic - dynamic right]",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_right_summary",
            "$parentNode": "canvas16",
            "$type": "WIDGET",
            "$widgetType": "TEXT_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "value": "String",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          },
          "modalSection1": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          },
          "page2": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page2",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection2",
              "modalSection2"
            ],
            "$parentPageName": "page2"
          },
          "bodySection2": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "59985592-a6f2-4f0b-90f3-a197944fd46d",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection2-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection2-bodySectionContainer1"
            ],
            "displayName": "bodySection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection2-bodySectionContainer1"
            ],
            "$parentPageName": "page2"
          },
          "modalSection2": {
            "displayName": "modalSection2",
            "$parentNode": "page2",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page2"
          },
          "builderInfo": {
            "version": "4.8.3",
            "language": "English"
          },
          "currentUserInfo": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          },
          "urlParams": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dV",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dV"
          },
          "localStorage": {},
          "currentPageInfo": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          },
          "pageInfos": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            },
            {
              "pagePath": "/page2",
              "subPagePath": "/page2/sub-page1",
              "pageName": "page2",
              "subPageName": "sub-page1",
              "isHomePage": false,
              "subPageGroup": ""
            }
          ]
        },
        "validateErrors": {}
      },
    },
  },
  {
    mergeErrorTree: {
      input: {
        "newPartErrorTree": {},
        "updatePathMapAction": {
          "txt_left_summary.value": "UPDATE"
        }
      },
      output: {
        "newErrorTree": {}
      },
    },
  },


  // setExecutionResultReducer
  {
    "type": "execution/setExecutionResultReducer",
    "payload": {
      "updates": [
        {
          "kind": "E",
          "path": [
            "txt_left_summary",
            "value"
          ],
          "lhs": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] test",
          "rhs": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] t"
        }
      ]
    }
  }
]
