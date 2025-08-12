import { observer } from "@formily/react";

import { DateTimePickerBase, type DateTimePickerBaseProps } from "./DateTimePickerBase";
import { useFormilyFieldProps } from "../../hooks";

export interface DateTimePickerProps extends DateTimePickerBaseProps {}

export const DateTimePicker = observer(
  (props: DateTimePickerProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { fullWidth: true, label: true });
    return <DateTimePickerBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.DateTimePicker" }
);
