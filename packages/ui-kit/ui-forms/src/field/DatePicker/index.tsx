import { observer } from "@formily/react";

import { DatePickerBase, type DatePickerBaseProps } from "./DatePickerBase";
import { useFormilyFieldProps } from "../../hooks";

export interface DatePickerProps extends DatePickerBaseProps {}

export const DatePicker = observer(
  (props: DatePickerProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { fullWidth: true, label: true });
    return <DatePickerBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.DatePicker" }
);
