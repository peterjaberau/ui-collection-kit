import { Button, Icon } from '@chakra-ui/react'
export const systemConfigMap = {
  definitions: {
    registryItemTypeSchema: {
      type: 'string',
      enum: [
        "registry:style",
        "registry:lib",
        "registry:example",
        "registry:block",
        "registry:component",
        "registry:ui",
        "registry:hook",
        "registry:theme",
        "registry:page",
      ]
    },
    registryItemComponent: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        type: {
          $ref: '#/definitions/registryItemTypeSchema'
        },
        description: {
          type: 'string'
        },
        dependencies: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        devDependencies: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        registryDependencies: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        files: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        meta: {
          type: 'object',
        },
        docs: {
          type: 'string'
        },
      }


    }

  },
}


export const ComponentConfigMap = {
  button: {
    id: 'button',
    name: 'button',
    schema: '/schemas/ActionSchema.json',
    preset: {
      type: 'button',
      label: 'button',
      onEvent: {
        click: {
          actions: [],
        },
      },
    },
    plugin: {
      events: [
        {
          name: 'click',
          label: 'click',
          description: 'Fire on click',
          data: {},
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
          name: 'mouseenter',
          label: 'mouseenter',
          description: 'Fires when mouse moves in',
          data: {},
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
          name: 'mouseleave',
          label: 'mouseleave',
          description: 'mouseleave',
          data: {},
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
      meta: {
        type: 'button',
        displayName: 'Button',
        icon: 'fa fa-square',
        pluginIcon: 'button-plugin',
        description: 'Used to display a button, you can configure different display styles and different click behaviors.',
        tags: ['button'],
        docLink: 'components/button',

      },
      isBaseComponent: true,
    },
    component: Button
  },




  button: {
    id: 'button',
    name: 'button',
    meta: {
      displayName: 'Button',
    },
    editor: {
      schema: {},
      uiSchema: {},
      data: {}
    },
    config: {
      schema: {},
      uiSchema: {},
      data: {}
    },
    registry: {
      type: 'registry:component',
      component: Button
    }
  },

  buttonIlla: {
    config: {
      type: "button",
      displayName: "button",
      defaults: {
        children: 'Button',
        variant: "fill",
        colorScheme: "blue",
        hidden: false,
      },
    },
    editorConfig: [
      {
        id: "button-basic",
        groupName: "Basic",
        children: [
          {
            id: "button-basic-text",
            labelName: 'Text',
            attrName: "text",
            setterType: "INPUT_SETTER",
            expectedType: "string",
          }
        ]
      },
      {
        id: "button-interaction",
        groupName: "Interactions",
        children: [
          {
            id: 'button-interaction-formId',
            labelName: "Submit form",
            attrName: "formId",
            setterType: "INPUT_SETTER",
            bindAttrName: ["submit"],
            shown: (value) => value === true,
          },
          {
            id: 'button-interaction-loading',
            labelName: 'Loading',
            labelDesc: 'Loading',
            attrName: "loading",
            placeholder: "{{false}}",
            setterType: "INPUT_SETTER",
            expectedType: 'boolean',
            bindAttrName: ["submit"],
            shown: (value) => {
              return !value
            },
          },
        ]
      },
      {
        id: "button-style",
        groupName: "Style",
        children: [
          {
            id: 'button-style-variant',
            setterType: "RADIO_GROUP_SETTER",
            labelName: "Variant",
            attrName: "variant",
            options: [
              {
                label: 'Fill',
                value: "fill",
              },
              {
                label: 'Outline',
                value: "outline",
              },
            ],
          },
          {
            id: `button-style-list`,
            setterType: "STYLE_CONTAINER_SETTER",
            labelName: 'Colors',
            attrName: "styles",
            useCustomLayout: true,
            childrenSetter: [
              {
                id: 'button-style-bg',
                labelName: 'Theme color',
                setterType: "COLOR_PICKER_SETTER",
                useCustomLayout: true,
                attrName: "colorScheme",
                defaultValue: "blue",
              },
            ],
          },
        ]
      },

    ],
    eventHandlerConfig: {
      events: [
        {
          label: 'onClick',
          value: "click",
        },
      ],
      methods: []
    },
    widget: Button
  },
}


export const registry = () => {

}
