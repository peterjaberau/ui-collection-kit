//http://localhost:9345/builder/api/v1/teams/ILAfx4p1C7d0/apps/ILAfx4p1C7dV/versions/0

const response = {
  "appInfo": {
    "appId": "ILAfx4p1C7dV",
    "uid": "b64ff14c-3a60-4925-883a-76d85e99d619",
    "teamID": "ILAfx4p1C7d0",
    "appName": "app-dynamic-string",
    "releaseVersion": 2,
    "mainlineVersion": 2,
    "deployed": true,
    "config": {
      "public": false,
      "waterMark": true,
      "description": "",
      "publishedToMarketplace": false,
      "publishWithAIAgent": false,
      "cover": "",
      "appType": "pc",
      "components": [
        "TEXT_WIDGET",
        "BUTTON_WIDGET",
        "CONTAINER_WIDGET"
      ],
      "actions": []
    },
    "updatedBy": "ILAfx4p1C7dZ",
    "updatedAt": "2025-09-06T07:30:55.734034Z",
    "appActivity": {
      "modifier": "root",
      "modifiedAt": "2025-09-06T07:30:55.734034Z"
    },
    "editedBy": [
      {
        "userID": "ILAfx4p1C7dZ",
        "nickname": "root",
        "email": "root",
        "avatar": "",
        "editedAt": "2025-09-06T07:30:55.734034219Z"
      }
    ]
  },
  "actions": [],
  "components": {
    "version": 0,
    "displayName": "root",
    "parentNode": "",
    "showName": "root",
    "childrenNode": [
      {
        "version": 0,
        "displayName": "page1",
        "parentNode": "root",
        "showName": "page",
        "childrenNode": [
          {
            "version": 0,
            "displayName": "bodySection1",
            "parentNode": "page1",
            "showName": "bodySection",
            "childrenNode": [
              {
                "version": 0,
                "displayName": "bodySection1-bodySectionContainer1",
                "parentNode": "bodySection1",
                "showName": "bodySection1-bodySectionContainer1",
                "childrenNode": [
                  {
                    "version": 0,
                    "displayName": "toolPanelLeft",
                    "parentNode": "bodySection1-bodySectionContainer1",
                    "showName": "container",
                    "childrenNode": [
                      {
                        "version": 0,
                        "displayName": "canvas1",
                        "parentNode": "toolPanelLeft",
                        "showName": "canvas",
                        "childrenNode": [
                          {
                            "version": 0,
                            "displayName": "btn_left_right",
                            "parentNode": "canvas1",
                            "showName": "button",
                            "childrenNode": null,
                            "type": "BUTTON_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 11,
                            "minH": 3,
                            "minW": 1,
                            "x": 11,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "variant": "fill"
                            }
                          },
                          {
                            "version": 0,
                            "displayName": "btn_left_left",
                            "parentNode": "canvas1",
                            "showName": "button",
                            "childrenNode": null,
                            "type": "BUTTON_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 10,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "text": "Left from Left",
                              "variant": "fill"
                            }
                          },
                          {
                            "version": 0,
                            "displayName": "btn_left_reset",
                            "parentNode": "canvas1",
                            "showName": "button",
                            "childrenNode": null,
                            "type": "BUTTON_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 9,
                            "minH": 3,
                            "minW": 1,
                            "x": 23,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "variant": "fill"
                            }
                          }
                        ],
                        "type": "CANVAS",
                        "containerType": "EDITOR_DOT_PANEL",
                        "h": 0,
                        "w": 0,
                        "minH": 0,
                        "minW": 1,
                        "x": -1,
                        "y": -1,
                        "z": 0,
                        "props": {}
                      }
                    ],
                    "type": "CONTAINER_WIDGET",
                    "containerType": "EDITOR_SCALE_SQUARE",
                    "h": 13,
                    "w": 12,
                    "minH": 3,
                    "minW": 1,
                    "x": 1,
                    "y": 12,
                    "z": 0,
                    "props": {
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
                      ]
                    }
                  },
                  {
                    "version": 0,
                    "displayName": "toolPanelRight",
                    "parentNode": "bodySection1-bodySectionContainer1",
                    "showName": "container",
                    "childrenNode": [
                      {
                        "version": 0,
                        "displayName": "canvas4",
                        "parentNode": "toolPanelRight",
                        "showName": "canvas",
                        "childrenNode": [
                          {
                            "version": 0,
                            "displayName": "btn_right_right",
                            "parentNode": "canvas4",
                            "showName": "button",
                            "childrenNode": null,
                            "type": "BUTTON_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 11,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "variant": "fill"
                            }
                          },
                          {
                            "version": 0,
                            "displayName": "btn_right_left",
                            "parentNode": "canvas4",
                            "showName": "button",
                            "childrenNode": null,
                            "type": "BUTTON_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 12,
                            "minH": 3,
                            "minW": 1,
                            "x": 11,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "variant": "fill"
                            }
                          },
                          {
                            "version": 0,
                            "displayName": "btn_right_reset",
                            "parentNode": "canvas4",
                            "showName": "button",
                            "childrenNode": null,
                            "type": "BUTTON_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 9,
                            "minH": 3,
                            "minW": 1,
                            "x": 23,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "variant": "fill"
                            }
                          }
                        ],
                        "type": "CANVAS",
                        "containerType": "EDITOR_DOT_PANEL",
                        "h": 0,
                        "w": 0,
                        "minH": 0,
                        "minW": 1,
                        "x": -1,
                        "y": -1,
                        "z": 0,
                        "props": {}
                      }
                    ],
                    "type": "CONTAINER_WIDGET",
                    "containerType": "EDITOR_SCALE_SQUARE",
                    "h": 13,
                    "w": 12,
                    "minH": 3,
                    "minW": 1,
                    "x": 15,
                    "y": 11,
                    "z": 0,
                    "props": {
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
                      ]
                    }
                  },
                  {
                    "version": 0,
                    "displayName": "contentLeft",
                    "parentNode": "bodySection1-bodySectionContainer1",
                    "showName": "container",
                    "childrenNode": [
                      {
                        "version": 0,
                        "displayName": "canvas7",
                        "parentNode": "contentLeft",
                        "showName": "canvas",
                        "childrenNode": [
                          {
                            "version": 0,
                            "displayName": "txt_left_static",
                            "parentNode": "canvas7",
                            "showName": "text",
                            "childrenNode": null,
                            "type": "TEXT_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 32,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "weight": 400
                            }
                          },
                          {
                            "version": 0,
                            "displayName": "txt_left_dynamic",
                            "parentNode": "canvas7",
                            "showName": "text",
                            "childrenNode": null,
                            "type": "TEXT_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 32,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 9,
                            "z": 0,
                            "props": {
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
                              "weight": 400
                            }
                          }
                        ],
                        "type": "CANVAS",
                        "containerType": "EDITOR_DOT_PANEL",
                        "h": 0,
                        "w": 0,
                        "minH": 0,
                        "minW": 1,
                        "x": -1,
                        "y": -1,
                        "z": 0,
                        "props": {}
                      }
                    ],
                    "type": "CONTAINER_WIDGET",
                    "containerType": "EDITOR_SCALE_SQUARE",
                    "h": 13,
                    "w": 12,
                    "minH": 3,
                    "minW": 1,
                    "x": 1,
                    "y": 39,
                    "z": 0,
                    "props": {
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
                      ]
                    }
                  },
                  {
                    "version": 0,
                    "displayName": "contentRight",
                    "parentNode": "bodySection1-bodySectionContainer1",
                    "showName": "container",
                    "childrenNode": [
                      {
                        "version": 0,
                        "displayName": "canvas10",
                        "parentNode": "contentRight",
                        "showName": "canvas",
                        "childrenNode": [
                          {
                            "version": 0,
                            "displayName": "txt_right_static",
                            "parentNode": "canvas10",
                            "showName": "text",
                            "childrenNode": null,
                            "type": "TEXT_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 31,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "weight": 400
                            }
                          },
                          {
                            "version": 0,
                            "displayName": "txt_right_dynamic",
                            "parentNode": "canvas10",
                            "showName": "text",
                            "childrenNode": null,
                            "type": "TEXT_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 32,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 9,
                            "z": 0,
                            "props": {
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
                              "weight": 400
                            }
                          }
                        ],
                        "type": "CANVAS",
                        "containerType": "EDITOR_DOT_PANEL",
                        "h": 0,
                        "w": 0,
                        "minH": 0,
                        "minW": 1,
                        "x": -1,
                        "y": -1,
                        "z": 0,
                        "props": {}
                      }
                    ],
                    "type": "CONTAINER_WIDGET",
                    "containerType": "EDITOR_SCALE_SQUARE",
                    "h": 21,
                    "w": 12,
                    "minH": 3,
                    "minW": 1,
                    "x": 15,
                    "y": 39,
                    "z": 0,
                    "props": {
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
                      ]
                    }
                  },
                  {
                    "version": 0,
                    "displayName": "summaryLeft",
                    "parentNode": "bodySection1-bodySectionContainer1",
                    "showName": "container",
                    "childrenNode": [
                      {
                        "version": 0,
                        "displayName": "canvas13",
                        "parentNode": "summaryLeft",
                        "showName": "canvas",
                        "childrenNode": [
                          {
                            "version": 0,
                            "displayName": "txt_left_summary",
                            "parentNode": "canvas13",
                            "showName": "text",
                            "childrenNode": null,
                            "type": "TEXT_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 32,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "value": "Summary: [Static - {{txt_left_static.value}}]; [Dynamic - {{txt_left_dynamic.value}}]",
                              "verticalAlign": "center",
                              "weight": 400
                            }
                          }
                        ],
                        "type": "CANVAS",
                        "containerType": "EDITOR_DOT_PANEL",
                        "h": 0,
                        "w": 0,
                        "minH": 0,
                        "minW": 1,
                        "x": -1,
                        "y": -1,
                        "z": 0,
                        "props": {}
                      }
                    ],
                    "type": "CONTAINER_WIDGET",
                    "containerType": "EDITOR_SCALE_SQUARE",
                    "h": 21,
                    "w": 12,
                    "minH": 3,
                    "minW": 1,
                    "x": 1,
                    "y": 66,
                    "z": 0,
                    "props": {
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
                      ]
                    }
                  },
                  {
                    "version": 0,
                    "displayName": "summaryRight",
                    "parentNode": "bodySection1-bodySectionContainer1",
                    "showName": "container",
                    "childrenNode": [
                      {
                        "version": 0,
                        "displayName": "canvas16",
                        "parentNode": "summaryRight",
                        "showName": "canvas",
                        "childrenNode": [
                          {
                            "version": 0,
                            "displayName": "txt_right_summary",
                            "parentNode": "canvas16",
                            "showName": "text",
                            "childrenNode": null,
                            "type": "TEXT_WIDGET",
                            "containerType": "EDITOR_SCALE_SQUARE",
                            "h": 5,
                            "w": 32,
                            "minH": 3,
                            "minW": 1,
                            "x": 0,
                            "y": 0,
                            "z": 0,
                            "props": {
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
                              "weight": 400
                            }
                          }
                        ],
                        "type": "CANVAS",
                        "containerType": "EDITOR_DOT_PANEL",
                        "h": 0,
                        "w": 0,
                        "minH": 0,
                        "minW": 1,
                        "x": -1,
                        "y": -1,
                        "z": 0,
                        "props": {}
                      }
                    ],
                    "type": "CONTAINER_WIDGET",
                    "containerType": "EDITOR_SCALE_SQUARE",
                    "h": 21,
                    "w": 12,
                    "minH": 3,
                    "minW": 1,
                    "x": 15,
                    "y": 66,
                    "z": 0,
                    "props": {
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
                      ]
                    }
                  }
                ],
                "type": "CONTAINER_NODE",
                "containerType": "EDITOR_DOT_PANEL",
                "h": 0,
                "w": 0,
                "minH": 0,
                "minW": 0,
                "x": -1,
                "y": -1,
                "z": 0,
                "props": {}
              }
            ],
            "type": "SECTION_NODE",
            "containerType": "EDITOR_LAYOUT_SQUARE",
            "h": 0,
            "w": 0,
            "minH": 0,
            "minW": 0,
            "x": -1,
            "y": -1,
            "z": 0,
            "props": {
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
              ]
            }
          },
          {
            "version": 0,
            "displayName": "modalSection1",
            "parentNode": "page1",
            "showName": "modalSection",
            "childrenNode": null,
            "type": "MODAL_SECTION_NODE",
            "containerType": "EDITOR_LAYOUT_SQUARE",
            "h": 0,
            "w": 0,
            "minH": 0,
            "minW": 0,
            "x": -1,
            "y": -1,
            "z": 0,
            "props": {}
          }
        ],
        "type": "PAGE_NODE",
        "containerType": "EDITOR_PAGE_SQUARE",
        "h": 0,
        "w": 0,
        "minH": 0,
        "minW": 0,
        "x": -1,
        "y": -1,
        "z": 0,
        "props": {
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
          "topHeight": 0
        }
      },
      {
        "version": 0,
        "displayName": "page2",
        "parentNode": "root",
        "showName": "page",
        "childrenNode": [
          {
            "version": 0,
            "displayName": "bodySection2",
            "parentNode": "page2",
            "showName": "bodySection",
            "childrenNode": [
              {
                "version": 0,
                "displayName": "bodySection2-bodySectionContainer1",
                "parentNode": "bodySection2",
                "showName": "bodySectionContainer",
                "childrenNode": null,
                "type": "CONTAINER_NODE",
                "containerType": "EDITOR_DOT_PANEL",
                "h": 0,
                "w": 0,
                "minH": 0,
                "minW": 0,
                "x": -1,
                "y": -1,
                "z": 0,
                "props": {}
              }
            ],
            "type": "SECTION_NODE",
            "containerType": "EDITOR_LAYOUT_SQUARE",
            "h": 0,
            "w": 0,
            "minH": 0,
            "minW": 0,
            "x": -1,
            "y": -1,
            "z": 0,
            "props": {
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
              ]
            }
          },
          {
            "version": 0,
            "displayName": "modalSection2",
            "parentNode": "page2",
            "showName": "modalSection",
            "childrenNode": null,
            "type": "MODAL_SECTION_NODE",
            "containerType": "EDITOR_LAYOUT_SQUARE",
            "h": 0,
            "w": 0,
            "minH": 0,
            "minW": 0,
            "x": -1,
            "y": -1,
            "z": 0,
            "props": {}
          }
        ],
        "type": "PAGE_NODE",
        "containerType": "EDITOR_PAGE_SQUARE",
        "h": 0,
        "w": 0,
        "minH": 0,
        "minW": 0,
        "x": -1,
        "y": -1,
        "z": 0,
        "props": {
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
          "topHeight": 0
        }
      }
    ],
    "type": "DOT_PANEL",
    "containerType": "EDITOR_DOT_PANEL",
    "h": 0,
    "w": 0,
    "minH": 0,
    "minW": 0,
    "x": -1,
    "y": -1,
    "z": 0,
    "props": {
      "currentPageIndex": 0,
      "pageSortedKey": [
        "page1",
        "page2"
      ],
      "viewportSizeType": "fluid"
    }
  },
  "dependenciesState": {},
  "dragShadowState": {},
  "dottedLineSquareState": {},
  "displayNameState": []
}
