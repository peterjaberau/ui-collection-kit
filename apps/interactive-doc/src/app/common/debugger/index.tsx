"use client"
import { MovableModal } from "#app/components/panel/movableModal"
import JsonView from "react18-json-view"
import { useRootActor } from "#state-actors/hooks/useRootActor"
import { rootActorSelector } from "#state-actors/rootActor.selector"

export default function Debugger(props: any) {
  // const { rootContext } = useRootActor()
  const { root, rootRef, rootState, rootContext } = rootActorSelector()
  const { onClose, ...rest } = props

  return (
    <MovableModal
      defaultPosition={{
        x: 100,
        y: 100,
        width: 700,
        height: 800,
      }}
      title={"Debugger"}
      bodyContent={
        <JsonView
          src={{
            root,
            rootRef,
            rootState,
            rootContext
          }}
          collapsed={1}
          theme="github"
          displaySize
          displayArrayIndex
          style={{ fontSize: 13, fontWeight: "bold" }}
        />
      }
      onClose={onClose}
    />
  )
}
