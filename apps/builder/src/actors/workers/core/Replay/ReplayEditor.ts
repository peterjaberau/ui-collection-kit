import type { Diff } from "deep-diff";
import type { Action } from "entities/Action";
import ReplayEntity from ".";
import { pathArrayToString } from "./replayUtils";
import isEmpty from "lodash/isEmpty";


export default class ReplayEditor extends ReplayEntity<any> {
  constructor(entity: any, entityType: any) {
    super(entity, entityType);
  }

  public processDiff(
    diff: any,
    replay: any,
    isUndo: boolean,
  ): void {
    if (!diff || !diff.path || !diff.path.length) return;

    replay.updates = (replay.updates || []).concat(
      this.getChanges(diff, isUndo) || [],
    );
  }

  private getChanges(
    diff: any,
    isUndo: boolean,
  ): any {
    const { kind, path } = diff;

    if (diff.kind === "N") {
      if (isEmpty(diff.rhs)) return;

      return {
        modifiedProperty: pathArrayToString(path),
        update: diff.rhs,
        kind,
      };
    } else if (diff.kind === "A") {
      return {
        modifiedProperty: pathArrayToString(path),
        update: diff.item,
        index: diff.index,
        kind,
        isUndo,
      };
    } else if (diff.kind === "E") {
      return {
        modifiedProperty: pathArrayToString(path),
        update: isUndo ? diff.lhs : diff.rhs,
        kind,
      };
    }

    return {
      modifiedProperty: pathArrayToString(path),
      update: diff.lhs,
      kind,
    };
  }
}
