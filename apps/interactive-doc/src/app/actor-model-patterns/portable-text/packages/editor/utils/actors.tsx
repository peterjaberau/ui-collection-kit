export const forEachActor = (actorRef: any, callback: (ref: any) => void) => {
  callback(actorRef)
  const children = actorRef.getSnapshot().children
  if (children) {
    Object.values(children).forEach((child) => {
      forEachActor(child as any, callback)
    })
  }
}

export const stopActor = (actorRef: any) => {
  const persistedSnapshots: any[] = []
  forEachActor(actorRef, (ref) => {
    persistedSnapshots.push([ref, ref.getSnapshot()])
    ;(ref as any).observers = new Set()
  })
  const systemSnapshot = actorRef.system.getSnapshot?.()

  actorRef.stop()
  ;(actorRef.system as any)._snapshot = systemSnapshot
  persistedSnapshots.forEach(([ref, snapshot]) => {
    ;(ref as any)._processingStatus = 0
    ;(ref as any)._snapshot = snapshot
  })
}
