"use client"

import { Global } from "@emotion/react"
import { createContext } from "../create-context"
import type { SystemContext } from "./types"

const [UIKitContextProvider, useUIKitContext] = createContext<SystemContext>({
  name: "UIKitContext",
  strict: true,
  providerName: "<UIKitProvider />",
})

export interface UIKitProviderProps {
  value: SystemContext
  children: React.ReactNode
}

function UIKitProvider(props: UIKitProviderProps) {
  const { value: sys, children } = props
  return (
    <UIKitContextProvider value={sys}>
      {!sys._config.disableLayers && <Global styles={sys.layers.atRule} />}
      <Global styles={sys._global} />
      {children}
    </UIKitContextProvider>
  )
}

export { UIKitProvider, useUIKitContext }
