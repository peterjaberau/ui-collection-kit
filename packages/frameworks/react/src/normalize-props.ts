import { createNormalizer } from "@ui-collection-kit/types"
import type { HTMLAttributes, CSSProperties, JSX } from "react"

type WithoutRef<T> = Omit<T, "ref">

type ElementsWithoutRef = {
  [K in keyof JSX.IntrinsicElements]: WithoutRef<JSX.IntrinsicElements[K]>
}

export type PropTypes = ElementsWithoutRef & {
  element: WithoutRef<HTMLAttributes<HTMLElement>>
  style: CSSProperties
}

export const normalizeProps = createNormalizer<PropTypes>((v) => v)
