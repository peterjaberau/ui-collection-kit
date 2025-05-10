'use client'
import { createContext, ReactNode, useContext } from 'react'

const DEFAULT_EDITOR_CONFIG = {
  hideResponsiveControls: false,
  showAddProperties: false,
}

export type EditorConfig = {
  hideResponsiveControls?: boolean
  showAddProperties?: boolean
}

export function useEditorConfig() {
  const context = useContext(EditorConfigContext)
  return context
}

const EditorConfigContext = createContext<EditorConfig>(DEFAULT_EDITOR_CONFIG)

type EditorConfigProviderProps = {
  config?: EditorConfig
  children: ReactNode
}
export function EditorConfigProvider({
  config = DEFAULT_EDITOR_CONFIG,
  children,
}: EditorConfigProviderProps) {
  return (
    <EditorConfigContext.Provider value={config}>
      {children}
    </EditorConfigContext.Provider>
  )
}
