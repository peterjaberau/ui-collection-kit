import { JSONValue } from "#lowcoder/util/jsonTypes"
import { changeValueAction, CustomAction, multiChangeAction } from "#lowcoder-core/index"
import { ConstructorToDataType } from "#lowcoder-core/index"
import { sameTypeMap, stateComp, valueComp } from "#lowcoder/comps/generators"
import { MultiCompBuilder } from "#lowcoder/comps/generators/multi"
import { addMapChildAction, multiMapAction } from "#lowcoder/comps/generators/sameTypeMap"
import { NameGenerator } from "#lowcoder/comps/utils"
import { genRandomKey } from "#lowcoder/comps/utils/idGenerator"
import { DEFAULT_POSITION_PARAMS, Layout, LayoutItem, PositionParams } from "#lowcoder/layout"
import _ from "lodash"
import { GridItemComp, GridItemDataType } from "../gridItemComp"
import { IContainer, isContainer } from "./iContainer"
import { CompTree, getCompTree } from "./utils"

const children = {
  layout: valueComp<Layout>({}),
  items: sameTypeMap(GridItemComp),
  positionParams: stateComp<PositionParams>(DEFAULT_POSITION_PARAMS),
}

const SimpleContainerTmpComp: any = new MultiCompBuilder(children, (props, dispatch) => {
  return {
    ...props,
    dispatch: dispatch,
  }
})
  .setPropertyViewFn(() => <></>)
  .build()

// @ts-ignore
export class SimpleContainerComp extends SimpleContainerTmpComp implements IContainer {
  realSimpleContainer(key?: string): SimpleContainerComp | any {
    const compMap = this.children.items.children
    if (_.isNil(key) || compMap.hasOwnProperty(key)) {
      return this
    }
  }
  getCompTree(): CompTree {
    const compMap = this.children.items.children
    return getCompTree(compMap)
  }
  findContainer(key: string): IContainer | undefined {
    const compMap: any = this.children.items.children
    if (compMap.hasOwnProperty(key)) {
      return this as any
    }
    for (const childComp of Object.values(compMap)) {
      if (isContainer((childComp as any).children.comp)) {
        const childResult = (childComp as any).children.comp?.findContainer?.(key)
        if (childResult) {
          return childResult
        }
      }
    }
    return undefined
  }
  getPasteValue(nameGenerator: NameGenerator): JSONValue {
    let compMap = this.children.items.children

    const keyMap = _.mapValues(compMap, () => genRandomKey())
    let layout = this.children.layout.getView()
    layout = _.mapKeys(layout, (_, key) => keyMap[key])
    layout = _.mapValues(layout, (item, key) => ({ ...item, i: key }))
    compMap = _.mapKeys(compMap, (_, key) => keyMap[key])

    const newJSONValue = _.mapValues(compMap, (comp) => {
      const compValue = isContainer(comp.children.comp)
        ? (comp.children.comp as any).getPasteValue(nameGenerator)
        : comp.children.comp.toJsonValue()
      const name = nameGenerator.genItemName(comp.children.compType.getView())
      return { ...comp.toJsonValue(), name, comp: compValue }
    })

    const finalValue = {
      ...this.toJsonValue(),
      items: newJSONValue,
      layout,
    }
    // log.debug("getPasteValue. origin: ", this.toJsonValue(), " result: ", finalValue);
    return finalValue as any
  }
}

export function toSimpleContainerData(
  infos: {
    item: GridItemDataType
    layoutItem: LayoutItem
  }[],
): ConstructorToDataType<typeof SimpleContainerComp> {
  const layout: Layout = {}
  const items: Record<string, GridItemDataType> = {}
  infos.forEach((info) => {
    const key = genRandomKey()
    layout[key] = { ...info.layoutItem, i: key }
    items[key] = info.item
  })
  return {
    layout: layout,
    items: items,
  }
}

export function simpleContainerAddAction(
  currentLayout: Layout,
  infos: {
    item: GridItemDataType
    layoutItem: LayoutItem
  }[],
) {
  const data: any = toSimpleContainerData(infos)
  return multiChangeAction({
    layout: changeValueAction(
      {
        ...currentLayout,
        ...data.layout,
      },
      true,
    ),
    items: multiMapAction(
      Object.entries(data.items ?? {}).map(([key, value]: any) => addMapChildAction(key, value) as CustomAction),
    ),
  })
}
