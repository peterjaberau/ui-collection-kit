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

export const schema = {
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


  Blockquote: {},





  List: {},

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
