import { observer } from "@formily/react";

import { RadioGroupBase, type RadioGroupBaseProps } from "./RadioGroupBase";
import { useFormilyFieldProps } from "../../hooks";

export interface RadioGroupProps extends RadioGroupBaseProps {}

export const RadioGroup = observer(
  (props: RadioGroupProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { options: true });
    return <RadioGroupBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.RadioGroup" }
);
