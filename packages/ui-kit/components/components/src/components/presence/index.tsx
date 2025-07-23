import type { Assign } from "@ui-kit/base"
import { Presence as ArkPresence, type PresenceProps as ArkPresenceProps } from "@ui-kit/base/presence"
import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface PresenceProps extends Assign<HTMLUIKitProps<"div">, ArkPresenceProps> {}

export const Presence = uikit(ArkPresence)
