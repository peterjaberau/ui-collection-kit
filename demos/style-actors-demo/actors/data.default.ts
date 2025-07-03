import { defineConfig, defaultConfig } from '@chakra-ui/react';
import { defaultConfig as alignuiConfig } from '@ui-collection-kit/styling/alignui/preset';
import { defaultConfig as saasConfig } from '@ui-collection-kit/styling/saas/preset';


export default {
  definitions: {
    styles: {
      default: {
        config: defaultConfig,
        prefix: 'default'
      },
      alignui: {
        config: alignuiConfig,
        prefix: 'alignui'
      },
      saas: {
        config: saasConfig,
        prefix: 'saas'
      }
    },

  },
  mocking: {
   dataTransformUtils: {
     getDynamicVariables: {
       input: "Hello, {{name}}! Welcome to {{city}}.",
       output: ["{{name}}", "{{city}}"],
       desciption: ""
     },
     extractAndReplaceReferencesFromString: {
       meta: {
         params: {
           str: "{Object} The string containing references to be replaced",
           componentIdMap: "{Object} A map of component IDs to their names.",
           queryIdMap: "{Object} A map of query IDs to their names"
         },
         output: "An object containing the formatted string with IDs, all references, and the original string without brackets."
       },
       input: {
         str: "",
         componentIdMap: "",
         queryIdMap: ""
       }
     }
   }
  },
  globalSession: {},
  appSession: {},
  pageSession: {},
} as any
