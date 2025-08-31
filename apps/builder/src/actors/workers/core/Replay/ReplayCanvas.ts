import ReplayEntity from "./index"
import { set } from "lodash"
import { addToArray, FOCUSES, setPropertyUpdate, TOASTS, UPDATES, WIDGETS } from "./replayUtils"
import { ENTITY_TYPE } from "#actor-constants"

const positionProps = [
  "leftColumn",
  "rightColumn",
  "topRow",
  "bottomRow",
  "minHeight",
  "parentColumnSpace",
  "parentRowSpace",
  "children",
  "parentId",
  "renderMode",
  "detachFromLayout",
  "noContainerOffset",
  "isCanvas",
  "height",
]

function isPositionUpdate(widgetProperty: string) {
  return positionProps.indexOf(widgetProperty) !== -1
}

export default class ReplayCanvas extends ReplayEntity<any> {
  public constructor(entity: any) {
    super(entity, ENTITY_TYPE.WIDGET)
  }

  public processDiff(diff: any, replay: any, isUndo: boolean) {
    if (!diff || !diff.path || !diff.path.length || diff.path[1] === "0") return

    if (diff.path.indexOf("widgets") > -1) {
      return this.processDiffForWidgets(diff, replay, isUndo)
    }

    if (diff.path.indexOf("theme") > -1) {
      return this.processDiffForTheme(diff, replay)
    }
  }

  public processDiffForTheme(diff: any, replay: any) {
    if (!diff || !diff.path || !diff.path.length || diff.path[1] === "0") return

    set(replay, "theme", true)

    if (diff.path.join(".") === "theme.name") {
      set(replay, "themeChanged", true)
    }
  }

  public processDiffForWidgets(diff: any, replay: any, isUndo: boolean) {
    if (!diff || !diff.path || !diff.path.length || diff.path[1] === "0") return

    const widgetId = diff.path[1]

    switch (diff.kind) {
      // new elements is added in dsl
      case "N":
        if (diff.path.length == 2) {
          const toast = this.createToast(diff.rhs, this.entity.widgets[widgetId], widgetId, isUndo, !isUndo)

          addToArray(replay, TOASTS, toast)
        } else {
          setPropertyUpdate(replay, [WIDGETS, widgetId, UPDATES], diff.path)
        }

        break
      // element is deleted in dsl
      case "D":
        if (diff.path.length == 2) {
          const toast = this.createToast(diff.lhs, this.entity.widgets[widgetId], widgetId, isUndo, isUndo)

          addToArray(replay, TOASTS, toast)
        } else {
          setPropertyUpdate(replay, [WIDGETS, widgetId, UPDATES], diff.path)
        }

        break
      // element is edited
      case "E":
        if (isPositionUpdate(diff.path[diff.path.length - 2])) {
          set(replay, [WIDGETS, widgetId, FOCUSES], true)
        } else {
          setPropertyUpdate(replay, [WIDGETS, widgetId, UPDATES], diff.path)
        }

        break
      default:
        break
    }
  }

  private createToast(diffWidget: any, dslWidget: any, widgetId: string, isUndo: boolean, isCreated: boolean) {
    const widgetName = isCreated ? diffWidget.widgetName : dslWidget?.widgetName

    return {
      isCreated,
      isUndo,
      widgetName,
      widgetId,
    }
  }
}
