import { observer } from "@formily/react";

import { useFormilyFieldProps } from "../../hooks";
import { InputBase, type InputBaseProps } from "./InputBase";

export interface InputProps extends InputBaseProps {}

export const Input = observer(
  (props: InputProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, {
      error: true,
      tooltip: true,
      required: true,
      label: true,
      fullWidth: true,
      showInnerLabel: true,
    });
    return <InputBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.Input" }
);
