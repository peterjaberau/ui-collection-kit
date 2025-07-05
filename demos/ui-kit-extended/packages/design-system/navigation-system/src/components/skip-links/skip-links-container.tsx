import { chakra, Text, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"

import { useSortedSkipLinks } from "../../context/skip-links/skip-links-data-context"
import { type SkipLinkData } from "../../context/skip-links/types"

import { SkipLink } from "./skip-link"

const stylesRecipe = defineSlotRecipe({
  slots: ["root", "skipLinkList"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5",
      paddingBlock: "1.5",
      paddingInline: "1.5",
      position: "fixed",
      insetInlineStart: "2.5",
      insetBlockStart: "2.5",
      backgroundColor: "bg.subtle",
      borderRadius: "md",
      boxShadow: "md",
      zIndex: -1,
      opacity: 0,
      pointerEvents: "none",
      "&:focus-within": {
        zIndex: "calc(infinity)",
        opacity: 1,
        pointerEvents: "auto",
      },
    },
    skipLinkList: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5",
      listStylePosition: "outside",
      listStyleType: "none",
      marginBlockStart: "0",
      paddingInlineStart: "0",
    },
  },
})

const closeOnEscape = (event: React.KeyboardEvent) => {
  if (event.key !== "Escape") {
    return
  }

  const activeElement = document.activeElement
  if (activeElement instanceof HTMLElement) {
    activeElement.blur()
  }
}

const isOnlyWhitespaceRegex = /^\s*$/

export const SkipLinksContainer = ({ label, testId }: { label: string; testId?: string }) => {
  const recipe = useSlotRecipe({ recipe: stylesRecipe })
  const styles = recipe()

  const sortedSkipLinks = useSortedSkipLinks()
  if (sortedSkipLinks.length === 0) {
    return null
  }

  const isEmptyLabel = isOnlyWhitespaceRegex.test(label)

  return (
    <chakra.div onKeyDown={closeOnEscape} css={styles.root}>
      {!isEmptyLabel && <Text fontWeight="bold">{label}</Text>}
      <chakra.ol css={styles.skipLinkList}>
        {sortedSkipLinks.map(({ id, label, onBeforeNavigate }: SkipLinkData) => (
          <SkipLink key={id} id={id} onBeforeNavigate={onBeforeNavigate}>
            {label}
          </SkipLink>
        ))}
      </chakra.ol>
    </chakra.div>
  )
}
