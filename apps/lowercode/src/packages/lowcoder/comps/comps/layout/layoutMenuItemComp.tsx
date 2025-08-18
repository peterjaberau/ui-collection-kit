// @ts-nocheck
import { MultiBaseComp } from "#lowcoder-core/index"
import { BoolCodeControl, StringControl } from "#lowcoder/comps/controls/codeControl"
import { valueComp } from "#lowcoder/comps/generators"
import { list } from "#lowcoder/comps/generators/list"
import { parseChildrenFromValueAndChildrenMap, ToInstanceType, ToViewReturn } from "#lowcoder/comps/generators/multi"
import _ from "lodash"
import { ReactNode } from "react"
import { IconControl } from "#lowcoder/comps/controls/iconControl"
import { hiddenPropertyView } from "#lowcoder/comps/utils/propertyUtils"
import { trans } from "#lowcoder/i18n"
import { genRandomKey } from "#lowcoder/comps/utils/idGenerator"
import { LayoutActionComp } from "#lowcoder/comps/comps/layout/layoutActionComp"
import { migrateOldData } from "#lowcoder/comps/generators/simpleGenerators"

const childrenMap: any = {
  label: StringControl,
  hidden: BoolCodeControl,
  action: LayoutActionComp,
  itemKey: valueComp<string>(""),
  icon: IconControl,
}

type ChildrenType = ToInstanceType<typeof childrenMap> & {
  items: InstanceType<typeof LayoutMenuItemListComp>
}

/**
 * copy from navItemComp,
 * FIXME: refactor it more general
 */
export class LayoutMenuItemComp extends MultiBaseComp<ChildrenType> {
  override getView() {
    return _.mapValues(this.children, (c) => c.getView()) as ToViewReturn<ChildrenType>
  }

  override getPropertyView(): ReactNode {
    return (
      <>
        {this.children.action.propertyView({
          onAppChange: (label: any) => {
            label && this.children.label.dispatchChangeValueAction(label)
          },
        })}
        {this.children.label.propertyView({ label: trans("label") })}
        {this.children.icon.propertyView({
          label: trans("icon"),
          tooltip: trans("aggregation.iconTooltip"),
        })}
        {hiddenPropertyView((this as any).children)}
      </>
    )
  }

  override parseChildrenFromValue(params: any) {
    return parseChildrenFromValueAndChildrenMap(params, {
      ...childrenMap,
      items: LayoutMenuItemListComp,
    }) as unknown as ChildrenType
  }

  protected override ignoreChildDefaultValue() {
    return true
  }

  addSubItem(value: any) {
    this.children.items.addItem(value)
  }

  getItemKey() {
    return this.children.itemKey.getView()
  }
}

const LayoutMenuItemCompMigrate: any = migrateOldData(LayoutMenuItemComp, (oldData: any) => {
  if (oldData && oldData.hasOwnProperty("app")) {
    const migrateKeys = ["app", "queryParam", "hashParam", "hideWhenNoPermission"]
    const notChangeData = _.omit(oldData, migrateKeys)
    const oldAppData = _.pick(oldData, migrateKeys)
    return {
      ...notChangeData,
      action: {
        compType: "openApp",
        comp: oldAppData,
      },
      itemKey: oldData.app?.appId || genRandomKey(),
    }
  } else {
    return oldData
  }
}) as any


export class LayoutMenuItemListComp extends list(LayoutMenuItemCompMigrate) {
  addItem(value?: any) {
    const data: any = this.getView()

    this.dispatch(
      this.pushAction(
        value
          ? {
              ...value,
              itemKey: value.itemKey || genRandomKey(),
            }
          : {
              label: trans("menuItem") + " " + (data.length + 1),
              itemKey: genRandomKey(),
            },
      ),
    )
  }

  deleteItem(index: number) {
    this.dispatch(this.deleteAction(index))
  }

  moveItem(from: number, to: number) {
    this.dispatch(this.arrayMoveAction(from, to))
  }
}
