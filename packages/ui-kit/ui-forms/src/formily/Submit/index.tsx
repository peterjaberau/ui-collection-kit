import { type ReactNode } from "react";
import { useCreation, useMemoizedFn, useKeyPress } from "ahooks";
import type { Options, Target } from "ahooks/es/useKeyPress";
import { useParentForm, observer } from "@formily/react";
import { LoadingButton, type LoadingButtonProps } from "mui-component";

export interface SubmitProps extends LoadingButtonProps {
  resetOnSuccess?: boolean;
  onSubmit?: ((value: any) => void) | ((value: any) => Promise<void>);
  onSubmitSuccess?: (res: any) => void;
  onSubmitFailed?: (error: Error) => void;
  loading?: boolean;
  loadingIndicator?: ReactNode;
  loadingPosition?: "center" | "start" | "end";
  enterKeySubmit?: boolean;
  keyPressEvents?: ("keydown" | "keyup")[];
  keyPressTarget?: () => Element | Element | React.MutableRefObject<Element> | string | number;
  keyPressExactMatch?: boolean;
}

const defaultEvents = {
  onSubmitSuccess: () => {},
  onSubmitFailed: (error?: any) => {
    console.log("submitFailed", error);
  },
};

export const Submit = observer(
  (props: SubmitProps) => {
    const {
      onSubmit,
      onSubmitFailed = defaultEvents.onSubmitFailed,
      onSubmitSuccess = defaultEvents.onSubmitSuccess,
      resetOnSuccess,
      enterKeySubmit,
      loading,
      onClick,
      children = "提交",
      keyPressEvents,
      keyPressTarget,
      keyPressExactMatch,
      ...restProps
    } = props;
    const form = useParentForm();

    const submit = useMemoizedFn((e?: any) => {
      if (!form) return;
      if (onClick) {
        if ((onClick?.(e) as any) === false) return;
      }
      if (onSubmit) {
        form
          .submit(onSubmit)
          .then((res: any) => {
            onSubmitSuccess?.(res);
            if (!!resetOnSuccess && res !== false) {
              form?.reset("*");
            }
          })
          .catch(onSubmitFailed);
      }
    });

    const autoSubmit = useMemoizedFn(() => {
      if (!enterKeySubmit) {
        return;
      }
      submit();
    });

    const options = useCreation(() => {
      if (!keyPressEvents && !keyPressTarget && typeof keyPressExactMatch !== "boolean") return undefined;
      const Op: Options = {};
      if (keyPressEvents) Op.events = keyPressEvents;
      if (typeof keyPressExactMatch === "boolean") Op.exactMatch = keyPressExactMatch;
      if (["number", "string"].includes(typeof keyPressTarget)) {
        Op.target = () => document.getElementById(keyPressTarget as unknown as string);
      } else if (["object", "function"].includes(typeof keyPressTarget)) {
        Op.target = keyPressTarget as unknown as Target;
      }
      return Op;
    }, [keyPressEvents, keyPressTarget, keyPressExactMatch]);
    useKeyPress("enter", () => autoSubmit(), options);
    return (
      <LoadingButton variant="contained" {...restProps} loading={loading ?? form?.submitting} onClick={submit}>
        {children}
      </LoadingButton>
    );
  },
  { displayName: "iimm.Mui.Formily.Submit" }
);
