export const apiRefFromJson = {
  aspectRatio: {
    parts: {
      AspectRatio: {
        props: {
          ratio: {
            type: 'ConditionalValue<number>',
            isRequired: false,
            description:
              'The aspect ratio of the Box. Common values are:\n\n`21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`',
          },
        },
      },
    },
  },
  bleed: {
    parts: {
      Bleed: {
        props: {
          inline: {
            type: 'SystemStyleObject["marginInline"]',
            isRequired: false,
            description: 'The negative margin on the x-axis',
          },
          block: {
            type: 'SystemStyleObject["marginBlock"]',
            isRequired: false,
            description: 'The negative margin on the y-axis',
          },
          inlineStart: {
            type: 'SystemStyleObject["marginInlineStart"]',
            isRequired: false,
            description: 'The negative margin on the inline-start axis',
          },
          inlineEnd: {
            type: 'SystemStyleObject["marginInlineEnd"]',
            isRequired: false,
            description: 'The negative margin on the inline-end axis',
          },
          blockStart: {
            type: 'SystemStyleObject["marginBlockStart"]',
            isRequired: false,
            description: 'The negative margin on the block-start axis',
          },
          blockEnd: {
            type: 'SystemStyleObject["marginBlockEnd"]',
            isRequired: false,
            description: 'The negative margin on the block-end axis',
          },
        },
      },
    },
  },
  box: {
    parts: {
      Square: {
        props: {
          size: {
            type: 'BoxProps["boxSize"]',
            isRequired: false,
            description: 'The size (width and height) of the square',
          },
        },
      },
      Circle: {
        props: {
          size: {
            type: 'BoxProps["boxSize"]',
            isRequired: false,
            description: 'The size (width and height) of the square',
          },
        },
      },
    },
  },
};
const notListed = ['aspect-ratio',  'center', 'bleed', 'box', 'client-only',
'flex', 'float', 'focus-lock', 'for', 'grid', 'highlight'];

export const schemaRegister: any = {
  accordion: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'enclosed',
            value: 'enclosed',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {
      "ItemContent": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemIndicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Item": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true,
            "description": "The value of the accordion item."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the accordion item is disabled."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "collapsible": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether an accordion item can be closed after it has been expanded."
          },
          "defaultValue": {
            "type": "string[]",
            "isRequired": false,
            "description": "The initial value of the accordion when it is first rendered.\nUse when you do not need to control the state of the accordion."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the accordion items are disabled"
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  item(value: string): string\n  itemContent(value: string): string\n  itemTrigger(value: string): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the accordion. Useful for composition."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "multiple": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether multple accordion items can be expanded at the same time."
          },
          "onFocusChange": {
            "type": "(details: FocusChangeDetails) => void",
            "isRequired": false,
            "description": "The callback fired when the focused accordion item changes."
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "The callback fired when the state of expanded/collapsed accordion items changes."
          },
          "orientation": {
            "type": "'horizontal' | 'vertical'",
            "isRequired": false,
            "defaultValue": "\"vertical\"",
            "description": "The orientation of the accordion items."
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          },
          "value": {
            "type": "string[]",
            "isRequired": false,
            "description": "The `value` of the accordion items that are currently being expanded."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseAccordionReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      }
    },
  },
  actionBar: {
    fields: {},
    defaultProps: {},
    parts: {},
  },
  alert: {
    fields: {
      status: {
        type: 'select',
        options: [
          {
            label: 'info',
            value: 'info',
          },
          {
            label: 'warning',
            value: 'warning',
          },
          {
            label: 'success',
            value: 'success',
          },
          {
            label: 'error',
            value: 'error',
          },
          {
            label: 'neutral',
            value: 'neutral',
          },
        ],
      },
      inline: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
          {
            label: 'false',
            value: 'false',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'surface',
            value: 'surface',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      status: 'info',
      variant: 'subtle',
      size: 'md',
      inline: false,
    },
    parts: {},
  },
  avatar: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'full',
            value: 'full',
          },
          {
            label: '2xs',
            value: '2xs',
          },
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: '2xl',
            value: '2xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'outline',
            value: 'outline',
          },
        ],
      },
      shape: {
        type: 'select',
        options: [
          {
            label: 'square',
            value: 'square',
          },
          {
            label: 'rounded',
            value: 'rounded',
          },
          {
            label: 'full',
            value: 'full',
          },
        ],
      },
      borderless: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      shape: 'full',
      variant: 'solid',
    },
    parts: {
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      },
      "Fallback": {
        "props": {
          "name": {
            "type": "string",
            "isRequired": false
          },
          "icon": {
            "type": "React.ReactElement",
            "isRequired": false
          }
        }
      }
    },
  },
  badge: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'surface',
            value: 'surface',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'subtle',
      size: 'sm',
    },
    parts: {},
  },
  blockquote: {
    fields: {
      justify: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'center',
            value: 'center',
          },
          {
            label: 'end',
            value: 'end',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'subtle',
      justify: 'start',
    },
    parts: {},
  },
  breadcrumb: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'underline',
            value: 'underline',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'plain',
      size: 'md',
    },
    parts: {
      "Root": {
        "props": {
          "separator": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "separatorGap": {
            "type": "SystemStyleObject[\"gap\"]",
            "isRequired": false
          },
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  button: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'glass',
            value: 'glass',
          },
          {
            label: 'surface',
            value: 'surface',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'ghost',
            value: 'ghost',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'surface',
      colorPalette: 'gray',
    },
    parts: {
      "Button": {
        "props": {
          "loading": {
            "type": "boolean",
            "isRequired": false
          },
          "loadingText": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      }
    },
  },
  card: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'elevated',
            value: 'elevated',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'outline',
      size: 'md',
    },
    parts: {},
  },
  checkbox: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'solid',
      size: 'md',
    },
    parts: {
      "Indicator": {
        "props": {
          "checked": {
            "type": "React.ReactElement",
            "isRequired": false
          },
          "indeterminate": {
            "type": "React.ReactElement",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  checkboxCard: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'surface',
            value: 'surface',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      justify: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
          {
            label: 'center',
            value: 'center',
          },
        ],
      },
      align: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
          {
            label: 'center',
            value: 'center',
          },
        ],
      },
      orientation: {
        type: 'select',
        options: [
          {
            label: 'vertical',
            value: 'vertical',
          },
          {
            label: 'horizontal',
            value: 'horizontal',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
      align: 'start',
      orientation: 'horizontal',
    },
    parts: {
      "CheckboxCardControl": {
        "props": {
          "showIndicator": {
            "type": "boolean",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  checkmark: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'plain',
            value: 'plain',
          },
          {
            label: 'inverted',
            value: 'inverted',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'solid',
      size: 'md',
    },
    parts: {
      "Checkmark": {
        "props": {
          "checked": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkmark is checked"
          },
          "indeterminate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkmark is indeterminate"
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkmark is disabled"
          }
        }
      }
    },
  },
  code: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'surface',
            value: 'surface',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'subtle',
      size: 'sm',
    },
    parts: {},
  },
  collapsible: {
    fields: {},
    defaultProps: {},
    parts: {
      "Content": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "defaultOpen": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial open state of the collapsible when it is first rendered.\nUse when you do not need to control its open state."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the collapsible is disabled"
          },
          "ids": {
            "type": "Partial<{ root: string; content: string; trigger: string }>",
            "isRequired": false,
            "description": "The ids of the elements in the collapsible. Useful for composition."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state."
          },
          "onOpenChange": {
            "type": "(details: OpenChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when the popup is opened"
          },
          "open": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the collapsible is open"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseCollapsibleReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Trigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      }
    },
  },
  container: {
    fields: {
      centerContent: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      fluid: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
    },
    defaultProps: {},
    parts: {},
  },
  dataList: {
    fields: {
      orientation: {
        type: 'select',
        options: [
          {
            label: 'horizontal',
            value: 'horizontal',
          },
          {
            label: 'vertical',
            value: 'vertical',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      orientation: 'horizontal',
    },
    parts: {},
  },
  dialog: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'dialog',
            value: 'dialog',
          },
          {
            label: 'confirm',
            value: 'confirm',
          },
        ],
      },
      placement: {
        type: 'select',
        options: [
          {
            label: 'center',
            value: 'center',
          },
          {
            label: 'top',
            value: 'top',
          },
          {
            label: 'bottom',
            value: 'bottom',
          },
        ],
      },
      scrollBehavior: {
        type: 'select',
        options: [
          {
            label: 'inside',
            value: 'inside',
          },
          {
            label: 'outside',
            value: 'outside',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: 'cover',
            value: 'cover',
          },
          {
            label: 'full',
            value: 'full',
          },
        ],
      },
      motionPreset: {
        type: 'select',
        options: [
          {
            label: 'scale',
            value: 'scale',
          },
          {
            label: 'slide-in-bottom',
            value: 'slide-in-bottom',
          },
          {
            label: 'slide-in-top',
            value: 'slide-in-top',
          },
          {
            label: 'slide-in-left',
            value: 'slide-in-left',
          },
          {
            label: 'slide-in-right',
            value: 'slide-in-right',
          },
          {
            label: 'none',
            value: 'none',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      scrollBehavior: 'outside',
      placement: 'top',
      motionPreset: 'scale',
      variant: 'dialog',
    },
    parts: {
      "Content": {
        "props": {
          "portalled": {
            "type": "boolean",
            "isRequired": false
          },
          "containerRef": {
            "type": "React.RefObject<HTMLElement>",
            "isRequired": false
          },
          "backdrop": {
            "type": "boolean",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  drawer: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: 'full',
            value: 'full',
          },
        ],
      },
      placement: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
          {
            label: 'top',
            value: 'top',
          },
          {
            label: 'bottom',
            value: 'bottom',
          },
        ],
      },
      attached: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
    },
    defaultProps: {
      size: 'xs',
      placement: 'end',
    },
    parts: {
      "Content": {
        "props": {
          "portalled": {
            "type": "boolean",
            "isRequired": false
          },
          "containerRef": {
            "type": "React.RefObject<HTMLElement>",
            "isRequired": false
          },
          "offset": {
            "type": "ChakraDrawer.ContentProps[\"padding\"]",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  editable: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {
      "Area": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "CancelTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Control": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "EditTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Input": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Preview": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      },
      "Root": {
        "props": {
          "activationMode": {
            "type": "ActivationMode",
            "isRequired": false,
            "defaultValue": "\"focus\"",
            "description": "The activation mode for the preview element.\n\n- \"focus\" - Enter edit mode when the preview is focused\n- \"dblclick\" - Enter edit mode when the preview is double-clicked\n- \"click\" - Enter edit mode when the preview is clicked"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "autoResize": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the editable should auto-resize to fit the content."
          },
          "defaultEdit": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial edit state of the editable when it is first rendered.\nUse when you do not need to control its edit state."
          },
          "defaultValue": {
            "type": "string",
            "isRequired": false,
            "description": "The initial value of the editable when it is first rendered.\nUse when you do not need to control the state of the editable."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the editable is disabled"
          },
          "edit": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the editable is in edit mode."
          },
          "finalFocusEl": {
            "type": "() => HTMLElement | null",
            "isRequired": false,
            "description": "The element that should receive focus when the editable is closed.\nBy default, it will focus on the trigger element."
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying input."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  area: string\n  label: string\n  preview: string\n  input: string\n  control: string\n  submitTrigger: string\n  cancelTrigger: string\n  editTrigger: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the editable. Useful for composition."
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the input's value is invalid."
          },
          "maxLength": {
            "type": "number",
            "isRequired": false,
            "description": "The maximum number of characters allowed in the editable"
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name attribute of the editable component. Used for form submission."
          },
          "onEditChange": {
            "type": "(details: EditChangeDetails) => void",
            "isRequired": false,
            "description": "The callback that is called when the edit mode is changed"
          },
          "onFocusOutside": {
            "type": "(event: FocusOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the focus is moved outside the component"
          },
          "onInteractOutside": {
            "type": "(event: InteractOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when an interaction happens outside the component"
          },
          "onPointerDownOutside": {
            "type": "(event: PointerDownOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the pointer is pressed down outside the component"
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "The callback that is called when the editable's value is changed"
          },
          "onValueCommit": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "The callback that is called when the editable's value is submitted."
          },
          "onValueRevert": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "The callback that is called when the esc key is pressed or the cancel button is clicked"
          },
          "placeholder": {
            "type": "string | { edit: string; preview: string }",
            "isRequired": false,
            "description": "The placeholder value to show when the `value` is empty"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the editable is readonly"
          },
          "required": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the editable is required"
          },
          "selectOnFocus": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to select the text in the input when it is focused."
          },
          "submitMode": {
            "type": "SubmitMode",
            "isRequired": false,
            "defaultValue": "\"both\"",
            "description": "The action that triggers submit in the edit mode:\n\n- \"enter\" - Trigger submit when the enter key is pressed\n- \"blur\" - Trigger submit when the editable is blurred\n- \"none\" - No action will trigger submit. You need to use the submit button\n- \"both\" - Pressing `Enter` and blurring the input will trigger submit"
          },
          "translations": {
            "type": "IntlTranslations",
            "isRequired": false,
            "description": "Specifies the localized strings that identifies the accessibility elements and their states"
          },
          "value": {
            "type": "string",
            "isRequired": false,
            "description": "The value of the editable in both edit and preview mode"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseEditableReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "SubmitTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      }
    },
  },
  emptyState: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      align: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'center',
            value: 'center',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      align: 'center',
    },
    parts: {},
  },
  field: {
    fields: {
      orientation: {
        type: 'select',
        options: [
          {
            label: 'vertical',
            value: 'vertical',
          },
          {
            label: 'horizontal',
            value: 'horizontal',
          },
        ],
      },
    },
    defaultProps: {
      orientation: 'vertical',
    },
    parts: {
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      },
      "RequiredIndicator": {
        "props": {
          "fallback": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      }
    },
  },
  fileUpload: {
    fields: {},
    defaultProps: {},
    parts: {
      "FileUploadItem": {
        "props": {
          "file": {
            "type": "File",
            "isRequired": true
          },
          "showSize": {
            "type": "boolean",
            "isRequired": false
          },
          "showDelete": {
            "type": "boolean",
            "isRequired": false
          }
        }
      },
      "FileUploadRoot": {
        "props": {
          "inputProps": {
            "type": "React.InputHTMLAttributes<HTMLInputElement>",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  heading: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: '2xl',
            value: '2xl',
          },
          {
            label: '3xl',
            value: '3xl',
          },
          {
            label: '4xl',
            value: '4xl',
          },
          {
            label: '5xl',
            value: '5xl',
          },
          {
            label: '6xl',
            value: '6xl',
          },
          {
            label: '7xl',
            value: '7xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'xl',
    },
    parts: {},
  },
  hoverCard: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {
      "Arrow": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ArrowTip": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Content": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Positioner": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "closeDelay": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "300",
            "description": "The duration from when the mouse leaves the trigger or content until the hover card closes."
          },
          "defaultOpen": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial open state of the hover card when it is first rendered.\nUse when you do not need to control its open state."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  trigger: string\n  content: string\n  positioner: string\n  arrow: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the popover. Useful for composition."
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "onOpenChange": {
            "type": "(details: OpenChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when the hover card opens or closes."
          },
          "open": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the hover card is open"
          },
          "openDelay": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "700",
            "description": "The duration from when the mouse enters the trigger until the hover card opens."
          },
          "positioning": {
            "type": "PositioningOptions",
            "isRequired": false,
            "description": "The user provided options used to position the popover content"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseHoverCardReturn",
            "isRequired": true
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "Trigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      }
    },
  },
  icon: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'inherit',
            value: 'inherit',
          },
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: '2xl',
            value: '2xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'inherit',
    },
    parts: {},
  },
  input: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'flushed',
            value: 'flushed',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {},
  },
  inputAddon: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'flushed',
            value: 'flushed',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {},
  },
  kbd: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'raised',
            value: 'raised',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'subtle',
    },
    parts: {},
  },
  link: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'underline',
            value: 'underline',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'plain',
    },
    parts: {},
  },
  list: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'marker',
            value: 'marker',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      align: {
        type: 'select',
        options: [
          {
            label: 'center',
            value: 'center',
          },
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'marker',
    },
    parts: {},
  },
  mark: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'text',
            value: 'text',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
    },
    defaultProps: {},
    parts: {},
  },
  menu: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'subtle',
    },
    parts: {
      "Arrow": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ArrowTip": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "CheckboxItem": {
        "props": {
          "checked": {
            "type": "boolean",
            "isRequired": true,
            "description": "Whether the option is checked"
          },
          "value": {
            "type": "string",
            "isRequired": true,
            "description": "The value of the option"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "closeOnSelect": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu should be closed when the option is selected."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu item is disabled"
          },
          "onCheckedChange": {
            "type": "(checked: boolean) => void",
            "isRequired": false,
            "description": "Function called when the option state is changed"
          },
          "valueText": {
            "type": "string",
            "isRequired": false,
            "description": "The textual value of the option. Used in typeahead navigation of the menu.\nIf not provided, the text content of the menu item will be used."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Content": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ContextTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Indicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemGroupLabel": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemGroup": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemIndicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Item": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true,
            "description": "The unique value of the menu item option."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "closeOnSelect": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu should be closed when the option is selected."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu item is disabled"
          },
          "valueText": {
            "type": "string",
            "isRequired": false,
            "description": "The textual value of the option. Used in typeahead navigation of the menu.\nIf not provided, the text content of the menu item will be used."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Positioner": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RadioItemGroup": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "onValueChange": {
            "type": "(e: ValueChangeDetails) => void",
            "isRequired": false
          },
          "value": {
            "type": "string",
            "isRequired": false
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RadioItem": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true,
            "description": "The value of the option"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "closeOnSelect": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu should be closed when the option is selected."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu item is disabled"
          },
          "valueText": {
            "type": "string",
            "isRequired": false,
            "description": "The textual value of the option. Used in typeahead navigation of the menu.\nIf not provided, the text content of the menu item will be used."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "anchorPoint": {
            "type": "Point",
            "isRequired": false,
            "description": "The positioning point for the menu. Can be set by the context menu trigger or the button trigger."
          },
          "aria-label": {
            "type": "string",
            "isRequired": false,
            "description": "The accessibility label for the menu"
          },
          "closeOnSelect": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to close the menu when an option is selected"
          },
          "composite": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the menu is a composed with other composite widgets like a combobox or tabs"
          },
          "defaultOpen": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial open state of the menu when it is first rendered.\nUse when you do not need to control its open state."
          },
          "highlightedValue": {
            "type": "string",
            "isRequired": false,
            "description": "The value of the highlighted menu item."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  trigger: string\n  contextTrigger: string\n  content: string\n  groupLabel(id: string): string\n  group(id: string): string\n  positioner: string\n  arrow: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the menu. Useful for composition."
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "loopFocus": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to loop the keyboard navigation."
          },
          "onEscapeKeyDown": {
            "type": "(event: KeyboardEvent) => void",
            "isRequired": false,
            "description": "Function called when the escape key is pressed"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "onFocusOutside": {
            "type": "(event: FocusOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the focus is moved outside the component"
          },
          "onHighlightChange": {
            "type": "(details: HighlightChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when the highlighted menu item changes."
          },
          "onInteractOutside": {
            "type": "(event: InteractOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when an interaction happens outside the component"
          },
          "onOpenChange": {
            "type": "(details: OpenChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when the menu opens or closes"
          },
          "onPointerDownOutside": {
            "type": "(event: PointerDownOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the pointer is pressed down outside the component"
          },
          "onSelect": {
            "type": "(details: SelectionDetails) => void",
            "isRequired": false,
            "description": "Function called when a menu item is selected."
          },
          "open": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the menu is open"
          },
          "positioning": {
            "type": "PositioningOptions",
            "isRequired": false,
            "description": "The options used to dynamically position the menu"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "typeahead": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the pressing printable characters should trigger typeahead navigation"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseMenuReturn",
            "isRequired": true
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "Separator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLHRElement",
        "tag": "hr"
      },
      "TriggerItem": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Trigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      }
    },
  },
  nativeSelect: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {
      "NativeSelectRoot": {
        "props": {
          "icon": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false
          }
        }
      },
      "NativeSelectField": {
        "props": {
          "placeholder": {
            "type": "string",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  numberInput: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'flushed',
            value: 'flushed',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {
      "Control": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "DecrementTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "IncrementTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Input": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Root": {
        "props": {
          "allowMouseWheel": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to allow mouse wheel to change the value"
          },
          "allowOverflow": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to allow the value overflow the min/max range"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "clampValueOnBlur": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to clamp the value when the input loses focus (blur)"
          },
          "defaultValue": {
            "type": "string",
            "isRequired": false,
            "description": "The initial value of the number input when it is first rendered.\nUse when you do not need to control the state of the number input."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the number input is disabled."
          },
          "focusInputOnChange": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to focus input when the value changes"
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the input element."
          },
          "formatOptions": {
            "type": "NumberFormatOptions",
            "isRequired": false,
            "description": "The options to pass to the `Intl.NumberFormat` constructor"
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  label: string\n  input: string\n  incrementTrigger: string\n  decrementTrigger: string\n  scrubber: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the number input. Useful for composition."
          },
          "inputMode": {
            "type": "InputMode",
            "isRequired": false,
            "defaultValue": "\"decimal\"",
            "description": "Hints at the type of data that might be entered by the user. It also determines\nthe type of keyboard shown to the user on mobile devices"
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the number input value is invalid."
          },
          "locale": {
            "type": "string",
            "isRequired": false,
            "defaultValue": "\"en-US\"",
            "description": "The current locale. Based on the BCP 47 definition."
          },
          "max": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "Number.MAX_SAFE_INTEGER",
            "description": "The maximum value of the number input"
          },
          "min": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "Number.MIN_SAFE_INTEGER",
            "description": "The minimum value of the number input"
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name attribute of the number input. Useful for form submission."
          },
          "onFocusChange": {
            "type": "(details: FocusChangeDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the number input is focused"
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the value changes"
          },
          "onValueInvalid": {
            "type": "(details: ValueInvalidDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the value overflows or underflows the min/max range"
          },
          "pattern": {
            "type": "string",
            "isRequired": false,
            "defaultValue": "\"[0-9]*(.[0-9]+)?\"",
            "description": "The pattern used to check the <input> element's value against"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the number input is readonly"
          },
          "required": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the number input is required"
          },
          "spinOnPress": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to spin the value when the increment/decrement button is pressed"
          },
          "step": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "1",
            "description": "The amount to increment or decrement the value by"
          },
          "translations": {
            "type": "IntlTranslations",
            "isRequired": false,
            "description": "Specifies the localized strings that identifies the accessibility elements and their states"
          },
          "value": {
            "type": "string",
            "isRequired": false,
            "description": "The value of the input"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseNumberInputReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Scrubber": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ValueText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      }
    },
  },
  pinInput: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'flushed',
            value: 'flushed',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {
      "Control": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "HiddenInput": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Input": {
        "props": {
          "index": {
            "type": "number",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "autoFocus": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to auto-focus the first input."
          },
          "blurOnComplete": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to blur the input when the value is complete"
          },
          "defaultValue": {
            "type": "string[]",
            "isRequired": false,
            "description": "The initial value of the pin input when it is first rendered.\nUse when you do not need to control the state of the pin input"
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the inputs are disabled"
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying input element."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  hiddenInput: string\n  label: string\n  control: string\n  input(id: string): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the pin input. Useful for composition."
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the pin input is in the invalid state"
          },
          "mask": {
            "type": "boolean",
            "isRequired": false,
            "description": "If `true`, the input's value will be masked just like `type=password`"
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name of the input element. Useful for form submission."
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function called on input change"
          },
          "onValueComplete": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when all inputs have valid values"
          },
          "onValueInvalid": {
            "type": "(details: ValueInvalidDetails) => void",
            "isRequired": false,
            "description": "Function called when an invalid value is entered"
          },
          "otp": {
            "type": "boolean",
            "isRequired": false,
            "description": "If `true`, the pin input component signals to its fields that they should\nuse `autocomplete=\"one-time-code\"`."
          },
          "pattern": {
            "type": "string",
            "isRequired": false,
            "description": "The regular expression that the user-entered input value is checked against."
          },
          "placeholder": {
            "type": "string",
            "isRequired": false,
            "defaultValue": "\"○\"",
            "description": "The placeholder text for the input"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the pin input is in the valid state"
          },
          "required": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the pin input is required"
          },
          "selectOnFocus": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to select input value when input is focused"
          },
          "translations": {
            "type": "IntlTranslations",
            "isRequired": false,
            "description": "Specifies the localized strings that identifies the accessibility elements and their states"
          },
          "type": {
            "type": "'numeric' | 'alphabetic' | 'alphanumeric'",
            "isRequired": false,
            "defaultValue": "\"numeric\"",
            "description": "The type of value the pin-input should allow"
          },
          "value": {
            "type": "string[]",
            "isRequired": false,
            "description": "The value of the the pin input."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UsePinInputReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      }
    },
  },
  popover: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {
      "Anchor": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Arrow": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ArrowTip": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "CloseTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Content": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Description": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Indicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Positioner": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "autoFocus": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to automatically set focus on the first focusable\ncontent within the popover when opened."
          },
          "closeOnEscape": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to close the popover when the escape key is pressed."
          },
          "closeOnInteractOutside": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to close the popover when the user clicks outside of the popover."
          },
          "defaultOpen": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial open state of the popover when it is first rendered.\nUse when you do not need to control its open state."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  anchor: string\n  trigger: string\n  content: string\n  title: string\n  description: string\n  closeTrigger: string\n  positioner: string\n  arrow: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the popover. Useful for composition."
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "initialFocusEl": {
            "type": "() => HTMLElement | null",
            "isRequired": false,
            "description": "The element to focus on when the popover is opened."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "modal": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether the popover should be modal. When set to `true`:\n- interaction with outside elements will be disabled\n- only popover content will be visible to screen readers\n- scrolling is blocked\n- focus is trapped within the popover"
          },
          "onEscapeKeyDown": {
            "type": "(event: KeyboardEvent) => void",
            "isRequired": false,
            "description": "Function called when the escape key is pressed"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "onFocusOutside": {
            "type": "(event: FocusOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the focus is moved outside the component"
          },
          "onInteractOutside": {
            "type": "(event: InteractOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when an interaction happens outside the component"
          },
          "onOpenChange": {
            "type": "(details: OpenChangeDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the popover opens or closes"
          },
          "onPointerDownOutside": {
            "type": "(event: PointerDownOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the pointer is pressed down outside the component"
          },
          "open": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the popover is open"
          },
          "persistentElements": {
            "type": "(() => Element | null)[]",
            "isRequired": false,
            "description": "Returns the persistent elements that:\n- should not have pointer-events disabled\n- should not trigger the dismiss event"
          },
          "portalled": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position\nof the popover content."
          },
          "positioning": {
            "type": "PositioningOptions",
            "isRequired": false,
            "description": "The user provided options used to position the popover content"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UsePopoverReturn",
            "isRequired": true
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "Title": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Trigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      }
    },
  },
  progress: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
        ],
      },
      shape: {
        type: 'select',
        options: [
          {
            label: 'square',
            value: 'square',
          },
          {
            label: 'rounded',
            value: 'rounded',
          },
          {
            label: 'full',
            value: 'full',
          },
        ],
      },
      striped: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      animated: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'outline',
      size: 'md',
      shape: 'rounded',
    },
    parts: {
      "Circle": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "SVGSVGElement",
        "tag": "svg"
      },
      "CircleRange": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "SVGCircleElement",
        "tag": "circle"
      },
      "CircleTrack": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "SVGCircleElement",
        "tag": "circle"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Range": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "ids": {
            "type": "Partial<{ root: string; track: string; label: string; circle: string }>",
            "isRequired": false,
            "description": "The ids of the elements in the progress bar. Useful for composition."
          },
          "max": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "100",
            "description": "The maximum allowed value of the progress bar."
          },
          "min": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "0",
            "description": "The minimum allowed value of the progress bar."
          },
          "orientation": {
            "type": "Orientation",
            "isRequired": false,
            "defaultValue": "\"horizontal\"",
            "description": "The orientation of the element."
          },
          "translations": {
            "type": "IntlTranslations",
            "isRequired": false,
            "description": "The localized messages to use."
          },
          "value": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "50",
            "description": "The current value of the progress bar."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseProgressReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Track": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ValueText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      },
      "View": {
        "props": {
          "state": {
            "type": "ProgressState",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      }
    },
  },
  progressCircle: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {},
  },
  radioCard: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'surface',
            value: 'surface',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      justify: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
          {
            label: 'center',
            value: 'center',
          },
        ],
      },
      align: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
          {
            label: 'center',
            value: 'center',
          },
        ],
      },
      orientation: {
        type: 'select',
        options: [
          {
            label: 'vertical',
            value: 'vertical',
          },
          {
            label: 'horizontal',
            value: 'horizontal',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
      align: 'start',
      orientation: 'horizontal',
    },
    parts: {
      "RadioCardItem": {
        "props": {
          "addon": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "showIndicator": {
            "type": "boolean",
            "isRequired": false
          }
        }
      },
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  radioGroup: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
    parts: {
      "Indicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemControl": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemHiddenInput": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Item": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "ItemText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "defaultValue": {
            "type": "string",
            "isRequired": false,
            "description": "The initial value of the radio group when it is first rendered.\nUse when you do not need to control the state of the radio group."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "If `true`, the radio group will be disabled"
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying input."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  label: string\n  indicator: string\n  item(value: string): string\n  itemLabel(value: string): string\n  itemControl(value: string): string\n  itemHiddenInput(value: string): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the radio. Useful for composition."
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name of the input fields in the radio\n(Useful for form submission)."
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function called once a radio is checked"
          },
          "orientation": {
            "type": "'horizontal' | 'vertical'",
            "isRequired": false,
            "description": "Orientation of the radio group"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkbox is read-only"
          },
          "value": {
            "type": "string",
            "isRequired": false,
            "description": "The value of the checked radio"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseRadioGroupReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      }
    },
  },
  radiomark: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'inverted',
            value: 'inverted',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'solid',
      size: 'md',
    },
    parts: {
      "Radiomark": {
        "props": {
          "checked": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkmark is checked"
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkmark is disabled"
          }
        }
      }
    },
  },
  ratingGroup: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {
      "Control": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "HiddenInput": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Item": {
        "props": {
          "index": {
            "type": "number",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Root": {
        "props": {
          "allowHalf": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to allow half stars."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "autoFocus": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to autofocus the rating."
          },
          "count": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "5",
            "description": "The total number of ratings."
          },
          "defaultValue": {
            "type": "number",
            "isRequired": false,
            "description": "The initial value of the rating group when it is first rendered.\nUse when you do not need to control the state of the rating group."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the rating is disabled."
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying input element."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  label: string\n  hiddenInput: string\n  control: string\n  item(id: string): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the rating. Useful for composition."
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name attribute of the rating element (used in forms)."
          },
          "onHoverChange": {
            "type": "(details: HoverChangeDetails) => void",
            "isRequired": false,
            "description": "Function to be called when the rating value is hovered."
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function to be called when the rating value changes."
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the rating is readonly."
          },
          "required": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the rating is required."
          },
          "translations": {
            "type": "IntlTranslations",
            "isRequired": false,
            "description": "Specifies the localized strings that identifies the accessibility elements and their states"
          },
          "value": {
            "type": "number",
            "isRequired": false,
            "description": "The current rating value."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseRatingGroupReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      }
    },
  },
  segmentGroup: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {
      "Indicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemControl": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemHiddenInput": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Item": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "ItemText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "defaultValue": {
            "type": "string",
            "isRequired": false,
            "description": "The initial value of the segment group when it is first rendered.\nUse when you do not need to control the state of the segment group."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "If `true`, the radio group will be disabled"
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying input."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  label: string\n  indicator: string\n  item(value: string): string\n  itemLabel(value: string): string\n  itemControl(value: string): string\n  itemHiddenInput(value: string): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the radio. Useful for composition."
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name of the input fields in the radio\n(Useful for form submission)."
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function called once a radio is checked"
          },
          "orientation": {
            "type": "'horizontal' | 'vertical'",
            "isRequired": false,
            "description": "Orientation of the radio group"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the checkbox is read-only"
          },
          "value": {
            "type": "string",
            "isRequired": false,
            "description": "The value of the checked radio"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseSegmentGroupReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      }
    },
  },
  select: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {
      "ClearTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Content": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Control": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "HiddenSelect": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSelectElement",
        "tag": "select"
      },
      "Indicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemGroupLabel": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemGroup": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemIndicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Item": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "item": {
            "type": "any",
            "isRequired": false,
            "description": "The item to render"
          },
          "persistFocus": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether hovering outside should clear the highlighted state"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ItemText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "span"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "List": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Positioner": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "items": {
            "type": "T[] | readonly T[]",
            "isRequired": true,
            "description": "The options of the select"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "closeOnSelect": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the select should close after an item is selected"
          },
          "composite": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the select is a composed with other composite widgets like tabs or combobox"
          },
          "defaultOpen": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial open state of the select when it is first rendered.\nUse when you do not need to control its open state."
          },
          "defaultValue": {
            "type": "string[]",
            "isRequired": false,
            "description": "The initial value of the select when it is first rendered.\nUse when you do not need to control the state of the select."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the select is disabled"
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying select."
          },
          "highlightedValue": {
            "type": "string",
            "isRequired": false,
            "description": "The key of the highlighted item"
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  content: string\n  control: string\n  trigger: string\n  clearTrigger: string\n  label: string\n  hiddenSelect: string\n  positioner: string\n  item(id: string | number): string\n  itemGroup(id: string | number): string\n  itemGroupLabel(id: string | number): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the select. Useful for composition."
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the select is invalid"
          },
          "isItemDisabled": {
            "type": "(item: T) => boolean",
            "isRequired": false,
            "description": "Whether the item is disabled"
          },
          "itemToString": {
            "type": "(item: T) => string",
            "isRequired": false,
            "description": "The label of the item"
          },
          "itemToValue": {
            "type": "(item: T) => string",
            "isRequired": false,
            "description": "The value of the item"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "loopFocus": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to loop the keyboard navigation through the options"
          },
          "multiple": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to allow multiple selection"
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The `name` attribute of the underlying select."
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "onFocusOutside": {
            "type": "(event: FocusOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the focus is moved outside the component"
          },
          "onHighlightChange": {
            "type": "(details: HighlightChangeDetails<T>) => void",
            "isRequired": false,
            "description": "The callback fired when the highlighted item changes."
          },
          "onInteractOutside": {
            "type": "(event: InteractOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when an interaction happens outside the component"
          },
          "onOpenChange": {
            "type": "(details: OpenChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when the popup is opened"
          },
          "onPointerDownOutside": {
            "type": "(event: PointerDownOutsideEvent) => void",
            "isRequired": false,
            "description": "Function called when the pointer is pressed down outside the component"
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails<T>) => void",
            "isRequired": false,
            "description": "The callback fired when the selected item changes."
          },
          "open": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the select menu is open"
          },
          "positioning": {
            "type": "PositioningOptions",
            "isRequired": false,
            "description": "The positioning options of the menu."
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the select is read-only"
          },
          "required": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the select is required"
          },
          "scrollToIndexFn": {
            "type": "(details: ScrollToIndexDetails) => void",
            "isRequired": false,
            "description": "Function to scroll to a specific index"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          },
          "value": {
            "type": "string[]",
            "isRequired": false,
            "description": "The keys of the selected items"
          }
        },
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseSelectReturn<T>",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        },
        "tag": "div"
      },
      "Trigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "ValueText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "placeholder": {
            "type": "string",
            "isRequired": false,
            "description": "Text to display when no value is selected."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      }
    },
  },
  separator: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'dashed',
            value: 'dashed',
          },
          {
            label: 'dotted',
            value: 'dotted',
          },
        ],
      },
      orientation: {
        type: 'select',
        options: [
          {
            label: 'vertical',
            value: 'vertical',
          },
          {
            label: 'horizontal',
            value: 'horizontal',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'sm',
      variant: 'solid',
      orientation: 'horizontal',
    },
    parts: {},
  },
  skeleton: {
    fields: {
      loading: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
          {
            label: 'false',
            value: 'false',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'pulse',
            value: 'pulse',
          },
          {
            label: 'shine',
            value: 'shine',
          },
          {
            label: 'none',
            value: 'none',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'pulse',
      loading: true,
    },
    parts: {},
  },
  skipNavLink: {
    fields: {},
    defaultProps: {},
    parts: {},
  },
  slider: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      orientation: {
        type: 'select',
        options: [
          {
            label: 'vertical',
            value: 'vertical',
          },
          {
            label: 'horizontal',
            value: 'horizontal',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
      orientation: 'horizontal',
    },
    parts: {
      "Control": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "HiddenInput": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLInputElement",
        "tag": "input"
      },
      "Label": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLLabelElement",
        "tag": "label"
      },
      "MarkerGroup": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Marker": {
        "props": {
          "value": {
            "type": "number",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLSpanElement",
        "tag": "span"
      },
      "Range": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "aria-label": {
            "type": "string[]",
            "isRequired": false,
            "description": "The aria-label of each slider thumb. Useful for providing an accessible name to the slider"
          },
          "aria-labelledby": {
            "type": "string[]",
            "isRequired": false,
            "description": "The `id` of the elements that labels each slider thumb. Useful for providing an accessible name to the slider"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "defaultValue": {
            "type": "number[]",
            "isRequired": false,
            "description": "The initial value of the slider when it is first rendered.\nUse when you do not need to control the state of the slider picker."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the slider is disabled"
          },
          "form": {
            "type": "string",
            "isRequired": false,
            "description": "The associate form of the underlying input element."
          },
          "getAriaValueText": {
            "type": "(details: ValueTextDetails) => string",
            "isRequired": false,
            "description": "Function that returns a human readable value for the slider thumb"
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  thumb(index: number): string\n  hiddenInput(index: number): string\n  control: string\n  track: string\n  range: string\n  label: string\n  valueText: string\n  marker(index: number): string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the range slider. Useful for composition."
          },
          "invalid": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the slider is invalid"
          },
          "max": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "100",
            "description": "The maximum value of the slider"
          },
          "min": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "0",
            "description": "The minimum value of the slider"
          },
          "minStepsBetweenThumbs": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "0",
            "description": "The minimum permitted steps between multiple thumbs."
          },
          "name": {
            "type": "string",
            "isRequired": false,
            "description": "The name associated with each slider thumb (when used in a form)"
          },
          "onFocusChange": {
            "type": "(details: FocusChangeDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the slider's focused index changes"
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the value of the slider changes"
          },
          "onValueChangeEnd": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Function invoked when the slider value change is done"
          },
          "orientation": {
            "type": "'horizontal' | 'vertical'",
            "isRequired": false,
            "defaultValue": "\"horizontal\"",
            "description": "The orientation of the slider"
          },
          "origin": {
            "type": "'center' | 'start'",
            "isRequired": false,
            "defaultValue": "\"start\"",
            "description": "The origin of the slider range\n- \"start\": Useful when the value represents an absolute value\n- \"center\": Useful when the value represents an offset (relative)"
          },
          "readOnly": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the slider is read-only"
          },
          "step": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "1",
            "description": "The step value of the slider"
          },
          "thumbAlignment": {
            "type": "'center' | 'contain'",
            "isRequired": false,
            "defaultValue": "\"contain\"",
            "description": "The alignment of the slider thumb relative to the track\n- `center`: the thumb will extend beyond the bounds of the slider track.\n- `contain`: the thumb will be contained within the bounds of the track."
          },
          "thumbSize": {
            "type": "{ width: number; height: number }",
            "isRequired": false,
            "description": "The slider thumbs dimensions"
          },
          "value": {
            "type": "number[]",
            "isRequired": false,
            "description": "The value of the range slider"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseSliderReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Thumb": {
        "props": {
          "index": {
            "type": "number",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "name": {
            "type": "string",
            "isRequired": false
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Track": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ValueText": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "span"
      }
    },
  },
  spinner: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'inherit',
            value: 'inherit',
          },
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {},
  },
  stat: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      },
      "ValueText": {
        "props": {
          "value": {
            "type": "number",
            "isRequired": false
          },
          "formatOptions": {
            "type": "Intl.NumberFormatOptions",
            "isRequired": false
          }
        }
      },
      "Label": {
        "props": {
          "info": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      }
    },
  },
  status: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {},
  },
  steps: {
    fields: {
      orientation: {
        type: 'select',
        options: [
          {
            label: 'vertical',
            value: 'vertical',
          },
          {
            label: 'horizontal',
            value: 'horizontal',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'solid',
      orientation: 'horizontal',
    },
    parts: {
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      },
      "Item": {
        "props": {
          "completedIcon": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "icon": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "title": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "description": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      },
      "Indicator": {
        "props": {
          "completedIcon": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "icon": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      },
      "Status": {
        "props": {
          "complete": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "incomplete": {
            "type": "React.ReactNode",
            "isRequired": false
          },
          "current": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      }
    },
  },
  suiAppShell: {
    fields: {
      fullscreen: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
    },
    defaultProps: {
      fullscreen: false,
      variant: 'plain',
    },
    parts: {},
  },
  suiCommand: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {},
  },
  suiGridList: {
    fields: {
      interactive: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'simple',
            value: 'simple',
          },
          {
            label: 'rounded',
            value: 'rounded',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'simple',
      size: 'md',
    },
    parts: {},
  },
  suiIconBadge: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'outline',
      size: 'md',
    },
    parts: {},
  },
  suiLoadingOverlay: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'fill',
            value: 'fill',
          },
          {
            label: 'fullscreen',
            value: 'fullscreen',
          },
          {
            label: 'overlay',
            value: 'overlay',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'fill',
    },
    parts: {},
  },
  suiNavbar: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'neutral',
            value: 'neutral',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'md',
            value: 'md',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'neutral',
      size: 'md',
    },
    parts: {},
  },
  suiPage: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'panel',
            value: 'panel',
          },
          {
            label: 'settings',
            value: 'settings',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'panel',
    },
    parts: {},
  },
  suiPersona: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: '2xs',
            value: '2xs',
          },
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: '2xl',
            value: '2xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
    },
    parts: {},
  },
  suiSection: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'annotated',
            value: 'annotated',
          },
        ],
      },
    },
    defaultProps: {},
    parts: {},
  },
  suiSidebar: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'sidebar',
            value: 'sidebar',
          },
          {
            label: 'inset',
            value: 'inset',
          },
        ],
      },
      mode: {
        type: 'select',
        options: [
          {
            label: 'collapsible',
            value: 'collapsible',
          },
          {
            label: 'flyout',
            value: 'flyout',
          },
          {
            label: 'compact',
            value: 'compact',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'md',
            value: 'md',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'sidebar',
      mode: 'collapsible',
      size: 'md',
    },
    parts: {},
  },
  suiSidebarNavItem: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'muted',
            value: 'muted',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'muted',
      size: 'md',
    },
    parts: {},
  },
  switch: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'raised',
            value: 'raised',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'solid',
      size: 'md',
    },
    parts: {
      "Root": {
        "props": {
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      },
      "Indicator": {
        "props": {
          "fallback": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      },
      "ThumbIndicator": {
        "props": {
          "fallback": {
            "type": "React.ReactNode",
            "isRequired": false
          }
        }
      }
    },
  },
  table: {
    fields: {
      interactive: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      stickyHeader: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      striped: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      showColumnBorder: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'line',
            value: 'line',
          },
          {
            label: 'outline',
            value: 'outline',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
    },
    defaultProps: {
      variant: 'line',
      size: 'md',
    },
    parts: {
      "Root": {
        "props": {
          "native": {
            "type": "boolean",
            "isRequired": false,
            "description": "If `true`, the table will style its descendants with nested selectors"
          },
          "as": {
            "type": "React.ElementType",
            "isRequired": false,
            "description": "The underlying element to render."
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "unstyled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to remove the component's style."
          }
        }
      }
    },
  },
  tabs: {
    fields: {
      fitted: {
        type: 'select',
        options: [
          {
            label: 'true',
            value: 'true',
          },
        ],
      },
      justify: {
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'center',
            value: 'center',
          },
          {
            label: 'end',
            value: 'end',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'line',
            value: 'line',
          },
          {
            label: 'pills',
            value: 'pills',
          },
          {
            label: 'ghost',
            value: 'ghost',
          },
          {
            label: 'enclosed',
            value: 'enclosed',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'line',
    },
    parts: {
      "TabContent": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true,
            "description": "The value of the tab"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "TabIndicator": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "TabList": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "TabTrigger": {
        "props": {
          "value": {
            "type": "string",
            "isRequired": true,
            "description": "The value of the tab"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the tab is disabled"
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Root": {
        "props": {
          "activationMode": {
            "type": "'manual' | 'automatic'",
            "isRequired": false,
            "defaultValue": "\"automatic\"",
            "description": "The activation mode of the tabs. Can be `manual` or `automatic`\n- `manual`: Tabs are activated when clicked or press `enter` key.\n- `automatic`: Tabs are activated when receiving focus"
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "composite": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the tab is composite"
          },
          "defaultValue": {
            "type": "string",
            "isRequired": false,
            "description": "The initial value of the tabs when it is first rendered.\nUse when you do not need to control the state of the tabs."
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The unique identifier of the machine."
          },
          "ids": {
            "type": "Partial<{\n  root: string\n  trigger: string\n  list: string\n  content: string\n  indicator: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the tabs. Useful for composition."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "loopFocus": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the keyboard navigation will loop from last tab to first, and vice versa."
          },
          "onFocusChange": {
            "type": "(details: FocusChangeDetails) => void",
            "isRequired": false,
            "description": "Callback to be called when the focused tab changes"
          },
          "onValueChange": {
            "type": "(details: ValueChangeDetails) => void",
            "isRequired": false,
            "description": "Callback to be called when the selected/active tab changes"
          },
          "orientation": {
            "type": "'horizontal' | 'vertical'",
            "isRequired": false,
            "defaultValue": "\"horizontal\"",
            "description": "The orientation of the tabs. Can be `horizontal` or `vertical`\n- `horizontal`: only left and right arrow key navigation will work.\n- `vertical`: only up and down arrow key navigation will work."
          },
          "translations": {
            "type": "IntlTranslations",
            "isRequired": false,
            "description": "Specifies the localized strings that identifies the accessibility elements and their states"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          },
          "value": {
            "type": "string",
            "isRequired": false,
            "description": "The selected tab id"
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseTabsReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      }
    },
  },
  tag: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'surface',
            value: 'surface',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'surface',
    },
    parts: {},
  },
  textarea: {
    fields: {
      size: {
        type: 'select',
        options: [
          {
            label: 'xs',
            value: 'xs',
          },
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
      variant: {
        type: 'select',
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'flushed',
            value: 'flushed',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
    parts: {},
  },
  timeline: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'subtle',
            value: 'subtle',
          },
          {
            label: 'solid',
            value: 'solid',
          },
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'plain',
            value: 'plain',
          },
        ],
      },
      size: {
        type: 'select',
        options: [
          {
            label: 'sm',
            value: 'sm',
          },
          {
            label: 'md',
            value: 'md',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'xl',
            value: 'xl',
          },
        ],
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
    parts: {},
  },
  toast: {
    fields: {},
    defaultProps: {},
    parts: {
      "ActionTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "CloseTrigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      },
      "Description": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement"
      },
      "Title": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Toaster": {
        "props": {
          "toaster": {
            "type": "CreateToasterReturn",
            "isRequired": true
          },
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "tag": "div"
      }
    },
  },
  tooltip: {
    fields: {
      variant: {
        type: 'select',
        options: [
          {
            label: 'inverted',
            value: 'inverted',
          },
        ],
      },
    },
    defaultProps: {},
    parts: {
      "Arrow": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "ArrowTip": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Content": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Positioner": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLDivElement",
        "tag": "div"
      },
      "Root": {
        "props": {
          "aria-label": {
            "type": "string",
            "isRequired": false,
            "description": "Custom label for the tooltip."
          },
          "closeDelay": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "500",
            "description": "The close delay of the tooltip."
          },
          "closeOnClick": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the tooltip should close on click"
          },
          "closeOnEscape": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to close the tooltip when the Escape key is pressed."
          },
          "closeOnPointerDown": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether to close the tooltip on pointerdown."
          },
          "closeOnScroll": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "true",
            "description": "Whether the tooltip should close on scroll"
          },
          "defaultOpen": {
            "type": "boolean",
            "isRequired": false,
            "description": "The initial open state of the tooltip when it is first rendered.\nUse when you do not need to control its open state."
          },
          "disabled": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the tooltip is disabled"
          },
          "id": {
            "type": "string",
            "isRequired": false,
            "description": "The `id` of the tooltip."
          },
          "ids": {
            "type": "Partial<{\n  trigger: string\n  content: string\n  arrow: string\n  positioner: string\n}>",
            "isRequired": false,
            "description": "The ids of the elements in the tooltip. Useful for composition."
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "interactive": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether the tooltip's content is interactive.\nIn this mode, the tooltip will remain open when user hovers over the content."
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "onOpenChange": {
            "type": "(details: OpenChangeDetails) => void",
            "isRequired": false,
            "description": "Function called when the tooltip is opened."
          },
          "open": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the tooltip is open"
          },
          "openDelay": {
            "type": "number",
            "isRequired": false,
            "defaultValue": "1000",
            "description": "The open delay of the tooltip."
          },
          "positioning": {
            "type": "PositioningOptions",
            "isRequired": false,
            "description": "The user provided options used to position the popover content"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "RootProvider": {
        "props": {
          "value": {
            "type": "UseTooltipReturn",
            "isRequired": true
          },
          "immediate": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether to synchronize the present change immediately or defer it to the next frame"
          },
          "lazyMount": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to enable lazy mounting"
          },
          "onExitComplete": {
            "type": "() => void",
            "isRequired": false,
            "description": "Function called when the animation ends in the closed state"
          },
          "present": {
            "type": "boolean",
            "isRequired": false,
            "description": "Whether the node is present (controlled by the user)"
          },
          "unmountOnExit": {
            "type": "boolean",
            "isRequired": false,
            "defaultValue": "false",
            "description": "Whether to unmount on exit."
          }
        }
      },
      "Trigger": {
        "props": {
          "asChild": {
            "type": "boolean",
            "isRequired": false,
            "description": "Use the provided child element as the default rendered element, combining their props and behavior."
          }
        },
        "element": "HTMLButtonElement",
        "tag": "button"
      }
    },
  },
};
