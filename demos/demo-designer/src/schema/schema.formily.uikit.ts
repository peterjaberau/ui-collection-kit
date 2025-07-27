
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
        default: 'light',
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
        default: 'gray',
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
        default: 'false',
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
        default: 'false',
      },
      multiple: {
        type: 'boolean',
        default: 'false',
      },
      orientation: {
        type: 'string',
        default: 'vertical',
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
        default: false,
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
        default: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        default: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        default: 'true',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      modal: {
        type: 'boolean',
        default: 'false',
      },
      portalled: {
        type: 'boolean',
        default: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        "default": "This is an alert"
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
        "default": "info"

      },
      "variant": {
        "type": "string",
        "enum": [
          "subtle",
          "surface",
          "outline",
          "solid"
        ],
        "default": "subtle"
      },
      "size": {
        "type": "string",
        "enum": [
          "lg",
          "md",
          "sm"
        ],
        "default": "md"
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
        "default": "gray",
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
      default: 'gray',
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
      default: 'md',
    },
    variant: {
      "type": "string",
      "enum": [
        "solid",
        "subtle",
        "outline",
      ],
      "default": "subtle"
    },
    shape: {
      "type": "string",
      "enum": [
        "square",
        "rounded",
        "full",
      ],
      "default": "full"
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
        default: 'gray',
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
        "default": "subtle"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'sm',
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "underline",
          "plain",
        ],
        "default": "plain"
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
        "default": "start",
        "title": "Spinner Placement",
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          layout: 'vertical',
        },
        "x-component": "Select",
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
        'default': 'gray',
        "title": "colorPalette",
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          'layout': 'vertical',
        },
        "x-component": "Select",
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
        default: 'md',
        "title": "Size",
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          'layout': 'vertical',
        },
        "x-component": "Select",
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
        "default": "solid",
        "title": "Variant",
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          'layout': 'vertical',
        },
        "x-component": "Select",
      },
      loading: {
        type: 'boolean',
        "title": "Loading",
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          'layout': 'vertical',
        },
        "x-component": "Switch",
      },
      loadingText: {
        "type": "string",
        "title": "loadingText",
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          'layout': 'vertical',
        },
        "x-component": "Input",
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "elevated",
          "outline",
          "subtle",
        ],
        "default": "outline"
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "surface",
          "subtle",
          "outline",
          "solid"
        ],
        "default": "outline"
      },
      align: {
        "type": "string",
        "enum": [
          "start",
          "end",
          "center",
        ],
        "default": "start"
      },
      orientation: {
        "type": "string",
        "enum": [
          "vertical",
          "horizontal",
        ],
        "default": "horizontal"
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
        default: 'on',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "solid",
          "subtle",
        ],
        "default": "solid"
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
        default: 3000,
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
      "default": "start"
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
      default: 'gray',
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
      default: 'md',
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
      "default": "solid"
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
        default: "false",
      },
      unmountOnExit: {
        type: "boolean",
        default: "false",
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "default": "outline"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'true',
      },
      defaultInputValue: {
        type: 'string',
        default: '',
      },
      defaultValue: {
        type: 'array',
        default: [],
      },
      inputBehavior: {
        type: 'string',
        enum: ['none', 'autohighlight', 'autocomplete'],
        default: 'none',
      },
      lazyMount: {
        type: 'boolean',
      },
      loopFocus: {
        type: 'boolean',
        default: 'true',
      },
      openOnChange: {
        type: 'boolean',
        default: 'true',
      },
      openOnClick: {
        type: 'boolean',
      },
      openOnKeyPress: {
        type: 'boolean',
        default: 'true',
      },
      positioning: {
        type: 'string'
      },
      selectionBehavior: {
        type: 'string',
        enum: ['replace', 'clear', 'preserve'],
        default: 'replace',
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
        default: 'true',
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
        default: 'false',
      },
      defaultFormat: {
        type: 'string',
        enum: ['hex', 'rgba', 'hsl', 'hsv'],
        default: 'rgba',
      },
      defaultValue: {
        type: 'string',
        default: '#000000',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      openAutoFocus: {
        type: 'boolean',
        default: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
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
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
        ],
        "default": "outline"
      },
      unstyled: {
        type: 'boolean',
      },
      defaultOpen: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
        default: 'vertical',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "bold",
        ],
        "default": "subtle"
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
        default: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        default: 'true',
      },
      defaultOpen: {
        type: 'boolean',
        default: 'false',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      modal: {
        type: 'boolean',
        default: 'true',
      },
      preventScroll: {
        type: 'boolean',
        default: 'true',
      },
      role: {
        type: 'string',
        enum: ['dialog', 'alertdialog'],
        default: 'dialog',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      trapFocus: {
        type: 'boolean',
        default: 'true',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      placement: {
        type: 'string',
        enum: ['center', 'top', 'bottom'],
        default: 'top',
      },
      scrollBehavior: {
        type: 'string',
        enum: ['inside', 'outside'],
        default: 'outside',
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
        default: 'md',
      },
      motionPreset: {
        type: 'string',
        enum: ['scale', 'slide-in-bottom', 'slide-in-top', 'slide-in-right', 'slide-in-left', 'none'],
        default: 'scale',
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
        default: 'gray',
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
        default: 'xs',
      },
      placement: {
        type: 'string',
        enum: ['start', 'end', 'top', 'bottom'],
        default: 'end',
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
        default: 'focus',
      },
      selectOnFocus: {
        type: 'boolean',
        default: 'true',
      },
      submitMode: {
        type: 'string',
        enum: ['enter', 'blur', 'none'],
        default: 'both',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
        default: 'vertical',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'true',
      },
      locale: {
        type: 'string',
        default: 'en',
      },
      maxFiles: {
        type: 'number',
        default: 1,
      },
      maxFileSize: {
        type: 'string',
        default: 'Infinity', // Infinity
      },
      minFileSize: {
        type: 'string',
        default: '0',
      },
      preventDocumentDrop: {
        type: 'boolean',
        default: 'true',
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
        default: 300,
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      openDelay: {
        type: 'number',
        default: 700,
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'md',
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
        "default": "start"
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
        default: 'gray',
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
        default: 'md',
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
        default: 'solid'
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
        default: 'gray',
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
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "default": "outline"
      },
    }
  },
  Menu: {
    type: 'object',
    properties: {
      closeOnSelect: {
        type: 'boolean',
        default: 'true',
      },
      composite: {
        type: 'boolean',
        default: 'true',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      loopFocus: {
        type: 'boolean',
        default: 'false',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      typeahead: {
        type: 'boolean',
        default: 'true',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "solid",
        ],
        "default": "subtle"
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
        ],
        default: 'md',
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
        default: 'true',
      },
      clampValueOnBlur: {
        type: 'boolean',
        default: 'true',
      },
      focusInputOnChange: {
        type: 'boolean',
        default: 'true',
      },
      inputMode: {
        type: 'string',
        default: 'decimal',
      },
      locale: {
        type: 'string',
        default: 'en-US',
      },
      max: {
        type: 'number',
      },
      min: {
        type: 'number',
      },
      pattern: {
        type: 'string',
        default: '-?[0-9]*(.[0-9]+)?',
      },
      spinOnPress: {
        type: 'boolean',
        default: 'true',
      },
      step: {
        type: 'number',
        default: 1,
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "default": "outline"
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
        default: 1,
      },
      defaultPageSize: {
        type: 'number',
        default: 10,
      },
      siblingCount: {
        type: 'number',
        default: 1,
      },
      type: {
        type: 'string',
        enum: ['button', 'link'],
        default: 'button',
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
        default: 'false',
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
        default: '○',
      },
      type: {
        "type": "string",
        "enum": [
          "numeric",
          "alphabetic",
          "alphanumeric",
        ],
        default: 'numeric',
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
        default: 'gray',
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
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        "default": "outline"
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
        default: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        default: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        default: 'true',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      modal: {
        type: 'boolean',
        default: 'false',
      },
      portalled: {
        type: 'boolean',
        default: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
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
        default: 'md',
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
        default: 'gray',
      },
      defaultValue: {
        type: 'number',
        default: 50,
      },
      formatOptions: {
        type: 'object',
      },
      locale: {
        type: 'string',
        default: 'en-US',
      },
      max: {
        type: 'number',
        default: 100,
      },
      min: {
        type: 'number',
        default: 0,
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
        ],
        default: 'outline',
      },
      shape: {
        "type": "string",
        "enum": [
          "square",
          "rounded",
          "full",
        ],
        default: 'rounded',
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
        default: 'md',
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
        default: 'gray',
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
        default: 'md',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "surface",
          "subtle",
          "outline",
          "solid",
        ],
        default: 'outline'
      },
      align: {
        type: 'string',
        enum: ['start', 'center', 'end'],
        default: 'start',
      },
      orientation: {
        type: 'string',
        enum: ['vertical', 'horizontal'],
        default: 'horizontal',
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "solid",
        ],
        "default": "solid"
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 5,
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "plain",
        ],
        "default": "outline"
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
        default: 'md',
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
        default: 'true',
      },
      composite: {
        type: 'boolean',
        default: 'true',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      loopFocus: {
        type: 'boolean',
        default: 'false',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },

      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
        ],
        "default": "outline"
      },

      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "dashed",
          "dotted",
        ],
        default: 'solid'
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      loading: {
        type: 'boolean',
        default: 'true',
      },
      variant: {
        "type": "string",
        "enum": [
          "pulse",
          "shine",
          "none",
        ],
        default: 'pulse'
      }

    }
  },
  Slider: {
    type: 'object',
    properties: {
      max: {
        type: 'number',
        default: 100,
      },
      min: {
        type: 'number',
        default: 0,
      },
      minStepsBetweenThumbs: {
        type: 'number',
        default: 0,
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      origin: {
        type: 'string',
        enum: ['center', 'end', 'start'],
        default: 'start',
      },
      step: {
        type: 'number',
        default: 1,
      },
      thumbAlignment: {
        type: 'string',
        enum: ['center', 'contain'],
        default: 'contain',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "solid",
        ],
        default: 'outline'
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
        default: 'gray',
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
        default: 'md',
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
        default: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
        ],
        default: 'solid'
      },

      size: {
        type: 'string',
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'on',
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
        default: 'gray',
      },

      variant: {
        "type": "string",
        "enum": [
          "solid",
          "raised",
        ],
        "default": "solid"
      },

      size: {
        type: 'string',
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'automatic',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      loopFocus: {
        type: 'boolean',
        default: 'true',
      },
      orientation: {
        type: 'string',
        enum: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'line'
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "line",
          "outline",
        ],
        default: 'line'
      },

      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 'gray',
      },
      size: {
        type: 'string',
        "enum": [
          "sm",
          "md",
          "lg",
          "xl",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "solid",
          "subtle",
          "outline",
          "surface",
        ],
        default: 'solid'
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "outline",
          "subtle",
          "flushed",
        ],
        default: 'outline'
      },
      size: {
        type: 'string',
        enum: ['xs', 'sm', 'md', 'lg', 'xl'],
        default: 'md',
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
        default: 'gray',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "solid",
          "outline",
          "plain"
        ],
        default: 'solid'
      },
      size: {
        "type": "string",
        "enum": [
          "sm",
          "md",
          "lg",
          "xl"
        ],
        default: 'md',
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
        default: 'gray',
      },
    }
  },
  ToggleTip: {
    type: 'object',
    properties: {
      autoFocus: {
        type: 'boolean',
        default: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        default: 'true',
      },
      closeOnInteractOutside: {
        type: 'boolean',
        default: 'true',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      modal: {
        type: 'boolean',
        default: 'false',
      },
      portalled: {
        type: 'boolean',
        default: 'true',
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
          "lg",
        ],
        default: 'md',
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
        default: 500,
      },
      closeOnClick: {
        type: 'boolean',
        default: 'true',
      },
      closeOnEscape: {
        type: 'boolean',
        default: 'true',
      },
      closeOnPointerDown: {
        type: 'boolean',
        default: 'true',
      },
      closeOnScroll: {
        type: 'boolean',
        default: 'true',
      },
      interactive: {
        type: 'boolean',
        default: 'false',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      openDelay: {
        type: 'number',
        default: 1000,
      },
      skipAnimationOnMount: {
        type: 'boolean',
        default: 'false',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'true',
      },
      lazyMount: {
        type: 'boolean',
        default: 'false',
      },
      selectionMode: {
        type: 'string',
        enum: ['single', 'multiple'],
        default: 'single',
      },
      typeahead: {
        type: 'boolean',
        default: 'true',
      },
      unmountOnExit: {
        type: 'boolean',
        default: 'false',
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
        default: 'gray',
      },
      size: {
        "type": "string",
        "enum": [
          "xs",
          "sm",
          "md",
        ],
        default: 'md',
      },
      variant: {
        "type": "string",
        "enum": [
          "subtle",
          "solid",
        ],
        default: 'subtle'
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
