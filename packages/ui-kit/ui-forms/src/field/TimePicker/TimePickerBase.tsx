import { type ReactNode } from "react";
import { useControllableValue } from "ahooks";
import { type FormLabelProps, type SxProps, TextField } from "@mui/material";
import { TimePicker as MuiTimePicker, type TimePickerProps as MuiTimePickerProps } from "@mui/x-date-pickers";

import { renderInnerLabel } from "../../utils";
import { FormItemBase, type FormItemBaseProps, type FormItemExtraProps } from "../../layout";
import type { FieldBaseProps } from "../../types";

export const TimePickerBase = (props: TimePickerBaseProps) => {
  const {
    labelPosition,
    labelWidth,
    labelAlign,
    labelWrap,
    wrapperAlign,
    wrapperWrap,
    wrapperWidth,
    fullWidth,
    colon,
    tooltipIcon,
    tooltipLayout,
    showFeedback,
    feedbackLayout,
    noLabel,
    label,
    labelStyle,
    wrapperStyle,
    tooltip,
    required,
    feedbackStatus,
    feedbackText,
    feedbackIcon,
    extra,
    addonBefore,
    addonAfter,
    formItemCls,
    formItemStyle,
    formItemPrefixCls,
    error,
    feedbackCls,
    extraCls,
    keepTopSpace,
    // eslint-disable-next-line no-unused-vars
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
    noField,
    noFormLayout,
    withFormItem,
    size = "small",
    color,
    variant,
    textFieldSx,
    showInnerLabel,
    views,
    renderInput,
    innerLabelProps,
    keepFeedbackSpace,
    ...restProps
  } = props;
  const [value, onChange] = useControllableValue(props, { defaultValue: null });

  const dom = (
    <MuiTimePicker
      value={value || null}
      onChange={onChange}
      label={showInnerLabel ? label : undefined}
      renderInput={
        renderInput ||
        ((params) => (
          <TextField
            {...params}
            size={size}
            fullWidth={fullWidth}
            color={color}
            variant={variant}
            sx={textFieldSx}
            label={renderInnerLabel({ showInnerLabel, label, error, required, innerLabelProps, tooltip })}
          />
        ))
      }
      {...restProps}
    />
  );

  return withFormItem ? (
    <FormItemBase
      keepFeedbackSpace={keepFeedbackSpace}
      className={formItemCls}
      style={formItemStyle}
      prefixCls={formItemPrefixCls}
      extra={extra}
      extraCls={extraCls}
      error={error}
      noLabel={noLabel}
      keepTopSpace={keepTopSpace}
      label={label}
      labelStyle={labelStyle}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      labelAlign={labelAlign}
      labelWrap={labelWrap}
      wrapperAlign={wrapperAlign}
      wrapperWrap={wrapperWrap}
      wrapperWidth={wrapperWidth}
      wrapperStyle={wrapperStyle}
      fullWidth={fullWidth}
      colon={colon}
      required={required}
      tooltip={tooltip}
      tooltipIcon={tooltipIcon}
      tooltipLayout={tooltipLayout}
      showFeedback={showFeedback}
      feedbackLayout={feedbackLayout}
      feedbackCls={feedbackCls}
      feedbackIcon={feedbackIcon}
      feedbackStatus={feedbackStatus}
      feedbackText={feedbackText}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
    >
      {dom}
    </FormItemBase>
  ) : (
    dom
  );
};

export interface TimePickerBaseProps<TInputDate = any, TDate = any>
  extends Omit<MuiTimePickerProps<TInputDate, TDate>, "value" | "onChange" | "renderInput">,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FieldBaseProps<any>,
    FormItemExtraProps {
  renderInput?: MuiTimePickerProps<TInputDate, TDate>["renderInput"];
  size?: "small" | "medium";
  /** 显示内部label? */
  showInnerLabel?: boolean;
  label?: ReactNode;
  /** 文本框宽度拉满？ */
  fullWidth?: boolean;
  /** 选中时文本框颜色 */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /** 文本框样式 */
  variant?: "outlined" | "filled" | "standard";
  textFieldSx?: SxProps;
  /** 仅showInnerLabel=true时传递给内部Label */
  innerLabelProps?: FormLabelProps;
}
