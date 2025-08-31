import { promisify } from "./utils/Promisify"
import { NavigationTargetType } from "#actor-constants"

function navigateToFnDescriptor(
  pageNameOrUrl: string,
  params: Record<string, string>,
  target = NavigationTargetType.SAME_WINDOW,
) {
  return {
    type: "NAVIGATE_TO" as const,
    payload: { pageNameOrUrl, params, target },
  }
}

async function navigateTo(...args: Parameters<typeof navigateToFnDescriptor>) {
  return promisify(navigateToFnDescriptor)(...args)
}

export default navigateTo
