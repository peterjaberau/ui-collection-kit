import {
  CompAction,
  ExecuteQueryAction,
  routeByNameAction,
  executeQueryAction,
  CompActionTypes,
  isCustomAction,
  isMyCustomAction,
  CustomAction,
} from "#lowcoder-core/index";
import { MethodConfig, ExecuteAction } from "#lowcoder/comps/controls/actionSelector/executeCompTypes";
import {
  JSONValueControl,
  StringControl,
  ArrayControl,
  NumberControl,
  BoolCodeControl,
  codeControl,
} from "#lowcoder/comps/controls/codeControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { dropdownControl } from "#lowcoder/comps/controls/dropdownControl";
import QuerySelectControl from "#lowcoder/comps/controls/querySelectControl";
import { withType, MultiCompBuilder } from "#lowcoder/comps/generators";
import { simpleValueComp } from "#lowcoder/comps/generators/hookToComp";
import { withExposingRaw } from "#lowcoder/comps/generators/withExposing";
import { getReduceContext } from "#lowcoder/comps/utils/reduceContext";
import { FunctionNode, CodeNode, fromRecord, Node } from "#lowcoder-core/index";
import { Fragment, useEffect } from "react";
import { setFieldsNoTypeCheck } from "#lowcoder/util/objectUtils";
import { handlePromiseAndDispatch } from "#lowcoder/util/promiseUtils";
import { trans } from "#lowcoder/i18n";
import { controlItem } from "#lowcoder-design/index";

export enum InputTypeEnum {
  Data = "data",
  String = "string",
  Array = "array",
  Number = "number",
  Boolean = "boolean",
  Query = "query",
}

export const inputControls: any = {
  [InputTypeEnum.Data]: JSONValueControl,
  [InputTypeEnum.String]: StringControl,
  [InputTypeEnum.Array]: ArrayControl,
  [InputTypeEnum.Number]: NumberControl,
  [InputTypeEnum.Boolean]: BoolCodeControl,
  [InputTypeEnum.Query]: QuerySelectControl,
};

export const defaultValueControls: any = {
  ...inputControls,
  [InputTypeEnum.Query]: simpleValueComp({ data: null }),
};

export const testControls: any = {
  ...inputControls,
};

const typeOptions = [
  {
    label: trans("module.data"),
    value: InputTypeEnum.Data,
  },
  {
    label: trans("module.string"),
    value: InputTypeEnum.String,
  },
  {
    label: trans("module.number"),
    value: InputTypeEnum.Number,
  },
  {
    label: trans("module.array"),
    value: InputTypeEnum.Array,
  },
  {
    label: trans("module.boolean"),
    value: InputTypeEnum.Boolean,
  },
  {
    label: trans("module.query"),
    value: InputTypeEnum.Query,
  },
];

interface TestViewProps {
  itemComp: InputCompWithMethods;
}

function TestView(props: TestViewProps) {
  const { itemComp } : any = props;
  const { name, type, description } = itemComp.getView();
  const testType = itemComp.children.test.children.compType.getView();
  const defaultType = itemComp.children.defaultValue.children.compType.getView();

  useEffect(() => {
    if (!type) {
      return;
    }
    if (testType !== type) {
      itemComp.children.test.dispatchChangeValueAction({ compType: type });
    }
    if (defaultType !== type) {
      itemComp.children.defaultValue.dispatchChangeValueAction({ compType: type });
    }
  }, [defaultType, itemComp.children.defaultValue, itemComp.children.test, testType, type]);

  return (
    <Fragment>
      {itemComp.children.test.children.comp.propertyView({ label: name, tooltip: description, layout: "vertical" })}
    </Fragment>
  );
}

const childrenMap = {
  name: CompNameControl,
  description: CompNameControl,
  type: dropdownControl(typeOptions, InputTypeEnum.Data),
  defaultValue: withType(defaultValueControls, InputTypeEnum.Data),
  test: withType(testControls, InputTypeEnum.Data),
};

const InputCompBase: any = new MultiCompBuilder(childrenMap, (props) => {
  return props;
}).build();

class InputCompWithMethods extends InputCompBase {
  IS_ExposingMethodComp = true;
  readOnly = false;

  getTestView() {
    const { name } = this.getView();
    return controlItem({ filterText: name }, <TestView key={name} itemComp={this} />)
  }

  private internalReduce(action: CompAction): this {
    if (isMyCustomAction<ExecuteAction>(action, "execute")) {
      this.executeMethod(action);
      return this;
    }
    if (action.type === CompActionTypes.EXECUTE_QUERY) {
      this.executeQuery(action);
      return this;
    }
    return super.reduce(action);
  }

  reduce(action: CompAction): this {
    const { readOnly } = getReduceContext();
    const nextComp = this.internalReduce(action);

    if (nextComp.readOnly !== readOnly) {
      return setFieldsNoTypeCheck(nextComp, { readOnly });
    }

    return nextComp;
  }

  // Expose the run method when the input type is Query
  getMethodConfig(): MethodConfig[] {
    const { type } = this.getView();
    if (type !== InputTypeEnum.Query) {
      return [];
    }
    return [
      {
        name: "run",
        description: "",
        params: [],
      },
    ];
  }

  getQueryName() {
    const { name, type, test } = this.getView();
    if (type !== InputTypeEnum.Query) {
      return "";
    }
    // Execute the test input query in the editing state, and execute the external input query at runtime
    return this.readOnly ? name : test.value;
  }

  executeMethod(action: CustomAction<ExecuteAction>) {
    const { type } = this.getView();

    if (!isCustomAction<ExecuteAction>(action, "execute")) {
      return false;
    }

    // Execute the query's run method
    if (type === InputTypeEnum.Query && action.value.methodName === "run") {
      this.executeQuery(action);
    }
  }

  executeQuery(action: ExecuteQueryAction | CustomAction<ExecuteAction>) {
    const queryName = this.getQueryName();
    if (!queryName) {
      return false;
    }
    let queryArgs: any;
    if (action.type === CompActionTypes.CUSTOM) {
      queryArgs = action.value.params?.[0];
    }
    handlePromiseAndDispatch(
      action,
      this.dispatch,
      routeByNameAction(
        queryName,
        executeQueryAction({
          args: queryArgs,
        })
      )
    );
    return true;
  }
}

// @ts-ignore
const InputListItemComp: any = withExposingRaw(InputCompWithMethods, {}, (comp: any) => {
  const { type } = comp.getView();
  const testControl = comp.children.test.children.comp as unknown;
  const defaultNode = comp.children.defaultValue.children.comp.exposingNode();

  if (type === InputTypeEnum.Query) {
    const querySelectControl = testControl as InstanceType<typeof QuerySelectControl>;
    const queryName = querySelectControl?.children?.value.getView();
    if (!comp.readOnly && queryName) {
      return new FunctionNode(new CodeNode(`{{${queryName}}}`), (v) => v.value);
    }
    return defaultNode;
  }

  const testCodeControlComp = testControl as InstanceType<ReturnType<typeof codeControl>>;
  const testNode = testCodeControlComp.exposingNode();

  let valueNode: Node<any> | any = defaultNode;
  if (!comp.readOnly && testCodeControlComp.unevaledValue) {
    valueNode = testNode;
  }
  return fromRecord({
    value: valueNode,
  } as any);
});

export const getInputOptionLabel = (value: InputTypeEnum) => {
  return typeOptions.find((i) => i.value === value)?.label || value;
};

export default InputListItemComp;
