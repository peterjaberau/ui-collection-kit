import { observer } from "@formily/react";

import { DateRangePickerBase, type DateRangePickerBaseProps } from "./DateRangePickerBase";
import { useFormilyFieldProps } from "../../hooks";

export interface DateRangePickerProps extends DateRangePickerBaseProps {}

export const DateRangePicker = observer(
  (props: DateRangePickerProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { fullWidth: true });
    return <DateRangePickerBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.DateRangePicker", forwardRef: true }
);
