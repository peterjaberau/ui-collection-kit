const BUTTON_WIDGET = {
  type: "BUTTON_WIDGET",
  animateLoading: true,
  text: "Submit",
  buttonVariant: "PRIMARY",
  placement: "CENTER",
  rows: 4,
  columns: 16,
  widgetName: "Button",
  isDisabled: false,
  isVisible: true,
  isDefaultClickDisabled: true,
  disabledWhenInvalid: false,
  resetFormOnClick: false,
  recaptchaType: "V3",
  version: 1,
  responsiveBehavior: "hug",
  minWidth: 120,
  searchTags: ["click", "submit"],
  tags: ["Buttons"],
  hideCard: false,
  isDeprecated: false,
  displayName: "Button",
  key: "3poxdwwgxc",
  iconSVG: "/static/media/icon.7a418b9e1899a550d7e8f33b48cbde12.svg",
  thumbnailSVG: "/static/media/thumbnail.a348658e996feaad96cadc30d99374ff.svg",
  needsErrorInfo: false,
  onCanvasUI: {
    selectionBGCSSVar: "--on-canvas-ui-widget-selection",
    focusBGCSSVar: "--on-canvas-ui-widget-focus",
    selectionColorCSSVar: "--on-canvas-ui-widget-focus",
    focusColorCSSVar: "--on-canvas-ui-widget-selection",
    disableParentSelection: false,
  },
}

const widgetsStore = {
  BUTTON_WIDGET: {
    type: "BUTTON_WIDGET",
    animateLoading: true,
    text: "Submit",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    rows: 4,
    columns: 16,
    widgetName: "Button",
    isDisabled: false,
    isVisible: true,
    isDefaultClickDisabled: true,
    disabledWhenInvalid: false,
    resetFormOnClick: false,
    recaptchaType: "V3",
    version: 1,
    responsiveBehavior: "hug",
    minWidth: 120,
    searchTags: ["click", "submit"],
    tags: ["Buttons"],
    hideCard: false,
    isDeprecated: false,
    displayName: "Button",
    key: "3poxdwwgxc",
    iconSVG: "/static/media/icon.7a418b9e1899a550d7e8f33b48cbde12.svg",
    thumbnailSVG: "/static/media/thumbnail.a348658e996feaad96cadc30d99374ff.svg",
    needsErrorInfo: false,
    onCanvasUI: {
      selectionBGCSSVar: "--on-canvas-ui-widget-selection",
      focusBGCSSVar: "--on-canvas-ui-widget-focus",
      selectionColorCSSVar: "--on-canvas-ui-widget-focus",
      focusColorCSSVar: "--on-canvas-ui-widget-selection",
      disableParentSelection: false,
    },
  },
}

const BaseWidgetPayload = {
  getFeatures: null,
  getDependencyMap: {},
  pasteOperationChecks: null,
  performPasteOperation: {
    widgets: {
      allWidgets: [],
      widgetIdMap: [],
      reverseWidgetIdMap: []
    }
  },
  executeAction: {
    triggerPropertyName: "onClick",
    dynamicString: 'this.props.onClick',
    event: {
      type: 'EventType.ON_CLICK',
      callback: 'this.handleActionComplete'
    }
  },
  disableDrag: false,
  updateWidget: {
    operationName: null,
    widgetId: null,
    widgetProperties: null,
  },
  deleteWidgetProperty: {
    widgetId: null,
    propertyPaths: [],
  },
  batchUpdateWidgetProperty: {
    widgetId: null,
    updates: {
      modify: {},
      remove: [],
      triggerPaths: [],
      postUpdateAction: null,
    },
    shouldReplay: true,
  },
  updateWidgetProperty: {
    propertyName: null,
    propertyValue: null,
  },
  resetChildrenMetaProperty: {
    widgetId: null,
  },
  selectWidgetRequest: {
    selectionRequestType: null,
    payload: null,
  },
  unfocusWidget: {},
  modifyMetaWidgets: {
    modifications:{
      addOrUpdate: {},
      deleteIds: [],
      propertyUpdates: [],
      creatorId: null
    },
  },
  deleteMetaWidgets: {},
  setWidgetCache: {
    data: {},
  },
  updateMetaWidgetProperty: {
    payload: {
      updates: {
        modify: {},
        remove: [],
        triggerPaths: [],
        postUpdateAction: null
      },
      widgetId: null,
      creatorId: null,
      computeDynamicPaths: false
    }
  },
  getWidgetCache: {},
  getWidgetCacheKey: null,
  setWidgetReferenceCache: {
    data: null
  },
  getWidgetReferenceCache: {},
  getWidgetCacheReferenceKey: null,
  isAutoLayoutMode: true,
  updateOneClickBindingOptionsVisibility: {
    visibility: false,
  },
  defaultProps: {
    parentRowSpace: 1,
    parentColumnSpace: 1,
    topRow: 0,
    leftColumn: 0,
    isLoading: false,
    renderMode: "CANVAS",
    dragDisabled: false,
    dropDisabled: false,
    isDeletable: true,
    resizeDisabled: false,
    disablePropertyPane: false,
    isFlexChild: false,
    isMobile: false,
  },
  getFeatureFlag: {
    featureFlag: null
  }
}
const ButtonWidgetPayload = {
  type: "BUTTON_WIDGET",
  config: {
    name: "Button",
    tags: ["Buttons"],
    needsMeta: true,
    searchTags: ["click", "submit"],
    iconSVG: "/static/media/icon.7a418b9e1899a550d7e8f33b48cbde12.svg",
    thumbnailSVG: "/static/media/thumbnail.a348658e996feaad96cadc30d99374ff.svg",
  },
  defaults: {
    animateLoading: true,
    text: "Submit",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    rows: 4,
    columns: 16,
    widgetName: "Button",
    isDisabled: false,
    isVisible: true,
    isDefaultClickDisabled: true,
    disabledWhenInvalid: false,
    resetFormOnClick: false,
    recaptchaType: "V3",
    version: 1,
    responsiveBehavior: "hug",
    minWidth: 120,
  },
  methods: {
    getSnipingModeUpdates: [{
      propertyPath: "onClick",
      propertyValue: "run",
      isDynamicPropertyPath: true
    }],
    getQueryGenerationConfig: null,
    getPropertyUpdatesForQueryBinding: null,
    getCanvasHeightOffset: null,
    getEditorCallouts: null,
    getOneClickBindingConnectableWidgetConfig: null
  },
  getAutoLayoutConfig: {
    defaults: {
      rows: 4,
      columns: 6.453,
    },
    autoDimension: {
      width: true,
    },
    widgetSize: [
      {
        viewportMinWidth: 0,
        configuration: {
          minWidth: "120px",
          maxWidth: "360px",
          minHeight: "40px",
        },
      },
    ],
    disableResizeHandles: {
      horizontal: true,
      vertical: true,
    },
  },
  getAnvilConfig: {
    isLargeWidget: false,
    widgetSize: {
      maxHeight: {},
      maxWidth: { base: "360px" },
      minHeight: { base: "40px" },
      minWidth: { base: "120px" },
    },
  },
  getAutocompleteDefinitions: {
    "!doc": "Buttons are used to capture user intent and trigger actions based on that intent",
    "!url": "https://docs.appsmith.com/widget-reference/button",
    "isVisible": {
      "!type": "bool",
      "!doc": "Boolean value indicating if the widget is in visible state",
    },
    "text": "string",
    "isDisabled": "bool",
    "recaptchaToken": "string"
  },
  getPropertyPaneContentConfig: [
    {
      sectionName: "Basic",
      children: [
        {
          propertyName: "text",
          label: "Label",
          helpText: "Sets the label of the button",
          controlType: "INPUT_TEXT",
          placeholderText: "Submit",
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "TEXT" },
        },
        {
          helpText: "when the button is clicked",
          propertyName: "onClick",
          label: "onClick",
          controlType: "ACTION_SELECTOR",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: true,
        },
      ],
    },
    {
      sectionName: "General",
      children: [
        {
          helpText: "Show helper text with button on hover",
          propertyName: "tooltip",
          label: "Tooltip",
          controlType: "INPUT_TEXT",
          placeholderText: "Submits Form",
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "TEXT" },
        },
        {
          propertyName: "isVisible",
          label: "Visible",
          helpText: "Controls the visibility of the widget",
          controlType: "SWITCH",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "BOOLEAN" },
        },
        {
          propertyName: "isDisabled",
          label: "Disabled",
          controlType: "SWITCH",
          helpText: "Disables clicks to this widget",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "BOOLEAN" },
        },
        {
          propertyName: "animateLoading",
          label: "Animate loading",
          controlType: "SWITCH",
          helpText: "Controls the loading of the widget",
          defaultValue: true,
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "BOOLEAN" },
        },
      ],
    },
    {
      sectionName: "Validation",
      hidden: false,
      children: [
        {
          propertyName: "googleRecaptchaKey",
          label: "Google reCAPTCHA key",
          helpText: "Sets Google reCAPTCHA site key for the button",
          controlType: "INPUT_TEXT",
          placeholderText: "reCAPTCHA Key",
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "TEXT" },
        },
        {
          propertyName: "recaptchaType",
          label: "Google reCAPTCHA version",
          controlType: "DROP_DOWN",
          helpText: "Select reCAPTCHA version",
          options: [
            {
              label: "reCAPTCHA v3",
              value: "V3",
            },
            {
              label: "reCAPTCHA v2",
              value: "V2",
            },
          ],
          isBindProperty: true,
          isTriggerProperty: false,
          validation: {
            type: "TEXT",
            params: {
              allowedValues: ["V3", "V2"],
              default: "V3",
            },
          },
        },
      ],
    },
    {
      sectionName: "Form settings",
      children: [
        {
          helpText:
            "Disabled if the form is invalid, if this widget exists directly within a Form widget.",
          propertyName: "disabledWhenInvalid",
          label: "Disable when form is invalid",
          controlType: "SWITCH",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "BOOLEAN" },
        },
        {
          helpText:
            "Resets the fields of the form, on click, if this widget exists directly within a Form widget.",
          propertyName: "resetFormOnClick",
          label: "Reset form on success",
          controlType: "SWITCH",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "BOOLEAN" },
        },
      ],
    },
  ],
  getPropertyPaneStyleConfig: [
    {
      sectionName: "General",
      children: [
        {
          propertyName: "buttonVariant",
          label: "Button variant",
          controlType: "ICON_TABS",
          defaultValue: "PRIMARY",
          fullWidth: true,
          helpText: "Sets the variant of the icon button",
          options: [
            {
              label: "Primary",
              value: "PRIMARY",
            },
            {
              label: "Secondary",
              value: "SECONDARY",
            },
            {
              label: "Tertiary",
              value: "TERTIARY",
            },
          ],
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: {
            type: "TEXT",
            params: {
              allowedValues: [
                "PRIMARY",
                "SECONDARY",
                "TERTIARY",
              ],
              default: "PRIMARY",
            },
          },
        },
      ],
    },
    {
      sectionName: "Icon",
      children: [
        {
          propertyName: "iconName",
          label: "Select icon",
          helpText: "Sets the icon to be used for the button",
          controlType: "ICON_SELECT",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          updateHook: [],
          dependencies: ["iconAlign"],
          validation: {
            type: "TEXT",
          },
        },
        {
          propertyName: "iconAlign",
          label: "Position",
          helpText: "Sets the icon alignment of the button",
          controlType: "ICON_TABS",
          defaultValue: "left",
          fullWidth: false,
          options: [
            {
              startIcon: "skip-left-line",
              value: "left",
            },
            {
              startIcon: "skip-right-line",
              value: "right",
            },
          ],
          isBindProperty: false,
          isTriggerProperty: false,
          validation: {
            type: "TEXT",
            params: {
              allowedValues: ["center", "left", "right"],
            },
          },
        },
        {
          propertyName: "placement",
          label: "Placement",
          controlType: "ICON_TABS",
          fullWidth: true,
          helpText: "Sets the space between items",
          options: [
            {
              label: "Start",
              value: "START",
            },
            {
              label: "Between",
              value: "BETWEEN",
            },
            {
              label: "Center",
              value: "CENTER",
            },
          ],
          defaultValue: "CENTER",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: {
            type: "TEXT",
            params: {
              allowedValues: [
                "START",
                "BETWEEN",
                "CENTER",
              ],
              default: "CENTER",
            },
          },
        },
      ],
    },
    {
      sectionName: "Color",
      children: [
        {
          propertyName: "buttonColor",
          helpText: "Changes the color of the button",
          label: "Button color",
          controlType: "COLOR_PICKER",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "TEXT" },
        },
      ],
    },
    {
      sectionName: "Border and shadow",
      children: [
        {
          propertyName: "borderRadius",
          label: "Border radius",
          helpText:
            "Rounds the corners of the icon button's outer border edge",
          controlType: "BORDER_RADIUS_OPTIONS",
          isBindProperty: true,
          isJSConvertible: true,
          isTriggerProperty: false,
          validation: {
            type: "TEXT",
          },
        },
        {
          propertyName: "boxShadow",
          label: "Box shadow",
          helpText:
            "Enables you to cast a drop shadow from the frame of the widget",
          controlType: "BOX_SHADOW_OPTIONS",
          isJSConvertible: true,
          isBindProperty: true,
          isTriggerProperty: false,
          validation: { type: "TEXT" },
        },
      ],
    },
  ],
  getStylesheetConfig: {
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    boxShadow: "none",
  },
  getMetaPropertiesMap: {
    recaptchaToken: null
  },
  getDerivedPropertiesMap: {},
  getSetterConfig: {
    __setters: {
      setVisibility: {
        path: "isVisible",
        type: "boolean",
      },
      setDisabled: {
        path: "isDisabled",
        type: "boolean",
      },
      setLabel: {
        path: "text",
        type: "string",
      },
      setColor: {
        path: "buttonColor",
        type: "string",
      },
    },
  },
}



export const WidgetInstance = (widgetObj: any) => {

  const { config, defaults } = widgetObj



  const getConfig = () => config
  const getDefaults = () => defaults


  const getMethods = () => ({
    getSnipingModeUpdates: [{
      propertyPath: "onClick",
      propertyValue: "run",
      isDynamicPropertyPath: true
    }],
    getQueryGenerationConfig: {},
    getPropertyUpdatesForQueryBinding: {},
    getCanvasHeightOffset: {},
    getEditorCallouts: {},
    getOneClickBindingConnectableWidgetConfig: {}
  })

  const getAutocompleteDefinitions = () => ({
    "!doc": "Buttons are used to capture user intent and trigger actions based on that intent",
    "!url": "https://docs.appsmith.com/widget-reference/button",
    "isVisible": {
      "!type": "bool",
      "!doc": "Boolean value indicating if the widget is in visible state",
    },
    "text": "string",
    "isDisabled": "bool",
    "recaptchaToken": "string"
  })

  const getPropertyPaneContentConfig = () => {}
  const getPropertyPaneStyleConfig = () => {}
  const getStylesheetConfig = () => {}

  const getMetaPropertiesMap = () => {}
  const getDerivedPropertiesMap = () => {}
  const getSetterConfig = () => {}

  const getAutoLayoutConfig = () => {}
  const getAnvilConfig = () => {}

  return {
    type: "BUTTON_WIDGET",
  }
}
