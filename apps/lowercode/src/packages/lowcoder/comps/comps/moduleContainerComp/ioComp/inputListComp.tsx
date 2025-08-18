import { EmptyContent } from "#lowcoder/components/EmptyContent";
import { KeyValueItem, KeyValueItemListWithNewCreateState } from "#lowcoder/components/KeyValueItemList";
import { StringControl } from "#lowcoder/comps/controls/codeControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { dropdownControl } from "#lowcoder/comps/controls/dropdownControl";
import { EditorContext } from "#lowcoder/comps/editorState";
import { list } from "#lowcoder/comps/generators/list";
import { trans } from "#lowcoder/i18n";
import { multiChangeAction } from "#lowcoder-core/index";
import { controlItem, Section } from "#lowcoder-design/index";
import { useContext } from "react";
import InputListItemComp, { getInputOptionLabel, InputTypeEnum } from "./inputListItemComp";

const InputListCompBase: any = list(InputListItemComp);

class InputListComp extends InputListCompBase {
  handleAdd(name: string) {
    this.dispatch(
      this.pushAction({
        name,
        description: "",
      })
    );
  }

  handleDelete(idx: number) {
    this.dispatch(this.deleteAction(idx));
  }

  handleChangeType(idx: number, type: InputTypeEnum) {
    const item = this.getView()[idx];
    item.dispatch(
      multiChangeAction({
        defaultValue: item.children.defaultValue.changeValueAction({ compType: type }),
        test: item.children.test.changeValueAction({ compType: type }),
        type: item.children.type.changeValueAction(type),
      })
    );
  }

  getPropertyView() {
    const children = this.getView();
    return (
      <PropertyView
        onAdd={(name) => this.handleAdd(name)}
        onDelete={(i) => this.handleDelete(i)}
        onTypeChange={(i, type) => this.handleChangeType(i, type)}
        items={children}
      />
    );
  }

  getTestView() {
    const children = this.getView();
    const fields = children.map((i: any) => i.getTestView());
    return (
      <Section name={trans("moduleContainer.inputTest")}>
        {fields.length > 0
          ? fields
          : controlItem({}, <EmptyContent text={trans("module.emptyTestInput")} />)}
      </Section>
    );
  }
}

export default InputListComp;

interface PropertyViewProps {
  onAdd: (name: string) => void;
  onDelete: (idx: number) => void;
  onTypeChange: (idx: number, type: InputTypeEnum) => void;
  items: InstanceType<typeof InputListItemComp>[];
}

function PropertyView(props: PropertyViewProps) {
  const { onDelete, onTypeChange, onAdd, items }: any = props;
  const editorState = useContext(EditorContext);

  const handleAdd = () => {
    const name = editorState.getNameGenerator().genItemName("moduleInput");
    onAdd(name);
  };

  return (
    <div>
      <KeyValueItemListWithNewCreateState
        title={trans("module.input")}
        keyTitle={trans("module.name")}
        valueTitle={trans("prop.type")}
        onAdd={handleAdd}
        emptyText={trans("module.emptyInput")}
      >
        {(newIdx) =>
          items.map((i, idx) => (
            <InputItem
              key={idx}
              {...i.children}
              onDelete={() => onDelete(idx)}
              onTypeChange={(value) => onTypeChange(idx, value as InputTypeEnum)}
              defaultShowPopover={idx === newIdx}
            />
          ))
        }
      </KeyValueItemListWithNewCreateState>
    </div>
  );
}

interface InputItemProps {
  name: InstanceType<typeof CompNameControl>;
  defaultValue: any;
  // defaultValue: InstanceType<ReturnType<typeof withType>>;
  type: InstanceType<ReturnType<typeof dropdownControl>>;
  description: InstanceType<typeof CompNameControl>;
  onDelete: () => void;
  onTypeChange: (value: string) => void;
  defaultShowPopover: boolean;
}

function InputItem(props: InputItemProps) {
  const { name, type, description, defaultValue, onDelete, onTypeChange }: any = props;

  const content = (
    <>
      {name.propertyView({ label: trans("module.name") })}
      {type.propertyView({
        label: trans("prop.type"),
        onChange: onTypeChange,
        disableDispatchValueChange: true,
      })}
      {type.getView() !== InputTypeEnum.Query &&
        defaultValue.children.comp.propertyView({ label: trans("prop.defaultValue") })}
      {description.propertyView({ label: trans("labelProp.tooltip") })}
    </>
  );

  const label = getInputOptionLabel(type.getView() as InputTypeEnum);
  const [cnLabel] = label.split(" ");
  return (
    <KeyValueItem
      del={onDelete}
      name={name.getView()}
      value={cnLabel}
      clickPopoverContent={content}
      defaultShowPopover={props.defaultShowPopover}
    />
  );
}
