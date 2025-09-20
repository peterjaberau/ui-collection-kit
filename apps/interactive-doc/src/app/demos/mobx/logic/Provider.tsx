'use client'

import React, { useState, useEffect } from 'react'
import { StoreContext } from './store/Hooks'
import { setupStore, AppStore } from './store/Store'

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [store, setStore] = useState<AppStore | null>(null)

  useEffect(() => {
    setupStore().then((s) => setStore(s))
  }, [])

  if (!store) {
    return <div>Loading store...</div> // or null/spinner
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}
