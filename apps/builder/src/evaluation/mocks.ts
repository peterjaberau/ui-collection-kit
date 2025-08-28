export const evalAndLintingHandler = {
  "action": {
    "type": "FETCH_ALL_PAGE_ENTITY_COMPLETION",
    "postEvalActions": [
      {
        "type": "EXECUTE_PAGE_LOAD_ACTIONS",
        "payload": {}
      }
    ]
  },
  "triggeredLinting": true,
  "triggeredEvaluation": true
}

export const evalTreeSaga = {
  "unevalTree": {
    "localVariables": {
      "varCalculated": "''",
      "body": "export default {\n\tvarCalculated: '',\n}",
      "ENTITY_TYPE": "JSACTION",
      "actionId": "68ad40c7d8deff53ee07277d"
    },
    "MainContainer": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "widgetName": "MainContainer",
      "backgroundColor": "none",
      "rightColumn": 4896,
      "snapColumns": 64,
      "widgetId": "0",
      "topRow": 0,
      "bottomRow": 630,
      "containerStyle": "none",
      "snapRows": 124,
      "parentRowSpace": 1,
      "canExtend": true,
      "minHeight": 1292,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "meta": {},
      "isLoading": false,
      "componentHeight": 630,
      "componentWidth": 4896,
      "type": "CANVAS_WIDGET"
    },
    "Input1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 10,
      "widgetName": "Input1",
      "topRow": 1,
      "bottomRow": 8,
      "parentRowSpace": 10,
      "labelWidth": 5,
      "autoFocus": false,
      "mobileRightColumn": 35,
      "animateLoading": true,
      "parentColumnSpace": 6.541259765625,
      "resetOnSubmit": true,
      "leftColumn": 1,
      "labelPosition": "Top",
      "labelStyle": "",
      "inputType": "TEXT",
      "isDisabled": false,
      "key": "z6mkd60niu",
      "labelTextSize": "0.875rem",
      "isRequired": false,
      "rightColumn": 60,
      "dynamicHeight": "FIXED",
      "widgetId": "9nft85pms1",
      "accentColor": "{{appsmith.theme.colors.primaryColor}}",
      "showStepArrows": false,
      "minWidth": 450,
      "isVisible": true,
      "label": "Label",
      "labelAlignment": "left",
      "isLoading": false,
      "mobileTopRow": 3,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 15,
      "maxDynamicHeight": 9000,
      "iconAlign": "left",
      "defaultText": "",
      "minDynamicHeight": 4,
      "value": "{{Input1.text}}",
      "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (Input1.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(Input1.inputText) || Input1.inputText === \"\";          value = isEmpty ? null : Number(Input1.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = Input1.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = Input1.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!Input1.isRequired && isEmpty) {      return true;    }    if (Input1.isRequired && !hasValidValue) {      return false;    }    if (typeof Input1.validation === \"boolean\" && !Input1.validation) {      return false;    }    let parsedRegex = null;    if (Input1.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = Input1.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(Input1.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(Input1.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (Input1.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(Input1.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(Input1.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(Input1.maxNum) &&          Number.isFinite(Input1.maxNum) &&          Input1.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(Input1.minNum) &&          Number.isFinite(Input1.minNum) &&          Input1.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(Input1.inputText);        } else {          return hasValidValue;        }    }})()}}",
      "text": "",
      "isDirty": false,
      "inputText": "",
      "meta": {
        "text": "",
        "inputText": ""
      },
      "componentHeight": 70,
      "componentWidth": 385.934326171875,
      "type": "INPUT_WIDGET_V2"
    },
    "Text1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "mobileBottomRow": 15,
      "widgetName": "Text1",
      "topRow": 11,
      "bottomRow": 15,
      "parentRowSpace": 10,
      "mobileRightColumn": 35,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "{{appsmith.theme.fontFamily.appFont}}",
      "parentColumnSpace": 6.541259765625,
      "leftColumn": 2,
      "shouldTruncate": false,
      "truncateButtonColor": "{{appsmith.theme.colors.primaryColor}}",
      "text": "current value is: {{Input1.text ? Input1.text : \"-\"}}",
      "key": "lgxpzfcx4b",
      "rightColumn": 59,
      "textAlign": "LEFT",
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "kwdcw234sl",
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 11,
      "responsiveBehavior": "fill",
      "originalTopRow": 11,
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 19,
      "maxDynamicHeight": 9000,
      "originalBottomRow": 16,
      "fontSize": "1rem",
      "minDynamicHeight": 4,
      "value": "{{ Text1.text }}",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": 372.851806640625,
      "type": "TEXT_WIDGET"
    },
    "Canvas2": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "mobileBottomRow": 100,
      "widgetName": "Canvas2",
      "topRow": 0,
      "bottomRow": 290,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 328.98046875,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "izcc32bkjr",
      "rightColumn": 328.98046875,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "256n68mv3w",
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 328.98046875,
      "type": "CANVAS_WIDGET"
    },
    "containerPlayground": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "mobileBottomRow": 21,
      "widgetName": "containerPlayground",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 1,
      "bottomRow": 30,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 25,
      "animateLoading": true,
      "parentColumnSpace": 13.70751953125,
      "leftColumn": 0,
      "borderWidth": "1",
      "flexVerticalAlignment": "stretch",
      "key": "bv1axpkzaj",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 32,
      "dynamicHeight": "FIXED",
      "widgetId": "0j3cs5153j",
      "containerStyle": "card",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 11,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 1,
      "maxDynamicHeight": 12,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 438.640625,
      "type": "CONTAINER_WIDGET"
    },
    "btnCalculate": {
      "ENTITY_TYPE": "WIDGET",
      "resetFormOnClick": false,
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 11,
      "widgetName": "btnCalculate",
      "onClick": "{{storeValue('localCalculatedVar', calculatedTxt.setText(Input1.text));}}",
      "buttonColor": "{{appsmith.theme.colors.primaryColor}}",
      "topRow": 4,
      "bottomRow": 9,
      "parentRowSpace": 10,
      "mobileRightColumn": 25,
      "animateLoading": true,
      "parentColumnSpace": 9.216796875,
      "leftColumn": 5,
      "text": "Calculate",
      "isDisabled": false,
      "key": "c32rx365fx",
      "rightColumn": 57,
      "isDefaultClickDisabled": true,
      "widgetId": "tl8xbeqhua",
      "minWidth": 120,
      "isVisible": true,
      "recaptchaType": "V3",
      "isLoading": false,
      "mobileTopRow": 7,
      "responsiveBehavior": "hug",
      "disabledWhenInvalid": false,
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 9,
      "buttonVariant": "PRIMARY",
      "placement": "CENTER",
      "meta": {},
      "componentHeight": 50,
      "componentWidth": 479.2734375,
      "type": "BUTTON_WIDGET"
    },
    "calculatedTxt": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "mobileBottomRow": 15,
      "widgetName": "calculatedTxt",
      "topRow": 11,
      "bottomRow": 15,
      "parentRowSpace": 10,
      "mobileRightColumn": 35,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "{{appsmith.theme.fontFamily.appFont}}",
      "parentColumnSpace": 6.541259765625,
      "leftColumn": 3,
      "shouldTruncate": false,
      "truncateButtonColor": "{{appsmith.theme.colors.primaryColor}}",
      "text": "{{localVariables.varCalculated}}",
      "key": "lgxpzfcx4b",
      "rightColumn": 60,
      "textAlign": "LEFT",
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "od1swmzxxq",
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 11,
      "responsiveBehavior": "fill",
      "originalTopRow": 11,
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 19,
      "maxDynamicHeight": 9000,
      "originalBottomRow": 16,
      "fontSize": "1rem",
      "minDynamicHeight": 4,
      "value": "{{ calculatedTxt.text }}",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": 372.851806640625,
      "type": "TEXT_WIDGET"
    },
    "Canvas3": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "mobileBottomRow": 100,
      "widgetName": "Canvas3",
      "topRow": 0,
      "bottomRow": 290,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 328.98046875,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "izcc32bkjr",
      "rightColumn": 328.98046875,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "cl2ynw6igw",
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 328.98046875,
      "type": "CANVAS_WIDGET"
    },
    "containerActions": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "mobileBottomRow": 11,
      "widgetName": "containerActions",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 1,
      "bottomRow": 30,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 63,
      "animateLoading": true,
      "parentColumnSpace": 13.70751953125,
      "leftColumn": 32,
      "borderWidth": "1",
      "flexVerticalAlignment": "stretch",
      "key": "bv1axpkzaj",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 63,
      "dynamicHeight": "FIXED",
      "widgetId": "dgev9742e2",
      "containerStyle": "card",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 1,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 39,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 424.93310546875,
      "type": "CONTAINER_WIDGET"
    },
    "Canvas1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "mobileBottomRow": 100,
      "widgetName": "Canvas1",
      "topRow": 0,
      "bottomRow": 410,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 430.5,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "wl4jb57gwi",
      "rightColumn": 430.5,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "k1ojmo3iid",
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 410,
      "componentWidth": 430.5,
      "type": "CANVAS_WIDGET"
    },
    "containerRoot": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "{{appsmith.theme.boxShadow.appBoxShadow}}",
      "mobileBottomRow": 32,
      "widgetName": "containerRoot",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 22,
      "bottomRow": 63,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 36,
      "animateLoading": true,
      "parentColumnSpace": 17.9375,
      "leftColumn": 12,
      "borderWidth": "1",
      "flexVerticalAlignment": "stretch",
      "key": "1456ozhxit",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 46,
      "dynamicHeight": "FIXED",
      "widgetId": "9e839onva6",
      "containerStyle": "card",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 22,
      "responsiveBehavior": "fill",
      "borderRadius": "{{appsmith.theme.borderRadius.appBorderRadius}}",
      "mobileLeftColumn": 12,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 410,
      "componentWidth": 609.875,
      "type": "CONTAINER_WIDGET"
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
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "emptyInstance": false,
        "isAnonymous": false,
        "isEnabled": true,
        "isSuperUser": true,
        "isConfigurable": true,
        "adminSettingsVisible": false,
        "isIntercomConsentGiven": false
      },
      "URL": {
        "fullPath": "https://dev.appsmith.com/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
        "host": "dev.appsmith.com",
        "hostname": "dev.appsmith.com",
        "queryParams": {},
        "protocol": "https:",
        "pathname": "/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
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
          "primaryColor": "#553DE9",
          "backgroundColor": "#F8FAFC"
        },
        "borderRadius": {
          "appBorderRadius": "0.375rem"
        },
        "boxShadow": {
          "appBoxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        },
        "fontFamily": {
          "appFont": "System Default"
        }
      },
      "currentPageName": "Page1",
      "workspaceName": "",
      "appName": "auto-layout",
      "currentEnvironmentName": "",
      "ENTITY_TYPE": "APPSMITH"
    }
  },
  "configTree": {
    "localVariables": {
      "actionId": "68ad40c7d8deff53ee07277d",
      "meta": {},
      "name": "localVariables",
      "pluginType": "JS",
      "ENTITY_TYPE": "JSACTION",
      "bindingPaths": {
        "body": "SMART_SUBSTITUTE",
        "varCalculated": "SMART_SUBSTITUTE"
      },
      "reactivePaths": {
        "body": "SMART_SUBSTITUTE",
        "varCalculated": "SMART_SUBSTITUTE"
      },
      "dynamicBindingPathList": [
        {
          "key": "body"
        },
        {
          "key": "varCalculated"
        }
      ],
      "variables": [
        "varCalculated"
      ],
      "dependencyMap": {
        "body": []
      },
      "actionNames": {},
      "dynamicTriggerPathList": []
    },
    "MainContainer": {
      "widgetId": "0",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CANVAS_WIDGET",
      "dynamicTriggerPathList": [],
      "isMetaPropDirty": false
    },
    "Input1": {
      "widgetId": "9nft85pms1",
      "defaultProps": {
        "inputText": "defaultText",
        "text": "defaultText"
      },
      "defaultMetaProps": [
        "text",
        "isDirty",
        "inputText"
      ],
      "dynamicBindingPathList": [
        {
          "key": "accentColor"
        },
        {
          "key": "borderRadius"
        },
        {
          "key": "value"
        },
        {
          "key": "isValid"
        }
      ],
      "logBlackList": {
        "value": true,
        "isValid": true
      },
      "bindingPaths": {
        "defaultText": "TEMPLATE",
        "label": "TEMPLATE",
        "isRequired": "TEMPLATE",
        "maxChars": "TEMPLATE",
        "regex": "TEMPLATE",
        "validation": "TEMPLATE",
        "errorMessage": "TEMPLATE",
        "isSpellCheck": "TEMPLATE",
        "tooltip": "TEMPLATE",
        "placeholderText": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "isDisabled": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "autoFocus": "TEMPLATE",
        "resetOnSubmit": "TEMPLATE",
        "iconName": "TEMPLATE",
        "labelTextColor": "TEMPLATE",
        "labelTextSize": "TEMPLATE",
        "labelStyle": "TEMPLATE",
        "accentColor": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "value": "TEMPLATE",
        "isValid": "TEMPLATE",
        "text": "TEMPLATE",
        "isDirty": "TEMPLATE",
        "inputText": "TEMPLATE",
        "accentColor": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "defaultText": "TEMPLATE",
        "meta.inputText": "TEMPLATE",
        "meta.text": "TEMPLATE",
        "label": "TEMPLATE",
        "isRequired": "TEMPLATE",
        "maxChars": "TEMPLATE",
        "regex": "TEMPLATE",
        "validation": "TEMPLATE",
        "errorMessage": "TEMPLATE",
        "isSpellCheck": "TEMPLATE",
        "tooltip": "TEMPLATE",
        "placeholderText": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "isDisabled": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "autoFocus": "TEMPLATE",
        "resetOnSubmit": "TEMPLATE",
        "iconName": "TEMPLATE",
        "labelTextColor": "TEMPLATE",
        "labelTextSize": "TEMPLATE",
        "labelStyle": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "triggerPaths": {
        "onTextChanged": true,
        "onFocus": true,
        "onBlur": true,
        "onSubmit": true
      },
      "validationPaths": {
        "defaultText": {
          "type": "FUNCTION",
          "params": {
            "expected": {
              "type": "string or number",
              "example": "John | 123",
              "autocompleteDataType": "STRING"
            },
            "fnString": "function defaultValueValidation(\n// TODO: Fix this the next time the file is edited\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nvalue, props,\n// TODO: Fix this the next time the file is edited\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\n_) {\n  const STRING_ERROR_MESSAGE = {\n    name: \"TypeError\",\n    message: \"This value must be string\"\n  };\n  const NUMBER_ERROR_MESSAGE = {\n    name: \"TypeError\",\n    message: \"This value must be number\"\n  };\n  const EMPTY_ERROR_MESSAGE = {\n    name: \"\",\n    message: \"\"\n  };\n  if (_.isObject(value)) {\n    return {\n      isValid: false,\n      parsed: JSON.stringify(value, null, 2),\n      messages: [STRING_ERROR_MESSAGE]\n    };\n  }\n  const {\n    inputType\n  } = props;\n  if (_.isBoolean(value) || _.isNil(value) || _.isUndefined(value)) {\n    return {\n      isValid: false,\n      parsed: value,\n      messages: [STRING_ERROR_MESSAGE]\n    };\n  }\n  let parsed;\n  switch (inputType) {\n    case \"NUMBER\":\n      parsed = Number(value);\n      let isValid, messages;\n      if (_.isString(value) && value.trim() === \"\") {\n        /*\n         *  When value is emtpy string\n         */\n        isValid = true;\n        messages = [EMPTY_ERROR_MESSAGE];\n        parsed = null;\n      } else if (!Number.isFinite(parsed)) {\n        /*\n         *  When parsed value is not a finite numer\n         */\n        isValid = false;\n        messages = [NUMBER_ERROR_MESSAGE];\n        parsed = null;\n      } else {\n        /*\n         *  When parsed value is a Number\n         */\n        isValid = true;\n        messages = [EMPTY_ERROR_MESSAGE];\n      }\n      return {\n        isValid,\n        parsed,\n        messages\n      };\n    case \"TEXT\":\n    case \"MULTI_LINE_TEXT\":\n    case \"PASSWORD\":\n    case \"EMAIL\":\n      parsed = value;\n      if (!_.isString(parsed)) {\n        try {\n          parsed = _.toString(parsed);\n        } catch (e) {\n          return {\n            isValid: false,\n            parsed: \"\",\n            messages: [STRING_ERROR_MESSAGE]\n          };\n        }\n      }\n      return {\n        isValid: _.isString(parsed),\n        parsed: parsed,\n        messages: [EMPTY_ERROR_MESSAGE]\n      };\n    default:\n      return {\n        isValid: false,\n        parsed: \"\",\n        messages: [STRING_ERROR_MESSAGE]\n      };\n  }\n}"
          }
        },
        "label": {
          "type": "TEXT"
        },
        "isRequired": {
          "type": "BOOLEAN"
        },
        "maxChars": {
          "type": "NUMBER",
          "params": {
            "min": 1,
            "natural": true,
            "passThroughOnZero": false
          }
        },
        "regex": {
          "type": "REGEX"
        },
        "validation": {
          "type": "BOOLEAN",
          "params": {
            "default": true
          }
        },
        "errorMessage": {
          "type": "TEXT"
        },
        "isSpellCheck": {
          "type": "BOOLEAN"
        },
        "tooltip": {
          "type": "TEXT"
        },
        "placeholderText": {
          "type": "TEXT"
        },
        "isVisible": {
          "type": "BOOLEAN"
        },
        "isDisabled": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "autoFocus": {
          "type": "BOOLEAN"
        },
        "resetOnSubmit": {
          "type": "BOOLEAN"
        },
        "iconName": {
          "type": "TEXT",
          "params": {
            "allowedValues": [
              "add",
              "add-column-left",
              "add-column-right",
              "add-row-bottom",
              "add-row-top",
              "add-to-artifact",
              "add-to-folder",
              "airplane",
              "alignment-bottom",
              "alignment-horizontal-center",
              "alignment-left",
              "alignment-right",
              "alignment-top",
              "alignment-vertical-center",
              "align-center",
              "align-justify",
              "align-left",
              "align-right",
              "annotation",
              "application",
              "applications",
              "app-header",
              "archive",
              "array",
              "array-boolean",
              "array-date",
              "array-numeric",
              "array-string",
              "array-timestamp",
              "arrows-horizontal",
              "arrows-vertical",
              "arrow-bottom-left",
              "arrow-bottom-right",
              "arrow-down",
              "arrow-left",
              "arrow-right",
              "arrow-top-left",
              "arrow-top-right",
              "arrow-up",
              "asterisk",
              "automatic-updates",
              "backlink",
              "badge",
              "bank-account",
              "ban-circle",
              "barcode",
              "blank",
              "blocked-person",
              "bold",
              "book",
              "bookmark",
              "box",
              "briefcase",
              "bring-data",
              "build",
              "calculator",
              "calendar",
              "camera",
              "caret-down",
              "caret-left",
              "caret-right",
              "caret-up",
              "cell-tower",
              "changes",
              "chart",
              "chat",
              "chevron-backward",
              "chevron-down",
              "chevron-forward",
              "chevron-left",
              "chevron-right",
              "chevron-up",
              "circle",
              "circle-arrow-down",
              "circle-arrow-left",
              "circle-arrow-right",
              "circle-arrow-up",
              "citation",
              "clean",
              "clipboard",
              "cloud",
              "cloud-download",
              "cloud-upload",
              "code",
              "code-block",
              "cog",
              "collapse-all",
              "column-layout",
              "comment",
              "comparison",
              "compass",
              "compressed",
              "confirm",
              "console",
              "contrast",
              "control",
              "credit-card",
              "cross",
              "crown",
              "cube",
              "cube-add",
              "cube-remove",
              "curved-range-chart",
              "cut",
              "cycle",
              "dashboard",
              "database",
              "data-connection",
              "data-lineage",
              "delete",
              "delta",
              "derive-column",
              "desktop",
              "diagnosis",
              "diagram-tree",
              "direction-left",
              "direction-right",
              "disable",
              "document",
              "document-open",
              "document-share",
              "dollar",
              "dot",
              "double-caret-horizontal",
              "double-caret-vertical",
              "double-chevron-down",
              "double-chevron-left",
              "double-chevron-right",
              "double-chevron-up",
              "doughnut-chart",
              "download",
              "drag-handle-horizontal",
              "drag-handle-vertical",
              "draw",
              "drawer-left",
              "drawer-left-filled",
              "drawer-right",
              "drawer-right-filled",
              "drive-time",
              "duplicate",
              "edit",
              "eject",
              "endorsed",
              "envelope",
              "equals",
              "eraser",
              "error",
              "euro",
              "exchange",
              "exclude-row",
              "expand-all",
              "export",
              "eye-off",
              "eye-on",
              "eye-open",
              "fast-backward",
              "fast-forward",
              "feed",
              "feed-subscribed",
              "film",
              "filter",
              "filter-keep",
              "filter-list",
              "filter-open",
              "filter-remove",
              "flag",
              "flame",
              "flash",
              "floppy-disk",
              "flows",
              "flow-branch",
              "flow-end",
              "flow-linear",
              "flow-review",
              "flow-review-branch",
              "folder-close",
              "folder-new",
              "folder-open",
              "folder-shared",
              "folder-shared-open",
              "follower",
              "following",
              "font",
              "fork",
              "form",
              "fullscreen",
              "full-circle",
              "full-stacked-chart",
              "function",
              "gantt-chart",
              "geofence",
              "geolocation",
              "geosearch",
              "git-branch",
              "git-commit",
              "git-merge",
              "git-new-branch",
              "git-pull",
              "git-push",
              "git-repo",
              "glass",
              "globe",
              "globe-network",
              "graph",
              "graph-remove",
              "greater-than",
              "greater-than-or-equal-to",
              "grid",
              "grid-view",
              "grouped-bar-chart",
              "group-objects",
              "hand",
              "hand-down",
              "hand-left",
              "hand-right",
              "hand-up",
              "hat",
              "header",
              "header-one",
              "header-two",
              "headset",
              "heart",
              "heart-broken",
              "heatmap",
              "heat-grid",
              "help",
              "helper-management",
              "highlight",
              "history",
              "home",
              "horizontal-bar-chart",
              "horizontal-bar-chart-asc",
              "horizontal-bar-chart-desc",
              "horizontal-distribution",
              "id-number",
              "image-rotate-left",
              "image-rotate-right",
              "import",
              "inbox",
              "inbox-filtered",
              "inbox-geo",
              "inbox-search",
              "inbox-update",
              "info-sign",
              "inheritance",
              "inherited-group",
              "inner-join",
              "insert",
              "intersection",
              "ip-address",
              "issue",
              "issue-closed",
              "issue-new",
              "italic",
              "join-table",
              "key",
              "key-backspace",
              "key-command",
              "key-control",
              "key-delete",
              "key-enter",
              "key-escape",
              "key-option",
              "key-shift",
              "key-tab",
              "known-vehicle",
              "label",
              "lab-test",
              "layer",
              "layers",
              "layout",
              "layout-auto",
              "layout-balloon",
              "layout-circle",
              "layout-grid",
              "layout-group-by",
              "layout-hierarchy",
              "layout-linear",
              "layout-skew-grid",
              "layout-sorted-clusters",
              "learning",
              "left-join",
              "less-than",
              "less-than-or-equal-to",
              "lifesaver",
              "lightbulb",
              "link",
              "list",
              "list-columns",
              "list-detail-view",
              "locate",
              "lock",
              "log-in",
              "log-out",
              "manual",
              "manually-entered-data",
              "map",
              "map-create",
              "map-marker",
              "maximize",
              "media",
              "menu",
              "menu-closed",
              "menu-open",
              "merge-columns",
              "merge-links",
              "minimize",
              "minus",
              "mobile-phone",
              "mobile-video",
              "modal",
              "modal-filled",
              "moon",
              "more",
              "mountain",
              "move",
              "mugshot",
              "multi-select",
              "music",
              "new-drawing",
              "new-grid-item",
              "new-layer",
              "new-layers",
              "new-link",
              "new-object",
              "new-person",
              "new-prescription",
              "new-text-box",
              "ninja",
              "notifications",
              "notifications-updated",
              "not-equal-to",
              "numbered-list",
              "numerical",
              "office",
              "offline",
              "oil-field",
              "one-column",
              "outdated",
              "page-layout",
              "panel-stats",
              "panel-table",
              "paperclip",
              "paragraph",
              "path",
              "path-search",
              "pause",
              "people",
              "percentage",
              "person",
              "phone",
              "pie-chart",
              "pin",
              "pivot",
              "pivot-table",
              "play",
              "plus",
              "polygon-filter",
              "power",
              "predictive-analysis",
              "prescription",
              "presentation",
              "print",
              "projects",
              "properties",
              "property",
              "publish-function",
              "pulse",
              "random",
              "record",
              "redo",
              "refresh",
              "regression-chart",
              "remove",
              "remove-column",
              "remove-column-left",
              "remove-column-right",
              "remove-row-bottom",
              "remove-row-top",
              "repeat",
              "reset",
              "resolve",
              "rig",
              "right-join",
              "ring",
              "rotate-document",
              "rotate-page",
              "route",
              "satellite",
              "saved",
              "scatter-plot",
              "search",
              "search-around",
              "search-template",
              "search-text",
              "segmented-control",
              "select",
              "selection",
              "send-message",
              "send-to",
              "send-to-graph",
              "send-to-map",
              "series-add",
              "series-configuration",
              "series-derived",
              "series-filtered",
              "series-search",
              "settings",
              "share",
              "shield",
              "shop",
              "shopping-cart",
              "signal-search",
              "sim-card",
              "slash",
              "small-cross",
              "small-minus",
              "small-plus",
              "small-tick",
              "snowflake",
              "social-media",
              "sort",
              "sort-alphabetical",
              "sort-alphabetical-desc",
              "sort-asc",
              "sort-desc",
              "sort-numerical",
              "sort-numerical-desc",
              "split-columns",
              "square",
              "stacked-chart",
              "star",
              "star-empty",
              "step-backward",
              "step-chart",
              "step-forward",
              "stop",
              "stopwatch",
              "strikethrough",
              "style",
              "swap-horizontal",
              "swap-vertical",
              "switch",
              "symbol-circle",
              "symbol-cross",
              "symbol-diamond",
              "symbol-square",
              "symbol-triangle-down",
              "symbol-triangle-up",
              "tag",
              "take-action",
              "taxi",
              "text-highlight",
              "th",
              "thumbs-down",
              "thumbs-up",
              "th-derived",
              "th-disconnect",
              "th-filtered",
              "th-list",
              "tick",
              "tick-circle",
              "time",
              "timeline-area-chart",
              "timeline-bar-chart",
              "timeline-events",
              "timeline-line-chart",
              "tint",
              "torch",
              "tractor",
              "train",
              "translate",
              "trash",
              "tree",
              "trending-down",
              "trending-up",
              "truck",
              "two-columns",
              "unarchive",
              "underline",
              "undo",
              "ungroup-objects",
              "unknown-vehicle",
              "unlock",
              "unpin",
              "unresolve",
              "updated",
              "upload",
              "user",
              "variable",
              "vertical-bar-chart-asc",
              "vertical-bar-chart-desc",
              "vertical-distribution",
              "video",
              "virus",
              "volume-down",
              "volume-off",
              "volume-up",
              "walk",
              "warning-sign",
              "waterfall-chart",
              "widget",
              "widget-button",
              "widget-footer",
              "widget-header",
              "wrench",
              "zoom-in",
              "zoom-out",
              "zoom-to-fit"
            ]
          }
        },
        "labelTextColor": {
          "type": "TEXT",
          "params": {
            "regex": {}
          }
        },
        "labelTextSize": {
          "type": "TEXT"
        },
        "labelStyle": {
          "type": "TEXT"
        },
        "accentColor": {
          "type": "TEXT"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {
        "inputText": {
          "DEFAULT": "defaultText",
          "META": "meta.inputText"
        },
        "text": {
          "DEFAULT": "defaultText",
          "META": "meta.text"
        }
      },
      "overridingPropertyPaths": {
        "defaultText": [
          "inputText",
          "meta.inputText",
          "text",
          "meta.text"
        ],
        "meta.inputText": [
          "inputText"
        ],
        "meta.text": [
          "text"
        ]
      },
      "type": "INPUT_WIDGET_V2",
      "__setters": {
        "setVisibility": {
          "path": "Input1.isVisible",
          "type": "boolean"
        },
        "setDisabled": {
          "path": "Input1.isDisabled",
          "type": "boolean"
        },
        "setRequired": {
          "path": "Input1.isRequired",
          "type": "boolean"
        },
        "setValue": {
          "path": "Input1.defaultText",
          "type": "string",
          "accessor": "Input1.text"
        }
      },
      "isMetaPropDirty": false
    },
    "Text1": {
      "widgetId": "kwdcw234sl",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "truncateButtonColor"
        },
        {
          "key": "fontFamily"
        },
        {
          "key": "borderRadius"
        },
        {
          "key": "text"
        },
        {
          "key": "value"
        }
      ],
      "logBlackList": {
        "value": true
      },
      "bindingPaths": {
        "text": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "disableLink": "TEMPLATE",
        "fontFamily": "TEMPLATE",
        "fontSize": "TEMPLATE",
        "textColor": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "textAlign": "TEMPLATE",
        "fontStyle": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "reactivePaths": {
        "value": "TEMPLATE",
        "truncateButtonColor": "TEMPLATE",
        "fontFamily": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "text": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "disableLink": "TEMPLATE",
        "fontSize": "TEMPLATE",
        "textColor": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "textAlign": "TEMPLATE",
        "fontStyle": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "text": {
          "type": "TEXT",
          "params": {
            "limitLineBreaks": true
          }
        },
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "disableLink": {
          "type": "BOOLEAN"
        },
        "fontFamily": {
          "type": "TEXT"
        },
        "fontSize": {
          "type": "TEXT"
        },
        "textColor": {
          "type": "TEXT",
          "params": {
            "regex": {}
          }
        },
        "backgroundColor": {
          "type": "TEXT",
          "params": {
            "regex": {},
            "expected": {
              "type": "string (HTML color name or HEX value)",
              "example": "red | #9C0D38",
              "autocompleteDataType": "STRING"
            }
          }
        },
        "borderColor": {
          "type": "TEXT"
        },
        "textAlign": {
          "type": "TEXT"
        },
        "fontStyle": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "TEXT_WIDGET",
      "dynamicTriggerPathList": [],
      "__setters": {
        "setVisibility": {
          "path": "Text1.isVisible",
          "type": "boolean"
        },
        "setDisabled": {
          "path": "Text1.isDisabled",
          "type": "boolean"
        },
        "setRequired": {
          "path": "Text1.isRequired",
          "type": "boolean"
        },
        "setText": {
          "path": "Text1.text",
          "type": "string"
        },
        "setTextColor": {
          "path": "Text1.textColor",
          "type": "string"
        }
      },
      "isMetaPropDirty": false
    },
    "Canvas2": {
      "widgetId": "256n68mv3w",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CANVAS_WIDGET",
      "isMetaPropDirty": false
    },
    "containerPlayground": {
      "widgetId": "0j3cs5153j",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CONTAINER_WIDGET",
      "dynamicTriggerPathList": [],
      "__setters": {
        "setVisibility": {
          "path": "containerPlayground.isVisible",
          "type": "boolean"
        }
      },
      "isMetaPropDirty": false
    },
    "btnCalculate": {
      "widgetId": "tl8xbeqhua",
      "defaultProps": {},
      "defaultMetaProps": [
        "recaptchaToken"
      ],
      "dynamicBindingPathList": [
        {
          "key": "buttonColor"
        },
        {
          "key": "borderRadius"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "text": "TEMPLATE",
        "tooltip": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "isDisabled": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "googleRecaptchaKey": "TEMPLATE",
        "recaptchaType": "TEMPLATE",
        "disabledWhenInvalid": "TEMPLATE",
        "resetFormOnClick": "TEMPLATE",
        "buttonVariant": "TEMPLATE",
        "iconName": "TEMPLATE",
        "placement": "TEMPLATE",
        "buttonColor": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "recaptchaToken": "TEMPLATE",
        "buttonColor": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "text": "TEMPLATE",
        "tooltip": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "isDisabled": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "googleRecaptchaKey": "TEMPLATE",
        "recaptchaType": "TEMPLATE",
        "disabledWhenInvalid": "TEMPLATE",
        "resetFormOnClick": "TEMPLATE",
        "buttonVariant": "TEMPLATE",
        "iconName": "TEMPLATE",
        "placement": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "triggerPaths": {
        "onClick": true
      },
      "validationPaths": {
        "text": {
          "type": "TEXT"
        },
        "tooltip": {
          "type": "TEXT"
        },
        "isVisible": {
          "type": "BOOLEAN"
        },
        "isDisabled": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "googleRecaptchaKey": {
          "type": "TEXT"
        },
        "recaptchaType": {
          "type": "TEXT",
          "params": {
            "allowedValues": [
              "V3",
              "V2"
            ],
            "default": "V3"
          }
        },
        "disabledWhenInvalid": {
          "type": "BOOLEAN"
        },
        "resetFormOnClick": {
          "type": "BOOLEAN"
        },
        "buttonVariant": {
          "type": "TEXT",
          "params": {
            "allowedValues": [
              "PRIMARY",
              "SECONDARY",
              "TERTIARY"
            ],
            "default": "PRIMARY"
          }
        },
        "iconName": {
          "type": "TEXT"
        },
        "placement": {
          "type": "TEXT",
          "params": {
            "allowedValues": [
              "START",
              "BETWEEN",
              "CENTER"
            ],
            "default": "CENTER"
          }
        },
        "buttonColor": {
          "type": "TEXT"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "BUTTON_WIDGET",
      "dynamicTriggerPathList": [
        {
          "key": "onClick"
        }
      ],
      "__setters": {
        "setVisibility": {
          "path": "btnCalculate.isVisible",
          "type": "boolean"
        },
        "setDisabled": {
          "path": "btnCalculate.isDisabled",
          "type": "boolean"
        },
        "setLabel": {
          "path": "btnCalculate.text",
          "type": "string"
        },
        "setColor": {
          "path": "btnCalculate.buttonColor",
          "type": "string"
        }
      },
      "isMetaPropDirty": false
    },
    "calculatedTxt": {
      "widgetId": "od1swmzxxq",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "truncateButtonColor"
        },
        {
          "key": "fontFamily"
        },
        {
          "key": "borderRadius"
        },
        {
          "key": "text"
        },
        {
          "key": "value"
        }
      ],
      "logBlackList": {
        "value": true
      },
      "bindingPaths": {
        "text": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "disableLink": "TEMPLATE",
        "fontFamily": "TEMPLATE",
        "fontSize": "TEMPLATE",
        "textColor": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "textAlign": "TEMPLATE",
        "fontStyle": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "reactivePaths": {
        "value": "TEMPLATE",
        "truncateButtonColor": "TEMPLATE",
        "fontFamily": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "text": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "disableLink": "TEMPLATE",
        "fontSize": "TEMPLATE",
        "textColor": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "textAlign": "TEMPLATE",
        "fontStyle": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "text": {
          "type": "TEXT",
          "params": {
            "limitLineBreaks": true
          }
        },
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "disableLink": {
          "type": "BOOLEAN"
        },
        "fontFamily": {
          "type": "TEXT"
        },
        "fontSize": {
          "type": "TEXT"
        },
        "textColor": {
          "type": "TEXT",
          "params": {
            "regex": {}
          }
        },
        "backgroundColor": {
          "type": "TEXT",
          "params": {
            "regex": {},
            "expected": {
              "type": "string (HTML color name or HEX value)",
              "example": "red | #9C0D38",
              "autocompleteDataType": "STRING"
            }
          }
        },
        "borderColor": {
          "type": "TEXT"
        },
        "textAlign": {
          "type": "TEXT"
        },
        "fontStyle": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "TEXT_WIDGET",
      "dynamicTriggerPathList": [],
      "__setters": {
        "setVisibility": {
          "path": "calculatedTxt.isVisible",
          "type": "boolean"
        },
        "setDisabled": {
          "path": "calculatedTxt.isDisabled",
          "type": "boolean"
        },
        "setRequired": {
          "path": "calculatedTxt.isRequired",
          "type": "boolean"
        },
        "setText": {
          "path": "calculatedTxt.text",
          "type": "string"
        },
        "setTextColor": {
          "path": "calculatedTxt.textColor",
          "type": "string"
        }
      },
      "isMetaPropDirty": false
    },
    "Canvas3": {
      "widgetId": "cl2ynw6igw",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CANVAS_WIDGET",
      "isMetaPropDirty": false
    },
    "containerActions": {
      "widgetId": "dgev9742e2",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CONTAINER_WIDGET",
      "dynamicTriggerPathList": [],
      "__setters": {
        "setVisibility": {
          "path": "containerActions.isVisible",
          "type": "boolean"
        }
      },
      "isMetaPropDirty": false
    },
    "Canvas1": {
      "widgetId": "k1ojmo3iid",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CANVAS_WIDGET",
      "isMetaPropDirty": false
    },
    "containerRoot": {
      "widgetId": "9e839onva6",
      "defaultProps": {},
      "defaultMetaProps": [],
      "dynamicBindingPathList": [
        {
          "key": "borderRadius"
        },
        {
          "key": "boxShadow"
        }
      ],
      "logBlackList": {},
      "bindingPaths": {
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE",
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE"
      },
      "reactivePaths": {
        "borderRadius": "TEMPLATE",
        "boxShadow": "TEMPLATE",
        "isVisible": "TEMPLATE",
        "animateLoading": "TEMPLATE",
        "backgroundColor": "TEMPLATE",
        "borderColor": "TEMPLATE",
        "borderWidth": "TEMPLATE"
      },
      "triggerPaths": {},
      "validationPaths": {
        "isVisible": {
          "type": "BOOLEAN"
        },
        "animateLoading": {
          "type": "BOOLEAN"
        },
        "backgroundColor": {
          "type": "TEXT"
        },
        "borderColor": {
          "type": "TEXT"
        },
        "borderWidth": {
          "type": "NUMBER"
        },
        "borderRadius": {
          "type": "TEXT"
        },
        "boxShadow": {
          "type": "TEXT"
        }
      },
      "dependencyMap": {},
      "ENTITY_TYPE": "WIDGET",
      "privateWidgets": {},
      "propertyOverrideDependency": {},
      "overridingPropertyPaths": {},
      "type": "CONTAINER_WIDGET",
      "dynamicTriggerPathList": [],
      "__setters": {
        "setVisibility": {
          "path": "containerRoot.isVisible",
          "type": "boolean"
        }
      },
      "isMetaPropDirty": false
    }
  }
}

export const EDITOR_OPEN = {
  "appId": "68ad34afd8deff53ee072775",
  "appName": "auto-layout",
  "isAnotherEditorTabOpen": false,
  "currentTabs": [
    "68aac3acde8cf11f80e4a91a",
    "68aac3acde8cf11f80e4a91a",
    "68aac3acde8cf11f80e4a91a",
    "68aac3acde8cf11f80e4a91a",
    "68ad34afd8deff53ee072775"
  ],
  "instanceId": "68a9b7e8de8cf11f80e4a873",
  "version": "v1.85",
  "userData": {
    "userId": "444bda9ee3d31919a88c50348bbf173d2a7490eef306fa5418e230855bbc837a",
    "source": "ce"
  }
}

export const PAGE_LOAD = {
  "pageName": "Page1",
  "pageId": "68ad34afd8deff53ee072777",
  "appName": "auto-layout",
  "mode": "EDIT",
  "instanceId": "68a9b7e8de8cf11f80e4a873",
  "version": "v1.85",
  "userData": {
    "userId": "444bda9ee3d31919a88c50348bbf173d2a7490eef306fa5418e230855bbc837a",
    "source": "ce"
  }
}

export const dynamicallyUpdateContainersSaga = {
  "updates": {}
}

export const SW_REGISTRATION_SUCCESS = {
  "message": "Service worker is active",
  "mode": "EDIT",
  "timeTaken": 250,
  "instanceId": "68a9b7e8de8cf11f80e4a873",
  "version": "v1.85",
  "userData": {
    "userId": "444bda9ee3d31919a88c50348bbf173d2a7490eef306fa5418e230855bbc837a",
    "source": "ce"
  }
}

export const evalMetaUpdatesLength = {
  "evalMetaUpdatesLength": 0
}

export const jsUpdates ={
  "jsUpdates": {
    "localVariables": {
      "parsedBody": {
        "body": "export default {\n\tvarCalculated: '',\n}",
        "actions": [],
        "variables": [
          {
            "name": "varCalculated",
            "value": "''"
          }
        ]
      },
      "id": "68ad40c7d8deff53ee07277d"
    }
  }
}

export const dataTree ={
  "dataTree": {
    "localVariables": {
      "varCalculated": "",
      "body": "export default {\n\tvarCalculated: '',\n}",
      "ENTITY_TYPE": "JSACTION",
      "actionId": "68ad40c7d8deff53ee07277d",
      "__evaluation__": {
        "errors": {
          "varCalculated": [],
          "body": []
        }
      }
    },
    "MainContainer": {
      "ENTITY_TYPE": "WIDGET",
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "widgetName": "MainContainer",
      "backgroundColor": "none",
      "rightColumn": 4896,
      "snapColumns": 64,
      "widgetId": "0",
      "topRow": 0,
      "bottomRow": 630,
      "containerStyle": "none",
      "snapRows": 124,
      "parentRowSpace": 1,
      "canExtend": true,
      "minHeight": 1292,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "borderRadius": "0.375rem",
      "meta": {},
      "isLoading": false,
      "componentHeight": 630,
      "componentWidth": 4896,
      "type": "CANVAS_WIDGET",
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
    "Input1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 10,
      "widgetName": "Input1",
      "topRow": 1,
      "bottomRow": 8,
      "parentRowSpace": 10,
      "labelWidth": 5,
      "autoFocus": false,
      "mobileRightColumn": 35,
      "animateLoading": true,
      "parentColumnSpace": 6.541259765625,
      "resetOnSubmit": true,
      "leftColumn": 1,
      "labelPosition": "Top",
      "labelStyle": "",
      "inputType": "TEXT",
      "isDisabled": false,
      "key": "z6mkd60niu",
      "labelTextSize": "0.875rem",
      "isRequired": false,
      "rightColumn": 60,
      "dynamicHeight": "FIXED",
      "widgetId": "9nft85pms1",
      "accentColor": "#553DE9",
      "showStepArrows": false,
      "minWidth": 450,
      "isVisible": true,
      "label": "Label",
      "labelAlignment": "left",
      "isLoading": false,
      "mobileTopRow": 3,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 15,
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
      "componentWidth": 385.934326171875,
      "type": "INPUT_WIDGET_V2",
      "regex": "",
      "validation": true,
      "errorMessage": "",
      "tooltip": "",
      "placeholderText": "",
      "iconName": "",
      "labelTextColor": "",
      "__evaluation__": {
        "errors": {
          "defaultText": [],
          "meta.text": [],
          "text": [],
          "meta.inputText": [],
          "meta": [],
          "isRequired": [],
          "inputType": [],
          "inputText": [],
          "isValid": [],
          "value": [],
          "borderRadius": [],
          "accentColor": [],
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
    "Text1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "mobileBottomRow": 15,
      "widgetName": "Text1",
      "topRow": 11,
      "bottomRow": 15,
      "parentRowSpace": 10,
      "mobileRightColumn": 35,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "parentColumnSpace": 6.541259765625,
      "leftColumn": 2,
      "shouldTruncate": false,
      "truncateButtonColor": "#553DE9",
      "text": "current value is: -",
      "key": "lgxpzfcx4b",
      "rightColumn": 59,
      "textAlign": "LEFT",
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "kwdcw234sl",
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 11,
      "responsiveBehavior": "fill",
      "originalTopRow": 11,
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 19,
      "maxDynamicHeight": 9000,
      "originalBottomRow": 16,
      "fontSize": "1rem",
      "minDynamicHeight": 4,
      "value": "current value is: -",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": 372.851806640625,
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
    "Canvas2": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "mobileBottomRow": 100,
      "widgetName": "Canvas2",
      "topRow": 0,
      "bottomRow": 290,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 328.98046875,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "izcc32bkjr",
      "rightColumn": 328.98046875,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "256n68mv3w",
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 328.98046875,
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
    "containerPlayground": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "mobileBottomRow": 21,
      "widgetName": "containerPlayground",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 1,
      "bottomRow": 30,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 25,
      "animateLoading": true,
      "parentColumnSpace": 13.70751953125,
      "leftColumn": 0,
      "borderWidth": 1,
      "flexVerticalAlignment": "stretch",
      "key": "bv1axpkzaj",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 32,
      "dynamicHeight": "FIXED",
      "widgetId": "0j3cs5153j",
      "containerStyle": "card",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 11,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 1,
      "maxDynamicHeight": 12,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 438.640625,
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
    "btnCalculate": {
      "ENTITY_TYPE": "WIDGET",
      "resetFormOnClick": false,
      "needsErrorInfo": false,
      "boxShadow": "none",
      "mobileBottomRow": 11,
      "widgetName": "btnCalculate",
      "onClick": "{{storeValue('localCalculatedVar', calculatedTxt.setText(Input1.text));}}",
      "buttonColor": "#553DE9",
      "topRow": 4,
      "bottomRow": 9,
      "parentRowSpace": 10,
      "mobileRightColumn": 25,
      "animateLoading": true,
      "parentColumnSpace": 9.216796875,
      "leftColumn": 5,
      "text": "Calculate",
      "isDisabled": false,
      "key": "c32rx365fx",
      "rightColumn": 57,
      "isDefaultClickDisabled": true,
      "widgetId": "tl8xbeqhua",
      "minWidth": 120,
      "isVisible": true,
      "recaptchaType": "V3",
      "isLoading": false,
      "mobileTopRow": 7,
      "responsiveBehavior": "hug",
      "disabledWhenInvalid": false,
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 9,
      "buttonVariant": "PRIMARY",
      "placement": "CENTER",
      "meta": {},
      "componentHeight": 50,
      "componentWidth": 479.2734375,
      "type": "BUTTON_WIDGET",
      "tooltip": "",
      "googleRecaptchaKey": "",
      "iconName": "",
      "__evaluation__": {
        "errors": {
          "borderRadius": [],
          "buttonColor": [],
          "onClick": [],
          "text": [],
          "tooltip": [],
          "isVisible": [],
          "isDisabled": [],
          "animateLoading": [],
          "googleRecaptchaKey": [],
          "recaptchaType": [],
          "disabledWhenInvalid": [],
          "resetFormOnClick": [],
          "buttonVariant": [],
          "iconName": [],
          "placement": [],
          "boxShadow": []
        }
      }
    },
    "calculatedTxt": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "mobileBottomRow": 15,
      "widgetName": "calculatedTxt",
      "topRow": 11,
      "bottomRow": 15,
      "parentRowSpace": 10,
      "mobileRightColumn": 35,
      "animateLoading": true,
      "overflow": "NONE",
      "fontFamily": "System Default",
      "parentColumnSpace": 6.541259765625,
      "leftColumn": 3,
      "shouldTruncate": false,
      "truncateButtonColor": "#553DE9",
      "text": "",
      "key": "lgxpzfcx4b",
      "rightColumn": 60,
      "textAlign": "LEFT",
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "od1swmzxxq",
      "minWidth": 450,
      "isVisible": true,
      "fontStyle": "BOLD",
      "textColor": "#231F20",
      "isLoading": false,
      "mobileTopRow": 11,
      "responsiveBehavior": "fill",
      "originalTopRow": 11,
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 19,
      "maxDynamicHeight": 9000,
      "originalBottomRow": 16,
      "fontSize": "1rem",
      "minDynamicHeight": 4,
      "value": "",
      "meta": {},
      "componentHeight": 40,
      "componentWidth": 372.851806640625,
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
    "Canvas3": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "mobileBottomRow": 100,
      "widgetName": "Canvas3",
      "topRow": 0,
      "bottomRow": 290,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 328.98046875,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "izcc32bkjr",
      "rightColumn": 328.98046875,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "cl2ynw6igw",
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 328.98046875,
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
    "containerActions": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "mobileBottomRow": 11,
      "widgetName": "containerActions",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 1,
      "bottomRow": 30,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 63,
      "animateLoading": true,
      "parentColumnSpace": 13.70751953125,
      "leftColumn": 32,
      "borderWidth": 1,
      "flexVerticalAlignment": "stretch",
      "key": "bv1axpkzaj",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 63,
      "dynamicHeight": "FIXED",
      "widgetId": "dgev9742e2",
      "containerStyle": "card",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 1,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 39,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 290,
      "componentWidth": 424.93310546875,
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
    "Canvas1": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "mobileBottomRow": 100,
      "widgetName": "Canvas1",
      "topRow": 0,
      "bottomRow": 410,
      "parentRowSpace": 1,
      "canExtend": false,
      "minHeight": 100,
      "mobileRightColumn": 430.5,
      "parentColumnSpace": 1,
      "leftColumn": 0,
      "key": "wl4jb57gwi",
      "rightColumn": 430.5,
      "dynamicHeight": "AUTO_HEIGHT",
      "widgetId": "k1ojmo3iid",
      "containerStyle": "none",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 0,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 0,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 4,
      "flexLayers": [],
      "meta": {},
      "componentHeight": 410,
      "componentWidth": 430.5,
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
    "containerRoot": {
      "ENTITY_TYPE": "WIDGET",
      "needsErrorInfo": false,
      "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "mobileBottomRow": 32,
      "widgetName": "containerRoot",
      "borderColor": "#E0DEDE",
      "isCanvas": true,
      "topRow": 22,
      "bottomRow": 63,
      "parentRowSpace": 10,
      "shouldScrollContents": true,
      "mobileRightColumn": 36,
      "animateLoading": true,
      "parentColumnSpace": 17.9375,
      "leftColumn": 12,
      "borderWidth": 1,
      "flexVerticalAlignment": "stretch",
      "key": "1456ozhxit",
      "backgroundColor": "#FFFFFF",
      "rightColumn": 46,
      "dynamicHeight": "FIXED",
      "widgetId": "9e839onva6",
      "containerStyle": "card",
      "minWidth": 450,
      "isVisible": true,
      "isLoading": false,
      "mobileTopRow": 22,
      "responsiveBehavior": "fill",
      "borderRadius": "0.375rem",
      "mobileLeftColumn": 12,
      "maxDynamicHeight": 9000,
      "minDynamicHeight": 10,
      "meta": {},
      "componentHeight": 410,
      "componentWidth": 609.875,
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
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "emptyInstance": false,
        "isAnonymous": false,
        "isEnabled": true,
        "isSuperUser": true,
        "isConfigurable": true,
        "adminSettingsVisible": false,
        "isIntercomConsentGiven": false
      },
      "URL": {
        "fullPath": "https://dev.appsmith.com/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
        "host": "dev.appsmith.com",
        "hostname": "dev.appsmith.com",
        "queryParams": {},
        "protocol": "https:",
        "pathname": "/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
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
          "primaryColor": "#553DE9",
          "backgroundColor": "#F8FAFC"
        },
        "borderRadius": {
          "appBorderRadius": "0.375rem"
        },
        "boxShadow": {
          "appBoxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        },
        "fontFamily": {
          "appFont": "System Default"
        }
      },
      "currentPageName": "Page1",
      "workspaceName": "",
      "appName": "auto-layout",
      "currentEnvironmentName": "",
      "ENTITY_TYPE": "APPSMITH"
    }
  }
}

export const JSObject = {
  "JSObjectName": "localVariables",
  "JSObjectASTParseTime": "4.70 ms"
}

export const evalLog = {
  "timeTakenForSetupFirstTree": {
    "total": "29.40 ms",
    "clone": "0.60 ms",
    "allKeys": "1.20 ms",
    "createDependencyMap": "20.70 ms",
    "sortDependencies": "0.90 ms",
    "parseJSActions": "5.40 ms"
  },
  "dependencies": {
    "localVariables.body": [],
    "localVariables.varCalculated": [],
    "MainContainer.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "MainContainer.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "Input1.inputText": [
      "Input1.meta.inputText",
      "Input1.defaultText"
    ],
    "Input1.text": [
      "Input1.meta.text",
      "Input1.defaultText"
    ],
    "Input1.accentColor": [
      "appsmith.theme.colors.primaryColor"
    ],
    "Input1.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "Input1.value": [
      "Input1.text"
    ],
    "Input1.isValid": [
      "Input1.inputType",
      "Input1.inputText",
      "Input1.isRequired"
    ],
    "Text1.truncateButtonColor": [
      "appsmith.theme.colors.primaryColor"
    ],
    "Text1.fontFamily": [
      "appsmith.theme.fontFamily.appFont"
    ],
    "Text1.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "Text1.text": [
      "Input1.text"
    ],
    "Text1.value": [
      "Text1.text"
    ],
    "Canvas2.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "Canvas2.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "containerPlayground.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "containerPlayground.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "btnCalculate.onClick": [],
    "btnCalculate.buttonColor": [
      "appsmith.theme.colors.primaryColor"
    ],
    "btnCalculate.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "calculatedTxt.truncateButtonColor": [
      "appsmith.theme.colors.primaryColor"
    ],
    "calculatedTxt.fontFamily": [
      "appsmith.theme.fontFamily.appFont"
    ],
    "calculatedTxt.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "calculatedTxt.text": [
      "localVariables.varCalculated"
    ],
    "calculatedTxt.value": [
      "calculatedTxt.text"
    ],
    "Canvas3.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "Canvas3.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "containerActions.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "containerActions.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "Canvas1.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "Canvas1.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "containerRoot.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "containerRoot.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "localVariables": [
      "localVariables.body",
      "localVariables.varCalculated"
    ],
    "MainContainer": [
      "MainContainer.borderRadius",
      "MainContainer.boxShadow"
    ],
    "appsmith.theme.borderRadius": [
      "appsmith.theme.borderRadius.appBorderRadius"
    ],
    "appsmith.theme": [
      "appsmith.theme.borderRadius",
      "appsmith.theme.boxShadow",
      "appsmith.theme.colors",
      "appsmith.theme.fontFamily"
    ],
    "appsmith": [
      "appsmith.theme"
    ],
    "appsmith.theme.boxShadow": [
      "appsmith.theme.boxShadow.appBoxShadow"
    ],
    "Input1": [
      "Input1.inputText",
      "Input1.meta",
      "Input1.defaultText",
      "Input1.text",
      "Input1.accentColor",
      "Input1.borderRadius",
      "Input1.value",
      "Input1.isValid",
      "Input1.inputType",
      "Input1.isRequired"
    ],
    "Input1.meta": [
      "Input1.meta.inputText",
      "Input1.meta.text"
    ],
    "appsmith.theme.colors": [
      "appsmith.theme.colors.primaryColor"
    ],
    "Text1": [
      "Text1.truncateButtonColor",
      "Text1.fontFamily",
      "Text1.borderRadius",
      "Text1.text",
      "Text1.value"
    ],
    "appsmith.theme.fontFamily": [
      "appsmith.theme.fontFamily.appFont"
    ],
    "Canvas2": [
      "Canvas2.borderRadius",
      "Canvas2.boxShadow"
    ],
    "containerPlayground": [
      "containerPlayground.borderRadius",
      "containerPlayground.boxShadow"
    ],
    "btnCalculate": [
      "btnCalculate.onClick",
      "btnCalculate.buttonColor",
      "btnCalculate.borderRadius"
    ],
    "calculatedTxt": [
      "calculatedTxt.truncateButtonColor",
      "calculatedTxt.fontFamily",
      "calculatedTxt.borderRadius",
      "calculatedTxt.text",
      "calculatedTxt.value"
    ],
    "Canvas3": [
      "Canvas3.borderRadius",
      "Canvas3.boxShadow"
    ],
    "containerActions": [
      "containerActions.borderRadius",
      "containerActions.boxShadow"
    ],
    "Canvas1": [
      "Canvas1.borderRadius",
      "Canvas1.boxShadow"
    ],
    "containerRoot": [
      "containerRoot.borderRadius",
      "containerRoot.boxShadow"
    ]
  },
  "inverseDependencies": {
    "appsmith.theme.borderRadius.appBorderRadius": [
      "MainContainer.borderRadius",
      "Input1.borderRadius",
      "Text1.borderRadius",
      "Canvas2.borderRadius",
      "containerPlayground.borderRadius",
      "btnCalculate.borderRadius",
      "calculatedTxt.borderRadius",
      "Canvas3.borderRadius",
      "containerActions.borderRadius",
      "Canvas1.borderRadius",
      "containerRoot.borderRadius",
      "appsmith.theme.borderRadius"
    ],
    "appsmith.theme.boxShadow.appBoxShadow": [
      "MainContainer.boxShadow",
      "Canvas2.boxShadow",
      "containerPlayground.boxShadow",
      "Canvas3.boxShadow",
      "containerActions.boxShadow",
      "Canvas1.boxShadow",
      "containerRoot.boxShadow",
      "appsmith.theme.boxShadow"
    ],
    "Input1.meta.inputText": [
      "Input1.inputText",
      "Input1.meta"
    ],
    "Input1.defaultText": [
      "Input1.inputText",
      "Input1.text",
      "Input1"
    ],
    "Input1.meta.text": [
      "Input1.text",
      "Input1.meta"
    ],
    "appsmith.theme.colors.primaryColor": [
      "Input1.accentColor",
      "Text1.truncateButtonColor",
      "btnCalculate.buttonColor",
      "calculatedTxt.truncateButtonColor",
      "appsmith.theme.colors"
    ],
    "Input1.text": [
      "Input1.value",
      "Text1.text",
      "Input1"
    ],
    "Input1.inputType": [
      "Input1.isValid",
      "Input1"
    ],
    "Input1.inputText": [
      "Input1.isValid",
      "Input1"
    ],
    "Input1.isRequired": [
      "Input1.isValid",
      "Input1"
    ],
    "appsmith.theme.fontFamily.appFont": [
      "Text1.fontFamily",
      "calculatedTxt.fontFamily",
      "appsmith.theme.fontFamily"
    ],
    "Text1.text": [
      "Text1.value",
      "Text1"
    ],
    "localVariables.varCalculated": [
      "calculatedTxt.text",
      "localVariables"
    ],
    "calculatedTxt.text": [
      "calculatedTxt.value",
      "calculatedTxt"
    ],
    "localVariables.body": [
      "localVariables"
    ],
    "MainContainer.borderRadius": [
      "MainContainer"
    ],
    "appsmith.theme.borderRadius": [
      "appsmith.theme"
    ],
    "appsmith.theme": [
      "appsmith"
    ],
    "MainContainer.boxShadow": [
      "MainContainer"
    ],
    "appsmith.theme.boxShadow": [
      "appsmith.theme"
    ],
    "Input1.meta": [
      "Input1"
    ],
    "Input1.accentColor": [
      "Input1"
    ],
    "appsmith.theme.colors": [
      "appsmith.theme"
    ],
    "Input1.borderRadius": [
      "Input1"
    ],
    "Input1.value": [
      "Input1"
    ],
    "Input1.isValid": [
      "Input1"
    ],
    "Text1.truncateButtonColor": [
      "Text1"
    ],
    "Text1.fontFamily": [
      "Text1"
    ],
    "appsmith.theme.fontFamily": [
      "appsmith.theme"
    ],
    "Text1.borderRadius": [
      "Text1"
    ],
    "Text1.value": [
      "Text1"
    ],
    "Canvas2.borderRadius": [
      "Canvas2"
    ],
    "Canvas2.boxShadow": [
      "Canvas2"
    ],
    "containerPlayground.borderRadius": [
      "containerPlayground"
    ],
    "containerPlayground.boxShadow": [
      "containerPlayground"
    ],
    "btnCalculate.onClick": [
      "btnCalculate"
    ],
    "btnCalculate.buttonColor": [
      "btnCalculate"
    ],
    "btnCalculate.borderRadius": [
      "btnCalculate"
    ],
    "calculatedTxt.truncateButtonColor": [
      "calculatedTxt"
    ],
    "calculatedTxt.fontFamily": [
      "calculatedTxt"
    ],
    "calculatedTxt.borderRadius": [
      "calculatedTxt"
    ],
    "calculatedTxt.value": [
      "calculatedTxt"
    ],
    "Canvas3.borderRadius": [
      "Canvas3"
    ],
    "Canvas3.boxShadow": [
      "Canvas3"
    ],
    "containerActions.borderRadius": [
      "containerActions"
    ],
    "containerActions.boxShadow": [
      "containerActions"
    ],
    "Canvas1.borderRadius": [
      "Canvas1"
    ],
    "Canvas1.boxShadow": [
      "Canvas1"
    ],
    "containerRoot.borderRadius": [
      "containerRoot"
    ],
    "containerRoot.boxShadow": [
      "containerRoot"
    ]
  }
}

export const DATASOURCE_SCHEMA_FETCH = [
  {
    "datasourceId": "68a9b823de8cf11f80e4a8a8",
    "pluginName": "MongoDB",
    "environmentId": "unused_env",
    "environmentName": "",
    "errorMessage": "",
    "isSuccess": true,
    "instanceId": "68a9b7e8de8cf11f80e4a873",
    "version": "v1.85",
    "userData": {
      "userId": "444bda9ee3d31919a88c50348bbf173d2a7490eef306fa5418e230855bbc837a",
      "source": "ce"
    }
  },
  {
    "datasourceId": "68a9b831de8cf11f80e4a8ad",
    "pluginName": "PostgreSQL",
    "environmentId": "unused_env",
    "environmentName": "",
    "errorMessage": "",
    "isSuccess": true,
    "instanceId": "68a9b7e8de8cf11f80e4a873",
    "version": "v1.85",
    "userData": {
      "userId": "444bda9ee3d31919a88c50348bbf173d2a7490eef306fa5418e230855bbc837a",
      "source": "ce"
    }
  },
  {
    "datasourceId": "68a9b8c0de8cf11f80e4a8b3",
    "pluginName": "PostgreSQL",
    "environmentId": "unused_env",
    "environmentName": "",
    "errorMessage": "",
    "isSuccess": true,
    "instanceId": "68a9b7e8de8cf11f80e4a873",
    "version": "v1.85",
    "userData": {
      "userId": "444bda9ee3d31919a88c50348bbf173d2a7490eef306fa5418e230855bbc837a",
      "source": "ce"
    }
  }
]
