import type { Scope } from "@ui-collection-kit/core"
import { nextById, prevById, queryAll } from "@ui-collection-kit/dom-query"
import { first, last } from "@ui-collection-kit/utils"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `toggle-group:${ctx.id}`
export const getItemId = (ctx: Scope, value: string) => ctx.ids?.item?.(value) ?? `toggle-group:${ctx.id}:${value}`

export const getRootEl = (ctx: Scope) => ctx.getById(getRootId(ctx))
export const getElements = (ctx: Scope) => {
  const ownerId = CSS.escape(getRootId(ctx))
  const selector = `[data-ownedby='${ownerId}']:not([data-disabled])`
  return queryAll(getRootEl(ctx), selector)
}
export const getFirstEl = (ctx: Scope) => first(getElements(ctx))
export const getLastEl = (ctx: Scope) => last(getElements(ctx))
export const getNextEl = (ctx: Scope, id: string, loopFocus: boolean) => nextById(getElements(ctx), id, loopFocus)
export const getPrevEl = (ctx: Scope, id: string, loopFocus: boolean) => prevById(getElements(ctx), id, loopFocus)
