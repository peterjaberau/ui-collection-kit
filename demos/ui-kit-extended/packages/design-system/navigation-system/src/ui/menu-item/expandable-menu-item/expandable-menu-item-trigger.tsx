import React, { forwardRef, type ReactNode, useCallback, useRef } from "react"
import { chakra, Text, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { useChakraContext } from "@chakra-ui/react"

import { IconButton, Icon } from "@chakra-ui/react"
import { LuChevronDown as ChevronDownIcon, LuChevronRight as ChevronRightIcon } from "react-icons/lu"

import { MenuItemBase, nestedOpenPopupCSSSelector } from "../menu-item"
import type { MenuItemCommonProps, MenuItemSlots } from "../types"
import { useScrollMenuItemIntoView } from "../use-scroll-menu-item-into-view"

import { useIsExpanded, useOnExpansionToggle, useSetIsExpanded } from "./expandable-menu-item-context"

type ExpandableMenuItemIconProps = {
  isExpanded: boolean
  isHovering: boolean
  isSelected?: boolean
  providedElemBefore?: ReactNode
  iconProps?: any
}

const chevronDisplayCssVar: string = "--expandable-chevron-display"
const providedElemBeforeDisplayCssVar: string = "--expandable-provided-elembefore-display"

const wrapperStyles = defineSlotRecipe({
  className: "expandable-menu-item-trigger",
  slots: ["root", "showProvidedElemBefore"],
  base: {
    root: {
      [chevronDisplayCssVar]: "flex",
      [providedElemBeforeDisplayCssVar]: "none",
    } as any,
    showProvidedElemBefore: {
      [chevronDisplayCssVar]: "none",
      [providedElemBeforeDisplayCssVar]: "contents",

      _hover: {
        [chevronDisplayCssVar]: "flex",
        [providedElemBeforeDisplayCssVar]: "none",
      } as any,

      _focusVisible: {
        [chevronDisplayCssVar]: "flex",
        [providedElemBeforeDisplayCssVar]: "none",
      } as any,

      "&:has(:focus-visible)": {
        [chevronDisplayCssVar]: "flex",
        [providedElemBeforeDisplayCssVar]: "none",
      } as any,

      [nestedOpenPopupCSSSelector]: {
        [chevronDisplayCssVar]: "flex",
        [providedElemBeforeDisplayCssVar]: "none",
      },
    },
  },
})

const iconStyles = defineSlotRecipe({
  slots: ["chevron", "providedElemBefore"],
  base: {
    chevron: {
      display: `var(${chevronDisplayCssVar})`,
      '[dir="rtl"] &': {
        transform: "scaleX(-1)",
      },
    },
    providedElemBefore: {
      display: `var(${providedElemBeforeDisplayCssVar})`,
    },
  },
})

const ExpandableMenuItemIcon = ({
  iconProps,
  isExpanded,
  isSelected,
  providedElemBefore,
}: Omit<ExpandableMenuItemIconProps, "isHovering">): any => {
  const recipe = useSlotRecipe({ recipe: iconStyles })
  const styles = recipe()

  const ChevronIcon = isExpanded ? ChevronDownIcon : ChevronRightIcon

  const chevronElem = (
    <Icon size={"sm"} color={isSelected ? "colorPalette.muted" : undefined} {...iconProps}>
      <ChevronIcon />
    </Icon>
  )

  // @ts-ignore
  return (
    <>
      <chakra.div css={{ ...styles.chevron }}>{chevronElem}</chakra.div>
      {providedElemBefore && <chakra.div css={{ ...styles.providedElemBefore }}>{providedElemBefore}</chakra.div>}
    </>
  )
}

export type ExpandableMenuItemTriggerProps = MenuItemCommonProps &
  Omit<MenuItemSlots, "actionsOnHover" | "elemBefore"> & {
    actionsOnHover?: ReactNode
    elemBefore?: ReactNode
    isSelected?: boolean
    href?: string
    onClick?: (
      event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      analyticsEvent: any, //UIAnalyticsEvent
      analyticsAttributes: { isExpanded: boolean },
    ) => void
  }

export const ExpandableMenuItemTrigger = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ExpandableMenuItemTriggerProps
>(
  (
    {
      actions,
      isSelected,
      href,
      elemBefore: providedElemBefore,
      elemAfter,
      actionsOnHover,
      onClick,
      children,
      testId,
      interactionName,
      isContentTooltipDisabled,
      visualContentRef,
      isDragging,
      hasDragIndicator,
      dropIndicator,
    },
    forwardedRef,
  ) => {

    const recipe = useSlotRecipe({ recipe: wrapperStyles })
    const styles = recipe()



    const onExpansionToggle = useOnExpansionToggle()
    const isExpanded = useIsExpanded()
    const setIsExpanded = useSetIsExpanded()
    const itemRef: any = useRef<HTMLDivElement>(null)

    const handleIconClick = useCallback(() => {
      onExpansionToggle?.(!isExpanded)
      setIsExpanded(!isExpanded)
    }, [isExpanded, onExpansionToggle, setIsExpanded])

    const handleMenuContentClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, analyticsEvent: any) => {
        const newValue = !isExpanded
        onClick?.(event, analyticsEvent, { isExpanded: newValue })
        onExpansionToggle?.(newValue)
        setIsExpanded(newValue)
      },
      [onClick, onExpansionToggle, isExpanded, setIsExpanded],
    )

    const isSelectable = typeof href !== "undefined"

    useScrollMenuItemIntoView({
      elementRef: itemRef,
      isSelected: Boolean(isSelectable && isSelected),
    })

    // Wrapped in an IconButton if the expandable menu item trigger is selectable
    const elemBefore = isSelectable ? (
      <IconButton
        aria-label={isExpanded ? "Collapse" : "Expand"}
        variant="ghost" // similar to Atlaskit "subtle"
        size="sm" // matches Atlaskit "compact"
        onClick={handleIconClick}
      >
        <ExpandableMenuItemIcon
          isExpanded={isExpanded}
          isSelected={isSelected}
          providedElemBefore={providedElemBefore}
        />
      </IconButton>
    ) : (
      <ExpandableMenuItemIcon isExpanded={isExpanded} isSelected={isSelected} providedElemBefore={providedElemBefore} />
    )

    // For expandable menu items, we shouldn't wrap in a `li` here. The `li` is instead at a higher level (`ExpandableMenuItem`), grouping the expandable menu item trigger and its content
    return (
      <chakra.div
        css={{
          ...styles.root,
          ...(providedElemBefore && styles.showProvidedElemBefore),
        }}
        ref={itemRef}
      >
        <MenuItemBase
          actions={actions}
          actionsOnHover={actionsOnHover}
          elemBefore={elemBefore}
          ariaExpanded={isExpanded}
          elemAfter={elemAfter}
          href={href}
          isSelected={isSelected}
          onClick={handleMenuContentClick}
          ref={forwardedRef}
          visualContentRef={visualContentRef}
          testId={testId}
          interactionName={interactionName}
          isContentTooltipDisabled={isContentTooltipDisabled}
          isDragging={isDragging}
          hasDragIndicator={hasDragIndicator}
          dropIndicator={dropIndicator}
        >
          {children}
        </MenuItemBase>
      </chakra.div>
    )
  },
)
