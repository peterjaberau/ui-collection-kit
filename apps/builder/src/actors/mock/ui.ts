export default {
  analytics: {
    telemetry: {
      segmentState: 'INIT_SUCCESS'
    }
  },
  editor: {
    widgetConfigBuilt: true,
    initialized: true,
    loadingStates: {
      publishing: false,
      publishingError: false,
      saving: false,
      savingError: false,
      savingEntity: false,
      loading: false,
      loadingError: false,
      pageSwitchingError: false,
      isPageSwitching: false,
      creatingPage: false,
      creatingPageError: false,
      cloningPage: false,
      cloningPageError: false,
      updatingWidgetName: false,
      updateWidgetNameError: false,
      isSettingUpPage: false
    },
    isSnipingMode: false,
    isPreviewMode: false,
    isProtectedMode: true,
    zoomLevel: 1,
    onLoadActionExecution: true,
    currentPageName: 'Page1',
    currentLayoutId: '68ad34afd8deff53ee072776',
    pageWidgetId: '0',
    currentApplicationId: '68ad34afd8deff53ee072775',
    currentPageId: '68ad34afd8deff53ee072777',
    pageActions: [],
    layoutOnLoadActionErrors: [],
    lastUpdatedTime: 1756184955
  },
  errors: {
    safeCrash: false,
    currentError: {
      sourceAction: '',
      message: '',
      stackTrace: ''
    }
  },
  propertyPane: {
    isVisible: false,
    isNew: false,
    width: 288,
    selectedPropertyPanel: {}
  },
  tableFilterPane: {
    isVisible: false
  },
  appView: {
    isFetchingPage: false,
    initialized: false,
    headerHeight: 0
  },
  applications: {
    isSavingAppName: false,
    isErrorSavingAppName: false,
    isFetchingApplication: false,
    isChangingViewAccess: false,
    applicationList: [],
    creatingApplication: {},
    deletingApplication: false,
    forkingApplication: false,
    importingApplication: false,
    importedApplication: null,
    isImportAppModalOpen: false,
    workspaceIdForImport: null,
    pageIdForImport: '',
    isAppSidebarPinned: true,
    isSavingNavigationSetting: false,
    isErrorSavingNavigationSetting: false,
    isUploadingNavigationLogo: false,
    isDeletingNavigationLogo: false,
    loadingStates: {
      isFetchingAllRoles: false,
      isFetchingAllUsers: false
    },
    partialImportExport: {
      isExportModalOpen: false,
      isExporting: false,
      isExportDone: false,
      isImportModalOpen: false,
      isImporting: false,
      isImportDone: false
    },
    currentApplication: {
      applicationDetail: {
        appPositioning: {
          type: 'FIXED'
        },
        navigationSetting: {
          showNavbar: true,
          showSignIn: true,
          orientation: 'top',
          navStyle: 'stacked',
          position: 'static',
          colorStyle: 'light',
          logoAssetId: '',
          logoConfiguration: 'logoAndApplicationTitle'
        },
        themeSetting: {
          sizing: 1,
          density: 1,
          appMaxWidth: 'LARGE'
        }
      },
      id: '68ad34afd8deff53ee072775',
      modifiedBy: 'peterjaberau@gmail.com',
      userPermissions: [
        'export:applications',
        'read:applications',
        'create:pages',
        'manageAutoCommit:applications',
        'canComment:applications',
        'manage:applications',
        'delete:applicationPages',
        'manageProtectedBranches:applications',
        'manageDefaultBranches:applications',
        'connectToGit:applications',
        'publish:applications',
        'delete:applications',
        'makePublic:applications'
      ],
      name: 'auto-layout',
      workspaceId: '68a9b81bde8cf11f80e4a8a0',
      isPublic: false,
      appIsExample: false,
      unreadCommentThreads: 0,
      color: '#EAEDFB',
      icon: 'snowy-weather',
      slug: 'auto-layout',
      unpublishedCustomJSLibs: [],
      publishedCustomJSLibs: [],
      evaluationVersion: 2,
      applicationVersion: 2,
      collapseInvisibleWidgets: true,
      isManualUpdate: true,
      baseId: '68ad34afd8deff53ee072775',
      unpublishedThemeId: '68a9b7e9de8cf11f80e4a888',
      publishedThemeId: '68a9b7e9de8cf11f80e4a888',
      artifactType: 'APPLICATION',
      appLayout: {
        type: 'FLUID'
      },
      modifiedAt: '2025-08-26T05:09:15.162Z',
      pages: [
        {
          id: '68ad34afd8deff53ee072777',
          baseId: '68ad34afd8deff53ee072777',
          name: 'Page1',
          slug: 'page1',
          isDefault: true,
          userPermissions: [
            'read:pages',
            'manage:pages',
            'create:pageActions',
            'delete:pages'
          ]
        }
      ]
    }
  },
  auth: {
    isValidatingToken: true,
    isTokenValid: false
  },
  templates: {
    isImportingTemplate: false,
    isImportingTemplateToApp: false,
    loadingFilters: false,
    gettingAllTemplates: false,
    gettingTemplate: false,
    activeTemplate: null,
    activeLoadingTemplateId: null,
    templates: [
      {
        id: '67862c7c165f5c142c1dfb57',
        userPermissions: [],
        title: 'Table Form Operations',
        description: 'Table and JSON form allowing users to add and update table data',
        appUrl: 'https://app.appsmith.com/app/table-form-operations/users-6784ee582454ff00972b7a81?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/table-form-operations.json',
        sortPriority: '1002',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/3jjB3LEZ1KJMRozQUaNRYY/c35729300869f146e82c34959fab55e5/table-form-operations-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/2Y8c1HxEn97E1UYXli6i8Z/43f31ef1e10e7f898ce684cb6f24a72f/table-form-operations-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'TABLE_WIDGET_V2',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET',
          'JSON_FORM_WIDGGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '6784ee582454ff00972b7a81',
            name: 'Users',
            slug: 'users',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 83,
        templateGridColumnSize: 31
      },
      {
        id: '63037101e8e73110ce254d07',
        userPermissions: [],
        title: 'Customer Support Dashboard',
        description: 'This template can be used to manage customer details & different functions that will enable customer support representatives to view and manage requests.',
        appUrl: 'https://app.appsmith.com/app/customer-support-dashboard/home-652caa90d464c13af30e0d1e?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/customer-support-dashboard.json',
        gifUrl: '',
        sortPriority: '1001',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/6vYYNJAuikoETjpRYreBQz/8aa47cf57e1a44c6560d6444bd438b26/template-customer-support-dashboard.png?fm=jpg&q=50'
        ],
        widgets: [
          'CHART_WIDGET'
        ],
        functions: [
          'Customer Support'
        ],
        useCases: [
          'Dashboard'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '652caa90d464c13af30e0d1e',
            name: 'Dashboard',
            slug: 'dashboard',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.8.6-SNAPSHOT',
        minVersionPadded: '000010000800006',
        downloadCount: 0,
        active: true,
        mdText: '#### __Overview__\nThis template is designed as an application for an e-commerce company that has to handle ad-hoc refund and delivery issues. The company?s Order Management system handles all returns and delivery issues that are generated on their website and app, however, they often receive requests on the phone, and via email.\n\nThis tool enables the Customer Support team to address delivery discrepancies in their system, issue partial or full refunds initiate replacements and observe important statistics at a glance.\n\n#### __Highlights of the app__\n- Dashboard showing important statistics and analysis\n- Search for customer by name, email, phone, and order id\n- View customer detail information and order history\n- View order details and take specific actions to manage the account\n- Refund, cancel, or update an order\n- Lookup delivery details\n- Initiate a return and replacement process\n- Add comments and notes to the order\n- Create a limited time coupon code specific to this user for their next purchase',
        excerpt: 'An app to update refunds and delivery status of e-commerce orders.',
        category: 'Customer Support',
        featured: true,
        tags: [
          'customer',
          'support',
          'dashboard',
          'management'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '67f4ef441e6c8f2125898c46',
        userPermissions: [],
        title: 'AI Agent',
        description: 'Template for creating AI agent app',
        appUrl: 'https://release.app.appsmith.com/app/ai-app-1/page1-67ceabfd5b159c0fb5fadf39?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/template_anvil_demo.json',
        sortPriority: '1000',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/5fxy0tmKU0qcfov33kUyLf/ade305fe2123b89cc3b54f867bb33ec9/template-customer-messaging-tool.png?fm=jpg&q=50',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: '67ceabfd5b159c0fb5fadf39',
            name: 'Page1',
            slug: 'page1',
            isDefault: true
          }
        ],
        minVersion: 'v1.7.9-SNAPSHOT',
        minVersionPadded: '000010000700009',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '66548ebd8733fd4a177d8bc7',
        userPermissions: [],
        title: 'Table Lookup',
        description: 'Display multiple selector row for a master row.',
        appUrl: 'https://app.appsmith.com/app/table-lookup/table-lookup-66548c9b2e3ffe2d76d89ab0?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/table-lookup-v2-building-block.json',
        sortPriority: '1000',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/4HY4vPoB8nrFJNv2YTrGKV/6eafb72e472e3d0c06ca63e33ca8e79f/table-lookup-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/4S9uBuruavbeWqFiblPKb7/4c1c7b786f186cf3db6436755bf402da/table-lookup-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '66548c9b2e3ffe2d76d89ab0',
            name: 'Table Lookup',
            slug: 'table-lookup',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 63,
        templateGridColumnSize: 31
      },
      {
        id: '6447b64025c16d2c0004ad76',
        userPermissions: [],
        title: 'Order Fulfillment Tracker',
        description: 'Fulfill the orders placed by customers. Pick items from warehouse, print invoices and labels, ship items, track delivery and returns.',
        appUrl: 'https://app.appsmith.com/app/order-fulfilment-tracker/dashboard-63f48eafdb642f4c0d66c3ad?branch=master&embed=true&navbar=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/order-fulfilment-tracker.json',
        sortPriority: '1000',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/4KPyaMKnqwKyVDvRE70ONn/9ad85b6e85954debf98a71c08735c106/template-order-fulfillment-tracker.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'MENU_BUTTON_WIDGET',
          'CHECKBOX_WIDGET',
          'MODAL_WIDGET',
          'TABLE_WIDGET_V2',
          'TABS_WIDGET',
          'FORM_WIDGET',
          'RATE_WIDGET',
          'FILE_PICKER_WIDGET_V2',
          'CAMERA_WIDGET'
        ],
        functions: [
          'Operations'
        ],
        useCases: [
          'Order Management'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '63f48eafdb642f4c0d66c3ad',
            name: 'Dashboard',
            slug: 'dashboard',
            isDefault: true,
            isHidden: false
          },
          {
            id: '63f4c3b241059176acdfdd97',
            name: 'Orders',
            slug: 'orders',
            isDefault: false,
            isHidden: false
          },
          {
            id: '642bc8600cbeba5c311c64de',
            name: 'Customers',
            slug: 'customers',
            isDefault: false,
            isHidden: false
          },
          {
            id: '642bdf10c5ccee14a3691585',
            name: 'Products',
            slug: 'products',
            isDefault: false,
            isHidden: false
          },
          {
            id: '642bf045c5ccee14a36916dc',
            name: 'Returns',
            slug: 'returns',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '66548bbb8733fd4a177d8b60',
        userPermissions: [],
        title: 'Table Edit',
        description: 'View and edit data from a table.',
        appUrl: 'https://app.appsmith.com/app/table-edit/table-edit-665488dc0b63831a6991ef32?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/table-edit-building-block.json',
        sortPriority: '999',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/6IWESfNI9H36Rvlf3Rudby/ffb8aca94b34aeaefa06dfcb28bfdd0c/table-edit-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/1XY63gljYfJ3F9F0bwuM3z/3d50c0391700bc06798662604b24d4c4/table-edit-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '665488dc0b63831a6991ef32',
            name: 'Table Edit',
            slug: 'table-edit',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 64,
        templateGridColumnSize: 31
      },
      {
        id: '648ffa68239ea218ed9e338c',
        userPermissions: [],
        title: 'Content Management System',
        description: 'The instructors and curriculum designers can upload and manage content for their courses including video, text and quiz content types.',
        appUrl: 'https://app.appsmith.com/app/content-management-system/courses-6461caf0d209002373fbd8c3?embed=true&navbar=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/content-management-system.json',
        sortPriority: '999',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/fAsjJuyT7jrv7nyRFfbHo/527605e9b3a0f1386d6fba5406f20f09/template-content-management-system.png?fm=jpg&q=50',
          null
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'VIDEO_WIDGET',
          'LIST_WIDGET_V2',
          'TABLE_WIDGET_V2',
          'FILE_PICKER_WIDGET_V2',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'MENU_BUTTON_WIDGET',
          'CHECKBOX_WIDGET',
          'MODAL_WIDGET',
          'FORM_WIDGET',
          'RICH_TEXT_EDITOR_WIDGET',
          'ICON_BUTTON_WIDGET'
        ],
        functions: [
          'Operations'
        ],
        useCases: [
          'Dashboard'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '6461caf0d209002373fbd8c3',
            name: 'Courses',
            slug: 'courses',
            isDefault: true,
            isHidden: false
          },
          {
            id: '6464dac92c06a41774105f56',
            name: 'Modules',
            slug: 'modules',
            isDefault: false,
            isHidden: false
          },
          {
            id: '64678f4dfa3cc350567e6861',
            name: 'Content',
            slug: 'content',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6654883ef2bc71471f41cff0',
        userPermissions: [],
        title: 'Table Drilldown',
        description: 'Table data with view mode and filters',
        appUrl: 'https://app.appsmith.com/app/table-drilldown/table-6654856c2e3ffe2d76d89a7e?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/table-drilldown-building-block.json',
        sortPriority: '998',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/6v7kCdu7WJhTuJ5yoj4RTf/81c96be201b8a1f027f37bb2b2277f78/table-drilldown-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/5jSDNvOTjM6h7y00lTpaxS/c8b0fad9369bcb5a8413861053edaaea/table-drilldown-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '6654856c2e3ffe2d76d89a7e',
            name: 'Table',
            slug: 'table',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 83,
        templateGridColumnSize: 31
      },
      {
        id: '65846b783eef8356020f0729',
        userPermissions: [],
        title: 'Login Flow',
        description: 'Build a sign-in form to implement custom authentication and user registeration.',
        appUrl: 'https://app.appsmith.com/app/login-flow/authentication-6567206472f6553cc7468212?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/building-block-login-flow.json',
        sortPriority: '998',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/BCRfRvJe7F33fcg1yeYlz/c967a3f44774731460f560d069272635/Login_Template_Cover.svg?q=50',
          null
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Operations'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '6567206472f6553cc7468212',
            name: 'Authentication',
            slug: 'authentication',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '642580beba5bf10beae87f61',
        userPermissions: [],
        title: 'KYC Dashboard',
        description: 'Compliance teams can use this app to collect user information and supporting documents to screen and complete the KYC verification process.',
        appUrl: 'https://app.appsmith.com/app/kyc-dashboard/dashboard-6414768eec20775f76c4c56b?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/kyc-dashboard.json',
        sortPriority: '998',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/7dN3Jd2IPoN6YGG6oFyfJT/cb6db3452ea476d93781c1b50aa4c0b6/template-kyc-dashboard.png?fm=jpg&q=50'
        ],
        widgets: [
          'CHART_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'DATE_PICKER_WIDGET2',
          'IMAGE_WIDGET',
          'MODAL_WIDGET',
          'TABLE_WIDGET_V2',
          'TABS_WIDGET',
          'MULTI_SELECT_WIDGET_V2',
          'RICH_TEXT_EDITOR_WIDGET'
        ],
        functions: [
          'Operations'
        ],
        useCases: [
          'Compliance'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '6414768eec20775f76c4c56b',
            name: 'Dashboard',
            slug: 'dashboard',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6654412a82c382775bd79087',
        userPermissions: [],
        title: 'Chart Data',
        description: 'View and filter data from a chart',
        appUrl: 'https://app.appsmith.com/app/chart-data/user-stats-66544c93fe159f08fe35c11a?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/chart-data-building-block.json',
        sortPriority: '997',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/HR2RvkQ4jCZi5ZH607liK/7eb5980b177923d00711c1f6bd83f737/chart-data-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/1GDbaMj7ArjsFpNG9sao20/bcff52627213915f5f82ffd63225b9a3/chart-data-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '66544c93fe159f08fe35c11a',
            name: 'User Data',
            slug: 'user-data',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 51,
        templateGridColumnSize: 22
      },
      {
        id: '650c38cc3593897ffefacce3',
        userPermissions: [],
        title: 'Product Catalog CRUD',
        description: 'List and manage multiple products with ease, complete CRUD functionality with a simple set up for easy datasource swap.',
        appUrl: 'https://app.appsmith.com/app/product-catalog/home-64ffc27577505805e1e8c06d?branch=master&embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/product-catalog.json',
        sortPriority: '997',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/1ZOeGCU7fCW5J5lm4x97h7/bb0cad188a3db65a961ef4d962f9fea3/template-product-catalog.png?fm=png&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'ICON_BUTTON_WIDGET',
          'MODAL_WIDGET',
          'INPUT_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Marketing'
        ],
        useCases: [
          'Sales'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '64ffc27577505805e1e8c06d',
            name: 'Home',
            slug: 'home',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '66547a8e82c382775bd797c5',
        userPermissions: [],
        title: 'Upload File',
        description: 'Upload files from a file picker',
        appUrl: 'https://app.appsmith.com/app/upload-file/upload-file-665479c178d8f26fe87f2ed7?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/upload-file-building-block.json',
        sortPriority: '996',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/3vFxQE5Y2DHiSQnStThOzE/5f930b2ed1e775c58822f3e86b2157b3/upload-file-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/3kE2ldi8W7LLFT4mV2zT4f/e8407d49bdab5149d914797758625cd2/upload-file-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '665479c178d8f26fe87f2ed7',
            name: 'Upload File',
            slug: 'upload-file',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 49,
        templateGridColumnSize: 16
      },
      {
        id: '64520ca85da532619871ed43',
        userPermissions: [],
        title: 'Loan Approval App',
        description: 'Lenders can view applications from borrowers and check credit scores to approve and disburse loans.',
        appUrl: 'https://app.appsmith.com/app/loan-approval-app/login-6436c6fc26013158789b0cdc?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/loan-approval-app.json',
        sortPriority: '996',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/3VTujQulCXexVhc5m6AmpG/cafcca1d8616d7c11ce0be01ba7364cd/template-loan_approval_app.png?fm=png&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'MODAL_WIDGET',
          'TABLE_WIDGET_V2',
          'FORM_WIDGET',
          'TABS_WIDGET',
          'FILE_PICKER_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Operations'
        ],
        useCases: [
          'Approval App'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '6436c6fc26013158789b0cdc',
            name: 'Login',
            slug: 'login',
            isDefault: true,
            isHidden: false
          },
          {
            id: '643669eb7c81ad7697466886',
            name: 'View Applications',
            slug: 'view-applications',
            isDefault: false,
            isHidden: false
          },
          {
            id: '643782685a787709661d725b',
            name: 'User Managment',
            slug: 'user-managment',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.18-SNAPSHOT',
        minVersionPadded: '000010000900018',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '641e7b9024394b5e2a662530',
        userPermissions: [],
        title: 'Inventory Management Dashboard',
        description: 'Effortlessly manage suppliers, inventory and warehouse locations with our Inventory app. Simplify stock adjustments, create purchase orders and track transfers with ease.',
        appUrl: 'https://app.appsmith.com/app/inventory-management-dashboard/dashboard-64130134d67ea94e3d9723f3?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/inventory-management-dashboard.json',
        sortPriority: '995',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/7g32Ng0rfMw0diaR1BrD1/1d3a8d354ca6f9844fa6e28396195731/template-inventory-management-dashboard.png?fm=png&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CHART_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'DATE_PICKER_WIDGET2',
          'ICON_BUTTON_WIDGET',
          'IMAGE_WIDGET',
          'MENU_BUTTON_WIDGET',
          'CHECKBOX_WIDGET',
          'CURRENCY_INPUT_WIDGET',
          'MODAL_WIDGET',
          'STATBOX_WIDGET',
          'TABLE_WIDGET_V2'
        ],
        functions: [
          'Operations'
        ],
        useCases: [
          'Solutions'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '64130134d67ea94e3d9723f3',
            name: 'Dashboard',
            slug: 'dashboard',
            isDefault: true,
            isHidden: false
          },
          {
            id: '64130134d67ea94e3d9723f4',
            name: 'Products',
            slug: 'products',
            isDefault: false,
            isHidden: false
          },
          {
            id: '64130134d67ea94e3d9723f5',
            name: 'Purchase Orders',
            slug: 'purchase-orders',
            isDefault: false,
            isHidden: false
          },
          {
            id: '64130134d67ea94e3d9723f7',
            name: 'Suppliers',
            slug: 'suppliers',
            isDefault: false,
            isHidden: false
          },
          {
            id: '64130134d67ea94e3d9723f8',
            name: 'Warehouses',
            slug: 'warehouses',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '66548073f2bc71471f41cf0f',
        userPermissions: [],
        title: 'Chart Drilldown',
        description: 'Chart and table data display with filters',
        appUrl: 'https://app.appsmith.com/app/chart-drilldown/chart-66547d942e3ffe2d76d89a40?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/chart-drilldown-building-block.json',
        sortPriority: '994',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/htY4V0BjQYiKD0ZvVeqx8/09a3fed2f8a1a24cb22d0352f939c8ec/chart-drilldown-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/JThUl8yPN534g9xGwKXmt/98db3a5545fcfd424ca865a69231b5ab/chart-drilldown-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '66547d942e3ffe2d76d89a40',
            name: 'Chart',
            slug: 'chart',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 49,
        templateGridColumnSize: 31
      },
      {
        id: '6501ac14e53ba863f86b8b8f',
        userPermissions: [],
        title: 'Todo App',
        description: 'Simple Todo app with Postgres datasource, priorities and deadlines',
        appUrl: 'https://app.appsmith.com/app/todo-app/tasks-64e59dbf7a61e456ffc69b20?branch=master&embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/todo-app.json',
        sortPriority: '994',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/298gSWfkyOb4blGZFRLy0V/588e7dc06248accec95b09b5fe83520c/template-todo-app.png?fm=png&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'ICON_BUTTON_WIDGET',
          'MODAL_WIDGET'
        ],
        functions: [
          'Other'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '64e59dbf7a61e456ffc69b20',
            name: 'Tasks',
            slug: 'tasks',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '66604ca7c6d36a14064c8f55',
        userPermissions: [],
        title: 'List Lookup',
        description: 'Display multiple selector row for a master row using a list widget.',
        appUrl: 'https://app.appsmith.com/app/list-lookup/list-lookup-665491652e3ffe2d76d89afc?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/list-lookup-building-block.json',
        sortPriority: '993',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/1FECzXtKmOQLtCxh5AEK4l/b94e804ef39433ca0ac7cdc3278005de/list-lookup-building-block-cover.svg',
          'https://images.ctfassets.net/lpvian6u6i39/3YDzmq2HSycFREF7XSzp32/d09a5a7182b265ce6bf0ef7f75771ee9/list-lookup-building-block-thumbnail.svg'
        ],
        widgets: [
          'SELECT_WIDGET',
          'CHART_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET'
        ],
        functions: [
          'Building Blocks'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '665491652e3ffe2d76d89afc',
            name: 'List Lookup',
            slug: 'list-lookup',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 70,
        templateGridColumnSize: 31
      },
      {
        id: '64f950511be3252a87faf3c8',
        userPermissions: [],
        title: 'Crypto Live Tracker',
        description: 'Discover how to enable seamless communication for real-time data in apps such as Stocks and Cryptocurrency with Websockets in Appsmith.',
        appUrl: 'https://app.appsmith.com/app/crypto-live-tracker/websocket-with-mutations-64df56d287c459512d5779a5?branch=master&embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/crypto-live-tracker.json',
        sortPriority: '993',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/3axjveBISj1evY15FyVitD/e1845f9455604c76995c03009d7bab9b/template-crypto-live-tracker.png?fm=png&q=50',
          null
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'LIST_WIDGET_V2',
          'ICON_BUTTON_WIDGET'
        ],
        functions: [
          'Finance'
        ],
        useCases: [
          'Tracking tool'
        ],
        datasources: [],
        pages: [
          {
            id: '64df56d287c459512d5779a5',
            name: 'Websocket with Mutations',
            slug: 'websocket-with-mutations',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '646624e5b322f947ee5ce916',
        userPermissions: [],
        title: 'Delivery Service Management',
        description: 'Food delivery services can use this app to manage and track order delivery tasks, restaurant partners and drivers. ',
        appUrl: 'https://app.appsmith.com/app/delivery-service-management/delivery-tracker-644b91f6a9a0f069b4feaa27?embed=true&navbar=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/delivery-service-management.json',
        sortPriority: '992',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/6nsPjgy3u1HSopBFUJzw0c/846f7ce660a63d82fa6c72f8dfca1984/template-delivery-service-management.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'INPUT_WIDGET_V2',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'TABLE_WIDGET_V2',
          'MODAL_WIDGET',
          'FILE_PICKER_WIDGET_V2',
          'DATE_PICKER_WIDGET2',
          'MULTI_SELECT_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Customer Support'
        ],
        useCases: [],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '644b91f6a9a0f069b4feaa27',
            name: 'Delivery Tracker',
            slug: 'delivery-tracker',
            isDefault: true,
            isHidden: false
          },
          {
            id: '644f81abfa5a4058b8774af5',
            name: 'Restaurant Partners',
            slug: 'restaurant-partners',
            isDefault: false,
            isHidden: false
          },
          {
            id: '644f85ffbf34ca68b34eec9b',
            name: 'Driver Information',
            slug: 'driver-information',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.9.12-SNAPSHOT',
        minVersionPadded: '000010000900012',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62b1baffe8e73110ce252253',
        userPermissions: [],
        title: 'Maintenance Order Management',
        description: 'This app is used to maintain and analyze the work/maintenance orders that are received by an organization. A new work order can be created and filtered agent wise.',
        appUrl: 'https://app.appsmith.com/app/maintenance-order-management/home-page-626ac90acca31f35e65b4320?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/maintenance-order-management.json',
        gifUrl: '',
        sortPriority: '990',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/6nYGrZ0dy77mIsvxbFs2b8/d754ce66ea4e253cc7b5914617916daa/template-maintenance-order-management.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CHART_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'DATE_PICKER_WIDGET2',
          'ICON_BUTTON_WIDGET',
          'IMAGE_WIDGET',
          'MENU_BUTTON_WIDGET',
          'CHECKBOX_WIDGET',
          'CURRENCY_INPUT_WIDGET',
          'MODAL_WIDGET',
          'STATBOX_WIDGET',
          'TABLE_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Customer Support'
        ],
        useCases: [
          'Service Desk'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '626ac90acca31f35e65b4320',
            name: 'Home Page',
            slug: 'home-page',
            isDefault: true,
            isHidden: false
          },
          {
            id: '626ac90acca31f35e65b4319',
            name: 'Submit new order',
            slug: 'submit-new-order',
            isDefault: false,
            isHidden: false
          },
          {
            id: '626ac90acca31f35e65b431e',
            name: 'My orders',
            slug: 'my-orders',
            isDefault: false,
            isHidden: false
          },
          {
            id: '626ac90acca31f35e65b431d',
            name: 'Admin',
            slug: 'admin',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.5',
        minVersionPadded: '000010000700005',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nConsumer goods organizations get a lot of work/service orders every day. Being able to manage and assign the services effectively keeps a customer happy. It can help organizations manage their service schedules and work orders efficiently.\n\nThis app can be used to maintain and analyze the work/maintenance orders received. User can create new work orders or update an existing work order, as well as analyze the distribution of work orders for an agent.\n\n#### __Highlights of the app__\n- Users (customers) can create a new work order.\n- Users (customers) can see all work orders created by them.\n- Users (agents) can see their work orders.\n- Users (agents) can update their work orders.\n- Users (admin) can see all the work orders.\n- Users (admin) can see orders agent wise.\n- Users (admin) can see the distribution of the equipment work orders per agent.',
        excerpt: 'Use the app to create new work orders, filter them by agents, and analyze all work orders received.',
        category: 'Customer Support',
        featured: true,
        tags: [
          'customer',
          'support',
          'dashboard',
          'maintenance'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62db0d0de8e73110ce25390e',
        userPermissions: [],
        title: 'IT Asset Tracker',
        description: 'Keep a track of an organization’s assets by assigning, and checking for any loss of assets or equipment, and ensure periodic maintenance.',
        appUrl: 'https://app.appsmith.com/app/it-asset-tracker/dashboard-62554d3be52b06350af3a0b2?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/it-asset-tracker.json',
        gifUrl: '',
        sortPriority: '989',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/3GfeudqsGA9f739DMdDbr1/a6581f9a13551c84322ee5e232c7c8ea/template-it-asset-tracker.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CHART_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'ICON_BUTTON_WIDGET',
          'IMAGE_WIDGET',
          'MENU_BUTTON_WIDGET',
          'MODAL_WIDGET',
          'STATBOX_WIDGET',
          'JSON_FORM_WIDGET',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Human Resources (HR)'
        ],
        useCases: [
          'Solutions'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '62554d3be52b06350af3a0b2',
            name: 'Dashboard',
            slug: 'dashboard',
            isDefault: true,
            isHidden: false
          },
          {
            id: '62554d3be52b06350af3a0b0',
            name: 'Assets',
            slug: 'assets',
            isDefault: false,
            isHidden: false
          },
          {
            id: '62554d3be52b06350af3a0b4',
            name: 'Employees',
            slug: 'employees',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.8.14-SNAPSHOT',
        minVersionPadded: '000010000800014',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nAs organizations scale, managing inventory for company or business assets can prove to be challenging. Inventory management tools are great ways to keep track of assets that are used within the organization.\n\nWith this app, users can track an organization\'s assets, by assigning assets to employees, check for loss, and mark assets for periodic maintenance.\n\n#### __Highlights of the app__\n- Users can view the statistics of assets like number of total assets and returned assets.\n- Users can view different makes of the assets by asset type.\n- Users can view all the assets and their information at a glance.\n- Users can delete or modify asset details.\n- Users can see assets assigned to an employee.\n- Users can assign a new asset to an employee.\n\u200d',
        excerpt: 'An app to let you track, categorize, and maintain the status of all your company’s IT assets.',
        category: 'Human Resources',
        featured: true,
        tags: [
          'inventory',
          'management',
          'assets',
          'tracking',
          'employees'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62db08bbe8e73110ce25390c',
        userPermissions: [],
        title: 'Customer Messaging Tool',
        description: 'Utilize this template to effectively communicate with and manage consumers.  This program assists in selecting a group of clients, choosing the message type, and sending a WhatsApp message or SMS to them via the Twilio integration.\n',
        appUrl: 'https://app.appsmith.com/app/customer-messaging-tool/customer-messaging-62d1acad279768242a2a6ab1?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/customer-messaging-tool.json',
        gifUrl: '',
        sortPriority: '988',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/5fxy0tmKU0qcfov33kUyLf/ade305fe2123b89cc3b54f867bb33ec9/template-customer-messaging-tool.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'ICON_BUTTON_WIDGET',
          'IMAGE_WIDGET',
          'MULTI_SELECT_WIDGET_V2',
          'MODAL_WIDGET',
          'PHONE_INPUT_WIDGET',
          'TABLE_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Marketing'
        ],
        useCases: [
          'Communications'
        ],
        datasources: [
          'restapi-plugin',
          'twilio'
        ],
        pages: [
          {
            id: '62d1acad279768242a2a6ab1',
            name: 'Customer messaging',
            slug: 'customer-messaging',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.9-SNAPSHOT',
        minVersionPadded: '000010000700009',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nOne of the most effective ways for companies to engage with customers is having a messaging tool in place. When customers join the company\'s platform, or when they have a question about the product, or a sales inquiry, a tool that enables them to seek answers and connect with the company will go a long way.\n\nUtilize this template to effectively communicate with and manage consumers. This program assists in selecting a group of clients, choosing the message type, and sending a WhatsApp message or SMS to them via the Twilio integration.\n\n#### __Highlights of the app__\n- Users can select a set of customers from the table of customers.\n- Users can select a message from a list of messages that can be sent to a customer.\n- Users can customize the message that is to be sent to a customer.\n- Users can send a SMS or a WhatsApp message to the selected customers via the Twilio integration.',
        excerpt: 'Select a group of clients, choose the message type, and send a WhatsApp message or SMS using Twilio.',
        category: 'Marketing',
        featured: true,
        tags: [
          'messaging',
          'customer engagement',
          'communication',
          'SMS',
          'WhatsApp'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6246c4b09ba4d10649258666',
        userPermissions: [],
        title: 'Applicant Tracker',
        description: 'Candidates can apply for jobs, and reviewers to review their applications, schedule interviews using the Google Calendar API, and give feedback to the candidate.',
        appUrl: 'https://app.appsmith.com/app/applicant-tracker/1-track-applications-61c170fe9229e87746b79e0b?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/applicant-tracker.json',
        gifUrl: '',
        sortPriority: '987',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/4U6hqkCo2FJ0r6z2083v6j/e24deacf7e6a829c0e280e43c0959d17/template-applicant-tracker.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'FILE_PICKER_WIDGET_V2',
          'FORM_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'DATE_PICKER_WIDGET2',
          'IMAGE_WIDGET',
          'RATE_WIDGET',
          'MODAL_WIDGET',
          'PHONE_INPUT_WIDGET',
          'RICH_TEXT_EDITOR_WIDGET',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Human Resources (HR)'
        ],
        useCases: [
          'Solutions'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '61c170fe9229e87746b79e09',
            name: '2 Application Upload',
            slug: '2-application-upload',
            isDefault: false
          },
          {
            id: '61c170fe9229e87746b79e0b',
            name: '1 Track Applications',
            slug: '1-track-applications',
            isDefault: true
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nJob-seeking and hiring for jobs are both complicated processes. It can become challenging to keep track of emails and follow up without a few applications falling through the cracks. A hiring management app strengthens recruiting processes. This hiring management template is a one-stop-shop for recruitment processes. A job seeker can send in a job application, reviewers and panelists can review the candidate\'s CV and qualifications, and then schedule an interview using Google Calendar API.\n\nIn this app, once an interview is scheduled, the job applicant can also give feedback to the recruiter using the link shared in the body of the invitation. This feedback page is also included in this application, where the interviewer can give their candid feedback and provide a rating to the candidate. The status can also reflect if the job applicant is getting placed or not.\n\nWith this actionable database of job applicants, communications about the interview outcome and communication regarding future openings become easy.\n\n#### __Highlights of the app__\n- Job applicants can fill in a job application, attach their CV, and fill in their personal and professional details.\n- When a candidate applies, they are added to a list of all applicants.\n- Users can view all applications and the associated information on the \'track applications\' page. When a recruiter selects a user from this page, they can see their profile and adjust their status.\n- Applicants\' interviews can be scheduled using the Google Calendar API.\n- After the interview, users can submit their feedback. It is accessible again on the track applications page when the feedback is received.',
        excerpt: 'Review applications, schedule interviews using the Google Calendar API, & share interview feedback.',
        category: 'Human Resources',
        featured: true,
        tags: [
          'hiring',
          'recruitment',
          'job application',
          'interview management',
          'feedback'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62ffa415e8e73110ce254b4c',
        userPermissions: [],
        title: 'Bugs and Issues Manager',
        description: 'Create and track issues/bug reports and collect related screenshots, using Airtable to store data and files. ',
        appUrl: 'https://app.appsmith.com/app/bugs-and-issues-manager/bugs-and-issues-62d5a32ab06ce90d91db6072?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/bugs-and-issues-manager.json',
        gifUrl: '',
        sortPriority: '986',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/73fXXo41xPALUVGQiPAIN/1f501ef280c19a31742e6c021b4e1607/bugs-and-issues-manager-template-thumbnail.png?fm=jpg&q=50',
          null
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'DOCUMENT_VIEWER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'ICON_BUTTON_WIDGET',
          'IMAGE_WIDGET',
          'MODAL_WIDGET',
          'STATBOX_WIDGET',
          'JSON_FORM_WIDGET',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Other'
        ],
        useCases: [
          'Support'
        ],
        datasources: [
          'saas-plugin'
        ],
        pages: [
          {
            id: '62d5a32ab06ce90d91db6072',
            name: 'Bugs and Issues',
            slug: 'bugs-and-issues',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.13',
        minVersionPadded: '000010000700013',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nSoftware developers often use a system to track bugs and other issues reported by their users. This app allows users to report issues, track and update the status, and more, using Appsmith\'s Airtable integration to store data and images in an Airtable base.\n\n#### __Highlights of the app__\n- Users can view the existing bugs and open the attached images.\n- Users can add a new bug/issue.\n- Users can update the existing issue.\n- Users can change the Base ID and Table Name to connect their own datasource.\n\u200d',
        excerpt: 'Create and track issues, bug reports and collect related screenshots using Airtable to store data and files.',
        category: 'Human Resources',
        featured: true,
        tags: [
          'bug tracking',
          'issue management',
          'software development'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6242d64c9ba4d10649258456',
        userPermissions: [],
        title: 'Business Analytics Dashboard',
        description: 'Pool in data from different databases, analyze and visualize them in one dashboard to help with critical decisions like successful scaling of operations.',
        appUrl: 'https://app.appsmith.com/app/business-analytics-dashboard/car-showroom-6256ad4d0d3d384069c06c68?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/business-analytics-dashboard.json',
        gifUrl: '',
        sortPriority: '985',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/fGaYNxe3SdzHJwW9YmTrI/5223355cd793a483846fb96d7006be8a/template-business-analytics-dashboard.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CHART_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'DATE_PICKER_WIDGET2',
          'ICON_BUTTON_WIDGET',
          'MENU_BUTTON_WIDGET',
          'MULTI_SELECT_WIDGET_V2',
          'RATE_WIDGET',
          'CURRENCY_INPUT_WIDGET',
          'MODAL_WIDGET',
          'STATBOX_WIDGET',
          'TABLE_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Sales'
        ],
        useCases: [
          'Dashboard'
        ],
        datasources: [
          'postgres-plugin',
          'mongo-plugin'
        ],
        pages: [
          {
            id: '6256ad4d0d3d384069c06c68',
            name: 'Car showroom',
            slug: 'car-showroom',
            isDefault: true,
            isHidden: false
          },
          {
            id: '6256ad4d0d3d384069c06c66',
            name: 'Car servicing',
            slug: 'car-servicing',
            isDefault: false,
            isHidden: false
          },
          {
            id: '6256ad4d0d3d384069c06c6a',
            name: 'Business dashboard',
            slug: 'business-dashboard',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.5',
        minVersionPadded: '000010000700005',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nOrganizations that have businesses running in various verticals have information generated across all domains. Not having a shared dashboard to analyze statistics at a glance makes it difficult for the organization to get a holistic view of its business and revenue.\n\nThis app visualizes the use case of a car showroom business with maintenance verticals. The template can help pool data from various data sources into one dashboard, enabling stakeholders to analyze critical metrics across all business verticals in one place.\n\n#### __Highlights of the app__\n- Users can view the showroom deals by a server-side paginated list and search through this list.\n- Users can update fields in a showroom deal using the form.\n- Users can view the repair and maintenance deals by a server-side paginated list and can search through the list.\n- Users can update fields in a repair deal using the form.\n- Users can pool data from various data sources in a dashboard.\n- Users can see the statistics of the deals and revenue generated.\n- Users can visualize the data using charts and progress bars for various parameters.',
        excerpt: 'Get data from various databases; analyze & visualize them in one dashboard to build a unified view.',
        category: 'Sales',
        featured: true,
        tags: [
          'dashboard',
          'data analysis',
          'business metrics',
          'car showroom',
          'maintenance'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6269fc6bc3dd2f71eb2f4081',
        userPermissions: [],
        title: 'Meeting Scheduler',
        description: 'Create a free app that lets users schedule meetings with you based on your google calendar.',
        appUrl: 'https://app.appsmith.com/app/meeting-scheduler/calendar-mobile-652e0215a4370642656ed03e?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/meetingscheduler.json',
        gifUrl: '',
        sortPriority: '984',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/5Nvn4eIjTmUGMwWyENIIVO/01e17bf3c0314fd8713facb9887e98a8/template-meeting-scheduler.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'FORM_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'IMAGE_WIDGET',
          'MODAL_WIDGET'
        ],
        functions: [
          'Other'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'restapi-plugin'
        ],
        pages: [
          {
            id: '652e0215a4370642656ed03e',
            name: 'Calendar Mobile',
            slug: 'calendar-mobile',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.6.22-SNAPSHOT',
        minVersionPadded: '000010000600022',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nScheduling team meetings without the hassle of back and forth conversations is passé. With this app, you can let anyone set up and create meetings. All you have to do is authorize your Google Calendar and share the app with anyone you would like to.\n\nYou can completely customize the duration of meetings and let your friends and colleagues know when they can reach you. You can also add in multiple visitors, and if you have a meeting URL, you can also add that.\n\nSchedule Team Meetings without the Hassle of Back-and-Forth Emails.\n\n#### __Highlights of the app__\n- Users can create unlimited custom meeting durations\n- Users can set their working hours on the settings page\n- You can schedule meetings at any available time while maintaining privacy\n- If you have a Zoom account, you can add in meeting links, so no extra work is required\n- You can customize the meeting text to attach your meeting ID without any integration required.',
        excerpt: 'Get data from various databases; analyze & visualize them in one dashboard to build a unified view.',
        category: 'Others',
        featured: true,
        tags: [
          'meeting scheduling',
          'team meetings',
          'calendar integration',
          'customization',
          'Zoom'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62e0088fe8e73110ce253b06',
        userPermissions: [],
        title: 'Employee Time Tracker',
        description: 'Track hours on various tasks, view total time by task, and view logs of all time entries.',
        appUrl: 'https://app.appsmith.com/app/employee-time-tracker/time-log-63165a2a1df89313e25792b0?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/employee-time-tracker.json',
        gifUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/employee-time-tracker.gif',
        sortPriority: '983',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/5MjWU2RK1fmmjqpNhv3CpO/1e690bd0283f149b9e82d682a9f568e1/template-employee-time-tracker.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'CONTAINER_WIDGET',
          'TEXT_WIDGET',
          'ICON_BUTTON_WIDGET',
          'MODAL_WIDGET',
          'TABLE_WIDGET_V2',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Human Resources (HR)'
        ],
        useCases: [
          'Productivity'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '63165a2a1df89313e25792b0',
            name: 'Time Log',
            slug: 'time-log',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.14',
        minVersionPadded: '000010000700014',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nOrganizations often need a way to track employees’ work hours on various tasks, to assist with planning and project management. This Employee Time Tracker app allows employees to clock in and out on different tasks, logging their work efforts and viewing total hours logged per employee or task.\n\n#### __Highlights of the app__\n- Employees can clock-in/clock-out to log time spent on a Task\n- Employees can view logs of their work on all Tasks\n- Employees can select a Task to view total time worked',
        excerpt: 'Track hours on various tasks, view total time by task, and view logs of all time entries.',
        category: 'Human Resources',
        featured: true,
        tags: [
          'employee time tracking',
          'task management',
          'work hours',
          'project management'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62b1c11ae8e73110ce252257',
        userPermissions: [],
        title: 'WhatsApp CRM',
        description: 'Dynamically generate custom messages from your data using this WhatsApp link builder, then send the message to a WhatsApp user',
        appUrl: 'https://app.appsmith.com/app/whatsapp-messenger/page1-6261b50800cba01cd02f256a?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/whatsapp-crm.json',
        gifUrl: '',
        sortPriority: '982',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/1Kq8m55jlOul4f7ImTlVxe/ed202fd6831987cba4346bab8e6b0585/template-whatsapp-screenshot.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'FORM_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'BUTTON_GROUP_WIDGET',
          'IMAGE_WIDGET',
          'MODAL_WIDGET',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'All',
          'Marketing'
        ],
        useCases: [
          'Communications'
        ],
        datasources: [
          'postgres-plugin',
          'restapi-plugin'
        ],
        pages: [
          {
            id: '6261b50800cba01cd02f256a',
            name: 'Page1',
            slug: 'page1',
            isDefault: true
          }
        ],
        minVersion: 'v1.7.1-SNAPSHOT',
        minVersionPadded: '000010000700001',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nDynamically generate custom messages from your data using this WhatsApp link builder, then send the message to a WhatsApp user. This example uses our Mock Users sample dataset, which can easily be swapped out for your CRM data to build a custom messaging tool for your team.\n\n#### __Highlights of the app__\n- Users can select a Contact from the table widget and auto-generate a new message to the user\n- Users can select between different message templates\n- Users can edit or add to the message before sending\n- Users can send a custom message without using the templates',
        excerpt: 'Generate custom messages from a template, then send the message to a WhatsApp user.',
        category: 'Marketing',
        featured: true,
        tags: [
          'whatsapp',
          'custom messaging',
          'data-driven',
          'CRM',
          'messaging tool'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62bc9089e8e73110ce2527f9',
        userPermissions: [],
        title: 'Google Maps Navigation',
        description: 'Guide your team with Google Maps directions, dynamically generated from your location or form a custom map pin added by the user.',
        appUrl: 'https://app.appsmith.com/app/google-maps-navigation/directions-6269a377d8480440cf788b5c?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/google-maps-navigation.json',
        gifUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/maps_screenshot.png',
        sortPriority: '981',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/ktjTTMhW2Zu2l4CgZsrwY/faa521db7c7fb153181fcc9c7a5fc51b/template-google-maps.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'SELECT_WIDGET',
          'TEXT_WIDGET',
          'IMAGE_WIDGET',
          'MAP_WIDGET',
          'TABLE_WIDGET_V2'
        ],
        functions: [
          'Other'
        ],
        useCases: [
          'Tracking tool'
        ],
        datasources: [
          'postgres-plugin',
          'restapi-plugin'
        ],
        pages: [
          {
            id: '6269a377d8480440cf788b5c',
            name: 'Directions',
            slug: 'directions',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.1-SNAPSHOT',
        minVersionPadded: '000010000700001',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nSupporting a team of delivery drivers or techs working in the field can be challenging. Often times, there is a dispatcher or office admin that can help organize their travel plans and keep everyone updated.\n\nThis app uses Google Maps to generate driving directions based on your team\'s location so dispatchers and office admins can quickly send navigation links to their team.\n\n#### __Highlights of the app__\n- Users can select different team members to view their location on a map\n- Users can generate driving directions from their current location to the selected team member\n- Users can add a new map pin and generate driving directions from the team member to a custom location',
        excerpt: 'An app to dynamically generate Google Maps directions from your location or from a custom map pin.',
        category: 'Others',
        featured: true,
        tags: [
          'team management',
          'field support',
          'navigation',
          'driving directions',
          'Google Maps'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6242d6629ba4d10649258457',
        userPermissions: [],
        title: 'Fund Raising CRM',
        description: 'This Fundraising CRM, allows for secure and direct communication between a company, and their investors, allowing users to maintain track of their communications.',
        appUrl: 'https://app.appsmith.com/app/fund-raising-crm/investors-6204a671552a5f63958772aa?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/FundRaisingCRM_Enabled.json',
        gifUrl: '',
        sortPriority: '980',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/7DX3LCsXtuNm9R9ycUnN1W/d29b4780e0c1da144a8a64a482e1e167/template-fund-raising-crm.png?fm=jpg&q=50',
          null
        ],
        widgets: [
          'BUTTON_WIDGET',
          'FILE_PICKER_WIDGET_V2',
          'FORM_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'ICON_BUTTON_WIDGET',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Other'
        ],
        useCases: [
          'Solutions'
        ],
        datasources: [
          'amazons3-plugin'
        ],
        pages: [
          {
            id: '6204a671552a5f63958772aa',
            name: 'Investors',
            slug: 'investors',
            isDefault: true,
            isHidden: false
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '62cc56a9e8e73110ce252ff9',
        userPermissions: [],
        title: 'Vehicle Maintenance App',
        description: 'This app is used to manage and schedule a car’s maintenance according to its needs and age.  A new vehicle can be registered and upcoming service notifications can be monitored as well.',
        appUrl: 'https://app.appsmith.com/app/vehicle-maintenance-app/home-page-62a825fc84b91337251a0580?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/vehicle-maintenance-app.json',
        gifUrl: '',
        sortPriority: '979',
        screenshotUrls: [
          'https://images.ctfassets.net/lpvian6u6i39/6ct5Dw67ECx56V5eEa0FNa/cd4a5203b124051e39d834d01745c00c/template-vehicle-maintenance-app.png?fm=jpg&q=50'
        ],
        widgets: [
          'BUTTON_WIDGET',
          'CONTAINER_WIDGET',
          'INPUT_WIDGET_V2',
          'TEXT_WIDGET',
          'DATE_PICKER_WIDGET2',
          'ICON_BUTTON_WIDGET',
          'MODAL_WIDGET',
          'LIST_WIDGET_V2'
        ],
        functions: [
          'Customer Support'
        ],
        useCases: [
          'Service Desk'
        ],
        datasources: [
          'postgres-plugin'
        ],
        pages: [
          {
            id: '62a825fc84b91337251a0580',
            name: 'Home page',
            slug: 'home-page',
            isDefault: true,
            isHidden: false
          },
          {
            id: '62a825fc84b91337251a0582',
            name: 'New vehicle',
            slug: 'new-vehicle',
            isDefault: false,
            isHidden: false
          },
          {
            id: '62a825fc84b91337251a057f',
            name: 'Schedule',
            slug: 'schedule',
            isDefault: false,
            isHidden: false
          }
        ],
        minVersion: 'v1.7.5',
        minVersionPadded: '000010000700005',
        downloadCount: 0,
        active: true,
        mdText: '### __Overview__\nCars and other equipment need periodic maintenance. Monitoring the service dates and preventive maintenance deadlines for various cars is difficult for a workshop/organization. This brings in the need for a service notification and preventive maintenance management template.\n\nThis app is used to manage and schedule a car\'s maintenance according to its needs and age. A new vehicle can be registered, and upcoming service notifications can be monitored.\n\n#### __Highlights of the app__\n- Users can register a new vehicle\n- Users can register service for an existing vehicle\n- Users can check if service is due for a vehicle\n- Users can see all the necessary information of a vehicle\n- Users can see the maintenance schedule of all vehicles at a glance',
        excerpt: 'An app to schedule vehicle maintenance, add new vehicle details and monitor service notifications.',
        category: 'Customer Support',
        featured: true,
        tags: [
          'maintenance management',
          'service notifications',
          'preventive maintenance',
          'vehicle registration'
        ],
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '67fe95b758d513427504074e',
        userPermissions: [],
        title: 'Jira Agent',
        description: 'Ship faster with browser-based AI for Jira issue tracking and updates.',
        appUrl: 'https://demo.appsmithai.com/app/jira-agent/page-67f8f18f51e76b071bef0def?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/template-jira-agent.json',
        gifUrl: '',
        sortPriority: '108',
        screenshotUrls: [
          'https://images.ctfassets.net/g2t6glzgrp5p/4zulhRgKw53MWRDDFqHIUm/1796507a2c1fd0a25ef57adab52ca385/jira.svg',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: '67f8f18f51e76b071bef0def',
            name: 'Page',
            slug: 'page',
            isDefault: true
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '68389bf97ff3743f02a52799',
        userPermissions: [],
        title: 'Gmail Agent',
        description: 'Draft replies and summarise emails with our Gmail Agent in a Chrome extension',
        appUrl: 'https://demo.appsmithai.com/app/gmail-agent/page-68387dbdc0524d37fe0f02f0?environment=production&embed=true',
        appDataUrl: 'https://template.appsmith.com.s3.us-east-2.amazonaws.com/template-gmail-agent.json',
        gifUrl: '',
        sortPriority: '107',
        screenshotUrls: [
          'https://assets.appsmith.com/gmail.png',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: 'Page',
            isDefault: true
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '681de3365eddb02eb0e7293b',
        userPermissions: [],
        title: 'Asana Agent',
        description: 'Track progress, assign tasks, and manage projects smoothly with the Asana Agent.',
        appUrl: 'https://demo.appsmithai.com/app/asana-agent/page-681dc2c4416bc404f78b90aa?environment=production&embed=true',
        appDataUrl: 'https://template.appsmith.com.s3.us-east-2.amazonaws.com/template-asana-agent.json',
        gifUrl: '',
        sortPriority: '106',
        screenshotUrls: [
          'https://assets.appsmith.com/asana.png',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: 'Page',
            isDefault: true
          },
          {
            id: 'Page1',
            isDefault: false
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '68219bff6edd1000e5840e79',
        userPermissions: [],
        title: 'Google Docs Agent',
        description: 'Create product notes, business reports & custom template documents with ease.',
        appUrl: 'https://demo.appsmithai.com/app/google-docs-agent/page-681dee32f4c3e572f39c7cdb?environment=production&embed=true',
        appDataUrl: 'https://template.appsmith.com.s3.us-east-2.amazonaws.com/template-google-docs-agent.json',
        gifUrl: '',
        sortPriority: '105',
        screenshotUrls: [
          'https://assets.appsmith.com/googledocs.png',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: 'Page',
            isDefault: true
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '6815063a39c5c91c9a3f2444',
        userPermissions: [],
        title: 'Slack Agent',
        description: 'Summarise threads, draft replies, and file bugs with AI in Slack.',
        appUrl: 'https://demo.appsmithai.com/app/slack-agent/page-6814996958fee87fd6378820?environment=production&embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/template-slack-agent.json',
        sortPriority: '104',
        screenshotUrls: [
          'https://assets.appsmith.com/slack.png',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: 'Page',
            isDefault: true
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '67f918d3dea8e3019c4b9daa',
        userPermissions: [],
        title: 'Salesforce Agent',
        description: 'Boost sales with full customer insights and personalized outreach in Salesforce.',
        appUrl: 'https://demo.appsmithai.com/app/salesforce-agent/page-67f81c065eab94326690772a?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/template-salesforce-agent.json',
        sortPriority: '103',
        screenshotUrls: [
          'https://images.ctfassets.net/g2t6glzgrp5p/kqFzwDvlA5eHaZk3jbcEj/7857426d627ba63716dd82165d4ccfea/salesforce.svg',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: '67f81c065eab94326690772a',
            name: 'Page',
            slug: 'page',
            isDefault: true
          }
        ],
        minVersion: 'v1.7.9-SNAPSHOT',
        minVersionPadded: '000010000700009',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '680b19a627f398239bcf38c4',
        userPermissions: [],
        title: 'Notion Agent',
        description: 'Generate product specs, meeting summaries & fill custom Notion pages effortlessly.',
        appUrl: 'https://demo.appsmithai.com/app/salesforce-agent/page-67f81c065eab94326690772a?embed=true&environment=production',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/template-notion-agent.json',
        gifUrl: '',
        sortPriority: '102',
        screenshotUrls: [
          'https://images.ctfassets.net/g2t6glzgrp5p/tL8K2qvCzwd7gAQis9HT5/6d690717cf72730ce84630f0f4a83f87/notion.svg',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: '67f81c065eab94326690772a',
            name: 'Page',
            slug: 'page',
            isDefault: true
          }
        ],
        minVersion: 'v1.6.11-SNAPSHOT',
        minVersionPadded: '000010000600011',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      },
      {
        id: '67f919648f295e57e2d9e3ff',
        userPermissions: [],
        title: 'Zendesk Agent',
        description: 'Handle tickets, file bugs, and reply faster with AI in Zendesk.',
        appUrl: 'https://demo.appsmithai.com/app/zendesk-agent/page-67f77391698b240fb8342714?embed=true',
        appDataUrl: 'https://s3.us-east-2.amazonaws.com/template.appsmith.com/template-zendesk-agent.json',
        sortPriority: '101',
        screenshotUrls: [
          'https://images.ctfassets.net/g2t6glzgrp5p/5ynH5VEsRiR4rGPbNM3EO2/bdda6855b8f7c63227e96190db7389c1/zendesk.svg',
          null
        ],
        widgets: [],
        functions: [],
        useCases: [
          'Agent'
        ],
        datasources: [],
        pages: [
          {
            id: '67f77391698b240fb8342714',
            name: 'Page',
            slug: 'page',
            isDefault: true
          }
        ],
        minVersion: 'v1.7.9-SNAPSHOT',
        minVersionPadded: '000010000700009',
        downloadCount: 0,
        active: true,
        allowPageImport: true,
        isCommunityTemplate: false,
        templateGridRowSize: 0,
        templateGridColumnSize: 0
      }
    ],
    similarTemplates: [],
    filters: {
      functions: [
        'All'
      ]
    },
    allFilters: {
      userPermissions: [],
      sortPriority: '1000',
      widgets: [
        'AUDIO_RECORDER_WIDGET',
        'FILE_PICKER_WIDGET_V2',
        'TABS_WIDGET',
        'LIST_WIDGET',
        'CONTAINER_WIDGET',
        'DOCUMENT_VIEWER_WIDGET',
        'CHART_WIDGET',
        'JSON_FORM_WIDGET',
        'IFRAME_WIDGET',
        'CURRENCY_INPUT_WIDGET',
        'MULTI_SELECT_TREE_WIDGET',
        'SINGLE_SELECT_TREE_WIDGET',
        'RATE_WIDGET',
        'VIDEO_WIDGET',
        'TEXT_WIDGET',
        'BUTTON_WIDGET',
        'IMAGE_WIDGET',
        'CIRCULAR_PROGRESS_WIDGET',
        'SELECT_WIDGET',
        'MODAL_WIDGET',
        'SWITCH_GROUP_WIDGET',
        'JSON_FORM_WIDGGET',
        'CHECKBOX_GROUP_WIDGET',
        'LIST_WIDGET_V2',
        'PHONE_INPUT_WIDGET',
        'INPUT_WIDGET_V2',
        'TABLE_WIDGET',
        'CAMERA_WIDGET',
        'MAP_CHART_WIDGET',
        'STATBOX_WIDGET',
        'RADIO_GROUP_WIDGET',
        'MENU_BUTTON_WIDGET',
        'SWITCH_WIDGET',
        'CHECKBOX_WIDGET',
        'BUTTON_GROUP_WIDGET',
        'DATE_PICKER_WIDGET2',
        'TABLE_WIDGET_V2',
        'DIVIDER_WIDGET',
        'FORM_WIDGET',
        'AUDIO_WIDGET',
        'MULTI_SELECT_WIDGET_V2',
        'ICON_BUTTON_WIDGET',
        'RICH_TEXT_EDITOR_WIDGET',
        'PROGRESSBAR_WIDGET',
        'MAP_WIDGET'
      ],
      functions: [
        'Server Side Pagination',
        'Communication Services',
        'Technology',
        'Sample apps',
        'Consumer goods',
        'Human Resources (HR)',
        'WhatsApp',
        'Utilities',
        'Real Estate',
        'Slack',
        'E-Commerce',
        'Operations',
        'Building Blocks',
        'Services',
        'textile',
        'Health Care',
        'Client Side Filtering',
        'Building Block',
        'Customer Support',
        'Financials',
        'Consumer Discretionary',
        'Sales',
        'Materials',
        'Start-up',
        'Other',
        'Industrials',
        'Agriculture',
        'Businesses',
        'Marketing',
        'Google Maps',
        'All',
        'Energy'
      ],
      useCases: [
        'Legal',
        'Human Resources (HR)',
        'Product, design, and UX',
        'Order Management',
        'Productivity',
        'Compliance',
        'Tracking tool',
        'Sales',
        'Support',
        'Finance',
        'Public Relations (PR)',
        'Workflow Automation',
        'Solutions',
        'Service Desk',
        'Personal',
        'Software Development',
        'Remote work',
        'Information Technology (IT)',
        'Project Management',
        'B2C',
        'Database GUI',
        'Communications',
        'Marketing',
        'Approval App',
        'Dashboard'
      ],
      datasources: [
        'amazons3-plugin',
        'mysql-plugin',
        'twilio',
        'elasticsearch-plugin',
        'js-plugin',
        'arangodb-plugin',
        'mssql-plugin',
        'redis-plugin',
        'mongo-plugin',
        'google-sheets-plugin',
        'firestore-plugin',
        'snowflake-plugin',
        'saas-plugin',
        'dynamo-plugin',
        'restapi-plugin',
        'rapidapi-plugin',
        'postgres-plugin',
        'redshift-plugin',
        'smtp-plugin'
      ],
      templateGridRowSize: 0,
      templateGridColumnSize: 0
    },
    templateSearchQuery: '',
    templateNotificationSeen: null,
    templatesModal: {
      isOpen: false,
      isOpenFromCanvas: false
    },
    currentForkingTemplateInfo: {
      buildingBlock: {
        name: ''
      }
    }
  },
  buildingBlocks: {
    isDraggingBuildingBlocksToCanvas: false
  },
  workspaces: {
    loadingStates: {
      isFetchAllRoles: false,
      isSavingWorkspaceInfo: false,
      isFetchingWorkspaces: false,
      isFetchingEntities: false,
      isDeletingWorkspace: false
    },
    list: [],
    workspaceRoles: [],
    searchEntities: {}
  },
  selectedWorkspace: {
    workspace: {
      id: '68a9b81bde8cf11f80e4a8a0',
      userPermissions: [
        'publish:workspaceApplications',
        'delete:workspace',
        'manage:workspaceApplications',
        'export:workspaceApplications',
        'delete:workspaceDatasources',
        'read:workspaceDatasources',
        'read:workspaceApplications',
        'inviteUsers:workspace',
        'read:workspaces',
        'manage:workspaceDatasources',
        'delete:workspaceApplications',
        'create:datasources',
        'create:applications',
        'manage:workspaces'
      ],
      name: 'Peter\'s apps',
      email: 'peterjaberau@gmail.com',
      plugins: [
        {
          pluginId: '68a9b7e8de8cf11f80e4a877',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a876',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e7de8cf11f80e4a871',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a879',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a878',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a87f',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e7de8cf11f80e4a870',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a880',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e9de8cf11f80e4a892',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e7de8cf11f80e4a86f',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7edde8cf11f80e4a895',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e9de8cf11f80e4a891',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a875',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7edde8cf11f80e4a894',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a87c',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a872',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7eede8cf11f80e4a899',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a87e',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7eede8cf11f80e4a898',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a87a',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7eede8cf11f80e4a897',
          status: 'FREE'
        },
        {
          pluginId: '68a9b813de8cf11f80e4a89b',
          status: 'FREE'
        },
        {
          pluginId: '68a9b813de8cf11f80e4a89c',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e9de8cf11f80e4a881',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7eede8cf11f80e4a896',
          status: 'FREE'
        },
        {
          pluginId: '68a9b7e8de8cf11f80e4a87b',
          status: 'FREE'
        },
        {
          pluginId: '68a9b813de8cf11f80e4a89d',
          status: 'FREE'
        },
        {
          pluginId: '68a9b813de8cf11f80e4a89c',
          status: 'ACTIVATED'
        },
        {
          pluginId: '68a9b813de8cf11f80e4a89d',
          status: 'ACTIVATED'
        },
        {
          pluginId: '68a9b813de8cf11f80e4a89b',
          status: 'ACTIVATED'
        }
      ],
      slug: 'peter-s-apps',
      isAutoGeneratedWorkspace: true,
      organizationId: '68a9b7e9de8cf11f80e4a882',
      logoUrl: '/api/v1/assets/null'
    },
    applications: [],
    users: [],
    packages: [],
    loadingStates: {
      isFetchingApplications: false,
      isFetchingAllUsers: false,
      isFetchingCurrentWorkspace: false
    }
  },
  users: {
    loadingStates: {
      fetchingUsers: false,
      fetchingUser: false
    },
    list: [],
    users: [
      {
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
      }
    ],
    error: '',
    currentUser: {
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
    featureFlag: {
      data: {
        TEST_FLAG: true,
        release_datasource_environments_enabled: false,
        release_appnavigationlogoupload_enabled: false,
        release_embed_hide_share_settings_enabled: false,
        release_table_serverside_filtering_enabled: false,
        license_branding_enabled: false,
        license_sso_saml_enabled: false,
        license_sso_oidc_enabled: false,
        license_private_embeds_enabled: false,
        release_show_publish_app_to_community_enabled: false,
        license_gac_enabled: false,
        release_anvil_enabled: false,
        license_ai_agent_enabled: false,
        release_drag_drop_building_blocks_enabled: false,
        license_git_branch_protection_enabled: false,
        license_git_continuous_delivery_enabled: false,
        license_widget_rtl_support_enabled: false,
        ab_one_click_learning_popover_enabled: true,
        ab_appsmith_ai_query: false,
        rollout_remove_feature_walkthrough_enabled: false,
        rollout_eslint_enabled: false,
        release_layout_conversion_enabled: false,
        release_git_persist_branch_enabled: true,
        release_ide_animations_enabled: false,
        release_ide_datasource_selector_enabled: true,
        release_custom_widget_ai_builder: true,
        release_evaluation_scope_cache: true,
        release_gs_all_sheets_options_enabled: true,
        release_git_modularisation_enabled: true,
        release_git_api_contracts_enabled: true,
        kill_session_recordings_enabled: false,
        config_user_session_recordings_enabled: true,
        config_mask_session_recordings_enabled: true,
        release_external_saas_plugins_enabled: false,
        release_table_infinitescroll_enabled: true,
        license_multi_org_enabled: false,
        release_table_custom_sort_function_enabled: false,
        release_git_package_enabled: false,
        license_external_saas_plugins_enabled: false,
        release_computation_cache_enabled: false,
        release_ai_chat_integrations_enabled: false,
        release_reactive_actions_enabled: true,
        license_ai_agent_instance_enabled: false,
        release_jsobjects_onpageunloadactions_enabled: false,
        configure_block_event_tracking_for_anonymous_users: false,
        release_git_reset_optimization_enabled: true,
        license_git_unlimited_repo_enabled: false,
        ab_learnability_ease_of_initial_use_enabled: true,
        release_git_cleanup_feature_enabled: false,
        deprecate_custom_fusioncharts_enabled: true,
        ab_ds_binding_enabled: true,
        ab_premium_datasources_view_enabled: true,
        license_appsmithai_enabled: true,
        ab_create_new_apps_enabled: true,
        license_responses_api_enabled: false,
        license_x_site_embedding_enabled: false,
        ab_show_templates_instead_of_blank_canvas_enabled: true,
        release_workflows_enabled: false,
        release_ads_entity_item_enabled: true,
        ask_ai_sql: false,
        release_show_partial_import_export_enabled: true,
        release_query_module_enabled: false,
        ab_learnability_discoverability_collapse_all_except_data_enabled: true,
        ab_ds_schema_enabled: true,
        rollout_side_by_side_enabled: true,
        release_ui_module_enabled: false,
        release_workflows_hitl_crud_enabled: false,
        ab_start_with_data_default_enabled: true,
        release_app_sidebar_enabled: false,
        'release-tablev-2-infinitescroll-enabled-false': false,
        release_side_by_side_ide_enabled: false,
        license_monitoring_enabled: false,
        release_show_new_sidebar_announcement_enabled: false,
        release_custom_widgets_enabled: true,
        release_workflows_entity_exlorer_update_enabled: false,
        rollout_datasource_test_rate_limit_enabled: false,
        license_intercom_enabled: false,
        release_ui_module_on_input_change_enabled: false,
        rollout_js_enabled_one_click_binding_enabled: true,
        license_scheduled_backup_enabled: false,
        ab_wds_enabled: false,
        license_message_listener_enabled: false,
        release_custom_echarts_enabled: true,
        ab_property_pane_section_collapsedbydefault_enabled: false,
        release_table_custom_loading_state_enabled: true,
        rollout_optimise_diff_enabled: false,
        rollout_editor_pane_segments_enabled: true,
        release_show_create_app_from_templates_enabled: true,
        ab_gif_signposting_enabled: false,
        license_session_timeout_enabled: false,
        release_git_continuous_delivery_enabled: true,
        release_git_status_granular_enabled: true,
        release_package_ide_full_mode_enabled: false,
        release_git_branch_protection_enabled: false,
        release_snowflake_key_pair_auth_enabled: true,
        release_workflows_hitl_query_enabled: false,
        release_multi_env_view_mode_enabled: false,
        ab_gsheet_schema_enabled: true,
        ab_flip_primary_secondary_ctas_dsform_enabled: false,
        release_table_cell_label_value_enabled: true,
        ask_ai_js: false,
        license_connection_pool_size_enabled: false,
        release_show_new_sidebar_pages_pane_enabled: false,
        release_widgetdiscovery_enabled: true,
        release_git_server_autocommit_feature_enabled: false,
        ab_ai_js_function_completion_enabled: false,
        release_git_connect_v2_enabled: true,
        license_scim_enabled: false,
        ask_ai: false,
        license_audit_logs_enabled: false,
        release_dependency_caching_published_mode_enabled: false,
        release_segmented_package_explorer_enabled: true,
        release_server_dsl_migrations_enabled: true,
        release_module_reference_enabled: false,
        ab_mock_mongo_schema_enabled: true,
        ab_request_new_integration_enabled: true,
        release_git_autocommit_feature_enabled: true,
        ab_rts_git_reset_enabled: false,
        release_jit_package_pull_enabled: false,
        release_authentication_retry_enabled: false,
        ab_onboarding_flow_start_with_data_dev_only_enabled: false,
        release_dynamodb_connection_time_to_live_enabled: false,
        license_session_limit_enabled: false,
        release_table_html_column_type_enabled: true,
        rollout_app_sidebar_enabled: true,
        release_paid_features_tagging_enabled: false,
        ab_ai_button_sql_enabled: false,
        rollout_consolidated_page_load_fetch_enabled: true,
        release_git_status_lite_enabled: false,
        release_git_autocommit_eligibility_enabled: true,
        license_custom_environments_enabled: false,
        rollout_workflow_scheduler_enabled: false,
        release_ide_tabs_revamp_enabled: false,
        ab_test_flag: false,
        release_fn_calling_enabled: false,
        license_pac_enabled: false,
        ab_env_walkthrough_enabled: false,
        release_workflows_entity_explorer_update_enabled: true,
        release_knowledge_base_enabled: false,
        release_actions_redesign_enabled: true,
        release_google_sheets_shared_drive_support_enabled: false
      },
      isFetched: true,
      isFetching: false,
      overriddenFlags: {}
    },
    productAlert: {
      config: {
        dismissed: false,
        snoozeTill: '2025-08-26T05:58:03.835Z'
      }
    }
  },
  widgetDragResize: {
    isDragging: false,
    dragDetails: {},
    autoLayoutDragDetails: {},
    isResizing: false,
    lastSelectedWidget: '0',
    selectedWidgets: [],
    selectedWidgetAncestry: [],
    entityExplorerAncestry: [],
    isAutoCanvasResizing: false,
    anvil: {
      spaceDistribution: {
        isDistributingSpace: false,
        widgetsEffected: {
          section: '',
          zones: []
        }
      }
    },
    isDraggingDisabled: false,
    blockSelection: false,
    altFocus: false
  },
  imports: {
    isCurlModalOpen: false,
    isImportingCurl: false,
    errorPayload: {}
  },
  datasourcePane: {
    drafts: {},
    actionRouteInfo: {},
    expandDatasourceId: '',
    newDatasource: '',
    viewMode: true,
    collapsibleState: {},
    defaultKeyValueArrayConfig: [],
    responseTabHeight: 419.65,
    selectedTableName: ''
  },
  datasourceName: {
    isSaving: {},
    errors: {}
  },
  help: {
    url: '',
    modalOpen: false,
    defaultRefinement: ''
  },
  apiName: {
    isSaving: {},
    errors: {}
  },
  explorer: {
    pinnedState: 0,
    entity: {},
    width: 256,
    active: true,
    entityInfo: {
      show: false,
      entityId: ''
    }
  },
  pageCanvasStructure: {
    '68ad34afd8deff53ee072777': {
      widgetId: '0',
      widgetName: 'MainContainer',
      type: 'CANVAS_WIDGET',
      children: [
        {
          widgetId: '9e839onva6',
          widgetName: 'containerRoot',
          type: 'CONTAINER_WIDGET',
          children: [
            {
              widgetId: '0j3cs5153j',
              widgetName: 'containerPlayground',
              type: 'CONTAINER_WIDGET',
              children: [
                {
                  widgetId: '9nft85pms1',
                  widgetName: 'Input1',
                  type: 'INPUT_WIDGET_V2'
                },
                {
                  widgetId: 'kwdcw234sl',
                  widgetName: 'Text1',
                  type: 'TEXT_WIDGET'
                }
              ]
            },
            {
              widgetId: 'dgev9742e2',
              widgetName: 'containerActions',
              type: 'CONTAINER_WIDGET',
              children: [
                {
                  widgetId: 'tl8xbeqhua',
                  widgetName: 'btnCalculate',
                  type: 'BUTTON_WIDGET'
                },
                {
                  widgetId: 'od1swmzxxq',
                  widgetName: 'calculatedTxt',
                  type: 'TEXT_WIDGET'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  pageWidgets: {
    '68ad34afd8deff53ee072777': {
      dsl: {
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
      layoutId: '68ad34afd8deff53ee072776'
    }
  },
  theme: {
    mode: 'LIGHT',
    theme: {
      radii: [
        0,
        4,
        8,
        10,
        20,
        50
      ],
      fontSizes: [
        0,
        10,
        12,
        14,
        16,
        18,
        24,
        28,
        32,
        48,
        64
      ],
      spaces: [
        0,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        30,
        36,
        38,
        40,
        42,
        44
      ],
      fontWeights: [
        0,
        400,
        500,
        700
      ],
      typography: {
        h1: {
          fontSize: 20,
          lineHeight: 27,
          letterSpacing: -0.204,
          fontWeight: 500
        },
        h2: {
          fontSize: 18,
          lineHeight: 25,
          letterSpacing: -0.204,
          fontWeight: 500
        },
        h3: {
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.204,
          fontWeight: 500
        },
        h4: {
          fontSize: 16,
          lineHeight: 21,
          letterSpacing: -0.24,
          fontWeight: 500
        },
        h5: {
          fontSize: 14,
          lineHeight: 19,
          letterSpacing: -0.24,
          fontWeight: 500
        },
        h6: {
          fontSize: 12,
          lineHeight: 14,
          letterSpacing: 0.8,
          fontWeight: 500
        },
        p0: {
          fontSize: 16,
          lineHeight: 20,
          letterSpacing: -0.24,
          fontWeight: 500
        },
        p1: {
          fontSize: 14,
          lineHeight: 19,
          letterSpacing: -0.24,
          fontWeight: 'normal'
        },
        p2: {
          fontSize: 13,
          lineHeight: 17,
          letterSpacing: -0.24,
          fontWeight: 'normal'
        },
        p3: {
          fontSize: 12,
          lineHeight: 16,
          letterSpacing: -0.221538,
          fontWeight: 'normal'
        },
        p4: {
          fontSize: 13,
          lineHeight: 16,
          letterSpacing: -0.221538,
          fontWeight: 600
        },
        btnLarge: {
          fontSize: 13,
          lineHeight: 15,
          letterSpacing: 0.6,
          fontWeight: 600
        },
        btnMedium: {
          fontSize: 12,
          lineHeight: 14,
          letterSpacing: 0.6,
          fontWeight: 600
        },
        btnSmall: {
          fontSize: 11,
          lineHeight: 12,
          letterSpacing: 0.4,
          fontWeight: 600
        },
        floatingBtn: {
          fontSize: 14,
          lineHeight: 17,
          letterSpacing: -0.24,
          fontWeight: 'normal'
        },
        releaseList: {
          fontSize: 14,
          lineHeight: 23,
          letterSpacing: -0.24,
          fontWeight: 'normal'
        },
        cardHeader: {
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 25,
          lineHeight: 20
        },
        cardSubheader: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 15,
          lineHeight: 20
        },
        largeH1: {
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 28,
          lineHeight: 36
        },
        docHeader: {
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 17
        },
        spacedOutP1: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 24
        },
        categoryBtn: {
          fontSize: 12,
          lineHeight: 14,
          letterSpacing: 0.2,
          fontWeight: 500
        },
        sideHeading: {
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 13
        },
        u1: {
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 17
        },
        u2: {
          fontSize: 10,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 12
        },
        dangerHeading: {
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 24,
          lineHeight: 28,
          letterSpacing: -0.24
        }
      },
      iconSizes: {
        XXS: 8,
        XS: 10,
        SMALL: 12,
        MEDIUM: 14,
        LARGE: 15,
        XL: 16,
        XXL: 18,
        XXXL: 20,
        XXXXL: 22
      },
      propertyPane: {
        width: 270,
        titleHeight: 40,
        connectionsHeight: 30,
        height: 600,
        dividerColor: '#464D53'
      },
      evaluatedValuePopup: {
        width: 300,
        height: 500
      },
      drawerWidth: '80%',
      colors: {
        tooltip: {
          lightBg: '#FAFAFA',
          lightText: '#090707',
          darkBg: '#090707',
          darkText: '#FAFAFA'
        },
        appBackground: '#EDEDED',
        artboard: '#F8FAFC',
        primaryOld: '#03B365',
        primaryDarker: '#24BA91',
        primaryDarkest: '#30A481',
        secondary: '#E7E7E7',
        secondaryDarker: '#F3F3F3',
        secondaryDarkest: '#E8E8E8',
        error: '#E22C2C',
        infoOld: '#768896',
        errorMessage: '#E22C2C',
        hover: '#E9FAF3',
        inputActiveBorder: '#A1ACB3',
        inputInactiveBG: '#EEF2F5',
        textDefault: '#040627',
        textOnDarkBG: '#FFFFFF',
        textOnGreyBG: '#4B4848',
        textOnWhiteBG: '#090707',
        textAnchor: '#6871EF',
        border: '#D3DEE3',
        paneCard: '#21282C',
        paneInputBG: '#21282C',
        paneBG: '#363E44',
        paneText: '#A2A6A8',
        paneTextBG: '#272E32',
        paneTextUnderline: '#B0BFCB',
        paneSectionLabel: '#A3B3BF',
        navBG: '#21282C',
        grid: '#E0DEDE',
        containerBorder: '#BBE8FE',
        menuButtonBGInactive: '#BCCCD9',
        menuIconColorInactive: '#2E3D49',
        bodyBG: '#EBEFF2',
        builderBodyBG: '#FFFFFF',
        widgetMultiSelectBorder: '#7DBCFF',
        widgetBorder: '#768896',
        widgetLightBorder: '#F4F4F4',
        widgetSecondaryBorder: '#E8E8E8',
        messageBG: '#F3F3F3',
        paneIcon: '#4C565E',
        bindingTextDark: '#ffcc99',
        bindingText: '#063289',
        cmBacground: '#23292E',
        lightningborder: '#F9F8F8',
        formButtonColor: '#FFFFFF',
        appCardColors: [
          '#FFEFDB',
          '#D9E7FF',
          '#FFDEDE',
          '#E3DEFF',
          '#C7F3E3',
          '#F1DEFF',
          '#F4FFDE',
          '#C7F3F0',
          '#C2DAF0',
          '#F5D1D1',
          '#ECECEC',
          '#CCCCCC',
          '#F3F1C7',
          '#E4D8CC',
          '#EAEDFB',
          '#D6D1F2',
          '#FBF4ED',
          '#FFEBFB'
        ],
        dataTypeBg: {
          'function': '#BDB2FF',
          object: '#FFD6A5',
          unknown: '#4bb',
          array: '#CDFFA5',
          number: '#FFB2B2'
        },
        scrollbarLight: 'rgba(75,72,72,0.5)',
        scrollbarLightBG: 'rgba(255,255,255,0.5)',
        scrollbarDark: 'rgba(212,212,212,0.5)',
        scrollbarDarkBG: 'rgba(9,7,7,0.5)',
        dropdownIconBg: '#E0DEDE',
        welcomeTourStickySidebarColor: '#FFFFFF',
        welcomeTourStickySidebarBackground: '#F86A2B',
        dropdownIconDarkBg: '#A9A7A7',
        dropdownGreyBg: '#F0F0F0',
        editorBottomBar: {
          background: '#FFFFFF',
          buttonBackgroundHover: '#F0F0F0',
          branchBtnText: '#4B4848'
        },
        gitSyncModal: {
          menuBackgroundColor: '#FAFAFA',
          separator: '#E0DEDE',
          closeIcon: '#575757',
          closeIconHover: '#191919'
        },
        numberedStep: {
          line: '#E0DEDE',
          number: '#000000'
        },
        tabItemBackgroundFill: {
          highlightBackground: '#F0F0F0',
          highlightTextColor: '#191919',
          textColor: '#4B4848'
        },
        overlayColor: '#090707cc',
        displayImageUpload: {
          background: '#AEBAD9',
          label: '#457AE6'
        },
        showcaseCarousel: {
          activeStepDot: '#F86A2B',
          inactiveStepDot: '#FEEDE5'
        },
        mentionSuggestion: {
          nameText: '#090707',
          usernameText: '#716E6E',
          hover: '#EBEBEB'
        },
        reactionsComponent: {
          reactionBackground: '#F0F0F0',
          reactionBackgroundActive: '#FEEDE5',
          text: '#716E6E',
          textActive: '#BF4109',
          borderActive: '#BF4109'
        },
        toggleMode: {
          activeModeBackground: '#EBEBEB',
          activeModeIcon: '#4B4848',
          modeIcon: '#858282',
          modeIconCircleStroke: '#fff',
          activeModeIconCircleStroke: '#EBEBEB',
          unreadIndicator: '#E00D0D'
        },
        helpModal: {
          itemHighlight: '#EBEBEB',
          background: '#FFFFFF'
        },
        globalSearch: {
          containerBackground: 'linear-gradient(0deg, rgba(43, 43, 43, 0.9), rgba(43, 43, 43, 0.9)), linear-gradient(119.61deg, rgba(35, 35, 35, 0.01) 0.43%, rgba(49, 49, 49, 0.01) 100.67%);',
          activeSearchItemBackground: '#EBEBEB',
          activeCategory: '#090707',
          searchInputText: '#090707',
          searchInputBorder: '#F86A2B',
          containerShadow: '0px 0px 32px 8px rgba(0, 0, 0, 0.25)',
          separator: '#424242',
          searchItemHighlight: '#fff',
          searchItemAltText: '#fff',
          searchItemText: '#090707',
          searchItemSubText: '#4B4848;',
          highlightedTextUnderline: '#03B365',
          helpBarText: '#B3B3B3',
          documentationCtaBackground: 'rgba(3, 179, 101, 0.1)',
          documentationCtaText: '#03B365',
          emptyStateText: '#A9A7A7',
          navigateUsingEnterSection: 'white',
          codeBackground: '#ffffff',
          documentationCodeBackground: '#f0f0f0',
          documentLink: '#F86A2B',
          helpBarBackground: '#F0F0F0',
          helpButtonBackground: '#F0F0F0',
          helpIcon: '#575757',
          sectionTitle: '#716E6E',
          navigateToEntityEnterkey: '#090707',
          primaryBgColor: '#ffffff',
          primaryTextColor: '#090707',
          secondaryTextColor: '#4b4848',
          primaryBorderColor: '#E0DEDE',
          defaultIconsColor: '#716e6e',
          snippets: {
            refinementPillsColor: '#4b4848',
            refinementPillsBg: 'white',
            filterListBackground: '#FAFAFA',
            filterBtnText: '#4B4848',
            filterBtnBg: '#FAFAFA',
            codeContainerBorder: '#E0DEDE'
          }
        },
        navigationMenu: {
          contentActive: '#090707',
          backgroundActive: '#EBEBEB',
          contentInactive: '#4B4848',
          backgroundInactive: '#FFFFFF',
          label: '#A9A7A7',
          warning: '#F22B2B',
          warningBackground: '#FFFFFF'
        },
        selected: '#6A86CE',
        header: {
          separator: '#E0DEDE',
          appName: '#4B4848',
          background: '#FFFFFF',
          deployToolTipText: '#4B4848',
          deployToolTipBackground: '#FFF',
          shareBtnHighlight: '#F86A2B',
          shareBtn: '#4B4848',
          tabsHorizontalSeparator: '#EFEFEF',
          tabText: '#6F6D6D',
          activeTabBorderBottom: '#FF6D2D',
          activeTabText: '#000'
        },
        button: {
          disabledText: '#858282',
          boxShadow: {
            'default': {
              variant1: 'rgba(0, 0, 0, 0.25)',
              variant2: 'rgba(0, 0, 0, 0.25)',
              variant3: 'rgba(0, 0, 0, 0.5)',
              variant4: 'rgba(0, 0, 0, 0.25)',
              variant5: 'rgba(0, 0, 0, 0.25)'
            }
          },
          disabled: {
            bgColor: '#FAFAFA',
            textColor: '#716E6E'
          },
          primary: {
            primary: {
              bgColor: '#03B365',
              hoverColor: '#00693B',
              textColor: '#FFFFFF'
            },
            secondary: {
              borderColor: '#03B365',
              hoverColor: '#D9FDED',
              textColor: '#03B365'
            },
            tertiary: {
              hoverColor: '#CBF4E2'
            }
          },
          warning: {
            primary: {
              bgColor: '#FEB811',
              hoverColor: '#EFA903',
              textColor: '#FFFFFF'
            },
            secondary: {
              borderColor: '#FEB811',
              hoverColor: '#FFFAE9',
              textColor: '#FEB811'
            },
            tertiary: {
              hoverColor: '#FBEED0'
            }
          },
          danger: {
            primary: {
              bgColor: '#F22B2B',
              hoverColor: '#B90707',
              textColor: '#FFFFFF'
            },
            secondary: {
              borderColor: '#F22B2B',
              hoverColor: '#FDE4E4',
              textColor: '#F22B2B'
            },
            tertiary: {
              hoverColor: '#FDE4E4'
            }
          },
          info: {
            primary: {
              bgColor: '#6698FF',
              hoverColor: '#1A65FF',
              textColor: '#FFFFFF'
            },
            secondary: {
              borderColor: '#6698FF',
              hoverColor: '#CEDCFF',
              textColor: '#6698FF'
            },
            tertiary: {
              hoverColor: '#CEDCFF'
            }
          },
          secondary: {
            primary: {
              bgColor: '#858282',
              hoverColor: '#4B4848',
              textColor: '#FFFFFF'
            },
            secondary: {
              borderColor: '#858282',
              hoverColor: '#F0F0F0',
              textColor: '#858282'
            },
            tertiary: {
              hoverColor: '#E8E8E8'
            }
          },
          custom: {
            solid: {
              dark: {
                textColor: '#333'
              },
              light: {
                textColor: '#FFFFFF'
              }
            }
          },
          link: {
            main: '#716E6E',
            hover: '#090707',
            active: '#4B4848',
            disabled: '#858282'
          }
        },
        tertiary: {
          main: '#606065',
          light: '#090707',
          dark: '#FAFAFA',
          darker: '#EDEDED',
          darkest: '#A9A7A7'
        },
        info: {
          main: '#F86A2B',
          light: '#DC5B21',
          dark: '#BF4109',
          darker: '#FEEDE5',
          darkest: '#F7EBE6'
        },
        success: {
          main: '#03B365',
          light: '#007340',
          dark: '#00693B',
          darker: '#CBF4E2',
          darkest: '#D9FDED'
        },
        warning: {
          main: '#FEB811',
          light: '#EFA903',
          dark: '#EFA903',
          darker: '#FBEED0',
          darkest: '#FFFAE9'
        },
        danger: {
          main: '#F22B2B',
          light: '#B90707',
          dark: '#C60707',
          darker: '#FDE4E4',
          darkest: '#FFE9E9'
        },
        homepageBackground: '#ffffff',
        card: {
          hoverBG: '#FFFFFF',
          hoverBGOpacity: 0.7,
          hoverBorder: '#F0F0F0',
          iconColor: '#FFFFFF'
        },
        text: {
          normal: '#4B4848',
          heading: '#302D2D',
          highlight: '#FFFFFF'
        },
        icon: {
          normal: '#C5C5C5',
          hover: '#4B4848',
          active: '#302D2D'
        },
        appIcon: {
          normal: '#716E6E',
          background: '#F7F7F7'
        },
        menu: {
          background: '#FFFFFF',
          shadow: 'rgba(0, 0, 0, 0.32)'
        },
        menuItem: {
          normalText: '#4B4848',
          normalIcon: '#939090',
          hoverIcon: '#4B4848',
          hoverText: '#090707',
          hoverBg: '#F0F0F0',
          warning: {
            color: '#D2A500',
            bg: '#FDFAF2'
          }
        },
        colorSelector: {
          shadow: '#E8E8E8',
          checkmark: '#000000'
        },
        checkbox: {
          disabled: '#E8E8E8',
          unchecked: '#A9A7A7',
          disabledCheck: '#939090',
          normalCheck: '#FFFFFF',
          labelColor: '#302D2D'
        },
        dropdown: {
          header: {
            text: '#4B4848',
            disabledText: '#9F9F9F',
            defaultBg: '#FFFFFF',
            bg: '#EBEBEB',
            disabledBg: '#F7F7F7'
          },
          menu: {
            border: '#E0DEDE',
            bg: '#FFFFFF',
            text: '#4B4848',
            hover: '#E7E7E7',
            hoverText: '#090707',
            subText: '#858282'
          },
          menuShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)',
          selected: {
            text: '#090707',
            bg: '#EBEBEB',
            icon: '#858282',
            subtext: '#716E6E'
          },
          hovered: {
            text: '#090707',
            bg: '#EBEBEB',
            icon: '#FFFFFF'
          },
          icon: '#716E6E'
        },
        toggle: {
          bg: '#E0DEDE',
          hover: {
            on: '#BF4109',
            off: '#A9A7A7'
          },
          disable: {
            on: '#FEEDE5',
            off: '#E0DEDE'
          },
          disabledSlider: {
            off: '#FFFFFF',
            on: '#FFFFFF'
          },
          spinner: '#A9A7A7',
          spinnerBg: '#E8E8E8'
        },
        textInput: {
          disable: {
            bg: '#F0F0F0',
            text: '#6D6D6D',
            border: '#F0F0F0'
          },
          normal: {
            bg: '#FFFFFF',
            text: '#090707',
            border: '#E0DEDE'
          },
          placeholder: '#A9A7A7',
          helper: '#858282',
          icon: '#716E6E',
          readOnly: {
            bg: '#F0F0F0',
            border: '#F0F0F0',
            text: '#716E6E'
          },
          hover: {
            bg: '#FAFAFA'
          },
          caretColor: '#000000'
        },
        menuBorder: '#E8E8E8',
        editableText: {
          color: '#4B4848',
          bg: '#F0F0F0',
          dangerBg: 'rgba(242, 43, 43, 0.06)'
        },
        radio: {
          disable: '#C5C5C5',
          border: '#E8E8E8',
          text: '#090707'
        },
        searchInput: {
          placeholder: '#939090',
          text: '#090707',
          border: '#E0DEDE',
          bg: '#FFFFFF',
          icon: {
            focused: '#090707',
            normal: '#716E6E'
          }
        },
        spinner: '#939090',
        tableDropdown: {
          bg: '#FFFFFF',
          selectedBg: '#F0F0F0',
          selectedText: '#302D2D',
          shadow: 'rgba(0, 0, 0, 0.32)'
        },
        tabs: {
          normal: '#858282',
          icon: '#090707',
          hover: '#4B4848',
          border: '#E8E8E8',
          countBg: '#E8E8E8',
          selected: '#F86A2B'
        },
        settingHeading: '#000000',
        table: {
          headerBg: '#F7F7F7',
          headerText: '#939090',
          rowData: '#716E6E',
          rowTitle: '#302D2D',
          border: '#E8E8E8',
          hover: {
            headerColor: '#302D2D',
            rowBg: '#F0F0F0',
            rowTitle: '#090707',
            rowData: '#302D2D'
          }
        },
        applications: {
          bg: '#E8E8E8',
          textColor: '#716E6E',
          workspaceColor: '#716E6E',
          iconColor: '#716E6E',
          hover: {
            bg: '#A9A7A7',
            textColor: '#4B4848',
            workspaceColor: '#302D2D'
          },
          cardMenuIcon: '#F86A2B'
        },
        'switch': {
          border: '#A9A7A7',
          bg: '#FFFFFF',
          hover: {
            bg: '#FFFFFF'
          },
          lightText: '#FFFFFF',
          darkText: '#939090'
        },
        queryTemplate: {
          bg: '#FFFFFF',
          color: '#4B4848'
        },
        profileDropdown: {
          name: '#090707',
          userName: '#716E6E'
        },
        modal: {
          bg: '#FFFFFF',
          headerText: '#191919',
          iconColor: '#A9A7A7',
          iconBg: '#FFDEDE',
          user: {
            textColor: '#302D2D'
          },
          email: {
            message: '#302D2D',
            desc: '#716E6E'
          },
          manageUser: '#575757',
          scrollbar: '#A9A7A7',
          separator: '#C5C5C5',
          title: '#4B4848',
          link: '#F86A2B',
          hoverState: '#E8E8E8'
        },
        tagInput: {
          bg: '#FFFFFF',
          tag: {
            text: '#FFFFFF'
          },
          text: '#302D2D',
          placeholder: '#D4D4D4',
          shadow: 'none'
        },
        callout: {
          info: {
            color: '#D44100',
            bgColor: '#F8F3F0'
          },
          success: {
            color: '#03B365',
            bgColor: '#E4F4ED'
          },
          danger: {
            color: '#F22B2B',
            bgColor: '#F9E9E9'
          },
          warning: {
            color: '#FEB811',
            bgColor: '#FAF3E3'
          }
        },
        loader: {
          light: '#F0F0F0',
          dark: '#C5C5C5'
        },
        filePicker: {
          bg: '#F0F0F0',
          color: '#716E6E',
          progress: '#939090',
          shadow: {
            from: 'rgba(253, 253, 253, 0.0001)',
            to: 'rgba(250, 250, 250, 0.898847)'
          }
        },
        formFooter: {
          cancelBtn: '#302D2D'
        },
        toast: {
          undo: '#F86A2B',
          undoRedoColor: '#F8682B',
          warningColor: '#DCAD00',
          dangerColor: '#F22B2B',
          textColor: '#F7F7F7',
          bg: '#090707'
        },
        multiSwitch: {
          bg: '#E8E8E8',
          selectedBg: '#FFFFFF',
          text: '#4B4848',
          border: '#E0DEDE'
        },
        apiPane: {
          bg: '#FFFFFF',
          tabBg: '#FFFFFF',
          text: '#000000',
          keyValueText: '#4B4848',
          dividerBg: '#E8E8E8',
          iconHoverBg: '#F7F7F7',
          requestTree: {
            bg: '#FFFFFF',
            header: {
              text: '#4B4848',
              icon: '#4B4848',
              bg: '#F0F0F0'
            },
            row: {
              hoverBg: '#F0F0F0',
              key: '#716E6E',
              value: '#4B4848'
            }
          },
          closeIcon: '#090707',
          responseBody: {
            bg: '#FFFFFF'
          },
          codeEditor: {
            placeholderColor: '#858282'
          },
          body: {
            text: '#A9A7A7'
          },
          settings: {
            textColor: '#090707'
          },
          pagination: {
            label: '#4B4848',
            description: '#A9A7A7',
            stepTitle: '#090707',
            numberBg: '#E0DEDE',
            bindingBg: '#E8E8E8',
            numberColor: '#090707'
          }
        },
        codeMirror: {
          background: {
            defaultState: '#FAFAFA',
            hoverState: '#E7E7E7'
          },
          text: '#090707',
          dataType: {
            shortForm: '#858282',
            fullForm: '#6D6D6D'
          }
        },
        floatingBtn: {
          tagBackground: '#e22c2c',
          backgroundColor: '#FAFAFA',
          iconColor: '#716E6E',
          borderColor: '#EBEBEB'
        },
        auth: {
          background: '#FFFFFF',
          cardBackground: '#FAFAFA',
          btnPrimary: '#F86A2B',
          inputBackground: '#FFFFFF',
          headingText: '#090707',
          link: '#F86A2B',
          text: '#000',
          placeholder: '#4B4848',
          socialBtnText: '#000',
          socialBtnBorder: '#E0DEDE',
          socialBtnHighlight: '#F0F0F0'
        },
        formMessage: {
          background: {
            danger: 'rgba(226,44,44,0.08)',
            success: '#172320',
            warning: 'rgba(224, 179, 14, 0.08)',
            lightSuccess: '#EFFFF4'
          },
          text: {
            danger: '#E22C2C',
            success: '#03B365',
            warning: '#E0B30E',
            lightSuccess: '#00693B'
          }
        },
        gif: {
          overlay: '#ffffff',
          text: '#6f6f6f',
          iconPath: '#c4c4c4',
          iconCircle: '#090707'
        },
        treeDropdown: {
          targetBg: '#FFFFFF',
          targetIcon: {
            normal: '#939090',
            hover: '#4B4848'
          },
          menuShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)',
          menuBg: {
            normal: '#FAFAFA',
            hover: '#6A86CE',
            selected: '#E8E8E8'
          },
          menuText: {
            normal: '#4B4848',
            hover: '#FAFAFA',
            selected: '#4B4848'
          }
        },
        propertyPane: {
          title: '#090707',
          bg: '#F0F0F0',
          label: '#4B4848',
          jsIconBg: '#A9A7A7',
          buttonBg: '#4B4848',
          buttonText: '#FFFFFF',
          radioGroupBg: '#FAFAFA',
          radioGroupText: '#4B4848',
          deleteIconColor: '#A3B3BF',
          zoomButtonBG: '#E0DEDE',
          activeButtonText: '#6A86CE',
          jsButtonHoverBG: '#F0F0F0',
          dropdownSelectBg: '#EBEBEB',
          multiDropdownBoxHoverBg: '#FFFFFF',
          iconColor: '#A9A7A7',
          ctaTextColor: '#202223',
          ctaBackgroundColor: 'rgb(248, 106, 43, 0.1)',
          ctaLearnMoreTextColor: '#f86a2b',
          connections: {
            error: '#f22b2b',
            connectionsCount: '#090707',
            optionBg: 'rgba(246,71,71, 0.2)'
          }
        },
        scrollbar: 'rgba(75,72,72,0.5)',
        scrollbarBG: 'transparent',
        'debugger': {
          background: '#FFFFFF',
          messageTextColor: '#716e6e',
          label: '#575757',
          entity: 'rgba(75, 72, 72, 0.7)',
          entityLink: '#575757',
          jsonIcon: '#a9a7a7',
          message: '#4b4848',
          collapseIcon: '#191919',
          evalDebugButton: {
            hover: '#fafafaaa',
            active: '#fafafaff'
          },
          floatingButton: {
            background: '#2b2b2b',
            color: '#d4d4d4',
            shadow: '0px 12px 28px -6px rgba(0, 0, 0, 0.32)',
            errorCount: '#F22B2B',
            noErrorCount: '#03B365',
            warningCount: '#DCAD00'
          },
          inspectElement: {
            color: '#090707'
          },
          blankState: {
            color: '#090707',
            shortcut: 'black'
          },
          info: {
            time: '#939393',
            borderBottom: '#E8E8E8'
          },
          warning: {
            time: '#939393',
            iconColor: '#f3cc3e',
            hoverIconColor: '#e0b30e',
            borderBottom: '#E8E8E8',
            backgroundColor: '#FFF8E2'
          },
          error: {
            time: '#939393',
            type: '#393939',
            iconColor: '#f56060',
            hoverIconColor: '#F22B2B',
            borderBottom: '#E8E8E8',
            backgroundColor: '#F9E9E9'
          }
        },
        guidedTour: {
          runButton: '#f86a2b',
          cancelButton: {
            color: '#716e6e',
            borderColor: '#716e6e',
            hoverBackgroundColor: '#f1f1f1'
          },
          endButton: {
            backgroundColor: '#f22b2b',
            borderColor: '#f22b2b',
            hoverBackgroundColor: '#f34040'
          },
          endTourButton: {
            color: '#4b4848',
            hoverColor: '#928f8f'
          },
          card: {
            borderBottom: '#eeeeee',
            background: '#ffefdb'
          },
          stepCountBackground: '#090707'
        },
        widgetGroupingContextMenu: {
          border: '#69b5ff',
          actionActiveBg: '#e1e1e1'
        },
        actionSidePane: {
          noConnections: '#f0f0f0',
          noConnectionsText: '#e0dede',
          connectionBorder: 'rgba(0, 0, 0, 0.5)',
          connectionHover: '#6a86ce',
          collapsibleIcon: '#090707'
        },
        link: '#f86a2b',
        welcomePage: {
          text: '#A9A7A7'
        },
        settings: {
          link: '#716E6E'
        }
      },
      lineHeights: [
        0,
        14,
        16,
        18,
        22,
        24,
        28,
        36,
        48,
        64,
        80
      ],
      fonts: {
        text: 'var(--ads-v2-font-family)',
        code: 'ui-monospace, Menlo, Monaco, "Cascadia Code", "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", Consolas, "Courier New", monospace'
      },
      borders: [
        {
          thickness: 1,
          style: 'dashed',
          color: '#BBE8FE'
        },
        {
          thickness: 2,
          style: 'solid',
          color: '#BBE8FE'
        },
        {
          thickness: 1,
          style: 'solid',
          color: '#E7E7E7'
        },
        {
          thickness: 1,
          style: 'solid',
          color: '#BBE8FE'
        },
        {
          thickness: 3,
          style: 'solid',
          color: '#E1E8ED'
        }
      ],
      sidebarWidth: '256px',
      homePage: {
        header: 48,
        leftPane: {
          width: 256,
          leftPadding: 16,
          rightMargin: 12
        },
        main: {
          marginLeft: 112
        },
        search: {
          height: 81,
          paddingTop: 30
        },
        sidebar: 256
      },
      headerHeight: '48px',
      smallHeaderHeight: '40px',
      bottomBarHeight: '37px',
      pageTabsHeight: '32px',
      integrationsPageUnusableHeight: '182px',
      backBanner: '30px',
      canvasBottomPadding: 200,
      navbarMenuHeight: '35px',
      navbarMenuLineHeight: '25px',
      sideNav: {
        maxWidth: 220,
        minWidth: 50,
        bgColor: '#2E3D49',
        fontColor: '#FFFFFF',
        activeItemBGColor: '#21282C',
        navItemHeight: 42
      },
      card: {
        minWidth: 228,
        minHeight: 124,
        titleHeight: 48,
        divider: {
          thickness: 1,
          style: 'solid',
          color: '#E7E7E7'
        }
      },
      dropdown: {
        '0': {
          hoverBG: '#F0F0F0',
          hoverText: '#090707',
          inActiveBG: '#F0F0F0',
          inActiveText: '#090707',
          border: '#FFFFFF',
          background: '#FFFFFF'
        },
        '1': {
          hoverBG: '#1A191C',
          hoverText: '#FFFFFF',
          inActiveBG: '#262626',
          inActiveText: '#D4D4D4',
          border: '#535B62',
          background: '#404040'
        }
      },
      authCard: {
        width: 440,
        dividerSpacing: 32,
        formMessageWidth: 370
      },
      shadows: [
        'inset -1px 0px 0px #EBEFF2, inset 1px 0px 0px #EBEFF2, inset 0px 4px 0px #03B365',
        'inset -1px 0px 0px #EBEFF2, inset 0px 0px 0px #EBEFF2, inset 0px 4px 0px #03B365',
        '0 1px 1px 0 rgba(60,75,100,.14) ,0 2px 1px -1px rgba(60,75,100,.12), 0 1px 3px 0 rgba(60,75,100,.2)'
      ],
      widgets: {
        tableWidget: {
          selectHighlightColor: '#E7E7E7'
        }
      },
      pageContentWidth: 1224,
      tabPanelHeight: 34,
      alert: {
        info: {
          color: '#0384FE'
        },
        success: {
          color: '#36AB80'
        },
        error: {
          color: '#E22C2C'
        },
        warning: {
          color: '#F7AF22'
        }
      },
      lightningMenu: {
        '0': {
          'default': {
            color: '#716E6E',
            background: 'transparent'
          },
          active: {
            color: '#FFFFFF',
            background: '#F86A2B'
          },
          hover: {
            color: '#FFFFFF',
            background: '#716E6E'
          },
          none: {
            color: 'transparent',
            background: 'transparent'
          }
        },
        '1': {
          'default': {
            color: '#D4D4D4',
            background: 'transparent'
          },
          active: {
            color: '#FFFFFF',
            background: '#CB4810'
          },
          hover: {
            color: '#FFFFFF',
            background: '#D4D4D4'
          },
          none: {
            color: 'transparent',
            background: 'transparent'
          }
        }
      },
      actionSidePane: {
        width: 280
      },
      onboarding: {
        statusBarHeight: 92
      },
      settings: {
        footerHeight: 84,
        footerShadow: '0px 0px 18px -6px rgb(0, 0, 0, 0.25)',
        linkBg: '#F0F0F0'
      }
    },
    hideHeaderShadow: false,
    showHeaderSeparator: false
  },
  modalAction: {
    modals: []
  },
  onBoarding: {
    inOnboardingWidgetSelection: false,
    forceOpenWidgetPanel: false,
    firstTimeUserOnboardingApplicationIds: [],
    firstTimeUserOnboardingComplete: false,
    showFirstTimeUserOnboardingModal: false,
    setOverlay: false,
    stepState: [],
    showSignpostingTooltip: false,
    showAnonymousDataPopup: false
  },
  globalSearch: {
    query: '',
    modalOpen: false,
    recentEntities: [
      {
        type: 'CANVAS',
        id: '',
        pageId: '68ad34afd8deff53ee072777'
      },
      {
        type: 'WIDGET',
        id: 'tl8xbeqhua',
        pageId: '68ad34afd8deff53ee072777'
      },
      {
        type: 'WIDGET',
        id: 'od1swmzxxq',
        pageId: '68ad34afd8deff53ee072777'
      },
      {
        type: 'JS_OBJECT',
        id: '68ad40c7d8deff53ee07277d',
        pageId: '68ad34afd8deff53ee072777'
      },
      {
        type: 'DATASOURCE',
        id: '68a9b8c0de8cf11f80e4a8b3',
        pageId: '68ad34afd8deff53ee072777'
      },
      {
        type: 'WIDGET',
        id: 'kwdcw234sl',
        pageId: '68ad34afd8deff53ee072777'
      }
    ],
    recentEntitiesRestored: true,
    filterContext: {
      category: {
        id: 'INIT'
      }
    }
  },
  releases: {
    newReleasesCount: '',
    releaseItems: []
  },
  'debugger': {
    logs: [
      {
        text: 'Datasource structure retrieved',
        source: {
          id: '68a9b823de8cf11f80e4a8a8',
          name: 'movies',
          type: 'DATASOURCE'
        },
        severity: 'info',
        timestamp: '1756187885502',
        category: 'PLATFORM_GENERATED',
        occurrenceCount: 1,
        isExpanded: false
      },
      {
        text: 'Datasource structure retrieved',
        source: {
          id: '68a9b831de8cf11f80e4a8ad',
          name: 'users',
          type: 'DATASOURCE'
        },
        severity: 'info',
        timestamp: '1756187887839',
        category: 'PLATFORM_GENERATED',
        occurrenceCount: 1,
        isExpanded: false
      },
      {
        text: 'Datasource structure retrieved',
        source: {
          id: '68a9b8c0de8cf11f80e4a8b3',
          name: 'Sample Database',
          type: 'DATASOURCE'
        },
        severity: 'info',
        timestamp: '1756187888107',
        category: 'PLATFORM_GENERATED',
        occurrenceCount: 1,
        isExpanded: false
      }
    ],
    isOpen: false,
    errors: {},
    expandId: '',
    hideErrors: false,
    context: {
      scrollPosition: 0,
      selectedDebuggerTab: '',
      responseTabHeight: 419.65,
      errorCount: 0,
      selectedDebuggerFilter: ''
    },
    stateInspector: {}
  },
  tour: {
    isTourInProgress: false,
    activeTourIndex: -1
  },
  jsPane: {
    isCreating: false,
    isSaving: {},
    isDeleting: {},
    isDirty: {},
    isSchemaGenerating: {},
    selectedConfigTab: 'CODE',
    'debugger': {
      open: false,
      responseTabHeight: 419.65
    },
    isFetching: false
  },
  jsObjectName: {
    isSaving: {},
    errors: {}
  },
  canvasSelection: {
    isDraggingForSelection: false,
    widgetId: '',
    recentlyAddedWidget: {}
  },
  gitSync: {
    isGitSyncModalOpen: false,
    isCommitting: false,
    isCommitSuccessful: false,
    activeGitSyncModalTab: 'GIT_CONNECTION',
    isErrorPopupVisible: false,
    isFetchingGitStatus: false,
    isFetchingMergeStatus: false,
    globalGitConfig: {
      authorEmail: '',
      authorName: ''
    },
    branches: [],
    fetchingBranches: false,
    localGitConfig: {
      authorEmail: '',
      authorName: ''
    },
    showBranchPopup: false,
    isDiscarding: false,
    isFetchingLocalGitConfig: false,
    isFetchingGlobalGitConfig: false,
    isMerging: false,
    tempRemoteUrl: '',
    showRepoLimitErrorModal: false,
    isDisconnectGitModalOpen: false,
    disconnectingGitApp: {
      id: '',
      name: ''
    },
    isSwitchingBranch: false,
    switchingToBranch: null,
    isDeploying: false,
    protectedBranchesLoading: false,
    protectedBranches: [],
    isUpdateProtectedBranchesLoading: false,
    isAutocommitModalOpen: false,
    togglingAutocommit: false,
    triggeringAutocommit: false,
    pollingAutocommitStatus: false,
    gitMetadata: null,
    gitMetadataLoading: false,
    isGitSettingsModalOpen: false,
    activeGitSettingsModalTab: 'GENERAL'
  },
  crudInfoModal: {
    crudInfoModalOpen: false,
    generateCRUDSuccessInfo: null
  },
  widgetReflow: {
    isReflowing: false,
    reflowingWidgets: {}
  },
  appTheming: {
    stack: [],
    themes: [
      {
        id: '68a9b7e9de8cf11f80e4a888',
        userPermissions: [
          'read:themes'
        ],
        name: 'Default-New',
        displayName: 'Modern',
        config: {
          order: 1,
          colors: {
            primaryColor: '#553DE9',
            backgroundColor: '#F8FAFC'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#553DE9',
            backgroundColor: '#F8FAFC'
          },
          borderRadius: {
            appBorderRadius: '0.375rem'
          },
          boxShadow: {
            appBoxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          },
          fontFamily: {
            appFont: 'System Default'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a889',
        userPermissions: [
          'read:themes'
        ],
        name: 'Classic',
        displayName: 'Classic',
        config: {
          order: 2,
          colors: {
            primaryColor: '#16a34a',
            backgroundColor: '#F6F6F6'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#16a34a',
            backgroundColor: '#F6F6F6'
          },
          borderRadius: {
            appBorderRadius: '0px'
          },
          boxShadow: {
            appBoxShadow: 'none'
          },
          fontFamily: {
            appFont: 'System Default'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a88a',
        userPermissions: [
          'read:themes'
        ],
        name: 'Sunrise',
        displayName: 'Sunrise',
        config: {
          order: 3,
          colors: {
            primaryColor: '#ef4444',
            backgroundColor: '#fff1f2'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#ef4444',
            backgroundColor: '#fff1f2'
          },
          borderRadius: {
            appBorderRadius: '1.5rem'
          },
          boxShadow: {
            appBoxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          fontFamily: {
            appFont: 'Rubik'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a88b',
        userPermissions: [
          'read:themes'
        ],
        name: 'Rounded',
        displayName: 'Water Lily',
        config: {
          order: 4,
          colors: {
            primaryColor: '#db2777',
            backgroundColor: '#fdf2f8'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#db2777',
            backgroundColor: '#fdf2f8'
          },
          borderRadius: {
            appBorderRadius: '1.5rem'
          },
          boxShadow: {
            appBoxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          fontFamily: {
            appFont: 'Rubik'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a88c',
        userPermissions: [
          'read:themes'
        ],
        name: 'Pacific',
        displayName: 'Pacific',
        config: {
          order: 5,
          colors: {
            primaryColor: '#0891b2',
            backgroundColor: '#ecfeff'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#0891b2',
            backgroundColor: '#ecfeff'
          },
          borderRadius: {
            appBorderRadius: '1.5rem'
          },
          boxShadow: {
            appBoxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          fontFamily: {
            appFont: 'Open Sans'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a88d',
        userPermissions: [
          'read:themes'
        ],
        name: 'Earth',
        displayName: 'Earth',
        config: {
          order: 6,
          colors: {
            primaryColor: '#3b82f6',
            backgroundColor: '#eff6ff'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#3b82f6',
            backgroundColor: '#eff6ff'
          },
          borderRadius: {
            appBorderRadius: '0.375rem'
          },
          boxShadow: {
            appBoxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          fontFamily: {
            appFont: 'Inter'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a88e',
        userPermissions: [
          'read:themes'
        ],
        name: 'Pampas',
        displayName: 'Pampas',
        config: {
          order: 7,
          colors: {
            primaryColor: '#059669',
            backgroundColor: '#ecfdf5'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#059669',
            backgroundColor: '#ecfdf5'
          },
          borderRadius: {
            appBorderRadius: '0.375rem'
          },
          boxShadow: {
            appBoxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          fontFamily: {
            appFont: 'Nunito Sans'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a88f',
        userPermissions: [
          'read:themes'
        ],
        name: 'Sharp',
        displayName: 'Moon',
        config: {
          order: 8,
          colors: {
            primaryColor: '#64748b',
            backgroundColor: '#f8fafc'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#64748b',
            backgroundColor: '#f8fafc'
          },
          borderRadius: {
            appBorderRadius: '0px'
          },
          boxShadow: {
            appBoxShadow: 'none'
          },
          fontFamily: {
            appFont: 'Nunito Sans'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      },
      {
        id: '68a9b7e9de8cf11f80e4a890',
        userPermissions: [
          'read:themes'
        ],
        name: 'Default',
        displayName: 'Modern',
        config: {
          order: 9,
          isDeprecated: true,
          colors: {
            primaryColor: '#553DE9',
            backgroundColor: '#F8FAFC'
          },
          borderRadius: {
            appBorderRadius: {
              none: '0px',
              M: '0.375rem',
              L: '1.5rem'
            }
          },
          boxShadow: {
            appBoxShadow: {
              none: 'none',
              S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          },
          fontFamily: {
            appFont: [
              'System Default',
              'Nunito Sans',
              'Poppins',
              'Inter',
              'Montserrat',
              'Noto Sans',
              'Open Sans',
              'Roboto',
              'Rubik',
              'Ubuntu'
            ]
          }
        },
        properties: {
          colors: {
            primaryColor: '#553DE9',
            backgroundColor: '#F8FAFC'
          },
          borderRadius: {
            appBorderRadius: '0.375rem'
          },
          boxShadow: {
            appBoxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          },
          fontFamily: {
            appFont: 'Nunito Sans'
          }
        },
        stylesheet: {
          AUDIO_RECORDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          BUTTON_GROUP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}'
              }
            }
          },
          CAMERA_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          CHECKBOX_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CHECKBOX_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CONTAINER_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          CIRCULAR_PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CURRENCY_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PHONE_INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DATE_PICKER_WIDGET2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FILE_PICKER_WIDGET_V2: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          FORM_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          ICON_BUTTON_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          IFRAME_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          IMAGE_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          INPUT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          JSON_FORM_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            submitButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            resetButtonStyles: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            childStylesheet: {
              ARRAY: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              OBJECT: {
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none',
                cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                cellBoxShadow: 'none'
              },
              CHECKBOX: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              },
              CURRENCY_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              DATEPICKER: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              EMAIL_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTISELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              MULTILINE_TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PASSWORD_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              PHONE_NUMBER_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              RADIO_GROUP: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              SELECT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              SWITCH: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                boxShadow: 'none'
              },
              TEXT_INPUT: {
                accentColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          LIST_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          MAP_CHART_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
          },
          MENU_BUTTON_WIDGET: {
            menuColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MODAL_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          MULTI_SELECT_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          DROP_DOWN_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          PROGRESSBAR_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          PROGRESS_WIDGET: {
            fillColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          CODE_SCANNER_WIDGET: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          RATE_WIDGET: {
            activeColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RADIO_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          RICH_TEXT_EDITOR_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          STATBOX_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SWITCH_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            boxShadow: 'none'
          },
          SWITCH_GROUP_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          SELECT_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          TABLE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              }
            }
          },
          TABLE_WIDGET_V2: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
            childStylesheet: {
              button: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              menuButton: {
                menuColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              iconButton: {
                buttonColor: '{{appsmith.theme.colors.primaryColor}}',
                borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                boxShadow: 'none'
              },
              editActions: {
                saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
                discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
                discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
              }
            }
          },
          TABS_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          TEXT_WIDGET: {
            truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
            fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
          },
          VIDEO_WIDGET: {
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
          },
          SINGLE_SELECT_TREE_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          CATEGORY_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          NUMBER_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          },
          RANGE_SLIDER_WIDGET: {
            accentColor: '{{appsmith.theme.colors.primaryColor}}'
          }
        },
        isSystemTheme: true
      }
    ],
    isSaving: false,
    isChanging: false,
    themesLoading: false,
    isBetaCardShown: null,
    selectedThemeLoading: false,
    selectedTheme: {
      id: '68a9b7e9de8cf11f80e4a888',
      userPermissions: [
        'read:themes'
      ],
      name: 'Default-New',
      displayName: 'Modern',
      config: {
        order: 1,
        colors: {
          primaryColor: '#553DE9',
          backgroundColor: '#F8FAFC'
        },
        borderRadius: {
          appBorderRadius: {
            none: '0px',
            M: '0.375rem',
            L: '1.5rem'
          }
        },
        boxShadow: {
          appBoxShadow: {
            none: 'none',
            S: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            M: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            L: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }
        },
        fontFamily: {
          appFont: [
            'System Default',
            'Nunito Sans',
            'Poppins',
            'Inter',
            'Montserrat',
            'Noto Sans',
            'Open Sans',
            'Roboto',
            'Rubik',
            'Ubuntu'
          ]
        }
      },
      properties: {
        colors: {
          primaryColor: '#553DE9',
          backgroundColor: '#F8FAFC'
        },
        borderRadius: {
          appBorderRadius: '0.375rem'
        },
        boxShadow: {
          appBoxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        },
        fontFamily: {
          appFont: 'System Default'
        }
      },
      stylesheet: {
        AUDIO_RECORDER_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        BUTTON_WIDGET: {
          buttonColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        BUTTON_GROUP_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none',
          childStylesheet: {
            button: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}'
            }
          }
        },
        CAMERA_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        CHART_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
        },
        CHECKBOX_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
        },
        CHECKBOX_GROUP_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
        },
        CONTAINER_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        CIRCULAR_PROGRESS_WIDGET: {
          fillColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
        },
        CURRENCY_INPUT_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        PHONE_INPUT_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        DATE_PICKER_WIDGET2: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        FILE_PICKER_WIDGET_V2: {
          buttonColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        FORM_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        FORM_BUTTON_WIDGET: {
          buttonColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        ICON_BUTTON_WIDGET: {
          buttonColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        IFRAME_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        IMAGE_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        INPUT_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        INPUT_WIDGET_V2: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        JSON_FORM_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
          submitButtonStyles: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          resetButtonStyles: {
            buttonColor: '{{appsmith.theme.colors.primaryColor}}',
            borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
            boxShadow: 'none'
          },
          childStylesheet: {
            ARRAY: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none',
              cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              cellBoxShadow: 'none'
            },
            OBJECT: {
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none',
              cellBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              cellBoxShadow: 'none'
            },
            CHECKBOX: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
            },
            CURRENCY_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            DATEPICKER: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            EMAIL_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            MULTISELECT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            MULTILINE_TEXT_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            NUMBER_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            PASSWORD_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            PHONE_NUMBER_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            RADIO_GROUP: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              boxShadow: 'none'
            },
            SELECT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            SWITCH: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              boxShadow: 'none'
            },
            TEXT_INPUT: {
              accentColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            }
          }
        },
        LIST_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        MAP_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        MAP_CHART_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
          fontFamily: '{{appsmith.theme.fontFamily.appFont}}'
        },
        MENU_BUTTON_WIDGET: {
          menuColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        MODAL_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        MULTI_SELECT_TREE_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        MULTI_SELECT_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        MULTI_SELECT_WIDGET_V2: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        DROP_DOWN_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        PROGRESSBAR_WIDGET: {
          fillColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
        },
        PROGRESS_WIDGET: {
          fillColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
        },
        CODE_SCANNER_WIDGET: {
          buttonColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        RATE_WIDGET: {
          activeColor: '{{appsmith.theme.colors.primaryColor}}'
        },
        RADIO_GROUP_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          boxShadow: 'none'
        },
        RICH_TEXT_EDITOR_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        STATBOX_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        SWITCH_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          boxShadow: 'none'
        },
        SWITCH_GROUP_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}'
        },
        SELECT_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        TABLE_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
          childStylesheet: {
            button: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            menuButton: {
              menuColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            iconButton: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            }
          }
        },
        TABLE_WIDGET_V2: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}',
          childStylesheet: {
            button: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            menuButton: {
              menuColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            iconButton: {
              buttonColor: '{{appsmith.theme.colors.primaryColor}}',
              borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              boxShadow: 'none'
            },
            editActions: {
              saveButtonColor: '{{appsmith.theme.colors.primaryColor}}',
              saveBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
              discardButtonColor: '{{appsmith.theme.colors.primaryColor}}',
              discardBorderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
            }
          }
        },
        TABS_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        TEXT_WIDGET: {
          truncateButtonColor: '{{appsmith.theme.colors.primaryColor}}',
          fontFamily: '{{appsmith.theme.fontFamily.appFont}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}'
        },
        VIDEO_WIDGET: {
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: '{{appsmith.theme.boxShadow.appBoxShadow}}'
        },
        SINGLE_SELECT_TREE_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}',
          borderRadius: '{{appsmith.theme.borderRadius.appBorderRadius}}',
          boxShadow: 'none'
        },
        CATEGORY_SLIDER_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}'
        },
        NUMBER_SLIDER_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}'
        },
        RANGE_SLIDER_WIDGET: {
          accentColor: '{{appsmith.theme.colors.primaryColor}}'
        }
      },
      isSystemTheme: true
    }
  },
  mainCanvas: {
    initialized: true,
    width: 1701,
    height: 1292,
    isMobile: false
  },
  appSettingsPane: {
    isOpen: false,
    context: {
      type: 0
    }
  },
  focusHistory: {
    history: {}
  },
  editorContext: {
    codeEditorHistory: {},
    propertySectionState: {},
    selectedPropertyTabIndex: 0,
    propertyPanelState: {},
    entityCollapsibleFields: {},
    subEntityCollapsibleFields: {},
    explorerSwitchIndex: 0
  },
  libraries: {
    isInstallerOpen: false,
    installationStatus: {},
    installedLibraries: [
      {
        name: 'lodash',
        docsURL: 'https://lodash.com/docs/4.17.21',
        version: '4.17.21',
        accessor: [
          '_'
        ]
      },
      {
        name: 'moment',
        docsURL: 'https://momentjs.com/docs/',
        version: '0.5.35',
        accessor: [
          'moment'
        ]
      },
      {
        name: 'forge',
        docsURL: 'https://github.com/digitalbazaar/forge',
        version: '1.3.0',
        accessor: [
          'forge'
        ]
      }
    ],
    reservedNames: []
  },
  autoHeightUI: {
    isAutoHeightWithLimitsChanging: false
  },
  layoutConversion: {
    snapshotDetails: {
      updatedTime: null
    },
    conversionState: 'START',
    isConverting: false
  },
  actionSelector: {},
  oneClickBinding: {
    isConnecting: false,
    config: null,
    showOptions: false
  },
  activeField: null,
  ide: {
    view: 'SplitScreen',
    tabs: {},
    isListViewActive: false,
    showCreateModal: false,
    renameEntity: '',
    ideCanvasSideBySideHover: {
      navigated: false,
      widgetTypes: []
    }
  },
  consolidatedPageLoad: {
    isLoading: false
  },
  pluginActionEditor: {
    isCreating: false,
    isRunning: {},
    isSaving: {},
    isSchemaGenerating: {},
    isDeleting: {},
    isDirty: {},
    runErrorMessage: {},
    'debugger': {
      open: false,
      responseTabHeight: 419.65
    },
    settingsOpen: false
  }
}
