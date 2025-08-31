export const onButtonClickSequence = [
  {
    type: 'SELECT_WIDGET_INIT',
    payload: {
      selectionRequestType: 'One',
      payload: [
        'tl8xbeqhua'
      ],
      invokedBy: 'CanvasClick'
    }
  },
  {
    type: 'SET_SELECTED_WIDGETS',
    payload: {
      widgetIds: [
        'tl8xbeqhua'
      ]
    }
  },
  {
    type: 'SET_SELECTED_WIDGET_ANCESTRY',
    payload: []
  },
  {
    type: 'SET_ENTITY_EXPLORER_WIDGET_ANCESTRY',
    payload: [
      'tl8xbeqhua',
      'cl2ynw6igw',
      'dgev9742e2',
      'k1ojmo3iid',
      '9e839onva6',
      '0'
    ]
  },
  {
    type: 'BATCHED_UPDATE',
    payload: {
      type: 'EXECUTE_TRIGGER_REQUEST',
      payload: {
        triggerPropertyName: 'onClick',
        dynamicString: '{{storeValue(\'varCalculated\', Input1.text)}}',
        event: {
          type: 'ON_CLICK'
        },
        source: {
          id: 'tl8xbeqhua',
          name: 'btnCalculate'
        }
      }
    }
  },
  {
    type: 'EXECUTE_BATCH'
  },
  {
    type: 'DEBUGGER_LOG_INIT',
    payload: [
      {
        text: 'Event onClick fired',
        source: {
          type: 'WIDGET',
          id: 'tl8xbeqhua',
          name: 'btnCalculate'
        },
        severity: 'info',
        timestamp: '1756481560751',
        category: 'PLATFORM_GENERATED',
        occurrenceCount: 1,
        isExpanded: false
      }
    ]
  },
  {
    type: 'EXECUTE_TRIGGER_REQUEST',
    payload: {
      triggerPropertyName: 'onClick',
      dynamicString: '{{storeValue(\'varCalculated\', Input1.text)}}',
      event: {
        type: 'ON_CLICK'
      },
      source: {
        id: 'tl8xbeqhua',
        name: 'btnCalculate'
      }
    }
  },
  {
    type: 'BATCH_UPDATES_SUCCESS',
    payload: [
      {
        type: 'EXECUTE_TRIGGER_REQUEST',
        payload: {
          triggerPropertyName: 'onClick',
          dynamicString: '{{storeValue(\'varCalculated\', Input1.text)}}',
          event: {
            type: 'ON_CLICK'
          },
          source: {
            id: 'tl8xbeqhua',
            name: 'btnCalculate'
          }
        }
      }
    ]
  },
  {
    type: 'SET_EVALUATED_TREE',
    payload: null
  },
  {
    type: 'SET_LOADING_ENTITIES',
    payload: {}
  },
  {
    type: 'SET_EVALUATION_INVERSE_DEPENDENCY_MAP',
    payload: {
      inverseDependencyMap: {
        'appsmith.theme.borderRadius.appBorderRadius': [
          'MainContainer.borderRadius',
          'Input1.borderRadius',
          'Text1.borderRadius',
          'Canvas2.borderRadius',
          'containerPlayground.borderRadius',
          'btnCalculate.borderRadius',
          'calculatedTxt.borderRadius',
          'Canvas3.borderRadius',
          'containerActions.borderRadius',
          'Canvas1.borderRadius',
          'containerRoot.borderRadius',
          'appsmith.theme.borderRadius'
        ],
        'appsmith.theme.boxShadow.appBoxShadow': [
          'MainContainer.boxShadow',
          'Canvas2.boxShadow',
          'containerPlayground.boxShadow',
          'Canvas3.boxShadow',
          'containerActions.boxShadow',
          'Canvas1.boxShadow',
          'containerRoot.boxShadow',
          'appsmith.theme.boxShadow'
        ],
        'Input1.meta.inputText': [
          'Input1.inputText',
          'Input1.meta'
        ],
        'Input1.defaultText': [
          'Input1.inputText',
          'Input1.text',
          'Input1'
        ],
        'Input1.meta.text': [
          'Input1.text',
          'Input1.meta'
        ],
        'appsmith.theme.colors.primaryColor': [
          'Input1.accentColor',
          'Text1.truncateButtonColor',
          'btnCalculate.buttonColor',
          'calculatedTxt.truncateButtonColor',
          'appsmith.theme.colors'
        ],
        'Input1.text': [
          'Input1.value',
          'Text1.text',
          'Input1'
        ],
        'Input1.inputType': [
          'Input1.isValid',
          'Input1'
        ],
        'Input1.inputText': [
          'Input1.isValid',
          'Input1'
        ],
        'Input1.isRequired': [
          'Input1.isValid',
          'Input1'
        ],
        'appsmith.theme.fontFamily.appFont': [
          'Text1.fontFamily',
          'calculatedTxt.fontFamily',
          'appsmith.theme.fontFamily'
        ],
        'Text1.text': [
          'Text1.value',
          'Text1'
        ],
        'appsmith.store.varCalculated': [
          'calculatedTxt.text',
          'appsmith.store'
        ],
        'calculatedTxt.text': [
          'calculatedTxt.value',
          'calculatedTxt'
        ],
        'localVariables.body': [
          'localVariables'
        ],
        'localVariables.varCalculated': [
          'localVariables'
        ],
        'MainContainer.borderRadius': [
          'MainContainer'
        ],
        'appsmith.theme.borderRadius': [
          'appsmith.theme'
        ],
        'appsmith.theme': [
          'appsmith'
        ],
        'MainContainer.boxShadow': [
          'MainContainer'
        ],
        'appsmith.theme.boxShadow': [
          'appsmith.theme'
        ],
        'Input1.meta': [
          'Input1'
        ],
        'Input1.accentColor': [
          'Input1'
        ],
        'appsmith.theme.colors': [
          'appsmith.theme'
        ],
        'Input1.borderRadius': [
          'Input1'
        ],
        'Input1.value': [
          'Input1'
        ],
        'Input1.isValid': [
          'Input1'
        ],
        'Text1.truncateButtonColor': [
          'Text1'
        ],
        'Text1.fontFamily': [
          'Text1'
        ],
        'appsmith.theme.fontFamily': [
          'appsmith.theme'
        ],
        'Text1.borderRadius': [
          'Text1'
        ],
        'Text1.value': [
          'Text1'
        ],
        'Canvas2.borderRadius': [
          'Canvas2'
        ],
        'Canvas2.boxShadow': [
          'Canvas2'
        ],
        'containerPlayground.borderRadius': [
          'containerPlayground'
        ],
        'containerPlayground.boxShadow': [
          'containerPlayground'
        ],
        'btnCalculate.onClick': [
          'btnCalculate'
        ],
        'btnCalculate.buttonColor': [
          'btnCalculate'
        ],
        'btnCalculate.borderRadius': [
          'btnCalculate'
        ],
        'calculatedTxt.truncateButtonColor': [
          'calculatedTxt'
        ],
        'calculatedTxt.fontFamily': [
          'calculatedTxt'
        ],
        'calculatedTxt.borderRadius': [
          'calculatedTxt'
        ],
        'appsmith.store': [
          'appsmith'
        ],
        'calculatedTxt.value': [
          'calculatedTxt'
        ],
        'Canvas3.borderRadius': [
          'Canvas3'
        ],
        'Canvas3.boxShadow': [
          'Canvas3'
        ],
        'containerActions.borderRadius': [
          'containerActions'
        ],
        'containerActions.boxShadow': [
          'containerActions'
        ],
        'Canvas1.borderRadius': [
          'Canvas1'
        ],
        'Canvas1.boxShadow': [
          'Canvas1'
        ],
        'containerRoot.borderRadius': [
          'containerRoot'
        ],
        'containerRoot.boxShadow': [
          'containerRoot'
        ]
      }
    }
  },
  {
    type: 'EXECUTE_JS_UPDATES',
    payload: {}
  },
  {
    type: 'UPDATE_APP_STORE',
    payload: {
      varCalculated: '123',
      varTxt: 'dddd',
      '': 'dddd'
    }
  },
  {
    type: 'DEBUGGER_LOG',
    payload: [
      {
        text: 'storeValue triggered',
        state: {
          key: 'varCalculated',
          value: '123',
          persist: true
        },
        severity: 'info',
        category: 'PLATFORM_GENERATED',
        timestamp: '1756481560792',
        isExpanded: false,
        occurrenceCount: 2
      },
      {
        text: 'storeValue triggered',
        state: {
          key: 'varCalculated',
          value: '123',
          persist: true
        },
        severity: 'info',
        category: 'PLATFORM_GENERATED',
        timestamp: '1756481560792',
        isExpanded: false
      }
    ]
  }


]
