'use client'
import { Stack } from "@chakra-ui/react"
import { useCurrentViewStore } from "#app/sureal/store/current-view"
// import { Sidebar } from './screens/sidebar'
// import { Sidebar } from './screens/sidebar/index'
import { Screen } from './screens'



export default function Page() {
  const [viewId] = useCurrentViewStore((s: any) => s.context.viewId)

  return (
    <>
      <Screen/>
    </>
  );
}
