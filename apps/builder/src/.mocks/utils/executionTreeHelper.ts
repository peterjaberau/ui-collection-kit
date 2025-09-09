/*
  * Sequence
  * 1. initTree

 */



export const ExecutionTreeFactory_CLASS = {
  context: {
    this: {
      "dependenciesState": {
        "btn_1.text": [
          "currentUserInfo.userID"
        ],
        "currentPageInfo.pagePath": [
          "root.pageSortedKey",
          "root.currentPageIndex"
        ],
        "currentPageInfo.subPagePath": [
          "root.currentSubPagePath"
        ]
      },
      "inDependencyTree": {
        "root.currentSubPagePath": [
          "currentPageInfo.subPagePath"
        ],
        "root.pageSortedKey": [
          "currentPageInfo.pagePath"
        ],
        "root.currentPageIndex": [
          "currentPageInfo.pagePath"
        ],
        "currentUserInfo.userID": [
          "btn_1.text"
        ]
      },
      "evalOrder": [
        "root.currentSubPagePath",
        "currentPageInfo.subPagePath",
        "root.currentPageIndex",
        "root.pageSortedKey",
        "currentPageInfo.pagePath",
        "currentUserInfo.userID",
        "btn_1.text"
      ],
      "oldRawTree": {
        "root": {
          "currentPageIndex": 0,
          "pageSortedKey": [
            "page1"
          ],
          "displayName": "root",
          "$parentNode": "",
          "$type": "WIDGET",
          "$widgetType": "DOT_PANEL",
          "$childrenNode": [
            "page1"
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
              "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
        "btn_1": {
          "$dynamicAttrPaths": [
            "text"
          ],
          "colorScheme": "blue",
          "hidden": false,
          "text": "{{currentUserInfo.userID}}",
          "variant": "fill",
          "displayName": "btn_1",
          "$parentNode": "bodySection1-bodySectionContainer1",
          "$type": "WIDGET",
          "$widgetType": "BUTTON_WIDGET",
          "$childrenNode": [],
          "$parentPageName": "page1",
          "$validationPaths": {
            "text": "String",
            "loading": "Boolean",
            "disabled": "Boolean",
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
          "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
          "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
          }
        ]
      },
      "hasCyclical": false,
      "executedTree": {
        "root": {
          "currentPageIndex": 0,
          "pageSortedKey": [
            "page1"
          ],
          "displayName": "root",
          "$parentNode": "",
          "$type": "WIDGET",
          "$widgetType": "DOT_PANEL",
          "$childrenNode": [
            "page1"
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
              "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
        "btn_1": {
          "$dynamicAttrPaths": [
            "text"
          ],
          "colorScheme": "blue",
          "hidden": false,
          "text": "ILAfx4p1C7dZ",
          "variant": "fill",
          "displayName": "btn_1",
          "$parentNode": "bodySection1-bodySectionContainer1",
          "$type": "WIDGET",
          "$widgetType": "BUTTON_WIDGET",
          "$childrenNode": [],
          "$parentPageName": "page1",
          "$validationPaths": {
            "text": "String",
            "loading": "Boolean",
            "disabled": "Boolean",
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
          "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
          "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
          }
        ]
      },
      "errorTree": {},
      "allKeys": {},
      "runningActionsMap": {}
    },
    local: {
      "dependenciesMap": {
        "btn_1.text": [
          "currentUserInfo.userID"
        ],
        "currentPageInfo.pagePath": [
          "root.pageSortedKey",
          "root.currentPageIndex"
        ],
        "currentPageInfo.subPagePath": [
          "root.currentSubPagePath"
        ]
      },
      "rawTree": {
        "root": {
          "currentPageIndex": 0,
          "pageSortedKey": [
            "page1"
          ],
          "displayName": "root",
          "$parentNode": "",
          "$type": "WIDGET",
          "$widgetType": "DOT_PANEL",
          "$childrenNode": [
            "page1"
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
              "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
        "btn_1": {
          "$dynamicAttrPaths": [
            "text"
          ],
          "colorScheme": "blue",
          "hidden": false,
          "text": "{{currentUserInfo.userID}}",
          "variant": "fill",
          "displayName": "btn_1",
          "$parentNode": "bodySection1-bodySectionContainer1",
          "$type": "WIDGET",
          "$widgetType": "BUTTON_WIDGET",
          "$childrenNode": [],
          "$parentPageName": "page1",
          "$validationPaths": {
            "text": "String",
            "loading": "Boolean",
            "disabled": "Boolean",
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
          "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
          "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
          }
        ]
      }
    }
  },

  actions: {
    "constructor": {},

    // 1
    "initTree": {
      input: {
        rawTree: {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1"
            ],
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1"
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
                "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
          "btn_1": {
            "$dynamicAttrPaths": [
              "text"
            ],
            "colorScheme": "blue",
            "hidden": false,
            "text": "{{currentUserInfo.userID}}",
            "variant": "fill",
            "displayName": "btn_1",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "loading": "Boolean",
              "disabled": "Boolean",
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
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
            }
          ]
        }
      }
    },

    // 2
    generateInDependenciesMap: {
      input: {
        rawTree: {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1"
            ],
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1"
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
                "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
          "btn_1": {
            "$dynamicAttrPaths": [
              "text"
            ],
            "colorScheme": "blue",
            "hidden": false,
            "text": "{{currentUserInfo.userID}}",
            "variant": "fill",
            "displayName": "btn_1",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "loading": "Boolean",
              "disabled": "Boolean",
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
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
            }
          ]
        }
      },
      output: {
        "...dependenciesMap": {
          "btn_1.text": [
            "currentUserInfo.userID"
          ],
          "currentPageInfo.pagePath": [
            "root.pageSortedKey",
            "root.currentPageIndex"
          ],
          "currentPageInfo.subPagePath": [
            "root.currentSubPagePath"
          ]
        }
      }
    },


    // 3
    sortEvalOrder: {
      input: {
        dependenciesMap: {
          "btn_1.text": [
            "currentUserInfo.userID"
          ],
          "currentPageInfo.pagePath": [
            "root.pageSortedKey",
            "root.currentPageIndex"
          ],
          "currentPageInfo.subPagePath": [
            "root.currentSubPagePath"
          ]
        }
      }
    },


    "detroyTree": {},



    "validateTree": {
      input: {
        tree: {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1"
            ],
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1"
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
                "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
          "btn_1": {
            "$dynamicAttrPaths": [
              "text"
            ],
            "colorScheme": "blue",
            "hidden": false,
            "text": "ILAfx4p1C7dZ",
            "variant": "fill",
            "displayName": "btn_1",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "loading": "Boolean",
              "disabled": "Boolean",
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
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
            }
          ]
        }
      },
      output: {
        "validateResultTree": {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1"
            ],
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1"
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
                "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
          "btn_1": {
            "$dynamicAttrPaths": [
              "text"
            ],
            "colorScheme": "blue",
            "hidden": false,
            "text": "ILAfx4p1C7dZ",
            "variant": "fill",
            "displayName": "btn_1",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "loading": "Boolean",
              "disabled": "Boolean",
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
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
            }
          ]
        },
        "validateErrors": {}
      }
    },

    "calcSubTreeSortOrder": {
      input: {
        differences: [],
        rawTree: {},
        isIgnoreDynamicPaths: false
      }
    },



    getEvaluationSortOrder: {
      input: {
        changes: [],
        inverseMap: {}
      }
    },

    getCompleteSortOrder: {
      input: {
        changes: [],
        inDependencyTree: {}
      }
    },

    mergeErrorTree: {
      input: {
        newPartErrorTree: {},
        updatePathMapAction: {}
      }
    },

    updateExecutionTreeByUpdatePaths: {
      input: {
        updatePathMapAction: {},
        executionTree: {},
        rawTree: {},
        walkedPath: {}
      }
    },

    mergeOrderPathAndUpdateMapActions: {
      input: {
        orderPaths: [],
        updateMapActions: {}
      }
    },

    updateTree: {
      input: {
        rawTree: {
          "root": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1"
            ],
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1"
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
                "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
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
          "btn_1": {
            "$dynamicAttrPaths": [
              "text"
            ],
            "colorScheme": "blue",
            "hidden": false,
            "text": "{{currentUserInfo.userID}}",
            "variant": "fill",
            "displayName": "btn_1",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "loading": "Boolean",
              "disabled": "Boolean",
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
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
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
            }
          ]
        },
        isAddAction: false
      }
    },

    setEvaluatedTree: {
      input: {
        executedTree: {}
      }
    },

    getUpdatePathFromDifferences: {
      input: {
        differences: []
      }
    },

    updateRawTreeByUpdatePaths: {
      input: {
        paths: [],
        executionTree: {},
        walkedPath: {}
      }
    },

    updateTreeFromExecution: {
      input: {
        executionTree: {}
      }
    },

    listEntityDependencies: {
      input: {
        widgetOrAction: {},
        displayName: ""
      }
    },

    generateDependenciesMap: {
      input: {
        rawTree: {}
      }
    },




    executeTree: {
      input: {
        oldRawTree: {},
        sortedEvalOrder: [],
        point: -1
      }
    },

  }

}
