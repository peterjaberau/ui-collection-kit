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
    }
  },
  globalSession: {},
  appSession: {},
  pageSession: {},
} as any
