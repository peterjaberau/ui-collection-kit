import { defaultConfig } from '@chakra-ui/react';
import { defaultConfig as alignuiConfig } from '../../packages/styling/src/themes/alignui/preset';
import { defaultConfig as saasConfig } from '../../packages/styling/src/themes/saas/preset';

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
} as any
