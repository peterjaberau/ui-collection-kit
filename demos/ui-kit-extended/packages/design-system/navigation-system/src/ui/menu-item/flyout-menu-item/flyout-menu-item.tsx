import React, { forwardRef, type ReactNode, useEffect } from "react"
import { chakra, Popover as Popup } from "@chakra-ui/react"
import useControlled from "#design-system/ds-lib/hooks/use-controlled"
import usePreviousValue from "#design-system/ds-lib/hooks/use-previous-value"
// import { Popup } from '@atlaskit/popup/experimental';

import { MenuListItem } from "../menu-list-item"

import { IsOpenContext, SetIsOpenContext } from "./flyout-menu-item-context"

export type FlyoutMenuItemProps = {
  children: ReactNode
  id?: string
  isOpen?: boolean
  isDefaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const FlyoutMenuItem = forwardRef<HTMLDivElement, FlyoutMenuItemProps>(
  ({ children, id, isOpen: isOpenControlled, isDefaultOpen = false, onOpenChange }, forwardedRef) => {
    const [isOpen, setIsOpen] = useControlled(isOpenControlled, () => isDefaultOpen)

    const previousIsOpen = usePreviousValue(isOpen)

    useEffect(() => {
      if (previousIsOpen === undefined || previousIsOpen === isOpen) {
        return
      }

      onOpenChange?.(isOpen)
    }, [isOpen, onOpenChange, previousIsOpen])

    return (
      <IsOpenContext.Provider value={isOpen}>
        <SetIsOpenContext.Provider value={setIsOpen}>
          <MenuListItem ref={forwardedRef}>
            <Popup.Root id={id} open={isOpen}>
              {children}
            </Popup.Root>
          </MenuListItem>
        </SetIsOpenContext.Provider>
      </IsOpenContext.Provider>
    )
  },
)
