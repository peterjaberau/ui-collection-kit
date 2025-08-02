import React from "react"
import format from "dateformat"
import { observer } from "@formily/reactive-react"
import { useWorkbench } from "../../hooks"
import { TextWidget } from "../TextWidget"
import cls from "classnames"
import { usePrefix } from "../../hooks"
import { Card, chakra } from "@chakra-ui/react"

export const HistoryWidget: React.FC = observer(() => {
  const workbench = useWorkbench()
  const currentWorkspace = workbench?.activeWorkspace || workbench?.currentWorkspace
  const prefix = usePrefix("history")
  if (!currentWorkspace) return null
  return (
    <>
      {currentWorkspace.history.list().map((item, index) => {
        const type = item.type || "default_state"
        const token = type.replace(/\:/g, "_")
        return (
          <chakra.div
            className={cls(prefix + "-item", {
              active: currentWorkspace.history.current === index,
            })}
            key={item.timestamp}
            onClick={() => {
              currentWorkspace.history.goTo(index)
            }}
          >
              <chakra.span className={prefix + "-item-title"}>
                <TextWidget token={`operations.${token}`} />
              </chakra.span>
            <chakra.span className={prefix + "-item-timestamp"}>{format(item.timestamp, "yy/mm/dd HH:MM:ss")}</chakra.span>
          </chakra.div>
        )
      })}
    </>
  )
})
