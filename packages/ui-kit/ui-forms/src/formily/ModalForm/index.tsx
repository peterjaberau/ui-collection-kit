import { useImperativeHandle, type ReactNode, type MutableRefObject, useEffect, useRef } from "react";
import { useMemoizedFn, useControllableValue, useCreation } from "ahooks";
import { createForm, type Form } from "@formily/core";
import { FormProvider, observer } from "@formily/react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Tooltip,
  useMediaQuery,
  useTheme,
  Paper,
  type PaperProps,
} from "@mui/material";
import { IconArrowsMaximize, IconArrowsMinimize, IconCircleX } from "@tabler/icons-react";
import { Space, useGlobalId } from "@iimm/react-shared";
import { type ModalProps } from "mui-component";
import Draggable from "react-draggable";

import { Reset, type ResetProps } from "../Reset";
import { Submit, type SubmitProps } from "../Submit";

export interface ModalFormProps
  extends Omit<
    ModalProps,
    | "showActions"
    | "showCancel"
    | "onCancel"
    | "cancelText"
    | "cancelProps"
    | "showConfirm"
    | "onConfirm"
    | "confirmText"
    | "confirmProps"
  > {
  /** 额外的DialogActions项（会放在Reset前） */
  extraActions?: ReactNode;
  /** 显示重置按钮? */
  showReset?: boolean;
  /** 重置按钮的props */
  resetProps?: ResetProps;
  resetText?: ReactNode;
  /** 显示提交按钮? */
  showSubmit?: boolean;
  /** 提交按钮的props */
  submitProps?: Omit<SubmitProps, "onSubmit">;
  submitText?: ReactNode;
  /** 返回值为true时窗口自动关闭 */
  onFinish?: ((values: any) => boolean | void) | ((values: any) => Promise<boolean | void>);
  formRef?: MutableRefObject<Form>;
  form?: Form;
  resetOnClose?: boolean;
  ref?: any;
}

const stopPropagationOnClick = (e?: React.MouseEvent<HTMLElement>) => e?.stopPropagation();

export const ModalForm = observer(
  (props: ModalFormProps) => {
    const {
      trigger,
      triggerProps,
      title,
      titleProps,
      titleBoxProps,
      contentProps,
      actionsProps,
      children,
      content,
      withDialogContentWrapper = true,
      showCloseIcon = true,
      CloseIcon,
      closeIconButtonProps,
      showReset = true,
      showSubmit = true,
      submitText = "提交",
      resetText = "重置",
      submitProps,
      resetProps,
      onFinish,
      extraActions,
      open: openProp,
      onClose: onCloseProp,
      disabled,
      formRef,
      form: formProp,
      fullScreen: fullScreenProp,
      setFullScreen: setFullScreenProp,
      showFullScreen,
      draggable: draggableProp,
      responsive,
      breakpoint = "md",
      fullWidth = true,
      resetOnClose,
      ...restProps
    } = props;

    const innerForm = useCreation(() => createForm({ validateFirst: true }), []);
    const form = formProp ?? innerForm;

    const theme = useTheme();
    const tId = useGlobalId();

    const down = useMediaQuery(theme.breakpoints.down(breakpoint));

    const [fullScreen, setFullScreen] = useControllableValue(props, {
      trigger: "setFullScreen",
      valuePropName: "fullScreen",
      defaultValue: false,
    });

    const nodeRef = useRef(null);

    const draggable = !!draggableProp && !fullScreen;

    const [open, setOpen] = useControllableValue(props, {
      defaultValue: false,
      valuePropName: "open",
      trigger: "setOpen",
    });

    const onFullScreenClick = useCreation(() => () => setFullScreen((f) => !f), [setFullScreen]);

    const syncResponsiveFullScreen = useMemoizedFn(() => {
      if (!responsive) return;
      if (down && !fullScreen) {
        setFullScreen(true);
      } else if (!down && fullScreen) {
        setFullScreen(false);
      }
    });

    useEffect(() => {
      syncResponsiveFullScreen();
    }, [responsive, down]);

    const onClose = useMemoizedFn(async (e?: any, reason?: any) => {
      const res: any = await onCloseProp?.(e, reason);
      if (trigger && res !== false) {
        setOpen(false);
      }
      if (resetOnClose) {
        form?.reset("*");
      }
    });

    const onSubmit = useMemoizedFn(async (values) => {
      const res = await onFinish?.(values);
      if (res === true) {
        onClose();
      }
    });

    const Commponent = useCreation(() => {
      if (!draggable) return undefined;
      return (props: PaperProps) => (
        <Draggable nodeRef={nodeRef} handle={`#${tId}`} cancel={'[class*="MuiDialogContent-root"]'}>
          <Paper {...props} ref={nodeRef} />
        </Draggable>
      );
    }, [draggable, tId]);

    useImperativeHandle(formRef, () => form, [form]);

    return (
      <>
        {!!trigger && (
          <Link
            underline="none"
            {...(triggerProps || {})}
            sx={{ cursor: "pointer", ...(triggerProps?.sx || {}) }}
            onClick={(e) => {
              if (!disabled) {
                setOpen(true);
                triggerProps?.onClick?.(e);
              }
            }}
          >
            {trigger}
          </Link>
        )}
        <FormProvider form={form}>
          <Dialog
            PaperComponent={Commponent}
            {...restProps}
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            open={!!open}
            onClose={onClose}
          >
            {(!!title || showCloseIcon || showFullScreen) && (
              <DialogTitle
                display="flex"
                alignItems="start"
                bgcolor="#f5f5f5"
                onClick={stopPropagationOnClick}
                {...(titleProps || {})}
                sx={{ padding: 0, ...(titleProps?.sx || {}) }}
              >
                <Box
                  flex={1}
                  fontSize="16px"
                  height="100%"
                  alignSelf="center"
                  maxHeight="60px"
                  marginLeft={1.5}
                  marginY={0.5}
                  {...(titleBoxProps || {})}
                  id={tId}
                  sx={{ minHeight: 24, ...(draggable ? { cursor: "move" } : {}), ...(titleBoxProps?.sx || {}) }}
                >
                  {title}
                </Box>
                <Space size={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {showFullScreen && (
                    <Tooltip arrow placement="top" title={fullScreen ? "退出全屏" : "全屏"}>
                      <IconButton color="primary" sx={{ px: 0.25, py: 0.5 }} onClick={onFullScreenClick}>
                        {fullScreen ? (
                          <IconArrowsMinimize size="1em" stroke="1.5px" />
                        ) : (
                          <IconArrowsMaximize size="1em" stroke="1.5px" />
                        )}
                      </IconButton>
                    </Tooltip>
                  )}
                  {showCloseIcon && (
                    <Tooltip arrow placement="top" title="关闭">
                      <IconButton
                        sx={{ px: 0.25, py: 0.5 }}
                        {...(closeIconButtonProps || {})}
                        aria-label="close"
                        onClick={onClose}
                      >
                        {CloseIcon || <IconCircleX size="1.5em" stroke="1.5px" color="#8c8c8c" />}
                      </IconButton>
                    </Tooltip>
                  )}
                </Space>
              </DialogTitle>
            )}
            {withDialogContentWrapper ? (
              <DialogContent onClick={stopPropagationOnClick} sx={{ px: 1, mt: 0.75 }} {...(contentProps || {})}>
                {content ?? children}
              </DialogContent>
            ) : (
              content ?? children
            )}
            <DialogActions onClick={stopPropagationOnClick} {...(actionsProps || {})}>
              {extraActions}
              {showReset && (
                <Reset disabled={form?.submitting} {...(resetProps || {})}>
                  {resetText}
                </Reset>
              )}
              {showSubmit && (
                <Submit {...(submitProps || {})} onSubmit={onSubmit}>
                  {submitText}
                </Submit>
              )}
            </DialogActions>
          </Dialog>
        </FormProvider>
      </>
    );
  },
  { forwardRef: true, displayName: "iimm.Mui.Formily.ModalForm" }
);
