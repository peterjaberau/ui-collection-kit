"use client"
import { useEffect } from "react"
import { Stack } from "@chakra-ui/react"
import { useCurrentViewStore } from "#app/sureal/store/current-view"
import { useConfigStore } from "#app/sureal/store/config"
import { useDatabaseStore } from "#app/sureal/store/database"
import { useCloudStore } from "#app/sureal/store/cloud"
import { useInterfaceStore } from "#app/sureal/store/interface"
import { useQueryStore } from "#app/sureal/store/query"

// import { Sidebar } from './screens/sidebar'
// import { Sidebar } from './screens/sidebar/index'
import { Screen } from "./screens"

export default function Page() {
  const [viewId] = useCurrentViewStore((s: any) => s.context.viewId)
  const [configContext, configRef]: any = useConfigStore((s: any) => s)
  const [databaseContext, databaseRef] = useDatabaseStore((s: any) => s)
  const [cloudContext, cloudRef] = useCloudStore((s: any) => s)
  const [interfaceContext, interfaceRef] = useInterfaceStore((s: any) => s)
  const [queryContext, queryRef] = useQueryStore((s: any) => s)

  useEffect(() => {
    configRef.trigger.loadSample()
    databaseRef.trigger.loadSample()
    cloudRef.trigger.loadSample()
    interfaceRef.trigger.loadSample()
    queryRef.trigger.loadSample()

  }, [])

  return (
    <>
      <Screen />
    </>
  )
}
