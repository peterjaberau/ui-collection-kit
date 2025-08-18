import { ActionSelectorControl } from "#lowcoder/comps/controls/actionSelector/actionSelectorControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { withParams } from "#lowcoder/comps/generators/withParams";
import { CompAction, customAction, isCustomAction } from "#lowcoder-core/index";
import { getPromiseAfterDispatch } from "#lowcoder/util/promiseUtils";
import ModuleMethodParamListComp from "./moduleMethodParamListComp";

export const WithParamsActionControl: any = withParams(ActionSelectorControl, []);

const childrenMap: any = {
  name: CompNameControl,
  action: WithParamsActionControl,
  params: ModuleMethodParamListComp,
};

const ModuleMethodListItemBase: any = new MultiCompBuilder(childrenMap, (props) => props).build();

const ExecuteMethodActionType = "execute_module_method";

interface ExecuteMethodAction {
  type: typeof ExecuteMethodActionType;
}

export class ModuleMethodListItemComp extends ModuleMethodListItemBase {
  async execute(params: any[]) {
    const paramsMap: Record<string, any> = {};
    this.children.params.getView().forEach((param: any, idx: any) => {
      const defaultValue = param.children.defaultValue.getView();
      const paramName = param.children.name.getView();
      paramsMap[paramName] = params[idx] ?? defaultValue;
    });

    await getPromiseAfterDispatch(
      this.children.action.dispatch,
      WithParamsActionControl.setPartialParamDataAction(paramsMap),
      { autoHandleAfterReduce: true }
    );
    return getPromiseAfterDispatch(
      this.dispatch,
      customAction<ExecuteMethodAction>({ type: "execute_module_method" }, false),
      { autoHandleAfterReduce: true }
    );
  }

  realExecute() {
    const actionHandler = this.children.action.getView();
    if (!actionHandler) {
      return;
    }
    return actionHandler();
  }

  reduce(action: CompAction<any>): this {
    if (isCustomAction<ExecuteMethodAction>(action, ExecuteMethodActionType)) {
      this.realExecute();
      return this;
    }
    return super.reduce(action);
  }
}
