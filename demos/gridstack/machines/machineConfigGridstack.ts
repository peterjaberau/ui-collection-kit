export const options = {
  defaultGridOptions: {
    handleClass: "custom-draggable-handle",
    acceptWidgets: true,
    columnOpts: {
      breakpointForWindow: true,
      breakpoints: [
        { c: 1, w: 700 },
        { c: 3, w: 850 },
        { c: 6, w: 950 },
        { c: 8, w: 1100 },
      ],
      layout: "moveScale",
      columnMax: 12,
    },
    margin: 8,
    cellHeight: 50,
    subGridOpts: {
      acceptWidgets: true,
      columnOpts: {
        breakpoints: [
          { c: 1, w: 700 },
          { c: 3, w: 850 },
          { c: 6, w: 950 },
          { c: 8, w: 1100 },
        ],
        layout: "moveScale",
      },
      margin: 8,
      minRow: 2,
      cellHeight: 50,
      alwaysShowResizeHandle: false,
      column: "auto",
      layout: "list",
    },
  },
};

export const definitions = {
  defaultGridOptions: {
    handleClass: "custom-draggable-handle",
    acceptWidgets: true,
    columnOpts: {
      breakpointForWindow: true,
      breakpoints: [
        { c: 1, w: 700 },
        { c: 3, w: 850 },
        { c: 6, w: 950 },
        { c: 8, w: 1100 },
      ],
      layout: "moveScale",
      columnMax: 12,
    },
    margin: 8,
    cellHeight: 50,
    subGridOpts: {
      acceptWidgets: true,
      columnOpts: {
        breakpoints: [
          { c: 1, w: 700 },
          { c: 3, w: 850 },
          { c: 6, w: 950 },
          { c: 8, w: 1100 },
        ],
        layout: "moveScale",
      },
      margin: 8,
      minRow: 2,
      cellHeight: 50,
      alwaysShowResizeHandle: false,
      column: "auto",
      layout: "list",
    },
  }
}


export const defaultPreset: any = {
  "showcase": {
    ...options.defaultGridOptions,
    actions: {
      addWidget: () => {},
      handleAddSubGrid: () => {},
      addText: () => {},
      addCounter: () => {},
      addComplexCard: () => {},
      addSubGrid: () => {},
    },
    children: [
      { id: "009-item1", h: 2, w: 2, x: 0, y: 0 },
      { id: "009-item2", h: 2, w: 2, x: 2, y: 0 },
      {
        id: "009-sub-grid-1",
        h: 5,
        sizeToContent: true,
        subGridOpts: {
          children: [
            {
              id: "009-sub-grid-1-title",
              locked: true,
              noMove: true,
              noResize: true,
              w: 12,
              x: 0,
              y: 0,
              content: "Sub Grid 1",
            },
            { id: "009-item3", h: 2, w: 2, x: 0, y: 1 },
            { id: "009-item4", h: 2, w: 2, x: 2, y: 0 },
          ],
        },
        w: 4,
        x: 0,
        y: 2,
      },
      { id: "009-item5", w: 4, h: 4, x: 0, y: 2 },
    ],
    componentMap: {
      "009-item1": {
        component: "Text",
        serializableProps: { content: "Text" },
      },
      "009-item2": {
        component: "Text",
        serializableProps: { content: "Text" },
      },
      "009-sub-grid-1-title": {
        component: "Text",
        serializableProps: { content: "Sub Grid 1" },
      },
      "009-item3": {
        component: "Text",
        serializableProps: { content: "Text" },
      },
      "009-item4": {
        component: "Counter",
        serializableProps: { label: "Click me" },
      },
      "009-item5": {
        component: "ComplexCard",
        serializableProps: { title: "Complex Card", color: "red" },
      },
    },
  },
  "000-simple": {
    ...options.defaultGridOptions,
    children: [
      { id: "000-item1", h: 2, w: 2, x: 0, y: 0 },
      { id: "000-item2", h: 2, w: 2, x: 2, y: 0 },
    ],
  },

  "001-simple": {
    ...options.defaultGridOptions,
    actions: {
      addWidget: () => {},
    },
    children: [
      { id: "000-item1", h: 2, w: 2, x: 0, y: 0 },
      { id: "000-item2", h: 2, w: 2, x: 2, y: 0 },
    ],
  },
  "002-nested": {
    ...options.defaultGridOptions,
    actions: {
      addWidget: () => {},
      addText: () => {},
      addSubGrid: () => {},
    },
    children: [
      { id: "002-item1", h: 2, w: 2, x: 0, y: 0 },
      { id: "002-item2", h: 2, w: 2, x: 2, y: 0 },
      {
        id: "002-sub-grid-1",
        h: 5,
        sizeToContent: true,
        subGridOpts: {
          children: [
            {
              id: "002-sub-grid-1-title",
              locked: true,
              noMove: true,
              noResize: true,
              w: 12,
              x: 0,
              y: 0,
              content: "Sub Grid 1",
            },
            { id: "002-item3", h: 2, w: 2, x: 0, y: 1 },
            { id: "002-item4", h: 2, w: 2, x: 2, y: 0 },
          ],
        },
        w: 12,
        x: 0,
        y: 2,
      },
    ],
  },
  "003-custom-handle": {
    ...options.defaultGridOptions,
    actions: {
      addWidget: () => {},
    },
    children: [{ id: "003-item1", h: 2, w: 2, x: 0, y: 0 }],
  },
  "004-drag-in": {
    ...options.defaultGridOptions,
    actions: {
      addWidget: () => {},
    },
    children: [
      { id: "004-item1", h: 2, w: 2, x: 0, y: 0 },
      { id: "004-item2", h: 2, w: 2, x: 2, y: 0 },
    ],
  },
  "009-advanced": {
    ...options.defaultGridOptions,
    actions: {
      addWidget: () => {},
      handleAddSubGrid: () => {},
      addText: () => {},
      addCounter: () => {},
      addComplexCard: () => {},
      addSubGrid: () => {},
    },
    children: [
      { id: "009-item1", h: 2, w: 2, x: 0, y: 0 },
      { id: "009-item2", h: 2, w: 2, x: 2, y: 0 },
      {
        id: "009-sub-grid-1",
        h: 5,
        sizeToContent: true,
        subGridOpts: {
          children: [
            {
              id: "009-sub-grid-1-title",
              locked: true,
              noMove: true,
              noResize: true,
              w: 12,
              x: 0,
              y: 0,
              content: "Sub Grid 1",
            },
            { id: "009-item3", h: 2, w: 2, x: 0, y: 1 },
            { id: "009-item4", h: 2, w: 2, x: 2, y: 0 },
          ],
        },
        w: 4,
        x: 0,
        y: 2,
      },
      { id: "009-item5", w: 4, h: 4, x: 0, y: 2 },
    ],
    componentMap: {
      "009-item1": {
        component: "Text",
        serializableProps: { content: "Text" },
      },
      "009-item2": {
        component: "Text",
        serializableProps: { content: "Text" },
      },
      "009-sub-grid-1-title": {
        component: "Text",
        serializableProps: { content: "Sub Grid 1" },
      },
      "009-item3": {
        component: "Text",
        serializableProps: { content: "Text" },
      },
      "009-item4": {
        component: "Counter",
        serializableProps: { label: "Click me" },
      },
      "009-item5": {
        component: "ComplexCard",
        serializableProps: { title: "Complex Card", color: "red" },
      },
    },
  },
};
