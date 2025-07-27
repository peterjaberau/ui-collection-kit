export const objectKeys = {
  Accordion: {},
  ActionBar: {},
  Alert: {},
  Avatar: {},
  Blockquote: {},
  Breadcrumb: {},
  Card: {},
  Checkbox: {},
  CheckboxCard: {},
  Clipboard: {},
  Collapsible: {},
  ColorPicker: {},
  Combobox: {},
  DataList: {},
  Dialog: {},
  Drawer: {},
  EMPTY_SLOT_STYLES: {},
  EMPTY_STYLES: {},
  Editable: {},
  EmptyState: {},
  Field: {},
  Fieldset: {},
  FileUpload: {},
  HoverCard: {},
  List: {},
  Menu: {},
  NativeSelect: {},
  NumberInput: {},
  Pagination: {},
  PinInput: {},
  Popover: {},
  Progress: {},
  ProgressCircle: {},
  QrCode: {},
  RadioCard: {},
  RadioGroup: {},
  RatingGroup: {},
  SegmentGroup: {},
  Select: {},
  Slider: {},
  Stat: {},
  Status: {},
  Steps: {},
  Switch: {},
  Table: {},
  Tabs: {},
  Tag: {},
  Timeline: {},
  Toast: {},
  Toggle: {},
  Tooltip: {},
  defaultBaseConfig: {},
  defaultConfig: {},
  defaultSystem: {},
  visuallyHiddenStyle: {},
}

export const schemaLayouts = {
  AspectRatio: {
    type: 'object',
    properties: {}
  },
  Bleed: {
    type: 'object',
    properties: {}
  },
  Box: {
    type: 'object',
    properties: {}
  },
  Center: {
    type: 'object',
    properties: {}
  },
  Container: {
    type: 'object',
    properties: {}
  },
  Flex: {
    type: 'object',
    properties: {}
  },
  Float: {
    type: 'object',
    properties: {}
  },
  Grid: {
    type: 'object',
    properties: {}
  },
  Group: {
    type: 'object',
    properties: {}
  },
  SimpleGrid: {
    type: 'object',
    properties: {}
  },
  Stack: {
    type: 'object',
    properties: {}
  },
  Wrap: {
    type: 'object',
    properties: {}
  },
}

export const schemaTypography = {
  Blockquote: {
    type: 'object',
    properties: {}
  },
  Code: {
    type: 'object',
    properties: {}
  },
  Em: {
    type: 'object',
    properties: {}
  },
  Heading: {
    type: 'object',
    properties: {}
  },
  Highlight: {
    type: 'object',
    properties: {}
  },
  Kbd: {
    type: 'object',
    properties: {}
  },
  Link: {
    type: 'object',
    properties: {}
  },
  LinkOverlay: {
    type: 'object',
    properties: {}
  },
  List: {
    type: 'object',
    properties: {}
  },
  Mark: {
    type: 'object',
    properties: {}
  },
  Prose: {
    type: 'object',
    properties: {}
  },
  Text: {
    type: 'object',
    properties: {}
  },
}

export const schemaUtilities = {
  ClientOnly: {
    type: 'object',
    properties: {}
  },
  DownloadTrigger: {
    type: 'object',
    properties: {
      data: {
        type: 'string',
      },
      filename: {
        type: 'string',
      },
      mimeType: {
        type: 'string',
      },
    }
  },
  EnvironmentProvider: {
    type: 'object',
    properties: {
      value: {
        type: 'string',
        format: 'function',
      }
    }
  },
  For: {
    type: 'object',
    properties: {
      each: {
        type: 'array',
      },
      fallback: {
        type: 'string',
        format: 'function',
      }
    }
  },
  FormatByte: {
    type: 'object',
    properties: {
      value: {
        type: 'number',
        required: true,
      },
      unit: {
        type: 'string',
        enum: ['bit', 'byte'],
      },
      unitDisplay: {
        type: 'string',
        enum: ['narrow', 'short', 'long'],
      }
    }
  },
  Presence: {
    type: 'object',
    properties: {
      present: {
        type: 'boolean',
      },
      immediate: {
        type: 'boolean',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      }
    }
  },
  Portal: {
    type: 'object',
    properties: {
      container: {
        type: 'string',
        format: 'function',
      },
      disabled: {
        type: 'boolean',
      }
    }
  },
  Show: {
    type: 'object',
    properties: {
      when: {
        type: 'string',
        format: 'function',
      },
      fallback: {
        type: 'string',
        format: 'function',
      }
    }
  },
  VisuallyHidden: {
    type: 'object',
    properties: {}
  },
  Theme: {
    type: 'object',
    properties: {
      appearance: {
        type: 'string',
        enum: ['light', 'dark'],
        defaultValue: 'light',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      hasBackground: {
        type: 'boolean',
      }
    }
  },

}

export const schemaComponents = {
  Accordion: {
    type: 'object',
    properties: {
      collapsible: {
        type: 'boolean',
        defaultValue: 'false',
      },
      defaultValue: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      disabled: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      multiple: {
        type: 'boolean',
        defaultValue: 'false',
      },
      orientation: {
        type: 'string',
        defaultValue: 'vertical',
        enum: ['vertical', 'horizontal'],
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      onFocusChange: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: false,
      },
      value: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    }
  },
  ActionBar: {
    type: 'object',
    properties: {
      autoFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        defaultValue: 'true',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      modal: {
        type: 'boolean',
        defaultValue: 'false',
      },
      portalled: {
        type: 'boolean',
        defaultValue: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      open: {
        type: 'boolean',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
    }
  },
  Alert: {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "defaultValue": "This is an alert"
      },
      "status": {
        "type": "string",
        "enum": [
          "info",
          "warning",
          "success",
          "error",
          "neutral"
        ],
        "defaultValue": "info"

      },
      "variant": {
        "type": "string",
        "enum": [
          "subtle",
          "surface",
          "outline",
          "solid"
        ],
        "defaultValue": "subtle"
      },
      "size": {
        "type": "string",
        "enum": [
          "lg",
          "md",
          "sm"
        ],
        "defaultValue": "md"
      },
      "inline": {
        "type": "boolean",
      },
      "colorPalette": {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        "defaultValue": "gray",
      }
    },
  },
  Avatar: {
    colorPalette: {
      "type": "string",
      "enum": [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink"
      ],
      defaultValue: 'gray',
    },
    size: {
      "type": "string",
      "enum": [
        "full",
        "2xs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
      ],
      defaultValue: 'md',
    },
    variant: {
      "type": "string",
      "enum": [
        "solid",
        "subtle",
        "outline",
      ],
      "defaultValue": "subtle"
    },
    shape: {
      "type": "string",
      "enum": [
        "square",
        "rounded",
        "full",
      ],
      "defaultValue": "full"
    },
    unstyled: {
      type: 'boolean',
    },
    ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    onStatusChange: {
      type: 'string',
      format: 'function',
    },
    borderless: {
      type: 'boolean',
    },
  },
  Badge: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
          "outline",
          "surface",
          "plain"
        ],
        "defaultValue": "subtle"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'sm',
      },
    }
  },
  Breadcrumb: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "underline",
          "plain",
        ],
        "defaultValue": "plain"
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  Button: {
    type: 'object',
    properties: {
      spinnerPlacement: {
        "type": "string",
        "enum": [
          "start",
          "end",
        ],
        "defaultValue": "start"
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
          "surface",
          "outline",
          "ghost",
          "plain"
        ],
        "defaultValue": "solid"
      },
      loading: {
        type: 'boolean',
      },
      loadingText: {
        "type": "string",
      },
    }
  },
  Card: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "elevated",
          "outline",
          "subtle",
        ],
        "defaultValue": "outline"
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  CheckboxCard: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "surface",
          "subtle",
          "outline",
          "solid"
        ],
        "defaultValue": "outline"
      },
      align: {
        "type": "string",
        "enum": [
          "start",
          "end",
          "center",
        ],
        "defaultValue": "start"
      },
      orientation: {
        "type": "string",
        "enum": [
          "vertical",
          "horizontal",
        ],
        "defaultValue": "horizontal"
      },
      unstyled: {
        type: 'boolean',
      },
      justify: {
        "type": "string",
        "enum": [
          "start",
          "end",
          "center",
        ],
      },
    }
  },
  Checkbox: {
    type: 'object',
    properties: {
      value: {
        type: 'string',
        defaultValue: 'on',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "solid",
          "subtle",
        ],
        "defaultValue": "solid"
      },
      unstyled: {
        type: 'boolean',
      },
      checked: {
        type: 'boolean',
      },
      defaultChecked: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      invalid: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onCheckedChange: {
        type: 'string',
        format: 'function',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
    }
  },
  Clipboard: {
    type: 'object',
    properties: {
      timeout: {
        type: 'number',
        defaultValue: 3000,
      },
      defaultValue: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      onStatusChange: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      value: {
        type: 'string',
      },
    }
  },
  CloseButton: {
    spinnerPlacement: {
      "type": "string",
      "enum": [
        "start",
        "end",
      ],
      "defaultValue": "start"
    },
    colorPalette: {
      "type": "string",
      "enum": [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink"
      ],
      defaultValue: 'gray',
    },
    size: {
      "type": "string",
      "enum": [
        "2xs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
      ],
      defaultValue: 'md',
    },
    variant: {
      "type": "string",
      "enum": [
        "solid",
        "subtle",
        "surface",
        "outline",
        "ghost",
        "plain"
      ],
      "defaultValue": "solid"
    },
    loading: {
      type: 'boolean',
    },
    loadingText: {
      "type": "string",
    },
  },
  Collapsible: {
    type: 'object',
    properties: {
      lazyMount: {
        type: "boolean",
        defaultValue: "false",
      },
      unmountOnExit: {
        type: "boolean",
        defaultValue: "false",
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
      },

      disabled: {
        type: "boolean",
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },


      onExitComplete: {
        type: "string",
        format: "function",
      },
      onOpenChange: {
        type: "string",
        format: "function",
      },
      open: {
        type: "boolean",
      },
    }
  },
  Combobox: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "defaultValue": "outline"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },

      collection: {
        type: "array",
      },
      composite: {
        type: 'boolean',
        defaultValue: 'true',
      },
      defaultInputValue: {
        type: 'string',
        defaultValue: '',
      },
      defaultValue: {
        type: 'array',
        defaultValue: [],
      },
      inputBehavior: {
        type: 'string',
        enum: ['none', 'autohighlight', 'autocomplete'],
        defaultValue: 'none',
      },
      lazyMount: {
        type: 'boolean',
      },
      loopFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      openOnChange: {
        type: 'boolean',
        defaultValue: 'true',
      },
      openOnClick: {
        type: 'boolean',
      },
      openOnKeyPress: {
        type: 'boolean',
        defaultValue: 'true',
      },
      positioning: {
        type: 'string'
      },
      selectionBehavior: {
        type: 'string',
        enum: ['replace', 'clear', 'preserve'],
        defaultValue: 'replace',
      },
      skipAnimationOnMount: {
        type: 'boolean',
      },
      unmountOnExit: {
        type: 'boolean',
      },

      unstyled: {
        type: 'boolean',
      },
      allowCustomValue: {
        type: 'boolean',
      },
      autoFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnSelect: {
        type: 'boolean',
      },
      defaultHighlightedValue: {
        type: 'string',
      },
      defaultOpen: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      disableLayer: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      highlightedValue: {
        type: 'string',
      },

      immediate: {
        type: 'boolean',
      },
      inputValue: {
        type: 'string',
      },
      invalid: {
        type: 'boolean',
      },
      multiple: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      navigate: {
        type: 'string',
        format: 'function',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onHighlightChange: {
        type: 'string',
        format: 'function',
      },
      onInputValueChange: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      onSelect: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      placeholder: {
        type: 'string',
      },
      present: {
        type: 'boolean',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      scrollToIndexFn: {
        type: 'string',
        format: 'function',
      },
      value: {
        type: 'array'
      }
    }
  },
  ColorPicker: {
    type: 'object',
    properties: {
      closeOnSelect: {
        type: 'boolean',
        defaultValue: 'false',
      },
      defaultFormat: {
        type: 'string',
        enum: ['hex', 'rgba', 'hsl', 'hsv'],
        defaultValue: 'rgba',
      },
      defaultValue: {
        type: 'string',
        defaultValue: '#000000',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      openAutoFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
        ],
        "defaultValue": "outline"
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
        defaultValue: 'false',
      },
      disabled: {
        type: 'boolean',
      },
      format: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      inline: {
        type: 'boolean',
      },
      invalid: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onFormatChange: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function'
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      onValueChangeEnd: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      value: {
        type: 'string',
      }
    }

  },
  DataList: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
        defaultValue: 'vertical',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "bold",
        ],
        "defaultValue": "subtle"
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  Dialog: {
    type: 'object',
    properties: {
      closeOnEscape: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        defaultValue: 'true',
      },
      defaultOpen: {
        type: 'boolean',
        defaultValue: 'false',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      modal: {
        type: 'boolean',
        defaultValue: 'true',
      },
      preventScroll: {
        type: 'boolean',
        defaultValue: 'true',
      },
      role: {
        type: 'string',
        enum: ['dialog', 'alertdialog'],
        defaultValue: 'dialog',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      trapFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      placement: {
        type: 'string',
        enum: ['center', 'top', 'bottom'],
        defaultValue: 'top',
      },
      scrollBehavior: {
        type: 'string',
        enum: ['inside', 'outside'],
        defaultValue: 'outside',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "cover",
          "full",
        ],
        defaultValue: 'md',
      },
      motionPreset: {
        type: 'string',
        enum: ['scale', 'slide-in-bottom', 'slide-in-top', 'slide-in-right', 'slide-in-left', 'none'],
        defaultValue: 'scale',
      },
      unstyled: {
        type: 'boolean',
      },
      ariaLabel: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      onEscapeKeyDown: {
        type: 'string',
        format: 'function',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      persistentElements: {
        type: 'string',
        format: 'function',
      },
      present: {
        type: 'boolean',
      },
      restoreFocus: {
        type: 'boolean',
      }
    }
  },
  Drawer: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "full",
        ],
        defaultValue: 'xs',
      },
      placement: {
        type: 'string',
        enum: ['start', 'end', 'top', 'bottom'],
        defaultValue: 'end',
      },
      unstyled: {
        type: 'boolean',
      },
      contained: {
        type: 'boolean',
      }
    }
  },
  Editable: {
    type: 'object',
    properties: {
      activationMode: {
        type: 'string',
        enum: ['click', 'dblclick', 'focus', 'none'],
        defaultValue: 'focus',
      },
      selectOnFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      submitMode: {
        type: 'string',
        enum: ['enter', 'blur', 'none'],
        defaultValue: 'both',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      autoResize: {
        type: 'boolean',
      },
      defaultEdit: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'string',
      },
      disabled: {
        type: 'boolean',
      },
      edit: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      invalid: {
        type: 'boolean',
      },
      maxLength: {
        type: 'number',
      },
      name: {
        type: 'string',
      },
      onEditChange: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      onValueCommit: {
        type: 'string',
        format: 'function',
      },
      onValueRevert: {
        type: 'string',
        format: 'function',
      },
      placeholder: {
        type: 'string',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      value: {
        type: 'string',
      }
    }
  },
  EmptyState: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  Field: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
        defaultValue: 'vertical',
      },
      unstyled: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      invalid: {
        type: 'boolean',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      }
    }
  },
  Fieldset: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      invalid: {
        type: 'boolean',
      }
    }
  },
  FileUpload: {
    type: 'object',
    properties: {
      allowDrop: {
        type: 'boolean',
        defaultValue: 'true',
      },
      locale: {
        type: 'string',
        defaultValue: 'en',
      },
      maxFiles: {
        type: 'number',
        defaultValue: 1,
      },
      maxFileSize: {
        type: 'string',
        defaultValue: 'Infinity', // Infinity
      },
      minFileSize: {
        type: 'string',
        defaultValue: '0',
      },
      preventDocumentDrop: {
        type: 'boolean',
        defaultValue: 'true',
      },
      unstyled: {
        type: 'boolean',
      },
      accept: {
        type: 'array',
      },
      acceptedFiles: {
        type: 'array',
      },
      capture: {
        type: 'string',
        enum: ['user', 'environment'],
      },
      defaultAcceptedFiles: {
        type: 'array',
      },
      directory: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      ids: {
        type: 'array',
      },
      invalid: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onFileAccept: {
        type: 'string',
        format: 'function',
      },
      onFileChange: {
        type: 'string',
        format: 'function',
      },
      onFileReject: {
        type: 'string',
        format: 'function',
      },
      required: {
        type: 'boolean',
      },
      transformFiles: {
        type: 'string',
        format: 'function',
      },
      validate: {
        type: 'string',
        format: 'function',
      }
    }
  },
  HoverCard: {
    type: 'object',
    properties: {
      closeDelay: {
        type: 'number',
        defaultValue: 300,
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      openDelay: {
        type: 'number',
        defaultValue: 700,
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
    }
  },
  Icon: {
    type: 'object',
    properties: {
      size: {
        "type": "string",
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
        ],
        defaultValue: 'md',
      },
      color: {
        "type": "string",
      }
    }
  },
  IconButton: {
    type: 'object',
    properties: {
      spinnerPlacement: {
        "type": "string",
        "enum": [
          "start",
          "end",
        ],
        "defaultValue": "start"
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
          "surface",
          "outline",
          "ghost",
          "plain"
        ],
        defaultValue: 'solid'
      },
      loading: {
        type: 'boolean',
      },
    }
  },
  Image: {
    type: 'object',
    properties: {}
  },
  Input: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "defaultValue": "outline"
      },
    }
  },
  Menu: {
    type: 'object',
    properties: {
      closeOnSelect: {
        type: 'boolean',
        defaultValue: 'true',
      },
      composite: {
        type: 'boolean',
        defaultValue: 'true',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      loopFocus: {
        type: 'boolean',
        defaultValue: 'false',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      typeahead: {
        type: 'boolean',
        defaultValue: 'true',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "solid",
        ],
        "defaultValue": "subtle"
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      anchorPoint: {
        type: 'object',
      },
      ariaLabel: {
        type: 'string',
      },
      defaultHighlightedValue: {
        type: 'string',
      },
      defaultOpen: {
        type: 'boolean',
      },
      highlightedValue: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      navigate: {
        type: 'string',
        format: 'function',
      },
      onEscapeKeyDown: {
        type: 'string',
        format: 'function',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onHighlightChange: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      onSelect: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
    }
  },
  NumberInput: {
    type: 'object',
    properties: {
      allowOverflow: {
        type: 'boolean',
        defaultValue: 'true',
      },
      clampValueOnBlur: {
        type: 'boolean',
        defaultValue: 'true',
      },
      focusInputOnChange: {
        type: 'boolean',
        defaultValue: 'true',
      },
      inputMode: {
        type: 'string',
        defaultValue: 'decimal',
      },
      locale: {
        type: 'string',
        defaultValue: 'en-US',
      },
      max: {
        type: 'number',
      },
      min: {
        type: 'number',
      },
      pattern: {
        type: 'string',
        defaultValue: '-?[0-9]*(.[0-9]+)?',
      },
      spinOnPress: {
        type: 'boolean',
        defaultValue: 'true',
      },
      step: {
        type: 'number',
        defaultValue: 1,
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "defaultValue": "outline"
      },
      unstyled: {
        type: 'boolean',
      },
      allowMouseWheel: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'string',
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
      },
      invalid: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onFocusChange: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      onValueInvalid: {
        type: 'string',
        format: 'function',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      value: {
        type: 'string',
      }
    }
  },
  Pagination: {
    type: 'object',
    properties: {
      defaultPage: {
        type: 'number',
        defaultValue: 1,
      },
      defaultPageSize: {
        type: 'number',
        defaultValue: 10,
      },
      siblingCount: {
        type: 'number',
        defaultValue: 1,
      },
      type: {
        type: 'string',
        enum: ['button', 'link'],
        defaultValue: 'button',
      },
      count: {
        type: 'number',
      },
      onPageChange: {
        type: 'string',
        format: 'function',
      },
      onPageSizeChange: {
        type: 'string',
        format: 'function',
      },
      page: {
        type: 'number',
      },
      pageSize: {
        type: 'number',
      }
    }
  },
  PasswordInput: {
    type: 'object',
    properties: {
      defaultVisible: {
        type: 'boolean',
        defaultValue: 'false',
      },
      visible: {
        type: 'boolean',
      },
      onVisibleChange: {
        type: 'string',
        format: 'function',
      }
    }
  },
  PinInput: {
    type: 'object',
    properties: {
      placeholder: {
        type: 'string',
        defaultValue: '○',
      },
      type: {
        "type": "string",
        "enum": [
          "numeric",
          "alphabetic",
          "alphanumeric",
        ],
        defaultValue: 'numeric',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "defaultValue": "outline"
      },
      unstyled: {
        type: 'boolean',
      },
      autoFocus: {
        type: 'boolean',
      },
      blurOnComplete: {
        type: 'boolean',
      },
      count: {
        type: 'number',
      },
      defaultValue: {
        type: 'array',
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      invalid: {
        type: 'boolean',
      },
      mask: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      onValueComplete: {
        type: 'string',
        format: 'function',
      },
      onValueInvalid: {
        type: 'string',
        format: 'function',
      },
      opt: {
        type: 'boolean',
      },
      pattern: {
        type: 'string',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      value: {
        type: 'array',
      },
      attached: {
        type: 'boolean',
      }
    }
  },
  Popover: {
    type: 'object',
    properties: {
      autoFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        defaultValue: 'true',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      modal: {
        type: 'boolean',
        defaultValue: 'false',
      },
      portalled: {
        type: 'boolean',
        defaultValue: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      onEscapeKeyDown: {
        type: 'string',
        format: 'function',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      persistentElements: {
        type: 'string',
        format: 'function',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
    }
  },
  ProgressCircle: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      }
    }
  },
  Progress: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      defaultValue: {
        type: 'number',
        defaultValue: 50,
      },
      formatOptions: {
        type: 'object',
      },
      locale: {
        type: 'string',
        defaultValue: 'en-US',
      },
      max: {
        type: 'number',
        defaultValue: 100,
      },
      min: {
        type: 'number',
        defaultValue: 0,
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
        ],
        defaultValue: 'outline',
      },
      shape: {
        "type": "string",
        "enum": [
          "square",
          "rounded",
          "full",
        ],
        defaultValue: 'rounded',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
        ],
        defaultValue: 'md',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      value: {
        type: 'number',
      },
      striped: {
        type: 'boolean',
      },
      animated: {
        type: 'boolean',
      }
    }
  },
  QrCode: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "2xs",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "full",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'string',
      },
      encoding: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      pixelSize: {
        type: 'number',
      },
      value: {
        type: 'string',
      }

    }
  },
  RadioCard: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "surface",
          "subtle",
          "outline",
          "solid",
        ],
        defaultValue: 'outline'
      },
      align: {
        type: 'string',
        enum: ['start', 'center', 'end'],
        defaultValue: 'start',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
        defaultValue: 'horizontal',
      },
      justify: {
        type: 'string',
        enum: ['start', 'center', 'end'],
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  Radio: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "solid",
        ],
        "defaultValue": "solid"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      unstyled: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'string',
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
      },
      readOnly: {
        type: 'boolean',
      },
      value: {
        type: 'string',
      }
    }
  },
  Rating: {
    type: 'object',
    properties: {
      count: {
        type: 'number',
        defaultValue: 5,
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      allowHalf: {
        type: 'boolean',
      },
      autoFocus: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'number',
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
      onHoverChange: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      value: {
        type: 'number',
      }
      }

    },
  SegmentedControl: {
      type: 'object',
      properties: {
        colorPalette: {
          "type": "string",
          "enum": [
            "gray",
            "red",
            "orange",
            "yellow",
            "green",
            "teal",
            "blue",
            "cyan",
            "purple",
            "pink"
          ],
          defaultValue: 'gray',
        },
        size: {
          "type": "string",
          "enum": [
            "xs",
            "sm",
            "md",
            "lg",
          ],
          defaultValue: 'md',
        },
        unstyled: {
          type: 'boolean',
        },
        defaultValue: {
          type: 'string',
        },
        disabled: {
          type: 'boolean',
        },
        form: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        ids: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        name: {
          type: 'string',
        },
        onValueChange: {
          type: 'string',
          format: 'function',
        },
        orientation: {
          type: 'string',
          enum: ['vertical', 'horizontal'],
        },
        readOnly: {
          type: 'boolean',
        },
        value: {
          type: 'string',
        }

      }
    },
  NativeSelect: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "plain",
        ],
        "defaultValue": "outline"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
        ],
        defaultValue: 'md',
      },
      disabled: {
        type: 'boolean',
      },
      invalid: {
        type: 'boolean',
      },
      unstyled: {
        type: 'boolean',
      }
    }
  },
  Select: {
    type: 'object',
    properties: {
      collection: {
        type: 'array',
      },
      closeOnSelect: {
        type: 'boolean',
        defaultValue: 'true',
      },
      composite: {
        type: 'boolean',
        defaultValue: 'true',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      loopFocus: {
        type: 'boolean',
        defaultValue: 'false',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },

      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
        ],
        "defaultValue": "outline"
      },

      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },

      defaultHighlightedValue: {
        type: 'string',
      },
      defaultOpen: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      deselectable: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      highlightedValue: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      invalid: {
        type: 'boolean',
      },
      multiple: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onHighlightChange: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      onSelect: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
      scrollToIndexFn: {
        type: 'string',
        format: 'function',
      },
      value: {
        type: 'array',
        items: {
          type: 'string',
        }
      }

    }
  },
  Separator: {
    tupe: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "dashed",
          "dotted",
          ],
        defaultValue: 'solid'
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
    }
  },
  Skeleton: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      loading: {
        type: 'boolean',
        defaultValue: 'true',
      },
      variant: {
        "type": "string",
        "enum": [
          "pulse",
          "shine",
          "none",
        ],
        defaultValue: 'pulse'
      }

    }
  },
  Slider: {
    type: 'object',
    properties: {
      max: {
        type: 'number',
        defaultValue: 100,
      },
      min: {
        type: 'number',
        defaultValue: 0,
      },
      minStepsBetweenThumbs: {
        type: 'number',
        defaultValue: 0,
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
      origin: {
        type: 'string',
        enum: ['center', 'end', 'start'],
        defaultValue: 'start',
      },
      step: {
        type: 'number',
        defaultValue: 1,
      },
      thumbAlignment: {
        type: 'string',
        enum: ['center', 'contain'],
        defaultValue: 'contain',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "solid",
          ],
        defaultValue: 'outline'
      },
      unstyled: {
        type: 'boolean',
      },
      ariaLabel: {
        type: 'string',
      },
      ariaLabelledBy: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      defaultValue: {
        type: 'array',
        items: {
          type: 'number',
        }
      },
      disabled: {
        type: 'boolean',
      },
      form: {
        type: 'string',
      },
      getAriaValueText: {
        type: 'string',
        format: 'function',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      invalid: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      onFocusChange: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      onValueChangeEnd: {
        type: 'string',
      },
      readOnly: {
        type: 'boolean',
      },
      thumbSize: {
        type: 'object',
        properties: {
          width: {
            type: 'number',
          },
          height: {
            type: 'number',
          }
        }
      },
      value: {
        type: 'array',
        items: {
          type: 'number',
        }
      }
    }
  },
  Spinner: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "inherit",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
        ],
        defaultValue: 'md',
      },
    }
  },
  Stat: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      }
    }
  },
  Status: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      }

    }
  },
  Steps: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
        ],
        defaultValue: 'solid'
      },

      size: {
        type: 'string',
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },

      count: {
        type: 'number',
      },

      defaultStep: {
        type: 'number',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },

      linear: {
        type: 'boolean',
      },

      onStepChange: {
        type: 'string',
        format: 'function',
      },
      onStepComplete: {
        type: 'string',
        format: 'function',
      },
      step: {
        type: 'number',
      },

    }
  },
  Switch: {
    type: 'object',
    properties: {
      value: {
        type: 'boolean',
        defaultValue: 'on',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },

      variant: {
        "type": "string",
        "enum": [
          "solid",
          "raised",
        ],
        "defaultValue": "solid"
      },

      size: {
        type: 'string',
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      checked: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },

      invalid: {
        type: 'boolean',
      },
      label: {
        type: 'string',
      },

      name: {
        type: 'string',
      },
      onCheckedChange: {
        type: 'string',
        format: 'function',
      },
      readOnly: {
        type: 'boolean',
      },
      required: {
        type: 'boolean',
      },
    }
  },
  Tabs: {
    type: 'object',
    properties: {
      activationMode: {
        type: 'string',
        enum: ['manual', 'automatic'],
        defaultValue: 'automatic',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      loopFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "line",
          "subtle",
          "enclosed",
          "outline",
          "plain",
        ],
        defaultValue: 'line'
      },
      unstyled: {
        type: 'boolean',
      },
      composite: {
        type: 'boolean',
      },
      defaultValue: {
        type: 'string',
      },
      deselectable: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      navigate: {
        type: 'string',
        format: 'function',
      },
      onFocusChange: {
        type: 'string',
        format: 'function',
      },
      onValueChange: {
        type: 'string',
        format: 'function',
      },
      value: {
        type: 'string',
      },
      fitted: {
        type: 'boolean',
      },
      justify: {
        type: 'string',
        enum: ['start', 'center', 'end'],
      }
    }
  },
  Table: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "line",
          "outline",
        ],
        defaultValue: 'line'
      },

      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      native: {
        type: 'boolean',
      },
      unstyled: {
        type: 'boolean',
      },
      interactive: {
        type: 'boolean',
      },
      stickyHeader: {
        type: 'boolean',
      },
      striped: {
        type: 'boolean',
      },
      showColumnBorder: {
        type: 'boolean',
      },

    }
  },
  Tag: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
          "xl",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
          "outline",
          "surface",
        ],
        defaultValue: 'solid'
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  Textarea: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        defaultValue: 'outline'
      },
      size: {
        type: 'string',
        enum: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
      },
    }
  },
  Timeline: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "solid",
          "outline",
          "plain"
        ],
        defaultValue: 'solid'
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
          "xl"
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
    }
  },
  Toast: {
    type: 'object',
    properties: {
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
    }
  },
  ToggleTip: {
    type: 'object',
    properties: {
      autoFocus: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        defaultValue: 'true',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      modal: {
        type: 'boolean',
        defaultValue: 'false',
      },
      portalled: {
        type: 'boolean',
        defaultValue: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        defaultValue: 'md',
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      onEscapeKeyDown: {
        type: 'string',
        format: 'function',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onFocusOutside: {
        type: 'string',
        format: 'function',
      },
      onInteractOutside: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      onPointerDownOutside: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      persistentElements: {
        type: 'string',
        format: 'function',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      },
    }
  },
  Tooltip: {
    type: 'object',
    properties: {
      closeDelay: {
        type: 'number',
        defaultValue: 500,
      },
      closeOnClick: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnPointerDown: {
        type: 'boolean',
        defaultValue: 'true',
      },
      closeOnScroll: {
        type: 'boolean',
        defaultValue: 'true',
      },
      interactive: {
        type: 'boolean',
        defaultValue: 'false',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      openDelay: {
        type: 'number',
        defaultValue: 1000,
      },
      skipAnimationOnMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      unstyled: {
        type: 'boolean',
      },
      ariaLabel: {
        type: 'string',
      },
      defaultOpen: {
        type: 'boolean',
      },
      disabled: {
        type: 'boolean',
      },
      id: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      immediate: {
        type: 'boolean',
      },
      onExitComplete: {
        type: 'string',
        format: 'function',
      },
      onOpenChange: {
        type: 'string',
        format: 'function',
      },
      open: {
        type: 'boolean',
      },
      positioning: {
        type: 'object',
      },
      present: {
        type: 'boolean',
      }
    }

  },
  TreeView: {
    type: 'object',
    properties: {
      collection: {
        type: 'array',
      },
      expandOnClick: {
        type: 'boolean',
        defaultValue: 'true',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
      },
      selectionMode: {
        type: 'string',
        enum: ['single', 'multiple'],
        defaultValue: 'single',
      },
      typeahead: {
        type: 'boolean',
        defaultValue: 'true',
      },
      unmountOnExit: {
        type: 'boolean',
        defaultValue: 'false',
      },
      colorPalette: {
        "type": "string",
        "enum": [
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink"
        ],
        defaultValue: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
        ],
        defaultValue: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "solid",
        ],
        defaultValue: 'subtle'
      },
      unstyled: {
        type: 'boolean',
      },
      checkedValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      defaultCheckedValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      defaultExpandedValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      defaultFocusedValue: {
        type: 'string',
      },
      defaultSelectedValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      expandedValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      focusedValue: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      loadChildren: {
        type: 'string',
        format: 'function',
      },
      onCheckedChange: {
        type: 'string',
        format: 'function',
      },
      onExpandedChange: {
        type: 'string',
        format: 'function',
      },
      onFocusChange: {
        type: 'string',
        format: 'function',
      },
      onLoadChildrenComplete: {
        type: 'string',
        format: 'function',
      },
      onLoadChildrenError: {
        type: 'string',
        format: 'function',
      },
      onSelectionChange: {
        type: 'string',
        format: 'function',
      },
      selectedValue: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
      animateContent: {
        type: 'boolean',
      }

    }
  },

}
