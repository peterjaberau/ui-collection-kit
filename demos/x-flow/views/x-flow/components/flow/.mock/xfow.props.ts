export const data = {
  initialValues: {
    nodes: [
      {
        id: 'y01s4993gdvyknzf',
        type: 'startEvent',
        position: {
          x: 0,
          y: 120,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: false,
        dragging: false,
        data: {
          _isCandidate: false,
          title: 'Start',
          string: 'hello',
          string2: 'test',
          string3: '16',
          string4: '17',
          string5: '19',
          string6: 'hello world',
          string7: 'test',
        },
      },
      {
        id: 'bzydz67rlmv1n871',
        type: 'Switch',
        position: {
          x: 354,
          y: 120,
        },
        measured: {
          width: 244,
          height: 303,
        },
        selected: false,
        dragging: false,
        data: {
          _isCandidate: false,
          title: 'Conditional branch',
          list: [
            {
              _id: 'yjrqixxjwfdn47of',
              name: 'Condition 1',
              type: 'Type 1',
              value: 'a==12',
            },
            {
              name: 'Condition 2',
              type: 'Type 1',
              value: 'a!=12',
              _id: 'id_wmu3t8gkanwg271a',
            },
          ],
        },
      },
      {
        id: 'mjw4se36aadccnbt',
        type: 'serviceTask',
        position: {
          x: 708,
          y: 22.5,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: false,
        dragging: false,
        data: {
          _isCandidate: false,
          title: 'Knowledge Retrieval_ncjg',
          properties: [
            {
              name: 'name1',
              value: 'value1',
            },
          ],
        },
      },
      {
        id: '6w52vnb5kwwq7pdj',
        type: 'receiveTask',
        position: {
          x: 708,
          y: 217.5,
        },
        measured: {
          width: 244,
          height: 74,
        },
        selected: false,
        data: {
          _isCandidate: false,
          title: 'Question Classifier_ysa6',
          desc: 'Problem classification description',
          properties: [
            {
              name: 'Question 1',
              value: 'value 1',
            },
          ],
        },
      },
      {
        id: 'dm6eebudu8tmb4v3',
        type: 'Parallel',
        position: {
          x: 1062,
          y: 120,
        },
        measured: {
          width: 244,
          height: 211,
        },
        selected: false,
        dragging: false,
        data: {
          _isCandidate: false,
          title: 'Parallel Events_49pn',
          properties: [
            {
              name: 'Property',
              value: 'value',
            },
          ],
          list: [
            {
              _id: 'id_7m3vitc4qy476axa',
              name: 'Event 1',
              value: 'Description 1',
            },
            {
              _id: 'id_m26wo9298g3imnes',
              name: 'Event 2',
              value: 'Description 2',
            },
          ],
        },
      },
      {
        id: 'walnrnko6rjn56bx',
        type: 'userTask',
        position: {
          x: 1416,
          y: 22.5,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: false,
        data: {
          _isCandidate: false,
          title: 'Code execution_flcv',
          properties: [
            {
              name: 'name',
              value: 'value',
            },
          ],
        },
      },
      {
        id: 'rxoar6yr0whfr7ym',
        type: 'callActivity',
        position: {
          x: 1416,
          y: 217.5,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: false,
        data: {
          _isCandidate: false,
          title: 'HTTP request_pmkf',
          properties: [
            {
              name: 'name',
              value: 'value',
            },
          ],
        },
      },
      {
        id: 'qjmv9gxija93gxkb',
        type: 'endEvent',
        position: {
          x: 1770,
          y: 120,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: true,
        dragging: false,
        data: {
          _isCandidate: false,
          title: 'End_af4u',
          nodeDesc: 'Process ends',
        },
      },
    ],
    edges: [
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
          stroke: '#c9c9c9',
        },
        markerEnd: {
          type: 'arrowclosed',
          color: '#c9c9c9',
        },
        deletable: true,
        source: 'y01s4993gdvyknzf',
        target: 'bzydz67rlmv1n871',
        id: 'xy-edge__y01s4993gdvyknzf-bzydz67rlmv1n871',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
          stroke: '#c9c9c9',
        },
        markerEnd: {
          type: 'arrowclosed',
          color: '#c9c9c9',
        },
        deletable: true,
        source: 'bzydz67rlmv1n871',
        sourceHandle: 'yjrqixxjwfdn47of',
        target: 'mjw4se36aadccnbt',
        id: 'xy-edge__bzydz67rlmv1n871yjrqixxjwfdn47of-mjw4se36aadccnbt',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
          stroke: '#c9c9c9',
        },
        markerEnd: {
          type: 'arrowclosed',
          color: '#c9c9c9',
        },
        deletable: true,
        source: 'bzydz67rlmv1n871',
        sourceHandle: 'id_wmu3t8gkanwg271a',
        target: '6w52vnb5kwwq7pdj',
        id: 'xy-edge__bzydz67rlmv1n871id_wmu3t8gkanwg271a-6w52vnb5kwwq7pdj',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
        },
        markerEnd: {
          type: 'arrowclosed',
        },
        deletable: true,
        source: 'mjw4se36aadccnbt',
        target: 'dm6eebudu8tmb4v3',
        id: 'xy-edge__mjw4se36aadccnbt-dm6eebudu8tmb4v3',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
          stroke: '#c9c9c9',
        },
        markerEnd: {
          type: 'arrowclosed',
          color: '#c9c9c9',
        },
        deletable: true,
        source: '6w52vnb5kwwq7pdj',
        target: 'dm6eebudu8tmb4v3',
        id: 'xy-edge__6w52vnb5kwwq7pdj-dm6eebudu8tmb4v3',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
          stroke: '#c9c9c9',
        },
        markerEnd: {
          type: 'arrowclosed',
          color: '#c9c9c9',
        },
        deletable: true,
        source: 'dm6eebudu8tmb4v3',
        sourceHandle: 'id_7m3vitc4qy476axa',
        target: 'walnrnko6rjn56bx',
        id: 'xy-edge__dm6eebudu8tmb4v3id_7m3vitc4qy476axa-walnrnko6rjn56bx',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
        },
        markerEnd: {
          type: 'arrowclosed',
        },
        deletable: true,
        source: 'dm6eebudu8tmb4v3',
        sourceHandle: 'id_m26wo9298g3imnes',
        target: 'rxoar6yr0whfr7ym',
        id: 'xy-edge__dm6eebudu8tmb4v3id_m26wo9298g3imnes-rxoar6yr0whfr7ym',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
        },
        markerEnd: {
          type: 'arrowclosed',
        },
        deletable: true,
        source: 'walnrnko6rjn56bx',
        target: 'qjmv9gxija93gxkb',
        id: 'xy-edge__walnrnko6rjn56bx-qjmv9gxija93gxkb',
      },
      {
        type: 'buttonedge',
        style: {
          strokeWidth: 1.5,
        },
        markerEnd: {
          type: 'arrowclosed',
        },
        deletable: true,
        source: 'rxoar6yr0whfr7ym',
        target: 'qjmv9gxija93gxkb',
        id: 'xy-edge__rxoar6yr0whfr7ym-qjmv9gxija93gxkb',
      },
    ],
  },
  settings: [
    {
      title: 'Event',
      type: '_group',
      items: [
        {
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
        {
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
      ],
    },
    {
      title: 'Logic',
      type: '_group',
      items: [
        {
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
        {
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
      ],
    },
    {
      title: 'Tools',
      type: '_group',
      items: [
        {
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
        {
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
        {
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
        {
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
      ],
    },
  ],
};
