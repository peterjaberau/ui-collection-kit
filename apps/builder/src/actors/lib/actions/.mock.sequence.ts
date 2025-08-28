// onClick Action

const reduxData = [
  {
    type: "BATCHED_UPDATE",
    payload: {
      type: "EXECUTE_TRIGGER_REQUEST",
      payload: {
        triggerPropertyName: "onClick",
        dynamicString: "{{storeValue('varCalculated', Input1.text)}}",
        event: {
          type: "ON_CLICK",
        },
        source: {
          id: "tl8xbeqhua",
          name: "btnCalculate",
        },
      },
    },
  },
  {
    type: "EXECUTE_BATCH",
  },
  {
    type: "DEBUGGER_LOG_INIT",
    payload: [
      {
        text: "Event onClick fired",
        source: {
          type: "WIDGET",
          id: "tl8xbeqhua",
          name: "btnCalculate",
        },
        severity: "info",
        timestamp: "1756362355653",
        category: "PLATFORM_GENERATED",
        occurrenceCount: 1,
        isExpanded: false,
      },
    ],
  },
  {
    type: "DEBUGGER_LOG",
    payload: [
      {
        text: "Event onClick fired",
        source: {
          type: "WIDGET",
          id: "tl8xbeqhua",
          name: "btnCalculate",
        },
        severity: "info",
        timestamp: "1756362355653",
        category: "PLATFORM_GENERATED",
        occurrenceCount: 1,
        isExpanded: false,
      },
    ],
  },
  {
    type: "EXECUTE_TRIGGER_REQUEST",
    payload: {
      triggerPropertyName: "onClick",
      dynamicString: "{{storeValue('varCalculated', Input1.text)}}",
      event: {
        type: "ON_CLICK",
      },
      source: {
        id: "tl8xbeqhua",
        name: "btnCalculate",
      },
    },
  },
  {
    type: "DEBUGGER_DELETE_ERROR_LOG_INIT",
    payload: [
      {
        id: "tl8xbeqhua-onClick",
      },
    ],
  },
  {
    type: "BATCH_UPDATES_SUCCESS",
    payload: [
      {
        type: "EXECUTE_TRIGGER_REQUEST",
        payload: {
          triggerPropertyName: "onClick",
          dynamicString: "{{storeValue('varCalculated', Input1.text)}}",
          event: {
            type: "ON_CLICK",
          },
          source: {
            id: "tl8xbeqhua",
            name: "btnCalculate",
          },
        },
      },
    ],
  },
  {
    type: "SET_EVALUATED_TREE",
    payload: null,
  },
  {
    type: "SET_LOADING_ENTITIES",
    payload: {},
  },
  {
    type: "SET_EVALUATION_INVERSE_DEPENDENCY_MAP",
    payload: {
      inverseDependencyMap: {
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
          "appsmith.theme.borderRadius",
        ],
        "appsmith.theme.boxShadow.appBoxShadow": [
          "MainContainer.boxShadow",
          "Canvas2.boxShadow",
          "containerPlayground.boxShadow",
          "Canvas3.boxShadow",
          "containerActions.boxShadow",
          "Canvas1.boxShadow",
          "containerRoot.boxShadow",
          "appsmith.theme.boxShadow",
        ],
        "Input1.meta.inputText": ["Input1.inputText", "Input1.meta"],
        "Input1.defaultText": ["Input1.inputText", "Input1.text", "Input1"],
        "Input1.meta.text": ["Input1.text", "Input1.meta"],
        "appsmith.theme.colors.primaryColor": [
          "Input1.accentColor",
          "Text1.truncateButtonColor",
          "btnCalculate.buttonColor",
          "calculatedTxt.truncateButtonColor",
          "appsmith.theme.colors",
        ],
        "Input1.text": ["Input1.value", "Text1.text", "Input1"],
        "Input1.inputType": ["Input1.isValid", "Input1"],
        "Input1.inputText": ["Input1.isValid", "Input1"],
        "Input1.isRequired": ["Input1.isValid", "Input1"],
        "appsmith.theme.fontFamily.appFont": [
          "Text1.fontFamily",
          "calculatedTxt.fontFamily",
          "appsmith.theme.fontFamily",
        ],
        "Text1.text": ["Text1.value", "Text1"],
        "appsmith.store.varCalculated": ["calculatedTxt.text", "appsmith.store"],
        "calculatedTxt.text": ["calculatedTxt.value", "calculatedTxt"],
        "localVariables.body": ["localVariables"],
        "localVariables.varCalculated": ["localVariables"],
        "MainContainer.borderRadius": ["MainContainer"],
        "appsmith.theme.borderRadius": ["appsmith.theme"],
        "appsmith.theme": ["appsmith"],
        "MainContainer.boxShadow": ["MainContainer"],
        "appsmith.theme.boxShadow": ["appsmith.theme"],
        "Input1.meta": ["Input1"],
        "Input1.accentColor": ["Input1"],
        "appsmith.theme.colors": ["appsmith.theme"],
        "Input1.borderRadius": ["Input1"],
        "Input1.value": ["Input1"],
        "Input1.isValid": ["Input1"],
        "Text1.truncateButtonColor": ["Text1"],
        "Text1.fontFamily": ["Text1"],
        "appsmith.theme.fontFamily": ["appsmith.theme"],
        "Text1.borderRadius": ["Text1"],
        "Text1.value": ["Text1"],
        "Canvas2.borderRadius": ["Canvas2"],
        "Canvas2.boxShadow": ["Canvas2"],
        "containerPlayground.borderRadius": ["containerPlayground"],
        "containerPlayground.boxShadow": ["containerPlayground"],
        "btnCalculate.onClick": ["btnCalculate"],
        "btnCalculate.buttonColor": ["btnCalculate"],
        "btnCalculate.borderRadius": ["btnCalculate"],
        "calculatedTxt.truncateButtonColor": ["calculatedTxt"],
        "calculatedTxt.fontFamily": ["calculatedTxt"],
        "calculatedTxt.borderRadius": ["calculatedTxt"],
        "appsmith.store": ["appsmith"],
        "calculatedTxt.value": ["calculatedTxt"],
        "Canvas3.borderRadius": ["Canvas3"],
        "Canvas3.boxShadow": ["Canvas3"],
        "containerActions.borderRadius": ["containerActions"],
        "containerActions.boxShadow": ["containerActions"],
        "Canvas1.borderRadius": ["Canvas1"],
        "Canvas1.boxShadow": ["Canvas1"],
        "containerRoot.borderRadius": ["containerRoot"],
        "containerRoot.boxShadow": ["containerRoot"],
      },
    },
  },
  {
    type: "EXECUTE_JS_UPDATES",
    payload: {},
  },
  {
    type: "UPDATE_APP_STORE",
    payload: {
      varCalculated: "",
      varTxt: "dddd",
      "": "dddd",
    },
  },
  {
    type: "DEBUGGER_LOG",
    payload: [
      {
        text: "storeValue triggered",
        state: {
          key: "varCalculated",
          value: "",
          persist: true,
        },
        severity: "info",
        category: "PLATFORM_GENERATED",
        timestamp: "1756362355721",
        isExpanded: false,
      },
    ],
  },
  {
    type: "SET_EVALUATED_TREE",
    payload: null,
  },
  {
    type: "SET_LOADING_ENTITIES",
    payload: {},
  },
  {
    type: "SET_EVALUATION_INVERSE_DEPENDENCY_MAP",
    payload: {
      inverseDependencyMap: {
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
          "appsmith.theme.borderRadius",
        ],
        "appsmith.theme.boxShadow.appBoxShadow": [
          "MainContainer.boxShadow",
          "Canvas2.boxShadow",
          "containerPlayground.boxShadow",
          "Canvas3.boxShadow",
          "containerActions.boxShadow",
          "Canvas1.boxShadow",
          "containerRoot.boxShadow",
          "appsmith.theme.boxShadow",
        ],
        "Input1.meta.inputText": ["Input1.inputText", "Input1.meta"],
        "Input1.defaultText": ["Input1.inputText", "Input1.text", "Input1"],
        "Input1.meta.text": ["Input1.text", "Input1.meta"],
        "appsmith.theme.colors.primaryColor": [
          "Input1.accentColor",
          "Text1.truncateButtonColor",
          "btnCalculate.buttonColor",
          "calculatedTxt.truncateButtonColor",
          "appsmith.theme.colors",
        ],
        "Input1.text": ["Input1.value", "Text1.text", "Input1"],
        "Input1.inputType": ["Input1.isValid", "Input1"],
        "Input1.inputText": ["Input1.isValid", "Input1"],
        "Input1.isRequired": ["Input1.isValid", "Input1"],
        "appsmith.theme.fontFamily.appFont": [
          "Text1.fontFamily",
          "calculatedTxt.fontFamily",
          "appsmith.theme.fontFamily",
        ],
        "Text1.text": ["Text1.value", "Text1"],
        "appsmith.store.varCalculated": ["calculatedTxt.text", "appsmith.store"],
        "calculatedTxt.text": ["calculatedTxt.value", "calculatedTxt"],
        "localVariables.body": ["localVariables"],
        "localVariables.varCalculated": ["localVariables"],
        "MainContainer.borderRadius": ["MainContainer"],
        "appsmith.theme.borderRadius": ["appsmith.theme"],
        "appsmith.theme": ["appsmith"],
        "MainContainer.boxShadow": ["MainContainer"],
        "appsmith.theme.boxShadow": ["appsmith.theme"],
        "Input1.meta": ["Input1"],
        "Input1.accentColor": ["Input1"],
        "appsmith.theme.colors": ["appsmith.theme"],
        "Input1.borderRadius": ["Input1"],
        "Input1.value": ["Input1"],
        "Input1.isValid": ["Input1"],
        "Text1.truncateButtonColor": ["Text1"],
        "Text1.fontFamily": ["Text1"],
        "appsmith.theme.fontFamily": ["appsmith.theme"],
        "Text1.borderRadius": ["Text1"],
        "Text1.value": ["Text1"],
        "Canvas2.borderRadius": ["Canvas2"],
        "Canvas2.boxShadow": ["Canvas2"],
        "containerPlayground.borderRadius": ["containerPlayground"],
        "containerPlayground.boxShadow": ["containerPlayground"],
        "btnCalculate.onClick": ["btnCalculate"],
        "btnCalculate.buttonColor": ["btnCalculate"],
        "btnCalculate.borderRadius": ["btnCalculate"],
        "calculatedTxt.truncateButtonColor": ["calculatedTxt"],
        "calculatedTxt.fontFamily": ["calculatedTxt"],
        "calculatedTxt.borderRadius": ["calculatedTxt"],
        "appsmith.store": ["appsmith"],
        "calculatedTxt.value": ["calculatedTxt"],
        "Canvas3.borderRadius": ["Canvas3"],
        "Canvas3.boxShadow": ["Canvas3"],
        "containerActions.borderRadius": ["containerActions"],
        "containerActions.boxShadow": ["containerActions"],
        "Canvas1.borderRadius": ["Canvas1"],
        "Canvas1.boxShadow": ["Canvas1"],
        "containerRoot.borderRadius": ["containerRoot"],
        "containerRoot.boxShadow": ["containerRoot"],
      },
    },
  },
  {
    type: "EXECUTE_JS_UPDATES",
    payload: {},
  },
]

const consoleData = [
  {
    ActionExecutionSagas: [
      {
        executeAppAction: {
          dynamicString: "{{storeValue('varCalculated', Input1.text)}}",
        },
      },
    ],
  },

  {
    EvaluationsSaga: [
      {
        evaluateAndExecuteDynamicTrigger: {
          execute: "{{storeValue('varCalculated', Input1.text)}}",
        },
      },
      {
        837: {
          action: {
            type: "BATCH_UPDATES_SUCCESS",
            payload: [
              {
                type: "EXECUTE_TRIGGER_REQUEST",
                payload: {
                  triggerPropertyName: "onClick",
                  dynamicString: "{{storeValue('varCalculated', Input1.text)}}",
                  event: {
                    type: "ON_CLICK",
                  },
                  source: {
                    id: "tl8xbeqhua",
                    name: "btnCalculate",
                  },
                },
              },
            ],
          },
          triggeredLinting: false,
          triggeredEvaluation: false,
        },
      },
      {
        273: {
          evalMetaUpdatesLength: 0,
        },
      },
      {
        277: {
          jsUpdates: {},
        },
      },
      {
        278: {
          dataTree: {
            localVariables: {
              varCalculated: "",
              body: "export default {\n\tvarCalculated: '',\n}",
              ENTITY_TYPE: "JSACTION",
              actionId: "68ad40c7d8deff53ee07277d",
              __evaluation__: {
                errors: {
                  varCalculated: [],
                  body: [],
                },
              },
            },
            MainContainer: {
              ENTITY_TYPE: "WIDGET",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              widgetName: "MainContainer",
              backgroundColor: "none",
              rightColumn: 4896,
              snapColumns: 64,
              widgetId: "0",
              topRow: 0,
              bottomRow: 630,
              containerStyle: "none",
              snapRows: 124,
              parentRowSpace: 1,
              canExtend: true,
              minHeight: 1292,
              parentColumnSpace: 1,
              leftColumn: 0,
              borderRadius: "0.375rem",
              meta: {},
              isLoading: false,
              componentHeight: 630,
              componentWidth: 4896,
              type: "CANVAS_WIDGET",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            Input1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "none",
              mobileBottomRow: 10,
              widgetName: "Input1",
              topRow: 1,
              bottomRow: 8,
              parentRowSpace: 10,
              labelWidth: 5,
              autoFocus: false,
              mobileRightColumn: 35,
              animateLoading: true,
              parentColumnSpace: 6.541259765625,
              resetOnSubmit: true,
              leftColumn: 1,
              labelPosition: "Top",
              labelStyle: "",
              inputType: "TEXT",
              isDisabled: false,
              key: "z6mkd60niu",
              labelTextSize: "0.875rem",
              isRequired: false,
              rightColumn: 60,
              dynamicHeight: "FIXED",
              widgetId: "9nft85pms1",
              accentColor: "#553DE9",
              showStepArrows: false,
              minWidth: 450,
              isVisible: true,
              label: "Label",
              labelAlignment: "left",
              isLoading: false,
              mobileTopRow: 3,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 15,
              maxDynamicHeight: 9000,
              iconAlign: "left",
              defaultText: "",
              minDynamicHeight: 4,
              value: "",
              isValid: true,
              text: "",
              isDirty: false,
              inputText: "",
              meta: {
                text: "",
                inputText: "",
              },
              componentHeight: 70,
              componentWidth: 385.934326171875,
              type: "INPUT_WIDGET_V2",
              regex: "",
              validation: true,
              errorMessage: "",
              tooltip: "",
              placeholderText: "",
              iconName: "",
              labelTextColor: "",
              __evaluation__: {
                errors: {
                  defaultText: [],
                  "meta.text": [],
                  text: [],
                  "meta.inputText": [],
                  meta: [],
                  isRequired: [],
                  inputType: [],
                  inputText: [],
                  isValid: [],
                  value: [],
                  borderRadius: [],
                  accentColor: [],
                  label: [],
                  maxChars: [],
                  regex: [],
                  validation: [],
                  errorMessage: [],
                  isSpellCheck: [],
                  tooltip: [],
                  placeholderText: [],
                  isVisible: [],
                  isDisabled: [],
                  animateLoading: [],
                  autoFocus: [],
                  resetOnSubmit: [],
                  iconName: [],
                  labelTextColor: [],
                  labelTextSize: [],
                  labelStyle: [],
                  boxShadow: [],
                },
              },
            },
            Text1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              mobileBottomRow: 15,
              widgetName: "Text1",
              topRow: 11,
              bottomRow: 15,
              parentRowSpace: 10,
              mobileRightColumn: 35,
              animateLoading: true,
              overflow: "NONE",
              fontFamily: "System Default",
              parentColumnSpace: 6.541259765625,
              leftColumn: 2,
              shouldTruncate: false,
              truncateButtonColor: "#553DE9",
              text: "current value is: -",
              key: "lgxpzfcx4b",
              rightColumn: 59,
              textAlign: "LEFT",
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "kwdcw234sl",
              minWidth: 450,
              isVisible: true,
              fontStyle: "BOLD",
              textColor: "#231F20",
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              originalTopRow: 11,
              borderRadius: "0.375rem",
              mobileLeftColumn: 19,
              maxDynamicHeight: 9000,
              originalBottomRow: 16,
              fontSize: "1rem",
              minDynamicHeight: 4,
              value: "current value is: -",
              meta: {},
              componentHeight: 40,
              componentWidth: 372.851806640625,
              type: "TEXT_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  text: [],
                  value: [],
                  borderRadius: [],
                  fontFamily: [],
                  truncateButtonColor: [],
                  isVisible: [],
                  animateLoading: [],
                  disableLink: [],
                  fontSize: [],
                  textColor: [],
                  backgroundColor: [],
                  borderColor: [],
                  textAlign: [],
                  fontStyle: [],
                  borderWidth: [],
                },
              },
            },
            Canvas2: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 100,
              widgetName: "Canvas2",
              topRow: 0,
              bottomRow: 290,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 328.98046875,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "izcc32bkjr",
              rightColumn: 328.98046875,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "256n68mv3w",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 290,
              componentWidth: 328.98046875,
              type: "CANVAS_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            containerPlayground: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 21,
              widgetName: "containerPlayground",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 1,
              bottomRow: 30,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 25,
              animateLoading: true,
              parentColumnSpace: 13.70751953125,
              leftColumn: 0,
              borderWidth: 1,
              flexVerticalAlignment: "stretch",
              key: "bv1axpkzaj",
              backgroundColor: "#FFFFFF",
              rightColumn: 32,
              dynamicHeight: "FIXED",
              widgetId: "0j3cs5153j",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 1,
              maxDynamicHeight: 12,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 290,
              componentWidth: 438.640625,
              type: "CONTAINER_WIDGET",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            btnCalculate: {
              ENTITY_TYPE: "WIDGET",
              resetFormOnClick: false,
              needsErrorInfo: false,
              boxShadow: "none",
              mobileBottomRow: 11,
              widgetName: "btnCalculate",
              onClick: "{{storeValue('varCalculated', Input1.text)}}",
              buttonColor: "#553DE9",
              topRow: 4,
              bottomRow: 9,
              parentRowSpace: 10,
              mobileRightColumn: 25,
              animateLoading: true,
              parentColumnSpace: 9.216796875,
              leftColumn: 5,
              text: "Calculate",
              isDisabled: false,
              key: "c32rx365fx",
              rightColumn: 57,
              isDefaultClickDisabled: true,
              widgetId: "tl8xbeqhua",
              minWidth: 120,
              isVisible: true,
              recaptchaType: "V3",
              isLoading: false,
              mobileTopRow: 7,
              responsiveBehavior: "hug",
              disabledWhenInvalid: false,
              borderRadius: "0.375rem",
              mobileLeftColumn: 9,
              buttonVariant: "PRIMARY",
              placement: "CENTER",
              meta: {},
              componentHeight: 50,
              componentWidth: 479.2734375,
              type: "BUTTON_WIDGET",
              tooltip: "",
              googleRecaptchaKey: "",
              iconName: "",
              __evaluation__: {
                errors: {
                  borderRadius: [],
                  buttonColor: [],
                  onClick: [],
                  text: [],
                  tooltip: [],
                  isVisible: [],
                  isDisabled: [],
                  animateLoading: [],
                  googleRecaptchaKey: [],
                  recaptchaType: [],
                  disabledWhenInvalid: [],
                  resetFormOnClick: [],
                  buttonVariant: [],
                  iconName: [],
                  placement: [],
                  boxShadow: [],
                },
              },
            },
            calculatedTxt: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              mobileBottomRow: 15,
              widgetName: "calculatedTxt",
              topRow: 11,
              bottomRow: 15,
              parentRowSpace: 10,
              mobileRightColumn: 35,
              animateLoading: true,
              overflow: "NONE",
              fontFamily: "System Default",
              parentColumnSpace: 6.541259765625,
              leftColumn: 5,
              shouldTruncate: false,
              truncateButtonColor: "#553DE9",
              text: "",
              key: "lgxpzfcx4b",
              rightColumn: 62,
              textAlign: "LEFT",
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "od1swmzxxq",
              minWidth: 450,
              isVisible: true,
              fontStyle: "BOLD",
              textColor: "#231F20",
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              originalTopRow: 11,
              borderRadius: "0.375rem",
              mobileLeftColumn: 19,
              maxDynamicHeight: 9000,
              originalBottomRow: 15,
              fontSize: "1rem",
              minDynamicHeight: 4,
              value: "",
              meta: {},
              componentHeight: 40,
              componentWidth: 372.851806640625,
              type: "TEXT_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  text: [],
                  value: [],
                  borderRadius: [],
                  fontFamily: [],
                  truncateButtonColor: [],
                  isVisible: [],
                  animateLoading: [],
                  disableLink: [],
                  fontSize: [],
                  textColor: [],
                  backgroundColor: [],
                  borderColor: [],
                  textAlign: [],
                  fontStyle: [],
                  borderWidth: [],
                },
              },
            },
            Canvas3: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 100,
              widgetName: "Canvas3",
              topRow: 0,
              bottomRow: 290,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 328.98046875,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "izcc32bkjr",
              rightColumn: 328.98046875,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "cl2ynw6igw",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 290,
              componentWidth: 328.98046875,
              type: "CANVAS_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            containerActions: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 11,
              widgetName: "containerActions",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 1,
              bottomRow: 30,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 63,
              animateLoading: true,
              parentColumnSpace: 13.70751953125,
              leftColumn: 32,
              borderWidth: 1,
              flexVerticalAlignment: "stretch",
              key: "bv1axpkzaj",
              backgroundColor: "#FFFFFF",
              rightColumn: 63,
              dynamicHeight: "FIXED",
              widgetId: "dgev9742e2",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 1,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 39,
              maxDynamicHeight: 9000,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 290,
              componentWidth: 424.93310546875,
              type: "CONTAINER_WIDGET",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            Canvas1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 100,
              widgetName: "Canvas1",
              topRow: 0,
              bottomRow: 410,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 430.5,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "wl4jb57gwi",
              rightColumn: 430.5,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "k1ojmo3iid",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 410,
              componentWidth: 430.5,
              type: "CANVAS_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            containerRoot: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 32,
              widgetName: "containerRoot",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 22,
              bottomRow: 63,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 36,
              animateLoading: true,
              parentColumnSpace: 17.9375,
              leftColumn: 12,
              borderWidth: 1,
              flexVerticalAlignment: "stretch",
              key: "1456ozhxit",
              backgroundColor: "#FFFFFF",
              rightColumn: 46,
              dynamicHeight: "FIXED",
              widgetId: "9e839onva6",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 22,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 12,
              maxDynamicHeight: 9000,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 410,
              componentWidth: 609.875,
              type: "CONTAINER_WIDGET",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            appsmith: {
              user: {
                email: "peterjaberau@gmail.com",
                username: "peterjaberau@gmail.com",
                name: "Peter Jaber",
                useCase: "personal project",
                enableTelemetry: true,
                roles: ["Upgrade to business plan to access roles and groups for conditional business logic"],
                groups: ["Upgrade to business plan to access roles and groups for conditional business logic"],
                accountNonExpired: true,
                accountNonLocked: true,
                credentialsNonExpired: true,
                emptyInstance: false,
                isAnonymous: false,
                isEnabled: true,
                isSuperUser: true,
                isConfigurable: true,
                adminSettingsVisible: false,
                isIntercomConsentGiven: false,
              },
              URL: {
                fullPath:
                  "https://dev.appsmith.com/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
                host: "dev.appsmith.com",
                hostname: "dev.appsmith.com",
                queryParams: {},
                protocol: "https:",
                pathname: "/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
                port: "",
                hash: "",
              },
              store: {
                varCalculated: "",
                varTxt: "dddd",
                "": "dddd",
              },
              geolocation: {
                canBeRequested: true,
                currentPosition: {},
              },
              workflows: {},
              mode: "EDIT",
              theme: {
                colors: {
                  primaryColor: "#553DE9",
                  backgroundColor: "#F8FAFC",
                },
                borderRadius: {
                  appBorderRadius: "0.375rem",
                },
                boxShadow: {
                  appBoxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                },
                fontFamily: {
                  appFont: "System Default",
                },
              },
              currentPageName: "Page1",
              workspaceName: "Peter's apps",
              appName: "auto-layout",
              currentEnvironmentName: "",
              ENTITY_TYPE: "APPSMITH",
            },
          },
        },
      },
      {
        837: {
          action: {
            type: "UPDATE_APP_STORE",
            payload: {
              varCalculated: "",
              varTxt: "dddd",
              "": "dddd",
            },
          },
          triggeredLinting: false,
          triggeredEvaluation: true,
        },
      },
      {
        375: {
          unevalTree: {
            localVariables: {
              varCalculated: "''",
              body: "export default {\n\tvarCalculated: '',\n}",
              ENTITY_TYPE: "JSACTION",
              actionId: "68ad40c7d8deff53ee07277d",
            },
            MainContainer: {
              ENTITY_TYPE: "WIDGET",
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              widgetName: "MainContainer",
              backgroundColor: "none",
              rightColumn: 4896,
              snapColumns: 64,
              widgetId: "0",
              topRow: 0,
              bottomRow: 630,
              containerStyle: "none",
              snapRows: 124,
              parentRowSpace: 1,
              canExtend: true,
              minHeight: 1292,
              parentColumnSpace: 1,
              leftColumn: 0,
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              meta: {},
              isLoading: false,
              componentHeight: 630,
              componentWidth: 4896,
              type: "CANVAS_WIDGET",
            },
            Input1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "none",
              mobileBottomRow: 10,
              widgetName: "Input1",
              topRow: 1,
              bottomRow: 8,
              parentRowSpace: 10,
              labelWidth: 5,
              autoFocus: false,
              mobileRightColumn: 35,
              animateLoading: true,
              parentColumnSpace: 6.541259765625,
              resetOnSubmit: true,
              leftColumn: 1,
              labelPosition: "Top",
              labelStyle: "",
              inputType: "TEXT",
              isDisabled: false,
              key: "z6mkd60niu",
              labelTextSize: "0.875rem",
              isRequired: false,
              rightColumn: 60,
              dynamicHeight: "FIXED",
              widgetId: "9nft85pms1",
              accentColor: "{{appsmith.theme.colors.primaryColor}}",
              showStepArrows: false,
              minWidth: 450,
              isVisible: true,
              label: "Label",
              labelAlignment: "left",
              isLoading: false,
              mobileTopRow: 3,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 15,
              maxDynamicHeight: 9000,
              iconAlign: "left",
              defaultText: "",
              minDynamicHeight: 4,
              value: "{{Input1.text}}",
              isValid:
                '{{(() => {let hasValidValue, value, isEmpty;    switch (Input1.inputType) {      case "NUMBER":        try {          isEmpty = _.isNil(Input1.inputText) || Input1.inputText === "";          value = isEmpty ? null : Number(Input1.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case "TEXT":      case "MULTI_LINE_TEXT":      case "EMAIL":      case "PASSWORD":        value = Input1.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = Input1.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!Input1.isRequired && isEmpty) {      return true;    }    if (Input1.isRequired && !hasValidValue) {      return false;    }    if (typeof Input1.validation === "boolean" && !Input1.validation) {      return false;    }    let parsedRegex = null;    if (Input1.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into ["/test/gi", "/", "test", "gi"]       */      const regexParts = Input1.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(Input1.regex);      } else {        /*         * if we don\'t have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(Input1.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (Input1.inputType) {      case "EMAIL":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(Input1.inputText);        } else {          return true;        }      case "TEXT":      case "MULTI_LINE_TEXT":      case "PASSWORD":        if (parsedRegex) {          return parsedRegex.test(Input1.inputText);        } else {          return hasValidValue;        }      case "NUMBER":        if (          !_.isNil(value) &&          !_.isNil(Input1.maxNum) &&          Number.isFinite(Input1.maxNum) &&          Input1.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(Input1.minNum) &&          Number.isFinite(Input1.minNum) &&          Input1.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(Input1.inputText);        } else {          return hasValidValue;        }    }})()}}',
              text: "",
              isDirty: false,
              inputText: "",
              meta: {
                text: "",
                inputText: "",
              },
              componentHeight: 70,
              componentWidth: 385.934326171875,
              type: "INPUT_WIDGET_V2",
            },
            Text1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              mobileBottomRow: 15,
              widgetName: "Text1",
              topRow: 11,
              bottomRow: 15,
              parentRowSpace: 10,
              mobileRightColumn: 35,
              animateLoading: true,
              overflow: "NONE",
              fontFamily: "{{appsmith.theme.fontFamily.appFont}}",
              parentColumnSpace: 6.541259765625,
              leftColumn: 2,
              shouldTruncate: false,
              truncateButtonColor: "{{appsmith.theme.colors.primaryColor}}",
              text: 'current value is: {{Input1.text ? Input1.text : "-"}}',
              key: "lgxpzfcx4b",
              rightColumn: 59,
              textAlign: "LEFT",
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "kwdcw234sl",
              minWidth: 450,
              isVisible: true,
              fontStyle: "BOLD",
              textColor: "#231F20",
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              originalTopRow: 11,
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 19,
              maxDynamicHeight: 9000,
              originalBottomRow: 16,
              fontSize: "1rem",
              minDynamicHeight: 4,
              value: "{{ Text1.text }}",
              meta: {},
              componentHeight: 40,
              componentWidth: 372.851806640625,
              type: "TEXT_WIDGET",
            },
            Canvas2: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              mobileBottomRow: 100,
              widgetName: "Canvas2",
              topRow: 0,
              bottomRow: 290,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 328.98046875,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "izcc32bkjr",
              rightColumn: 328.98046875,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "256n68mv3w",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 290,
              componentWidth: 328.98046875,
              type: "CANVAS_WIDGET",
            },
            containerPlayground: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              mobileBottomRow: 21,
              widgetName: "containerPlayground",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 1,
              bottomRow: 30,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 25,
              animateLoading: true,
              parentColumnSpace: 13.70751953125,
              leftColumn: 0,
              borderWidth: "1",
              flexVerticalAlignment: "stretch",
              key: "bv1axpkzaj",
              backgroundColor: "#FFFFFF",
              rightColumn: 32,
              dynamicHeight: "FIXED",
              widgetId: "0j3cs5153j",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 1,
              maxDynamicHeight: 12,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 290,
              componentWidth: 438.640625,
              type: "CONTAINER_WIDGET",
            },
            btnCalculate: {
              ENTITY_TYPE: "WIDGET",
              resetFormOnClick: false,
              needsErrorInfo: false,
              boxShadow: "none",
              mobileBottomRow: 11,
              widgetName: "btnCalculate",
              onClick: "{{storeValue('varCalculated', Input1.text)}}",
              buttonColor: "{{appsmith.theme.colors.primaryColor}}",
              topRow: 4,
              bottomRow: 9,
              parentRowSpace: 10,
              mobileRightColumn: 25,
              animateLoading: true,
              parentColumnSpace: 9.216796875,
              leftColumn: 5,
              text: "Calculate",
              isDisabled: false,
              key: "c32rx365fx",
              rightColumn: 57,
              isDefaultClickDisabled: true,
              widgetId: "tl8xbeqhua",
              minWidth: 120,
              isVisible: true,
              recaptchaType: "V3",
              isLoading: false,
              mobileTopRow: 7,
              responsiveBehavior: "hug",
              disabledWhenInvalid: false,
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 9,
              buttonVariant: "PRIMARY",
              placement: "CENTER",
              meta: {},
              componentHeight: 50,
              componentWidth: 479.2734375,
              type: "BUTTON_WIDGET",
            },
            calculatedTxt: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              mobileBottomRow: 15,
              widgetName: "calculatedTxt",
              topRow: 11,
              bottomRow: 15,
              parentRowSpace: 10,
              mobileRightColumn: 35,
              animateLoading: true,
              overflow: "NONE",
              fontFamily: "{{appsmith.theme.fontFamily.appFont}}",
              parentColumnSpace: 6.541259765625,
              leftColumn: 5,
              shouldTruncate: false,
              truncateButtonColor: "{{appsmith.theme.colors.primaryColor}}",
              text: "{{appsmith.store.varCalculated}}",
              key: "lgxpzfcx4b",
              rightColumn: 62,
              textAlign: "LEFT",
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "od1swmzxxq",
              minWidth: 450,
              isVisible: true,
              fontStyle: "BOLD",
              textColor: "#231F20",
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              originalTopRow: 11,
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 19,
              maxDynamicHeight: 9000,
              originalBottomRow: 15,
              fontSize: "1rem",
              minDynamicHeight: 4,
              value: "{{ calculatedTxt.text }}",
              meta: {},
              componentHeight: 40,
              componentWidth: 372.851806640625,
              type: "TEXT_WIDGET",
            },
            Canvas3: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              mobileBottomRow: 100,
              widgetName: "Canvas3",
              topRow: 0,
              bottomRow: 290,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 328.98046875,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "izcc32bkjr",
              rightColumn: 328.98046875,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "cl2ynw6igw",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 290,
              componentWidth: 328.98046875,
              type: "CANVAS_WIDGET",
            },
            containerActions: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              mobileBottomRow: 11,
              widgetName: "containerActions",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 1,
              bottomRow: 30,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 63,
              animateLoading: true,
              parentColumnSpace: 13.70751953125,
              leftColumn: 32,
              borderWidth: "1",
              flexVerticalAlignment: "stretch",
              key: "bv1axpkzaj",
              backgroundColor: "#FFFFFF",
              rightColumn: 63,
              dynamicHeight: "FIXED",
              widgetId: "dgev9742e2",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 1,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 39,
              maxDynamicHeight: 9000,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 290,
              componentWidth: 424.93310546875,
              type: "CONTAINER_WIDGET",
            },
            Canvas1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              mobileBottomRow: 100,
              widgetName: "Canvas1",
              topRow: 0,
              bottomRow: 410,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 430.5,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "wl4jb57gwi",
              rightColumn: 430.5,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "k1ojmo3iid",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 410,
              componentWidth: 430.5,
              type: "CANVAS_WIDGET",
            },
            containerRoot: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
              mobileBottomRow: 32,
              widgetName: "containerRoot",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 22,
              bottomRow: 63,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 36,
              animateLoading: true,
              parentColumnSpace: 17.9375,
              leftColumn: 12,
              borderWidth: "1",
              flexVerticalAlignment: "stretch",
              key: "1456ozhxit",
              backgroundColor: "#FFFFFF",
              rightColumn: 46,
              dynamicHeight: "FIXED",
              widgetId: "9e839onva6",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 22,
              responsiveBehavior: "fill",
              borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
              mobileLeftColumn: 12,
              maxDynamicHeight: 9000,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 410,
              componentWidth: 609.875,
              type: "CONTAINER_WIDGET",
            },
            appsmith: {
              user: {
                email: "peterjaberau@gmail.com",
                username: "peterjaberau@gmail.com",
                name: "Peter Jaber",
                useCase: "personal project",
                enableTelemetry: true,
                roles: ["Upgrade to business plan to access roles and groups for conditional business logic"],
                groups: ["Upgrade to business plan to access roles and groups for conditional business logic"],
                accountNonExpired: true,
                accountNonLocked: true,
                credentialsNonExpired: true,
                emptyInstance: false,
                isAnonymous: false,
                isEnabled: true,
                isSuperUser: true,
                isConfigurable: true,
                adminSettingsVisible: false,
                isIntercomConsentGiven: false,
              },
              URL: {
                fullPath:
                  "https://dev.appsmith.com/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
                host: "dev.appsmith.com",
                hostname: "dev.appsmith.com",
                queryParams: {},
                protocol: "https:",
                pathname: "/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
                port: "",
                hash: "",
              },
              store: {
                varCalculated: "",
                varTxt: "dddd",
                "": "dddd",
              },
              geolocation: {
                canBeRequested: true,
                currentPosition: {},
              },
              workflows: {},
              mode: "EDIT",
              theme: {
                colors: {
                  primaryColor: "#553DE9",
                  backgroundColor: "#F8FAFC",
                },
                borderRadius: {
                  appBorderRadius: "0.375rem",
                },
                boxShadow: {
                  appBoxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                },
                fontFamily: {
                  appFont: "System Default",
                },
              },
              currentPageName: "Page1",
              workspaceName: "Peter's apps",
              appName: "auto-layout",
              currentEnvironmentName: "",
              ENTITY_TYPE: "APPSMITH",
            },
          },
          configTree: {
            localVariables: {
              actionId: "68ad40c7d8deff53ee07277d",
              meta: {},
              name: "localVariables",
              pluginType: "JS",
              ENTITY_TYPE: "JSACTION",
              bindingPaths: {
                body: "SMART_SUBSTITUTE",
                varCalculated: "SMART_SUBSTITUTE",
              },
              reactivePaths: {
                body: "SMART_SUBSTITUTE",
                varCalculated: "SMART_SUBSTITUTE",
              },
              dynamicBindingPathList: [
                {
                  key: "body",
                },
                {
                  key: "varCalculated",
                },
              ],
              variables: ["varCalculated"],
              dependencyMap: {
                body: [],
              },
              actionNames: {},
              dynamicTriggerPathList: [],
            },
            MainContainer: {
              widgetId: "0",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CANVAS_WIDGET",
              dynamicTriggerPathList: [],
              isMetaPropDirty: false,
            },
            Input1: {
              widgetId: "9nft85pms1",
              defaultProps: {
                inputText: "defaultText",
                text: "defaultText",
              },
              defaultMetaProps: ["text", "isDirty", "inputText"],
              dynamicBindingPathList: [
                {
                  key: "accentColor",
                },
                {
                  key: "borderRadius",
                },
                {
                  key: "value",
                },
                {
                  key: "isValid",
                },
              ],
              logBlackList: {
                value: true,
                isValid: true,
              },
              bindingPaths: {
                defaultText: "TEMPLATE",
                label: "TEMPLATE",
                isRequired: "TEMPLATE",
                maxChars: "TEMPLATE",
                regex: "TEMPLATE",
                validation: "TEMPLATE",
                errorMessage: "TEMPLATE",
                isSpellCheck: "TEMPLATE",
                tooltip: "TEMPLATE",
                placeholderText: "TEMPLATE",
                isVisible: "TEMPLATE",
                isDisabled: "TEMPLATE",
                animateLoading: "TEMPLATE",
                autoFocus: "TEMPLATE",
                resetOnSubmit: "TEMPLATE",
                iconName: "TEMPLATE",
                labelTextColor: "TEMPLATE",
                labelTextSize: "TEMPLATE",
                labelStyle: "TEMPLATE",
                accentColor: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                value: "TEMPLATE",
                isValid: "TEMPLATE",
                text: "TEMPLATE",
                isDirty: "TEMPLATE",
                inputText: "TEMPLATE",
                accentColor: "TEMPLATE",
                borderRadius: "TEMPLATE",
                defaultText: "TEMPLATE",
                "meta.inputText": "TEMPLATE",
                "meta.text": "TEMPLATE",
                label: "TEMPLATE",
                isRequired: "TEMPLATE",
                maxChars: "TEMPLATE",
                regex: "TEMPLATE",
                validation: "TEMPLATE",
                errorMessage: "TEMPLATE",
                isSpellCheck: "TEMPLATE",
                tooltip: "TEMPLATE",
                placeholderText: "TEMPLATE",
                isVisible: "TEMPLATE",
                isDisabled: "TEMPLATE",
                animateLoading: "TEMPLATE",
                autoFocus: "TEMPLATE",
                resetOnSubmit: "TEMPLATE",
                iconName: "TEMPLATE",
                labelTextColor: "TEMPLATE",
                labelTextSize: "TEMPLATE",
                labelStyle: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              triggerPaths: {
                onTextChanged: true,
                onFocus: true,
                onBlur: true,
                onSubmit: true,
              },
              validationPaths: {
                defaultText: {
                  type: "FUNCTION",
                  params: {
                    expected: {
                      type: "string or number",
                      example: "John | 123",
                      autocompleteDataType: "STRING",
                    },
                    fnString:
                      'function defaultValueValidation(\n// TODO: Fix this the next time the file is edited\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nvalue, props,\n// TODO: Fix this the next time the file is edited\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\n_) {\n  const STRING_ERROR_MESSAGE = {\n    name: "TypeError",\n    message: "This value must be string"\n  };\n  const NUMBER_ERROR_MESSAGE = {\n    name: "TypeError",\n    message: "This value must be number"\n  };\n  const EMPTY_ERROR_MESSAGE = {\n    name: "",\n    message: ""\n  };\n  if (_.isObject(value)) {\n    return {\n      isValid: false,\n      parsed: JSON.stringify(value, null, 2),\n      messages: [STRING_ERROR_MESSAGE]\n    };\n  }\n  const {\n    inputType\n  } = props;\n  if (_.isBoolean(value) || _.isNil(value) || _.isUndefined(value)) {\n    return {\n      isValid: false,\n      parsed: value,\n      messages: [STRING_ERROR_MESSAGE]\n    };\n  }\n  let parsed;\n  switch (inputType) {\n    case "NUMBER":\n      parsed = Number(value);\n      let isValid, messages;\n      if (_.isString(value) && value.trim() === "") {\n        /*\n         *  When value is emtpy string\n         */\n        isValid = true;\n        messages = [EMPTY_ERROR_MESSAGE];\n        parsed = null;\n      } else if (!Number.isFinite(parsed)) {\n        /*\n         *  When parsed value is not a finite numer\n         */\n        isValid = false;\n        messages = [NUMBER_ERROR_MESSAGE];\n        parsed = null;\n      } else {\n        /*\n         *  When parsed value is a Number\n         */\n        isValid = true;\n        messages = [EMPTY_ERROR_MESSAGE];\n      }\n      return {\n        isValid,\n        parsed,\n        messages\n      };\n    case "TEXT":\n    case "MULTI_LINE_TEXT":\n    case "PASSWORD":\n    case "EMAIL":\n      parsed = value;\n      if (!_.isString(parsed)) {\n        try {\n          parsed = _.toString(parsed);\n        } catch (e) {\n          return {\n            isValid: false,\n            parsed: "",\n            messages: [STRING_ERROR_MESSAGE]\n          };\n        }\n      }\n      return {\n        isValid: _.isString(parsed),\n        parsed: parsed,\n        messages: [EMPTY_ERROR_MESSAGE]\n      };\n    default:\n      return {\n        isValid: false,\n        parsed: "",\n        messages: [STRING_ERROR_MESSAGE]\n      };\n  }\n}',
                  },
                },
                label: {
                  type: "TEXT",
                },
                isRequired: {
                  type: "BOOLEAN",
                },
                maxChars: {
                  type: "NUMBER",
                  params: {
                    min: 1,
                    natural: true,
                    passThroughOnZero: false,
                  },
                },
                regex: {
                  type: "REGEX",
                },
                validation: {
                  type: "BOOLEAN",
                  params: {
                    default: true,
                  },
                },
                errorMessage: {
                  type: "TEXT",
                },
                isSpellCheck: {
                  type: "BOOLEAN",
                },
                tooltip: {
                  type: "TEXT",
                },
                placeholderText: {
                  type: "TEXT",
                },
                isVisible: {
                  type: "BOOLEAN",
                },
                isDisabled: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                autoFocus: {
                  type: "BOOLEAN",
                },
                resetOnSubmit: {
                  type: "BOOLEAN",
                },
                iconName: {
                  type: "TEXT",
                  params: {
                    allowedValues: [
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
                      "zoom-to-fit",
                    ],
                  },
                },
                labelTextColor: {
                  type: "TEXT",
                  params: {
                    regex: {},
                  },
                },
                labelTextSize: {
                  type: "TEXT",
                },
                labelStyle: {
                  type: "TEXT",
                },
                accentColor: {
                  type: "TEXT",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {
                inputText: {
                  DEFAULT: "defaultText",
                  META: "meta.inputText",
                },
                text: {
                  DEFAULT: "defaultText",
                  META: "meta.text",
                },
              },
              overridingPropertyPaths: {
                defaultText: ["inputText", "meta.inputText", "text", "meta.text"],
                "meta.inputText": ["inputText"],
                "meta.text": ["text"],
              },
              type: "INPUT_WIDGET_V2",
              __setters: {
                setVisibility: {
                  path: "Input1.isVisible",
                  type: "boolean",
                },
                setDisabled: {
                  path: "Input1.isDisabled",
                  type: "boolean",
                },
                setRequired: {
                  path: "Input1.isRequired",
                  type: "boolean",
                },
                setValue: {
                  path: "Input1.defaultText",
                  type: "string",
                  accessor: "Input1.text",
                },
              },
              isMetaPropDirty: false,
            },
            Text1: {
              widgetId: "kwdcw234sl",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "truncateButtonColor",
                },
                {
                  key: "fontFamily",
                },
                {
                  key: "borderRadius",
                },
                {
                  key: "text",
                },
                {
                  key: "value",
                },
              ],
              logBlackList: {
                value: true,
              },
              bindingPaths: {
                text: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                disableLink: "TEMPLATE",
                fontFamily: "TEMPLATE",
                fontSize: "TEMPLATE",
                textColor: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                textAlign: "TEMPLATE",
                fontStyle: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              reactivePaths: {
                value: "TEMPLATE",
                truncateButtonColor: "TEMPLATE",
                fontFamily: "TEMPLATE",
                borderRadius: "TEMPLATE",
                text: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                disableLink: "TEMPLATE",
                fontSize: "TEMPLATE",
                textColor: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                textAlign: "TEMPLATE",
                fontStyle: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                text: {
                  type: "TEXT",
                  params: {
                    limitLineBreaks: true,
                  },
                },
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                disableLink: {
                  type: "BOOLEAN",
                },
                fontFamily: {
                  type: "TEXT",
                },
                fontSize: {
                  type: "TEXT",
                },
                textColor: {
                  type: "TEXT",
                  params: {
                    regex: {},
                  },
                },
                backgroundColor: {
                  type: "TEXT",
                  params: {
                    regex: {},
                    expected: {
                      type: "string (HTML color name or HEX value)",
                      example: "red | #9C0D38",
                      autocompleteDataType: "STRING",
                    },
                  },
                },
                borderColor: {
                  type: "TEXT",
                },
                textAlign: {
                  type: "TEXT",
                },
                fontStyle: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "TEXT_WIDGET",
              dynamicTriggerPathList: [],
              __setters: {
                setVisibility: {
                  path: "Text1.isVisible",
                  type: "boolean",
                },
                setDisabled: {
                  path: "Text1.isDisabled",
                  type: "boolean",
                },
                setRequired: {
                  path: "Text1.isRequired",
                  type: "boolean",
                },
                setText: {
                  path: "Text1.text",
                  type: "string",
                },
                setTextColor: {
                  path: "Text1.textColor",
                  type: "string",
                },
              },
              isMetaPropDirty: false,
            },
            Canvas2: {
              widgetId: "256n68mv3w",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CANVAS_WIDGET",
              isMetaPropDirty: false,
            },
            containerPlayground: {
              widgetId: "0j3cs5153j",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CONTAINER_WIDGET",
              dynamicTriggerPathList: [],
              __setters: {
                setVisibility: {
                  path: "containerPlayground.isVisible",
                  type: "boolean",
                },
              },
              isMetaPropDirty: false,
            },
            btnCalculate: {
              widgetId: "tl8xbeqhua",
              defaultProps: {},
              defaultMetaProps: ["recaptchaToken"],
              dynamicBindingPathList: [
                {
                  key: "buttonColor",
                },
                {
                  key: "borderRadius",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                text: "TEMPLATE",
                tooltip: "TEMPLATE",
                isVisible: "TEMPLATE",
                isDisabled: "TEMPLATE",
                animateLoading: "TEMPLATE",
                googleRecaptchaKey: "TEMPLATE",
                recaptchaType: "TEMPLATE",
                disabledWhenInvalid: "TEMPLATE",
                resetFormOnClick: "TEMPLATE",
                buttonVariant: "TEMPLATE",
                iconName: "TEMPLATE",
                placement: "TEMPLATE",
                buttonColor: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                recaptchaToken: "TEMPLATE",
                buttonColor: "TEMPLATE",
                borderRadius: "TEMPLATE",
                text: "TEMPLATE",
                tooltip: "TEMPLATE",
                isVisible: "TEMPLATE",
                isDisabled: "TEMPLATE",
                animateLoading: "TEMPLATE",
                googleRecaptchaKey: "TEMPLATE",
                recaptchaType: "TEMPLATE",
                disabledWhenInvalid: "TEMPLATE",
                resetFormOnClick: "TEMPLATE",
                buttonVariant: "TEMPLATE",
                iconName: "TEMPLATE",
                placement: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              triggerPaths: {
                onClick: true,
              },
              validationPaths: {
                text: {
                  type: "TEXT",
                },
                tooltip: {
                  type: "TEXT",
                },
                isVisible: {
                  type: "BOOLEAN",
                },
                isDisabled: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                googleRecaptchaKey: {
                  type: "TEXT",
                },
                recaptchaType: {
                  type: "TEXT",
                  params: {
                    allowedValues: ["V3", "V2"],
                    default: "V3",
                  },
                },
                disabledWhenInvalid: {
                  type: "BOOLEAN",
                },
                resetFormOnClick: {
                  type: "BOOLEAN",
                },
                buttonVariant: {
                  type: "TEXT",
                  params: {
                    allowedValues: ["PRIMARY", "SECONDARY", "TERTIARY"],
                    default: "PRIMARY",
                  },
                },
                iconName: {
                  type: "TEXT",
                },
                placement: {
                  type: "TEXT",
                  params: {
                    allowedValues: ["START", "BETWEEN", "CENTER"],
                    default: "CENTER",
                  },
                },
                buttonColor: {
                  type: "TEXT",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "BUTTON_WIDGET",
              dynamicPropertyPathList: [],
              dynamicTriggerPathList: [
                {
                  key: "onClick",
                },
              ],
              __setters: {
                setVisibility: {
                  path: "btnCalculate.isVisible",
                  type: "boolean",
                },
                setDisabled: {
                  path: "btnCalculate.isDisabled",
                  type: "boolean",
                },
                setLabel: {
                  path: "btnCalculate.text",
                  type: "string",
                },
                setColor: {
                  path: "btnCalculate.buttonColor",
                  type: "string",
                },
              },
              isMetaPropDirty: false,
            },
            calculatedTxt: {
              widgetId: "od1swmzxxq",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "truncateButtonColor",
                },
                {
                  key: "fontFamily",
                },
                {
                  key: "borderRadius",
                },
                {
                  key: "text",
                },
                {
                  key: "value",
                },
              ],
              logBlackList: {
                value: true,
              },
              bindingPaths: {
                text: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                disableLink: "TEMPLATE",
                fontFamily: "TEMPLATE",
                fontSize: "TEMPLATE",
                textColor: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                textAlign: "TEMPLATE",
                fontStyle: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              reactivePaths: {
                value: "TEMPLATE",
                truncateButtonColor: "TEMPLATE",
                fontFamily: "TEMPLATE",
                borderRadius: "TEMPLATE",
                text: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                disableLink: "TEMPLATE",
                fontSize: "TEMPLATE",
                textColor: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                textAlign: "TEMPLATE",
                fontStyle: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                text: {
                  type: "TEXT",
                  params: {
                    limitLineBreaks: true,
                  },
                },
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                disableLink: {
                  type: "BOOLEAN",
                },
                fontFamily: {
                  type: "TEXT",
                },
                fontSize: {
                  type: "TEXT",
                },
                textColor: {
                  type: "TEXT",
                  params: {
                    regex: {},
                  },
                },
                backgroundColor: {
                  type: "TEXT",
                  params: {
                    regex: {},
                    expected: {
                      type: "string (HTML color name or HEX value)",
                      example: "red | #9C0D38",
                      autocompleteDataType: "STRING",
                    },
                  },
                },
                borderColor: {
                  type: "TEXT",
                },
                textAlign: {
                  type: "TEXT",
                },
                fontStyle: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "TEXT_WIDGET",
              dynamicTriggerPathList: [],
              __setters: {
                setVisibility: {
                  path: "calculatedTxt.isVisible",
                  type: "boolean",
                },
                setDisabled: {
                  path: "calculatedTxt.isDisabled",
                  type: "boolean",
                },
                setRequired: {
                  path: "calculatedTxt.isRequired",
                  type: "boolean",
                },
                setText: {
                  path: "calculatedTxt.text",
                  type: "string",
                },
                setTextColor: {
                  path: "calculatedTxt.textColor",
                  type: "string",
                },
              },
              isMetaPropDirty: false,
            },
            Canvas3: {
              widgetId: "cl2ynw6igw",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CANVAS_WIDGET",
              isMetaPropDirty: false,
            },
            containerActions: {
              widgetId: "dgev9742e2",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CONTAINER_WIDGET",
              dynamicTriggerPathList: [],
              __setters: {
                setVisibility: {
                  path: "containerActions.isVisible",
                  type: "boolean",
                },
              },
              isMetaPropDirty: false,
            },
            Canvas1: {
              widgetId: "k1ojmo3iid",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CANVAS_WIDGET",
              isMetaPropDirty: false,
            },
            containerRoot: {
              widgetId: "9e839onva6",
              defaultProps: {},
              defaultMetaProps: [],
              dynamicBindingPathList: [
                {
                  key: "borderRadius",
                },
                {
                  key: "boxShadow",
                },
              ],
              logBlackList: {},
              bindingPaths: {
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
              },
              reactivePaths: {
                borderRadius: "TEMPLATE",
                boxShadow: "TEMPLATE",
                isVisible: "TEMPLATE",
                animateLoading: "TEMPLATE",
                backgroundColor: "TEMPLATE",
                borderColor: "TEMPLATE",
                borderWidth: "TEMPLATE",
              },
              triggerPaths: {},
              validationPaths: {
                isVisible: {
                  type: "BOOLEAN",
                },
                animateLoading: {
                  type: "BOOLEAN",
                },
                backgroundColor: {
                  type: "TEXT",
                },
                borderColor: {
                  type: "TEXT",
                },
                borderWidth: {
                  type: "NUMBER",
                },
                borderRadius: {
                  type: "TEXT",
                },
                boxShadow: {
                  type: "TEXT",
                },
              },
              dependencyMap: {},
              ENTITY_TYPE: "WIDGET",
              privateWidgets: {},
              propertyOverrideDependency: {},
              overridingPropertyPaths: {},
              type: "CONTAINER_WIDGET",
              dynamicTriggerPathList: [],
              __setters: {
                setVisibility: {
                  path: "containerRoot.isVisible",
                  type: "boolean",
                },
              },
              isMetaPropDirty: false,
            },
          },
        },
      },
    ],
  },

  {
    WorkerUtil: [
      {
        "WokerUtil:329": "Main EVAL_TRIGGER",
      },
      {
        "WokerUtil:335": "Worker EVAL_TRIGGER",
      },
      {
        "WokerUtil:336": "Transfer EVAL_TRIGGER",
      },
    ],
  },

  {
    EvaluationsSaga: [
      {
        273: {
          evalMetaUpdatesLength: 0,
        },
        277: {
          jsUpdates: {},
        },
        278: {
          dataTree: {
            localVariables: {
              varCalculated: "",
              body: "export default {\n\tvarCalculated: '',\n}",
              ENTITY_TYPE: "JSACTION",
              actionId: "68ad40c7d8deff53ee07277d",
              __evaluation__: {
                errors: {
                  varCalculated: [],
                  body: [],
                },
              },
            },
            MainContainer: {
              ENTITY_TYPE: "WIDGET",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              widgetName: "MainContainer",
              backgroundColor: "none",
              rightColumn: 4896,
              snapColumns: 64,
              widgetId: "0",
              topRow: 0,
              bottomRow: 630,
              containerStyle: "none",
              snapRows: 124,
              parentRowSpace: 1,
              canExtend: true,
              minHeight: 1292,
              parentColumnSpace: 1,
              leftColumn: 0,
              borderRadius: "0.375rem",
              meta: {},
              isLoading: false,
              componentHeight: 630,
              componentWidth: 4896,
              type: "CANVAS_WIDGET",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            Input1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "none",
              mobileBottomRow: 10,
              widgetName: "Input1",
              topRow: 1,
              bottomRow: 8,
              parentRowSpace: 10,
              labelWidth: 5,
              autoFocus: false,
              mobileRightColumn: 35,
              animateLoading: true,
              parentColumnSpace: 6.541259765625,
              resetOnSubmit: true,
              leftColumn: 1,
              labelPosition: "Top",
              labelStyle: "",
              inputType: "TEXT",
              isDisabled: false,
              key: "z6mkd60niu",
              labelTextSize: "0.875rem",
              isRequired: false,
              rightColumn: 60,
              dynamicHeight: "FIXED",
              widgetId: "9nft85pms1",
              accentColor: "#553DE9",
              showStepArrows: false,
              minWidth: 450,
              isVisible: true,
              label: "Label",
              labelAlignment: "left",
              isLoading: false,
              mobileTopRow: 3,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 15,
              maxDynamicHeight: 9000,
              iconAlign: "left",
              defaultText: "",
              minDynamicHeight: 4,
              value: "",
              isValid: true,
              text: "",
              isDirty: false,
              inputText: "",
              meta: {
                text: "",
                inputText: "",
              },
              componentHeight: 70,
              componentWidth: 385.934326171875,
              type: "INPUT_WIDGET_V2",
              regex: "",
              validation: true,
              errorMessage: "",
              tooltip: "",
              placeholderText: "",
              iconName: "",
              labelTextColor: "",
              __evaluation__: {
                errors: {
                  defaultText: [],
                  "meta.text": [],
                  text: [],
                  "meta.inputText": [],
                  meta: [],
                  isRequired: [],
                  inputType: [],
                  inputText: [],
                  isValid: [],
                  value: [],
                  borderRadius: [],
                  accentColor: [],
                  label: [],
                  maxChars: [],
                  regex: [],
                  validation: [],
                  errorMessage: [],
                  isSpellCheck: [],
                  tooltip: [],
                  placeholderText: [],
                  isVisible: [],
                  isDisabled: [],
                  animateLoading: [],
                  autoFocus: [],
                  resetOnSubmit: [],
                  iconName: [],
                  labelTextColor: [],
                  labelTextSize: [],
                  labelStyle: [],
                  boxShadow: [],
                },
              },
            },
            Text1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              mobileBottomRow: 15,
              widgetName: "Text1",
              topRow: 11,
              bottomRow: 15,
              parentRowSpace: 10,
              mobileRightColumn: 35,
              animateLoading: true,
              overflow: "NONE",
              fontFamily: "System Default",
              parentColumnSpace: 6.541259765625,
              leftColumn: 2,
              shouldTruncate: false,
              truncateButtonColor: "#553DE9",
              text: "current value is: -",
              key: "lgxpzfcx4b",
              rightColumn: 59,
              textAlign: "LEFT",
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "kwdcw234sl",
              minWidth: 450,
              isVisible: true,
              fontStyle: "BOLD",
              textColor: "#231F20",
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              originalTopRow: 11,
              borderRadius: "0.375rem",
              mobileLeftColumn: 19,
              maxDynamicHeight: 9000,
              originalBottomRow: 16,
              fontSize: "1rem",
              minDynamicHeight: 4,
              value: "current value is: -",
              meta: {},
              componentHeight: 40,
              componentWidth: 372.851806640625,
              type: "TEXT_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  text: [],
                  value: [],
                  borderRadius: [],
                  fontFamily: [],
                  truncateButtonColor: [],
                  isVisible: [],
                  animateLoading: [],
                  disableLink: [],
                  fontSize: [],
                  textColor: [],
                  backgroundColor: [],
                  borderColor: [],
                  textAlign: [],
                  fontStyle: [],
                  borderWidth: [],
                },
              },
            },
            Canvas2: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 100,
              widgetName: "Canvas2",
              topRow: 0,
              bottomRow: 290,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 328.98046875,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "izcc32bkjr",
              rightColumn: 328.98046875,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "256n68mv3w",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 290,
              componentWidth: 328.98046875,
              type: "CANVAS_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            containerPlayground: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 21,
              widgetName: "containerPlayground",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 1,
              bottomRow: 30,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 25,
              animateLoading: true,
              parentColumnSpace: 13.70751953125,
              leftColumn: 0,
              borderWidth: 1,
              flexVerticalAlignment: "stretch",
              key: "bv1axpkzaj",
              backgroundColor: "#FFFFFF",
              rightColumn: 32,
              dynamicHeight: "FIXED",
              widgetId: "0j3cs5153j",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 1,
              maxDynamicHeight: 12,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 290,
              componentWidth: 438.640625,
              type: "CONTAINER_WIDGET",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            btnCalculate: {
              ENTITY_TYPE: "WIDGET",
              resetFormOnClick: false,
              needsErrorInfo: false,
              boxShadow: "none",
              mobileBottomRow: 11,
              widgetName: "btnCalculate",
              onClick: "{{storeValue('varCalculated', Input1.text)}}",
              buttonColor: "#553DE9",
              topRow: 4,
              bottomRow: 9,
              parentRowSpace: 10,
              mobileRightColumn: 25,
              animateLoading: true,
              parentColumnSpace: 9.216796875,
              leftColumn: 5,
              text: "Calculate",
              isDisabled: false,
              key: "c32rx365fx",
              rightColumn: 57,
              isDefaultClickDisabled: true,
              widgetId: "tl8xbeqhua",
              minWidth: 120,
              isVisible: true,
              recaptchaType: "V3",
              isLoading: false,
              mobileTopRow: 7,
              responsiveBehavior: "hug",
              disabledWhenInvalid: false,
              borderRadius: "0.375rem",
              mobileLeftColumn: 9,
              buttonVariant: "PRIMARY",
              placement: "CENTER",
              meta: {},
              componentHeight: 50,
              componentWidth: 479.2734375,
              type: "BUTTON_WIDGET",
              tooltip: "",
              googleRecaptchaKey: "",
              iconName: "",
              __evaluation__: {
                errors: {
                  borderRadius: [],
                  buttonColor: [],
                  onClick: [],
                  text: [],
                  tooltip: [],
                  isVisible: [],
                  isDisabled: [],
                  animateLoading: [],
                  googleRecaptchaKey: [],
                  recaptchaType: [],
                  disabledWhenInvalid: [],
                  resetFormOnClick: [],
                  buttonVariant: [],
                  iconName: [],
                  placement: [],
                  boxShadow: [],
                },
              },
            },
            calculatedTxt: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              mobileBottomRow: 15,
              widgetName: "calculatedTxt",
              topRow: 11,
              bottomRow: 15,
              parentRowSpace: 10,
              mobileRightColumn: 35,
              animateLoading: true,
              overflow: "NONE",
              fontFamily: "System Default",
              parentColumnSpace: 6.541259765625,
              leftColumn: 5,
              shouldTruncate: false,
              truncateButtonColor: "#553DE9",
              text: "",
              key: "lgxpzfcx4b",
              rightColumn: 62,
              textAlign: "LEFT",
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "od1swmzxxq",
              minWidth: 450,
              isVisible: true,
              fontStyle: "BOLD",
              textColor: "#231F20",
              isLoading: false,
              mobileTopRow: 11,
              responsiveBehavior: "fill",
              originalTopRow: 11,
              borderRadius: "0.375rem",
              mobileLeftColumn: 19,
              maxDynamicHeight: 9000,
              originalBottomRow: 15,
              fontSize: "1rem",
              minDynamicHeight: 4,
              value: "",
              meta: {},
              componentHeight: 40,
              componentWidth: 372.851806640625,
              type: "TEXT_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  text: [],
                  value: [],
                  borderRadius: [],
                  fontFamily: [],
                  truncateButtonColor: [],
                  isVisible: [],
                  animateLoading: [],
                  disableLink: [],
                  fontSize: [],
                  textColor: [],
                  backgroundColor: [],
                  borderColor: [],
                  textAlign: [],
                  fontStyle: [],
                  borderWidth: [],
                },
              },
            },
            Canvas3: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 100,
              widgetName: "Canvas3",
              topRow: 0,
              bottomRow: 290,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 328.98046875,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "izcc32bkjr",
              rightColumn: 328.98046875,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "cl2ynw6igw",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 290,
              componentWidth: 328.98046875,
              type: "CANVAS_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            containerActions: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 11,
              widgetName: "containerActions",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 1,
              bottomRow: 30,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 63,
              animateLoading: true,
              parentColumnSpace: 13.70751953125,
              leftColumn: 32,
              borderWidth: 1,
              flexVerticalAlignment: "stretch",
              key: "bv1axpkzaj",
              backgroundColor: "#FFFFFF",
              rightColumn: 63,
              dynamicHeight: "FIXED",
              widgetId: "dgev9742e2",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 1,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 39,
              maxDynamicHeight: 9000,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 290,
              componentWidth: 424.93310546875,
              type: "CONTAINER_WIDGET",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            Canvas1: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 100,
              widgetName: "Canvas1",
              topRow: 0,
              bottomRow: 410,
              parentRowSpace: 1,
              canExtend: false,
              minHeight: 100,
              mobileRightColumn: 430.5,
              parentColumnSpace: 1,
              leftColumn: 0,
              key: "wl4jb57gwi",
              rightColumn: 430.5,
              dynamicHeight: "AUTO_HEIGHT",
              widgetId: "k1ojmo3iid",
              containerStyle: "none",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 0,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 0,
              maxDynamicHeight: 9000,
              minDynamicHeight: 4,
              flexLayers: [],
              meta: {},
              componentHeight: 410,
              componentWidth: 430.5,
              type: "CANVAS_WIDGET",
              backgroundColor: "",
              borderColor: "",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            containerRoot: {
              ENTITY_TYPE: "WIDGET",
              needsErrorInfo: false,
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              mobileBottomRow: 32,
              widgetName: "containerRoot",
              borderColor: "#E0DEDE",
              isCanvas: true,
              topRow: 22,
              bottomRow: 63,
              parentRowSpace: 10,
              shouldScrollContents: true,
              mobileRightColumn: 36,
              animateLoading: true,
              parentColumnSpace: 17.9375,
              leftColumn: 12,
              borderWidth: 1,
              flexVerticalAlignment: "stretch",
              key: "1456ozhxit",
              backgroundColor: "#FFFFFF",
              rightColumn: 46,
              dynamicHeight: "FIXED",
              widgetId: "9e839onva6",
              containerStyle: "card",
              minWidth: 450,
              isVisible: true,
              isLoading: false,
              mobileTopRow: 22,
              responsiveBehavior: "fill",
              borderRadius: "0.375rem",
              mobileLeftColumn: 12,
              maxDynamicHeight: 9000,
              minDynamicHeight: 10,
              meta: {},
              componentHeight: 410,
              componentWidth: 609.875,
              type: "CONTAINER_WIDGET",
              __evaluation__: {
                errors: {
                  boxShadow: [],
                  borderRadius: [],
                  isVisible: [],
                  animateLoading: [],
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: [],
                },
              },
            },
            appsmith: {
              user: {
                email: "peterjaberau@gmail.com",
                username: "peterjaberau@gmail.com",
                name: "Peter Jaber",
                useCase: "personal project",
                enableTelemetry: true,
                roles: ["Upgrade to business plan to access roles and groups for conditional business logic"],
                groups: ["Upgrade to business plan to access roles and groups for conditional business logic"],
                accountNonExpired: true,
                accountNonLocked: true,
                credentialsNonExpired: true,
                emptyInstance: false,
                isAnonymous: false,
                isEnabled: true,
                isSuperUser: true,
                isConfigurable: true,
                adminSettingsVisible: false,
                isIntercomConsentGiven: false,
              },
              URL: {
                fullPath:
                  "https://dev.appsmith.com/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
                host: "dev.appsmith.com",
                hostname: "dev.appsmith.com",
                queryParams: {},
                protocol: "https:",
                pathname: "/app/auto-layout/page1-68ad34afd8deff53ee072777/edit/widgets/tl8xbeqhua",
                port: "",
                hash: "",
              },
              store: {
                varCalculated: "",
                varTxt: "dddd",
                "": "dddd",
              },
              geolocation: {
                canBeRequested: true,
                currentPosition: {},
              },
              workflows: {},
              mode: "EDIT",
              theme: {
                colors: {
                  primaryColor: "#553DE9",
                  backgroundColor: "#F8FAFC",
                },
                borderRadius: {
                  appBorderRadius: "0.375rem",
                },
                boxShadow: {
                  appBoxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                },
                fontFamily: {
                  appFont: "System Default",
                },
              },
              currentPageName: "Page1",
              workspaceName: "Peter's apps",
              appName: "auto-layout",
              currentEnvironmentName: "",
              ENTITY_TYPE: "APPSMITH",
            },
          },
        },
        281: [
          {
            diffCalcDeps: "0.10",
            updateChangedDependencies: "0.00 ms",
          },
          {
            updatedValuePathsLatency: 0,
            addDependantsOfNestedPropertyPathsLatency: 0,
            trimDependantChangePathsLatency: 0.09999999776482582,
            completeSortOrderLatency: 0,
          },
          {
            sortedDependencies: [
              "appsmith.theme.boxShadow.appBoxShadow",
              "containerRoot.boxShadow",
              "appsmith.theme.borderRadius.appBorderRadius",
              "containerRoot.borderRadius",
              "containerRoot",
              "Canvas1.boxShadow",
              "Canvas1.borderRadius",
              "Canvas1",
              "containerActions.boxShadow",
              "containerActions.borderRadius",
              "containerActions",
              "Canvas3.boxShadow",
              "Canvas3.borderRadius",
              "Canvas3",
              "appsmith.store.varCalculated",
              "calculatedTxt.text",
              "calculatedTxt.value",
              "calculatedTxt.borderRadius",
              "appsmith.theme.fontFamily.appFont",
              "calculatedTxt.fontFamily",
              "appsmith.theme.colors.primaryColor",
              "calculatedTxt.truncateButtonColor",
              "calculatedTxt",
              "btnCalculate.borderRadius",
              "btnCalculate.buttonColor",
              "btnCalculate.onClick",
              "btnCalculate",
              "containerPlayground.boxShadow",
              "containerPlayground.borderRadius",
              "containerPlayground",
              "Canvas2.boxShadow",
              "Canvas2.borderRadius",
              "Canvas2",
              "Input1.defaultText",
              "Input1.meta.text",
              "Input1.text",
              "Text1.text",
              "Text1.value",
              "Text1.borderRadius",
              "Text1.fontFamily",
              "Text1.truncateButtonColor",
              "Text1",
              "Input1.meta.inputText",
              "Input1.meta",
              "Input1.isRequired",
              "Input1.inputType",
              "Input1.inputText",
              "Input1.isValid",
              "Input1.value",
              "Input1.borderRadius",
              "Input1.accentColor",
              "Input1",
              "appsmith.store",
              "appsmith.theme.fontFamily",
              "appsmith.theme.colors",
              "appsmith.theme.boxShadow",
              "appsmith.theme.borderRadius",
              "appsmith.theme",
              "appsmith",
              "MainContainer.boxShadow",
              "MainContainer.borderRadius",
              "MainContainer",
              "localVariables.varCalculated",
              "localVariables.body",
              "localVariables",
            ],
            inverseDependencies: {
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
                "appsmith.theme.borderRadius",
              ],
              "appsmith.theme.boxShadow.appBoxShadow": [
                "MainContainer.boxShadow",
                "Canvas2.boxShadow",
                "containerPlayground.boxShadow",
                "Canvas3.boxShadow",
                "containerActions.boxShadow",
                "Canvas1.boxShadow",
                "containerRoot.boxShadow",
                "appsmith.theme.boxShadow",
              ],
              "Input1.meta.inputText": ["Input1.inputText", "Input1.meta"],
              "Input1.defaultText": ["Input1.inputText", "Input1.text", "Input1"],
              "Input1.meta.text": ["Input1.text", "Input1.meta"],
              "appsmith.theme.colors.primaryColor": [
                "Input1.accentColor",
                "Text1.truncateButtonColor",
                "btnCalculate.buttonColor",
                "calculatedTxt.truncateButtonColor",
                "appsmith.theme.colors",
              ],
              "Input1.text": ["Input1.value", "Text1.text", "Input1"],
              "Input1.inputType": ["Input1.isValid", "Input1"],
              "Input1.inputText": ["Input1.isValid", "Input1"],
              "Input1.isRequired": ["Input1.isValid", "Input1"],
              "appsmith.theme.fontFamily.appFont": [
                "Text1.fontFamily",
                "calculatedTxt.fontFamily",
                "appsmith.theme.fontFamily",
              ],
              "Text1.text": ["Text1.value", "Text1"],
              "appsmith.store.varCalculated": ["calculatedTxt.text", "appsmith.store"],
              "calculatedTxt.text": ["calculatedTxt.value", "calculatedTxt"],
              "localVariables.body": ["localVariables"],
              "localVariables.varCalculated": ["localVariables"],
              "MainContainer.borderRadius": ["MainContainer"],
              "appsmith.theme.borderRadius": ["appsmith.theme"],
              "appsmith.theme": ["appsmith"],
              "MainContainer.boxShadow": ["MainContainer"],
              "appsmith.theme.boxShadow": ["appsmith.theme"],
              "Input1.meta": ["Input1"],
              "Input1.accentColor": ["Input1"],
              "appsmith.theme.colors": ["appsmith.theme"],
              "Input1.borderRadius": ["Input1"],
              "Input1.value": ["Input1"],
              "Input1.isValid": ["Input1"],
              "Text1.truncateButtonColor": ["Text1"],
              "Text1.fontFamily": ["Text1"],
              "appsmith.theme.fontFamily": ["appsmith.theme"],
              "Text1.borderRadius": ["Text1"],
              "Text1.value": ["Text1"],
              "Canvas2.borderRadius": ["Canvas2"],
              "Canvas2.boxShadow": ["Canvas2"],
              "containerPlayground.borderRadius": ["containerPlayground"],
              "containerPlayground.boxShadow": ["containerPlayground"],
              "btnCalculate.onClick": ["btnCalculate"],
              "btnCalculate.buttonColor": ["btnCalculate"],
              "btnCalculate.borderRadius": ["btnCalculate"],
              "calculatedTxt.truncateButtonColor": ["calculatedTxt"],
              "calculatedTxt.fontFamily": ["calculatedTxt"],
              "calculatedTxt.borderRadius": ["calculatedTxt"],
              "appsmith.store": ["appsmith"],
              "calculatedTxt.value": ["calculatedTxt"],
              "Canvas3.borderRadius": ["Canvas3"],
              "Canvas3.boxShadow": ["Canvas3"],
              "containerActions.borderRadius": ["containerActions"],
              "containerActions.boxShadow": ["containerActions"],
              "Canvas1.borderRadius": ["Canvas1"],
              "Canvas1.boxShadow": ["Canvas1"],
              "containerRoot.borderRadius": ["containerRoot"],
              "containerRoot.boxShadow": ["containerRoot"],
            },
            updatedDependencies: {
              "localVariables.body": [],
              "localVariables.varCalculated": [],
              "MainContainer.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "MainContainer.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              "Input1.inputText": ["Input1.meta.inputText", "Input1.defaultText"],
              "Input1.text": ["Input1.meta.text", "Input1.defaultText"],
              "Input1.accentColor": ["appsmith.theme.colors.primaryColor"],
              "Input1.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "Input1.value": ["Input1.text"],
              "Input1.isValid": ["Input1.inputType", "Input1.inputText", "Input1.isRequired"],
              "Text1.truncateButtonColor": ["appsmith.theme.colors.primaryColor"],
              "Text1.fontFamily": ["appsmith.theme.fontFamily.appFont"],
              "Text1.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "Text1.text": ["Input1.text"],
              "Text1.value": ["Text1.text"],
              "Canvas2.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "Canvas2.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              "containerPlayground.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "containerPlayground.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              "btnCalculate.onClick": [],
              "btnCalculate.buttonColor": ["appsmith.theme.colors.primaryColor"],
              "btnCalculate.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "calculatedTxt.truncateButtonColor": ["appsmith.theme.colors.primaryColor"],
              "calculatedTxt.fontFamily": ["appsmith.theme.fontFamily.appFont"],
              "calculatedTxt.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "calculatedTxt.text": ["appsmith.store.varCalculated"],
              "calculatedTxt.value": ["calculatedTxt.text"],
              "Canvas3.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "Canvas3.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              "containerActions.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "containerActions.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              "Canvas1.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "Canvas1.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              "containerRoot.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "containerRoot.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              localVariables: ["localVariables.body", "localVariables.varCalculated"],
              MainContainer: ["MainContainer.borderRadius", "MainContainer.boxShadow"],
              "appsmith.theme.borderRadius": ["appsmith.theme.borderRadius.appBorderRadius"],
              "appsmith.theme": [
                "appsmith.theme.borderRadius",
                "appsmith.theme.boxShadow",
                "appsmith.theme.colors",
                "appsmith.theme.fontFamily",
              ],
              appsmith: ["appsmith.theme", "appsmith.store"],
              "appsmith.theme.boxShadow": ["appsmith.theme.boxShadow.appBoxShadow"],
              Input1: [
                "Input1.inputText",
                "Input1.meta",
                "Input1.defaultText",
                "Input1.text",
                "Input1.accentColor",
                "Input1.borderRadius",
                "Input1.value",
                "Input1.isValid",
                "Input1.inputType",
                "Input1.isRequired",
              ],
              "Input1.meta": ["Input1.meta.inputText", "Input1.meta.text"],
              "appsmith.theme.colors": ["appsmith.theme.colors.primaryColor"],
              Text1: [
                "Text1.truncateButtonColor",
                "Text1.fontFamily",
                "Text1.borderRadius",
                "Text1.text",
                "Text1.value",
              ],
              "appsmith.theme.fontFamily": ["appsmith.theme.fontFamily.appFont"],
              Canvas2: ["Canvas2.borderRadius", "Canvas2.boxShadow"],
              containerPlayground: ["containerPlayground.borderRadius", "containerPlayground.boxShadow"],
              btnCalculate: ["btnCalculate.onClick", "btnCalculate.buttonColor", "btnCalculate.borderRadius"],
              calculatedTxt: [
                "calculatedTxt.truncateButtonColor",
                "calculatedTxt.fontFamily",
                "calculatedTxt.borderRadius",
                "calculatedTxt.text",
                "calculatedTxt.value",
              ],
              "appsmith.store": ["appsmith.store.varCalculated"],
              Canvas3: ["Canvas3.borderRadius", "Canvas3.boxShadow"],
              containerActions: ["containerActions.borderRadius", "containerActions.boxShadow"],
              Canvas1: ["Canvas1.borderRadius", "Canvas1.boxShadow"],
              containerRoot: ["containerRoot.borderRadius", "containerRoot.boxShadow"],
            },
            evaluationOrder: [],
          },
          {
            timeTakenForSetupUpdateTree: {
              calculateSubTreeSortOrder: "0.40 ms",
              clone: "0.00 ms",
            },
          },
          {
            differences: [
              {
                kind: "E",
                path: ["appsmith", "workspaceName"],
                lhs: "",
                rhs: "Peter's apps",
              },
            ],
            translatedDiffs: [
              {
                payload: {
                  propertyPath: "appsmith.workspaceName",
                  value: "",
                },
                event: "NOOP",
              },
            ],
          },
          {
            timeTakenForEvalAndValidateSubTree: {
              evaluation: "0.40 ms",
            },
          },
          {
            timeTakenForEvalAndValidateSubTree: {
              evaluation: "0.30 ms",
            },
          },
          {
            log: "replay updating",
            updateTime: "0.30000000074505806 ms",
          },
        ],
      },
    ],
  },
]



const workers = [
  {
    "workers.Evaluation.fn.storeFn - (storeValue)": {
      TriggerEmitter: {
        "event": "process_store_updates",
        "payload": {
          "type": "STORE_VALUE",
          "payload": {
            "key": "varCalculated",
            "value": "",
            "persist": true
          }
        }
      },
      dataTreeEvaluator: {
        "dependencyMap": {},
        "sortedDependencies": [
          "appsmith.theme.boxShadow.appBoxShadow",
          "containerRoot.boxShadow",
          "appsmith.theme.borderRadius.appBorderRadius",
          "containerRoot.borderRadius",
          "containerRoot",
          "Canvas1.boxShadow",
          "Canvas1.borderRadius",
          "Canvas1",
          "containerActions.boxShadow",
          "containerActions.borderRadius",
          "containerActions",
          "Canvas3.boxShadow",
          "Canvas3.borderRadius",
          "Canvas3",
          "appsmith.store.varCalculated",
          "calculatedTxt.text",
          "calculatedTxt.value",
          "calculatedTxt.borderRadius",
          "appsmith.theme.fontFamily.appFont",
          "calculatedTxt.fontFamily",
          "appsmith.theme.colors.primaryColor",
          "calculatedTxt.truncateButtonColor",
          "calculatedTxt",
          "btnCalculate.borderRadius",
          "btnCalculate.buttonColor",
          "btnCalculate.onClick",
          "btnCalculate",
          "containerPlayground.boxShadow",
          "containerPlayground.borderRadius",
          "containerPlayground",
          "Canvas2.boxShadow",
          "Canvas2.borderRadius",
          "Canvas2",
          "Input1.defaultText",
          "Input1.meta.text",
          "Input1.text",
          "Text1.text",
          "Text1.value",
          "Text1.borderRadius",
          "Text1.fontFamily",
          "Text1.truncateButtonColor",
          "Text1",
          "Input1.meta.inputText",
          "Input1.meta",
          "Input1.isRequired",
          "Input1.inputType",
          "Input1.inputText",
          "Input1.isValid",
          "Input1.value",
          "Input1.borderRadius",
          "Input1.accentColor",
          "Input1",
          "appsmith.store",
          "appsmith.theme.fontFamily",
          "appsmith.theme.colors",
          "appsmith.theme.boxShadow",
          "appsmith.theme.borderRadius",
          "appsmith.theme",
          "appsmith",
          "MainContainer.boxShadow",
          "MainContainer.borderRadius",
          "MainContainer",
          "localVariables.varCalculated",
          "localVariables.body",
          "localVariables"
        ],
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
            "appsmith.store.varCalculated"
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
            "appsmith.theme",
            "appsmith.store"
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
          "appsmith.store": [
            "appsmith.store.varCalculated"
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
          "appsmith.store.varCalculated": [
            "calculatedTxt.text",
            "appsmith.store"
          ],
          "calculatedTxt.text": [
            "calculatedTxt.value",
            "calculatedTxt"
          ],
          "localVariables.body": [
            "localVariables"
          ],
          "localVariables.varCalculated": [
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
          "appsmith.store": [
            "appsmith"
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
        },
        "widgetConfigMap": {
          "WDS_BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_INPUT_WIDGET": {
            "defaultProperties": {
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.rawText) || this.rawText === \"\";          value = isEmpty ? null : Number(this.rawText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.rawText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_CHECKBOX_WIDGET": {
            "defaultProperties": {
              "isChecked": "defaultCheckedState"
            },
            "derivedProperties": {
              "value": "{{!!this.isChecked}}",
              "isValid": "{{ this.isRequired ? !!this.isChecked : true }}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_ICON_BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_TABLE_WIDGET": {
            "defaultProperties": {
              "searchText": "defaultSearchText",
              "selectedRowIndex": "defaultSelectedRowIndex",
              "selectedRowIndices": "defaultSelectedRowIndices"
            },
            "derivedProperties": {
              "selectedRow": "{{(()=>{let index = -1;    /*     * If multiRowSelection is turned on, use the last index to     * populate the selectedRowIndex     */    if (this.multiRowSelection) {      if (        _.isArray(this.selectedRowIndices) &&        this.selectedRowIndices.length &&        this.selectedRowIndices.every((i) => _.isNumber(i))      ) {        index = this.selectedRowIndices[this.selectedRowIndices.length - 1];      } else if (_.isNumber(this.selectedRowIndices)) {        index = this.selectedRowIndices;      }    } else if (      !_.isNil(this.selectedRowIndex) &&      !_.isNaN(parseInt(this.selectedRowIndex))    ) {      index = parseInt(this.selectedRowIndex);    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    let selectedRow;    /*     * Note(Balaji): Need to include customColumn values in the selectedRow (select, rating)     * It should have updated values.     */    if (index > -1) {      selectedRow = { ...rows[index] };    } else {      /*       *  If index is not a valid, selectedRow should have       *  proper row structure with empty string values       */      selectedRow = {};      Object.keys(rows[0]).forEach((key) => {        selectedRow[key] = \"\";      });    }    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return _.omit(selectedRow, keysToBeOmitted);})()}}",
              "triggeredRow": "{{(()=>{let index = -1;    const parsedTriggeredRowIndex = parseInt(this.triggeredRowIndex);    if (!_.isNaN(parsedTriggeredRowIndex)) {      index = parsedTriggeredRowIndex;    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    let triggeredRow;    /*     * Note(Balaji): Need to include customColumn values in the triggeredRow (select, rating)     * It should have updated values.     */    if (index > -1) {      const row = rows.find((row) => row.__originalIndex__ === index);      triggeredRow = { ...row };    } else {      /*       *  If triggeredRowIndex is not a valid index, triggeredRow should       *  have proper row structure with empty string values       */      triggeredRow = {};      Object.keys(rows[0]).forEach((key) => {        triggeredRow[key] = \"\";      });    }    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return _.omit(triggeredRow, keysToBeOmitted);})()}}",
              "selectedRows": "{{(()=>{if (!this.multiRowSelection) {      return [];    }    let indices = [];    if (      _.isArray(this.selectedRowIndices) &&      this.selectedRowIndices.every((i) => _.isNumber(i))    ) {      indices = this.selectedRowIndices;    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return indices.map((index) => _.omit(rows[index], keysToBeOmitted));})()}}",
              "triggerRowSelection": "{{!!this.onRowSelected}}",
              "processedTableData": "{{(()=>{let data;    if (_.isArray(this.tableData)) {      /* Populate meta keys (__originalIndex__, __primaryKey__) and transient values */      data = this.tableData.map((row, index) => ({        ...row,        __originalIndex__: index,        __primaryKey__: this.primaryColumnId          ? row[this.primaryColumnId]          : undefined,        ...this.transientTableData[index],      }));    } else {      data = [];    }    return data;})()}}",
              "orderedTableColumns": "{{(()=>{let columns = [];    let existingColumns = this.primaryColumns || {};    /*     * Assign index based on the columnOrder     */    if (      _.isArray(this.columnOrder) &&      this.columnOrder.length > 0 &&      Object.keys(existingColumns).length > 0    ) {      const newColumnsInOrder = {};      let index = 0;      _.uniq(this.columnOrder).forEach((columnId) => {        if (existingColumns[columnId]) {          newColumnsInOrder[columnId] = Object.assign(            {},            existingColumns[columnId],            {              index,            },          );          index++;        }      });      existingColumns = newColumnsInOrder;    }    const sortByColumn = this.sortOrder && this.sortOrder.column;    const isAscOrder = this.sortOrder && this.sortOrder.order === \"asc\";    /* set sorting flags and convert the existing columns into an array */    Object.values(existingColumns).forEach((column) => {      /* guard to not allow columns without id */      if (column.id) {        columns.push({          ...column,          isAscOrder: column.id === sortByColumn ? isAscOrder : undefined,        });      }    });    return columns;})()}}",
              "filteredTableData": "{{(()=>{ /* Make a shallow copy */    const primaryColumns = this.primaryColumns || {};    let processedTableData = [...this.processedTableData];    const derivedColumns = {};    Object.keys(primaryColumns).forEach((id) => {      if (primaryColumns[id] && primaryColumns[id].isDerived) {        derivedColumns[id] = primaryColumns[id];      }    });    if (!processedTableData || !processedTableData.length) {      return [];    }    /* extend processedTableData with values from     *  - computedValues, in case of normal column     *  - empty values, in case of derived column     */    if (primaryColumns && _.isPlainObject(primaryColumns)) {      Object.entries(primaryColumns).forEach(([id, column]) => {        let computedValues = [];        if (column && column.computedValue) {          if (_.isString(column.computedValue)) {            try {              computedValues = JSON.parse(column.computedValue);            } catch (e) {              /* do nothing */            }          } else if (_.isArray(column.computedValue)) {            computedValues = column.computedValue;          }        }        /* for derived columns inject empty strings */        if (          computedValues.length === 0 &&          derivedColumns &&          derivedColumns[id]        ) {          computedValues = Array(processedTableData.length).fill(\"\");        }        computedValues.forEach((computedValue, index) => {          processedTableData[index] = {            ...processedTableData[index],            [column.alias]: computedValue,          };        });      });    }    const columns = this.orderedTableColumns;    const sortByColumnId = this.sortOrder.column;    let sortedTableData;    if (sortByColumnId) {      const sortBycolumn = columns.find(        (column) => column.id === sortByColumnId,      );      const sortByColumnOriginalId = sortBycolumn.alias;      const columnType =        sortBycolumn && sortBycolumn.columnType          ? sortBycolumn.columnType          : \"text\";      const inputFormat = sortBycolumn.inputFormat;      const isEmptyOrNil = (value) => {        return _.isNil(value) || value === \"\";      };      const isAscOrder = this.sortOrder.order === \"asc\";      const sortByOrder = (isAGreaterThanB) => {        if (isAGreaterThanB) {          return isAscOrder ? 1 : -1;        } else {          return isAscOrder ? -1 : 1;        }      };      sortedTableData = processedTableData.sort((a, b) => {        if (_.isPlainObject(a) && _.isPlainObject(b)) {          if (            isEmptyOrNil(a[sortByColumnOriginalId]) ||            isEmptyOrNil(b[sortByColumnOriginalId])          ) {            /* push null, undefined and \"\" values to the bottom. */            return isEmptyOrNil(a[sortByColumnOriginalId]) ? 1 : -1;          } else {            switch (columnType) {              case \"number\":              case \"currency\":                return sortByOrder(                  Number(a[sortByColumnOriginalId]) >                    Number(b[sortByColumnOriginalId]),                );              case \"date\":                try {                  return sortByOrder(                    moment(a[sortByColumnOriginalId], inputFormat).isAfter(                      moment(b[sortByColumnOriginalId], inputFormat),                    ),                  );                } catch (e) {                  return -1;                }              case \"url\":                const column = primaryColumns[sortByColumnOriginalId];                if (column && column.displayText) {                  if (_.isString(column.displayText)) {                    return sortByOrder(false);                  } else if (_.isArray(column.displayText)) {                    return sortByOrder(                      column.displayText[a.__originalIndex__]                        .toString()                        .toLowerCase() >                        column.displayText[b.__originalIndex__]                          .toString()                          .toLowerCase(),                    );                  }                }              default:                return sortByOrder(                  a[sortByColumnOriginalId].toString().toLowerCase() >                    b[sortByColumnOriginalId].toString().toLowerCase(),                );            }          }        } else {          return isAscOrder ? 1 : 0;        }      });    } else {      sortedTableData = [...processedTableData];    }    const ConditionFunctions = {      isExactly: (a, b) => {        return a.toString() === b.toString();      },      empty: (a) => {        return _.isNil(a) || _.isEmpty(a.toString());      },      notEmpty: (a) => {        return !_.isNil(a) && !_.isEmpty(a.toString());      },      notEqualTo: (a, b) => {        return a.toString() !== b.toString();      },      /* Note: Duplicate of isExactly */      isEqualTo: (a, b) => {        return a.toString() === b.toString();      },      lessThan: (a, b) => {        return Number(a) < Number(b);      },      lessThanEqualTo: (a, b) => {        return Number(a) <= Number(b);      },      greaterThan: (a, b) => {        return Number(a) > Number(b);      },      greaterThanEqualTo: (a, b) => {        return Number(a) >= Number(b);      },      contains: (a, b) => {        try {          return a            .toString()            .toLowerCase()            .includes(b.toString().toLowerCase());        } catch (e) {          return false;        }      },      doesNotContain: (a, b) => {        try {          return !a            .toString()            .toLowerCase()            .includes(b.toString().toLowerCase());        } catch (e) {          return false;        }      },      startsWith: (a, b) => {        try {          return (            a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) === 0          );        } catch (e) {          return false;        }      },      endsWith: (a, b) => {        try {          const _a = a.toString().toLowerCase();          const _b = b.toString().toLowerCase();          return (            _a.lastIndexOf(_b) >= 0 &&            _a.length === _a.lastIndexOf(_b) + _b.length          );        } catch (e) {          return false;        }      },      is: (a, b) => {        return moment(a).isSame(moment(b), \"minute\");      },      isNot: (a, b) => {        return !moment(a).isSame(moment(b), \"minute\");      },      isAfter: (a, b) => {        return moment(a).isAfter(moment(b), \"minute\");      },      isBefore: (a, b) => {        return moment(a).isBefore(moment(b), \"minute\");      },      isChecked: (a) => {        return a === true;      },      isUnChecked: (a) => {        return a === false;      },    };    let searchKey;    /* skipping search when client side search is turned off */    if (      this.searchText &&      (this.isVisibleSearch === undefined || this.isVisibleSearch === true) &&      (!this.onSearchTextChanged || this.enableClientSideSearch)    ) {      searchKey = this.searchText.toLowerCase();    } else {      searchKey = \"\";    }    /*     * We need to omit hidden column values from being included     * in the search     */    const hiddenColumns = Object.values(this.primaryColumns)      .filter((column) => !column.isVisible)      .map((column) => column.alias);    const finalTableData = sortedTableData.filter((row) => {      let isSearchKeyFound = true;      const columnWithDisplayText = Object.values(this.primaryColumns).filter(        (column) => column.columnType === \"url\" && column.displayText,      );      const displayedRow = {        ...row,        ...columnWithDisplayText.reduce((acc, column) => {          let displayText;          if (_.isArray(column.displayText)) {            displayText = column.displayText[row.__originalIndex__];          } else {            displayText = column.displayText;          }          acc[column.alias] = displayText;          return acc;        }, {}),      };      if (searchKey) {        isSearchKeyFound = Object.values(_.omit(displayedRow, hiddenColumns))          .join(\", \")          .toLowerCase()          .includes(searchKey);      }      if (!isSearchKeyFound) {        return false;      }      /* when there is no filter defined or when server side filtering is enabled prevent client-side filtering  */      if (        !this.filters ||        this.filters.length === 0 ||        this.enableServerSideFiltering      ) {        return true;      }      const filterOperator =        this.filters.length >= 2 ? this.filters[1].operator : \"OR\";      let isSatisfyingFilters = filterOperator === \"AND\";      for (let i = 0; i < this.filters.length; i++) {        let filterResult = true;        try {          const conditionFunction =            ConditionFunctions[this.filters[i].condition];          if (conditionFunction) {            filterResult = conditionFunction(              displayedRow[this.filters[i].column],              this.filters[i].value,            );          }        } catch (e) {          filterResult = false;        }        /* if one filter condition is not satisfied and filter operator is AND, bailout early */        if (!filterResult && filterOperator === \"AND\") {          isSatisfyingFilters = false;          break;        } else if (filterResult && filterOperator === \"OR\") {          /* if one filter condition is satisfied and filter operator is OR, bailout early */          isSatisfyingFilters = true;          break;        }        isSatisfyingFilters =          filterOperator === \"AND\"            ? isSatisfyingFilters && filterResult            : isSatisfyingFilters || filterResult;      }      return isSatisfyingFilters;    });    return finalTableData;})()}}",
              "updatedRows": "{{(()=>{ const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    /*     * case 1. If transientTableData is not empty, return aray of updated row.     * case 2. If transientTableData is empty, return empty array     *     * updated row structure     *  {     *    index: {{original index of the row}},     *    {{primary_column}}: {{primary_column_value}} // only if primary has been set     *    updatedFields: {     *      {{updated_column_1}}: {{updated_column_1_value}}     *    },     *    allFields: {     *      {{updated_column_1}}: {{updated_column_1_value}}     *      {{rest of the fields from the row}}     *    }     *  }     */    /* case 1 */    if (      this.transientTableData &&      !!Object.keys(this.transientTableData).length    ) {      const updatedRows = [];      const tableData = this.processedTableData || this.tableData;      /* updatedRows is not sorted by index */      Object.entries(this.transientTableData)        .filter((entry) => {          return (            !_.isNil(entry[0]) && !!entry[0] && _.isFinite(Number(entry[0]))          );        })        .forEach((entry) => {          const key = entry[0];          const value = entry[1];          const row = tableData.find(            (row) => row.__originalIndex__ === Number(key),          );          updatedRows.push({            index: Number(key),            [this.primaryColumnId]: row[this.primaryColumnId],            updatedFields: value,            allFields: _.omit(row, keysToBeOmitted) || {},          });        });      return updatedRows;    } else {      /* case 2 */      return [];    }})()}}",
              "updatedRowIndices": "{{(()=>{ /* should return the keys of the transientTableData */    if (this.transientTableData) {      return Object.keys(this.transientTableData).map((index) =>        Number(index),      );    } else {      return [];    }})()}}",
              "updatedRow": "{{(()=>{ let index = -1;    const parsedUpdatedRowIndex = parseInt(this.updatedRowIndex);    if (!_.isNaN(parsedUpdatedRowIndex)) {      index = parsedUpdatedRowIndex;    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    let updatedRow;    if (index > -1) {      const row = rows.find((row) => row.__originalIndex__ === index);      updatedRow = { ...row };    } else {      /*       *  If updatedRowIndex is not a valid index, updatedRow should       *  have proper row structure with empty string values       */      updatedRow = {};      if (rows && rows[0]) {        Object.keys(rows[0]).forEach((key) => {          updatedRow[key] = \"\";        });      }    }    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return _.omit(updatedRow, keysToBeOmitted);})()}}",
              "pageOffset": "{{(()=>{const pageSize =      this.serverSidePaginationEnabled && this.tableData        ? this.tableData?.length        : this.pageSize;    if (      Number.isFinite(this.pageNo) &&      Number.isFinite(pageSize) &&      this.pageNo >= 0 &&      pageSize >= 0    ) {      /* Math.max fixes the value of (pageNo - 1) to a minimum of 0 as negative values are not valid */      return Math.max(this.pageNo - 1, 0) * pageSize;    }    return 0;})()}}",
              "isEditableCellsValid": "{{(()=>{ if (      (!this.editableCell?.column && !this.isAddRowInProgress) ||      !this.primaryColumns    ) {      return {};    }    const createRegex = (regex) => {      if (!regex) {        return new RegExp(\"//\");      }      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      let parsedRegex;      if (!regexParts) {        parsedRegex = new RegExp(regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }      return parsedRegex;    };    let editableColumns = [];    const validatableColumns = [\"text\", \"number\", \"currency\"];    if (this.isAddRowInProgress) {      Object.values(this.primaryColumns)        .filter(          (column) =>            column.isEditable && validatableColumns.includes(column.columnType),        )        .forEach((column) => {          editableColumns.push([column, this.newRow[column.alias]]);        });    } else {      const editedColumn = Object.values(this.primaryColumns).find(        (column) => column.alias === this.editableCell?.column,      );      if (validatableColumns.includes(editedColumn.columnType)) {        editableColumns.push([editedColumn, this.editableCell?.value]);      }    }    const validationMap = {};    editableColumns.forEach((validationObj) => {      const editedColumn = validationObj[0];      const value = validationObj[1];      if (editedColumn && editedColumn.validation) {        const validation = editedColumn.validation;        /* General validations */        if (          !validation.isColumnEditableCellRequired &&          (value === \"\" || _.isNil(value))        ) {          validationMap[editedColumn.alias] = true;          return;        } else if (          (!_.isNil(validation.isColumnEditableCellValid) &&            !validation.isColumnEditableCellValid) ||          (validation.regex && !createRegex(validation.regex).test(value)) ||          (validation.isColumnEditableCellRequired &&            (value === \"\" || _.isNil(value)))        ) {          validationMap[editedColumn.alias] = false;          return;        }        /* Column type related validations */        switch (editedColumn.columnType) {          case \"number\":          case \"currency\":            if (              !_.isNil(validation.min) &&              validation.min !== \"\" &&              validation.min > value            ) {              validationMap[editedColumn.alias] = false;              return;            }            if (              !_.isNil(validation.max) &&              validation.max !== \"\" &&              validation.max < value            ) {              validationMap[editedColumn.alias] = false;              return;            }            break;        }      }      validationMap[editedColumn.alias] = true;    });    return validationMap;})()}}",
              "tableHeaders": "{{(()=>{const columns = this.primaryColumns      ? Object.values(this.primaryColumns)      : [];    return columns      .sort((a, b) => a.index - b.index)      .map((column) => ({        id: column?.id,        label: column?.label,        isVisible: column?.isVisible,      }));})()}}"
            },
            "metaProperties": {
              "pageNo": 1,
              "filters": [],
              "sortOrder": {
                "column": "",
                "order": null
              },
              "transientTableData": {},
              "updatedRowIndex": -1,
              "editableCell": {
                "column": "",
                "index": -1,
                "inputValue": "",
                "value": "",
                "initialValue": ""
              },
              "columnEditableCellValue": {},
              "selectColumnFilterText": {},
              "isAddRowInProgress": false,
              "previousPageVisited": false,
              "nextPageVisited": false
            }
          },
          "WDS_CURRENCY_INPUT_WIDGET": {
            "defaultProperties": {
              "currencyCode": "defaultCurrencyCode",
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    try {      isEmpty = _.isNil(this.rawText) || this.rawText === \"\";      value = isEmpty ? null : Number(this.rawText);      hasValidValue = Number.isFinite(value);    } catch (e) {      return false;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    if (parsedRegex) {      return parsedRegex.test(this.rawText);    } else {      return hasValidValue;    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_TOOLBAR_BUTTONS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_PHONE_INPUT_WIDGET": {
            "defaultProperties": {
              "dialCode": "defaultDialCode",
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    try {      isEmpty = _.isNil(this.rawText) || this.rawText === \"\";      value = isEmpty ? null : Number(this.rawText);      hasValidValue = Number.isFinite(value);    } catch (e) {      return false;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    if (parsedRegex) {      return parsedRegex.test(this.rawText);    } else {      return hasValidValue;    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_CHECKBOX_GROUP_WIDGET": {
            "defaultProperties": {
              "selectedValues": "defaultSelectedValues"
            },
            "derivedProperties": {
              "value": "{{this.selectedValues}}",
              "isValid": "{{ this.isRequired ? !!this.selectedValues.length : true }}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_COMBOBOX_WIDGET": {
            "defaultProperties": {
              "selectedOptionValue": "defaultOptionValue"
            },
            "derivedProperties": {
              "options": "{{(()=>{let labels = [],      values = [],      sourceData = this.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    if (typeof this.optionLabel === \"string\") {      labels = sourceData.map((d) => d[this.optionLabel]);    } else if (_.isArray(this.optionLabel)) {      labels = processOptionArray(this.optionLabel, sourceData);    }    if (typeof this.optionValue === \"string\") {      values = sourceData.map((d) => d[this.optionValue]);    } else if (_.isArray(this.optionValue)) {      values = processOptionArray(this.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValue) && this.selectedOptionValue !== \"\"      : true;})()}}",
              "selectedOptionValue": "{{(()=>{const isServerSideFiltered = this.serverSideFiltering;    const options = this.options ?? [];    let value = this.value?.value ?? this.value;    const valueIndex = _.findIndex(options, (option) => option.value === value);    if (valueIndex === -1) {      if (!isServerSideFiltered) {        value = \"\";      }      if (        isServerSideFiltered &&        !_.isPlainObject(this.value) &&        !this.isDirty      ) {        value = \"\";      }    }    return value;})()}}",
              "selectedOptionLabel": "{{(()=>{undefined})()}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_SWITCH_WIDGET": {
            "defaultProperties": {
              "isSwitchedOn": "defaultSwitchState"
            },
            "derivedProperties": {
              "value": "{{!!this.isSwitchedOn}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_SWITCH_GROUP_WIDGET": {
            "defaultProperties": {
              "selectedValues": "defaultSelectedValues"
            },
            "derivedProperties": {},
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_RADIO_GROUP_WIDGET": {
            "defaultProperties": {
              "selectedOptionValue": "defaultOptionValue"
            },
            "derivedProperties": {
              "selectedOption": "{{_.find(this.options, { value: this.selectedOptionValue })}}",
              "isValid": "{{ this.isRequired ? !!this.selectedOptionValue : true }}",
              "value": "{{this.selectedOptionValue}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_MENU_BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "CUSTOM_WIDGET": {
            "defaultProperties": {
              "model": "defaultModel"
            },
            "derivedProperties": {},
            "metaProperties": {}
          },
          "SECTION_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "ZONE_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_PARAGRAPH_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "value": "{{ this.text }}"
            },
            "metaProperties": {}
          },
          "WDS_HEADING_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "value": "{{ this.text }}"
            },
            "metaProperties": {}
          },
          "WDS_MODAL_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "name": "{{this.widgetName}}"
            },
            "metaProperties": {}
          },
          "WDS_STATS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_KEY_VALUE_WIDGET": {
            "defaultProperties": {
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.rawText) || this.rawText === \"\";          value = isEmpty ? null : Number(this.rawText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.rawText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_INLINE_BUTTONS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_EMAIL_INPUT_WIDGET": {
            "defaultProperties": {
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.rawText) || this.rawText === \"\";          value = isEmpty ? null : Number(this.rawText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.rawText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_PASSWORD_INPUT_WIDGET": {
            "defaultProperties": {
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.rawText) || this.rawText === \"\";          value = isEmpty ? null : Number(this.rawText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.rawText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_NUMBER_INPUT_WIDGET": {
            "defaultProperties": {
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.rawText) || this.rawText === \"\";          value = isEmpty ? null : Number(this.rawText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.rawText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_MULTILINE_INPUT_WIDGET": {
            "defaultProperties": {
              "rawText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.rawText) || this.rawText === \"\";          value = isEmpty ? null : Number(this.rawText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.rawText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.rawText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.rawText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "rawText": "",
              "text": "",
              "isFocused": false,
              "isDirty": false
            }
          },
          "WDS_SELECT_WIDGET": {
            "defaultProperties": {
              "selectedOptionValue": "defaultOptionValue"
            },
            "derivedProperties": {
              "options": "{{(()=>{let labels = [],      values = [],      sourceData = this.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    if (typeof this.optionLabel === \"string\") {      labels = sourceData.map((d) => d[this.optionLabel]);    } else if (_.isArray(this.optionLabel)) {      labels = processOptionArray(this.optionLabel, sourceData);    }    if (typeof this.optionValue === \"string\") {      values = sourceData.map((d) => d[this.optionValue]);    } else if (_.isArray(this.optionValue)) {      values = processOptionArray(this.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValue) && this.selectedOptionValue !== \"\"      : true;})()}}",
              "selectedOptionValue": "{{(()=>{const isServerSideFiltered = this.serverSideFiltering;    const options = this.options ?? [];    let value = this.value?.value ?? this.value;    const valueIndex = _.findIndex(options, (option) => option.value === value);    if (valueIndex === -1) {      if (!isServerSideFiltered) {        value = \"\";      }      if (        isServerSideFiltered &&        !_.isPlainObject(this.value) &&        !this.isDirty      ) {        value = \"\";      }    }    return value;})()}}",
              "selectedOptionLabel": "{{(()=>{undefined})()}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_DATEPICKER_WIDGET": {
            "defaultProperties": {
              "value": "defaultDate"
            },
            "derivedProperties": {
              "isValid": "{{(() => {const parsedMinDate = new Date(this.minDate);\n    const parsedMaxDate = new Date(this.maxDate);\n    const parsedSelectedDate = this.selectedDate ? moment(new Date(this.selectedDate)) : null;\n\n    // only do validation when the date is dirty\n    if (!this.isDirty) {\n      return true;\n    }\n    if (!parsedSelectedDate && !this.isRequired) {\n      return true;\n    }\n    if (!parsedSelectedDate && this.isRequired) {\n      return false;\n    }\n    if (this.minDate && this.maxDate) {\n      return parsedSelectedDate.isBetween(parsedMinDate, parsedMaxDate);\n    }\n    if (this.minDate) {\n      return parsedSelectedDate.isAfter(parsedMinDate);\n    }\n    if (this.maxDate) {\n      return parsedSelectedDate.isBefore(parsedMaxDate);\n    }\n    return true;})()}}",
              "selectedDate": "{{ this.value ? moment(this.value).toISOString() : \"\" }}",
              "formattedDate": "{{ this.value ? moment(this.value).format(this.dateFormat) : \"\" }}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "WDS_MULTI_SELECT_WIDGET": {
            "defaultProperties": {
              "selectedOptionValues": "defaultOptionValues"
            },
            "derivedProperties": {
              "options": "{{(()=>{let labels = [],      values = [],      sourceData = this.sourceData || [];    if (typeof this.optionLabel === \"string\") {      labels = sourceData.map((d) => d[this.optionLabel]);    } else if (_.isArray(this.optionLabel)) {      labels = this.optionLabel;    }    if (typeof this.optionValue === \"string\") {      values = sourceData.map((d) => d[this.optionValue]);    } else if (_.isArray(this.optionValue)) {      values = this.optionValue;    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValues) &&          this.selectedOptionValues.length !== 0      : true;})()}}",
              "selectedOptionValues": "{{(()=>{const options = this.options ?? [];    const selectedOptions = this.selectedOptions ?? [];    const values = selectedOptions.map((o) => o.value ?? o);    const valuesInOptions = options.map((o) => o.value);    const filteredValues = values.filter((value) =>      valuesInOptions.includes(value),    );    if (!this.isDirty && filteredValues.length !== values.length) {      return filteredValues;    }    return values;})()}}",
              "selectedOptionLabels": "{{(()=>{const values = this.selectedOptionValues;    const selectedOptions = this.selectedOptions ?? [];    const options = this.options ?? [];    return values      .map((value) => {        const label = options.find((option) => value === option.value)?.label;        if (label) {          return label;        } else {          return selectedOptions.find(            (option) => value === (option.value ?? option),          )?.label;        }      })      .filter((val) => !_.isNil(val));})()}}",
              "value": "{{this.selectedOptionValues}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "CANVAS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "SKELETON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "CONTAINER_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "TEXT_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "value": "{{ this.text }}"
            },
            "metaProperties": {}
          },
          "TABLE_WIDGET": {
            "defaultProperties": {
              "searchText": "defaultSearchText",
              "selectedRowIndex": "defaultSelectedRow",
              "selectedRowIndices": "defaultSelectedRow"
            },
            "derivedProperties": {
              "selectedRow": "{{(()=>{let selectedRowIndices = [];    if (      Array.isArray(this.selectedRowIndices) &&      this.selectedRowIndices.every((el) => typeof el === \"number\")    ) {      selectedRowIndices = this.selectedRowIndices;    } else if (typeof this.selectedRowIndices === \"number\") {      selectedRowIndices = [this.selectedRowIndices];    }    let selectedRowIndex;    if (this.multiRowSelection) {      selectedRowIndex = selectedRowIndices.length        ? selectedRowIndices[selectedRowIndices.length - 1]        : -1;    } else {      selectedRowIndex =        this.selectedRowIndex === undefined ||        Number.isNaN(parseInt(this.selectedRowIndex))          ? -1          : parseInt(this.selectedRowIndex);    }    const filteredTableData =      this.filteredTableData || this.sanitizedTableData || [];    const internalKeysToOmit = [\"__originalIndex__\", \"__primaryKey__\"];    if (selectedRowIndex === -1) {      const emptyRow = { ...filteredTableData[0] };      Object.keys(emptyRow).forEach((key) => {        emptyRow[key] = \"\";      });      return _.omit(emptyRow, internalKeysToOmit);    }    const selectedRow = { ...filteredTableData[selectedRowIndex] };    return _.omit(selectedRow, internalKeysToOmit);})()}}",
              "triggeredRow": "{{(()=>{const triggeredRowIndex =      this.triggeredRowIndex === undefined ||      Number.isNaN(parseInt(this.triggeredRowIndex))        ? -1        : parseInt(this.triggeredRowIndex);    const tableData = this.sanitizedTableData || [];    const internalKeysToOmit = [\"__originalIndex__\", \"__primaryKey__\"];    if (triggeredRowIndex === -1) {      const emptyRow = { ...tableData[0] };      Object.keys(emptyRow).forEach((key) => {        emptyRow[key] = \"\";      });      return _.omit(emptyRow, internalKeysToOmit);    }    const triggeredRow = { ...tableData[triggeredRowIndex] };    return _.omit(triggeredRow, internalKeysToOmit);})()}}",
              "selectedRows": "{{(()=>{const selectedRowIndices = Array.isArray(this.selectedRowIndices)      ? this.selectedRowIndices      : [];    const filteredTableData =      this.filteredTableData || this.sanitizedTableData || [];    const internalKeysToOmit = [\"__originalIndex__\", \"__primaryKey__\"];    const selectedRows = selectedRowIndices.map((ind) =>      _.omit(filteredTableData[ind], internalKeysToOmit),    );    return selectedRows;})()}}",
              "pageSize": "{{(()=>{const TABLE_SIZES = {      DEFAULT: {        COLUMN_HEADER_HEIGHT: 32,        TABLE_HEADER_HEIGHT: 38,        ROW_HEIGHT: 40,        ROW_FONT_SIZE: 14,      },      SHORT: {        COLUMN_HEADER_HEIGHT: 32,        TABLE_HEADER_HEIGHT: 38,        ROW_HEIGHT: 20,        ROW_FONT_SIZE: 12,      },      TALL: {        COLUMN_HEADER_HEIGHT: 32,        TABLE_HEADER_HEIGHT: 38,        ROW_HEIGHT: 60,        ROW_FONT_SIZE: 18,      },    };    const compactMode = this.compactMode || \"DEFAULT\";    const componentHeight = this.componentHeight - 10;    const tableSizes = TABLE_SIZES[compactMode];    let pageSize = Math.floor(      (componentHeight -        tableSizes.TABLE_HEADER_HEIGHT -        tableSizes.COLUMN_HEADER_HEIGHT) /        tableSizes.ROW_HEIGHT,    );    if (      componentHeight -        (tableSizes.TABLE_HEADER_HEIGHT +          tableSizes.COLUMN_HEADER_HEIGHT +          tableSizes.ROW_HEIGHT * pageSize) >      0    ) {      pageSize += 1;    }    return pageSize;})()}}",
              "triggerRowSelection": "{{!!this.onRowSelected}}",
              "sanitizedTableData": "{{(()=>{const separatorRegex = /\\W+/;    if (this.tableData && Array.isArray(this.tableData)) {      return this.tableData.map((entry) => {        const sanitizedData = {};        for (const [key, value] of Object.entries(entry)) {          let sanitizedKey = key.split(separatorRegex).join(\"_\").slice(0, 200);          sanitizedKey = _.isNaN(Number(sanitizedKey))            ? sanitizedKey            : `_${sanitizedKey}`;          sanitizedData[sanitizedKey] = value;        }        return sanitizedData;      });    }    return [];})()}}",
              "tableColumns": "{{(()=>{let columns = [];    let allColumns = Object.assign({}, this.primaryColumns || {});    const data = this.sanitizedTableData || [];    if (data.length > 0) {      const columnIdsFromData = [];      for (let i = 0, tableRowCount = data.length; i < tableRowCount; i++) {        const row = data[i];        for (const key in row) {          if (!columnIdsFromData.includes(key)) {            columnIdsFromData.push(key);          }        }      }      columnIdsFromData.forEach((id) => {        if (!allColumns[id]) {          const currIndex = Object.keys(allColumns).length;          allColumns[id] = {            index: currIndex,            width: 150,            id,            horizontalAlignment: \"LEFT\",            verticalAlignment: \"CENTER\",            columnType: \"text\",            textColor: \"#231F20\",            textSize: \"PARAGRAPH\",            fontStyle: \"REGULAR\",            enableFilter: true,            enableSort: true,            isVisible: true,            isDerived: false,            label: id,            computedValue: this.sanitizedTableData.map(              (currentRow) => currentRow[id],            ),          };        }      });      const existingColumnIds = Object.keys(allColumns);      const idsNotToShow = _.without(existingColumnIds, ...columnIdsFromData)        .map((idNotInData) => {          if (allColumns[idNotInData] && !allColumns[idNotInData].isDerived)            return idNotInData;          return undefined;        })        .filter(Boolean);      idsNotToShow.forEach((id) => delete allColumns[id]);    }    const sortColumn = this.sortOrder.column;    const sortOrder = this.sortOrder.order === \"asc\" ? true : false;    if (      this.columnOrder &&      Array.isArray(this.columnOrder) &&      this.columnOrder.length > 0    ) {      const newColumnsInOrder = {};      _.uniq(this.columnOrder).forEach((id, index) => {        if (allColumns[id])          newColumnsInOrder[id] = { ...allColumns[id], index };      });      const remaining = _.without(        Object.keys(allColumns),        ...Object.keys(newColumnsInOrder),      );      const len = Object.keys(newColumnsInOrder).length;      if (remaining && remaining.length > 0) {        remaining.forEach((id, index) => {          newColumnsInOrder[id] = { ...allColumns[id], index: len + index };        });      }      allColumns = newColumnsInOrder;    }    const allColumnProperties = Object.values(allColumns);    for (let index = 0; index < allColumnProperties.length; index++) {      const columnProperties = { ...allColumnProperties[index] };      columnProperties.isAscOrder =        columnProperties.id === sortColumn ? sortOrder : undefined;      const columnData = columnProperties;      columns.push(columnData);    }    return columns.filter((column) => column.id);})()}}",
              "filteredTableData": "{{(()=>{ if (!this.sanitizedTableData || !this.sanitizedTableData.length) {      return [];    }    let derivedTableData = [...this.sanitizedTableData];    if (this.primaryColumns && _.isPlainObject(this.primaryColumns)) {      const primaryColumns = this.primaryColumns;      const columnIds = Object.keys(this.primaryColumns);      columnIds.forEach((columnId) => {        const column = primaryColumns[columnId];        let computedValues = [];        if (column && column.computedValue) {          if (_.isString(column.computedValue)) {            try {              computedValues = JSON.parse(column.computedValue);            } catch (e) {              console.error(                e,                \"Error parsing column value: \",                column.computedValue,              );            }          } else if (Array.isArray(column.computedValue)) {            computedValues = column.computedValue;          }        }        if (computedValues.length === 0) {          if (this.derivedColumns) {            const derivedColumn = this.derivedColumns[columnId];            if (derivedColumn) {              computedValues = Array(derivedTableData.length).fill(\"\");            }          }        }        for (let index = 0; index < computedValues.length; index++) {          derivedTableData[index] = {            ...derivedTableData[index],            [columnId]: computedValues[index],          };        }      });    }    derivedTableData = derivedTableData.map((item, index) => ({      ...item,      __originalIndex__: index,      __primaryKey__: this.primaryColumnId        ? item[this.primaryColumnId]        : undefined,    }));    const columns = this.tableColumns;    const sortedColumn = this.sortOrder.column;    let sortedTableData;    if (sortedColumn) {      const sortOrder = this.sortOrder.order === \"asc\" ? true : false;      const column = columns.find((column) => column.id === sortedColumn);      const columnType =        column && column.columnType ? column.columnType : \"text\";      const inputFormat = column.inputFormat;      const isEmptyOrNil = (value) => {        return _.isNil(value) || value === \"\";      };      sortedTableData = derivedTableData.sort((a, b) => {        if (_.isPlainObject(a) && _.isPlainObject(b)) {          if (isEmptyOrNil(a[sortedColumn]) || isEmptyOrNil(b[sortedColumn])) {            /* push null, undefined and \"\" values to the bottom. */            return isEmptyOrNil(a[sortedColumn]) ? 1 : -1;          } else {            switch (columnType) {              case \"number\":                return sortOrder                  ? Number(a[sortedColumn]) > Number(b[sortedColumn])                    ? 1                    : -1                  : Number(b[sortedColumn]) > Number(a[sortedColumn])                    ? 1                    : -1;              case \"date\":                try {                  return sortOrder                    ? moment(a[sortedColumn], inputFormat).isAfter(                        moment(b[sortedColumn], inputFormat),                      )                      ? 1                      : -1                    : moment(b[sortedColumn], inputFormat).isAfter(                          moment(a[sortedColumn], inputFormat),                        )                      ? 1                      : -1;                } catch (e) {                  return -1;                }              default:                return sortOrder                  ? a[sortedColumn].toString().toUpperCase() >                    b[sortedColumn].toString().toUpperCase()                    ? 1                    : -1                  : b[sortedColumn].toString().toUpperCase() >                      a[sortedColumn].toString().toUpperCase()                    ? 1                    : -1;            }          }        } else {          return sortOrder ? 1 : 0;        }      });    } else {      sortedTableData = [...derivedTableData];    }    const ConditionFunctions = {      isExactly: (a, b) => {        return a.toString() === b.toString();      },      empty: (a) => {        if (a === null || a === undefined || a === \"\") return true;        return _.isEmpty(a.toString());      },      notEmpty: (a) => {        return a !== \"\" && a !== undefined && a !== null;      },      notEqualTo: (a, b) => {        return a.toString() !== b.toString();      },      isEqualTo: (a, b) => {        return a.toString() === b.toString();      },      lessThan: (a, b) => {        const numericB = Number(b);        const numericA = Number(a);        return numericA < numericB;      },      lessThanEqualTo: (a, b) => {        const numericB = Number(b);        const numericA = Number(a);        return numericA <= numericB;      },      greaterThan: (a, b) => {        const numericB = Number(b);        const numericA = Number(a);        return numericA > numericB;      },      greaterThanEqualTo: (a, b) => {        const numericB = Number(b);        const numericA = Number(a);        return numericA >= numericB;      },      contains: (a, b) => {        try {          return a            .toString()            .toLowerCase()            .includes(b.toString().toLowerCase());        } catch (e) {          return false;        }      },      doesNotContain: (a, b) => {        try {          return !a            .toString()            .toLowerCase()            .includes(b.toString().toLowerCase());        } catch (e) {          return false;        }      },      startsWith: (a, b) => {        try {          return (            a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) === 0          );        } catch (e) {          return false;        }      },      endsWith: (a, b) => {        try {          const _a = a.toString().toLowerCase();          const _b = b.toString().toLowerCase();          return _a.length === _a.lastIndexOf(_b) + _b.length;        } catch (e) {          return false;        }      },      is: (a, b) => {        return moment(a).isSame(moment(b), \"minute\");      },      isNot: (a, b) => {        return !moment(a).isSame(moment(b), \"minute\");      },      isAfter: (a, b) => {        return moment(a).isAfter(moment(b), \"minute\");      },      isBefore: (a, b) => {        return moment(a).isBefore(moment(b), \"minute\");      },    };    const getSearchKey = () => {      if (        this.searchText &&        (!this.onSearchTextChanged || this.enableClientSideSearch)      ) {        return this.searchText.toLowerCase();      }      return \"\";    };    const finalTableData = sortedTableData.filter((item) => {      const searchFound = getSearchKey()        ? Object.values(item).join(\", \").toLowerCase().includes(getSearchKey())        : true;      if (!searchFound) return false;      if (!this.filters || this.filters.length === 0) return true;      const filters = this.filters;      const filterOperator = filters.length >= 2 ? filters[1].operator : \"OR\";      let filter = filterOperator === \"AND\";      for (let i = 0; i < filters.length; i++) {        let result = true;        try {          const conditionFunction = ConditionFunctions[filters[i].condition];          if (conditionFunction) {            result = conditionFunction(              item[filters[i].column],              filters[i].value,            );          }        } catch (e) {          console.error(e);        }        const filterValue = result;        filter =          filterOperator === \"AND\"            ? filter && filterValue            : filter || filterValue;      }      return filter;    });    return finalTableData;})()}}"
            },
            "metaProperties": {
              "pageNo": 1,
              "filters": [],
              "sortOrder": {
                "column": "",
                "order": null
              }
            }
          },
          "CHECKBOX_WIDGET": {
            "defaultProperties": {
              "isChecked": "defaultCheckedState"
            },
            "derivedProperties": {
              "value": "{{!!this.isChecked}}",
              "isValid": "{{ this.isRequired ? !!this.isChecked : true }}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "RADIO_GROUP_WIDGET": {
            "defaultProperties": {
              "selectedOptionValue": "defaultOptionValue"
            },
            "derivedProperties": {
              "selectedOption": "{{_.find(this.options, { value: this.selectedOptionValue })}}",
              "isValid": "{{ this.isRequired ? !!this.selectedOptionValue : true }}",
              "value": "{{this.selectedOptionValue}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "IMAGE_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "VIDEO_WIDGET": {
            "defaultProperties": {
              "playing": "autoPlay"
            },
            "derivedProperties": {},
            "metaProperties": {
              "playState": "NOT_STARTED",
              "playing": false
            }
          },
          "TABS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "selectedTab": "{{(()=>{if (this.selectedTabWidgetId) {      return _.find(Object.values(this.tabsObj), {        widgetId: this.selectedTabWidgetId,      }).label;    }    const isDefaultTabExist = Object.values(this.tabsObj).filter(      (tab) => tab.label === this.defaultTab,    ).length;    if (isDefaultTabExist) {      return this.defaultTab;    }    const tabLabels = Object.values(this.tabsObj);    return tabLabels.length ? tabLabels[0].label : \"\";})()}}"
            },
            "metaProperties": {}
          },
          "MODAL_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "name": "{{this.widgetName}}"
            },
            "metaProperties": {}
          },
          "CHART_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "MAP_WIDGET": {
            "defaultProperties": {
              "markers": "defaultMarkers",
              "center": "mapCenter"
            },
            "derivedProperties": {},
            "metaProperties": {}
          },
          "RICH_TEXT_EDITOR_WIDGET": {
            "defaultProperties": {
              "text": "defaultText"
            },
            "derivedProperties": {
              "value": "{{this.text}}",
              "isValid": "{{ this.isRequired ? this.text && this.text.length : true }}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "DATE_PICKER_WIDGET2": {
            "defaultProperties": {
              "value": "defaultDate"
            },
            "derivedProperties": {
              "isValid": "{{(()=>{if (!this.selectedDate && !this.isRequired) {      return true;    }    const minDate = this.minDate ? new Date(this.minDate) : null;    const maxDate = this.maxDate ? new Date(this.maxDate) : null;    const selectedDate = this.selectedDate      ? moment(new Date(this.selectedDate))      : this.selectedDate;    if (!selectedDate) {      return !this.isRequired;    }    let granularity,      inclusivity = \"[]\";    switch (this.timePrecision) {      case \"None\":        granularity = \"day\";        break;      case \"second\":      case \"minute\":      case \"millisecond\":        granularity = this.timePrecision;        break;      default:        granularity = undefined;        inclusivity = undefined;    }    if (minDate && maxDate) {      return selectedDate.isBetween(minDate, maxDate, granularity, inclusivity);    }    if (minDate) {      return selectedDate.isSameOrAfter(minDate, granularity);    }    if (maxDate) {      return selectedDate.isSameOrBefore(maxDate, granularity);    }    return true;})()}}",
              "selectedDate": "{{ this.value ? moment(this.value).toISOString() : \"\" }}",
              "formattedDate": "{{ this.value ? moment(this.value).format(this.dateFormat) : \"\" }}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "SWITCH_WIDGET": {
            "defaultProperties": {
              "isSwitchedOn": "defaultSwitchState"
            },
            "derivedProperties": {
              "value": "{{!!this.isSwitchedOn}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "FORM_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "positioning": "fixed"
            },
            "metaProperties": {
              "hasChanges": false
            }
          },
          "RATE_WIDGET": {
            "defaultProperties": {
              "rate": "defaultRate"
            },
            "derivedProperties": {
              "value": "{{ this.rate }}"
            },
            "metaProperties": {}
          },
          "IFRAME_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "TABS_MIGRATOR_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "DIVIDER_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "MENU_BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "ICON_BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "CHECKBOX_GROUP_WIDGET": {
            "defaultProperties": {
              "selectedValues": "defaultSelectedValues"
            },
            "derivedProperties": {
              "isValid": "{{ this.isRequired ? !!this.selectedValues.length : true }}",
              "value": "{{this.selectedValues}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "FILE_PICKER_WIDGET_V2": {
            "defaultProperties": {},
            "derivedProperties": {
              "isValid": "{{ this.isRequired ? this.files.length > 0 : true }}",
              "files": "{{this.selectedFiles}}"
            },
            "metaProperties": {
              "selectedFiles": [],
              "uploadedFileData": {},
              "isDirty": false
            }
          },
          "STATBOX_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "positioning": "fixed"
            },
            "metaProperties": {}
          },
          "AUDIO_RECORDER_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {
              "isDirty": false
            }
          },
          "DOCUMENT_VIEWER_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "BUTTON_GROUP_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "WDS_CUSTOM_WIDGET": {
            "defaultProperties": {
              "model": "defaultModel"
            },
            "derivedProperties": {},
            "metaProperties": {}
          },
          "MULTI_SELECT_TREE_WIDGET": {
            "defaultProperties": {
              "selectedOptionValueArr": "defaultOptionValue",
              "selectedLabel": "defaultOptionValue"
            },
            "derivedProperties": {
              "value": "{{this.selectedOptionValues}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValues) &&          this.selectedOptionValues.length !== 0      : true;})()}}",
              "flattenedOptions": "{{(()=>{const flat = (array) => {      let result = [];      array.forEach((a) => {        result.push({ value: a.value, label: a.label });        if (Array.isArray(a.children)) {          result = result.concat(flat(a.children));        }      });      return result;    };    return flat(this.options);})()}}",
              "selectedOptionValues": "{{(()=>{const options = this.flattenedOptions ?? [];    const values = this.selectedOptionValueArr ?? [];    const valuesInOptions = options.map((o) => o.value);    const filteredValues = values.filter((value) =>      valuesInOptions.includes(value),    );    return filteredValues;})()}}",
              "selectedOptionLabels": "{{(()=>{const values = this.selectedOptionValues;    const options = this.flattenedOptions ?? [];    return values      .map((value) => {        return options.find((option) => value === option.value)?.label;      })      .filter((val) => !_.isNil(val));})()}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "SINGLE_SELECT_TREE_WIDGET": {
            "defaultProperties": {
              "selectedOption": "defaultOptionValue",
              "selectedLabel": "defaultOptionValue"
            },
            "derivedProperties": {
              "value": "{{this.selectedOptionValue}}",
              "flattenedOptions": "{{(()=>{const flat = (array) => {      let result = [];      array.forEach((a) => {        result.push({ value: a.value, label: a.label });        if (Array.isArray(a.children)) {          result = result.concat(flat(a.children));        }      });      return result;    };    return flat(this.options);})()}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValue) && this.selectedOptionValue !== \"\"      : true;})()}}",
              "selectedOptionValue": "{{(()=>{const options = this.flattenedOptions ?? [];    let value = this.selectedOption;    const valueIndex = _.findIndex(options, (option) => option.value === value);    if (valueIndex === -1) {      value = \"\";    }    return value;})()}}",
              "selectedOptionLabel": "{{(()=>{const options = this.flattenedOptions ?? [];    const label =      _.find(options, (option) => option.value === this.selectedOptionValue)        ?.label ?? \"\";    return label;})()}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "SWITCH_GROUP_WIDGET": {
            "defaultProperties": {
              "selectedValuesArray": "defaultSelectedValues"
            },
            "derivedProperties": {
              "isValid": "{{ this.isRequired ? !!this.selectedValues.length : true }}",
              "selectedValues": "{{\n        this.selectedValuesArray.filter(\n          selectedValue => this.options.map(option => option.value).includes(selectedValue)\n        )\n      }}",
              "value": "{{this.selectedValues}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "AUDIO_WIDGET": {
            "defaultProperties": {
              "playing": "autoPlay"
            },
            "derivedProperties": {},
            "metaProperties": {
              "playState": "NOT_STARTED",
              "playing": false
            }
          },
          "PROGRESSBAR_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "CAMERA_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {
              "image": null,
              "mediaCaptureStatus": "IMAGE_DEFAULT",
              "isDirty": false
            }
          },
          "MAP_CHART_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "SELECT_WIDGET": {
            "defaultProperties": {
              "value": "defaultOptionValue",
              "label": "defaultOptionValue",
              "filterText": ""
            },
            "derivedProperties": {
              "options": "{{(()=>{let labels = [],      values = [],      sourceData = this.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except this everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In this case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In this case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that this array is the labels array.     * */    if (typeof this.optionLabel === \"string\") {      labels = sourceData.map((d) => d[this.optionLabel]);    } else if (_.isArray(this.optionLabel)) {      labels = processOptionArray(this.optionLabel, sourceData);    }    if (typeof this.optionValue === \"string\") {      values = sourceData.map((d) => d[this.optionValue]);    } else if (_.isArray(this.optionValue)) {      values = processOptionArray(this.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValue) && this.selectedOptionValue !== \"\"      : true;})()}}",
              "selectedOptionValue": "{{(()=>{const isServerSideFiltered = this.serverSideFiltering;    const options = this.options ?? [];    let value = this.value?.value ?? this.value;    const valueIndex = _.findIndex(options, (option) => option.value === value);    if (valueIndex === -1) {      if (!isServerSideFiltered) {        value = \"\";      }      if (        isServerSideFiltered &&        !_.isPlainObject(this.value) &&        !this.isDirty      ) {        value = \"\";      }    }    return value;})()}}",
              "selectedOptionLabel": "{{(()=>{const isServerSideFiltered = this.serverSideFiltering;    const options = this.options ?? [];    let label = this.label?.label ?? this.label;    const labelIndex = _.findIndex(      options,      (option) =>        option.label === label && option.value === this.selectedOptionValue,    );    if (labelIndex === -1) {      if (        !_.isNil(this.selectedOptionValue) &&        this.selectedOptionValue !== \"\"      ) {        const selectedOption = _.find(          options,          (option) => option.value === this.selectedOptionValue,        );        if (selectedOption) {          label = selectedOption.label;        }      } else {        if (          !isServerSideFiltered ||          (isServerSideFiltered && this.selectedOptionValue === \"\")        ) {          label = \"\";        }      }    }    return label;})()}}"
            },
            "metaProperties": {
              "filterText": "",
              "isDirty": false
            }
          },
          "MULTI_SELECT_WIDGET_V2": {
            "defaultProperties": {
              "selectedOptions": "defaultOptionValue"
            },
            "derivedProperties": {
              "options": "{{(()=>{let labels = [],      values = [],      sourceData = this.sourceData || [];    if (typeof this.optionLabel === \"string\") {      labels = sourceData.map((d) => d[this.optionLabel]);    } else if (_.isArray(this.optionLabel)) {      labels = this.optionLabel;    }    if (typeof this.optionValue === \"string\") {      values = sourceData.map((d) => d[this.optionValue]);    } else if (_.isArray(this.optionValue)) {      values = this.optionValue;    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
              "value": "{{this.selectedOptionValues}}",
              "isValid": "{{(()=>{return this.isRequired      ? !_.isNil(this.selectedOptionValues) &&          this.selectedOptionValues.length !== 0      : true;})()}}",
              "selectedOptionValues": "{{(()=>{const options = this.options ?? [];    const selectedOptions = this.selectedOptions ?? [];    const values = selectedOptions.map((o) => o.value ?? o);    const valuesInOptions = options.map((o) => o.value);    const filteredValues = values.filter((value) =>      valuesInOptions.includes(value),    );    if (!this.isDirty && filteredValues.length !== values.length) {      return filteredValues;    }    return values;})()}}",
              "selectedOptionLabels": "{{(()=>{const values = this.selectedOptionValues;    const selectedOptions = this.selectedOptions ?? [];    const options = this.options ?? [];    return values      .map((value) => {        const label = options.find((option) => value === option.value)?.label;        if (label) {          return label;        } else {          return selectedOptions.find(            (option) => value === (option.value ?? option),          )?.label;        }      })      .filter((val) => !_.isNil(val));})()}}"
            },
            "metaProperties": {
              "filterText": "",
              "isDirty": false
            }
          },
          "MULTI_SELECT_WIDGET": {
            "defaultProperties": {
              "selectedOptionValueArr": "defaultOptionValue",
              "filterText": ""
            },
            "derivedProperties": {
              "selectedIndexArr": "{{ this.selectedOptionValues.map(o => _.findIndex(this.options, { value: o })) }}",
              "selectedOptionLabels": "{{ this.selectedOptionValueArr.map((o) => { const index = _.findIndex(this.options, { value: o }); return this.options[index]?.label ?? this.options[index]?.value; })  }}",
              "selectedOptionValues": "{{ this.selectedOptionValueArr.filter((o) => { const index = _.findIndex(this.options, { value: o });  return index > -1; })  }}",
              "isValid": "{{this.isRequired ? !!this.selectedIndexArr && this.selectedIndexArr.length > 0 : true}}"
            },
            "metaProperties": {
              "filterText": ""
            }
          },
          "INPUT_WIDGET_V2": {
            "defaultProperties": {
              "inputText": "defaultText",
              "text": "defaultText"
            },
            "derivedProperties": {
              "value": "{{this.text}}",
              "isValid": "{{(() => {let hasValidValue, value, isEmpty;    switch (this.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(this.inputText) || this.inputText === \"\";          value = isEmpty ? null : Number(this.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = this.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = this.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!this.isRequired && isEmpty) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (this.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(this.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(this.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(this.maxNum) &&          Number.isFinite(this.maxNum) &&          this.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(this.minNum) &&          Number.isFinite(this.minNum) &&          this.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(this.inputText);        } else {          return hasValidValue;        }    }})()}}"
            },
            "metaProperties": {
              "text": "",
              "isDirty": false,
              "inputText": ""
            }
          },
          "PHONE_INPUT_WIDGET": {
            "defaultProperties": {
              "text": "defaultText",
              "dialCode": "defaultDialCode"
            },
            "derivedProperties": {
              "isValid": "{{(() => {let hasValidValue, value;    value = this.text;    hasValidValue = !!value;    if (!this.isRequired && (this.text === \"\" || this.text === undefined)) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    if (parsedRegex) {      return parsedRegex.test(this.text);    } else {      return hasValidValue;    }})()}}"
            },
            "metaProperties": {
              "isDirty": false,
              "value": ""
            }
          },
          "CURRENCY_INPUT_WIDGET": {
            "defaultProperties": {
              "text": "defaultText",
              "currencyCode": "defaultCurrencyCode"
            },
            "derivedProperties": {
              "isValid": "{{(()=>{let hasValidValue, value;    try {      value = Number(this.value);      hasValidValue = Number.isFinite(value);    } catch (e) {      return false;    }    if (!this.isRequired && (this.text === \"\" || this.text === undefined)) {      return true;    }    if (this.isRequired && !hasValidValue) {      return false;    }    if (typeof this.validation === \"boolean\" && !this.validation) {      return false;    }    let parsedRegex = null;    if (this.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = this.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(this.regex);      } else {        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(this.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    if (parsedRegex) {      return parsedRegex.test(this.text);    } else {      return hasValidValue;    }})()}}",
              "value": "{{(()=>{const text = this.text;    function getLocale() {      return navigator.languages?.[0] || \"en-US\";    }    function getLocaleDecimalSeperator() {      return Intl.NumberFormat(getLocale())        .format(1.1)        .replace(/\\p{Number}/gu, \"\");    }    function getLocaleThousandSeparator() {      return Intl.NumberFormat(getLocale())        .format(11111)        .replace(/\\p{Number}/gu, \"\");    }    if (text) {      const parsed = parseFloat(        text          .replace(new RegExp(`[${getLocaleThousandSeparator()}]`, \"g\"), \"\")          .replace(new RegExp(`[${getLocaleDecimalSeperator()}]`), \".\"),      );      if (Number.isNaN(parsed)) {        parsed = undefined;      }      return parsed;    } else {      return undefined;    }})()}}"
            },
            "metaProperties": {
              "isDirty": false
            }
          },
          "JSON_FORM_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {
              "formData": {},
              "fieldState": {}
            }
          },
          "TABLE_WIDGET_V2": {
            "defaultProperties": {
              "searchText": "defaultSearchText",
              "selectedRowIndex": "defaultSelectedRowIndex",
              "selectedRowIndices": "defaultSelectedRowIndices"
            },
            "derivedProperties": {
              "selectedRow": "{{(()=>{let index = -1;    /*     * If multiRowSelection is turned on, use the last index to     * populate the selectedRowIndex     */    if (this.multiRowSelection) {      if (        _.isArray(this.selectedRowIndices) &&        this.selectedRowIndices.length &&        this.selectedRowIndices.every((i) => _.isNumber(i))      ) {        index = this.selectedRowIndices[this.selectedRowIndices.length - 1];      } else if (_.isNumber(this.selectedRowIndices)) {        index = this.selectedRowIndices;      }    } else if (      !_.isNil(this.selectedRowIndex) &&      !_.isNaN(parseInt(this.selectedRowIndex))    ) {      index = parseInt(this.selectedRowIndex);    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    let selectedRow;    /*     * Note(Balaji): Need to include customColumn values in the selectedRow (select, rating)     * It should have updated values.     */    if (index > -1) {      selectedRow = { ...rows[index] };    } else {      /*       *  If index is not a valid, selectedRow should have       *  proper row structure with empty string values       */      selectedRow = {};      Object.keys(rows[0]).forEach((key) => {        selectedRow[key] = \"\";      });    }    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return _.omit(selectedRow, keysToBeOmitted);})()}}",
              "triggeredRow": "{{(()=>{let index = -1;    const parsedTriggeredRowIndex = parseInt(this.triggeredRowIndex);    if (!_.isNaN(parsedTriggeredRowIndex)) {      index = parsedTriggeredRowIndex;    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    let triggeredRow;    /*     * Note(Balaji): Need to include customColumn values in the triggeredRow (select, rating)     * It should have updated values.     */    if (index > -1) {      const row = rows.find((row) => row.__originalIndex__ === index);      triggeredRow = { ...row };    } else {      /*       *  If triggeredRowIndex is not a valid index, triggeredRow should       *  have proper row structure with empty string values       */      triggeredRow = {};      Object.keys(rows[0]).forEach((key) => {        triggeredRow[key] = \"\";      });    }    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return _.omit(triggeredRow, keysToBeOmitted);})()}}",
              "selectedRows": "{{(()=>{if (!this.multiRowSelection) {      return [];    }    let indices = [];    if (      _.isArray(this.selectedRowIndices) &&      this.selectedRowIndices.every((i) => _.isNumber(i))    ) {      indices = this.selectedRowIndices;    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return indices.map((index) => _.omit(rows[index], keysToBeOmitted));})()}}",
              "pageSize": "{{(()=>{const TABLE_SIZES = {      DEFAULT: {        COLUMN_HEADER_HEIGHT: 32,        TABLE_HEADER_HEIGHT: 38,        ROW_HEIGHT: 40,        ROW_FONT_SIZE: 14,        VERTICAL_PADDING: 6,        EDIT_ICON_TOP: 10,      },      SHORT: {        COLUMN_HEADER_HEIGHT: 32,        TABLE_HEADER_HEIGHT: 38,        ROW_HEIGHT: 30,        ROW_FONT_SIZE: 12,        VERTICAL_PADDING: 0,        EDIT_ICON_TOP: 5,      },      TALL: {        COLUMN_HEADER_HEIGHT: 32,        TABLE_HEADER_HEIGHT: 38,        ROW_HEIGHT: 60,        ROW_FONT_SIZE: 18,        VERTICAL_PADDING: 16,        EDIT_ICON_TOP: 21,      },    };    const compactMode = this.compactMode || \"DEFAULT\";    const componentHeight = this.componentHeight - 10;    const tableSizes = TABLE_SIZES[compactMode];    let pageSize =      (componentHeight -        tableSizes.TABLE_HEADER_HEIGHT -        tableSizes.COLUMN_HEADER_HEIGHT) /      tableSizes.ROW_HEIGHT;    return pageSize % 1 > 0.3 && this.tableData.length > pageSize      ? Math.ceil(pageSize)      : Math.floor(pageSize);})()}}",
              "triggerRowSelection": "{{!!this.onRowSelected}}",
              "processedTableData": "{{(()=>{let data;    let tableData;    if (this.infiniteScrollEnabled) {      /* This logic is needed as the cachedTableData will have data based on each pageNo. Since the object would be { 1: array of page 1 data, 2: array of page 2 data }, hence the values will have array of array data, hence it is flattened to store back in tableData for processing. */      tableData = _.flatten(_.values(this.cachedTableData));    } else {      tableData = this.tableData;    }    if (_.isArray(tableData)) {      /* Populate meta keys (__originalIndex__, __primaryKey__) and transient values */      data = tableData.map((row, index) => ({        ...row,        __originalIndex__: index,        __primaryKey__: this.primaryColumnId          ? row[this.primaryColumnId]          : undefined,        ...this.transientTableData[index],      }));    } else {      data = [];    }    return data;})()}}",
              "orderedTableColumns": "{{(()=>{let columns = [];    let existingColumns = this.primaryColumns || {};    /*     * Assign index based on the columnOrder     */    if (      _.isArray(this.columnOrder) &&      this.columnOrder.length > 0 &&      Object.keys(existingColumns).length > 0    ) {      const newColumnsInOrder = {};      let index = 0;      _.uniq(this.columnOrder).forEach((columnId) => {        if (existingColumns[columnId]) {          newColumnsInOrder[columnId] = Object.assign(            {},            existingColumns[columnId],            {              index,            },          );          index++;        }      });      existingColumns = newColumnsInOrder;    }    const sortByColumn = this.sortOrder && this.sortOrder.column;    const isAscOrder = this.sortOrder && this.sortOrder.order === \"asc\";    /* set sorting flags and convert the existing columns into an array */    Object.values(existingColumns).forEach((column) => {      /* guard to not allow columns without id */      if (column.id) {        columns.push({          ...column,          isAscOrder: column.id === sortByColumn ? isAscOrder : undefined,        });      }    });    return columns;})()}}",
              "filteredTableData": "{{(()=>{ /* Make a shallow copy */    const primaryColumns = this.primaryColumns || {};    let processedTableData = [...this.processedTableData];    const derivedColumns = {};    Object.keys(primaryColumns).forEach((id) => {      if (primaryColumns[id] && primaryColumns[id].isDerived) {        derivedColumns[id] = primaryColumns[id];      }    });    if (!processedTableData || !processedTableData.length) {      return [];    }    const getTextFromHTML = (html) => {      if (!html) return \"\";      if (typeof html === \"object\") {        html = JSON.stringify(html);      }      try {        const tempDiv = document.createElement(\"div\");        tempDiv.innerHTML = html;        return tempDiv.textContent || tempDiv.innerText || \"\";      } catch (e) {        return \"\";      }    };    /**     * Since getTextFromHTML is an expensive operation, we need to avoid calling it unnecessarily     * This optimization ensures that getTextFromHTML is only called when required     */    const columnsWithHTML = Object.values(this.primaryColumns).filter(      (column) => column.columnType === \"html\",    );    const htmlColumnAliases = new Set(      columnsWithHTML.map((column) => column.alias),    );    const isFilteringByColumnThatHasHTML = this.filters?.some((filter) =>      htmlColumnAliases.has(filter.column),    );    const isSortingByColumnThatHasHTML =      this.sortOrder?.column && htmlColumnAliases.has(this.sortOrder.column);    const shouldExtractHTMLText = !!(      this.searchText ||      isFilteringByColumnThatHasHTML ||      isSortingByColumnThatHasHTML    );    const getKeyForExtractedTextFromHTML = (columnAlias) =>      `__htmlExtractedText_${columnAlias}__`;    /* extend processedTableData with values from     *  - computedValues, in case of normal column     *  - empty values, in case of derived column     */    if (primaryColumns && _.isPlainObject(primaryColumns)) {      Object.entries(primaryColumns).forEach(([id, column]) => {        let computedValues = [];        if (column && column.computedValue) {          if (_.isString(column.computedValue)) {            try {              computedValues = JSON.parse(column.computedValue);            } catch (e) {              /* do nothing */            }          } else if (_.isArray(column.computedValue)) {            computedValues = column.computedValue;          }        }        /* for derived columns inject empty strings */        if (          computedValues.length === 0 &&          derivedColumns &&          derivedColumns[id]        ) {          computedValues = Array(processedTableData.length).fill(\"\");        }        computedValues.forEach((computedValue, index) => {          processedTableData[index] = {            ...processedTableData[index],            [column.alias]: computedValue,          };          if (shouldExtractHTMLText && column.columnType === \"html\") {            processedTableData[index][              getKeyForExtractedTextFromHTML(column.alias)            ] = getTextFromHTML(computedValue);          }        });      });    }    const columns = this.orderedTableColumns;    const sortByColumnId = this.sortOrder.column;    let sortedTableData;    /*     Check if there are select columns,     and if the columns are sorting by label instead of default value     */    const selectColumnKeysWithSortByLabel = [];    Object.entries(primaryColumns).forEach(([id, column]) => {      const isColumnSortedByLabel =        column?.columnType === \"select\" &&        column?.sortBy === \"label\" &&        column?.selectOptions?.length;      if (isColumnSortedByLabel) {        selectColumnKeysWithSortByLabel.push(id);      }    });    /*     If there are select columns,     transform the specific columns data to show the label instead of the value for sorting     */    let processedTableDataWithLabelInsteadOfValue;    if (selectColumnKeysWithSortByLabel.length) {      const transformedValueToLabelTableData = processedTableData.map((row) => {        const newRow = { ...row };        selectColumnKeysWithSortByLabel.forEach((key) => {          const value = row[key];          const isSelectOptionsAnArray = _.isArray(            primaryColumns[key].selectOptions,          );          let selectOptions;          /*           * If selectOptions is an array, check if it contains nested arrays.           * This is to handle situations where selectOptons is a javascript object and computes as a nested array.           */          if (isSelectOptionsAnArray) {            if (_.some(primaryColumns[key].selectOptions, _.isArray)) {              /* Handle the case where selectOptions contains nested arrays - selectOptions is javascript */              selectOptions =                primaryColumns[key].selectOptions[row.__originalIndex__];              const option = selectOptions.find((option) => {                return option.value === value;              });              if (option) {                newRow[key] = option.label;              }            } else {              /* Handle the case where selectOptions is a flat array - selectOptions is plain JSON */              selectOptions = primaryColumns[key].selectOptions;              const option = selectOptions.find(                (option) => option.value === value,              );              if (option) {                newRow[key] = option.label;              }            }          } else {            /* If selectOptions is not an array, parse it as JSON - not evaluated yet, so returns as string */            selectOptions = JSON.parse(primaryColumns[key].selectOptions);            const option = selectOptions.find(              (option) => option.value === value,            );            if (option) {              newRow[key] = option.label;            }          }        });        return newRow;      });      processedTableDataWithLabelInsteadOfValue =        transformedValueToLabelTableData;    }    if (sortByColumnId) {      const sortBycolumn = columns.find(        (column) => column.id === sortByColumnId,      );      const sortByColumnOriginalId = sortBycolumn.alias;      const columnType =        sortBycolumn && sortBycolumn.columnType          ? sortBycolumn.columnType          : \"text\";      let inputFormat = (() => {        switch (sortBycolumn.inputFormat) {          case \"Epoch\":            return \"X\";          case \"Milliseconds\":            return \"x\";          default:            return sortBycolumn.inputFormat;        }      })();      const isEmptyOrNil = (value) => {        return _.isNil(value) || value === \"\";      };      const isAscOrder = this.sortOrder.order === \"asc\";      const sortByOrder = (isAGreaterThanB) => {        if (isAGreaterThanB) {          return isAscOrder ? 1 : -1;        } else {          return isAscOrder ? -1 : 1;        }      };      const transformedTableDataForSorting =        selectColumnKeysWithSortByLabel.length          ? processedTableDataWithLabelInsteadOfValue          : processedTableData;      sortedTableData = transformedTableDataForSorting.sort((a, b) => {        if (_.isPlainObject(a) && _.isPlainObject(b)) {          let [processedA, processedB] = [a, b];          if (!selectColumnKeysWithSortByLabel.length) {            const originalA = (this.tableData ??              transformedTableDataForSorting)[a.__originalIndex__];            const originalB = (this.tableData ??              transformedTableDataForSorting)[b.__originalIndex__];            [processedA, processedB] = [              { ...a, ...originalA },              { ...b, ...originalB },            ];          }          if (            isEmptyOrNil(processedA[sortByColumnOriginalId]) ||            isEmptyOrNil(processedB[sortByColumnOriginalId])          ) {            /* push null, undefined and \"\" values to the bottom. */            return isEmptyOrNil(processedA[sortByColumnOriginalId]) ? 1 : -1;          } else {            switch (columnType) {              case \"number\":              case \"currency\":                return sortByOrder(                  Number(processedA[sortByColumnOriginalId]) >                    Number(processedB[sortByColumnOriginalId]),                );              case \"date\":                try {                  return sortByOrder(                    moment(                      processedA[sortByColumnOriginalId],                      inputFormat,                    ).isAfter(                      moment(processedB[sortByColumnOriginalId], inputFormat),                    ),                  );                } catch (e) {                  return -1;                }              case \"url\":                const column = primaryColumns[sortByColumnOriginalId];                if (column && column.displayText) {                  if (_.isString(column.displayText)) {                    return sortByOrder(false);                  } else if (_.isArray(column.displayText)) {                    return sortByOrder(                      column.displayText[a.__originalIndex__]                        .toString()                        .toLowerCase() >                        column.displayText[b.__originalIndex__]                          .toString()                          .toLowerCase(),                    );                  }                }              case \"html\": {                const htmlExtractedTextA =                  processedA[                    getKeyForExtractedTextFromHTML(sortByColumnOriginalId)                  ];                const htmlExtractedTextB =                  processedB[                    getKeyForExtractedTextFromHTML(sortByColumnOriginalId)                  ];                return sortByOrder(                  (htmlExtractedTextA ??                    getTextFromHTML(processedA[sortByColumnOriginalId])) >                    (htmlExtractedTextB ??                      getTextFromHTML(processedB[sortByColumnOriginalId])),                );              }              default:                return sortByOrder(                  processedA[sortByColumnOriginalId].toString().toLowerCase() >                    processedB[sortByColumnOriginalId].toString().toLowerCase(),                );            }          }        } else {          return isAscOrder ? 1 : 0;        }      });      /*       * When sorting is done, transform the data back to its original state       * where table data shows value instead of label       */      if (selectColumnKeysWithSortByLabel.length) {        const transformedLabelToValueData = sortedTableData.map((row) => {          const newRow = { ...row };          selectColumnKeysWithSortByLabel.forEach((key) => {            const label = row[key];            const isSelectOptionsAnArray = _.isArray(              primaryColumns[key].selectOptions,            );            let selectOptions;            /*             * If selectOptions is an array, check if it contains nested arrays.             * This is to handle situations where selectOptons is a javascript object and computes as a nested array.             */            if (isSelectOptionsAnArray) {              if (_.some(primaryColumns[key].selectOptions, _.isArray)) {                /* Handle the case where selectOptions contains nested arrays - selectOptions is javascript */                selectOptions =                  primaryColumns[key].selectOptions[row.__originalIndex__];                const option = selectOptions.find((option) => {                  return option.label === label;                });                if (option) {                  newRow[key] = option.value;                }              } else {                /* Handle the case where selectOptions is a flat array - selectOptions is plain JSON */                selectOptions = primaryColumns[key].selectOptions;                const option = selectOptions.find(                  (option) => option.label === label,                );                if (option) {                  newRow[key] = option.value;                }              }            } else {              /* If selectOptions is not an array, parse it as JSON - not evaluated yet, so returns as string */              selectOptions = JSON.parse(primaryColumns[key].selectOptions);              const option = selectOptions.find(                (option) => option.label === label,              );              if (option) {                newRow[key] = option.value;              }            }          });          return newRow;        });        sortedTableData = transformedLabelToValueData;      }    } else {      sortedTableData = [...processedTableData];    }    const ConditionFunctions = {      isExactly: (a, b) => {        return a.toString() === b.toString();      },      empty: (a) => {        return _.isNil(a) || _.isEmpty(a.toString());      },      notEmpty: (a) => {        return !_.isNil(a) && !_.isEmpty(a.toString());      },      notEqualTo: (a, b) => {        return a.toString() !== b.toString();      },      /* Note: Duplicate of isExactly */      isEqualTo: (a, b) => {        return a.toString() === b.toString();      },      lessThan: (a, b) => {        return Number(a) < Number(b);      },      lessThanEqualTo: (a, b) => {        return Number(a) <= Number(b);      },      greaterThan: (a, b) => {        return Number(a) > Number(b);      },      greaterThanEqualTo: (a, b) => {        return Number(a) >= Number(b);      },      contains: (a, b) => {        try {          return a            .toString()            .toLowerCase()            .includes(b.toString().toLowerCase());        } catch (e) {          return false;        }      },      doesNotContain: (a, b) => {        try {          return !a            .toString()            .toLowerCase()            .includes(b.toString().toLowerCase());        } catch (e) {          return false;        }      },      startsWith: (a, b) => {        try {          return (            a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) === 0          );        } catch (e) {          return false;        }      },      endsWith: (a, b) => {        try {          const _a = a.toString().toLowerCase();          const _b = b.toString().toLowerCase();          return (            _a.lastIndexOf(_b) >= 0 &&            _a.length === _a.lastIndexOf(_b) + _b.length          );        } catch (e) {          return false;        }      },      is: (a, b) => {        return moment(a).isSame(moment(b), \"minute\");      },      isNot: (a, b) => {        return !moment(a).isSame(moment(b), \"minute\");      },      isAfter: (a, b) => {        return moment(a).isAfter(moment(b), \"minute\");      },      isBefore: (a, b) => {        return moment(a).isBefore(moment(b), \"minute\");      },      isChecked: (a) => {        return a === true;      },      isUnChecked: (a) => {        return a === false;      },    };    let searchKey;    /* skipping search when client side search is turned off */    if (      this.searchText &&      (!this.onSearchTextChanged || this.enableClientSideSearch)    ) {      searchKey = this.searchText.toLowerCase();    } else {      searchKey = \"\";    }    /*     * We need to omit hidden column values from being included     * in the search     */    const hiddenColumns = Object.values(this.primaryColumns)      .filter((column) => !column.isVisible)      .map((column) => column.alias);    const systemColumns = [\"__originalIndex__\"];    const finalTableData = sortedTableData.filter((row) => {      let isSearchKeyFound = true;      const originalRow = (this.tableData ?? sortedTableData)[        row.__originalIndex__      ];      const columnWithDisplayText = Object.values(this.primaryColumns).filter(        (column) => column.columnType === \"url\" && column.displayText,      );      /*       * For select columns with label and values, we need to include the label value       * in the search and filter data       */      let labelValuesForSelectCell = {};      /*       * Initialize an array to store keys for columns that have the 'select' column type       * and contain selectOptions.       */      const selectColumnKeys = [];      /*       * Iterate over the primary columns to identify which columns are of type 'select'       * and have selectOptions. These keys are pushed into the selectColumnKeys array.       */      Object.entries(this.primaryColumns).forEach(([id, column]) => {        const isColumnSelectColumnType =          column?.columnType === \"select\" && column?.selectOptions?.length;        if (isColumnSelectColumnType) {          selectColumnKeys.push(id);        }      });      /*       * If there are any select columns, iterate over them to find the label value       * associated with the selected value in each row.       */      if (selectColumnKeys.length) {        selectColumnKeys.forEach((key) => {          const value = row[key];          const isSelectOptionsAnArray = _.isArray(            primaryColumns[key].selectOptions,          );          let selectOptions = {};          /*           * If selectOptions is an array, check if it contains nested arrays.           * This is to handle situations where selectOptons is a javascript object and computes as a nested array.           */          if (isSelectOptionsAnArray) {            const selectOptionKey = primaryColumns[key].alias;            if (_.some(primaryColumns[key].selectOptions, _.isArray)) {              /* Handle the case where selectOptions contains nested arrays - selectOptions is javascript */              selectOptions =                primaryColumns[key].selectOptions[row.__originalIndex__];              const option = selectOptions.find((option) => {                return option.value === value;              });              if (option) {                labelValuesForSelectCell[selectOptionKey] = option.label;              }            } else {              /* Handle the case where selectOptions is a flat array - selectOptions is plain JSON */              selectOptions = primaryColumns[key].selectOptions;              const option = selectOptions.find(                (option) => option.value === value,              );              if (option) {                labelValuesForSelectCell[selectOptionKey] = option.label;              }            }          } else {            /* If selectOptions is not an array, parse it as JSON - not evaluated yet, so returns as string */            selectOptions = JSON.parse(primaryColumns[key].selectOptions);            const option = selectOptions.find(              (option) => option.value === value,            );            if (option) {              labelValuesForSelectCell[selectOptionKey] = option.label;            }          }        });      }      const displayTextValues = columnWithDisplayText.reduce((acc, column) => {        let displayText;        if (_.isArray(column.displayText)) {          displayText = column.displayText[row.__originalIndex__];        } else {          displayText = column.displayText;        }        acc[column.alias] = displayText;        return acc;      }, {});      let htmlValues = {};      /*       * We don't want html tags and inline styles to match in search       */      if (shouldExtractHTMLText) {        htmlValues = columnsWithHTML.reduce((acc, column) => {          const value = row[column.alias];          acc[column.alias] = _.isNil(value)            ? \"\"            : row[getKeyForExtractedTextFromHTML(column.alias)] ??              getTextFromHTML(value);          return acc;        }, {});      }      const displayedRow = {        ...row,        ...labelValuesForSelectCell,        ...displayTextValues,        ...htmlValues,      };      if (searchKey) {        const combinedRowContent = [          ...Object.values(_.omit(displayedRow, hiddenColumns, systemColumns)),          ...Object.values(            _.omit(originalRow, [              ...hiddenColumns,              ...htmlColumnAliases,              ...systemColumns,            ]),          ),        ]          .join(\", \")          .toLowerCase();        isSearchKeyFound = combinedRowContent.includes(searchKey);      }      if (!isSearchKeyFound) {        return false;      }      /* when there is no filter defined or when server side filtering is enabled prevent client-side filtering  */      if (        !this.filters ||        this.filters.length === 0 ||        this.enableServerSideFiltering      ) {        return true;      }      const filterOperator =        this.filters.length >= 2 ? this.filters[1].operator : \"OR\";      let isSatisfyingFilters = filterOperator === \"AND\";      for (let i = 0; i < this.filters.length; i++) {        let filterResult = true;        try {          const conditionFunction =            ConditionFunctions[this.filters[i].condition];          if (conditionFunction) {            /*             * We don't want html tags and inline styles to match in filter conditions             */            const isHTMLColumn = htmlColumnAliases.has(this.filters[i].column);            const originalColValue = isHTMLColumn              ? originalRow[                  getKeyForExtractedTextFromHTML(this.filters[i].column)                ] ?? getTextFromHTML(originalRow[this.filters[i].column])              : originalRow[this.filters[i].column];            const displayedColValue = isHTMLColumn              ? displayedRow[                  getKeyForExtractedTextFromHTML(this.filters[i].column)                ] ?? getTextFromHTML(displayedRow[this.filters[i].column])              : displayedRow[this.filters[i].column];            filterResult =              conditionFunction(originalColValue, this.filters[i].value) ||              conditionFunction(displayedColValue, this.filters[i].value);          }        } catch (e) {          filterResult = false;        }        /* if one filter condition is not satisfied and filter operator is AND, bailout early */        if (!filterResult && filterOperator === \"AND\") {          isSatisfyingFilters = false;          break;        } else if (filterResult && filterOperator === \"OR\") {          /* if one filter condition is satisfied and filter operator is OR, bailout early */          isSatisfyingFilters = true;          break;        }        isSatisfyingFilters =          filterOperator === \"AND\"            ? isSatisfyingFilters && filterResult            : isSatisfyingFilters || filterResult;      }      return isSatisfyingFilters;    });    return finalTableData;})()}}",
              "updatedRows": "{{(()=>{ const primaryColumns = this.primaryColumns;    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    /*     * case 1. If transientTableData is not empty, return aray of updated row.     * case 2. If transientTableData is empty, return empty array     *     * updated row structure     *  {     *    index: {{original index of the row}},     *    {{primary_column}}: {{primary_column_value}} // only if primary has been set     *    updatedFields: {     *      {{updated_column_1}}: {{updated_column_1_value}}     *    },     *    allFields: {     *      {{updated_column_1}}: {{updated_column_1_value}}     *      {{rest of the fields from the row}}     *    }     *  }     */    /* case 1 */    if (      this.transientTableData &&      !!Object.keys(this.transientTableData).length    ) {      const updatedRows = [];      const tableData = this.processedTableData || this.tableData;      /* updatedRows is not sorted by index */      Object.entries(this.transientTableData)        .filter((entry) => {          return (            !_.isNil(entry[0]) && !!entry[0] && _.isFinite(Number(entry[0]))          );        })        .forEach((entry) => {          const key = entry[0];          const value = entry[1];          const row = tableData.find(            (row) => row.__originalIndex__ === Number(key),          );          updatedRows.push({            index: Number(key),            [this.primaryColumnId]: row[this.primaryColumnId],            updatedFields: value,            allFields: _.omit(row, keysToBeOmitted) || {},          });        });      return updatedRows;    } else {      /* case 2 */      return [];    }})()}}",
              "updatedRowIndices": "{{(()=>{ /* should return the keys of the transientTableData */    if (this.transientTableData) {      return Object.keys(this.transientTableData).map((index) =>        Number(index),      );    } else {      return [];    }})()}}",
              "updatedRow": "{{(()=>{ let index = -1;    const parsedUpdatedRowIndex = parseInt(this.updatedRowIndex);    if (!_.isNaN(parsedUpdatedRowIndex)) {      index = parsedUpdatedRowIndex;    }    const rows = this.filteredTableData || this.processedTableData || [];    const primaryColumns = this.primaryColumns;    let updatedRow;    if (index > -1) {      const row = rows.find((row) => row.__originalIndex__ === index);      updatedRow = { ...row };    } else {      /*       *  If updatedRowIndex is not a valid index, updatedRow should       *  have proper row structure with empty string values       */      updatedRow = {};      if (rows && rows[0]) {        Object.keys(rows[0]).forEach((key) => {          updatedRow[key] = \"\";        });      }    }    const nonDataColumnTypes = [      \"editActions\",      \"button\",      \"iconButton\",      \"menuButton\",    ];    const nonDataColumnAliases = primaryColumns      ? Object.values(primaryColumns)          .filter((column) => nonDataColumnTypes.includes(column.columnType))          .map((column) => column.alias)      : [];    const keysToBeOmitted = [      \"__originalIndex__\",      \"__primaryKey__\",      ...nonDataColumnAliases,    ];    return _.omit(updatedRow, keysToBeOmitted);})()}}",
              "pageOffset": "{{(()=>{const pageSize = this.pageSize;    if (      Number.isFinite(this.pageNo) &&      Number.isFinite(pageSize) &&      this.pageNo >= 0 &&      pageSize >= 0    ) {      /* Math.max fixes the value of (pageNo - 1) to a minimum of 0 as negative values are not valid */      return Math.max(this.pageNo - 1, 0) * pageSize;    }    return 0;})()}}",
              "isEditableCellsValid": "{{(()=>{ if (      (!this.editableCell?.column && !this.isAddRowInProgress) ||      !this.primaryColumns    ) {      return {};    }    const createRegex = (regex) => {      if (!regex) {        return new RegExp(\"//\");      }      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      let parsedRegex;      if (!regexParts) {        parsedRegex = new RegExp(regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }      return parsedRegex;    };    let editableColumns = [];    const validatableColumns = [\"text\", \"number\", \"currency\", \"date\", \"select\"];    if (this.isAddRowInProgress) {      Object.values(this.primaryColumns)        .filter(          (column) =>            column.isEditable && validatableColumns.includes(column.columnType),        )        .forEach((column) => {          editableColumns.push([column, this.newRow[column.alias]]);        });    } else {      const editedColumn = Object.values(this.primaryColumns).find(        (column) => column.alias === this.editableCell?.column,      );      if (validatableColumns.includes(editedColumn.columnType)) {        editableColumns.push([editedColumn, this.editableCell?.value]);      }    }    const validationMap = {};    editableColumns.forEach(([editedColumn, value]) => {      let isValid = true;      if (editedColumn && editedColumn.validation) {        const validation = editedColumn.validation;        /**         * General validations         * 1. isColumnEditableCellValid         * 2. regex         * 3. isColumnEditableCellRequired         * 4. number/currency min/max         */        if (          !_.isNil(validation.isColumnEditableCellValid) &&          !validation.isColumnEditableCellValid        ) {          isValid = false;        } else if (          validation.regex &&          !createRegex(validation.regex).test(value)        ) {          isValid = false;        } else if (          validation.isColumnEditableCellRequired &&          (value === \"\" || _.isNil(value))        ) {          isValid = false;        } else {          switch (editedColumn.columnType) {            case \"number\":            case \"currency\":              if (                !_.isNil(validation.min) &&                validation.min !== \"\" &&                validation.min > value              ) {                isValid = false;              }              if (                !_.isNil(validation.max) &&                validation.max !== \"\" &&                validation.max < value              ) {                isValid = false;              }              break;          }        }      }      validationMap[editedColumn.alias] = isValid;    });    return validationMap;})()}}",
              "tableHeaders": "{{(()=>{const columns = this.primaryColumns      ? Object.values(this.primaryColumns)      : [];    return columns      .sort((a, b) => a.index - b.index)      .map((column) => ({        id: column?.id,        label: column?.label,        isVisible: column?.isVisible,      }));})()}}"
            },
            "metaProperties": {
              "pageNo": 1,
              "filters": [],
              "sortOrder": {
                "column": "",
                "order": null
              },
              "transientTableData": {},
              "updatedRowIndex": -1,
              "editableCell": {
                "column": "",
                "index": -1,
                "inputValue": "",
                "value": "",
                "initialValue": "",
                "__originalIndex__": -1
              },
              "columnEditableCellValue": {},
              "selectColumnFilterText": {},
              "isAddRowInProgress": false,
              "previousPageVisited": false,
              "nextPageVisited": false
            }
          },
          "NUMBER_SLIDER_WIDGET": {
            "defaultProperties": {
              "value": "defaultValue"
            },
            "derivedProperties": {},
            "metaProperties": {
              "value": 0,
              "isDirty": false
            }
          },
          "RANGE_SLIDER_WIDGET": {
            "defaultProperties": {
              "start": "defaultStartValue",
              "end": "defaultEndValue"
            },
            "derivedProperties": {},
            "metaProperties": {
              "start": 0,
              "end": 20,
              "isDirty": false
            }
          },
          "CATEGORY_SLIDER_WIDGET": {
            "defaultProperties": {
              "value": "defaultOptionValue"
            },
            "derivedProperties": {},
            "metaProperties": {
              "isDirty": false
            }
          },
          "CODE_SCANNER_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "LIST_WIDGET_V2": {
            "defaultProperties": {
              "selectedItemKey": "defaultSelectedItem"
            },
            "derivedProperties": {
              "childAutoComplete": "{{(() => {const currentItem = this.listData?.[0] ?? {};    const currentView = this.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (this.levelData) {      const levels = Object.keys(this.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: this.levelData[level].autocomplete.currentItem,          currentView: this.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()}}"
            },
            "metaProperties": {
              "pageNo": 1,
              "currentItemsView": "{{[]}}",
              "selectedItemView": "{{{}}}",
              "triggeredItemView": "{{{}}}"
            }
          },
          "EXTERNAL_WIDGET": {
            "defaultProperties": {
              "model": "defaultModel"
            },
            "derivedProperties": {},
            "metaProperties": {
              "model": {}
            }
          },
          "DROP_DOWN_WIDGET": {
            "defaultProperties": {
              "defaultValue": "defaultOptionValue",
              "value": "defaultOptionValue"
            },
            "derivedProperties": {
              "isValid": "{{this.isRequired  ? !!this.selectedOptionValue || this.selectedOptionValue === 0 : true}}",
              "selectedOptionLabel": "{{(()=>{const index = _.findIndex(this.options, { value: this.value }); return this.options[index]?.label; })()}}",
              "selectedOptionValue": "{{(()=>{const index = _.findIndex(this.options, { value: this.value }); return this.options[index]?.value; })()}}"
            },
            "metaProperties": {}
          },
          "ICON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "FILE_PICKER_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "isValid": "{{ this.isRequired ? this.files.length > 0 : true }}",
              "files": "{{this.selectedFiles.map((file) => { return { ...file, data: this.fileDataType === \"Base64\" ? file.base64 : this.fileDataType === \"Binary\" ? file.raw : file.text } })}}"
            },
            "metaProperties": {
              "selectedFiles": [],
              "uploadedFileData": {}
            }
          },
          "FORM_BUTTON_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "PROGRESS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "CIRCULAR_PROGRESS_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {},
            "metaProperties": {}
          },
          "LIST_WIDGET": {
            "defaultProperties": {},
            "derivedProperties": {
              "pageSize": "{{(()=>{const LIST_WIDGET_PAGINATION_HEIGHT = 36;    const DEFAULT_GRID_ROW_HEIGHT = 10;    const WIDGET_PADDING = DEFAULT_GRID_ROW_HEIGHT * 0.4;    const itemsCount = (this.listData || []).length;    let gridGap = 0;    try {      gridGap = parseInt(this.gridGap);      if (!_.isNumber(this.gridGap) || _.isNaN(this.gridGap)) {        gridGap = 0;      }    } catch {      gridGap = 0;    }    gridGap = gridGap >= -8 ? gridGap : 0;    const averageGridGap = itemsCount      ? gridGap * ((itemsCount - 1) / itemsCount)      : 0;    const templateBottomRow = this.templateBottomRow;    const templateHeight = templateBottomRow * DEFAULT_GRID_ROW_HEIGHT;    const componentHeight = this.componentHeight;    const spaceAvailableWithoutPaginationControls =      componentHeight - WIDGET_PADDING * 2;    const spaceAvailableWithPaginationControls =      spaceAvailableWithoutPaginationControls - LIST_WIDGET_PAGINATION_HEIGHT;    const spaceTakenByOneContainer = templateHeight + averageGridGap;    const spaceTakenByAllContainers = spaceTakenByOneContainer * itemsCount;    const paginationControlsEnabled =      spaceTakenByAllContainers > spaceAvailableWithoutPaginationControls ||      this.serverSidePaginationEnabled;    const totalAvailableSpace = paginationControlsEnabled      ? spaceAvailableWithPaginationControls      : spaceAvailableWithoutPaginationControls;    const pageSize = totalAvailableSpace / spaceTakenByOneContainer;    return _.isNaN(pageSize) ? 0 : _.floor(pageSize);})()}}",
              "selectedItem": "{{(()=>{const selectedItemIndex =      this.selectedItemIndex === undefined ||      Number.isNaN(parseInt(this.selectedItemIndex))        ? -1        : parseInt(this.selectedItemIndex);    const items = this.listData || [];    if (selectedItemIndex === -1) {      const emptyRow = { ...items[0] };      Object.keys(emptyRow).forEach((key) => {        emptyRow[key] = \"\";      });      return emptyRow;    }    const selectedItem = { ...items[selectedItemIndex] };    return selectedItem;})()}}",
              "items": "{{(() => {let item = {};    Object.keys(this.template).map((widgetName) => {      item[widgetName] = { ...this.template[widgetName] };    });    let updatedItems = [];    for (let itemIndex = 0; itemIndex < this.listData.length; itemIndex++) {      let currentItem = JSON.parse(JSON.stringify(item));      const widgetKeys = Object.keys(currentItem);      for (let i = 0; i < widgetKeys.length; i++) {        const currentWidgetName = widgetKeys[i];        let currentWidget = currentItem[currentWidgetName];        const filteredWidget = {};        const dynamicPaths = _.compact(          currentWidget.dynamicBindingPathList?.map((path) => path.key),        );        dynamicPaths.forEach((path) => {          const evaluatedProperty = _.get(            this.template,            currentWidget.widgetName + \".\" + path,          );          if (Array.isArray(evaluatedProperty)) {            const evaluatedValue = evaluatedProperty[itemIndex];            _.set(currentWidget, path, evaluatedValue);          }        });        if (this.childrenDefaultPropertiesMap) {          Object.keys(this.childrenDefaultPropertiesMap).map((key) => {            const defaultKey = this.childrenDefaultPropertiesMap[key];            const widgetName = key.split(\".\").shift();            if (widgetName === currentWidget.widgetName) {              const defaultPropertyValue = _.get(                this.template,                currentWidget.widgetName + \".\" + defaultKey,                undefined,              );              if (Array.isArray(defaultPropertyValue)) {                const evaluatedValue = defaultPropertyValue[itemIndex];                _.set(currentWidget, key.split(\".\").pop(), evaluatedValue);              } else if (defaultPropertyValue) {                _.set(                  currentWidget,                  key.split(\".\").pop(),                  defaultPropertyValue,                );              }            }          });        }        const metaProperties = _.get(          this.childMetaProperties,          currentWidget.widgetName,          {},        );        Object.keys(metaProperties).map((key) => {          const metaPropertyValue = _.get(            metaProperties,            key + \".\" + itemIndex,            undefined,          );          if (typeof metaPropertyValue !== \"undefined\") {            _.set(currentWidget, key, metaPropertyValue);          }        });        if (this.childrenEntityDefinitions) {          currentItem[currentWidgetName] = _.pick(            currentWidget,            this.childrenEntityDefinitions[currentWidget.type],          );        }      }      updatedItems[itemIndex] = currentItem;    }    return updatedItems;})()}}",
              "childAutoComplete": "{{(() => {const data = [...this.listData];    const structure =      Array.isArray(data) && data.length > 0        ? Object.assign(            {},            ...Object.keys(data[0]).map((key) => ({              [key]: \"\",            })),          )        : {};    return { currentItem: structure, currentIndex: \"\" };})()}}"
            },
            "metaProperties": {
              "pageNo": 1,
              "templateBottomRow": 16
            }
          },
          "DATE_PICKER_WIDGET": {
            "defaultProperties": {
              "selectedDate": "defaultDate"
            },
            "derivedProperties": {
              "isValid": "{{ this.isRequired ? !!this.selectedDate : true }}",
              "value": "{{ this.selectedDate }}"
            },
            "metaProperties": {}
          },
          "INPUT_WIDGET": {
            "defaultProperties": {
              "text": "defaultText"
            },
            "derivedProperties": {
              "isValid": "{{\n        (function(){\n          if (!this.isRequired && !this.text) {\n            return true\n          }\n          if(this.isRequired && !this.text){\n            return false\n          }\n          if (typeof this.validation === \"boolean\" && !this.validation) {\n            return false;\n          }\n          let parsedRegex = null;\n          if (this.regex) {\n            /*\n            * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags\n            * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]\n            */\n            const regexParts = this.regex.match(/(\\/?)(.+)\\1([a-z]*)/i);\n\n            if (!regexParts) {\n              parsedRegex = new RegExp(this.regex);\n            } else {\n              /*\n              * if we don't have a regex flags (gmisuy), convert provided string into regexp directly\n              /*\n              if (regexParts[3] && !/^(?!.*?(.).*?\\1)[gmisuy]+$/.test(regexParts[3])) {\n                parsedRegex = RegExp(this.regex);\n              }\n              /*\n              * if we have a regex flags, use it to form regexp\n              */\n              parsedRegex = new RegExp(regexParts[2], regexParts[3]);\n            }\n          }\n          if (this.inputType === \"EMAIL\") {\n            const emailRegex = new RegExp(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/);\n            return emailRegex.test(this.text);\n          }\n          else if (\n            this.inputType === \"NUMBER\" ||\n            this.inputType === \"INTEGER\" ||\n            this.inputType === \"CURRENCY\" ||\n            this.inputType === \"PHONE_NUMBER\"\n          ) {\n            let value = this.text.split(\",\").join(\"\");\n            if (parsedRegex) {\n              return parsedRegex.test(value);\n            }\n            if (this.isRequired) {\n              return !(value === '' || isNaN(value));\n            }\n\n            return (value === '' || !isNaN(value || ''));\n          }\n          else if (this.isRequired) {\n            if(this.text && this.text.length) {\n              if (parsedRegex) {\n                return parsedRegex.test(this.text)\n              } else {\n                return true;\n              }\n            } else {\n              return false;\n            }\n          }\n          if (parsedRegex) {\n            return parsedRegex.test(this.text)\n          } else {\n            return true;\n          }\n        })()\n      }}",
              "value": "{{this.text}}"
            },
            "metaProperties": {
              "isFocused": false,
              "isDirty": false
            }
          }
        },
        "evalTree": {
          "localVariables": {
            "varCalculated": "",
            "body": "export default {\n\tvarCalculated: '',\n}",
            "ENTITY_TYPE": "JSACTION",
            "actionId": "68ad40c7d8deff53ee07277d"
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
            "borderColor": ""
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
            "labelTextColor": ""
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
            "borderColor": ""
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
            "borderColor": ""
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
            "type": "CONTAINER_WIDGET"
          },
          "btnCalculate": {
            "ENTITY_TYPE": "WIDGET",
            "resetFormOnClick": false,
            "needsErrorInfo": false,
            "boxShadow": "none",
            "mobileBottomRow": 11,
            "widgetName": "btnCalculate",
            "onClick": "{{storeValue('varCalculated', Input1.text)}}",
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
            "iconName": ""
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
            "leftColumn": 5,
            "shouldTruncate": false,
            "truncateButtonColor": "#553DE9",
            "text": "",
            "key": "lgxpzfcx4b",
            "rightColumn": 62,
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
            "originalBottomRow": 15,
            "fontSize": "1rem",
            "minDynamicHeight": 4,
            "value": "",
            "meta": {},
            "componentHeight": 40,
            "componentWidth": 372.851806640625,
            "type": "TEXT_WIDGET",
            "backgroundColor": "",
            "borderColor": ""
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
            "borderColor": ""
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
            "type": "CONTAINER_WIDGET"
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
            "borderColor": ""
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
            "store": {
              "varCalculated": "",
              "varTxt": "dddd",
              "": "dddd"
            },
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
            "workspaceName": "Peter's apps",
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
            "dynamicPropertyPathList": [],
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
        },
        "unParsedEvalTree": {
          "containerRoot": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          },
          "Canvas1": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          },
          "containerActions": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          },
          "Canvas3": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          },
          "calculatedTxt": {
            "text": "",
            "value": "",
            "borderRadius": "0.375rem",
            "fontFamily": "System Default",
            "truncateButtonColor": "#553DE9"
          },
          "btnCalculate": {
            "borderRadius": "0.375rem",
            "buttonColor": "#553DE9"
          },
          "containerPlayground": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          },
          "Canvas2": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          },
          "Input1": {
            "defaultText": "",
            "meta": {
              "text": "",
              "inputText": ""
            },
            "text": "",
            "isRequired": false,
            "inputType": "TEXT",
            "inputText": "",
            "isValid": true,
            "value": "",
            "borderRadius": "0.375rem",
            "accentColor": "#553DE9"
          },
          "Text1": {
            "text": "current value is: -",
            "value": "current value is: -",
            "borderRadius": "0.375rem",
            "fontFamily": "System Default",
            "truncateButtonColor": "#553DE9"
          },
          "MainContainer": {
            "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "borderRadius": "0.375rem"
          }
        },
        "allKeys": {
          "localVariables": true,
          "localVariables.varCalculated": true,
          "localVariables.body": true,
          "localVariables.ENTITY_TYPE": true,
          "localVariables.actionId": true,
          "MainContainer": true,
          "MainContainer.ENTITY_TYPE": true,
          "MainContainer.boxShadow": true,
          "MainContainer.widgetName": true,
          "MainContainer.backgroundColor": true,
          "MainContainer.rightColumn": true,
          "MainContainer.snapColumns": true,
          "MainContainer.widgetId": true,
          "MainContainer.topRow": true,
          "MainContainer.bottomRow": true,
          "MainContainer.containerStyle": true,
          "MainContainer.snapRows": true,
          "MainContainer.parentRowSpace": true,
          "MainContainer.canExtend": true,
          "MainContainer.minHeight": true,
          "MainContainer.parentColumnSpace": true,
          "MainContainer.leftColumn": true,
          "MainContainer.borderRadius": true,
          "MainContainer.meta": true,
          "MainContainer.isLoading": true,
          "MainContainer.componentHeight": true,
          "MainContainer.componentWidth": true,
          "MainContainer.type": true,
          "Input1": true,
          "Input1.ENTITY_TYPE": true,
          "Input1.needsErrorInfo": true,
          "Input1.boxShadow": true,
          "Input1.mobileBottomRow": true,
          "Input1.widgetName": true,
          "Input1.topRow": true,
          "Input1.bottomRow": true,
          "Input1.parentRowSpace": true,
          "Input1.labelWidth": true,
          "Input1.autoFocus": true,
          "Input1.mobileRightColumn": true,
          "Input1.animateLoading": true,
          "Input1.parentColumnSpace": true,
          "Input1.resetOnSubmit": true,
          "Input1.leftColumn": true,
          "Input1.labelPosition": true,
          "Input1.labelStyle": true,
          "Input1.inputType": true,
          "Input1.isDisabled": true,
          "Input1.key": true,
          "Input1.labelTextSize": true,
          "Input1.isRequired": true,
          "Input1.rightColumn": true,
          "Input1.dynamicHeight": true,
          "Input1.widgetId": true,
          "Input1.accentColor": true,
          "Input1.showStepArrows": true,
          "Input1.minWidth": true,
          "Input1.isVisible": true,
          "Input1.label": true,
          "Input1.labelAlignment": true,
          "Input1.isLoading": true,
          "Input1.mobileTopRow": true,
          "Input1.responsiveBehavior": true,
          "Input1.borderRadius": true,
          "Input1.mobileLeftColumn": true,
          "Input1.maxDynamicHeight": true,
          "Input1.iconAlign": true,
          "Input1.defaultText": true,
          "Input1.minDynamicHeight": true,
          "Input1.value": true,
          "Input1.isValid": true,
          "Input1.text": true,
          "Input1.isDirty": true,
          "Input1.inputText": true,
          "Input1.meta": true,
          "Input1.meta.text": true,
          "Input1.meta.inputText": true,
          "Input1.componentHeight": true,
          "Input1.componentWidth": true,
          "Input1.type": true,
          "Text1": true,
          "Text1.ENTITY_TYPE": true,
          "Text1.needsErrorInfo": true,
          "Text1.mobileBottomRow": true,
          "Text1.widgetName": true,
          "Text1.topRow": true,
          "Text1.bottomRow": true,
          "Text1.parentRowSpace": true,
          "Text1.mobileRightColumn": true,
          "Text1.animateLoading": true,
          "Text1.overflow": true,
          "Text1.fontFamily": true,
          "Text1.parentColumnSpace": true,
          "Text1.leftColumn": true,
          "Text1.shouldTruncate": true,
          "Text1.truncateButtonColor": true,
          "Text1.text": true,
          "Text1.key": true,
          "Text1.rightColumn": true,
          "Text1.textAlign": true,
          "Text1.dynamicHeight": true,
          "Text1.widgetId": true,
          "Text1.minWidth": true,
          "Text1.isVisible": true,
          "Text1.fontStyle": true,
          "Text1.textColor": true,
          "Text1.isLoading": true,
          "Text1.mobileTopRow": true,
          "Text1.responsiveBehavior": true,
          "Text1.originalTopRow": true,
          "Text1.borderRadius": true,
          "Text1.mobileLeftColumn": true,
          "Text1.maxDynamicHeight": true,
          "Text1.originalBottomRow": true,
          "Text1.fontSize": true,
          "Text1.minDynamicHeight": true,
          "Text1.value": true,
          "Text1.meta": true,
          "Text1.componentHeight": true,
          "Text1.componentWidth": true,
          "Text1.type": true,
          "Canvas2": true,
          "Canvas2.ENTITY_TYPE": true,
          "Canvas2.needsErrorInfo": true,
          "Canvas2.boxShadow": true,
          "Canvas2.mobileBottomRow": true,
          "Canvas2.widgetName": true,
          "Canvas2.topRow": true,
          "Canvas2.bottomRow": true,
          "Canvas2.parentRowSpace": true,
          "Canvas2.canExtend": true,
          "Canvas2.minHeight": true,
          "Canvas2.mobileRightColumn": true,
          "Canvas2.parentColumnSpace": true,
          "Canvas2.leftColumn": true,
          "Canvas2.key": true,
          "Canvas2.rightColumn": true,
          "Canvas2.dynamicHeight": true,
          "Canvas2.widgetId": true,
          "Canvas2.containerStyle": true,
          "Canvas2.minWidth": true,
          "Canvas2.isVisible": true,
          "Canvas2.isLoading": true,
          "Canvas2.mobileTopRow": true,
          "Canvas2.responsiveBehavior": true,
          "Canvas2.borderRadius": true,
          "Canvas2.mobileLeftColumn": true,
          "Canvas2.maxDynamicHeight": true,
          "Canvas2.minDynamicHeight": true,
          "Canvas2.flexLayers": true,
          "Canvas2.meta": true,
          "Canvas2.componentHeight": true,
          "Canvas2.componentWidth": true,
          "Canvas2.type": true,
          "containerPlayground": true,
          "containerPlayground.ENTITY_TYPE": true,
          "containerPlayground.needsErrorInfo": true,
          "containerPlayground.boxShadow": true,
          "containerPlayground.mobileBottomRow": true,
          "containerPlayground.widgetName": true,
          "containerPlayground.borderColor": true,
          "containerPlayground.isCanvas": true,
          "containerPlayground.topRow": true,
          "containerPlayground.bottomRow": true,
          "containerPlayground.parentRowSpace": true,
          "containerPlayground.shouldScrollContents": true,
          "containerPlayground.mobileRightColumn": true,
          "containerPlayground.animateLoading": true,
          "containerPlayground.parentColumnSpace": true,
          "containerPlayground.leftColumn": true,
          "containerPlayground.borderWidth": true,
          "containerPlayground.flexVerticalAlignment": true,
          "containerPlayground.key": true,
          "containerPlayground.backgroundColor": true,
          "containerPlayground.rightColumn": true,
          "containerPlayground.dynamicHeight": true,
          "containerPlayground.widgetId": true,
          "containerPlayground.containerStyle": true,
          "containerPlayground.minWidth": true,
          "containerPlayground.isVisible": true,
          "containerPlayground.isLoading": true,
          "containerPlayground.mobileTopRow": true,
          "containerPlayground.responsiveBehavior": true,
          "containerPlayground.borderRadius": true,
          "containerPlayground.mobileLeftColumn": true,
          "containerPlayground.maxDynamicHeight": true,
          "containerPlayground.minDynamicHeight": true,
          "containerPlayground.meta": true,
          "containerPlayground.componentHeight": true,
          "containerPlayground.componentWidth": true,
          "containerPlayground.type": true,
          "btnCalculate": true,
          "btnCalculate.ENTITY_TYPE": true,
          "btnCalculate.resetFormOnClick": true,
          "btnCalculate.needsErrorInfo": true,
          "btnCalculate.boxShadow": true,
          "btnCalculate.mobileBottomRow": true,
          "btnCalculate.widgetName": true,
          "btnCalculate.onClick": true,
          "btnCalculate.buttonColor": true,
          "btnCalculate.topRow": true,
          "btnCalculate.bottomRow": true,
          "btnCalculate.parentRowSpace": true,
          "btnCalculate.mobileRightColumn": true,
          "btnCalculate.animateLoading": true,
          "btnCalculate.parentColumnSpace": true,
          "btnCalculate.leftColumn": true,
          "btnCalculate.text": true,
          "btnCalculate.isDisabled": true,
          "btnCalculate.key": true,
          "btnCalculate.rightColumn": true,
          "btnCalculate.isDefaultClickDisabled": true,
          "btnCalculate.widgetId": true,
          "btnCalculate.minWidth": true,
          "btnCalculate.isVisible": true,
          "btnCalculate.recaptchaType": true,
          "btnCalculate.isLoading": true,
          "btnCalculate.mobileTopRow": true,
          "btnCalculate.responsiveBehavior": true,
          "btnCalculate.disabledWhenInvalid": true,
          "btnCalculate.borderRadius": true,
          "btnCalculate.mobileLeftColumn": true,
          "btnCalculate.buttonVariant": true,
          "btnCalculate.placement": true,
          "btnCalculate.recaptchaToken": true,
          "btnCalculate.meta": true,
          "btnCalculate.componentHeight": true,
          "btnCalculate.componentWidth": true,
          "btnCalculate.type": true,
          "calculatedTxt": true,
          "calculatedTxt.ENTITY_TYPE": true,
          "calculatedTxt.needsErrorInfo": true,
          "calculatedTxt.mobileBottomRow": true,
          "calculatedTxt.widgetName": true,
          "calculatedTxt.topRow": true,
          "calculatedTxt.bottomRow": true,
          "calculatedTxt.parentRowSpace": true,
          "calculatedTxt.mobileRightColumn": true,
          "calculatedTxt.animateLoading": true,
          "calculatedTxt.overflow": true,
          "calculatedTxt.fontFamily": true,
          "calculatedTxt.parentColumnSpace": true,
          "calculatedTxt.leftColumn": true,
          "calculatedTxt.shouldTruncate": true,
          "calculatedTxt.truncateButtonColor": true,
          "calculatedTxt.text": true,
          "calculatedTxt.key": true,
          "calculatedTxt.rightColumn": true,
          "calculatedTxt.textAlign": true,
          "calculatedTxt.dynamicHeight": true,
          "calculatedTxt.widgetId": true,
          "calculatedTxt.minWidth": true,
          "calculatedTxt.isVisible": true,
          "calculatedTxt.fontStyle": true,
          "calculatedTxt.textColor": true,
          "calculatedTxt.isLoading": true,
          "calculatedTxt.mobileTopRow": true,
          "calculatedTxt.responsiveBehavior": true,
          "calculatedTxt.originalTopRow": true,
          "calculatedTxt.borderRadius": true,
          "calculatedTxt.mobileLeftColumn": true,
          "calculatedTxt.maxDynamicHeight": true,
          "calculatedTxt.originalBottomRow": true,
          "calculatedTxt.fontSize": true,
          "calculatedTxt.minDynamicHeight": true,
          "calculatedTxt.value": true,
          "calculatedTxt.meta": true,
          "calculatedTxt.componentHeight": true,
          "calculatedTxt.componentWidth": true,
          "calculatedTxt.type": true,
          "Canvas3": true,
          "Canvas3.ENTITY_TYPE": true,
          "Canvas3.needsErrorInfo": true,
          "Canvas3.boxShadow": true,
          "Canvas3.mobileBottomRow": true,
          "Canvas3.widgetName": true,
          "Canvas3.topRow": true,
          "Canvas3.bottomRow": true,
          "Canvas3.parentRowSpace": true,
          "Canvas3.canExtend": true,
          "Canvas3.minHeight": true,
          "Canvas3.mobileRightColumn": true,
          "Canvas3.parentColumnSpace": true,
          "Canvas3.leftColumn": true,
          "Canvas3.key": true,
          "Canvas3.rightColumn": true,
          "Canvas3.dynamicHeight": true,
          "Canvas3.widgetId": true,
          "Canvas3.containerStyle": true,
          "Canvas3.minWidth": true,
          "Canvas3.isVisible": true,
          "Canvas3.isLoading": true,
          "Canvas3.mobileTopRow": true,
          "Canvas3.responsiveBehavior": true,
          "Canvas3.borderRadius": true,
          "Canvas3.mobileLeftColumn": true,
          "Canvas3.maxDynamicHeight": true,
          "Canvas3.minDynamicHeight": true,
          "Canvas3.flexLayers": true,
          "Canvas3.meta": true,
          "Canvas3.componentHeight": true,
          "Canvas3.componentWidth": true,
          "Canvas3.type": true,
          "containerActions": true,
          "containerActions.ENTITY_TYPE": true,
          "containerActions.needsErrorInfo": true,
          "containerActions.boxShadow": true,
          "containerActions.mobileBottomRow": true,
          "containerActions.widgetName": true,
          "containerActions.borderColor": true,
          "containerActions.isCanvas": true,
          "containerActions.topRow": true,
          "containerActions.bottomRow": true,
          "containerActions.parentRowSpace": true,
          "containerActions.shouldScrollContents": true,
          "containerActions.mobileRightColumn": true,
          "containerActions.animateLoading": true,
          "containerActions.parentColumnSpace": true,
          "containerActions.leftColumn": true,
          "containerActions.borderWidth": true,
          "containerActions.flexVerticalAlignment": true,
          "containerActions.key": true,
          "containerActions.backgroundColor": true,
          "containerActions.rightColumn": true,
          "containerActions.dynamicHeight": true,
          "containerActions.widgetId": true,
          "containerActions.containerStyle": true,
          "containerActions.minWidth": true,
          "containerActions.isVisible": true,
          "containerActions.isLoading": true,
          "containerActions.mobileTopRow": true,
          "containerActions.responsiveBehavior": true,
          "containerActions.borderRadius": true,
          "containerActions.mobileLeftColumn": true,
          "containerActions.maxDynamicHeight": true,
          "containerActions.minDynamicHeight": true,
          "containerActions.meta": true,
          "containerActions.componentHeight": true,
          "containerActions.componentWidth": true,
          "containerActions.type": true,
          "Canvas1": true,
          "Canvas1.ENTITY_TYPE": true,
          "Canvas1.needsErrorInfo": true,
          "Canvas1.boxShadow": true,
          "Canvas1.mobileBottomRow": true,
          "Canvas1.widgetName": true,
          "Canvas1.topRow": true,
          "Canvas1.bottomRow": true,
          "Canvas1.parentRowSpace": true,
          "Canvas1.canExtend": true,
          "Canvas1.minHeight": true,
          "Canvas1.mobileRightColumn": true,
          "Canvas1.parentColumnSpace": true,
          "Canvas1.leftColumn": true,
          "Canvas1.key": true,
          "Canvas1.rightColumn": true,
          "Canvas1.dynamicHeight": true,
          "Canvas1.widgetId": true,
          "Canvas1.containerStyle": true,
          "Canvas1.minWidth": true,
          "Canvas1.isVisible": true,
          "Canvas1.isLoading": true,
          "Canvas1.mobileTopRow": true,
          "Canvas1.responsiveBehavior": true,
          "Canvas1.borderRadius": true,
          "Canvas1.mobileLeftColumn": true,
          "Canvas1.maxDynamicHeight": true,
          "Canvas1.minDynamicHeight": true,
          "Canvas1.flexLayers": true,
          "Canvas1.meta": true,
          "Canvas1.componentHeight": true,
          "Canvas1.componentWidth": true,
          "Canvas1.type": true,
          "containerRoot": true,
          "containerRoot.ENTITY_TYPE": true,
          "containerRoot.needsErrorInfo": true,
          "containerRoot.boxShadow": true,
          "containerRoot.mobileBottomRow": true,
          "containerRoot.widgetName": true,
          "containerRoot.borderColor": true,
          "containerRoot.isCanvas": true,
          "containerRoot.topRow": true,
          "containerRoot.bottomRow": true,
          "containerRoot.parentRowSpace": true,
          "containerRoot.shouldScrollContents": true,
          "containerRoot.mobileRightColumn": true,
          "containerRoot.animateLoading": true,
          "containerRoot.parentColumnSpace": true,
          "containerRoot.leftColumn": true,
          "containerRoot.borderWidth": true,
          "containerRoot.flexVerticalAlignment": true,
          "containerRoot.key": true,
          "containerRoot.backgroundColor": true,
          "containerRoot.rightColumn": true,
          "containerRoot.dynamicHeight": true,
          "containerRoot.widgetId": true,
          "containerRoot.containerStyle": true,
          "containerRoot.minWidth": true,
          "containerRoot.isVisible": true,
          "containerRoot.isLoading": true,
          "containerRoot.mobileTopRow": true,
          "containerRoot.responsiveBehavior": true,
          "containerRoot.borderRadius": true,
          "containerRoot.mobileLeftColumn": true,
          "containerRoot.maxDynamicHeight": true,
          "containerRoot.minDynamicHeight": true,
          "containerRoot.meta": true,
          "containerRoot.componentHeight": true,
          "containerRoot.componentWidth": true,
          "containerRoot.type": true,
          "appsmith": true,
          "appsmith.user": true,
          "appsmith.user.email": true,
          "appsmith.user.username": true,
          "appsmith.user.name": true,
          "appsmith.user.useCase": true,
          "appsmith.user.enableTelemetry": true,
          "appsmith.user.roles": true,
          "appsmith.user.roles[0]": true,
          "appsmith.user.groups": true,
          "appsmith.user.groups[0]": true,
          "appsmith.user.accountNonExpired": true,
          "appsmith.user.accountNonLocked": true,
          "appsmith.user.credentialsNonExpired": true,
          "appsmith.user.emptyInstance": true,
          "appsmith.user.isAnonymous": true,
          "appsmith.user.isEnabled": true,
          "appsmith.user.isSuperUser": true,
          "appsmith.user.isConfigurable": true,
          "appsmith.user.adminSettingsVisible": true,
          "appsmith.user.isIntercomConsentGiven": true,
          "appsmith.URL": true,
          "appsmith.URL.fullPath": true,
          "appsmith.URL.host": true,
          "appsmith.URL.hostname": true,
          "appsmith.URL.queryParams": true,
          "appsmith.URL.protocol": true,
          "appsmith.URL.pathname": true,
          "appsmith.URL.port": true,
          "appsmith.URL.hash": true,
          "appsmith.store": true,
          "appsmith.store.varCalculated": true,
          "appsmith.store.varTxt": true,
          "appsmith.store.": true,
          "appsmith.geolocation": true,
          "appsmith.geolocation.canBeRequested": true,
          "appsmith.geolocation.currentPosition": true,
          "appsmith.workflows": true,
          "appsmith.mode": true,
          "appsmith.theme": true,
          "appsmith.theme.colors": true,
          "appsmith.theme.colors.primaryColor": true,
          "appsmith.theme.colors.backgroundColor": true,
          "appsmith.theme.borderRadius": true,
          "appsmith.theme.borderRadius.appBorderRadius": true,
          "appsmith.theme.boxShadow": true,
          "appsmith.theme.boxShadow.appBoxShadow": true,
          "appsmith.theme.fontFamily": true,
          "appsmith.theme.fontFamily.appFont": true,
          "appsmith.currentPageName": true,
          "appsmith.workspaceName": true,
          "appsmith.appName": true,
          "appsmith.currentEnvironmentName": true,
          "appsmith.ENTITY_TYPE": true
        },
        "privateWidgets": {},
        "oldUnEvalTree": {
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
            "onClick": "{{storeValue('varCalculated', Input1.text)}}",
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
            "leftColumn": 5,
            "shouldTruncate": false,
            "truncateButtonColor": "{{appsmith.theme.colors.primaryColor}}",
            "text": "{{appsmith.store.varCalculated}}",
            "key": "lgxpzfcx4b",
            "rightColumn": 62,
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
            "originalBottomRow": 15,
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
            "store": {
              "varCalculated": "",
              "varTxt": "dddd",
              "": "dddd"
            },
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
            "workspaceName": "Peter's apps",
            "appName": "auto-layout",
            "currentEnvironmentName": "",
            "ENTITY_TYPE": "APPSMITH"
          }
        },
        "oldConfigTree": {
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
            "dynamicPropertyPathList": [],
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
        },
        "errors": [],
        "logs": [
          {
            "diffCalcDeps": "0.10",
            "updateChangedDependencies": "0.00 ms"
          },
          {
            "updatedValuePathsLatency": 0,
            "addDependantsOfNestedPropertyPathsLatency": 0,
            "trimDependantChangePathsLatency": 0,
            "completeSortOrderLatency": 0.19999999925494194
          },
          {
            "sortedDependencies": [
              "appsmith.theme.boxShadow.appBoxShadow",
              "containerRoot.boxShadow",
              "appsmith.theme.borderRadius.appBorderRadius",
              "containerRoot.borderRadius",
              "containerRoot",
              "Canvas1.boxShadow",
              "Canvas1.borderRadius",
              "Canvas1",
              "containerActions.boxShadow",
              "containerActions.borderRadius",
              "containerActions",
              "Canvas3.boxShadow",
              "Canvas3.borderRadius",
              "Canvas3",
              "appsmith.store.varCalculated",
              "calculatedTxt.text",
              "calculatedTxt.value",
              "calculatedTxt.borderRadius",
              "appsmith.theme.fontFamily.appFont",
              "calculatedTxt.fontFamily",
              "appsmith.theme.colors.primaryColor",
              "calculatedTxt.truncateButtonColor",
              "calculatedTxt",
              "btnCalculate.borderRadius",
              "btnCalculate.buttonColor",
              "btnCalculate.onClick",
              "btnCalculate",
              "containerPlayground.boxShadow",
              "containerPlayground.borderRadius",
              "containerPlayground",
              "Canvas2.boxShadow",
              "Canvas2.borderRadius",
              "Canvas2",
              "Input1.defaultText",
              "Input1.meta.text",
              "Input1.text",
              "Text1.text",
              "Text1.value",
              "Text1.borderRadius",
              "Text1.fontFamily",
              "Text1.truncateButtonColor",
              "Text1",
              "Input1.meta.inputText",
              "Input1.meta",
              "Input1.isRequired",
              "Input1.inputType",
              "Input1.inputText",
              "Input1.isValid",
              "Input1.value",
              "Input1.borderRadius",
              "Input1.accentColor",
              "Input1",
              "appsmith.store",
              "appsmith.theme.fontFamily",
              "appsmith.theme.colors",
              "appsmith.theme.boxShadow",
              "appsmith.theme.borderRadius",
              "appsmith.theme",
              "appsmith",
              "MainContainer.boxShadow",
              "MainContainer.borderRadius",
              "MainContainer",
              "localVariables.varCalculated",
              "localVariables.body",
              "localVariables"
            ],
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
              "appsmith.store.varCalculated": [
                "calculatedTxt.text",
                "appsmith.store"
              ],
              "calculatedTxt.text": [
                "calculatedTxt.value",
                "calculatedTxt"
              ],
              "localVariables.body": [
                "localVariables"
              ],
              "localVariables.varCalculated": [
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
              "appsmith.store": [
                "appsmith"
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
            },
            "updatedDependencies": {
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
                "appsmith.store.varCalculated"
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
                "appsmith.theme",
                "appsmith.store"
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
              "appsmith.store": [
                "appsmith.store.varCalculated"
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
            "evaluationOrder": []
          },
          {
            "timeTakenForSetupUpdateTree": {
              "calculateSubTreeSortOrder": "0.40 ms",
              "clone": "0.00 ms"
            }
          },
          {
            "differences": [
              {
                "kind": "E",
                "path": [
                  "appsmith",
                  "workspaceName"
                ],
                "lhs": "",
                "rhs": "Peter's apps"
              }
            ],
            "translatedDiffs": [
              {
                "payload": {
                  "propertyPath": "appsmith.workspaceName",
                  "value": ""
                },
                "event": "NOOP"
              }
            ]
          },
          {
            "timeTakenForEvalAndValidateSubTree": {
              "evaluation": "0.40 ms"
            }
          }
        ],
        "console": {
          "isEnabled": true,
          "emitter": {
            "_events": {},
            "_eventsCount": 5
          }
        },
        "allActionValidationConfig": {},
        "evalProps": {
          "containerRoot": {
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
          "Canvas3": {
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
          "calculatedTxt": {
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
          "btnCalculate": {
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
          "containerPlayground": {
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
          "Canvas2": {
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
          "MainContainer": {
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
          "localVariables": {
            "__evaluation__": {
              "errors": {
                "varCalculated": [],
                "body": []
              }
            }
          }
        },
        "undefinedEvalValuesMap": {},
        "prevState": {
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
            "onClick": "{{storeValue('varCalculated', Input1.text)}}",
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
            "leftColumn": 5,
            "shouldTruncate": false,
            "truncateButtonColor": "#553DE9",
            "text": "",
            "key": "lgxpzfcx4b",
            "rightColumn": 62,
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
            "originalBottomRow": 15,
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
            "store": {
              "varCalculated": "",
              "varTxt": "dddd",
              "": "dddd"
            },
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
            "workspaceName": "Peter's apps",
            "appName": "auto-layout",
            "currentEnvironmentName": "",
            "ENTITY_TYPE": "APPSMITH"
          }
        },
        "hasCyclicalDependency": false
      },
      evalTree: {
        "localVariables": {
          "varCalculated": "",
          "body": "export default {\n\tvarCalculated: '',\n}",
          "ENTITY_TYPE": "JSACTION",
          "actionId": "68ad40c7d8deff53ee07277d"
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
          "borderColor": ""
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
          "labelTextColor": ""
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
          "borderColor": ""
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
          "borderColor": ""
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
          "type": "CONTAINER_WIDGET"
        },
        "btnCalculate": {
          "ENTITY_TYPE": "WIDGET",
          "resetFormOnClick": false,
          "needsErrorInfo": false,
          "boxShadow": "none",
          "mobileBottomRow": 11,
          "widgetName": "btnCalculate",
          "onClick": "{{storeValue('varCalculated', Input1.text)}}",
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
          "iconName": ""
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
          "leftColumn": 5,
          "shouldTruncate": false,
          "truncateButtonColor": "#553DE9",
          "text": "",
          "key": "lgxpzfcx4b",
          "rightColumn": 62,
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
          "originalBottomRow": 15,
          "fontSize": "1rem",
          "minDynamicHeight": 4,
          "value": "",
          "meta": {},
          "componentHeight": 40,
          "componentWidth": 372.851806640625,
          "type": "TEXT_WIDGET",
          "backgroundColor": "",
          "borderColor": ""
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
          "borderColor": ""
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
          "type": "CONTAINER_WIDGET"
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
          "borderColor": ""
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
          "store": {
            "varCalculated": "",
            "varTxt": "dddd",
            "": "dddd"
          },
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
          "workspaceName": "Peter's apps",
          "appName": "auto-layout",
          "currentEnvironmentName": "",
          "ENTITY_TYPE": "APPSMITH"
        }
      },
      key: "varCalculated",
      path: [
        "appsmith",
        "store",
        "varCalculated"
      ],
      persist: true
      value: ""
    }
  }
]
