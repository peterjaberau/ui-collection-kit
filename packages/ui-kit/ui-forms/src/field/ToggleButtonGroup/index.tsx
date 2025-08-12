import { observer } from "@formily/react";

import { ToggleButtonGroupBase, type ToggleButtonGroupBaseProps } from "./ToggleButtonGroupBase";
import { useFormilyFieldProps } from "../../hooks";

export interface ToggleButtonGroupProps extends ToggleButtonGroupBaseProps {}

export const ToggleButtonGroup = observer(
  (props: ToggleButtonGroupProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { options: true });
    return <ToggleButtonGroupBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.ToggleButtonGroup" }
);
