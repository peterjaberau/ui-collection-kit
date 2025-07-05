import { chakra, Text, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import type { ComponentType, ReactNode } from "react"

const stylesRecipe = defineSlotRecipe({
  slots: ["root", "badgeContainer"],
  base: {
    root: {
      position: "relative",
      display: "flex",
    },
    badgeContainer: {
      position: "absolute",
      whiteSpace: "nowrap",
      insetBlockStart: "-0.5",
      insetInlineStart: "1.5",
      pointerEvents: "none",
    },
  },
})

type BadgeContainerProps = {
  id: string
  badge: ComponentType
  children: ReactNode
  isListItem?: boolean
}

export const BadgeContainer = ({ children, id: badgeId, badge: Badge, isListItem = true }: BadgeContainerProps) => {
  const recipe = useSlotRecipe({ recipe: stylesRecipe })
  const styles = recipe()

  return (
    <chakra.div css={styles.root} role={isListItem ? "listitem" : undefined}>
      {children}
      <chakra.div css={styles.badgeContainer} id={badgeId} aria-hidden>
        <Badge />
      </chakra.div>
    </chakra.div>
  )
}
