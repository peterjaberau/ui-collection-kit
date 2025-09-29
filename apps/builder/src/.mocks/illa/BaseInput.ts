const singleButtonWidgetSelected = {
  "props": {
    "placeholder": null,
    "handleUpdateDsl": null,
    "value": null,
    "detailedDescription": null,
    "defaultValue": null,
    "wrappedCodeFunc": null,
    "labelSize": null,


    "isSetterSingleRow": false,
    "attrName": "tooltipText",
    "expectedType": "String",
    "widgetDisplayName": "btn_left_left",
    "labelName": "Tooltip",
    "labelDesc": "User can enter component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.",
    "widgetType": "BUTTON_WIDGET",
    "onlyHasSetter": false
  },
  "selectors": {
    "listWidgets": {}
  },
  "onChange": {
    "value": "Left from Left1",
    "attrName": "text",
    "handleUpdateDsl": null
  }
}

const singleTextWidgetSelectedWithDynamic = {
  "props": {
    "isSetterSingleRow": true,
    "attrName": "value",
    "expectedType": "String",
    "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}]",
    "widgetDisplayName": "txt_left_summary",
    "widgetType": "TEXT_WIDGET",
    "onlyHasSetter": false
  },
  "selectors": {
    "listWidgets": {}
  },
  "onChange": {
    "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}] ",
    "attrName": "value"
  },
  "state": {
    "evaluateDynamicString": {
      "input": {
        "keyInDataTree": "",
        "dynamicString": "{{txt_left_static.value}}",
        "dataTree": {
          "toolPanelLeft": {
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
            "displayName": "toolPanelLeft"
          },
          "btn_left_right": {
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
            "displayName": "btn_left_right"
          },
          "btn_left_left": {
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
            "text": "Left from Left",
            "variant": "fill",
            "displayName": "btn_left_left"
          },
          "btn_left_reset": {
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
            "displayName": "btn_left_reset"
          },
          "toolPanelRight": {
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
            "displayName": "toolPanelRight"
          },
          "btn_right_right": {
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
            "displayName": "btn_right_right"
          },
          "btn_right_left": {
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
            "displayName": "btn_right_left"
          },
          "btn_right_reset": {
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
            "displayName": "btn_right_reset"
          },
          "contentLeft": {
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
            "displayName": "contentLeft"
          },
          "txt_left_static": {
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
            "displayName": "txt_left_static"
          },
          "txt_left_dynamic": {
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
            "displayName": "txt_left_dynamic"
          },
          "contentRight": {
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
            "displayName": "contentRight"
          },
          "txt_right_static": {
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
            "displayName": "txt_right_static"
          },
          "txt_right_dynamic": {
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
            "displayName": "txt_right_dynamic"
          },
          "summaryLeft": {
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
            "displayName": "summaryLeft"
          },
          "txt_left_summary": {
            "colorScheme": "grayBlue",
            "disableMarkdown": true,
            "dynamicHeight": "auto",
            "fs": "14px",
            "hidden": false,
            "horizontalAlign": "start",
            "resizeDirection": "HORIZONTAL",
            "value": "Summary: [Static - STATIC text from left container]; [Dynamic - dynamic left] ",
            "verticalAlign": "center",
            "weight": 400,
            "displayName": "txt_left_summary"
          },
          "summaryRight": {
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
            "displayName": "summaryRight"
          },
          "txt_right_summary": {
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
            "displayName": "txt_right_summary"
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
            "pagePath": "page1"
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
      "logic": {
        "requiresEval": true
      },
      "output": {
        "evalResult": "STATIC text from left container"
      }
    }
  }
}


const multipleButtonWidgetSelected = {
  "props": {
    "defaultValue": null,
    "labelSize": null,
    "detailedDescription": null,
    "isSetterSingleRow": false,
    "handleUpdateDsl": (attrPath: any, value: any)=>{},
    "placeholder": "{{false}}",
    "attrName": "loading",
    "expectedType": "Boolean",
    "widgetDisplayName": "btn_left_left",
    "labelName": "Loading",
    "labelDesc": "Whether the component should show a loading indicator.",
    "widgetType": "BUTTON_WIDGET",
    "onlyHasSetter": false
  },
  "selectors": {
    "listWidgets": {}
  }
}
