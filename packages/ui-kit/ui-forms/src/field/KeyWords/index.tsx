import { observer } from "@formily/react";

import { KeyWordsBase, type KeyWordsBaseProps } from "./KeyWordsBase";
import { useFormilyFieldProps } from "../../hooks";

export interface KeyWordsProps extends KeyWordsBaseProps {}

export const KeyWords = observer(
  (props: KeyWordsProps) => {
    const formilyFieldProps = useFormilyFieldProps(props, { error: true });

    return <KeyWordsBase {...formilyFieldProps} />;
  },
  { displayName: "iimm.Mui.Formily.KeyWords" }
);
