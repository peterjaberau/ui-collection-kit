export const stateMock = {
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
