import { KeyValueItem, KeyValueItemListWithNewCreateState } from "#lowcoder/components/KeyValueItemList";
import { JSONValueControl, StringControl } from "#lowcoder/comps/controls/codeControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { list } from "#lowcoder/comps/generators/list";
import { NameGenerator } from "#lowcoder/comps/utils/nameGenerator";
import { checkName } from "#lowcoder/comps/utils/rename";
import { trans } from "#lowcoder/i18n";

const childrenMap: any = {
  description: StringControl,
  value: JSONValueControl,
  name: CompNameControl,
};

const RootInputComp: any = new MultiCompBuilder(childrenMap, (props: any) => {
  return props;
}).build();

const RootOutputListCompBase: any = list(RootInputComp);

class OutputListComp extends RootOutputListCompBase {
  nameGen = new NameGenerator();

  names() {
    return this.getView().map((i: any) => i.children.name.getView());
  }

  handleAdd() {
    const name = this.nameGen.init(this.names()).genItemName("output");
    this.dispatch(
      this.pushAction({
        name,
        description: "",
        value: "",
      })
    );
  }

  handleDelete(idx: number) {
    this.dispatch(this.deleteAction(idx));
  }

  handleValidateName(prev: string, name: string): string {
    if (prev === name) {
      return "";
    }
    const err = checkName(name);
    if (err) {
      return err;
    }

    if (this.getView().find((i: any) => i.getView().name === name)) {
      return trans("module.nameExists", { name: name });
    }

    return "";
  }

  getPropertyView() {
    const children = this.getView();
    return (
      <PropertyView
        items={children}
        onAdd={() => this.handleAdd()}
        onDelete={(i) => this.handleDelete(i)}
        onValidateName={(prev, name) => this.handleValidateName(prev, name)}
      />
    );
  }
}

export default OutputListComp;

interface PropertyViewProps {
  onAdd: () => void;
  onDelete: (idx: number) => void;
  onValidateName: (prevName: string, nextName: string) => string;
  items: InstanceType<typeof RootInputComp>[];
}

function PropertyView(props: PropertyViewProps) {
  const { onDelete, onValidateName, onAdd, items } = props;

  return (
    <div>
      <KeyValueItemListWithNewCreateState
        title={trans("module.output")}
        keyTitle={trans("module.name")}
        valueTitle={trans("value")}
        emptyText={trans("module.emptyOutput")}
        onAdd={onAdd}
      >
        {(newCreateIdx) =>
          items.map((i, idx) => (
            <OutputItem
              key={idx}
              {...i.children}
              onDelete={() => onDelete(idx)}
              onValidateName={onValidateName}
              showPopover={idx === newCreateIdx}
            />
          ))
        }
      </KeyValueItemListWithNewCreateState>
    </div>
  );
}

interface OutputItemProps {
  name: InstanceType<typeof CompNameControl>;
  description: InstanceType<typeof StringControl>;
  value: InstanceType<typeof JSONValueControl>;
  onDelete?: () => void;
  onValidateName: (preValue: string, nextValue: string) => string;
  showPopover: boolean;
}

function OutputItem(props: OutputItemProps) {
  const { name, value, description, onDelete, onValidateName } = props;

  const content = (
    <>
      {name.propertyView({ label: trans("module.name"), onValidate: onValidateName })}
      {value.propertyView({ label: trans("value") })}
      {description.propertyView({ label: trans("labelProp.tooltip") })}
    </>
  );

  return (
    <KeyValueItem
      del={onDelete}
      name={name.getView()}
      value={value.unevaledValue}
      clickPopoverContent={content}
      defaultShowPopover={props.showPopover}
    />
  );
}
