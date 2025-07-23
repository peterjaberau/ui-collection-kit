"use client"

import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { QuoteIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useBlockquoteStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "blockquote" })

export { useBlockquoteStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface BlockquoteRootBaseProps extends SlotRecipeProps<"blockquote">, UnstyledProp {}

export interface BlockquoteRootProps extends HTMLUIKitProps<"figure", BlockquoteRootBaseProps> {}

export const BlockquoteRoot = withProvider<HTMLElement, BlockquoteRootProps>("figure", "root")

////////////////////////////////////////////////////////////////////////////////////

export const BlockquotePropsProvider = PropsProvider as React.Provider<BlockquoteRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface BlockquoteContentProps extends HTMLUIKitProps<"blockquote"> {}

export const BlockquoteContent = withContext<HTMLElement, BlockquoteContentProps>("blockquote", "content")

////////////////////////////////////////////////////////////////////////////////////

export interface BlockquoteCaptionProps extends HTMLUIKitProps<"figcaption"> {}

export const BlockquoteCaption = withContext<HTMLElement, BlockquoteCaptionProps>("figcaption", "caption")

////////////////////////////////////////////////////////////////////////////////////

export interface BlockquoteIconProps extends HTMLUIKitProps<"svg"> {}

export const BlockquoteIcon = withContext<SVGElement, BlockquoteIconProps>(QuoteIcon, "icon")
