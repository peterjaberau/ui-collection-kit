"use client"
import { chakra, ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { get, unset } from "lodash-es"
import { createContext, ReactNode, useContext } from "react"
import { KeyArg, Recipe, EditorData } from "./types"
import { applyRecipe, parentPath } from "./util"
import { ThemeProvider, useTheme } from "./ThemeContext"
import { EditorConfigProvider, EditorConfig } from "./EditorConfigContext"
import { theme as uiTheme } from "../ui/theme"
import { Theme } from "../../types/theme"
import { DynamicControlsProvider } from "./DynamicPropertiesContext"
import { stylesToEditorSchema } from "../../lib/transformers/styles-to-editor-schema"

export interface EditorContextValue<V> extends EditorData<V> {
  theme?: Theme
  setValue(value: Recipe<V>): void
  getField<T = any>(key: KeyArg): T
  getParentField<T = any>(key: KeyArg): T
  setField<T>(key: KeyArg, value: Recipe<T>): void
  setFields<T>(fields: Record<string, Recipe<T>>, removeFields?: KeyArg[]): void
  removeField(key: KeyArg): void
  clearAll(): void
}

export function useEditor() {
  const context = useContext(EditorContext)
  const theme = useTheme()
  const { onChange: editComponentData, value } = context

  function getField<T = any>(field: KeyArg | undefined) {
    return field ? (get(value, field) as T) : value
  }

  function getParentField<T = any>(field: KeyArg | undefined) {
    if (!field || !Array.isArray(field)) {
      return value
    }

    return get(value, parentPath(field))
  }

  function getFields<T = any>(fields: KeyArg[] | undefined) {
    const fieldsValue = fields?.reduce((acc: any, curr: KeyArg) => {
      const fieldValue = get(value, curr) as T
      return fieldValue
        ? {
            ...acc,
            [`${curr}`]: fieldValue,
          }
        : acc
    }, {})

    return fieldsValue ?? value
  }

  function setField<T>(field: KeyArg, recipe: Recipe<T>) {
    editComponentData((draft) => {
      applyRecipe(draft.value, field, recipe)
    })
  }

  function setFields<T>(fields: Record<string, Recipe<T>>, removeFields?: KeyArg[]) {
    editComponentData((draft) => {
      if (removeFields) {
        removeFields.forEach((field) => {
          unset(draft.value, field)
        })
      }
      Object.entries(fields).map(([key, recipe]: any) => {
        applyRecipe(draft.value, key, recipe)
      })
    })
  }
  const onChange = setField

  const removeField = (field: KeyArg) => {
    editComponentData((draft) => {
      unset(draft.value, field)
    })
  }

  const clearAll = () => {
    editComponentData((draft) => {
      Object.keys(draft.value).map((key: string) => {
        unset(draft.value, key)
      })
    })
  }

  return {
    ...context,
    getField,
    getParentField,
    getFields,
    setField,
    setFields,
    onChange,
    removeField,
    clearAll,
    theme,
  }
}

interface EditorContextProviderValue<V> extends EditorData<V> {
  onChange(recipe: Recipe<EditorData<V>>): void
  onRemove?(): void
  theme?: Theme
}

const EditorContext = createContext<EditorContextProviderValue<any>>({
  value: {},
  onChange: () => {},
  onRemove: () => {},
})

export function EditorProvider<V>({
  children,
  theme,
  hideResponsiveControls,
  showAddProperties,
  value: providedValue,
  ...values
}:
  | (EditorContextProviderValue<V> & {
      hideResponsiveControls?: boolean
      showAddProperties?: boolean
      children: ReactNode
    })
  | any) {
  const outerTheme = useTheme()
  const editorConfig: EditorConfig = {
    hideResponsiveControls: hideResponsiveControls ?? false,
    showAddProperties: showAddProperties ?? false,
  }

  const value = stylesToEditorSchema(providedValue)

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={theme || outerTheme}>
        <EditorConfigProvider config={editorConfig}>
          <DynamicControlsProvider>
            <EditorContext.Provider value={{ value, ...values }}>{children}</EditorContext.Provider>
          </DynamicControlsProvider>
        </EditorConfigProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}
