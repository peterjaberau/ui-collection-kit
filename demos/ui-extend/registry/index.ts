import * as Chakra from '@chakra-ui/react';

export const componentsList: any[] = [

]


export const chakraRegistry1: ComponentRegistry = {
  accordion: {
    component: Chakra.Accordion,
    schema: {
      Root: {
        type: 'object',
        properties: {
          asChild: {
            type: 'boolean',
          },
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
        },
      },
      ItemContent: {
        type: 'object',
        properties: {
          asChild: {
            type: 'boolean',
          },
        },
      },
      ItemIndicator: {
        props: {
          properties: {
            type: 'boolean',
          },
        },
      },
      Item: {
        props: {
          value: {
            type: 'string',
            isRequired: true,
          },
          asChild: {
            type: 'boolean',
          },
          disabled: {
            type: 'boolean',
          },
        },
      },
      ItemTrigger: {
        props: {
          asChild: {
            type: 'boolean',
          },
        },
      },
      RootProvider: {
        props: {
          value: {
            type: 'UseAccordionReturn',
            isRequired: true,
          },
          asChild: {
            type: 'boolean',
          },
          lazyMount: {
            type: 'boolean',
            defaultValue: 'false',
          },
          unmountOnExit: {
            type: 'boolean',
            defaultValue: 'false',
          },
        },
      },
    },
  },
  button: {
    component: Chakra.Button,
    schema: {

    }
  }
};
