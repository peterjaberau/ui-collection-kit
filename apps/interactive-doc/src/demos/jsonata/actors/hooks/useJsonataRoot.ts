import { useSelector } from "@xstate/react"
import { useJsonata } from "./useJsonata"

export const useJsonataRoot = () => {
  const { jsonataRef } = useJsonata()

  const jsonataRootRef = jsonataRef.system.get("jsonata-root")

  const jsonataState: any = useSelector(jsonataRootRef, (state) => state)
  const jsonataContext = jsonataState.context
  const sendToJsonataRoot = jsonataRootRef.send

  const stateValue = jsonataState?.value

  const source = jsonataContext.source
  const transformer = jsonataContext.transformer
  const result = jsonataContext.result


  return {
    jsonataRootRef,
    jsonataState,
    jsonataContext,
    sendToJsonataRoot,

    source,
    transformer,
    result,
  }
}
