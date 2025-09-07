
export const WidgetConfigMap: any = {
  BUTTON_WIDGET: {
    config: {
      type: "BUTTON_WIDGET",
      displayName: "button",
      widgetName: "Button",
      keywords: ["Button"],
      icon: null,
      sessionType: "PRESENTATION",
      w: 6,
      h: 5,
      version: 0,
      defaults: {
        text: "Button",
        variant: "fill",
        colorScheme: "blue",
        hidden: false,
      },
    },
    panelConfig: [
      {
        "id": "button-basic",
        "groupName": "BASIC",
        "children": [
          {
            "id": "button-basic-Text",
            "labelName": "Text",
            "attrName": "text",
            "setterType": "INPUT_SETTER",
            "expectedType": "String"
          }
        ]
      }
    ],
    eventHandlerConfig: {
      events: [
        {
          label: "Click",
          value: "click"
        }
      ],
      methods: [],
    },
    widget: ""
  }
}

export const WidgetTypeList = Object.keys(WidgetConfigMap)

export const widgetBuilder = (type: any) => {
  return WidgetConfigMap[type]
}
