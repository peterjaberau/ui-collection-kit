import { observer } from "@formily/react";

import { TimePickerBase, type TimePickerBaseProps } from "./TimePickerBase";
import { useFormilyFieldProps } from "../../hooks";

export interface TimePickerProps extends TimePickerBaseProps {}

export const TimePicker = observer(
  (props: TimePickerProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { fullWidth: true, label: true });
    return <TimePickerBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.TimePicker" }
);
