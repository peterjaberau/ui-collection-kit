export const schemaRegister: any = {
  "badge": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "surface",
            "value": "surface"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "subtle",
      "size": "sm"
    },
    "parts": {}
  },
  "button": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "glass",
            "value": "glass"
          },
          {
            "label": "surface",
            "value": "surface"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "ghost",
            "value": "ghost"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "surface",
      "colorPalette": "gray"
    },
    "parts": {}
  },
  "code": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "surface",
            "value": "surface"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "subtle",
      "size": "sm"
    },
    "parts": {}
  },
  "container": {
    "fields": {
      "centerContent": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "fluid": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      }
    },
    "defaultProps": {},
    "parts": {}
  },
  "heading": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          },
          {
            "label": "2xl",
            "value": "2xl"
          },
          {
            "label": "3xl",
            "value": "3xl"
          },
          {
            "label": "4xl",
            "value": "4xl"
          },
          {
            "label": "5xl",
            "value": "5xl"
          },
          {
            "label": "6xl",
            "value": "6xl"
          },
          {
            "label": "7xl",
            "value": "7xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "xl"
    },
    "parts": {}
  },
  "input": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "flushed",
            "value": "flushed"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "inputAddon": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "flushed",
            "value": "flushed"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "kbd": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "raised",
            "value": "raised"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "subtle"
    },
    "parts": {}
  },
  "link": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "underline",
            "value": "underline"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "plain"
    },
    "parts": {}
  },
  "mark": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "text",
            "value": "text"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      }
    },
    "defaultProps": {},
    "parts": {}
  },
  "separator": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "dashed",
            "value": "dashed"
          },
          {
            "label": "dotted",
            "value": "dotted"
          }
        ]
      },
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "vertical",
            "value": "vertical"
          },
          {
            "label": "horizontal",
            "value": "horizontal"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "sm",
      "variant": "solid",
      "orientation": "horizontal"
    },
    "parts": {}
  },
  "skeleton": {
    "fields": {
      "loading": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          },
          {
            "label": "false",
            "value": "false"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "pulse",
            "value": "pulse"
          },
          {
            "label": "shine",
            "value": "shine"
          },
          {
            "label": "none",
            "value": "none"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "pulse",
      "loading": true
    },
    "parts": {}
  },
  "skipNavLink": {
    "fields": {},
    "defaultProps": {},
    "parts": {}
  },
  "spinner": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "inherit",
            "value": "inherit"
          },
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "textarea": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "flushed",
            "value": "flushed"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "icon": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "inherit",
            "value": "inherit"
          },
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          },
          {
            "label": "2xl",
            "value": "2xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "inherit"
    },
    "parts": {}
  },
  "checkmark": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "plain",
            "value": "plain"
          },
          {
            "label": "inverted",
            "value": "inverted"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "solid",
      "size": "md"
    },
    "parts": {}
  },
  "radiomark": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "inverted",
            "value": "inverted"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "solid",
      "size": "md"
    },
    "parts": {}
  },
  "suiCommand": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "suiIconBadge": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "outline",
      "size": "md"
    },
    "parts": {}
  },
  "accordion": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "enclosed",
            "value": "enclosed"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "actionBar": {
    "fields": {},
    "defaultProps": {},
    "parts": {}
  },
  "alert": {
    "fields": {
      "status": {
        "type": "select",
        "options": [
          {
            "label": "info",
            "value": "info"
          },
          {
            "label": "warning",
            "value": "warning"
          },
          {
            "label": "success",
            "value": "success"
          },
          {
            "label": "error",
            "value": "error"
          },
          {
            "label": "neutral",
            "value": "neutral"
          }
        ]
      },
      "inline": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          },
          {
            "label": "false",
            "value": "false"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "surface",
            "value": "surface"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "status": "info",
      "variant": "subtle",
      "size": "md",
      "inline": false
    },
    "parts": {}
  },
  "avatar": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "full",
            "value": "full"
          },
          {
            "label": "2xs",
            "value": "2xs"
          },
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          },
          {
            "label": "2xl",
            "value": "2xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "outline",
            "value": "outline"
          }
        ]
      },
      "shape": {
        "type": "select",
        "options": [
          {
            "label": "square",
            "value": "square"
          },
          {
            "label": "rounded",
            "value": "rounded"
          },
          {
            "label": "full",
            "value": "full"
          }
        ]
      },
      "borderless": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "shape": "full",
      "variant": "solid"
    },
    "parts": {}
  },
  "blockquote": {
    "fields": {
      "justify": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "center",
            "value": "center"
          },
          {
            "label": "end",
            "value": "end"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "subtle",
      "justify": "start"
    },
    "parts": {}
  },
  "breadcrumb": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "underline",
            "value": "underline"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "plain",
      "size": "md"
    },
    "parts": {}
  },
  "card": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "elevated",
            "value": "elevated"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "outline",
      "size": "md"
    },
    "parts": {}
  },
  "checkbox": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "solid",
      "size": "md"
    },
    "parts": {}
  },
  "checkboxCard": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "surface",
            "value": "surface"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "justify": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "end",
            "value": "end"
          },
          {
            "label": "center",
            "value": "center"
          }
        ]
      },
      "align": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "end",
            "value": "end"
          },
          {
            "label": "center",
            "value": "center"
          }
        ]
      },
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "vertical",
            "value": "vertical"
          },
          {
            "label": "horizontal",
            "value": "horizontal"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline",
      "align": "start",
      "orientation": "horizontal"
    },
    "parts": {}
  },
  "collapsible": {
    "fields": {},
    "defaultProps": {},
    "parts": {}
  },
  "dataList": {
    "fields": {
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "horizontal",
            "value": "horizontal"
          },
          {
            "label": "vertical",
            "value": "vertical"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "orientation": "horizontal"
    },
    "parts": {}
  },
  "dialog": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "dialog",
            "value": "dialog"
          },
          {
            "label": "confirm",
            "value": "confirm"
          }
        ]
      },
      "placement": {
        "type": "select",
        "options": [
          {
            "label": "center",
            "value": "center"
          },
          {
            "label": "top",
            "value": "top"
          },
          {
            "label": "bottom",
            "value": "bottom"
          }
        ]
      },
      "scrollBehavior": {
        "type": "select",
        "options": [
          {
            "label": "inside",
            "value": "inside"
          },
          {
            "label": "outside",
            "value": "outside"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          },
          {
            "label": "cover",
            "value": "cover"
          },
          {
            "label": "full",
            "value": "full"
          }
        ]
      },
      "motionPreset": {
        "type": "select",
        "options": [
          {
            "label": "scale",
            "value": "scale"
          },
          {
            "label": "slide-in-bottom",
            "value": "slide-in-bottom"
          },
          {
            "label": "slide-in-top",
            "value": "slide-in-top"
          },
          {
            "label": "slide-in-left",
            "value": "slide-in-left"
          },
          {
            "label": "slide-in-right",
            "value": "slide-in-right"
          },
          {
            "label": "none",
            "value": "none"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "scrollBehavior": "outside",
      "placement": "top",
      "motionPreset": "scale",
      "variant": "dialog"
    },
    "parts": {}
  },
  "drawer": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          },
          {
            "label": "full",
            "value": "full"
          }
        ]
      },
      "placement": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "end",
            "value": "end"
          },
          {
            "label": "top",
            "value": "top"
          },
          {
            "label": "bottom",
            "value": "bottom"
          }
        ]
      },
      "attached": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "xs",
      "placement": "end"
    },
    "parts": {}
  },
  "editable": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "emptyState": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "align": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "center",
            "value": "center"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "align": "center"
    },
    "parts": {}
  },
  "field": {
    "fields": {
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "vertical",
            "value": "vertical"
          },
          {
            "label": "horizontal",
            "value": "horizontal"
          }
        ]
      }
    },
    "defaultProps": {
      "orientation": "vertical"
    },
    "parts": {}
  },
  "fileUpload": {
    "fields": {},
    "defaultProps": {},
    "parts": {}
  },
  "hoverCard": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "list": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "marker",
            "value": "marker"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "align": {
        "type": "select",
        "options": [
          {
            "label": "center",
            "value": "center"
          },
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "end",
            "value": "end"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "marker"
    },
    "parts": {}
  },
  "menu": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "subtle"
    },
    "parts": {}
  },
  "nativeSelect": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "numberInput": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "flushed",
            "value": "flushed"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "pinInput": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "flushed",
            "value": "flushed"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "popover": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "progress": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          }
        ]
      },
      "shape": {
        "type": "select",
        "options": [
          {
            "label": "square",
            "value": "square"
          },
          {
            "label": "rounded",
            "value": "rounded"
          },
          {
            "label": "full",
            "value": "full"
          }
        ]
      },
      "striped": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "animated": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "outline",
      "size": "md",
      "shape": "rounded"
    },
    "parts": {}
  },
  "progressCircle": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "radioCard": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "surface",
            "value": "surface"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "justify": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "end",
            "value": "end"
          },
          {
            "label": "center",
            "value": "center"
          }
        ]
      },
      "align": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "end",
            "value": "end"
          },
          {
            "label": "center",
            "value": "center"
          }
        ]
      },
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "vertical",
            "value": "vertical"
          },
          {
            "label": "horizontal",
            "value": "horizontal"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline",
      "align": "start",
      "orientation": "horizontal"
    },
    "parts": {}
  },
  "radioGroup": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "solid"
    },
    "parts": {}
  },
  "ratingGroup": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "segmentGroup": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "select": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "subtle",
            "value": "subtle"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    },
    "parts": {}
  },
  "slider": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "vertical",
            "value": "vertical"
          },
          {
            "label": "horizontal",
            "value": "horizontal"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "outline",
      "orientation": "horizontal"
    },
    "parts": {}
  },
  "stat": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "steps": {
    "fields": {
      "orientation": {
        "type": "select",
        "options": [
          {
            "label": "vertical",
            "value": "vertical"
          },
          {
            "label": "horizontal",
            "value": "horizontal"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "subtle",
            "value": "subtle"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "solid",
      "orientation": "horizontal"
    },
    "parts": {}
  },
  "switch": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "raised",
            "value": "raised"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "solid",
      "size": "md"
    },
    "parts": {}
  },
  "table": {
    "fields": {
      "interactive": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "stickyHeader": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "striped": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "showColumnBorder": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "line",
            "value": "line"
          },
          {
            "label": "outline",
            "value": "outline"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "line",
      "size": "md"
    },
    "parts": {}
  },
  "tabs": {
    "fields": {
      "fitted": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "justify": {
        "type": "select",
        "options": [
          {
            "label": "start",
            "value": "start"
          },
          {
            "label": "center",
            "value": "center"
          },
          {
            "label": "end",
            "value": "end"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "line",
            "value": "line"
          },
          {
            "label": "pills",
            "value": "pills"
          },
          {
            "label": "ghost",
            "value": "ghost"
          },
          {
            "label": "enclosed",
            "value": "enclosed"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "line"
    },
    "parts": {}
  },
  "tag": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "surface",
            "value": "surface"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "surface"
    },
    "parts": {}
  },
  "toast": {
    "fields": {},
    "defaultProps": {},
    "parts": {}
  },
  "tooltip": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "inverted",
            "value": "inverted"
          }
        ]
      }
    },
    "defaultProps": {},
    "parts": {}
  },
  "status": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "timeline": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "subtle",
            "value": "subtle"
          },
          {
            "label": "solid",
            "value": "solid"
          },
          {
            "label": "outline",
            "value": "outline"
          },
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md",
      "variant": "solid"
    },
    "parts": {}
  },
  "suiAppShell": {
    "fields": {
      "fullscreen": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "plain",
            "value": "plain"
          }
        ]
      }
    },
    "defaultProps": {
      "fullscreen": false,
      "variant": "plain"
    },
    "parts": {}
  },
  "suiLoadingOverlay": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "fill",
            "value": "fill"
          },
          {
            "label": "fullscreen",
            "value": "fullscreen"
          },
          {
            "label": "overlay",
            "value": "overlay"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "fill"
    },
    "parts": {}
  },
  "suiPersona": {
    "fields": {
      "size": {
        "type": "select",
        "options": [
          {
            "label": "2xs",
            "value": "2xs"
          },
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          },
          {
            "label": "2xl",
            "value": "2xl"
          }
        ]
      }
    },
    "defaultProps": {
      "size": "md"
    },
    "parts": {}
  },
  "suiGridList": {
    "fields": {
      "interactive": {
        "type": "select",
        "options": [
          {
            "label": "true",
            "value": "true"
          }
        ]
      },
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "simple",
            "value": "simple"
          },
          {
            "label": "rounded",
            "value": "rounded"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "simple",
      "size": "md"
    },
    "parts": {}
  },
  "suiNavbar": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "neutral",
            "value": "neutral"
          },
          {
            "label": "solid",
            "value": "solid"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "md",
            "value": "md"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "neutral",
      "size": "md"
    },
    "parts": {}
  },
  "suiSidebar": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "sidebar",
            "value": "sidebar"
          },
          {
            "label": "inset",
            "value": "inset"
          }
        ]
      },
      "mode": {
        "type": "select",
        "options": [
          {
            "label": "collapsible",
            "value": "collapsible"
          },
          {
            "label": "flyout",
            "value": "flyout"
          },
          {
            "label": "compact",
            "value": "compact"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "md",
            "value": "md"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "sidebar",
      "mode": "collapsible",
      "size": "md"
    },
    "parts": {}
  },
  "suiSidebarNavItem": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "muted",
            "value": "muted"
          }
        ]
      },
      "size": {
        "type": "select",
        "options": [
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "muted",
      "size": "md"
    },
    "parts": {}
  },
  "suiPage": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "panel",
            "value": "panel"
          },
          {
            "label": "settings",
            "value": "settings"
          }
        ]
      }
    },
    "defaultProps": {
      "variant": "panel"
    },
    "parts": {}
  },
  "suiSection": {
    "fields": {
      "variant": {
        "type": "select",
        "options": [
          {
            "label": "annotated",
            "value": "annotated"
          }
        ]
      }
    },
    "defaultProps": {},
    "parts": {}
  }
}

export const getComponentSchemas = () => {
  let newSchemaRegister: any = {};
  const schemaRegisterKeys = Object.keys(schemaRegister);

  schemaRegisterKeys.forEach((key: string) => {
    const schemaObj = schemaRegister[key];
    newSchemaRegister[key] = {
      ...schemaObj,
      parts: {}
    };
  });

  return newSchemaRegister
};
