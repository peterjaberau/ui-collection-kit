import type { ReactNode, ComponentType } from "react";
import { useMemoizedFn } from "ahooks";
import type { ObjectField } from "@formily/core";

import { toJS } from "@formily/reactive";
import { observer } from "@formily/react";
import { Box, Button, Grid, type StepIconProps, type ButtonProps, type BoxProps } from "@mui/material";
import { Space } from "@iimm/react-shared";

import { Submit } from "../../Submit";
import { SubmitProps } from "../../Submit";

export interface StepFormProps extends Omit<BoxProps, "title"> {
  // -------------- 1 -------------
  // 此部分props是给stepsForm拦截并使用的
  name?: string;
  title?: ReactNode;
  subTitle?: ReactNode;
  icon?: ComponentType<StepIconProps>;
  // -------------- 1 -------------

  // -------------- 2 -------------
  // 此部分props是由StepsForm组件自动生成并传递的，不要手动传递，可以通过props获取使用
  /** [不要手动传递,但可以通过props获取到]当前激活的stepForm的index(从0开始) */
  current?: number;
  /** [不要手动传递,但可以通过props获取到]该StepForm的编号(从0开始) */
  stepIndex?: number;
  /** [不要手动传递,但可以通过props获取到]步骤总数 */
  stepsCount?: number;
  /** [不要手动传递,但可以通过props获取到]当前Step对应的ObjectField对象 */
  field?: ObjectField;
  // -------------- 2 -------------

  handleStepChange?: (direction?: "next" | "previous" | number) => void;
  onFinish?:
    | ((values?: object, allValues?: object, stepObjField?: ObjectField) => void | boolean)
    | ((values?: object, allValues?: object, stepObjField?: ObjectField) => Promise<void | boolean>);
  onSubmitFail?: (error?: Error) => void;
  onPrevious?: (stepObjField: ObjectField) => void;
  previousText?: ReactNode;
  previousProps?: Omit<ButtonProps, "onClick">;
  nextText?: [ReactNode, ReactNode];
  nextProps?: Omit<SubmitProps, "onSubmit" | "onSubmitFailed">;
  showReset?: boolean;
  onReset?: () => void | (() => Promise<void>);
  resetProps?: Omit<ButtonProps, "onClick">;
  children?: ReactNode;
}

export const StepForm = observer(
  (props: StepFormProps) => {
    const {
      stepIndex,
      stepsCount,
      onFinish,
      onPrevious,
      nextProps,
      nextText = ["下一步", "提交"],
      previousText = "上一步",
      previousProps,
      children,
      handleStepChange,
      onSubmitFail,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      title,
      subTitle,
      icon,
      name,
      field,
      showReset,
      onReset,
      resetProps,
      ...restProps
    } = props;

    const onSubmit = useMemoizedFn(async (stepValues) => {
      const allValues = toJS(field?.form?.values || {});
      let v = { ...(stepValues || {}) };
      if (stepIndex! + 1 === stepsCount) {
        const valuesArr = Object.values(allValues);
        v = {};
        for (let i = 0; i < valuesArr.length; i++) {
          v = { ...v, ...((valuesArr?.[i] as any) || {}) };
        }
      }
      const res = await onFinish?.(v, allValues, field);
      if (res !== false) {
        handleStepChange?.("next");
      }
    });

    const onPreviousClick = useMemoizedFn(() => {
      if (field?.submitting) return;
      onPrevious?.(field!);
      handleStepChange?.("previous");
    });

    return (
      <Box {...restProps}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <Space>
              {showReset && (
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  {...(resetProps || {})}
                  onClick={() => onReset?.()}
                >
                  重置
                </Button>
              )}
              {!!stepIndex && (
                <Button disabled={field?.submitting} {...(previousProps || {})} onClick={onPreviousClick}>
                  {previousText}
                </Button>
              )}
              <Submit
                variant="contained"
                size="small"
                {...(nextProps || {})}
                onSubmitFailed={onSubmitFail}
                onSubmit={onSubmit}
              >
                {stepIndex! + 1 === stepsCount ? nextText?.[1] : nextText?.[0]}
              </Submit>
            </Space>
          </Grid>
        </Grid>
      </Box>
    );
  },
  { displayName: "iimm.Mui.Formily.StepsForm.StepForm" }
);
