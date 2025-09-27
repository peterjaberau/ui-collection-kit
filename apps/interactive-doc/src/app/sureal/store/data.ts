// @ts-nocheck
export const builderData = {
  config: {
    openLeftPanel: true,
    mode: 'edit',
    openBottomPanel: true,
    openRightPanel: true,
    openDebugger: false,
    scale: 100,
    selectedComponents: [],
    selectedAction: null,
    cachedAction: null,
    showDot: false,
    expandedKeys: [],
    canvasHeight: 851,
    canvasWidth: 1521,
    isOnline: true,
    hoveredComponents: [],
    expandedWidgets: {},
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
          'page1'
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
            'page1'
          ]
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
              id: 'f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1',
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
          'btn_1'
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
      btn_1: {
        version: 0,
        displayName: 'btn_1',
        parentNode: 'bodySection1-bodySectionContainer1',
        showName: 'button',
        childrenNode: [],
        type: 'BUTTON_WIDGET',
        containerType: 'EDITOR_SCALE_SQUARE',
        h: 5,
        w: 6,
        minH: 3,
        minW: 1,
        x: 12,
        y: 34,
        z: 0,
        props: {
          $dynamicAttrPaths: [
            'text'
          ],
          colorScheme: 'blue',
          hidden: false,
          text: '{{currentUserInfo.userID}}',
          variant: 'fill'
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
      }
    },
    action: [],
    appInfo: {
      appId: 'ILAfx4p1C7dU',
      uid: '0f78b772-c36d-4c3f-b516-4ebe580abb37',
      teamID: 'ILAfx4p1C7d0',
      appName: 'app-dynamic-binding',
      releaseVersion: 0,
      mainlineVersion: 0,
      deployed: false,
      config: {
        'public': false,
        waterMark: true,
        description: '',
        publishedToMarketplace: false,
        publishWithAIAgent: false,
        cover: '',
        appType: 'pc',
        components: [
          'BUTTON_WIDGET'
        ],
        actions: []
      },
      updatedBy: 'ILAfx4p1C7dZ',
      updatedAt: '2025-09-06T11:10:18.404725Z',
      appActivity: {
        modifier: 'root',
        modifiedAt: '2025-09-06T11:10:18.404725Z'
      },
      editedBy: [
        {
          userID: 'ILAfx4p1C7dZ',
          nickname: 'root',
          email: 'root',
          avatar: '',
          editedAt: '2025-09-06T11:10:18.404725964Z'
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
      components: {}
    },
    execution: {
      dependencies: {
        'btn_1.text': [
          'currentUserInfo.userID'
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
            'page1'
          ],
          displayName: 'root',
          $parentNode: '',
          $type: 'WIDGET',
          $widgetType: 'DOT_PANEL',
          $childrenNode: [
            'page1'
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
              id: 'f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1',
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
        btn_1: {
          $dynamicAttrPaths: [
            'text'
          ],
          colorScheme: 'blue',
          hidden: false,
          text: 'ILAfx4p1C7dZ',
          variant: 'fill',
          displayName: 'btn_1',
          $parentNode: 'bodySection1-bodySectionContainer1',
          $type: 'WIDGET',
          $widgetType: 'BUTTON_WIDGET',
          $childrenNode: [],
          $parentPageName: 'page1',
          $validationPaths: {
            text: 'String',
            loading: 'Boolean',
            disabled: 'Boolean',
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
        globalData: {
          $dynamicAttrPaths: []
        },
        urlParams: {
          query: {},
          url: 'http://localhost:3000/0/app/ILAfx4p1C7dU',
          appURL: 'http://localhost:3000/0/app/ILAfx4p1C7dU'
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
        'currentUserInfo.userID': [
          'btn_1.text'
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
            'page1'
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
            'btn_1'
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
        btn_1: {
          displayName: 'btn_1',
          parentNode: 'bodySection1-bodySectionContainer1',
          widgetType: 'BUTTON_WIDGET',
          childrenNode: [],
          containerType: 'EDITOR_SCALE_SQUARE',
          layoutInfo: {
            x: 12,
            y: 34,
            z: 0,
            w: 6,
            h: 5,
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
  resource: [],
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
}


export const connectionSchemaDefaults = {
  root: {
    namespaces: [],
    accesses: [],
    users: [],
  },
  namespace: {
    databases: [],
    accesses: [],
    users: [],
  },
  database: {
    tables: [],
    accesses: [],
    users: [],
    functions: [],
    models: [],
    params: [],
  },
}

export const databaseStoreDefaults = {
  isServing: false,
  servePending: false,
  currentState: "disconnected",
  latestError: "",
  isQueryActive: false,
  isGraphqlQueryActive: false,
  consoleOutput: [],
  connectionSchema: connectionSchemaDefaults,
  version: "",
  queryResponses: {},
  graphqlResponse: {},
}

export const baseSettingsDefaults = {
  behavior: {
    updateChecker: true,
    tableSuggest: true,
    variableSuggest: true,
    queryErrorChecker: true,
    enterConfirms: false,
    querySelectionExecution: true,
    querySelectionExecutionWarning: true,
    windowPinned: false,
    docsLanguage: "cli",
    versionCheckTimeout: 5,
    reconnectInterval: 3,
    queryQuickClose: true,
    strictSandbox: false,
    sidekickPanel: false,
  },
  appearance: {
    colorScheme: "dark",
    syntaxTheme: "default",
    windowScale: 100,
    editorScale: 100,
    queryLineNumbers: true,
    inspectorLineNumbers: true,
    functionLineNumbers: true,
    resultWordWrap: true,
    autoCollapseDepth: 0,
    defaultResultMode: "combined",
    defaultNoneResultMode: "show",
    defaultResultFormat: "sql",
    defaultDiagramAlgorithm: "aligned",
    defaultDiagramDirection: "ltr",
    defaultDiagramLineStyle: "metro",
    defaultDiagramLinkMode: "visible",
    defaultDiagramMode: "fields",
    defaultDiagramHoverFocus: "none",
    sidebarMode: "expandable",
    queryOrientation: "vertical",
    sidebarViews: {},
  },
  templates: {
    list: [],
  },
  serving: {
    driver: "memory",
    logLevel: "info",
    storage: "",
    executable: "",
    username: "root",
    password: "root",
    port: 8000,
    historySize: 250,
  },
  cloud: {
    databaseListMode: "grid",
    urlAuthBase: "",
    urlApiBase: "",
    urlApiMgmtBase: "",
    urlNewsfeedBase: "https://surrealdb.com",
    urlApiTicketsBase: "",
  },
  gtm: {
    origin: '',
    preview_header: "",
    debug_mode: false,
  },
}

export const baseConfigDefaults = {
  activeResource: "/overview",
  commandHistory: [],
  configVersion: 2,
  connections: [],
  featureFlags: {},
  keybindings: {},
  lastPromptedVersion: null,
  lastViewedNewsAt: null,
  onboarding: [],
  openDesignerPanels: ["general"],
  previousVersion: "3.5.3",
  sandbox: {
    id: "sandbox",
    name: "Sandbox",
    icon: 0,
    queries: [
      {
        id: "JuwQuyva2",
        type: "config",
        query: "",
        name: "New query",
        variables: "{}",
        valid: true,
        resultMode: "combined",
        resultFormat: "sql",
        noneResultMode: "show",
        showVariables: false,
      },
    ],
    activeQuery: "JuwQuyva2",
    authentication: {
      protocol: "mem",
      hostname: "",
      username: "",
      password: "",
      mode: "none",
      database: "",
      namespace: "",
      token: "",
      access: "",
      accessFields: [],
    },
    pinnedTables: [],
    queryHistory: [],
    lastNamespace: "sandbox",
    lastDatabase: "sandbox",
    designerTableList: true,
    explorerTableList: true,
    queryTabList: true,
    diagramAlgorithm: "default",
    diagramDirection: "default",
    diagramLineStyle: "default",
    diagramMode: "default",
    diagramLinkMode: "default",
    diagramHoverFocus: "default",
    graphqlQuery: "",
    graphqlVariables: "{}",
    graphqlShowVariables: false,
  },
  savedQueries: [],
  settings: baseSettingsDefaults,
}


export const connectionSchemaSamples: any = {
  "root": {
    "namespaces": [
      {
        "name": "demo"
      }
    ],
    "accesses": [],
    "users": [
      {
        "base": "ROOT",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$esMYHgZig+Mayv7AtthPTg$pafTBRYnQEE81fo/tl2jk5LWfbyOlChTmmMEcIGSjp0",
        "name": "admin",
        "roles": [
          "OWNER"
        ]
      },
      {
        "base": "ROOT",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$LpESn8BhORDbXbWfsFdfyw$fpps/o08PZpYYKvS1DU42YygG0P61jz21J6IVCzaJjQ",
        "name": "root",
        "roles": [
          "owner"
        ]
      }
    ]
  },
  "namespace": {
    "databases": [
      {
        "name": "demodb"
      }
    ],
    "accesses": [],
    "users": [
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$IbmunCHoVt5dbEk9Tu0paA$IMku+Z7vVtPWyp3op33ET+WX5hUaxQHEQpw/E7wa7Vs",
        "name": "Augustus",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$T5FoTP4TSWnclL52kdFReA$UHxvGD1BeRBg0hIB8xs4jzU11QErdQLaL+xBZiBsC7U",
        "name": "Ayesha",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$eCKxhHwYzky12YmkcK0BoA$vN2/MMkFUZZ5lAwHAw+FxCsaR32PIGg8sozr8paJSYU",
        "name": "Bernetta",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$UmS/NwNlND0vmiG+HCq9eg$yclkHYqUJUbHRaavWRg5Pq9gU95AHcIoxsBFo/n0ISA",
        "name": "Dell",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$Tu6TfmpH8Bj9Y2R5DxnxEw$in2hJL5a7NlmXTJnOug5LMNFmQVCpJtqZAyFDZspswc",
        "name": "Delmar",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$Wxy7juKH85zXKU2LYFUGfw$96X0hUvY1QjhSit9NXj/Zt8W0PhprMppglXpZUPeYnk",
        "name": "Jimmie",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$YDFF6TgBAFtYRCKG+oKrMw$qf0N693IyFG5pAd6aGVlppXyicv2ewtU85YBd3ScxkA",
        "name": "Maida",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$NyGyyijgPIXzfJ1mS3IiRw$qbSQ2V8cdKy6Z4OwEZ+57wrf7qDb2ntLMotPBM26xfk",
        "name": "Porfirio",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$HW93pNURw0wPECr6o3358Q$5YnAB93YZU7UDUbH9fIOjszgZdlKbLGoRd0wQzSjHp4",
        "name": "Shavonda",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$po66Amv1R08vX0UJ+RjhiQ$0rNI4MMS6u3/K6Me+EIVJuMyou4Pto80rYB8K5M/RhA",
        "name": "Tequila",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$D+4lwMMeU73CJGrIAev0Jw$C/7fkHji7G4nrBp07juxTGvvRPVI6h7wuwMp2WM9bDY",
        "name": "gordon",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$hPkbfttVDwa09oDcW95cUg$4HIAbRIx/oe08+rxnkBlg+1rSvX3d4pXlv6XuT3RVH4",
        "name": "john",
        "roles": [
          "EDITOR"
        ]
      }
    ]
  },
  "database": {
    "tables": [
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "address_history",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "array<object>",
            "name": "addresses",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "addresses[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].address_line_1",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "option<string>",
            "name": "addresses[*].address_line_2",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].city",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "geometry<point>",
            "name": "addresses[*].coordinates",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].country",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].post_code",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "person",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "address_history"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": false,
          "kind": {
            "kind": "ANY"
          },
          "name": "avg_product_review",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "number",
            "name": "avg_review",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "number_of_reviews",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "array<record<product>>",
            "name": "product_id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "product_id[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "product_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "product_name[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "cart",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "price",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "product_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "quantity",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "cart"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": false,
          "kind": {
            "kind": "ANY"
          },
          "name": "monthly_sales",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "month",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "number_of_orders",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "sum_sales",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "order",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "order_status",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "payment_method",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "price",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "product_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "quantity",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": true,
            "kind": "object",
            "name": "shipping_address",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "option<datetime>",
            "name": "time.processed_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "option<datetime>",
            "name": "time.shipped_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "order"
          }
        ],
        "indexes": [
          {
            "cols": "order_status, time.created_at",
            "index": "",
            "name": "order_count",
            "what": "order"
          },
          {
            "cols": "product_name",
            "index": "",
            "name": "order_product",
            "what": "order"
          }
        ],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "payment_details",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "person",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": true,
            "kind": "array<object>",
            "name": "stored_cards",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": true,
            "kind": "object",
            "name": "stored_cards[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "payment_details"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "person",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": true,
            "kind": "object",
            "name": "address",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "record<address_history>",
            "name": "address_history",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "option<string>",
            "name": "company_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "assert": "string::is::email($value)",
            "flex": false,
            "kind": "string",
            "name": "email",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "first_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "last_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "record<payment_details>",
            "name": "payment_details",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "phone",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "person"
          }
        ],
        "indexes": [
          {
            "cols": "address.country",
            "index": "",
            "name": "person_country",
            "what": "person"
          }
        ],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "product",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "category",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "colours",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "colours[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "details",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "details[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<object>",
            "name": "images",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "images[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "images[*].position",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "assert": "string::is::url($value)",
            "flex": false,
            "kind": "string",
            "name": "images[*].url",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "price",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "record<seller>",
            "name": "seller",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "sizes",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "sizes[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "sub_category",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "product"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "product"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "product_sku",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "quantity",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "product_sku"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "review",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "assert": "$value > 0 AND $value < 6",
            "flex": false,
            "kind": "number",
            "name": "rating",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "review_text",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "review"
          }
        ],
        "indexes": [
          {
            "cols": "review_text",
            "index": "SEARCH ANALYZER blank_snowball BM25(1.2,0.75) DOC_IDS_ORDER 100 DOC_LENGTHS_ORDER 100 POSTINGS_ORDER 100 TERMS_ORDER 100 DOC_IDS_CACHE 100 DOC_LENGTHS_CACHE 100 POSTINGS_CACHE 100 TERMS_CACHE 100 HIGHLIGHTS",
            "name": "review_content",
            "what": "review"
          }
        ],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "seller",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": true,
            "kind": "object",
            "name": "addresses",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "email",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "website",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "website.docs",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "website.main",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "website.store",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "wishlist",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "option<datetime>",
            "name": "time.deleted_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          }
        ],
        "indexes": [
          {
            "cols": "in, out",
            "index": "UNIQUE",
            "name": "unique_wishlist_relationships",
            "what": "wishlist"
          }
        ],
        "events": []
      }
    ],
    "accesses": [],
    "users": [
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$1ZMzsVGNRxAaZAhTZ3Kn0g$sO23Ukw1OVNCQb2T72wNnb5bS6lqhLllmfNzcqwH9i4",
        "name": "Boris",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$AFRMmk2Ny+ZoDdG9U7nOPQ$vsSr2TfQ9K5OUhTjygkWu/Y+8WX/Dns9wfK0rdQ8cnc",
        "name": "Drusilla",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$7WjU9yp/jZ8HWkFT+1jS/Q$4fNHZXjd24crYZDtwZ05Gu3n5YmgcKCiblPiZ8Khq5I",
        "name": "Johnette",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$YYcbnPmAaRsxwKq15TxfWw$vmN3L6UIranhmLPjshmHwuPeOkJzKQA0s+aF6iUjdO8",
        "name": "Latrina",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$T0shUKI0+iOzh8LX0PL9xQ$HijtsXSynH2TV23yDgvGnnyFVtsb/I1f309fU0+q5nQ",
        "name": "Leana",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$B2PYNt7rPD1ytSbE1rUAmQ$s3kIK31mf51wkcy0btK0iWVdO8z4/GtrMlrz0fEF4MU",
        "name": "Leigh",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$YL8epQ5oSK4mkK/YK+VRXA$Y3Y20x0kdRXYdDSRsm8aA+SLC7zGAg3WkbnhrEEU8y8",
        "name": "Lewis",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$b2nZIzENV5QVAP64YA6u6Q$/77qLXz8Md46Og6m58qaHaUh1DhMGKTDKzfXepPr0ec",
        "name": "Loree",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$D1NQIJiZ9CSbcJsCHMKz+g$yzKM/KWeu8Abes7mCb+hxWo+op9BxrS3VM4ezAOd/bU",
        "name": "Viki",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$c8YOGEoGzlzzRxBg/8OiRg$CYDP25Y6QjJuXL5AgftmRX3szV+a3LAP1VbfgPOlHvg",
        "name": "Winfred",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$w7aJ8kpxMxfx747XGr53qQ$Jqep+xksMkeWupiGt03pVpgGrBLHo+46VrvAqx/qgpU",
        "name": "alexa",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$aZ3gE59dep4Qw9z6z0qEXA$gtEnTtryjFL9LPeqao3nsj0VZUC0lQ8f8nIUU5uvuwA",
        "name": "jane",
        "roles": [
          "VIEWER"
        ]
      }
    ],
    "functions": [
      {
        "args": [],
        "block": "RETURN (SELECT count() FROM order WHERE order_status NOTINSIDE ['processed', 'shipped'] GROUP ALL);",
        "name": "number_of_unfulfilled_orders",
        "permissions": true,
        "comment": "",
        "returns": ""
      },
      {
        "args": [
          [
            "price",
            "number"
          ]
        ],
        "block": "RETURN $price * 1.26f;",
        "name": "pound_to_usd",
        "permissions": true,
        "comment": "",
        "returns": ""
      }
    ],
    "models": [],
    "params": []
  }
}

export const databaseStoreSamples: any = {

  "isServing": false,
  "servePending": false,
  "currentState": "connected",
  "latestError": "",
  "isQueryActive": false,
  "isGraphqlQueryActive": false,
  "consoleOutput": [],

  connectionSchema: connectionSchemaSamples,
  version: "2.3.10",
  queryResponses: {},
  graphqlResponse: {},
}

export const baseSettingsSamples: any = {
  "behavior": {
    "updateChecker": true,
    "tableSuggest": true,
    "variableSuggest": true,
    "queryErrorChecker": true,
    "enterConfirms": false,
    "querySelectionExecution": true,
    "querySelectionExecutionWarning": true,
    "windowPinned": false,
    "docsLanguage": "js",
    "versionCheckTimeout": 5,
    "reconnectInterval": 3,
    "queryQuickClose": true,
    "strictSandbox": false,
    "sidekickPanel": false
  },
  "appearance": {
    "colorScheme": "light",
    "syntaxTheme": "default",
    "windowScale": 100,
    "editorScale": 100,
    "queryLineNumbers": true,
    "inspectorLineNumbers": true,
    "functionLineNumbers": true,
    "resultWordWrap": true,
    "autoCollapseDepth": 0,
    "defaultResultMode": "combined",
    "defaultNoneResultMode": "show",
    "defaultResultFormat": "sql",
    "defaultDiagramAlgorithm": "aligned",
    "defaultDiagramDirection": "ltr",
    "defaultDiagramLineStyle": "metro",
    "defaultDiagramLinkMode": "visible",
    "defaultDiagramMode": "fields",
    "defaultDiagramHoverFocus": "none",
    "sidebarMode": "wide",
    "queryOrientation": "vertical",
    "sidebarViews": {}
  },
  "templates": {
    "list": []
  },
  "serving": {
    "driver": "memory",
    "logLevel": "info",
    "storage": "",
    "executable": "",
    "username": "root",
    "password": "root",
    "port": 8000,
    "historySize": 250
  },
  "cloud": {
    "databaseListMode": "grid",
    "urlAuthBase": "http://localhost:1420",
    "urlApiBase": "https://localhost:8000/api/v1",
    "urlApiMgmtBase": "https://localhost:8000/api/v1",
    "urlNewsfeedBase": "https://surrealdb.com",
    "urlApiTicketsBase": ""
  },
  "gtm": {
    "origin": "dev-app.surrealdb.com",
    "preview_header": "",
    "debug_mode": false
  }
}

export const configStoreSamples: any = {
  activeResource: "/overview",
  commandHistory: [],
  configVersion: 2,
  connections: [
    {
      "id": "P7KsZvPVl",
      "name": "localhost",
      "icon": 0,
      "queries": [
        {
          "id": "KSCG0Cp7D",
          "type": "config",
          "query": "",
          "name": "New query",
          "variables": "{}",
          "valid": true,
          "resultMode": "combined",
          "resultFormat": "sql",
          "noneResultMode": "show",
          "showVariables": false
        }
      ],
      "activeQuery": "KSCG0Cp7D",
      "authentication": {
        "protocol": "ws",
        "hostname": "localhost:80",
        "username": "root",
        "password": "secret",
        "mode": "root",
        "database": "",
        "namespace": "",
        "token": "",
        "access": "",
        "accessFields": []
      },
      "pinnedTables": [],
      "queryHistory": [],
      "lastNamespace": "demo",
      "lastDatabase": "demodb",
      "designerTableList": true,
      "explorerTableList": true,
      "queryTabList": true,
      "diagramAlgorithm": "default",
      "diagramDirection": "default",
      "diagramLineStyle": "default",
      "diagramMode": "default",
      "diagramLinkMode": "default",
      "diagramHoverFocus": "default",
      "graphqlQuery": "",
      "graphqlVariables": "{}",
      "graphqlShowVariables": false
    }
  ],
  featureFlags: {
    "database_version_check": false,
    "cloud_endpoints": "custom",
    "cloud_killswitch": false,
    "gtm_debug": false,
    "cloud_enabled": true
  },
  keybindings: {},
  lastPromptedVersion: null,
  lastViewedNewsAt: 1758429844326,
  onboarding: [
    "sandbox",
    "policy",
    "sidekick"
  ],
  openDesignerPanels: [
    "general",
    "permissions",
    "events",
    "indexes",
    "fields"
  ],
  previousVersion: "3.5.3",
  sandbox: {
    "id": "sandbox",
    "name": "Sandbox",
    "icon": 0,
    "queries": [
      {
        "id": "l91dWEaLt",
        "type": "config",
        "query": "SELECT * from address_history",
        "name": "New query",
        "variables": "{}",
        "valid": true,
        "resultMode": "combined",
        "resultFormat": "sql",
        "showVariables": false
      }
    ],
    "activeQuery": "l91dWEaLt",
    "authentication": {
      "protocol": "mem",
      "hostname": "",
      "username": "",
      "password": "",
      "mode": "none",
      "database": "",
      "namespace": "",
      "token": "",
      "access": "",
      "accessFields": []
    },
    "pinnedTables": [],
    "queryHistory": [
      {
        "id": "oBrzidA2h",
        "query": "SELECT * from address_history",
        "timestamp": 1758429166085,
        "origin": "New query"
      }
    ],
    "lastNamespace": "sandbox",
    "lastDatabase": "sandbox",
    "designerTableList": true,
    "explorerTableList": true,
    "queryTabList": true,
    "diagramAlgorithm": "default",
    "diagramDirection": "default",
    "diagramLineStyle": "default",
    "diagramMode": "default",
    "diagramLinkMode": "default",
    "diagramHoverFocus": "default",
    "graphqlQuery": "",
    "graphqlVariables": "{}",
    "graphqlShowVariables": false
  },
  savedQueries: [],
  settings: baseSettingsSamples,
}




export const cloudStoreDemo: any = {
  authState: 'unauthenticated',
  authError: '',
  accessToken: '',
  sessionToken: '',
  userId: '',
  authProvider: '',
  isSupported: true,
  failedConnect: false,
  profile: {
    username: '',
    name: '',
    default_org: '',
    enabled_features: []
  },
  instanceTypes: [],
  instanceVersions: [],
  regions: [],
  billingCountries: [],
  sessionExpired: false,
  isProvisioning: false,
  isProvisionDone: false,
  provisioning: null,
  chatConversation: [],
  chatLastResponse: ''
}

export const configStoreDemo: any = {
  configVersion: 2,
  previousVersion: '3.5.3',
  connections: [
    {
      id: 'P7KsZvPVl',
      name: 'localhost',
      icon: 0,
      queries: [
        {
          id: 'KSCG0Cp7D',
          type: 'config',
          query: 'SELECT\n    *,\n    ->order->order AS orders,\n    ->address->address AS addresses\nFROM person\nORDER BY created_at DESC\nLIMIT 10;\n',
          name: 'last-10-person-with-orders',
          variables: '{\n  \n}',
          valid: true,
          resultMode: 'table',
          resultFormat: 'sql',
          noneResultMode: 'show',
          showVariables: false
        },
        {
          id: 'Kr8L9tPr5',
          type: 'config',
          query: 'CREATE person CONTENT { name: \'Alice\', age: 30 };\n',
          name: 'Create a person record',
          variables: '{}',
          valid: true,
          resultMode: 'combined',
          resultFormat: 'sql',
          noneResultMode: 'show',
          showVariables: false
        },
        {
          id: 'LTJtU3Oad',
          type: 'config',
          query: 'SELECT * FROM person;',
          name: 'Select all records from the person table',
          variables: '{}',
          valid: true,
          resultMode: 'combined',
          resultFormat: 'sql',
          noneResultMode: 'show',
          showVariables: false
        },
        {
          id: '6Hvw0Zsyc',
          type: 'config',

          query: 'UPDATE person SET age = 31 WHERE name = \'Alice\';\n',
          name: 'Update a person\'s age',
          variables: '{}',
          valid: true,
          resultMode: 'combined',
          resultFormat: 'sql',
          noneResultMode: 'show',
          showVariables: false
        },
        {
          id: 'WYVl3SXhx',
          type: 'config',
          query: 'CREATE person CONTENT { name: \'Bob\', age: 25 };',
          name: 'Create another person',
          variables: '{}',
          valid: true,
          resultMode: 'combined',
          resultFormat: 'sql',
          noneResultMode: 'show',
          showVariables: false
        }
      ],
      activeQuery: 'KSCG0Cp7D',
      authentication: {
        protocol: 'ws',
        hostname: 'localhost:80',
        username: 'root',
        password: 'secret',
        mode: 'root',
        database: '',
        namespace: '',
        token: '',
        access: '',
        accessFields: []
      },
      pinnedTables: [],
      queryHistory: [
        {
          id: 'z3AxLuQdS',
          query: 'select * from product',
          timestamp: 1758474074864,
          origin: 'New query'
        },
        {
          id: 'KPBp2ZNpd',
          query: 'select * from product',
          timestamp: 1758569875020,
          origin: 'New query'
        },
        {
          id: '4z7VQY3qT',
          query: 'select * from product',
          timestamp: 1758623372057,
          origin: 'New query'
        },
        {
          id: 'fg385sdnk',
          query: 'SELECT\n    *,\n    ->order->order AS orders,\n    ->address->address AS addresses\nFROM person\nORDER BY created_at DESC\nLIMIT 10;',
          timestamp: 1758624442159,
          origin: 'last-10-person-with-orders'
        }
      ],
      lastNamespace: 'demo',
      lastDatabase: 'demodb',
      designerTableList: true,
      explorerTableList: true,
      queryTabList: true,
      diagramAlgorithm: 'default',
      diagramDirection: 'default',
      diagramLineStyle: 'default',
      diagramMode: 'default',
      diagramLinkMode: 'default',
      diagramHoverFocus: 'default',
      graphqlQuery: '',
      graphqlVariables: '{}',
      graphqlShowVariables: true
    }
  ],
  sandbox: {
    id: 'sandbox',
    name: 'Sandbox',
    icon: 0,
    queries: [
      {
        id: 'l91dWEaLt',
        type: 'config',
        query: 'SELECT * from address_history',
        name: 'New query',
        variables: '{}',
        valid: true,
        resultMode: 'combined',
        resultFormat: 'sql',
        showVariables: false
      }
    ],
    activeQuery: 'l91dWEaLt',
    authentication: {
      protocol: 'mem',
      hostname: '',
      username: '',
      password: '',
      mode: 'none',
      database: '',
      namespace: '',
      token: '',
      access: '',
      accessFields: []
    },
    pinnedTables: [],
    queryHistory: [
      {
        id: 'oBrzidA2h',
        query: 'SELECT * from address_history',
        timestamp: 1758429166085,
        origin: 'New query'
      }
    ],
    lastNamespace: 'sandbox',
    lastDatabase: 'sandbox',
    designerTableList: true,
    explorerTableList: true,
    queryTabList: true,
    diagramAlgorithm: 'default',
    diagramDirection: 'default',
    diagramLineStyle: 'default',
    diagramMode: 'default',
    diagramLinkMode: 'default',
    diagramHoverFocus: 'default',
    graphqlQuery: '',
    graphqlVariables: '{}',
    graphqlShowVariables: false
  },
  activeResource: '/c/P7KsZvPVl/query',
  savedQueries: [],
  lastPromptedVersion: null,
  featureFlags: {
    database_version_check: false,
    cloud_endpoints: 'custom',
    cloud_killswitch: false,
    gtm_debug: false,
    cloud_enabled: true,
    highlight_tool: true
  },
  commandHistory: [],
  lastViewedNewsAt: 1758531526572,
  openDesignerPanels: [
    'general',
    'permissions',
    'events',
    'indexes',
    'fields'
  ],
  keybindings: {},
  onboarding: [
    'sandbox',
    'policy',
    'sidekick'
  ],
  settings: {
    behavior: {
      updateChecker: true,
      tableSuggest: true,
      variableSuggest: true,
      queryErrorChecker: true,
      enterConfirms: false,
      querySelectionExecution: true,
      querySelectionExecutionWarning: true,
      windowPinned: false,
      docsLanguage: 'js',
      versionCheckTimeout: 5,
      reconnectInterval: 3,
      queryQuickClose: true,
      strictSandbox: false,
      sidekickPanel: false
    },
    appearance: {
      colorScheme: 'light',
      syntaxTheme: 'default',
      windowScale: 100,
      editorScale: 100,
      queryLineNumbers: true,
      inspectorLineNumbers: true,
      functionLineNumbers: true,
      resultWordWrap: true,
      autoCollapseDepth: 0,
      defaultResultMode: 'combined',
      defaultNoneResultMode: 'show',
      defaultResultFormat: 'sql',
      defaultDiagramAlgorithm: 'aligned',
      defaultDiagramDirection: 'ltr',
      defaultDiagramLineStyle: 'metro',
      defaultDiagramLinkMode: 'visible',
      defaultDiagramMode: 'fields',
      defaultDiagramHoverFocus: 'none',
      sidebarMode: 'wide',
      queryOrientation: 'vertical',
      sidebarViews: {}
    },
    templates: {
      list: []
    },
    serving: {
      driver: 'memory',
      logLevel: 'info',
      storage: '',
      executable: '',
      username: 'root',
      password: 'root',
      port: 8000,
      historySize: 250
    },
    cloud: {
      databaseListMode: 'grid',
      urlAuthBase: 'http://localhost:1420',
      urlApiBase: 'https://localhost:8000/api/v1',
      urlApiMgmtBase: 'https://localhost:8000/api/v1',
      urlNewsfeedBase: 'https://surrealdb.com',
      urlApiTicketsBase: ''
    },
    gtm: {
      origin: 'dev-app.surrealdb.com',
      preview_header: '',
      debug_mode: false
    }
  }
}

export const databaseStoreDemo: any = {
  isServing: false,
  servePending: false,
  currentState: 'connected',
  latestError: '',
  isQueryActive: false,
  isGraphqlQueryActive: false,
  consoleOutput: [],
  connectionSchema: {
    root: {
      namespaces: [
        {
          name: 'demo'
        }
      ],
      accesses: [],
      users: [
        {
          base: 'ROOT',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$esMYHgZig+Mayv7AtthPTg$pafTBRYnQEE81fo/tl2jk5LWfbyOlChTmmMEcIGSjp0',
          name: 'admin',
          roles: [
            'OWNER'
          ]
        },
        {
          base: 'ROOT',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$LpESn8BhORDbXbWfsFdfyw$fpps/o08PZpYYKvS1DU42YygG0P61jz21J6IVCzaJjQ',
          name: 'root',
          roles: [
            'owner'
          ]
        }
      ]
    },
    namespace: {
      databases: [
        {
          name: 'demodb'
        }
      ],
      accesses: [],
      users: [
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$IbmunCHoVt5dbEk9Tu0paA$IMku+Z7vVtPWyp3op33ET+WX5hUaxQHEQpw/E7wa7Vs',
          name: 'Augustus',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$T5FoTP4TSWnclL52kdFReA$UHxvGD1BeRBg0hIB8xs4jzU11QErdQLaL+xBZiBsC7U',
          name: 'Ayesha',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$eCKxhHwYzky12YmkcK0BoA$vN2/MMkFUZZ5lAwHAw+FxCsaR32PIGg8sozr8paJSYU',
          name: 'Bernetta',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$UmS/NwNlND0vmiG+HCq9eg$yclkHYqUJUbHRaavWRg5Pq9gU95AHcIoxsBFo/n0ISA',
          name: 'Dell',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$Tu6TfmpH8Bj9Y2R5DxnxEw$in2hJL5a7NlmXTJnOug5LMNFmQVCpJtqZAyFDZspswc',
          name: 'Delmar',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$Wxy7juKH85zXKU2LYFUGfw$96X0hUvY1QjhSit9NXj/Zt8W0PhprMppglXpZUPeYnk',
          name: 'Jimmie',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$YDFF6TgBAFtYRCKG+oKrMw$qf0N693IyFG5pAd6aGVlppXyicv2ewtU85YBd3ScxkA',
          name: 'Maida',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$NyGyyijgPIXzfJ1mS3IiRw$qbSQ2V8cdKy6Z4OwEZ+57wrf7qDb2ntLMotPBM26xfk',
          name: 'Porfirio',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$HW93pNURw0wPECr6o3358Q$5YnAB93YZU7UDUbH9fIOjszgZdlKbLGoRd0wQzSjHp4',
          name: 'Shavonda',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$po66Amv1R08vX0UJ+RjhiQ$0rNI4MMS6u3/K6Me+EIVJuMyou4Pto80rYB8K5M/RhA',
          name: 'Tequila',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$D+4lwMMeU73CJGrIAev0Jw$C/7fkHji7G4nrBp07juxTGvvRPVI6h7wuwMp2WM9bDY',
          name: 'gordon',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'NAMESPACE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$hPkbfttVDwa09oDcW95cUg$4HIAbRIx/oe08+rxnkBlg+1rSvX3d4pXlv6XuT3RVH4',
          name: 'john',
          roles: [
            'EDITOR'
          ]
        }
      ]
    },
    database: {
      tables: [
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              kind: 'NORMAL'
            },
            name: 'address_history',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'array<object>',
              name: 'addresses',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'object',
              name: 'addresses[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'string',
              name: 'addresses[*].address_line_1',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'option<string>',
              name: 'addresses[*].address_line_2',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'string',
              name: 'addresses[*].city',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'geometry<point>',
              name: 'addresses[*].coordinates',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'string',
              name: 'addresses[*].country',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'string',
              name: 'addresses[*].post_code',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'record<person>',
              name: 'person',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'address_history'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'address_history'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: false,
            kind: {
              kind: 'ANY'
            },
            name: 'avg_product_review',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'number',
              name: 'avg_review',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            },
            {
              flex: false,
              kind: 'number',
              name: 'number_of_reviews',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            },
            {
              flex: false,
              kind: 'array<record<product>>',
              name: 'product_id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'product_id[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            },
            {
              flex: false,
              kind: 'array<string>',
              name: 'product_name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            },
            {
              flex: false,
              kind: 'string',
              name: 'product_name[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'avg_product_review'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              enforced: false,
              'in': [
                'person'
              ],
              kind: 'RELATION',
              out: [
                'product'
              ]
            },
            name: 'cart',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'colour',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'string',
              name: 'currency',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'record<person>',
              name: 'in',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'out',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'number',
              name: 'price',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'string',
              name: 'product_name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'number',
              name: 'quantity',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'string',
              name: 'size',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'cart'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'cart'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: false,
            kind: {
              kind: 'ANY'
            },
            name: 'monthly_sales',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'currency',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'monthly_sales'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'monthly_sales'
            },
            {
              flex: false,
              kind: 'string',
              name: 'month',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'monthly_sales'
            },
            {
              flex: false,
              kind: 'number',
              name: 'number_of_orders',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'monthly_sales'
            },
            {
              flex: false,
              kind: 'number',
              name: 'sum_sales',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'monthly_sales'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              enforced: false,
              'in': [
                'person'
              ],
              kind: 'RELATION',
              out: [
                'product'
              ]
            },
            name: 'order',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'colour',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'string',
              name: 'currency',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'record<person>',
              name: 'in',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'string',
              name: 'order_status',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'out',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'string',
              name: 'payment_method',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'number',
              name: 'price',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'string',
              name: 'product_name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'number',
              name: 'quantity',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: true,
              kind: 'object',
              name: 'shipping_address',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'string',
              name: 'size',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'option<datetime>',
              name: 'time.processed_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'option<datetime>',
              name: 'time.shipped_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'order'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'order'
            }
          ],
          indexes: [
            {
              cols: 'order_status, time.created_at',
              index: '',
              name: 'order_count',
              what: 'order'
            },
            {
              cols: 'product_name',
              index: '',
              name: 'order_product',
              what: 'order'
            }
          ],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              kind: 'NORMAL'
            },
            name: 'payment_details',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'payment_details'
            },
            {
              flex: false,
              kind: 'record<person>',
              name: 'person',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'payment_details'
            },
            {
              flex: true,
              kind: 'array<object>',
              name: 'stored_cards',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'payment_details'
            },
            {
              flex: true,
              kind: 'object',
              name: 'stored_cards[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'payment_details'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'payment_details'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'payment_details'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'payment_details'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              kind: 'NORMAL'
            },
            name: 'person',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: true,
              kind: 'object',
              name: 'address',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'record<address_history>',
              name: 'address_history',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'option<string>',
              name: 'company_name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              assert: 'string::is::email($value)',
              flex: false,
              kind: 'string',
              name: 'email',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'string',
              name: 'first_name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'string',
              name: 'last_name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'string',
              name: 'name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'record<payment_details>',
              name: 'payment_details',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'string',
              name: 'phone',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'person'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'person'
            }
          ],
          indexes: [
            {
              cols: 'address.country',
              index: '',
              name: 'person_country',
              what: 'person'
            }
          ],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              kind: 'NORMAL'
            },
            name: 'product',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'category',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'array<string>',
              name: 'colours',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'colours[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'currency',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'array<string>',
              name: 'details',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'details[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'array<object>',
              name: 'images',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'object',
              name: 'images[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'number',
              name: 'images[*].position',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              assert: 'string::is::url($value)',
              flex: false,
              kind: 'string',
              name: 'images[*].url',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'number',
              name: 'price',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'record<seller>',
              name: 'seller',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'array<string>',
              name: 'sizes',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'sizes[*]',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'string',
              name: 'sub_category',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'product'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              enforced: false,
              'in': [
                'product'
              ],
              kind: 'RELATION',
              out: [
                'product'
              ]
            },
            name: 'product_sku',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'colour',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'in',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'out',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'number',
              name: 'quantity',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'string',
              name: 'size',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'product_sku'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'product_sku'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              enforced: false,
              'in': [
                'person'
              ],
              kind: 'RELATION',
              out: [
                'product'
              ]
            },
            name: 'review',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              flex: false,
              kind: 'record<person>',
              name: 'in',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'out',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              assert: '$value > 0 AND $value < 6',
              flex: false,
              kind: 'number',
              name: 'rating',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              flex: false,
              kind: 'string',
              name: 'review_text',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'review'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'review'
            }
          ],
          indexes: [
            {
              cols: 'review_text',
              index: 'SEARCH ANALYZER blank_snowball BM25(1.2,0.75) DOC_IDS_ORDER 100 DOC_LENGTHS_ORDER 100 POSTINGS_ORDER 100 TERMS_ORDER 100 DOC_IDS_CACHE 100 DOC_LENGTHS_CACHE 100 POSTINGS_CACHE 100 TERMS_CACHE 100 HIGHLIGHTS',
              name: 'review_content',
              what: 'review'
            }
          ],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              kind: 'NORMAL'
            },
            name: 'seller',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: true,
              kind: 'object',
              name: 'addresses',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'string',
              name: 'email',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'string',
              name: 'name',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'datetime',
              name: 'time.updated_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              value: 'time::now()',
              what: 'seller'
            },
            {
              flex: false,
              kind: 'object',
              name: 'website',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'string',
              name: 'website.docs',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'string',
              name: 'website.main',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            },
            {
              flex: false,
              kind: 'string',
              name: 'website.store',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'seller'
            }
          ],
          indexes: [],
          events: []
        },
        {
          schema: {
            drop: false,
            full: true,
            kind: {
              enforced: false,
              'in': [
                'person'
              ],
              kind: 'RELATION',
              out: [
                'product'
              ]
            },
            name: 'wishlist',
            permissions: {
              create: false,
              'delete': false,
              select: false,
              update: false
            }
          },
          fields: [
            {
              flex: false,
              kind: 'string',
              name: 'colour',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              flex: false,
              kind: 'string',
              name: 'id',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              flex: false,
              kind: 'record<person>',
              name: 'in',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              flex: false,
              kind: 'record<product>',
              name: 'out',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              flex: false,
              kind: 'string',
              name: 'size',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              flex: false,
              kind: 'object',
              name: 'time',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              'default': 'time::now()',
              flex: false,
              kind: 'datetime',
              name: 'time.created_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            },
            {
              flex: false,
              kind: 'option<datetime>',
              name: 'time.deleted_at',
              permissions: {
                create: true,
                'delete': true,
                select: true,
                update: true
              },
              readonly: false,
              what: 'wishlist'
            }
          ],
          indexes: [
            {
              cols: 'in, out',
              index: 'UNIQUE',
              name: 'unique_wishlist_relationships',
              what: 'wishlist'
            }
          ],
          events: []
        }
      ],
      accesses: [],
      users: [
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$1ZMzsVGNRxAaZAhTZ3Kn0g$sO23Ukw1OVNCQb2T72wNnb5bS6lqhLllmfNzcqwH9i4',
          name: 'Boris',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$AFRMmk2Ny+ZoDdG9U7nOPQ$vsSr2TfQ9K5OUhTjygkWu/Y+8WX/Dns9wfK0rdQ8cnc',
          name: 'Drusilla',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$7WjU9yp/jZ8HWkFT+1jS/Q$4fNHZXjd24crYZDtwZ05Gu3n5YmgcKCiblPiZ8Khq5I',
          name: 'Johnette',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$YYcbnPmAaRsxwKq15TxfWw$vmN3L6UIranhmLPjshmHwuPeOkJzKQA0s+aF6iUjdO8',
          name: 'Latrina',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$T0shUKI0+iOzh8LX0PL9xQ$HijtsXSynH2TV23yDgvGnnyFVtsb/I1f309fU0+q5nQ',
          name: 'Leana',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$B2PYNt7rPD1ytSbE1rUAmQ$s3kIK31mf51wkcy0btK0iWVdO8z4/GtrMlrz0fEF4MU',
          name: 'Leigh',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$YL8epQ5oSK4mkK/YK+VRXA$Y3Y20x0kdRXYdDSRsm8aA+SLC7zGAg3WkbnhrEEU8y8',
          name: 'Lewis',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$b2nZIzENV5QVAP64YA6u6Q$/77qLXz8Md46Og6m58qaHaUh1DhMGKTDKzfXepPr0ec',
          name: 'Loree',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$D1NQIJiZ9CSbcJsCHMKz+g$yzKM/KWeu8Abes7mCb+hxWo+op9BxrS3VM4ezAOd/bU',
          name: 'Viki',
          roles: [
            'VIEWER'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$c8YOGEoGzlzzRxBg/8OiRg$CYDP25Y6QjJuXL5AgftmRX3szV+a3LAP1VbfgPOlHvg',
          name: 'Winfred',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$w7aJ8kpxMxfx747XGr53qQ$Jqep+xksMkeWupiGt03pVpgGrBLHo+46VrvAqx/qgpU',
          name: 'alexa',
          roles: [
            'EDITOR'
          ]
        },
        {
          base: 'DATABASE',
          duration: {
            token: '1h'
          },
          hash: '$argon2id$v=19$m=19456,t=2,p=1$aZ3gE59dep4Qw9z6z0qEXA$gtEnTtryjFL9LPeqao3nsj0VZUC0lQ8f8nIUU5uvuwA',
          name: 'jane',
          roles: [
            'VIEWER'
          ]
        }
      ],
      functions: [
        {
          args: [],
          block: 'RETURN (SELECT count() FROM order WHERE order_status NOTINSIDE [\'processed\', \'shipped\'] GROUP ALL);',
          name: 'number_of_unfulfilled_orders',
          permissions: true,
          comment: '',
          returns: ''
        },
        {
          args: [
            [
              'price',
              'number'
            ]
          ],
          block: 'RETURN $price * 1.26f;',
          name: 'pound_to_usd',
          permissions: true,
          comment: '',
          returns: ''
        }
      ],
      models: [],
      params: []
    }
  },
  version: '2.3.10',
  queryResponses: {
    KSCG0Cp7D: [
      {
        success: true,
        result: [
          {
            address: {
              address_line_1: '1127 Deerpark',
              city: 'Dunblane',
              coordinates: {
                type: 'Point',
                coordinates: [
                  1.948132,
                  172.152778
                ]
              },
              country: 'Scotland',
              post_code: 'UH8M 1UQ'
            },
            address_history: 'address_history:01GWMKV0XG83RBN5HE7QQBN7KX',
            addresses: [],
            company_name: 'Stand.chart. (STAN)',
            email: 'francis_hamilton42@example.com',
            first_name: 'Francis',
            id: 'person:01FZ84T2C08248Y0F6SVA4ZWQ2',
            last_name: 'Hamilton',
            name: 'Francis Hamilton',
            orders: [],
            payment_details: 'payment_details:01G44B6JX88QWTFPS71MF22RGP',
            phone: '0896 855 2969',
            time: {
              created_at: '2022-03-28T12:33:04.000Z',
              updated_at: '2022-04-02T09:38:14.000Z'
            }
          },
          {
            address: {
              address_line_1: '1237 Claremount',
              city: 'Lincoln',
              coordinates: {
                type: 'Point',
                coordinates: [
                  -37.794925,
                  59.703661
                ]
              },
              country: 'Wales',
              post_code: 'YR0G 9DT'
            },
            address_history: 'address_history:01GS5013Q09ZJRR712S56JJMZS',
            addresses: [],
            email: 'gigi_bass70@example.com',
            first_name: 'Gigi',
            id: 'person:01FVRH055G93BAZDEVNAJ9ZG3D',
            last_name: 'Bass',
            name: 'Gigi Bass',
            orders: [],
            payment_details: 'payment_details:01H6BSW48G92K9K213ASAZNHW3',
            phone: '0310 314 5643',
            time: {
              created_at: '2022-02-13T03:11:10.000Z',
              updated_at: '2022-02-14T07:09:55.000Z'
            }
          },
          {
            address: {
              address_line_1: '217 Drumnacross',
              city: 'Totnes',
              coordinates: {
                type: 'Point',
                coordinates: [
                  8.312773,
                  145.537991
                ]
              },
              country: 'Northern Ireland',
              post_code: 'FL6Q 9DF'
            },
            address_history: 'address_history:01GY5FF468825B62PAD8Z47STF',
            addresses: [],
            email: 'granville_bartlett41@example.com',
            first_name: 'Granville',
            id: 'person:01G0S0E5MR8R2ADGQ6NW8N0H3A',
            last_name: 'Bartlett',
            name: 'Granville Bartlett',
            orders: [],
            payment_details: 'payment_details:01GCBXS0RR9RX894EAQTGAZRTP',
            phone: '0351 470 7353',
            time: {
              created_at: '2022-04-16T11:59:27.000Z',
              updated_at: '2022-04-16T19:41:13.000Z'
            }
          },
          {
            address: {
              address_line_1: '160 Clara',
              address_line_2: 'apt. 10',
              city: 'Dornoch',
              coordinates: {
                type: 'Point',
                coordinates: [
                  -46.360483,
                  -69.022756
                ]
              },
              country: 'Scotland',
              post_code: 'UF6X 9AK'
            },
            address_history: 'address_history:01HC7H0FW888FAYSSP8T3NV3MX',
            addresses: [],
            email: 'nakita_decker76@example.com',
            first_name: 'Nakita',
            id: 'person:01GEV1ZHAR8MFSA3KAQ3SCWXEM',
            last_name: 'Decker',
            name: 'Nakita Decker',
            orders: [],
            payment_details: 'payment_details:01H0VE586G9V99ACNQKY7439WF',
            phone: '0500 128837',
            time: {
              created_at: '2022-10-08T06:44:39.000Z',
              updated_at: '2022-10-09T15:27:37.000Z'
            }
          },
          {
            address: {
              address_line_1: '482 Fallagh',
              city: 'Sutton Coldfield',
              coordinates: {
                type: 'Point',
                coordinates: [
                  38.522366,
                  -7.920047
                ]
              },
              country: 'Northern Ireland',
              post_code: 'NM9E 9ZP'
            },
            address_history: 'address_history:01GYZYHR9R9ZWS566YP039W9VX',
            addresses: [],
            email: 'ricky_thornton60@example.com',
            first_name: 'Ricky',
            id: 'person:01G1KFGSR88GZA0KA5Y9JTXJ8A',
            last_name: 'Thornton',
            name: 'Ricky Thornton',
            orders: [],
            payment_details: 'payment_details:01H2VRZHK89X1SKZ7WCKKTN1BP',
            phone: '056 9226 6685',
            time: {
              created_at: '2022-04-26T18:43:17.000Z',
              updated_at: '2022-04-29T21:49:31.000Z'
            }
          },
          {
            address: {
              address_line_1: '189 Bayhead',
              address_line_2: 'apt. 10',
              city: 'Dursley',
              coordinates: {
                type: 'Point',
                coordinates: [
                  43.628066,
                  10.642656
                ]
              },
              country: 'England',
              post_code: 'WE5G 6WZ'
            },
            address_history: 'address_history:01HCWCEB1R8Y499XJYPVWE04RX',
            addresses: [],
            email: 'leoma_santiago20@example.com',
            first_name: 'Leoma',
            id: 'person:01GFFXDCG89SAR3WM2SDV2E1RA',
            last_name: 'Santiago',
            name: 'Leoma Santiago',
            orders: [],
            payment_details: 'payment_details:01FTZ3MR7095CRDT1A04NNRQ6H',
            phone: '0931 129 0175',
            time: {
              created_at: '2022-10-16T09:08:53.000Z',
              updated_at: '2022-10-21T05:00:25.000Z'
            }
          },
          {
            address: {
              address_line_1: '472 Hulls',
              city: 'Bridlington',
              coordinates: {
                type: 'Point',
                coordinates: [
                  77.39703,
                  -7.968957
                ]
              },
              country: 'England',
              post_code: 'UZ3P 9TX'
            },
            address_history: 'address_history:01HD1GD9CR85WSCW36CT2HZVDG',
            addresses: [],
            email: 'angeles_atkins24@example.com',
            first_name: 'Angeles',
            id: 'person:01GFN1CAV8918AAAHV7E7Z3PJR',
            last_name: 'Atkins',
            name: 'Angeles Atkins',
            orders: [],
            payment_details: 'payment_details:01HEBJJXRR8ERV319AS10E0MMS',
            phone: '0110 364 2911',
            time: {
              created_at: '2022-10-18T08:54:25.000Z',
              updated_at: '2022-10-22T14:33:09.000Z'
            }
          },
          {
            address: {
              address_line_1: '1143 Coolkeeran',
              city: 'Hay on Wye',
              coordinates: {
                type: 'Point',
                coordinates: [
                  -5.255179,
                  10.974379
                ]
              },
              country: 'Scotland',
              post_code: 'WF8W 5LC'
            },
            address_history: 'address_history:01JDNXGAJ88JFRC4ZWSGPXHRMR',
            addresses: [],
            email: 'vi_whitehead64@example.com',
            first_name: 'Vi',
            id: 'person:01HG9EFC0R8DA8F87VNYP0CD8A',
            last_name: 'Whitehead',
            name: 'Vi Whitehead',
            orders: [],
            payment_details: 'payment_details:01HG0MX1Y88AYV9MQA2RADNX37',
            phone: '0308 586 6164',
            time: {
              created_at: '2023-11-27T22:30:23.000Z',
              updated_at: '2023-11-29T21:14:51.000Z'
            }
          },
          {
            address: {
              address_line_1: '1394 Hurst',
              city: 'Scarborough',
              coordinates: {
                type: 'Point',
                coordinates: [
                  88.799389,
                  -70.359121
                ]
              },
              country: 'Scotland',
              post_code: 'FI9N 3DC'
            },
            address_history: 'address_history:01JCT6P7Y08KG8GQR43T7Z0NXX',
            addresses: [],
            email: 'buena_hodge93@example.com',
            first_name: 'Buena',
            id: 'person:01HFDQN9CG87GTFX5KTBQZ2054',
            last_name: 'Hodge',
            name: 'Buena Hodge',
            orders: [],
            payment_details: 'payment_details:01H0EE8GA89KWB9V06ABPWG521',
            phone: '0800 805 4528',
            time: {
              created_at: '2023-11-17T04:12:10.000Z',
              updated_at: '2023-11-20T22:25:43.000Z'
            }
          },
          {
            address: {
              address_line_1: '261 Harrogate',
              city: 'Salisbury',
              coordinates: {
                type: 'Point',
                coordinates: [
                  -72.337639,
                  171.727209
                ]
              },
              country: 'Northern Ireland',
              post_code: 'ZJ5C 7ZH'
            },
            address_history: 'address_history:01JCESV8AG9SAR3WM2SDV2E1RA',
            addresses: [],
            email: 'georgeann_lindsey42@example.com',
            first_name: 'Georgeann',
            id: 'person:01HF2AT9S09HM83Q77FZX1FZN5',
            last_name: 'Lindsey',
            name: 'Georgeann Lindsey',
            orders: [],
            payment_details: 'payment_details:01GXDHEB0G95QA5FQE66P8QSYQ',
            phone: '0800 658950',
            time: {
              created_at: '2023-11-12T17:56:04.000Z',
              updated_at: '2023-11-15T07:16:14.000Z'
            }
          }
        ],
        execution_time: '22.995333ms'
      }
    ]
  },
  graphqlResponse: {}
}

export const interfaceStoreDemo: any = {
  title: 'localhost - Surrealist Preview Query',
  colorScheme: 'light',
  availableUpdate: null,
  showAvailableUpdate: false,
  showConnectionEditor: false,
  isCreatingConnection: false,
  editingConnectionId: '',
  showTableCreator: false,
  liveTabs: {},
  liveQueryMessages: {},
  showAccessSignup: false,
  showChangelogAlert: false,
  hasReadChangelog: false,
  showQueryVariables: false,
  showGraphqlVariables: false,
  overlaySidebar: false,
  docsTable: ''
}

export const queryStoreDemo: any = {
  queryState: {
    KSCG0Cp7D: {
      doc: 'SELECT\n    *,\n    ->order->order AS orders,\n    ->address->address AS addresses\nFROM person\nORDER BY created_at DESC\nLIMIT 10;\n',
      selection: {
        ranges: [
          {
            anchor: 127,
            head: 127
          }
        ],
        main: 0
      },
      history: {
        done: [
          {
            selectionsAfter: [
              {
                ranges: [
                  {
                    anchor: 0,
                    head: 0
                  }
                ],
                main: 0
              },
              {
                ranges: [
                  {
                    anchor: 21,
                    head: 21
                  }
                ],
                main: 0
              }
            ]
          },
          {
            changes: [
              [
                127,
                'select * from product'
              ]
            ],
            startSelection: {
              ranges: [
                {
                  anchor: 0,
                  head: 21
                }
              ],
              main: 0
            },
            selectionsAfter: [
              {
                ranges: [
                  {
                    anchor: 127,
                    head: 127
                  }
                ],
                main: 0
              },
              {
                ranges: [
                  {
                    anchor: 114,
                    head: 114
                  }
                ],
                main: 0
              },
              {
                ranges: [
                  {
                    anchor: 127,
                    head: 127
                  }
                ],
                main: 0
              }
            ]
          },
          {
            changes: [
              [
                127,
                'SELECT',
                '    *,',
                '    ->order->order AS orders,',
                '    ->address->address AS addresses',
                'FROM person',
                'ORDER BY created_at DESC',
                'LIMIT 10;',
                ''
              ]
            ],
            startSelection: {
              ranges: [
                {
                  anchor: 0,
                  head: 127
                }
              ],
              main: 0
            },
            selectionsAfter: []
          }
        ],
        undone: []
      }
    },
    Kr8L9tPr5: {
      doc: 'CREATE person CONTENT { name: \'Alice\', age: 30 };\n',
      selection: {
        ranges: [
          {
            anchor: 50,
            head: 50
          }
        ],
        main: 0
      },
      history: {
        done: [
          {
            selectionsAfter: [
              {
                ranges: [
                  {
                    anchor: 0,
                    head: 0
                  }
                ],
                main: 0
              }
            ]
          },
          {
            changes: [
              [
                50
              ]
            ],
            startSelection: {
              ranges: [
                {
                  anchor: 0,
                  head: 0
                }
              ],
              main: 0
            },
            selectionsAfter: []
          }
        ],
        undone: []
      }
    },
    LTJtU3Oad: {
      doc: 'SELECT * FROM person;',
      selection: {
        ranges: [
          {
            anchor: 21,
            head: 21
          }
        ],
        main: 0
      },
      history: {
        done: [
          {
            selectionsAfter: [
              {
                ranges: [
                  {
                    anchor: 0,
                    head: 0
                  }
                ],
                main: 0
              }
            ]
          },
          {
            changes: [
              [
                21
              ]
            ],
            startSelection: {
              ranges: [
                {
                  anchor: 0,
                  head: 0
                }
              ],
              main: 0
            },
            selectionsAfter: []
          }
        ],
        undone: []
      }
    },
    '6Hvw0Zsyc': {
      doc: 'UPDATE person SET age = 31 WHERE name = \'Alice\';\n',
      selection: {
        ranges: [
          {
            anchor: 49,
            head: 49
          }
        ],
        main: 0
      },
      history: {
        done: [
          {
            selectionsAfter: [
              {
                ranges: [
                  {
                    anchor: 0,
                    head: 0
                  }
                ],
                main: 0
              }
            ]
          },
          {
            changes: [
              [
                49
              ]
            ],
            startSelection: {
              ranges: [
                {
                  anchor: 0,
                  head: 0
                }
              ],
              main: 0
            },
            selectionsAfter: []
          }
        ],
        undone: []
      }
    },
    WYVl3SXhx: {
      doc: 'CREATE person CONTENT { name: \'Bob\', age: 25 };',
      selection: {
        ranges: [
          {
            anchor: 47,
            head: 47
          }
        ],
        main: 0
      },
      history: {
        done: [
          {
            selectionsAfter: [
              {
                ranges: [
                  {
                    anchor: 0,
                    head: 0
                  }
                ],
                main: 0
              }
            ]
          },
          {
            changes: [
              [
                47
              ]
            ],
            startSelection: {
              ranges: [
                {
                  anchor: 0,
                  head: 0
                }
              ],
              main: 0
            },
            selectionsAfter: []
          }
        ],
        undone: []
      }
    }
  },
  isQueryValid: true
}
