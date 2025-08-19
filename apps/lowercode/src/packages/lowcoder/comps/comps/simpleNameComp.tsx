import { CompAction, CompActionTypes, isBroadcastAction, RenameAction } from "#lowcoder-core/index";
import { valueComp } from "../generators";

const ValueComp: any = valueComp<string>("");
/**
 * Represents a name, supports rename
 */
export class SimpleNameComp extends ValueComp {
  // @ts-ignore
  override reduce(action: CompAction): this {
    if (isBroadcastAction<RenameAction>(action, CompActionTypes.RENAME)) {
      if (this.getView() === action.action.oldName) {
        return super.reduce(this.changeValueAction(action.action.name)) as any;
      }
    }
    return super.reduce(action) as any;
  }
}
