import {
  JSONValueControl,
  StringControl,
  NumberControl,
  BoolCodeControl,
} from "#lowcoder/comps/controls/codeControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { dropdownControl } from "#lowcoder/comps/controls/dropdownControl";
import { withType, MultiCompBuilder } from "#lowcoder/comps/generators";
import { Fragment, useEffect } from "react";
import { trans } from "#lowcoder/i18n";

export const paramControls: any = {
  JSONValue: JSONValueControl,
  string: StringControl,
  number: NumberControl,
  boolean: BoolCodeControl,
};

const typeOptions: any  = [
  {
    label: trans("module.data"),
    value: "JSONValue",
  },
  {
    label: trans("module.string"),
    value: "string",
  },
  {
    label: trans("module.number"),
    value: "number",
  },
  {
    label: trans("module.boolean"),
    value: "boolean",
  },
];

export type ModuleMethodParamType = keyof typeof paramControls;

interface TestViewProps {
  itemComp: ParamListItemComp;
}

function TestView(props: TestViewProps) {
  const { itemComp }: any = props;
  const { name, type } = itemComp.getView();
  const testType = itemComp.children.test.children.compType.getView();
  const defaultType = itemComp.children.defaultValue.children.compType.getView();

  useEffect(() => {
    if (!type) {
      return;
    }
    if (testType !== type) {
      itemComp.children.test.dispatchChangeValueAction({ compType: type as ModuleMethodParamType | any } as any);
    }
    if (defaultType !== type) {
      itemComp.children.defaultValue.dispatchChangeValueAction({
        compType: type as ModuleMethodParamType,
      } as any);
    }
  }, [defaultType, itemComp.children.defaultValue, itemComp.children.test, testType, type]);

  return <Fragment>{itemComp.children.test.children.comp.propertyView({ label: name })}</Fragment>;
}

const childrenMap = {
  name: CompNameControl,
  description: StringControl,
  type: dropdownControl(typeOptions, "JSONValue"),
  defaultValue: withType(paramControls, "JSONValue"),
  test: withType(paramControls, "JSONValue"),
};

const ParamListItemCompBase: any = new MultiCompBuilder(childrenMap, (props) => {
  return props;
}).build();

class ParamListItemComp extends ParamListItemCompBase {
  getTestView() {
    const { name } = this.getView();
    return <TestView key={name} itemComp={this} />;
  }
}

export const getParamOptionLabel = (value: ModuleMethodParamType) => {
  return typeOptions.find((i: any) => i.value === value)?.label || value;
};

export default ParamListItemComp;
