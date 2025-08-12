import type { ReactNode } from "react";
import { useMemoizedFn } from "ahooks";
import { observer } from "@formily/react";
import { Button, type ButtonProps } from "@mui/material";
import { Space } from "@iimm/react-shared";
import { Result, type ResultProps } from "mui-component";
import { type Form } from "@formily/core";

export interface ResultRenderProps {
  handleStepChange?: (direction?: "next" | "previous" | number) => void;
  status?: ResultProps["status"];
  /**
   * 表单的所有字段值汇总,不可手动指定，由StepsForm组件自动生成并传递
   */
  values?: object;
  form?: Form;
  resultTitle?: ReactNode;
  onResultReset?: () => void;
  resultSubTitle?: ReactNode;
  showResultReset?: boolean; // true,
  resultActions?: ReactNode;
  resultResetText?: ReactNode;
  resultResetProps?: Omit<ButtonProps, "onClick">; // { variant: 'outlined' }
  resultContent?: ResultProps["content"];
}

export const DefaultCompleteRender = observer(
  (props: ResultRenderProps) => {
    const {
      resultActions,
      resultTitle = "操作成功",
      resultSubTitle = "点击返回以再次操作",
      showResultReset,
      resultResetText = "返回",
      resultResetProps,
      onResultReset,
      handleStepChange,
      form,
      status = "success",
      resultContent,
    } = props;
    const handleReset = useMemoizedFn(() => {
      onResultReset?.();
      form?.reset("*");
      handleStepChange!(0);
    });
    return (
      <Result
        status={status}
        title={resultTitle}
        subTitle={resultSubTitle}
        content={resultContent}
        actions={
          <Space>
            {showResultReset && (
              <Button variant="outlined" {...(resultResetProps || {})} onClick={handleReset}>
                {resultResetText}
              </Button>
            )}
            {resultActions}
          </Space>
        }
      />
    );
  },
  { displayName: "iimm.Mui.Formily.StepsForm.DefaultCompleteRender" }
);
