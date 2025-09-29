import { IGNORE_AUTO_RUN_WITH_RUN_SCRIPT_ATTR_RULES } from './constants'

export const isRunScriptAttr = (attrPath: string) => {
  return IGNORE_AUTO_RUN_WITH_RUN_SCRIPT_ATTR_RULES.some((rule) => {
    return rule.test(attrPath)
  })
}
