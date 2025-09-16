const data = [
  {
    name: 'Flex layout',
    icon: 'fa fa-columns',
    description:
      'Layout containers are mainly used to design complex layout container components. The layout effect based on CSS Flex is more controllable over the position of child nodes than Grid and HBox, and is simpler and easier to use than using CSS classes',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      items: [
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    disabledRendererPlugin: false,
    isBaseComponent: true,
    pluginIcon: 'flex-container-plugin',
    rendererName: 'flex',
    id: '786325e2e7b7',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Flex layout',
      order: -1200,
      isBaseComponent: true,
      icon: 'fa fa-columns',
      pluginIcon: 'flex-container-plugin',
      description:
        'Layout containers are mainly used to design complex layout container components. The layout effect based on CSS Flex is more controllable over the position of child nodes than Grid and HBox, and is simpler and easier to use than using CSS classes',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Form 2.0',
    icon: 'fa fa-table',
    description:
      'Used to add, delete, modify and query data, and to display tabular data. Column information can be configured, and then the associated data can be displayed. Supports nesting, super header, fixed column, fixed header, merged cells, etc. ',
    previewSchema: {
      type: 'crud2',
      mode: 'table2',
      source: '$items',
      data: {
        items: [
          {
            engine: 'Trident',
            browser: 'Internet Explorer 4.0',
            platform: 'Win 95+',
            version: '4',
            grade: 'X',
          },
        ],
      },
      columns: [
        {
          label: 'Engine',
          name: 'engine',
        },
        {
          label: 'Browser',
          name: 'browser',
        },
        {
          name: 'version',
          label: 'Version',
        },
        {
          name: 'operation',
          title: 'operation',
          buttons: [
            {
              type: 'button',
              level: 'link',
              icon: 'fa fa-eye',
              actionType: 'dialog',
              dialog: {
                title: 'View details',
                body: {
                  type: 'form',
                  body: [
                    {
                      label: 'Engine',
                      name: 'engine',
                      type: 'static',
                    },
                    {
                      name: 'browser',
                      label: 'Browser',
                      type: 'static',
                    },
                    {
                      name: 'version',
                      label: 'Version',
                      type: 'static',
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    tags: ['Data Container'],
    docLink: '/amis/zh-CN/components/table2',
    scaffold: {
      type: 'crud2',
      mode: 'table2',
      columns: [
        {
          name: 'id',
          title: 'ID',
          type: 'container',
          body: [
            {
              type: 'text',
            },
          ],
        },
        {
          name: 'engine',
          title: 'Example',
          type: 'container',
          body: [
            {
              type: 'text',
            },
          ],
        },
      ],
    },
    scaffoldForm: {
      title: 'Form 2.0 Creation Wizard',
      mode: {
        mode: 'horizontal',
        horizontal: {
          leftFixed: 'sm',
        },
      },
      className: 'ae-Scaffold-Modal ae-Scaffold-Modal--CRUD ae-Scaffold-Modal-content :AMISCSSWrapper',
      stepsBody: true,
      canSkip: true,
      canRebuild: true,
      body: [
        {
          title: 'Data Configuration',
          body: [
            {
              type: 'radios',
              label: 'radios',
              name: 'dsType',
              visible: true,
              options: [
                {
                  label: 'API interface',
                  value: 'api',
                },
              ],
            },
            {
              type: 'container',
              visibleOn: "!this.dsType || this.dsType === 'api'",
              body: [
                {
                  type: 'ae-apiControl',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'Interface response body requirements：<br/>\n        <pre>{\n  "status": 0,\n  "msg": "",\n  "items": {},\n  "page": 0,\n  "total": 0\n}</pre>',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'interface',
                  },
                  name: 'listApi',
                  renderLabel: true,
                  mode: 'horizontal',
                  inputClassName: 'm-b-none',
                },
                {
                  type: 'ae-field-setting',
                  name: 'listFields',
                  label: 'Field',
                  renderer: 'crud',
                  feat: 'List',
                  fieldKeys: [
                    'listFields',
                    'insertFields',
                    'viewFields',
                    'editFields',
                    'deleteFields',
                    'bulkEditFields',
                    'bulkDeleteFields',
                    'simpleQueryFields',
                  ],
                  config: {
                    showInputType: true,
                    showDisplayType: true,
                  },
                },
              ],
            },
            {
              type: 'input-text',
              name: 'primaryField',
              label: {
                type: 'tooltip-wrapper',
                tooltip:
                  'Unique identifier for each row of records, usually used in row selection, batch operations and other scenarios. ',
                tooltipTheme: 'dark',
                placement: 'top',
                tooltipStyle: {
                  fontSize: '12px',
                },
                className: 'ae-formItemControl-label-tip',
                body: 'Primary key',
              },
              visibleOn: "!this.dsType || this.dsType !== 'model-entity'",
            },
          ],
        },
        {
          title: 'Function Configuration',
          body: [
            {
              type: 'container',
              visibleOn: "dsType == null || dsType === 'api'",
              body: [
                {
                  type: 'checkboxes',
                  label: 'Toolbar',
                  name: 'tools',
                  joinValues: false,
                  extractValue: true,
                  multiple: true,
                  options: [
                    {
                      label: 'Insert',
                      value: 'Insert',
                      align: 'left',
                      icon: 'fa fa-layer-group',
                      order: 10,
                    },
                    {
                      label: 'BulkEdit',
                      value: 'BulkEdit',
                      align: 'left',
                      icon: 'fa fa-layer-group',
                      order: 20,
                    },
                    {
                      label: 'BulkDelete',
                      value: 'BulkDelete',
                      align: 'left',
                      icon: 'fa fa-layer-group',
                      order: 30,
                    },
                  ],
                },
                {
                  type: 'checkboxes',
                  label: 'Conditional query',
                  name: 'filters',
                  multiple: true,
                  joinValues: false,
                  extractValue: true,
                  options: [
                    {
                      label: 'SimpleQuery',
                      value: 'SimpleQuery',
                      icon: 'fa fa-search',
                      order: 20,
                    },
                  ],
                },
                {
                  type: 'checkboxes',
                  label: 'data manipulation',
                  name: 'operators',
                  multiple: true,
                  joinValues: false,
                  extractValue: true,
                  options: [
                    {
                      label: 'View',
                      value: 'View',
                      icon: 'fa fa-database',
                      order: 10,
                    },
                    {
                      label: 'Edit',
                      value: 'Edit',
                      icon: 'fa fa-database',
                      order: 20,
                    },
                    {
                      label: 'Delete',
                      value: 'Delete',
                      icon: 'fa fa-database',
                      order: 30,
                    },
                  ],
                },
                {
                  type: 'container',
                },
              ],
            },
            {
              type: 'tabs',
              tabsMode: 'vertical',
              className: 'ae-Scaffold-Modal-tabs',
              tabs: [
                {
                  title: 'List display',
                  icon: 'fa fa-list',
                  visibleOn: "(!this.dsType || this.dsType === 'api') && true",
                  body: [
                    {
                      type: 'ae-field-setting',
                      name: 'listFields',
                      label: false,
                      renderer: 'crud',
                      feat: 'List',
                      fieldKeys: [
                        'listFields',
                        'insertFields',
                        'viewFields',
                        'editFields',
                        'deleteFields',
                        'bulkEditFields',
                        'bulkDeleteFields',
                        'simpleQueryFields',
                      ],
                      config: {
                        showInputType: true,
                        showDisplayType: true,
                      },
                      mode: 'normal',
                    },
                  ],
                },
                {
                  title: 'Insert',
                  icon: 'fa fa-layer-group',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"tools\"] && ~data['tools'].indexOf('Insert')",
                  body: [
                    {
                      type: 'ae-apiControl',
                      label: {
                        type: 'tooltip-wrapper',
                        tooltip:
                          'Used to save data, the data will be passed into this interface after the form is submitted. <br/>\n        Interface response body requirements (if there is data in data, the data will be merged into the form context):<br/>\n        <pre>{\n  "status": 0,\n  "msg": "",\n  "data": {}\n}</pre>',
                        tooltipTheme: 'dark',
                        placement: 'top',
                        tooltipStyle: {
                          fontSize: '12px',
                        },
                        className: 'ae-formItemControl-label-tip',
                        body: 'Newinterface',
                      },
                      name: 'insertApi',
                      renderLabel: true,
                      mode: 'normal',
                      inputClassName: 'm-b-none',
                    },
                    {
                      type: 'ae-field-setting',
                      name: 'insertFields',
                      label: false,
                      renderer: 'crud',
                      feat: 'Insert',
                      fieldKeys: [
                        'listFields',
                        'insertFields',
                        'viewFields',
                        'editFields',
                        'deleteFields',
                        'bulkEditFields',
                        'bulkDeleteFields',
                        'simpleQueryFields',
                      ],
                      config: {
                        showInputType: true,
                        showDisplayType: false,
                      },
                      mode: 'normal',
                    },
                  ],
                },
                {
                  title: 'BulkEdit',
                  icon: 'fa fa-layer-group',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"tools\"] && ~data['tools'].indexOf('BulkEdit')",
                  body: [
                    {
                      type: 'ae-apiControl',
                      label: 'Batch editinginterface',
                      name: 'bulkEditApi',
                      renderLabel: true,
                      mode: 'normal',
                      inputClassName: 'm-b-none',
                    },
                    {
                      type: 'ae-field-setting',
                      name: 'bulkEditFields',
                      label: false,
                      renderer: 'crud',
                      feat: 'BulkEdit',
                      fieldKeys: [
                        'listFields',
                        'insertFields',
                        'viewFields',
                        'editFields',
                        'deleteFields',
                        'bulkEditFields',
                        'bulkDeleteFields',
                        'simpleQueryFields',
                      ],
                      config: {
                        showInputType: true,
                        showDisplayType: false,
                      },
                      mode: 'normal',
                    },
                  ],
                },
                {
                  title: 'BulkDelete',
                  icon: 'fa fa-layer-group',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"tools\"] && ~data['tools'].indexOf('BulkDelete')",
                  body: [
                    {
                      type: 'ae-apiControl',
                      label: 'Batch deleteinterface',
                      name: 'bulkDeleteApi',
                      renderLabel: true,
                      mode: 'normal',
                      inputClassName: 'm-b-none',
                    },
                  ],
                },
                {
                  title: 'SimpleQuery',
                  icon: 'fa fa-search',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"filters\"] && ~data['filters'].indexOf('SimpleQuery')",
                  body: [
                    {
                      type: 'ae-field-setting',
                      name: 'simpleQueryFields',
                      label: false,
                      renderer: 'crud',
                      feat: 'SimpleQuery',
                      fieldKeys: [
                        'listFields',
                        'insertFields',
                        'viewFields',
                        'editFields',
                        'deleteFields',
                        'bulkEditFields',
                        'bulkDeleteFields',
                        'simpleQueryFields',
                      ],
                      config: {
                        showInputType: true,
                        showDisplayType: false,
                      },
                      mode: 'normal',
                    },
                  ],
                },
                {
                  title: 'View',
                  icon: 'fa fa-database',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"operators\"] && ~data['operators'].indexOf('View')",
                  body: [
                    {
                      type: 'ae-field-setting',
                      name: 'viewFields',
                      label: false,
                      renderer: 'crud',
                      feat: 'View',
                      fieldKeys: [
                        'listFields',
                        'insertFields',
                        'viewFields',
                        'editFields',
                        'deleteFields',
                        'bulkEditFields',
                        'bulkDeleteFields',
                        'simpleQueryFields',
                      ],
                      config: {
                        showInputType: true,
                        showDisplayType: false,
                      },
                      mode: 'normal',
                    },
                  ],
                },
                {
                  title: 'Edit',
                  icon: 'fa fa-database',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"operators\"] && ~data['operators'].indexOf('Edit')",
                  body: [
                    {
                      type: 'ae-apiControl',
                      label: 'editinterface',
                      name: 'editApi',
                      renderLabel: true,
                      mode: 'normal',
                      inputClassName: 'm-b-none',
                    },
                    {
                      type: 'ae-apiControl',
                      label: {
                        type: 'tooltip-wrapper',
                        tooltip:
                          'Interface response body requirements:<br/>\n              <pre>{\n  "status": 0,\n  "msg": "",\n  "data": {}\n}</pre>',
                        tooltipTheme: 'dark',
                        placement: 'top',
                        tooltipStyle: {
                          fontSize: '12px',
                        },
                        className: 'ae-formItemControl-label-tip',
                        body: 'Initialization interface',
                      },
                      name: 'initApi',
                      renderLabel: true,
                      mode: 'normal',
                      inputClassName: 'm-b-none',
                    },
                    {
                      type: 'ae-field-setting',
                      name: 'editFields',
                      label: false,
                      renderer: 'crud',
                      feat: 'Edit',
                      fieldKeys: [
                        'listFields',
                        'insertFields',
                        'viewFields',
                        'editFields',
                        'deleteFields',
                        'bulkEditFields',
                        'bulkDeleteFields',
                        'simpleQueryFields',
                      ],
                      config: {
                        showInputType: true,
                        showDisplayType: false,
                      },
                      mode: 'normal',
                    },
                  ],
                },
                {
                  title: 'Delete',
                  icon: 'fa fa-database',
                  visibleOn:
                    "(!this.dsType || this.dsType === 'api') && data[\"operators\"] && ~data['operators'].indexOf('Delete')",
                  body: [
                    {
                      type: 'ae-apiControl',
                      label: 'deleteinterface',
                      name: 'deleteApi',
                      renderLabel: true,
                      mode: 'normal',
                      inputClassName: 'm-b-none',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    isBaseComponent: true,
    pluginIcon: 'table-plugin',
    rendererName: 'crud2',
    id: 'ea839731c6a5',
    plugin: {
      rendererName: 'crud2',
      name: 'Form 2.0',
      panelTitle: 'Table 2.0',
      subPanelTitle: 'Table 2.0',
      icon: 'fa fa-table',
      panelIcon: 'fa fa-table',
      subPanelIcon: 'fa fa-table',
      pluginIcon: 'table-plugin',
      panelJustify: true,
      multifactor: true,
      order: -950,
      $schema: '/schemas/CRUD2TableSchema.json',
      docLink: '/amis/zh-CN/components/table2',
      _dynamicControls: {},
      dsManager: {
        builders: {},
      },
      events: [
        {
          eventName: 'selectedChange',
          eventLabel: 'selectedChange',
          description: 'Manually select table item event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    selectedItems: {
                      type: 'array',
                      title: 'Selected Row Record',
                    },
                    unSelectedItems: {
                      type: 'array',
                      title: 'Unselected row records',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnSort',
          eventLabel: 'Column Sort',
          description: 'Click column sort event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    orderBy: {
                      type: 'string',
                      title: 'Column name',
                    },
                    orderDir: {
                      type: 'string',
                      title: 'Sort value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnFilter',
          eventLabel: 'Column Filter',
          description: 'Click column to filter events',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    filterName: {
                      type: 'string',
                      title: 'Column name',
                    },
                    filterValue: {
                      type: 'string',
                      title: 'Filter Value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnSearch',
          eventLabel: 'Column Search',
          description: 'Click on the column to search for events',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    searchName: {
                      type: 'string',
                      title: 'Column name',
                    },
                    searchValue: {
                      type: 'object',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'orderChange',
          eventLabel: 'Row sorting',
          description: 'Manual drag row sorting event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    movedItems: {
                      type: 'array',
                      title: 'Sorted Records',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnToggled',
          eventLabel: 'Column Display Changes',
          description: 'Click on custom column event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    columns: {
                      type: 'array',
                      title: 'Currently displayed column configuration',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowClick',
          eventLabel: 'Row Click',
          description: 'Click the entire row event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowDbClick',
          eventLabel: 'Double click on row',
          description: 'Double click the entire row event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowMouseEnter',
          eventLabel: 'Mouse enters row event',
          description: 'Triggered when a whole line is moved into',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowMouseLeave',
          eventLabel: 'Mouse out event',
          description: 'Triggered when moving out of the entire line',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'search',
          actionLabel: 'Data query',
          description: 'Complete list data query using specified conditions',
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                name: 'query',
                label: 'Query conditions',
                type: 'ae-formulaControl',
                variables: '${variables}',
                size: 'md',
                mode: 'horizontal',
              },
            ],
          },
        },
        {
          actionType: 'loadMore',
          actionLabel: 'Load more',
          description: 'Load more data into the list container',
        },
        {
          actionType: 'startAutoRefresh',
          actionLabel: 'Start auto refresh',
          description: 'Start auto refresh',
        },
        {
          actionType: 'stopAutoRefresh',
          actionLabel: 'Stop auto refresh',
          description: 'Stop auto refresh',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'select',
          actionLabel: 'Set selected item',
          description: 'Set the selected item of the table',
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'ae-formulaControl',
                variableMode: 'tree',
                name: 'selected',
                label: 'Selected Item',
                variables: '${variables}',
                size: 'lg',
                mode: 'horizontal',
              },
            ],
          },
        },
        {
          actionType: 'selectAll',
          actionLabel: 'Set all selected',
          description: 'Set all table items to be selected',
        },
        {
          actionType: 'clearAll',
          actionLabel: 'Clear selected items',
          description: 'Clear all selected items in the table',
        },
      ],
      isBaseComponent: true,
      description:
        'Used to add, delete, modify and query data, and to display tabular data. Column information can be configured, and then the associated data can be displayed. Supports nesting, super header, fixed column, fixed header, merged cells, etc. ',
    },
    order: 0,
  },
  {
    name: 'Form',
    icon: 'fa fa-list-alt',
    description:
      'It can be used to create, edit or display data. The configuration initialization interface can load data from the remote end, and the configuration submission interface can send data to the remote end. In addition, data can also be submitted to other components and communicate with other components.',
    previewSchema: {
      type: 'form',
      panelClassName: 'Panel--default text-left m-b-none',
      mode: 'horizontal',
      body: [
        {
          label: 'Text',
          name: 'a',
          type: 'input-text',
        },
      ],
    },
    tags: ['Data Container'],
    docLink: '/amis/zh-CN/components/form/index',
    scaffold: {
      type: 'form',
      title: 'Form',
      body: [
        {
          label: 'Text Box',
          type: 'input-text',
          name: 'text',
        },
      ],
    },
    scaffoldForm: {
      title: 'Form Creation Wizard',
      mode: {
        mode: 'horizontal',
        horizontal: {
          leftFixed: 'sm',
        },
      },
      canRebuild: true,
      className: 'ae-Scaffold-Modal ae-Scaffold-Modal-content :AMISCSSWrapper',
      body: [
        {
          type: 'radios',
          name: 'feat',
          label: 'Usage scenario',
          value: 'Insert',
          options: [
            {
              label: 'New',
              value: 'Insert',
            },
            {
              label: 'Edit',
              value: 'Edit',
            },
            {
              label: 'View',
              value: 'View',
            },
          ],
        },
        {
          type: 'radios',
          label: 'radios',
          name: 'dsType',
          visible: true,
          options: [
            {
              label: 'API interface',
              value: 'api',
            },
          ],
        },
        {
          type: 'container',
          className: 'form-item-gap',
          visibleOn: "${feat === 'Insert' && (!dsType || dsType === 'api')}",
          body: [
            {
              type: 'ae-apiControl',
              label: {
                type: 'tooltip-wrapper',
                tooltip:
                  'Used to save data, the data will be passed into this interface after the form is submitted. <br/>\n        Interface response body requirements (if there is data in data, the data will be merged into the form context):<br/>\n        <pre>{\n  "status": 0,\n  "msg": "",\n  "data": {}\n}</pre>',
                tooltipTheme: 'dark',
                placement: 'top',
                tooltipStyle: {
                  fontSize: '12px',
                },
                className: 'ae-formItemControl-label-tip',
                body: 'interface',
              },
              name: 'insertApi',
              renderLabel: true,
              mode: 'horizontal',
              inputClassName: 'm-b-none',
            },
            {
              type: 'ae-field-setting',
              name: 'insertFields',
              label: 'Field',
              renderer: 'form',
              feat: 'Insert',
              fieldKeys: [
                'listFields',
                'insertFields',
                'viewFields',
                'editFields',
                'deleteFields',
                'bulkEditFields',
                'bulkDeleteFields',
                'simpleQueryFields',
              ],
              config: {
                showInputType: true,
                showDisplayType: false,
              },
            },
          ],
        },
        {
          type: 'container',
          className: 'form-item-gap',
          visibleOn: "${feat === 'Edit' && (!dsType || dsType === 'api')}",
          body: [
            {
              type: 'ae-apiControl',
              label: 'interface',
              name: 'editApi',
              renderLabel: true,
              mode: 'horizontal',
              inputClassName: 'm-b-none',
            },
            {
              type: 'ae-apiControl',
              label: {
                type: 'tooltip-wrapper',
                tooltip:
                  'Interface response body requirements:<br/>\n              <pre>{\n  "status": 0,\n  "msg": "",\n  "data": {}\n}</pre>',
                tooltipTheme: 'dark',
                placement: 'top',
                tooltipStyle: {
                  fontSize: '12px',
                },
                className: 'ae-formItemControl-label-tip',
                body: 'Initialization interface',
              },
              name: 'initApi',
              renderLabel: true,
              mode: 'horizontal',
              inputClassName: 'm-b-none',
            },
            {
              type: 'ae-field-setting',
              name: 'editFields',
              label: 'Field',
              renderer: 'form',
              feat: 'Edit',
              fieldKeys: [
                'listFields',
                'insertFields',
                'viewFields',
                'editFields',
                'deleteFields',
                'bulkEditFields',
                'bulkDeleteFields',
                'simpleQueryFields',
              ],
              config: {
                showInputType: true,
                showDisplayType: false,
              },
            },
          ],
        },
        {
          type: 'container',
          className: 'form-item-gap',
          visibleOn: "${feat === 'View' && (!dsType || dsType === 'api')}",
          body: [
            {
              type: 'ae-apiControl',
              label: {
                type: 'tooltip-wrapper',
                tooltip:
                  'Interface response body requirements:<br/>\n              <pre>{\n  "status": 0,\n  "msg": "",\n  "data": {}\n}</pre>',
                tooltipTheme: 'dark',
                placement: 'top',
                tooltipStyle: {
                  fontSize: '12px',
                },
                className: 'ae-formItemControl-label-tip',
                body: 'Initialization interface',
              },
              name: 'initApi',
              renderLabel: true,
              mode: 'horizontal',
              inputClassName: 'm-b-none',
            },
            {
              type: 'ae-field-setting',
              name: 'viewFields',
              label: 'Field',
              renderer: 'form',
              feat: 'View',
              fieldKeys: [
                'listFields',
                'insertFields',
                'viewFields',
                'editFields',
                'deleteFields',
                'bulkEditFields',
                'bulkDeleteFields',
                'simpleQueryFields',
              ],
              config: {
                showInputType: false,
                showDisplayType: true,
              },
            },
          ],
        },
        {
          name: 'operators',
          label: 'Operation',
          type: 'checkboxes',
          value: ['submit'],
          joinValues: false,
          extractValue: false,
          options: [
            {
              label: 'Reset',
              value: 'reset',
              order: 1,
              schema: {
                level: 'default',
              },
            },
            {
              label: 'Submit',
              value: 'submit',
              order: 2,
              schema: {
                level: 'primary',
              },
            },
            {
              label: 'Cancel',
              value: 'cancel',
              order: 0,
              schema: {
                level: 'default',
              },
            },
          ],
        },
      ],
    },
    isBaseComponent: true,
    pluginIcon: 'form-plugin',
    rendererName: 'form',
    id: 'eedd5e01aab7',
    plugin: {
      name: 'Form',
      panelTitle: 'Form',
      rendererName: 'form',
      isBaseComponent: true,
      description:
        'It can be used to create, edit or display data. The configuration initialization interface can load data from the remote end, and the configuration submission interface can send data to the remote end. In addition, data can also be submitted to other components and communicate with other components.',
      docLink: '/amis/zh-CN/components/form/index',
      $schema: '/schemas/FormSchema.json',
      order: -900,
      icon: 'fa fa-list-alt',
      pluginIcon: 'form-plugin',
      panelIcon: 'form-plugin',
      panelJustify: true,
      regions: [
        {
          key: 'body',
          label: 'Form Collection',
          renderMethod: 'renderBody',
          preferTag: 'Form item',
        },
        {
          label: 'Operation Area',
          key: 'actions',
          preferTag: 'button',
        },
      ],
      events: [
        {
          eventName: 'inited',
          eventLabel: 'Initialization data interface request completed',
          description: 'Triggered when the remote initialization data interface request is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    responseData: {
                      type: 'object',
                      title: 'Response Data',
                    },
                    responseStatus: {
                      type: 'number',
                      title: 'Response status (0 means success)',
                    },
                    responseMsg: {
                      type: 'string',
                      title: 'Response message',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'change',
          eventLabel: 'Value change',
          description: 'Triggered when form value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current form data, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'formItemValidateSucc',
          eventLabel: 'Form item verification successful',
          description: 'Triggered after form item validation succeeds',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current form data, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'formItemValidateError',
          eventLabel: 'Form item validation failed',
          description: 'Triggered after form item validation fails',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current form data, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'validateSucc',
          eventLabel: 'Form validation successful',
          description: 'Triggered after form validation succeeds',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current form data, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'validateError',
          eventLabel: 'Form validation failed',
          description: 'Triggered after form validation fails',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current form data, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'submit',
          eventLabel: 'Form Submission',
          strongDesc:
            'After configuring this event, the default validation, submission to API or target, etc. when the form is submitted will not be triggered. All behaviors need to be configured by yourself',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current form data, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'submitSucc',
          eventLabel: 'Submission successful',
          description:
            'Triggered after the form is submitted successfully. If the event source is a button and the button type is "Submit", then the submission success event will be triggered even if the current form is not configured with a "Save Interface',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    result: {
                      type: 'object',
                      title: 'Save the data returned after the interface request is successful',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'submitFail',
          eventLabel: 'Submission failed',
          description: 'Triggered after the form submission request fails',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    error: {
                      type: 'object',
                      title: 'Error message returned after the save interface request fails',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'asyncApiFinished',
          eventLabel: 'Remote request polling ends',
          description: 'Triggered after asyncApi remote request polling ends',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionLabel: 'Submit form',
          actionType: 'submit',
          description: 'Trigger form submission',
        },
        {
          actionLabel: 'Reset Form',
          actionType: 'reset',
          description: 'Trigger a form reset',
        },
        {
          actionLabel: 'Clear form',
          actionType: 'clear',
          description: 'Trigger form clearing',
        },
        {
          actionLabel: 'Verify form',
          actionType: 'validate',
          description: 'Trigger form validation',
        },
        {
          actionLabel: 'Reload',
          actionType: 'reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionLabel: 'Variable assignment',
          actionType: 'setValue',
          description: 'Trigger component data update',
        },
      ],
      Features: [
        null,
        null,
        null,
        {
          label: 'Batch Edit',
          value: 'BulkEdit',
          disabled: true,
        },
      ],
      _dynamicControls: {},
      dsManager: {
        builders: {},
      },
    },
    order: 0,
  },
  {
    searchKeywords: 'Functional container',
    name: 'service',
    icon: 'fa fa-server',
    description:
      'A functional container that can be used to load data or renderer configuration. The loaded data can be used in the container.',
    previewSchema: {
      type: 'service',
      body: [
        {
          type: 'tpl',
          tpl: 'Content Area',
          inline: false,
          className: 'bg-light wrapper',
        },
      ],
    },
    tags: ['Data Container'],
    docLink: '/amis/zh-CN/components/service',
    scaffold: {
      type: 'service',
      body: [],
    },
    isBaseComponent: true,
    pluginIcon: 'service-plugin',
    rendererName: 'service',
    id: '60b6f02ed735',
    plugin: {
      rendererName: 'service',
      name: 'service',
      panelTitle: 'Service',
      icon: 'fa fa-server',
      pluginIcon: 'service-plugin',
      panelIcon: 'service-plugin',
      $schema: '/schemas/ServiceSchema.json',
      isBaseComponent: true,
      order: -850,
      description:
        'A functional container that can be used to load data or renderer configuration. The loaded data can be used in the container.',
      searchKeywords: 'Functional container',
      docLink: '/amis/zh-CN/components/service',
      regions: [null],
      events: [
        {
          eventName: 'init',
          eventLabel: 'Initialization',
          description: 'Triggered when a component instance is created and inserted into the DOM',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'fetchInited',
          eventLabel: 'Initialization data interface request completed',
          description: 'Triggered when the remote initialization data interface request is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    responseData: {
                      type: 'object',
                      title: 'Response Data',
                    },
                    responseStatus: {
                      type: 'number',
                      title: 'Response status (0 means success)',
                    },
                    responseMsg: {
                      type: 'string',
                      title: 'Response message',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'fetchSchemaInited',
          eventLabel: 'Initialize Schema interface request completed',
          description: 'Triggered when the remote initialization Schema interface request is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    responseData: {
                      type: 'object',
                      title: 'Response Data',
                    },
                    responseStatus: {
                      type: 'number',
                      title: 'Response status (0 means success)',
                    },
                    responseMsg: {
                      type: 'string',
                      title: 'Response message',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'rebuild',
          actionLabel: 'Rebuild',
          description: 'Trigger schemaApi refresh and rebuild Schema',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Variable assignment',
          description: 'Update data field data',
        },
      ],
      dsManager: {
        builders: {},
      },
    },
    order: 0,
  },
  {
    name: 'crud',
    icon: 'fa fa-table',
    pluginIcon: 'table-plugin',
    description:
      'Used to implement data addition, deletion, modification and query, supporting three display modes: table, cards and list. Responsible for data pulling, paging, single operation, batch operation, sorting, quick editing and other functions. Integrated query conditions.',
    previewSchema: {
      syncLocation: false,
      type: 'crud',
      className: 'text-left',
      bodyClassName: 'm-b-none',
      affixHeader: false,
      data: {
        items: [
          {
            a: 1,
            b: 2,
          },
          {
            a: 3,
            b: 4,
          },
          {
            a: 5,
            b: 6,
          },
        ],
      },
      source: '${items}',
      columns: [
        {
          label: 'A',
          name: 'a',
        },
        {
          label: 'B',
          name: 'b',
        },
        {
          type: 'operation',
          label: 'Operation',
          buttons: [
            {
              icon: 'fa fa-eye',
              type: 'button',
            },
            {
              icon: 'fa fa-edit',
              type: 'button',
            },
          ],
        },
      ],
    },
    tags: ['crud'],
    docLink: '/amis/zh-CN/components/crud',
    scaffold: {
      type: 'crud',
      syncLocation: false,
      api: '',
      columns: [
        {
          name: 'id',
          label: 'ID',
          type: 'text',
        },
        {
          name: 'engine',
          label: 'Rendering Engine',
          type: 'text',
        },
      ],
      bulkActions: [],
      itemActions: [],
    },
    isBaseComponent: true,
    scaffoldForm: {
      title: 'Quick Start - CRUD',
      body: [
        {
          type: 'ae-apiControl',
          label: 'Interface Address',
          name: 'api',
          labelRemark: {
            label: false,
            title: 'Response example',
            icon: 'fas fa-code',
            className: 'm-l-xs ae-ApiSample-icon',
            tooltipClassName: 'ae-ApiSample-tooltip',
            trigger: 'click',
            rootClose: true,
            placement: 'left',
          },
        },
        {
          type: 'button',
          label: 'Format verification and automatic generation of column configuration',
          className: 'm-t-xs m-b-xs',
          visibleOn: '!!this.api.url',
        },
        {
          name: '__features',
          label: 'Enable feature',
          type: 'checkboxes',
          joinValues: false,
          extractValue: true,
          itemClassName: 'max-w-lg',
          options: [
            {
              label: 'New',
              value: 'create',
            },
            {
              label: 'Query',
              value: 'filter',
            },
            {
              label: 'Batch Delete',
              value: 'bulkDelete',
            },
            {
              label: 'Batch Edit',
              value: 'bulkUpdate',
            },
            {
              label: 'Action Bar - Edit',
              value: 'update',
            },
            {
              label: 'Action Bar - View Details',
              value: 'view',
            },
            {
              label: 'Action Bar-Delete',
              value: 'delete',
            },
          ],
        },
        {
          type: 'group',
          body: [
            {
              columnRatio: 10,
              type: 'checkboxes',
              label: 'Enabled query fields',
              name: 'filterEnabledList',
              joinValues: false,
              source: '${filterSettingSource}',
            },
            {
              columnRatio: 2,
              type: 'input-number',
              label: 'Show several fields per column',
              value: 3,
              name: '__filterColumnCount',
            },
          ],
          visibleOn: "${__features && CONTAINS(__features, 'filter')}",
        },
        {
          name: 'columns',
          type: 'input-table',
          label: false,
          addable: true,
          removable: true,
          needConfirm: false,
          columns: [
            {
              type: 'input-text',
              name: 'label',
              label: 'Title',
            },
            {
              type: 'input-text',
              name: 'name',
              label: 'Bound field name',
            },
            {
              type: 'select',
              name: 'type',
              label: 'level',
              value: 'text',
              options: [
                {
                  value: 'text',
                  label: 'Plain text',
                },
                {
                  value: 'tpl',
                  label: 'Template',
                },
                {
                  value: 'image',
                  label: 'Image',
                },
                {
                  value: 'date',
                  label: 'Date',
                },
                {
                  value: 'progress',
                  label: 'Progress',
                },
                {
                  value: 'status',
                  label: 'Status',
                },
                {
                  value: 'mapping',
                  label: 'Mapping',
                },
                {
                  value: 'operation',
                  label: 'Action Bar',
                },
              ],
            },
          ],
        },
      ],
      canRebuild: true,
    },
    rendererName: 'crud',
    id: '4c221b63c6a0',
    plugin: {
      rendererName: 'crud',
      $schema: '/schemas/CRUDSchema.json',
      order: -800,
      name: 'crud',
      isBaseComponent: true,
      description:
        'Used to implement data addition, deletion, modification and query, supporting three display modes: table, cards and list. Responsible for data pulling, paging, single operation, batch operation, sorting, quick editing and other functions. Integrated query conditions.',
      docLink: '/amis/zh-CN/components/crud',
      icon: 'fa fa-table',
      pluginIcon: 'table-plugin',
      events: [
        {
          eventName: 'fetchInited',
          eventLabel: 'Initialization data interface request completed',
          description: 'Triggered when the remote initialization data interface request is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    responseData: {
                      type: 'object',
                      title: 'Response Data',
                    },
                    responseStatus: {
                      type: 'number',
                      title: 'Response status (0 means success)',
                    },
                    responseMsg: {
                      type: 'string',
                      title: 'Response message',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'selectedChange',
          eventLabel: 'Select table item',
          description: 'Manually select table item event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    selectedItems: {
                      type: 'array',
                      title: 'Selected row record',
                    },
                    unSelectedItems: {
                      type: 'array',
                      title: 'No row selected',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnSort',
          eventLabel: 'Column Sort',
          description: 'Click column sort event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    orderBy: {
                      type: 'string',
                      title: 'Column name',
                    },
                    orderDir: {
                      type: 'string',
                      title: 'Sort value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnFilter',
          eventLabel: 'Column Filter',
          description: 'Click column to filter events',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    filterName: {
                      type: 'string',
                      title: 'Column name',
                    },
                    filterValue: {
                      type: 'string',
                      title: 'Filter Value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnSearch',
          eventLabel: 'Column Search',
          description: 'Click on the column to search for events',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    searchName: {
                      type: 'string',
                      title: 'Column name',
                    },
                    searchValue: {
                      type: 'object',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'orderChange',
          eventLabel: 'Row sorting',
          description: 'Manual drag row sorting event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    movedItems: {
                      type: 'array',
                      title: 'Sorted Records',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnToggled',
          eventLabel: 'Column Display Changes',
          description: 'Click on custom column event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    columns: {
                      type: 'array',
                      title: 'Currently displayed column configuration',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowClick',
          eventLabel: 'Row Click',
          description: 'Click the entire row event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowMouseEnter',
          eventLabel: 'Mouse enters row event',
          description: 'Triggered when a whole line is moved into',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowMouseLeave',
          eventLabel: 'Mouse out event',
          description: 'Triggered when moving out of the entire line',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionLabel: 'Variable assignment',
          actionType: 'setValue',
          description: 'Update list records',
        },
      ],
      btnSchemas: {
        create: {
          label: 'New',
          type: 'button',
          actionType: 'dialog',
          level: 'primary',
          editorSetting: {
            behavior: 'create',
          },
          dialog: {
            title: 'New',
            body: {
              type: 'form',
              api: '',
              body: [],
            },
          },
        },
        update: {
          label: 'Edit',
          type: 'button',
          actionType: 'dialog',
          level: 'link',
          editorSetting: {
            behavior: 'update',
          },
          dialog: {
            title: 'Edit',
            body: {
              type: 'form',
              api: '',
              initApi: '',
              body: [],
            },
          },
        },
        view: {
          label: 'View',
          type: 'button',
          actionType: 'dialog',
          level: 'link',
          editorSetting: {
            behavior: 'view',
          },
          dialog: {
            title: 'View details',
            body: {
              type: 'form',
              initApi: '',
              body: [],
            },
          },
        },
        delete: {
          type: 'button',
          label: 'Delete',
          actionType: 'ajax',
          level: 'link',
          className: 'text-danger',
          confirmText: 'Are you sure you want to delete?',
          api: '',
          editorSetting: {
            behavior: 'delete',
          },
        },
        bulkDelete: {
          type: 'button',
          level: 'danger',
          label: 'Batch Delete',
          actionType: 'ajax',
          confirmText: 'Are you sure you want to delete?',
          api: '',
          editorSetting: {
            behavior: 'bulkDelete',
          },
        },
        bulkUpdate: {
          type: 'button',
          label: 'Batch Edit',
          actionType: 'dialog',
          editorSetting: {
            behavior: 'bulkUpdate',
          },
          dialog: {
            title: 'Batch Edit',
            size: 'md',
            body: {
              type: 'form',
              api: '',
              body: [
                {
                  label: 'Field 1',
                  text: 'Field 1',
                  type: 'input-text',
                },
              ],
            },
          },
        },
        filter: {
          title: 'Query Conditions',
          body: [
            {
              type: 'input-text',
              name: 'keywords',
              label: 'Keyword',
            },
          ],
        },
      },
      multifactor: true,
      panelTitle: 'Add, delete, modify, check',
      wrapperProps: {
        affixHeader: false,
      },
    },
    order: 0,
  },
  {
    searchKeywords:
      'textbox, mailbox box, input-email, URL box, input-url, password box, input-password, password input box',
    name: 'Text Box',
    icon: 'fa fa-terminal',
    description: 'Text input box, supports normal text, password, URL, email and other content input',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: [
        {
          type: 'input-text',
          label: 'Text',
          name: 'text',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-text',
    scaffold: {
      type: 'input-text',
      label: 'Text',
      name: 'text',
    },
    isBaseComponent: true,
    pluginIcon: 'input-text-plugin',
    rendererName: 'input-text',
    id: 'f40ae567e3ff',
    plugin: {
      rendererName: 'input-text',
      $schema: '/schemas/TextControlSchema.json',
      order: -600,
      searchKeywords:
        'textbox, mailbox box, input-email, URL box, input-url, password box, input-password, password input box',
      name: 'Text Box',
      isBaseComponent: true,
      icon: 'fa fa-terminal',
      pluginIcon: 'input-text-plugin',
      description: 'Text input box, supports normal text, password, URL, email and other content input',
      docLink: '/amis/zh-CN/components/form/input-text',
      notRenderFormZone: true,
      panelTitle: 'Text Box',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Input box content changes',
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Input box gets focus',
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'The input box loses focus',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear the input box content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
    },
    order: 0,
  },
  {
    name: 'button',
    icon: 'fa fa-square',
    description: 'Used to display a button, you can configure different display styles and different click behaviors.',
    previewSchema: {
      type: 'button',
      label: 'Button',
    },
    tags: ['button'],
    docLink: '/amis/zh-CN/components/button',
    scaffold: {
      type: 'button',
      label: 'button',
      onEvent: {
        click: {
          actions: [],
        },
      },
    },
    isBaseComponent: true,
    pluginIcon: 'button-plugin',
    rendererName: 'button',
    id: '8b1a898d4837',
    plugin: {
      rendererName: 'button',
      $schema: '/schemas/ActionSchema.json',
      order: -400,
      name: 'button',
      isBaseComponent: true,
      description:
        'Used to display a button, you can configure different display styles and different click behaviors.',
      docLink: '/amis/zh-CN/components/button',
      icon: 'fa fa-square',
      pluginIcon: 'button-plugin',
      panelTitle: 'Button',
      events: [
        {
          eventName: 'click',
          eventLabel: 'click',
          description: 'Fire on click',
          defaultShow: true,
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'mouse event',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'mouseenter',
          description: 'Fires when mouse moves in',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'mouse event',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'mouseleave',
          description: 'mouseleave',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [],
      panelJustify: true,
    },
    order: 0,
  },
  {
    name: 'Text',
    icon: 'fa fa-file-o',
    description: 'Used to display text or paragraphs, supports template syntax to associate dynamic data.',
    previewSchema: {
      type: 'tpl',
      tpl: 'This is the current time of the template content <%- new Date() %>',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/tpl',
    scaffold: {
      type: 'tpl',
      tpl: 'Please edit the content',
      inline: true,
      wrapperComponent: '',
    },
    isBaseComponent: true,
    pluginIcon: 'plain-plugin',
    rendererName: 'tpl',
    id: 'd178a25df444',
    plugin: {
      rendererName: 'tpl',
      $schema: '/schemas/TplSchema.json',
      order: -200,
      name: 'Text',
      isBaseComponent: true,
      icon: 'fa fa-file-o',
      pluginIcon: 'plain-plugin',
      description: 'Used to display text or paragraphs, supports template syntax to associate dynamic data.',
      docLink: '/amis/zh-CN/components/tpl',
      panelTitle: 'Text',
      panelJustify: true,
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [],
      popOverBody: [
        {
          type: 'ae-textareaFormulaControl',
          variableMode: 'tree',
          label: 'Text content',
          mode: 'normal',
          visibleOn: 'this.wrapperComponent !== undefined',
          name: 'tpl',
        },
        {
          label: 'Content',
          type: 'input-rich-text',
          mode: 'normal',
          buttons: [
            'paragraphFormat',
            'quote',
            'textColor',
            'backgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikeThrough',
            '|',
            'formatOL',
            'format',
            'align',
            '|',
            'insertLink',
            'insertImage',
            'insertTable',
            '|',
            'undo',
            'redo',
            'fullscreen',
          ],
          minRows: 5,
          language: 'html',
          visibleOn: 'this.wrapperComponent === undefined',
          name: 'tpl',
        },
        {
          name: 'wrapperComponent',
          type: 'select',
          label: 'Text format',
          options: [
            {
              label: 'Normal text',
              value: '',
            },
            {
              label: 'Paragraph',
              value: 'p',
            },
            {
              label: 'First level title',
              value: 'h1',
            },
            {
              label: 'Secondary Title',
              value: 'h2',
            },
            {
              label: 'Level 3 title',
              value: 'h3',
            },
            {
              label: 'Level 4 title',
              value: 'h4',
            },
            {
              label: 'Level 5 title',
              value: 'h5',
            },
            {
              label: 'Level 6 title',
              value: 'h6',
            },
            {
              label: 'Rich Text',
              value: 'rich-text',
            },
          ],
        },
      ],
    },
    order: 0,
  },
  {
    searchKeywords: 'Horizontal Column',
    name: 'grid',
    icon: 'fa fa-th',
    description: 'Column layout',
    previewSchema: {
      type: 'grid',
      columns: [
        {
          body: [
            {
              type: 'tpl',
              tpl: 'bar',
              inline: false,
              wrapperComponent: '',
              className: 'bg-light wrapper',
            },
          ],
        },
        {
          body: [
            {
              type: 'tpl',
              tpl: 'bar',
              wrapperComponent: '',
              className: 'bg-light wrapper',
              inline: false,
            },
          ],
        },
      ],
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/grid',
    scaffold: {
      type: 'grid',
      columns: [
        {
          body: [],
        },
        {
          body: [],
        },
      ],
    },
    isBaseComponent: true,
    pluginIcon: 'grid-plugin',
    rendererName: 'grid',
    id: '225982a85987',
    plugin: {
      rendererName: 'grid',
      $schema: '/schemas/GridSchema.json',
      name: 'grid',
      isBaseComponent: true,
      description: 'Column layout',
      searchKeywords: 'Horizontal Column',
      docLink: '/amis/zh-CN/components/grid',
      order: -2,
      icon: 'fa fa-th',
      pluginIcon: 'grid-plugin',
      panelTitle: 'Column Layout',
      panelWithOutOthers: false,
      vRendererConfig: {
        regions: {
          body: {
            key: 'body',
            label: 'Content Area',
            placeholder: '栏',
          },
        },
        panelTitle: 'Column',
      },
      overrides: {},
    },
    order: 0,
  },
  {
    name: 'container',
    icon: 'fa fa-square-o',
    description: 'A simple container that can hold multiple renderers together.',
    previewSchema: {
      type: 'container',
      body: [],
      style: {
        position: 'relative',
        display: 'flex',
        inset: 'auto',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      size: 'none',
      wrapperBody: false,
    },
    tags: ['container'],
    docLink: '/amis/zh-CN/components/container',
    scaffold: {
      type: 'container',
      size: 'none',
      wrapperBody: false,
    },
    isBaseComponent: true,
    pluginIcon: 'container-plugin',
    rendererName: 'container',
    id: '9970b5ac7055',
    plugin: {
      rendererName: 'container',
      $schema: '/schemas/ContainerSchema.json',
      name: 'container',
      isBaseComponent: true,
      description: 'A simple container that can hold multiple renderers together.',
      docLink: '/amis/zh-CN/components/container',
      order: -2,
      icon: 'fa fa-square-o',
      pluginIcon: 'container-plugin',
      regions: [null],
      panelTitle: 'container',
      panelJustify: true,
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Free container',
    icon: 'fa fa-square-o',
    description: 'Free container: Its direct child elements support drag and drop adjustment.。',
    previewSchema: {
      type: 'container',
      body: [],
      style: {
        position: 'relative',
        display: 'flex',
        inset: 'auto',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      size: 'none',
      wrapperBody: false,
    },
    tags: ['layout container'],
    docLink: '/amis/zh-CN/components/container',
    scaffold: {
      type: 'container',
      isFreeContainer: true,
      size: 'xs',
      body: [],
      wrapperBody: false,
      style: {
        position: 'relative',
        minHeight: '200px',
      },
    },
    isBaseComponent: true,
    pluginIcon: 'layout-free-container',
    rendererName: 'container',
    id: 'f2cc5a44db29',
    plugin: {
      rendererName: 'container',
      $schema: '/schemas/ContainerSchema.json',
      name: 'Free container',
      isBaseComponent: true,
      description: 'Free container: Its direct child elements support drag and drop adjustment.。',
      docLink: '/amis/zh-CN/components/container',
      order: -2,
      icon: 'fa fa-square-o',
      pluginIcon: 'layout-free-container',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
        },
      ],
      panelTitle: 'Free Container',
      panelJustify: true,
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
    },
    order: 0,
  },
  {
    name: 'switch-container',
    icon: 'fa fa-square-o',
    description:
      'A container for conditional rendering of components based on states, making it easy to design multi-state components',
    previewSchema: {
      type: 'switch-container',
      items: [
        {
          title: 'Status 1',
          body: [
            {
              type: 'tpl',
              tpl: 'Status-Content',
              wrapperComponent: '',
            },
          ],
        },
        {
          title: 'Status 2',
          body: [
            {
              type: 'tpl',
              tpl: 'State 2 content',
              wrapperComponent: '',
            },
          ],
        },
      ],
      style: {
        position: 'static',
        display: 'block',
      },
    },
    tags: ['Layout Container'],
    scaffold: {
      type: 'switch-container',
    },
    isBaseComponent: true,
    pluginIcon: 'switch-container-plugin',
    rendererName: 'switch-container',
    id: '223b8ab475e9',
    plugin: {
      rendererName: 'switch-container',
      $schema: '/schemas/SwitchContainerSchema.json',
      name: 'switch-container',
      isBaseComponent: true,
      description:
        'A container for conditional rendering of components based on states, making it easy to design multi-state components',
      order: -2,
      icon: 'fa fa-square-o',
      pluginIcon: 'switch-container-plugin',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
        },
      ],
      panelTitle: 'State Container',
      panelJustify: true,
      vRendererConfig: {
        regions: {
          body: {
            key: 'body',
            label: 'Content Area',
            placeholder: 'status',
          },
        },
        panelTitle: 'Status',
        panelJustify: true,
      },
      wrapperProps: {
        unmountOnExit: true,
        mountOnEnter: true,
      },
      overrides: {},
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Layout Part',
    icon: 'fa fa-columns',
    description: 'Adsorption container: can be set as a ceiling or ceiling display。',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      isSorptionContainer: true,
      sorptionPosition: 'top',
      className: 'p-1',
      items: [
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
        {
          type: 'container',
          body: [],
          size: 'none',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 0,
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
        },
      ],
      style: {
        position: 'fixed',
        inset: '0 auto auto 0',
        zIndex: 10,
        width: '100%',
        overflowX: 'auto',
        margin: '0',
        overflowY: 'auto',
      },
      isFixedWidth: true,
      isFixedHeight: false,
      originPosition: 'right-bottom',
    },
    disabledRendererPlugin: false,
    isBaseComponent: true,
    pluginIcon: 'layout-fixed-top',
    rendererName: 'flex',
    id: '452617077f8e',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Layout Part',
      order: -1,
      isBaseComponent: true,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-fixed-top',
      description: 'Adsorption container: can be set as a ceiling or ceiling display。',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Adsorption Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Fixed layout',
    icon: 'fa fa-columns',
    description: 'Floating container: a special layout container based on CSS Fixed.',
    previewSchema: {
      type: 'container',
      body: [],
      style: {
        position: 'static',
        display: 'block',
      },
      size: 'none',
      wrapperBody: false,
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'container',
      size: 'xs',
      body: [],
      style: {
        position: 'fixed',
        inset: 'auto 50px 50px auto',
        zIndex: 10,
        minWidth: '80px',
        minHeight: '80px',
        display: 'block',
      },
      wrapperBody: false,
      originPosition: 'right-bottom',
    },
    disabledRendererPlugin: false,
    isBaseComponent: true,
    pluginIcon: 'layout-fixed-plugin',
    rendererName: 'flex',
    id: 'bc1cddba1b76',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Fixed layout',
      order: 0,
      isBaseComponent: true,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-fixed-plugin',
      description: 'Floating container: a special layout container based on CSS Fixed.',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Suspended Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'collapse-group',
    icon: 'fa fa-align-justify',
    description:
      'Folding panel, when the amount of information is large and there are many categories, you can use the folding panel to classify and store it.',
    previewSchema: {
      type: 'collapse-group',
      activeKey: ['1'],
      body: [
        {
          type: 'collapse',
          key: '1',
          active: true,
          header: 'Title 1',
          body: [
            {
              type: 'tpl',
              tpl: 'Here is the content 1',
              wrapperComponent: '',
              inline: false,
            },
          ],
        },
        {
          type: 'collapse',
          key: '2',
          header: 'Title 2',
          body: [
            {
              type: 'tpl',
              tpl: 'Here is the content 1',
              wrapperComponent: '',
              inline: false,
            },
          ],
        },
      ],
    },
    tags: ['collapse-group'],
    docLink: '/amis/zh-CN/components/collapse',
    scaffold: {
      type: 'collapse-group',
    },
    isBaseComponent: true,
    pluginIcon: 'collapse-plugin',
    rendererName: 'collapse-group',
    id: 'c5f96801f9c6',
    plugin: {
      rendererName: 'collapse-group',
      $schema: '/schemas/CollapseGroupSchema.json',
      name: 'collapse-group',
      isBaseComponent: true,
      description:
        'Folding panel, when the amount of information is large and there are many categories, you can use the folding panel to classify and store it.',
      docLink: '/amis/zh-CN/components/collapse',
      icon: 'fa fa-align-justify',
      pluginIcon: 'collapse-plugin',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Folding state changed',
          description: 'Triggered when the folding state of the folding panel changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  title: 'Data',
                  type: 'object',
                  properties: {
                    activeKeys: {
                      type: 'array',
                      title: 'Currently expanded index list',
                    },
                    collapseId: {
                      type: 'string',
                      title: 'Folder Index',
                    },
                    collapsed: {
                      type: 'boolean',
                      title: 'Folder Status',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      activeKeyData: [],
      panelTitle: 'Folding Panel',
      panelJustify: true,
      regions: [
        {
          key: 'body',
          label: 'Content Area',
          renderMethod: 'render',
          insertPosition: 'inner',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'panel',
    icon: 'fa fa-window-maximize',
    description: 'Shows a panel with configurable title and content area.',
    previewSchema: {
      type: 'panel',
      title: 'This is a panel',
      body: 'This is the content area',
      className: 'Panel--default text-left m-b-none',
      actions: [
        {
          label: 'Button 1',
          type: 'button',
        },
        {
          label: 'Button 2',
          type: 'button',
        },
      ],
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/panel',
    scaffold: {
      type: 'panel',
      title: 'Title',
      body: 'Content',
    },
    isBaseComponent: true,
    pluginIcon: 'panel-plugin',
    rendererName: 'panel',
    id: '064c76b97630',
    plugin: {
      rendererName: 'panel',
      $schema: '/schemas/panelSchema.json',
      name: 'panel',
      isBaseComponent: true,
      icon: 'fa fa-window-maximize',
      pluginIcon: 'panel-plugin',
      description: 'Shows a panel with configurable title and content area.',
      docLink: '/amis/zh-CN/components/panel',
      regions: [
        null,
        {
          key: 'actions',
          label: 'Button Group',
          renderMethod: 'renderActions',
          preferTag: 'button',
        },
      ],
      panelTitle: 'Panel',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'tabs',
    icon: 'fa fa-folder-o',
    description: 'Tabs can group content and display it in the form of tabs to reduce user usage costs.',
    previewSchema: {
      type: 'tabs',
      tabs: [
        {
          title: 'Tab 1',
          body: [],
        },
        {
          title: 'Tab 2',
          body: [],
        },
      ],
      mountOnEnter: true,
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/tabs',
    scaffold: {
      type: 'tabs',
      mountOnEnter: true,
    },
    isBaseComponent: true,
    pluginIcon: 'tabs-plugin',
    rendererName: 'tabs',
    id: '7f52a09b3866',
    plugin: {
      rendererName: 'tabs',
      $schema: '/schemas/TabsSchema.json',
      name: 'tabs',
      isBaseComponent: true,
      description: 'Tabs can group content and display it in the form of tabs to reduce user usage costs.',
      docLink: '/amis/zh-CN/components/tabs',
      icon: 'fa fa-folder-o',
      pluginIcon: 'tabs-plugin',
      notRenderFormZone: true,
      regions: [
        {
          key: 'toolbar',
          label: 'Toolbar',
          preferTag: 'display',
        },
      ],
      panelTitle: 'Tab',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Tab Switch',
          description: 'Tab Switching',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Tab Index',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'changeActiveKey',
          actionLabel: 'Activate the specified tab',
          description: 'Modify the key of the currently activated tab item',
          config: ['activeKey'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'ae-formulaControl',
                variableMode: 'tree',
                name: 'activeKey',
                label: 'Activate Item',
                variables: '${variables}',
                size: 'lg',
                mode: 'horizontal',
              },
            ],
          },
        },
      ],
      panelJustify: true,
      patchContainers: ['tabs.body'],
      vRendererConfig: {
        regions: {
          body: {
            key: 'body',
            label: 'Content Area',
          },
        },
        panelTitle: 'Card',
        panelJustify: true,
      },
      wrapperProps: {
        unmountOnExit: true,
        mountOnEnter: true,
      },
      overrides: {},
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Multi-line text input box',
    name: 'Multi-line text box',
    icon: 'fa fa-paragraph',
    description: 'Support line break input',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: {
        type: 'textarea',
        label: 'Multi-line text',
        name: 'textarea',
      },
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/textarea',
    scaffold: {
      type: 'textarea',
      label: 'Multi-line text',
      name: 'textarea',
    },
    isBaseComponent: true,
    pluginIcon: 'textarea-plugin',
    rendererName: 'textarea',
    id: '95ad91b5f334',
    plugin: {
      rendererName: 'textarea',
      $schema: '/schemas/TextareaControlSchema.json',
      name: 'Multi-line text box',
      isBaseComponent: true,
      icon: 'fa fa-paragraph',
      pluginIcon: 'textarea-plugin',
      description: 'Support line break input',
      searchKeywords: 'Multi-line text input box',
      docLink: '/amis/zh-CN/components/form/textarea',
      notRenderFormZone: true,
      panelTitle: 'Multi-line text',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the input box value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current text content',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the input box gets focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current text content',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the input box loses focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current text content',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear the input box content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Number Input Box',
    name: 'Digital Box',
    icon: 'fa fa-sort-numeric-asc',
    description: 'Supports setting of maximum and minimum values, as well as step size and precision',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-number',
          label: 'Number',
          name: 'number',
          keyboard: true,
          value: 88,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-number',
    scaffold: {
      type: 'input-number',
      label: 'Number',
      name: 'number',
      keyboard: true,
    },
    isBaseComponent: true,
    pluginIcon: 'input-number-plugin',
    rendererName: 'input-number',
    id: '910e5b5acb71',
    plugin: {
      rendererName: 'input-number',
      $schema: '/schemas/NumberControlSchema.json',
      name: 'Digital Box',
      isBaseComponent: true,
      icon: 'fa fa-sort-numeric-asc',
      pluginIcon: 'input-number-plugin',
      description: 'Supports setting of maximum and minimum values, as well as step size and precision',
      searchKeywords: 'Number Input Box',
      docLink: '/amis/zh-CN/components/form/input-number',
      notRenderFormZone: true,
      panelTitle: 'Digital Box',
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'number',
                      title: 'Current value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'The number box gets the focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'number',
                      title: 'Current value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Number box lost focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'number',
                      title: 'Current value',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear the number box content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset to default values',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Selector',
    name: 'Drop-down box',
    icon: 'fa fa-th-list',
    description: 'Supports multiple selections, input prompts, and can use source to get options',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'select',
          label: 'Options',
          name: 'select',
          options: [
            {
              label: 'Option A',
              value: 'A',
            },
            {
              label: 'Option B',
              value: 'B',
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/select',
    scaffold: {
      type: 'select',
      label: 'Options',
      name: 'select',
    },
    isBaseComponent: true,
    pluginIcon: 'select-plugin',
    rendererName: 'select',
    id: '5fb825ca4de1',
    plugin: {
      name: 'Drop-down box',
      panelTitle: 'Drop-down box',
      rendererName: 'select',
      icon: 'fa fa-th-list',
      panelIcon: 'fa fa-th-list',
      pluginIcon: 'select-plugin',
      isBaseComponent: true,
      panelJustify: true,
      notRenderFormZone: true,
      $schema: '/schemas/SelectControlSchema.json',
      description: 'Supports multiple selections, input prompts, and can use source to get options',
      searchKeywords: 'Selector',
      docLink: '/amis/zh-CN/components/form/select',
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Cascade Selector',
    icon: 'fa fa-indent',
    description:
      'Applicable to options with sub-items, options can be pulled through source, multiple selections are supported',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'nested-select',
          label: 'Cascade Selector',
          name: 'nestedSelect',
          onlyChildren: true,
          options: [
            {
              label: 'Option A',
              value: 'A',
            },
            {
              label: 'Option B',
              value: 'B',
              children: [
                {
                  label: 'Option b1',
                  value: 'b1',
                },
                {
                  label: 'Option b2',
                  value: 'b2',
                },
              ],
            },
            {
              label: 'Option C',
              value: 'C',
              children: [
                {
                  label: 'Option c1',
                  value: 'c1',
                },
                {
                  label: 'Option c2',
                  value: 'c2',
                },
              ],
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/nestedselect',
    scaffold: {
      type: 'nested-select',
      label: 'Cascade Selector',
      name: 'nestedSelect',
      onlyChildren: true,
    },
    isBaseComponent: true,
    pluginIcon: 'nested-select-plugin',
    rendererName: 'nested-select',
    id: '27bab45db1a3',
    plugin: {
      rendererName: 'nested-select',
      $schema: '/schemas/NestedSelectControlSchema.json',
      name: 'Cascade Selector',
      isBaseComponent: true,
      icon: 'fa fa-indent',
      pluginIcon: 'nested-select-plugin',
      description:
        'Applicable to options with sub-items, options can be pulled through source, multiple selections are supported',
      docLink: '/amis/zh-CN/components/form/nestedselect',
      panelTitle: 'Cascading Selectors',
      notRenderFormZone: true,
      panelDefinitions: {
        options: {
          label: 'Options',
          name: 'options',
          type: 'combo',
          multiple: true,
          multiLine: true,
          draggable: true,
          addButtonText: 'Add new option',
          scaffold: {
            label: '',
            value: '',
          },
          items: [
            {
              type: 'group',
              body: [
                {
                  type: 'input-text',
                  name: 'label',
                  placeholder: 'Name',
                  required: true,
                },
                {
                  type: 'input-text',
                  name: 'value',
                  placeholder: 'value',
                  unique: true,
                },
              ],
            },
            {
              $ref: 'options',
              label: 'Suboption',
              name: 'children',
              addButtonText: 'Add a new sub-option',
            },
          ],
        },
      },
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the input box gets focus',
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the input box loses focus',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'chained-select',
    icon: 'fa fa-th-list',
    description:
      'Using the <code>source</code> pull option, you can increase the level infinitely as long as there are results returned',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: {
        type: 'chained-select',
        label: 'Chain Drop-down',
        name: 'chainedSelect',
        joinValues: true,
      },
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/chain-select',
    scaffold: {
      type: 'chained-select',
      label: 'Chain Drop-down',
      name: 'chainedSelect',
      joinValues: true,
    },
    isBaseComponent: true,
    pluginIcon: 'chained-select-plugin',
    rendererName: 'chained-select',
    id: '4580a7a7b7c9',
    plugin: {
      rendererName: 'chained-select',
      $schema: '/schemas/ChainedSelectControlSchema.json',
      name: 'chained-select',
      isBaseComponent: true,
      icon: 'fa fa-th-list',
      pluginIcon: 'chained-select-plugin',
      description:
        'Using the <code>source</code> pull option, you can increase the level infinitely as long as there are results returned',
      docLink: '/amis/zh-CN/components/form/chain-select',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'Chain Drop-down',
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Drop-down menu',
    name: 'dropdown-button',
    icon: 'fa fa-chevron-down',
    description: 'Drop-down button, more buttons will be displayed after clicking.',
    previewSchema: {
      type: 'dropdown-button',
      label: 'Drop-down button',
      buttons: [
        {
          type: 'button',
          label: 'Button 1',
        },
        {
          type: 'button',
          label: 'Button 2',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/dropdown-button',
    scaffold: {
      type: 'dropdown-button',
      label: 'Drop-down button',
    },
    isBaseComponent: true,
    pluginIcon: 'dropdown-btn-plugin',
    rendererName: 'dropdown-button',
    id: '3ee65e1bb67b',
    plugin: {
      rendererName: 'dropdown-button',
      $schema: '/schemas/DropdownButtonSchema.json',
      name: 'dropdown-button',
      isBaseComponent: true,
      description: 'Drop-down button, more buttons will be displayed after clicking.',
      searchKeywords: 'Drop-down menu',
      icon: 'fa fa-chevron-down',
      pluginIcon: 'dropdown-btn-plugin',
      docLink: '/amis/zh-CN/components/dropdown-button',
      panelTitle: 'Drop-down button',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'checkboxes',
    icon: 'fa fa-check-square',
    description:
      'Configure multiple checkboxes through <code>options</code>, or pull options through <code>source</code>',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          value: 'A',
          type: 'checkboxes',
          label: 'Checkbox',
          name: 'checkboxes',
          multiple: true,
          options: [
            {
              label: 'Option A',
              value: 'A',
            },
            {
              label: 'Option B',
              value: 'B',
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/checkboxes',
    scaffold: {
      type: 'checkboxes',
      label: 'Checkbox',
      name: 'checkboxes',
      multiple: true,
    },
    isBaseComponent: true,
    pluginIcon: 'checkboxes-plugin',
    rendererName: 'checkboxes',
    id: 'f69d431018fd',
    plugin: {
      rendererName: 'checkboxes',
      $schema: '/schemas/CheckboxesControlSchema.json',
      name: 'checkboxes',
      isBaseComponent: true,
      icon: 'fa fa-check-square',
      pluginIcon: 'checkboxes-plugin',
      description:
        'Configure multiple checkboxes through <code>options</code>, or pull options through <code>source</code>',
      docLink: '/amis/zh-CN/components/form/checkboxes',
      notRenderFormZone: true,
      panelTitle: 'Checkbox',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
        },
        {
          eventName: 'addConfirm',
          eventLabel: 'Confirm Add',
          description: 'Triggered when add is submitted',
        },
        {
          eventName: 'editConfirm',
          eventLabel: 'Confirm Edit',
          description: 'Triggered when edit is submitted',
        },
        {
          eventName: 'deleteConfirm',
          eventLabel: 'Confirm Delete',
          description: 'Triggered when delete is submitted',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Radio Box',
    icon: 'fa fa-dot-circle-o',
    description: 'Configure options through options, pull options through source',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'radios',
          label: 'Radio Box',
          name: 'radios',
          options: [
            {
              label: 'Option A',
              value: 'A',
            },
            {
              label: 'Option B',
              value: 'B',
            },
          ],
          value: 'A',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/radios',
    scaffold: {
      type: 'radios',
      label: 'Radio Box',
      name: 'radios',
    },
    isBaseComponent: true,
    pluginIcon: 'radios-plugin',
    rendererName: 'radios',
    id: '3bb5c3cc97fc',
    plugin: {
      rendererName: 'radios',
      $schema: '/schemas/RadiosControlSchema.json',
      name: 'Radio Box',
      isBaseComponent: true,
      icon: 'fa fa-dot-circle-o',
      pluginIcon: 'radios-plugin',
      description: 'Configure options through options, pull options through source',
      docLink: '/amis/zh-CN/components/form/radios',
      notRenderFormZone: true,
      panelTitle: 'Radio Box',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'checkbox',
    icon: 'fa fa-check-square-o',
    description: 'Checkbox',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: [
        {
          value: true,
          type: 'checkbox',
          option: 'Checkbox',
          name: 'checkbox',
          label: 'Check the form',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/checkbox',
    scaffold: {
      type: 'checkbox',
      option: 'Checkbox',
      name: 'checkbox',
      label: 'Checkbox',
    },
    isBaseComponent: true,
    pluginIcon: 'checkbox-plugin',
    rendererName: 'checkbox',
    id: '269952edb68e',
    plugin: {
      rendererName: 'checkbox',
      $schema: '/schemas/CheckboxControlSchema.json',
      name: 'checkbox',
      isBaseComponent: true,
      icon: 'fa fa-check-square-o',
      pluginIcon: 'checkbox-plugin',
      description: 'Checkbox',
      docLink: '/amis/zh-CN/components/form/checkbox',
      notRenderFormZone: true,
      panelTitle: 'Checkbox',
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected state changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords:
      'date box, input-datetime, date time box, input-time, time box, input-month, month box, input-quarter, quarter box, input-year, year box, year box, year selection',
    name: 'Date',
    icon: 'fa fa-calendar',
    description:
      'Year, month, and day selection, supports relative value settings, such as <code>+2days</code> two days later',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-date',
          label: 'Date',
          name: 'date',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-date',
    scaffold: {
      type: 'input-date',
      label: 'Date',
      name: 'date',
    },
    isBaseComponent: true,
    pluginIcon: 'input-date-plugin',
    rendererName: 'input-date',
    id: '2561313990d1',
    plugin: {
      rendererName: 'input-date',
      $schema: '/schemas/DateControlSchema.json',
      icon: 'fa fa-calendar',
      pluginIcon: 'input-date-plugin',
      name: 'Date',
      isBaseComponent: true,
      searchKeywords:
        'date box, input-datetime, date time box, input-time, time box, input-month, month box, input-quarter, quarter box, input-year, year box, year box, year selection',
      description:
        'Year, month, and day selection, supports relative value settings, such as <code>+2days</code> two days later',
      docLink: '/amis/zh-CN/components/form/input-date',
      notRenderFormZone: true,
      panelTitle: 'Date Configuration',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the time value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the input box gets focus (non-embedded mode)',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the input box loses focus (non-inline mode)',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear the input box content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords:
      'date range box, input-datetime-range, datetime range, input-time-range, time range, input-month-range, month range, input-quarter-range, quarter range, input-year-range, year range, year range',
    name: 'date-range',
    icon: 'fa fa-calendar',
    description:
      'Date range selection, you can set the minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-date-range',
          label: 'Date Range',
          name: 'date-range',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-date-range',
    scaffold: {
      type: 'input-date-range',
      label: 'Date Range',
      name: 'date-range',
    },
    isBaseComponent: true,
    pluginIcon: 'input-date-range-plugin',
    rendererName: 'input-date-range',
    id: 'e1d7f32b6ba1',
    plugin: {
      rendererName: 'input-date-range',
      $schema: '/schemas/DateRangeControlSchema.json',
      icon: 'fa fa-calendar',
      pluginIcon: 'input-date-range-plugin',
      name: 'date-range',
      isBaseComponent: true,
      searchKeywords:
        'date range box, input-datetime-range, datetime range, input-time-range, time range, input-month-range, month range, input-quarter-range, quarter range, input-year-range, year range, year range',
      description:
        'Date range selection, you can set the minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>',
      docLink: '/amis/zh-CN/components/form/input-date-range',
      notRenderFormZone: true,
      panelTitle: 'Date Range',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the time value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current time range',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the input box gets focus (non-embedded mode)',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current time range',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the input box loses focus (non-inline mode)',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current time range',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear the input box content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'File Upload',
    icon: 'fa fa-upload',
    description:
      'You can upload multiple files, and you can configure whether to upload automatically or upload large files in pieces',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: [
        {
          type: 'input-file',
          label: 'File Upload',
          autoUpload: true,
          proxy: true,
          uploadType: 'fileReceptor',
          name: 'file',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-file',
    scaffold: {
      type: 'input-file',
      label: 'File Upload',
      autoUpload: true,
      proxy: true,
      uploadType: 'fileReceptor',
      name: 'file',
    },
    isBaseComponent: true,
    pluginIcon: 'input-file-plugin',
    rendererName: 'input-file',
    id: 'e1ae8b1e697c',
    plugin: {
      rendererName: 'input-file',
      $schema: '/schemas/FileControlSchema.json',
      name: 'File Upload',
      isBaseComponent: true,
      icon: 'fa fa-upload',
      pluginIcon: 'input-file-plugin',
      description:
        'You can upload multiple files, and you can configure whether to upload automatically or upload large files in pieces',
      docLink: '/amis/zh-CN/components/form/input-file',
      notRenderFormZone: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the uploaded file value changes (also triggered when upload fails)',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    file: {
                      type: 'object',
                      title: 'Uploaded file',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'remove',
          eventLabel: 'Remove file',
          description: 'Triggered when a file is removed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Removed Files',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'success',
          eventLabel: 'Upload successful',
          description: 'Triggered when a file is uploaded successfully',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Uploaded file',
                    },
                    result: {
                      type: 'object',
                      title: 'Response data returned after a successful remote upload request',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'fail',
          eventLabel: 'Upload failed',
          description: 'Triggered when file upload fails',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Uploaded file',
                    },
                    error: {
                      type: 'object',
                      title: 'Error message returned after a remote upload request fails',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear data',
          description: 'Clear selected files',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Image Upload',
    icon: 'fa fa-crop',
    description:
      'You can crop pictures, limit the width, height and size of pictures, support automatic uploading and uploading multiple pictures',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-image',
          label: 'Image upload',
          name: 'image',
          autoUpload: true,
          proxy: true,
          uploadType: 'fileReceptor',
          imageClassName: 'r w-full',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-image',
    scaffold: {
      type: 'input-image',
      label: 'Image upload',
      name: 'image',
      autoUpload: true,
      proxy: true,
      uploadType: 'fileReceptor',
      imageClassName: 'r w-full',
    },
    isBaseComponent: true,
    pluginIcon: 'input-image-plugin',
    rendererName: 'input-image',
    id: '10833874e233',
    plugin: {
      rendererName: 'input-image',
      $schema: '/schemas/ImageControlSchema.json',
      name: 'Image upload',
      isBaseComponent: true,
      description:
        'You can crop pictures, limit the width, height and size of pictures, support automatic uploading and uploading multiple pictures',
      docLink: '/amis/zh-CN/components/form/input-image',
      icon: 'fa fa-crop',
      pluginIcon: 'input-image-plugin',
      notRenderFormZone: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the uploaded file value changes (also triggered when upload fails)',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    file: {
                      type: 'object',
                      title: 'Uploaded file',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'remove',
          eventLabel: 'Remove file',
          description: 'Triggered when a file is removed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Removed Files',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'success',
          eventLabel: 'Upload successful',
          description: 'Triggered when a file is uploaded successfully',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Uploaded file',
                    },
                    result: {
                      type: 'object',
                      title: 'Response data returned after a successful remote upload request',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'fail',
          eventLabel: 'Upload failed',
          description: 'Triggered when file upload fails',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Uploaded file',
                    },
                    error: {
                      type: 'object',
                      title: 'Error message returned after a remote upload request fails',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear data',
          description: 'Clear selected files',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Upload Excel',
    icon: 'fa fa-eyedropper',
    description: 'Automatically parse Excel',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-excel',
          label: 'Excel',
          name: 'excel',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-excel',
    scaffold: {
      type: 'input-excel',
      label: 'Excel',
      name: 'excel',
    },
    isBaseComponent: true,
    pluginIcon: 'input-excel-plugin',
    rendererName: 'input-excel',
    id: 'f5c6be20740b',
    plugin: {
      rendererName: 'input-excel',
      $schema: '/schemas/ExcelControlSchema.json',
      name: 'Upload Excel',
      isBaseComponent: true,
      icon: 'fa fa-eyedropper',
      pluginIcon: 'input-excel-plugin',
      description: 'Automatically parse Excel',
      docLink: '/amis/zh-CN/components/form/input-excel',
      panelTitle: 'Upload Excel',
      panelJustify: true,
      notRenderFormZone: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered after excel upload parsing is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Data after Excel parsing',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'tree, tree drop-down, tree drop-down box, tree-select, tree selection box, tree selector',
    name: 'Tree component',
    icon: 'fa fa-list-alt',
    description: 'Tree structure selection, supports appearance switching between [embedded mode] and [floating mode]',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-tree',
          label: 'Tree Component - Inline Mode',
          name: 'tree',
          options: [
            {
              label: 'Option A',
              value: 'A',
              children: [
                {
                  label: 'Option C',
                  value: 'C',
                },
                {
                  label: 'Option D',
                  value: 'D',
                },
              ],
            },
            {
              label: 'Option B',
              value: 'B',
            },
          ],
          mode: 'normal',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-tree',
    scaffold: {
      type: 'input-tree',
      label: 'Tree component',
      name: 'tree',
    },
    isBaseComponent: true,
    pluginIcon: 'input-tree-plugin',
    rendererName: 'input-tree',
    id: 'ffba5b2447b1',
    plugin: {
      rendererName: 'input-tree',
      $schema: '/schemas/TreeControlSchema.json',
      name: 'Tree component',
      isBaseComponent: true,
      icon: 'fa fa-list-alt',
      pluginIcon: 'input-tree-plugin',
      description:
        'Tree structure selection, supports appearance switching between [embedded mode] and [floating mode]',
      searchKeywords: 'tree, tree drop-down, tree drop-down box, tree-select, tree selection box, tree selector',
      docLink: '/amis/zh-CN/components/form/input-tree',
      notRenderFormZone: true,
      panelTitle: 'Tree Selection',
      actions: [
        {
          actionType: 'expand',
          actionLabel: 'Expand',
          description: 'Expand the specified level',
          innerArgs: ['openLevel'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'ae-formulaControl',
                variableMode: 'tree',
                name: 'openLevel',
                label: 'Expand Level',
                variables: '${variables}',
                size: 'lg',
                mode: 'horizontal',
              },
            ],
          },
        },
        {
          actionType: 'collapse',
          actionLabel: 'Collapse',
          description: 'Collapse tree node',
        },
        {
          actionType: 'add',
          actionLabel: 'Add',
          description: 'New data item',
          innerArgs: ['item', 'parentValue'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'container',
                body: [
                  {
                    type: 'input-kv',
                    label: 'Data Item',
                    name: 'item',
                    mode: 'horizontal',
                    inputClassName: 'ml-2',
                    size: 'lg',
                    required: true,
                    draggable: false,
                    valueType: 'ae-formulaControl',
                    keyPlaceholder: 'Option中Properties的Key',
                    value: {
                      label: '',
                      value: '',
                    },
                  },
                  {
                    type: 'ae-formulaControl',
                    variableMode: 'tree',
                    label: 'The value of the parent data item',
                    name: 'parentValue',
                    mode: 'horizontal',
                    inputClassName: 'ml-2',
                    size: 'lg',
                    variables: '${variables}',
                    inputMode: 'input-group',
                    placeholder: 'Please enter the value of the parent data item valueField',
                  },
                ],
              },
            ],
          },
        },
        {
          actionType: 'edit',
          actionLabel: 'Edit',
          description: 'Edit data item',
          innerArgs: ['item', 'originValue'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'container',
                body: [
                  {
                    type: 'input-kv',
                    label: 'Data Item',
                    name: 'item',
                    mode: 'horizontal',
                    inputClassName: 'ml-2',
                    size: 'lg',
                    required: true,
                    draggable: false,
                    valueType: 'ae-formulaControl',
                    keyPlaceholder: 'Option中Properties的Key',
                    value: {
                      label: '',
                      value: '',
                    },
                  },
                  {
                    type: 'ae-formulaControl',
                    variableMode: 'tree',
                    label: 'Value of the data edit item',
                    name: 'originValue',
                    mode: 'horizontal',
                    inputClassName: 'ml-2',
                    required: true,
                    size: 'lg',
                    variables: '${variables}',
                    inputMode: 'input-group',
                    placeholder: 'Please enter the value of valueField before editing the data item',
                  },
                ],
              },
            ],
          },
        },
        {
          actionType: 'delete',
          actionLabel: 'Delete',
          description: 'Delete data item',
          innerArgs: ['value'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'ae-formulaControl',
                variableMode: 'tree',
                label: 'Value of the data deletion item',
                name: 'value',
                mode: 'horizontal',
                inputClassName: 'ml-2',
                required: true,
                size: 'lg',
                variables: '${variables}',
                inputMode: 'input-group',
                placeholder: 'Please enter the value of the deleted item valueField',
              },
            ],
          },
        },
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear data',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset data',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelDefinitions: {
        options: {
          label: 'Options',
          name: 'options',
          type: 'combo',
          multiple: true,
          multiLine: true,
          draggable: true,
          addButtonText: 'Add new option',
          scaffold: {
            label: '',
            value: '',
          },
          items: [
            {
              type: 'group',
              body: [
                null,
                {
                  type: 'input-text',
                  name: 'value',
                  placeholder: 'value',
                  unique: true,
                },
              ],
            },
            {
              $ref: 'options',
              label: 'Suboption',
              name: 'children',
              addButtonText: 'Add a new sub-option',
            },
          ],
        },
      },
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Tag Selector',
    name: 'Tag Selection',
    icon: 'fa fa-tag',
    description: 'Configuring options can realize selection options',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: {
        type: 'input-tag',
        label: 'Label',
        name: 'tag',
        options: [
          {
            label: 'red',
            value: 'red',
          },
          {
            label: 'Green',
            value: 'green',
          },
          {
            label: 'Blue',
            value: 'blue',
          },
        ],
        value: 'red',
      },
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-tag',
    scaffold: {
      type: 'input-tag',
      label: 'Label',
      name: 'tag',
    },
    isBaseComponent: true,
    pluginIcon: 'input-tag-plugin',
    rendererName: 'input-tag',
    id: '9fc313c6540a',
    plugin: {
      rendererName: 'input-tag',
      $schema: '/schemas/TagControlSchema.json',
      name: 'Tag Selection',
      isBaseComponent: true,
      icon: 'fa fa-tag',
      pluginIcon: 'input-tag-plugin',
      description: 'Configuring options can realize selection options',
      searchKeywords: 'Tag selector',
      docLink: '/amis/zh-CN/components/form/input-tag',
      notRenderFormZone: true,
      panelTitle: 'Labels',
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Selected value changes',
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Get focus',
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Lost focus',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset to default values',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'List Selection',
    icon: 'fa fa-ellipsis-h',
    description:
      'Single or multiple selection, supports source pull options, options can be configured with images, and can also customize HTML configuration',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'list-select',
          label: 'List',
          name: 'list',
          options: [
            {
              label: 'Option A',
              value: 'A',
            },
            {
              label: 'Option B',
              value: 'B',
            },
          ],
          value: 'A',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/list-select',
    scaffold: {
      type: 'list-select',
      label: 'List',
      name: 'list',
    },
    isBaseComponent: true,
    pluginIcon: 'list-select-plugin',
    rendererName: 'list-select',
    id: 'add6a4e3f3da',
    plugin: {
      rendererName: 'list-select',
      $schema: '/schemas/ListControlSchema.json',
      name: 'List Selection',
      isBaseComponent: true,
      icon: 'fa fa-ellipsis-h',
      pluginIcon: 'list-select-plugin',
      description:
        'Single or multiple selection, supports source pull options, options can be configured with images, and can also customize HTML configuration',
      docLink: '/amis/zh-CN/components/form/list-select',
      notRenderFormZone: true,
      panelTitle: 'List Selection',
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'button-group',
    icon: 'fa fa-object-group',
    description:
      'Used to display multiple buttons, which will be presented as a whole visually, and can also be used as a form item option selector.',
    previewSchema: {
      type: 'form',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: {
        type: 'button-group-select',
        name: 'buttonGroupSelect',
        label: 'Button click',
        inline: false,
        options: [
          {
            label: 'Option 1',
            value: 'a',
          },
          {
            label: 'Option 2',
            value: 'b',
          },
        ],
        value: 'a',
        description: 'Button click can be used as an option.',
      },
    },
    tags: ['Form item'],
    docLink: '/amis/zh-CN/components/button-group',
    scaffold: {
      type: 'button-group-select',
      name: 'buttonGroupSelect',
      label: 'Button selection',
      inline: false,
    },
    isBaseComponent: true,
    pluginIcon: 'btn-select-plugin',
    rendererName: 'button-group-select',
    id: 'beb84c93ba7f',
    plugin: {
      rendererName: 'button-group-select',
      $schema: '/schemas/ButtonGroupControlSchema.json',
      name: 'button-group',
      isBaseComponent: true,
      icon: 'fa fa-object-group',
      pluginIcon: 'btn-select-plugin',
      description:
        'Used to display multiple buttons, which will be presented as a whole visually, and can also be used as a form item option selector.',
      docLink: '/amis/zh-CN/components/button-group',
      notRenderFormZone: true,
      panelTitle: 'Button click',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value change',
          description: 'Triggered when the selected value changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'button-toolbar',
    icon: 'fa fa-ellipsis-h',
    description:
      'Can be used to place multiple buttons or button groups, there will be a certain interval between buttons',
    previewSchema: {
      type: 'form',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: {
        type: 'button-toolbar',
        label: 'Button Toolbar',
        buttons: [
          {
            type: 'button',
            label: 'Button 1',
          },
          {
            type: 'button',
            label: 'Button 2',
          },
        ],
      },
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/button-toolbar',
    scaffold: {
      type: 'button-toolbar',
      label: 'Button Toolbar',
    },
    isBaseComponent: true,
    pluginIcon: 'btn-toolbar-plugin',
    rendererName: 'button-toolbar',
    id: '168e0f94ef88',
    plugin: {
      rendererName: 'button-toolbar',
      $schema: '/schemas/ButtonToolbarControlSchema.json',
      name: 'button-toolbar',
      isBaseComponent: true,
      icon: 'fa fa-ellipsis-h',
      pluginIcon: 'btn-toolbar-plugin',
      description:
        'Can be used to place multiple buttons or button groups, there will be a certain interval between buttons',
      docLink: '/amis/zh-CN/components/form/button-toolbar',
      regions: [
        {
          key: 'buttons',
          label: 'Button Collection',
          preferTag: 'button',
          renderMethod: 'renderButtons',
        },
      ],
      notRenderFormZone: true,
      panelTitle: 'Toolbar',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'List Selector',
    name: 'List Selection',
    icon: 'fa fa-window-restore',
    description:
      'Configure the available data sources through pickerSchema to select the required data, supporting multiple selections',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'picker',
          label: 'List Selection',
          name: 'picker',
          options: [
            {
              label: 'Option A',
              value: 'A',
            },
            {
              label: 'Option B',
              value: 'B',
            },
          ],
          overflowConfig: {
            maxTagCount: -1,
          },
          modalClassName: 'app-popover :AMISCSSWrapper',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/picker',
    scaffold: {
      type: 'picker',
      label: 'List Selection',
      name: 'picker',
      modalClassName: 'app-popover :AMISCSSWrapper',
    },
    isBaseComponent: true,
    pluginIcon: 'picker-plugin',
    rendererName: 'picker',
    id: '929b0628e4c3',
    plugin: {
      rendererName: 'picker',
      $schema: '/schemas/PickerControlSchema.json',
      name: 'List Selection',
      isBaseComponent: true,
      icon: 'fa fa-window-restore',
      pluginIcon: 'picker-plugin',
      description:
        'Configure the available data sources through pickerSchema to select the required data, supporting multiple selections',
      searchKeywords: 'List Selector',
      docLink: '/amis/zh-CN/components/form/picker',
      notRenderFormZone: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected state changes',
        },
        {
          eventName: 'itemClick',
          eventLabel: 'Click option',
          description: 'Triggered when an option is clicked',
        },
      ],
      panelJustify: true,
      panelTitle: 'List Selection',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Switch',
    icon: 'fa fa-toggle-on',
    description: 'Switch control',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'switch',
          label: 'Switch form',
          option: 'Description',
          name: 'switch',
          falseValue: false,
          trueValue: true,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/switch',
    scaffold: {
      type: 'switch',
      label: 'Switch',
      option: 'Description',
      name: 'switch',
      falseValue: false,
      trueValue: true,
    },
    isBaseComponent: true,
    pluginIcon: 'switch-plugin',
    rendererName: 'switch',
    id: '9a9599a9c062',
    plugin: {
      rendererName: 'switch',
      $schema: '/schemas/SwitchControlSchema.json',
      name: 'Switch',
      isBaseComponent: true,
      icon: 'fa fa-toggle-on',
      pluginIcon: 'switch-plugin',
      description: 'Switch control',
      docLink: '/amis/zh-CN/components/form/switch',
      notRenderFormZone: true,
      panelTitle: 'Switch',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the switch value changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Slider',
    icon: 'fa fa-sliders',
    description: 'Select a value or a range',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-range',
          label: 'Slider',
          name: 'range',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-range',
    scaffold: {
      type: 'input-range',
      label: 'Slider',
      name: 'range',
    },
    isBaseComponent: true,
    pluginIcon: 'input-range-plugin',
    rendererName: 'input-range',
    id: 'b0e8753646f8',
    plugin: {
      rendererName: 'input-range',
      $schema: '/schemas/RangeControlSchema.json',
      name: 'Slider',
      isBaseComponent: true,
      icon: 'fa fa-sliders',
      pluginIcon: 'input-range-plugin',
      description: 'Select a value or a range',
      docLink: '/amis/zh-CN/components/form/input-range',
      notRenderFormZone: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the slider value changes',
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'When showInput is set to true, it is triggered when the input box gets the focus.',
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'When showInput is set to true, it is triggered when the input box loses focus.',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear input box',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'Slider',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Rating',
    icon: 'fa fa-star-o',
    description: 'Supports read-only and half-star selection',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-rating',
          label: 'Rating',
          name: 'rating',
          value: 3,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-rating',
    scaffold: {
      type: 'input-rating',
      label: 'Rating',
      name: 'rating',
    },
    isBaseComponent: true,
    pluginIcon: 'input-rating-plugin',
    rendererName: 'input-rating',
    id: '42594bf505a5',
    plugin: {
      rendererName: 'input-rating',
      $schema: '/schemas/RatingControlSchema.json',
      name: 'Rating',
      isBaseComponent: true,
      icon: 'fa fa-star-o',
      pluginIcon: 'input-rating-plugin',
      description: 'Supports read-only and half-star selection',
      docLink: '/amis/zh-CN/components/form/input-rating',
      notRenderFormZone: true,
      panelTitle: 'Rating',
      count: 5,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the rating value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'number',
                      title: 'Current score',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear rating value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'City Selector',
    name: 'input-city',
    icon: 'fa fa-building-o',
    description: 'You can configure whether to select region or city',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: [
        {
          type: 'input-city',
          label: 'City Selection',
          name: 'city',
          allowCity: true,
          allowDistrict: true,
          extractValue: true,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-city',
    scaffold: {
      type: 'input-city',
      label: 'City Selection',
      name: 'city',
      allowCity: true,
      allowDistrict: true,
      extractValue: true,
    },
    isBaseComponent: true,
    pluginIcon: 'input-city-plugin',
    rendererName: 'input-city',
    id: 'a39e776b1808',
    plugin: {
      rendererName: 'input-city',
      $schema: '/schemas/CityControlSchema.json',
      name: 'input-city',
      isBaseComponent: true,
      icon: 'fa fa-building-o',
      pluginIcon: 'input-city-plugin',
      description: 'You can configure whether to select region or city',
      searchKeywords: 'City Selector',
      docLink: '/amis/zh-CN/components/form/input-city',
      notRenderFormZone: true,
      panelTitle: 'City Selection',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Selected value changes',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset to default values',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Shuttle',
    icon: 'fa fa-th-list',
    description: 'Shuttle assembly',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          label: 'Group',
          type: 'transfer',
          name: 'transfer',
          options: [
            {
              label: 'Zhuge Liang',
              value: 'zhugeliang',
            },
            {
              label: 'Cao Cao',
              value: 'caocao',
            },
          ],
          selectMode: 'list',
          resultListModeFollowSelect: false,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/transfer',
    scaffold: {
      label: 'Group',
      type: 'transfer',
      name: 'transfer',
      selectMode: 'list',
      resultListModeFollowSelect: false,
    },
    isBaseComponent: true,
    pluginIcon: 'transfer-plugin',
    rendererName: 'transfer',
    id: '2cedc28c7642',
    plugin: {
      rendererName: 'transfer',
      $schema: '/schemas/TransferControlSchema.json',
      name: 'Shuttle',
      isBaseComponent: true,
      icon: 'fa fa-th-list',
      pluginIcon: 'transfer-plugin',
      description: 'Shuttle assembly',
      docLink: '/amis/zh-CN/components/form/transfer',
      panelTitle: 'Shuttle',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the input box loses focus',
        },
        {
          eventName: 'selectAll',
          eventLabel: 'Select All',
          description: 'Check all options',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset selected content',
        },
        {
          actionType: 'selectAll',
          actionLabel: 'Select All',
          description: 'Check all options',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update, multiple values are separated by ',
        },
      ],
      panelDefinitions: {
        options: {
          label: 'Options',
          name: 'options',
          type: 'combo',
          multiple: true,
          multiLine: true,
          draggable: true,
          addButtonText: 'Add new option',
          scaffold: {
            label: '',
            value: '',
          },
          items: [
            {
              type: 'group',
              body: [
                null,
                {
                  type: 'input-text',
                  name: 'value',
                  placeholder: 'value',
                  unique: true,
                },
              ],
            },
            {
              $ref: 'options',
              label: 'Suboption',
              name: 'children',
              addButtonText: 'Add a new sub-option',
            },
          ],
        },
      },
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Shuttle Selector',
    icon: 'fa fa-th-list',
    description: 'Shuttle selector component',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          label: 'Group',
          type: 'transfer-picker',
          name: 'transfer-picker',
          options: [
            {
              label: 'Zhuge Liang',
              value: 'zhugeliang',
            },
            {
              label: 'Cao Cao',
              value: 'caocao',
            },
          ],
          selectMode: 'list',
          resultListModeFollowSelect: false,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/transfer-picker',
    scaffold: {
      label: 'Group',
      type: 'transfer-picker',
      name: 'transfer-picker',
      selectMode: 'list',
      resultListModeFollowSelect: false,
    },
    isBaseComponent: true,
    pluginIcon: 'transfer-plugin',
    rendererName: 'transfer-picker',
    id: '1536f61bb1a7',
    plugin: {
      rendererName: 'transfer-picker',
      $schema: '/schemas/TransferPickerControlSchema.json',
      name: 'Shuttle Selector',
      isBaseComponent: true,
      icon: 'fa fa-th-list',
      pluginIcon: 'transfer-plugin',
      description: 'Shuttle selector component',
      docLink: '/amis/zh-CN/components/form/transfer-picker',
      panelTitle: 'Shuttle',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the input box loses focus',
        },
        {
          eventName: 'selectAll',
          eventLabel: 'Select All',
          description: 'Check all options',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset selected content',
        },
        {
          actionType: 'selectAll',
          actionLabel: 'Select All',
          description: 'Check all options',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update, multiple values are separated by ',
        },
      ],
      panelDefinitions: {
        options: {
          label: 'Options',
          name: 'options',
          type: 'combo',
          multiple: true,
          multiLine: true,
          draggable: true,
          addButtonText: 'Add new option',
          scaffold: {
            label: '',
            value: '',
          },
          items: [
            {
              type: 'group',
              body: [
                null,
                {
                  type: 'input-text',
                  name: 'value',
                  placeholder: 'value',
                  unique: true,
                },
              ],
            },
            {
              $ref: 'options',
              label: 'Suboption',
              name: 'children',
              addButtonText: 'Add a new sub-option',
            },
          ],
        },
      },
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Combined Shuttle',
    icon: 'fa fa-th-list',
    description: 'Combined shuttle assembly',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          label: 'Combined Shuttle',
          type: 'tabs-transfer',
          name: 'tabsTransfer',
          selectMode: 'tree',
          options: [
            {
              label: 'Member',
              children: [
                {
                  label: 'Mage',
                  value: 'fashi',
                  children: [
                    {
                      label: 'Zhuge Liang',
                      value: 'zhugeliang',
                    },
                  ],
                },
                {
                  label: 'Warrior',
                  value: 'zhanshi',
                  children: [
                    {
                      label: 'Cao Cao',
                      value: 'caocao',
                    },
                    {
                      label: 'Zhong Wuyan',
                      value: 'zhongwuyan',
                    },
                  ],
                },
                {
                  label: 'Jungler',
                  value: 'daye',
                  children: [
                    {
                      label: 'Li Bai',
                      value: 'libai',
                    },
                    {
                      label: 'Han Xin',
                      value: 'hanxin',
                    },
                    {
                      label: 'Mr. Yunzhong',
                      value: 'yunzhongjun',
                    },
                  ],
                },
              ],
            },
            {
              label: 'User',
              children: [
                {
                  label: 'Mage',
                  value: 'fashi2',
                  children: [
                    {
                      label: 'Zhuge Liang',
                      value: 'zhugeliang2',
                    },
                  ],
                },
                {
                  label: 'Warrior',
                  value: 'zhanshi2',
                  children: [
                    {
                      label: 'Cao Cao',
                      value: 'caocao2',
                    },
                    {
                      label: 'Zhong Wuyan',
                      value: 'zhongwuyan2',
                    },
                  ],
                },
                {
                  label: 'Jungler',
                  value: 'daye2',
                  children: [
                    {
                      label: 'Li Bai',
                      value: 'libai2',
                    },
                    {
                      label: 'Han Xin',
                      value: 'hanxin2',
                    },
                    {
                      label: 'Mr. Yunzhong',
                      value: 'yunzhongjun2',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/transfer',
    scaffold: {
      label: 'Combined Shuttle',
      type: 'tabs-transfer',
      name: 'tabsTransfer',
      selectMode: 'tree',
    },
    isBaseComponent: true,
    pluginIcon: 'tabs-transfer-plugin',
    rendererName: 'tabs-transfer',
    id: 'ea63d7e4217d',
    plugin: {
      rendererName: 'tabs-transfer',
      $schema: '/schemas/TransferControlSchema.json',
      name: 'Combined Shuttle',
      isBaseComponent: true,
      icon: 'fa fa-th-list',
      pluginIcon: 'tabs-transfer-plugin',
      description: 'Combined shuttle assembly',
      docLink: '/amis/zh-CN/components/form/transfer',
      panelTitle: 'Combined Shuttle',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
        },
        {
          eventName: 'tab-change',
          eventLabel: 'Tab Switch',
          description: 'Triggered when tab is switched',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    key: {
                      type: 'string',
                      title: 'Activated Index',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected content',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset selected content',
        },
        {
          actionType: 'changeTabKey',
          actionLabel: 'Modify selected tab',
          description: 'Modify the currently selected tab to select other options',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      notRenderFormZone: true,
      panelJustify: true,
      panelDefinitions: {
        options: {
          label: 'Options',
          name: 'options',
          type: 'combo',
          multiple: true,
          multiLine: true,
          draggable: true,
          mode: 'normal',
          addButtonText: 'Add new option',
          scaffold: {
            label: '',
            value: '',
          },
          items: [
            {
              type: 'group',
              body: [
                {
                  label: false,
                  name: 'label',
                  type: 'input-text',
                  placeholder: 'Name',
                  required: true,
                },
                {
                  type: 'input-text',
                  name: 'value',
                  placeholder: 'value',
                  unique: true,
                },
              ],
            },
            {
              $ref: 'options',
              label: 'Suboption',
              name: 'children',
              addButtonText: 'Add a new sub-option',
            },
          ],
        },
      },
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'color picker',
    name: 'Color Box',
    icon: 'fa fa-eyedropper',
    description: 'Support <code>hex, hexa, hls, rgb, rgba</code> formats, default is <code>hex</code> format',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-color',
          label: 'Color',
          name: 'color',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-color',
    scaffold: {
      type: 'input-color',
      label: 'Color',
      name: 'color',
    },
    isBaseComponent: true,
    pluginIcon: 'input-color-plugin',
    rendererName: 'input-color',
    id: 'f3c62e064163',
    plugin: {
      rendererName: 'input-color',
      $schema: '/schemas/ColorControlSchema.json',
      name: 'Color Box',
      isBaseComponent: true,
      icon: 'fa fa-eyedropper',
      pluginIcon: 'input-color-plugin',
      description: 'Support <code>hex, hexa, hls, rgb, rgba</code> formats, default is <code>hex</code> format',
      searchKeywords: 'color picker',
      docLink: '/amis/zh-CN/components/form/input-color',
      panelTitle: 'Color Box',
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'condition-builder',
    icon: 'fa fa-group',
    pluginIcon: 'condition-builder-plugin',
    description:
      'Used to set complex combination conditions, support adding conditions, adding groups, setting combination methods, dragging and dropping sorting, etc.',
    previewSchema: {
      type: 'form',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'condition-builder',
          label: 'Conditional Component',
          name: 'conditions',
          description:
            'Suitable for users to spell out query conditions themselves, and then the backend generates query where based on the data',
          fields: [
            {
              label: 'Text',
              type: 'text',
              name: 'text',
            },
            {
              label: 'Number',
              type: 'number',
              name: 'number',
            },
            {
              label: 'Boolean',
              type: 'boolean',
              name: 'boolean',
            },
            {
              label: 'Options',
              type: 'select',
              name: 'select',
              options: [
                {
                  label: 'A',
                  value: 'a',
                },
                {
                  label: 'B',
                  value: 'b',
                },
                {
                  label: 'C',
                  value: 'c',
                },
                {
                  label: 'D',
                  value: 'd',
                },
                {
                  label: 'E',
                  value: 'e',
                },
              ],
            },
            {
              label: 'Date',
              type: 'date',
              name: 'date',
            },
            {
              label: 'Time',
              type: 'time',
              name: 'time',
            },
            {
              label: 'Date Time',
              type: 'datetime',
              name: 'datetime',
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/condition-builder',
    scaffoldForm: {
      title: 'Quick Start - Condition Combination',
      body: [
        {
          type: 'combo',
          name: 'fields',
          multiple: true,
          draggable: true,
          multiLine: true,
          items: [
            {
              type: 'group',
              body: [
                {
                  type: 'select',
                  name: 'type',
                  placeholder: '条件level',
                  options: [
                    {
                      label: 'Text',
                      value: 'text',
                    },
                    {
                      label: 'Number',
                      value: 'number',
                    },
                    {
                      label: 'Boolean',
                      value: 'boolean',
                    },
                    {
                      label: 'Date',
                      value: 'date',
                    },
                    {
                      label: 'Date Time',
                      value: 'datetime',
                    },
                    {
                      label: 'Time',
                      value: 'time',
                    },
                    {
                      label: 'Options',
                      value: 'select',
                    },
                  ],
                },
                {
                  type: 'input-text',
                  name: 'name',
                  placeholder: 'field name',
                },
                {
                  type: 'input-text',
                  placeholder: 'Field name',
                  name: 'label',
                },
              ],
            },
            {
              type: 'group',
              visibleOn: 'this.type === "number"',
              body: [
                {
                  type: 'input-number',
                  name: 'minimum',
                  placeholder: 'minimum value',
                },
                {
                  type: 'input-number',
                  name: 'maximum',
                  placeholder: 'maximum value',
                },
                {
                  type: 'input-number',
                  name: 'step',
                  min: 0,
                  placeholder: 'step length',
                },
              ],
            },
            {
              type: 'group',
              visibleOn: '!!~["date", "datetime", "time"].indexOf(this.type)',
              body: [
                {
                  type: 'input-text',
                  name: 'format',
                  placeholder: 'value format',
                },
                {
                  type: 'input-text',
                  name: 'inputFormat',
                  placeholder: 'Date display format',
                },
                {
                  type: 'input-text',
                  name: 'timeFormat',
                  placeholder: 'Time display format',
                  visibleOn: 'this.type === "datetime"',
                },
              ],
            },
            {
              type: 'group',
              visibleOn: 'this.type === "select"',
              body: [
                {
                  type: 'input-text',
                  name: 'source',
                  placeholder: 'Field options are pulled remotely, supporting interfaces or data mappings',
                },
              ],
            },
            {
              type: 'group',
              body: [
                {
                  type: 'input-text',
                  placeholder: 'placeholder',
                  name: 'placeholder',
                },
                {
                  name: 'operators',
                  placeholder: 'Operator',
                  asFormItem: true,
                },
              ],
            },
          ],
        },
      ],
      canRebuild: true,
    },
    isBaseComponent: true,
    rendererName: 'condition-builder',
    id: '5aa1ddda7827',
    plugin: {
      rendererName: 'condition-builder',
      $schema: '/schemas/ConditionBuilderControlSchema.json',
      name: 'condition-builder',
      isBaseComponent: true,
      icon: 'fa fa-group',
      pluginIcon: 'condition-builder-plugin',
      description:
        'Used to set complex combination conditions, support adding conditions, adding groups, setting combination methods, dragging and dropping sorting, etc.',
      docLink: '/amis/zh-CN/components/form/condition-builder',
      panelTitle: 'Conditional Components',
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Form item collection',
    name: 'fieldset',
    icon: 'fa fa-toggle-down',
    description: 'A combination of multiple form items, configurable whether to collapse',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'fieldset',
          title: 'Title',
          collapsable: true,
          body: [
            {
              type: 'input-text',
              label: 'Text 1',
              name: 'text',
            },
            {
              type: 'input-text',
              label: 'Text 2',
              name: 'text',
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/fieldset',
    scaffold: {
      type: 'fieldset',
      title: 'Title',
      collapsable: true,
    },
    isBaseComponent: true,
    rendererName: 'fieldset',
    id: 'cc031167d875',
    plugin: {
      rendererName: 'fieldset',
      $schema: '/schemas/FieldSetControlSchema.json',
      name: 'fieldset',
      isBaseComponent: true,
      icon: 'fa fa-toggle-down',
      description: 'A combination of multiple form items, configurable whether to collapse',
      searchKeywords: 'Form item collection',
      docLink: '/amis/zh-CN/components/form/fieldset',
      regions: [
        {
          key: 'body',
          label: 'Subform Item',
          renderMethod: 'renderBody',
          insertPosition: 'inner',
          preferTag: 'Form item',
        },
      ],
      panelTitle: 'Field Set',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'combo',
    icon: 'fa fa-group',
    description:
      'A combination of multiple form items, you can configure whether to add and delete the initial setting template',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'combo',
          label: 'Combined Input',
          name: 'combo',
          multiple: true,
          addable: true,
          removable: true,
          removableMode: 'icon',
          addBtn: {
            label: 'New',
            icon: 'fa fa-plus',
            level: 'primary',
            size: 'sm',
          },
          items: [
            {
              type: 'input-text',
              name: 'text',
              placeholder: 'text',
            },
            {
              type: 'select',
              name: 'select',
              placeholder: 'option',
              options: [
                {
                  label: 'A',
                  value: 'a',
                },
                {
                  label: 'B',
                  value: 'b',
                },
              ],
            },
          ],
          value: [
            {
              text: 'Row 1',
              select: 'a',
            },
            {},
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/combo',
    scaffold: {
      type: 'combo',
      label: 'Combined Input',
      name: 'combo',
      multiple: true,
      addable: true,
      removable: true,
      removableMode: 'icon',
    },
    isBaseComponent: true,
    pluginIcon: 'combo-plugin',
    rendererName: 'combo',
    id: '1ae3b2b1ca2d',
    plugin: {
      rendererName: 'combo',
      $schema: '/schemas/ComboControlSchema.json',
      name: 'combo',
      isBaseComponent: true,
      icon: 'fa fa-group',
      pluginIcon: 'combo-plugin',
      description:
        'A combination of multiple form items, you can configure whether to add and delete the initial setting template',
      docLink: '/amis/zh-CN/components/form/combo',
      regions: [
        {
          key: 'items',
          label: 'Content Area',
          preferTag: 'Content Area',
          renderMethod: 'renderItems',
        },
      ],
      events: [
        {
          eventName: 'add',
          eventLabel: 'Add',
          description: 'Triggered when adding a combination item',
        },
        {
          eventName: 'delete',
          eventLabel: 'Delete',
          description: 'Delete combination item',
        },
        {
          eventName: 'dragEnd',
          eventLabel: 'Drag ends',
          description: 'Triggered when the drag of the combination item ends and the position changes',
        },
        {
          eventName: 'tabsChange',
          eventLabel: 'Switch tab',
          description: 'When tabsMode is set to true, it is triggered when switching tabs.',
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'addItem',
          actionLabel: 'Add item',
          description: 'Add new item',
          innerArgs: ['item'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'combo',
                label: 'Add Item',
                name: 'item',
                draggable: false,
                multiple: true,
                removable: true,
                required: true,
                addable: true,
                strictMode: false,
                canAccessSuperData: true,
                mode: 'horizontal',
                items: [
                  {
                    name: 'key',
                    type: 'input-text',
                    required: true,
                    placeholder: 'variable name',
                    source: '${__setValueDs}',
                  },
                  {
                    type: 'ae-formulaControl',
                    variableMode: 'tree',
                    name: 'val',
                    variables: '${variables}',
                    inputMode: 'input-group',
                  },
                ],
              },
            ],
          },
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'Combined Input',
      notRenderFormZone: true,
      panelJustify: true,
      dsManager: {
        builders: {},
      },
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Input box combination',
    name: 'Input combination',
    icon: 'fa fa-object-group',
    description: 'Input combination, supports multiple levels of control combinations',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-group',
          name: 'input-group',
          label: 'input combination',
          body: [
            {
              type: 'input-text',
              inputClassName: 'b-r-none p-r-none',
              name: 'input-group',
            },
            {
              type: 'submit',
              label: 'Submit',
              level: 'primary',
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-group',
    scaffold: {
      type: 'input-group',
      name: 'input-group',
      label: 'input combination',
    },
    isBaseComponent: true,
    pluginIcon: 'input-group-plugin',
    rendererName: 'input-group',
    id: '7c4d85a9e0ea',
    plugin: {
      rendererName: 'input-group',
      $schema: '/schemas/InputGroupControlSchema.json',
      name: ' Input combination',
      isBaseComponent: true,
      icon: 'fa fa-object-group',
      pluginIcon: 'input-group-plugin',
      description: 'Input combination, supports multiple levels of control combinations',
      searchKeywords: 'Input box combination',
      docLink: '/amis/zh-CN/components/form/input-group',
      panelTitle: 'Input Combination',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
          preferTag: 'Content Area',
          renderMethod: 'render',
        },
      ],
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Table Edit Box',
    icon: 'fa fa-table',
    description: 'Can be used to display data, can be used to display array level data, such as multiple sub-forms',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      wrapWithPanel: false,
      mode: 'horizontal',
      body: {
        type: 'input-table',
        name: 'table',
        label: 'Table Form',
        columns: [
          {
            label: 'Name',
            name: 'name',
            quickEdit: {
              type: 'input-text',
              name: 'name1',
            },
          },
          {
            label: 'Score',
            name: 'score',
            quickEdit: {
              type: 'input-number',
              mode: 'inline',
              name: 'score',
            },
          },
          {
            label: 'Level',
            name: 'level',
            quickEdit: {
              type: 'select',
              name: 'level',
              options: [
                {
                  label: 'A',
                  value: 'A',
                },
                {
                  label: 'B',
                  value: 'B',
                },
                {
                  label: 'C',
                  value: 'C',
                },
              ],
            },
          },
        ],
        addable: false,
        footerAddBtn: {
          label: 'New',
          icon: 'fa fa-plus',
        },
        strictMode: true,
        value: [
          {
            color: 'green',
            name: 'green',
          },
        ],
      },
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-table',
    scaffold: {
      type: 'input-table',
      name: 'table',
      label: 'Table Form',
      addable: false,
      strictMode: true,
    },
    scaffoldForm: {
      title: 'Quickly build table edit box',
      body: [
        {
          name: 'columns',
          type: 'input-table',
          label: false,
          needConfirm: false,
          addable: true,
          removable: true,
          columns: [
            {
              type: 'text',
              name: 'label',
              label: 'Title',
              quickEdit: {
                type: 'input-text',
                mode: 'inline',
              },
            },
            {
              type: 'text',
              name: 'name',
              label: 'Bound field name',
              quickEdit: {
                type: 'input-text',
                mode: 'inline',
              },
            },
            {
              type: 'text',
              name: 'type',
              label: 'Display level',
              width: 140,
              quickEdit: {
                type: 'select',
                options: [
                  {
                    value: 'text',
                    label: 'Plain text',
                  },
                  {
                    value: 'tpl',
                    label: 'Template',
                  },
                  {
                    value: 'container',
                    label: 'Container',
                  },
                  {
                    value: 'image',
                    label: 'Image',
                  },
                  {
                    value: 'date',
                    label: 'Date',
                  },
                  {
                    value: 'datetime',
                    label: 'Date Time',
                  },
                  {
                    value: 'time',
                    label: 'Time',
                  },
                  {
                    value: 'status',
                    label: 'Status',
                  },
                  {
                    value: 'mapping',
                    label: 'Mapping',
                  },
                ],
              },
            },
            {
              type: 'text',
              name: 'quickEdit.type',
              label: 'Edit level',
              quickEdit: {
                type: 'select',
                clearable: true,
                placeholder: 'If empty, editing is not supported',
                options: [
                  {
                    value: 'input-text',
                    label: 'Text Box',
                  },
                  {
                    value: 'input-number',
                    label: 'Number box',
                  },
                  {
                    value: 'select',
                    label: 'Selection box',
                  },
                  {
                    value: 'input-color',
                    label: 'Color selection box',
                  },
                  {
                    value: 'checkboxes',
                    label: 'Multiple checkboxes',
                  },
                  {
                    value: 'radios',
                    label: 'Radio Box',
                  },
                  {
                    value: 'input-date',
                    label: 'Date',
                  },
                  {
                    value: 'input-date-range',
                    label: 'Date Range',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'nested-select',
                    label: 'Cascading Selectors',
                  },
                  {
                    value: 'input-city',
                    label: 'City selector',
                  },
                  {
                    value: 'input-tree',
                    label: 'Tree selection box',
                  },
                ],
              },
              width: 210,
            },
          ],
        },
      ],
      canRebuild: true,
    },
    isBaseComponent: true,
    pluginIcon: 'table-plugin',
    rendererName: 'input-table',
    id: '8a040e13f946',
    plugin: {
      rendererName: 'input-table',
      $schema: '/schemas/TableControlSchema.json',
      name: 'Table Edit Box',
      isBaseComponent: true,
      icon: 'fa fa-table',
      pluginIcon: 'table-plugin',
      description: 'Can be used to display data, can be used to display array level data, such as multiple sub-forms',
      docLink: '/amis/zh-CN/components/form/input-table',
      regions: [
        {
          key: 'columns',
          label: 'Column Collection',
          renderMethod: 'renderTableContent',
          preferTag: 'display',
          dndMode: 'position-h',
        },
      ],
      notRenderFormZone: true,
      panelJustify: true,
      panelTitle: 'Table Editing',
      events: [
        {
          eventName: 'add',
          eventLabel: 'Add row',
          description:
            'Triggered when clicking the add button in the lower left corner or the add button in the right operation bar of a row',
        },
        {
          eventName: 'addConfirm',
          eventLabel: 'Confirm to add',
          description:
            'Turn on "confirmation mode", click the add button, fill in the data and click the "save" button to trigger',
        },
        {
          eventName: 'addSuccess',
          eventLabel: 'Added successfully',
          description:
            'Turn on "Confirmation Mode" and configure "Add New Interface", click "Save" and it will be triggered when the interface is successfully added.',
        },
        {
          eventName: 'addFail',
          eventLabel: 'Add failed',
          description:
            'Turn on "Confirmation Mode" and configure "Add Interface", click "Save" and the interface fails to be called.',
        },
        {
          eventName: 'edit',
          eventLabel: 'Edit Row',
          description: 'Triggered when clicking the "Edit" button in the right operation bar of a row',
        },
        {
          eventName: 'editConfirm',
          eventLabel: 'Confirm Edit',
          description:
            'Trigger when "Confirmation Mode" is turned on, click the "Edit" button, fill in the data and click the "Save" button',
        },
        {
          eventName: 'editSuccess',
          eventLabel: 'Edited successfully',
          description:
            'Turn on "Confirmation Mode" and configure "edit interface", trigger when editing is successful after clicking "save"',
        },
        {
          eventName: 'editFail',
          eventLabel: 'Edit failed',
          description:
            'Turn on "Confirmation Mode" and configure "Edit Interface", click "Save" and the interface call fails. Triggered',
        },
        {
          eventName: 'delete',
          eventLabel: 'Delete row',
          description: 'Triggered when clicking the "Delete" button in the right operation bar of a row',
        },
        {
          eventName: 'deleteSuccess',
          eventLabel: 'Deleted successfully',
          description: 'Configured "delete interface", triggered when the interface is called successfully',
        },
        {
          eventName: 'deleteFail',
          eventLabel: 'Delete failed',
          description: 'Configured "delete interface", triggered when calling the interface fails',
        },
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when table data changes',
        },
        {
          eventName: 'orderChange',
          eventLabel: 'Row sorting',
          description: 'Manual drag row sorting event',
        },
        {
          eventName: 'rowClick',
          eventLabel: 'Row Click',
          description: 'Click the entire row event',
        },
        {
          eventName: 'rowDbClick',
          eventLabel: 'Double click on row',
          description: 'Double click the entire row event',
        },
        {
          eventName: 'rowMouseEnter',
          eventLabel: 'Mouse enters row event',
          description: 'Triggered when a whole line is entered',
        },
        {
          eventName: 'rowMouseLeave',
          eventLabel: 'Mouse out event',
          description: 'Triggered when moving out of the entire line',
        },
      ],
      actions: [
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
        {
          actionType: 'addItem',
          actionLabel: 'Add row',
          description: 'Add row data',
          innerArgs: ['item', 'index'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'container',
                body: [
                  {
                    type: 'input-number',
                    name: 'index',
                    mode: 'horizontal',
                    horizontal: {
                      leftFixed: 4,
                    },
                    label: 'Insert position',
                    size: 'lg',
                    placeholder: 'Please enter the line number, if it is empty, insert it at the end',
                  },
                  {
                    type: 'combo',
                    name: 'value',
                    label: 'Data Settings',
                    multiple: true,
                    removable: true,
                    required: true,
                    addable: true,
                    strictMode: false,
                    canAccessSuperData: true,
                    mode: 'horizontal',
                    size: 'lg',
                    addButtonText: 'Add a new row',
                    items: [
                      {
                        type: 'combo',
                        name: 'item',
                        label: false,
                        renderLabel: false,
                        multiple: true,
                        removable: true,
                        required: true,
                        addable: true,
                        strictMode: false,
                        canAccessSuperData: true,
                        className: 'm-l',
                        size: 'lg',
                        mode: 'horizontal',
                        addButtonText: 'Add new field',
                        items: [
                          {
                            name: 'key',
                            type: 'input-text',
                            source: '${__setValueDs}',
                            labelField: 'label',
                            valueField: 'value',
                            required: true,
                          },
                          {
                            type: 'ae-formulaControl',
                            variableMode: 'tree',
                            name: 'val',
                            variables: '${variables}',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          actionType: 'deleteItem',
          actionLabel: 'Delete row',
          description: 'Delete a row of data',
          innerArgs: ['condition', 'index'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'container',
                body: [
                  {
                    type: 'radios',
                    name: '__deleteType',
                    inputClassName: 'event-action-radio',
                    mode: 'horizontal',
                    label: 'Delete method',
                    horizontal: {
                      leftFixed: 4,
                    },
                    options: [
                      {
                        label: 'Specify line number',
                        value: 'rowIndex',
                      },
                      {
                        label: 'Conditional Expression',
                        value: 'conditionExpression',
                      },
                    ],
                  },
                  {
                    type: 'input-text',
                    name: 'index',
                    mode: 'horizontal',
                    horizontal: {
                      leftFixed: 4,
                    },
                    required: true,
                    label: 'Delete Range',
                    size: 'lg',
                    placeholder:
                      'Please enter the row number. If you enter multiple numbers, separate them with commas',
                    hiddenOn: 'this.__deleteType !== "rowIndex"',
                  },
                  {
                    type: 'ae-formulaControl',
                    variableMode: 'tree',
                    name: 'condition',
                    variables: '${variables}',
                    label: 'Delete Condition',
                    hiddenOn: 'this.__deleteType !== "conditionExpression"',
                    mode: 'horizontal',
                    required: true,
                    horizontal: {
                      leftFixed: 4,
                    },
                    size: 'lg',
                  },
                ],
              },
            ],
          },
        },
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear component data',
        },
        {
          actionType: 'initDrag',
          actionLabel: 'Start sorting',
          description: 'Enable table drag and drop sorting function',
        },
        {
          actionType: 'cancelDrag',
          actionLabel: 'Cancel sort',
          description: 'Cancel the table drag and drop sorting function',
        },
      ],
      dsManager: {
        builders: {},
      },
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Matrix Switch',
    icon: 'fa fa-th-large',
    description:
      'You can configure single selection for rows, single selection for columns, single selection for all options, or multiple selection for all options',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'matrix-checkboxes',
          name: 'matrix',
          label: 'Matrix Switch',
          rowLabel: 'Row title description',
          columns: [
            {
              label: '列1',
            },
            {
              label: '列2',
            },
          ],
          rows: [
            {
              label: '行1',
            },
            {
              label: '行2',
            },
          ],
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/matrix-checkboxes',
    scaffold: {
      type: 'matrix-checkboxes',
      name: 'matrix',
      label: 'Matrix Switch',
      rowLabel: 'Row title description',
    },
    isBaseComponent: true,
    pluginIcon: 'matrix-checkboxes-plugin',
    rendererName: 'matrix-checkboxes',
    id: '59d3a7561df6',
    plugin: {
      rendererName: 'matrix-checkboxes',
      $schema: '/schemas/MatrixControlSchema.json',
      name: 'Matrix Switch',
      isBaseComponent: true,
      icon: 'fa fa-th-large',
      pluginIcon: 'matrix-checkboxes-plugin',
      description:
        'You can configure single selection for rows, single selection for columns, single selection for all options, or multiple selection for all options',
      docLink: '/amis/zh-CN/components/form/matrix-checkboxes',
      notRenderFormZone: true,
      panelTitle: 'Matrix Switch',
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Selected value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'array',
                      title: 'Selected value',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset to default values',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Rich Text Editor',
    icon: 'fa fa-newspaper-o',
    description: 'Configuration bar with customizable rich text',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-rich-text',
          label: 'Rich Text',
          name: 'rich-text',
          vendor: 'tinymce',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-rich-text',
    scaffold: {
      type: 'input-rich-text',
      label: 'Rich Text',
      name: 'rich-text',
      vendor: 'tinymce',
    },
    isBaseComponent: true,
    pluginIcon: 'input-rich-text-plugin',
    rendererName: 'input-rich-text',
    id: '0f3a2092f72b',
    plugin: {
      rendererName: 'input-rich-text',
      $schema: '/schemas/RichTextControlSchema.json',
      name: 'Rich Text Editor',
      isBaseComponent: true,
      icon: 'fa fa-newspaper-o',
      pluginIcon: 'input-rich-text-plugin',
      description: 'Configuration bar with customizable rich text',
      docLink: '/amis/zh-CN/components/form/input-rich-text',
      panelTitle: 'Rich Text',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Input content changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Rich text value',
                    },
                  },
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
      ],
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Compare editors',
    name: 'diff-editor',
    icon: 'fa fa-columns',
    description:
      'Compare the codes on the left and right sides. Supported languages ​​include: bat, c, coffeescript, cpp, csharp, css, dockerfile, fsharp, go, handlebars, etc.',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'diff-editor',
          label: 'diff editor',
          name: 'diff',
          value: 'Hello World\nLine 1\nNew line\nBla Bla',
          diffValue: 'Hello World\nLine 2',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/diff-editor',
    scaffold: {
      type: 'diff-editor',
      label: 'diff editor',
      name: 'diff',
    },
    isBaseComponent: true,
    pluginIcon: 'diff-editor-plugin',
    rendererName: 'diff-editor',
    id: '68d7b43c4516',
    plugin: {
      rendererName: 'diff-editor',
      $schema: '/schemas/DiffEditorControlSchema.json',
      name: 'diff-editor',
      isBaseComponent: true,
      icon: 'fa fa-columns',
      pluginIcon: 'diff-editor-plugin',
      description:
        'Compare the codes on the left and right sides. Supported languages ​​include: bat, c, coffeescript, cpp, csharp, css, dockerfile, fsharp, go, handlebars, etc.',
      searchKeywords: 'Compare editors',
      docLink: '/amis/zh-CN/components/form/diff-editor',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Code Changes',
          description: 'Triggered when code changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current code content',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the right input box gets the focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current code content',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the right input box loses focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current code content',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'focus',
          actionLabel: 'Get focus',
          description: 'Get the focus, the focus is on the right editing panel',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      notRenderFormZone: true,
      panelTitle: 'Diff Editor',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'editor',
    icon: 'fa fa-code',
    description:
      'Code editor, using monaco-editor supports: bat, c, coffeescript, cpp, csharp, css, dockerfile, fsharp, go, handlebars, etc.',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'editor',
          label: 'Code Editor',
          name: 'editor',
          value: 'console.log("Hello world.");',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/editor',
    scaffold: {
      type: 'editor',
      label: 'Code Editor',
      name: 'editor',
    },
    isBaseComponent: true,
    pluginIcon: 'editor-plugin',
    rendererName: 'editor',
    id: 'ae79040ea3a6',
    plugin: {
      rendererName: 'editor',
      $schema: '/schemas/EditorControlSchema.json',
      name: 'editor',
      isBaseComponent: true,
      icon: 'fa fa-code',
      pluginIcon: 'editor-plugin',
      description:
        'Code editor, using monaco-editor supports: bat, c, coffeescript, cpp, csharp, css, dockerfile, fsharp, go, handlebars, etc.',
      docLink: '/amis/zh-CN/components/form/editor',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Code Changes',
          description: 'Triggered when code changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current code content',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the input box gets focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current code content',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the input box loses focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current code content',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'focus',
          actionLabel: 'Get focus',
          description: 'Input box gets focus',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      notRenderFormZone: true,
      panelTitle: 'Editor',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'search box, searchbox',
    name: 'search-box',
    icon: 'fa fa-search',
    description:
      "Used to display a simple search box, usually used with other components. For example, after the page is configured with initApi, it can be used to implement simple data filtering and searching. The name keywords will be passed as parameters to the page's initApi.",
    previewSchema: {
      type: 'search-box',
      name: 'keyword',
      body: {
        type: 'tpl',
        tpl: 'Search Box',
        wrapperComponent: '',
        inline: false,
      },
      level: 'info',
      className: 'text-left',
      showCloseButton: true,
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/search-box',
    scaffold: {
      type: 'search-box',
      name: 'keyword',
      level: 'info',
    },
    isBaseComponent: true,
    pluginIcon: 'search-box-plugin',
    rendererName: 'search-box',
    id: '4e12286826db',
    plugin: {
      rendererName: 'search-box',
      $schema: '/schemas/SearchBoxSchema.json',
      name: 'search-box',
      searchKeywords: 'search box, searchbox',
      isBaseComponent: true,
      description:
        "Used to display a simple search box, usually used with other components. For example, after the page is configured with initApi, it can be used to implement simple data filtering and searching. The name keywords will be passed as parameters to the page's initApi.",
      docLink: '/amis/zh-CN/components/search-box',
      icon: 'fa fa-search',
      pluginIcon: 'search-box-plugin',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
          placeholder: 'Search box content',
        },
      ],
      events: [
        {
          eventName: 'search',
          eventLabel: 'Click to search',
          description: 'Triggered when the search icon is clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the input box value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'focus',
          eventLabel: 'Get focus',
          description: 'Triggered when the input box gets focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'blur',
          eventLabel: 'Lost focus',
          description: 'Triggered when the input box loses focus',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear input box',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Update data',
          description: 'Update data',
        },
      ],
      notRenderFormZone: true,
      panelTitle: 'Search Box',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'KV key-value pair',
    icon: 'fa fa-eyedropper',
    description: 'Used to edit key-value pair level data',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-kv',
          label: 'KV',
          name: 'kv',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-kv',
    scaffold: {
      type: 'input-kv',
      label: 'KV',
      name: 'kv',
    },
    isBaseComponent: true,
    pluginIcon: 'input-kv-plugin',
    rendererName: 'input-kv',
    id: '8fe7399d973f',
    plugin: {
      rendererName: 'input-kv',
      $schema: '/schemas/KVControlSchema.json',
      name: 'KV key-value pair',
      isBaseComponent: true,
      icon: 'fa fa-eyedropper',
      pluginIcon: 'input-kv-plugin',
      description: 'Used to edit key-value pair level data',
      docLink: '/amis/zh-CN/components/form/input-kv',
      events: [
        {
          eventName: 'add',
          eventLabel: 'Add',
          description: 'Triggered when adding a combination item',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Value of the composite item',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'delete',
          eventLabel: 'Delete',
          description: 'Delete combination item',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    key: {
                      type: 'string',
                      title: 'Deleted Index',
                    },
                    value: {
                      type: 'string',
                      title: 'Value of the composite item',
                    },
                    item: {
                      type: 'object',
                      title: 'Deleted Items',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'KV Key-Value Pair',
      panelBody: [
        {
          type: 'select',
          label: {
            type: 'tooltip-wrapper',
            tooltip:
              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
            tooltipTheme: 'dark',
            placement: 'top',
            tooltipStyle: {
              fontSize: '12px',
            },
            className: 'ae-formItemControl-label-tip',
            body: 'Reference position',
          },
          name: 'originPosition',
          value: 'left-top',
          visibleOn:
            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
          options: [
            {
              label: 'top left',
              value: 'left-top',
            },
            {
              label: 'top right',
              value: 'right-top',
            },
            {
              label: 'bottom right (default)',
              value: 'right-bottom',
            },
            {
              label: 'bottom left',
              value: 'left-bottom',
            },
          ],
        },
        {
          type: 'input-text',
          name: 'valueType',
          label: '值level',
        },
        {
          type: 'input-text',
          name: 'keyPlaceholder',
          label: 'key prompt information',
        },
        {
          type: 'input-text',
          name: 'valuePlaceholder',
          label: "value's hint information",
        },
        {
          type: 'switch',
          name: 'draggable',
          label: 'Is it sortable?',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Repeat frequency selector',
    name: 'Repeat cycle selection',
    icon: 'fa fa-repeat',
    description: 'Select the recurrence frequency, such as every hour, every day, every week, etc.',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-repeat',
          label: 'Period',
          name: 'repeat',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-repeat',
    scaffold: {
      type: 'input-repeat',
      label: 'Period',
      name: 'repeat',
    },
    isBaseComponent: true,
    pluginIcon: 'input-repeat-plugin',
    rendererName: 'input-repeat',
    id: '804dd3913151',
    plugin: {
      rendererName: 'input-repeat',
      $schema: '/schemas/RepeatControlSchema.json',
      name: 'Repeat cycle selection',
      isBaseComponent: true,
      icon: 'fa fa-repeat',
      pluginIcon: 'input-repeat-plugin',
      description: 'Select the recurrence frequency, such as every hour, every day, every week, etc.',
      searchKeywords: 'Repeat frequency selector',
      docLink: '/amis/zh-CN/components/form/input-repeat',
      panelTitle: 'Cycle',
      panelBody: [
        {
          type: 'select',
          label: {
            type: 'tooltip-wrapper',
            tooltip:
              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
            tooltipTheme: 'dark',
            placement: 'top',
            tooltipStyle: {
              fontSize: '12px',
            },
            className: 'ae-formItemControl-label-tip',
            body: 'Reference position',
          },
          name: 'originPosition',
          value: 'left-top',
          visibleOn:
            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
          options: [
            {
              label: 'top left',
              value: 'left-top',
            },
            {
              label: 'top right',
              value: 'right-top',
            },
            {
              label: 'bottom right (default)',
              value: 'right-bottom',
            },
            {
              label: 'bottom left',
              value: 'left-bottom',
            },
          ],
        },
        {
          type: 'switch',
          label: 'switch',
          name: 'value',
          labelRemark: {
            trigger: ['hover', 'focus'],
            setting: true,
            title: '',
            content: 'If not set, get it based on name',
          },
        },
        {
          type: 'input-text',
          name: 'value',
          label: 'Default value',
          visibleOn: 'typeof this.value !== "undefined"',
        },
        {
          name: 'options',
          type: 'select',
          label: 'Enable Units',
          options: ['secondly', 'minutely', 'hourly', 'daily', 'weekdays', 'weekly', 'monthly', 'yearly'],
          value: 'hourly,daily,weekly,monthly',
          multiple: true,
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'uuid field',
    name: 'UUID',
    icon: 'fa fa-eye-slash',
    description: 'Auto-generated UUID',
    previewSchema: {
      type: 'form',
      wrapWithPanel: false,
      body: [
        {
          type: 'uuid',
          name: 'uuid',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/uuid',
    scaffold: {
      type: 'uuid',
      name: 'uuid',
    },
    isBaseComponent: true,
    pluginIcon: 'uuid-plugin',
    rendererName: 'uuid',
    id: 'e114a11597fa',
    plugin: {
      rendererName: 'uuid',
      $schema: '/schemas/UUIDControlSchema.json',
      name: 'UUID',
      isBaseComponent: true,
      icon: 'fa fa-eye-slash',
      pluginIcon: 'uuid-plugin',
      description: 'Auto-generated UUID',
      searchKeywords: 'uuid field',
      docLink: '/amis/zh-CN/components/form/uuid',
      panelTitle: 'UUID',
      panelBody: [
        {
          type: 'select',
          label: {
            type: 'tooltip-wrapper',
            tooltip:
              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
            tooltipTheme: 'dark',
            placement: 'top',
            tooltipStyle: {
              fontSize: '12px',
            },
            className: 'ae-formItemControl-label-tip',
            body: 'Reference position',
          },
          name: 'originPosition',
          value: 'left-top',
          visibleOn:
            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
          options: [
            {
              label: 'top left',
              value: 'left-top',
            },
            {
              label: 'top right',
              value: 'right-top',
            },
            {
              label: 'bottom right (default)',
              value: 'right-bottom',
            },
            {
              label: 'bottom left',
              value: 'left-bottom',
            },
          ],
        },
        {
          type: 'static',
          value: 'Automatically generated in UUID v4 format, no configuration required',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Geographic Location Selection',
    icon: 'fa fa-location-arrow',
    description: 'Location selection',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'location-picker',
          name: 'location',
          label: 'Position selection',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/location-picker',
    scaffold: {
      type: 'location-picker',
      name: 'location',
      label: 'Position selection',
    },
    isBaseComponent: true,
    pluginIcon: 'location-picker-plugin',
    rendererName: 'location-picker',
    id: '2d062d9eed42',
    plugin: {
      rendererName: 'location-picker',
      $schema: '/schemas/LocationControlSchema.json',
      name: 'Geographic Location Selection',
      isBaseComponent: true,
      notRenderFormZone: true,
      icon: 'fa fa-location-arrow',
      pluginIcon: 'location-picker-plugin',
      description: 'Location selection',
      docLink: '/amis/zh-CN/components/form/location-picker',
      panelTitle: 'Location Selection',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the selected value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'object',
                      title: 'Selected value',
                      properties: {
                        address: {
                          type: 'string',
                          title: 'Address',
                        },
                        lng: {
                          type: 'number',
                          title: 'Longitude',
                        },
                        lat: {
                          type: 'number',
                          title: 'Latitude',
                        },
                        vendor: {
                          type: 'string',
                          title: 'Manufacturer',
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
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear selected value',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Subform Item',
    icon: 'fa fa-window-restore',
    description: 'SubForm, configure a subform as the current form item',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-sub-form',
          name: 'subform',
          label: 'Subform',
          form: {
            title: 'Title',
            body: [
              {
                type: 'input-text',
                label: 'Text',
                name: 'text',
              },
            ],
          },
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-sub-form',
    scaffold: {
      type: 'input-sub-form',
      name: 'subform',
      label: 'Subform',
    },
    isBaseComponent: true,
    pluginIcon: 'sub-form-plugin',
    rendererName: 'input-sub-form',
    id: 'edab373bf0a1',
    plugin: {
      rendererName: 'input-sub-form',
      $schema: '/schemas/SubFormControlSchema.json',
      name: 'Subform Item',
      isBaseComponent: true,
      icon: 'fa fa-window-restore',
      pluginIcon: 'sub-form-plugin',
      description: 'SubForm, configure a subform as the current form item',
      docLink: '/amis/zh-CN/components/form/input-sub-form',
      panelTitle: 'Subform Item',
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Hidden Field',
    name: 'hidden',
    icon: 'fa fa-eye-slash',
    description: 'Hide form item',
    previewSchema: {
      type: 'tpl',
      tpl: 'Hidden Field',
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/hidden',
    scaffold: {
      type: 'hidden',
      name: 'var1',
    },
    isBaseComponent: true,
    pluginIcon: 'hidden-plugin',
    rendererName: 'hidden',
    id: 'fbc2bc97b926',
    plugin: {
      rendererName: 'hidden',
      $schema: '/schemas/HiddenControlSchema.json',
      name: 'hidden',
      isBaseComponent: true,
      icon: 'fa fa-eye-slash',
      pluginIcon: 'hidden-plugin',
      description: 'Hide form item',
      searchKeywords: 'Hidden Field',
      docLink: '/amis/zh-CN/components/form/hidden',
      panelTitle: 'Hidden Fields',
      panelBody: [
        {
          type: 'select',
          label: {
            type: 'tooltip-wrapper',
            tooltip:
              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
            tooltipTheme: 'dark',
            placement: 'top',
            tooltipStyle: {
              fontSize: '12px',
            },
            className: 'ae-formItemControl-label-tip',
            body: 'Reference position',
          },
          name: 'originPosition',
          value: 'left-top',
          visibleOn:
            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
          options: [
            {
              label: 'top left',
              value: 'left-top',
            },
            {
              label: 'top right',
              value: 'right-top',
            },
            {
              label: 'bottom right (default)',
              value: 'right-bottom',
            },
            {
              label: 'bottom left',
              value: 'left-bottom',
            },
          ],
        },
        {
          type: 'input-text',
          name: 'value',
          label: 'Default value',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Handwritten Signature',
    icon: 'fa fa-star-o',
    description: 'Handwritten signature panel',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'input-signature',
          label: 'Signature',
          name: 'signature',
          embed: true,
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/input-signature',
    scaffold: {
      type: 'input-signature',
      label: 'Signature',
      name: 'signature',
    },
    isBaseComponent: true,
    pluginIcon: 'input-signature-plugin',
    rendererName: 'input-signature',
    id: '610292343b74',
    plugin: {
      rendererName: 'input-signature',
      $schema: '/schemas/InputSignatureSchema.json',
      name: 'Handwritten Signature',
      isBaseComponent: true,
      icon: 'fa fa-star-o',
      pluginIcon: 'input-signature-plugin',
      description: 'Handwritten signature panel',
      docLink: '/amis/zh-CN/components/form/input-signature',
      notRenderFormZone: true,
      panelTitle: 'Signature Panel',
      events: [],
      actions: [],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Static display box',
    icon: 'fa fa-info',
    description: 'Purely used to display data, can be used to display json, date, image, progress and other data',
    previewSchema: {
      type: 'form',
      className: 'text-left',
      mode: 'horizontal',
      wrapWithPanel: false,
      body: [
        {
          type: 'static',
          label: 'Description',
          value: 'Static value',
        },
      ],
    },
    tags: ['Form Items'],
    docLink: '/amis/zh-CN/components/form/static',
    scaffold: {
      type: 'static',
      label: 'Description',
    },
    isBaseComponent: true,
    pluginIcon: 'static-plugin',
    rendererName: 'static',
    id: 'c52a59c16612',
    plugin: {
      rendererName: 'static',
      $schema: '/schemas/StaticControlSchema.json',
      name: 'Static display box',
      isBaseComponent: true,
      icon: 'fa fa-info',
      pluginIcon: 'static-plugin',
      description: 'Purely used to display data, can be used to display json, date, image, progress and other data',
      docLink: '/amis/zh-CN/components/form/static',
      multifactor: true,
      notRenderFormZone: true,
      panelTitle: 'Static Display',
      panelJustify: true,
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'button-group',
    icon: 'fa fa-object-group',
    description: 'Used to display multiple buttons, visually presented as a whole.',
    previewSchema: {
      type: 'button-group',
      buttons: [
        {
          type: 'button',
          label: 'Button 1',
        },
        {
          type: 'button',
          label: 'Button 2',
        },
      ],
    },
    tags: ['button-group'],
    docLink: '/amis/zh-CN/components/button-group',
    scaffold: {
      type: 'button-group',
    },
    isBaseComponent: true,
    pluginIcon: 'btn-group-plugin',
    rendererName: 'button-group',
    id: '36a989d11d62',
    plugin: {
      rendererName: 'button-group',
      $schema: '/schemas/ButtonGroupSchema.json',
      name: 'button-group',
      isBaseComponent: true,
      description: 'Used to display multiple buttons, visually presented as a whole.',
      icon: 'fa fa-object-group',
      pluginIcon: 'btn-group-plugin',
      docLink: '/amis/zh-CN/components/button-group',
      panelTitle: 'Button Group',
      panelJustify: true,
      regions: [
        {
          key: 'buttons',
          label: 'Sub-button',
          renderMethod: 'render',
          preferTag: 'button',
          insertPosition: 'inner',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'nav',
    icon: 'fa fa-map-signs',
    description: 'Used to render navigation menu, supports horizontal and vertical layout.',
    previewSchema: {
      type: 'nav',
      stacked: true,
      popupClassName: 'app-popover :AMISCSSWrapper',
      links: [
        {
          label: 'Page 1',
          to: '?id=1',
          target: '_self',
          id: '0',
        },
        {
          label: 'Page 2',
          to: '?id=2',
          target: '_self',
          id: '1',
        },
      ],
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/nav',
    scaffold: {
      type: 'nav',
      stacked: true,
      popupClassName: 'app-popover :AMISCSSWrapper',
    },
    isBaseComponent: true,
    pluginIcon: 'nav-plugin',
    rendererName: 'nav',
    id: '210f62f26d12',
    plugin: {
      rendererName: 'nav',
      $schema: '/schemas/NavSchema.json',
      name: 'nav',
      isBaseComponent: true,
      description: 'Used to render navigation menu, supports horizontal and vertical layout.',
      docLink: '/amis/zh-CN/components/nav',
      icon: 'fa fa-map-signs',
      pluginIcon: 'nav-plugin',
      panelTitle: 'Navigation',
      panelDefinitions: {
        links: {
          label: 'Menu Management',
          name: 'links',
          type: 'combo',
          multiple: true,
          draggable: true,
          addButtonText: 'Add new menu',
          multiLine: true,
          messages: {
            validateFailed: 'There is a configuration error in the menu, please check carefully',
          },
          scaffold: {
            label: '',
            to: '',
          },
          items: [
            {
              label: 'Name',
              name: 'label',
              type: 'input-text',
              required: true,
            },
            {
              type: 'input-text',
              name: 'to',
              label: 'Jump address',
              required: true,
            },
            {
              type: 'switch',
              mode: 'horizontal',
              horizontal: {
                justify: true,
                left: 8,
              },
              inputClassName: 'is-inline ',
              label: 'Whether to open a new page',
              name: 'target',
            },
            {
              label: 'Icon',
              type: 'icon-picker',
              name: 'icon',
              placeholder: 'Click to select icon',
              clearable: true,
              description: '',
            },
            {
              type: 'switch',
              mode: 'horizontal',
              inputClassName: 'is-inline ',
              label: 'Whether to expand initially',
              name: 'unfolded',
            },
            {
              type: 'group',
              label: 'Whether to highlight',
              direction: 'vertical',
              className: 'm-b-none',
              labelRemark: {
                trigger: 'click',
                rootClose: true,
                className: 'm-l-xs',
                content: 'You can configure whether the menu should be highlighted',
                placement: 'left',
              },
              body: [
                {
                  name: 'active',
                  type: 'radios',
                  inline: true,
                  options: [
                    {
                      label: 'Yes',
                      value: true,
                    },
                    {
                      label: '否',
                      value: false,
                    },
                    {
                      label: 'Expression',
                      value: '',
                    },
                  ],
                },
                {
                  name: 'activeOn',
                  autoComplete: false,
                  visibleOn: 'typeof this.active !== "boolean"',
                  type: 'input-text',
                  placeholder: 'Leave it blank to automatically analyze the menu address',
                  className: 'm-t-n-sm',
                },
              ],
            },
            {
              type: 'switch',
              mode: 'horizontal',
              inputClassName: 'is-inline ',
              label: 'Contains submenus',
              name: 'children',
              messages: {
                validateFailed: 'There is a configuration error in the submenu, please check carefully',
              },
            },
            {
              name: 'children',
              $ref: 'links',
              visibleOn: 'this.children',
              label: 'Submenu Management',
              addButtonText: 'Add a new submenu',
            },
          ],
        },
      },
      events: [
        {
          eventName: 'click',
          eventLabel: 'Menu click',
          description: 'Triggered when the menu is clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'change',
          eventLabel: 'Menu selected',
          description: 'Triggered when the menu is selected',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                },
              },
            },
          ],
        },
        {
          eventName: 'toggled',
          eventLabel: 'Menu Expand',
          description: 'Triggered when the menu is expanded',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                },
              },
            },
          ],
        },
        {
          eventName: 'collapsed',
          eventLabel: 'Menu collapse',
          description: 'Triggered when the menu is collapsed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                },
              },
            },
          ],
        },
        {
          eventName: 'loaded',
          eventLabel: 'Data loading completed',
          description: 'Triggered after data loading is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'updateItems',
          actionLabel: 'Update menu item',
          description: 'Trigger component update menu item',
        },
        {
          actionType: 'collapse',
          actionLabel: 'Menu Collapse',
          description: 'Trigger the collapse and expansion of components',
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'anchor-nav',
    icon: 'fa fa-link',
    description:
      'Anchor navigation: When displaying multiple lines of content, you can display the content in the form of anchor navigation groups. Click the navigation menu to locate the corresponding content area.',
    previewSchema: {
      type: 'anchor-nav',
      links: [
        {
          title: 'Anchor 1',
          href: '1',
          body: [
            {
              type: 'tpl',
              tpl: 'Here is the anchor content 1',
              wrapperComponent: '',
              inline: false,
            },
          ],
        },
        {
          title: 'Anchor 2',
          href: '2',
          body: [
            {
              type: 'tpl',
              tpl: 'Here is the anchor content 2',
              wrapperComponent: '',
              inline: false,
            },
          ],
        },
        {
          title: 'Anchor Point 3',
          href: '3',
          body: [
            {
              type: 'tpl',
              tpl: 'Here is the anchor content 3',
              wrapperComponent: '',
              inline: false,
            },
          ],
        },
      ],
    },
    tags: ['anchor-nav'],
    docLink: '/amis/zh-CN/components/anchor-nav',
    scaffold: {
      type: 'anchor-nav',
    },
    isBaseComponent: true,
    pluginIcon: 'anchor-nav-plugin',
    rendererName: 'anchor-nav',
    id: '79e7b273f4aa',
    plugin: {
      rendererName: 'anchor-nav',
      $schema: '/schemas/AnchorNavSchema.json',
      name: 'anchor-nav',
      isBaseComponent: true,
      description:
        'Anchor navigation: When displaying multiple lines of content, you can display the content in the form of anchor navigation groups. Click the navigation menu to locate the corresponding content area.',
      docLink: '/amis/zh-CN/components/anchor-nav',
      icon: 'fa fa-link',
      pluginIcon: 'anchor-nav-plugin',
      panelTitle: 'Anchor Navigation',
      panelJustify: true,
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'Properties',
              body: [
                {
                  type: 'collapse-group',
                  activeKey: ['Basic', 'state'],
                  expandIconPosition: 'right',
                  expandIcon: {
                    type: 'icon',
                    icon: 'chevron-right',
                  },
                  className: 'ae-formItemControl ae-styleControl',
                  body: [
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Basic',
                      body: [
                        {
                          type: 'select',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Reference position',
                          },
                          name: 'originPosition',
                          value: 'left-top',
                          visibleOn:
                            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                          options: [
                            {
                              label: 'top left',
                              value: 'left-top',
                            },
                            {
                              label: 'top right',
                              value: 'right-top',
                            },
                            {
                              label: 'bottom right (default)',
                              value: 'right-bottom',
                            },
                            {
                              label: 'bottom left',
                              value: 'left-bottom',
                            },
                          ],
                        },
                        {
                          type: 'combo',
                          name: 'links',
                          label: 'Anchor Point Settings',
                          mode: 'normal',
                          multiple: true,
                          draggable: true,
                          minLength: 1,
                          addButtonText: 'Add anchor',
                          deleteBtn: {
                            icon: 'fa fa-trash',
                          },
                          items: [
                            {
                              type: 'input-text',
                              name: 'title',
                              required: true,
                              placeholder: 'Please enter the anchor title',
                            },
                          ],
                          scaffold: {
                            title: 'Anchor Point',
                            href: '',
                            body: [
                              {
                                type: 'tpl',
                                tpl: 'Here is the anchor content',
                                wrapperComponent: '',
                                inline: false,
                              },
                            ],
                          },
                          draggableTip: '',
                          itemsWrapperClassName: 'ae-Combo-items ',
                          itemClassName: 'ae-Combo-item ',
                        },
                        {
                          name: 'active',
                          type: 'select',
                          label: 'Default positioning area',
                          source: '${links|appTranslate}',
                          labelField: 'title',
                          valueField: 'href',
                          value: '1',
                        },
                      ],
                      collapsed: false,
                      key: 'Basic',
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Status',
                      body: [
                        {
                          type: 'ae-StatusControl',
                          defaultTrue: true,
                          label: 'visible',
                          mode: 'normal',
                          name: 'visible',
                          expressionName: 'visibleOn',
                        },
                        {
                          type: 'ae-StatusControl',
                          label: 'hidden',
                          mode: 'normal',
                          name: 'hidden',
                          expressionName: 'hiddenOn',
                        },
                      ],
                      collapsed: false,
                      key: 'status',
                    },
                  ],
                },
              ],
              className: ' p-none',
            },
            {
              title: 'Appearance',
              body: [
                {
                  type: 'collapse-group',
                  activeKey: ['Basic'],
                  expandIconPosition: 'right',
                  expandIcon: {
                    type: 'icon',
                    icon: 'chevron-right',
                  },
                  className: 'ae-formItemControl ae-styleControl',
                  body: [
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Basic',
                      body: [
                        {
                          type: 'button-group-select',
                          name: 'direction',
                          label: 'Navigation Layout',
                          value: 'vertical',
                          options: [
                            {
                              label: 'Horizontal',
                              value: 'horizontal',
                            },
                            {
                              label: 'Vertical',
                              value: 'vertical',
                            },
                          ],
                        },
                      ],
                      collapsed: false,
                      key: 'Basic',
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'CSS 类名',
                      collapsed: true,
                      body: [
                        {
                          type: 'ae-classname',
                          name: 'className',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'outer layer',
                          },
                        },
                        {
                          type: 'ae-classname',
                          name: 'linkClassName',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Navigation',
                          },
                        },
                        {
                          type: 'ae-classname',
                          name: 'sectionClassName',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Area content',
                          },
                        },
                      ],
                      key: 'CSS 类名',
                    },
                  ],
                },
              ],
              className: ' p-none',
            },
          ],
        },
      ],
      patchContainers: ['anchor-nav.body'],
      vRendererConfig: {
        regions: {
          body: {
            key: 'body',
            label: 'Content Area',
            renderMethod: 'renderBody',
          },
        },
        panelTitle: 'Content Area',
        panelJustify: true,
        panelBody: [
          {
            type: 'tabs',
            tabsMode: 'line',
            className: 'editor-prop-config-tabs',
            linksClassName: 'editor-prop-config-tabs-links aa',
            contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
            tabs: [
              {
                title: 'Properties',
                body: [
                  {
                    type: 'collapse-group',
                    activeKey: ['Basic'],
                    expandIconPosition: 'right',
                    expandIcon: {
                      type: 'icon',
                      icon: 'chevron-right',
                    },
                    className: 'ae-formItemControl ae-styleControl',
                    body: [
                      {
                        type: 'collapse',
                        headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                        bodyClassName: 'ae-formItemControl-body',
                        title: 'Basic',
                        body: [
                          {
                            name: 'title',
                            label: 'Title',
                            type: 'input-text',
                            required: true,
                          },
                        ],
                        collapsed: false,
                        key: 'Basic',
                      },
                    ],
                  },
                ],
                className: ' p-none',
              },
              {
                title: 'Appearance',
                body: [
                  {
                    type: 'collapse-group',
                    activeKey: ['CSS class name'],
                    expandIconPosition: 'right',
                    expandIcon: {
                      type: 'icon',
                      icon: 'chevron-right',
                    },
                    className: 'ae-formItemControl ae-styleControl',
                    body: [
                      {
                        type: 'collapse',
                        headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                        bodyClassName: 'ae-formItemControl-body',
                        title: 'CSS 类名',
                        body: [
                          {
                            type: 'ae-classname',
                            name: 'className',
                            label: {
                              type: 'tooltip-wrapper',
                              tooltip:
                                'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                              tooltipTheme: 'dark',
                              placement: 'top',
                              tooltipStyle: {
                                fontSize: '12px',
                              },
                              className: 'ae-formItemControl-label-tip',
                              body: 'CSS class name',
                            },
                          },
                        ],
                        collapsed: false,
                        key: 'CSS 类名',
                      },
                    ],
                  },
                ],
                className: ' p-none',
              },
            ],
          },
        ],
      },
      wrapperProps: {
        unmountOnExit: true,
        mountOnEnter: true,
      },
      overrides: {},
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Text prompt container',
    name: 'tooltip',
    icon: 'fa fa-comment-alt',
    description:
      'Similar to a container, multiple renderers can be placed together. When the user hovers over or clicks the container, a text prompt floating layer is displayed',
    previewSchema: {
      type: 'tooltip-wrapper',
      tooltip: 'Tooltip text',
      body: [
        {
          type: 'tpl',
          wrapperComponent: '',
          tpl: 'Content',
        },
      ],
      enterable: true,
      showArrow: true,
      offset: [0, 0],
      className: 'p-1 mr-3 border-2 border-solid border-indigo-400',
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/tooltip',
    scaffold: {
      type: 'tooltip-wrapper',
      tooltip: 'Tooltip text',
      enterable: true,
      showArrow: true,
    },
    isBaseComponent: true,
    pluginIcon: 'tooltip-wrapper-plugin',
    rendererName: 'tooltip-wrapper',
    id: '92685a3a84f2',
    plugin: {
      rendererName: 'tooltip-wrapper',
      $schema: '/schemas/TooltipWrapperSchema.json',
      isBaseComponent: true,
      name: 'tooltip',
      description:
        'Similar to a container, multiple renderers can be placed together. When the user hovers over or clicks the container, a text prompt floating layer is displayed',
      searchKeywords: 'Text prompt container',
      docLink: '/amis/zh-CN/components/tooltip',
      icon: 'fa fa-comment-alt',
      pluginIcon: 'tooltip-wrapper-plugin',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
        },
      ],
      panelTitle: 'tooltip',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'alert',
    icon: 'fa fa-exclamation-circle',
    description:
      'Used to make special text prompts, divided into four categories: prompt, success, warning and danger. Can be combined with <code>visibleOn</code> to provide error message prompts. ',
    previewSchema: {
      type: 'alert',
      body: {
        type: 'tpl',
        tpl: 'Prompt content',
        wrapperComponent: '',
        inline: false,
      },
      level: 'info',
      className: 'text-left',
      showCloseButton: true,
    },
    tags: ['alert'],
    docLink: '/amis/zh-CN/components/alert',
    scaffold: {
      type: 'alert',
      level: 'info',
    },
    isBaseComponent: true,
    pluginIcon: 'tooltip-plugin',
    rendererName: 'alert',
    id: 'b77a77f39083',
    plugin: {
      rendererName: 'alert',
      $schema: '/schemas/AlertSchema.json',
      name: 'alert',
      isBaseComponent: true,
      description:
        'Used to make special text prompts, divided into four categories: prompt, success, warning and danger. Can be combined with <code>visibleOn</code> to provide error message prompts. ',
      docLink: '/amis/zh-CN/components/alert',
      icon: 'fa fa-exclamation-circle',
      pluginIcon: 'tooltip-plugin',
      regions: [
        {
          key: 'body',
          label: 'Content',
          placeholder: 'Alert content',
        },
      ],
      notRenderFormZone: true,
      panelTitle: 'Alert',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'wizard',
    icon: 'fa fa-list-ol',
    description:
      'Form wizard can split complex form items into multiple steps and guide users to complete the form step by step.',
    previewSchema: {
      type: 'wizard',
      className: 'text-left m-b-none',
      steps: [
        {
          title: 'First Step',
          body: [
            {
              type: 'input-text',
              label: 'Text',
              name: 'var1',
            },
          ],
        },
        {
          title: 'Step 2',
          body: [],
        },
      ],
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/wizard',
    scaffold: {
      type: 'wizard',
      steps: [
        {
          title: 'First Step',
          body: [
            {
              type: 'input-text',
              label: 'Text',
              name: 'var1',
            },
          ],
        },
        {
          title: 'Step 2',
          body: [
            {
              type: 'input-text',
              label: 'Text 2',
              name: 'var2',
            },
          ],
        },
      ],
    },
    isBaseComponent: true,
    pluginIcon: 'wizard-plugin',
    rendererName: 'wizard',
    id: '22f3d4c68d01',
    plugin: {
      rendererName: 'wizard',
      $schema: '/schemas/WizardSchema.json',
      name: 'wizard',
      isBaseComponent: true,
      description:
        'Form wizard can split complex form items into multiple steps and guide users to complete the form step by step.',
      docLink: '/amis/zh-CN/components/wizard',
      icon: 'fa fa-list-ol',
      pluginIcon: 'wizard-plugin',
      events: [
        {
          eventName: 'inited',
          eventLabel: 'Initialization data interface request completed',
          description: 'Triggered when the remote initialization data interface request is completed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    responseData: {
                      type: 'object',
                      title: 'Response Data',
                    },
                    responseStatus: {
                      type: 'number',
                      title: 'Response status (0 means success)',
                    },
                    responseMsg: {
                      type: 'string',
                      title: 'Response message',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'finished',
          eventLabel: 'Click to finish',
          description: 'Triggered on final submission',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'stepChange',
          eventLabel: 'Step Switch',
          description: 'Triggered when switching steps',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    step: {
                      type: 'string',
                      title: 'Step Index',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'change',
          eventLabel: 'Value change',
          description: 'Triggered when form value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                },
              },
            },
          ],
        },
        {
          eventName: 'submitSucc',
          eventLabel: 'Submission successful',
          description: 'Triggered when the final submission is successful',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    result: {
                      type: 'object',
                      title: 'Data returned after successful submission',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'submitFail',
          eventLabel: 'Submission failed',
          description: 'Triggered when the final submission fails',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    error: {
                      type: 'object',
                      title: 'Error message returned after submission fails',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'stepSubmitSucc',
          eventLabel: 'Step submitted successfully',
          description: 'Single step submission successful',
        },
        {
          eventName: 'stepSubmitFail',
          eventLabel: 'Step submission failed',
          description: 'Single step submission failed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    error: {
                      type: 'object',
                      title: 'Error message returned after a single step submission fails',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'submit',
          actionLabel: 'Submit All',
          description: 'Submit all data',
        },
        {
          actionType: 'stepSubmit',
          actionLabel: 'Submit in steps',
          description: 'Submit current step data',
        },
        {
          actionType: 'prev',
          actionLabel: 'Previous step',
          description: 'Return to the previous step',
        },
        {
          actionType: 'next',
          actionLabel: 'Next',
          description: 'Submit current step data',
        },
        {
          actionType: 'goto-step',
          actionLabel: 'Location Step',
          description: 'Switch to the specified step',
          innerArgs: ['step'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'ae-formulaControl',
                variableMode: 'tree',
                name: 'step',
                label: 'Target step',
                variables: '${variables}',
                size: 'lg',
                mode: 'horizontal',
                required: true,
              },
            ],
          },
        },
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Variable assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'Wizard',
      patchContainers: ['steps.body'],
      vRendererConfig: {
        regions: {
          body: {
            key: 'body',
            label: 'Form Collection',
          },
          actions: {
            label: 'Button Group',
            key: 'actions',
            preferTag: 'button',
          },
        },
        panelTitle: 'Steps',
      },
      overrides: {},
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Table display',
    name: 'Table View',
    icon: 'fa fa-columns',
    description: 'Table level display',
    previewSchema: {
      type: 'table-view',
      trs: [
        {
          background: '#F7F7F7',
          tds: [
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: 'Region',
              },
            },
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: 'city',
              },
            },
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: 'sales volume',
              },
            },
          ],
        },
        {
          tds: [
            {
              rowspan: 2,
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: 'North China',
              },
            },
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: 'Beijing',
              },
            },
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: '${beijing}',
              },
            },
          ],
        },
        {
          tds: [
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: 'Tianjin',
              },
            },
            {
              body: {
                type: 'tpl',
                wrapperComponent: '',
                tpl: '${tianjing}',
              },
            },
          ],
        },
      ],
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/table-view',
    scaffold: {
      type: 'table-view',
    },
    isBaseComponent: true,
    pluginIcon: 'table-view-plugin',
    rendererName: 'table-view',
    id: 'bb74838593b6',
    plugin: {
      rendererName: 'table-view',
      $schema: '/schemas/TableViewSchema.json',
      name: 'Table View',
      isBaseComponent: true,
      icon: 'fa fa-columns',
      pluginIcon: 'table-view-plugin',
      description: 'Table level display',
      searchKeywords: 'Table display',
      docLink: '/amis/zh-CN/components/table-view',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
          renderMethod: 'renderTdBody',
          preferTag: 'display',
        },
      ],
      panelTitle: 'Table View',
      panelJustify: true,
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'Properties',
              className: 'p-none p-none',
              body: [
                {
                  type: 'collapse-group',
                  activeKey: ['Basic', 'state'],
                  expandIconPosition: 'right',
                  expandIcon: {
                    type: 'icon',
                    icon: 'chevron-right',
                  },
                  className: 'ae-formItemControl ae-styleControl',
                  body: [
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Basic',
                      body: [
                        {
                          type: 'select',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Reference position',
                          },
                          name: 'originPosition',
                          value: 'left-top',
                          visibleOn:
                            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                          options: [
                            {
                              label: 'top left',
                              value: 'left-top',
                            },
                            {
                              label: 'top right',
                              value: 'right-top',
                            },
                            {
                              label: 'bottom right (default)',
                              value: 'right-bottom',
                            },
                            {
                              label: 'bottom left',
                              value: 'left-bottom',
                            },
                          ],
                        },
                        {
                          type: 'input-text',
                          name: 'caption',
                          label: 'caption',
                        },
                        {
                          label: 'Title Position',
                          name: 'captionSide',
                          type: 'button-group-select',
                          size: 'sm',
                          mode: 'row',
                          className: 'ae-buttonGroupSelect--justify',
                          visibleOn: 'this.caption',
                          options: [
                            {
                              label: 'Top',
                              value: 'top',
                            },
                            {
                              label: 'Bottom',
                              value: 'bottom',
                            },
                          ],
                        },
                        {
                          type: 'input-text',
                          label: 'View width',
                          name: 'width',
                          clearable: true,
                        },
                        {
                          type: 'input-text',
                          label: 'Default cell spacing',
                          name: 'padding',
                          clearable: true,
                        },
                        {
                          label: 'Show border',
                          name: 'border',
                          type: 'switch',
                          mode: 'row',
                          inputClassName: 'inline-flex justify-between flex-row-reverse',
                        },
                        {
                          label: 'Border Color',
                          type: 'input-color',
                          name: 'borderColor',
                          visibleOn: 'this.border || typeof this.border === "undefined"',
                        },
                      ],
                      collapsed: false,
                      key: 'Basic',
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Status',
                      body: [null, null],
                      collapsed: false,
                      key: 'status',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Appearance',
              className: 'p-none p-none',
              body: [
                {
                  type: 'collapse-group',
                  activeKey: [null, 'Basic style', 'Custom Style', 'Animation'],
                  expandIconPosition: 'right',
                  expandIcon: {
                    type: 'icon',
                    icon: 'chevron-right',
                  },
                  className: 'ae-formItemControl ae-styleControl',
                  body: [
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      header: 'Layout',
                      collapsed: false,
                      body: [
                        {
                          type: 'style-display',
                          label: false,
                          name: 'style',
                        },
                      ],
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Basic Style',
                      collapsed: false,
                      body: [
                        {
                          type: 'select',
                          mode: 'horizontal',
                          labelAlign: 'left',
                          labelWidth: 80,
                          name: '__editorStatebaseControlClassName',
                          label: 'Status',
                          selectFirst: true,
                          options: [
                            {
                              label: 'General',
                              value: 'default',
                            },
                            {
                              label: 'Suspension',
                              value: 'hover',
                            },
                            {
                              label: 'Click',
                              value: 'active',
                            },
                          ],
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-border',
                          label: 'Border',
                          name: 'themeCss.baseControlClassName.border:default',
                          needColorCustom: true,
                          visibleOn:
                            "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          state: 'default',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-radius',
                          label: 'Rounded Corners',
                          name: 'themeCss.baseControlClassName.radius:default',
                          visibleOn:
                            "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          state: 'default',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-padding-and-margin',
                          label: 'Margin',
                          name: 'themeCss.baseControlClassName.padding-and-margin:default',
                          visibleOn:
                            "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          state: 'default',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-color-picker',
                          label: 'Background',
                          name: 'themeCss.baseControlClassName.background:default',
                          needCustom: true,
                          visibleOn:
                            "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          needGradient: true,
                          needImage: true,
                          labelMode: 'input',
                          state: 'default',
                        },
                        {
                          type: 'amis-theme-shadow-editor',
                          label: false,
                          name: 'themeCss.baseControlClassName.boxShadow:default',
                          hasSenior: true,
                          visibleOn:
                            "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          state: 'default',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-border',
                          label: 'Border',
                          name: 'themeCss.baseControlClassName.border:hover',
                          needColorCustom: true,
                          visibleOn: "${__editorStatebaseControlClassName == 'hover'}",
                          state: 'hover',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-radius',
                          label: 'Rounded Corners',
                          name: 'themeCss.baseControlClassName.radius:hover',
                          visibleOn: "${__editorStatebaseControlClassName == 'hover'}",
                          state: 'hover',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-padding-and-margin',
                          label: 'Margin',
                          name: 'themeCss.baseControlClassName.padding-and-margin:hover',
                          visibleOn: "${__editorStatebaseControlClassName == 'hover'}",
                          state: 'hover',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-color-picker',
                          label: 'Background',
                          name: 'themeCss.baseControlClassName.background:hover',
                          needCustom: true,
                          visibleOn: "${__editorStatebaseControlClassName == 'hover'}",
                          needGradient: true,
                          needImage: true,
                          labelMode: 'input',
                          state: 'hover',
                        },
                        {
                          type: 'amis-theme-shadow-editor',
                          label: false,
                          name: 'themeCss.baseControlClassName.boxShadow:hover',
                          hasSenior: true,
                          visibleOn: "${__editorStatebaseControlClassName == 'hover'}",
                          state: 'hover',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-border',
                          label: 'Border',
                          name: 'themeCss.baseControlClassName.border:active',
                          needColorCustom: true,
                          visibleOn: "${__editorStatebaseControlClassName == 'active'}",
                          state: 'active',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-radius',
                          label: 'Rounded Corners',
                          name: 'themeCss.baseControlClassName.radius:active',
                          visibleOn: "${__editorStatebaseControlClassName == 'active'}",
                          state: 'active',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-padding-and-margin',
                          label: 'Margin',
                          name: 'themeCss.baseControlClassName.padding-and-margin:active',
                          visibleOn: "${__editorStatebaseControlClassName == 'active'}",
                          state: 'active',
                        },
                        {
                          mode: 'default',
                          type: 'amis-theme-color-picker',
                          label: 'Background',
                          name: 'themeCss.baseControlClassName.background:active',
                          needCustom: true,
                          visibleOn: "${__editorStatebaseControlClassName == 'active'}",
                          needGradient: true,
                          needImage: true,
                          labelMode: 'input',
                          state: 'active',
                        },
                        {
                          type: 'amis-theme-shadow-editor',
                          label: false,
                          name: 'themeCss.baseControlClassName.boxShadow:active',
                          hasSenior: true,
                          visibleOn: "${__editorStatebaseControlClassName == 'active'}",
                          state: 'active',
                        },
                      ],
                      key: 'Basic style',
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Custom Style',
                      collapsed: false,
                      body: [
                        {
                          type: 'theme-cssCode',
                          label: false,
                        },
                      ],
                      key: 'Custom style',
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Animation',
                      body: [
                        {
                          type: 'switch',
                          name: 'animations.enter',
                          label: 'Enter animation',
                        },
                        {
                          type: 'container',
                          className: 'm-b ae-ExtendMore',
                          visibleOn: '${animations && animations.enter}',
                          body: [
                            {
                              type: 'select',
                              name: 'animations.enter.type',
                              selectMode: 'group',
                              options: [
                                {
                                  label: '淡入',
                                  children: [
                                    {
                                      label: '淡入',
                                      value: 'fadeIn',
                                    },
                                    {
                                      value: 'fadeInDown',
                                      label: 'Fade in from top',
                                    },
                                    {
                                      value: 'fadeInDownBig',
                                      label: 'Fade in from top (to enhance the effect)',
                                    },
                                    {
                                      value: 'fadeInLeft',
                                      label: 'Fade in from left',
                                    },
                                    {
                                      value: 'fadeInLeftBig',
                                      label: 'Fade in from left (enhanced effect)',
                                    },
                                    {
                                      value: 'fadeInRight',
                                      label: 'Fade in from right',
                                    },
                                    {
                                      value: 'fadeInRightBig',
                                      label: 'Fade in from the right (enhanced effect)',
                                    },
                                    {
                                      value: 'fadeInUp',
                                      label: 'Fade in from bottom',
                                    },
                                    {
                                      value: 'fadeInUpBig',
                                      label: 'Fade in from bottom (enhanced effect)',
                                    },
                                  ],
                                },
                                {
                                  label: 'Rebound',
                                  children: [
                                    {
                                      value: 'backInDown',
                                      label: 'Enter from top rebound',
                                    },
                                    {
                                      value: 'backInLeft',
                                      label: 'Enter from left bounce',
                                    },
                                    {
                                      value: 'backInRight',
                                      label: 'Enter from right bounce',
                                    },
                                    {
                                      value: 'backInUp',
                                      label: 'Enter from bottom rebound',
                                    },
                                  ],
                                },
                                {
                                  label: 'Rotation',
                                  children: [
                                    {
                                      value: 'rotateIn',
                                      label: 'Rotate to enter',
                                    },
                                    {
                                      value: 'rotateInDownLeft',
                                      label: 'Rotate to enter from the upper left corner',
                                    },
                                    {
                                      value: 'rotateInDownRight',
                                      label: 'Rotate to enter from the upper right corner',
                                    },
                                    {
                                      value: 'rotateInUpLeft',
                                      label: 'Rotate to enter from the lower left corner',
                                    },
                                    {
                                      value: 'rotateInUpRight',
                                      label: 'Rotate to enter from the lower right corner',
                                    },
                                  ],
                                },
                                {
                                  label: 'Slide',
                                  children: [
                                    {
                                      value: 'slideInUp',
                                      label: 'Slide in from below',
                                    },
                                    {
                                      value: 'slideInDown',
                                      label: 'Slide in from top',
                                    },
                                    {
                                      value: 'slideInLeft',
                                      label: 'Slide in from the left',
                                    },
                                    {
                                      value: 'slideInRight',
                                      label: 'Slide in from the right',
                                    },
                                  ],
                                },
                                {
                                  label: 'Turn page',
                                  children: [
                                    {
                                      value: 'flip',
                                      label: 'Turn page',
                                    },
                                    {
                                      value: 'flipInY',
                                      label: 'Horizontal page flip',
                                    },
                                    {
                                      value: 'flipInX',
                                      label: 'Vertical page flip',
                                    },
                                  ],
                                },
                                {
                                  label: 'Bounce',
                                  children: [
                                    {
                                      value: 'bounceIn',
                                      label: 'Bounce into',
                                    },
                                    {
                                      value: 'bounceInDown',
                                      label: 'Bounce in from above',
                                    },
                                    {
                                      value: 'bounceInLeft',
                                      label: 'Bounce in from left',
                                    },
                                    {
                                      value: 'bounceInRight',
                                      label: 'Bounce in from the right',
                                    },
                                    {
                                      value: 'bounceInUp',
                                      label: 'Bounce in from bottom',
                                    },
                                  ],
                                },
                                {
                                  label: 'Zoom',
                                  children: [
                                    {
                                      value: 'zoomIn',
                                      label: 'Zoom in',
                                    },
                                    {
                                      value: 'zoomInDown',
                                      label: 'Zoom in from top',
                                    },
                                    {
                                      value: 'zoomInLeft',
                                      label: 'Zoom in from left',
                                    },
                                    {
                                      value: 'zoomInRight',
                                      label: 'Zoom in from right',
                                    },
                                    {
                                      value: 'zoomInUp',
                                      label: 'Zoom in from bottom',
                                    },
                                  ],
                                },
                                {
                                  label: 'Other',
                                  children: [
                                    {
                                      value: 'lightSpeedInLeft',
                                      label: 'Enter from the left at light speed',
                                    },
                                    {
                                      value: 'lightSpeedInRight',
                                      label: 'Enter from the right at light speed',
                                    },
                                    {
                                      value: 'rollIn',
                                      label: 'Scroll to enter',
                                    },
                                  ],
                                },
                              ],
                              label: 'level',
                              selectFirst: true,
                            },
                            {
                              type: 'input-number',
                              name: 'animations.enter.duration',
                              label: 'Continuous',
                              value: 1,
                              suffix: '秒',
                              min: 0,
                              precision: 3,
                            },
                            {
                              label: 'Delay',
                              type: 'input-number',
                              name: 'animations.enter.delay',
                              value: 0,
                              suffix: '秒',
                              precision: 3,
                            },
                          ],
                        },
                        {
                          type: 'button',
                          visibleOn: '${animations && animations.enter}',
                          className: 'm-b',
                          block: true,
                          level: 'enhance',
                          size: 'sm',
                          label: 'Play',
                        },
                        {
                          type: 'switch',
                          name: 'animations.attention',
                          label: 'Emphasis Animation',
                        },
                        {
                          type: 'container',
                          className: 'm-b ae-ExtendMore',
                          visibleOn: '${animations && animations.attention}',
                          body: [
                            {
                              type: 'select',
                              name: 'animations.attention.type',
                              selectMode: 'group',
                              options: [
                                {
                                  label: 'Bounce',
                                  value: 'bounce',
                                },
                                {
                                  label: 'Flashing',
                                  value: 'flash',
                                },
                                {
                                  value: 'headShake',
                                  label: 'Shake your head',
                                },
                                {
                                  value: 'heartBeat',
                                  label: 'Heartbeat',
                                },
                                {
                                  value: 'jello',
                                  label: 'jelly',
                                },
                                {
                                  label: 'Bounce',
                                  value: 'pulse',
                                },
                                {
                                  label: 'Swing',
                                  value: 'swing',
                                },
                                {
                                  label: 'Vibration',
                                  value: 'tada',
                                },
                                {
                                  label: 'Shake',
                                  value: 'wobble',
                                },
                                {
                                  label: 'Jitter',
                                  value: 'shake',
                                },
                                {
                                  value: 'shakeX',
                                  label: 'Horizontal jitter',
                                },
                                {
                                  value: 'shakeY',
                                  label: 'Vertical shake',
                                },
                                {
                                  value: 'rubberBand',
                                  label: 'Rubber Band',
                                },
                              ],
                              label: 'level',
                              selectFirst: true,
                            },
                            {
                              type: 'input-number',
                              name: 'animations.attention.duration',
                              label: 'Continuous',
                              value: 1,
                              suffix: '秒',
                              min: 0,
                              precision: 3,
                            },
                            {
                              label: 'Delay',
                              type: 'input-number',
                              name: 'animations.attention.delay',
                              value: 0,
                              suffix: '秒',
                              precision: 3,
                            },
                            {
                              label: 'Repeat',
                              type: 'select',
                              name: 'animations.attention.repeat',
                              value: 'infinite',
                              options: [
                                {
                                  label: 1,
                                  value: 1,
                                },
                                {
                                  label: 2,
                                  value: 2,
                                },
                                {
                                  label: 3,
                                  value: 3,
                                },
                                {
                                  label: 4,
                                  value: 4,
                                },
                                {
                                  label: 5,
                                  value: 5,
                                },
                                {
                                  label: 6,
                                  value: 6,
                                },
                                {
                                  label: 7,
                                  value: 7,
                                },
                                {
                                  label: 8,
                                  value: 8,
                                },
                                {
                                  label: 9,
                                  value: 9,
                                },
                                {
                                  label: 10,
                                  value: 10,
                                },
                                {
                                  label: 'Infinity',
                                  value: 'infinite',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'button',
                          visibleOn: '${animations && animations.attention}',
                          className: 'm-b',
                          block: true,
                          level: 'enhance',
                          size: 'sm',
                          label: 'Play',
                        },
                        {
                          type: 'switch',
                          name: 'animations.exit',
                          label: 'Exit animation',
                        },
                        {
                          type: 'container',
                          className: 'm-b ae-ExtendMore',
                          visibleOn: '${animations && animations.exit}',
                          body: [
                            {
                              type: 'select',
                              name: 'animations.exit.type',
                              selectMode: 'group',
                              options: [
                                {
                                  label: 'Fade Out',
                                  children: [
                                    {
                                      label: 'Fade Out',
                                      value: 'fadeOut',
                                    },
                                    {
                                      value: 'fadeOutDown',
                                      label: 'Fade Down',
                                    },
                                    {
                                      value: 'fadeOutDownBig',
                                      label: 'Fade down (enhance effect)',
                                    },
                                    {
                                      value: 'fadeOutLeft',
                                      label: 'Fade left',
                                    },
                                    {
                                      value: 'fadeOutLeftBig',
                                      label: 'Fade left (enhance effect)',
                                    },
                                    {
                                      value: 'fadeOutRight',
                                      label: 'Fade right',
                                    },
                                    {
                                      value: 'fadeOutRightBig',
                                      label: 'Fade to the right (enhance the effect)',
                                    },
                                    {
                                      value: 'fadeOutUp',
                                      label: 'Fade up',
                                    },
                                    {
                                      value: 'fadeOutUpBig',
                                      label: 'Fade upward (enhance effect)',
                                    },
                                  ],
                                },
                                {
                                  label: 'Rebound',
                                  children: [
                                    {
                                      value: 'backOutDown',
                                      label: 'Bounce down to exit',
                                    },
                                    {
                                      value: 'backOutLeft',
                                      label: 'Bounce left to exit',
                                    },
                                    {
                                      value: 'backOutRight',
                                      label: 'Bounce right to exit',
                                    },
                                    {
                                      value: 'backOutUp',
                                      label: 'Bounce upward to exit',
                                    },
                                  ],
                                },
                                {
                                  label: 'Rotation',
                                  children: [
                                    {
                                      value: 'rotateOut',
                                      label: 'Rotate to exit',
                                    },
                                    {
                                      value: 'rotateOutDownLeft',
                                      label: 'Upper left corner rotate to exit',
                                    },
                                    {
                                      value: 'rotateOutDownRight',
                                      label: 'Upper right corner rotate to exit',
                                    },
                                    {
                                      value: 'rotateOutUpLeft',
                                      label: 'Rotate to exit from lower left corner',
                                    },
                                    {
                                      value: 'rotateOutUpRight',
                                      label: 'Rotate to exit in the lower right corner',
                                    },
                                  ],
                                },
                                {
                                  label: 'Slide',
                                  children: [
                                    {
                                      value: 'slideOutUp',
                                      label: 'Slide up',
                                    },
                                    {
                                      value: 'slideOutDown',
                                      label: 'Slide down',
                                    },
                                    {
                                      value: 'slideOutLeft',
                                      label: 'Slide left',
                                    },
                                    {
                                      value: 'slideOutRight',
                                      label: 'Slide right',
                                    },
                                  ],
                                },
                                {
                                  label: 'Turn page',
                                  children: [
                                    {
                                      value: 'flipOutY',
                                      label: 'Horizontal page flip',
                                    },
                                    {
                                      value: 'flipOutX',
                                      label: 'Vertical page flip',
                                    },
                                  ],
                                },
                                {
                                  label: 'Bounce',
                                  children: [
                                    {
                                      value: 'bounceOut',
                                      label: 'Bounce exit',
                                    },
                                    {
                                      value: 'bounceOutDown',
                                      label: 'Bounce down to exit',
                                    },
                                    {
                                      value: 'bounceOutLeft',
                                      label: 'Bounce left to exit',
                                    },
                                    {
                                      value: 'bounceOutRight',
                                      label: 'Bounce right to exit',
                                    },
                                    {
                                      value: 'bounceOutUp',
                                      label: 'Bounce up to exit',
                                    },
                                  ],
                                },
                                {
                                  label: 'Zoom',
                                  children: [
                                    {
                                      value: 'zoomOut',
                                      label: 'Zoom Exit',
                                    },
                                    {
                                      value: 'zoomOutDown',
                                      label: 'Zoom up to exit',
                                    },
                                    {
                                      value: 'zoomOutLeft',
                                      label: 'Zoom left to exit',
                                    },
                                    {
                                      value: 'zoomOutRight',
                                      label: 'Zoom right to exit',
                                    },
                                    {
                                      value: 'zoomOutUp',
                                      label: 'Zoom down to exit',
                                    },
                                  ],
                                },
                                {
                                  label: 'Other',
                                  children: [
                                    {
                                      value: 'lightSpeedOutLeft',
                                      label: 'Exit left at light speed',
                                    },
                                    {
                                      value: 'lightSpeedOutRight',
                                      label: 'Exit right at light speed',
                                    },
                                    {
                                      value: 'rollOut',
                                      label: 'Scroll to exit',
                                    },
                                  ],
                                },
                              ],
                              label: 'level',
                              selectFirst: true,
                            },
                            {
                              type: 'input-number',
                              name: 'animations.exit.duration',
                              label: 'Continuous',
                              value: 1,
                              suffix: '秒',
                              min: 0,
                              precision: 3,
                            },
                            {
                              label: 'Delay',
                              type: 'input-number',
                              name: 'animations.exit.delay',
                              value: 0,
                              suffix: '秒',
                              precision: 3,
                            },
                          ],
                        },
                        {
                          type: 'button',
                          visibleOn: '${animations && animations.exit}',
                          className: 'm-b',
                          block: true,
                          level: 'enhance',
                          size: 'sm',
                          label: 'Play',
                        },
                      ],
                      collapsed: false,
                      key: 'Animation',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      overrides: {},
      tdVRendererConfig: {
        panelTitle: 'Cell',
      },
      trVRendererConfig: {
        panelTitle: ' 行',
      },
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Web Component',
    icon: 'fa fa-square-o',
    description: 'Used to render Web Component components',
    previewSchema: {
      type: 'web-component',
      tag: 'web-component-demo',
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/web-component',
    scaffold: {
      type: 'web-component',
      tag: 'web-component-demo',
    },
    isBaseComponent: true,
    pluginIcon: 'web-component-plugin',
    rendererName: 'web-component',
    id: '32a7e3177d51',
    plugin: {
      rendererName: 'web-component',
      $schema: '/schemas/WebComponentSchema.json',
      name: 'Web Component',
      isBaseComponent: true,
      description: 'Used to render Web Component components',
      docLink: '/amis/zh-CN/components/web-component',
      icon: 'fa fa-square-o',
      pluginIcon: 'web-component-plugin',
      panelTitle: 'Package',
      notRenderFormZone: true,
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'audio',
    icon: 'fa fa-music',
    description: 'Audio control, which can be used to play various audio files.',
    previewSchema: {
      type: 'audio',
      autoPlay: false,
      src: '',
    },
    tags: ['audio'],
    docLink: '/amis/zh-CN/components/audio',
    scaffold: {
      type: 'audio',
      autoPlay: false,
      src: '',
    },
    isBaseComponent: true,
    pluginIcon: 'audio-plugin',
    rendererName: 'audio',
    id: '9937072769e3',
    plugin: {
      rendererName: 'audio',
      $schema: '/schemas/AudioSchema.json',
      name: 'audio',
      isBaseComponent: true,
      description: 'Audio control, which can be used to play various audio files.',
      docLink: '/amis/zh-CN/components/audio',
      icon: 'fa fa-music',
      pluginIcon: 'audio-plugin',
      panelTitle: 'Audio',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'video',
    icon: 'fa fa-video-camera',
    description: 'Video control, can be used to play various video files, including flv and hls formats.',
    previewSchema: {
      type: 'video',
      autoPlay: false,
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      poster:
        "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/video',
    scaffold: {
      type: 'video',
      autoPlay: false,
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      poster:
        "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
    },
    isBaseComponent: true,
    pluginIcon: 'video-plugin',
    rendererName: 'video',
    id: '2280b685b7c9',
    plugin: {
      rendererName: 'video',
      $schema: '/schemas/VideoSchema.json',
      name: 'video',
      isBaseComponent: true,
      description: 'Video control, can be used to play various video files, including flv and hls formats.',
      docLink: '/amis/zh-CN/components/video',
      icon: 'fa fa-video-camera',
      pluginIcon: 'video-plugin',
      panelTitle: 'Video',
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'General',
              body: [
                {
                  type: 'select',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'Reference position',
                  },
                  name: 'originPosition',
                  value: 'left-top',
                  visibleOn:
                    'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                  options: [
                    {
                      label: 'top left',
                      value: 'left-top',
                    },
                    {
                      label: 'top right',
                      value: 'right-top',
                    },
                    {
                      label: 'bottom right (default)',
                      value: 'right-bottom',
                    },
                    {
                      label: 'bottom left',
                      value: 'left-bottom',
                    },
                  ],
                },
                {
                  name: 'src',
                  type: 'input-text',
                  label: 'Video URL',
                  description: 'You can write static values ​​or use variables, such as: <code>\\${videoSrc}</code>',
                },
                {
                  name: 'poster',
                  type: 'input-text',
                  label: 'Video cover image address',
                  description:
                    'You can write static values ​​or use variables, for example: <code>\\${videoPoster}</code>',
                },
                {
                  type: 'switch',
                  mode: 'horizontal',
                  inputClassName: 'is-inline ',
                  name: 'autoPlay',
                  label: 'Autoplay',
                },
                {
                  type: 'switch',
                  mode: 'horizontal',
                  inputClassName: 'is-inline ',
                  name: 'muted',
                  label: 'Mute',
                },
                {
                  type: 'switch',
                  mode: 'horizontal',
                  inputClassName: 'is-inline ',
                  name: 'isLive',
                  label: 'Live Stream',
                  labelRemark: {
                    className: 'm-l-xs',
                    trigger: 'click',
                    rootClose: true,
                    placement: 'left',
                    content: 'If it is a live stream, please check this option, otherwise it may not play properly.',
                  },
                },
              ],
            },
            {
              title: 'Appearance',
              body: [
                {
                  name: 'aspectRatio',
                  label: 'Video Ratio',
                  type: 'button-group-select',
                  size: 'sm',
                  mode: 'inline',
                  className: 'block',
                  value: 'auto',
                  options: [
                    {
                      label: 'Automatic',
                      value: 'auto',
                    },
                    {
                      label: '4:3',
                      value: '4:3',
                    },
                    {
                      label: '16:9',
                      value: '16:9',
                    },
                  ],
                },
                {
                  type: 'switch',
                  mode: 'horizontal',
                  inputClassName: 'is-inline ',
                  name: 'splitPoster',
                  label: 'Display cover separately',
                },
                {
                  type: 'ae-classname',
                  name: 'className',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'CSS class name',
                  },
                },
              ],
            },
            {
              title: '显隐',
              body: [null],
            },
            {
              title: 'Other',
              body: [
                null,
                {
                  type: 'input-text',
                  name: 'rates',
                  label: 'Video Rate',
                  multiple: true,
                  joinValues: false,
                  extractValue: true,
                  options: [
                    {
                      label: 0.5,
                      value: 0.5,
                    },
                    {
                      label: 1,
                      value: 1,
                    },
                    {
                      label: 1.25,
                      value: 1.25,
                    },
                    {
                      label: 1.5,
                      value: 1.5,
                    },
                    {
                      label: 2,
                      value: 2,
                    },
                    {
                      label: 2.5,
                      value: 2.5,
                    },
                    {
                      label: 3,
                      value: 3,
                    },
                    {
                      label: 3.5,
                      value: 3.5,
                    },
                    {
                      label: 4,
                      value: 4,
                    },
                    {
                      label: 4.5,
                      value: 4.5,
                    },
                    {
                      label: 5,
                      value: 5,
                    },
                  ],
                },
                {
                  name: 'frames',
                  type: 'input-text',
                  label: 'Video frame information',
                  description:
                    'For example, if you fill in: <code>\\${videoFrames}</code>, the variable videoFrames will be searched in the current scope. If it is an object, a list of video screenshots will be generated. Click it to jump to the corresponding frame.',
                },
              ],
            },
          ],
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Function',
    icon: 'fa fa-gears',
    description: 'Implement functionality through embedded code',
    previewSchema: {
      type: 'custom',
      html: '<div><h2>hello, world!</h2></div>',
      onMount:
        "\n const button = document.createElement('button');\n button.innerText = 'Click to modify your name';\n button.onclick = event => {\n event.preventDefault();\n };\n dom.appendChild(button);",
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/custom',
    scaffold: {
      type: 'custom',
      html: '<div><h2>hello, world!</h2></div>',
      onMount:
        "\n const button = document.createElement('button');\n button.innerText = 'Click to modify the name ddd';\n button.onclick = event => {\n onChange('new name');\n event.preventDefault();\n };\n dom.appendChild(button);",
    },
    isBaseComponent: true,
    pluginIcon: 'custom-plugin',
    rendererName: 'custom',
    id: 'b8a325702873',
    plugin: {
      rendererName: 'custom',
      $schema: '/schemas/CustomSchema.json',
      name: 'Function',
      isBaseComponent: true,
      description: 'Implement functionality through embedded code',
      icon: 'fa fa-gears',
      pluginIcon: 'custom-plugin',
      docLink: '/amis/zh-CN/components/custom',
      panelTitle: 'Custom Code',
      panelBody: [
        {
          type: 'select',
          label: {
            type: 'tooltip-wrapper',
            tooltip:
              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
            tooltipTheme: 'dark',
            placement: 'top',
            tooltipStyle: {
              fontSize: '12px',
            },
            className: 'ae-formItemControl-label-tip',
            body: 'Reference position',
          },
          name: 'originPosition',
          value: 'left-top',
          visibleOn:
            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
          options: [
            {
              label: 'top left',
              value: 'left-top',
            },
            {
              label: 'top right',
              value: 'right-top',
            },
            {
              label: 'bottom right (default)',
              value: 'right-bottom',
            },
            {
              label: 'bottom left',
              value: 'left-bottom',
            },
          ],
        },
        {
          collapsable: true,
          collapsed: false,
          title: 'HTML Content',
          body: [
            {
              label: 'HTML content',
              name: 'html',
              type: 'editor',
              allowFullscreen: true,
            },
          ],
          type: 'fieldset',
        },
        {
          collapsable: true,
          collapsed: false,
          title: 'onMount',
          body: [
            {
              name: 'onMount',
              type: 'editor',
              allowFullscreen: true,
              size: 'xxl',
              label: 'onMount code',
              options: {
                lineNumbers: 'off',
                glyphMargin: false,
                lineDecorationsWidth: 0,
                lineNumbersMinChars: 0,
              },
            },
          ],
          type: 'fieldset',
        },
        {
          collapsable: true,
          collapsed: false,
          title: 'onUpdate',
          body: [
            {
              name: 'onUpdate',
              type: 'editor',
              allowFullscreen: true,
              size: 'xxl',
              label: 'onUpdate code',
            },
          ],
          type: 'fieldset',
        },
        {
          collapsable: true,
          collapsed: false,
          title: 'onUnmount',
          body: [
            {
              name: 'onUnmount',
              type: 'editor',
              allowFullscreen: true,
              size: 'xxl',
              label: 'onUnmount code',
            },
          ],
          type: 'fieldset',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Task operation collection',
    name: 'tasks',
    icon: '',
    description: 'Used for asynchronous task presentation or operation.',
    previewSchema: {
      type: 'tasks',
      name: 'tasks',
      items: [
        {
          label: 'hive task',
          key: 'hive',
          status: 4,
          remark: 'View details <a target="_blank" href="http://www.baidu.com">log</a>.',
        },
        {
          label: 'Low traffic',
          key: 'partial',
          status: 4,
        },
        {
          label: 'Full',
          key: 'full',
          status: 4,
        },
      ],
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/tasks',
    scaffold: {
      type: 'tasks',
      name: 'tasks',
    },
    isBaseComponent: true,
    pluginIcon: 'tasks-plugin',
    rendererName: 'tasks',
    id: '19b6cca1f87b',
    plugin: {
      rendererName: 'tasks',
      $schema: '/schemas/TasksSchema.json',
      name: 'tasks',
      isBaseComponent: true,
      description: 'Used for asynchronous task presentation or operation.',
      searchKeywords: 'Task operation collection',
      docLink: '/amis/zh-CN/components/tasks',
      icon: '',
      pluginIcon: 'tasks-plugin',
      panelTitle: 'Asynchronous Tasks',
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Loop Renderer',
    name: 'For Each',
    icon: 'fa fa-repeat',
    description: 'Functional renderer that can loop over output renderers based on existing variables.',
    previewSchema: {
      type: 'each',
      name: '',
      items: {
        type: 'container',
        body: [
          {
            type: 'container',
            body: [
              {
                type: 'icon',
                icon: 'fa fa-plane',
                vendor: '',
                themeCss: {
                  className: {
                    'padding-and-margin:default': {
                      marginRight: '4px',
                    },
                    font: {
                      color: '#2856ad',
                      fontSize: '20px',
                    },
                  },
                },
                id: 'u:7fb7aa9c1c43',
              },
              {
                type: 'tpl',
                style: {},
                tpl: 'TOP1 in number of return visits',
                inline: true,
                wrapperComponent: '',
                themeCss: {
                  baseControlClassName: {
                    'font:default': {
                      fontWeight: 'var(--fonts-weight-3)',
                      fontSize: '16px',
                      color: 'var(--colors-brand-6)',
                    },
                  },
                },
                id: 'u:5b5f4735dcb0',
              },
            ],
            style: {
              position: 'static',
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
            },
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
            themeCss: {
              baseControlClassName: {
                'padding-and-margin:default': {
                  marginBottom: '6px',
                },
              },
            },
            id: 'u:ee96c8898ee8',
          },
          {
            type: 'container',
            body: [
              {
                type: 'tpl',
                tpl: 'Beijing Branch',
                inline: true,
                wrapperComponent: '',
                style: {},
                themeCss: {
                  baseControlClassName: {
                    'font:default': {
                      fontSize: 'var(--fonts-size-4)',
                      color: 'var(--colors-neutral-text-2)',
                      fontWeight: 'var(--fonts-weight-3)',
                      'font-family': '-apple-system',
                    },
                  },
                },
                id: 'u:d7c386d27b64',
              },
            ],
            style: {
              position: 'static',
              display: 'block',
            },
            wrapperBody: false,
            id: 'u:ba92a34b6492',
          },
        ],
        size: 'none',
        style: {
          position: 'static',
          display: 'block',
          flex: '0 0 150px',
          flexBasis: '250px',
          overflowX: 'auto',
          overflowY: 'auto',
        },
        wrapperBody: false,
        isFixedHeight: false,
        themeCss: {
          baseControlClassName: {
            'boxShadow:default': ' 0px 0px 8px 0px rgba(3, 3, 3, 0.1)',
            'radius:default': {
              'top-left-border-radius': 'var(--borders-radius-3)',
              'top-right-border-radius': 'var(--borders-radius-3)',
              'bottom-left-border-radius': 'var(--borders-radius-3)',
              'bottom-right-border-radius': 'var(--borders-radius-3)',
            },
            'padding-and-margin:default': {
              marginRight: '20px',
              paddingTop: '20px',
              paddingRight: '15px',
              paddingBottom: '20px',
              paddingLeft: '15px',
            },
          },
        },
        id: 'u:7484a2c497ed',
      },
      placeholder: '',
      style: {
        position: 'static',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        transform: 'scale(0.6)',
        width: '600px',
        transformOrigin: 'left top',
      },
      isFixedHeight: false,
      isFixedWidth: false,
      size: 'none',
      id: 'u:330fe2b1f73e',
      value: ['a', 'b'],
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/each',
    scaffold: {
      type: 'each',
      name: '',
      placeholder: '',
      style: {
        position: 'static',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
      },
      isFixedHeight: false,
      isFixedWidth: false,
      size: 'none',
      id: 'u:330fe2b1f73e',
    },
    isBaseComponent: true,
    pluginIcon: 'each-plugin',
    rendererName: 'each',
    id: 'badad6626d84',
    plugin: {
      rendererName: 'each',
      $schema: '/schemas/EachSchema.json',
      name: 'For Each',
      isBaseComponent: true,
      isListComponent: true,
      memberImmutable: true,
      description: 'Functional renderer that can loop over output renderers based on existing variables.',
      searchKeywords: 'Loop Renderer',
      docLink: '/amis/zh-CN/components/each',
      icon: 'fa fa-repeat',
      pluginIcon: 'each-plugin',
      panelTitle: 'Loop',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'property',
    icon: 'fa fa-list',
    description: 'Properties表',
    previewSchema: {
      type: 'property',
      title: 'Machine Configuration',
      items: [
        {
          label: 'cpu',
          content: '1 core',
        },
        {
          label: 'memory',
          content: '4G',
        },
        {
          label: 'disk',
          content: '80G',
        },
        {
          label: 'network',
          content: '4M',
          span: 2,
        },
        {
          label: 'IDC',
          content: 'beijing',
        },
        {
          label: 'Note',
          content: 'Other instructions',
          span: 3,
        },
      ],
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/property',
    scaffold: {
      type: 'property',
      title: 'Machine Configuration',
    },
    isBaseComponent: true,
    pluginIcon: 'property-sheet-plugin',
    rendererName: 'property',
    id: 'e21675df049d',
    plugin: {
      rendererName: 'property',
      $schema: '/schemas/PropertySchema.json',
      name: 'property',
      isBaseComponent: true,
      icon: 'fa fa-list',
      pluginIcon: 'property-sheet-plugin',
      description: 'Properties表',
      docLink: '/amis/zh-CN/components/property',
      panelTitle: 'Properties表',
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'General',
              body: [
                {
                  type: 'select',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'Reference position',
                  },
                  name: 'originPosition',
                  value: 'left-top',
                  visibleOn:
                    'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                  options: [
                    {
                      label: 'top left',
                      value: 'left-top',
                    },
                    {
                      label: 'top right',
                      value: 'right-top',
                    },
                    {
                      label: 'bottom right (default)',
                      value: 'right-bottom',
                    },
                    {
                      label: 'bottom left',
                      value: 'left-bottom',
                    },
                  ],
                },
                {
                  label: 'title',
                  type: 'input-text',
                  name: 'title',
                },
                {
                  label: 'How many columns are displayed per row',
                  type: 'input-number',
                  value: 3,
                  name: 'column',
                },
                {
                  type: 'radios',
                  name: 'mode',
                  inline: true,
                  value: 'table',
                  label: 'Display Mode',
                  options: ['table', 'simple'],
                },
                {
                  label: 'Separator',
                  type: 'input-text',
                  name: 'separator',
                  visibleOn: 'this.mode === "simple"',
                },
                {
                  label: 'Properties taken from variables',
                  type: 'input-text',
                  name: 'source',
                },
                {
                  label: 'Properties List',
                  name: 'items',
                  type: 'combo',
                  multiple: true,
                  multiLine: true,
                  draggable: true,
                  addButtonText: 'Add',
                  scaffold: {
                    label: '',
                    content: '',
                    span: 1,
                  },
                  items: [
                    {
                      type: 'input-text',
                      mode: 'inline',
                      size: 'sm',
                      label: 'Properties name',
                      name: 'label',
                    },
                    {
                      type: 'input-text',
                      mode: 'inline',
                      size: 'sm',
                      label: 'Properties值',
                      name: 'content',
                    },
                    {
                      type: 'input-number',
                      mode: 'inline',
                      size: 'sm',
                      label: 'Spanning columns',
                      value: 1,
                      name: 'span',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Appearance',
              body: [
                {
                  type: 'ae-classname',
                  name: 'className',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'CSS class name',
                  },
                },
              ],
            },
            {
              title: '显隐',
              body: [null, null],
            },
          ],
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'iFrame',
    icon: 'fa fa-window-maximize',
    description: 'Can be embedded into existing pages.',
    previewSchema: {
      type: 'tpl',
      tpl: 'iFrame',
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/iframe',
    scaffold: {
      type: 'iframe',
      src: '//www.baidu.com',
    },
    isBaseComponent: true,
    pluginIcon: 'iframe-plugin',
    rendererName: 'iframe',
    id: 'c470721518b0',
    plugin: {
      rendererName: 'iframe',
      $schema: '/schemas/IFrameSchema.json',
      name: 'iFrame',
      isBaseComponent: true,
      description: 'Can be embedded into existing pages.',
      docLink: '/amis/zh-CN/components/iframe',
      icon: 'fa fa-window-maximize',
      pluginIcon: 'iframe-plugin',
      panelTitle: 'iFrame',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'qrcode',
    icon: 'fa fa-qrcode',
    description: 'Can be used to generate QR codes',
    previewSchema: {
      type: 'qrcode',
      value: 'https://amis.baidu.com',
    },
    tags: ['Function'],
    docLink: '/amis/zh-CN/components/qrcode',
    scaffold: {
      type: 'qrcode',
      value: 'https://amis.baidu.com',
    },
    isBaseComponent: true,
    pluginIcon: 'qrcode-plugin',
    rendererName: 'qrcode',
    id: '3f155fee61ab',
    plugin: {
      rendererName: 'qrcode',
      $schema: '/schemas/QRCodeSchema.json',
      name: 'qrcode',
      isBaseComponent: true,
      description: 'Can be used to generate QR codes',
      docLink: '/amis/zh-CN/components/qrcode',
      icon: 'fa fa-qrcode',
      pluginIcon: 'qrcode-plugin',
      actions: [
        {
          actionType: 'saveAs',
          actionLabel: 'Download',
          description: 'Trigger QR code download',
        },
      ],
      panelTitle: 'QR Code',
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'General',
              body: [
                {
                  type: 'select',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'Reference position',
                  },
                  name: 'originPosition',
                  value: 'left-top',
                  visibleOn:
                    'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                  options: [
                    {
                      label: 'top left',
                      value: 'left-top',
                    },
                    {
                      label: 'top right',
                      value: 'right-top',
                    },
                    {
                      label: 'bottom right (default)',
                      value: 'right-bottom',
                    },
                    {
                      label: 'bottom left',
                      value: 'left-bottom',
                    },
                  ],
                },
                {
                  name: 'value',
                  type: 'input-text',
                  label: 'QR code value',
                  description: 'Supports using <code>\\${xxx}</code> to get variables',
                },
                {
                  name: 'level',
                  type: 'select',
                  label: 'Complexity',
                  options: [
                    {
                      label: 'L',
                      value: 'L',
                    },
                    {
                      label: 'M',
                      value: 'M',
                    },
                    {
                      label: 'Q',
                      value: 'Q',
                    },
                    {
                      label: 'H',
                      value: 'H',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Appearance',
              body: [
                {
                  name: 'codeSize',
                  type: 'input-number',
                  label: 'width and height',
                },
                {
                  name: 'backgroundColor',
                  type: 'input-color',
                  label: 'Background color',
                },
                {
                  name: 'foregroundColor',
                  type: 'input-color',
                  label: 'Foreground color',
                },
                {
                  type: 'ae-classname',
                  name: 'className',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'CSS class name',
                  },
                },
              ],
            },
            {
              title: '显隐',
              body: [null, null],
            },
          ],
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Icon',
    icon: 'fa fa-calendar',
    description: 'Used to display an icon. You can configure different icon styles.',
    previewSchema: {
      type: 'icon',
      icon: 'fa fa-spotify',
      vendor: '',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/icon',
    scaffold: {
      type: 'icon',
      icon: 'fa fa-spotify',
      vendor: '',
    },
    isBaseComponent: true,
    pluginIcon: 'button-plugin',
    rendererName: 'icon',
    id: '1f7ae49d7f09',
    plugin: {
      rendererName: 'icon',
      $schema: '/schemas/Icon.json',
      name: 'Icon',
      isBaseComponent: true,
      icon: 'fa fa-calendar',
      panelTitle: 'Icon',
      description: 'Used to display an icon. You can configure different icon styles.',
      docLink: '/amis/zh-CN/components/icon',
      pluginIcon: 'button-plugin',
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'link',
    icon: 'fa fa-link',
    description: 'Used to display text links',
    previewSchema: {
      type: 'link',
      value: 'http://www.baidu.com/',
      label: 'link',
    },
    tags: ['exhibit'],
    scaffold: {
      type: 'link',
      value: 'http://www.baidu.com/',
    },
    isBaseComponent: true,
    pluginIcon: 'url-plugin',
    rendererName: 'link',
    id: '3ab7d06d360e',
    plugin: {
      rendererName: 'link',
      $schema: '/schemas/LinkSchema.json',
      name: 'link',
      isBaseComponent: true,
      description: 'Used to display text links',
      icon: 'fa fa-link',
      pluginIcon: 'url-plugin',
      panelTitle: 'Link',
      panelJustify: true,
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'Properties',
              body: [
                {
                  type: 'collapse-group',
                  activeKey: ['Basic', null, 'state'],
                  expandIconPosition: 'right',
                  expandIcon: {
                    type: 'icon',
                    icon: 'chevron-right',
                  },
                  className: 'ae-formItemControl ae-styleControl',
                  body: [
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Basic',
                      body: [
                        {
                          type: 'select',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Reference position',
                          },
                          name: 'originPosition',
                          value: 'left-top',
                          visibleOn:
                            'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                          options: [
                            {
                              label: 'top left',
                              value: 'left-top',
                            },
                            {
                              label: 'top right',
                              value: 'right-top',
                            },
                            {
                              label: 'bottom right (default)',
                              value: 'right-bottom',
                            },
                            {
                              label: 'bottom left',
                              value: 'left-bottom',
                            },
                          ],
                        },
                        {
                          type: 'group',
                          mode: 'horizontal',
                          body: [
                            {
                              type: 'ae-formulaControl',
                              label: {
                                type: 'tooltip-wrapper',
                                tooltip:
                                  "Supports variable retrieval. If the field name has been bound, you don't need to set it",
                                tooltipTheme: 'dark',
                                placement: 'top',
                                tooltipStyle: {
                                  fontSize: '12px',
                                },
                                className: 'ae-formItemControl-label-tip',
                                body: 'Destination address',
                              },
                              name: 'href',
                              rendererSchema: {
                                type: 'input-text',
                              },
                              DateTimeType: 0,
                            },
                          ],
                        },
                        {
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip: 'If not filled in, the target address value will be used automatically',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Content',
                          },
                          type: 'ae-textareaFormulaControl',
                          mode: 'normal',
                          name: 'body',
                        },
                        {
                          type: 'switch',
                          mode: 'horizontal',
                          inputClassName: 'is-inline ',
                          name: 'blank',
                          label: 'Open in new window',
                        },
                        {
                          label: 'Left Icon',
                          type: 'icon-picker',
                          name: 'icon',
                          placeholder: 'clickTheSelectIcon',
                          clearable: true,
                          description: '',
                        },
                        {
                          label: 'Right Icon',
                          type: 'icon-picker',
                          name: 'rightIcon',
                          placeholder: 'clickTheSelectIcon',
                          clearable: true,
                          description: '',
                        },
                      ],
                      collapsed: false,
                      key: 'Basic',
                    },
                    {
                      type: 'collapse-group',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      activeKey: ['Advanced settings'],
                      expandIconPosition: 'right',
                      expandIcon: {
                        type: 'icon',
                        icon: 'chevron-right',
                      },
                      className: 'ae-formItemControl ae-styleControl',
                      body: [
                        {
                          type: 'collapse',
                          headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                          bodyClassName: 'ae-formItemControl-body',
                          title: 'Advanced Settings',
                          body: [
                            {
                              name: 'htmlTarget',
                              type: 'input-text',
                              label: {
                                type: 'tooltip-wrapper',
                                tooltip:
                                  'The targetProperties of the HTML <a> element, which specifies where to display the linked resource',
                                tooltipTheme: 'dark',
                                placement: 'top',
                                tooltipStyle: {
                                  fontSize: '12px',
                                },
                                className: 'ae-formItemControl-label-tip',
                                body: 'anchor',
                              },
                            },
                          ],
                          collapsed: false,
                          key: 'Advanced Settings',
                        },
                      ],
                      collapsed: false,
                    },
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'Status',
                      body: [
                        null,
                        null,
                        {
                          type: 'ae-StatusControl',
                          label: 'disable',
                          mode: 'normal',
                          name: 'disabled',
                          expressionName: 'disabledOn',
                        },
                      ],
                      collapsed: false,
                      key: 'status',
                    },
                  ],
                },
              ],
              className: ' p-none',
            },
            {
              title: 'Appearance',
              body: [
                {
                  type: 'collapse-group',
                  activeKey: [],
                  expandIconPosition: 'right',
                  expandIcon: {
                    type: 'icon',
                    icon: 'chevron-right',
                  },
                  className: 'ae-formItemControl ae-styleControl',
                  body: [
                    {
                      type: 'collapse',
                      headingClassName: 'ae-formItemControl-header ae-Collapse-header',
                      bodyClassName: 'ae-formItemControl-body',
                      title: 'CSS 类名',
                      collapsed: true,
                      body: [
                        {
                          type: 'ae-classname',
                          name: 'className',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'outer layer',
                          },
                        },
                        {
                          type: 'ae-classname',
                          name: 'iconClassName',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Left icon',
                          },
                          visibleOn: 'this.icon',
                        },
                        {
                          type: 'ae-classname',
                          name: 'rightIconClassName',
                          label: {
                            type: 'tooltip-wrapper',
                            tooltip:
                              'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                            tooltipTheme: 'dark',
                            placement: 'top',
                            tooltipStyle: {
                              fontSize: '12px',
                            },
                            className: 'ae-formItemControl-label-tip',
                            body: 'Right icon',
                          },
                          visibleOn: 'this.rightIcon',
                        },
                      ],
                      key: 'CSS 类名',
                    },
                  ],
                },
              ],
              className: ' p-none',
            },
          ],
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'list2',
    icon: 'fa fa-window-maximize',
    description:
      'The function is similar to a table, but it uses small cards to display data. The current component needs to configure the data source and does not have its own data pull. Please use the "CRUD" component first.',
    previewSchema: {
      type: 'cards',
      columnsCount: 1,
      card: {
        type: 'container',
        body: [
          {
            type: 'container',
            body: [
              {
                type: 'tpl',
                tpl: '01',
                inline: true,
                wrapperComponent: '',
                style: {},
                themeCss: {
                  baseControlClassName: {
                    'padding-and-margin:default': {
                      marginRight: '10px',
                    },
                    'font:default': {
                      color: 'var(--colors-neutral-text-2)',
                      fontSize: 'var(--fonts-size-3)',
                      fontWeight: 'var(--fonts-weight-5)',
                    },
                  },
                },
                id: 'u:0597d8ab5c3a',
              },
              {
                type: 'tpl',
                tpl: '/',
                inline: true,
                wrapperComponent: '',
                style: {},
                id: 'u:95d2a3ac3e70',
                themeCss: {
                  baseControlClassName: {
                    'padding-and-margin:default': {
                      marginRight: '10px',
                    },
                    'font:default': {
                      fontSize: 'var(--fonts-size-3)',
                      color: '#cccccc',
                    },
                  },
                },
              },
              {
                type: 'container',
                body: [
                  {
                    type: 'tpl',
                    tpl: '3月',
                    inline: true,
                    wrapperComponent: '',
                    style: {},
                    themeCss: {
                      baseControlClassName: {
                        'font:default': {
                          fontSize: 'var(--fonts-size-6)',
                        },
                      },
                    },
                    id: 'u:d153d5c33ebf',
                  },
                  {
                    type: 'tpl',
                    tpl: '2023',
                    inline: true,
                    wrapperComponent: '',
                    style: {},
                    themeCss: {
                      baseControlClassName: {
                        'font:default': {
                          fontSize: 'var(--fonts-size-6)',
                        },
                      },
                    },
                    id: 'u:4e03af905add',
                  },
                ],
                style: {
                  position: 'static',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: 'u:3e3e5dc43b6a',
              },
            ],
            size: 'none',
            style: {
              position: 'static',
              display: 'flex',
              flex: '1 1 auto',
              flexGrow: 0,
              flexBasis: 'auto',
              flexWrap: 'nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
            },
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
            themeCss: {
              baseControlClassName: {
                'border:default': {
                  'right-border-width': 'var(--borders-width-2)',
                  'right-border-style': 'var(--borders-style-2)',
                  'right-border-color': '#ececec',
                },
                'padding-and-margin:default': {
                  paddingLeft: '20px',
                  paddingRight: '40px',
                  marginRight: '40px',
                },
              },
            },
            id: 'u:7a02e453c997',
          },
          {
            type: 'container',
            body: [
              {
                type: 'tpl',
                tpl: 'List Title',
                inline: true,
                wrapperComponent: '',
                style: {},
                maxLine: 1,
                id: 'u:105ca9cda3ef',
                themeCss: {
                  baseControlClassName: {
                    'padding-and-margin:default': {
                      marginBottom: '10px',
                    },
                    'font:default': {
                      fontSize: 'var(--fonts-size-5)',
                      color: 'var(--colors-neutral-text-4)',
                      fontWeight: 'var(--fonts-weight-4)',
                    },
                  },
                },
              },
              {
                type: 'tpl',
                tpl: 'This is the content summary, you can set the number of lines to display',
                inline: true,
                wrapperComponent: '',
                maxLine: 1,
                style: {},
                themeCss: {
                  baseControlClassName: {
                    'font:default': {
                      fontSize: '13px',
                      color: 'var(--colors-neutral-text-5)',
                    },
                  },
                },
                id: 'u:d8e3f4be33db',
              },
            ],
            size: 'none',
            style: {
              position: 'static',
              display: 'flex',
              flex: '1 1 auto',
              flexGrow: 1,
              flexBasis: 'auto',
              flexWrap: 'nowrap',
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
            id: 'u:0c0b56fd0c17',
          },
          {
            type: 'container',
            body: [
              {
                type: 'button',
                label: 'View details',
                onEvent: {
                  click: {
                    actions: [],
                  },
                },
                level: 'default',
                size: 'default',
                themeCss: {
                  className: {
                    'border:default': {
                      'top-border-width': 'var(--borders-width-2)',
                      'left-border-width': 'var(--borders-width-2)',
                      'right-border-width': 'var(--borders-width-2)',
                      'bottom-border-width': 'var(--borders-width-2)',
                      'top-border-style': 'var(--borders-style-2)',
                      'left-border-style': 'var(--borders-style-2)',
                      'right-border-style': 'var(--borders-style-2)',
                      'bottom-border-style': 'var(--borders-style-2)',
                      'top-border-color': 'var(--colors-brand-6)',
                      'left-border-color': 'var(--colors-brand-6)',
                      'right-border-color': 'var(--colors-brand-6)',
                      'bottom-border-color': 'var(--colors-brand-6)',
                    },
                    'padding-and-margin:default': {
                      paddingLeft: '20px',
                      paddingRight: '20px',
                    },
                    'radius:default': {
                      'top-left-border-radius': '20px',
                      'top-right-border-radius': '20px',
                      'bottom-left-border-radius': '20px',
                      'bottom-right-border-radius': '20px',
                    },
                    'font:default': {
                      color: 'var(--colors-brand-6)',
                    },
                  },
                },
                id: 'u:0a2fe27eb501',
              },
            ],
            size: 'xs',
            style: {
              position: 'static',
              display: 'flex',
              flex: '1 1 auto',
              flexGrow: 0,
              flexBasis: 'auto',
              flexWrap: 'nowrap',
              flexDirection: 'column',
              justifyContent: 'center',
            },
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
            id: 'u:77cb3edb2288',
          },
        ],
        wrapperBody: false,
        style: {
          position: 'relative',
          display: 'flex',
          width: '100%',
        },
        themeCss: {
          baseControlClassName: {
            'radius:default': {
              'top-left-border-radius': '6px',
              'top-right-border-radius': '6px',
              'bottom-left-border-radius': '6px',
              'bottom-right-border-radius': '6px',
            },
            'boxShadow:default': ' 0px 0px 10px 0px var(--colors-neutral-line-8)',
            'border:default': {
              'top-border-width': 'var(--borders-width-1)',
              'left-border-width': 'var(--borders-width-1)',
              'right-border-width': 'var(--borders-width-1)',
              'bottom-border-width': 'var(--borders-width-1)',
              'top-border-style': 'var(--borders-style-1)',
              'left-border-style': 'var(--borders-style-1)',
              'right-border-style': 'var(--borders-style-1)',
              'bottom-border-style': 'var(--borders-style-1)',
              'top-border-color': '#3be157',
              'left-border-color': '#3be157',
              'right-border-color': '#3be157',
              'bottom-border-color': '#3be157',
            },
            'padding-and-margin:default': {
              paddingTop: '10px',
              paddingRight: '10px',
              paddingBottom: '10px',
              paddingLeft: '10px',
            },
          },
        },
        id: 'u:bb14c60372c6',
      },
      placeholder: '',
      style: {
        gutterY: 10,
        transform: 'scale(0.7)',
        width: '1200px',
        transformOrigin: 'left top',
      },
      id: 'u:0fb820345fc1',
      className: 'text-left ',
      items: [{}, {}, {}],
      name: 'items',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/cards',
    scaffold: {
      type: 'cards',
      columnsCount: 1,
      placeholder: '',
      style: {
        gutterY: 10,
      },
      id: 'u:0fb820345fc1',
    },
    isBaseComponent: true,
    pluginIcon: 'cards-plugin',
    rendererName: 'cards',
    id: '2877ca6f4fa0',
    plugin: {
      rendererName: 'cards',
      $schema: '/schemas/CardsSchema.json',
      name: 'list2',
      isBaseComponent: true,
      isListComponent: true,
      memberImmutable: true,
      description:
        'The function is similar to a table, but it uses small cards to display data. The current component needs to configure the data source and does not have its own data pull. Please use the "CRUD" component first.',
      docLink: '/amis/zh-CN/components/cards',
      icon: 'fa fa-window-maximize',
      pluginIcon: 'cards-plugin',
      panelTitle: 'List',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'mapping',
    icon: 'fa fa-exchange',
    description:
      'Map and display the existing values. For example, the original values ​​are: 1, 2, 3..., and need to be displayed as: offline, online, expired, etc.',
    previewSchema: {
      type: 'mapping',
      value: 1,
      map: {
        '1': 'Happy',
        '2': 'Angry',
        '3': 'Sad',
        '4': 'Indifferent',
        '*': 'generally',
      },
      itemSchema: {
        type: 'tag',
        label: '${item}',
      },
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/mapping',
    scaffold: {
      type: 'mapping',
      value: 1,
    },
    isBaseComponent: true,
    pluginIcon: 'mapping-plugin',
    rendererName: 'mapping',
    id: '9348ff438dc4',
    plugin: {
      rendererName: 'mapping',
      $schema: '/schemas/MappingSchema.json',
      name: 'mapping',
      isBaseComponent: true,
      description:
        'Map and display the existing values. For example, the original values ​​are: 1, 2, 3..., and need to be displayed as: offline, online, expired, etc.',
      docLink: '/amis/zh-CN/components/mapping',
      icon: 'fa fa-exchange',
      pluginIcon: 'mapping-plugin',
      panelTitle: 'Mapping',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'avatar',
    icon: 'fa fa-user',
    description: 'User avatar',
    previewSchema: {
      type: 'avatar',
      showtype: 'image',
      icon: '',
      fit: 'cover',
      style: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
    },
    tags: ['avatar'],
    docLink: '/amis/zh-CN/components/avatar',
    scaffold: {
      type: 'avatar',
      showtype: 'image',
      icon: '',
      fit: 'cover',
    },
    isBaseComponent: true,
    pluginIcon: 'avatar-plugin',
    rendererName: 'avatar',
    id: '46d2a9f097f7',
    plugin: {
      rendererName: 'avatar',
      $schema: '/schemas/AvatarSchema.json',
      name: 'avatar',
      isBaseComponent: true,
      icon: 'fa fa-user',
      pluginIcon: 'avatar-plugin',
      description: 'User avatar',
      docLink: '/amis/zh-CN/components/avatar',
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      notRenderFormZone: true,
      panelJustify: true,
      panelTitle: 'Avatar',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'card',
    icon: '',
    description: 'Show a single card.',
    previewSchema: {
      type: 'card',
      header: {
        title: 'card',
        subTitle: 'Subtitle',
      },
      body: 'Content',
      actions: [
        {
          type: 'button',
          label: 'Button',
          actionType: 'dialog',
          dialog: {
            title: 'Title',
            body: 'Content',
          },
        },
      ],
    },
    tags: ['card'],
    docLink: '/amis/zh-CN/components/card',
    scaffold: {
      type: 'card',
      body: 'Content',
    },
    isBaseComponent: true,
    pluginIcon: 'card-plugin',
    rendererName: 'card',
    id: 'fde0bb5e56f6',
    plugin: {
      rendererName: 'card',
      $schema: '/schemas/CardSchema.json',
      name: 'card',
      isBaseComponent: true,
      description: 'Show a single card.',
      docLink: '/amis/zh-CN/components/card',
      icon: '',
      pluginIcon: 'card-plugin',
      regions: [
        {
          key: 'body',
          label: 'Content Area',
          renderMethod: 'renderBody',
          preferTag: 'display',
        },
        {
          key: 'actions',
          label: 'Button Group',
          renderMethod: 'renderActions',
          preferTag: 'button',
        },
      ],
      panelTitle: 'Card',
      overrides: {},
      vRendererConfig: {
        panelTitle: 'Fields',
      },
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'cards',
    name: 'cards',
    icon: 'fa fa-window-maximize',
    description:
      'The function is similar to a table, but it uses small cards to display data. The current component needs to configure the data source and does not have its own data pull. Please use the "CRUD" component first.',
    previewSchema: {
      type: 'cards',
      columnsCount: 2,
      card: {
        type: 'container',
        body: [
          {
            type: 'container',
            body: [
              {
                type: 'icon',
                icon: 'fa fa-check',
                vendor: '',
                themeCss: {
                  className: {
                    font: {
                      color: 'var(--colors-brand-6)',
                      fontSize: '20px',
                    },
                    'padding-and-margin:default': {
                      marginRight: '10px',
                    },
                  },
                },
                id: 'u:c3a694c7f4e6',
              },
              {
                type: 'tpl',
                tpl: 'Pipeline Task Instance',
                inline: true,
                wrapperComponent: '',
                editorSetting: {
                  mock: {},
                },
                style: {},
                themeCss: {
                  baseControlClassName: {
                    'font:default': {
                      fontSize: 'var(--fonts-size-6)',
                      color: 'var(--colors-neutral-text-2)',
                      fontWeight: 'var(--fonts-weight-3)',
                    },
                  },
                },
                id: 'u:4273575e1d7b',
              },
            ],
            style: {
              position: 'static',
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
            },
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
            size: 'none',
            themeCss: {
              baseControlClassName: {
                'padding-and-margin:default': {
                  marginBottom: '15px',
                },
              },
            },
            id: 'u:561592d2ff0a',
          },
          {
            type: 'flex',
            className: 'p-1',
            items: [
              {
                type: 'container',
                body: [
                  {
                    type: 'container',
                    body: [
                      {
                        type: 'tpl',
                        tpl: '12/',
                        inline: true,
                        wrapperComponent: '',
                        style: {},
                        themeCss: {
                          baseControlClassName: {
                            'font:default': {
                              fontSize: 'var(--fonts-size-6)',
                              color: 'var(--colors-neutral-text-2)',
                              fontWeight: 'var(--fonts-weight-3)',
                            },
                          },
                        },
                        id: 'u:c53d2e838649',
                      },
                      {
                        type: 'tpl',
                        tpl: '19',
                        inline: true,
                        wrapperComponent: '',
                        style: {},
                        themeCss: {
                          baseControlClassName: {
                            'font:default': {
                              color: 'var(--colors-neutral-text-6)',
                              fontSize: 'var(--fonts-size-6)',
                            },
                          },
                        },
                        id: 'u:774766c09a3e',
                      },
                    ],
                    style: {
                      position: 'static',
                      display: 'block',
                      flex: '0 0 auto',
                    },
                    wrapperBody: false,
                    isFixedWidth: false,
                    size: 'none',
                    themeCss: {
                      baseControlClassName: {
                        'padding-and-margin:default': {
                          marginTop: 'var(--sizes-size-0)',
                          marginRight: 'var(--sizes-size-0)',
                          marginBottom: 'var(--sizes-size-0)',
                          marginLeft: 'var(--sizes-size-0)',
                        },
                      },
                    },
                    id: 'u:7b8d9478caf0',
                  },
                  {
                    type: 'container',
                    body: [
                      {
                        type: 'tpl',
                        tpl: 'Unit Test',
                        inline: true,
                        wrapperComponent: '',
                        style: {},
                        themeCss: {
                          baseControlClassName: {
                            'font:default': {
                              color: 'var(--colors-neutral-text-5)',
                            },
                          },
                        },
                        id: 'u:4abe984e2cdf',
                      },
                    ],
                    style: {
                      position: 'static',
                      display: 'flex',
                      flexWrap: 'nowrap',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: '0 0 auto',
                    },
                    wrapperBody: false,
                    isFixedHeight: false,
                    isFixedWidth: false,
                    size: 'none',
                    id: 'u:10268e055c48',
                  },
                ],
                size: 'xs',
                style: {
                  position: 'static',
                  display: 'flex',
                  flex: '1 1 auto',
                  flexGrow: 1,
                  flexBasis: 'auto',
                  flexWrap: 'nowrap',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: 'u:a35d9094c57a',
              },
              {
                type: 'container',
                body: [
                  {
                    type: 'tpl',
                    tpl: '100%',
                    inline: true,
                    wrapperComponent: '',
                    style: {},
                    themeCss: {
                      baseControlClassName: {
                        'font:default': {
                          fontSize: 'var(--fonts-size-6)',
                          color: 'var(--colors-neutral-text-2)',
                          fontWeight: 'var(--fonts-weight-3)',
                        },
                      },
                    },
                    id: 'u:dfa080010477',
                  },
                  {
                    type: 'tpl',
                    tpl: 'Pass rate',
                    inline: true,
                    wrapperComponent: '',
                    style: {},
                    themeCss: {
                      baseControlClassName: {
                        'font:default': {
                          color: 'var(--colors-neutral-text-5)',
                        },
                      },
                    },
                    id: 'u:ee6afab8bebf',
                  },
                ],
                size: 'xs',
                style: {
                  position: 'static',
                  display: 'flex',
                  flex: '1 1 auto',
                  flexGrow: 1,
                  flexBasis: 'auto',
                  flexWrap: 'nowrap',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: 'u:8d1113a60808',
              },
              {
                type: 'container',
                body: [
                  {
                    type: 'tpl',
                    tpl: '99.9%',
                    inline: true,
                    wrapperComponent: '',
                    style: {},
                    themeCss: {
                      baseControlClassName: {
                        'font:default': {
                          fontSize: 'var(--fonts-size-6)',
                          color: 'var(--colors-neutral-text-2)',
                          fontWeight: 'var(--fonts-weight-3)',
                        },
                      },
                    },
                    id: 'u:538523c38973',
                  },
                  {
                    type: 'tpl',
                    tpl: 'Task Instance',
                    inline: true,
                    wrapperComponent: '',
                    style: {},
                    themeCss: {
                      baseControlClassName: {
                        'font:default': {
                          color: 'var(--colors-neutral-text-5)',
                        },
                      },
                    },
                    id: 'u:4b2f8311836c',
                  },
                ],
                size: 'xs',
                style: {
                  position: 'static',
                  display: 'flex',
                  flex: '1 1 auto',
                  flexGrow: 1,
                  flexBasis: 'auto',
                  flexWrap: 'nowrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: 'u:7543aef28c33',
              },
            ],
            style: {
              position: 'relative',
            },
            id: 'u:0f802c8852fd',
          },
          {
            type: 'container',
            body: [
              {
                type: 'tpl',
                tpl: 'Report',
                inline: true,
                wrapperComponent: '',
                style: {},
                themeCss: {
                  baseControlClassName: {
                    'font:default': {
                      fontSize: '14px',
                      color: 'var(--colors-neutral-text-5)',
                    },
                  },
                },
                id: 'u:ec80d1113007',
              },
              {
                type: 'tpl',
                tpl: '2023-01-01 12:00',
                inline: true,
                wrapperComponent: '',
                style: {},
                themeCss: {
                  baseControlClassName: {
                    'font:default': {
                      fontSize: '12px',
                      color: 'var(--colors-neutral-text-6)',
                    },
                  },
                },
                id: 'u:7f6bef513eb3',
              },
            ],
            style: {
              position: 'static',
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
            },
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
            themeCss: {
              baseControlClassName: {
                'padding-and-margin:default': {
                  marginTop: '20px',
                },
              },
            },
            id: 'u:6606cebce092',
          },
        ],
        size: 'none',
        style: {
          position: 'static',
          display: 'block',
          flex: '0 0 150px',
          flexBasis: '100%',
        },
        wrapperBody: false,
        isFixedHeight: false,
        isFixedWidth: true,
        onEvent: {
          click: {
            weight: 0,
            actions: [],
          },
        },
        themeCss: {
          baseControlClassName: {
            'radius:default': {
              'top-left-border-radius': '6px',
              'top-right-border-radius': '6px',
              'bottom-left-border-radius': '6px',
              'bottom-right-border-radius': '6px',
            },
            'border:default': {
              'top-border-width': 'var(--borders-width-4)',
              'left-border-width': 'var(--borders-width-2)',
              'right-border-width': 'var(--borders-width-2)',
              'bottom-border-width': 'var(--borders-width-2)',
              'top-border-style': 'var(--borders-style-2)',
              'left-border-style': 'var(--borders-style-2)',
              'right-border-style': 'var(--borders-style-2)',
              'bottom-border-style': 'var(--borders-style-2)',
              'top-border-color': 'var(--colors-brand-6)',
              'left-border-color': 'var(--colors-brand-10)',
              'right-border-color': 'var(--colors-brand-10)',
              'bottom-border-color': 'var(--colors-brand-10)',
            },
            'padding-and-margin:default': {
              paddingTop: '10px',
              paddingRight: '10px',
              paddingBottom: '10px',
              paddingLeft: '10px',
              marginRight: '15px',
            },
          },
        },
        id: 'u:b39411e7f540',
      },
      placeholder: '',
      name: 'items',
      style: {
        gutterX: 15,
        gutterY: 15,
        transform: 'scale(0.5)',
        width: '600px',
        transformOrigin: 'left top',
      },
      id: 'u:1f941707f77f',
      className: 'text-left',
      items: [{}, {}, {}, {}],
    },
    tags: ['cards'],
    docLink: '/amis/zh-CN/components/cards',
    scaffold: {
      type: 'cards',
      columnsCount: 4,
      placeholder: '',
      name: '',
      style: {
        gutterX: 15,
        gutterY: 15,
      },
      id: 'u:1f941707f77f',
    },
    isBaseComponent: true,
    pluginIcon: 'cards-plugin',
    rendererName: 'cards',
    id: '0c6993e26780',
    plugin: {
      rendererName: 'cards',
      $schema: '/schemas/CardsSchema.json',
      name: 'cards',
      isBaseComponent: true,
      isListComponent: true,
      memberImmutable: true,
      description:
        'The function is similar to a table, but it uses small cards to display data. The current component needs to configure the data source and does not have its own data pull. Please use the "CRUD" component first.',
      searchKeywords: 'cards',
      docLink: '/amis/zh-CN/components/cards',
      icon: 'fa fa-window-maximize',
      pluginIcon: 'cards-plugin',
      panelTitle: 'Card Set',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'table',
    icon: 'fa fa-table',
    description:
      'Used to display table data, you can configure column information, and then associate data to complete the display. Supports nesting, super headers, fixed columns, fixed headers, merged cells, etc. The current component needs to configure the data source and does not have its own data pull. Please use the "CRUD" component first.',
    previewSchema: {
      type: 'table',
      className: 'text-left m-b-none',
      affixHeader: false,
      items: [
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
        {
          a: 5,
          b: 6,
        },
      ],
      columns: [
        {
          label: 'A',
          name: 'a',
        },
        {
          label: 'B',
          name: 'b',
        },
      ],
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/table',
    scaffold: {
      type: 'table',
      columns: [
        {
          label: 'Column Information',
          name: 'a',
        },
      ],
    },
    scaffoldForm: {
      title: 'Quickly build table',
      body: [
        {
          name: 'columns',
          type: 'combo',
          multiple: true,
          label: false,
          addButtonText: 'Add a new column',
          draggable: true,
          items: [
            {
              type: 'input-text',
              name: 'label',
              placeholder: 'title',
            },
            {
              type: 'input-text',
              name: 'name',
              placeholder: 'Bound field name',
            },
            {
              type: 'select',
              name: 'type',
              placeholder: 'level',
              value: 'text',
              options: [
                {
                  value: 'text',
                  label: 'Plain text',
                },
                {
                  value: 'tpl',
                  label: 'Template',
                },
                {
                  value: 'image',
                  label: 'Image',
                },
                {
                  value: 'date',
                  label: 'Date',
                },
                {
                  value: 'progress',
                  label: 'Progress',
                },
                {
                  value: 'status',
                  label: 'Status',
                },
                {
                  value: 'mapping',
                  label: 'Mapping',
                },
                {
                  value: 'operation',
                  label: 'Action Bar',
                },
              ],
            },
          ],
        },
      ],
      canRebuild: true,
    },
    isBaseComponent: true,
    pluginIcon: 'table-plugin',
    rendererName: 'table',
    id: '80eb7af73df3',
    plugin: {
      rendererName: 'table',
      $schema: '/schemas/TableSchema.json',
      name: 'table',
      isBaseComponent: true,
      description:
        'Used to display table data, you can configure column information, and then associate data to complete the display. Supports nesting, super headers, fixed columns, fixed headers, merged cells, etc. The current component needs to configure the data source and does not have its own data pull. Please use the "CRUD" component first.',
      docLink: '/amis/zh-CN/components/table',
      icon: 'fa fa-table',
      pluginIcon: 'table-plugin',
      regions: [
        {
          key: 'columns',
          label: 'Column Collection',
          renderMethod: 'renderTableContent',
          preferTag: 'display',
          dndMode: 'position-h',
        },
      ],
      panelTitle: 'Table',
      events: [
        {
          eventName: 'selectedChange',
          eventLabel: 'Select table item',
          description: 'Manually select table item event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    selectedItems: {
                      type: 'array',
                      title: 'Selected Row Record',
                    },
                    unSelectedItems: {
                      type: 'array',
                      title: 'Unselected row records',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnSort',
          eventLabel: 'Column Sort',
          description: 'Click column sort event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    orderBy: {
                      type: 'string',
                      title: 'Column name',
                    },
                    orderDir: {
                      type: 'string',
                      title: 'Sort value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnFilter',
          eventLabel: 'Column Filter',
          description: 'Click column to filter events',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    filterName: {
                      type: 'string',
                      title: 'Column name',
                    },
                    filterValue: {
                      type: 'string',
                      title: 'Filter Value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnSearch',
          eventLabel: 'Column Search',
          description: 'Click on the column to search for events',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    searchName: {
                      type: 'string',
                      title: 'Column name',
                    },
                    searchValue: {
                      type: 'object',
                      title: 'Search value',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'orderChange',
          eventLabel: 'Row sorting',
          description: 'Manual drag row sorting event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    movedItems: {
                      type: 'array',
                      title: 'Sorted Records',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'columnToggled',
          eventLabel: 'Column Display Changes',
          description: 'Click on custom column event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    columns: {
                      type: 'array',
                      title: 'Currently displayed column configuration',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowClick',
          eventLabel: 'Row Click',
          description: 'Click the entire row event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowDbClick',
          eventLabel: 'Double click on row',
          description: 'Double click the entire row event',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowMouseEnter',
          eventLabel: 'Mouse enters row event',
          description: 'Triggered when a whole line is moved into',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'rowMouseLeave',
          eventLabel: 'Mouse out event',
          description: 'Triggered when moving out of the entire line',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    item: {
                      type: 'object',
                      title: 'Current row record',
                    },
                    index: {
                      type: 'number',
                      title: 'Current row index',
                    },
                    indexPath: {
                      type: 'number',
                      title: 'Row Index Path',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'select',
          actionLabel: 'Set selected item',
          description: 'Set the selected item of the table',
          innerArgs: ['selected'],
          schema: {
            type: 'combo',
            name: 'args',
            multiple: false,
            strictMode: false,
            items: [
              {
                type: 'ae-formulaControl',
                variableMode: 'tree',
                name: 'selected',
                label: 'Selected Item',
                variables: '${variables}',
                size: 'lg',
                mode: 'horizontal',
              },
            ],
          },
        },
        {
          actionType: 'selectAll',
          actionLabel: 'Set all selected',
          description: 'Set all table items to be selected',
        },
        {
          actionType: 'clearAll',
          actionLabel: 'Clear selected items',
          description: 'Clear all selected items in the table',
        },
        {
          actionType: 'initDrag',
          actionLabel: 'Start sorting',
          description: 'Enable table drag and drop sorting function',
        },
        {
          actionType: 'cancelDrag',
          actionLabel: 'Cancel sort',
          description: 'Cancel the table drag and drop sorting function',
        },
      ],
      panelJustify: true,
      unWatchWidthChange: {},
      dsManager: {
        builders: {},
      },
      order: 0,
    },
    order: 0,
  },
  {
    name: 'chart',
    icon: 'fa fa-pie-chart',
    description:
      'Used to render charts, based on echarts chart library, theoretically all chart levels of echarts are supported.',
    previewSchema: {
      type: 'chart',
      config: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
        backgroundColor: 'transparent',
      },
      replaceChartOption: true,
    },
    tags: ['chart'],
    docLink: '/amis/zh-CN/components/chart',
    scaffold: {
      type: 'chart',
      replaceChartOption: true,
    },
    isBaseComponent: true,
    pluginIcon: 'chart-plugin',
    rendererName: 'chart',
    id: '2af06b4e8683',
    plugin: {
      rendererName: 'chart',
      $schema: '/schemas/ChartSchema.json',
      name: 'chart',
      isBaseComponent: true,
      description:
        'Used to render charts, based on echarts chart library, theoretically all chart levels of echarts are supported.',
      docLink: '/amis/zh-CN/components/chart',
      icon: 'fa fa-pie-chart',
      pluginIcon: 'chart-plugin',
      events: [
        {
          eventName: 'init',
          eventLabel: 'Initialization',
          description: 'Triggered when a component instance is created and inserted into the DOM',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
        {
          eventName: 'click',
          eventLabel: 'Mouse click',
          description: 'Triggered when the mouse is clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    componentType: {
                      type: 'string',
                      title: 'componentType',
                    },
                    seriesType: {
                      type: 'string',
                      title: 'seriesType',
                    },
                    seriesIndex: {
                      type: 'number',
                      title: 'seriesIndex',
                    },
                    seriesName: {
                      type: 'string',
                      title: 'seriesName',
                    },
                    name: {
                      type: 'string',
                      title: 'name',
                    },
                    dataIndex: {
                      type: 'number',
                      title: 'dataIndex',
                    },
                    data: {
                      type: 'object',
                      title: 'data',
                    },
                    dataType: {
                      type: 'string',
                      title: 'dataType',
                    },
                    value: {
                      type: 'number',
                      title: 'value',
                    },
                    color: {
                      type: 'string',
                      title: 'color',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseover',
          eventLabel: 'Mouseover',
          description: 'Triggered when the mouse hovers',
        },
        {
          eventName: 'legendselectchanged',
          eventLabel: 'Toggle legend selection state',
          description: 'Triggered when the legend selection state is switched',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'name',
                    },
                    selected: {
                      type: 'object',
                      title: 'selected',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'reload',
          actionLabel: 'Reload',
          description: 'Trigger component data refresh and re-rendering',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Variable assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'Chart',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'sparkline',
    icon: 'fa fa-area-chart',
    description: 'Used for embedded display of simple charts',
    previewSchema: {
      type: 'sparkline',
      height: 30,
      value: [3, 5, 2, 4, 1, 8, 3, 7],
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/sparkline',
    scaffold: {
      type: 'sparkline',
      height: 30,
    },
    isBaseComponent: true,
    pluginIcon: 'sparkline-plugin',
    rendererName: 'sparkline',
    id: 'b99441f0de0a',
    plugin: {
      rendererName: 'sparkline',
      $schema: '/schemas/SparklineSchema.json',
      name: 'sparkline',
      isBaseComponent: true,
      description: 'Used for embedded display of simple charts',
      docLink: '/amis/zh-CN/components/sparkline',
      icon: 'fa fa-area-chart',
      pluginIcon: 'sparkline-plugin',
      panelTitle: 'Trend Chart',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'carousel',
    icon: 'fa fa-images',
    description:
      'Used to render carousel images, you can configure the content of each page (not just pictures), you can configure transition animations.',
    previewSchema: {
      type: 'carousel',
      options: [
        {
          image:
            "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
        },
        {
          html: '<div style="width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;">carousel data</div>',
        },
        {
          image:
            "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
        },
      ],
    },
    tags: ['carousel'],
    docLink: '/amis/zh-CN/components/carousel',
    scaffold: {
      type: 'carousel',
    },
    isBaseComponent: true,
    pluginIcon: 'carousel-plugin',
    rendererName: 'carousel',
    id: 'be10012792a7',
    plugin: {
      rendererName: 'carousel',
      $schema: '/schemas/CarouselSchema.json',
      name: 'carousel',
      isBaseComponent: true,
      description:
        'Used to render carousel images, you can configure the content of each page (not just pictures), you can configure transition animations.',
      docLink: '/amis/zh-CN/components/carousel',
      icon: 'fa fa-images',
      pluginIcon: 'carousel-plugin',
      panelTitle: 'Slideshow',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'image',
    icon: 'fa fa-photo',
    description:
      'Can be used to display an image, supports static setting of image address, and can also configure <code>name</code> to associate with a variable.',
    previewSchema: {
      type: 'image',
      thumbMode: 'cover',
      value:
        "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/image',
    scaffold: {
      type: 'image',
    },
    isBaseComponent: true,
    pluginIcon: 'image-plugin',
    rendererName: 'image',
    id: 'caea9366feba',
    plugin: {
      rendererName: 'image',
      $schema: '/schemas/ImageSchema.json',
      name: 'image',
      isBaseComponent: true,
      description:
        'Can be used to display an image, supports static setting of image address, and can also configure <code>name</code> to associate with a variable.',
      docLink: '/amis/zh-CN/components/image',
      icon: 'fa fa-photo',
      pluginIcon: 'image-plugin',
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          defaultShow: true,
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'preview',
          actionLabel: 'Preview',
          description: 'Preview image',
        },
        {
          actionType: 'zoom',
          actionLabel: 'Adjust image ratio',
          description: 'Enlarge or reduce the image proportionally',
          schema: {
            type: 'container',
            body: [
              {
                type: 'combo',
                name: 'args',
                multiple: false,
                strictMode: false,
                items: [
                  {
                    type: 'ae-formulaControl',
                    variableMode: 'tree',
                    name: 'scale',
                    mode: 'horizontal',
                    variables: '${variables}',
                    horizontal: {
                      leftFixed: 4,
                    },
                    label: {
                      type: 'tooltip-wrapper',
                      tooltip:
                        'Define the percentage of each zoom in or zoom out of the image. Positive values ​​are for zooming in, negative values ​​are for zooming out. The default value is 50',
                      tooltipTheme: 'dark',
                      placement: 'top',
                      tooltipStyle: {
                        fontSize: '12px',
                      },
                      className: 'ae-formItemControl-label-tip',
                      body: 'Adjust proportions',
                    },
                    value: 50,
                    size: 'lg',
                  },
                ],
              },
            ],
          },
        },
      ],
      panelTitle: 'Image',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'images',
    icon: 'fa fa-clone',
    description: 'Show multiple pictures',
    previewSchema: {
      type: 'images',
      imageGallaryClassName: 'app-popover :AMISCSSWrapper',
      listClassName: 'nowrap',
      thumbMode: 'cover',
      value: [
        {
          title: 'Picture 1',
          image:
            "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
          src: "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
        },
        {
          title: 'Picture 2',
          image:
            "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
          src: "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
        },
      ],
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/images',
    scaffold: {
      type: 'images',
      imageGallaryClassName: 'app-popover :AMISCSSWrapper',
    },
    isBaseComponent: true,
    pluginIcon: 'images-plugin',
    rendererName: 'images',
    id: 'f25b1822a0bb',
    plugin: {
      rendererName: 'images',
      $schema: '/schemas/ImagesSchema.json',
      name: 'images',
      isBaseComponent: true,
      description: 'Show multiple pictures',
      docLink: '/amis/zh-CN/components/images',
      icon: 'fa fa-clone',
      pluginIcon: 'images-plugin',
      panelTitle: 'Picture Gallery',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'datetime',
    icon: 'fa fa-calendar',
    description:
      'Mainly used to associate field names for date display, supporting various formats such as: X (timestamp), YYYY-MM-DD HH:mm:ss.',
    previewSchema: {
      type: 'datetime',
      format: 'YYYY-MM-DD HH:mm:ss',
      value: 1732960748,
    },
    tags: ['date'],
    docLink: '/amis/zh-CN/components/date',
    scaffold: {
      type: 'datetime',
      format: 'YYYY-MM-DD HH:mm:ss',
      value: 1732960748,
    },
    disabledRendererPlugin: false,
    isBaseComponent: true,
    pluginIcon: 'datetime-plugin',
    rendererName: 'datetime',
    id: '62ee82d5736d',
    plugin: {
      rendererName: 'datetime',
      $schema: '/schemas/DateSchema.json',
      name: 'datetime',
      isBaseComponent: true,
      disabledRendererPlugin: false,
      description:
        'Mainly used to associate field names for date display, supporting various formats such as: X (timestamp), YYYY-MM-DD HH:mm:ss.',
      docLink: '/amis/zh-CN/components/date',
      icon: 'fa fa-calendar',
      pluginIcon: 'datetime-plugin',
      panelTitle: 'Date Display',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'calendar',
    icon: 'fa fa-calendar',
    description: 'Show calendar and schedule.',
    previewSchema: {
      type: 'calendar',
    },
    tags: ['calendar'],
    docLink: '/amis/zh-CN/components/calendar',
    scaffold: {
      type: 'calendar',
    },
    isBaseComponent: true,
    pluginIcon: 'inputDatetime',
    rendererName: 'calendar',
    id: 'ae2503da659c',
    plugin: {
      rendererName: 'calendar',
      $schema: '/schemas/Calendar.json',
      name: 'calendar',
      isBaseComponent: true,
      icon: 'fa fa-calendar',
      pluginIcon: 'inputDatetime',
      panelTitle: 'Calendar',
      description: 'Show calendar and schedule.',
      docLink: '/amis/zh-CN/components/calendar',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Triggered when the time value changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    value: {
                      type: 'string',
                      title: 'Current Date',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'clear',
          actionLabel: 'Clear',
          description: 'Clear',
        },
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset the value to the initial value',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Tag',
    icon: 'fa fa-tag',
    description: 'Labels for marking and selection',
    previewSchema: {
      type: 'tag',
      label: 'Normal label',
      color: 'processing',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/tag',
    scaffold: {
      type: 'tag',
      label: 'Normal label',
      color: 'processing',
    },
    isBaseComponent: true,
    pluginIcon: 'tag-plugin',
    rendererName: 'tag',
    id: 'ebdd719cb5a7',
    plugin: {
      rendererName: 'tag',
      $schema: '/schemas/TagSchema.json',
      name: 'Tag',
      isBaseComponent: true,
      icon: 'fa fa-tag',
      pluginIcon: 'tag-plugin',
      description: 'Labels for marking and selection',
      docLink: '/amis/zh-CN/components/tag',
      panelTitle: 'Labels',
      panelJustify: true,
      events: [
        {
          eventName: 'click',
          eventLabel: 'Click',
          description: 'Triggered when clicked',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    label: {
                      type: 'object',
                      title: 'Tag name',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseenter',
          eventLabel: 'Mouse enter',
          description: 'Triggered when the mouse moves into the room',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    label: {
                      type: 'object',
                      title: 'Tag name',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'mouseleave',
          eventLabel: 'Mouse out',
          description: 'Triggered when the mouse moves out',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    label: {
                      type: 'object',
                      title: 'Tag name',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'close',
          eventLabel: 'Click to close',
          description: 'Triggered when click close',
          dataSchema: [
            {
              type: 'object',
              properties: {
                context: {
                  type: 'object',
                  title: 'Context',
                  properties: {
                    nativeEvent: {
                      type: 'object',
                      title: 'Mouse event object',
                    },
                  },
                },
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    label: {
                      type: 'object',
                      title: 'Tag name',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'json',
    icon: 'fa fa-code',
    description: 'Used to display JSON data.',
    previewSchema: {
      type: 'json',
      name: 'json',
      value: {
        a: 1,
        b: {
          c: 2,
        },
      },
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/json',
    scaffold: {
      type: 'json',
    },
    isBaseComponent: true,
    pluginIcon: 'json-view-plugin',
    rendererName: 'json',
    id: '6ffe948c4bb3',
    plugin: {
      rendererName: 'json',
      $schema: '/schemas/JsonSchema.json',
      name: 'json',
      isBaseComponent: true,
      description: 'Used to display JSON data.',
      docLink: '/amis/zh-CN/components/json',
      icon: 'fa fa-code',
      pluginIcon: 'json-view-plugin',
      panelTitle: 'JSON',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'progress bar, progress',
    name: 'progress',
    icon: 'fa fa-angle-double-right',
    description: 'Used to display progress. Each progress segment can be configured to display in different colors.',
    previewSchema: {
      type: 'progress',
      mode: 'line',
      value: 66,
      strokeWidth: 6,
      valueTpl: '${value}%',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/progress',
    scaffold: {
      type: 'progress',
      mode: 'line',
      value: 66,
      strokeWidth: 6,
      valueTpl: '${value}%',
    },
    isBaseComponent: true,
    pluginIcon: 'progress-plugin',
    rendererName: 'progress',
    id: '7e6e4323daa6',
    plugin: {
      rendererName: 'progress',
      $schema: '/schemas/ProgressSchema.json',
      name: 'progress',
      searchKeywords: 'progress bar, progress',
      isBaseComponent: true,
      description: 'Used to display progress. Each progress segment can be configured to display in different colors.',
      docLink: '/amis/zh-CN/components/progress',
      icon: 'fa fa-angle-double-right',
      pluginIcon: 'progress-plugin',
      actions: [
        {
          actionType: 'reset',
          actionLabel: 'Reset',
          description: 'Reset to default values',
        },
        {
          actionType: 'setValue',
          actionLabel: 'Assignment',
          description: 'Trigger component data update',
        },
      ],
      panelTitle: 'Progress',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'status',
    icon: 'fa fa-check-square-o',
    description: 'Use icons to display status with related fields, such as 1 for √ and 0 for x. This can be customized',
    previewSchema: {
      type: 'status',
      value: 1,
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/status',
    scaffold: {
      type: 'status',
      value: 1,
    },
    isBaseComponent: true,
    pluginIcon: 'status-plugin',
    rendererName: 'status',
    id: '5906b407273b',
    plugin: {
      rendererName: 'status',
      $schema: '/schemas/StatusSchema.json',
      name: 'status',
      isBaseComponent: true,
      description:
        'Use icons to display status with related fields, such as 1 for √ and 0 for x. This can be customized',
      docLink: '/amis/zh-CN/components/status',
      icon: 'fa fa-check-square-o',
      pluginIcon: 'status-plugin',
      defaultSource: [
        {
          label: '-',
          value: '0',
          icon: 'fail',
          status: 0,
        },
        {
          label: '-',
          value: '1',
          icon: 'success',
          status: 1,
        },
        {
          label: 'Success',
          value: 'success',
          icon: 'success',
          status: 'success',
        },
        {
          label: 'Running',
          value: 'pending',
          icon: 'rolling',
          status: 'pending',
        },
        {
          label: 'Queuing',
          value: 'queue',
          icon: 'warning',
          status: 'queue',
        },
        {
          label: 'Scheduling',
          value: 'schedule',
          icon: 'schedule',
          status: 'schedule',
        },
        {
          label: 'Failed',
          value: 'fail',
          icon: 'fail',
          status: 'fail',
        },
      ],
      panelTitle: 'Status',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'steps',
    icon: 'fa fa-forward',
    description: 'Steps Step Bar',
    previewSchema: {
      type: 'steps',
      value: 1,
      steps: [
        {
          title: 'First Step',
          subTitle: 'Subtitle',
          description: 'Description',
        },
        {
          title: 'Step 2',
        },
        {
          title: 'Step 3',
        },
      ],
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/steps',
    scaffold: {
      type: 'steps',
      value: 1,
    },
    isBaseComponent: true,
    pluginIcon: 'steps-plugin',
    rendererName: 'steps',
    id: '25854970a320',
    plugin: {
      rendererName: 'steps',
      $schema: '/schemas/StepsSchema.json',
      name: 'steps',
      isBaseComponent: true,
      icon: 'fa fa-forward',
      pluginIcon: 'steps-plugin',
      description: 'Steps Step Bar',
      docLink: '/amis/zh-CN/components/steps',
      panelTitle: 'Steps',
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'editor-prop-config-tabs',
          linksClassName: 'editor-prop-config-tabs-links aa',
          contentClassName: 'no-border editor-prop-config-tabs-cont hoverShowScrollBar',
          tabs: [
            {
              title: 'General',
              body: [
                {
                  type: 'select',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'Reference position',
                  },
                  name: 'originPosition',
                  value: 'left-top',
                  visibleOn:
                    'this.style && this.style.position && (this.style.position === "fixed" || this.style.position === "absolute")',
                  options: [
                    {
                      label: 'top left',
                      value: 'left-top',
                    },
                    {
                      label: 'top right',
                      value: 'right-top',
                    },
                    {
                      label: 'bottom right (default)',
                      value: 'right-bottom',
                    },
                    {
                      label: 'bottom left',
                      value: 'left-bottom',
                    },
                  ],
                },
                {
                  name: 'steps',
                  label: 'Step List',
                  type: 'combo',
                  scaffold: {
                    type: 'wrapper',
                    body: 'Subnode content',
                  },
                  minLength: 2,
                  multiple: true,
                  draggable: true,
                  items: [
                    {
                      type: 'input-text',
                      name: 'title',
                      label: false,
                      placeholder: 'title',
                    },
                    {
                      type: 'input-text',
                      name: 'subTitle',
                      label: false,
                      placeholder: 'stepSubTitle',
                    },
                    {
                      type: 'input-text',
                      name: 'description',
                      label: false,
                      placeholder: 'stepDescription',
                    },
                  ],
                  itemsWrapperClassName: 'ae-Combo-items ',
                  itemClassName: 'ae-Combo-item ',
                },
                {
                  name: 'value',
                  type: 'input-text',
                  label: 'Current step',
                  description: 'Start with zero',
                },
                {
                  name: 'status',
                  type: 'select',
                  label: 'Current Status',
                  creatable: true,
                  value: 'finish',
                  options: [
                    {
                      label: 'In Progress',
                      value: 'process',
                    },
                    {
                      label: 'Waiting',
                      value: 'wait',
                    },
                    {
                      label: 'Completed',
                      value: 'finish',
                    },
                    {
                      label: 'Error',
                      value: 'error',
                    },
                  ],
                },
                {
                  type: 'container',
                  body: [
                    {
                      type: 'checkbox',
                      label: 'Get Step Interface',
                      option: 'Advanced Configuration',
                      name: 'source',
                      mode: 'inline',
                      className: 'w-full m-b-sm',
                      inputClassName: 'pull-right text-sm m-t-sm p-t-none',
                    },
                    {
                      name: 'source',
                      type: 'input-text',
                      placeholder: 'http://',
                      visibleOn: "!this.source || typeof this.source === 'string'",
                      className: 'm-b-none',
                      labelRemark: {},
                    },
                    {
                      type: 'combo',
                      name: 'source',
                      syncDefaultValue: false,
                      multiLine: true,
                      visibleOn: "this.source && typeof this.source !== 'string'",
                      className: 'm-b-none',
                      messages: {
                        validateFailed: 'There is an error in the interface configuration, please check carefully',
                      },
                      items: [
                        {
                          label: 'Send method',
                          name: 'method',
                          value: 'get',
                          type: 'select',
                          mode: 'horizontal',
                          horizontal: {
                            leftFixed: 'sm',
                          },
                          options: [
                            {
                              value: 'get',
                              label: 'GET',
                            },
                            {
                              value: 'post',
                              label: 'POST',
                            },
                            {
                              value: 'put',
                              label: 'PUT',
                            },
                            {
                              value: 'patch',
                              label: 'PATCH',
                            },
                            {
                              value: 'delete',
                              label: 'DELETE',
                            },
                          ],
                        },
                        {
                          label: 'Url',
                          type: 'input-text',
                          name: 'url',
                          placeholder: 'http://',
                          required: true,
                        },
                        {
                          type: 'switch',
                          label: 'data mapping',
                          name: 'data',
                          className: 'w-full m-b-xs',
                        },
                        {
                          type: 'tpl',
                          visibleOn: '!this.data',
                          inline: false,
                          className: 'text-sm text-muted m-b',
                          tpl: 'When data mapping is not enabled, as much data as possible will be sent when sending the API. If you want to control the data sent yourself, or require additional data processing, please enable this option',
                        },
                        {
                          type: 'ae-DataMappingControl',
                          syncDefaultValue: false,
                          name: 'data',
                          mode: 'normal',
                          renderLabel: false,
                          visibleOn: 'this.data',
                          valueType: 'ae-DataPickerControl',
                          descriptionClassName: 'help-block text-xs m-b-none',
                          description:
                            '<p>When data mapping is not enabled, sending data automatically switches to whitelist mode. Send whatever you configure, please bind the data. For example: <code>{"a": "\\${a}", "b": 2}</code></p><p>If you want to customize based on the default, please add a Key first The Value for `&` is `\\$$` as the first line. </p><div>When the value is <code>__undefined</code>, it means deleting the corresponding field. It can be combined with <code>{"&": "\\$$"}</code> to achieve black List effect. </div>',
                        },
                        {
                          label: 'Sending conditions',
                          type: 'input-text',
                          name: 'sendOn',
                          placeholder: 'For example: this.type == "123"',
                          description: 'Use expressions to set the sending conditions of this request',
                        },
                        {
                          type: 'switch',
                          label: 'Silent request',
                          name: 'silent',
                          mode: 'inline',
                          description: 'Whether to send requests silently and block error prompts',
                        },
                        {
                          type: 'switch',
                          label: 'Whether to set cache',
                          name: 'cache',
                          className: 'w-full m-b-xs',
                          description: 'Set the validity time of this request cache',
                        },
                        {
                          type: 'input-number',
                          name: 'cache',
                          mode: 'inline',
                          min: 0,
                          step: 500,
                          visibleOn: 'this.cache',
                        },
                        {
                          type: 'switch',
                          label: 'File download',
                          name: 'responseType',
                          description:
                            'Please check when the interface is for binary file download and set Content-Disposition',
                        },
                        {
                          label: 'data format',
                          type: 'button-group-select',
                          name: 'dataType',
                          description:
                            'The sending body format is: <%= data.dataType === "json" ? "application/json" : (data.dataType === "form-data" ? "multipart/form- data" : (data.dataType === "form" ? "application/x-www-form-urlencoded" : "")) %>, The form-data format will be automatically used when there is a file in the sent content. . ',
                          size: 'sm',
                          className: 'block',
                          mode: 'inline',
                          options: [
                            {
                              label: 'JSON',
                              value: 'json',
                            },
                            {
                              label: 'FormData',
                              value: 'form-data',
                            },
                            {
                              label: 'Form',
                              value: 'form',
                            },
                          ],
                        },
                        {
                          type: 'switch',
                          label: 'data replacement',
                          name: 'replaceData',
                          description:
                            'The default data is append mode. After turning this on, it will be completely replaced',
                        },
                        {
                          type: 'switch',
                          label: 'Return result mapping',
                          name: 'responseData',
                          className: 'w-full m-b-xs',
                        },
                        {
                          type: 'tpl',
                          visibleOn: '!this.responseData',
                          inline: false,
                          className: 'text-sm text-muted m-b',
                          tpl: 'If additional data processing is required on the returned results, please enable this option',
                        },
                        {
                          type: 'input-kv',
                          syncDefaultValue: false,
                          name: 'responseData',
                          visibleOn: 'this.responseData',
                          descriptionClassName: 'help-block text-xs m-b-none',
                        },
                        {
                          title: 'Custom Adapter',
                          type: 'fieldSet',
                          className: 'm-b-none',
                          size: 'sm',
                          collapsable: false,
                          collapsedOn: '!this.requestAdaptor && !this.adaptor',
                          body: [
                            {
                              name: 'requestAdaptor',
                              type: 'js-editor',
                              allowFullscreen: true,
                              label: 'Sending adapter',
                              description:
                                'Function signature: (api) => api, the data is in api.data, and the api object is returned after modification. ',
                            },
                            {
                              name: 'adaptor',
                              type: 'js-editor',
                              allowFullscreen: true,
                              label: 'receiving adapter',
                              description: 'Function signature: (payload, response, api) => payload',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: 'Appearance',
              body: [
                {
                  name: 'mode',
                  type: 'select',
                  label: 'Mode',
                  value: 'horizontal',
                  options: [
                    {
                      label: 'Horizontal',
                      value: 'horizontal',
                    },
                    {
                      label: 'Vertical',
                      value: 'vertical',
                    },
                    {
                      label: 'Simple',
                      value: 'simple',
                    },
                  ],
                },
                {
                  type: 'ae-classname',
                  name: 'className',
                  label: {
                    type: 'tooltip-wrapper',
                    tooltip:
                      'What are the helper class CSS class names? Please go to <a href="https://baidu.github.io/amis/docs/concepts/style" target="_blank">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ',
                    tooltipTheme: 'dark',
                    placement: 'top',
                    tooltipStyle: {
                      fontSize: '12px',
                    },
                    className: 'ae-formItemControl-label-tip',
                    body: 'CSS class name',
                  },
                },
              ],
            },
            {
              title: '显隐',
              body: [null],
            },
          ],
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Timeline',
    icon: 'fa fa-bars',
    description: 'Used to display the timeline',
    previewSchema: {
      type: 'timeline',
      label: 'Timeline',
      name: 'timeline',
      items: [
        {
          time: '2012-12-21',
          title: 'Node Example Data',
        },
        {
          time: '2012-12-24',
          title: 'Node Example Data',
        },
        {
          time: '2012-12-27',
          title: 'Node Example Data',
        },
      ],
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/timeline',
    scaffold: {
      type: 'timeline',
      label: 'Timeline',
      name: 'timeline',
    },
    isBaseComponent: true,
    rendererName: 'timeline',
    id: '646d82826958',
    plugin: {
      rendererName: 'timeline',
      $schema: '/schemas/TimelineSchema.json',
      name: 'Timeline',
      isBaseComponent: true,
      icon: 'fa fa-bars',
      description: 'Used to display the timeline',
      docLink: '/amis/zh-CN/components/timeline',
      panelTitle: 'Timeline',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'divider',
    icon: 'fa fa-minus',
    description: 'Used to display a dividing line, which can be used for visual separation.',
    previewSchema: {
      type: 'divider',
      className: 'm-t-none m-b-none',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/divider',
    scaffold: {
      type: 'divider',
      $$dragMode: 'hv',
    },
    isBaseComponent: true,
    pluginIcon: 'divider-plugin',
    rendererName: 'divider',
    id: 'e0997a4c7120',
    plugin: {
      rendererName: 'divider',
      $schema: '/schemas/DividerSchema.json',
      name: 'divider',
      isBaseComponent: true,
      icon: 'fa fa-minus',
      pluginIcon: 'divider-plugin',
      description: 'Used to display a dividing line, which can be used for visual separation.',
      docLink: '/amis/zh-CN/components/divider',
      panelTitle: 'Separator',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    name: 'code',
    icon: 'fa fa-code',
    description: 'Code highlighting',
    previewSchema: {
      type: 'code',
      language: 'html',
      value: '<div>html</div>',
    },
    tags: ['code'],
    docLink: '/amis/zh-CN/components/code',
    scaffold: {
      type: 'code',
      language: 'html',
      value: '<div>html</div>',
    },
    isBaseComponent: true,
    pluginIcon: 'code-plugin',
    rendererName: 'code',
    id: '352996c62d00',
    plugin: {
      rendererName: 'code',
      $schema: '/schemas/CodeSchema.json',
      name: 'code',
      isBaseComponent: true,
      icon: 'fa fa-code',
      pluginIcon: 'code-plugin',
      description: 'Code highlighting',
      docLink: '/amis/zh-CN/components/code',
      panelTitle: 'Code Highlighting',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Markdown',
    icon: 'fa fa-file-text',
    description: 'Show markdown content',
    previewSchema: {
      type: 'markdown',
      value: '## This is a title',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/markdown',
    scaffold: {
      type: 'markdown',
      value: '## This is a title',
    },
    isBaseComponent: true,
    pluginIcon: 'markdown-plugin',
    rendererName: 'markdown',
    id: '2c9c1a7c4ed7',
    plugin: {
      rendererName: 'markdown',
      $schema: '/schemas/MarkdownSchema.json',
      name: 'Markdown',
      isBaseComponent: true,
      description: 'Show markdown content',
      docLink: '/amis/zh-CN/components/markdown',
      icon: 'fa fa-file-text',
      pluginIcon: 'markdown-plugin',
      panelTitle: 'MD',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'collapse',
    icon: 'fa fa-window-minimize',
    description: 'The folder can expand or hide the content area to keep the page tidy',
    previewSchema: {
      type: 'collapse',
      header: 'Title',
      body: [
        {
          type: 'tpl',
          tpl: 'Content',
          wrapperComponent: '',
          inline: false,
        },
      ],
    },
    tags: ['collapse'],
    docLink: '/amis/zh-CN/components/collapse',
    scaffold: {
      type: 'collapse',
      header: 'Title',
    },
    isBaseComponent: true,
    pluginIcon: 'collapse-plugin',
    rendererName: 'collapse',
    id: '613e360119b2',
    plugin: {
      rendererName: 'collapse',
      $schema: '/schemas/CollapseSchema.json',
      name: 'collapse',
      isBaseComponent: true,
      description: 'The folder can expand or hide the content area to keep the page tidy',
      docLink: '/amis/zh-CN/components/collapse',
      icon: 'fa fa-window-minimize',
      pluginIcon: 'collapse-plugin',
      panelTitle: 'Folder',
      panelJustify: true,
      events: [
        {
          eventName: 'change',
          eventLabel: 'Folding state changed',
          description: 'Triggered when the folder folding state changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    collapsed: {
                      type: 'boolean',
                      title: 'Folder Status',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'expand',
          eventLabel: 'Folder expands',
          description: 'Triggered when the folder state changes to expanded',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    collapsed: {
                      type: 'boolean',
                      title: 'Folder Status',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          eventName: 'collapse',
          eventLabel: 'Folder collapsed',
          description: 'Triggered when the folder state changes to collapsed',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    collapsed: {
                      type: 'boolean',
                      title: 'Folder Status',
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      actions: [
        {
          actionType: 'expand',
          actionLabel: 'Component expansion',
          description: "Change the component's collapsed state to expanded",
        },
        {
          actionLabel: 'Collapse component',
          actionType: 'collapse',
          description: 'The component folding state changes to collapsed',
        },
      ],
      regions: [null],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'office-viewer',
    icon: 'fa fa-file-word',
    description: 'Office document preview',
    previewSchema: {
      type: 'office-viewer',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/office-viewer',
    scaffold: {
      type: 'office-viewer',
    },
    isBaseComponent: true,
    pluginIcon: 'officeViewer-plugin',
    rendererName: 'office-viewer',
    id: 'd0c947c928db',
    plugin: {
      rendererName: 'office-viewer',
      $schema: '/schemas/OfficeViewerSchema.json',
      name: 'office-viewer',
      isBaseComponent: true,
      description: 'Office document preview',
      docLink: '/amis/zh-CN/components/office-viewer',
      icon: 'fa fa-file-word',
      pluginIcon: 'officeViewer-plugin',
      panelTitle: 'Document Preview',
      panelJustify: true,
      actions: [
        {
          actionType: 'print',
          actionLabel: 'Print',
          description: 'Print document',
        },
        {
          actionType: 'saveAs',
          actionLabel: 'Download',
          description: 'Download document',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'pdf-viewer',
    icon: 'fa fa-file-pdf',
    description: 'PDF file preview',
    previewSchema: {
      type: 'pdf-viewer',
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/pdf-viewer',
    scaffold: {
      type: 'pdf-viewer',
    },
    isBaseComponent: true,
    pluginIcon: 'pdfViewer-plugin',
    rendererName: 'pdf-viewer',
    id: '4963acd5c731',
    plugin: {
      rendererName: 'pdf-viewer',
      $schema: '/schemas/PdfViewerSchema.json',
      name: 'pdf-viewer',
      isBaseComponent: true,
      description: 'PDF file preview',
      docLink: '/amis/zh-CN/components/pdf-viewer',
      icon: 'fa fa-file-pdf',
      pluginIcon: 'pdfViewer-plugin',
      panelTitle: 'PDF Preview',
      panelJustify: true,
      order: 0,
    },
    order: 0,
  },
  {
    searchKeywords: 'Real-time log',
    name: 'log',
    icon: 'fa fa-file-text-o',
    description: 'Used to display logs in real time',
    previewSchema: {
      type: 'log',
      height: 120,
      autoScroll: true,
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/log',
    scaffold: {
      type: 'log',
      autoScroll: true,
      height: 500,
      encoding: 'utf-8',
    },
    isBaseComponent: true,
    pluginIcon: 'log-plugin',
    rendererName: 'log',
    id: '0477ea06c97e',
    plugin: {
      rendererName: 'log',
      $schema: '/schemas/LogSchema.json',
      name: 'log',
      isBaseComponent: true,
      icon: 'fa fa-file-text-o',
      pluginIcon: 'log-plugin',
      description: 'Used to display logs in real time',
      searchKeywords: 'Real-time log',
      docLink: '/amis/zh-CN/components/log',
      panelJustify: true,
      panelTitle: 'Log',
      order: 0,
    },
    order: 0,
  },
  {
    name: 'pagination',
    icon: 'fa fa-window-minimize',
    description: 'Pagination component, which can display the list in pages to improve page performance',
    previewSchema: {
      type: 'pagination',
      mode: 'normal',
      layout: ['pager'],
      activePage: 1,
      lastPage: 1,
      total: 1,
      hasNext: false,
      disabled: false,
      perPageAvailable: [10, 20, 50, 100],
      perPage: 10,
      maxButtons: 7,
      ellipsisPageGap: 5,
    },
    tags: ['exhibit'],
    docLink: '/amis/zh-CN/components/pagination',
    scaffold: {
      type: 'pagination',
      mode: 'normal',
      activePage: 1,
      lastPage: 1,
      total: 1,
      hasNext: false,
      disabled: false,
      perPage: 10,
      maxButtons: 7,
      ellipsisPageGap: 5,
    },
    isBaseComponent: true,
    rendererName: 'pagination',
    id: '9e513d7e82d5',
    plugin: {
      rendererName: 'pagination',
      $schema: '/schemas/PaginationSchema.json',
      name: 'pagination',
      isBaseComponent: true,
      description: 'Pagination component, which can display the list in pages to improve page performance',
      docLink: '/amis/zh-CN/components/pagination',
      icon: 'fa fa-window-minimize',
      lastLayoutSetting: ['pager'],
      layoutOptions: [
        {
          text: 'Total',
          value: 'total',
          checked: false,
        },
        {
          text: 'Number of entries per page',
          value: 'perPage',
          checked: false,
        },
        {
          text: 'Pagination',
          value: 'pager',
          checked: true,
        },
        {
          text: 'Jump page',
          value: 'go',
          checked: false,
        },
      ],
      panelTitle: 'Paginator',
      events: [
        {
          eventName: 'change',
          eventLabel: 'Value changed',
          description: 'Input content changes',
          dataSchema: [
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  title: 'Data',
                  properties: {
                    page: {
                      type: 'number',
                      title: 'Current page value',
                    },
                    perPage: {
                      type: 'number',
                      title: 'Number of records displayed per page',
                    },
                  },
                  description: 'The current data domain, you can read the corresponding value through the field name',
                },
              },
            },
          ],
        },
      ],
      panelJustify: true,
      regions: [
        {
          key: 'body',
          label: 'Content Area',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Custom Renderer',
    icon: 'fa fa-user',
    description: 'This is just a sample',
    previewSchema: {
      type: 'my-renderer',
      target: 'demo',
    },
    tags: ['Custom', 'Form Items'],
    scaffold: {
      type: 'my-renderer',
      target: '233',
    },
    rendererName: 'my-renderer',
    id: '3f989bf8e8d8',
    plugin: {
      rendererName: 'my-renderer',
      $schema: '/schemas/UnkownSchema.json',
      name: 'Custom Renderer',
      description: 'This is just a sample',
      icon: 'fa fa-user',
      panelTitle: 'Custom Components',
      panelBody: [
        {
          type: 'tabs',
          tabsMode: 'line',
          className: 'm-t-n-xs',
          contentClassName: 'no-border p-l-none p-r-none',
          tabs: [
            {
              title: 'General',
              body: [
                {
                  name: 'target',
                  label: 'Target',
                  type: 'input-text',
                },
              ],
            },
            {
              title: 'Appearance',
              body: [],
            },
          ],
        },
      ],
      popOverBody: [
        {
          name: 'target',
          label: 'Target',
          type: 'input-text',
        },
      ],
      order: 0,
    },
    order: 0,
  },
  {
    name: 'Equally divided between left and right',
    icon: 'fa fa-columns',
    description: 'Common layout: left-right split layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
      ],
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-2cols-plugin',
    rendererName: 'flex',
    id: 'faca7176e3d6',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Equally divided between left and right',
      order: 200,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-2cols-plugin',
      description: 'Common layout: left-right split layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: '1:2 Layout',
    icon: 'fa fa-columns',
    description: 'Common layout: 1:2 layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 2,
            display: 'block',
          },
        },
      ],
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-2cols-plugin',
    rendererName: 'flex',
    id: '804fd599ede0',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: '1:2 Layout',
      order: 201,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-2cols-plugin',
      description: 'Common layout: 1:2 layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: '1:3 Layout',
    icon: 'fa fa-columns',
    description: 'Common layout: 1:3 layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 3,
            display: 'block',
          },
        },
      ],
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-2cols-plugin',
    rendererName: 'flex',
    id: '1dd1a6ea8721',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: '1:3 Layout',
      order: 202,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-2cols-plugin',
      description: 'Common layout: 1:3 layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Top and bottom layout',
    icon: 'fa fa-columns',
    description: 'Common layout: top-bottom layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
      ],
      direction: 'column',
      justify: 'center',
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-2row-plugin',
    rendererName: 'flex',
    id: 'a0e84312ee08',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Top and bottom layout',
      order: 203,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-2row-plugin',
      description: 'Common layout: top-bottom layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Three columns evenly divided',
    icon: 'fa fa-columns',
    description: 'Common layout: three-column equal layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            display: 'block',
            flexBasis: 'auto',
            flexGrow: 1,
          },
        },
      ],
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-3cols-plugin',
    rendererName: 'flex',
    id: '42ed6d51a6c2',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Three columns evenly divided',
      order: 300,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-3cols-plugin',
      description: 'Common layout: three-column equal layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: '1:2:3 three columns',
    icon: 'fa fa-columns',
    description: 'Common layout: 1:2:3 three-column layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 2,
            display: 'block',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            display: 'block',
            flexBasis: 'auto',
            flexGrow: 3,
          },
        },
      ],
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-3cols-plugin',
    rendererName: 'flex',
    id: 'e2cf8b41b6d4',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: '1:2:3 three columns',
      order: 301,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-3cols-plugin',
      description: 'Common layout: 1:2:3 three-column layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Upper, Middle, Lower',
    icon: 'fa fa-columns',
    description: 'Common layout: top, center, and bottom layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
      ],
      direction: 'column',
      justify: 'center',
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-3row-plugin',
    rendererName: 'flex',
    id: '966c0433ae85',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Upper, Middle, Lower',
      order: 303,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-3row-plugin',
      description: 'Common layout: top, center, and bottom layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'One to Two',
    icon: 'fa fa-columns',
    description: 'Common layout: one-to-two layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '0 0 auto',
            flexBasis: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
        {
          type: 'flex',
          items: [
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
          ],
          style: {
            flex: '1 1 auto',
            padding: 0,
          },
          alignItems: 'stretch',
        },
      ],
      style: {
        overflowX: 'auto',
        margin: '0',
        maxWidth: 'auto',
        height: '350px',
        overflowY: 'auto',
      },
      direction: 'column',
      justify: 'center',
      alignItems: 'stretch',
      isFixedHeight: true,
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-1with2-plugin',
    rendererName: 'flex',
    id: '20e82cffb2b8',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'One to Two',
      order: 303,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-1with2-plugin',
      description: 'Common layout: one-to-two layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Left One Right Two',
    icon: 'fa fa-columns',
    description: 'Common layout: left one and right two layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '0 0 auto',
            flexBasis: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
        {
          type: 'flex',
          items: [
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
          ],
          style: {
            flex: '1 1 auto',
            margin: '0',
          },
          alignItems: 'stretch',
          direction: 'column',
          justify: 'center',
        },
      ],
      style: {
        overflowX: 'auto',
        margin: '0',
        maxWidth: 'auto',
        height: '350px',
        overflowY: 'auto',
      },
      direction: 'row',
      justify: 'center',
      alignItems: 'stretch',
      isFixedHeight: true,
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-1-2-plugin',
    rendererName: 'flex',
    id: '00c9704d6876',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Left One Right Two',
      order: 304,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-1-2-plugin',
      description: 'Common layout: left one and right two layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Two to One',
    icon: 'fa fa-columns',
    description: 'Common layout: two-to-one layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'flex',
          items: [
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
          ],
          style: {
            flex: '0 0 auto',
            flexBasis: '100px',
          },
          alignItems: 'stretch',
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '1 1 auto',
            flexBasis: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
      ],
      style: {
        overflowX: 'auto',
        margin: '0',
        maxWidth: 'auto',
        height: '350px',
        overflowY: 'auto',
      },
      direction: 'column',
      justify: 'center',
      alignItems: 'stretch',
      isFixedHeight: true,
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-2with1-plugin',
    rendererName: 'flex',
    id: '73e56018c42b',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Two to One',
      order: 305,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-2with1-plugin',
      description: 'Common layout: two-to-one layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Left two, right one',
    icon: 'fa fa-columns',
    description: 'Common layout: left two and right one layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'flex',
          items: [
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '1 1 auto',
                flexBasis: 'auto',
                flexGrow: 1,
                display: 'block',
              },
            },
          ],
          style: {
            flex: '1 1 auto',
          },
          alignItems: 'stretch',
          direction: 'column',
          justify: 'center',
        },
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '0 0 auto',
            flexBasis: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
      ],
      style: {
        overflowX: 'auto',
        margin: '0',
        maxWidth: 'auto',
        height: '350px',
        overflowY: 'auto',
      },
      direction: 'row',
      justify: 'center',
      alignItems: 'stretch',
      isFixedHeight: true,
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-2-1-plugin',
    rendererName: 'flex',
    id: '95c7dd28e369',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Left two, right one',
      order: 306,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-2-1-plugin',
      description: 'Common layout: left two and right one layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'Classic Layout',
    icon: 'fa fa-columns',
    description: 'Common layout: Classic layout (layout container based on CSS Flex).',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Common Layouts'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'wrapper',
          size: 'xs',
          body: [],
          style: {
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        },
        {
          type: 'flex',
          items: [
            {
              type: 'wrapper',
              size: 'xs',
              body: [],
              style: {
                flex: '0 0 auto',
                flexBasis: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
              },
            },
            {
              type: 'flex',
              items: [
                {
                  type: 'wrapper',
                  size: 'xs',
                  body: [],
                  style: {
                    flex: '1 1 auto',
                    flexBasis: 'auto',
                    flexGrow: 1,
                    display: 'block',
                  },
                },
                {
                  type: 'wrapper',
                  size: 'xs',
                  body: [],
                  style: {
                    flex: '1 1 auto',
                    flexBasis: 'auto',
                    flexGrow: 1,
                    display: 'block',
                  },
                },
              ],
              style: {
                position: 'static',
                overflowX: 'auto',
                overflowY: 'auto',
                margin: '0',
                flex: '1 1 auto',
                flexGrow: 1,
                flexBasis: 'auto',
              },
              alignItems: 'stretch',
              direction: 'column',
              justify: 'center',
              isFixedHeight: false,
              isFixedWidth: false,
            },
          ],
          style: {
            flex: '1 1 auto',
            overflowX: 'auto',
            margin: '0',
            maxWidth: 'auto',
            overflowY: 'auto',
            position: 'static',
            minWidth: 'auto',
            width: 'auto',
            maxHeight: 'auto',
            minHeight: '300px',
          },
          direction: 'row',
          justify: 'flex-start',
          alignItems: 'stretch',
          isFixedHeight: false,
          isFixedWidth: false,
        },
      ],
      direction: 'column',
      justify: 'center',
      alignItems: 'stretch',
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-3-1-plugin',
    rendererName: 'flex',
    id: 'e44c46222600',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'Classic Layout',
      order: 307,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-3-1-plugin',
      description: 'Common layout: Classic layout (layout container based on CSS Flex).',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'y-axis scroll container',
    icon: 'fa fa-columns',
    description: 'y-axis scroll container: a layout container based on CSS Flex.',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '60px',
            display: 'block',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '60px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '60px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '60px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '60px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '60px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
      ],
      direction: 'column',
      justify: 'flex-start',
      alignItems: 'stretch',
      style: {
        position: 'static',
        minHeight: 'auto',
        maxWidth: 'auto',
        minWidth: 'auto',
        height: '200px',
        width: 'auto',
        overflowX: 'auto',
        overflowY: 'scroll',
        margin: '0',
      },
      isFixedHeight: true,
      isFixedWidth: false,
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-3row-plugin',
    rendererName: 'flex',
    id: '3e176f1131fd',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'y-axis scroll container',
      order: 504,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-3row-plugin',
      description: 'y-axis scroll container: a layout container based on CSS Flex.',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
  {
    name: 'x-axis scroll container',
    icon: 'fa fa-columns',
    description: 'X-axis scroll container: A layout container based on CSS Flex.',
    previewSchema: {
      type: 'flex',
      items: [
        {
          type: 'tpl',
          tpl: 'First column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The second column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
        {
          type: 'tpl',
          tpl: 'The third column',
          wrapperComponent: '',
          className: 'bg-light center',
          style: {
            display: 'block',
            flex: '1 1 auto',
            flexBasis: 0,
            textAlign: 'center',
            marginRight: 10,
          },
          inline: false,
        },
      ],
      style: {
        position: 'relative',
        rowGap: '10px',
        columnGap: '10px',
      },
    },
    tags: ['Layout Container'],
    docLink: '/amis/zh-CN/components/flex',
    scaffold: {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '200px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '200px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
            flexBasis: '200px',
          },
        },
        {
          type: 'container',
          wrapperBody: false,
          size: 'xs',
          body: [],
          style: {
            flex: '0 0 auto',
            flexBasis: '200px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '200px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '200px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
        {
          type: 'container',
          size: 'xs',
          body: [],
          wrapperBody: false,
          style: {
            flex: '0 0 auto',
            flexBasis: '200px',
            display: 'block',
            position: 'static',
            minWidth: 'auto',
            minHeight: 'auto',
          },
        },
      ],
      direction: 'row',
      justify: 'flex-start',
      alignItems: 'stretch',
      style: {
        position: 'static',
        minHeight: 'auto',
        maxWidth: '1080px',
        minWidth: 'auto',
        height: '200px',
        overflowX: 'scroll',
        overflowY: 'scroll',
        margin: '0 cars',
      },
      isFixedHeight: true,
      isFixedWidth: false,
    },
    disabledRendererPlugin: false,
    isBaseComponent: false,
    pluginIcon: 'layout-3cols-plugin',
    rendererName: 'flex',
    id: 'e1f5ae2fdc97',
    plugin: {
      rendererName: 'flex',
      $schema: '/schemas/FlexSchema.json',
      disabledRendererPlugin: false,
      name: 'x-axis scroll container',
      order: 505,
      isBaseComponent: false,
      icon: 'fa fa-columns',
      pluginIcon: 'layout-3cols-plugin',
      description: 'X-axis scroll container: A layout container based on CSS Flex.',
      docLink: '/amis/zh-CN/components/flex',
      panelTitle: 'Layout Container',
      panelJustify: true,
      regions: [
        {
          key: 'items',
          label: 'Child node collection',
        },
      ],
    },
    order: 0,
  },
];
