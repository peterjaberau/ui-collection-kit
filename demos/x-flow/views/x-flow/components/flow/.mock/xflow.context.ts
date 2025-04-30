const data = {
  settingMap: {
    startEvent: {
      title: 'Start',
      type: 'startEvent',
      description: 'The node where the process starts. A process is only allowed to have one start node',
      icon: {
        type: 'icon-start',
        bgColor: '#17B26A',
      },
      targetHandleHidden: true,
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          string: {
            title: 'string',
            description: 'With clear x button',
            type: 'string',
            default: 'hello world',
            props: {
              allowClear: true,
            },
          },
          string2: {
            title: 'Complex verification',
            description: 'Usage of pattern and message',
            type: 'string',
            rules: [
              {
                pattern: '^[A-Za-z0-9]+$',
                message: 'Please enter numbers or English letters',
              },
            ],
            placeholder: 'Please enter a number or English',
          },
          string3: {
            title: 'Length Control',
            description: 'Length is between 5-15 characters',
            type: 'string',
            minLength: 5,
            maxLength: 15,
          },
          string4: {
            title: 'pre/post tags',
            type: 'string',
            props: {
              addonBefore: 'length',
              addonAfter: 'px',
            },
          },
          string5: {
            title: 'prefix and suffix',
            type: 'string',
            rules: [
              {
                pattern: '^[0-9]+$',
                message: 'Please enter a number',
              },
            ],
            props: {
              prefix: '￥',
              suffix: 'RMB',
            },
          },
          string6: {
            title: 'Grayed input box',
            type: 'string',
            disabled: true,
            default: 'hello world',
          },
          string7: {
            title: 'Text box',
            description: 'Fixed height',
            type: 'string',
            format: 'textarea',
            props: {
              row: 4,
            },
          },
        },
        required: ['string4', 'string5'],
      },
    },
    endEvent: {
      title: 'End',
      type: 'endEvent',
      description: 'Indicates the end node of the process, there can be multiple end nodes',
      icon: {
        type: 'icon-end',
        bgColor: '#F79009',
      },
      sourceHandleHidden: true,
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          nodeDesc: {
            title: 'End description',
            type: 'string',
            format: 'textarea',
            placeholder: 'Scale according to content',
            props: {
              autoSize: {
                minRows: 3,
                maxRows: 5,
              },
            },
            readOnlyWidget: 'ReadOnlyPanel',
          },
        },
      },
    },
    Switch: {
      title: 'Conditional branch',
      type: 'Switch',
      description: 'Allows you to split the workflow into two branches based on if/else conditions',
      icon: {
        type: 'icon-fenzhi',
        bgColor: '#6172F3',
      },
      nodePanel: {
        width: 550,
      },
      hideDesc: true,
      switchExtra: {
        hideElse: true,
        titleKey: 'name',
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          list: {
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'switch-list',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Condition name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                type: {
                  title: 'Conditional Type',
                  type: 'string',
                  widget: 'select',
                  props: {
                    allowClear: true,
                  },
                  enum: ['Type 1'],
                  enumNames: ['Type 1'],
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'Conditional Statements',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
        },
      },
      nodeWidget: 'showSwitchNode',
    },
    Parallel: {
      title: 'Parallel Events',
      type: 'Parallel',
      description: 'Support multiple branches to execute simultaneously',
      icon: {
        type: 'icon-parallel',
        bgColor: '#06aed4',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      parallelExtra: {
        titleKey: 'name',
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          properties: {
            title: 'Properties',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'parallel-wrap',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'attribute name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'value',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
          list: {
            title: 'Parallel Events',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'parallel-wrap',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Event name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'Event description',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
        },
      },
    },
    serviceTask: {
      title: 'Knowledge Retrieval',
      type: 'serviceTask',
      description: 'Allows you to query the knowledge base for text content related to user questions',
      icon: {
        type: 'icon-knowledge',
        bgColor: '#fa541c',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          properties: {
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'parallel-wrap',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'value',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
        },
      },
    },
    receiveTask: {
      title: 'Question Classifier',
      type: 'receiveTask',
      description: 'Define the classification conditions of the problem',
      icon: {
        type: 'icon-prompt',
        bgColor: '#875BF7',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          properties: {
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'parallel-wrap',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'value',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
        },
      },
    },
    userTask: {
      title: 'Code Execution',
      type: 'userTask',
      description: 'Execute a piece of code to implement custom logic',
      icon: {
        type: 'icon-code',
        bgColor: 'pink',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          properties: {
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'parallel-wrap',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'value',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
        },
      },
    },
    callActivity: {
      title: 'HTTP Request',
      type: 'callActivity',
      description: 'Allow server requests to be sent via HTTP protocol',
      icon: {
        type: 'icon-http',
        bgColor: '#2E90FA',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          properties: {
            type: 'array',
            widget: 'simpleList',
            props: {
              hideCopy: true,
              hideMove: true,
            },
            className: 'parallel-wrap',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Name',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
                value: {
                  title: 'value',
                  type: 'string',
                  props: {
                    allowClear: true,
                  },
                  className: 'child-title',
                  readOnlyWidget: 'ReadOnlyPanel',
                },
              },
            },
          },
        },
      },
    },
  },
  widgets: {
    CommonNode: {
      compare: null,
    },
    EndNode: {
      compare: null,
    },
    NoteNode: {
      compare: null,
    },
    ParallelNode: {
      compare: null,
    },
    ParallelNodeSettingWidget: {
      compare: null,
    },
    StartNode: {
      compare: null,
    },
    SwitchNode: {
      compare: null,
    },
    SwitchNodeSettingWidget: {
      compare: null,
    },
  },
};
