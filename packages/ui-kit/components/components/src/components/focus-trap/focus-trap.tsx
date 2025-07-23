"use client"

import {
  type FocusTrapBaseProps,
  FocusTrap as FocusTrapPrimitive,
} from "@ui-kit/base/focus-trap"
import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface FocusTrapProps
  extends HTMLUIKitProps<"div">,
    FocusTrapBaseProps {}

export const FocusTrap = uikit(FocusTrapPrimitive)
