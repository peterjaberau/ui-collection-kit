import type { ReactNode } from "react";
import { useControllableValue, useCreation, useMemoizedFn } from "ahooks";
import {
  TextField as MuiTextField,
  InputAdornment,
  IconButton,
  type TextFieldProps,
  type FormLabelProps,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { FormItemBase, type FormItemExtraProps, type FormItemBaseProps } from "../../layout";
import { renderInnerLabel } from "../../utils";
import type { FieldBaseProps } from "../../types";

export const InputBase = (props: InputBaseProps) => {
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
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
    noField,
    noFormLayout,
    withFormItem,
    showInnerLabel,
    innerLabelProps,
    showClear: showClearProp,
    readOnly,
    inputProps,
    InputProps,
    endAdornmentItem,
    size = "small",
    keepFeedbackSpace,
    ...restProps
  } = props;
  const [value, onChange] = useControllableValue<number | string>(props, { defaultValue: "" });
  const onTextFieldChange = useMemoizedFn((e) => {
    if (readOnly || props.disabled) return;
    const v = e.target.value;
    if (props.type === "number") {
      if (v !== "" && v !== null && v !== undefined) {
        onChange(isNaN(+v) ? (undefined as any) : +v);
      } else {
        onChange(v || ((v === null ? null : undefined) as any));
      }
    } else {
      onChange(v ?? "");
    }
  });
  const showClear = useCreation(() => {
    if (!props?.type || props.type === "text") {
      return showClearProp ?? true;
    }
    return showClearProp ?? false;
  }, [showClearProp, props.type]);

  const dom = (
    <MuiTextField
      value={value ?? ""}
      onChange={onTextFieldChange}
      label={renderInnerLabel({ showInnerLabel, label, required, error, innerLabelProps, tooltip })}
      error={error}
      size={size}
      inputProps={{
        readOnly,
        ...(inputProps || {}),
      }}
      InputProps={{
        endAdornment:
          !readOnly && !props.disabled && showClear && (!!value || value === 0) ? (
            <InputAdornment
              position="end"
              sx={{
                mr: props.multiline ? 1.5 : undefined,
              }}
            >
              <IconButton
                edge="end"
                tabIndex={-1}
                onClick={() => {
                  if (!readOnly && !props.disabled) onChange("");
                }}
              >
                <Close fontSize="small" />
              </IconButton>
              {endAdornmentItem}
            </InputAdornment>
          ) : endAdornmentItem ? (
            <InputAdornment
              position="end"
              sx={{
                mr: props.multiline ? 1.5 : undefined,
              }}
            >
              {endAdornmentItem}
            </InputAdornment>
          ) : null,
        ...(InputProps || {}),
      }}
      fullWidth={fullWidth}
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

export interface InputBaseProps
  extends FieldBaseProps<string | number>,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FormItemExtraProps,
    Omit<TextFieldProps, "value" | "onChange" | "defaultValue"> {
  label?: ReactNode;
  /** 显示内部label? */
  showInnerLabel?: boolean;
  fullWidth?: boolean;
  tooltip?: ReactNode;
  showClear?: boolean;
  required?: boolean;
  /** 仅showInnerLabel=true时传递给内部Label */
  innerLabelProps?: FormLabelProps;

  type?:
    | "text"
    | "password"
    | "date"
    | "color"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "tel"
    | "time"
    | "url"
    | "week"
    | "datetime";
  margin?: "none" | "dense" | "normal";
  maxRows?: number | string;
  endAdornmentItem?: ReactNode;
}
