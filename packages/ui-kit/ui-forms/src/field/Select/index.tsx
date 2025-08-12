import { observer } from "@formily/react";

import { useFormilyFieldProps } from "../../hooks";
import { SelectBase, type SelectBaseProps } from "./SelectBase";

export interface SelectProps extends SelectBaseProps {}

export const Select = observer(
  (props: SelectProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, {
      options: true,
      required: true,
      label: true,
      tooltip: true,
      error: true,
      fullWidth: true,
      showInnerLabel: true,
    });
    return <SelectBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.Select" }
);
