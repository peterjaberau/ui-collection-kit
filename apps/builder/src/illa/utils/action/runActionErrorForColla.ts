import {
  ActionContent,
  ActionType,
  ILLA_DRIVE_ACTION_REQUEST_TYPE,
} from "@/public/public-types"
// import {
//   CollarModalType,
//   handleCollaPurchaseError,
// } from "@/public/upgrade-modal"
import { getIsILLAProductMode } from "@/redux/config/configSelector"
import store from "@/store"
import { isDriveActionContent } from "../typeHelper"

const getReportElementByProduction = (isProduction: boolean, el: string) => {
  let prefix = isProduction ? "deploy_" : "builder_editor_"
  return `${prefix}${el}`
}

export const runActionErrorForColla = (
  actionType: ActionType,
  actionContent: ActionContent,
  error: unknown,
) => {
  const rootState = store.getState()
  const isProductionMode = getIsILLAProductMode(rootState)
  if (actionType === "aiagent") {
    console.log(
      "runActionErrorForColla: AI Agent action type is not supported yet.",
    )

    // return handleCollaPurchaseError(
    //   error,
    //   CollarModalType.TOKEN,
    //   getReportElementByProduction(
    //     isProductionMode,
    //     "token_not_enough_resource",
    //   ),
    // )
  }
  if (isDriveActionContent(actionType, actionContent)) {
    if (
      actionContent.operation ===
        ILLA_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_MULTIPLE ||
      actionContent.operation === ILLA_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_ONE
    ) {
      console.log(
        "runActionErrorForColla: Download action type is not supported yet.",
      )

      // return handleCollaPurchaseError(
      //   error,
      //   CollarModalType.TRAFFIC,
      //   getReportElementByProduction(
      //     isProductionMode,
      //     "traffic_not_enough_resource",
      //   ),
      // )
    } else if (
      actionContent.operation === ILLA_DRIVE_ACTION_REQUEST_TYPE.UPLOAD ||
      actionContent.operation === ILLA_DRIVE_ACTION_REQUEST_TYPE.UPLOAD_MULTIPLE
    ) {

      console.log(
        "runActionErrorForColla: Upload action type is not supported yet.",
      )

      // return handleCollaPurchaseError(
      //   error,
      //   CollarModalType.STORAGE,
      //   getReportElementByProduction(
      //     isProductionMode,
      //     "storage_not_enough_resource",
      //   ),
      // )
    }
  }
}
