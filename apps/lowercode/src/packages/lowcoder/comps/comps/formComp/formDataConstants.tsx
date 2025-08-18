import { RecordConstructorToComp } from "#lowcoder-core/index";
import { StringControl } from "#lowcoder/comps/controls/codeControl";
import { CompNameContext, EditorContext } from "#lowcoder/comps/editorState";
import { Section } from "#lowcoder-design/index";
import { ReactNode, useContext, useMemo } from "react";
import { trans } from "#lowcoder/i18n";

export interface IForm {
  onEventPropertyView(title: ReactNode): ReactNode;
  submit(): Promise<void>;
  disableSubmit(): boolean;
}

export const formDataChildren = {
  formDataKey: StringControl,
};

type FormDataComp = RecordConstructorToComp<typeof formDataChildren>;

export const FormDataPropertyView = (children: FormDataComp) => {
  const editorState = useContext(EditorContext);
  const name = useContext(CompNameContext);

  const isFormParent = useMemo(() =>
    editorState?.findUIParentContainer(name, "form"),
    [editorState, name]
  );

  if (!isFormParent) {
    return null;
  }

  return (
    <Section name={trans("form")}>
      {children.formDataKey.propertyView({
        label: trans("formComp.name"),
        placeholder: name,
        tooltip: trans("formComp.nameTooltip"),
      })}
    </Section>
  );
};
