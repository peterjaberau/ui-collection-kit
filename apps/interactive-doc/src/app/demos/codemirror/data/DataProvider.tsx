'use client'
import { createContext, FC, ReactNode, useContext, useState, useEffect, useMemo } from "react"

import { dataAppState, dataServices, dataPresets } from "./dataset"

const DataContext = createContext<any>({})

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        state: dataAppState,
        services: dataServices,
        presets: dataPresets,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)

export const useDataScope = (scope: string, key: string) => {
  const content = useData()
  return useMemo(() => content?.["state"]?.[scope]?.[key], [content, scope, key])
}
