// @ts-nocheck
export default {
  canvasWidgets: {
    '0': {
      widgetName: 'MainContainer',
      backgroundColor: 'none',
      rightColumn: 4896,
      snapColumns: 64,
      detachFromLayout: true,
      widgetId: '0',
      topRow: 0,
      bottomRow: 630,
      containerStyle: 'none',
      snapRows: 124,
      parentRowSpace: 1,
      type: 'CANVAS_WIDGET',
      canExtend: true,
      version: 94,
      minHeight: 1292,
      dynamicTriggerPathList: [],
      parentColumnSpace: 1,
      dynamicBindingPathList: [],
      leftColumn: 0,
      children: [
        '9e839onva6'
      ]
    },
    '9nft85pms1': {
      needsErrorInfo: false,
      boxShadow: 'none',
      mobileBottomRow: 10,
      widgetName: 'Input1',
      topRow: 1,
      bottomRow: 8,
      parentRowSpace: 10,
      labelWidth: 5,
      autoFocus: false,
      type: 'INPUT_WIDGET_V2',
      mobileRightColumn: 35,
      animateLoading: true,
      parentColumnSpace: 6.541259765625,
      resetOnSubmit: true,
      leftColumn: 1,
      dynamicBindingPathList: [
        {
          key: 'accentColor'
        },
        {
          key: 'borderRadius'
        }
      ],
      labelPosition: 'Top',
      labelStyle: '',
      inputType: 'TEXT',
      isDisabled: false,
      key: 'z6mkd60niu',
      labelTextSize: '0.875rem',
      isRequired: false,
      rightColumn: 60,
      dynamicHeight: 'FIXED',
      widgetId: '9nft85pms1',
      accentColor: '{{appsmith.theme.colors.primaryColor}}',
      showStepArrows: false,
      minWidth: 450,
      isVisible: true,
      label: 'Label',
      version: 2,
      parentId: '256n68mv3w',
      labelAlignment: 'left',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 3,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 15,
      maxDynamicHeight: 9000,
      iconAlign: 'left',
      defaultText: '',
      minDynamicHeight: 4
    },
    kwdcw234sl: {
      needsErrorInfo: false,
      mobileBottomRow: 15,
      widgetName: 'Text1',
      topRow: 11,
      bottomRow: 15,
      parentRowSpace: 10,
      type: 'TEXT_WIDGET',
      mobileRightColumn: 35,
      animateLoading: true,
      overflow: 'NONE',
      fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
      parentColumnSpace: 6.541259765625,
      dynamicTriggerPathList: [],
      leftColumn: 2,
      dynamicBindingPathList: [
        {
          key: 'truncateButtonColor'
        },
        {
          key: 'fontFamily'
        },
        {
          key: 'borderRadius'
        },
        {
          key: 'text'
        }
      ],
      shouldTruncate: false,
      truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
      text: 'current value is: {{Input1.text ? Input1.text : "-"}}',
      key: 'lgxpzfcx4b',
      rightColumn: 59,
      textAlign: 'LEFT',
      dynamicHeight: 'AUTO_HEIGHT',
      widgetId: 'kwdcw234sl',
      minWidth: 450,
      isVisible: true,
      fontStyle: 'BOLD',
      textColor: '#231F20',
      version: 1,
      parentId: '256n68mv3w',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 11,
      responsiveBehavior: 'fill',
      originalTopRow: 11,
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 19,
      maxDynamicHeight: 9000,
      originalBottomRow: 16,
      fontSize: '1rem',
      minDynamicHeight: 4
    },
    '256n68mv3w': {
      needsErrorInfo: false,
      boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
      mobileBottomRow: 100,
      widgetName: 'Canvas2',
      topRow: 0,
      bottomRow: 290,
      parentRowSpace: 1,
      type: 'CANVAS_WIDGET',
      canExtend: false,
      minHeight: 100,
      mobileRightColumn: 328.98046875,
      parentColumnSpace: 1,
      leftColumn: 0,
      dynamicBindingPathList: [
        {
          key: 'borderRadius'
        },
        {
          key: 'boxShadow'
        }
      ],
      children: [
        '9nft85pms1',
        'kwdcw234sl'
      ],
      key: 'izcc32bkjr',
      rightColumn: 328.98046875,
      detachFromLayout: true,
      dynamicHeight: 'AUTO_HEIGHT',
      widgetId: '256n68mv3w',
      containerStyle: 'none',
      minWidth: 450,
      isVisible: true,
      version: 1,
      parentId: '0j3cs5153j',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 0,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 0,
      maxDynamicHeight: 9000,
      minDynamicHeight: 4,
      flexLayers: []
    },
    '0j3cs5153j': {
      needsErrorInfo: false,
      boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
      mobileBottomRow: 21,
      widgetName: 'containerPlayground',
      borderColor: '#E0DEDE',
      isCanvas: true,
      topRow: 1,
      bottomRow: 30,
      parentRowSpace: 10,
      type: 'CONTAINER_WIDGET',
      shouldScrollContents: true,
      mobileRightColumn: 25,
      animateLoading: true,
      parentColumnSpace: 13.70751953125,
      dynamicTriggerPathList: [],
      leftColumn: 0,
      dynamicBindingPathList: [
        {
          key: 'borderRadius'
        },
        {
          key: 'boxShadow'
        }
      ],
      children: [
        '256n68mv3w'
      ],
      borderWidth: '1',
      flexVerticalAlignment: 'stretch',
      key: 'bv1axpkzaj',
      backgroundColor: '#FFFFFF',
      rightColumn: 32,
      dynamicHeight: 'FIXED',
      widgetId: '0j3cs5153j',
      containerStyle: 'card',
      minWidth: 450,
      isVisible: true,
      version: 1,
      parentId: 'k1ojmo3iid',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 11,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 1,
      maxDynamicHeight: 12,
      minDynamicHeight: 10
    },
    tl8xbeqhua: {
      resetFormOnClick: false,
      needsErrorInfo: false,
      boxShadow: 'none',
      mobileBottomRow: 11,
      widgetName: 'btnCalculate',
      onClick: '{{storeValue(\'localCalculatedVar\', calculatedTxt.setText(Input1.text));}}',
      buttonColor: '{{appsmith.theme.colors.primaryColor}}',
      topRow: 4,
      bottomRow: 9,
      parentRowSpace: 10,
      type: 'BUTTON_WIDGET',
      mobileRightColumn: 25,
      animateLoading: true,
      parentColumnSpace: 9.216796875,
      dynamicTriggerPathList: [
        {
          key: 'onClick'
        }
      ],
      leftColumn: 5,
      dynamicBindingPathList: [
        {
          key: 'buttonColor'
        },
        {
          key: 'borderRadius'
        }
      ],
      text: 'Calculate',
      isDisabled: false,
      key: 'c32rx365fx',
      rightColumn: 57,
      isDefaultClickDisabled: true,
      widgetId: 'tl8xbeqhua',
      minWidth: 120,
      isVisible: true,
      recaptchaType: 'V3',
      version: 1,
      parentId: 'cl2ynw6igw',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 7,
      responsiveBehavior: 'hug',
      disabledWhenInvalid: false,
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 9,
      buttonVariant: 'PRIMARY',
      placement: 'CENTER'
    },
    od1swmzxxq: {
      needsErrorInfo: false,
      mobileBottomRow: 15,
      widgetName: 'calculatedTxt',
      topRow: 11,
      bottomRow: 15,
      parentRowSpace: 10,
      type: 'TEXT_WIDGET',
      mobileRightColumn: 35,
      animateLoading: true,
      overflow: 'NONE',
      fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
      parentColumnSpace: 6.541259765625,
      dynamicTriggerPathList: [],
      leftColumn: 3,
      dynamicBindingPathList: [
        {
          key: 'truncateButtonColor'
        },
        {
          key: 'fontFamily'
        },
        {
          key: 'borderRadius'
        },
        {
          key: 'text'
        }
      ],
      shouldTruncate: false,
      truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
      text: '{{localVariables.varCalculated}}',
      key: 'lgxpzfcx4b',
      rightColumn: 60,
      textAlign: 'LEFT',
      dynamicHeight: 'AUTO_HEIGHT',
      widgetId: 'od1swmzxxq',
      minWidth: 450,
      isVisible: true,
      fontStyle: 'BOLD',
      textColor: '#231F20',
      version: 1,
      parentId: 'cl2ynw6igw',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 11,
      responsiveBehavior: 'fill',
      originalTopRow: 11,
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 19,
      maxDynamicHeight: 9000,
      originalBottomRow: 16,
      fontSize: '1rem',
      minDynamicHeight: 4
    },
    cl2ynw6igw: {
      needsErrorInfo: false,
      boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
      mobileBottomRow: 100,
      widgetName: 'Canvas3',
      topRow: 0,
      bottomRow: 290,
      parentRowSpace: 1,
      type: 'CANVAS_WIDGET',
      canExtend: false,
      minHeight: 100,
      mobileRightColumn: 328.98046875,
      parentColumnSpace: 1,
      leftColumn: 0,
      dynamicBindingPathList: [
        {
          key: 'borderRadius'
        },
        {
          key: 'boxShadow'
        }
      ],
      children: [
        'tl8xbeqhua',
        'od1swmzxxq'
      ],
      key: 'izcc32bkjr',
      rightColumn: 328.98046875,
      detachFromLayout: true,
      dynamicHeight: 'AUTO_HEIGHT',
      widgetId: 'cl2ynw6igw',
      containerStyle: 'none',
      minWidth: 450,
      isVisible: true,
      version: 1,
      parentId: 'dgev9742e2',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 0,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 0,
      maxDynamicHeight: 9000,
      minDynamicHeight: 4,
      flexLayers: []
    },
    dgev9742e2: {
      needsErrorInfo: false,
      boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
      mobileBottomRow: 11,
      widgetName: 'containerActions',
      borderColor: '#E0DEDE',
      isCanvas: true,
      topRow: 1,
      bottomRow: 30,
      parentRowSpace: 10,
      type: 'CONTAINER_WIDGET',
      shouldScrollContents: true,
      mobileRightColumn: 63,
      animateLoading: true,
      parentColumnSpace: 13.70751953125,
      dynamicTriggerPathList: [],
      leftColumn: 32,
      dynamicBindingPathList: [
        {
          key: 'borderRadius'
        },
        {
          key: 'boxShadow'
        }
      ],
      children: [
        'cl2ynw6igw'
      ],
      borderWidth: '1',
      flexVerticalAlignment: 'stretch',
      key: 'bv1axpkzaj',
      backgroundColor: '#FFFFFF',
      rightColumn: 63,
      dynamicHeight: 'FIXED',
      widgetId: 'dgev9742e2',
      containerStyle: 'card',
      minWidth: 450,
      isVisible: true,
      version: 1,
      parentId: 'k1ojmo3iid',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 1,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 39,
      maxDynamicHeight: 9000,
      minDynamicHeight: 10
    },
    k1ojmo3iid: {
      needsErrorInfo: false,
      boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
      mobileBottomRow: 100,
      widgetName: 'Canvas1',
      topRow: 0,
      bottomRow: 410,
      parentRowSpace: 1,
      type: 'CANVAS_WIDGET',
      canExtend: false,
      minHeight: 100,
      mobileRightColumn: 430.5,
      parentColumnSpace: 1,
      leftColumn: 0,
      dynamicBindingPathList: [
        {
          key: 'borderRadius'
        },
        {
          key: 'boxShadow'
        }
      ],
      children: [
        '0j3cs5153j',
        'dgev9742e2'
      ],
      key: 'wl4jb57gwi',
      rightColumn: 430.5,
      detachFromLayout: true,
      dynamicHeight: 'AUTO_HEIGHT',
      widgetId: 'k1ojmo3iid',
      containerStyle: 'none',
      minWidth: 450,
      isVisible: true,
      version: 1,
      parentId: '9e839onva6',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 0,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 0,
      maxDynamicHeight: 9000,
      minDynamicHeight: 4,
      flexLayers: []
    },
    '9e839onva6': {
      needsErrorInfo: false,
      boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
      mobileBottomRow: 32,
      widgetName: 'containerRoot',
      borderColor: '#E0DEDE',
      isCanvas: true,
      topRow: 22,
      bottomRow: 63,
      parentRowSpace: 10,
      type: 'CONTAINER_WIDGET',
      shouldScrollContents: true,
      mobileRightColumn: 36,
      animateLoading: true,
      parentColumnSpace: 17.9375,
      dynamicTriggerPathList: [],
      leftColumn: 12,
      dynamicBindingPathList: [
        {
          key: 'borderRadius'
        },
        {
          key: 'boxShadow'
        }
      ],
      children: [
        'k1ojmo3iid'
      ],
      borderWidth: '1',
      flexVerticalAlignment: 'stretch',
      key: '1456ozhxit',
      backgroundColor: '#FFFFFF',
      rightColumn: 46,
      dynamicHeight: 'FIXED',
      widgetId: '9e839onva6',
      containerStyle: 'card',
      minWidth: 450,
      isVisible: true,
      version: 1,
      parentId: '0',
      renderMode: 'CANVAS',
      isLoading: false,
      mobileTopRow: 22,
      responsiveBehavior: 'fill',
      borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
      mobileLeftColumn: 12,
      maxDynamicHeight: 9000,
      minDynamicHeight: 10
    }
  },
  canvasWidgetsStructure: {
    bottomRow: 630,
    children: [
      {
        bottomRow: 63,
        children: [
          {
            bottomRow: 410,
            children: [
              {
                bottomRow: 30,
                children: [
                  {
                    bottomRow: 290,
                    children: [
                      {
                        bottomRow: 8,
                        parentId: '256n68mv3w',
                        topRow: 1,
                        type: 'INPUT_WIDGET_V2',
                        widgetId: '9nft85pms1',
                        children: []
                      },
                      {
                        bottomRow: 15,
                        parentId: '256n68mv3w',
                        topRow: 11,
                        type: 'TEXT_WIDGET',
                        widgetId: 'kwdcw234sl',
                        children: []
                      }
                    ],
                    parentId: '0j3cs5153j',
                    topRow: 0,
                    type: 'CANVAS_WIDGET',
                    widgetId: '256n68mv3w'
                  }
                ],
                parentId: 'k1ojmo3iid',
                topRow: 1,
                type: 'CONTAINER_WIDGET',
                widgetId: '0j3cs5153j'
              },
              {
                bottomRow: 30,
                children: [
                  {
                    bottomRow: 290,
                    children: [
                      {
                        bottomRow: 9,
                        parentId: 'cl2ynw6igw',
                        topRow: 4,
                        type: 'BUTTON_WIDGET',
                        widgetId: 'tl8xbeqhua',
                        children: []
                      },
                      {
                        bottomRow: 15,
                        parentId: 'cl2ynw6igw',
                        topRow: 11,
                        type: 'TEXT_WIDGET',
                        widgetId: 'od1swmzxxq',
                        children: []
                      }
                    ],
                    parentId: 'dgev9742e2',
                    topRow: 0,
                    type: 'CANVAS_WIDGET',
                    widgetId: 'cl2ynw6igw'
                  }
                ],
                parentId: 'k1ojmo3iid',
                topRow: 1,
                type: 'CONTAINER_WIDGET',
                widgetId: 'dgev9742e2'
              }
            ],
            parentId: '9e839onva6',
            topRow: 0,
            type: 'CANVAS_WIDGET',
            widgetId: 'k1ojmo3iid'
          }
        ],
        parentId: '0',
        topRow: 22,
        type: 'CONTAINER_WIDGET',
        widgetId: '9e839onva6'
      }
    ],
    topRow: 0,
    type: 'CANVAS_WIDGET',
    widgetId: '0'
  },
  metaWidgets: {},
  actions: [],
  datasources: {
    list: [
      {
        id: '68a9b823de8cf11f80e4a8a8',
        userPermissions: [
          'execute:datasources',
          'delete:datasources',
          'manage:datasources',
          'read:datasources'
        ],
        name: 'movies',
        pluginId: '68a9b7e7de8cf11f80e4a871',
        workspaceId: '68a9b81bde8cf11f80e4a8a0',
        datasourceStorages: {
          unused_env: {
            id: '68a9b823de8cf11f80e4a8a9',
            datasourceId: '68a9b823de8cf11f80e4a8a8',
            environmentId: 'unused_env',
            datasourceConfiguration: {
              connection: {
                mode: 'READ_WRITE',
                type: 'DIRECT',
                ssl: {
                  authType: 'DEFAULT'
                }
              },
              authentication: {
                authenticationType: 'dbAuth',
                authType: 'SCRAM_SHA_1',
                username: 'mockdb-admin',
                databaseName: 'movies'
              },
              properties: [
                {
                  key: 'Use mongo connection string URI',
                  value: 'Yes'
                },
                {
                  key: 'Connection string URI',
                  value: 'mongodb+srv://mockdb-admin:****@mockdb.kce5o.mongodb.net/movies?retryWrites=false&w=majority&socketTimeoutMS=3000&authsource=admin&minpoolsize=0'
                }
              ]
            },
            isConfigured: true,
            invalids: [],
            messages: [],
            isValid: true
          }
        },
        invalids: [],
        messages: [],
        isRecentlyCreated: true,
        isMock: true,
        isValid: true
      },
      {
        id: '68a9b8c0de8cf11f80e4a8b3',
        userPermissions: [
          'execute:datasources',
          'delete:datasources',
          'manage:datasources',
          'read:datasources'
        ],
        name: 'Sample Database',
        pluginId: '68a9b7e7de8cf11f80e4a86f',
        workspaceId: '68a9b81bde8cf11f80e4a8a0',
        datasourceStorages: {
          unused_env: {
            id: '68a9b8c0de8cf11f80e4a8b4',
            datasourceId: '68a9b8c0de8cf11f80e4a8b3',
            environmentId: 'unused_env',
            datasourceConfiguration: {
              connection: {
                mode: 'READ_WRITE',
                ssl: {
                  authType: 'DEFAULT'
                }
              },
              endpoints: [
                {
                  host: 'mockdb.internal.appsmith.com',
                  port: 5432
                }
              ],
              authentication: {
                authenticationType: 'dbAuth',
                username: 'templates',
                databaseName: 'mockdb_v2'
              }
            },
            isConfigured: true,
            invalids: [],
            messages: [],
            isValid: true
          }
        },
        invalids: [],
        messages: [],
        isRecentlyCreated: true,
        isTemplate: true,
        isValid: true
      },
      {
        id: '68a9b831de8cf11f80e4a8ad',
        userPermissions: [
          'execute:datasources',
          'delete:datasources',
          'manage:datasources',
          'read:datasources'
        ],
        name: 'users',
        pluginId: '68a9b7e7de8cf11f80e4a86f',
        workspaceId: '68a9b81bde8cf11f80e4a8a0',
        datasourceStorages: {
          unused_env: {
            id: '68a9b831de8cf11f80e4a8ae',
            datasourceId: '68a9b831de8cf11f80e4a8ad',
            environmentId: 'unused_env',
            datasourceConfiguration: {
              connection: {
                mode: 'READ_WRITE',
                ssl: {
                  authType: 'DEFAULT'
                }
              },
              endpoints: [
                {
                  host: 'mockdb.internal.appsmith.com'
                }
              ],
              authentication: {
                authenticationType: 'dbAuth',
                username: 'users',
                databaseName: 'users'
              }
            },
            isConfigured: true,
            invalids: [],
            messages: [],
            isValid: true
          }
        },
        invalids: [],
        messages: [],
        isRecentlyCreated: true,
        isMock: true,
        isValid: true
      }
    ],
    loading: false,
    loadingTokenForDatasourceId: null,
    isTesting: false,
    isListing: false,
    fetchingDatasourceStructure: {
      '68a9b831de8cf11f80e4a8ad': false,
      '68a9b8c0de8cf11f80e4a8b3': false,
      '68a9b823de8cf11f80e4a8a8': false
    },
    structure: {
      '68a9b823de8cf11f80e4a8a8': {
        tables: [
          {
            type: 'COLLECTION',
            name: 'movies',
            columns: [
              {
                name: '_id',
                type: 'ObjectId',
                isAutogenerated: true
              },
              {
                name: 'genres',
                type: 'Array',
                isAutogenerated: false
              },
              {
                name: 'homepage',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'imdb_id',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'poster_path',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'release_date',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'revenue',
                type: 'Integer',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'tagline',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'title',
                type: 'String',
                isAutogenerated: false
              },
              {
                name: 'vote_average',
                type: 'Double',
                isAutogenerated: false
              },
              {
                name: 'vote_count',
                type: 'Integer',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'Find',
                configuration: {
                  find: {
                    query: {
                      data: '{ "homepage": "https://movies.disney.com/cruella"}'
                    },
                    limit: {
                      data: '10'
                    },
                    sort: {
                      data: '{"_id": 1}'
                    }
                  },
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "find": "movies",\n  "filter": {\n    "homepage": "https://movies.disney.com/cruella"\n  },\n  "sort": {\n    "_id": 1\n  },\n  "limit": 10\n}\n'
                  },
                  command: {
                    data: 'FIND'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: true
              },
              {
                title: 'Find by ID',
                configuration: {
                  find: {
                    query: {
                      data: '{"_id": ObjectId("id_to_query_with")}'
                    }
                  },
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "find": "movies",\n  "filter": {\n    "_id": ObjectId("id_to_query_with")\n  }\n}\n'
                  },
                  command: {
                    data: 'FIND'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: false
              },
              {
                title: 'Insert',
                configuration: {
                  insert: {
                    documents: {
                      data: '[{      "_id": ObjectId("a_valid_object_id_hex"),\n      "genres": [1, 2, 3],\n      "homepage": "new value",\n      "imdb_id": "new value",\n      "poster_path": "new value",\n      "release_date": "new value",\n      "revenue": 1,\n      "status": "new value",\n      "tagline": "new value",\n      "title": "new value",\n      "vote_average": 1,\n      "vote_count": 1,\n}]'
                    }
                  },
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "insert": "movies",\n  "documents": [\n    {\n      "_id": ObjectId("a_valid_object_id_hex"),\n      "genres": [1, 2, 3],\n      "homepage": "new value",\n      "imdb_id": "new value",\n      "poster_path": "new value",\n      "release_date": "new value",\n      "revenue": 1,\n      "status": "new value",\n      "tagline": "new value",\n      "title": "new value",\n      "vote_average": 1,\n      "vote_count": 1,\n    }\n  ]\n}\n'
                  },
                  command: {
                    data: 'INSERT'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: false
              },
              {
                title: 'Update',
                configuration: {
                  updateMany: {
                    query: {
                      data: '{ "_id": ObjectId("id_of_document_to_update") }'
                    },
                    limit: {
                      data: 'ALL'
                    },
                    update: {
                      data: '{ "$set": { "homepage": "new value" } }'
                    }
                  },
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "update": "movies",\n  "updates": [\n    {\n      "q": {\n        "_id": ObjectId("id_of_document_to_update")\n      },\n      "u": { "$set": { "homepage": "new value" } }\n    }\n  ]\n}\n'
                  },
                  command: {
                    data: 'UPDATE'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: false
              },
              {
                title: 'Delete',
                configuration: {
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "delete": "movies",\n  "deletes": [\n    {\n      "q": {\n        "_id": "id_of_document_to_delete"\n      },\n      "limit": 1\n    }\n  ]\n}\n'
                  },
                  'delete': {
                    query: {
                      data: '{ "_id": ObjectId("id_of_document_to_delete") }'
                    },
                    limit: {
                      data: 'SINGLE'
                    }
                  },
                  command: {
                    data: 'DELETE'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: false
              },
              {
                title: 'Count',
                configuration: {
                  count: {
                    query: {
                      data: '{"_id": {"$exists": true}}'
                    }
                  },
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "count": "movies",\n  "query": {"_id": {"$exists": true}} \n}\n'
                  },
                  command: {
                    data: 'COUNT'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: false
              },
              {
                title: 'Distinct',
                configuration: {
                  distinct: {
                    query: {
                      data: '{ "_id": ObjectId("id_of_document_to_distinct") }'
                    },
                    key: {
                      data: '_id'
                    }
                  },
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "distinct": "movies",\n  "query": { "_id": ObjectId("id_of_document_to_distinct") },  "key": "_id",}\n'
                  },
                  command: {
                    data: 'DISTINCT'
                  },
                  smartSubstitution: {
                    data: true
                  }
                },
                suggested: false
              },
              {
                title: 'Aggregate',
                configuration: {
                  collection: {
                    data: 'movies'
                  },
                  body: {
                    data: '{\n  "aggregate": "movies",\n  "pipeline": [ {"$sort" : {"_id": 1} } ],\n  "limit": 10,\n  "explain": "true"\n}\n'
                  },
                  command: {
                    data: 'AGGREGATE'
                  },
                  smartSubstitution: {
                    data: true
                  },
                  aggregate: {
                    arrayPipelines: {
                      data: '[ {"$sort" : {"_id": 1} } ]'
                    },
                    limit: {
                      data: '10'
                    }
                  }
                },
                suggested: false
              }
            ]
          }
        ]
      },
      '68a9b831de8cf11f80e4a8ad': {
        tables: [
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.barangkeluar',
            columns: [
              {
                name: 'idkeluar',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'tgl_keluar',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'total',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'iduserprocurementcreated',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'iduserprocurementapproved',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'namarequestor',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'barangkeluar_pkey',
                columnNames: [
                  'idkeluar'
                ],
                type: 'primary key'
              },
              {
                name: 'barangkeluar_iduserprocurementapproved_fkey',
                fromColumns: [
                  'iduserprocurementapproved'
                ],
                toColumns: [
                  'user.iduser'
                ],
                type: 'foreign key'
              },
              {
                name: 'barangkeluar_iduserprocurementcreated_fkey',
                fromColumns: [
                  'iduserprocurementcreated'
                ],
                toColumns: [
                  'user.iduser'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."barangkeluar" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."barangkeluar" ("idkeluar", "tgl_keluar", "total", "keterangan", "iduserprocurementcreated", "iduserprocurementapproved", "namarequestor")\n  VALUES (\'\', TIMESTAMP \'2019-07-01 10:00:00\', 1, \'\', 1, 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."barangkeluar" SET\n    "idkeluar" = \'\',\n    "tgl_keluar" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "total" = 1,\n    "keterangan" = \'\',\n    "iduserprocurementcreated" = 1,\n    "iduserprocurementapproved" = 1,\n    "namarequestor" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."barangkeluar"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.barangmasuk',
            columns: [
              {
                name: 'idmasuk',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idpurchaseorder',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'tgl_masuk',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'total',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'iduserprocurementcreate',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'iduserprocurementapproval',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'barangmasuk_pkey',
                columnNames: [
                  'idmasuk'
                ],
                type: 'primary key'
              },
              {
                name: 'barangmasuk_idpurchaseorder_fkey',
                fromColumns: [
                  'idpurchaseorder'
                ],
                toColumns: [
                  'purchaseorder.idpurchaseorder'
                ],
                type: 'foreign key'
              },
              {
                name: 'barangmasuk_iduserprocurementapproval_fkey',
                fromColumns: [
                  'iduserprocurementapproval'
                ],
                toColumns: [
                  'user.iduser'
                ],
                type: 'foreign key'
              },
              {
                name: 'barangmasuk_iduserprocurementcreate_fkey',
                fromColumns: [
                  'iduserprocurementcreate'
                ],
                toColumns: [
                  'user.iduser'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."barangmasuk" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."barangmasuk" ("idmasuk", "idpurchaseorder", "tgl_masuk", "total", "keterangan", "iduserprocurementcreate", "iduserprocurementapproval")\n  VALUES (\'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\', 1, \'\', 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."barangmasuk" SET\n    "idmasuk" = \'\',\n    "idpurchaseorder" = \'\',\n    "tgl_masuk" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "total" = 1,\n    "keterangan" = \'\',\n    "iduserprocurementcreate" = 1,\n    "iduserprocurementapproval" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."barangmasuk"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.detailkeluar',
            columns: [
              {
                name: 'iddetailkeluar',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'idbarang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idkategori',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'idkeluar',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'qty',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'kodeproject',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'detailkeluar_pkey',
                columnNames: [
                  'iddetailkeluar'
                ],
                type: 'primary key'
              },
              {
                name: 'detailkeluar_idbarang_fkey',
                fromColumns: [
                  'idbarang'
                ],
                toColumns: [
                  'm_barang.idbarang'
                ],
                type: 'foreign key'
              },
              {
                name: 'detailkeluar_idkategori_fkey',
                fromColumns: [
                  'idkategori'
                ],
                toColumns: [
                  'kategoribarang.idkategori'
                ],
                type: 'foreign key'
              },
              {
                name: 'detailkeluar_idkeluar_fkey',
                fromColumns: [
                  'idkeluar'
                ],
                toColumns: [
                  'barangkeluar.idkeluar'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."detailkeluar" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."detailkeluar" ("iddetailkeluar", "idbarang", "idkategori", "idkeluar", "qty", "kodeproject")\n  VALUES (1, \'\', 1, \'\', 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."detailkeluar" SET\n    "iddetailkeluar" = 1,\n    "idbarang" = \'\',\n    "idkategori" = 1,\n    "idkeluar" = \'\',\n    "qty" = 1,\n    "kodeproject" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."detailkeluar"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.detailmasuk',
            columns: [
              {
                name: 'iddetailmasuk',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'idbarang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idkategori',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'idmasuk',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'qty',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'lokasi',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'kodeproject',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'detailmasuk_pkey',
                columnNames: [
                  'iddetailmasuk'
                ],
                type: 'primary key'
              },
              {
                name: 'detailmasuk_idbarang_fkey',
                fromColumns: [
                  'idbarang'
                ],
                toColumns: [
                  'm_barang.idbarang'
                ],
                type: 'foreign key'
              },
              {
                name: 'detailmasuk_idkategori_fkey',
                fromColumns: [
                  'idkategori'
                ],
                toColumns: [
                  'kategoribarang.idkategori'
                ],
                type: 'foreign key'
              },
              {
                name: 'detailmasuk_idmasuk_fkey',
                fromColumns: [
                  'idmasuk'
                ],
                toColumns: [
                  'barangmasuk.idmasuk'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."detailmasuk" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."detailmasuk" ("iddetailmasuk", "idbarang", "idkategori", "idmasuk", "qty", "lokasi", "kodeproject")\n  VALUES (1, \'\', 1, \'\', 1, \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."detailmasuk" SET\n    "iddetailmasuk" = 1,\n    "idbarang" = \'\',\n    "idkategori" = 1,\n    "idmasuk" = \'\',\n    "qty" = 1,\n    "lokasi" = \'\',\n    "kodeproject" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."detailmasuk"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.detailorder',
            columns: [
              {
                name: 'iddetailorder',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'idbarang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idpurchaseorder',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'qty',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'currency',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'harga',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'kodeproject',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'detailorder_pkey',
                columnNames: [
                  'iddetailorder'
                ],
                type: 'primary key'
              },
              {
                name: 'detailorder_idbarang_fkey',
                fromColumns: [
                  'idbarang'
                ],
                toColumns: [
                  'm_barang.idbarang'
                ],
                type: 'foreign key'
              },
              {
                name: 'detailorder_idpurchaseorder_fkey',
                fromColumns: [
                  'idpurchaseorder'
                ],
                toColumns: [
                  'purchaseorder.idpurchaseorder'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."detailorder" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."detailorder" ("iddetailorder", "idbarang", "idpurchaseorder", "qty", "currency", "harga", "kodeproject")\n  VALUES (1, \'\', \'\', 1, \'\', 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."detailorder" SET\n    "iddetailorder" = 1,\n    "idbarang" = \'\',\n    "idpurchaseorder" = \'\',\n    "qty" = 1,\n    "currency" = \'\',\n    "harga" = 1,\n    "kodeproject" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."detailorder"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.detailrequest',
            columns: [
              {
                name: 'iddetailrequest',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'idbarang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idrequest',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'linkpembelian',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'namaitem',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'deskripsi',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'harga',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'qty',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'total',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'kodeproject',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'detailrequest_pkey',
                columnNames: [
                  'iddetailrequest'
                ],
                type: 'primary key'
              },
              {
                name: 'detailrequest_idbarang_fkey',
                fromColumns: [
                  'idbarang'
                ],
                toColumns: [
                  'm_barang.idbarang'
                ],
                type: 'foreign key'
              },
              {
                name: 'detailrequest_idrequest_fkey',
                fromColumns: [
                  'idrequest'
                ],
                toColumns: [
                  'purchaserequest.idrequest'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."detailrequest" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."detailrequest" ("iddetailrequest", "idbarang", "idrequest", "linkpembelian", "namaitem", "deskripsi", "harga", "qty", "total", "kodeproject")\n  VALUES (1, \'\', \'\', \'\', \'\', \'\', 1, 1, 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."detailrequest" SET\n    "iddetailrequest" = 1,\n    "idbarang" = \'\',\n    "idrequest" = \'\',\n    "linkpembelian" = \'\',\n    "namaitem" = \'\',\n    "deskripsi" = \'\',\n    "harga" = 1,\n    "qty" = 1,\n    "total" = 1,\n    "kodeproject" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."detailrequest"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.inventory',
            columns: [
              {
                name: 'idinventory',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idbarang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idkategori',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'lokasi',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'kodeproject',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'nama_barang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'stok_awal',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'stok_akhir',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'qty_in',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'qty_out',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'total',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'inventory_pkey',
                columnNames: [
                  'idinventory'
                ],
                type: 'primary key'
              },
              {
                name: 'inventory_idbarang_fkey',
                fromColumns: [
                  'idbarang'
                ],
                toColumns: [
                  'm_barang.idbarang'
                ],
                type: 'foreign key'
              },
              {
                name: 'inventory_idkategori_fkey',
                fromColumns: [
                  'idkategori'
                ],
                toColumns: [
                  'kategoribarang.idkategori'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."inventory" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."inventory" ("idinventory", "idbarang", "idkategori", "lokasi", "kodeproject", "nama_barang", "stok_awal", "stok_akhir", "qty_in", "qty_out", "total", "keterangan")\n  VALUES (\'\', \'\', 1, \'\', \'\', \'\', 1, 1, 1, 1, 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."inventory" SET\n    "idinventory" = \'\',\n    "idbarang" = \'\',\n    "idkategori" = 1,\n    "lokasi" = \'\',\n    "kodeproject" = \'\',\n    "nama_barang" = \'\',\n    "stok_awal" = 1,\n    "stok_akhir" = 1,\n    "qty_in" = 1,\n    "qty_out" = 1,\n    "total" = 1,\n    "keterangan" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."inventory"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.kategoribarang',
            columns: [
              {
                name: 'idkategori',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'nama_kategori',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'deskripsi_kategori',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'kategoribarang_pkey',
                columnNames: [
                  'idkategori'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."kategoribarang" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."kategoribarang" ("idkategori", "nama_kategori", "deskripsi_kategori")\n  VALUES (1, \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."kategoribarang" SET\n    "idkategori" = 1,\n    "nama_kategori" = \'\',\n    "deskripsi_kategori" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."kategoribarang"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.logstatusbarang',
            columns: [
              {
                name: 'idlogstatusbarang',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'int2',
                isAutogenerated: false
              },
              {
                name: 'date',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'iddetailrequest',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'logstatusbarang_pkey',
                columnNames: [
                  'idlogstatusbarang'
                ],
                type: 'primary key'
              },
              {
                name: 'logstatusbarang_iddetailrequest_fkey',
                fromColumns: [
                  'iddetailrequest'
                ],
                toColumns: [
                  'detailrequest.iddetailrequest'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."logstatusbarang" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."logstatusbarang" ("idlogstatusbarang", "status", "date", "keterangan", "iddetailrequest")\n  VALUES (1, 1, TIMESTAMP \'2019-07-01 10:00:00\', \'\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."logstatusbarang" SET\n    "idlogstatusbarang" = 1,\n    "status" = 1,\n    "date" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "keterangan" = \'\',\n    "iddetailrequest" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."logstatusbarang"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.logstatusorder',
            columns: [
              {
                name: 'idlogstatusorder',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'int2',
                isAutogenerated: false
              },
              {
                name: 'date',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idpurchaseorder',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'logstatusorder_pkey',
                columnNames: [
                  'idlogstatusorder'
                ],
                type: 'primary key'
              },
              {
                name: 'logstatusorder_idpurchaseorder_fkey',
                fromColumns: [
                  'idpurchaseorder'
                ],
                toColumns: [
                  'purchaseorder.idpurchaseorder'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."logstatusorder" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."logstatusorder" ("idlogstatusorder", "status", "date", "keterangan", "idpurchaseorder")\n  VALUES (1, 1, TIMESTAMP \'2019-07-01 10:00:00\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."logstatusorder" SET\n    "idlogstatusorder" = 1,\n    "status" = 1,\n    "date" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "keterangan" = \'\',\n    "idpurchaseorder" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."logstatusorder"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.logstatusreq',
            columns: [
              {
                name: 'idlogstatusreq',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'int2',
                isAutogenerated: false
              },
              {
                name: 'date',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'note_reject',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idrequest',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'logstatusreq_pkey',
                columnNames: [
                  'idlogstatusreq'
                ],
                type: 'primary key'
              },
              {
                name: 'logstatusreq_idrequest_fkey',
                fromColumns: [
                  'idrequest'
                ],
                toColumns: [
                  'purchaserequest.idrequest'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."logstatusreq" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."logstatusreq" ("idlogstatusreq", "status", "date", "note_reject", "idrequest")\n  VALUES (1, 1, TIMESTAMP \'2019-07-01 10:00:00\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."logstatusreq" SET\n    "idlogstatusreq" = 1,\n    "status" = 1,\n    "date" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "note_reject" = \'\',\n    "idrequest" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."logstatusreq"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.m_barang',
            columns: [
              {
                name: 'idbarang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'nama_barang',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'deskripsi',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'harga',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'satuan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'kodeproject',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idkategori',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'm_barang_pkey',
                columnNames: [
                  'idbarang'
                ],
                type: 'primary key'
              },
              {
                name: 'm_barang_idkategori_fkey',
                fromColumns: [
                  'idkategori'
                ],
                toColumns: [
                  'kategoribarang.idkategori'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."m_barang" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."m_barang" ("idbarang", "nama_barang", "deskripsi", "harga", "satuan", "kodeproject", "idkategori")\n  VALUES (\'\', \'\', \'\', 1, \'\', \'\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."m_barang" SET\n    "idbarang" = \'\',\n    "nama_barang" = \'\',\n    "deskripsi" = \'\',\n    "harga" = 1,\n    "satuan" = \'\',\n    "kodeproject" = \'\',\n    "idkategori" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."m_barang"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.purchaseorder',
            columns: [
              {
                name: 'idpurchaseorder',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'idrequest',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'vendor_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'tgl_purchase',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'total_amount',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'purchaseorder_pkey',
                columnNames: [
                  'idpurchaseorder'
                ],
                type: 'primary key'
              },
              {
                name: 'purchaseorder_idrequest_fkey',
                fromColumns: [
                  'idrequest'
                ],
                toColumns: [
                  'purchaserequest.idrequest'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."purchaseorder" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."purchaseorder" ("idpurchaseorder", "idrequest", "vendor_name", "tgl_purchase", "keterangan", "total_amount")\n  VALUES (\'\', \'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\', \'\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."purchaseorder" SET\n    "idpurchaseorder" = \'\',\n    "idrequest" = \'\',\n    "vendor_name" = \'\',\n    "tgl_purchase" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "keterangan" = \'\',\n    "total_amount" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."purchaseorder"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.purchaserequest',
            columns: [
              {
                name: 'idrequest',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'iduserrequest',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'namarequestor',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'keterangan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'tgl_req',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'tgl_butuh',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'idsupervisor',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'purchaserequest_pkey',
                columnNames: [
                  'idrequest'
                ],
                type: 'primary key'
              },
              {
                name: 'purchaserequest_idsupervisor_fkey',
                fromColumns: [
                  'idsupervisor'
                ],
                toColumns: [
                  'user.iduser'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."purchaserequest" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."purchaserequest" ("idrequest", "iduserrequest", "namarequestor", "keterangan", "tgl_req", "tgl_butuh", "idsupervisor")\n  VALUES (\'\', \'\', \'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\', TIMESTAMP \'2019-07-01 10:00:00\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."purchaserequest" SET\n    "idrequest" = \'\',\n    "iduserrequest" = \'\',\n    "namarequestor" = \'\',\n    "keterangan" = \'\',\n    "tgl_req" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "tgl_butuh" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "idsupervisor" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."purchaserequest"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'ims_schema',
            name: 'ims_schema.user',
            columns: [
              {
                name: 'iduser',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'nama',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'jabatan',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'note',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'username',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'password',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'rolestype',
                type: 'int2',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'user_pkey',
                columnNames: [
                  'iduser'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM ims_schema."user" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO ims_schema."user" ("iduser", "nama", "jabatan", "note", "username", "password", "rolestype")\n  VALUES (1, \'\', \'\', \'\', \'\', \'\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE ims_schema."user" SET\n    "iduser" = 1,\n    "nama" = \'\',\n    "jabatan" = \'\',\n    "note" = \'\',\n    "username" = \'\',\n    "password" = \'\',\n    "rolestype" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM ims_schema."user"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'mei',
            name: 'mei.categorias',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'mei.categorias_id_categoria_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'marks',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'result',
                type: 'bool',
                defaultValue: 'true',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'categorias_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei."categorias" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei."categorias" ("name", "marks")\n  VALUES (\'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei."categorias" SET\n    "name" = \'\',\n    "marks" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei."categorias"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'mei',
            name: 'mei.mock_roles',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'mei.mock_roles_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'password',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'role',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'mock_roles_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei."mock_roles" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei."mock_roles" ("email", "password", "role")\n  VALUES (\'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei."mock_roles" SET\n    "email" = \'\',\n    "password" = \'\',\n    "role" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei."mock_roles"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'mei_services',
            name: 'mei_services.microempreendedores',
            columns: [
              {
                name: 'id_mei',
                type: 'int4',
                defaultValue: 'nextval(\'mei_services.microempreendedores_id_mei_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'nome_mei',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'cnpj',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'contato',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'endereco',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'cidade',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'estado',
                type: 'bpchar',
                isAutogenerated: false
              },
              {
                name: 'cep',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'data_cadastro',
                type: 'date',
                defaultValue: 'CURRENT_DATE',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'status_tipo',
                defaultValue: '\'Ativo\'::mei_services.status_tipo',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'microempreendedores_pkey',
                columnNames: [
                  'id_mei'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei_services."microempreendedores" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei_services."microempreendedores" ("nome_mei", "cnpj", "email", "contato", "endereco", "cidade", "estado", "cep")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei_services."microempreendedores" SET\n    "nome_mei" = \'\',\n    "cnpj" = \'\',\n    "email" = \'\',\n    "contato" = \'\',\n    "endereco" = \'\',\n    "cidade" = \'\',\n    "estado" = \'\',\n    "cep" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei_services."microempreendedores"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'mei_services',
            name: 'mei_services.pontos',
            columns: [
              {
                name: 'id_ponto',
                type: 'int4',
                defaultValue: 'nextval(\'mei_services.pedidos_id_pedido_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'id_usuario',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'data_ponto',
                type: 'date',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'horarios',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pedidos_pkey',
                columnNames: [
                  'id_ponto'
                ],
                type: 'primary key'
              },
              {
                name: 'pedidos_id_cliente_fkey',
                fromColumns: [
                  'id_usuario'
                ],
                toColumns: [
                  'usuarios.id_usuario'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei_services."pontos" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei_services."pontos" ("id_usuario", "horarios")\n  VALUES (1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei_services."pontos" SET\n    "id_usuario" = 1,\n    "horarios" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei_services."pontos"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'mei_services',
            name: 'mei_services.servicos',
            columns: [
              {
                name: 'id_servico',
                type: 'int4',
                defaultValue: 'nextval(\'mei_services.servicos_id_servico_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'nome_servico',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'id_categoria',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'preco',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'prazo_dias',
                type: 'int4',
                defaultValue: '0',
                isAutogenerated: false
              },
              {
                name: 'id_mei',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'descricao',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'data_cadastro',
                type: 'timestamp',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'status_tipo',
                defaultValue: '\'Ativo\'::mei_services.status_tipo',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'servicos_pkey',
                columnNames: [
                  'id_servico'
                ],
                type: 'primary key'
              },
              {
                name: 'servicos_id_categoria_fkey',
                fromColumns: [
                  'id_categoria'
                ],
                toColumns: [
                  'mei.categorias.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'servicos_id_mei_fkey',
                fromColumns: [
                  'id_mei'
                ],
                toColumns: [
                  'microempreendedores.id_mei'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei_services."servicos" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei_services."servicos" ("nome_servico", "id_categoria", "preco", "id_mei", "descricao")\n  VALUES (\'\', 1, \'\', 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei_services."servicos" SET\n    "nome_servico" = \'\',\n    "id_categoria" = 1,\n    "preco" = \'\',\n    "id_mei" = 1,\n    "descricao" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei_services."servicos"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'mei_services',
            name: 'mei_services.usuarios',
            columns: [
              {
                name: 'id_usuario',
                type: 'int4',
                defaultValue: 'nextval(\'mei_services.clientes_id_cliente_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'nome',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'telefone',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'cpf_cnpj',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'endereco',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'cidade',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'estado',
                type: 'bpchar',
                isAutogenerated: false
              },
              {
                name: 'cep',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'data_cadastro',
                type: 'date',
                defaultValue: 'CURRENT_DATE',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'status_tipo',
                defaultValue: '\'Ativo\'::mei_services.status_tipo',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'clientes_pkey',
                columnNames: [
                  'id_usuario'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei_services."usuarios" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei_services."usuarios" ("nome", "email", "telefone", "cpf_cnpj", "endereco", "cidade", "estado", "cep")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei_services."usuarios" SET\n    "nome" = \'\',\n    "email" = \'\',\n    "telefone" = \'\',\n    "cpf_cnpj" = \'\',\n    "endereco" = \'\',\n    "cidade" = \'\',\n    "estado" = \'\',\n    "cep" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei_services."usuarios"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'VIEW',
            schema: 'mei_services',
            name: 'mei_services.vw_servicos_completos',
            columns: [
              {
                name: 'id_servico',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'nome_servico',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'categoria',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'preco',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'prazo_dias',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'nome_mei',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'cnpj',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'contato',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'status_tipo',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM mei_services."vw_servicos_completos" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO mei_services."vw_servicos_completos" ("id_servico", "nome_servico", "categoria", "preco", "prazo_dias", "nome_mei", "cnpj", "contato", "status")\n  VALUES (1, \'\', \'\', \'\', 1, \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE mei_services."vw_servicos_completos" SET\n    "id_servico" = 1,\n    "nome_servico" = \'\',\n    "categoria" = \'\',\n    "preco" = \'\',\n    "prazo_dias" = 1,\n    "nome_mei" = \'\',\n    "cnpj" = \'\',\n    "contato" = \'\',\n    "status" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM mei_services."vw_servicos_completos"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.users',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'users_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'gender',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'latitude',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'longitude',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'dob',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'country',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created_at',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'users_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."users" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."users" ("gender", "latitude", "longitude", "dob", "phone", "email", "image", "country", "name", "created_at", "updated_at")\n  VALUES (\'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\', TIMESTAMP \'2019-07-01 10:00:00\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."users" SET\n    "gender" = \'\',\n    "latitude" = \'\',\n    "longitude" = \'\',\n    "dob" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "phone" = \'\',\n    "email" = \'\',\n    "image" = \'\',\n    "country" = \'\',\n    "name" = \'\',\n    "created_at" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "updated_at" = TIMESTAMP \'2019-07-01 10:00:00\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."users"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          }
        ]
      },
      '68a9b8c0de8cf11f80e4a8b3': {
        tables: [
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.account',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'account_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'external_id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'customer_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'company.id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'account_manager',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_account',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_account_account_manager',
                fromColumns: [
                  'account_manager'
                ],
                toColumns: [
                  'employee.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_account_company.id',
                fromColumns: [
                  'company.id'
                ],
                toColumns: [
                  'company.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_account_customer_id',
                fromColumns: [
                  'customer_id'
                ],
                toColumns: [
                  'person.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."account" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."account" ("external_id", "customer_id", "company.id", "account_manager", "updated")\n  VALUES (\'\', 1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."account" SET\n    "external_id" = \'\',\n    "customer_id" = 1,\n    "company.id" = 1,\n    "account_manager" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."account"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.address',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'address_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'customer_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'city',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'zip_code',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'latitude',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'longitude',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'label',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'address_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."address" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."address" ("customer_id", "address", "city", "zip_code", "latitude", "longitude", "label")\n  VALUES (1, \'\', \'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."address" SET\n    "customer_id" = 1,\n    "address" = \'\',\n    "city" = \'\',\n    "zip_code" = \'\',\n    "latitude" = \'\',\n    "longitude" = \'\',\n    "label" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."address"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.asset',
            columns: [
              {
                name: 'id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'type',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'make',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'model',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'mac_address',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'serial_number',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'ip_address',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'notes',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'price',
                type: 'numeric',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'asset_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."asset" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."asset" ("id", "type", "make", "model", "mac_address", "serial_number", "ip_address", "image", "notes", "price")\n  VALUES (1, \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."asset" SET\n    "id" = 1,\n    "type" = \'\',\n    "make" = \'\',\n    "model" = \'\',\n    "mac_address" = \'\',\n    "serial_number" = \'\',\n    "ip_address" = \'\',\n    "image" = \'\',\n    "notes" = \'\',\n    "price" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."asset"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.asset_user',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'asset_user_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'first_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'department',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'asset_user_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."asset_user" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."asset_user" ("first_name", "last_name", "email", "department", "status")\n  VALUES (\'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."asset_user" SET\n    "first_name" = \'\',\n    "last_name" = \'\',\n    "email" = \'\',\n    "department" = \'\',\n    "status" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."asset_user"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.assignment',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'assignment_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'asset_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'user_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'date_assigned',
                type: 'date',
                isAutogenerated: false
              },
              {
                name: 'date_returned',
                type: 'date',
                isAutogenerated: false
              },
              {
                name: 'notes',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'assignment_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."assignment" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."assignment" ("asset_id", "user_id", "date_assigned", "date_returned", "notes")\n  VALUES (1, 1, \'2019-07-01\', \'2019-07-01\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."assignment" SET\n    "asset_id" = 1,\n    "user_id" = 1,\n    "date_assigned" = \'2019-07-01\',\n    "date_returned" = \'2019-07-01\',\n    "notes" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."assignment"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.cars_db',
            columns: [
              {
                name: 'car_name',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."cars_db" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."cars_db" ("car_name")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."cars_db" SET\n    "car_name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."cars_db"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.company',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'company_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'main_contact',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'logo_url',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'website',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_company',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_company_main_contact',
                fromColumns: [
                  'main_contact'
                ],
                toColumns: [
                  'person.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."company" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."company" ("main_contact", "logo_url", "name", "address", "phone", "email", "description", "website", "updated")\n  VALUES (1, \'\', \'\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."company" SET\n    "main_contact" = 1,\n    "logo_url" = \'\',\n    "name" = \'\',\n    "address" = \'\',\n    "phone" = \'\',\n    "email" = \'\',\n    "description" = \'\',\n    "website" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."company"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.company_product',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'company_product_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'price',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'company_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_company_product',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_company_product_company_id',
                fromColumns: [
                  'company_id'
                ],
                toColumns: [
                  'company.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."company_product" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."company_product" ("name", "price", "description", "image", "company_id", "updated")\n  VALUES (\'\', \'\', \'\', \'\', 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."company_product" SET\n    "name" = \'\',\n    "price" = \'\',\n    "description" = \'\',\n    "image" = \'\',\n    "company_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."company_product"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.course',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'course_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'duration',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'language',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'instructor',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'thumbnail_url',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'course_type_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_level_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_subject_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'course_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'course_course_level_id_fk',
                fromColumns: [
                  'course_level_id'
                ],
                toColumns: [
                  'course_level.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'course_course_subject_id_fk',
                fromColumns: [
                  'course_subject_id'
                ],
                toColumns: [
                  'course_subject.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'course_course_type_id_fk',
                fromColumns: [
                  'course_type_id'
                ],
                toColumns: [
                  'course_type.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."course" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."course" ("name", "description", "duration", "language", "instructor", "thumbnail_url", "course_type_id", "course_level_id", "course_subject_id", "updated")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', 1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."course" SET\n    "name" = \'\',\n    "description" = \'\',\n    "duration" = \'\',\n    "language" = \'\',\n    "instructor" = \'\',\n    "thumbnail_url" = \'\',\n    "course_type_id" = 1,\n    "course_level_id" = 1,\n    "course_subject_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."course"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.course_level',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'course_level_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'course_level_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."course_level" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."course_level" ("name")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."course_level" SET\n    "name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."course_level"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.course_module',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'course_module_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'duration',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'course_subject_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'course_module_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'course_module_course_id_fk',
                fromColumns: [
                  'course_id'
                ],
                toColumns: [
                  'course.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'course_module_course_subject_id_fk',
                fromColumns: [
                  'course_subject_id'
                ],
                toColumns: [
                  'course_subject.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."course_module" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."course_module" ("name", "description", "duration", "course_subject_id", "course_id", "updated")\n  VALUES (\'\', \'\', \'\', 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."course_module" SET\n    "name" = \'\',\n    "description" = \'\',\n    "duration" = \'\',\n    "course_subject_id" = 1,\n    "course_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."course_module"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.course_module_content',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'course_module_content_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'md_text',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'comment',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'mark_complete',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'content_type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'course_subject_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'course_module_content_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'course_module_content_course_id_fk',
                fromColumns: [
                  'course_id'
                ],
                toColumns: [
                  'course.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'course_module_content_course_module_id_fk',
                fromColumns: [
                  'course_module_id'
                ],
                toColumns: [
                  'course_module.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."course_module_content" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."course_module_content" ("title", "md_text", "comment", "mark_complete", "content_type", "course_subject_id", "course_id", "course_module_id", "updated")\n  VALUES (\'\', \'\', \'\', \'\', \'\', 1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."course_module_content" SET\n    "title" = \'\',\n    "md_text" = \'\',\n    "comment" = \'\',\n    "mark_complete" = \'\',\n    "content_type" = \'\',\n    "course_subject_id" = 1,\n    "course_id" = 1,\n    "course_module_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."course_module_content"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.course_subject',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'course_subject_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'course_subject_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."course_subject" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."course_subject" ("name")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."course_subject" SET\n    "name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."course_subject"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.course_type',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'course_type_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'course_type_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."course_type" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."course_type" ("name")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."course_type" SET\n    "name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."course_type"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.cuisine',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'cuisine_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'cuisine_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."cuisine" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."cuisine" ("name")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."cuisine" SET\n    "name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."cuisine"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.customer',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'customer_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'first_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'password_hash',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'fraud_score',
                type: 'float8',
                isAutogenerated: false
              },
              {
                name: 'wallet_balance',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'customer_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."customer" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."customer" ("first_name", "last_name", "email", "password_hash", "phone", "fraud_score", "wallet_balance", "status")\n  VALUES (\'\', \'\', \'\', \'\', \'\', 1.0, 1, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."customer" SET\n    "first_name" = \'\',\n    "last_name" = \'\',\n    "email" = \'\',\n    "password_hash" = \'\',\n    "phone" = \'\',\n    "fraud_score" = 1.0,\n    "wallet_balance" = 1,\n    "status" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."customer"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.customer_refunds',
            columns: [
              {
                name: 'refund_id',
                type: 'int4',
                defaultValue: 'nextval(\'customer_refunds_refund_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'customer_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'customer_email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'order_number',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'refund_amount',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'request_date',
                type: 'timestamp',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'refund_status',
                type: 'varchar',
                defaultValue: '\'Pending\'::character varying',
                isAutogenerated: false
              },
              {
                name: 'approver_name',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'customer_refunds_pkey',
                columnNames: [
                  'refund_id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."customer_refunds" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."customer_refunds" ("customer_name", "customer_email", "order_number", "refund_amount", "approver_name")\n  VALUES (\'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."customer_refunds" SET\n    "customer_name" = \'\',\n    "customer_email" = \'\',\n    "order_number" = \'\',\n    "refund_amount" = \'\',\n    "approver_name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."customer_refunds"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.deals',
            columns: [
              {
                name: 'deal_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'publisher_url',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'cpm',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'created_date',
                type: 'date',
                isAutogenerated: false
              },
              {
                name: 'deal_id',
                type: 'int4',
                defaultValue: 'nextval(\'deals_deal_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'advertiser_name',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'deals_pkey',
                columnNames: [
                  'deal_id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."deals" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."deals" ("deal_name", "publisher_url", "cpm", "created_date", "advertiser_name")\n  VALUES (\'\', \'\', \'\', \'2019-07-01\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."deals" SET\n    "deal_name" = \'\',\n    "publisher_url" = \'\',\n    "cpm" = \'\',\n    "created_date" = \'2019-07-01\',\n    "advertiser_name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."deals"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.delivery_driver',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'delivery_driver_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'fullname',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'date_of_birth',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'license_plate',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'commission',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'vehicle_type_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'location_lat',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'location_long',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'delivery_driver_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'delivery_driver_vehicle_type_id_fk',
                fromColumns: [
                  'vehicle_type_id'
                ],
                toColumns: [
                  'vehicle_type.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."delivery_driver" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."delivery_driver" ("fullname", "email", "address", "date_of_birth", "phone", "license_plate", "commission", "image", "vehicle_type_id", "status", "location_lat", "location_long", "updated")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."delivery_driver" SET\n    "fullname" = \'\',\n    "email" = \'\',\n    "address" = \'\',\n    "date_of_birth" = \'\',\n    "phone" = \'\',\n    "license_plate" = \'\',\n    "commission" = \'\',\n    "image" = \'\',\n    "vehicle_type_id" = 1,\n    "status" = \'\',\n    "location_lat" = \'\',\n    "location_long" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."delivery_driver"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.delivery_driver_zone',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'delivery_driver_zone_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'delivery_driver_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'delivery_zone_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'delivery_driver_zone_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'delivery_driver_zone_delivery_driver_id_fk',
                fromColumns: [
                  'delivery_driver_id'
                ],
                toColumns: [
                  'delivery_driver.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'delivery_driver_zone_delivery_zone_id_fk',
                fromColumns: [
                  'delivery_zone_id'
                ],
                toColumns: [
                  'delivery_zone.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."delivery_driver_zone" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."delivery_driver_zone" ("delivery_driver_id", "delivery_zone_id")\n  VALUES (1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."delivery_driver_zone" SET\n    "delivery_driver_id" = 1,\n    "delivery_zone_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."delivery_driver_zone"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.delivery_order',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'delivery_order_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'customer',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'customer_phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'pickup_address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'dropoff_address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'order_lat',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'order_long',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'eta',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'delivery_time',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'review',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'no_of_items',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'total',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'driver_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'restaurant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'delivery_order_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'delivery_order_restaurant_id_fk',
                fromColumns: [
                  'restaurant_id'
                ],
                toColumns: [
                  'restaurant.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'driver_id_delivery_driver_id_fk',
                fromColumns: [
                  'driver_id'
                ],
                toColumns: [
                  'delivery_driver.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."delivery_order" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."delivery_order" ("customer", "customer_phone", "pickup_address", "dropoff_address", "order_lat", "order_long", "status", "eta", "delivery_time", "review", "no_of_items", "total", "driver_id", "restaurant_id")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, 1, 1, 1, \'\', 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."delivery_order" SET\n    "customer" = \'\',\n    "customer_phone" = \'\',\n    "pickup_address" = \'\',\n    "dropoff_address" = \'\',\n    "order_lat" = \'\',\n    "order_long" = \'\',\n    "status" = \'\',\n    "eta" = 1,\n    "delivery_time" = 1,\n    "review" = 1,\n    "no_of_items" = 1,\n    "total" = \'\',\n    "driver_id" = 1,\n    "restaurant_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."delivery_order"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.delivery_person',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'delivery_person_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'first_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'password_hash',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'latitude',
                type: 'float8',
                isAutogenerated: false
              },
              {
                name: 'availability',
                type: 'bool',
                isAutogenerated: false
              },
              {
                name: 'longitude',
                type: 'float8',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'delivery_person_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."delivery_person" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."delivery_person" ("first_name", "last_name", "phone", "email", "password_hash", "latitude", "availability", "longitude", "image")\n  VALUES (\'\', \'\', \'\', \'\', \'\', 1.0, \'\', 1.0, \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."delivery_person" SET\n    "first_name" = \'\',\n    "last_name" = \'\',\n    "phone" = \'\',\n    "email" = \'\',\n    "password_hash" = \'\',\n    "latitude" = 1.0,\n    "availability" = \'\',\n    "longitude" = 1.0,\n    "image" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."delivery_person"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.delivery_zone',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'delivery_zone_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'zone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'delivery_zone_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."delivery_zone" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."delivery_zone" ("zone")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."delivery_zone" SET\n    "zone" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."delivery_zone"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.employee',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'employee_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'job_title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'manager',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'department',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'work_email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'work_phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'office_location',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'bio',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'bool',
                isAutogenerated: false
              },
              {
                name: 'start_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'end_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_employee',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_employee_manager',
                fromColumns: [
                  'manager'
                ],
                toColumns: [
                  'employee.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_employee_office_location',
                fromColumns: [
                  'office_location'
                ],
                toColumns: [
                  'location.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."employee" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."employee" ("job_title", "manager", "department", "work_email", "work_phone", "office_location", "bio", "status", "start_date", "end_date", "updated")\n  VALUES (\'\', 1, \'\', \'\', \'\', 1, \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."employee" SET\n    "job_title" = \'\',\n    "manager" = 1,\n    "department" = \'\',\n    "work_email" = \'\',\n    "work_phone" = \'\',\n    "office_location" = 1,\n    "bio" = \'\',\n    "status" = \'\',\n    "start_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "end_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."employee"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.employee_details',
            columns: [
              {
                name: 'id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'gender',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'latitude',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'longitude',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'dob',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'country',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."employee_details" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."employee_details" ("id", "gender", "latitude", "longitude", "dob", "phone", "email", "image", "country", "name")\n  VALUES (1, \'\', \'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\', \'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."employee_details" SET\n    "id" = 1,\n    "gender" = \'\',\n    "latitude" = \'\',\n    "longitude" = \'\',\n    "dob" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "phone" = \'\',\n    "email" = \'\',\n    "image" = \'\',\n    "country" = \'\',\n    "name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."employee_details"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.equipment_db',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'equipment_db_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'equipment',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'equipment_db_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."equipment_db" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."equipment_db" ("equipment")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."equipment_db" SET\n    "equipment" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."equipment_db"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.job_application',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'job_application_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'candidate_image_url',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'candidate_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'candidate_email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'candidate_phone_no',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'years_of_experience',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'applied_role',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'application_status',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'application_datetime',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'interview_datetime',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'resume_url',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'note',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'country',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'job_application_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."job_application" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."job_application" ("candidate_image_url", "candidate_name", "candidate_email", "candidate_phone_no", "years_of_experience", "applied_role", "application_status", "interview_datetime", "resume_url", "note", "country")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."job_application" SET\n    "candidate_image_url" = \'\',\n    "candidate_name" = \'\',\n    "candidate_email" = \'\',\n    "candidate_phone_no" = \'\',\n    "years_of_experience" = \'\',\n    "applied_role" = \'\',\n    "application_status" = \'\',\n    "interview_datetime" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "resume_url" = \'\',\n    "note" = \'\',\n    "country" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."job_application"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.job_application_round',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'job_application_round_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'job_application_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'round_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'round_datetime',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'round_rating',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'round_note',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'round_comment',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'interviewer',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'job_application_round_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'job_application_round_job_application_id_fk',
                fromColumns: [
                  'job_application_id'
                ],
                toColumns: [
                  'job_application.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."job_application_round" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."job_application_round" ("job_application_id", "round_name", "round_datetime", "round_rating", "round_note", "round_comment", "interviewer")\n  VALUES (1, \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', 1, \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."job_application_round" SET\n    "job_application_id" = 1,\n    "round_name" = \'\',\n    "round_datetime" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "round_rating" = 1,\n    "round_note" = \'\',\n    "round_comment" = \'\',\n    "interviewer" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."job_application_round"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.kyc',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'kyc_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'first_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'date_of_birth',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'comment',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'kyc_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."kyc" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."kyc" ("first_name", "last_name", "email", "phone", "date_of_birth", "address", "status", "comment")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."kyc" SET\n    "first_name" = \'\',\n    "last_name" = \'\',\n    "email" = \'\',\n    "phone" = \'\',\n    "date_of_birth" = \'\',\n    "address" = \'\',\n    "status" = \'\',\n    "comment" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."kyc"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.kyc_document',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'kyc_document_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'user',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'document_type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'issue_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'expiry_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'data',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'kyc_document_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'kyc_document_kyc_id_fk',
                fromColumns: [
                  'user'
                ],
                toColumns: [
                  'kyc.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."kyc_document" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."kyc_document" ("user", "document_type", "issue_date", "expiry_date", "data")\n  VALUES (1, \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."kyc_document" SET\n    "user" = 1,\n    "document_type" = \'\',\n    "issue_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "expiry_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "data" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."kyc_document"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.loan_application',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'loan_application_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'first_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'image_url',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'date_of_birth',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'gender',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'credit_product',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'amount_requested',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'term',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'interest',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'repayment_period',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'trn_number',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'monthly_income',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'amount_offered',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'credit_score',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'credit_risk',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'credit_default',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'bank_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'bank_code',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'bank_account_no',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'bank_account_type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'comment',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'reason',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'disburesement_type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'loan_application_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."loan_application" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."loan_application" ("first_name", "image_url", "last_name", "email", "phone", "date_of_birth", "gender", "address", "credit_product", "amount_requested", "term", "interest", "repayment_period", "trn_number", "monthly_income", "amount_offered", "credit_score", "credit_risk", "credit_default", "bank_name", "bank_code", "bank_account_no", "bank_account_type", "status", "comment", "reason", "disburesement_type", "updated")\n  VALUES (\'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."loan_application" SET\n    "first_name" = \'\',\n    "image_url" = \'\',\n    "last_name" = \'\',\n    "email" = \'\',\n    "phone" = \'\',\n    "date_of_birth" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "gender" = \'\',\n    "address" = \'\',\n    "credit_product" = \'\',\n    "amount_requested" = \'\',\n    "term" = \'\',\n    "interest" = \'\',\n    "repayment_period" = \'\',\n    "trn_number" = \'\',\n    "monthly_income" = \'\',\n    "amount_offered" = \'\',\n    "credit_score" = 1,\n    "credit_risk" = \'\',\n    "credit_default" = \'\',\n    "bank_name" = \'\',\n    "bank_code" = \'\',\n    "bank_account_no" = \'\',\n    "bank_account_type" = \'\',\n    "status" = \'\',\n    "comment" = \'\',\n    "reason" = \'\',\n    "disburesement_type" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."loan_application"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.loan_document',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'loan_document_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'loan_application_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'document_type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'issue_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'expiry_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'data',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'loan_document_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'kyc_document_kyc_id_fk',
                fromColumns: [
                  'loan_application_id'
                ],
                toColumns: [
                  'loan_application.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."loan_document" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."loan_document" ("loan_application_id", "document_type", "issue_date", "expiry_date", "data")\n  VALUES (1, \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."loan_document" SET\n    "loan_application_id" = 1,\n    "document_type" = \'\',\n    "issue_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "expiry_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "data" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."loan_document"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.loan_payment',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'loan_payment_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'loan_application_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'payment_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'principal',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'interest',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'amount',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'loan_payment_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'loan_payment_loan_application_id_fk',
                fromColumns: [
                  'loan_application_id'
                ],
                toColumns: [
                  'loan_application.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."loan_payment" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."loan_payment" ("loan_application_id", "payment_date", "principal", "interest", "amount", "status", "updated")\n  VALUES (1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', 1, \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."loan_payment" SET\n    "loan_application_id" = 1,\n    "payment_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "principal" = \'\',\n    "interest" = 1,\n    "amount" = \'\',\n    "status" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."loan_payment"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.location',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'location_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'label',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'person',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'company',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'address1',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address2',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address3',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'city',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'state',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'country',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'postal_code',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_location',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_location_company',
                fromColumns: [
                  'company'
                ],
                toColumns: [
                  'company.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_location_person',
                fromColumns: [
                  'person'
                ],
                toColumns: [
                  'person.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."location" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."location" ("label", "type", "person", "company", "address1", "address2", "address3", "city", "state", "country", "postal_code", "description", "updated")\n  VALUES (\'\', \'\', 1, 1, \'\', \'\', \'\', \'\', \'\', \'\', 1, \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."location" SET\n    "label" = \'\',\n    "type" = \'\',\n    "person" = 1,\n    "company" = 1,\n    "address1" = \'\',\n    "address2" = \'\',\n    "address3" = \'\',\n    "city" = \'\',\n    "state" = \'\',\n    "country" = \'\',\n    "postal_code" = 1,\n    "description" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."location"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.maintenance_car',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'maintenance_car_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'vin',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'make',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'model',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'year',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'interval',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'last_service_date',
                type: 'date',
                isAutogenerated: false
              },
              {
                name: 'last_service_notes',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'next_service_due',
                type: 'date',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'maintenance_car_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."maintenance_car" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."maintenance_car" ("vin", "make", "model", "year", "interval", "last_service_date", "last_service_notes", "next_service_due")\n  VALUES (\'\', \'\', \'\', \'\', 1, \'2019-07-01\', \'\', \'2019-07-01\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."maintenance_car" SET\n    "vin" = \'\',\n    "make" = \'\',\n    "model" = \'\',\n    "year" = \'\',\n    "interval" = 1,\n    "last_service_date" = \'2019-07-01\',\n    "last_service_notes" = \'\',\n    "next_service_due" = \'2019-07-01\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."maintenance_car"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.order',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'order_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'account_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'sales_rep',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'shipping_address',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'subtotal',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'taxes',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'shipping',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'carrier',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'shipping_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'eta',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'weight_kg',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'weight_lbs',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'length',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'width',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'height',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'tracking_no',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'total',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'customer_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'restaurant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'delivery_person_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'order_status_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'delivery_status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_order',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_order_account_id',
                fromColumns: [
                  'account_id'
                ],
                toColumns: [
                  'account.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_order_order_status_id',
                fromColumns: [
                  'order_status_id'
                ],
                toColumns: [
                  'order_status.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_order_sales_rep',
                fromColumns: [
                  'sales_rep'
                ],
                toColumns: [
                  'employee.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_order_shipping_address',
                fromColumns: [
                  'shipping_address'
                ],
                toColumns: [
                  'location.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'order_customer_id_fkey',
                fromColumns: [
                  'customer_id'
                ],
                toColumns: [
                  'customer.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'order_restaurant_id_fkey',
                fromColumns: [
                  'restaurant_id'
                ],
                toColumns: [
                  'restaurant.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."order" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."order" ("account_id", "sales_rep", "shipping_address", "subtotal", "taxes", "shipping", "carrier", "shipping_date", "eta", "weight_kg", "weight_lbs", "length", "width", "height", "tracking_no", "total", "customer_id", "restaurant_id", "delivery_person_id", "order_status_id", "delivery_status", "address_id", "updated")\n  VALUES (1, 1, 1, \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, 1, 1, 1, \'\', 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."order" SET\n    "account_id" = 1,\n    "sales_rep" = 1,\n    "shipping_address" = 1,\n    "subtotal" = \'\',\n    "taxes" = \'\',\n    "shipping" = \'\',\n    "carrier" = \'\',\n    "shipping_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "eta" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "weight_kg" = \'\',\n    "weight_lbs" = \'\',\n    "length" = \'\',\n    "width" = \'\',\n    "height" = \'\',\n    "tracking_no" = \'\',\n    "total" = \'\',\n    "customer_id" = 1,\n    "restaurant_id" = 1,\n    "delivery_person_id" = 1,\n    "order_status_id" = 1,\n    "delivery_status" = \'\',\n    "address_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."order"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.order_detail',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'order_detail_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'order_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'dish_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'quantity',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'order_detail_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'order_detail_dish_id_fkey',
                fromColumns: [
                  'dish_id'
                ],
                toColumns: [
                  'restaurant_dish.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'order_detail_order_id_fkey',
                fromColumns: [
                  'order_id'
                ],
                toColumns: [
                  'order.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."order_detail" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."order_detail" ("order_id", "dish_id", "quantity")\n  VALUES (1, 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."order_detail" SET\n    "order_id" = 1,\n    "dish_id" = 1,\n    "quantity" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."order_detail"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.order_line',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'order_line_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'order_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'product_variant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'quantity',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_order_line',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_order_line_order_id',
                fromColumns: [
                  'order_id'
                ],
                toColumns: [
                  'order.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_order_line_product_variant_id',
                fromColumns: [
                  'product_variant_id'
                ],
                toColumns: [
                  'product_variant.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."order_line" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."order_line" ("order_id", "product_variant_id", "quantity")\n  VALUES (1, 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."order_line" SET\n    "order_id" = 1,\n    "product_variant_id" = 1,\n    "quantity" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."order_line"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.order_status',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'order_status_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'label',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_order_status',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."order_status" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."order_status" ("label", "description")\n  VALUES (\'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."order_status" SET\n    "label" = \'\',\n    "description" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."order_status"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.order_track',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'order_track_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'order_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'order_status_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'fk_order_track_order_id',
                fromColumns: [
                  'order_id'
                ],
                toColumns: [
                  'order.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_order_track_order_status_id',
                fromColumns: [
                  'order_status_id'
                ],
                toColumns: [
                  'order_status.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."order_track" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."order_track" ("order_id", "order_status_id")\n  VALUES (1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."order_track" SET\n    "order_id" = 1,\n    "order_status_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."order_track"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.payment',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'payment_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'external_id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'account_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'label',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'amount',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'order_id',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_payment',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_payment_account_id',
                fromColumns: [
                  'account_id'
                ],
                toColumns: [
                  'account.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_payment_order_id',
                fromColumns: [
                  'order_id'
                ],
                toColumns: [
                  'order.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."payment" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."payment" ("external_id", "account_id", "label", "amount", "order_id")\n  VALUES (\'\', 1, \'\', \'\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."payment" SET\n    "external_id" = \'\',\n    "account_id" = 1,\n    "label" = \'\',\n    "amount" = \'\',\n    "order_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."payment"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.payment_detail',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'payment_detail_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'order_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'payment_method',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'payment_status',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'amount',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'refund',
                type: 'numeric',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'payment_detail_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'payment_detail_order_id_fkey',
                fromColumns: [
                  'order_id'
                ],
                toColumns: [
                  'order.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."payment_detail" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."payment_detail" ("order_id", "payment_method", "payment_status", "amount", "refund")\n  VALUES (1, \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."payment_detail" SET\n    "order_id" = 1,\n    "payment_method" = \'\',\n    "payment_status" = \'\',\n    "amount" = \'\',\n    "refund" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."payment_detail"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.person',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'person_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'external_id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'first_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'pronouns',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'job_title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'industry',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'company',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'bio',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'website',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'linkedin',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'mastodon',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'twitter',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_person',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_person_company',
                fromColumns: [
                  'company'
                ],
                toColumns: [
                  'company.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."person" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."person" ("external_id", "first_name", "last_name", "pronouns", "title", "job_title", "industry", "company", "email", "phone", "bio", "website", "linkedin", "mastodon", "twitter", "updated")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, \'\', \'\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."person" SET\n    "external_id" = \'\',\n    "first_name" = \'\',\n    "last_name" = \'\',\n    "pronouns" = \'\',\n    "title" = \'\',\n    "job_title" = \'\',\n    "industry" = \'\',\n    "company" = 1,\n    "email" = \'\',\n    "phone" = \'\',\n    "bio" = \'\',\n    "website" = \'\',\n    "linkedin" = \'\',\n    "mastodon" = \'\',\n    "twitter" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."person"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.product',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'product_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'product_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."product" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."product" ("name", "description", "image", "type", "updated")\n  VALUES (\'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."product" SET\n    "name" = \'\',\n    "description" = \'\',\n    "image" = \'\',\n    "type" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."product"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.product_location',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'product_location_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'product_variant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'location_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'stock',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_product_location',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_product_location_location_id',
                fromColumns: [
                  'location_id'
                ],
                toColumns: [
                  'location.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_product_location_product_variant_id',
                fromColumns: [
                  'product_variant_id'
                ],
                toColumns: [
                  'product_variant.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."product_location" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."product_location" ("product_variant_id", "location_id", "stock", "updated")\n  VALUES (1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."product_location" SET\n    "product_variant_id" = 1,\n    "location_id" = 1,\n    "stock" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."product_location"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.product_variant',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'product_variant_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'sku',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'product_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'location_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'label',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'price',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'cost',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'stock',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'low_stock',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_product_variant',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_product_variant_location_id',
                fromColumns: [
                  'location_id'
                ],
                toColumns: [
                  'location.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_product_variant_product_id',
                fromColumns: [
                  'product_id'
                ],
                toColumns: [
                  'product.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."product_variant" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."product_variant" ("sku", "product_id", "location_id", "description", "label", "price", "cost", "stock", "low_stock", "updated")\n  VALUES (\'\', 1, 1, \'\', \'\', \'\', \'\', 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."product_variant" SET\n    "sku" = \'\',\n    "product_id" = 1,\n    "location_id" = 1,\n    "description" = \'\',\n    "label" = \'\',\n    "price" = \'\',\n    "cost" = \'\',\n    "stock" = 1,\n    "low_stock" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."product_variant"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.purchase_order',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'purchase_order_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'company_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'location_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'order_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'tax',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_purchase_order',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_purchase_order_company_id',
                fromColumns: [
                  'company_id'
                ],
                toColumns: [
                  'company.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_purchase_order_location_id',
                fromColumns: [
                  'location_id'
                ],
                toColumns: [
                  'location.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."purchase_order" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."purchase_order" ("company_id", "location_id", "order_date", "tax", "status", "updated")\n  VALUES (1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', 1, \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."purchase_order" SET\n    "company_id" = 1,\n    "location_id" = 1,\n    "order_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "tax" = 1,\n    "status" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."purchase_order"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.purchase_order_product',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'purchase_order_product_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'product_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'quantity',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'purchase_order_id',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'pk_purchase_order_product',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'fk_purchase_order_product_product_id',
                fromColumns: [
                  'product_id'
                ],
                toColumns: [
                  'company_product.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'fk_purchase_order_product_purchase_order_id',
                fromColumns: [
                  'purchase_order_id'
                ],
                toColumns: [
                  'purchase_order.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."purchase_order_product" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."purchase_order_product" ("product_id", "quantity", "purchase_order_id")\n  VALUES (1, 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."purchase_order_product" SET\n    "product_id" = 1,\n    "quantity" = 1,\n    "purchase_order_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."purchase_order_product"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.quiz_content',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'quiz_content_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'course_subject_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_content_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'due_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'total_points',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'quiz_content_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'quiz_content_course_module_content_id_fk',
                fromColumns: [
                  'course_module_content_id'
                ],
                toColumns: [
                  'course_module_content.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_id_fk',
                fromColumns: [
                  'course_id'
                ],
                toColumns: [
                  'course.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_module_id_fk',
                fromColumns: [
                  'course_module_id'
                ],
                toColumns: [
                  'course_module.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_subject_id_fk',
                fromColumns: [
                  'course_subject_id'
                ],
                toColumns: [
                  'course_subject.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."quiz_content" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."quiz_content" ("title", "course_subject_id", "course_id", "course_module_id", "course_module_content_id", "due_date", "total_points", "updated")\n  VALUES (\'\', 1, 1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."quiz_content" SET\n    "title" = \'\',\n    "course_subject_id" = 1,\n    "course_id" = 1,\n    "course_module_id" = 1,\n    "course_module_content_id" = 1,\n    "due_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "total_points" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."quiz_content"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.quiz_content_question',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'quiz_content_question_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'question',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'answer',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'answer_options',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'quiz_content_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'quiz_content_question_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'quiz_content_question_quiz_content_id_fk',
                fromColumns: [
                  'quiz_content_id'
                ],
                toColumns: [
                  'quiz_content.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."quiz_content_question" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."quiz_content_question" ("type", "question", "answer", "answer_options", "quiz_content_id")\n  VALUES (\'\', \'\', \'\', \'\', 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."quiz_content_question" SET\n    "type" = \'\',\n    "question" = \'\',\n    "answer" = \'\',\n    "answer_options" = \'\',\n    "quiz_content_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."quiz_content_question"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.reading_content',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'reading_content_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'content',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'course_subject_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_content_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'reading_content_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'reading_content_course_id_fk',
                fromColumns: [
                  'course_id'
                ],
                toColumns: [
                  'course.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_module_content_id_fk',
                fromColumns: [
                  'course_module_content_id'
                ],
                toColumns: [
                  'course_module_content.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_module_id_fk',
                fromColumns: [
                  'course_module_id'
                ],
                toColumns: [
                  'course_module.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_subject_id_fk',
                fromColumns: [
                  'course_subject_id'
                ],
                toColumns: [
                  'course_subject.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."reading_content" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."reading_content" ("title", "content", "course_subject_id", "course_id", "course_module_id", "course_module_content_id", "updated")\n  VALUES (\'\', \'\', 1, 1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."reading_content" SET\n    "title" = \'\',\n    "content" = \'\',\n    "course_subject_id" = 1,\n    "course_id" = 1,\n    "course_module_id" = 1,\n    "course_module_content_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."reading_content"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.recommended_publishers',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'recommended_publishers_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'advertiser_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'publisher_url',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'recommendation_date',
                type: 'date',
                isAutogenerated: false
              },
              {
                name: 'cpm',
                type: 'numeric',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."recommended_publishers" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."recommended_publishers" ("advertiser_id", "publisher_url", "recommendation_date", "cpm")\n  VALUES (1, \'\', \'2019-07-01\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."recommended_publishers" SET\n    "advertiser_id" = 1,\n    "publisher_url" = \'\',\n    "recommendation_date" = \'2019-07-01\',\n    "cpm" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."recommended_publishers"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.restaurant',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'restaurant_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'address',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'city',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'zipcode',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'image_url',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'category',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'rating',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'commission',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'prep_time',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'delivery_radius',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'max_delivery_time',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'location_lat',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'location_long',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'restaurant_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."restaurant" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."restaurant" ("name", "address", "city", "zipcode", "image_url", "email", "category", "rating", "phone", "commission", "prep_time", "delivery_radius", "max_delivery_time", "location_lat", "location_long")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."restaurant" SET\n    "name" = \'\',\n    "address" = \'\',\n    "city" = \'\',\n    "zipcode" = \'\',\n    "image_url" = \'\',\n    "email" = \'\',\n    "category" = \'\',\n    "rating" = \'\',\n    "phone" = \'\',\n    "commission" = \'\',\n    "prep_time" = \'\',\n    "delivery_radius" = 1,\n    "max_delivery_time" = \'\',\n    "location_lat" = \'\',\n    "location_long" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."restaurant"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.restaurant_cuisine',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'restaurant_cuisine_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'restaurant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'cuisine_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'restaurant_cuisine_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'restaurant_cuisine_cuisine_id_fk',
                fromColumns: [
                  'cuisine_id'
                ],
                toColumns: [
                  'cuisine.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'retaurant_cuisine_restaurant_id_fk',
                fromColumns: [
                  'restaurant_id'
                ],
                toColumns: [
                  'restaurant.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."restaurant_cuisine" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."restaurant_cuisine" ("restaurant_id", "cuisine_id")\n  VALUES (1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."restaurant_cuisine" SET\n    "restaurant_id" = 1,\n    "cuisine_id" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."restaurant_cuisine"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.restaurant_dish',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'restaurant_dish_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'restaurant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'price',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'text',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'restaurant_dish_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."restaurant_dish" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."restaurant_dish" ("restaurant_id", "name", "description", "price", "image")\n  VALUES (1, \'\', \'\', \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."restaurant_dish" SET\n    "restaurant_id" = 1,\n    "name" = \'\',\n    "description" = \'\',\n    "price" = \'\',\n    "image" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."restaurant_dish"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.restaurant_review',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'restaurant_review_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'customer_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'restaurant_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'rating',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'review_text',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'review_date',
                type: 'date',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."restaurant_review" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."restaurant_review" ("customer_id", "restaurant_id", "rating", "review_text", "review_date")\n  VALUES (1, 1, \'\', \'\', \'2019-07-01\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."restaurant_review" SET\n    "customer_id" = 1,\n    "restaurant_id" = 1,\n    "rating" = \'\',\n    "review_text" = \'\',\n    "review_date" = \'2019-07-01\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."restaurant_review"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.returns',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'returns_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'order_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'product_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'returned_quantity',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'reason',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'warehouse_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'payment',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'returned_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'returns_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'returns_location_fk',
                fromColumns: [
                  'warehouse_id'
                ],
                toColumns: [
                  'location.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'returns_order_id_fk',
                fromColumns: [
                  'order_id'
                ],
                toColumns: [
                  'order.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'returns_product_id_fk',
                fromColumns: [
                  'product_id'
                ],
                toColumns: [
                  'order_line.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."returns" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."returns" ("order_id", "product_id", "returned_quantity", "reason", "warehouse_id", "payment", "status", "returned_date", "updated")\n  VALUES (1, 1, \'\', \'\', 1, \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."returns" SET\n    "order_id" = 1,\n    "product_id" = 1,\n    "returned_quantity" = \'\',\n    "reason" = \'\',\n    "warehouse_id" = 1,\n    "payment" = \'\',\n    "status" = \'\',\n    "returned_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."returns"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.salesperson',
            columns: [
              {
                name: 'label',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'value',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."salesperson" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."salesperson" ("label", "value")\n  VALUES (\'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."salesperson" SET\n    "label" = \'\',\n    "value" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."salesperson"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.showroom_db',
            columns: [
              {
                name: 'customer_id',
                type: 'int4',
                defaultValue: 'nextval(\'showroom_db_customer_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'customer_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'sales_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'customer_email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'customer_phone',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'car_type',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'car_model_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'car_model_type',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'car_chassis_no',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'salesperson_responsible',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'salesperson_id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'rating',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'selling_price',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'showroom_db_pkey',
                columnNames: [
                  'customer_id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."showroom_db" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."showroom_db" ("customer_name", "sales_id", "customer_email", "customer_phone", "car_type", "car_model_name", "car_model_type", "car_chassis_no", "salesperson_responsible", "salesperson_id", "rating", "selling_price")\n  VALUES (\'\', 1, \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."showroom_db" SET\n    "customer_name" = \'\',\n    "sales_id" = 1,\n    "customer_email" = \'\',\n    "customer_phone" = \'\',\n    "car_type" = \'\',\n    "car_model_name" = \'\',\n    "car_model_type" = \'\',\n    "car_chassis_no" = \'\',\n    "salesperson_responsible" = \'\',\n    "salesperson_id" = \'\',\n    "rating" = 1,\n    "selling_price" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."showroom_db"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.showroom_monthly_revenue',
            columns: [
              {
                name: 'showroom_revenue',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'date_revenue',
                type: 'date',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."showroom_monthly_revenue" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."showroom_monthly_revenue" ("showroom_revenue", "date_revenue")\n  VALUES (\'\', \'2019-07-01\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."showroom_monthly_revenue" SET\n    "showroom_revenue" = \'\',\n    "date_revenue" = \'2019-07-01\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."showroom_monthly_revenue"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.sorter_data',
            columns: [
              {
                name: 'id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'shipment_location',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'shipment_awb_number',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_length',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_width',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_height',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_measurement_unit',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_volume',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_weight',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'shipment_package_weight_measurement_unit',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'shipment_image_scan_timestamp',
                type: 'timestamp',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."sorter_data" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."sorter_data" ("id", "name", "shipment_location", "shipment_awb_number", "shipment_package_length", "shipment_package_width", "shipment_package_height", "shipment_package_measurement_unit", "shipment_package_volume", "shipment_package_weight", "shipment_package_weight_measurement_unit", "shipment_image_scan_timestamp")\n  VALUES (\'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."sorter_data" SET\n    "id" = \'\',\n    "name" = \'\',\n    "shipment_location" = \'\',\n    "shipment_awb_number" = \'\',\n    "shipment_package_length" = \'\',\n    "shipment_package_width" = \'\',\n    "shipment_package_height" = \'\',\n    "shipment_package_measurement_unit" = \'\',\n    "shipment_package_volume" = \'\',\n    "shipment_package_weight" = \'\',\n    "shipment_package_weight_measurement_unit" = \'\',\n    "shipment_image_scan_timestamp" = TIMESTAMP \'2019-07-01 10:00:00\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."sorter_data"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.sorter_images',
            columns: [
              {
                name: 'id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: '_id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'url',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."sorter_images" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."sorter_images" ("id", "_id", "url")\n  VALUES (1, \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."sorter_images" SET\n    "id" = 1,\n    "_id" = \'\',\n    "url" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."sorter_images"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.sorters',
            columns: [
              {
                name: 'id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: '_id',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."sorters" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."sorters" ("id", "_id", "name")\n  VALUES (1, \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."sorters" SET\n    "id" = 1,\n    "_id" = \'\',\n    "name" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."sorters"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.support_ticket',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'support_ticket_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'created_at',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'user',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'priority',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'category',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'due_date',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'assigned_to',
                type: 'varchar',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'support_ticket_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."support_ticket" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."support_ticket" ("user", "description", "status", "priority", "category", "due_date", "assigned_to")\n  VALUES (\'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."support_ticket" SET\n    "user" = \'\',\n    "description" = \'\',\n    "status" = \'\',\n    "priority" = \'\',\n    "category" = \'\',\n    "due_date" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "assigned_to" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."support_ticket"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.ticket_comment',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'ticket_comment_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'ticket_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'text',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'author',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created_at',
                type: 'timestamptz',
                defaultValue: 'CURRENT_TIMESTAMP',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'ticket_comment_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'ticket_comment_support_ticket_id_fk',
                fromColumns: [
                  'ticket_id'
                ],
                toColumns: [
                  'support_ticket.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."ticket_comment" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."ticket_comment" ("ticket_id", "text", "author")\n  VALUES (1, \'\', \'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."ticket_comment" SET\n    "ticket_id" = 1,\n    "text" = \'\',\n    "author" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."ticket_comment"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.time_log',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'time_log_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'user_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'task',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'notes',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'rate',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'date_start',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'date_end',
                type: 'timestamp',
                isAutogenerated: false
              },
              {
                name: 'time_start',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'time_end',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'time_log_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."time_log" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."time_log" ("user_id", "task", "notes", "rate", "date_start", "date_end", "time_start", "time_end")\n  VALUES (1, \'\', \'\', \'\', TIMESTAMP \'2019-07-01 10:00:00\', TIMESTAMP \'2019-07-01 10:00:00\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."time_log" SET\n    "user_id" = 1,\n    "task" = \'\',\n    "notes" = \'\',\n    "rate" = \'\',\n    "date_start" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "date_end" = TIMESTAMP \'2019-07-01 10:00:00\',\n    "time_start" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "time_end" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."time_log"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.todo_task',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'todo_task_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'title',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'priority',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'status',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'is_complete',
                type: 'bool',
                isAutogenerated: false
              },
              {
                name: 'comment',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'deadline',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'created_at',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated_at',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'todo_task_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."todo_task" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."todo_task" ("title", "priority", "status", "is_complete", "comment", "deadline", "updated_at")\n  VALUES (\'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."todo_task" SET\n    "title" = \'\',\n    "priority" = \'\',\n    "status" = \'\',\n    "is_complete" = \'\',\n    "comment" = \'\',\n    "deadline" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "updated_at" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."todo_task"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.user_auth',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'user_auth_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'first_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'last_name',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'username',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'password_hash',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'last_login',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'role',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'user_auth_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."user_auth" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."user_auth" ("first_name", "last_name", "email", "username", "password_hash", "last_login", "role", "updated")\n  VALUES (\'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."user_auth" SET\n    "first_name" = \'\',\n    "last_name" = \'\',\n    "email" = \'\',\n    "username" = \'\',\n    "password_hash" = \'\',\n    "last_login" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "role" = \'\',\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."user_auth"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.user_data',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'user_data_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'gender',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'latitude',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'longitude',
                type: 'numeric',
                isAutogenerated: false
              },
              {
                name: 'dob',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'phone',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'image',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'country',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'created_at',
                type: 'timestamptz',
                isAutogenerated: false
              },
              {
                name: 'updated_at',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'user_data_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."user_data" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."user_data" ("gender", "latitude", "longitude", "dob", "phone", "email", "image", "country", "name", "created_at", "updated_at")\n  VALUES (\'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', \'\', \'\', \'\', \'\', \'\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\', TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."user_data" SET\n    "gender" = \'\',\n    "latitude" = \'\',\n    "longitude" = \'\',\n    "dob" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "phone" = \'\',\n    "email" = \'\',\n    "image" = \'\',\n    "country" = \'\',\n    "name" = \'\',\n    "created_at" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\',\n    "updated_at" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."user_data"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.vehicle_type',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'vehicle_type_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'type',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'vehicle_type_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."vehicle_type" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."vehicle_type" ("type")\n  VALUES (\'\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."vehicle_type" SET\n    "type" = \'\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."vehicle_type"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.video_content',
            columns: [
              {
                name: 'id',
                type: 'int4',
                defaultValue: 'nextval(\'video_content_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'video_url',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'duration',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'title',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'course_subject_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'course_module_content_id',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'created',
                type: 'timestamptz',
                defaultValue: 'now()',
                isAutogenerated: false
              },
              {
                name: 'updated',
                type: 'timestamptz',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'video_content_pkey',
                columnNames: [
                  'id'
                ],
                type: 'primary key'
              },
              {
                name: 'reading_content_course_id_fk',
                fromColumns: [
                  'course_id'
                ],
                toColumns: [
                  'course.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_module_id_fk',
                fromColumns: [
                  'course_module_id'
                ],
                toColumns: [
                  'course_module.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'reading_content_course_subject_id_fk',
                fromColumns: [
                  'course_subject_id'
                ],
                toColumns: [
                  'course_subject.id'
                ],
                type: 'foreign key'
              },
              {
                name: 'video_content_course_module_content_id_fk',
                fromColumns: [
                  'course_module_content_id'
                ],
                toColumns: [
                  'course_module_content.id'
                ],
                type: 'foreign key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."video_content" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."video_content" ("video_url", "duration", "title", "course_subject_id", "course_id", "course_module_id", "course_module_content_id", "updated")\n  VALUES (\'\', \'\', \'\', 1, 1, 1, 1, TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\');',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."video_content" SET\n    "video_url" = \'\',\n    "duration" = \'\',\n    "title" = \'\',\n    "course_subject_id" = 1,\n    "course_id" = 1,\n    "course_module_id" = 1,\n    "course_module_content_id" = 1,\n    "updated" = TIMESTAMP WITH TIME ZONE \'2019-07-01 06:30:00 CET\'\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."video_content"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          },
          {
            type: 'TABLE',
            schema: 'public',
            name: 'public.work_order',
            columns: [
              {
                name: 'work_id',
                type: 'int4',
                defaultValue: 'nextval(\'work_order_work_id_seq\'::regclass)',
                isAutogenerated: true
              },
              {
                name: 'equipment',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'category',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'description',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'request_date',
                type: 'date',
                isAutogenerated: false
              },
              {
                name: 'agent',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'maintenance_notes',
                type: 'text',
                isAutogenerated: false
              },
              {
                name: 'completed',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'hours',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'customer_name',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'customer_email',
                type: 'varchar',
                isAutogenerated: false
              },
              {
                name: 'total_cost',
                type: 'int4',
                isAutogenerated: false
              },
              {
                name: 'mat_cost',
                type: 'int4',
                isAutogenerated: false
              }
            ],
            keys: [
              {
                name: 'work_order_pkey',
                columnNames: [
                  'work_id'
                ],
                type: 'primary key'
              }
            ],
            templates: [
              {
                title: 'SELECT',
                body: 'SELECT * FROM public."work_order" LIMIT 10;',
                suggested: true
              },
              {
                title: 'INSERT',
                body: 'INSERT INTO public."work_order" ("equipment", "category", "description", "request_date", "agent", "maintenance_notes", "completed", "hours", "customer_name", "customer_email", "total_cost", "mat_cost")\n  VALUES (\'\', \'\', \'\', \'2019-07-01\', \'\', \'\', \'\', 1, \'\', \'\', 1, 1);',
                suggested: false
              },
              {
                title: 'UPDATE',
                body: 'UPDATE public."work_order" SET\n    "equipment" = \'\',\n    "category" = \'\',\n    "description" = \'\',\n    "request_date" = \'2019-07-01\',\n    "agent" = \'\',\n    "maintenance_notes" = \'\',\n    "completed" = \'\',\n    "hours" = 1,\n    "customer_name" = \'\',\n    "customer_email" = \'\',\n    "total_cost" = 1,\n    "mat_cost" = 1\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may update every row in the table!',
                suggested: false
              },
              {
                title: 'DELETE',
                body: 'DELETE FROM public."work_order"\n  WHERE 1 = 0; -- Specify a valid condition here. Removing the condition may delete everything in the table!',
                suggested: false
              }
            ]
          }
        ]
      }
    },
    isFetchingMockDataSource: false,
    mockDatasourceList: [
      {
        pluginType: 'db',
        packageName: 'mongo-plugin',
        description: 'This contains a standard movies collection',
        name: 'movies'
      },
      {
        pluginType: 'db',
        packageName: 'postgres-plugin',
        description: 'This contains a standard users information',
        name: 'users'
      }
    ],
    executingDatasourceQuery: false,
    isReconnectingModalOpen: false,
    unconfiguredList: [],
    isDatasourceBeingSaved: false,
    isDatasourceBeingSavedFromPopup: false,
    gsheetToken: '',
    gsheetProjectID: '',
    gsheetStructure: {
      spreadsheets: {},
      sheets: {},
      columns: {},
      isFetchingSpreadsheets: false,
      isFetchingSheets: false,
      isFetchingColumns: false
    },
    recentDatasources: []
  },
  pageList: {
    pages: [
      {
        pageName: 'Page1',
        pageId: '68ad34afd8deff53ee072777',
        basePageId: '68ad34afd8deff53ee072777',
        isDefault: true,
        isHidden: false,
        slug: 'page1',
        userPermissions: [
          'read:pages',
          'manage:pages',
          'create:pageActions',
          'delete:pages'
        ]
      }
    ],
    isGeneratingTemplatePage: false,
    generatePage: {
      modalOpen: false,
      params: {}
    },
    baseApplicationId: '68ad34afd8deff53ee072775',
    applicationId: '68ad34afd8deff53ee072775',
    currentBasePageId: '68ad34afd8deff53ee072777',
    currentPageId: '68ad34afd8deff53ee072777',
    defaultBasePageId: '68ad34afd8deff53ee072777',
    defaultPageId: '68ad34afd8deff53ee072777',
    loading: {}
  },
  plugins: {
    list: [
      {
        id: '68a9b7e7de8cf11f80e4a86f',
        userPermissions: [],
        name: 'PostgreSQL',
        type: 'DB',
        packageName: 'postgres-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/postgresql.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-postgres#create-crud-queries',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'PostgreSQL',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          CREATE: 'INSERT INTO users\n\t(name, gender, email)\nVALUES\n\t(\n\t\t{{ nameInput.text }},\n\t\t{{ genderDropdown.selectedOptionValue }},\n\t\t{{ emailInput.text }}\n\t);\n',
          SELECT: 'SELECT * FROM <<your_table_name>> LIMIT 10;\n\n-- Please enter a valid table name and hit RUN\n',
          UPDATE: 'UPDATE users\n\tSET status = \'APPROVED\'\n\tWHERE id = {{ usersTable.selectedRow.id }};\n',
          DELETE: 'DELETE FROM users WHERE id = -1;\n'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7e7de8cf11f80e4a870',
        userPermissions: [],
        name: 'REST API',
        type: 'API',
        packageName: 'restapi-plugin',
        iconLocation: 'https://assets.appsmith.com/RestAPI.png',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/rest-api',
        uiComponent: 'ApiEditorForm',
        datasourceComponent: 'RestAPIDatasourceForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e7de8cf11f80e4a871',
        userPermissions: [],
        name: 'MongoDB',
        type: 'DB',
        packageName: 'mongo-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/mongodb.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-mongodb#create-queries',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'MongoDB',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          CREATE: '{\n  "insert": "users",\n  "documents": [\n    {\n      "name": "{{ nameInput.text }}",\n      "email": "{{ emailInput.text }}",\n      "gender": "{{ genderDropdown.selectedOptionValue }}"\n    }\n  ]\n}\n',
          READ: '{\n  "find": "users",\n  "filter": {\n    "status": "{{ statusDropdown.selectedOptionValue }}"\n  },\n  "sort": {\n    "id": 1\n  },\n  "limit": 10\n}\n',
          UPDATE: '{\n  "update": "users",\n  "updates": [\n    {\n      "q": {\n        "id": 10\n      },\n      "u": { "$set": { "status": "{{ statusDropdown.selectedOptionValue }}" } }\n    }\n  ]\n}\n',
          DELETE: '{\n  "delete": "users",\n  "deletes": [\n    {\n      "q": {\n        "id": "{{ usersTable.selectedRow.id }}"\n      },\n      "limit": 1\n    }\n  ]\n}\n'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a872',
        userPermissions: [],
        name: 'MySQL',
        type: 'DB',
        packageName: 'mysql-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/mysql.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-mysql#create-queries',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'SQL',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          CREATE: 'INSERT INTO users\n\t(name, gender, email)\nVALUES\n\t(\n\t\t{{ nameInput.text }},\n\t\t{{ genderDropdown.selectedOptionValue }},\n\t\t{{ emailInput.text }}\n\t);\n',
          SELECT: 'SELECT * FROM <<your_table_name>> LIMIT 10\n\n-- Please enter a valid table name and hit RUN\n',
          UPDATE: 'UPDATE users\n\tSET status = \'APPROVED\'\n\tWHERE id = {{ usersTable.selectedRow.id }};\n',
          DELETE: 'DELETE FROM users WHERE id = -1;\n'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a876',
        userPermissions: [],
        name: 'DynamoDB',
        type: 'DB',
        packageName: 'dynamo-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/aws-dynamodb.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-dynamodb#create-queries',
        responseType: 'JSON',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a875',
        userPermissions: [],
        name: 'Elasticsearch',
        type: 'DB',
        packageName: 'elasticsearch-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/elastic.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-elasticsearch#querying-elasticsearch',
        responseType: 'JSON',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a878',
        userPermissions: [],
        name: 'Microsoft SQL Server',
        type: 'DB',
        packageName: 'mssql-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/mssql.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-mssql#create-queries',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'SQL',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          CREATE: 'INSERT INTO users\n\t(name, gender, email)\nVALUES\n\t(\n\t\t{{ nameInput.text }},\n\t\t{{ genderDropdown.selectedOptionValue }},\n\t\t{{ emailInput.text }}\n\t);\n',
          SELECT: 'SELECT TOP 10 * FROM <<your_table_name>>;\n\n-- Please enter a valid table name and hit RUN\n',
          UPDATE: 'UPDATE users\n\tSET status = \'APPROVED\'\n\tWHERE id = {{ usersTable.selectedRow.id }};\n',
          DELETE: 'DELETE FROM users WHERE id = {{ usersTable.selectedRow.id }};\n'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a877',
        userPermissions: [],
        name: 'Redis',
        type: 'DB',
        packageName: 'redis-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/redis.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-redis#querying-redis',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a879',
        userPermissions: [],
        name: 'Firestore',
        type: 'DB',
        packageName: 'firestore-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/firestore.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-firestore#understanding-commands',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87a',
        userPermissions: [],
        name: 'Redshift',
        type: 'DB',
        packageName: 'redshift-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/aws-redshift.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-redshift#querying-redshift',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'SQL',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87b',
        userPermissions: [],
        name: 'S3',
        type: 'DB',
        packageName: 'amazons3-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/aws-s3.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-amazon-s3#list-files',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'S3',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87c',
        userPermissions: [],
        name: 'Google Sheets',
        type: 'SAAS',
        packageName: 'google-sheets-plugin',
        pluginName: 'google-sheets-plugin',
        iconLocation: 'https://assets.appsmith.com/GoogleSheets.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-google-sheets#create-queries',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'OAuth2DatasourceForm',
        generateCRUDPageComponent: 'Google Sheets',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87e',
        userPermissions: [],
        name: 'Snowflake',
        type: 'DB',
        packageName: 'snowflake-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/snowflake.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-snowflake-db#querying-snowflake',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        generateCRUDPageComponent: 'SQL',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          CREATE: 'INSERT INTO users\n\t(name, gender, email)\nVALUES\n\t(\n\t\t\'{{ nameInput.text }}\',\n\t\t\'{{ genderDropdown.selectedOptionValue }}\',\n\t\t\'{{ emailInput.text }}\'\n\t);\n',
          SELECT: 'SELECT * FROM <<your_table_name>> LIMIT 10;\n\n-- Please enter a valid table name and hit RUN\n',
          UPDATE: 'UPDATE users\n\tSET status = \'APPROVED\'\n\tWHERE id = \'{{ usersTable.selectedRow.id }}\';\n',
          DELETE: 'DELETE FROM users WHERE id = -1;\n'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87f',
        userPermissions: [],
        name: 'ArangoDB',
        type: 'DB',
        packageName: 'arangodb-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/arangodb.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-arango-db#using-queries-in-applications',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          CREATE: 'INSERT {\n    name: "{{ nameInput.text }}",\n    gender: "{{ genderDropdown.selectedOptionValue }}",\n    email: "{{ emailInput.text }}"\n} INTO users\n\n// nameInput and genderDropdown are example widgets, replace them with your widget names. To understand more please\n// check out: https://docs.appsmith.com/core-concepts/capturing-data-write\n// Read more at https://www.arangodb.com/docs/stable/aql/',
          SELECT: 'FOR user IN users\nFILTER user.role == "Admin"\nSORT user.id ASC\nLIMIT 10\nRETURN user\n\n// Use widget data in a query using {{ widgetName.property }}. To understand more, please check out:\n// https://docs.appsmith.com/core-concepts/capturing-data-write\n// Read more at https://www.arangodb.com/docs/stable/aql/',
          UPDATE: 'UPDATE\n"{{ usersTable.selectedRow.id }}"\nWITH\n{\n    status: "APPROVED"\n}\nIN users\n\n// usersTable is an example table widget from where the id is being read. Replace it with your own Table widget or a\n// static value. To understand more please check out: https://docs.appsmith.com/core-concepts/capturing-data-write\n// Read more at https://www.arangodb.com/docs/stable/aql/',
          DELETE: 'REMOVE "1" IN users\n\n// Use widget data in a query by replacing static values with {{ widgetName.property }}. To understand more please\n// check out https://docs.appsmith.com/core-concepts/capturing-data-write\n// Read more at https://www.arangodb.com/docs/stable/aql/'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a880',
        userPermissions: [],
        name: 'JS Functions',
        type: 'JS',
        packageName: 'js-plugin',
        iconLocation: 'https://assets.appsmith.com/js-yellow.svg',
        documentationLink: 'https://docs.appsmith.com/v/v1.2.1/js-reference/using-js',
        responseType: 'JSON',
        uiComponent: 'JsEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e9de8cf11f80e4a891',
        userPermissions: [],
        name: 'Authenticated GraphQL API',
        type: 'API',
        packageName: 'graphql-plugin',
        iconLocation: 'https://s3.us-east-2.amazonaws.com/assets.appsmith.com/logo/graphql.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/graphql#create-queries',
        responseType: 'JSON',
        uiComponent: 'GraphQLEditorForm',
        datasourceComponent: 'RestAPIDatasourceForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e9de8cf11f80e4a881',
        userPermissions: [],
        name: 'SMTP',
        type: 'DB',
        packageName: 'smtp-plugin',
        iconLocation: 'https://assets.appsmith.com/smtp-icon.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/using-smtp',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7e9de8cf11f80e4a892',
        userPermissions: [],
        name: 'Oracle',
        type: 'DB',
        packageName: 'oracle-plugin',
        iconLocation: 'https://s3.us-east-2.amazonaws.com/assets.appsmith.com/oracle.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/querying-oracle#create-queries',
        responseType: 'TABLE',
        uiComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {
          SELECT: 'SELECT* FROM <<your_table_name>> WHERE ROWNUM < 10;\n\n-- Please enter a valid table name and hit RUN\n',
          INSERT: 'INSERT INTO users\n\t(name, gender, email)\nVALUES\n\t(\n\t\t{{ nameInput.text }},\n\t\t{{ genderDropdown.selectedOptionValue }},\n\t\t{{ emailInput.text }}\n\t)\n',
          UPDATE: 'UPDATE users SET status = \'APPROVED\' WHERE id = {{ usersTable.selectedRow.id }}\n',
          DELETE: 'DELETE FROM users WHERE id = {{idInput.text}}\n'
        },
        remotePlugin: false
      },
      {
        id: '68a9b7edde8cf11f80e4a895',
        userPermissions: [],
        name: 'Anthropic',
        type: 'AI',
        packageName: 'anthropic-plugin',
        pluginName: 'Anthropic',
        iconLocation: 'https://assets.appsmith.com/logo/anthropic.svg',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/anthropic',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7edde8cf11f80e4a894',
        userPermissions: [],
        name: 'Open AI',
        type: 'AI',
        packageName: 'openai-plugin',
        pluginName: 'Open AI',
        iconLocation: 'https://assets.appsmith.com/logo/open-ai.svg',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/open-ai',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a896',
        userPermissions: [],
        name: 'Google AI',
        type: 'AI',
        packageName: 'googleai-plugin',
        pluginName: 'Google AI',
        iconLocation: 'https://assets.appsmith.com/google-ai.svg',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/google-ai',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a897',
        userPermissions: [],
        name: 'Databricks',
        type: 'DB',
        packageName: 'databricks-plugin',
        pluginName: 'Databricks',
        iconLocation: 'https://assets.appsmith.com/databricks-logo.svg',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/databricks',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a898',
        userPermissions: [],
        name: 'AWS Lambda',
        type: 'REMOTE',
        packageName: 'aws-lambda-plugin',
        pluginName: 'AWS Lambda',
        iconLocation: 'https://assets.appsmith.com/aws-lambda-logo.svg',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/aws-lambda',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a899',
        userPermissions: [],
        name: 'Appsmith AI',
        type: 'AI',
        packageName: 'appsmithai-plugin',
        pluginName: 'Appsmith AI',
        iconLocation: 'https://assets.appsmith.com/logo/appsmith-ai.svg',
        documentationLink: 'https://docs.appsmith.com/connect-data/reference/appsmith-ai',
        responseType: 'JSON',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'DbEditorForm',
        allowUserDatasources: true,
        isRemotePlugin: false,
        templates: {},
        remotePlugin: false
      },
      {
        id: '68a9b813de8cf11f80e4a89b',
        userPermissions: [],
        name: 'HubSpot',
        type: 'REMOTE',
        packageName: 'saas-plugin',
        pluginName: 'hubspot-1.2-plugin',
        iconLocation: 'https://assets.appsmith.com/integrations/hubspot.png',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/hubspot#create-queries',
        responseType: 'JSON',
        version: '1.0',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: true,
        actionUiConfig: {
          editor: [
            {
              label: 'Commands',
              description: 'Select the method to run',
              configProperty: 'actionConfiguration.formData.command',
              controlType: 'DROP_DOWN',
              options: [
                {
                  index: 1,
                  label: 'HubDB - get published tables',
                  value: 'GET_PUBLISHED_TABLES'
                },
                {
                  index: 2,
                  label: 'HubDB - create table',
                  value: 'CREATE_TABLE'
                },
                {
                  index: 3,
                  label: 'HubDB - get details of a published table',
                  value: 'GET_DETAILS_PUBLISHED_TABLE'
                },
                {
                  index: 4,
                  label: 'HubDB - archive table',
                  value: 'ARCHIVE_TABLE'
                },
                {
                  index: 5,
                  label: 'HubDB - update existing table',
                  value: 'UPDATE_EXISTING_TABLE'
                },
                {
                  index: 6,
                  label: 'HubDB - clone table',
                  value: 'CLONE_TABLE'
                },
                {
                  index: 7,
                  label: 'HubDB - export published version table',
                  value: 'EXPORT_PUBLISHED_VERSION_TABLE'
                },
                {
                  index: 8,
                  label: 'HubDB - unpublish table',
                  value: 'UNPUBLISH_TABLE'
                },
                {
                  index: 9,
                  label: 'HubDB - get table rows',
                  value: 'GET_ROWS_TABLE'
                },
                {
                  index: 10,
                  label: 'HubDB - add new table row',
                  value: 'ADD_NEW_ROW_TABLE'
                },
                {
                  index: 11,
                  label: 'HubDB - get table row',
                  value: 'GET_TABLE_ROW'
                },
                {
                  index: 12,
                  label: 'HubDB - update existing row',
                  value: 'UPDATE_EXISTING_ROW'
                },
                {
                  index: 13,
                  label: 'HubDB - replace existing row',
                  value: 'REPLACE_EXISTING_ROW'
                },
                {
                  index: 14,
                  label: 'HubDB - permanently delete row',
                  value: 'PERMANENTLY_DELETE_A_ROW'
                },
                {
                  index: 15,
                  label: 'HubDB - clone row',
                  value: 'CLONE_ROW'
                },
                {
                  index: 16,
                  label: 'HubDB - get set rows',
                  value: 'GET_SET_ROWS'
                },
                {
                  index: 17,
                  label: 'HubDB - permanently delete rows',
                  value: 'PERMANENTLY_DELETE_ROWS'
                },
                {
                  index: 18,
                  label: 'Domains - get current domains',
                  value: 'GET_CURRENT_DOMAINS'
                },
                {
                  index: 19,
                  label: 'Domains - get single domain',
                  value: 'GET_SINGLE_DOMAINS'
                },
                {
                  index: 20,
                  label: 'URL redirects - get current redirects',
                  value: 'GET_CURRENT_REDIRECTS'
                },
                {
                  index: 21,
                  label: 'URL redirects - create redirect',
                  value: 'CREATE_A_REDIRECT'
                },
                {
                  index: 22,
                  label: 'URL redirects - get details redirect',
                  value: 'GET_DETAILS_FOR_A_REDIRECT'
                },
                {
                  index: 23,
                  label: 'URL redirects - update redirect',
                  value: 'UPDATE_A_REDIRECT'
                },
                {
                  index: 24,
                  label: 'URL redirects - delete redirect',
                  value: 'DELETE_A_REDIRECT'
                },
                {
                  index: 25,
                  label: 'CRM - list objects',
                  value: 'LIST_OBJECTS'
                },
                {
                  index: 26,
                  label: 'CRM - create object',
                  value: 'CREATE_OBJECT'
                },
                {
                  index: 27,
                  label: 'CRM - read object',
                  value: 'READ_OBJECT'
                },
                {
                  index: 28,
                  label: 'CRM - update object',
                  value: 'UPDATE_OBJECT'
                },
                {
                  index: 29,
                  label: 'CRM - archive object',
                  value: 'ARCHIVE_OBJECT'
                },
                {
                  index: 30,
                  label: 'CRM - search object',
                  value: 'SEARCH_OBJECT'
                },
                {
                  index: 31,
                  label: 'CRM - GDPR delete',
                  value: 'GDPR_DELETE'
                },
                {
                  index: 32,
                  label: 'Files - import file',
                  value: 'IMPORT_FILE'
                },
                {
                  index: 33,
                  label: 'Files - delete file',
                  value: 'DELETE_FILE'
                },
                {
                  index: 34,
                  label: 'Files - get file',
                  value: 'GET_FILE'
                },
                {
                  index: 35,
                  label: 'Files - create folder',
                  value: 'CREATE_FOLDER'
                },
                {
                  index: 36,
                  label: 'Files - search file',
                  value: 'SEARCH_FILE'
                },
                {
                  index: 38,
                  label: 'Files - search folder',
                  value: 'SEARCH_FOLDERS'
                },
                {
                  index: 39,
                  label: 'Files - update folder properties',
                  value: 'UPDATE_FOLDER_PROPERTIES'
                },
                {
                  index: 40,
                  label: 'Files - check folder update status',
                  value: 'CHECK_FOLDER_UPDATE_STATUS'
                },
                {
                  index: 41,
                  label: 'Files - get folder',
                  value: 'GET_FOLDER'
                },
                {
                  index: 42,
                  label: 'Files - delete folder',
                  value: 'DELETE_FOLDER'
                },
                {
                  index: 43,
                  label: 'Settings - retrieve list of users',
                  value: 'RETRIEVE_LIST_USERS'
                },
                {
                  index: 44,
                  label: 'Settings - add user',
                  value: 'ADD_USER'
                },
                {
                  index: 45,
                  label: 'Settings - retrieve user',
                  value: 'RETRIEVES_USER'
                },
                {
                  index: 46,
                  label: 'Settings - modify user',
                  value: 'MODIFY_USER'
                },
                {
                  index: 47,
                  label: 'Settings - remove user',
                  value: 'REMOVES_USER'
                },
                {
                  index: 48,
                  label: 'Settings - retrieve roles account',
                  value: 'RETRIEVES_ROLES_ACCOUNT'
                },
                {
                  index: 49,
                  label: 'Settings - see details account\'s teams',
                  value: 'SEE_DETAILS_ACCOUNT\'S_TEAMS'
                }
              ]
            },
            {
              identifier: 'ARCHIVE_OBJECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Object type',
                  configProperty: 'actionConfiguration.formData.objectType',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.).',
                  subtitle: 'Valid object type for the CRM.',
                  placeholderText: 'contacts'
                },
                {
                  configProperty: 'actionConfiguration.formData.objectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'objectId',
                  label: 'Object ID',
                  isRequired: true,
                  tooltipText: 'Identifier that was used when the object was created. If you do not remember it, you can use list objects to find the id.',
                  subtitle: 'Identifier of the object. ',
                  placeholderText: '201'
                }
              ],
              name: 'Archive object',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'ARCHIVE_OBJECT\'}}'
              }
            },
            {
              identifier: 'UPDATE_EXISTING_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'archived',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Specifies whether to return archived tables. Defaults to false. ',
                  subtitle: 'Whether to return only archived results.',
                  placeholderText: 'false',
                  label: 'Archived',
                  configProperty: 'actionConfiguration.formData.archived',
                  initialValue: 'false'
                },
                {
                  configProperty: 'actionConfiguration.formData.inludeForeignIds',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'inludeForeignIds',
                  label: 'Include foreign IDs',
                  placeholderText: 'false',
                  subtitle: 'If true, populate foreign ID values in the result. ',
                  tooltipText: 'Set this to true  to populate foreign ID values in the result. Defaults to false.',
                  initialValue: 'false'
                },
                {
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'tableIdOrName',
                  label: 'Table ID or name',
                  placeholderText: 'test_table',
                  subtitle: 'Table name or ID of the table to update. ',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  isRequired: true,
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'name',
                  isRequired: true,
                  label: 'Name',
                  requiresEncoding: false,
                  subtitle: 'Name of the resulting table.',
                  tooltipText: 'Name that will be used to identify the table.',
                  placeholderText: 'test_table'
                },
                {
                  configProperty: 'actionConfiguration.formData.label',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'label',
                  label: 'Label',
                  placeholderText: 'Test table',
                  requiresEncoding: false,
                  subtitle: 'Label of the resulting table. ',
                  tooltipText: 'Label to represent the table name.',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.useForPages',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'useForPages',
                  initialValue: 'false',
                  label: 'Use for pages',
                  placeholderText: 'false',
                  subtitle: 'If true, the table can be used for creation of dynamic pages. ',
                  tooltipText: 'The table can be used for creation of dynamic pages. Default value: false',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.columns',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'columns',
                  label: 'Columns',
                  subtitle: 'List of columns in the table.',
                  tooltipText: 'List of columns in the table. Refer Hubspot documentation to create the columns, all column fields are required (id, name, label, type, options). in options you can add multi-columns. type: array',
                  isRequired: true,
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.allowPublicApiAccess',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'allowPublicApiAccess',
                  initialValue: 'false',
                  label: 'Allow public API access',
                  placeholderText: 'false',
                  subtitle: 'If true, the table can be read by public without authorization.',
                  tooltipText: 'The table can be read by public without authorization. Default value: false'
                },
                {
                  configProperty: 'actionConfiguration.formData.allowChildTables',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'allowChildTables',
                  initialValue: 'false',
                  label: 'Allow child tables',
                  placeholderText: 'false',
                  subtitle: 'If true, the child tables can be created. ',
                  tooltipText: 'Whether child tables can be created. Default value:false'
                },
                {
                  configProperty: 'actionConfiguration.formData.enableChildTablePages',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'enableChildTablePages',
                  initialValue: 'false',
                  label: 'Enable child table pages',
                  placeholderText: 'false',
                  subtitle: 'If true, is created a multi-level dynamic pages using child tables.',
                  tooltipText: 'Create multi-level dynamic pages using child tables. Default value: false.'
                },
                {
                  configProperty: 'actionConfiguration.formData.foreignTableId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'foreignTableId',
                  initialValue: 'null',
                  label: 'Foreign table ID',
                  placeholderText: '5378084',
                  subtitle: 'ID of another table. ',
                  tooltipText: 'ID of another table to which the column refers/points to. '
                },
                {
                  configProperty: 'actionConfiguration.formData.foreignColumnId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'foreignColumnId',
                  initialValue: 'null',
                  label: 'Foreign column ID',
                  placeholderText: '5378084',
                  subtitle: 'ID of the column from another table.',
                  tooltipText: 'ID of the column from another table to which the column refers/points to. '
                },
                {
                  configProperty: 'actionConfiguration.formData.dynamicMetaTags',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'dynamicMetaTags',
                  initialValue: '{}',
                  label: 'Dynamic meta tags',
                  placeholderText: '{}',
                  requiresEncoding: false,
                  subtitle: 'Key value pairs. ',
                  tooltipText: 'The key value pairs of the metadata fields with the associated column ids. type: array'
                }
              ],
              name: 'Update Existing table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UPDATE_EXISTING_TABLE\'}}'
              }
            },
            {
              identifier: 'REMOVES_USER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'idProperty',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'ID property',
                  configProperty: 'actionConfiguration.formData.idProperty',
                  tooltipText: 'The name of a property with unique user values. Valid values are USER_ID(default) or EMAIL. ',
                  subtitle: 'Name of a property with unique user values.'
                },
                {
                  identifier: 'userId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'User ID',
                  configProperty: 'actionConfiguration.formData.userId',
                  isRequired: true,
                  tooltipText: 'Identifier of user to delete. ',
                  subtitle: 'Identifier of user to delete. ',
                  placeholderText: '13358977'
                }
              ],
              name: 'Removes User',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'REMOVES_USER\'}}'
              }
            },
            {
              identifier: 'SEARCH_OBJECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  configProperty: 'actionConfiguration.formData.objectType',
                  label: 'Object type',
                  placeholderText: 'contacts',
                  subtitle: 'Valid object type for the CRM. ',
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.) ',
                  isRequired: true,
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'value',
                  isRequired: true,
                  label: 'Value',
                  placeholderText: 'Bryan',
                  subtitle: 'Filter the matching property values',
                  tooltipText: 'Use filters in the request body to limit the results to only records with matching property values. ',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.propertyName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'propertyName',
                  isRequired: true,
                  label: 'Property name',
                  placeholderText: 'firstname',
                  requiresEncoding: false,
                  subtitle: 'Filter the matching property values',
                  tooltipText: 'Use filters in the request body to limit the results to only records with matching property values. '
                },
                {
                  configProperty: 'actionConfiguration.formData.operator',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'operator',
                  isRequired: true,
                  label: 'Operator',
                  placeholderText: 'EQ',
                  requiresEncoding: true,
                  subtitle: 'Logical operator.',
                  tooltipText: 'Logical operator. EQ (Equal to), LT (Less than), GT (Greater than),BETWEEN (Within the specified range), IN (Included within the specified list), CONTAINS_TOKEN. '
                },
                {
                  configProperty: 'actionConfiguration.formData.sorts',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'sorts',
                  isRequired: true,
                  label: 'Sorts',
                  placeholderText: ' [ {     "propertyName": "createdate",     "direction": "DESCENDING"   }]',
                  requiresEncoding: false,
                  subtitle: 'Array with different sorting rules.',
                  tooltipText: 'Use a sorting rule in the request body to list results in ascending or descending order. Only one sorting rule can be applied to any search.'
                },
                {
                  configProperty: 'actionConfiguration.formData.query',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'query',
                  label: 'Query',
                  requiresEncoding: false,
                  subtitle: 'Letter or word to find for all objects with a default text property that contain this value',
                  tooltipText: 'Searches for all objects with a default text property value containing in the string. '
                },
                {
                  configProperty: 'actionConfiguration.formData.properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'properties',
                  isRequired: true,
                  label: 'Properties',
                  placeholderText: 'b',
                  requiresEncoding: false,
                  subtitle: 'Comma separated list of the properties to be returned.',
                  tooltipText: 'A comma separated list of the properties to be returned in the  response. If any of the specified properties are not present on the requested object(s), they will be ignored. type: array'
                },
                {
                  configProperty: 'actionConfiguration.formData.limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'limit',
                  initialValue: '10',
                  isRequired: true,
                  label: 'Limit',
                  placeholderText: '10',
                  subtitle: 'Maximum number of results objects to display per page. ',
                  tooltipText: 'The maximum number of results to display per page.'
                },
                {
                  configProperty: 'actionConfiguration.formData.after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'after',
                  initialValue: '0',
                  isRequired: true,
                  label: 'After',
                  placeholderText: '1',
                  requiresEncoding: false,
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  tooltipText: 'The token returned in the cursor field of the response.'
                }
              ],
              name: 'Search object',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'SEARCH_OBJECT\'}}'
              }
            },
            {
              identifier: 'GET_FOLDER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Properties to set on returned folder. type: array',
                  subtitle: 'Comma separated list of the properties to be returned in the response.',
                  label: 'Properties',
                  configProperty: 'actionConfiguration.formData.properties'
                },
                {
                  identifier: 'folderId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'Identifier of desired folder. ',
                  subtitle: 'Folder ID. ',
                  label: 'Folder ID',
                  placeholderText: '74302751362',
                  configProperty: 'actionConfiguration.formData.folderId'
                }
              ],
              name: 'Get folder',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_FOLDER\'}}'
              }
            },
            {
              identifier: 'CREATE_OBJECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  configProperty: 'actionConfiguration.formData.objectType',
                  label: 'Object type',
                  placeholderText: 'contacts',
                  subtitle: 'Valid object type for the CRM.',
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.)',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'properties',
                  isRequired: true,
                  label: 'Properties',
                  placeholderText: '{ "company": "Elv",    "email": "test@elv.net",    "firstname": "Test",         "lastname": "Cooper", "phone": "(877)112-05252", "website": "biglytics.net"}',
                  requiresEncoding: false,
                  subtitle: 'Properties object for the specific objectType. ',
                  tooltipText: 'A properties object for the specific objecType.'
                }
              ],
              name: 'Create object',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CREATE_OBJECT\'}}'
              }
            },
            {
              identifier: 'SEE_DETAILS_ACCOUNT\'S_TEAMS',
              controlType: 'SECTION',
              children: [],
              name: 'See Details account\'s Teams',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'SEE_DETAILS_ACCOUNT\'S_TEAMS\'}}'
              }
            },
            {
              identifier: 'READ_OBJECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Properties',
                  configProperty: 'actionConfiguration.formData.properties',
                  requiresEncoding: true,
                  tooltipText: 'A comma separated list of the properties to be returned in the  response. If any of the specified properties are not present on the  requested object(s), they will be ignored. type: String[]',
                  subtitle: 'Comma separated list of the properties to be returned in the response.'
                },
                {
                  configProperty: 'actionConfiguration.formData.propertiesWithHistory',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'propertiesWithHistory',
                  label: 'Properties with history',
                  requiresEncoding: true,
                  tooltipText: 'A comma separated list of the properties to be returned along with  their history of previous values. If any of the specified properties are  not present on the requested object(s), they will be ignored. Usage of  this parameter will reduce the maximum number of objects that can be  read by a single request. type: String[]',
                  subtitle: 'Comma separated list of the properties to be returned along with  their history of previous values.'
                },
                {
                  configProperty: 'actionConfiguration.formData.associations',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'associations',
                  label: 'Associations',
                  requiresEncoding: true,
                  tooltipText: 'A comma separated list of object types to retrieve associated IDs  for. If any of the specified associations do not exist, they will be  ignored. type: String[]',
                  subtitle: 'Comma separated list of object types to retrieve associated IDs for.'
                },
                {
                  configProperty: 'actionConfiguration.formData.archived',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'archived',
                  label: 'Archived',
                  requiresEncoding: false,
                  tooltipText: 'Specifies whether to return archived objects. ',
                  subtitle: 'If true, return only archived results.',
                  placeholderText: 'false'
                },
                {
                  configProperty: 'actionConfiguration.formData.objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'objectType',
                  isRequired: true,
                  label: 'Object type',
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.)',
                  subtitle: 'Valid object type for the CRM.',
                  placeholderText: 'contacts'
                },
                {
                  configProperty: 'actionConfiguration.formData.objectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'objectId',
                  isRequired: true,
                  label: 'Object ID',
                  tooltipText: 'Identifier that was used when the object was created. If you do not remember it, you can use list objects to find the id.',
                  subtitle: 'ID of the object. ',
                  placeholderText: '201'
                }
              ],
              name: 'Read object',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'READ_OBJECT\'}}'
              }
            },
            {
              identifier: 'GET_TABLE_ROW',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'tableIdOrName',
                  label: 'Table ID or name',
                  subtitle: 'ID or name of the table. ',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  isRequired: true,
                  requiresEncoding: true,
                  placeholderText: 'test_table'
                },
                {
                  configProperty: 'actionConfiguration.formData.rowId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'rowId',
                  label: 'Row ID',
                  subtitle: 'Row ID.',
                  tooltipText: 'The ID of the row.',
                  isRequired: true,
                  placeholderText: '5378084'
                }
              ],
              name: 'Get table Row',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_TABLE_ROW\'}}'
              }
            },
            {
              identifier: 'ADD_USER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'email',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Email',
                  configProperty: 'actionConfiguration.formData.email',
                  placeholderText: 'newUser@email.com',
                  isRequired: true,
                  tooltipText: 'The created user\'s email.',
                  subtitle: 'User email. '
                },
                {
                  identifier: 'roleId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Role ID',
                  configProperty: 'actionConfiguration.formData.roleId',
                  initialValue: 'null',
                  placeholderText: '310427',
                  tooltipText: 'The user\'s role.',
                  subtitle: 'User role ID.  '
                },
                {
                  configProperty: 'actionConfiguration.formData.primaryTeamId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'primaryTeamId',
                  initialValue: 'null',
                  label: 'Primary team ID',
                  placeholderText: '7824745',
                  tooltipText: 'The user\'s primary team.',
                  subtitle: 'User primary team ID. '
                },
                {
                  configProperty: 'actionConfiguration.formData.secondaryTeamIds',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'secondaryTeamIds',
                  initialValue: '[]',
                  label: 'Secondary team Ids',
                  placeholderText: ' [”7885423”,”78525623”]',
                  tooltipText: 'The user\'s additional teams.  type: array.',
                  subtitle: 'User additional teams IDs. '
                },
                {
                  configProperty: 'actionConfiguration.formData.sendWelcomeEmail',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'sendWelcomeEmail',
                  initialValue: 'false',
                  label: 'Send welcome email',
                  placeholderText: 'false',
                  isRequired: true,
                  tooltipText: 'Whether to send a welcome email  ',
                  subtitle: 'If true, send a welcome email.'
                }
              ],
              name: 'Add User',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'ADD_USER\'}}'
              }
            },
            {
              identifier: 'IMPORT_FILE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'access',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'PUBLIC_INDEXABLE:  File is publicly accessible by anyone who has the URL. Search engines  can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines can\'t index the file. PRIVATE: File is NOT publicly accessible. Requires a signed URL to see content. Search engines can\'t  index the file. ',
                  subtitle: 'Type of access to the file. ',
                  label: 'Access',
                  placeholderText: 'PUBLIC_INDEXABLE',
                  configProperty: 'actionConfiguration.formData.access'
                },
                {
                  identifier: 'ttl',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Time to live. If specified the file will be deleted after the given time frame. ',
                  subtitle: 'The file will be deleted after the given time frame.',
                  placeholderText: '5',
                  label: 'TTL',
                  configProperty: 'actionConfiguration.formData.ttl'
                },
                {
                  configProperty: 'actionConfiguration.formData.name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'name',
                  label: 'Name',
                  placeholderText: 'test-file',
                  requiresEncoding: true,
                  subtitle: 'Name of the resulting file in the file manager. ',
                  tooltipText: 'Name to give the resulting file in the file manager. '
                },
                {
                  identifier: 'url',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  requiresEncoding: false,
                  tooltipText: 'URL to download the new file from. ',
                  subtitle: 'URL to download the new file from.',
                  label: 'URL',
                  configProperty: 'actionConfiguration.formData.url'
                },
                {
                  configProperty: 'actionConfiguration.formData.folderPath',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'folderPath',
                  isRequired: true,
                  label: 'Folder path',
                  placeholderText: '/myNewFolder',
                  requiresEncoding: true,
                  subtitle: 'Destination folder path for the uploaded file. ',
                  tooltipText: 'One of folderPath or folderId is required. Destination folder path for the uploaded file. If the folder path does not exist, there will be an attempt to create the folder path. '
                },
                {
                  configProperty: 'actionConfiguration.formData.duplicateValidationStrategy',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'duplicateValidationStrategy',
                  isRequired: true,
                  label: 'Duplicate validation strategy',
                  placeholderText: 'NONE',
                  requiresEncoding: true,
                  subtitle: 'Type of strategy for duplicate validation.',
                  tooltipText: 'NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead. '
                },
                {
                  configProperty: 'actionConfiguration.formData.duplicateValidationScope',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'duplicateValidationScope',
                  isRequired: true,
                  label: 'Duplicate validation scope',
                  placeholderText: 'EXACT_FOLDER',
                  requiresEncoding: true,
                  subtitle: 'Look for a duplicate file in the entire account or a duplicate file in the provided folder. ',
                  tooltipText: 'ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER: Look for a duplicate file in the provided folder. '
                },
                {
                  configProperty: 'actionConfiguration.formData.overwrite',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'overwrite',
                  initialValue: 'false',
                  isRequired: true,
                  label: 'Overwrite',
                  placeholderText: 'false',
                  subtitle: 'If true, overwrites existing files if a file with the same name exists in the given folder. ',
                  tooltipText: 'If true, it will overwrite existing files if a file with the same name exists in the given folder.'
                }
              ],
              name: 'Import File',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'IMPORT_FILE\'}}'
              }
            },
            {
              identifier: 'RETRIEVES_ROLES_ACCOUNT',
              controlType: 'SECTION',
              children: [],
              name: 'Retrieves Roles account',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'RETRIEVES_ROLES_ACCOUNT\'}}'
              }
            },
            {
              identifier: 'GET_CURRENT_REDIRECTS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'createdAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Created at',
                  configProperty: 'actionConfiguration.formData.createdAt',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  tooltipText: 'Only return redirects created on exactly this date. ',
                  subtitle: 'Return redirects created on exactly this date. Format: YYYY-MM-DDThh:mm:ss.sZ'
                },
                {
                  identifier: 'createdAfter',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Created after',
                  configProperty: 'actionConfiguration.formData.createdAfter',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  tooltipText: 'Only return redirects created after this date.  ',
                  subtitle: 'Return domains created after this date. Format: YYYY-MM-DDThh:mm:ss.sZ.'
                },
                {
                  configProperty: 'actionConfiguration.formData.createdBefore',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdBefore',
                  label: 'Created before',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  tooltipText: 'Only return redirects created before this date.  ',
                  subtitle: 'Return domains created before this date. Format: YYYY-MM-DDThh:mm:ss.sZ.'
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAt',
                  label: 'Updated at',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  tooltipText: 'Only return redirects last updated on exactly this date.  ',
                  subtitle: 'Return domains updated at this date. Format YYYY-MM-DDThh:mm:ss.sZ.'
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAfter',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAfter',
                  label: 'Updated after',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  tooltipText: 'Only return redirects last updated after this date.  ',
                  subtitle: 'Return domains updated after this date.  Format: YYYY-MM-DDThh:mm:ss.sZ.'
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedBefore',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedBefore',
                  label: 'Updated before',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  tooltipText: 'Only return redirects last updated before this date. ',
                  subtitle: 'Return domains updated before this date.  Format: YYYY-MM-DDThh:mm:ss.sZ.'
                },
                {
                  configProperty: 'actionConfiguration.formData.sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'sort',
                  label: 'Sort',
                  requiresEncoding: true,
                  tooltipText: 'Column names to sort the results by. type: array.',
                  subtitle: 'Column names to sort the results by.'
                },
                {
                  configProperty: 'actionConfiguration.formData.properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'properties',
                  label: 'Properties',
                  requiresEncoding: true,
                  tooltipText: 'A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. type: array.',
                  subtitle: 'Comma separated list of the properties to be returned in the response.'
                },
                {
                  configProperty: 'actionConfiguration.formData.after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'after',
                  label: 'Next page token',
                  requiresEncoding: true,
                  tooltipText: 'The token returned in the cursor field of the response.',
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  placeholderText: 'MQ%3D%3D'
                },
                {
                  configProperty: 'actionConfiguration.formData.before',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'before',
                  label: 'Before page token',
                  requiresEncoding: true,
                  tooltipText: 'The token returned in the cursor field of the response.',
                  subtitle: 'To obtain the token look for the next page token or  before field, in the response.',
                  placeholderText: 'MQ%3D%3D'
                },
                {
                  configProperty: 'actionConfiguration.formData.limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'limit',
                  initialValue: '1000',
                  label: 'Limit',
                  placeholderText: '1000',
                  tooltipText: 'Maximum number of results to return. Default is 1000.',
                  subtitle: 'The maximum number of published tables to return. '
                },
                {
                  configProperty: 'actionConfiguration.formData.archived',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'archived',
                  initialValue: 'false',
                  label: 'Archived',
                  placeholderText: 'false',
                  tooltipText: 'Specifies whether to return archived tables. Defaults to false. ',
                  subtitle: 'Whether to return only archived results.'
                }
              ],
              name: 'Get current redirects',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_CURRENT_REDIRECTS\'}}'
              }
            },
            {
              identifier: 'GET_DETAILS_FOR_A_REDIRECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'urlRedirectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'URL redirect ID',
                  configProperty: 'actionConfiguration.formData.urlRedirectId',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'Identifier that was used when the URL redirect was created. If you do not remember it, you can use get current redirects to find the id.',
                  subtitle: 'Write the ID of the target redirect. ',
                  placeholderText: '71783843089'
                }
              ],
              name: 'Get Details for a redirect',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_DETAILS_FOR_A_REDIRECT\'}}'
              }
            },
            {
              identifier: 'CREATE_FOLDER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Name',
                  configProperty: 'actionConfiguration.formData.name',
                  tooltipText: 'Desired name for the folder.',
                  subtitle: 'Folder name.  ',
                  requiresEncoding: true,
                  isRequired: true,
                  placeholderText: 'myNewFolder'
                },
                {
                  configProperty: 'actionConfiguration.formData.parentPath',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'parentPath',
                  label: 'Parent path',
                  subtitle: 'Path of the parent of the created folder. If not specified the folder will be created at the root level. ',
                  tooltipText: 'Path of the parent of the created folder. If not specified the folder will be created at the root level. parentFolderPath and parentFolderId cannot be set at the same time. ',
                  requiresEncoding: true,
                  placeholderText: '/myNewFolder1'
                }
              ],
              name: 'Create folder',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CREATE_FOLDER\'}}'
              }
            },
            {
              identifier: 'UPDATE_A_REDIRECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'urlRedirectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The ID of the target redirect. ',
                  subtitle: 'The ID of the target redirect.',
                  placeholderText: '71783843089',
                  label: 'URL redirect ID',
                  configProperty: 'actionConfiguration.formData.urlRedirectId',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  identifier: 'id',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the URL redirect was created. If you do not remember it, you can use get current redirects to find the id.',
                  subtitle: 'Unique ID of this URL redirect.',
                  placeholderText: '71783843089',
                  label: 'ID',
                  configProperty: 'actionConfiguration.formData.id',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  identifier: 'routePrefix',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The target incoming URL, path, or pattern to match for redirection. ',
                  subtitle: 'Target incoming URL',
                  label: 'Route prefix',
                  configProperty: 'actionConfiguration.formData.routePrefix',
                  placeholderText: '/the-original-source'
                },
                {
                  configProperty: 'actionConfiguration.formData.destination',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'destination',
                  isRequired: true,
                  label: 'Destination',
                  placeholderText: 'http://6255.sites.hubspot.com/destination-url',
                  requiresEncoding: true,
                  subtitle: 'Destination URL',
                  tooltipText: 'The destination URL, where the target URL should be redirected if it matches the routePrefix.'
                },
                {
                  configProperty: 'actionConfiguration.formData.redirectStyle',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'redirectStyle',
                  isRequired: true,
                  label: 'Redirect style',
                  placeholderText: '302',
                  subtitle: 'Type of redirect to create. ',
                  tooltipText: 'The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). '
                },
                {
                  configProperty: 'actionConfiguration.formData.isOnlyAfterNotFound',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isOnlyAfterNotFound',
                  initialValue: 'false',
                  label: ' Is only after not found',
                  placeholderText: 'false',
                  subtitle: 'If true the URL redirect mapping should apply. ',
                  tooltipText: 'Whether the URL redirect mapping should apply only if a live page on the URL isn\'t found. If False, the URL redirect mapping will take precedence over any existing page. ',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.isMatchFullUrl',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isMatchFullUrl',
                  isRequired: true,
                  label: 'Is match full URL',
                  subtitle: 'If  true the routePrefix  should match on the entire URL. ',
                  tooltipText: 'Whether the routePrefix  should match on the entire URL, including the domain. ',
                  initialValue: 'false',
                  placeholderText: 'false'
                },
                {
                  configProperty: 'actionConfiguration.formData.isMatchQueryString',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isMatchQueryString',
                  initialValue: 'false',
                  label: 'Is match query string',
                  placeholderText: 'false',
                  subtitle: 'If true the routePrefix should match the entire URL route.',
                  tooltipText: 'Whether the routePrefix  should match on the entire URL path, including the query string. ',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.isPattern',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isPattern',
                  initialValue: 'false',
                  label: 'Is pattern',
                  placeholderText: 'false',
                  subtitle: 'If true the routePrefix  should match based on pattern. ',
                  tooltipText: 'Whether the routePrefix  should match based on pattern. ',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.isTrailingSlashOptional',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isTrailingSlashOptional',
                  initialValue: 'false',
                  label: 'Is trailing slash optional',
                  placeholderText: 'false',
                  subtitle: 'If true a trailing slash will be ignored. ',
                  tooltipText: 'Whether a trailing slash will be ignored. ',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.isProtocolAgnostic',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isProtocolAgnostic',
                  initialValue: 'false',
                  label: 'Is protocol agnostic',
                  placeholderText: 'false',
                  subtitle: 'if true, the routePrefix  should match both HTTP and HTTPS protocols',
                  tooltipText: 'Whether the routePrefix  should match both HTTP and HTTPS protocols. ',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.precedence',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'precedence',
                  label: 'Precedence',
                  placeholderText: '1000000001',
                  subtitle: 'Prioritize URL redirection.',
                  tooltipText: 'Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the lower precedence will be used.',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.createdAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdAt',
                  label: 'Created at',
                  placeholderText: '2022-08-25T23:23:49.566Z',
                  subtitle: 'URL redirect was first created.',
                  tooltipText: 'When the url redirect was first created, in milliseconds since the epoch. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAt',
                  label: 'Updated at',
                  placeholderText: '2022-08-26T03:20:04.675Z',
                  subtitle: 'URL redirect was last updated.',
                  tooltipText: 'When the url redirect was last updated, in milliseconds since the epoch. '
                }
              ],
              name: 'Update a redirect',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UPDATE_A_REDIRECT\'}}'
              }
            },
            {
              identifier: 'GET_FILE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'fileId',
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the file was created. ',
                  subtitle: 'ID of the desired file. ',
                  label: 'File ID',
                  configProperty: 'actionConfiguration.formData.fileId',
                  isRequired: true,
                  placeholderText: '76030562986'
                }
              ],
              name: 'Get File',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_FILE\'}}'
              }
            },
            {
              identifier: 'ADD_NEW_ROW_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name. ',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true,
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.path',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'path',
                  label: 'Path',
                  placeholderText: 'test_path',
                  subtitle: 'The value for hs_path column.',
                  tooltipText: 'Value for hs_path  column, which will be used as slug in the dynamic pages.',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'name',
                  label: 'Name',
                  placeholderText: 'text_title',
                  subtitle: 'Value for hs_name column.',
                  tooltipText: 'Value for hs_name  column, which will be used as title in the dynamic pages. ',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.childTableId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'childTableId',
                  label: 'Child table ID',
                  subtitle: 'Value for the column child table id.',
                  tooltipText: 'Value for the column child table id.',
                  placeholderText: '5378084',
                  initialValue: 'null'
                },
                {
                  configProperty: 'actionConfiguration.formData.values',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'values',
                  isRequired: true,
                  label: 'Values',
                  placeholderText: '{     "text_column": "sample text value",     "multiselect": [       {         "id": "1",         "name": "Option 1",         "type": "option",         "order": 0       },       {         "id": "2",         "name": "Option 2",         "type": "option",         "order": 1       }     ]   }',
                  requiresEncoding: false,
                  subtitle: 'Key value pairs. ',
                  tooltipText: 'List of key value pairs with the column name and column value. type: array.'
                }
              ],
              name: 'Add New Row table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'ADD_NEW_ROW_TABLE\'}}'
              }
            },
            {
              identifier: 'GET_ROWS_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Column names to sort the results by. type: array.',
                  subtitle: 'Fields to use for sorting results. array with fields to use for sorting results.',
                  label: 'Sort',
                  configProperty: 'actionConfiguration.formData.sort'
                },
                {
                  identifier: 'after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'The token returned in the cursor field of the response.',
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  label: 'Next page token',
                  placeholderText: 'MTA%3D',
                  configProperty: 'actionConfiguration.formData.after'
                },
                {
                  identifier: 'limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  initialValue: '1000',
                  tooltipText: 'Maximum number of results to return. Default is 1000.',
                  subtitle: 'The maximum number of published tables to return. ',
                  label: 'Limit',
                  placeholderText: '1000',
                  configProperty: 'actionConfiguration.formData.limit'
                },
                {
                  identifier: 'properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Specify the column names to get results containing only the required columns instead of all column details. type: array.',
                  subtitle: 'Array with the column names.',
                  label: 'Properties',
                  configProperty: 'actionConfiguration.formData.properties'
                },
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name.',
                  label: 'Table ID or name',
                  placeholderText: 'test_table',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true,
                  requiresEncoding: true
                }
              ],
              name: 'Get rows table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_ROWS_TABLE\'}}'
              }
            },
            {
              identifier: 'GDPR_DELETE',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'objectType',
                  isRequired: true,
                  label: 'Object type',
                  subtitle: 'Valid object type for the CRM.  ',
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.).',
                  placeholderText: 'contacts'
                },
                {
                  configProperty: 'actionConfiguration.formData.objectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'objectId',
                  isRequired: true,
                  label: 'Object ID',
                  placeholderText: '201',
                  subtitle: 'Identifier of the object. ',
                  tooltipText: 'Identifier that was used when the object was created. If you do not remember it, you can use list objects to find the id.'
                }
              ],
              name: 'GDPR Delete',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GDPR_DELETE\'}}'
              }
            },
            {
              identifier: 'CLONE_ROW',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name.',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  placeholderText: 'test_table'
                },
                {
                  identifier: 'rowId',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The ID of the row.',
                  subtitle: 'Row ID.',
                  label: 'Row ID',
                  configProperty: 'actionConfiguration.formData.rowId',
                  placeholderText: '5378084'
                }
              ],
              name: 'Clone Row',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CLONE_ROW\'}}'
              }
            },
            {
              identifier: 'CHECK_FOLDER_UPDATE_STATUS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'taskId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'Task ID of folder update. ',
                  subtitle: 'ID given by the response when updating a folder. ',
                  label: 'Task ID',
                  placeholderText: 'AUhEIQ.AAAAEUzKAoI.V3DwstkzRO-PxOjIVjrW5Q',
                  configProperty: 'actionConfiguration.formData.taskId'
                }
              ],
              name: 'Check folder Update Status',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CHECK_FOLDER_UPDATE_STATUS\'}}'
              }
            },
            {
              identifier: 'UNPUBLISH_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'includeForeignIds',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Set this to true  to populate foreign ID values in the response.',
                  subtitle: 'If true, populate foreign ID values in the response.',
                  label: 'Include foreign IDs',
                  placeholderText: 'false',
                  configProperty: 'actionConfiguration.formData.includeForeignIds'
                },
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name to unpublish.',
                  label: 'Table ID or name',
                  placeholderText: 'test_table.',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true
                }
              ],
              name: 'Unpublish table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UNPUBLISH_TABLE\'}}'
              }
            },
            {
              identifier: 'GET_CURRENT_DOMAINS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'createdAt',
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Only return domains created at this date. ',
                  subtitle: 'Return domains created at this date. Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  label: 'Created at',
                  configProperty: 'actionConfiguration.formData.createdAt',
                  placeholderText: '2022-02-24T23:18:38.806Z'
                },
                {
                  identifier: 'createdAfter',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Only return domains created after this date. ',
                  subtitle: 'Return domains created after this date. Format: YYYY-MM-DDThh:mm:ss.sZ. ',
                  label: 'Created after',
                  configProperty: 'actionConfiguration.formData.createdAfter',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.createdBefore',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdBefore',
                  label: 'Created before',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains created before this date. Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return domains created before this date. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAt',
                  label: 'Updated at',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains updated at this date. Format YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return domains updated at this date. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAfter',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAfter',
                  label: 'Updated after',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains updated after this date.  Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return domains updated after this date. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedBefore',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedBefore',
                  label: 'Updated before',
                  placeholderText: '2022-02-24T23:18:38.806Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains updated before this date.  Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return domains updated before this date. '
                },
                {
                  configProperty: 'actionConfiguration.formData.sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'sort',
                  label: 'Sort',
                  requiresEncoding: true,
                  subtitle: 'Column names to sort the results by.',
                  tooltipText: 'Specifies the column names to sort the results by. type: array.'
                },
                {
                  configProperty: 'actionConfiguration.formData.properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'properties',
                  label: 'Properties',
                  requiresEncoding: true,
                  subtitle: 'Comma separated list of the properties to be returned in the response.',
                  tooltipText: 'A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignore. type: array.'
                },
                {
                  configProperty: 'actionConfiguration.formData.after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'after',
                  label: 'Next page token',
                  placeholderText: 'MQ%3D%3D',
                  requiresEncoding: true,
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  tooltipText: 'The token returned in the cursor field of the response.'
                },
                {
                  configProperty: 'actionConfiguration.formData.before',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'before',
                  label: 'Before page token',
                  placeholderText: 'MQ%3D%3D.',
                  requiresEncoding: true,
                  subtitle: 'To obtain the token look for the next page token or before field, in the response.',
                  tooltipText: 'The token returned in the cursor field of the response.'
                },
                {
                  configProperty: 'actionConfiguration.formData.limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'limit',
                  initialValue: '1000',
                  isRequired: false,
                  label: 'Limit',
                  placeholderText: '1000',
                  requiresEncoding: false,
                  subtitle: 'The maximum number of published tables to return. ',
                  tooltipText: 'Maximum number of results to return. Default is 1000.'
                },
                {
                  configProperty: 'actionConfiguration.formData.archived',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'archived',
                  initialValue: 'false',
                  label: 'Archived',
                  placeholderText: 'false',
                  subtitle: 'Whether to return only archived results.',
                  tooltipText: 'Specifies whether to return archived tables. Defaults to false. '
                }
              ],
              name: 'Get current Domains',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_CURRENT_DOMAINS\'}}'
              }
            },
            {
              identifier: 'CREATE_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'name',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Name that will be used to identify the table when it is created.',
                  subtitle: 'Name of the table.',
                  placeholderText: 'test_table',
                  label: 'Name',
                  configProperty: 'actionConfiguration.formData.name',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.label',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'label',
                  isRequired: true,
                  label: 'Label',
                  placeholderText: 'Test table',
                  requiresEncoding: false,
                  subtitle: 'Label of the resulting table.',
                  tooltipText: 'Label to represent the table name when it is created.'
                },
                {
                  configProperty: 'actionConfiguration.formData.useForPages',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'useForPages',
                  initialValue: 'false',
                  label: 'Use for pages',
                  placeholderText: 'false',
                  subtitle: 'If true, the table can be used to create dynamic pages.',
                  tooltipText: 'Whether the table can be used for creation of dynamic pages. '
                },
                {
                  configProperty: 'actionConfiguration.formData.columns',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'columns',
                  isRequired: true,
                  label: 'Columns',
                  requiresEncoding: false,
                  subtitle: 'List of columns in the table.',
                  tooltipText: 'List of columns in the table. Refer Hubspot documentation to create the columns, all column fields are required (id, name, label, type, options). in options you can add multi-columns. type: array'
                },
                {
                  configProperty: 'actionConfiguration.formData.allowPublicApiAccess',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'allowPublicApiAccess',
                  initialValue: 'false',
                  label: 'Allow public API access',
                  placeholderText: 'false',
                  requiresEncoding: false,
                  subtitle: 'If true, the table can be read by public without authorization.',
                  tooltipText: 'Whether the table can be read by public without authorization. '
                },
                {
                  configProperty: 'actionConfiguration.formData.allowChildTables',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'allowChildTables',
                  initialValue: 'false',
                  label: 'Allow child tables',
                  placeholderText: 'false',
                  subtitle: 'If true, child tables can be created.',
                  tooltipText: 'Whether child tables can be created.'
                },
                {
                  configProperty: 'actionConfiguration.formData.enableChildTablePages',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'enableChildTablePages',
                  initialValue: 'false',
                  label: 'Enable child table pages',
                  placeholderText: 'false',
                  subtitle: 'If true, create multi-level dynamic pages using child tables. ',
                  tooltipText: 'Create multi-level dynamic pages using child tables. '
                },
                {
                  configProperty: 'actionConfiguration.formData.foreignTableId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'foreignTableId',
                  initialValue: 'null',
                  label: 'Foreign table ID',
                  placeholderText: '5378084',
                  subtitle: 'ID of another table to which the column refers/points to.',
                  tooltipText: 'ID of another table to which the column refers/points to. '
                },
                {
                  configProperty: 'actionConfiguration.formData.foreignColumnId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'foreignColumnId',
                  initialValue: 'null',
                  label: 'Foreign column ID',
                  placeholderText: '5378084',
                  subtitle: 'Column ID from another table. ',
                  tooltipText: 'ID of a column from another table to which the column refers/points to. '
                },
                {
                  configProperty: 'actionConfiguration.formData.dynamicMetaTags',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'dynamicMetaTags',
                  initialValue: '{}',
                  label: 'Dynamic meta tags',
                  placeholderText: '{}',
                  requiresEncoding: false,
                  subtitle: 'Key value pairs. ',
                  tooltipText: 'The key value pairs of the metadata fields with the associated column ids. type: array.'
                }
              ],
              name: 'Create table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CREATE_TABLE\'}}'
              }
            },
            {
              identifier: 'GET_DETAILS_PUBLISHED_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'archived',
                  requiresEncoding: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Specifies whether to return archived tables. Defaults to false. ',
                  subtitle: 'If true, return archived results.',
                  placeholderText: 'false',
                  label: 'Archived',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.archived'
                },
                {
                  identifier: 'includeForeignIds',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Set this to true to populate foreign ID values in the result. ',
                  subtitle: 'If true, populate foreign ID values in the result. ',
                  placeholderText: 'false',
                  label: 'Include foreign IDs',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.includeForeignIds'
                },
                {
                  identifier: 'tableIdOrName',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table name or ID to return  details.',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName'
                }
              ],
              name: 'Get Details published table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_DETAILS_PUBLISHED_TABLE\'}}'
              }
            },
            {
              identifier: 'SEARCH_FILE',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'properties',
                  label: 'Properties',
                  subtitle: 'Desired file properties in the return object.',
                  tooltipText: 'Desired file properties in the return object. type: array',
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'after',
                  label: 'Next page token',
                  placeholderText: ' AAAAAQ',
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  tooltipText: 'The token returned in the cursor field of the response.',
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.before',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'before',
                  label: 'Before page token',
                  placeholderText: ' AAAAAQ',
                  requiresEncoding: true,
                  subtitle: 'To obtain the token look for the next page token or before field, in the response.',
                  tooltipText: 'The token returned in the cursor field of the response.'
                },
                {
                  configProperty: 'actionConfiguration.formData.limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'limit',
                  label: 'Limit',
                  subtitle: 'The maximum number of result per page. ',
                  tooltipText: 'Maximum number of results to return. Default is 100.',
                  initialValue: '100',
                  placeholderText: '10'
                },
                {
                  configProperty: 'actionConfiguration.formData.sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'sort',
                  label: 'Sort',
                  requiresEncoding: true,
                  subtitle: 'Columns names to sort the result by.',
                  tooltipText: 'Sort files by a given field. type: array'
                },
                {
                  configProperty: 'actionConfiguration.formData.id',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'id',
                  label: 'ID',
                  subtitle: 'Search files by given ID. ',
                  tooltipText: 'Identifier of the file',
                  placeholderText: '74498869791'
                },
                {
                  configProperty: 'actionConfiguration.formData.createdAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdAt',
                  label: 'Created at',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  requiresEncoding: true,
                  subtitle: 'Return files created before this date. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  tooltipText: 'Search files by time of creation.'
                },
                {
                  configProperty: 'actionConfiguration.formData.createdAtLte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdAtLte',
                  label: 'Created at Lte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  subtitle: 'Return files created before this date in Lte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  tooltipText: 'Search files by time of creation in Lte format.',
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.createdAtGte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdAtGte',
                  label: 'Created at Gte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  requiresEncoding: true,
                  subtitle: 'Return files created before this date in Gte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  tooltipText: 'Search files by time of creation in Gte format. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAt',
                  label: 'Updated at',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  requiresEncoding: true,
                  subtitle: 'Return files updated at this date. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  tooltipText: 'Search files by time of latest updated. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAtLte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAtLte',
                  label: 'Updated at Lte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  requiresEncoding: true,
                  subtitle: 'Return files created before this date in Lte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  tooltipText: 'Search files by time of latest updated in Lte.'
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAtGte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAtGte',
                  label: 'Updated at Gte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  requiresEncoding: true,
                  subtitle: 'Return files updated at this date in Gte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  tooltipText: 'Search files by time of latest updated in Gte. '
                },
                {
                  configProperty: 'actionConfiguration.formData.name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'name',
                  label: 'Name',
                  placeholderText: 'test-file',
                  requiresEncoding: true,
                  subtitle: 'Search for files containing the given name.',
                  tooltipText: 'Search for files containing the given name. '
                },
                {
                  configProperty: 'actionConfiguration.formData.path',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'path',
                  label: 'Path',
                  placeholderText: '/myNewFolder',
                  subtitle: 'Search files by path of the file',
                  tooltipText: 'Search files by path. '
                },
                {
                  configProperty: 'actionConfiguration.formData.parentFolderId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'parentFolderId',
                  label: 'Parent folder ID',
                  placeholderText: '68720958502',
                  subtitle: 'Search files within given folder ID.',
                  tooltipText: 'Search files within given folder ID. '
                },
                {
                  configProperty: 'actionConfiguration.formData.size',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'size',
                  label: 'Size',
                  placeholderText: '187158',
                  subtitle: 'Query by file size. ',
                  tooltipText: 'Query by file size.'
                },
                {
                  configProperty: 'actionConfiguration.formData.height',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'height',
                  label: 'Height',
                  placeholderText: '633',
                  subtitle: 'Search files by height of image or video. ',
                  tooltipText: 'Search files by height of image or video. '
                },
                {
                  configProperty: 'actionConfiguration.formData.width',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'width',
                  label: 'Width',
                  placeholderText: '1206',
                  subtitle: 'Search files by width of image or video. ',
                  tooltipText: 'Search files by width of image or video. '
                },
                {
                  configProperty: 'actionConfiguration.formData.enconding',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'enconding',
                  label: 'Enconding',
                  placeholderText: 'png',
                  requiresEncoding: true,
                  subtitle: 'Search files with specified encoding.',
                  tooltipText: 'Search files with specified encoding. '
                },
                {
                  configProperty: 'actionConfiguration.formData.type',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'type',
                  label: 'Type',
                  placeholderText: 'IMG',
                  requiresEncoding: true,
                  subtitle: 'Filter by provided file type. ',
                  tooltipText: 'Filter by provided file type. '
                },
                {
                  configProperty: 'actionConfiguration.formData.extension',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'extension',
                  label: 'Extension',
                  placeholderText: 'png',
                  requiresEncoding: true,
                  subtitle: 'Search files by given extension.',
                  tooltipText: 'Search files by given extension. '
                },
                {
                  configProperty: 'actionConfiguration.formData.url',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'url',
                  label: 'URL',
                  placeholderText: 'https://21513.fs1.hubspotusercontent-na1.net/hubfs/215149/myNewFolder/test-file.png',
                  subtitle: 'Search for given URL.',
                  tooltipText: 'Search for given URL. '
                },
                {
                  configProperty: 'actionConfiguration.formData.isUsableInContent',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'isUsableInContent',
                  initialValue: 'false',
                  label: 'Is usable in content',
                  placeholderText: 'false',
                  subtitle: 'If true, shows files that have been marked to be used in new content. ',
                  tooltipText: 'If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content. '
                },
                {
                  configProperty: 'actionConfiguration.formData.allowsAnonymousAccess',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'allowsAnonymousAccess',
                  initialValue: 'false',
                  label: 'Allows anonymous access',
                  placeholderText: 'false',
                  subtitle: 'If \'true\' will show private files; if \'false\' will show public files. ',
                  tooltipText: 'If \'true\' will show private files; if \'false\' will show public files.'
                }
              ],
              name: 'Search File',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'SEARCH_FILE\'}}'
              }
            },
            {
              identifier: 'SEARCH_FOLDERS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'properties',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Properties that should be included in the returned folders.',
                  subtitle: 'Desired folder properties in the return object.',
                  label: 'Properties',
                  configProperty: 'actionConfiguration.formData.properties'
                },
                {
                  identifier: 'after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'The token returned in the cursor field of the response.',
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  label: 'Next page token',
                  placeholderText: ' AAAAAQ',
                  configProperty: 'actionConfiguration.formData.after'
                },
                {
                  identifier: 'before',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'The token returned in the cursor field of the response.',
                  subtitle: 'To obtain the token look for the next page token or before field, in the response.',
                  label: 'Before page token',
                  placeholderText: 'AAAAAQ',
                  configProperty: 'actionConfiguration.formData.before'
                },
                {
                  identifier: 'limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  initialValue: '10',
                  tooltipText: 'Maximum number of results to return. Default is 100.',
                  subtitle: 'The maximum number of result per page. ',
                  label: 'Limit',
                  placeholderText: '10',
                  configProperty: 'actionConfiguration.formData.limit'
                },
                {
                  identifier: 'sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending. type: array',
                  subtitle: 'Columns names to sort the result by.',
                  label: 'Sort',
                  configProperty: 'actionConfiguration.formData.sort'
                },
                {
                  identifier: 'id',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier of the folder',
                  subtitle: 'Search folder by given ID. ',
                  label: 'ID',
                  placeholderText: '74498869791',
                  configProperty: 'actionConfiguration.formData.id'
                },
                {
                  identifier: 'createdAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search for folders with the given creation timestamp. ',
                  subtitle: 'Return folders created before this date. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  label: 'CreatedAt',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  configProperty: 'actionConfiguration.formData.createdAt'
                },
                {
                  identifier: 'createdAtLte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search folders by time of creation in Lte format.',
                  subtitle: 'Return folders created before this date in Lte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  label: 'Created at Lte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  configProperty: 'actionConfiguration.formData.createdAtLte'
                },
                {
                  identifier: 'createdAtGte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search folders by time of creation in Gte format. ',
                  subtitle: 'Return folders created before this date in Gte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  label: 'Created at Gte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  configProperty: 'actionConfiguration.formData.createdAtGte'
                },
                {
                  identifier: 'updatedAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search for folder at given update timestamp. ',
                  subtitle: 'Return folders updated at this date. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  label: 'Updated at',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  configProperty: 'actionConfiguration.formData.updatedAt'
                },
                {
                  identifier: 'updatedAtLte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search folders by time of latest updated in Lte. ',
                  subtitle: 'Return folders updated at this date in Lte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  label: 'Updated at Lte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  configProperty: 'actionConfiguration.formData.updatedAtLte'
                },
                {
                  identifier: 'updatedAtGte',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search folders by time of latest updated in Gte. ',
                  subtitle: 'Return folders updated at this date in Gte. Format: YYYY-MM-DDThh:mm:ss.sZ',
                  label: 'Updated at Gte',
                  placeholderText: '2022-04-29T00:00:00.000Z',
                  configProperty: 'actionConfiguration.formData.updatedAtGte'
                },
                {
                  identifier: 'name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'Search for folders containing the specified name. ',
                  subtitle: 'Search for folders containing the given name.',
                  label: 'Name',
                  placeholderText: 'test-file',
                  configProperty: 'actionConfiguration.formData.name'
                },
                {
                  identifier: 'path',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Search folders by path. ',
                  subtitle: 'Search folders by path. ',
                  label: 'Path',
                  placeholderText: '/myNewFolder',
                  configProperty: 'actionConfiguration.formData.path'
                },
                {
                  identifier: 'parentFolderId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Search for folders with the given parent folder ID. ',
                  subtitle: 'Search folders given parent folder ID.',
                  label: 'Parent folder ID',
                  placeholderText: '68720958502',
                  configProperty: 'actionConfiguration.formData.parentFolderId'
                }
              ],
              name: 'Search folders',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'SEARCH_FOLDERS\'}}'
              }
            },
            {
              identifier: 'EXPORT_PUBLISHED_VERSION_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'format',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'The file format to export. Possible values include CSV, XLSX, and XLS. ',
                  subtitle: 'Format file to export.',
                  label: 'Format',
                  placeholderText: 'CSV',
                  configProperty: 'actionConfiguration.formData.format'
                },
                {
                  identifier: 'tableIdOrName',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name. ',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName'
                }
              ],
              name: 'Export published Version table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'EXPORT_PUBLISHED_VERSION_TABLE\'}}'
              }
            },
            {
              identifier: 'DELETE_FILE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'fileId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'File ID',
                  configProperty: 'actionConfiguration.formData.fileId',
                  isRequired: true,
                  tooltipText: 'Identifier that was used when the file was created. ',
                  subtitle: 'File ID to delete. ',
                  requiresEncoding: true,
                  placeholderText: '76030562986'
                }
              ],
              name: 'Delete File',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'DELETE_FILE\'}}'
              }
            },
            {
              identifier: 'PERMANENTLY_DELETE_ROWS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  isRequired: true,
                  requiresEncoding: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name.',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName'
                },
                {
                  identifier: 'inputs',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'ID rows that want to get. type: array.',
                  subtitle: 'Row ID. ',
                  placeholderText: '[”5378084”,”71003521”]',
                  label: 'Inputs',
                  configProperty: 'actionConfiguration.formData.inputs',
                  requiresEncoding: false
                }
              ],
              name: 'Permanently Delete rows',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'PERMANENTLY_DELETE_ROWS\'}}'
              }
            },
            {
              identifier: 'CLONE_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Name or ID of the table to be cloned.',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.newName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'newName',
                  label: 'New name',
                  placeholderText: 'test_new_table',
                  subtitle: 'Name for the cloned table. ',
                  tooltipText: 'New name for the cloned table. ',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.newLabel',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'newLabel',
                  label: 'New label',
                  placeholderText: 'Test New table',
                  subtitle: 'Name for the new label. ',
                  tooltipText: 'New label for the cloned table.',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.copyRows',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'copyRows',
                  isRequired: true,
                  label: 'Copy rows',
                  subtitle: 'If true, rows should be copied during cloning. ',
                  tooltipText: 'Specifies whether to copy the rows during clone. Default Value: false',
                  placeholderText: 'false',
                  initialValue: 'false'
                }
              ],
              name: 'Clone table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CLONE_TABLE\'}}'
              }
            },
            {
              identifier: 'UPDATE_OBJECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  configProperty: 'actionConfiguration.formData.objectType',
                  label: 'Object type',
                  placeholderText: 'contacts ',
                  subtitle: 'Valid object type for the CRM.',
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.)',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.objectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'objectId',
                  isRequired: true,
                  label: 'Object ID',
                  placeholderText: '201',
                  subtitle: 'Identifier of the object.',
                  tooltipText: 'Identifier that was used when the object was created. If you do not remember it, you can use list objects to find the id.'
                },
                {
                  configProperty: 'actionConfiguration.formData.properties',
                  controlType: 'QUERY_DYNAMIC_TEXT',
                  identifier: 'properties',
                  isRequired: true,
                  label: 'Properties',
                  placeholderText: '{ "company": "Elv",    "email": "test@elv.net",    "firstname": "Test",         "lastname": "Cooper", "phone": "(877)112-05252", "website": "biglytics.net"}',
                  requiresEncoding: false,
                  subtitle: 'Json format the properties.',
                  tooltipText: 'A properties object for the specific objecType.'
                }
              ],
              name: 'Update object',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UPDATE_OBJECT\'}}'
              }
            },
            {
              identifier: 'DELETE_FOLDER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'folderId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'Identifier of folder to delete. ',
                  subtitle: 'Folder ID to delete.',
                  label: 'Folder ID',
                  placeholderText: '74302751362',
                  configProperty: 'actionConfiguration.formData.folderId'
                }
              ],
              name: 'Delete folder',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'DELETE_FOLDER\'}}'
              }
            },
            {
              identifier: 'DELETE_A_REDIRECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'urlRedirectId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'URL redirect ID',
                  configProperty: 'actionConfiguration.formData.urlRedirectId',
                  isRequired: true,
                  requiresEncoding: true,
                  tooltipText: 'Identifier that was used when the URL redirect was created. If you do not remember it, you can use get current redirects to find the id.',
                  subtitle: 'Write the ID of the target redirect.',
                  placeholderText: '71783843089'
                }
              ],
              name: 'Delete a redirect',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'DELETE_A_REDIRECT\'}}'
              }
            },
            {
              identifier: 'REPLACE_EXISTING_ROW',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name.',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true,
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.rowId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'rowId',
                  label: 'Row ID',
                  placeholderText: '5378084',
                  subtitle: 'Row ID. ',
                  tooltipText: 'The ID of the row.',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.path',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'path',
                  label: 'Path',
                  placeholderText: 'test_path',
                  subtitle: 'The value for hs_path column. ',
                  tooltipText: 'Value for hs_path  column, which will be used as slug in the dynamic pages. ',
                  requiresEncoding: false,
                  initialValue: 'null'
                },
                {
                  configProperty: 'actionConfiguration.formData.name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'name',
                  label: 'Name',
                  subtitle: 'Write the value for hs_name column.',
                  tooltipText: 'Specifies the value for hs_name  column, which will be used as title in the dynamic pages. (String)',
                  placeholderText: 'text_title',
                  initialValue: 'null',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.childTableId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'childTableId',
                  label: 'Child table ID',
                  placeholderText: '5378084',
                  subtitle: 'Value for the column child table id. ',
                  tooltipText: 'Value for the column child table id. ',
                  initialValue: 'null'
                },
                {
                  configProperty: 'actionConfiguration.formData.values',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'values',
                  isRequired: true,
                  label: 'Values',
                  placeholderText: '{     "text_column": "sample text value",     "multiselect": [       {         "id": "1",         "name": "Option 1",         "type": "option",         "order": 0       },       {         "id": "2",         "name": "Option 2",         "type": "option",         "order": 1       }     ]   }',
                  requiresEncoding: false,
                  subtitle: 'Key value pairs. ',
                  tooltipText: 'List of key value pairs with the column name and column value. type: array.'
                }
              ],
              name: 'Replace Existing Row',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'REPLACE_EXISTING_ROW\'}}'
              }
            },
            {
              identifier: 'RETRIEVE_LIST_USERS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Limit',
                  configProperty: 'actionConfiguration.formData.limit',
                  initialValue: '10',
                  placeholderText: '10',
                  tooltipText: 'The number of users to retrieve. ',
                  subtitle: 'The maximum number of results per page.'
                },
                {
                  identifier: 'after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'Next page token',
                  configProperty: 'actionConfiguration.formData.after',
                  requiresEncoding: true,
                  tooltipText: 'The token returned in the cursor field of the response.',
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  placeholderText: 'Q0o3TjhRVQ%3D%3D'
                }
              ],
              name: 'Retrieve list users',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'RETRIEVE_LIST_USERS\'}}'
              }
            },
            {
              identifier: 'ARCHIVE_TABLE',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'tableIdOrName',
                  label: 'Table ID or name',
                  requiresEncoding: true,
                  subtitle: 'Table name or ID to archive.',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  isRequired: true,
                  placeholderText: 'test_table'
                }
              ],
              name: 'Archive table',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'ARCHIVE_TABLE\'}}'
              }
            },
            {
              identifier: 'PERMANENTLY_DELETE_A_ROW',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  isRequired: true,
                  requiresEncoding: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name.',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName'
                },
                {
                  identifier: 'rowId',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The ID of the row. ',
                  subtitle: 'Row ID.  ',
                  placeholderText: '5378084',
                  label: 'Row ID',
                  configProperty: 'actionConfiguration.formData.rowId'
                }
              ],
              name: 'Permanently Delete a Row',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'PERMANENTLY_DELETE_A_ROW\'}}'
              }
            },
            {
              identifier: 'GET_SET_ROWS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table ID or name. ',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true,
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.inputs',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'inputs',
                  label: 'Inputs',
                  placeholderText: '[”5378084”,”71003521”]',
                  subtitle: 'List with row IDs ',
                  tooltipText: 'ID rows that want to get. type: array.',
                  isRequired: true,
                  requiresEncoding: false
                }
              ],
              name: 'Get Set rows',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_SET_ROWS\'}}'
              }
            },
            {
              identifier: 'CREATE_A_REDIRECT',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'routePrefix',
                  isRequired: true,
                  requiresEncoding: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The incoming URL, path, or pattern to match. If you do not remember how its looks, you can use get current redirects to find routePrefix examples.',
                  subtitle: 'Incoming URL, path or pattern to match.',
                  placeholderText: '/the-original-source',
                  label: 'Route prefix',
                  configProperty: 'actionConfiguration.formData.routePrefix'
                },
                {
                  identifier: 'destination',
                  isRequired: true,
                  requiresEncoding: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The destination URL, where the target URL should be redirected if it matches the routePrefix. If you do not remember how its looks, you can use get current redirects to find destination examples.',
                  subtitle: 'Destination URL',
                  placeholderText: 'http://62515.sites.hubspot.com/the-destination-url',
                  label: 'Destination',
                  configProperty: 'actionConfiguration.formData.destination'
                },
                {
                  identifier: 'redirectStyle',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). ',
                  subtitle: 'Type of redirect to create. ',
                  placeholderText: '301',
                  label: 'Redirect style',
                  initialValue: '301',
                  configProperty: 'actionConfiguration.formData.redirectStyle'
                },
                {
                  identifier: 'precedence',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the lower precedence will be used. ',
                  subtitle: 'Prioritize URL redirection. ',
                  placeholderText: '0',
                  label: 'Precedence',
                  initialValue: '0',
                  configProperty: 'actionConfiguration.formData.precedence'
                },
                {
                  identifier: 'isOnlyAfterNotFound',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Whether the URL redirect mapping should apply only if a live page on the URL isn\'t found. If False, the URL redirect mapping will take precedence over any existing page.',
                  subtitle: 'If true, URL redirect mapping should apply only if a live page on the URL isn\'t found. ',
                  placeholderText: 'false',
                  label: ' Is only after not found',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.isOnlyAfterNotFound'
                },
                {
                  identifier: 'isMatchFullUrl',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'If true, the \'routePrefix\' should match on the entire URL including the domain. ',
                  subtitle: 'If true, the \'routePrefix\' should match on the entire URL including the domain.',
                  placeholderText: 'false',
                  label: 'Is match full URL',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.isMatchFullUrl'
                },
                {
                  identifier: 'isMatchQueryString',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'If true, the \'routePrefix\' should match on the entire URL path including the query string. ',
                  subtitle: 'If true \'routePrefix\' should match on the entire URL path. ',
                  placeholderText: 'false',
                  label: 'Is match query string',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.isMatchQueryString'
                },
                {
                  identifier: 'isPattern',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Set to true if you are creating a flexible pattern based URL mapping. ',
                  subtitle: 'If true, create a flexible pattern based URL mapping. ',
                  placeholderText: 'false',
                  label: 'Is pattern',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.isPattern'
                },
                {
                  identifier: 'isTrailingSlashOptional',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Whether a trailing slash will be ignored. ',
                  subtitle: 'If true, a trailing slash will be ignored. ',
                  placeholderText: 'false',
                  label: 'Is trailing slash optional ',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.isTrailingSlashOptional'
                },
                {
                  identifier: 'isProtocolAgnostic',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Whether the routePrefix  should match both HTTP and HTTPS protocols. ',
                  subtitle: 'If true,  the routePrefixmatch both HTTP and HTTPS protocols. ',
                  placeholderText: 'false',
                  label: 'Is protocol agnostic',
                  initialValue: 'false',
                  configProperty: 'actionConfiguration.formData.isProtocolAgnostic'
                }
              ],
              name: 'Create a redirect',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CREATE_A_REDIRECT\'}}'
              }
            },
            {
              identifier: 'RETRIEVES_USER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'idProperty',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'ID property',
                  configProperty: 'actionConfiguration.formData.idProperty',
                  tooltipText: 'The name of a property with unique user values. Valid values are USER_ID(default) or EMAIL.',
                  subtitle: 'Name of a property with unique user values.'
                },
                {
                  identifier: 'userId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'User ID',
                  configProperty: 'actionConfiguration.formData.userId',
                  isRequired: true,
                  tooltipText: 'Identifier of user to retrieve. ',
                  subtitle: 'Identifier of user to retrieve. ',
                  placeholderText: '13358977'
                }
              ],
              name: 'Retrieves User',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'RETRIEVES_USER\'}}'
              }
            },
            {
              identifier: 'UPDATE_EXISTING_ROW',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'tableIdOrName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Identifier that was used when the table was created. If you do not remember it, you can use get published table to find the table ID or the name.',
                  subtitle: 'Table name or ID to return  details.',
                  placeholderText: 'test_table',
                  label: 'Table ID or name',
                  configProperty: 'actionConfiguration.formData.tableIdOrName',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.rowId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'rowId',
                  label: 'Row ID',
                  placeholderText: '5378084',
                  subtitle: 'Row ID. ',
                  tooltipText: 'The ID of the row. ',
                  isRequired: true
                },
                {
                  configProperty: 'actionConfiguration.formData.path',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'path',
                  label: 'Path',
                  placeholderText: 'test_path',
                  subtitle: 'The value for hs_path column.',
                  tooltipText: 'Value for hs_path  column, which will be used as slug in the dynamic pages. ',
                  requiresEncoding: false,
                  initialValue: 'null'
                },
                {
                  configProperty: 'actionConfiguration.formData.name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'name',
                  label: 'Name',
                  subtitle: 'Value for hs_name column.',
                  tooltipText: 'Value for hs_name  column, which will be used as title in the dynamic pages.',
                  placeholderText: 'text_title',
                  initialValue: 'null',
                  requiresEncoding: false
                },
                {
                  configProperty: 'actionConfiguration.formData.childTableId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'childTableId',
                  label: 'Child table ID',
                  placeholderText: '5378084',
                  subtitle: 'Value for the column child table id.',
                  tooltipText: 'Value for the column child table id.',
                  initialValue: 'null'
                },
                {
                  configProperty: 'actionConfiguration.formData.values',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'values',
                  isRequired: true,
                  label: 'Values',
                  placeholderText: '{     "text_column": "sample text value",     "multiselect": [       {         "id": "1",         "name": "Option 1",         "type": "option",         "order": 0       },       {         "id": "2",         "name": "Option 2",         "type": "option",         "order": 1       }     ]   }',
                  requiresEncoding: false,
                  subtitle: 'Key value pairs. ',
                  tooltipText: 'List of key value pairs with the column name and column value. type: array.'
                }
              ],
              name: 'Update Existing Row',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UPDATE_EXISTING_ROW\'}}'
              }
            },
            {
              identifier: 'LIST_OBJECTS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'objectType',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  tooltipText: 'Valid object type for the CRM (contacts, companies, deals, tickets, etc.)',
                  subtitle: 'Valid object type for the CRM.',
                  label: 'Object type',
                  placeholderText: 'contacts',
                  configProperty: 'actionConfiguration.formData.objectType'
                }
              ],
              name: 'List objects',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'LIST_OBJECTS\'}}'
              }
            },
            {
              identifier: 'GET_PUBLISHED_TABLES',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'sort',
                  label: 'Sort',
                  subtitle: 'Fields to use for sorting results. array with fields to use for sorting results.',
                  tooltipText: 'Fields to use for sorting results. Valid fields are name, createdAt, updatedAt, createdBy, updatedBy. createdAt will be used by default. type: array.',
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.after',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'after',
                  label: 'Next page token',
                  subtitle: 'To obtain the token look for the next page token or after field, in the response.',
                  tooltipText: 'The token returned in the cursor field of the response.',
                  requiresEncoding: true,
                  placeholderText: 'MTA%3D'
                },
                {
                  configProperty: 'actionConfiguration.formData.limit',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'limit',
                  initialValue: '1000',
                  label: 'Limit',
                  placeholderText: '10',
                  subtitle: 'The maximum number of published tables to return. ',
                  tooltipText: 'Maximum number of results to return. Default is 1000.'
                },
                {
                  configProperty: 'actionConfiguration.formData.createdAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdAt',
                  label: 'Created at',
                  placeholderText: '2019-03-15T21:20:51.556Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains created at this date. Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return tables created at exactly the specified time. '
                },
                {
                  configProperty: 'actionConfiguration.formData.createdAfter',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdAfter',
                  label: 'Created after',
                  placeholderText: '2019-03-15T21:20:51.556Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains created after this date. Format: YYYY-MM-DDThh:mm:ss.sZ. ',
                  tooltipText: 'Only return tables created after the specified time. '
                },
                {
                  configProperty: 'actionConfiguration.formData.createdBefore',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'createdBefore',
                  label: 'Created before',
                  placeholderText: '2019-03-15T21:20:51.556Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains created before this date. Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return tables created before the specified time. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAt',
                  label: 'Updated at',
                  placeholderText: '2020-04-02T16:00:43.880Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains updated at this date. Format YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return tables last updated at exactly the specified time. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedAfter',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedAfter',
                  label: 'Updated after',
                  placeholderText: '2020-04-02T16:00:43.880Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains updated after this date.  Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return tables last updated after the specified time. '
                },
                {
                  configProperty: 'actionConfiguration.formData.updatedBefore',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'updatedBefore',
                  label: 'Updated before',
                  placeholderText: '2020-04-02T16:00:43.880Z',
                  requiresEncoding: true,
                  subtitle: 'Return domains updated before this date.  Format: YYYY-MM-DDThh:mm:ss.sZ.',
                  tooltipText: 'Only return tables last updated before the specified time. '
                },
                {
                  configProperty: 'actionConfiguration.formData.archived',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'archived',
                  initialValue: 'false',
                  label: 'Archive',
                  placeholderText: 'false',
                  requiresEncoding: false,
                  subtitle: 'Whether to return only archived results.',
                  tooltipText: 'Specifies whether to return archived tables. Defaults to false. '
                }
              ],
              name: 'Get published tables',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_PUBLISHED_TABLES\'}}'
              }
            },
            {
              identifier: 'UPDATE_FOLDER_PROPERTIES',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'id',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  tooltipText: 'Identifier of the folder to change. ',
                  subtitle: 'Folder ID to change.',
                  label: 'ID',
                  placeholderText: '74302751362',
                  configProperty: 'actionConfiguration.formData.id'
                },
                {
                  identifier: 'name',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'New name. If specified the folder\'s name and fullPath will change. All children of the folder will be updated accordingly.',
                  subtitle: 'New folder name. ',
                  label: 'Name',
                  placeholderText: 'myNewFolder',
                  configProperty: 'actionConfiguration.formData.name'
                },
                {
                  identifier: 'parentFolderId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  requiresEncoding: true,
                  tooltipText: 'New parent folder ID. If changed, the folder and all it\'s children will be moved into the specified folder. parentFolderId and parentFolderPath cannot be specified at the same time.  ',
                  subtitle: 'New parent folder ID. ',
                  label: 'Parent folder ID',
                  placeholderText: '/myFolder',
                  configProperty: 'actionConfiguration.formData.parentFolderId'
                }
              ],
              name: 'Update folder Properties',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UPDATE_FOLDER_PROPERTIES\'}}'
              }
            },
            {
              identifier: 'GET_SINGLE_DOMAINS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'archived',
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Specifies whether to return archived tables. Defaults to false. ',
                  subtitle: 'Whether to return only archived results.',
                  label: 'Archived',
                  configProperty: 'actionConfiguration.formData.archived',
                  placeholderText: 'false',
                  initialValue: 'false'
                },
                {
                  identifier: 'Id',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The unique ID of the domain. ',
                  subtitle: 'The ID or name of the domain.',
                  label: 'ID',
                  configProperty: 'actionConfiguration.formData.Id',
                  requiresEncoding: true,
                  placeholderText: '789442651352'
                }
              ],
              name: 'Get Single Domains',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'GET_SINGLE_DOMAINS\'}}'
              }
            },
            {
              identifier: 'MODIFY_USER',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'idProperty',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'ID property',
                  configProperty: 'actionConfiguration.formData.idProperty',
                  tooltipText: 'The name of a property with unique user values. Valid values are USER_ID(default) or EMAIL. ',
                  subtitle: 'Name of a property with unique user values.'
                },
                {
                  identifier: 'userId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  label: 'User ID',
                  configProperty: 'actionConfiguration.formData.userId',
                  isRequired: true,
                  tooltipText: 'Identifier of user to retrieve. ',
                  subtitle: 'Identifier of user to retrieve.',
                  placeholderText: '13358977'
                },
                {
                  configProperty: 'actionConfiguration.formData.roleId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'roleId',
                  initialValue: 'null',
                  label: 'Role ID',
                  placeholderText: '310427',
                  tooltipText: 'The user\'s role. ',
                  subtitle: 'User role ID. '
                },
                {
                  configProperty: 'actionConfiguration.formData.primaryTeamId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'primaryTeamId',
                  initialValue: 'null',
                  label: 'Primary team ID',
                  placeholderText: '7824745',
                  tooltipText: 'The user\'s primary team. ',
                  subtitle: 'User primary team ID. '
                },
                {
                  configProperty: 'actionConfiguration.formData.secondaryTeamIds',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'secondaryTeamIds',
                  initialValue: '[]',
                  label: 'Secondary team IDs',
                  placeholderText: '[”7885423”,”78525623”]',
                  tooltipText: 'The user\'s additional teams. type: array',
                  subtitle: 'User additional teams IDs.  '
                }
              ],
              name: 'Modify User',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'MODIFY_USER\'}}'
              }
            }
          ]
        },
        datasourceUiConfig: {
          form: [
            {
              sectionName: 'Connection',
              children: [
                {
                  label: 'Authentication type',
                  description: 'Select the authentication type to use',
                  configProperty: 'datasourceConfiguration.authentication.authenticationType',
                  controlType: 'DROP_DOWN',
                  options: [
                    {
                      label: 'Bearer token',
                      value: 'bearerToken'
                    }
                  ]
                },
                {
                  identifier: 'bearerToken',
                  label: 'Bearer token',
                  configProperty: 'datasourceConfiguration.authentication.bearerToken',
                  controlType: 'INPUT_TEXT',
                  dataType: 'PASSWORD',
                  encrypted: true,
                  hidden: {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'bearerToken'
                  }
                }
              ]
            }
          ]
        },
        templates: {},
        remotePlugin: true
      },
      {
        id: '68a9b813de8cf11f80e4a89c',
        userPermissions: [],
        name: 'Twilio',
        type: 'REMOTE',
        packageName: 'saas-plugin',
        pluginName: 'twilio-1.2-plugin',
        iconLocation: 'https://assets.appsmith.com/integrations/twilio1.png',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/twilio#create-queries',
        responseType: 'JSON',
        version: '1.0',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: true,
        actionUiConfig: {
          editor: [
            {
              label: 'Commands',
              description: 'Select the method to run',
              configProperty: 'actionConfiguration.formData.command',
              controlType: 'DROP_DOWN',
              options: [
                {
                  index: 1,
                  label: 'Create message',
                  value: 'CREATE_MESSAGE'
                },
                {
                  index: 2,
                  label: 'Schedule message',
                  value: 'SCHEDULE_MESSAGE'
                },
                {
                  index: 3,
                  label: 'List message',
                  value: 'LIST_MESSAGE'
                },
                {
                  index: 4,
                  label: 'Fetch message',
                  value: 'FETCH_MESSAGE'
                },
                {
                  index: 5,
                  label: 'Delete message',
                  value: 'DELETE_MESSAGE'
                },
                {
                  index: 6,
                  label: 'Cancel message',
                  value: 'CANCEL_MESSAGE'
                }
              ]
            },
            {
              identifier: 'SCHEDULE_MESSAGE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'TWILIO_ACCOUNT_SID',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The SID of the account that will create the resource.',
                  subtitle: 'Specify the SID of the account. This is the same value used at datasource creation.',
                  label: 'Twilio account SID',
                  configProperty: 'actionConfiguration.formData.TWILIO_ACCOUNT_SID',
                  placeholderText: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                  identifier: 'MessagingServiceSid',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The SID of the messaging Service  used with the message. The value is null if a messaging Service was not used.',
                  subtitle: 'Specify the SID of the messaging Service used with the message.',
                  label: 'Messaging service SID',
                  configProperty: 'actionConfiguration.formData.MessagingServiceSid',
                  placeholderText: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                  identifier: 'To',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The destination phone number in E.164 format for SMS/MMS or channel user address for other 3rd-party channels.',
                  subtitle: 'Destination phone number',
                  label: 'To',
                  configProperty: 'actionConfiguration.formData.To',
                  placeholderText: '+123456789'
                },
                {
                  identifier: 'Body',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The message text. Can be up to 1,600 characters long.',
                  subtitle: 'Specify the message text',
                  placeholderText: 'Hi there',
                  label: 'Body',
                  configProperty: 'actionConfiguration.formData.Body',
                  isRequired: true,
                  requiresEncoding: true
                },
                {
                  configProperty: 'actionConfiguration.formData.SendAt',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'SendAt',
                  isRequired: true,
                  label: 'Send at',
                  placeholderText: '2021-11-30T20:36:27Z',
                  requiresEncoding: true,
                  subtitle: 'Define the time that Twilio will send the message. Must be in UTC format: YYYY-MM-DDTHH:MM:SSZ',
                  tooltipText: 'The time that Twilio will send the message. Must be in UTC format.'
                }
              ],
              name: 'Schedule message',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'SCHEDULE_MESSAGE\'}}'
              }
            },
            {
              identifier: 'LIST_MESSAGE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'To',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Read messages sent to only this phone number.',
                  subtitle: 'Destination phone number',
                  label: 'To',
                  configProperty: 'actionConfiguration.formData.To',
                  placeholderText: '+123456789',
                  requiresEncoding: true
                },
                {
                  identifier: 'From',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Read messages sent from only this phone number or alphanumeric sender ID.',
                  subtitle: 'Read messages sent from only this phone number.',
                  label: 'From',
                  configProperty: 'actionConfiguration.formData.From',
                  placeholderText: '+123456789',
                  requiresEncoding: true
                },
                {
                  identifier: 'DateSent',
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The date of the messages to show. Specify a date as YYYY-MM-DD in GMT to read only messages sent on this date. For example: 2009-07-06. ',
                  subtitle: 'Define the date of the messages to show',
                  label: 'DateSent',
                  configProperty: 'actionConfiguration.formData.DateSent',
                  placeholderText: 'YYYY-MM-DD'
                },
                {
                  identifier: 'PageSize',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Number of records to pull.',
                  subtitle: 'Write the number of records to pull',
                  placeholderText: '{{ table1.pageSize }}',
                  label: 'Page size',
                  configProperty: 'actionConfiguration.formData.PageSize',
                  requiresEncoding: false,
                  initialValue: '2'
                },
                {
                  configProperty: 'actionConfiguration.formData.TWILIO_ACCOUNT_SID',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'TWILIO_ACCOUNT_SID',
                  isRequired: true,
                  label: 'Twilio account SID',
                  placeholderText: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  subtitle: 'Specify the SID of the account. This is the same value used at datasource creation.',
                  tooltipText: 'The SID of the account that will fetch the resource.'
                }
              ],
              name: 'List message',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'LIST_MESSAGE\'}}'
              }
            },
            {
              identifier: 'FETCH_MESSAGE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'TWILIO_ACCOUNT_SID',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The SID of the account that will fetch the resource.',
                  subtitle: 'Specify the SID of the account. This is the same value used at datasource creation.',
                  placeholderText: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  label: 'Twilio account SID',
                  configProperty: 'actionConfiguration.formData.TWILIO_ACCOUNT_SID'
                },
                {
                  configProperty: 'actionConfiguration.formData.MESSAGE_SID',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'MESSAGE_SID',
                  isRequired: true,
                  label: 'Message SID',
                  placeholderText: 'MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  subtitle: 'Specify the SID of the messaging Service used with the message.',
                  tooltipText: 'The Twilio-provided string that uniquely identifies the message resource to fetch.'
                }
              ],
              name: 'Fetch message',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'FETCH_MESSAGE\'}}'
              }
            },
            {
              identifier: 'CREATE_MESSAGE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'TWILIO_ACCOUNT_SID',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The SID of the account that will create the resource.',
                  subtitle: 'Specify the SID of the account. This is the same value used at datasource creation.',
                  placeholderText: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  label: 'Twilio account SID',
                  configProperty: 'actionConfiguration.formData.TWILIO_ACCOUNT_SID'
                },
                {
                  configProperty: 'actionConfiguration.formData.To',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'To',
                  isRequired: true,
                  label: 'To',
                  placeholderText: '+123456789',
                  requiresEncoding: true,
                  subtitle: 'Destination phone number',
                  tooltipText: 'The destination phone number in E.164 format for SMS/MMS or channel user address for other 3rd-party channels.'
                },
                {
                  configProperty: 'actionConfiguration.formData.Fom',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'Fom',
                  isRequired: true,
                  label: 'From',
                  placeholderText: '+123456789',
                  requiresEncoding: true,
                  subtitle: 'Write a Twilio phone number',
                  tooltipText: 'A Twilio phone number in E.164 format, an alphanumeric sender ID, or a channel Endpoint address that is enabled for the type of message you want to send. Phone numbers or short codes purchased from Twilio also work here. You cannot, for example, spoof messages from a private cell phone number. If you are using messaging_service_sid, this parameter must be empty.'
                },
                {
                  configProperty: 'actionConfiguration.formData.Body',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'Body',
                  isRequired: true,
                  label: 'Body',
                  placeholderText: 'Hi there',
                  requiresEncoding: true,
                  subtitle: 'Specify the message text',
                  tooltipText: 'The message text. Can be up to 1,600 characters long.'
                }
              ],
              name: 'Create message',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CREATE_MESSAGE\'}}'
              }
            },
            {
              identifier: 'CANCEL_MESSAGE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'TWILIO_ACCOUNT_SID',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  tooltipText: 'The SID of the account that will update the resource.',
                  subtitle: 'Specify the SID of the account. This is the same value used at datasource creation.',
                  label: 'Twilio account SID',
                  placeholderText: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  configProperty: 'actionConfiguration.formData.TWILIO_ACCOUNT_SID'
                },
                {
                  identifier: 'MESSAGE_SID',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  tooltipText: 'The Twilio-provided string that uniquely identifies the message resource to fetch.',
                  subtitle: 'Specify the SID of the messaging Service used with the message.',
                  label: 'Message SID',
                  placeholderText: 'SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  configProperty: 'actionConfiguration.formData.MESSAGE_SID'
                }
              ],
              name: 'Cancel message',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CANCEL_MESSAGE\'}}'
              }
            },
            {
              identifier: 'DELETE_MESSAGE',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'TWILIO_ACCOUNT_SID',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The SID of the account that created the message resources to delete.',
                  subtitle: 'Specify the SID of the account. This is the same value used at datasource creation.',
                  placeholderText: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  label: 'Twilio account SID',
                  configProperty: 'actionConfiguration.formData.TWILIO_ACCOUNT_SID'
                },
                {
                  configProperty: 'actionConfiguration.formData.MESSAGE_SID',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'MESSAGE_SID',
                  isRequired: true,
                  label: 'Message SID',
                  placeholderText: 'MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                  subtitle: 'Specify the SID of the messaging Service used with the message.',
                  tooltipText: 'The Twilio-provided string that uniquely identifies the message resource to delete.'
                }
              ],
              name: 'Delete message',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'DELETE_MESSAGE\'}}'
              }
            }
          ]
        },
        datasourceUiConfig: {
          form: [
            {
              sectionName: 'Connection',
              children: [
                {
                  label: 'Authentication type',
                  description: 'Select the authentication type to use',
                  configProperty: 'datasourceConfiguration.authentication.authenticationType',
                  controlType: 'DROP_DOWN',
                  options: [
                    {
                      label: 'Basic auth',
                      value: 'basic'
                    }
                  ]
                },
                {
                  identifier: 'username',
                  label: 'Account SID',
                  configProperty: 'datasourceConfiguration.authentication.username',
                  controlType: 'INPUT_TEXT',
                  hidden: {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'basic'
                  }
                },
                {
                  identifier: 'password',
                  label: 'Auth token',
                  configProperty: 'datasourceConfiguration.authentication.password',
                  controlType: 'INPUT_TEXT',
                  dataType: 'PASSWORD',
                  encrypted: true,
                  hidden: {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'basic'
                  }
                }
              ]
            }
          ]
        },
        templates: {},
        remotePlugin: true
      },
      {
        id: '68a9b813de8cf11f80e4a89d',
        userPermissions: [],
        name: 'Airtable',
        type: 'REMOTE',
        packageName: 'saas-plugin',
        pluginName: 'airtable-plugin',
        iconLocation: 'https://assets.appsmith.com/integrations/airtable.svg',
        documentationLink: 'https://docs.appsmith.com/reference/datasources/airtable#create-queries',
        responseType: 'JSON',
        version: '1.0',
        uiComponent: 'UQIDbEditorForm',
        datasourceComponent: 'AutoForm',
        allowUserDatasources: true,
        isRemotePlugin: true,
        actionUiConfig: {
          editor: [
            {
              label: 'Commands',
              description: 'Select the method to run',
              configProperty: 'actionConfiguration.formData.command',
              controlType: 'DROP_DOWN',
              options: [
                {
                  index: 1,
                  label: 'List records',
                  value: 'LIST_RECORDS'
                },
                {
                  index: 2,
                  label: 'Create records',
                  value: 'CREATE_RECORDS'
                },
                {
                  index: 3,
                  label: 'Delete a record',
                  value: 'DELETE_A_RECORD'
                },
                {
                  index: 4,
                  label: 'Retrieve a record',
                  value: 'RETRIEVE_A_RECORD'
                },
                {
                  index: 5,
                  label: 'Update records',
                  value: 'UPDATE_RECORDS'
                }
              ]
            },
            {
              identifier: 'UPDATE_RECORDS',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.baseId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'baseId',
                  isRequired: true,
                  label: 'Base ID',
                  tooltipText: 'ID of Airtable base. type: String',
                  subtitle: 'Airtable ID. Example: appXXXXXXXXX',
                  placeholderText: 'appXXXXXXXXX'
                },
                {
                  configProperty: 'actionConfiguration.formData.tableName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'tableName',
                  isRequired: true,
                  label: 'Table name',
                  requiresEncoding: true,
                  tooltipText: 'Name of table in Airtable base. type: String',
                  subtitle: 'Table name. Example: Projects',
                  placeholderText: 'Table name'
                },
                {
                  configProperty: 'actionConfiguration.formData.records',
                  controlType: 'QUERY_DYNAMIC_TEXT',
                  identifier: 'records',
                  label: 'Records',
                  isRequired: true,
                  placeholderText: '[{ "id": "recehWFQ9T7NUZzF4", "fields": { "name": "Test" }}]',
                  tooltipText: 'Enter records for update. type: array',
                  subtitle: 'Records to add in the table. Example: [{ "fields": { "name": "Test" }}]'
                }
              ],
              name: 'Update records',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'UPDATE_RECORDS\'}}'
              }
            },
            {
              identifier: 'CREATE_RECORDS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'baseId',
                  isRequired: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'ID of the Airtable base. type: String',
                  subtitle: 'Airtable ID. Example: appXXXXXXXXX',
                  placeholderText: 'appXXXXXXXXX',
                  label: 'Base ID',
                  configProperty: 'actionConfiguration.formData.baseId'
                },
                {
                  identifier: 'tableName',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Name of table in Airtable base. type: String',
                  subtitle: 'Table name. Example: Projects',
                  placeholderText: 'Table name',
                  label: 'Table name',
                  configProperty: 'actionConfiguration.formData.tableName'
                },
                {
                  identifier: 'records',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  tooltipText: 'Enter records for creation. type: array',
                  subtitle: 'Records to add in the table. Example: [{ "fields": { "name": "Test" }}]',
                  label: 'Records',
                  placeholderText: '[{ "fields": { "name": "Test" }}]',
                  configProperty: 'actionConfiguration.formData.records'
                }
              ],
              name: 'Create records',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'CREATE_RECORDS\'}}'
              }
            },
            {
              identifier: 'DELETE_A_RECORD',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.baseId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'baseId',
                  isRequired: true,
                  label: 'Base ID',
                  tooltipText: 'ID of Airtable base. type: Strng',
                  subtitle: 'Airtable ID. Example: appXXXXXXXXX',
                  placeholderText: 'appXXXXXXXXX'
                },
                {
                  configProperty: 'actionConfiguration.formData.tableName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'tableName',
                  isRequired: true,
                  label: 'Table name',
                  requiresEncoding: true,
                  tooltipText: 'Name of table in Airtable base. type: String',
                  subtitle: 'Table name. Example: Projects',
                  placeholderText: 'Table name'
                },
                {
                  configProperty: 'actionConfiguration.formData.recordId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'recordId',
                  isRequired: true,
                  label: 'Record ID',
                  tooltipText: 'ID of record to be deleted. type: String',
                  subtitle: 'Record ID. Example: recXXXXXXXXXX',
                  placeholderText: 'recXXXXXXXXX'
                }
              ],
              name: 'Delete a record',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'DELETE_A_RECORD\'}}'
              }
            },
            {
              identifier: 'LIST_RECORDS',
              controlType: 'SECTION',
              children: [
                {
                  identifier: 'baseId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  isRequired: true,
                  tooltipText: 'ID of Airtable base. type: String',
                  subtitle: 'Airtable ID. Example: appXXXXXXXXX',
                  label: 'Base ID ',
                  placeholderText: 'appXXXXXXXXX',
                  configProperty: 'actionConfiguration.formData.baseId'
                },
                {
                  identifier: 'tableName',
                  isRequired: true,
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Name of table in Airtable base. type: String',
                  subtitle: 'Table name. Example: Projects',
                  placeholderText: 'Table name',
                  label: 'Table name',
                  configProperty: 'actionConfiguration.formData.tableName'
                },
                {
                  identifier: 'fields',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'Only data for fields whose names are in this list will be included in the result. If you don\'t need every field, you can use this parameter to reduce the amount of data transferred. type: array',
                  subtitle: 'Only data for fields whose names are in this list will be included in the result. ',
                  label: 'Fields',
                  configProperty: 'actionConfiguration.formData.fields'
                },
                {
                  identifier: 'filterByFormula',
                  requiresEncoding: true,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'A formula used to filter records. The formula will be evaluated for each record, and if the result is not 0,                   false,"",NaN,[], or #Error!the record will be included in the response. type: String',
                  subtitle: 'A formula used to filter records.',
                  label: 'Filter by formula',
                  configProperty: 'actionConfiguration.formData.filterByFormula'
                },
                {
                  identifier: 'maxRecords',
                  isRequired: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The maximum total number of records that will be returned in your requests. If this value is larger than pageSize(which is 100 by default), you may have to load multiple pages to reach this total. type: integer',
                  subtitle: 'Maximum number of records to return. Example: 100',
                  placeholderText: '100',
                  label: 'Max records',
                  configProperty: 'actionConfiguration.formData.maxRecords'
                },
                {
                  identifier: 'pageSize',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more. type: Number',
                  subtitle: 'Maximum number of results to return. Example: 100',
                  placeholderText: '100',
                  label: 'Page size',
                  initialValue: '100',
                  configProperty: 'actionConfiguration.formData.pageSize'
                },
                {
                  identifier: 'sort',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'A list of sort objects that specifies how the records will be ordered. Each sort object must have a field               key specifying the name of the field to sort on, and an optional directionkey that is either "asc" or "desc". The default direction is "asc". type: array',
                  subtitle: 'Columns names to sort the result by.',
                  label: 'Sort',
                  configProperty: 'actionConfiguration.formData.sort'
                },
                {
                  identifier: 'view',
                  isRequired: false,
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The name or ID of a view in the tableName. If set, only the records in that view will be returned. type: String',
                  subtitle: 'The name or ID of a view in the tableName. Example: GridView',
                  label: 'View',
                  configProperty: 'actionConfiguration.formData.view'
                },
                {
                  identifier: 'cellFormat',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The format that should be used for cell values. Supported values are: json and string. The default is json. type: String',
                  subtitle: 'Format to used for cell values. Example: json',
                  label: 'Cell format',
                  configProperty: 'actionConfiguration.formData.cellFormat'
                },
                {
                  identifier: 'timeZone',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The time zone that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat. type: String',
                  subtitle: 'time zone that should be used to format dates when using string as the cellFormat',
                  label: 'Time zone',
                  configProperty: 'actionConfiguration.formData.timeZone'
                },
                {
                  identifier: 'userLocale',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'The user locale that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat. type: String',
                  subtitle: ' user locale that should be used to format dates when using string as the cellFormat.',
                  label: 'User locale',
                  configProperty: 'actionConfiguration.formData.userLocale'
                },
                {
                  identifier: 'offset',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  tooltipText: 'If there are more records, the response will contain an offset.To fetch the next page of records, include offset in the next request\'s parameters. Pagination will stop when you\'ve reached the end of your table. If the maxRecords parameter is passed, pagination will stop once you\'ve reached this maximum. type: String',
                  subtitle: 'Paging cursor token to get the next set of results. Example: itrZ5o03g2WP95ntX/recvKqNLuVajJw9MY.',
                  label: 'Offset',
                  configProperty: 'actionConfiguration.formData.offset'
                }
              ],
              name: 'List records',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'LIST_RECORDS\'}}'
              }
            },
            {
              identifier: 'RETRIEVE_A_RECORD',
              controlType: 'SECTION',
              children: [
                {
                  configProperty: 'actionConfiguration.formData.baseId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'baseId',
                  isRequired: true,
                  label: 'Base ID',
                  tooltipText: 'ID of Airtable base. type: String',
                  subtitle: 'Airtable ID. Example: appXXXXXXXXX',
                  placeholderText: 'appXXXXXXXXX'
                },
                {
                  configProperty: 'actionConfiguration.formData.tableName',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'tableName',
                  isRequired: true,
                  label: 'Table name',
                  requiresEncoding: true,
                  tooltipText: 'Name of table in Airtable base. type: String',
                  subtitle: 'Table name. Example: Projects',
                  placeholderText: 'Table name'
                },
                {
                  configProperty: 'actionConfiguration.formData.recordId',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  identifier: 'recordId',
                  label: 'Record ID ',
                  isRequired: true,
                  tooltipText: 'Record ID you want to retrieve. type: String',
                  subtitle: 'Record ID. Example: recXXXXXXXXXX',
                  placeholderText: 'recXXXXXXXXX'
                }
              ],
              name: 'Retrieve a record',
              conditionals: {
                show: '{{actionConfiguration.formData.command === \'RETRIEVE_A_RECORD\'}}'
              }
            }
          ]
        },
        datasourceUiConfig: {
          form: [
            {
              sectionName: 'Connection',
              children: [
                {
                  label: 'Authentication type',
                  description: 'Select the authentication type to use',
                  configProperty: 'datasourceConfiguration.authentication.authenticationType',
                  controlType: 'DROP_DOWN',
                  options: [
                    {
                      label: 'API key',
                      value: 'apiKey'
                    },
                    {
                      label: 'Personal access token',
                      value: 'bearerToken'
                    }
                  ]
                },
                {
                  identifier: 'bearerToken',
                  label: 'Bearer token',
                  configProperty: 'datasourceConfiguration.authentication.bearerToken',
                  controlType: 'INPUT_TEXT',
                  dataType: 'PASSWORD',
                  encrypted: true,
                  hidden: {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'bearerToken'
                  }
                },
                {
                  identifier: 'apiKey',
                  label: 'Api key',
                  configProperty: 'datasourceConfiguration.authentication.value',
                  controlType: 'INPUT_TEXT',
                  dataType: 'PASSWORD',
                  encrypted: true,
                  hidden: {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'apiKey'
                  }
                }
              ]
            }
          ]
        },
        templates: {},
        remotePlugin: true
      }
    ],
    defaultPluginList: [
      {
        id: '68a9b7e7de8cf11f80e4a86f',
        userPermissions: [],
        name: 'PostgreSQL',
        packageName: 'postgres-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/postgresql.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e7de8cf11f80e4a870',
        userPermissions: [],
        name: 'REST API',
        packageName: 'restapi-plugin',
        iconLocation: 'https://assets.appsmith.com/RestAPI.png',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e7de8cf11f80e4a871',
        userPermissions: [],
        name: 'MongoDB',
        packageName: 'mongo-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/mongodb.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a872',
        userPermissions: [],
        name: 'MySQL',
        packageName: 'mysql-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/mysql.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a875',
        userPermissions: [],
        name: 'Elasticsearch',
        packageName: 'elasticsearch-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/elastic.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a876',
        userPermissions: [],
        name: 'DynamoDB',
        packageName: 'dynamo-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/aws-dynamodb.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a877',
        userPermissions: [],
        name: 'Redis',
        packageName: 'redis-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/redis.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a878',
        userPermissions: [],
        name: 'Microsoft SQL Server',
        packageName: 'mssql-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/mssql.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a879',
        userPermissions: [],
        name: 'Firestore',
        packageName: 'firestore-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/firestore.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87a',
        userPermissions: [],
        name: 'Redshift',
        packageName: 'redshift-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/aws-redshift.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87b',
        userPermissions: [],
        name: 'S3',
        packageName: 'amazons3-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/aws-s3.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87c',
        userPermissions: [],
        name: 'Google Sheets',
        packageName: 'google-sheets-plugin',
        iconLocation: 'https://assets.appsmith.com/GoogleSheets.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87e',
        userPermissions: [],
        name: 'Snowflake',
        packageName: 'snowflake-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/snowflake.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a87f',
        userPermissions: [],
        name: 'ArangoDB',
        packageName: 'arangodb-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/arangodb.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e8de8cf11f80e4a880',
        userPermissions: [],
        name: 'JS Functions',
        packageName: 'js-plugin',
        iconLocation: 'https://assets.appsmith.com/js-yellow.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e9de8cf11f80e4a881',
        userPermissions: [],
        name: 'SMTP',
        packageName: 'smtp-plugin',
        iconLocation: 'https://assets.appsmith.com/smtp-icon.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e9de8cf11f80e4a891',
        userPermissions: [],
        name: 'Authenticated GraphQL API',
        packageName: 'graphql-plugin',
        iconLocation: 'https://s3.us-east-2.amazonaws.com/assets.appsmith.com/logo/graphql.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7e9de8cf11f80e4a892',
        userPermissions: [],
        name: 'Oracle',
        packageName: 'oracle-plugin',
        iconLocation: 'https://s3.us-east-2.amazonaws.com/assets.appsmith.com/oracle.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7edde8cf11f80e4a894',
        userPermissions: [],
        name: 'Open AI',
        packageName: 'openai-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/open-ai.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7edde8cf11f80e4a895',
        userPermissions: [],
        name: 'Anthropic',
        packageName: 'anthropic-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/anthropic.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a896',
        userPermissions: [],
        name: 'Google AI',
        packageName: 'googleai-plugin',
        iconLocation: 'https://assets.appsmith.com/google-ai.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a897',
        userPermissions: [],
        name: 'Databricks',
        packageName: 'databricks-plugin',
        iconLocation: 'https://assets.appsmith.com/databricks-logo.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a898',
        userPermissions: [],
        name: 'AWS Lambda',
        packageName: 'aws-lambda-plugin',
        iconLocation: 'https://assets.appsmith.com/aws-lambda-logo.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b7eede8cf11f80e4a899',
        userPermissions: [],
        name: 'Appsmith AI',
        packageName: 'appsmithai-plugin',
        iconLocation: 'https://assets.appsmith.com/logo/appsmith-ai.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b813de8cf11f80e4a89b',
        userPermissions: [],
        name: 'HubSpot',
        packageName: 'saas-plugin',
        iconLocation: 'https://assets.appsmith.com/integrations/hubspot.png',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b813de8cf11f80e4a89c',
        userPermissions: [],
        name: 'Twilio',
        packageName: 'saas-plugin',
        iconLocation: 'https://assets.appsmith.com/integrations/twilio1.png',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      },
      {
        id: '68a9b813de8cf11f80e4a89d',
        userPermissions: [],
        name: 'Airtable',
        packageName: 'saas-plugin',
        iconLocation: 'https://assets.appsmith.com/integrations/airtable.svg',
        allowUserDatasources: true,
        isRemotePlugin: false,
        remotePlugin: false
      }
    ],
    loading: false,
    formConfigs: {
      '68a9b7e7de8cf11f80e4a871': [
        {
          sectionName: 'Connection',
          children: [
            {
              label: 'Use mongo connection string URI key',
              configProperty: 'datasourceConfiguration.properties[0].key',
              controlType: 'INPUT_TEXT',
              initialValue: 'Use mongo connection string URI',
              hidden: true
            },
            {
              label: 'Use mongo connection string URI',
              configProperty: 'datasourceConfiguration.properties[0].value',
              controlType: 'DROP_DOWN',
              initialValue: 'No',
              options: [
                {
                  label: 'Yes',
                  value: 'Yes'
                },
                {
                  label: 'No',
                  value: 'No'
                }
              ]
            },
            {
              label: 'Connection string URI key',
              configProperty: 'datasourceConfiguration.properties[1].key',
              controlType: 'INPUT_TEXT',
              initialValue: 'Connection string URI',
              hidden: true
            },
            {
              label: 'Connection string URI',
              placeholderText: 'mongodb+srv://<username>:<password>@test-db.swrsq.mongodb.net/myDatabase',
              configProperty: 'datasourceConfiguration.properties[1].value',
              controlType: 'INPUT_TEXT',
              hidden: {
                path: 'datasourceConfiguration.properties[0].value',
                comparison: 'NOT_EQUALS',
                value: 'Yes'
              }
            },
            {
              label: 'Connection mode',
              configProperty: 'datasourceConfiguration.connection.mode',
              controlType: 'SEGMENTED_CONTROL',
              initialValue: 'READ_WRITE',
              options: [
                {
                  label: 'Read / Write',
                  value: 'READ_WRITE'
                },
                {
                  label: 'Read only',
                  value: 'READ_ONLY'
                }
              ],
              hidden: {
                path: 'datasourceConfiguration.properties[0].value',
                comparison: 'EQUALS',
                value: 'Yes'
              }
            },
            {
              label: 'Connection type',
              configProperty: 'datasourceConfiguration.connection.type',
              initialValue: 'DIRECT',
              controlType: 'DROP_DOWN',
              options: [
                {
                  label: 'Direct connection',
                  value: 'DIRECT'
                },
                {
                  label: 'Replica set',
                  value: 'REPLICA_SET'
                }
              ],
              hidden: {
                path: 'datasourceConfiguration.properties[0].value',
                comparison: 'EQUALS',
                value: 'Yes'
              }
            },
            {
              children: [
                {
                  label: 'Host address',
                  configProperty: 'datasourceConfiguration.endpoints[*].host',
                  controlType: 'KEYVALUE_ARRAY',
                  validationMessage: 'Please enter a valid host',
                  validationRegex: '^((?![/:]).)*$',
                  placeholderText: 'myapp.abcde.mongodb.net',
                  hidden: {
                    path: 'datasourceConfiguration.properties[0].value',
                    comparison: 'EQUALS',
                    value: 'Yes'
                  }
                },
                {
                  label: 'Port',
                  configProperty: 'datasourceConfiguration.endpoints[*].port',
                  dataType: 'NUMBER',
                  controlType: 'KEYVALUE_ARRAY',
                  initialValue: [
                    '27017'
                  ],
                  hidden: {
                    path: 'datasourceConfiguration.properties[0].value',
                    comparison: 'EQUALS',
                    value: 'Yes'
                  },
                  placeholderText: '27017'
                }
              ]
            },
            {
              label: 'Default database name',
              placeholderText: '(optional)',
              configProperty: 'datasourceConfiguration.connection.defaultDatabaseName',
              controlType: 'INPUT_TEXT',
              hidden: {
                path: 'datasourceConfiguration.properties[0].value',
                comparison: 'EQUALS',
                value: 'Yes'
              }
            }
          ]
        },
        {
          sectionName: 'Authentication',
          hidden: {
            path: 'datasourceConfiguration.properties[0].value',
            comparison: 'EQUALS',
            value: 'Yes'
          },
          children: [
            {
              label: 'Database name',
              configProperty: 'datasourceConfiguration.authentication.databaseName',
              controlType: 'INPUT_TEXT',
              placeholderText: 'Database name',
              initialValue: 'admin'
            },
            {
              label: 'Authentication type',
              configProperty: 'datasourceConfiguration.authentication.authType',
              controlType: 'DROP_DOWN',
              initialValue: 'SCRAM_SHA_1',
              options: [
                {
                  label: 'SCRAM-SHA-1',
                  value: 'SCRAM_SHA_1'
                },
                {
                  label: 'SCRAM-SHA-256',
                  value: 'SCRAM_SHA_256'
                },
                {
                  label: 'MONGODB-CR',
                  value: 'MONGODB_CR'
                }
              ]
            },
            {
              children: [
                {
                  label: 'Username',
                  configProperty: 'datasourceConfiguration.authentication.username',
                  controlType: 'INPUT_TEXT',
                  placeholderText: 'Username'
                },
                {
                  label: 'Password',
                  configProperty: 'datasourceConfiguration.authentication.password',
                  dataType: 'PASSWORD',
                  controlType: 'INPUT_TEXT',
                  placeholderText: 'Password',
                  encrypted: true
                }
              ]
            }
          ]
        },
        {
          sectionName: 'SSL (optional)',
          hidden: {
            path: 'datasourceConfiguration.properties[0].value',
            comparison: 'EQUALS',
            value: 'Yes'
          },
          children: [
            {
              label: 'SSL mode',
              configProperty: 'datasourceConfiguration.connection.ssl.authType',
              controlType: 'DROP_DOWN',
              initialValue: 'DEFAULT',
              options: [
                {
                  label: 'Default',
                  value: 'DEFAULT'
                },
                {
                  label: 'Enabled',
                  value: 'ENABLED'
                },
                {
                  label: 'Disabled',
                  value: 'DISABLED'
                }
              ]
            }
          ]
        }
      ],
      '68a9b7e7de8cf11f80e4a86f': [
        {
          sectionName: 'Connection',
          id: 1,
          children: [
            {
              label: 'Connection method',
              configProperty: 'datasourceConfiguration.properties[1].key',
              initialValue: 'Connection method',
              hidden: true,
              controlType: 'INPUT_TEXT'
            },
            {
              label: 'Connection method',
              configProperty: 'datasourceConfiguration.properties[1].value',
              controlType: 'SEGMENTED_CONTROL',
              initialValue: 'STANDARD',
              options: [
                {
                  label: 'Standard',
                  value: 'STANDARD'
                },
                {
                  label: 'SSH tunnel',
                  value: 'SSH'
                }
              ]
            },
            {
              label: 'Connection mode',
              configProperty: 'datasourceConfiguration.connection.mode',
              controlType: 'SEGMENTED_CONTROL',
              initialValue: 'READ_WRITE',
              options: [
                {
                  label: 'Read / Write',
                  value: 'READ_WRITE'
                },
                {
                  label: 'Read only',
                  value: 'READ_ONLY'
                }
              ]
            },
            {
              children: [
                {
                  label: 'Host address',
                  configProperty: 'datasourceConfiguration.endpoints[*].host',
                  controlType: 'KEYVALUE_ARRAY',
                  validationMessage: 'Please enter a valid host',
                  validationRegex: '^((?![/:]).)*$',
                  placeholderText: 'myapp.abcde.postgres.net'
                },
                {
                  label: 'Port',
                  configProperty: 'datasourceConfiguration.endpoints[*].port',
                  dataType: 'NUMBER',
                  initialValue: [
                    '5432'
                  ],
                  controlType: 'KEYVALUE_ARRAY',
                  placeholderText: '5432'
                }
              ]
            },
            {
              children: [
                {
                  label: 'SSH host address',
                  configProperty: 'datasourceConfiguration.sshProxy.endpoints[*].host',
                  controlType: 'KEYVALUE_ARRAY',
                  validationMessage: 'Please enter a valid host',
                  validationRegex: '^((?![/:]).)*$',
                  placeholderText: 'myapp.abcde.sshHost.net'
                },
                {
                  label: 'SSH port',
                  configProperty: 'datasourceConfiguration.sshProxy.endpoints[*].port',
                  dataType: 'NUMBER',
                  controlType: 'KEYVALUE_ARRAY',
                  initialValue: [
                    '22'
                  ],
                  placeholderText: '22'
                }
              ],
              hidden: {
                path: 'datasourceConfiguration.properties[1].value',
                comparison: 'NOT_EQUALS',
                value: 'SSH'
              }
            },
            {
              label: 'Database name',
              configProperty: 'datasourceConfiguration.authentication.databaseName',
              controlType: 'INPUT_TEXT',
              placeholderText: 'Database name',
              initialValue: 'admin'
            }
          ]
        },
        {
          sectionName: 'Authentication',
          id: 2,
          children: [
            {
              children: [
                {
                  label: 'Username',
                  configProperty: 'datasourceConfiguration.authentication.username',
                  controlType: 'INPUT_TEXT',
                  placeholderText: 'Username'
                },
                {
                  label: 'Password',
                  configProperty: 'datasourceConfiguration.authentication.password',
                  dataType: 'PASSWORD',
                  controlType: 'INPUT_TEXT',
                  placeholderText: 'Password',
                  encrypted: true
                },
                {
                  label: 'SSH username',
                  configProperty: 'datasourceConfiguration.sshProxy.username',
                  controlType: 'INPUT_TEXT',
                  placeholderText: 'Username',
                  hidden: {
                    path: 'datasourceConfiguration.properties[1].value',
                    comparison: 'NOT_EQUALS',
                    value: 'SSH'
                  }
                },
                {
                  label: 'SSH key',
                  configProperty: 'datasourceConfiguration.sshProxy.privateKey.keyFile',
                  controlType: 'FILE_PICKER',
                  encrypted: true,
                  hidden: {
                    path: 'datasourceConfiguration.properties[1].value',
                    comparison: 'NOT_EQUALS',
                    value: 'SSH'
                  }
                }
              ]
            }
          ]
        },
        {
          id: 3,
          sectionName: 'SSL (optional)',
          children: [
            {
              label: 'SSL mode',
              configProperty: 'datasourceConfiguration.connection.ssl.authType',
              controlType: 'DROP_DOWN',
              initialValue: 'DEFAULT',
              options: [
                {
                  label: 'Default',
                  value: 'DEFAULT'
                },
                {
                  label: 'Allow',
                  value: 'ALLOW'
                },
                {
                  label: 'Prefer',
                  value: 'PREFER'
                },
                {
                  label: 'Require',
                  value: 'REQUIRE'
                },
                {
                  label: 'Disable',
                  value: 'DISABLE'
                },
                {
                  label: 'Verify CA',
                  value: 'VERIFY_CA'
                },
                {
                  label: 'Verify Full',
                  value: 'VERIFY_FULL'
                }
              ]
            },
            {
              label: 'Certificate Type',
              configProperty: 'datasourceConfiguration.connection.ssl.certificateType',
              controlType: 'DROP_DOWN',
              initialValue: '-Select-',
              options: [
                {
                  label: 'Upload File',
                  value: 'FILE'
                },
                {
                  label: 'Base64 String',
                  value: 'BASE64_STRING'
                }
              ],
              hidden: {
                conditionType: 'AND',
                conditions: [
                  {
                    path: 'datasourceConfiguration.connection.ssl.authType',
                    comparison: 'NOT_EQUALS',
                    value: 'VERIFY_CA'
                  },
                  {
                    path: 'datasourceConfiguration.connection.ssl.authType',
                    comparison: 'NOT_EQUALS',
                    value: 'VERIFY_FULL'
                  }
                ]
              }
            },
            {
              sectionStyles: {
                display: 'flex',
                'flex-wrap': 'wrap'
              },
              children: [
                {
                  sectionStyles: {
                    marginRight: '10px'
                  },
                  children: [
                    {
                      label: 'Client CA Certificate File',
                      configProperty: 'datasourceConfiguration.connection.ssl.clientCACertificateFile',
                      controlType: 'FILE_PICKER',
                      encrypted: true,
                      hidden: {
                        path: 'datasourceConfiguration.connection.ssl.certificateType',
                        comparison: 'NOT_EQUALS',
                        value: 'FILE'
                      }
                    },
                    {
                      label: 'Client CA Certificate String',
                      configProperty: 'datasourceConfiguration.connection.ssl.clientCACertificateFile.base64Content',
                      controlType: 'INPUT_TEXT',
                      dataType: 'PASSWORD',
                      encrypted: true,
                      hidden: {
                        path: 'datasourceConfiguration.connection.ssl.certificateType',
                        comparison: 'NOT_EQUALS',
                        value: 'BASE64_STRING'
                      }
                    }
                  ]
                },
                {
                  sectionStyles: {
                    marginRight: '10px'
                  },
                  children: [
                    {
                      label: 'Server CA Certificate File',
                      configProperty: 'datasourceConfiguration.connection.ssl.serverCACertificateFile',
                      controlType: 'FILE_PICKER',
                      encrypted: true,
                      hidden: {
                        path: 'datasourceConfiguration.connection.ssl.certificateType',
                        comparison: 'NOT_EQUALS',
                        value: 'FILE'
                      }
                    },
                    {
                      label: 'Server CA Certificate String',
                      configProperty: 'datasourceConfiguration.connection.ssl.serverCACertificateFile.Base64Content',
                      controlType: 'INPUT_TEXT',
                      dataType: 'PASSWORD',
                      encrypted: true,
                      hidden: {
                        path: 'datasourceConfiguration.connection.ssl.certificateType',
                        comparison: 'NOT_EQUALS',
                        value: 'BASE64_STRING'
                      }
                    }
                  ]
                },
                {
                  sectionStyles: {
                    marginRight: '10px'
                  },
                  children: [
                    {
                      label: 'Client Key Certificate File',
                      configProperty: 'datasourceConfiguration.connection.ssl.clientKeyCertificateFile',
                      controlType: 'FILE_PICKER',
                      encrypted: true,
                      hidden: {
                        path: 'datasourceConfiguration.connection.ssl.certificateType',
                        comparison: 'NOT_EQUALS',
                        value: 'FILE'
                      }
                    },
                    {
                      label: 'Client Key Certificate String',
                      configProperty: 'datasourceConfiguration.connection.ssl.clientKeyCertificateFile.Base64Content',
                      controlType: 'INPUT_TEXT',
                      dataType: 'PASSWORD',
                      encrypted: true,
                      hidden: {
                        path: 'datasourceConfiguration.connection.ssl.certificateType',
                        comparison: 'NOT_EQUALS',
                        value: 'BASE64_STRING'
                      }
                    }
                  ]
                },
                {
                  sectionStyles: {
                    flex: 1
                  },
                  children: []
                },
                {
                  sectionStyles: {
                    flex: 1
                  },
                  children: []
                },
                {
                  sectionStyles: {
                    flex: 1
                  },
                  children: []
                }
              ],
              hidden: {
                conditionType: 'AND',
                conditions: [
                  {
                    path: 'datasourceConfiguration.connection.ssl.authType',
                    comparison: 'NOT_EQUALS',
                    value: 'VERIFY_CA'
                  },
                  {
                    path: 'datasourceConfiguration.connection.ssl.authType',
                    comparison: 'NOT_EQUALS',
                    value: 'VERIFY_FULL'
                  }
                ]
              }
            }
          ]
        }
      ],
      '68a9b7e7de8cf11f80e4a870': [
        {
          sectionName: 'General',
          children: [
            {
              label: 'URL',
              configProperty: 'datasourceConfiguration.url',
              controlType: 'INPUT_TEXT',
              isRequired: true,
              placeholderText: 'https://example.com'
            },
            {
              label: 'Headers',
              configProperty: 'datasourceConfiguration.headers',
              controlType: 'KEYVALUE_ARRAY'
            },
            {
              label: 'Query Params',
              configProperty: 'datasourceConfiguration.queryParameters',
              controlType: 'KEYVALUE_ARRAY'
            },
            {
              label: 'Send authentication Information key (do not edit)',
              configProperty: 'datasourceConfiguration.properties[0].key',
              controlType: 'INPUT_TEXT',
              hidden: true,
              initialValue: 'isSendSessionEnabled'
            },
            {
              label: 'Send Appsmith signature header (X-APPSMITH-SIGNATURE)',
              configProperty: 'datasourceConfiguration.properties[0].value',
              controlType: 'DROP_DOWN',
              isRequired: true,
              initialValue: 'N',
              options: [
                {
                  label: 'Yes',
                  value: 'Y'
                },
                {
                  label: 'No',
                  value: 'N'
                }
              ]
            },
            {
              label: 'Session details signature key key (do not edit)',
              configProperty: 'datasourceConfiguration.properties[1].key',
              controlType: 'INPUT_TEXT',
              hidden: true,
              initialValue: 'sessionSignatureKey'
            },
            {
              label: 'Session details signature key',
              configProperty: 'datasourceConfiguration.properties[1].value',
              controlType: 'INPUT_TEXT',
              hidden: {
                path: 'datasourceConfiguration.properties[0].value',
                comparison: 'EQUALS',
                value: 'N'
              }
            },
            {
              label: 'Authentication type',
              configProperty: 'datasourceConfiguration.authentication.authenticationType',
              controlType: 'DROP_DOWN',
              options: [
                {
                  label: 'None',
                  value: 'dbAuth'
                },
                {
                  label: 'Basic',
                  value: 'basic'
                },
                {
                  label: 'OAuth 2.0',
                  value: 'oAuth2'
                },
                {
                  label: 'API key',
                  value: 'apiKey'
                },
                {
                  label: 'Bearer token',
                  value: 'bearerToken'
                }
              ]
            },
            {
              label: 'Grant type',
              configProperty: 'datasourceConfiguration.authentication.grantType',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: true
            },
            {
              label: 'Access token URL',
              configProperty: 'datasourceConfiguration.authentication.accessTokenUrl',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Client Id',
              configProperty: 'datasourceConfiguration.authentication.clientId',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Client secret',
              configProperty: 'datasourceConfiguration.authentication.clientSecret',
              dataType: 'PASSWORD',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Scope(s)',
              configProperty: 'datasourceConfiguration.authentication.scopeString',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Header prefix',
              configProperty: 'datasourceConfiguration.authentication.headerPrefix',
              controlType: 'INPUT_TEXT',
              placeholderText: 'Bearer (default)',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Add token to',
              configProperty: 'datasourceConfiguration.authentication.isTokenHeader',
              controlType: 'DROP_DOWN',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              },
              options: [
                {
                  label: 'Header',
                  value: true
                },
                {
                  label: 'Query parameters',
                  value: false
                }
              ]
            },
            {
              label: 'Audience(s)',
              configProperty: 'datasourceConfiguration.authentication.audience',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Resource(s)',
              configProperty: 'datasourceConfiguration.authentication.resource',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Send scope with refresh token',
              configProperty: 'datasourceConfiguration.authentication.sendScopeWithRefreshToken',
              controlType: 'DROP_DOWN',
              isRequired: true,
              initialValue: false,
              options: [
                {
                  label: 'Yes',
                  value: true
                },
                {
                  label: 'No',
                  value: false
                }
              ]
            },
            {
              label: 'Send client credentials with (on refresh token)',
              configProperty: 'datasourceConfiguration.authentication.refreshTokenClientCredentialsLocation',
              controlType: 'DROP_DOWN',
              isRequired: true,
              initialValue: 'BODY',
              options: [
                {
                  label: 'Body',
                  value: 'BODY'
                },
                {
                  label: 'Header',
                  value: 'HEADER'
                }
              ]
            }
          ]
        }
      ],
      '68a9b7e9de8cf11f80e4a891': [
        {
          sectionName: 'General',
          children: [
            {
              label: 'URL',
              configProperty: 'datasourceConfiguration.url',
              controlType: 'INPUT_TEXT',
              isRequired: true,
              placeholderText: 'https://example.com'
            },
            {
              label: 'Headers',
              configProperty: 'datasourceConfiguration.headers',
              controlType: 'KEYVALUE_ARRAY'
            },
            {
              label: 'Query Params',
              configProperty: 'datasourceConfiguration.queryParameters',
              controlType: 'KEYVALUE_ARRAY'
            },
            {
              label: 'Send authentication Information key (do not edit)',
              configProperty: 'datasourceConfiguration.properties[0].key',
              controlType: 'INPUT_TEXT',
              hidden: true,
              initialValue: 'isSendSessionEnabled'
            },
            {
              label: 'Send Appsmith signature header',
              subtitle: 'Header key: X-APPSMITH-SIGNATURE',
              configProperty: 'datasourceConfiguration.properties[0].value',
              controlType: 'DROP_DOWN',
              isRequired: true,
              initialValue: 'N',
              options: [
                {
                  label: 'Yes',
                  value: 'Y'
                },
                {
                  label: 'No',
                  value: 'N'
                }
              ]
            },
            {
              label: 'Session details signature key key (do not edit)',
              configProperty: 'datasourceConfiguration.properties[1].key',
              controlType: 'INPUT_TEXT',
              hidden: true,
              initialValue: 'sessionSignatureKey'
            },
            {
              label: 'Session details signature key',
              configProperty: 'datasourceConfiguration.properties[1].value',
              controlType: 'INPUT_TEXT',
              hidden: {
                path: 'datasourceConfiguration.properties[0].value',
                comparison: 'EQUALS',
                value: 'N'
              }
            }
          ]
        },
        {
          sectionName: 'Authentication',
          children: [
            {
              label: 'Authentication type',
              configProperty: 'datasourceConfiguration.authentication.authenticationType',
              controlType: 'DROP_DOWN',
              options: [
                {
                  label: 'None',
                  value: 'dbAuth'
                },
                {
                  label: 'Basic',
                  value: 'basic'
                },
                {
                  label: 'OAuth 2.0',
                  value: 'oAuth2'
                },
                {
                  label: 'API key',
                  value: 'apiKey'
                },
                {
                  label: 'Bearer token',
                  value: 'bearerToken'
                }
              ]
            },
            {
              label: 'Username',
              configProperty: 'datasourceConfiguration.authentication.username',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'basic'
              }
            },
            {
              label: 'Password',
              configProperty: 'datasourceConfiguration.authentication.password',
              dataType: 'PASSWORD',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              encrypted: true,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'basic'
              }
            },
            {
              label: 'Grant type',
              configProperty: 'datasourceConfiguration.authentication.grantType',
              controlType: 'DROP_DOWN',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              },
              initialValue: 'authorization_code',
              options: [
                {
                  label: 'Client Credentials',
                  value: 'client_credentials'
                },
                {
                  label: 'Authorization Code',
                  value: 'authorization_code'
                }
              ]
            },
            {
              label: 'Add token to',
              configProperty: 'datasourceConfiguration.authentication.isTokenHeader',
              controlType: 'DROP_DOWN',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              },
              initialValue: true,
              options: [
                {
                  label: 'Request Header',
                  value: true
                },
                {
                  label: 'Request URL',
                  value: false
                }
              ]
            },
            {
              label: 'Header prefix',
              configProperty: 'datasourceConfiguration.authentication.headerPrefix',
              controlType: 'INPUT_TEXT',
              placeholderText: 'eg: Bearer ',
              initialValue: 'Bearer',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Access token URL',
              configProperty: 'datasourceConfiguration.authentication.accessTokenUrl',
              controlType: 'INPUT_TEXT',
              placeholderText: 'https://example.com/login/oauth/access_token',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Client ID',
              configProperty: 'datasourceConfiguration.authentication.clientId',
              controlType: 'INPUT_TEXT',
              placeholderText: 'Client ID',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Client secret',
              configProperty: 'datasourceConfiguration.authentication.clientSecret',
              dataType: 'PASSWORD',
              placeholderText: 'Client secret',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              encrypted: true,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Scope(s)',
              configProperty: 'datasourceConfiguration.authentication.scopeString',
              controlType: 'INPUT_TEXT',
              placeholderText: 'e.g. read, write',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'oAuth2'
              }
            },
            {
              label: 'Authorization URL',
              configProperty: 'datasourceConfiguration.authentication.authorizationUrl',
              controlType: 'INPUT_TEXT',
              placeholderText: 'https://example.com/login/oauth/authorize',
              isRequired: false,
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    path: 'datasourceConfiguration.authentication.grantType',
                    comparison: 'NOT_EQUALS',
                    value: 'authorization_code'
                  }
                ]
              }
            },
            {
              label: 'Redirect URL',
              subtitle: 'Url that the oauth server should redirect to',
              configProperty: 'datasourceConfiguration.authentication.redirectURL',
              controlType: 'FIXED_KEY_INPUT',
              disabled: true,
              placeholderText: 'Redirect URL',
              isRequired: false,
              initialValue: '{{window.location.origin + \'/api/v1/datasources/authorize\'}}',
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    path: 'datasourceConfiguration.authentication.grantType',
                    comparison: 'NOT_EQUALS',
                    value: 'authorization_code'
                  }
                ]
              }
            },
            {
              label: 'Custom Authentication Parameters',
              configProperty: 'datasourceConfiguration.authentication.customAuthenticationParameters',
              controlType: 'KEYVALUE_ARRAY',
              isRequired: false,
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    path: 'datasourceConfiguration.authentication.grantType',
                    comparison: 'NOT_EQUALS',
                    value: 'authorization_code'
                  }
                ]
              }
            },
            {
              label: 'Client Authentication',
              configProperty: 'datasourceConfiguration.authentication.isAuthorizationHeader',
              controlType: 'DROP_DOWN',
              isRequired: false,
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    path: 'datasourceConfiguration.authentication.grantType',
                    comparison: 'NOT_EQUALS',
                    value: 'authorization_code'
                  }
                ]
              },
              initialValue: true,
              options: [
                {
                  label: 'Send as Basic Auth header',
                  value: true
                },
                {
                  label: 'Send client credentials in body',
                  value: false
                }
              ]
            },
            {
              label: 'Audience(s)',
              configProperty: 'datasourceConfiguration.authentication.audience',
              controlType: 'INPUT_TEXT',
              placeholderText: 'https://example.com/oauth/audience',
              isRequired: false,
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    conditionType: 'AND',
                    conditions: [
                      {
                        path: 'datasourceConfiguration.authentication.authenticationType',
                        comparison: 'EQUALS',
                        value: 'oAuth2'
                      },
                      {
                        path: 'datasourceConfiguration.authentication.grantType',
                        comparison: 'EQUALS',
                        value: 'authorization_code'
                      },
                      {
                        path: 'datasourceConfiguration.authentication.isAuthorizationHeader',
                        comparison: 'EQUALS',
                        value: true
                      }
                    ]
                  }
                ]
              }
            },
            {
              label: 'Resource(s)',
              configProperty: 'datasourceConfiguration.authentication.resource',
              controlType: 'INPUT_TEXT',
              placeholderText: 'https://example.com/oauth/resource',
              isRequired: false,
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    conditionType: 'AND',
                    conditions: [
                      {
                        path: 'datasourceConfiguration.authentication.authenticationType',
                        comparison: 'EQUALS',
                        value: 'oAuth2'
                      },
                      {
                        path: 'datasourceConfiguration.authentication.grantType',
                        comparison: 'EQUALS',
                        value: 'authorization_code'
                      },
                      {
                        path: 'datasourceConfiguration.authentication.isAuthorizationHeader',
                        comparison: 'EQUALS',
                        value: true
                      }
                    ]
                  }
                ]
              }
            },
            {
              label: 'Send scope with refresh token',
              configProperty: 'datasourceConfiguration.authentication.sendScopeWithRefreshToken',
              controlType: 'DROP_DOWN',
              isRequired: false,
              initialValue: false,
              options: [
                {
                  label: 'Yes',
                  value: true
                },
                {
                  label: 'No',
                  value: false
                }
              ],
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    path: 'datasourceConfiguration.authentication.grantType',
                    comparison: 'NOT_EQUALS',
                    value: 'authorization_code'
                  }
                ]
              }
            },
            {
              label: 'Send client credentials with (on refresh token)',
              configProperty: 'datasourceConfiguration.authentication.refreshTokenClientCredentialsLocation',
              controlType: 'DROP_DOWN',
              isRequired: false,
              initialValue: 'BODY',
              options: [
                {
                  label: 'Body',
                  value: 'BODY'
                },
                {
                  label: 'Header',
                  value: 'HEADER'
                }
              ],
              hidden: {
                conditionType: 'OR',
                conditions: [
                  {
                    path: 'datasourceConfiguration.authentication.authenticationType',
                    comparison: 'NOT_EQUALS',
                    value: 'oAuth2'
                  },
                  {
                    path: 'datasourceConfiguration.authentication.grantType',
                    comparison: 'NOT_EQUALS',
                    value: 'authorization_code'
                  }
                ]
              }
            },
            {
              label: 'Key',
              configProperty: 'datasourceConfiguration.authentication.label',
              controlType: 'INPUT_TEXT',
              placeholderText: 'api_key',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'apiKey'
              }
            },
            {
              label: 'Value (Encrypted)',
              configProperty: 'datasourceConfiguration.authentication.value',
              controlType: 'INPUT_TEXT',
              placeholderText: 'Value',
              isRequired: false,
              encrypted: true,
              dataType: 'PASSWORD',
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'apiKey'
              }
            },
            {
              label: 'Add To',
              configProperty: 'datasourceConfiguration.authentication.addTo',
              controlType: 'DROP_DOWN',
              isRequired: false,
              initialValue: 'header',
              options: [
                {
                  label: 'Query Params',
                  value: 'queryParams'
                },
                {
                  label: 'Header',
                  value: 'header'
                }
              ],
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'apiKey'
              }
            },
            {
              label: 'Header prefix',
              configProperty: 'datasourceConfiguration.authentication.headerPrefix',
              controlType: 'INPUT_TEXT',
              placeholderText: 'eg: Bearer',
              initialValue: 'Bearer',
              isRequired: false,
              hidden: {
                path: 'datasourceConfiguration.authentication.addTo',
                comparison: 'NOT_EQUALS',
                value: 'header'
              }
            },
            {
              label: 'Bearer token',
              configProperty: 'datasourceConfiguration.authentication.bearerToken',
              controlType: 'INPUT_TEXT',
              placeholderText: 'Bearer token',
              isRequired: false,
              encrypted: true,
              hidden: {
                path: 'datasourceConfiguration.authentication.authenticationType',
                comparison: 'NOT_EQUALS',
                value: 'bearerToken'
              }
            }
          ]
        },
        {
          sectionName: 'Advanced Settings *',
          children: [
            {
              label: 'Use Self-signed certificate',
              configProperty: 'datasourceConfiguration.connection.ssl.authType',
              controlType: 'DROP_DOWN',
              isRequired: true,
              initialValue: 'DEFAULT',
              options: [
                {
                  label: 'No',
                  value: 'DEFAULT'
                },
                {
                  label: 'Yes',
                  value: 'SELF_SIGNED_CERTIFICATE'
                }
              ]
            },
            {
              label: 'Certificate Details',
              subtitle: 'Upload Certificate',
              configProperty: 'datasourceConfiguration.connection.ssl.certificateFile',
              controlType: 'FILE_PICKER',
              isRequired: false,
              encrypted: true,
              hidden: {
                path: 'datasourceConfiguration.connection.ssl.authType',
                comparison: 'NOT_EQUALS',
                value: 'SELF_SIGNED_CERTIFICATE'
              }
            }
          ]
        }
      ],
      '68a9b7eede8cf11f80e4a899': [
        {
          sectionName: 'Details',
          id: 1,
          children: [
            {
              label: 'Description',
              configProperty: 'datasourceConfiguration.description',
              controlType: 'INPUT_TEXT',
              isRequired: false,
              hidden: true
            },
            {
              label: 'Endpoint URL (with or without protocol and port no)',
              configProperty: 'datasourceConfiguration.url',
              controlType: 'INPUT_TEXT',
              initialValue: 'https://ai.appsmith.com',
              isRequired: true,
              hidden: true
            },
            {
              label: 'Files',
              configProperty: 'datasourceConfiguration.properties[0].key',
              initialValue: 'Files',
              hidden: true,
              controlType: 'INPUT_TEXT'
            },
            {
              label: 'Files',
              subtitle: 'Upload files and use them as context for generating text',
              buttonLabel: 'Upload Files',
              configProperty: 'datasourceConfiguration.properties[0].value',
              controlType: 'MULTIPLE_FILE_PICKER',
              labelVisibleWithFiles: 'To use files, create a new AI query with "Generate text" action and select files under "Use file context" section. Using file context on AI queries will generate accurate responses that are grounded in file contents.',
              allowedFileTypes: [
                'application/pdf',
                'text/plain',
                'text/markdown'
              ],
              maxFileSizeInBytes: 20971520,
              config: {
                uploadToTrigger: true,
                params: {
                  requestType: 'UPLOAD_FILES'
                }
              },
              isRequired: false,
              hidden: {
                comparison: 'FEATURE_FLAG',
                flagValue: 'release_anvil_enabled',
                value: true
              }
            },
            {
              configProperty: 'datasourceConfiguration.properties[1].key',
              initialValue: 'Rag Integrations',
              hidden: true,
              controlType: 'INPUT_TEXT'
            },
            {
              controlType: 'RAG_INTEGRATIONS',
              isRequired: false,
              configProperty: 'datasourceConfiguration.properties[1].value',
              initialValue: [
                {
                  id: 'LOCAL_FILES',
                  chunkSize: 1000,
                  overlapSize: 300,
                  allowedFileTypes: [
                    {
                      extension: 'TXT',
                      chunkSize: 1000,
                      overlapSize: 300
                    },
                    {
                      extension: 'PDF',
                      chunkSize: 1000,
                      overlapSize: 300,
                      useOcr: true,
                      setPageAsBoundary: true
                    },
                    {
                      extension: 'MD',
                      chunkSize: 1000,
                      overlapSize: 300
                    },
                    {
                      extension: 'RTF',
                      chunkSize: 1000,
                      overlapSize: 300
                    },
                    {
                      extension: 'DOCX',
                      chunkSize: 1000,
                      overlapSize: 300
                    }
                  ]
                },
                {
                  id: 'NOTION',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'ZENDESK',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'SALESFORCE',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'WEB_SCRAPER',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'GOOGLE_DRIVE',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'INTERCOM',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'FRESHDESK',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'CONFLUENCE',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'DROPBOX',
                  chunkSize: 1500,
                  overlapSize: 450
                },
                {
                  id: 'BOX',
                  chunkSize: 1500,
                  overlapSize: 450
                }
              ],
              hidden: {
                comparison: 'FEATURE_FLAG',
                flagValue: 'release_anvil_enabled',
                value: false
              }
            }
          ]
        }
      ],
      '68a9b7e8de8cf11f80e4a880': []
    },
    editorConfigs: {
      '68a9b7e7de8cf11f80e4a871': [
        {
          controlType: 'SECTION_V2',
          identifier: 'SELECTOR',
          children: [
            {
              controlType: 'DOUBLE_COLUMN_ZONE',
              identifier: 'SELECTOR-Z1',
              children: [
                {
                  label: 'Command',
                  description: 'Choose method you would like to use to query the database',
                  configProperty: 'actionConfiguration.formData.command.data',
                  controlType: 'DROP_DOWN',
                  initialValue: 'FIND',
                  options: [
                    {
                      label: 'Find document(s)',
                      value: 'FIND'
                    },
                    {
                      label: 'Insert document(s)',
                      value: 'INSERT'
                    },
                    {
                      label: 'Update document(s)',
                      value: 'UPDATE'
                    },
                    {
                      label: 'Delete document(s)',
                      value: 'DELETE'
                    },
                    {
                      label: 'Count',
                      value: 'COUNT'
                    },
                    {
                      label: 'Distinct',
                      value: 'DISTINCT'
                    },
                    {
                      label: 'Aggregate',
                      value: 'AGGREGATE'
                    },
                    {
                      label: 'Raw',
                      value: 'RAW'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          controlType: 'SECTION',
          _comment: 'This section holds all the templates',
          children: [
            {
              controlType: 'SECTION_V2',
              identifier: 'AGGREGATE',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'AGGREGATE\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'AGGREGATE-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'AGGREGATE-Z2',
                  children: [
                    {
                      label: 'Array of pipelines',
                      configProperty: 'actionConfiguration.formData.aggregate.arrayPipelines.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '[{ $project: { tags: 1 } }, { $unwind: "$tags" }, { $group: { _id: "$tags", count: { $sum : 1 } } }  ]'
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'AGGREGATE-Z3',
                  children: [
                    {
                      label: 'Limit',
                      configProperty: 'actionConfiguration.formData.aggregate.limit.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      evaluationSubstitutionType: 'TEMPLATE',
                      initialValue: '10'
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'COUNT',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'COUNT\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'COUNT-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'COUNT-Z2',
                  children: [
                    {
                      label: 'Query',
                      configProperty: 'actionConfiguration.formData.count.query.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{rating : {$gte : 9}}'
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'DELETE',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'DELETE\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'DELETE-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'DELETE-Z2',
                  children: [
                    {
                      label: 'Query',
                      configProperty: 'actionConfiguration.formData.delete.query.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{rating : {$gte : 9}}'
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'DELETE-Z3',
                  children: [
                    {
                      label: 'Limit',
                      configProperty: 'actionConfiguration.formData.delete.limit.data',
                      controlType: 'DROP_DOWN',
                      '-subtitle': 'Allowed values: SINGLE, ALL',
                      '-tooltipText': 'Allowed values: SINGLE, ALL',
                      '-alternateViewTypes': [
                        'json'
                      ],
                      initialValue: 'SINGLE',
                      options: [
                        {
                          label: 'Single document',
                          value: 'SINGLE'
                        },
                        {
                          label: 'All matching documents',
                          value: 'ALL'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'DISTINCT',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'DISTINCT\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'DISTINCT-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'DISTINCT-Z2',
                  children: [
                    {
                      label: 'Query',
                      configProperty: 'actionConfiguration.formData.distinct.query.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{rating : {$gte : 9}}'
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'DISTINCT-Z3',
                  children: [
                    {
                      label: 'Key',
                      configProperty: 'actionConfiguration.formData.distinct.key.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: 'name'
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'FIND',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'FIND\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'FIND-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'FIND-Z2',
                  children: [
                    {
                      label: 'Query',
                      configProperty: 'actionConfiguration.formData.find.query.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{rating : {$gte : 9}}'
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'FIND-Z3',
                  children: [
                    {
                      label: 'Sort',
                      configProperty: 'actionConfiguration.formData.find.sort.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{name : 1}'
                    },
                    {
                      label: 'Projection',
                      configProperty: 'actionConfiguration.formData.find.projection.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{name : 1}'
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'FIND-Z4',
                  children: [
                    {
                      label: 'Limit',
                      configProperty: 'actionConfiguration.formData.find.limit.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '10'
                    },
                    {
                      label: 'Skip',
                      configProperty: 'actionConfiguration.formData.find.skip.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '0'
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'INSERT',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'INSERT\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'INSERT-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'INSERT-Z2',
                  children: [
                    {
                      label: 'Documents',
                      configProperty: 'actionConfiguration.formData.insert.documents.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '[ { _id: 1, user: "abc123", status: "A" } ]'
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'UPDATE',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'UPDATE\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'UPDATE-Z1',
                  children: [
                    {
                      label: 'Collection',
                      configProperty: 'actionConfiguration.formData.collection.data',
                      controlType: 'DROP_DOWN',
                      evaluationSubstitutionType: 'TEMPLATE',
                      propertyName: 'get_collections',
                      fetchOptionsConditionally: true,
                      alternateViewTypes: [
                        'json'
                      ],
                      conditionals: {
                        fetchDynamicValues: {
                          condition: '{{true}}',
                          config: {
                            params: {
                              requestType: '_GET_STRUCTURE',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'UPDATE-Z2',
                  children: [
                    {
                      label: 'Query',
                      configProperty: 'actionConfiguration.formData.updateMany.query.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{rating : {$gte : 9}}'
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'UPDATE-Z3',
                  children: [
                    {
                      label: 'Update',
                      configProperty: 'actionConfiguration.formData.updateMany.update.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      inputType: 'JSON',
                      evaluationSubstitutionType: 'TEMPLATE',
                      placeholderText: '{ $inc: { score: 1 } }'
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'UPDATE-Z4',
                  children: [
                    {
                      label: 'Limit',
                      configProperty: 'actionConfiguration.formData.updateMany.limit.data',
                      controlType: 'DROP_DOWN',
                      '-subtitle': 'Allowed values: SINGLE, ALL',
                      '-tooltipText': 'Allowed values: SINGLE, ALL',
                      '-alternateViewTypes': [
                        'json'
                      ],
                      initialValue: 'SINGLE',
                      options: [
                        {
                          label: 'Single document',
                          value: 'SINGLE'
                        },
                        {
                          label: 'All matching documents',
                          value: 'ALL'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'RAW',
              conditionals: {
                show: '{{actionConfiguration.formData.command.data === \'RAW\'}}'
              },
              children: [
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'RAW-Z1',
                  children: [
                    {
                      label: '',
                      propertyName: 'rawWithSmartSubstitute',
                      configProperty: 'actionConfiguration.formData.body.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      evaluationSubstitutionType: 'SMART_SUBSTITUTE',
                      conditionals: {
                        show: '{{actionConfiguration.formData.command.data === \'RAW\' && actionConfiguration.formData.smartSubstitution.data === true}}'
                      }
                    },
                    {
                      label: '',
                      configProperty: 'actionConfiguration.formData.body.data',
                      propertyName: 'rawWithTemplateSubstitute',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      evaluationSubstitutionType: 'TEMPLATE',
                      conditionals: {
                        show: '{{actionConfiguration.formData.command.data === \'RAW\' && actionConfiguration.formData.smartSubstitution.data === false}}'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '68a9b7e7de8cf11f80e4a86f': [
        {
          controlType: 'SECTION_V2',
          identifier: 'SECTION-ONE',
          isFullWidth: true,
          children: [
            {
              controlType: 'SINGLE_COLUMN_ZONE',
              identifier: 'SO-Z1',
              children: [
                {
                  label: '',
                  internalLabel: 'Query',
                  propertyName: 'postgres_query_non_prepared',
                  configProperty: 'actionConfiguration.body',
                  controlType: 'QUERY_DYNAMIC_TEXT',
                  evaluationSubstitutionType: 'PARAMETER',
                  hidden: {
                    path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                    comparison: 'EQUALS',
                    value: false
                  }
                },
                {
                  label: '',
                  internalLabel: 'Query',
                  propertyName: 'postgres_query_prepared',
                  configProperty: 'actionConfiguration.body',
                  controlType: 'QUERY_DYNAMIC_TEXT',
                  evaluationSubstitutionType: 'TEMPLATE',
                  hidden: {
                    path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                    comparison: 'EQUALS',
                    value: true
                  }
                }
              ]
            }
          ]
        }
      ],
      '68a9b7e7de8cf11f80e4a870': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Path',
              configProperty: 'actionConfiguration.path',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT'
            },
            {
              label: 'Body',
              configProperty: 'actionConfiguration.body',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'SMART_SUBSTITUTE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: false
              }
            },
            {
              label: 'Body',
              configProperty: 'actionConfiguration.body',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'TEMPLATE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: true
              }
            },
            {
              label: 'Query parameters',
              configProperty: 'actionConfiguration.queryParameters',
              controlType: 'ARRAY_FIELD',
              schema: [
                {
                  label: 'Key',
                  key: 'key',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Key'
                },
                {
                  label: 'Value',
                  key: 'value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Value'
                }
              ]
            },
            {
              label: 'Headers',
              configProperty: 'actionConfiguration.headers',
              controlType: 'ARRAY_FIELD',
              schema: [
                {
                  label: 'Key',
                  key: 'key',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Key'
                },
                {
                  label: 'Value',
                  key: 'value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Value'
                }
              ]
            },
            {
              label: 'Form data',
              configProperty: 'actionConfiguration.bodyFormData',
              controlType: 'ARRAY_FIELD',
              schema: [
                {
                  label: 'Key',
                  key: 'key',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Key'
                },
                {
                  label: 'Value',
                  key: 'value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Value'
                }
              ]
            },
            {
              label: 'Query variables',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[1].value',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'SMART_SUBSTITUTE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: false
              }
            },
            {
              label: 'Query variables',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[1].value',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'TEMPLATE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: true
              }
            },
            {
              label: 'Pagination',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[2].value',
              controlType: 'E_GRAPHQL_PAGINATION',
              evaluationSubstitutionType: 'SMART_SUBSTITUTE'
            }
          ]
        }
      ],
      '68a9b7e9de8cf11f80e4a891': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Path',
              configProperty: 'actionConfiguration.path',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT'
            },
            {
              label: 'Body',
              configProperty: 'actionConfiguration.body',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'SMART_SUBSTITUTE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: false
              }
            },
            {
              label: 'Body',
              configProperty: 'actionConfiguration.body',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'TEMPLATE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: true
              }
            },
            {
              label: 'Query parameters',
              configProperty: 'actionConfiguration.queryParameters',
              controlType: 'ARRAY_FIELD',
              schema: [
                {
                  label: 'Key',
                  key: 'key',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Key'
                },
                {
                  label: 'Value',
                  key: 'value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Value'
                }
              ]
            },
            {
              label: 'Headers',
              configProperty: 'actionConfiguration.headers',
              controlType: 'ARRAY_FIELD',
              schema: [
                {
                  label: 'Key',
                  key: 'key',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Key'
                },
                {
                  label: 'Value',
                  key: 'value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Value'
                }
              ]
            },
            {
              label: 'Form data',
              configProperty: 'actionConfiguration.bodyFormData',
              controlType: 'ARRAY_FIELD',
              schema: [
                {
                  label: 'Key',
                  key: 'key',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Key'
                },
                {
                  label: 'Value',
                  key: 'value',
                  controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                  placeholderText: 'Value'
                }
              ]
            },
            {
              label: 'Query variables',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[1].value',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'SMART_SUBSTITUTE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: false
              }
            },
            {
              label: 'Query variables',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[1].value',
              controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
              evaluationSubstitutionType: 'TEMPLATE',
              hidden: {
                path: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
                comparison: 'EQUALS',
                value: true
              }
            },
            {
              label: 'Pagination',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[2].value',
              controlType: 'E_GRAPHQL_PAGINATION',
              evaluationSubstitutionType: 'SMART_SUBSTITUTE'
            }
          ]
        }
      ],
      '68a9b7eede8cf11f80e4a899': [
        {
          controlType: 'SECTION_V2',
          identifier: 'SELECTOR',
          children: [
            {
              controlType: 'DOUBLE_COLUMN_ZONE',
              identifier: 'SELECTOR-Z1',
              children: [
                {
                  label: 'Action',
                  description: 'Choose the action you would like to use',
                  configProperty: 'actionConfiguration.formData.usecase.data',
                  controlType: 'DROP_DOWN',
                  isRequired: true,
                  initialValue: 'TEXT_GENERATE',
                  options: [
                    {
                      label: 'Generate text',
                      value: 'TEXT_GENERATE'
                    },
                    {
                      label: 'Classify text',
                      value: 'TEXT_CLASSIFY'
                    },
                    {
                      label: 'Summarise text',
                      value: 'TEXT_SUMMARY'
                    },
                    {
                      label: 'Extract entities from text',
                      value: 'TEXT_ENTITY_EXTRACT'
                    },
                    {
                      label: 'Classify Image',
                      value: 'IMAGE_CLASSIFY'
                    },
                    {
                      label: 'Describe Image',
                      value: 'IMAGE_CAPTION'
                    },
                    {
                      label: 'Extract entities from image',
                      value: 'IMAGE_ENTITY_EXTRACT'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          controlType: 'SECTION',
          _comment: 'This section holds all the templates',
          children: [
            {
              controlType: 'SECTION_V2',
              identifier: 'TEXT_GENERATE',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'TEXT_GENERATE\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'TEXT-GENERATE-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'Email Response',
                          value: {
                            'actionConfiguration.formData.textGeneration.input.data': 'Write an 100 word apologetic email response to a delay in order shipment due to operational reasons and assure them that the order will be delivered today'
                          }
                        },
                        {
                          label: 'Product description',
                          value: {
                            'actionConfiguration.formData.textGeneration.input.data': 'Write a creative product description for an electric car named RevaX, with the keywords- fast charging, 200 miles per single charge, compact, eco-friendly, economical. This is targeted towards a climate concious tech/EV enthusiast who enjoys driving. Also describe the benefits of this product in less than 80 words'
                          }
                        },
                        {
                          label: 'Candidate response',
                          value: {
                            'actionConfiguration.formData.textGeneration.input.data': 'Write a personalised email rejecting Bob’s application for the Software Engineering position at Acme corp due to gaps in technical skills. Make sure the email has a polite tone but contains less than 150 words.'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'TEXT-GENERATE-Z2',
                  children: [
                    {
                      label: 'Prompt',
                      Description: 'Provide a prompt for AI to generate text',
                      subtitle: 'Provide a prompt for AI to generate text',
                      configProperty: 'actionConfiguration.formData.textGeneration.input.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      initialValue: '',
                      isRequired: true
                    }
                  ]
                },
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'TEXT-GENERATE-Z3',
                  children: [
                    {
                      label: 'Use context from files',
                      tooltipText: 'Enhance the AI response by providing custom context. Using this option will generate accurate responses that are grounded in file contents.',
                      subtitle: 'Select files for enhanced AI responses based on file contents. Upload files on the datasource (Data > your Appsmith AI Datasource > Edit > Upload files)',
                      isRequired: false,
                      propertyName: 'fileIds',
                      configProperty: 'actionConfiguration.formData.fileIds.data',
                      controlType: 'DROP_DOWN',
                      initialValue: [],
                      options: [],
                      isMultiSelect: true,
                      placeholderText: 'Select files',
                      fetchOptionsConditionally: true,
                      conditionals: {
                        enable: '{{true}}',
                        fetchDynamicValues: {
                          condition: '{{actionConfiguration.formData.usecase.data === \'TEXT_GENERATE\'}}',
                          config: {
                            params: {
                              requestType: 'LIST_FILES',
                              displayType: 'DROP_DOWN'
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'TEXT_CLASSIFY',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'TEXT_CLASSIFY\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'TEXT-CLASSIFY-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'Customer support',
                          value: {
                            'actionConfiguration.formData.textClassify.input.data': '["Hello, I recently made a purchase on your platform, but I encountered an issue during the payment process. The transaction didnt go through, and Im unsure of the cause. Could you please assist? Best, Alice",\n“Hi Alice, We apologize for any inconvenience. To assist you better, could you provide us with the error message you received, if any? Also, please check if your payment method is valid. Thanks, Support Team",\n"I didnt receive any specific error message; the transaction just failed. My payment method should be working fine as I used it elsewhere without any problems. Regards, Alice",\n"Thank you for the information, Alice. We will look into this matter and update you as soon as we have more information. In the meantime, could you try a different payment method? Best, Support Team"]',
                            'actionConfiguration.formData.textClassify.instructions.data': 'If no label fits the input, apply “General” label',
                            'actionConfiguration.formData.textClassify.labels.data': 'Technical, Urgent, Billing, Account, Upgrade, Bug, Refund'
                          }
                        },
                        {
                          label: 'Product review',
                          value: {
                            'actionConfiguration.formData.textClassify.input.data': 'Received my laptop stand from Macazon after a significant delay in delivery, which was a bit disappointing. Upon unboxing, I noticed the build seemed sturdy, but unfortunately, the stand doesn\'t function as expected. It\'s supposed to be adjustable, but the mechanism is quite stiff, making it challenging to change angles or heights.',
                            'actionConfiguration.formData.textClassify.instructions.data': 'Strictly apply only one label',
                            'actionConfiguration.formData.textClassify.labels.data': 'Positive, Neutral, Negative'
                          }
                        },
                        {
                          label: 'GitHub Issue',
                          value: {
                            'actionConfiguration.formData.textClassify.input.data': 'When console statement is long then the text is truncated when printed on the debugger as seen in the screenshot\n\nSteps To Reproduce\nAdd following statement to the editor and execute the function to observe truncation\nconsole.log(\'This is a long statement to display truncation issue present on the debugger. You can see this statement not being printed in whole\')',
                            'actionConfiguration.formData.textClassify.instructions.data': '',
                            'actionConfiguration.formData.textClassify.labels.data': 'Bug, Feature Request, Enhancement'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'TEXT-CLASSIFY-Z2',
                  children: [
                    {
                      label: 'Input',
                      Description: 'Provide some text for AI to classify',
                      subtitle: 'Provide some text for AI to classify',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      configProperty: 'actionConfiguration.formData.textClassify.input.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Labels',
                      Description: 'Provide a comma separated list of labels to classify the Input on',
                      subtitle: 'Provide a comma separated list of labels to classify the Input on',
                      configProperty: 'actionConfiguration.formData.textClassify.labels.data',
                      placeholderText: 'Write a list of comma separated text values or use {{ }} to reference a dynamic value',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Additional Instructions',
                      Description: 'Provide additional instructions for the AI to tweak the text classification',
                      subtitle: 'Provide additional instructions for the AI to tweak the text classification',
                      configProperty: 'actionConfiguration.formData.textClassify.instructions.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      initialValue: '',
                      isRequired: false
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'TEXT_SUMMARY',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'TEXT_SUMMARY\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'TEXT-SUMMARY-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'Support conversation',
                          value: {
                            'actionConfiguration.formData.textSummary.input.data': '["Hey team, I am experiencing difficulties with logging into my account. Despite entering the correct credentials, I keep getting an error message. This issue is preventing me from accessing your services, and I would appreciate a prompt resolution. Regards, Bob", \n"Hello Bob, Thank you for reaching out. We apologize for the inconvenience. Can you please confirm if you have tried resetting your password? Additionally, please ensure that your browser is up-to-date. Best, Support Team",\n"Hi, I tried resetting my password, but the issue persists. Also, my browser is updated to the latest version. Can you please look into this further? Thanks, Bob",\n"Thank you for the update, Bob. We will investigate this further and get back to you shortly. In the meantime, can you try accessing your account from a different device? Regards, Support Team"]',
                            'actionConfiguration.formData.textSummary.instructions.data': 'The input is a customer support conversation and contains an array of messages between the customer and the support agent. Summarise the conversation in less than 200 words.'
                          }
                        },
                        {
                          label: 'Blog post',
                          value: {
                            'actionConfiguration.formData.textSummary.input.data': 'The iPhone 15, Apple\'s latest entry in its iconic smartphone series, is a testament to the company\'s continued innovation and commitment to user experience. This review delves into its design, performance, camera, battery life, and unique features, offering a comprehensive overview for both tech enthusiasts and the average consumer. The iPhone 15 sports a sleek design that follows Apple\'s philosophy of elegance and simplicity. The chassis, a harmonious blend of glass and stainless steel, feels robust yet luxurious. It’s slightly lighter than its predecessor, making it more comfortable to hold for extended periods. The standout design element is the bezel-less OLED display, which offers an immersive viewing experience. The IP68 rating ensures durability against dust and water, making it a reliable companion for everyday use. The Super Retina XDR display on the iPhone 15 is a visual feast. The colors are vibrant, and the blacks are deep, thanks to the OLED technology. With a 120Hz refresh rate, the responsiveness is fluid, whether scrolling through web pages or playing high-intensity games. The brightness levels are impressive, offering excellent visibility even in direct sunlight.\nAudio quality has also seen an upgrade. The speakers deliver richer and more detailed sound, enhancing the overall multimedia experience. Whether it\'s watching movies or playing games, the audio is immersive and well-balanced. At the heart of the iPhone 15 is Apple\'s new A17 Bionic chip, which sets a new benchmark in smartphone performance. Coupled with improved machine learning capabilities and a more efficient GPU, it handles everything from everyday tasks to demanding applications with ease. The iOS integration is seamless, providing a user-friendly and intuitive interface. The camera system on the iPhone 15 is where Apple has made significant strides. The new sensor-shift optical image stabilization is a game-changer, particularly in low-light conditions. The images are sharp, with excellent dynamic range and color accuracy. The Night mode is more refined, capturing stunning details in dark environments.\nThe video capabilities are equally impressive. The Cinematic mode, which allows for depth-of-field adjustments, brings a professional touch to video recordings. The ProRAW and ProRes formats cater to professional photographers and videographers who demand higher control and quality. Battery life has always been a strong suit for iPhones, and the iPhone 15 continues this tradition. Even with heavy usage, the phone comfortably lasts a full day, thanks to the efficiency of the A17 chip and the larger battery. The fast charging and MagSafe wireless charging are convenient, though the absence of a charging brick in the box may be a point of contention for some users.The iPhone 15 introduces some noteworthy features. The integration of satellite connectivity for emergency services is a significant safety addition. The improved Face ID works flawlessly, even with masks, making it more practical in current times. The iPhone 15 is a remarkable smartphone that balances innovation with user experience. While it follows the evolutionary path rather than a revolutionary leap, the refinements in camera technology, performance, and unique features like satellite connectivity make it a compelling choice for anyone looking to upgrade. The higher price point might be a hurdle, but for those invested in the Apple ecosystem, the iPhone 15 offers a seamless and premium experience that\'s hard to match.',
                            'actionConfiguration.formData.textSummary.instructions.data': 'Summarise the phone review in less than 250 words and highlight the key features.'
                          }
                        },
                        {
                          label: 'Inspection report',
                          value: {
                            'actionConfiguration.formData.textSummary.input.data': 'So, this Honda Civic here is 5 years old, got an automatic transmission, and a 1.2L engine. She\'s been on the road for about 50,000 km. Overall, she\'s doing okay, but there are a few things that need some attention. The brake pads are pretty much worn out. It\'s important to get these changed soon for safety, especially when you need to stop quickly or in wet conditions. Next, let\'s talk tires. The tread on these is getting pretty low, almost hitting the legal limit. Definitely need new ones for a better grip on the road, you don\'t want to be slipping around, especially when it\'s raining. Now, the battery is showing its age, not holding charge like it used to. Wouldn\'t be surprised if one day it just doesn\'t start the car. Better to swap it out now than be stuck later. The suspension bushings, too, are worn. Changing them will definitely improve the ride, make it smoother. The rest of the car – the engine, transmission, and the interior – they\'re all in pretty good shape. Just the usual signs of use, nothing major. If you keep up with regular maintenance and take care of these issues I\'ve mentioned, she\'s going to keep running smoothly for a good long time. Regular check-ups, fixing these bits, and she\'ll be good as new.',
                            'actionConfiguration.formData.textSummary.instructions.data': 'Summarise the inspection report in less than 100 words and highlight the most important points to be noted'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'TEXT-SUMMARY-Z2',
                  children: [
                    {
                      label: 'Input',
                      Description: 'Provide some text for AI to summarise',
                      subtitle: 'Provide some text for AI to summarise',
                      configProperty: 'actionConfiguration.formData.textSummary.input.data',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Additional Instructions',
                      Description: 'Provide additional instructions for the AI to tweak the summarization',
                      subtitle: 'Provide additional instructions for the AI to tweak the summarization',
                      configProperty: 'actionConfiguration.formData.textSummary.instructions.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      initialValue: '',
                      isRequired: false
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'TEXT_ENTITY_EXTRACT',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'TEXT_ENTITY_EXTRACT\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'TEXT-ENTITY-EXTRACT-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'Customer support',
                          value: {
                            'actionConfiguration.formData.textEntity.input.data': 'Dear team,\n\nI have a query regarding the address update process in my profile. I recently moved to a new location, and I need to update my address to 1234 Oak Street, Newville, NV 12345. However, I am encountering an error on the website. Could you assist me with this? My account number is 99892.\n\nRegards, \nMark ',
                            'actionConfiguration.formData.textEntity.instructions.data': 'If you’re unable to extract an entity, respond with "Not found"',
                            'actionConfiguration.formData.textEntity.labels.data': 'name, address, account number, gender'
                          }
                        },
                        {
                          label: 'Inspection report',
                          value: {
                            'actionConfiguration.formData.textEntity.input.data': 'The 2018 Toyota Camry with a mileage of 45,000 miles, VIN 1HGBH41JXMN109186, was thoroughly inspected on January 9, 2024. The engine and transmission are in good condition, showing no significant issues and well-maintained fluid levels. The brakes, however, require attention with the front brake pads and rear brake discs needing replacement due to wear and warping. The suspension system also needs attention; both front struts and rear shock absorbers show signs of leakage and wear and are recommended for replacement. Tire inspection revealed uneven wear patterns with the front left and rear right tires nearing the legal limit for tread depth, necessitating replacement. The exhaust system is in good condition with no observable leaks or corrosion. The electrical system needs attention, particularly the battery, which shows reduced capacity and needs replacement. Cooling system checks out well with adequate coolant levels and no leaks. Some lights and indicators, including the right headlight bulb and rear left turn indicator, are non-functional or dimming and need replacing. The windshield wipers are ineffective and require replacement. Interior components and the body and frame are in good condition, showing only minor wear and superficial damage. In conclusion, while the 2018 Toyota Camry is generally in good condition, it requires maintenance, particularly for the braking system, suspension, tires, electrical systems, lights, and windshield wipers. Addressing these issues will ensure the vehicle’s safety and performance. Regular check-ups are advised to monitor the condition of parts currently in good or fair condition. This inspection was conducted by John Doe, an ASE Certified Mechanic, at XYZ Auto Service Center.',
                            'actionConfiguration.formData.textEntity.instructions.data': 'Remove special characters in the VIN and extract the date in MM/DD/YYYY format.',
                            'actionConfiguration.formData.textEntity.labels.data': 'year, make, model, VIN, date, mechanic name, service centre name, overall condition'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'TEXT-ENTITY-EXTRACT-Z2',
                  children: [
                    {
                      label: 'Input',
                      Description: 'Provide some text for AI to extract entities from',
                      subtitle: 'Provide some text for AI to extract entities from',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      configProperty: 'actionConfiguration.formData.textEntity.input.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Entities',
                      Description: 'Provide a comma separated list of entities to extract from the Input',
                      subtitle: 'Provide a comma separated list of entities to extract from the Input',
                      placeholderText: 'Write a list of comma separated text values or use {{ }} to reference a dynamic value',
                      configProperty: 'actionConfiguration.formData.textEntity.labels.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Additional Instructions',
                      Description: 'Provide additional instructions for the AI to tweak the entity extraction',
                      subtitle: 'Provide additional instructions for the AI to tweak the entity extraction',
                      configProperty: 'actionConfiguration.formData.textEntity.instructions.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      initialValue: '',
                      isRequired: false
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'IMAGE_CLASSIFY',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'IMAGE_CLASSIFY\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'IMAGE-CLASSIFY-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'Product category',
                          value: {
                            'actionConfiguration.formData.imageClassify.input.data': 'https://i.imgur.com/Eiq5s0F.png',
                            'actionConfiguration.formData.imageClassify.instructions.data': 'Identify the category of clothing. Apply only one category.',
                            'actionConfiguration.formData.imageClassify.labels.data': 'Jacket, Shirt, Pant, T-Shirt, Shorts, Dress, Skirt'
                          }
                        },
                        {
                          label: 'IT Asset Tagging',
                          value: {
                            'actionConfiguration.formData.imageClassify.input.data': 'https://i.imgur.com/EqfqRQY.png',
                            'actionConfiguration.formData.imageClassify.instructions.data': 'Tag the IT hardware.',
                            'actionConfiguration.formData.imageClassify.labels.data': 'Laptop, Phone, Headphones, Mouse, Keyboard, Monitor'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'IMAGE-CLASSIFY-Z2',
                  children: [
                    {
                      label: 'Input',
                      Description: 'Provide an image URL or the base64 encoded image for AI to extract entities from',
                      subtitle: 'Provide an image URL or the base64 encoded image for AI to extract entities from',
                      configProperty: 'actionConfiguration.formData.imageClassify.input.data',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Labels',
                      Description: 'Provide labels as comma-separated string input for classification',
                      subtitle: 'Provide a comma separated list of labels to classify the Input on',
                      configProperty: 'actionConfiguration.formData.imageClassify.labels.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      placeholderText: 'Write a list of comma separated text values or use {{ }} to reference a dynamic value',
                      isRequired: true
                    },
                    {
                      label: 'Additional Instructions',
                      Description: 'Provide additional instructions to tweak the classification',
                      subtitle: 'Provide additional instructions to tweak the classification',
                      configProperty: 'actionConfiguration.formData.imageClassify.instructions.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      isRequired: false,
                      initialValue: ''
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'IMAGE_CAPTION',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'IMAGE_CAPTION\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'IMAGE-CAPTION-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'Product description',
                          value: {
                            'actionConfiguration.formData.imageCaption.input.data': 'https://i.imgur.com/Eiq5s0F.png',
                            'actionConfiguration.formData.imageCaption.instructions.data': 'Write a 200 word product description'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'IMAGE-CAPTION-Z2',
                  children: [
                    {
                      label: 'Input',
                      Description: 'Provide an image URL or the base64 encoded image',
                      subtitle: 'Provide an image URL or the base64 encoded image',
                      configProperty: 'actionConfiguration.formData.imageCaption.input.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      isRequired: true
                    },
                    {
                      label: 'Additional Instructions',
                      Description: 'Provide additional instructions to tweak the caption',
                      subtitle: 'Provide additional instructions to tweak the caption',
                      configProperty: 'actionConfiguration.formData.imageCaption.instructions.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      isRequired: false,
                      initialValue: ''
                    }
                  ]
                }
              ]
            },
            {
              controlType: 'SECTION_V2',
              identifier: 'IMAGE_ENTITY_EXTRACT',
              conditionals: {
                show: '{{actionConfiguration.formData.usecase.data === \'IMAGE_ENTITY_EXTRACT\'}}'
              },
              children: [
                {
                  controlType: 'DOUBLE_COLUMN_ZONE',
                  identifier: 'IMAGE-ENTITY-EXTRACT-Z1',
                  children: [
                    {
                      label: 'Try out these examples',
                      Description: 'Try out these examples',
                      subtitle: '',
                      configProperty: '',
                      controlType: 'FORM_TEMPLATE',
                      isRequired: false,
                      options: [
                        {
                          label: 'KYC document',
                          value: {
                            'actionConfiguration.formData.imageEntity.input.data': 'https://i.imgur.com/5h9SfGf.jpgg',
                            'actionConfiguration.formData.imageEntity.labels.data': 'name, date of birth, gender, licence number, height',
                            'actionConfiguration.formData.imageEntity.instructions.data': ''
                          }
                        },
                        {
                          label: 'Expense report',
                          value: {
                            'actionConfiguration.formData.imageEntity.input.data': 'https://i.imgur.com/z2PlaKB.jpg',
                            'actionConfiguration.formData.imageEntity.labels.data': 'food items, tax, total cost, date of purchase',
                            'actionConfiguration.formData.imageEntity.instructions.data': 'The date should be in dd/mm/yyyy format'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  controlType: 'SINGLE_COLUMN_ZONE',
                  identifier: 'IMAGE-ENTITY-EXTRACT-Z2',
                  children: [
                    {
                      label: 'Input',
                      Description: 'Provide an image URL or the base64 encoded image',
                      subtitle: 'Provide an image URL or the base64 encoded image',
                      configProperty: 'actionConfiguration.formData.imageEntity.input.data',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      isRequired: true
                    },
                    {
                      label: 'Entities',
                      Description: 'Provide a comma separated list of entities to extract from the Input',
                      subtitle: 'Provide a comma separated list of entities to extract from the Input',
                      configProperty: 'actionConfiguration.formData.imageEntity.labels.data',
                      controlType: 'QUERY_DYNAMIC_INPUT_TEXT',
                      placeholderText: 'Write a list of comma separated text values or use {{ }} to reference a dynamic value',
                      isRequired: true
                    },
                    {
                      label: 'Additional Instructions',
                      Description: 'Provide additional instructions for the AI to tweak the entity extraction',
                      subtitle: 'Provide additional instructions for the AI to tweak the entity extraction',
                      configProperty: 'actionConfiguration.formData.imageEntity.instructions.data',
                      controlType: 'QUERY_DYNAMIC_TEXT',
                      placeholderText: 'Write some text or use {{ }} to reference a dynamic text value',
                      initialValue: '',
                      isRequired: false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '68a9b7e8de8cf11f80e4a880': []
    },
    settingConfigs: {
      '68a9b7e7de8cf11f80e4a871': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Run behavior',
              configProperty: 'runBehaviour',
              controlType: 'DROP_DOWN',
              initialValue: 'MANUAL',
              options: [
                {
                  label: 'Automatic',
                  subText: 'Query runs on page load or when a variable it depends on changes',
                  value: 'AUTOMATIC'
                },
                {
                  label: 'On page load',
                  subText: 'Query runs when the page loads or when manually triggered',
                  value: 'ON_PAGE_LOAD'
                },
                {
                  label: 'Manual',
                  subText: 'Query only runs when called in an event or JS with .run()',
                  value: 'MANUAL'
                }
              ]
            },
            {
              label: 'Request confirmation before running this query',
              configProperty: 'confirmBeforeExecute',
              controlType: 'SWITCH',
              tooltipText: 'Ask confirmation from the user each time before refreshing data'
            },
            {
              label: 'Smart BSON substitution',
              tooltipText: 'Turning on this property fixes the BSON substitution of bindings in the Mongo BSON document by adding/removing quotes intelligently and reduces developer errors',
              configProperty: 'actionConfiguration.formData.smartSubstitution.data',
              controlType: 'SWITCH',
              initialValue: true
            },
            {
              label: 'Query timeout (in milliseconds)',
              subtitle: 'Maximum time after which the query will return',
              configProperty: 'actionConfiguration.timeoutInMillisecond',
              controlType: 'INPUT_TEXT',
              dataType: 'NUMBER'
            }
          ]
        }
      ],
      '68a9b7e7de8cf11f80e4a86f': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Run behavior',
              configProperty: 'runBehaviour',
              controlType: 'DROP_DOWN',
              initialValue: 'MANUAL',
              options: [
                {
                  label: 'Automatic',
                  subText: 'Query runs on page load or when a variable it depends on changes',
                  value: 'AUTOMATIC'
                },
                {
                  label: 'On page load',
                  subText: 'Query runs when the page loads or when manually triggered',
                  value: 'ON_PAGE_LOAD'
                },
                {
                  label: 'Manual',
                  subText: 'Query only runs when called in an event or JS with .run()',
                  value: 'MANUAL'
                }
              ]
            },
            {
              label: 'Request confirmation before running this query',
              configProperty: 'confirmBeforeExecute',
              controlType: 'SWITCH',
              tooltipText: 'Ask confirmation from the user each time before refreshing data'
            },
            {
              label: 'Use prepared statements',
              tooltipText: 'Prepared statements prevent SQL injections on your queries but do not support dynamic bindings outside values in your SQL',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
              controlType: 'SWITCH',
              initialValue: true
            },
            {
              label: 'Query timeout (in milliseconds)',
              subtitle: 'Maximum time after which the query will return',
              configProperty: 'actionConfiguration.timeoutInMillisecond',
              controlType: 'INPUT_TEXT',
              dataType: 'NUMBER'
            }
          ]
        }
      ],
      '68a9b7e7de8cf11f80e4a870': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Run behavior',
              configProperty: 'runBehaviour',
              controlType: 'DROP_DOWN',
              initialValue: 'MANUAL',
              options: [
                {
                  label: 'Automatic',
                  subText: 'Query runs on page load or when a variable it depends on changes',
                  value: 'AUTOMATIC',
                  children: 'Automatic'
                },
                {
                  label: 'On page load',
                  subText: 'Query runs when the page loads or when manually triggered',
                  value: 'ON_PAGE_LOAD',
                  children: 'On page load'
                },
                {
                  label: 'Manual',
                  subText: 'Query only runs when called in an event or JS with .run()',
                  value: 'MANUAL',
                  children: 'Manual'
                }
              ]
            },
            {
              label: 'Request confirmation before running this API',
              configProperty: 'confirmBeforeExecute',
              controlType: 'SWITCH',
              tooltipText: 'Ask confirmation from the user each time before refreshing data'
            },
            {
              label: 'Encode query params',
              configProperty: 'actionConfiguration.encodeParamsToggle',
              controlType: 'SWITCH',
              tooltipText: 'Encode query params for all APIs. Also encode form body when Content-Type header is set to x-www-form-encoded'
            },
            {
              label: 'Smart JSON substitution',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
              controlType: 'SWITCH',
              tooltipText: 'Turning on this property fixes the JSON substitution of bindings in API body by adding/removing quotes intelligently and reduces developer errors',
              initialValue: true
            },
            {
              label: 'Protocol',
              configProperty: 'actionConfiguration.httpVersion',
              name: 'actionConfiguration.httpVersion',
              controlType: 'DROP_DOWN',
              initialValue: 'HTTP/1.1',
              options: [
                {
                  label: 'HTTP/1.1',
                  value: 'HTTP11'
                },
                {
                  label: 'HTTP/2',
                  value: 'H2'
                },
                {
                  label: 'H2C',
                  value: 'H2C'
                }
              ],
              placeholder: 'Select HTTP Protocol'
            },
            {
              label: 'API timeout (in milliseconds)',
              subtitle: 'Maximum time after which the API will return',
              controlType: 'INPUT_TEXT',
              configProperty: 'actionConfiguration.timeoutInMillisecond',
              dataType: 'NUMBER'
            }
          ]
        }
      ],
      '68a9b7e9de8cf11f80e4a891': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Run behavior',
              configProperty: 'runBehaviour',
              controlType: 'DROP_DOWN',
              initialValue: 'MANUAL',
              options: [
                {
                  label: 'Automatic',
                  subText: 'Query runs on page load or when a variable it depends on changes',
                  value: 'AUTOMATIC',
                  children: 'Automatic'
                },
                {
                  label: 'On page load',
                  subText: 'Query runs when the page loads or when manually triggered',
                  value: 'ON_PAGE_LOAD',
                  children: 'On page load'
                },
                {
                  label: 'Manual',
                  subText: 'Query only runs when called in an event or JS with .run()',
                  value: 'MANUAL',
                  children: 'Manual'
                }
              ]
            },
            {
              label: 'Request confirmation before running this API',
              configProperty: 'confirmBeforeExecute',
              controlType: 'SWITCH',
              tooltipText: 'Ask confirmation from the user each time before refreshing data'
            },
            {
              label: 'Encode query params',
              configProperty: 'actionConfiguration.encodeParamsToggle',
              controlType: 'SWITCH',
              tooltipText: 'Encode query params for all APIs. Also encode form body when Content-Type header is set to x-www-form-encoded'
            },
            {
              label: 'Smart JSON substitution',
              configProperty: 'actionConfiguration.pluginSpecifiedTemplates[0].value',
              controlType: 'SWITCH',
              tooltipText: 'Turning on this property fixes the JSON substitution of bindings in API body by adding/removing quotes intelligently and reduces developer errors',
              initialValue: true
            },
            {
              label: 'Protocol',
              configProperty: 'actionConfiguration.httpVersion',
              name: 'actionConfiguration.httpVersion',
              controlType: 'DROP_DOWN',
              initialValue: 'HTTP/1.1',
              options: [
                {
                  label: 'HTTP/1.1',
                  value: 'HTTP11'
                },
                {
                  label: 'HTTP/2',
                  value: 'H2'
                },
                {
                  label: 'H2C',
                  value: 'H2C'
                }
              ],
              placeholder: 'Select HTTP Protocol'
            },
            {
              label: 'API timeout (in milliseconds)',
              subtitle: 'Maximum time after which the API will return',
              controlType: 'INPUT_TEXT',
              configProperty: 'actionConfiguration.timeoutInMillisecond',
              dataType: 'NUMBER'
            }
          ]
        }
      ],
      '68a9b7eede8cf11f80e4a899': [
        {
          sectionName: '',
          id: 1,
          children: [
            {
              label: 'Run behavior',
              configProperty: 'runBehaviour',
              controlType: 'DROP_DOWN',
              initialValue: 'MANUAL',
              options: [
                {
                  label: 'Automatic',
                  subText: 'Query runs on page load or when a variable it depends on changes',
                  value: 'AUTOMATIC'
                },
                {
                  label: 'On page load',
                  subText: 'Query runs when the page loads or when manually triggered',
                  value: 'ON_PAGE_LOAD'
                },
                {
                  label: 'Manual',
                  subText: 'Query only runs when called in an event or JS with .run()',
                  value: 'MANUAL'
                }
              ]
            },
            {
              label: 'Request confirmation before running this query',
              configProperty: 'confirmBeforeExecute',
              controlType: 'SWITCH',
              tooltipText: 'Ask confirmation from the user each time before refreshing data'
            },
            {
              label: 'Query timeout (in milliseconds)',
              subtitle: 'Maximum time after which the query will return',
              configProperty: 'actionConfiguration.timeoutInMillisecond',
              controlType: 'INPUT_TEXT',
              initialValue: 60000,
              dataType: 'NUMBER'
            }
          ]
        }
      ],
      '68a9b7e8de8cf11f80e4a880': []
    },
    datasourceFormButtonConfigs: {
      '68a9b7e7de8cf11f80e4a871': [
        'TEST',
        'CANCEL',
        'SAVE'
      ],
      '68a9b7e7de8cf11f80e4a86f': [
        'TEST',
        'CANCEL',
        'SAVE'
      ],
      '68a9b7e7de8cf11f80e4a870': [
        'CANCEL',
        'SAVE'
      ],
      '68a9b7e9de8cf11f80e4a891': [
        'CANCEL',
        'SAVE'
      ],
      '68a9b7eede8cf11f80e4a899': [
        'CANCEL',
        'SAVE'
      ]
    },
    dependencies: {
      '68a9b7e7de8cf11f80e4a871': {
        'actionConfiguration.formData.body.data': [
          'actionConfiguration.formData.smartSubstitution.data'
        ]
      },
      '68a9b7e7de8cf11f80e4a86f': {
        'actionConfiguration.body': [
          'actionConfiguration.pluginSpecifiedTemplates[0].value'
        ]
      },
      '68a9b7e7de8cf11f80e4a870': {
        'actionConfiguration.body': [
          'actionConfiguration.pluginSpecifiedTemplates[0].value'
        ]
      },
      '68a9b7e9de8cf11f80e4a891': {
        'actionConfiguration.body': [
          'actionConfiguration.pluginSpecifiedTemplates[0].value'
        ]
      },
      '68a9b7eede8cf11f80e4a899': {},
      '68a9b7e8de8cf11f80e4a880': {}
    },
    fetchingSinglePluginForm: {},
    fetchingDefaultPlugins: false,
    upcomingPlugins: {
      list: [
        {
          name: 'Asana',
          iconLocation: 'https://assets.appsmith.com/asana.png'
        },
        {
          name: 'Confluence',
          iconLocation: 'https://assets.appsmith.com/confluence.png'
        },
        {
          name: 'Github',
          iconLocation: 'https://assets.appsmith.com/github.png'
        },
        {
          name: 'Gmail',
          iconLocation: 'https://assets.appsmith.com/gmail.png'
        },
        {
          name: 'Google Calendar',
          iconLocation: 'https://assets.appsmith.com/googlecalendar.png'
        },
        {
          name: 'Google Docs',
          iconLocation: 'https://assets.appsmith.com/googledocs.png'
        },
        {
          name: 'Google Drive',
          iconLocation: 'https://assets.appsmith.com/googledrive.png'
        },
        {
          name: 'Jira',
          iconLocation: 'https://assets.appsmith.com/jira.png'
        },
        {
          name: 'Notion',
          iconLocation: 'https://assets.appsmith.com/notion.png'
        },
        {
          name: 'Outlook',
          iconLocation: 'https://assets.appsmith.com/outlook.png'
        },
        {
          name: 'Salesforce',
          iconLocation: 'https://assets.appsmith.com/salesforce.png'
        },
        {
          name: 'Slack',
          iconLocation: 'https://assets.appsmith.com/slack.png'
        },
        {
          name: 'Zendesk',
          iconLocation: 'https://assets.appsmith.com/zendesk.png'
        },
        {
          name: 'Zoom',
          iconLocation: 'https://assets.appsmith.com/zoom.png'
        },
        {
          name: 'Stripe',
          iconLocation: 'https://assets.appsmith.com/stripe.png'
        },
        {
          name: 'Gong',
          iconLocation: 'https://assets.appsmith.com/gong.png'
        },
        {
          name: 'SharePoint',
          iconLocation: 'https://assets.appsmith.com/sharepoint-logo.png'
        },
        {
          name: 'Intercom',
          iconLocation: 'https://assets.appsmith.com/intercom.png'
        },
        {
          name: 'Microsoft Teams',
          iconLocation: 'https://assets.appsmith.com/msteams-new.png'
        }
      ],
      loading: false
    }
  },
  meta: {},
  app: {
    user: {
      email: 'peterjaberau@gmail.com',
      username: 'peterjaberau@gmail.com',
      name: 'Peter Jaber',
      useCase: 'personal project',
      enableTelemetry: true,
      roles: [
        'Upgrade to business plan to access roles and groups for conditional business logic'
      ],
      groups: [
        'Upgrade to business plan to access roles and groups for conditional business logic'
      ],
      accountNonExpired: true,
      accountNonLocked: true,
      credentialsNonExpired: true,
      emptyInstance: false,
      isAnonymous: false,
      isEnabled: true,
      isSuperUser: true,
      isConfigurable: true,
      adminSettingsVisible: false,
      isIntercomConsentGiven: false
    },
    URL: {
      fullPath: 'https://dev.appsmith.com/app/auto-layout/page1-68ad34afd8deff53ee072777/edit',
      host: 'dev.appsmith.com',
      hostname: 'dev.appsmith.com',
      queryParams: {},
      protocol: 'https:',
      pathname: '/app/auto-layout/page1-68ad34afd8deff53ee072777/edit',
      port: '',
      hash: ''
    },
    store: {},
    geolocation: {
      canBeRequested: true,
      currentPosition: {}
    },
    workflows: {},
    mode: 'EDIT'
  },
  jsActions: [
    {
      isLoading: false,
      config: {
        id: '68ad40c7d8deff53ee07277d',
        baseId: '68ad40c7d8deff53ee07277d',
        applicationId: '68ad34afd8deff53ee072775',
        workspaceId: '68a9b81bde8cf11f80e4a8a0',
        name: 'localVariables',
        pageId: '68ad34afd8deff53ee072777',
        pluginId: '68a9b7e8de8cf11f80e4a880',
        pluginType: 'JS',
        actions: [],
        archivedActions: [],
        body: 'export default {\n\tvarCalculated: \'\',\n}',
        variables: [
          {
            name: 'varCalculated',
            value: '\'\''
          }
        ],
        userPermissions: [
          'read:actions',
          'delete:actions',
          'execute:actions',
          'manage:actions'
        ]
      }
    }
  ],
  autoHeightLayoutTree: {
    '9e839onva6': {
      aboves: [],
      belows: [],
      topRow: 22,
      bottomRow: 63,
      originalTopRow: 22,
      originalBottomRow: 63,
      distanceToNearestAbove: 0
    },
    '9nft85pms1': {
      aboves: [],
      belows: [
        'kwdcw234sl'
      ],
      topRow: 1,
      bottomRow: 8,
      originalTopRow: 1,
      originalBottomRow: 8,
      distanceToNearestAbove: 0
    },
    kwdcw234sl: {
      aboves: [
        '9nft85pms1'
      ],
      belows: [],
      topRow: 11,
      bottomRow: 15,
      originalTopRow: 11,
      originalBottomRow: 15,
      distanceToNearestAbove: 3
    },
    tl8xbeqhua: {
      aboves: [],
      belows: [
        'od1swmzxxq'
      ],
      topRow: 4,
      bottomRow: 9,
      originalTopRow: 4,
      originalBottomRow: 9,
      distanceToNearestAbove: 0
    },
    od1swmzxxq: {
      aboves: [
        'tl8xbeqhua'
      ],
      belows: [],
      topRow: 11,
      bottomRow: 15,
      originalTopRow: 11,
      originalBottomRow: 15,
      distanceToNearestAbove: 2
    },
    '0j3cs5153j': {
      aboves: [],
      belows: [],
      topRow: 1,
      bottomRow: 30,
      originalTopRow: 1,
      originalBottomRow: 30,
      distanceToNearestAbove: 0
    },
    dgev9742e2: {
      aboves: [],
      belows: [],
      topRow: 1,
      bottomRow: 30,
      originalTopRow: 1,
      originalBottomRow: 30,
      distanceToNearestAbove: 0
    }
  },
  canvasLevels: {
    '0': 0,
    '256n68mv3w': 2,
    cl2ynw6igw: 2,
    k1ojmo3iid: 1
  },
  layoutElementPositions: {},
  moduleInstanceEntities: {}
}
