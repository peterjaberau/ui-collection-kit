import { observer } from "@formily/react";

import { CheckboxGroupBase, type CheckboxGroupBaseProps } from "./CheckboxGroupBase";
import { useFormilyFieldProps } from "../../hooks";

interface CheckboxGroupProps extends CheckboxGroupBaseProps {}

export const CheckboxGroup = observer(
  (props: CheckboxGroupProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { options: true });
    return <CheckboxGroupBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.CheckboxGroup" }
);
