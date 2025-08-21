'use client'
import { initApp } from "#lowcoder/util/commonUtils"

export const AppRenderer = (props: { children: React.ReactNode }) => {
  initApp();

  return <>{props.children}</>
}
