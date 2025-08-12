import { observer } from "@formily/react";

import { UploadBase, type UploadBaseProps } from "./UploadBase";
import { useFormilyFieldProps } from "../../hooks";

export interface UploadProps extends UploadBaseProps {}

export const Upload = observer(
  (props: UploadProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, {});
    return <UploadBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.Upload" }
);
