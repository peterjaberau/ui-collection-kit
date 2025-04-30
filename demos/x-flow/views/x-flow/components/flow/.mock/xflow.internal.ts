const data = {
  ReactFlow: {
    workflowContainerRef: 'workflowContainerRef',
    panOnDrag: 'panOnDrag',
    nodeTypes: {},
    edgeTypes: {
      buttonedge: {
        type: {
          compare: null,
        },
        compare: null,
      },
    },
    nodes: [
      {
        type: 'custom',
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
          _nodeType: 'startEvent',
        },
        id: 'y01s4993gdvyknzf',
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
      },
      {
        type: 'custom',
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
          _nodeType: 'Switch',
        },
        id: 'bzydz67rlmv1n871',
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
      },
      {
        type: 'custom',
        data: {
          _isCandidate: false,
          title: 'Knowledge Retrieval_ncjg',
          properties: [
            {
              name: 'name1',
              value: 'value1',
            },
          ],
          _nodeType: 'serviceTask',
        },
        id: 'mjw4se36aadccnbt',
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
      },
      {
        type: 'custom',
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
          _nodeType: 'receiveTask',
        },
        id: '6w52vnb5kwwq7pdj',
        position: {
          x: 708,
          y: 217.5,
        },
        measured: {
          width: 244,
          height: 74,
        },
        selected: false,
      },
      {
        type: 'custom',
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
          _nodeType: 'Parallel',
        },
        id: 'dm6eebudu8tmb4v3',
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
      },
      {
        type: 'custom',
        data: {
          _isCandidate: false,
          title: 'Code execution_flcv',
          properties: [
            {
              name: 'name',
              value: 'value',
            },
          ],
          _nodeType: 'userTask',
        },
        id: 'walnrnko6rjn56bx',
        position: {
          x: 1416,
          y: 22.5,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: false,
      },
      {
        type: 'custom',
        data: {
          _isCandidate: false,
          title: 'HTTP request_pmkf',
          properties: [
            {
              name: 'name',
              value: 'value',
            },
          ],
          _nodeType: 'callActivity',
        },
        id: 'rxoar6yr0whfr7ym',
        position: {
          x: 1416,
          y: 217.5,
        },
        measured: {
          width: 244,
          height: 54,
        },
        selected: false,
      },
      {
        type: 'custom',
        data: {
          _isCandidate: false,
          title: 'End_af4u',
          nodeDesc: 'Process ends',
          _nodeType: 'endEvent',
        },
        id: 'qjmv9gxija93gxkb',
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
    defaultEdgeOptions: {
      type: 'buttonedge',
      style: {
        strokeWidth: 1.5,
      },
      markerEnd: {
        type: 'MarkerType.ArrowClosed',
      },
      deletable: true,
    },
    onBeforeDelete: { return: true },
    onConnect: { invoke: 'onConnect' },
    onNodesChange: { invoke: 'onNodesChange' },
    onEdgesChange: { invoke: 'onEdgesChange' },
    onEdgeMouseEnter: { invoke: 'getUpdateEdgeConfig' },
    onEdgeMouseLeave: { invoke: 'getUpdateEdgeConfig' },
    onNodesDelete: { invoke: 'onNodesDelete' },
    onNodeClick: { invoke: 'onNodeClick' },
    deleteKeyCode: 'globalConfig?.deleteKeyCode',
  },
  CandidateNode: {},
  Operator: {
    addNode: {
      invoke: 'handleAddNode',
    },
  },
  PanelContainer: {
    id: 'activeNode?.id',
    nodeType: 'activeNode?._nodeType',
    onClose: { invoke: 'onClose' },
    node: 'activeNode',
    data: 'activeNode?.values',
    openLogPanel: 'openLogPanel',
  },
  PanelStatusLogContainer: {
    id: 'activeNode?.id',
    nodeType: 'activeNode?._nodeType',
    onClose: { invoke: 'onClose' },
    data: 'activeNode?.values',
  },
};
