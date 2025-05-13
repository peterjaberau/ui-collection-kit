import { createSystem, defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'

import { defaultThemeConfig } from './theme'
import { utilities } from '../../utils'

const defaultConfig = mergeConfigs(defaultBaseConfig, defaultThemeConfig)

/**
 * TODO: This is a temporary fix to add the utilities to the default config.
 */
defaultConfig.utilities = Object.assign(
  defaultConfig.utilities ?? {},
  utilities,
)

export const defaultSystem = createSystem({
  ...defaultConfig,
  cssVarsPrefix: 'saas',
})
export { defaultSystem as system, defaultConfig }
