
export default {
  config: {},
  console: {
    components: []
  },
  currentApp: {
    components: []
  },
  currentPage: {},

  pluginsManager: {},
  appShellManager: {
    structure: {
      "FlexibleWorkbench": ["WorkbenchHeader", "WorkbenchBody", "WorkbenchFooter"],
      "WorkbenchHeader": ["WorkbenchHeaderLeft", "WorkbenchHeaderCenter", "WorkbenchHeaderRight"],
      "WorkbenchHeaderLeft": ["LeftActionPanelDemosTop"],

    }

  },
  plugins: {
    FlexibleWorkbench: {},
    WorkbenchHeader: {},
    WorkbenchBody: {},
    WorkbenchFooter: {},
  },

  plugins: [
    {
      id: "FlexibleWorkbench",
      plugins: [
        {
          id: "WorkbenchHeader",
          plugins: [
            {
              id: "WorkbenchHeaderLeft",
              name: "HAlignerLeft",
            },
            {
              id: "WorkbenchHeaderCenter",
              name: "HAlignerCenter",
            },
            {
              id: "WorkbenchHeaderRight",
              name: "HAlignerRight",
            },
          ],
        },
        {
          id: "WorkbenchBody",
          plugins: [
            {
              id: "FlexibleEdge",
              plugins: [
                {
                  id: "FlexibleEdgeTop",
                  name: "VAlignerTop",
                },
                {
                  id: "FlexibleEdgeMiddle",
                  name: "VAlignerMiddle",
                },
                {
                  id: "FlexibleEdgeBottom",
                  name: "VAlignerBottom",
                },
              ],
            },
          ],
        },
        {
          id: "WorkbenchFooter",
          plugins: [
            {
              id: "WorkbenchFooterLeft",
              name: "HAlignerLeft",
            },
            {
              id: "WorkbenchFooterCenter",
              name: "HAlignerCenter",
            },
            {
              id: "WorkbenchFooterRight",
              name: "HAlignerRight",
            },
          ],
        },
      ],
    },
  ],
}
