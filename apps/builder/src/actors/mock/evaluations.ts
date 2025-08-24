export default {
  "tree": {
    "fetch_users": {
      "actionId": "68aac3acde8cf11f80e4a91d",
      "run": {},
      "clear": {},
      "isLoading": false,
      "responseMeta": {
        "isExecutionSuccess": true
      },
      "config": {
        "timeoutInMillisecond": 10000,
        "paginationType": "NONE",
        "encodeParamsToggle": true,
        "body": "SELECT * FROM user_data \nWHERE name ILIKE '%%'\nAND dob >= '1979-12-31T18:30:00.000Z'\n\nORDER BY id\nOFFSET 0\nLIMIT 3",
        "pluginSpecifiedTemplates": [
          {
            "value": false
          }
        ]
      },
      "ENTITY_TYPE": "ACTION",
      "datasourceUrl": "",
      "__evaluation__": {
        "errors": {
          "config.pluginSpecifiedTemplates[0].value": [],
          "config.pluginSpecifiedTemplates[0]": [],
          "config.body": [],
          "run": [],
          "config.pluginSpecifiedTemplates": [],
          "config": [],
          "isLoading": []
        }
      },
      "data": [
        {
          "id": 1,
          "gender": "masculino",
          "latitude": -33.8679,
          "longitude": 151.2073,
          "dob": "2024-11-22T01:22:21.28Z",
          "phone": "(927) 606-7690",
          "email": "mila@yahoo.com",
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "country": "Spain",
          "name": "srigiri223",
          "created_at": "2023-09-15T10:30:00Z",
          "updated_at": "2023-09-15T10:30:00Z"
        },
        {
          "id": 2,
          "gender": "female",
          "latitude": 40.7128,
          "longitude": -74.006,
          "dob": "2024-09-23T00:00:00Z",
          "phone": "212-555-2222",
          "email": "nguyenvaa@gmail.vom",
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "country": "Germany",
          "name": "Jane Fistcherdddx",
          "created_at": "2019-07-01T05:30:00Z",
          "updated_at": "2019-07-01T05:30:00Z"
        },
        {
          "id": 3,
          "gender": "male",
          "latitude": 51.5074,
          "longitude": 0.1278,
          "dob": "1985-09-28T00:00:00Z",
          "phone": "(927) 606-7690",
          "email": "alexander@example.com",
          "image": "https://randomuser.me/api/portraits/men/3.jpg",
          "country": "Spain",
          "name": "Tesstuit Jin",
          "created_at": "2019-07-01T05:30:00Z",
          "updated_at": "2019-07-01T05:30:00Z"
        }
      ]
    },
    "JSObject1": {
      "myVar1": [],
      "myVar2": {},
      "myFun1": "function () {}",
      "myFun2": "async function () {}",
      "body": "export default {\n\tmyVar1: [],\n\tmyVar2: {},\n\tmyFun1 () {\n\t\t//\twrite code here\n\t\t//\tJSObject1.myVar1 = [1,2,3]\n\t},\n\tasync myFun2 () {\n\t\t//\tuse async-await or promises\n\t\t//\tawait storeValue('varName', 'hello world')\n\t}\n}",
      "ENTITY_TYPE": "JSACTION",
      "actionId": "68aac910de8cf11f80e4a924",
      "__evaluation__": {
        "errors": {
          "myVar2": [],
          "myVar1": [],
          "body": []
        }
      }
    },
    "JSObject2": {
      "myVar1": [],
      "myVar2": {},
      "myFun1": "function () {}",
      "myFun2": "async function () {}",
      "body": "export default {\n\tmyVar1: [],\n\tmyVar2: {},\n\tmyFun1 () {\n\t\t//\twrite code here\n\t\t//\tJSObject2.myVar1 = [1,2,3]\n\t},\n\tasync myFun2 () {\n\t\t//\tuse async-await or promises\n\t\t//\tawait storeValue('varName', 'hello world')\n\t}\n}",
      "ENTITY_TYPE": "JSACTION",
      "actionId": "68aac913de8cf11f80e4a927",
      "__evaluation__": {
        "errors": {
          "myVar2": [],
          "myVar1": [],
          "body": []
        }
      }
    },
    "MainContainer": {
      "ENTITY_TYPE": "WIDGET",
      "widgetName": "MainContainer",
      "backgroundColor": "none",
      "rightColumn": 4896,
      "snapColumns": 64,
      "widgetId": "0",
      "topRow": 0,
      "bottomRow": 690,
      "containerStyle": "none",
      "snapRows": 124,
      "parentRowSpace": 1,
      "canExtend": true,
      "minHeight": 1292,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "meta": {},
      "isLoading": false,
      "componentHeight": 690,
      "componentWidth": 4896,
      "type": "CANVAS_WIDGET",
      "borderColor": "",
      "borderRadius": "",
      "boxShadow": "",
      "__evaluation__": {
        "errors": {
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": [],
          "borderRadius": [],
          "boxShadow": []
        }
      }
    },
    "txt_title": {
      "ENTITY_TYPE": "WIDGET",
      "mobileBottomRow": 8,
      "widgetName": "txt_title",
      "topRow": 0,
      "bottomRow": 4,
      "parentRowSpace": 10,
      "mobileRightColumn": 21,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "parentColumnSpace": 20.75,
      "leftColumn": 0,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "Users",
      "key": "wp8ijwfpam",
      "rightColumn": 64,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "b3kcvrko4x",
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 5,
      "maxDynamicHeight": 9000,
      "fontSize": "1.875rem",
      "minDynamicHeight": 4,
      "value": "Users",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": 1328,
      "type": "TEXT_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "isVisible": [],
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": []
        }
      }
    },
    "div_header": {
      "ENTITY_TYPE": "WIDGET",
      "mobileBottomRow": 10,
      "widgetName": "div_header",
      "thickness": 1,
      "topRow": 4,
      "bottomRow": 8,
      "parentRowSpace": 10,
      "capType": "nc",
      "mobileRightColumn": 21,
      "animateLoading": true,
      "parentColumnSpace": 12.6865234375,
      "leftColumn": 0,
      "key": "vwtp1dhpvk",
      "dividerColor": "#858282",
      "orientation": "horizontal",
      "strokeStyle": "solid",
      "rightColumn": 64,
      "widgetId": "9vzbluqkt0",
      "capSide": 0,
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 6,
      "responsiveBehavior": "fill",
      "originalTopRow": 6,
      "mobileLeftColumn": 1,
      "originalBottomRow": 10,
      "meta": {},
      "componentHeight": 40,
      "componentWidth": 811.9375,
      "type": "DIVIDER_WIDGET",
      "__evaluation__": {
        "errors": {
          "isVisible": [],
          "animateLoading": [],
          "orientation": [],
          "dividerColor": [],
          "strokeStyle": [],
          "thickness": [],
          "capType": []
        }
      }
    },
    "sel_country": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "labelText": "Country",
      "topRow": 8,
      "labelWidth": 5,
      "serverSideFiltering": false,
      "defaultOptionValue": "",
      "animateLoading": true,
      "leftColumn": 27,
      "placeholderText": "Any",
      "isDisabled": false,
      "isRequired": false,
      "dynamicHeight": "FIXED",
      "accentColor": "#16a34a",
      "isVisible": true,
      "isLoading": false,
      "borderRadius": "0px",
      "originalBottomRow": 17,
      "widgetName": "sel_country",
      "isFilterable": false,
      "bottomRow": 15,
      "parentRowSpace": 10,
      "parentColumnSpace": 23.578125,
      "labelPosition": "Top",
      "onDropdownClose": "",
      "sourceData": [
        {
          "label": "United States",
          "value": "United States"
        },
        {
          "label": "Australia",
          "value": "Australia"
        },
        {
          "label": "United Kingdom",
          "value": "United Kingdom"
        },
        {
          "label": "France",
          "value": "France"
        },
        {
          "label": "Spain",
          "value": "Spain"
        },
        {
          "label": "China",
          "value": "China"
        },
        {
          "label": "Germany",
          "value": "Germany"
        },
        {
          "label": "Chile",
          "value": "Chile"
        }
      ],
      "key": "uuhcahpt5v",
      "labelTextSize": "0.875rem",
      "rightColumn": 43,
      "widgetId": "rgcfekuvi0",
      "optionValue": "value",
      "minWidth": 450,
      "labelAlignment": "left",
      "optionLabel": "label",
      "responsiveBehavior": "fill",
      "originalTopRow": 10,
      "maxDynamicHeight": 9000,
      "onOptionChange": "{{fetch_users.run();\nresetWidget(\"list_users\", true);}}",
      "minDynamicHeight": 4,
      "options": [
        {
          "label": "United States",
          "value": "United States"
        },
        {
          "label": "Australia",
          "value": "Australia"
        },
        {
          "label": "United Kingdom",
          "value": "United Kingdom"
        },
        {
          "label": "France",
          "value": "France"
        },
        {
          "label": "Spain",
          "value": "Spain"
        },
        {
          "label": "China",
          "value": "China"
        },
        {
          "label": "Germany",
          "value": "Germany"
        },
        {
          "label": "Chile",
          "value": "Chile"
        }
      ],
      "isValid": true,
      "selectedOptionValue": "",
      "selectedOptionLabel": "",
      "value": "",
      "label": "",
      "filterText": "",
      "isDirty": false,
      "meta": {
        "value": "",
        "label": "",
        "filterText": ""
      },
      "componentHeight": 70,
      "componentWidth": 377.25,
      "type": "SELECT_WIDGET",
      "labelTooltip": "",
      "labelTextColor": "",
      "labelStyle": "",
      "__evaluation__": {
        "errors": {
          "meta.filterText": [],
          "meta.label": [],
          "meta.value": [],
          "meta": [],
          "isDirty": [],
          "defaultOptionValue": [],
          "value": [],
          "sourceData": [],
          "optionValue": [],
          "optionLabel": [],
          "options": [],
          "serverSideFiltering": [],
          "selectedOptionValue": [],
          "label": [],
          "selectedOptionLabel": [],
          "isRequired": [],
          "isValid": [],
          "borderRadius": [],
          "accentColor": [],
          "onDropdownClose": [],
          "onOptionChange": [],
          "filterText": [],
          "labelText": [],
          "isFilterable": [],
          "labelTooltip": [],
          "placeholderText": [],
          "isVisible": [],
          "isDisabled": [],
          "animateLoading": [],
          "labelTextColor": [],
          "labelTextSize": [],
          "labelStyle": [],
          "boxShadow": []
        }
      }
    },
    "dat_bornAfter": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "dateFormat": "LL",
      "topRow": 8,
      "labelWidth": 5,
      "animateLoading": true,
      "leftColumn": 43,
      "isDisabled": false,
      "onDateSelected": "{{fetch_users.run();\nresetWidget(\"list_users\", true);}}",
      "isRequired": false,
      "dynamicHeight": "FIXED",
      "accentColor": "#16a34a",
      "isVisible": true,
      "datePickerType": "DATE_PICKER",
      "isLoading": false,
      "timePrecision": "minute",
      "borderRadius": "0px",
      "originalBottomRow": 17,
      "closeOnSelection": true,
      "mobileBottomRow": 15,
      "widgetName": "dat_bornAfter",
      "minDate": "1920-12-31T18:30:00.000Z",
      "bottomRow": 15,
      "shortcuts": false,
      "parentRowSpace": 10,
      "mobileRightColumn": 37,
      "parentColumnSpace": 12.6865234375,
      "labelPosition": "Top",
      "key": "bbdoibhz1a",
      "labelTextSize": "0.875rem",
      "defaultDate": "1980-01-01T05:30:00.000+11:00",
      "rightColumn": 58,
      "widgetId": "3vg2zabmzb",
      "minWidth": 450,
      "label": "Born After",
      "labelAlignment": "left",
      "mobileTopRow": 8,
      "responsiveBehavior": "fill",
      "originalTopRow": 10,
      "mobileLeftColumn": 17,
      "maxDynamicHeight": 9000,
      "firstDayOfWeek": 0,
      "maxDate": "2121-12-31T18:29:00.000Z",
      "minDynamicHeight": 4,
      "isValid": true,
      "selectedDate": "1979-12-31T18:30:00.000Z",
      "formattedDate": "January 1, 1980",
      "value": "1980-01-01T05:30:00.000+11:00",
      "isDirty": false,
      "meta": {
        "value": "1980-01-01T05:30:00.000+11:00"
      },
      "componentHeight": 70,
      "componentWidth": 190.2978515625,
      "type": "DATE_PICKER_WIDGET2",
      "labelTooltip": "",
      "labelTextColor": "",
      "labelStyle": "",
      "__evaluation__": {
        "errors": {
          "meta.value": [],
          "meta": [],
          "dateFormat": [],
          "defaultDate": [],
          "value": [],
          "formattedDate": [],
          "timePrecision": [],
          "maxDate": [],
          "minDate": [],
          "isRequired": [],
          "selectedDate": [],
          "isValid": [],
          "borderRadius": [],
          "accentColor": [],
          "onDateSelected": [],
          "firstDayOfWeek": [],
          "label": [],
          "labelTooltip": [],
          "isVisible": [],
          "isDisabled": [],
          "animateLoading": [],
          "shortcuts": [],
          "closeOnSelection": [],
          "labelTextColor": [],
          "labelTextSize": [],
          "labelStyle": [],
          "boxShadow": []
        }
      }
    },
    "icn_resetFilters": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "mobileBottomRow": 12,
      "widgetName": "icn_resetFilters",
      "onClick": "{{fetch_users.run()}}",
      "buttonColor": "#16a34a",
      "topRow": 10,
      "bottomRow": 15,
      "tooltip": "Refresh",
      "parentRowSpace": 10,
      "mobileRightColumn": 62,
      "animateLoading": true,
      "parentColumnSpace": 12.6865234375,
      "leftColumn": 60,
      "isDisabled": false,
      "key": "v1e9uvk3sy",
      "rightColumn": 64,
      "iconName": "reset",
      "widgetId": "eh8nu9zkuu",
      "minWidth": 50,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 8,
      "responsiveBehavior": "hug",
      "originalTopRow": 12,
      "borderRadius": "0px",
      "mobileLeftColumn": 58,
      "originalBottomRow": 17,
      "buttonVariant": "TERTIARY",
      "meta": {},
      "componentHeight": 50,
      "componentWidth": 50.74609375,
      "type": "ICON_BUTTON_WIDGET",
      "__evaluation__": {
        "errors": {
          "borderRadius": [],
          "buttonColor": [],
          "onClick": [],
          "iconName": [],
          "tooltip": [],
          "isVisible": [],
          "isDisabled": [],
          "animateLoading": [],
          "buttonVariant": [],
          "boxShadow": []
        }
      }
    },
    "Image1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "Image1",
      "topRow": 0,
      "bottomRow": 13,
      "mobileRightColumn": 16,
      "animateLoading": true,
      "imageShape": "RECTANGLE",
      "leftColumn": 0,
      "defaultImage": "https://assets.appsmith.com/widgets/default.png",
      "flexVerticalAlignment": "start",
      "key": "3mp4fk5rfw",
      "rightColumn": 11,
      "objectFit": "cover",
      "widgetId": "8g9n8rkxuh",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "maxZoomLevel": 1,
      "enableDownload": false,
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "enableRotation": false,
      "meta": {},
      "componentHeight": 130,
      "componentWidth": null,
      "type": "IMAGE_WIDGET",
      "__evaluation__": {
        "errors": {
          "borderRadius": [],
          "image": [],
          "defaultImage": [],
          "objectFit": [],
          "maxZoomLevel": [],
          "isVisible": [],
          "animateLoading": [],
          "enableRotation": [],
          "enableDownload": [],
          "boxShadow": [],
          "currentItem": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 1,
        "gender": "masculino",
        "latitude": -33.8679,
        "longitude": 151.2073,
        "dob": "2024-11-22T01:22:21.28Z",
        "phone": "(927) 606-7690",
        "email": "mila@yahoo.com",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Spain",
        "name": "srigiri223",
        "created_at": "2023-09-15T10:30:00Z",
        "updated_at": "2023-09-15T10:30:00Z"
      },
      "currentIndex": 0,
      "referencedWidgetId": "8g9n8rkxuh",
      "metaWidgetId": "v6bn2e64ob_9nqq21ylos",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_xl952uysc4",
        "v6bn2e64ob_9nqq21ylos",
        "v6bn2e64ob_zz9hd9qh0r",
        "v6bn2e64ob_zvex73g771"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "image": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    "Text1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 4,
      "widgetName": "Text1",
      "topRow": 0,
      "bottomRow": 4,
      "mobileRightColumn": 28,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "srigiri223",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "cj50vd1b8l",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1.25rem",
      "textStyle": "HEADING",
      "minDynamicHeight": 4,
      "value": "srigiri223",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": null,
      "type": "TEXT_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "isVisible": [],
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "currentItem": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 1,
        "gender": "masculino",
        "latitude": -33.8679,
        "longitude": 151.2073,
        "dob": "2024-11-22T01:22:21.28Z",
        "phone": "(927) 606-7690",
        "email": "mila@yahoo.com",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Spain",
        "name": "srigiri223",
        "created_at": "2023-09-15T10:30:00Z",
        "updated_at": "2023-09-15T10:30:00Z"
      },
      "currentIndex": 0,
      "referencedWidgetId": "cj50vd1b8l",
      "metaWidgetId": "v6bn2e64ob_kryaz5ccby",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_30dp9dcrs7",
        "v6bn2e64ob_kryaz5ccby",
        "v6bn2e64ob_offuw06atv",
        "v6bn2e64ob_ofyh1054jr"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Text2": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "Text2",
      "topRow": 4,
      "bottomRow": 8,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "mila@yahoo.com",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "gtsadp0loc",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "value": "mila@yahoo.com",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": null,
      "type": "TEXT_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "isVisible": [],
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "currentItem": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 1,
        "gender": "masculino",
        "latitude": -33.8679,
        "longitude": 151.2073,
        "dob": "2024-11-22T01:22:21.28Z",
        "phone": "(927) 606-7690",
        "email": "mila@yahoo.com",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Spain",
        "name": "srigiri223",
        "created_at": "2023-09-15T10:30:00Z",
        "updated_at": "2023-09-15T10:30:00Z"
      },
      "currentIndex": 0,
      "referencedWidgetId": "gtsadp0loc",
      "metaWidgetId": "v6bn2e64ob_0yd5ig824y",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_lgash2gxn6",
        "v6bn2e64ob_0yd5ig824y",
        "v6bn2e64ob_8s5l87108q",
        "v6bn2e64ob_e91gfyhvzq"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Text2Copy1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "Text2Copy1",
      "topRow": 8,
      "bottomRow": 12,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "(927) 606-7690",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "4idvv5ik4y",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "value": "(927) 606-7690",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": null,
      "type": "TEXT_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "isVisible": [],
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "currentItem": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 1,
        "gender": "masculino",
        "latitude": -33.8679,
        "longitude": 151.2073,
        "dob": "2024-11-22T01:22:21.28Z",
        "phone": "(927) 606-7690",
        "email": "mila@yahoo.com",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Spain",
        "name": "srigiri223",
        "created_at": "2023-09-15T10:30:00Z",
        "updated_at": "2023-09-15T10:30:00Z"
      },
      "currentIndex": 0,
      "referencedWidgetId": "4idvv5ik4y",
      "metaWidgetId": "v6bn2e64ob_tj51h1cr7m",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_ebuhmd7219",
        "v6bn2e64ob_tj51h1cr7m",
        "v6bn2e64ob_mrhgus4xbp",
        "v6bn2e64ob_wcte9rt1ms"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Text2Copy2": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "Text2Copy2",
      "topRow": 4,
      "bottomRow": 8,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 33,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "22nd Nov 2024",
      "key": "b6m5perck8",
      "rightColumn": 50,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "tw8lhe3j41",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "value": "22nd Nov 2024",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": null,
      "type": "TEXT_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "isVisible": [],
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "currentItem": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 1,
        "gender": "masculino",
        "latitude": -33.8679,
        "longitude": 151.2073,
        "dob": "2024-11-22T01:22:21.28Z",
        "phone": "(927) 606-7690",
        "email": "mila@yahoo.com",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Spain",
        "name": "srigiri223",
        "created_at": "2023-09-15T10:30:00Z",
        "updated_at": "2023-09-15T10:30:00Z"
      },
      "currentIndex": 0,
      "referencedWidgetId": "tw8lhe3j41",
      "metaWidgetId": "v6bn2e64ob_olz6llw7tn",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_6f80dprzl5",
        "v6bn2e64ob_olz6llw7tn",
        "v6bn2e64ob_57xnwr2uvf",
        "v6bn2e64ob_xl1ki93nsd"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Text2CopyCopy": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "Text2CopyCopy",
      "topRow": 8,
      "bottomRow": 12,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 33,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "Spain",
      "key": "b6m5perck8",
      "rightColumn": 50,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "5rnvkyl9z9",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "value": "Spain",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": null,
      "type": "TEXT_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "isVisible": [],
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "currentItem": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 1,
        "gender": "masculino",
        "latitude": -33.8679,
        "longitude": 151.2073,
        "dob": "2024-11-22T01:22:21.28Z",
        "phone": "(927) 606-7690",
        "email": "mila@yahoo.com",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Spain",
        "name": "srigiri223",
        "created_at": "2023-09-15T10:30:00Z",
        "updated_at": "2023-09-15T10:30:00Z"
      },
      "currentIndex": 0,
      "referencedWidgetId": "5rnvkyl9z9",
      "metaWidgetId": "v6bn2e64ob_yzrjf5yq83",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_lets551tnj",
        "v6bn2e64ob_yzrjf5yq83",
        "v6bn2e64ob_htgd6bhdhy",
        "v6bn2e64ob_342hy39be1"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Canvas3": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "widgetName": "Canvas3",
      "topRow": 0,
      "bottomRow": 150,
      "parentRowSpace": 1,
      "canExtend": false,
      "useAutoLayout": false,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "cu2myxmfcz",
      "dynamicHeight": "FIXED",
      "widgetId": "om4u7kwd35",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": true
      },
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 150,
      "componentWidth": null,
      "type": "CANVAS_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "boxShadow": [],
          "borderRadius": [],
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": []
        }
      },
      "isMobile": false,
      "labelComponentWidth": 0,
      "currentIndex": 0,
      "referencedWidgetId": "om4u7kwd35",
      "metaWidgetId": "v6bn2e64ob_r5v1xws6me",
      "isTemplate": false,
      "siblingMetaWidgets": [
        "v6bn2e64ob_d0syho33ll",
        "v6bn2e64ob_r5v1xws6me",
        "v6bn2e64ob_njwpvr2j4e",
        "v6bn2e64ob_pl07riz25p"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Container1": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 0,
      "isDeletable": false,
      "animateLoading": true,
      "leftColumn": 0,
      "flexVerticalAlignment": "stretch",
      "dynamicHeight": "FIXED",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "isListItemContainer": true,
      "isLoading": false,
      "disabledWidgetFeatures": [
        "dynamicHeight"
      ],
      "borderRadius": "0px",
      "needsErrorInfo": false,
      "mobileBottomRow": 12,
      "widgetName": "Container1",
      "disallowCopy": true,
      "bottomRow": 15,
      "dragDisabled": true,
      "shouldScrollContents": false,
      "mobileRightColumn": 64,
      "borderWidth": 1,
      "positioning": "fixed",
      "key": "x69fvl9n3f",
      "backgroundColor": "white",
      "rightColumn": 64,
      "widgetId": "op5ztlvzm1",
      "containerStyle": "card",
      "minWidth": 450,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 150,
      "componentWidth": null,
      "type": "CONTAINER_WIDGET",
      "__evaluation__": {
        "errors": {
          "boxShadow": [],
          "borderRadius": [],
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": [],
          "data": []
        }
      },
      "isMobile": false,
      "parentRowSpace": 10,
      "labelComponentWidth": null,
      "data": {
        "Image1": {
          "isVisible": true,
          "image": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        "Text1": {
          "isVisible": true,
          "text": "srigiri223"
        },
        "Text2": {
          "isVisible": true,
          "text": "mila@yahoo.com"
        },
        "Text2Copy1": {
          "isVisible": true,
          "text": "(927) 606-7690"
        },
        "Text2Copy2": {
          "isVisible": true,
          "text": "22nd Nov 2024"
        },
        "Text2CopyCopy": {
          "isVisible": true,
          "text": "Spain"
        }
      },
      "currentIndex": 0,
      "referencedWidgetId": "op5ztlvzm1",
      "metaWidgetId": "v6bn2e64ob_8s0q3r4d30",
      "isTemplate": false,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "siblingMetaWidgets": [
        "v6bn2e64ob_n8488vspca",
        "v6bn2e64ob_8s0q3r4d30",
        "v6bn2e64ob_0cr8l1zod7",
        "v6bn2e64ob_uvrw7ttooc"
      ],
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "Canvas2": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 400,
      "widgetName": "Canvas2",
      "topRow": 0,
      "bottomRow": 484,
      "parentRowSpace": 1,
      "canExtend": true,
      "dropDisabled": true,
      "openParentPropertyPane": true,
      "minHeight": 520,
      "mobileRightColumn": 626.25,
      "noPad": true,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "cu2myxmfcz",
      "rightColumn": 1031.09375,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "solo1fqti5",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": true
      },
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 484,
      "componentWidth": 1031.09375,
      "type": "CANVAS_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "boxShadow": [],
          "borderRadius": [],
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": []
        }
      },
      "isMobile": false,
      "labelComponentWidth": 0,
      "isTemplate": false,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob"
    },
    "list_users": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "requiresFlatWidgetChildren": true,
      "isCanvas": true,
      "templateHeight": 160,
      "topRow": 15,
      "pageSize": 3,
      "onPageChange": "{{fetch_users.run()}}",
      "itemSpacing": 8,
      "animateLoading": true,
      "leftColumn": 0,
      "serverSidePagination": true,
      "enhancements": true,
      "flexVerticalAlignment": "start",
      "itemBackgroundColor": "#FFFFFF",
      "accentColor": "#16a34a",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "hasMetaWidgets": true,
      "isLoading": false,
      "mainCanvasId": "solo1fqti5",
      "borderRadius": "0px",
      "additionalStaticProps": [
        "level",
        "levelData",
        "prefixMetaWidgetId",
        "metaWidgetId"
      ],
      "needsErrorInfo": false,
      "mobileBottomRow": 64,
      "currentItemsView": [
        {
          "Image1": {
            "isVisible": true,
            "image": "https://randomuser.me/api/portraits/women/2.jpg"
          },
          "Text1": {
            "isVisible": true,
            "text": "srigiri223"
          },
          "Text2": {
            "isVisible": true,
            "text": "mila@yahoo.com"
          },
          "Text2Copy1": {
            "isVisible": true,
            "text": "(927) 606-7690"
          },
          "Text2Copy2": {
            "isVisible": true,
            "text": "22nd Nov 2024"
          },
          "Text2CopyCopy": {
            "isVisible": true,
            "text": "Spain"
          }
        },
        {
          "Image1": {
            "image": "https://randomuser.me/api/portraits/women/2.jpg",
            "isVisible": true
          },
          "Text1": {
            "isVisible": true,
            "text": "Jane Fistcherdddx"
          },
          "Text2": {
            "isVisible": true,
            "text": "nguyenvaa@gmail.vom"
          },
          "Text2Copy1": {
            "isVisible": true,
            "text": "212-555-2222"
          },
          "Text2Copy2": {
            "isVisible": true,
            "text": "23rd Sep 2024"
          },
          "Text2CopyCopy": {
            "isVisible": true,
            "text": "Germany"
          }
        },
        {
          "Image1": {
            "image": "https://randomuser.me/api/portraits/men/3.jpg",
            "isVisible": true
          },
          "Text1": {
            "isVisible": true,
            "text": "Tesstuit Jin"
          },
          "Text2": {
            "isVisible": true,
            "text": "alexander@example.com"
          },
          "Text2Copy1": {
            "isVisible": true,
            "text": "(927) 606-7690"
          },
          "Text2Copy2": {
            "isVisible": true,
            "text": "28th Sep 1985"
          },
          "Text2CopyCopy": {
            "isVisible": true,
            "text": "Spain"
          }
        }
      ],
      "triggeredItemView": {},
      "widgetName": "list_users",
      "listData": [
        {
          "id": 1,
          "gender": "masculino",
          "latitude": -33.8679,
          "longitude": 151.2073,
          "dob": "2024-11-22T01:22:21.28Z",
          "phone": "(927) 606-7690",
          "email": "mila@yahoo.com",
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "country": "Spain",
          "name": "srigiri223",
          "created_at": "2023-09-15T10:30:00Z",
          "updated_at": "2023-09-15T10:30:00Z"
        },
        {
          "id": 2,
          "gender": "female",
          "latitude": 40.7128,
          "longitude": -74.006,
          "dob": "2024-09-23T00:00:00Z",
          "phone": "212-555-2222",
          "email": "nguyenvaa@gmail.vom",
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "country": "Germany",
          "name": "Jane Fistcherdddx",
          "created_at": "2019-07-01T05:30:00Z",
          "updated_at": "2019-07-01T05:30:00Z"
        },
        {
          "id": 3,
          "gender": "male",
          "latitude": 51.5074,
          "longitude": 0.1278,
          "dob": "1985-09-28T00:00:00Z",
          "phone": "(927) 606-7690",
          "email": "alexander@example.com",
          "image": "https://randomuser.me/api/portraits/men/3.jpg",
          "country": "Spain",
          "name": "Tesstuit Jin",
          "created_at": "2019-07-01T05:30:00Z",
          "updated_at": "2019-07-01T05:30:00Z"
        }
      ],
      "bottomRow": 67,
      "parentRowSpace": 10,
      "mobileRightColumn": 57,
      "mainContainerId": "op5ztlvzm1",
      "primaryKeys": [
        1,
        2,
        3
      ],
      "parentColumnSpace": 26.09375,
      "gridType": "vertical",
      "key": "gto97zrcgn",
      "backgroundColor": "transparent",
      "rightColumn": 64,
      "widgetId": "v6bn2e64ob",
      "minWidth": 450,
      "mobileTopRow": 24,
      "responsiveBehavior": "fill",
      "mobileLeftColumn": 33,
      "selectedItemView": {},
      "childAutoComplete": {
        "currentItem": {
          "id": 1,
          "gender": "masculino",
          "latitude": -33.8679,
          "longitude": 151.2073,
          "dob": "2024-11-22T01:22:21.28Z",
          "phone": "(927) 606-7690",
          "email": "mila@yahoo.com",
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "country": "Spain",
          "name": "srigiri223",
          "created_at": "2023-09-15T10:30:00Z",
          "updated_at": "2023-09-15T10:30:00Z"
        },
        "currentIndex": 0,
        "currentView": {
          "Image1": {
            "isVisible": true,
            "image": "https://randomuser.me/api/portraits/women/2.jpg"
          },
          "Text1": {
            "isVisible": true,
            "text": "srigiri223"
          },
          "Text2": {
            "isVisible": true,
            "text": "mila@yahoo.com"
          },
          "Text2Copy1": {
            "isVisible": true,
            "text": "(927) 606-7690"
          },
          "Text2Copy2": {
            "isVisible": true,
            "text": "22nd Nov 2024"
          },
          "Text2CopyCopy": {
            "isVisible": true,
            "text": "Spain"
          }
        }
      },
      "pageNo": 1,
      "meta": {
        "currentItemsView": "{{[Container1.data,list_users_Container1_v6bn2e64ob_0cr8l1zod7.data,list_users_Container1_v6bn2e64ob_uvrw7ttooc.data]}}"
      },
      "componentHeight": 520,
      "componentWidth": 1670,
      "type": "LIST_WIDGET_V2",
      "__evaluation__": {
        "errors": {
          "meta.selectedItemKey": [],
          "meta": [],
          "currentItemsView": [],
          "listData": [],
          "childAutoComplete": [],
          "boxShadow": [],
          "borderRadius": [],
          "accentColor": [],
          "primaryKeys": [],
          "triggeredItemView": [],
          "selectedItemView": [],
          "onPageChange": [],
          "defaultSelectedItem": [],
          "selectedItemKey": [],
          "pageSize": [],
          "pageNo": [],
          "totalRecordsCount": [],
          "isVisible": [],
          "animateLoading": [],
          "itemSpacing": [],
          "backgroundColor": []
        }
      }
    },
    "inp_name": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "topRow": 8,
      "labelWidth": 5,
      "animateLoading": true,
      "resetOnSubmit": true,
      "leftColumn": 0,
      "labelStyle": "",
      "inputType": "TEXT",
      "placeholderText": "Name",
      "isDisabled": false,
      "isRequired": false,
      "dynamicHeight": "FIXED",
      "accentColor": "#16a34a",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "showStepArrows": false,
      "isVisible": true,
      "isLoading": false,
      "borderRadius": "0px",
      "needsErrorInfo": false,
      "mobileBottomRow": 15,
      "widgetName": "inp_name",
      "bottomRow": 15,
      "parentRowSpace": 10,
      "autoFocus": false,
      "mobileRightColumn": 20,
      "parentColumnSpace": 12.32666015625,
      "labelPosition": "Top",
      "key": "imjhgjrn0q",
      "labelTextSize": "0.875rem",
      "onTextChanged": "{{fetch_users.run();\nresetWidget(\"list_users\", true);}}",
      "rightColumn": 20,
      "widgetId": "jjpyogsvjj",
      "minWidth": 450,
      "label": "Search",
      "labelAlignment": "left",
      "mobileTopRow": 8,
      "responsiveBehavior": "fill",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "iconAlign": "left",
      "defaultText": "",
      "minDynamicHeight": 4,
      "value": "",
      "isValid": true,
      "text": "",
      "isDirty": false,
      "inputText": "",
      "meta": {
        "text": "",
        "inputText": ""
      },
      "componentHeight": 70,
      "componentWidth": 246.533203125,
      "type": "INPUT_WIDGET_V2",
      "regex": "",
      "validation": true,
      "errorMessage": "",
      "tooltip": "",
      "iconName": "",
      "labelTextColor": "",
      "__evaluation__": {
        "errors": {
          "meta.text": [],
          "meta.inputText": [],
          "meta": [],
          "isRequired": [],
          "inputType": [],
          "defaultText": [],
          "inputText": [],
          "isValid": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "accentColor": [],
          "onTextChanged": [],
          "label": [],
          "maxChars": [],
          "regex": [],
          "validation": [],
          "errorMessage": [],
          "isSpellCheck": [],
          "tooltip": [],
          "placeholderText": [],
          "isVisible": [],
          "isDisabled": [],
          "animateLoading": [],
          "autoFocus": [],
          "resetOnSubmit": [],
          "iconName": [],
          "labelTextColor": [],
          "labelTextSize": [],
          "labelStyle": [],
          "boxShadow": []
        }
      }
    },
    "Canvas1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 100,
      "widgetName": "Canvas1",
      "topRow": 0,
      "bottomRow": 690,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 689.625,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "s3jkcmr1y9",
      "rightColumn": 689.625,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "o2rxh0tnh6",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": true
      },
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 690,
      "componentWidth": 689.625,
      "type": "CANVAS_WIDGET",
      "backgroundColor": "",
      "borderColor": "",
      "__evaluation__": {
        "errors": {
          "boxShadow": [],
          "borderRadius": [],
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": []
        }
      }
    },
    "con_main": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 80,
      "widgetName": "con_main",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 0,
      "bottomRow": 69,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 39,
      "animateLoading": true,
      "parentColumnSpace": 28.734375,
      "leftColumn": 16,
      "borderWidth": 1,
      "flexVerticalAlignment": "stretch",
      "key": "6zb5acw4sg",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 47,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "52du5h87ay",
      "containerStyle": "card",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 70,
      "responsiveBehavior": "fill",
      "originalTopRow": 0,
      "borderRadius": "0px",
      "mobileLeftColumn": 15,
      "maxDynamicHeight": 9000,
      "originalBottomRow": 69,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 690,
      "componentWidth": 890.765625,
      "type": "CONTAINER_WIDGET",
      "__evaluation__": {
        "errors": {
          "boxShadow": [],
          "borderRadius": [],
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": []
        }
      }
    },
    "appsmith": {
      "user": {
        "email": "peterjaberau@gmail.com",
        "username": "peterjaberau@gmail.com",
        "name": "Peter Jaber",
        "useCase": "personal project",
        "enableTelemetry": true,
        "roles": [
          "Upgrade to business plan to access roles and groups for conditional business logic"
        ],
        "groups": [
          "Upgrade to business plan to access roles and groups for conditional business logic"
        ],
        "emptyInstance": false,
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "isAnonymous": false,
        "isEnabled": true,
        "isSuperUser": true,
        "isConfigurable": true,
        "adminSettingsVisible": false,
        "isIntercomConsentGiven": false
      },
      "URL": {
        "fullPath": "https://dev.appsmith.com/app/list-lookup/list-lookup-68aac3acde8cf11f80e4a91c/edit/widgets/52du5h87ay",
        "host": "dev.appsmith.com",
        "hostname": "dev.appsmith.com",
        "queryParams": {},
        "protocol": "https:",
        "pathname": "/app/list-lookup/list-lookup-68aac3acde8cf11f80e4a91c/edit/widgets/52du5h87ay",
        "port": "",
        "hash": ""
      },
      "store": {},
      "geolocation": {
        "canBeRequested": true,
        "currentPosition": {}
      },
      "workflows": {},
      "mode": "EDIT",
      "theme": {
        "colors": {
          "primaryColor": "#16a34a",
          "backgroundColor": "#F6F6F6"
        },
        "borderRadius": {
          "appBorderRadius": "0px"
        },
        "boxShadow": {
          "appBoxShadow": "none"
        },
        "fontFamily": {
          "appFont": "System Default"
        }
      },
      "currentPageName": "List Lookup",
      "workspaceName": "Peter's apps",
      "appName": "List Lookup",
      "currentEnvironmentName": "",
      "ENTITY_TYPE": "APPSMITH"
    },
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Image1_v6bn2e64ob_zz9hd9qh0r",
      "topRow": 0,
      "bottomRow": 13,
      "mobileRightColumn": 16,
      "animateLoading": true,
      "imageShape": "RECTANGLE",
      "leftColumn": 0,
      "defaultImage": "https://assets.appsmith.com/widgets/default.png",
      "flexVerticalAlignment": "start",
      "key": "3mp4fk5rfw",
      "image": "https://randomuser.me/api/portraits/women/2.jpg",
      "rightColumn": 11,
      "objectFit": "cover",
      "widgetId": "v6bn2e64ob_zz9hd9qh0r",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "maxZoomLevel": 1,
      "enableDownload": false,
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "enableRotation": false,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 130,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 2,
        "gender": "female",
        "latitude": 40.7128,
        "longitude": -74.006,
        "dob": "2024-09-23T00:00:00Z",
        "phone": "212-555-2222",
        "email": "nguyenvaa@gmail.vom",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Germany",
        "name": "Jane Fistcherdddx",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 1,
      "referencedWidgetId": "8g9n8rkxuh",
      "metaWidgetId": "v6bn2e64ob_zz9hd9qh0r",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "meta": {},
      "type": "IMAGE_WIDGET",
      "__evaluation__": {
        "errors": {
          "defaultImage": [],
          "objectFit": [],
          "maxZoomLevel": [],
          "animateLoading": [],
          "enableRotation": [],
          "enableDownload": [],
          "boxShadow": [],
          "isVisible": [],
          "currentItem": [],
          "borderRadius": [],
          "image": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text1_v6bn2e64ob_offuw06atv": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 4,
      "widgetName": "list_users_Text1_v6bn2e64ob_offuw06atv",
      "topRow": 0,
      "bottomRow": 4,
      "mobileRightColumn": 28,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "Jane Fistcherdddx",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_offuw06atv",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1.25rem",
      "textStyle": "HEADING",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 2,
        "gender": "female",
        "latitude": 40.7128,
        "longitude": -74.006,
        "dob": "2024-09-23T00:00:00Z",
        "phone": "212-555-2222",
        "email": "nguyenvaa@gmail.vom",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Germany",
        "name": "Jane Fistcherdddx",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 1,
      "referencedWidgetId": "cj50vd1b8l",
      "metaWidgetId": "v6bn2e64ob_offuw06atv",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "Jane Fistcherdddx",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2_v6bn2e64ob_8s5l87108q": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2_v6bn2e64ob_8s5l87108q",
      "topRow": 4,
      "bottomRow": 8,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "nguyenvaa@gmail.vom",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_8s5l87108q",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 2,
        "gender": "female",
        "latitude": 40.7128,
        "longitude": -74.006,
        "dob": "2024-09-23T00:00:00Z",
        "phone": "212-555-2222",
        "email": "nguyenvaa@gmail.vom",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Germany",
        "name": "Jane Fistcherdddx",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 1,
      "referencedWidgetId": "gtsadp0loc",
      "metaWidgetId": "v6bn2e64ob_8s5l87108q",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "nguyenvaa@gmail.vom",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp",
      "topRow": 8,
      "bottomRow": 12,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "212-555-2222",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_mrhgus4xbp",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 2,
        "gender": "female",
        "latitude": 40.7128,
        "longitude": -74.006,
        "dob": "2024-09-23T00:00:00Z",
        "phone": "212-555-2222",
        "email": "nguyenvaa@gmail.vom",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Germany",
        "name": "Jane Fistcherdddx",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 1,
      "referencedWidgetId": "4idvv5ik4y",
      "metaWidgetId": "v6bn2e64ob_mrhgus4xbp",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "212-555-2222",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf",
      "topRow": 4,
      "bottomRow": 8,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 33,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "23rd Sep 2024",
      "key": "b6m5perck8",
      "rightColumn": 50,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_57xnwr2uvf",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 2,
        "gender": "female",
        "latitude": 40.7128,
        "longitude": -74.006,
        "dob": "2024-09-23T00:00:00Z",
        "phone": "212-555-2222",
        "email": "nguyenvaa@gmail.vom",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Germany",
        "name": "Jane Fistcherdddx",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 1,
      "referencedWidgetId": "tw8lhe3j41",
      "metaWidgetId": "v6bn2e64ob_57xnwr2uvf",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "23rd Sep 2024",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy",
      "topRow": 8,
      "bottomRow": 12,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 33,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "Germany",
      "key": "b6m5perck8",
      "rightColumn": 50,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_htgd6bhdhy",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 2,
        "gender": "female",
        "latitude": 40.7128,
        "longitude": -74.006,
        "dob": "2024-09-23T00:00:00Z",
        "phone": "212-555-2222",
        "email": "nguyenvaa@gmail.vom",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "country": "Germany",
        "name": "Jane Fistcherdddx",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 1,
      "referencedWidgetId": "5rnvkyl9z9",
      "metaWidgetId": "v6bn2e64ob_htgd6bhdhy",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "Germany",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "widgetName": "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e",
      "topRow": 0,
      "bottomRow": 150,
      "parentRowSpace": 1,
      "canExtend": false,
      "useAutoLayout": false,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "cu2myxmfcz",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_njwpvr2j4e",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": true
      },
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "isMobile": false,
      "componentHeight": 150,
      "componentWidth": null,
      "labelComponentWidth": 0,
      "currentIndex": 1,
      "referencedWidgetId": "om4u7kwd35",
      "metaWidgetId": "v6bn2e64ob_njwpvr2j4e",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "meta": {},
      "type": "CANVAS_WIDGET",
      "__evaluation__": {
        "errors": {
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": [],
          "boxShadow": [],
          "borderRadius": []
        }
      }
    },
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 15,
      "isDeletable": false,
      "animateLoading": true,
      "leftColumn": 0,
      "flexVerticalAlignment": "stretch",
      "dynamicHeight": "FIXED",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "isListItemContainer": true,
      "isLoading": false,
      "disabledWidgetFeatures": [
        "dynamicHeight"
      ],
      "borderRadius": "0px",
      "needsErrorInfo": false,
      "mobileBottomRow": 12,
      "widgetName": "list_users_Container1_v6bn2e64ob_0cr8l1zod7",
      "disallowCopy": true,
      "bottomRow": 30,
      "dragDisabled": true,
      "mobileRightColumn": 64,
      "borderWidth": 1,
      "positioning": "fixed",
      "key": "x69fvl9n3f",
      "backgroundColor": "white",
      "rightColumn": 64,
      "widgetId": "v6bn2e64ob_0cr8l1zod7",
      "containerStyle": "card",
      "minWidth": 450,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 150,
      "componentWidth": null,
      "labelComponentWidth": null,
      "data": {
        "Image1": {
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "isVisible": true
        },
        "Text1": {
          "isVisible": true,
          "text": "Jane Fistcherdddx"
        },
        "Text2": {
          "isVisible": true,
          "text": "nguyenvaa@gmail.vom"
        },
        "Text2Copy1": {
          "isVisible": true,
          "text": "212-555-2222"
        },
        "Text2Copy2": {
          "isVisible": true,
          "text": "23rd Sep 2024"
        },
        "Text2CopyCopy": {
          "isVisible": true,
          "text": "Germany"
        }
      },
      "currentIndex": 1,
      "referencedWidgetId": "op5ztlvzm1",
      "metaWidgetId": "v6bn2e64ob_0cr8l1zod7",
      "isTemplate": false,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "meta": {},
      "type": "CONTAINER_WIDGET",
      "__evaluation__": {
        "errors": {
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": [],
          "boxShadow": [],
          "borderRadius": [],
          "data": [],
          "data.Image1": [],
          "data.Image1.image": [],
          "data.Image1.isVisible": [],
          "data.Text1": [],
          "data.Text1.isVisible": [],
          "data.Text1.text": [],
          "data.Text2": [],
          "data.Text2.isVisible": [],
          "data.Text2.text": [],
          "data.Text2Copy1": [],
          "data.Text2Copy1.isVisible": [],
          "data.Text2Copy1.text": [],
          "data.Text2Copy2": [],
          "data.Text2Copy2.isVisible": [],
          "data.Text2Copy2.text": [],
          "data.Text2CopyCopy": [],
          "data.Text2CopyCopy.isVisible": [],
          "data.Text2CopyCopy.text": []
        }
      }
    },
    "list_users_Image1_v6bn2e64ob_zvex73g771": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Image1_v6bn2e64ob_zvex73g771",
      "topRow": 0,
      "bottomRow": 13,
      "mobileRightColumn": 16,
      "animateLoading": true,
      "imageShape": "RECTANGLE",
      "leftColumn": 0,
      "defaultImage": "https://assets.appsmith.com/widgets/default.png",
      "flexVerticalAlignment": "start",
      "key": "3mp4fk5rfw",
      "image": "https://randomuser.me/api/portraits/men/3.jpg",
      "rightColumn": 11,
      "objectFit": "cover",
      "widgetId": "v6bn2e64ob_zvex73g771",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "maxZoomLevel": 1,
      "enableDownload": false,
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "enableRotation": false,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 130,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 3,
        "gender": "male",
        "latitude": 51.5074,
        "longitude": 0.1278,
        "dob": "1985-09-28T00:00:00Z",
        "phone": "(927) 606-7690",
        "email": "alexander@example.com",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "country": "Spain",
        "name": "Tesstuit Jin",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 2,
      "referencedWidgetId": "8g9n8rkxuh",
      "metaWidgetId": "v6bn2e64ob_zvex73g771",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "meta": {},
      "type": "IMAGE_WIDGET",
      "__evaluation__": {
        "errors": {
          "defaultImage": [],
          "objectFit": [],
          "maxZoomLevel": [],
          "animateLoading": [],
          "enableRotation": [],
          "enableDownload": [],
          "boxShadow": [],
          "isVisible": [],
          "currentItem": [],
          "borderRadius": [],
          "image": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text1_v6bn2e64ob_ofyh1054jr": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 4,
      "widgetName": "list_users_Text1_v6bn2e64ob_ofyh1054jr",
      "topRow": 0,
      "bottomRow": 4,
      "mobileRightColumn": 28,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "Tesstuit Jin",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_ofyh1054jr",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1.25rem",
      "textStyle": "HEADING",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 3,
        "gender": "male",
        "latitude": 51.5074,
        "longitude": 0.1278,
        "dob": "1985-09-28T00:00:00Z",
        "phone": "(927) 606-7690",
        "email": "alexander@example.com",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "country": "Spain",
        "name": "Tesstuit Jin",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 2,
      "referencedWidgetId": "cj50vd1b8l",
      "metaWidgetId": "v6bn2e64ob_ofyh1054jr",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "Tesstuit Jin",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2_v6bn2e64ob_e91gfyhvzq",
      "topRow": 4,
      "bottomRow": 8,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "alexander@example.com",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_e91gfyhvzq",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 3,
        "gender": "male",
        "latitude": 51.5074,
        "longitude": 0.1278,
        "dob": "1985-09-28T00:00:00Z",
        "phone": "(927) 606-7690",
        "email": "alexander@example.com",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "country": "Spain",
        "name": "Tesstuit Jin",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 2,
      "referencedWidgetId": "gtsadp0loc",
      "metaWidgetId": "v6bn2e64ob_e91gfyhvzq",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "alexander@example.com",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms",
      "topRow": 8,
      "bottomRow": 12,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 12,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "(927) 606-7690",
      "key": "b6m5perck8",
      "rightColumn": 33,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_wcte9rt1ms",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 3,
        "gender": "male",
        "latitude": 51.5074,
        "longitude": 0.1278,
        "dob": "1985-09-28T00:00:00Z",
        "phone": "(927) 606-7690",
        "email": "alexander@example.com",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "country": "Spain",
        "name": "Tesstuit Jin",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 2,
      "referencedWidgetId": "4idvv5ik4y",
      "metaWidgetId": "v6bn2e64ob_wcte9rt1ms",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "(927) 606-7690",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd",
      "topRow": 4,
      "bottomRow": 8,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 33,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "28th Sep 1985",
      "key": "b6m5perck8",
      "rightColumn": 50,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_xl1ki93nsd",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 3,
        "gender": "male",
        "latitude": 51.5074,
        "longitude": 0.1278,
        "dob": "1985-09-28T00:00:00Z",
        "phone": "(927) 606-7690",
        "email": "alexander@example.com",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "country": "Spain",
        "name": "Tesstuit Jin",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 2,
      "referencedWidgetId": "tw8lhe3j41",
      "metaWidgetId": "v6bn2e64ob_xl1ki93nsd",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "28th Sep 1985",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 8,
      "widgetName": "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1",
      "topRow": 8,
      "bottomRow": 12,
      "mobileRightColumn": 24,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "leftColumn": 33,
      "shouldTruncate": false,
      "truncateButtonColor": "#16a34a",
      "text": "Spain",
      "key": "b6m5perck8",
      "rightColumn": 50,
      "textAlign": "LEFT",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_342hy39be1",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 4,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 16,
      "maxDynamicHeight": 9000,
      "fontSize": "1rem",
      "textStyle": "BODY",
      "minDynamicHeight": 4,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 40,
      "componentWidth": null,
      "labelComponentWidth": null,
      "currentItem": {
        "id": 3,
        "gender": "male",
        "latitude": 51.5074,
        "longitude": 0.1278,
        "dob": "1985-09-28T00:00:00Z",
        "phone": "(927) 606-7690",
        "email": "alexander@example.com",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "country": "Spain",
        "name": "Tesstuit Jin",
        "created_at": "2019-07-01T05:30:00Z",
        "updated_at": "2019-07-01T05:30:00Z"
      },
      "currentIndex": 2,
      "referencedWidgetId": "5rnvkyl9z9",
      "metaWidgetId": "v6bn2e64ob_342hy39be1",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "value": "Spain",
      "meta": {},
      "type": "TEXT_WIDGET",
      "__evaluation__": {
        "errors": {
          "animateLoading": [],
          "disableLink": [],
          "fontSize": [],
          "textColor": [],
          "backgroundColor": [],
          "borderColor": [],
          "textAlign": [],
          "fontStyle": [],
          "borderWidth": [],
          "isVisible": [],
          "currentItem": [],
          "text": [],
          "value": [],
          "borderRadius": [],
          "fontFamily": [],
          "truncateButtonColor": [],
          "currentItem.id": [],
          "currentItem.gender": [],
          "currentItem.latitude": [],
          "currentItem.longitude": [],
          "currentItem.dob": [],
          "currentItem.phone": [],
          "currentItem.email": [],
          "currentItem.image": [],
          "currentItem.country": [],
          "currentItem.name": [],
          "currentItem.created_at": [],
          "currentItem.updated_at": []
        }
      }
    },
    "list_users_Canvas3_v6bn2e64ob_pl07riz25p": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "widgetName": "list_users_Canvas3_v6bn2e64ob_pl07riz25p",
      "topRow": 0,
      "bottomRow": 150,
      "parentRowSpace": 1,
      "canExtend": false,
      "useAutoLayout": false,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "cu2myxmfcz",
      "dynamicHeight": "FIXED",
      "widgetId": "v6bn2e64ob_pl07riz25p",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": true
      },
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0px",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "isMobile": false,
      "componentHeight": 150,
      "componentWidth": null,
      "labelComponentWidth": 0,
      "currentIndex": 2,
      "referencedWidgetId": "om4u7kwd35",
      "metaWidgetId": "v6bn2e64ob_pl07riz25p",
      "isTemplate": false,
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dragDisabled": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "meta": {},
      "type": "CANVAS_WIDGET",
      "__evaluation__": {
        "errors": {
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": [],
          "boxShadow": [],
          "borderRadius": []
        }
      }
    },
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "none",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 30,
      "isDeletable": false,
      "animateLoading": true,
      "leftColumn": 0,
      "flexVerticalAlignment": "stretch",
      "dynamicHeight": "FIXED",
      "onCanvasUI": {
        "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
        "focusBGCSSVar": "--on-canvas-ui-widget-focus",
        "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
        "focusColorCSSVar": "--on-canvas-ui-widget-selection",
        "disableParentSelection": false
      },
      "isVisible": true,
      "isListItemContainer": true,
      "isLoading": false,
      "disabledWidgetFeatures": [
        "dynamicHeight"
      ],
      "borderRadius": "0px",
      "needsErrorInfo": false,
      "mobileBottomRow": 12,
      "widgetName": "list_users_Container1_v6bn2e64ob_uvrw7ttooc",
      "disallowCopy": true,
      "bottomRow": 45,
      "dragDisabled": true,
      "mobileRightColumn": 64,
      "borderWidth": 1,
      "positioning": "fixed",
      "key": "x69fvl9n3f",
      "backgroundColor": "white",
      "rightColumn": 64,
      "widgetId": "v6bn2e64ob_uvrw7ttooc",
      "containerStyle": "card",
      "minWidth": 450,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "isMobile": false,
      "parentRowSpace": 10,
      "componentHeight": 150,
      "componentWidth": null,
      "labelComponentWidth": null,
      "data": {
        "Image1": {
          "image": "https://randomuser.me/api/portraits/men/3.jpg",
          "isVisible": true
        },
        "Text1": {
          "isVisible": true,
          "text": "Tesstuit Jin"
        },
        "Text2": {
          "isVisible": true,
          "text": "alexander@example.com"
        },
        "Text2Copy1": {
          "isVisible": true,
          "text": "(927) 606-7690"
        },
        "Text2Copy2": {
          "isVisible": true,
          "text": "28th Sep 1985"
        },
        "Text2CopyCopy": {
          "isVisible": true,
          "text": "Spain"
        }
      },
      "currentIndex": 2,
      "referencedWidgetId": "op5ztlvzm1",
      "metaWidgetId": "v6bn2e64ob_uvrw7ttooc",
      "isTemplate": false,
      "disabledResizeHandles": [
        "left",
        "top",
        "right",
        "bottomRight",
        "topLeft",
        "topRight",
        "bottomLeft"
      ],
      "resizeDisabled": true,
      "disablePropertyPane": true,
      "dropDisabled": true,
      "ignoreCollision": true,
      "suppressAutoComplete": true,
      "suppressDebuggerError": true,
      "isMetaWidget": true,
      "creatorId": "v6bn2e64ob",
      "meta": {},
      "type": "CONTAINER_WIDGET",
      "__evaluation__": {
        "errors": {
          "isVisible": [],
          "animateLoading": [],
          "backgroundColor": [],
          "borderColor": [],
          "borderWidth": [],
          "boxShadow": [],
          "borderRadius": [],
          "data": [],
          "data.Image1": [],
          "data.Image1.image": [],
          "data.Image1.isVisible": [],
          "data.Text1": [],
          "data.Text1.isVisible": [],
          "data.Text1.text": [],
          "data.Text2": [],
          "data.Text2.isVisible": [],
          "data.Text2.text": [],
          "data.Text2Copy1": [],
          "data.Text2Copy1.isVisible": [],
          "data.Text2Copy1.text": [],
          "data.Text2Copy2": [],
          "data.Text2Copy2.isVisible": [],
          "data.Text2Copy2.text": [],
          "data.Text2CopyCopy": [],
          "data.Text2CopyCopy.isVisible": [],
          "data.Text2CopyCopy.text": []
        }
      }
    }
  },
  "dependencies": {
    "inverseDependencyMap": {
      "fetch_users.config.pluginSpecifiedTemplates[0].value": [
        "fetch_users.config.body",
        "fetch_users.config.pluginSpecifiedTemplates[0]"
      ],
      "inp_name.text": [
        "fetch_users.config.body",
        "inp_name.value",
        "inp_name"
      ],
      "dat_bornAfter.selectedDate": [
        "fetch_users.config.body",
        "dat_bornAfter.isValid",
        "dat_bornAfter"
      ],
      "sel_country.selectedOptionValue": [
        "fetch_users.config.body",
        "sel_country.isValid",
        "sel_country.selectedOptionLabel",
        "sel_country"
      ],
      "list_users.pageNo": [
        "fetch_users.config.body",
        "list_users"
      ],
      "list_users.pageSize": [
        "fetch_users.config.body",
        "list_users"
      ],
      "fetch_users.config.body": [
        "fetch_users.run",
        "fetch_users.config"
      ],
      "JSObject1.myFun1": [
        "JSObject1.body",
        "JSObject1"
      ],
      "JSObject1.myFun2": [
        "JSObject1.body",
        "JSObject1"
      ],
      "JSObject2.myFun1": [
        "JSObject2.body",
        "JSObject2"
      ],
      "JSObject2.myFun2": [
        "JSObject2.body",
        "JSObject2"
      ],
      "appsmith.theme.colors.primaryColor": [
        "txt_title.truncateButtonColor",
        "sel_country.accentColor",
        "dat_bornAfter.accentColor",
        "icn_resetFilters.buttonColor",
        "Text1.truncateButtonColor",
        "Text2.truncateButtonColor",
        "Text2Copy1.truncateButtonColor",
        "Text2Copy2.truncateButtonColor",
        "Text2CopyCopy.truncateButtonColor",
        "list_users.accentColor",
        "inp_name.accentColor",
        "appsmith.theme.colors",
        "list_users_Text1_v6bn2e64ob_offuw06atv.truncateButtonColor",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.truncateButtonColor",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.truncateButtonColor",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.truncateButtonColor",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.truncateButtonColor",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.truncateButtonColor",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.truncateButtonColor",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.truncateButtonColor",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.truncateButtonColor",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.truncateButtonColor"
      ],
      "appsmith.theme.fontFamily.appFont": [
        "txt_title.fontFamily",
        "Text1.fontFamily",
        "Text2.fontFamily",
        "Text2Copy1.fontFamily",
        "Text2Copy2.fontFamily",
        "Text2CopyCopy.fontFamily",
        "appsmith.theme.fontFamily",
        "list_users_Text1_v6bn2e64ob_offuw06atv.fontFamily",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.fontFamily",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.fontFamily",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.fontFamily",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.fontFamily",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.fontFamily",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.fontFamily",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.fontFamily",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.fontFamily",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.fontFamily"
      ],
      "appsmith.theme.borderRadius.appBorderRadius": [
        "txt_title.borderRadius",
        "sel_country.borderRadius",
        "dat_bornAfter.borderRadius",
        "icn_resetFilters.borderRadius",
        "Image1.borderRadius",
        "Text1.borderRadius",
        "Text2.borderRadius",
        "Text2Copy1.borderRadius",
        "Text2Copy2.borderRadius",
        "Text2CopyCopy.borderRadius",
        "Canvas3.borderRadius",
        "Container1.borderRadius",
        "Canvas2.borderRadius",
        "list_users.borderRadius",
        "inp_name.borderRadius",
        "Canvas1.borderRadius",
        "con_main.borderRadius",
        "appsmith.theme.borderRadius",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.borderRadius",
        "list_users_Text1_v6bn2e64ob_offuw06atv.borderRadius",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.borderRadius",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.borderRadius",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.borderRadius",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.borderRadius",
        "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.borderRadius",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.borderRadius",
        "list_users_Image1_v6bn2e64ob_zvex73g771.borderRadius",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.borderRadius",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.borderRadius",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.borderRadius",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.borderRadius",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.borderRadius",
        "list_users_Canvas3_v6bn2e64ob_pl07riz25p.borderRadius",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.borderRadius"
      ],
      "txt_title.text": [
        "txt_title.value",
        "txt_title"
      ],
      "sel_country.meta.value": [
        "sel_country.value",
        "sel_country.meta"
      ],
      "sel_country.defaultOptionValue": [
        "sel_country.value",
        "sel_country.label",
        "sel_country"
      ],
      "sel_country.meta.label": [
        "sel_country.label",
        "sel_country.meta"
      ],
      "sel_country.meta.filterText": [
        "sel_country.filterText",
        "sel_country.meta"
      ],
      "sel_country.sourceData": [
        "sel_country.optionLabel",
        "sel_country.optionValue",
        "sel_country.options",
        "sel_country"
      ],
      "sel_country.optionLabel": [
        "sel_country.options",
        "sel_country"
      ],
      "sel_country.optionValue": [
        "sel_country.options",
        "sel_country"
      ],
      "sel_country.isRequired": [
        "sel_country.isValid",
        "sel_country"
      ],
      "sel_country.serverSideFiltering": [
        "sel_country.selectedOptionValue",
        "sel_country.selectedOptionLabel",
        "sel_country"
      ],
      "sel_country.options": [
        "sel_country.selectedOptionValue",
        "sel_country.selectedOptionLabel",
        "sel_country"
      ],
      "sel_country.value": [
        "sel_country.selectedOptionValue",
        "sel_country"
      ],
      "sel_country.isDirty": [
        "sel_country.selectedOptionValue",
        "sel_country"
      ],
      "sel_country.label": [
        "sel_country.selectedOptionLabel",
        "sel_country"
      ],
      "dat_bornAfter.meta.value": [
        "dat_bornAfter.value",
        "dat_bornAfter.meta"
      ],
      "dat_bornAfter.defaultDate": [
        "dat_bornAfter.value",
        "dat_bornAfter"
      ],
      "dat_bornAfter.isRequired": [
        "dat_bornAfter.isValid",
        "dat_bornAfter"
      ],
      "dat_bornAfter.minDate": [
        "dat_bornAfter.isValid",
        "dat_bornAfter"
      ],
      "dat_bornAfter.maxDate": [
        "dat_bornAfter.isValid",
        "dat_bornAfter"
      ],
      "dat_bornAfter.timePrecision": [
        "dat_bornAfter.isValid",
        "dat_bornAfter"
      ],
      "dat_bornAfter.value": [
        "dat_bornAfter.selectedDate",
        "dat_bornAfter.formattedDate",
        "dat_bornAfter"
      ],
      "dat_bornAfter.dateFormat": [
        "dat_bornAfter.formattedDate",
        "dat_bornAfter"
      ],
      "Text1.text": [
        "Text1.value",
        "Text1",
        "Container1.data"
      ],
      "Text2.text": [
        "Text2.value",
        "Text2",
        "Container1.data"
      ],
      "Text2Copy1.text": [
        "Text2Copy1.value",
        "Text2Copy1",
        "Container1.data"
      ],
      "Text2Copy2.text": [
        "Text2Copy2.value",
        "Text2Copy2",
        "Container1.data"
      ],
      "Text2CopyCopy.text": [
        "Text2CopyCopy.value",
        "Text2CopyCopy",
        "Container1.data"
      ],
      "appsmith.theme.boxShadow.appBoxShadow": [
        "Canvas3.boxShadow",
        "Container1.boxShadow",
        "Canvas2.boxShadow",
        "list_users.boxShadow",
        "Canvas1.boxShadow",
        "con_main.boxShadow",
        "appsmith.theme.boxShadow",
        "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.boxShadow",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.boxShadow",
        "list_users_Canvas3_v6bn2e64ob_pl07riz25p.boxShadow",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.boxShadow"
      ],
      "list_users.meta.selectedItemKey": [
        "list_users.selectedItemKey",
        "list_users.meta"
      ],
      "list_users.defaultSelectedItem": [
        "list_users.selectedItemKey",
        "list_users"
      ],
      "list_users.listData": [
        "list_users.primaryKeys",
        "list_users.childAutoComplete",
        "list_users",
        "Image1.currentItem",
        "Text1.currentItem",
        "Text2.currentItem",
        "Text2Copy1.currentItem",
        "Text2Copy2.currentItem",
        "Text2CopyCopy.currentItem",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem",
        "list_users_Text1_v6bn2e64ob_offuw06atv.currentItem",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem",
        "list_users_Image1_v6bn2e64ob_zvex73g771.currentItem",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem"
      ],
      "fetch_users.data": [
        "list_users.listData"
      ],
      "list_users.currentItemsView": [
        "list_users.childAutoComplete",
        "list_users"
      ],
      "inp_name.meta.inputText": [
        "inp_name.inputText",
        "inp_name.meta"
      ],
      "inp_name.defaultText": [
        "inp_name.inputText",
        "inp_name.text",
        "inp_name"
      ],
      "inp_name.meta.text": [
        "inp_name.text",
        "inp_name.meta"
      ],
      "inp_name.inputType": [
        "inp_name.isValid",
        "inp_name"
      ],
      "inp_name.inputText": [
        "inp_name.isValid",
        "inp_name"
      ],
      "inp_name.isRequired": [
        "inp_name.isValid",
        "inp_name"
      ],
      "fetch_users.config": [
        "fetch_users"
      ],
      "fetch_users.config.pluginSpecifiedTemplates[0]": [
        "fetch_users.config.pluginSpecifiedTemplates"
      ],
      "fetch_users.config.pluginSpecifiedTemplates": [
        "fetch_users.config"
      ],
      "fetch_users.run": [
        "fetch_users"
      ],
      "JSObject1.body": [
        "JSObject1"
      ],
      "JSObject1.myVar1": [
        "JSObject1"
      ],
      "JSObject1.myVar2": [
        "JSObject1"
      ],
      "JSObject2.body": [
        "JSObject2"
      ],
      "JSObject2.myVar1": [
        "JSObject2"
      ],
      "JSObject2.myVar2": [
        "JSObject2"
      ],
      "txt_title.truncateButtonColor": [
        "txt_title"
      ],
      "appsmith.theme.colors": [
        "appsmith.theme"
      ],
      "appsmith.theme": [
        "appsmith"
      ],
      "txt_title.fontFamily": [
        "txt_title"
      ],
      "appsmith.theme.fontFamily": [
        "appsmith.theme"
      ],
      "txt_title.borderRadius": [
        "txt_title"
      ],
      "appsmith.theme.borderRadius": [
        "appsmith.theme"
      ],
      "txt_title.value": [
        "txt_title"
      ],
      "sel_country.meta": [
        "sel_country"
      ],
      "sel_country.filterText": [
        "sel_country"
      ],
      "sel_country.onOptionChange": [
        "sel_country"
      ],
      "sel_country.onDropdownClose": [
        "sel_country"
      ],
      "sel_country.accentColor": [
        "sel_country"
      ],
      "sel_country.borderRadius": [
        "sel_country"
      ],
      "sel_country.isValid": [
        "sel_country"
      ],
      "sel_country.selectedOptionLabel": [
        "sel_country"
      ],
      "dat_bornAfter.meta": [
        "dat_bornAfter"
      ],
      "dat_bornAfter.onDateSelected": [
        "dat_bornAfter"
      ],
      "dat_bornAfter.accentColor": [
        "dat_bornAfter"
      ],
      "dat_bornAfter.borderRadius": [
        "dat_bornAfter"
      ],
      "dat_bornAfter.isValid": [
        "dat_bornAfter"
      ],
      "dat_bornAfter.formattedDate": [
        "dat_bornAfter"
      ],
      "icn_resetFilters.onClick": [
        "icn_resetFilters"
      ],
      "icn_resetFilters.buttonColor": [
        "icn_resetFilters"
      ],
      "icn_resetFilters.borderRadius": [
        "icn_resetFilters"
      ],
      "Image1.image": [
        "Image1",
        "Container1.data"
      ],
      "Image1.borderRadius": [
        "Image1"
      ],
      "Text1.truncateButtonColor": [
        "Text1"
      ],
      "Text1.fontFamily": [
        "Text1"
      ],
      "Text1.borderRadius": [
        "Text1"
      ],
      "Text1.value": [
        "Text1"
      ],
      "Text2.truncateButtonColor": [
        "Text2"
      ],
      "Text2.fontFamily": [
        "Text2"
      ],
      "Text2.borderRadius": [
        "Text2"
      ],
      "Text2.value": [
        "Text2"
      ],
      "Text2Copy1.truncateButtonColor": [
        "Text2Copy1"
      ],
      "Text2Copy1.fontFamily": [
        "Text2Copy1"
      ],
      "Text2Copy1.borderRadius": [
        "Text2Copy1"
      ],
      "Text2Copy1.value": [
        "Text2Copy1"
      ],
      "Text2Copy2.truncateButtonColor": [
        "Text2Copy2"
      ],
      "Text2Copy2.fontFamily": [
        "Text2Copy2"
      ],
      "Text2Copy2.borderRadius": [
        "Text2Copy2"
      ],
      "Text2Copy2.value": [
        "Text2Copy2"
      ],
      "Text2CopyCopy.truncateButtonColor": [
        "Text2CopyCopy"
      ],
      "Text2CopyCopy.fontFamily": [
        "Text2CopyCopy"
      ],
      "Text2CopyCopy.borderRadius": [
        "Text2CopyCopy"
      ],
      "Text2CopyCopy.value": [
        "Text2CopyCopy"
      ],
      "Canvas3.borderRadius": [
        "Canvas3"
      ],
      "Canvas3.boxShadow": [
        "Canvas3"
      ],
      "appsmith.theme.boxShadow": [
        "appsmith.theme"
      ],
      "Container1.borderRadius": [
        "Container1"
      ],
      "Container1.boxShadow": [
        "Container1"
      ],
      "Canvas2.borderRadius": [
        "Canvas2"
      ],
      "Canvas2.boxShadow": [
        "Canvas2"
      ],
      "list_users.selectedItemKey": [
        "list_users"
      ],
      "list_users.meta": [
        "list_users"
      ],
      "list_users.onPageChange": [
        "list_users"
      ],
      "list_users.selectedItemView": [
        "list_users"
      ],
      "list_users.triggeredItemView": [
        "list_users"
      ],
      "list_users.primaryKeys": [
        "list_users"
      ],
      "list_users.accentColor": [
        "list_users"
      ],
      "list_users.borderRadius": [
        "list_users"
      ],
      "list_users.boxShadow": [
        "list_users"
      ],
      "list_users.childAutoComplete": [
        "list_users"
      ],
      "inp_name.meta": [
        "inp_name"
      ],
      "inp_name.onTextChanged": [
        "inp_name"
      ],
      "inp_name.accentColor": [
        "inp_name"
      ],
      "inp_name.borderRadius": [
        "inp_name"
      ],
      "inp_name.value": [
        "inp_name"
      ],
      "inp_name.isValid": [
        "inp_name"
      ],
      "Canvas1.borderRadius": [
        "Canvas1"
      ],
      "Canvas1.boxShadow": [
        "Canvas1"
      ],
      "con_main.borderRadius": [
        "con_main"
      ],
      "con_main.boxShadow": [
        "con_main"
      ],
      "Image1.currentItem": [
        "Image1.image",
        "Image1.borderRadius",
        "Image1"
      ],
      "Text1.currentItem": [
        "Text1.text",
        "Text1.truncateButtonColor",
        "Text1.fontFamily",
        "Text1.borderRadius",
        "Text1"
      ],
      "Text2.currentItem": [
        "Text2.text",
        "Text2.truncateButtonColor",
        "Text2.fontFamily",
        "Text2.borderRadius",
        "Text2"
      ],
      "Text2Copy1.currentItem": [
        "Text2Copy1.text",
        "Text2Copy1.truncateButtonColor",
        "Text2Copy1.fontFamily",
        "Text2Copy1.borderRadius",
        "Text2Copy1"
      ],
      "Text2Copy2.currentItem": [
        "Text2Copy2.text",
        "Text2Copy2.truncateButtonColor",
        "Text2Copy2.fontFamily",
        "Text2Copy2.borderRadius",
        "Text2Copy2"
      ],
      "Text2CopyCopy.currentItem": [
        "Text2CopyCopy.text",
        "Text2CopyCopy.truncateButtonColor",
        "Text2CopyCopy.fontFamily",
        "Text2CopyCopy.borderRadius",
        "Text2CopyCopy"
      ],
      "Image1.isVisible": [
        "Container1.data",
        "Image1"
      ],
      "Text1.isVisible": [
        "Container1.data",
        "Text1"
      ],
      "Text2.isVisible": [
        "Container1.data",
        "Text2"
      ],
      "Text2Copy1.isVisible": [
        "Container1.data",
        "Text2Copy1"
      ],
      "Text2Copy2.isVisible": [
        "Container1.data",
        "Text2Copy2"
      ],
      "Text2CopyCopy.isVisible": [
        "Container1.data",
        "Text2CopyCopy"
      ],
      "Container1.data": [
        "list_users.currentItemsView"
      ],
      "Image1.currentIndex": [
        "Image1.currentItem",
        "Image1"
      ],
      "Text1.currentIndex": [
        "Text1.currentItem",
        "Text1"
      ],
      "Text2.currentIndex": [
        "Text2.currentItem",
        "Text2"
      ],
      "Text2Copy1.currentIndex": [
        "Text2Copy1.currentItem",
        "Text2Copy1"
      ],
      "Text2Copy2.currentIndex": [
        "Text2Copy2.currentItem",
        "Text2Copy2"
      ],
      "Text2CopyCopy.currentIndex": [
        "Text2CopyCopy.currentItem",
        "Text2CopyCopy"
      ],
      "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem": [
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.borderRadius",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r"
      ],
      "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentIndex": [
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.currentItem": [
        "list_users_Text1_v6bn2e64ob_offuw06atv.text",
        "list_users_Text1_v6bn2e64ob_offuw06atv.truncateButtonColor",
        "list_users_Text1_v6bn2e64ob_offuw06atv.fontFamily",
        "list_users_Text1_v6bn2e64ob_offuw06atv.borderRadius",
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.currentIndex": [
        "list_users_Text1_v6bn2e64ob_offuw06atv.currentItem",
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.text": [
        "list_users_Text1_v6bn2e64ob_offuw06atv.value",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q.text",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.truncateButtonColor",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.fontFamily",
        "list_users_Text2_v6bn2e64ob_8s5l87108q.borderRadius",
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.currentIndex": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem",
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.text": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q.value",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.truncateButtonColor",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.fontFamily",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.borderRadius",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentIndex": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.value",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.truncateButtonColor",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.fontFamily",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.borderRadius",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentIndex": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.value",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.truncateButtonColor",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.fontFamily",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.borderRadius",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentIndex": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.value",
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data": [
        "list_users.currentItemsView"
      ],
      "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r"
      ],
      "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.isVisible": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data",
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Image1_v6bn2e64ob_zvex73g771.currentItem": [
        "list_users_Image1_v6bn2e64ob_zvex73g771.image",
        "list_users_Image1_v6bn2e64ob_zvex73g771.borderRadius",
        "list_users_Image1_v6bn2e64ob_zvex73g771"
      ],
      "list_users_Image1_v6bn2e64ob_zvex73g771.currentIndex": [
        "list_users_Image1_v6bn2e64ob_zvex73g771.currentItem",
        "list_users_Image1_v6bn2e64ob_zvex73g771"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.text",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.truncateButtonColor",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.fontFamily",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.borderRadius",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.currentIndex": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.text": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr.value",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.text",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.truncateButtonColor",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.fontFamily",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.borderRadius",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentIndex": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.text": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq.value",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.truncateButtonColor",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.fontFamily",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.borderRadius",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentIndex": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.value",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.truncateButtonColor",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.fontFamily",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.borderRadius",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentIndex": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.value",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.truncateButtonColor",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.fontFamily",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.borderRadius",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentIndex": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.value",
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data": [
        "list_users.currentItemsView"
      ],
      "list_users_Image1_v6bn2e64ob_zvex73g771.image": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Image1_v6bn2e64ob_zvex73g771"
      ],
      "list_users_Image1_v6bn2e64ob_zvex73g771.isVisible": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Image1_v6bn2e64ob_zvex73g771"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data",
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users.meta.currentItemsView": [
        "list_users.meta"
      ],
      "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.borderRadius": [
        "list_users_Image1_v6bn2e64ob_zz9hd9qh0r"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.truncateButtonColor": [
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.fontFamily": [
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.borderRadius": [
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text1_v6bn2e64ob_offuw06atv.value": [
        "list_users_Text1_v6bn2e64ob_offuw06atv"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.truncateButtonColor": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.fontFamily": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.borderRadius": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2_v6bn2e64ob_8s5l87108q.value": [
        "list_users_Text2_v6bn2e64ob_8s5l87108q"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.truncateButtonColor": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.fontFamily": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.borderRadius": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.value": [
        "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.truncateButtonColor": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.fontFamily": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.borderRadius": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.value": [
        "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.truncateButtonColor": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.fontFamily": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.borderRadius": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.value": [
        "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy"
      ],
      "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.borderRadius": [
        "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e"
      ],
      "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.boxShadow": [
        "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e"
      ],
      "list_users_Container1_v6bn2e64ob_0cr8l1zod7.borderRadius": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7"
      ],
      "list_users_Container1_v6bn2e64ob_0cr8l1zod7.boxShadow": [
        "list_users_Container1_v6bn2e64ob_0cr8l1zod7"
      ],
      "list_users_Image1_v6bn2e64ob_zvex73g771.borderRadius": [
        "list_users_Image1_v6bn2e64ob_zvex73g771"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.truncateButtonColor": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.fontFamily": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.borderRadius": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text1_v6bn2e64ob_ofyh1054jr.value": [
        "list_users_Text1_v6bn2e64ob_ofyh1054jr"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.truncateButtonColor": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.fontFamily": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.borderRadius": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2_v6bn2e64ob_e91gfyhvzq.value": [
        "list_users_Text2_v6bn2e64ob_e91gfyhvzq"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.truncateButtonColor": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.fontFamily": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.borderRadius": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.value": [
        "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.truncateButtonColor": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.fontFamily": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.borderRadius": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.value": [
        "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.truncateButtonColor": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.fontFamily": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.borderRadius": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.value": [
        "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1"
      ],
      "list_users_Canvas3_v6bn2e64ob_pl07riz25p.borderRadius": [
        "list_users_Canvas3_v6bn2e64ob_pl07riz25p"
      ],
      "list_users_Canvas3_v6bn2e64ob_pl07riz25p.boxShadow": [
        "list_users_Canvas3_v6bn2e64ob_pl07riz25p"
      ],
      "list_users_Container1_v6bn2e64ob_uvrw7ttooc.borderRadius": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc"
      ],
      "list_users_Container1_v6bn2e64ob_uvrw7ttooc.boxShadow": [
        "list_users_Container1_v6bn2e64ob_uvrw7ttooc"
      ]
    }
  },
  "loadingEntities": {},
  "formEvaluation": {},
  "triggers": {},
  "firstEvaluation": {
    "renderPage": true,
    "isFirstPageLoad": true
  }
}
