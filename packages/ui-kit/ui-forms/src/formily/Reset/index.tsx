import { useMemoizedFn } from "ahooks";
import { useParentForm, observer } from "@formily/react";
import { Button, type ButtonProps } from "@mui/material";

export interface ResetProps extends ButtonProps {
  forceClear?: boolean;
  validate?: boolean;
  onResetValidateSuccess?: (payload: any) => void;
  onResetValidateFailed?: (error: Error) => void;
}

const defaultOnResetValidateFailed = (error: any) => console.log("resetValidateFailed", error);

export const Reset = observer(
  (props: ResetProps) => {
    const {
      forceClear,
      validate,
      onResetValidateSuccess,
      onResetValidateFailed = defaultOnResetValidateFailed,
      children = "重置",
      onClick,
      disabled,
      ...restProps
    } = props;

    const form = useParentForm();

    const reset = useMemoizedFn((e) => {
      if (!form) return;
      if (onClick) {
        if (onClick?.(e)! === false) return;
      }
      form
        .reset("*", { forceClear, validate })
        .then((payload) => {
          onResetValidateSuccess?.(payload);
          (form as any)?.setValues((form as any)?.initialValues);
        })
        .catch(onResetValidateFailed);
    });

    return (
      <Button
        disabled={disabled || form?.submitting}
        onClick={reset}
        variant="outlined"
        color="secondary"
        {...restProps}
      >
        {children}
      </Button>
    );
  },
  { displayName: "iimm.Mui.Formily.Reset" }
);
