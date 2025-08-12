import type { ReactNode } from "react";
import { useControllableValue } from "ahooks";
import { Box, TextField, type SxProps } from "@mui/material";
import {
  DateRangePicker as MuiDateRangePicker,
  type DateRangePickerProps as MuiDateRangePickerProps,
} from "mui-component";

import { FormItemBase, type FormItemBaseProps, type FormItemExtraProps } from "../../layout";
import type { FieldBaseProps } from "../../types";

export const DateRangePickerBase = (props: DateRangePickerBaseProps) => {
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
    keepFeedbackSpace,
    // eslint-disable-next-line no-unused-vars
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
    noField,
    noFormLayout,
    withFormItem,
    size = "small",
    toText = "-",
    toSx = { mx: 0.5 },
    color,
    variant,
    textFieldSx,
    key,
    ...restProps
  } = props as DateRangePickerBaseProps & { key?: string | number };
  const [value, onChange] = useControllableValue(props);

  const dom = (
    <MuiDateRangePicker
      value={value || [null, null]}
      onChange={onChange}
      inputFormat="YYYY-MM-DD"
      componentsProps={{
        actionBar: {
          actions: ["today", "clear", "accept"],
          translate: "yes",
        },
      }}
      renderInput={(startProps, endProps) => (
        <>
          <TextField
            {...startProps}
            size={size}
            fullWidth={fullWidth}
            color={color}
            variant={variant}
            sx={textFieldSx}
          />
          <Box sx={toSx}>{toText}</Box>
          <TextField {...endProps} size={size} fullWidth={fullWidth} color={color} variant={variant} sx={textFieldSx} />
        </>
      )}
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

export interface DateRangePickerBaseProps<TInputDate = any, TDate = any>
  extends Omit<MuiDateRangePickerProps<TInputDate, TDate>, "value" | "onChange" | "renderInput">,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FieldBaseProps<any>,
    FormItemExtraProps {
  size?: "small" | "medium";
  /** 两个文本框直接的元素内容 */
  toText?: ReactNode;
  /** 两个文本框之间元素外层Box的sx */
  toSx?: SxProps;
  /** 文本框宽度拉满？ */
  fullWidth?: boolean;
  /** 选中时文本框颜色 */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /** 文本框样式 */
  variant?: "outlined" | "filled" | "standard";
  textFieldSx?: SxProps;
  renderInput?: MuiDateRangePickerProps<TInputDate, TDate>["renderInput"];
}
