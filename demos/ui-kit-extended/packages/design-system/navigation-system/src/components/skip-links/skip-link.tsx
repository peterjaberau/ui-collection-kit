import React, { type ReactNode, useCallback } from "react"

import { bind } from "bind-event-listener"

import { chakra, Link as Anchor } from "@chakra-ui/react"

import type { SkipLinkData } from "../../context/skip-links/types"

function focusElement(element: any) {
  element.setAttribute("tabindex", "-1")
  bind(element, {
    type: "blur",
    listener() {
      element.removeAttribute("tabindex")
    },
    options: {
      once: true,
    },
  })
  element.focus({
    focusVisible: true,
  })
}

export const SkipLink = ({
  id,
  children,
  onBeforeNavigate,
}: {
  id: string
  children: ReactNode
  onBeforeNavigate?: SkipLinkData["onBeforeNavigate"]
}) => {
  const href = `#${id}`

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()

      const target = document.getElementById(id)
      if (!target) {
        return
      }
      onBeforeNavigate?.()

      focusElement(target)
      window.scrollTo(0, 0)
    },
    [id, onBeforeNavigate],
  )

  return (
    <chakra.li
      css={{
        marginBlockStart: "0",
      }}
    >
      <Anchor tabIndex={0} href={href} onClick={onClick}>
        {children}
      </Anchor>
    </chakra.li>
  )
}
