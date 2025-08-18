import { each } from "#packages/shared"
import { isBehaviorHost } from "#packages/core"

export const reSortBehaviors = (target: any[], sources: any) => {
  const findTargetBehavior = (behavior: any) => target.includes(behavior)
  const findSourceBehavior = (name: any) => {
    for (let key in sources) {
      const { Behavior } = sources[key]
      for (let i = 0; i < Behavior.length; i++) {
        if (Behavior[i].name === name) return Behavior[i]
      }
    }
  }
  each(sources, (item: any) => {
    if (!item) return
    if (!isBehaviorHost(item)) return
    const { Behavior } = item
    each(Behavior, (behavior) => {
      if (findTargetBehavior(behavior)) return
      const name = behavior.name
      each(behavior.extends, (dep) => {
        const behavior = findSourceBehavior(dep)
        if (!behavior) throw new Error(`No ${dep} behavior that ${name} depends on`)
        if (!findTargetBehavior(behavior)) {
          target.unshift(behavior)
        }
      })
      target.push(behavior)
    })
  })
}
