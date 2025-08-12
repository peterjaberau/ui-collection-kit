import { observer } from "@formily/react";

import { TransferBase, type TransferBaseProps } from "./TransferBase";
import { useFormilyFieldProps } from "../../hooks";

export interface TransferProps extends TransferBaseProps {}

export const Transfer = observer(
  (props: TransferProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { options: true, error: true });
    return <TransferBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.Transfer" }
);
