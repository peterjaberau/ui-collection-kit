"use client"

import {
  DownloadTrigger as ArkDownloadTrigger,
  type DownloadTriggerBaseProps,
} from "@ui-kit/base/download-trigger"
import { type HTMLUIKitProps, createRecipeContext } from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const { withContext } = createRecipeContext({ key: "downloadTrigger" })

////////////////////////////////////////////////////////////////////////////////////

export interface DownloadTriggerProps
  extends HTMLUIKitProps<"button">,
    DownloadTriggerBaseProps {}

export const DownloadTrigger = withContext<
  HTMLButtonElement,
  DownloadTriggerProps
>(ArkDownloadTrigger, { forwardAsChild: true })
