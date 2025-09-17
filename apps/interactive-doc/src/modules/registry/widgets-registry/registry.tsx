import dynamic from "next/dynamic"


/*
  *** export const Named ***
  component: dynamic(() => import("#registry/widgets-registry/components/ag-grid").then((mod) => mod.WidgetAGGrid)),


  *** export default Comp ***
  * component: dynamic(() => import('@/registry/blocks/sidebar-01/page')),

 */

//mapping of component name to actual react component
export const registryComponentsObj: any = {
  "widget-ag-grid": dynamic(() => import("#registry/widgets-registry/components/ag-grid").then((mod) => mod.WidgetAGGrid), { ssr: false }),
  "widget-code-mirror": dynamic(() => import("#registry/widgets-registry/components/code-mirror"), { ssr: false }),
  "widget-json-view": dynamic(() => import("#registry/widgets-registry/components/json-view"), { ssr: false }),
  "widget-monaco-editor": dynamic(() => import("#registry/widgets-registry/components/monaco-editor"), { ssr: false }),
  "widget-placeholder": dynamic(() => import("#registry/widgets-registry/components/placeholder"), { ssr: false }),
  "widget-action": dynamic(() => import("#registry/widgets-registry/components/action"), { ssr: false }),


}

//schema for each component configuration
export const registrySchemasObj: any = {
  "widget-ag-grid": {
    type: "object",
    properties: {
      properties: {
        type: "array",
        props: {
          hideCopy: true,
          hideMove: true,
        },
        className: "parallel-wrap",
        items: {
          type: "object",
          properties: {
            name: {
              title: "Name",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            value: {
              title: "value",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
          },
        },
      },
    },
  },
  "widget-code-mirror": {
    type: "object",
    properties: {
      string: {
        title: "string",
        description: "With clear x button",
        type: "string",
        default: "hello world",
        props: {
          allowClear: true,
        },
      },
      string2: {
        title: "Complex verification",
        description: "Usage of pattern and message",
        type: "string",
        rules: [
          {
            pattern: "^[A-Za-z0-9]+$",
            message: "Please enter numbers or English letters",
          },
        ],
        placeholder: "Please enter a number or English",
      },
      string3: {
        title: "Length Control",
        description: "Length is between 5-15 characters",
        type: "string",
        minLength: 5,
        maxLength: 15,
      },
      string4: {
        title: "pre/post tags",
        type: "string",
        props: {
          addonBefore: "length",
          addonAfter: "px",
        },
      },
      string5: {
        title: "prefix and suffix",
        type: "string",
        rules: [
          {
            pattern: "^[0-9]+$",
            message: "Please enter a number",
          },
        ],
        props: {
          prefix: "￥",
          suffix: "RMB",
        },
      },
      string6: {
        title: "Grayed input box",
        type: "string",
        disabled: true,
        default: "hello world",
      },
      string7: {
        title: "Text box",
        description: "Fixed height",
        type: "string",
        format: "textarea",
        props: {
          row: 4,
        },
      },
    },
    required: ["string4", "string5"],
  },
  "widget-json-view": {
    type: "object",
    properties: {
      list: {
        type: "array",
        props: {
          hideCopy: true,
          hideMove: true,
        },
        className: "switch-list",
        items: {
          type: "object",
          properties: {
            name: {
              title: "Condition name",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            type: {
              title: "Conditional Type",
              type: "string",
              props: {
                allowClear: true,
              },
              enum: ["Type 1"],
              enumNames: ["Type 1"],
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            value: {
              title: "Conditional Statements",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
          },
        },
      },
    },
  },
  "widget-monaco-editor": {
    type: "object",
    properties: {
      properties: {
        title: "Properties",
        type: "array",
        props: {
          hideCopy: true,
          hideMove: true,
        },
        className: "parallel-wrap",
        items: {
          type: "object",
          properties: {
            name: {
              title: "attribute name",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            value: {
              title: "value",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
          },
        },
      },
      list: {
        title: "Parallel Events",
        type: "array",
        props: {
          hideCopy: true,
          hideMove: true,
        },
        className: "parallel-wrap",
        items: {
          type: "object",
          properties: {
            name: {
              title: "Event name",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            value: {
              title: "Event description",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
          },
        },
      },
    },
  },
  "widget-placeholder": {
    type: "object",
    properties: {
      properties: {
        type: "array",
        props: {
          hideCopy: true,
          hideMove: true,
        },
        className: "parallel-wrap",
        items: {
          type: "object",
          properties: {
            name: {
              title: "Name",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            value: {
              title: "value",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
          },
        },
      },
    },
  },
  "widget-action": {
    type: "object",
    properties: {
      properties: {
        type: "array",
        props: {
          hideCopy: true,
          hideMove: true,
        },
        className: "parallel-wrap",
        items: {
          type: "object",
          properties: {
            name: {
              title: "Name",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
            value: {
              title: "value",
              type: "string",
              props: {
                allowClear: true,
              },
              className: "child-title",
              readOnlyWidget: "ReadOnlyPanel",
            },
          },
        },
      },
    },
  },
}

//default configuration value for each component schema
export const registryDefaultsObj: any = {
  "widget-ag-grid": {},
  "widget-code-mirror": {},
  "widget-json-view": {},
  "widget-monaco-editor": {},
  "widget-placeholder": {},
  "widget-action": {}
}

//recipes of configuration value for each component schema
export const registryPresetsObj: any = {
  "widget-ag-grid": {
    "basic": {
      "title": "Basic AG Grid",
    },
    "with-data": {
      "title": "AG Grid w/ Data",
      "data": [
        { "name": "make", "value": "Toyota" },
        { "name": "model", "value": "Celica" },
        { "name": "price", "value": "35000" }
      ]
    }
  },
  "widget-code-mirror": {
    "basic": {
      "title": "Basic Code Mirror",
      "data": {
        "string": "hello world",
        "string2": "hello123",
        "string3": "123456",
      }
    },
    "with-script-and-data": {
      "title": "Code Mirror w/ Script & Data",
      "data": {
        "string": "function helloWorld() {\n  console.log('Hello, world!');\n}",
        "string2": "codeMirror123",
        "string3": "codeMirrorValue",
        "string4": "200",
        "string5": "100",
        "string6": "disabled input box",
        "string7": "This is a text area.\nYou can write multiple lines of text here.\nIt is useful for longer pieces of content."
      }
    }
  },
  "widget-json-view": {
    "basic": {
      "title": "Basic JSON View",
      "data": {
        "obj":  { "name": "Condition 1", "type": "Type 1", "value": "x > 5" },
      }
    },
    "with-data-array": {
      "title": "JSON View w/ Data Array",
      "data": [
        { "name": "Condition A", "type": "Type 1", "value": "a != null" },
        { "name": "Condition B", "type": "Type 1", "value": "b <= 20" },
        { "name": "Condition C", "type": "Type 1", "value": "c.includes('test')" },
      ]
    }
  },
  "widget-monaco-editor": {
    "basic": {
      "title": "Basic Monaco Editor",
      "data": {
        "string": "hello world",
        "string2": "hello123",
        "string3": "123456",
      }
    },
    "with-script-and-data": {
      "title": "Monaco Editor w/ Script & Data",
      "data": {
        "string": "function helloWorld() {\n  console.log('Hello, world!');\n}",
        "string2": "codeMirror123",
        "string3": "codeMirrorValue",
        "string4": "200",
        "string5": "100",
        "string6": "disabled input box",
        "string7": "This is a text area.\nYou can write multiple lines of text here.\nIt is useful for longer pieces of content."
      }
    }

  },
  "widget-placeholder": {
    "basic": {
      "title": "Basic Placeholder",
      },
    "empty-state": {
      "title": "Empty State Placeholder",
      "data": {
        "title": "No Data Available",
        "subtitle": "There is currently no data to display. Please check back later or add new data to get started.",
      }
    }
  },
  "widget-action": {
    "basic": {
      "title": "Basic Action",
    },
    "with-data": {
      "title": "Action w/ Data",
      "data": {
        "text": "Execute Action"
      }
    }
  }
}

//list of all registered component names with metadata
export const registryMetadataList: any[] = [
  {
    name: "widget-ag-grid",
    type: "ag-grid",
    title: "AG Grid",
  },
  {
    name: "widget-code-mirror",
    type: "code-mirror",
    title: "Code Mirror",
  },
  {
    name: "widget-json-view",
    type: "json-view",
    title: "JSON View",
  },
  {
    name: "widget-monaco-editor",
    type: "monaco-editor",
    title: "Monaco Editor",
  },
  {
    name: "widget-placeholder",
    type: "placeholder",
    title: "Placeholder",
  },
  {
    name: "widget-action",
    type: "action",
    title: "Action",
  }
]



