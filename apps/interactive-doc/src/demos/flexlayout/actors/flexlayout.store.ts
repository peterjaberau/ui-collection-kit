/*

  "widget-ag-grid": {},
  "widget-code-mirror": {},
  "widget-json-view": {},
  "widget-monaco-editor": {},
  "widget-placeholder": {},
 */

export const layoutOptions: any = {
  default: {
    global: {
      borderAutoSelectTabWhenClosed: true,
      borderAutoSelectTabWhenOpen: true,
      borderClassName: null,
      borderEnableAutoHide: false,
      borderEnableDrop: true,
      borderEnableTabScrollbar: true,
      borderMaxSize: 9999,
      borderMinSize: 100,
      borderSize: 200,
      enableEdgeDock: true,
      enableRotateBorderIcons: true,
      rootOrientationVertical: false,
      splitterEnableHandle: true,
      splitterExtra: 0,
      splitterSize: 8,
      tabBorderHeight: -1,
      tabBorderWidth: -1,
      tabClassName: null,
      tabCloseType: 1, //1- visible | 2- always | 3- selected
      tabContentClassName: null,
      tabDragSpeed: 0.3,
      tabEnableClose: true,
      tabEnableDrag: true,
      tabEnablePopout: true,
      tabEnablePopoutIcon: true,
      tabEnablePopoutOverlay: false,
      tabEnableRename: true,
      tabEnableRenderOnDemand: true,
      tabIcon: null,
      tabMaxHeight: 9999,
      tabMaxWidth: 9999,
      tabMinHeight: 0,
      tabMinWidth: 0,
      tabSetAutoSelectTab: true,
      tabSetClassNameTabStrip: null,
      tabSetEnableActiveIcon: true,
      tabSetEnableClose: false,
      tabSetEnableDeleteWhenEmpty: true,
      tabSetEnableDivide: true,
      tabSetEnableDrag: true,
      tabSetEnableDrop: true,
      tabSetEnableMaximize: true,
      tabSetEnableSingleTabStretch: false,
      tabSetEnableTabScrollbar: true,
      tabSetEnableTabStrip: true,
      tabSetEnableTabWrap: false,
      tabSetMaxHeight: 9999,
      tabSetMaxWidth: 9999,
      tabSetMinHeight: 100,
      tabSetMinWidth: 130,
      tabSetTabLocation: "top", //top | bottom
    },
    borders: [],
    layout: {
      type: "row",
      children: [
        {
          type: "tabset",
          children: [
            {
              type: "tab",
              id: "source-json",
              name: "Source JSON",
              component: "widget-code-mirror",

              config: {
                params: {
                  scope: "source",
                },
                data: {},
                props: {
                  title: "Source JSON",
                  subtitle: "Your source JSON you want to transform.",
                  id: "input",
                  color: "blue",
                  value: "{}",
                },
              },
            },
          ],
          active: true,
        },
        {
          type: "tabset",
          children: [
            {
              type: "tab",
              id: "transformer-json",
              name: "Transformer (Jsonata Expr)",
              component: "widget-code-mirror",
              icon: "article",
              config: {
                params: {
                  scope: "transformer",
                },
                data: {},
                props: {},
              },
            },
          ],
        },
        {
          type: "tabset",
          children: [
            {
              type: "tab",
              id: "action-executer",
              name: "Execute Action",
              component: "widget-action",
              icon: "article",
              config: {
                params: {
                  // scope: "execute-action"
                },
                data: {},
                props: {
                  text: "Execute",
                },
              },
            },
          ],
        },
        // {
        //   type: "tabset",
        //   children: [
        //     {
        //       type: "tab",
        //       id: "result-json",
        //       name: "Result",
        //       component: "widget-monaco-editor",
        //       icon: "article",
        //       config: {
        //         params: {
        //           scope: "result"
        //         },
        //         data: {},
        //         props: {}
        //       }
        //     },
        //   ],
        // },
        {
          type: "tabset",
          children: [
            {
              type: "tab",
              id: "code-mirror-result",
              name: "Code Mirror",
              component: "widget-code-mirror",
              icon: "article",
              config: {
                params: {
                  scope: "result",
                },
                data: {},
                props: {},
              },
            },
          ],
        },
      ],
    },
  },
  oldDefault: {
    global: {
      borderAutoSelectTabWhenClosed: true,
      borderAutoSelectTabWhenOpen: true,
      borderClassName: null,
      borderEnableAutoHide: false,
      borderEnableDrop: true,
      borderEnableTabScrollbar: true,
      borderMaxSize: 9999,
      borderMinSize: 100,
      borderSize: 200,
      enableEdgeDock: true,
      enableRotateBorderIcons: true,
      rootOrientationVertical: false,
      splitterEnableHandle: true,
      splitterExtra: 0,
      splitterSize: 8,
      tabBorderHeight: -1,
      tabBorderWidth: -1,
      tabClassName: null,
      tabCloseType: 1, //1- visible | 2- always | 3- selected
      tabContentClassName: null,
      tabDragSpeed: 0.3,
      tabEnableClose: true,
      tabEnableDrag: true,
      tabEnablePopout: true,
      tabEnablePopoutIcon: true,
      tabEnablePopoutOverlay: false,
      tabEnableRename: true,
      tabEnableRenderOnDemand: true,
      tabIcon: null,
      tabMaxHeight: 9999,
      tabMaxWidth: 9999,
      tabMinHeight: 0,
      tabMinWidth: 0,
      tabSetAutoSelectTab: true,
      tabSetClassNameTabStrip: null,
      tabSetEnableActiveIcon: true,
      tabSetEnableClose: false,
      tabSetEnableDeleteWhenEmpty: true,
      tabSetEnableDivide: true,
      tabSetEnableDrag: true,
      tabSetEnableDrop: true,
      tabSetEnableMaximize: true,
      tabSetEnableSingleTabStretch: false,
      tabSetEnableTabScrollbar: true,
      tabSetEnableTabStrip: true,
      tabSetEnableTabWrap: false,
      tabSetMaxHeight: 9999,
      tabSetMaxWidth: 9999,
      tabSetMinHeight: 100,
      tabSetMinWidth: 130,
      tabSetTabLocation: "top", //top | bottom
    },
    borders: [],
    layout: {
      type: "row",
      id: "1",
      children: [
        {
          type: "tabset",
          id: "2",
          weight: 0.2,
          children: [
            {
              type: "tab",
              id: "3",
              name: "Layout JSON",
              component: "widget-json-view",
            },
          ],
          active: true,
        },
        {
          type: "tabset",
          id: "4",
          weight: 0.2,
          children: [
            {
              type: "tab",
              id: "5",
              name: "Grid 1",
              component: "widget-placeholder",
              icon: "article",
            },
          ],
        },
      ],
    },
  },
  simple: {
    global: {
      borderAutoSelectTabWhenClosed: true,
      borderAutoSelectTabWhenOpen: true,
      borderClassName: null,
      borderEnableAutoHide: false,
      borderEnableDrop: true,
      borderEnableTabScrollbar: true,
      borderMaxSize: 9999,
      borderMinSize: 100,
      borderSize: 200,
      enableEdgeDock: true,
      enableRotateBorderIcons: true,
      rootOrientationVertical: false,
      splitterEnableHandle: true,
      splitterExtra: 0,
      splitterSize: 8,
      tabBorderHeight: -1,
      tabBorderWidth: -1,
      tabClassName: null,
      tabCloseType: 1, //1- visible | 2- always | 3- selected
      tabContentClassName: null,
      tabDragSpeed: 0.3,
      tabEnableClose: true,
      tabEnableDrag: true,
      tabEnablePopout: true,
      tabEnablePopoutIcon: true,
      tabEnablePopoutOverlay: false,
      tabEnableRename: true,
      tabEnableRenderOnDemand: true,
      tabIcon: null,
      tabMaxHeight: 9999,
      tabMaxWidth: 9999,
      tabMinHeight: 0,
      tabMinWidth: 0,
      tabSetAutoSelectTab: true,
      tabSetClassNameTabStrip: null,
      tabSetEnableActiveIcon: true,
      tabSetEnableClose: false,
      tabSetEnableDeleteWhenEmpty: true,
      tabSetEnableDivide: true,
      tabSetEnableDrag: true,
      tabSetEnableDrop: true,
      tabSetEnableMaximize: true,
      tabSetEnableSingleTabStretch: false,
      tabSetEnableTabScrollbar: true,
      tabSetEnableTabStrip: true,
      tabSetEnableTabWrap: false,
      tabSetMaxHeight: 9999,
      tabSetMaxWidth: 9999,
      tabSetMinHeight: 100,
      tabSetMinWidth: 130,
      tabSetTabLocation: "top", //top | bottom
    },
    borders: [
      {
        type: "border",
        location: "bottom",
        children: [
          {
            type: "tab",
            id: "#0ae8e0fb-dba2-4b14-9d75-08781231479a",
            name: "Output",
            component: "widget-placeholder",
            enableClose: false,
            icon: "bar_chart",
          },
          {
            type: "tab",
            id: "#803a2efe-e507-4735-9c2a-46ce6042c1a2",
            name: "Terminal",
            component: "widget-placeholder",
            enableClose: false,
            icon: "terminal",
          },
          {
            type: "tab",
            id: "#7bac972e-fd5f-4582-a511-4feede448394",
            name: "Layout JSON",
            component: "widget-json-view",
          },
        ],
      },
      {
        type: "border",
        location: "left",
        children: [
          {
            type: "tab",
            id: "#21c49854-be85-4e32-96c3-61962f71bc15",
            name: "Navigation",
            altName: "The Navigation Tab",
            component: "widget-placeholder",
            enableClose: false,
            icon: "folder",
          },
        ],
      },
      {
        type: "border",
        location: "right",
        children: [
          {
            type: "tab",
            id: "#ec253996-0724-416b-a097-23f85a89afbe",
            name: "Options",
            component: "widget-placeholder",
            enableClose: false,
            icon: "settings",
          },
        ],
      },
    ],
    layout: {
      type: "row",
      id: "#11b6dde6-2808-4a87-b378-dd6ed2a92547",
      children: [
        {
          type: "tabset",
          id: "#018c109c-20ab-4458-84c8-1817d2e7d81b",
          weight: 33,
          children: [
            {
              type: "tab",
              id: "#4fcdc630-6742-474a-9b67-cb40c36e2d00",
              name: "OpenLayers Map",
              component: "widget-placeholder",
              enableClose: true,
              enableDrag: true,
              enablePopout: false,
              enablePopoutIcon: true,
              enablePopoutOverlay: true,
              enableRename: true,
              enableRenderOnDemand: true,
              enableWindowReMount: true,
              helpText: "help text here",
              icon: "settings",
            },
          ],
        },
        {
          type: "row",
          id: "#cec0f587-2651-4bb2-a755-006a7111bb11",
          weight: 33,
          children: [
            {
              type: "tabset",
              id: "#770c0042-3776-4576-becc-90b627bb8c91",
              weight: 50,
              selected: 0,
              children: [
                {
                  type: "tab",
                  id: "#a7dff07f-a37a-4d58-9853-7b91c465101c",
                  name: "ChartJS",
                  component: "widget-placeholder",
                  enableWindowReMount: true,
                  enablePopoutOverlay: true,
                },
                {
                  type: "tab",
                  id: "#963c76b2-ea75-4cf9-8677-823fb1aec5ea",
                  name: "Grid 1",
                  component: "widget-placeholder",
                  icon: "article",
                },
                {
                  type: "tab",
                  id: "#8bba601c-b902-432a-bc3f-5e076dafdf1d",
                  name: "Grid 2",
                  component: "widget-placeholder",
                  icon: "article",
                },
                {
                  type: "tab",
                  id: "#b89da41a-933d-4784-b4b9-c9a7d19aea0d",
                  name: "Grid 3",
                  component: "widget-placeholder",
                  icon: "article",
                },
                {
                  type: "tab",
                  id: "#b9ffea20-84d7-430d-ad16-947b26127fbc",
                  name: "Grid 4",
                  component: "widget-placeholder",
                  icon: "article",
                },
                {
                  type: "tab",
                  id: "#bebb3b66-bcba-449e-a9b8-774e92fa8c37",
                  name: "Grid 5",
                  component: "widget-placeholder",
                  icon: "article",
                },
              ],
              active: true,
            },
            {
              type: "tabset",
              id: "#c0b4aba3-dba9-4883-a384-1b299518fd0b",
              weight: 50,
              children: [
                {
                  type: "tab",
                  id: "#285406e5-6795-4e17-b10d-6ff8e512ba62",
                  name: "AGGrid",
                  component: "widget-ag-grid",
                },
              ],
            },
          ],
        },
        {
          type: "row",
          id: "#6b135a77-d283-404e-8a92-4bb5bf2579cb",
          weight: 33,
          children: [
            {
              type: "tabset",
              id: "#b97c51f2-7f2c-490d-9cbb-6fcb189c2343",
              weight: 50,
              children: [
                {
                  type: "tab",
                  id: "#0e23b4b3-498a-4625-a916-b1e6e19eaf3f",
                  name: "Wikipedia",
                  component: "widget-placeholder",
                  config: {
                    type: "url",
                    data: "https://en.wikipedia.org/wiki/Main_Page",
                  },
                },
                {
                  type: "tab",
                  id: "#31b3af95-2fc9-4511-8d5d-1e6255b92eae",
                  name: "MUI",
                  enablePopout: false,
                  component: "widget-placeholder",
                },
              ],
            },
            {
              type: "tabset",
              id: "#a1d1e2b2-246c-4116-a616-cb3d186b5743",
              weight: 50,
              children: [
                {
                  type: "tab",
                  id: "#4784d2d4-24a4-4ef2-ac6e-7a3ea7b03ba3",
                  name: "MUI Grid",
                  enablePopout: false,
                  component: "widget-placeholder",
                },
              ],
            },
          ],
        },
      ],
    },
    popouts: {},
  },
  complex: {
    global: {
      tabEnableFloat: true,
      tabSetEnableTabScrollbar: true,
      borderEnableTabScrollbar: true,
    },
    layout: {
      type: "row",
      id: "#5",
      children: [
        {
          type: "tabset",
          id: "#6",
          weight: 12.5,
          selected: 9,
          children: [
            {
              type: "tab",
              id: "#7",
              name: "FX",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#8",
              name: "Global",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#37",
              name: "grid 26",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#38",
              name: "grid 27",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#39",
              name: "grid 28",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#40",
              name: "grid 29",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#41",
              name: "grid 30",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#42",
              name: "grid 31",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#49",
              name: "grid 38",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#50",
              name: "grid 39",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "row",
          id: "#52",
          weight: 25,
          children: [
            {
              type: "row",
              id: "#88",
              weight: 50,
              children: [
                {
                  type: "tabset",
                  id: "#9",
                  weight: 50,
                  selected: 23,
                  children: [
                    {
                      type: "tab",
                      id: "#10",
                      name: "FI",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#12",
                      name: "grid 1",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#13",
                      name: "grid 2",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#14",
                      name: "grid 3",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#15",
                      name: "grid 4",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#16",
                      name: "grid 5",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#17",
                      name: "grid 6",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#18",
                      name: "grid 7",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#19",
                      name: "grid 8",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#20",
                      name: "grid 9",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#21",
                      name: "grid 10",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#22",
                      name: "grid 11",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#23",
                      name: "grid 12",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#24",
                      name: "grid 13",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#25",
                      name: "grid 14",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#26",
                      name: "grid 15",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#27",
                      name: "grid 16",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#28",
                      name: "grid 17",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#29",
                      name: "grid 18",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#30",
                      name: "grid 19",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#31",
                      name: "grid 20",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#32",
                      name: "grid 21",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#33",
                      name: "grid 22",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#34",
                      name: "grid 23",
                      component: "widget-placeholder",
                    },
                  ],
                },
                {
                  type: "tabset",
                  id: "#87",
                  weight: 50,
                  selected: 7,
                  children: [
                    {
                      type: "tab",
                      id: "#36",
                      name: "grid 25",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#91",
                      name: "grid 71",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#92",
                      name: "grid 72",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#93",
                      name: "grid 73",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#94",
                      name: "grid 74",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#95",
                      name: "grid 75",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#96",
                      name: "grid 76",
                      component: "widget-placeholder",
                    },
                    {
                      type: "tab",
                      id: "#97",
                      name: "grid 77",
                      component: "widget-placeholder",
                    },
                  ],
                },
              ],
            },
            {
              type: "tabset",
              id: "#51",
              weight: 50,
              selected: 12,
              children: [
                {
                  type: "tab",
                  id: "#35",
                  name: "grid 24",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#55",
                  name: "grid 40",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#56",
                  name: "grid 41",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#57",
                  name: "grid 42",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#58",
                  name: "grid 43",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#59",
                  name: "grid 44",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#63",
                  name: "grid 48",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#64",
                  name: "grid 49",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#66",
                  name: "grid 51",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#67",
                  name: "grid 52",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#86",
                  name: "grid 1",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#89",
                  name: "grid 2",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  id: "#90",
                  name: "grid 3",
                  component: "widget-placeholder",
                },
              ],
              active: true,
            },
          ],
        },
      ],
    },
    borders: [
      {
        type: "border",
        selected: 13,
        size: 132,
        location: "bottom",
        children: [
          {
            type: "tab",
            id: "#1",
            name: "Activity Blotter",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#2",
            name: "Execution Blotter",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#75",
            name: "grid 60",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#76",
            name: "grid 61",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#77",
            name: "grid 62",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#78",
            name: "grid 63",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#79",
            name: "grid 64",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#60",
            name: "grid 45",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#61",
            name: "grid 46",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#80",
            name: "grid 65",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#81",
            name: "grid 66",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#62",
            name: "grid 47",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#82",
            name: "grid 67",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#65",
            name: "grid 50",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#83",
            name: "grid 68",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#84",
            name: "grid 69",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        selected: 4,
        size: 188,
        location: "left",
        children: [
          {
            type: "tab",
            id: "#3",
            name: "Navigation",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#43",
            name: "grid 32",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#85",
            name: "grid 70",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#44",
            name: "grid 33",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#45",
            name: "grid 34",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#46",
            name: "grid 35",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#48",
            name: "grid 37",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#47",
            name: "grid 36",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        selected: 5,
        size: 196,
        location: "right",
        children: [
          {
            type: "tab",
            id: "#69",
            name: "grid 54",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#74",
            name: "grid 59",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#73",
            name: "grid 58",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#4",
            name: "Options",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#72",
            name: "grid 57",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#71",
            name: "grid 56",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#70",
            name: "grid 55",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            id: "#68",
            name: "grid 53",
            component: "widget-placeholder",
          },
        ],
      },
    ],
  },
  mosaic: {
    global: {
      tabSetEnableDrop: false,
      tabSetEnableSingleTabStretch: true,
      tabSetMinWidth: 100,
      tabSetMinHeight: 100,
    },
    borders: [],
    layout: {
      type: "row",
      children: [
        {
          type: "tabset",
          id: "2",
          weight: 25,
          children: [
            {
              type: "tab",
              id: "3",
              tabsetClassName: "greenClass",
              name: "Layout JSON",
              component: "widget-json-view",
            },
          ],
          active: true,
        },
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "Wikipedia",
              component: "widget-placeholder",
              config: {
                type: "url",
                data: "https://en.wikipedia.org/wiki/Main_Page",
              },
            },
          ],
        },
        {
          type: "tabset",
          weight: 25,
          children: [
            {
              type: "tab",
              name: "One",
              tabsetClassName: "blueClass",
              component: "widget-placeholder",
            },
          ],
        },
      ],
    },
  },
  newFeatures: {
    global: {
      splitterSize: 3,
      splitterExtra: 7,
      tabEnablePopout: true,
      tabSetEnableClose: true,
      tabSetEnableTabWrap: true,
      tabSetMinWidth: 100,
      tabSetMinHeight: 100,
      borderMinSize: 100,
      borderEnableAutoHide: true,
    },
    borders: [
      {
        type: "border",
        location: "bottom",
        children: [
          {
            type: "tab",
            id: "#6eebf157-b04f-42a8-acd6-18ab2eb286ff",
            name: "Output",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#984349f2-0807-4689-b702-656bf1cb9515",
            name: "Terminal",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#c2117846-46a3-4c93-a32c-992a351b1301",
            name: "Layout JSON",
            component: "widget-json-view",
          },
        ],
      },
      {
        type: "border",
        location: "left",
        children: [
          {
            type: "tab",
            id: "#0a7988f1-0cfb-4420-a2a3-8aa8af12684f",
            name: "Navigation",
            component: "widget-placeholder",
            enableClose: false,
          },
          {
            type: "tab",
            id: "#ab2da468-e13f-4925-b15a-388c00186737",
            name: "With border sizes",
            component: "widget-placeholder",
            enableClose: false,
            borderWidth: 500,
            borderHeight: 500,
          },
        ],
      },
      {
        type: "border",
        location: "right",
        children: [
          {
            type: "tab",
            id: "#c2a459f2-314a-4da6-a18d-8a00d8957a3d",
            name: "Options",
            component: "widget-placeholder",
            enableClose: false,
          },
        ],
      },
    ],
    layout: {
      type: "row",
      id: "#baeaf63a-7e31-4f5b-836c-6aec43cb228a",
      children: [
        {
          type: "tabset",
          id: "#8b1bc920-89fb-4fe7-bad3-9cf70d693118",
          weight: 42.14932625516559,
          children: [
            {
              type: "tab",
              id: "#8fcab2f4-23f8-49d7-ae82-f87a9c261200",
              name: "New",
              helpText: "this tab has helpText defined",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#a97509a3-8139-4980-9a45-7ca2418edfd8",
              name: "Two",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#d6a9c27a-701f-4b87-9661-be186dcb567c",
              name: "Grid 1",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#4658c30a-e98e-4a2f-9f30-07ebf2944f26",
              name: "Grid 2",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#c7c0faea-8593-4cf0-87fe-f4ff14f50bdc",
              name: "Grid 3",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#b0ee783e-bb9f-41be-8320-a2bf44490f9f",
              name: "Grid 4",
              component: "widget-placeholder",
              icon: "article",
            },
          ],
        },
        {
          type: "tabset",
          id: "#79caf830-d0fb-4f02-a579-e3bbe21b6525",
          weight: 57.85067374483441,
          children: [
            {
              type: "tab",
              id: "#65210db1-663f-4f98-95cc-1c39953ed2d1",
              name: "Form",
              component: "widget-placeholder",
            },
            {
              type: "tab",
              id: "#9d820148-547a-431d-9793-be67ad973b86",
              name: "Five",
              component: "widget-placeholder",
              borderWidth: 500,
            },
            {
              type: "tab",
              id: "#12acdbcd-0454-4d47-8d96-fccb645954c8",
              name: "Grid 1",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#5c35c619-df7f-4da7-93d7-608c49c5490b",
              name: "Grid 2",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#1357abd8-719f-47e0-bcd8-892e91e2248c",
              name: "Grid 3",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#9fa5abf6-abe8-40d5-a6d2-c8a3ff4326e5",
              name: "Grid 4",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#b73f1f91-2420-4446-9d9d-c7485853caa4",
              name: "Grid 5",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#3955e3b7-2c68-4dcf-b028-332984e94909",
              name: "Grid 6",
              component: "widget-placeholder",
              icon: "article",
            },
            {
              type: "tab",
              id: "#4f5a137d-e63b-42dd-a7e9-635e611a5fd4",
              name: "Grid 7",
              component: "widget-placeholder",
              icon: "article",
            },
          ],
          active: true,
        },
      ],
    },
    popouts: {},
  },
  subLayout: {
    global: {
      tabEnableFloat: true,
    },
    borders: [],
    layout: {
      type: "row",
      children: [
        {
          type: "tabset",
          weight: 23.6,
          children: [
            {
              type: "tab",
              name: "Tabbed Pane",
              component: "widget-placeholder",
              config: {
                model: {
                  global: {
                    tabSetTabLocation: "bottom",
                  },
                  borders: [],
                  layout: {
                    type: "row",
                    children: [
                      {
                        type: "tabset",
                        weight: 50,
                        selected: 1,
                        children: [
                          {
                            type: "tab",
                            name: "AAAA",
                            component: "widget-placeholder",
                            config: {
                              id: "1",
                            },
                          },
                          {
                            type: "tab",
                            name: "BBBB",
                            component: "widget-placeholder",
                            config: {
                              id: "2",
                            },
                          },
                        ],
                        active: true,
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          type: "tabset",
          weight: 26.4,
          children: [
            {
              type: "tab",
              name: "Split Pane",
              component: "widget-placeholder",
              config: {
                model: {
                  global: {
                    tabSetEnableTabStrip: false,
                  },
                  borders: [],
                  layout: {
                    type: "row",
                    children: [
                      {
                        type: "tabset",
                        weight: 50,
                        children: [
                          {
                            type: "tab",
                            name: "1111",
                            component: "widget-placeholder",
                            config: {
                              id: "1",
                            },
                          },
                        ],
                      },
                      {
                        type: "tabset",
                        weight: 50,
                        children: [
                          {
                            type: "tab",
                            name: "2222",
                            component: "widget-placeholder",
                            config: {
                              id: "2",
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
          active: true,
        },
      ],
    },
  },
  threeTabs: {
    global: {},
    borders: [],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "One",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          weight: 50,
          name: "TheHeader",
          children: [
            {
              type: "tab",
              name: "Two",
              icon: "/test/settings",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "Three",
              component: "widget-placeholder",
            },
          ],
        },
      ],
    },
  },
  twoTabs: {
    global: {},
    borders: [],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "One",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          id: "#1",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "Two",
              component: "widget-placeholder",
            },
          ],
        },
      ],
    },
  },
  withBorders: {
    global: {},
    borders: [
      {
        type: "border",
        location: "top",
        children: [
          {
            type: "tab",
            name: "top1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "bottom",
        children: [
          {
            type: "tab",
            name: "bottom1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "left",
        children: [
          {
            type: "tab",
            name: "left1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "right",
        children: [
          {
            type: "tab",
            name: "right1",
            component: "widget-placeholder",
          },
        ],
      },
    ],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "One",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          weight: 50,
          id: "#1",
          children: [
            {
              type: "tab",
              name: "Two",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "Three",
              component: "widget-placeholder",
            },
          ],
        },
      ],
    },
  },
  withMinizeLayout: {
    global: {
      tabSetMinHeight: 100,
      tabSetMinWidth: 100,
      borderMinSize: 100,
      borderEnableAutoHide: true,
      tabSetEnableClose: true,
    },
    borders: [
      {
        type: "border",
        location: "top",
        children: [
          {
            type: "tab",
            name: "top1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "bottom",
        children: [
          {
            type: "tab",
            name: "bottom1",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            name: "bottom2",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "left",
        children: [
          {
            type: "tab",
            name: "left1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "right",
        children: [
          {
            type: "tab",
            name: "right1",
            component: "widget-placeholder",
          },
        ],
      },
    ],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "One",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          weight: 50,
          id: "#1",
          children: [
            {
              type: "tab",
              name: "Two",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "row",
          weight: 100,
          children: [
            {
              type: "tabset",
              weight: 50,
              children: [
                {
                  type: "tab",
                  name: "Three",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  name: "Four",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  name: "Five",
                  component: "widget-placeholder",
                },
              ],
            },
            {
              type: "tabset",
              weight: 50,
              children: [
                {
                  type: "tab",
                  name: "Six",
                  component: "widget-placeholder",
                },
                {
                  type: "tab",
                  name: "Seven",
                  component: "widget-placeholder",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  withOnRenderTab: {
    global: {},
    borders: [
      {
        type: "border",
        location: "top",
        children: [
          {
            type: "tab",
            id: "onRenderTab2",
            name: "top1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "bottom",
        children: [
          {
            type: "tab",
            name: "bottom1",
            component: "widget-placeholder",
          },
          {
            type: "tab",
            name: "bottom2",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "left",
        children: [
          {
            type: "tab",
            name: "left1",
            component: "widget-placeholder",
          },
        ],
      },
      {
        type: "border",
        location: "right",
        children: [
          {
            type: "tab",
            name: "right1",
            component: "widget-placeholder",
          },
        ],
      },
    ],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          id: "onRenderTabSet1",
          weight: 50,
          children: [
            {
              type: "tab",
              id: "345",
              name: "One",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          id: "onRenderTabSet2",
          name: "will be replaced",
          weight: 50,
          children: [
            {
              type: "tab",
              id: "onRenderTab1",
              name: "Two",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          id: "onRenderTabSet3",
          weight: 50,
          children: [
            {
              type: "tab",
              id: "123",
              name: "Three",
              component: "widget-placeholder",
            },
          ],
        },
      ],
    },
  },
  placeholderTabs: {
    global: {},
    borders: [],
    layout: {
      type: "row",
      weight: 100,
      children: [
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "One",
              component: "widget-placeholder",
            },
          ],
        },
        {
          type: "tabset",
          weight: 50,
          children: [
            {
              type: "tab",
              name: "Two",
              component: "widget-placeholder",
            },
          ],
        },
      ],
    },
  },
}
