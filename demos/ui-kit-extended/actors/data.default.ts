import { defineConfig, defaultConfig } from '@chakra-ui/react';
import { defaultConfig as alignuiConfig } from '@ui-collection-kit/styling/alignui/preset';
import { defaultConfig as saasConfig } from '@ui-collection-kit/styling/saas/preset';


export default {
  definitions: {
    styles: {
      default: {
        config: defaultConfig,
        prefix: 'default'
      },
      alignui: {
        config: alignuiConfig,
        prefix: 'alignui'
      },
      saas: {
        config: saasConfig,
        prefix: 'saas'
      }
    },
  },
  globalSession: {},
  appSession: {},
  pageSession: {},

  layout: {
    profile: {
      name: 'layout',
      description: 'layout',
      methods: ['minimize', 'maximiseSidePanel', 'resetSidePanel', 'maximizeTerminal', 'maximisePinnedPanel', 'resetPinnedPanel'],
    },
    panels: [
      {
        id: "editor",
        state: {
          active: false,
        },
        plugin: {
          name: 'Editor',
          activated: true,
          profile: {
            description: 'service - editor',
            displayName: 'Editor',
            methods: [
              "highlight", "open", "getPositionAt", "getText", "getCursorPosition"
            ],
            name: "editor",
          },

        }
      },
      {
        id: "mainPanel",
        props: {
          active: false,
        },
        plugin: {
          name: 'MainPanel',
          activated: true,
          profile: {
            description: 'Remix IDE main panel',
            displayName: 'Main Panel',
            methods: [
              "addView", "removeView", "showContent", "currentFocus", "focus"
            ],
            readonly: true,
            name: "mainPanel",
            version: "0.0.1",
          },
        }
      },
      {
        id: "tabProxy",
        props: {
          active: false,
        },
        plugin: {
          name: 'TabProxy',
          activated: true,
          data: {},
          profile: {
            kind: 'other',
            methods: [
              "focus"
            ],
            name: "tabs",
          },
          readonly: true,
        }
      },
      {
        id: "terminal",
        props: {
          active: false,
          minimized: false,
        },
        plugin: {
          name: "Terminal",
          activated: true,
          profile: {
            description: 'Remix IDE terminal',
            displayName: 'Terminal',
            methods: [
              "log", "logHtml"
            ],
            readonly: true,
            name: "terminal",
          },
        }
      },

      {
        id: "left",


        props: {
          active: false,
          position: "left",
          pinned: true,
          size: 220,
          minSize: 80,
        },
        plugin: {
          name: 'Left',
          activated: true,
          data: {},
          profile: {
            methods: [
            ],
            name: "left",
          },
          readonly: true,
        }
      },
      {
        id: "right",
        props: {
          active: false,
          position: "right",
          pinned: true,
          size: 220,
          minSize: 80,
        },
        plugin: {
          name: 'Right',
          activated: true,
          data: {},
          profile: {
            methods: [
            ],
            name: "right",
          },
          readonly: true,
        }
      },
      {
        id: "bottom",
        props: {
          active: false,
          position: "bottom",
          pinned: false,
          size: 180,
          minSize: 60,
        },
        plugin: {
          name: 'Bottom',
          activated: true,
          data: {},
          profile: {
            methods: [
            ],
            name: "bottom",
          },
          readonly: true,
        }
      },

    ]

  },


  flyoutManager: {
    id: 'flyoutManager',
    plugin: {
      name: "flyoutManager",
      active: false,
      methods: [],
      readonly: true,
      profile: {
        displayName: 'Flyout Manager',
      },
      fixtures: {
        topFlyout: {
          placement: {
            top: "0",
            left: "0",
            right: "0",
          },
          sizes: {
            height: 80,
            maxHeight: 100
          },
          axis: 'y'
        },
        bottomFlyout: {
          placement: {
            bottom: "0",
            left: "0",
            right: "0",
          },
          sizes: {
            height: 160,
            maxHeight: 500
          },
          axis: 'axis'
        },
        leftFlyout: {
          placement: {
            top: 80,
            bottom: 160,
            left: 0,
          },
          sizes: {
            width: 250,
            maxWidth: 500,
          },
          axis: 'x'
        },
        rightFlyout: {
          placement: {
            top: 80,
            bottom: 160,
            right: 0,
          },
          sizes: {
            width: 250,
            maxWidth: 500
          },
          axis: 'x'
        },
      },
      props: {

      },
    },
    plugins: [
      {
        id: "topFlyout",
        plugin: {
          name: "topFlyout",
          active: false,
          methods: [],
          readonly: true,
          profile: {
            displayName: 'Top Flyout',
          },
          props: {
            minimized: false,
            height: 80,
            maxHeight: 100
          },
        },
      },
      {
        id: "leftFlyout",
        plugin: {
          name: "leftFlyout",
          active: false,
          methods: [],
          readonly: true,
          profile: {
            displayName: 'Left Flyout',
          },
          props: {
            minimized: false,
            width: 250,
            maxWidth: 500,
          },
        },
      },

      {
        id: "rightFlyout",
        plugin: {
          name: "rightFlyout",
          active: false,
          methods: [],
          readonly: true,
          profile: {
            displayName: 'Right Flyout',
          },
          props: {
            minimized: false,
            width: 250,
            maxWidth: 500
          },
        },
      },
      {
        id: "bottomFlyout",
        plugin: {
          name: "bottomFlyout",
          active: false,
          methods: [],
          readonly: true,
          profile: {
            displayName: 'Bottom Flyout',
          },
          props: {
            minimized: false,
            height: 120,
            maxHeight: 600
          },
        }
      },
    ]
  }
} as any


/*



const appEventEmitter = new EventEmitter();



const initialState: any = {
  layout: {
    profile: {
      name: 'layout',
      description: 'layout',
      methods: ['minimize', 'maximiseSidePanel', 'resetSidePanel', 'maximizeTerminal', 'maximisePinnedPanel', 'resetPinnedPanel'],
    },
    activateService: {},
    app: {},
    event: {},
    enhanced: {
      filePanel: false,
      learn: false,
    },
    queue: [],
    options: {
      queueTimeout: 10000,
    },
    panels: {
      editor: {
        active: false,
        plugin: {
          name: 'Editor',
          modes: {
            txt: 'text',
            json: 'json',
            ts: 'typescript',
            py: 'python',
          },
          activateService: {},
          activated: true,
          api: {},
          options: {
            queueTimeout: 10000,
          },
          preview_short: 'Editor',
          preview_long: 'Editor',
          profile: {
            description: 'service - editor',
            displayName: 'Editor',
            methods: [
              "highlight", "open", "getPositionAt", "getText", "getCursorPosition"
            ],
            name: "editor",
            version: "0.0.1",
          },
          queue: [],
          ref: null,
          registeredDecorations: {
            lineTextPerFile: {},
            markerPerFile: {},
          },
          saveTimeout: null,
          sessions: {},
          type: 'class_instance',
          unserializable: true

        }
      },
      main: {
        active: false,
        plugin: {
          name: 'MainPanel',
          activateService: {},
          activated: true,
          api: {},
          plugins: ['home'],
          options: {
            queueTimeout: 10000,
          },
          preview_short: 'MainPanel',
          preview_long: 'MainPanel',
          profile: {
            description: 'Remix IDE main panel',
            displayName: 'Main Panel',
            methods: [
              "addView", "removeView", "showContent", "currentFocus", "focus"
            ],
            readonly: true,
            name: "mainPanel",
            version: "0.0.1",
          },
          queue: [],
          registeredDecorations: {
            lineTextPerFile: {},
            markerPerFile: {},
          },
          saveTimeout: null,
          type: 'class_instance',
          unserializable: true

        }
      },
      tabs: {
        active: false,
        plugin: {
          name: 'TabProxy',
          activateService: {},
          activated: true,
          data: {},
          plugins: ['home'],
          options: {
            queueTimeout: 10000,
          },
          preview_short: 'TabProxy',
          preview_long: 'TabProxy',
          profile: {
            kind: 'other',
            methods: [
              "focus"
            ],
            name: "tabs",
          },
          tabsApi: {
            activateTab: {},
            active: {},
            setFileDecorations: {}
          },

          queue: [],
          readonly: true,
          registeredDecorations: {
            lineTextPerFile: {},
            markerPerFile: {},
          },
          saveTimeout: null,
          type: 'class_instance',
          unserializable: true

        }
      },
      terminal: {
        active: false,
        minimized: false,
        plugin: {
          name: "Terminal",
          _INDEX: {
            all: [],
            allMain: [],
            commands: {},
            commandsMain: {},

          },
          _JOURNAL: [],
          _api: {
            getPosition: {}
          },
          _commands: {},
          _components: {},
          _deps: {},
          _jobs: {},
          _opts: {},
          _shell: {},
          _views: {
            bar: null,
            cli: null,
            el: null,
            input: null,
            journal: null,
            term: null
          },
          activateService: {},
          commandHelp: {},
          commands: {},
          config: {
            clear: {},
            events: {},
            exists: {},
            get: {},
            set: {},
            getUnpersistedProperty: {},
            setUnpersistedProperty: {},
            unpersistedItems: {},
            items: {
              configFilePath: 'compiler_config.json',
              currentFile: '',
              'settings/auto-completion': true,
              'settings/copilot/suggest/activate': true
            }
          },
          data: {
            activeFilters: {
              commands: {},
              input: ''
            },
            filterFns: {},
            lineLength: 80,
            session: []
          },
          element: null,
          globalRegistry: {
            state: {
              compilersartefacts: {},
              config: {},
              editor: {},
              filemanager: {},
              eventsDecoder: {},
              localeModule: {},
              mainview: {},
              platform: {},
            }
          },
          options: {
            queueTimeout: 10000,
          },
          preview_short: 'Terminal',
          preview_long: 'Terminal',
          profile: {
            description: 'Remix IDE terminal',
            displayName: 'Terminal',
            methods: [
              "log", "logHtml"
            ],
            terminalApi: {
              log: {},
              logHtml: {}
            },
            readonly: true,
            name: "terminal",
            type: 'class_instance',
            unserializable: true,

            version: "0.0.1",
          },
        }
      }
    }
  }
}


 */
