const data = {
  "Alert": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-component-props": {
          "defaultValue": "This is an alert"
        }
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
        "x-decorator": "FormItem",
        "x-component": "Select",
        "x-component-props": {
          "defaultValue": "info"
        }
      },
      "variant": {
        "type": "string",
        "enum": [
          "subtle",
          "surface",
          "outline",
          "solid"
        ],
        "x-decorator": "FormItem",
        "x-component": "Select",
        "x-component-props": {
          "defaultValue": "subtle"
        }
      },
      "size": {
        "type": "string",
        "enum": [
          "lg",
          "md",
          "sm"
        ],
        "x-decorator": "FormItem",
        "x-component": "Select",
        "x-component-props": {
          "defaultValue": "md"
        }
      },
      "inline": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
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
        "x-decorator": "FormItem",
        "x-component": "Select",
        "x-component-props": {
          "defaultValue": "gray"
        }
      }
    },
  },
    ArrayCards: {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "extra": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "type": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "",
            "optionType": "button"
          }
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      },
      "Addition": {
        "type": "object",
        "properties": {
          "method": {
            "type": "string",
            "enum": [
              "push",
              "unshift"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "push",
              "optionType": "button"
            }
          },
          "defaultValue": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "ValueInput"
          }
        }
      }
    },
    ArrayTable: {
      "type": "object",
      "properties": {
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "showHeader": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "sticky": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle"
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "small"
          }
        },
        "tableLayout": {
          "type": "string",
          "enum": [
            "auto",
            "fixed"
          ],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "auto",
            "optionType": "button"
          }
        }
      },
      "Column": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
          },
          "align": {
            "type": "string",
            "enum": [
              "left",
              "right",
              "center"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "left",
              "optionType": "button"
            }
          },
          "colSpan": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
          },
          "width": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
          },
          "fixed": {
            "type": "string",
            "enum": [
              "left",
              "right",
              false
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "optionType": "button"
            }
          }
        }
      },
      "Addition": {
        "type": "object",
        "properties": {
          "method": {
            "type": "string",
            "enum": [
              "push",
              "unshift"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "push",
              "optionType": "button"
            }
          },
          "defaultValue": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "ValueInput"
          }
        }
      }
    },
    Button: {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-component-props": {
            "defaultValue": "Button"
          }
        },
        "loading": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
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
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "gray"
          }
        },
        "size": {
          "type": "string",
          "enum": [
            "lg",
            "md",
            "sm",
            ""
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "md"
          }
        },
        "variant": {
          "type": "string",
          "enum": [
            "solid",
            "subtle",
            "surface",
            "outline",
            "ghost",
            "plain"
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "solid"
          }
        }
      }
    },
    CSStyle: {
      "type": "void",
      "properties": {
        "style.width": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "style.height": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "style.display": {
          "x-component": "DisplayStyleSetter"
        },
        "style.background": {
          "x-component": "BackgroundStyleSetter"
        },
        "style.boxShadow": {
          "x-component": "BoxShadowStyleSetter"
        },
        "style.font": {
          "x-component": "FontStyleSetter"
        },
        "style.margin": {
          "x-component": "BoxStyleSetter"
        },
        "style.padding": {
          "x-component": "BoxStyleSetter"
        },
        "style.borderRadius": {
          "x-component": "BorderRadiusStyleSetter"
        },
        "style.border": {
          "x-component": "BorderStyleSetter"
        },
        "style.opacity": {
          "x-decorator": "FormItem",
          "x-component": "Slider",
          "x-component-props": {
            "defaultValue": 1,
            "min": 0,
            "max": 1,
            "step": 0.01
          }
        }
      }
    },
    Card: {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "extra": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "type": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "",
            "optionType": "button"
          }
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      },
      "Addition": {
        "type": "object",
        "properties": {
          "method": {
            "type": "string",
            "enum": [
              "push",
              "unshift"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "push",
              "optionType": "button"
            }
          },
          "defaultValue": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "ValueInput"
          }
        }
      }
    },
    Cascader: {
      "type": "object",
      "properties": {
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "changeOnSelect": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "displayRender": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "fieldNames": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "showSearch": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "notFoundContent": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-component-props": {
            "defaultValue": "Not Found"
          }
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        }
      }
    },
    Checkbox: {
      "type": "object",
      "properties": {
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }
      }
    },
    CommonTimePickerAPI: {
      "allowClear": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch",
        "x-component-props": {
          "defaultChecked": true
        }
      },
      "autoFocus": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
      },
      "bordered": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch",
        "x-component-props": {
          "defaultChecked": true
        }
      },
      "clearText": {
        "type": "string",
        "x-decorator": "FormItem",
        "x-component": "Input"
      },
      "disabledHours": {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
          "include": [
            "EXPRESSION"
          ]
        }
      },
      "disabledMinutes": {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
          "include": [
            "EXPRESSION"
          ]
        }
      },
      "disabledSeconds": {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
          "include": [
            "EXPRESSION"
          ]
        }
      },
      "hideDisabledOptions": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
      },
      "inputReadOnly": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
      },
      "showNow": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
      },
      "use12Hours": {
        "type": "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
      },
      "hourStep": {
        "type": "number",
        "x-decorator": "FormItem",
        "x-component": "NumberPicker",
        "x-component-props": {
          "defaultValue": 1
        }
      },
      "minuteStep": {
        "type": "number",
        "x-decorator": "FormItem",
        "x-component": "NumberPicker",
        "x-component-props": {
          "defaultValue": 1
        }
      },
      "secondStep": {
        "type": "number",
        "x-decorator": "FormItem",
        "x-component": "NumberPicker",
        "x-component-props": {
          "defaultValue": 1
        }
      },
      "placeholder": {
        "type": "string",
        "x-decorator": "FormItem",
        "x-component": "Input"
      },
      "size": {
        "type": "string",
        "enum": [
          "large",
          "small",
          "middle",
          null
        ],
        "x-decorator": "FormItem",
        "x-component": "Select"
      },
      "format": {
        "type": "string",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-component-props": {
          "placeholder": "YYYY-MM-DD"
        }
      }
    },
    DatePicker: {
      "type": "object",
      "properties": {
        "picker": {
          "type": "string",
          "enum": [
            "time",
            "date",
            "month",
            "year",
            "quarter",
            "decade"
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "date"
          }
        },
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "disabledTime": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "disabledDate": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "inputReadOnly": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        },
        "format": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-component-props": {
            "placeholder": "YYYY-MM-DD"
          }
        },
        "showNow": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showTime": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showToday": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }
      },
      "RangePicker": {
        "type": "object",
        "properties": {
          "picker": {
            "type": "string",
            "enum": [
              "time",
              "date",
              "month",
              "year",
              "decade"
            ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
              "defaultValue": "date"
            }
          },
          "allowClear": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
              "defaultChecked": true
            }
          },
          "autoFocus": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "bordered": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
              "defaultChecked": true
            }
          },
          "disabledTime": {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
              "include": [
                "EXPRESSION"
              ]
            }
          },
          "disabledDate": {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
              "include": [
                "EXPRESSION"
              ]
            }
          },
          "inputReadOnly": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "placeholder": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
          },
          "size": {
            "type": "string",
            "enum": [
              "large",
              "small",
              "middle",
              null
            ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
              "defaultValue": "middle"
            }
          },
          "format": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
              "placeholder": "YYYY-MM-DD"
            }
          },
          "showTime": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          }
        }
      }
    },
    Form: {
      "type": "object",
      "properties": {
        "labelCol": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "wrapperCol": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "labelWidth": {
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "wrapperWidth": {
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "colon": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "feedbackLayout": {
          "type": "string",
          "enum": [
            "loose",
            "terse",
            "popover",
            "none",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "loose"
          }
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "default",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "default"
          }
        },
        "layout": {
          "type": "string",
          "enum": [
            "vertical",
            "horizontal",
            "inline",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "horizontal"
          }
        },
        "tooltipLayout": {
          "type": "string",
          "enum": [
            "icon",
            "text",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "icon"
          }
        },
        "labelAlign": {
          "type": "string",
          "enum": [
            "left",
            "right",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "right"
          }
        },
        "wrapperAlign": {
          "type": "string",
          "enum": [
            "left",
            "right",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "left"
          }
        },
        "labelWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "wrapperWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "fullness": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "inset": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "shallow": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "style": {
          "type": "void",
          "properties": {
            "style.width": {
              "type": "string",
              "x-decorator": "FormItem",
              "x-component": "SizeInput"
            },
            "style.height": {
              "type": "string",
              "x-decorator": "FormItem",
              "x-component": "SizeInput"
            },
            "style.display": {
              "x-component": "DisplayStyleSetter"
            },
            "style.background": {
              "x-component": "BackgroundStyleSetter"
            },
            "style.boxShadow": {
              "x-component": "BoxShadowStyleSetter"
            },
            "style.font": {
              "x-component": "FontStyleSetter"
            },
            "style.margin": {
              "x-component": "BoxStyleSetter"
            },
            "style.padding": {
              "x-component": "BoxStyleSetter"
            },
            "style.borderRadius": {
              "x-component": "BorderRadiusStyleSetter"
            },
            "style.border": {
              "x-component": "BorderStyleSetter"
            },
            "style.opacity": {
              "x-decorator": "FormItem",
              "x-component": "Slider",
              "x-component-props": {
                "defaultValue": 1,
                "min": 0,
                "max": 1,
                "step": 0.01
              }
            }
          }
        }
      }
    },
    FormCollapse: {
      "type": "object",
      "properties": {
        "accordion": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "collapsible": {
          "type": "string",
          "enum": [
            "header",
            "disabled"
          ],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "header",
            "optionType": "button"
          }
        },
        "ghost": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      },
      "CollapsePanel": {
        "type": "object",
        "properties": {
          "collapsible": {
            "type": "string",
            "enum": [
              "header",
              "disabled"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "header",
              "optionType": "button"
            }
          },
          "header": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Input"
          },
          "extra": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Input"
          }
        }
      }
    },
    FormGrid: {
      "type": "object",
      "properties": {
        "minWidth": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 100
          }
        },
        "maxWidth": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "minColumns": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 0
          }
        },
        "maxColumns": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "breakpoints": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "columnGap": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 10
          }
        },
        "rowGap": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 5
          }
        },
        "colWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      },
      "GridColumn": {
        "type": "object",
        "properties": {
          "gridSpan": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
              "defaultValue": 1
            }
          }
        }
      }
    },
    FormItem: {
      "type": "object",
      "properties": {
        "tooltip": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "addonBefore": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "addonAfter": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "labelCol": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "wrapperCol": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "labelWidth": {
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "wrapperWidth": {
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "colon": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "asterisk": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "gridSpan": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "feedbackLayout": {
          "type": "string",
          "enum": [
            "loose",
            "terse",
            "popover",
            "none",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "loose"
          }
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "default",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "default"
          }
        },
        "layout": {
          "type": "string",
          "enum": [
            "vertical",
            "horizontal",
            "inline",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "horizontal"
          }
        },
        "tooltipLayout": {
          "type": "string",
          "enum": [
            "icon",
            "text",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "icon"
          }
        },
        "labelAlign": {
          "type": "string",
          "enum": [
            "left",
            "right",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "right"
          }
        },
        "wrapperAlign": {
          "type": "string",
          "enum": [
            "left",
            "right",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "left"
          }
        },
        "labelWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "wrapperWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "fullness": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "inset": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      }
    },
    FormLayout: {
      "type": "object",
      "properties": {
        "labelCol": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "wrapperCol": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "labelWidth": {
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "wrapperWidth": {
          "x-decorator": "FormItem",
          "x-component": "SizeInput"
        },
        "colon": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "feedbackLayout": {
          "type": "string",
          "enum": [
            "loose",
            "terse",
            "popover",
            "none",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "loose"
          }
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "default",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "default"
          }
        },
        "layout": {
          "type": "string",
          "enum": [
            "vertical",
            "horizontal",
            "inline",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "horizontal"
          }
        },
        "tooltipLayout": {
          "type": "string",
          "enum": [
            "icon",
            "text",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "icon"
          }
        },
        "labelAlign": {
          "type": "string",
          "enum": [
            "left",
            "right",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "right"
          }
        },
        "wrapperAlign": {
          "type": "string",
          "enum": [
            "left",
            "right",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "left"
          }
        },
        "labelWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "wrapperWrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "fullness": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "inset": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "shallow": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      }
    },
    FormTab: {
      "type": "object",
      "properties": {
        "animated": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "centered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "default",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "default"
          }
        },
        "type": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "line",
            "optionType": "button"
          }
        }
      },
      "TabPane": {
        "type": "object",
        "properties": {
          "tab": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
          }
        }
      }
    },
    Input: {
      "type": "object",
      "properties": {
        "addonBefore": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "addonAfter": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "prefix": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "suffix": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "maxLength": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        }
      },
      "TextArea": {
        "type": "object",
        "properties": {
          "bordered": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
              "defaultChecked": true
            }
          },
          "maxLength": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
          },
          "placeholder": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
          },
          "autoSize": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "showCount": {
            "x-decorator": "FormItem",
            "x-component": "Switch"
          }
        }
      }
    },
    NumberPicker: {
      "type": "object",
      "properties": {
        "decimalSeparator": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "precision": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "max": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "min": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "step": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        },
        "formatter": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "parser": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "stringMode": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "keyboard": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        }
      }
    },
    Password: {
      "type": "object",
      "properties": {
        "addonBefore": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "addonAfter": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "prefix": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "suffix": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "maxLength": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        },
        "checkStrength": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }
      }
    },
    Radio: {
      "type": "object",
      "properties": {
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }
      },
      "Group": {
        "type": "object",
        "properties": {
          "optionType": {
            "type": "string",
            "enum": [
              "default",
              "button"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "default",
              "optionType": "button"
            }
          },
          "buttonStyle": {
            "type": "string",
            "enum": [
              "outline",
              "solid"
            ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
              "defaultValue": "outline",
              "optionType": "button"
            }
          }
        }
      }
    },
    Rate: {
      "type": "object",
      "properties": {
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "count": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 5
          }
        },
        "allowHalf": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "tooltips": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }
      }
    },
    Select: {
      "type": "object",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "multiple",
            "tags",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": null,
            "optionType": "button"
          }
        },
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "autoClearSearchValue": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "dropdownMatchSelectWidth": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "defaultActiveFirstOption": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "defaultOpen": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "labelInValue": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showArrow": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showSearch": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "virtual": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultValue": true
          }
        },
        "filterOption": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "BOOLEAN",
              "EXPRESSION"
            ]
          }
        },
        "filterSort": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "listHeight": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 256
          }
        },
        "maxTagCount": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "maxTagPlaceholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "maxTagTextLength": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "notFoundContent": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-component-props": {
            "defaultValue": "Not Found"
          }
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        }
      }
    },
    Slider: {
      "type": "object",
      "properties": {
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "dots": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "range": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "reverse": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "vertical": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "tooltipVisible": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "tooltipPlacement": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "marks": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "max": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 100
          }
        },
        "min": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 0
          }
        },
        "step": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 1
          }
        }
      }
    },
    Space: {
      "type": "object",
      "properties": {
        "align": {
          "type": "string",
          "enum": [
            "start",
            "end",
            "center",
            "baseline"
          ],
          "x-decorator": "FormItem",
          "x-component": "Select"
        },
        "direction": {
          "type": "string",
          "enum": [
            "vertical",
            "horizontal"
          ],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "horizontal",
            "optionType": "button"
          }
        },
        "size": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 8
          }
        },
        "split": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "wrap": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }
      }
    },
    Switch: {
      "type": "object",
      "properties": {
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "default",
            ""
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "default"
          }
        }
      }
    },
    Text: {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input.TextArea"
        },
        "mode": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "normal"
          },
          "enum": [
            "h1",
            "h2",
            "h3",
            "p",
            "normal"
          ]
        }
      }
    },
    TimePicker: {
      "type": "object",
      "properties": {
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "clearText": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "disabledHours": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "disabledMinutes": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "disabledSeconds": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "hideDisabledOptions": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "inputReadOnly": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showNow": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "use12Hours": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "hourStep": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 1
          }
        },
        "minuteStep": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 1
          }
        },
        "secondStep": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 1
          }
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select"
        },
        "format": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-component-props": {
            "placeholder": "YYYY-MM-DD"
          }
        }
      },
      "RangePicker": {
        "type": "object",
        "properties": {
          "allowClear": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
              "defaultChecked": true
            }
          },
          "autoFocus": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "bordered": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
              "defaultChecked": true
            }
          },
          "clearText": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
          },
          "disabledHours": {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
              "include": [
                "EXPRESSION"
              ]
            }
          },
          "disabledMinutes": {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
              "include": [
                "EXPRESSION"
              ]
            }
          },
          "disabledSeconds": {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
              "include": [
                "EXPRESSION"
              ]
            }
          },
          "hideDisabledOptions": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "inputReadOnly": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "showNow": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "use12Hours": {
            "type": "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
          },
          "hourStep": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
              "defaultValue": 1
            }
          },
          "minuteStep": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
              "defaultValue": 1
            }
          },
          "secondStep": {
            "type": "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
              "defaultValue": 1
            }
          },
          "placeholder": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
          },
          "size": {
            "type": "string",
            "enum": [
              "large",
              "small",
              "middle",
              null
            ],
            "x-decorator": "FormItem",
            "x-component": "Select"
          },
          "format": {
            "type": "string",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
              "placeholder": "YYYY-MM-DD"
            }
          }
        }
      }
    },
    Transfer: {
      "type": "object",
      "properties": {
        "oneWay": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showSearch": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showSearchAll": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "filterOption": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "operations": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "titles": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        }
      }
    },
    TreeSelect: {
      "type": "object",
      "properties": {
        "allowClear": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "autoClearSearchValue": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "autoFocus": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "bordered": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "labelInValue": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showArrow": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "showSearch": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "virtual": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "treeCheckable": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "treeDefaultExpandAll": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "dropdownMatchSelectWidth": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "showCheckedStrategy": {
          "type": "string",
          "enum": [
            "SHOW_ALL",
            "SHOW_PARENT",
            "SHOW_CHILD"
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "SHOW_CHILD"
          }
        },
        "treeDefaultExpandedKeys": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "treeNodeFilterProp": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "treeNodeLabelProp": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "filterTreeNode": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "BOOLEAN",
              "EXPRESSION"
            ]
          }
        },
        "treeDataSimpleMode": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "BOOLEAN",
              "EXPRESSION"
            ]
          }
        },
        "listHeight": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-component-props": {
            "defaultValue": 256
          }
        },
        "placeholder": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "size": {
          "type": "string",
          "enum": [
            "large",
            "small",
            "middle",
            null
          ],
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-component-props": {
            "defaultValue": "middle"
          }
        }
      }
    },
    Upload: {
      type: "object",
      properties: {
        "textContent": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "accept": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input"
        },
        "action": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "TEXT",
              "EXPRESSION"
            ]
          }
        },
        "name": {
          "type": "string",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-component-props": {
            "defaultValue": "file"
          }
        },
        "maxCount": {
          "type": "number",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker"
        },
        "method": {
          "enum": [
            "POST",
            "PUT",
            "GET"
          ],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "POST",
            "optionType": "button"
          }
        },
        "data": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "headers": {
          "x-decorator": "FormItem",
          "x-component": "ValueInput",
          "x-component-props": {
            "include": [
              "EXPRESSION"
            ]
          }
        },
        "listType": {
          "enum": [
            "text",
            "picture",
            "picture-card"
          ],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            "defaultValue": "text",
            "optionType": "button"
          }
        },
        "directory": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "multiple": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        },
        "openFileDialogOnClick": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "showUploadList": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch",
          "x-component-props": {
            "defaultChecked": true
          }
        },
        "withCredentials": {
          "type": "boolean",
          "x-decorator": "FormItem",
          "x-component": "Switch"
        }

      }
    }
}
