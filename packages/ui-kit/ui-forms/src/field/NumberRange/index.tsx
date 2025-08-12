import { type ChangeEvent, type ReactNode } from "react";
import { useControllableValue, useCreation } from "ahooks";
import { observer } from "@formily/react";
import { Stack, TextField, type TextFieldProps } from "@mui/material";

import { useFormilyFieldProps } from "../../hooks";
import { FormItemBase, type FormItemExtraProps, type FormItemBaseProps } from "../../layout";
import type { FieldBaseProps } from "../../types";

type FieldValueType = number | null | undefined;

export type NumberRangeValueType = [FieldValueType, FieldValueType] | null;

export interface NumberRangeProps
  extends Omit<
      TextFieldProps,
      "value" | "onChange" | "defaultValue" | "label" | "multiline" | "maxRows" | "minRows" | "rows"
    >,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FieldBaseProps<NumberRangeValueType>,
    FormItemExtraProps {
  showClear?: boolean;
  min?: number;
  max?: number;
  labels?: [ReactNode?, ReactNode?];
  step?: number;
  divider?: ReactNode;
  spacing?: number;
}

export const NumberRangeBase = (props: NumberRangeProps) => {
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
    showClear: showClearProp,
    readOnly,
    inputProps: inputPropsProp,
    labels,
    divider = "-",
    min,
    max,
    step,
    size = "small",
    spacing = 0.25,
    keepFeedbackSpace,
    ...restProps
  } = props;
  const [value, setValue] = useControllableValue<NumberRangeValueType>(props, { defaultValue: null });

  const onFieldChange = useCreation(() => {
    const onChangeFty = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const rawFieldValue = e.target.value;
      const fieldValue =
        (typeof rawFieldValue === "string" && rawFieldValue) || typeof rawFieldValue === "number"
          ? +rawFieldValue
          : null;

      setValue((prevValue) => {
        let newValue = [...(prevValue || [null, null])] as [FieldValueType, FieldValueType];
        newValue[index] = fieldValue;
        newValue = newValue.map((v) => (typeof v === "string" ? +v : v || v === 0 ? v : null)) as [
          FieldValueType,
          FieldValueType,
        ];
        if (newValue.every((v) => v === null)) {
          return null;
        }
        return newValue;
      });
    };
    return [onChangeFty(0), onChangeFty(1)];
  }, [setValue]);

  const inputProps = useCreation(() => {
    const props: NumberRangeProps["inputProps"] = { ...(inputPropsProp || {}), readOnly, type: "number" };
    if (typeof min === "number") {
      props.min = min;
    }
    if (typeof max === "number") {
      props.max = max;
    }
    if (typeof step === "number") {
      props.step = step;
    }
    return props;
  }, [inputPropsProp, min, max, step, readOnly]);

  const dom = (
    <Stack direction="row" spacing={spacing} alignItems="center" display="flex">
      <TextField
        label={labels?.[0] || "≥"}
        sx={{ flex: 1 }}
        {...restProps}
        value={value?.[0] ?? ""}
        onChange={onFieldChange[0]}
        size={size}
        type="number"
        inputProps={inputProps}
      />
      <span>{divider}</span>
      <TextField
        label={labels?.[1] || "≤"}
        sx={{ flex: 1 }}
        {...restProps}
        value={value?.[1] ?? ""}
        onChange={onFieldChange[1]}
        size={size}
        type="number"
        inputProps={inputProps}
      />
    </Stack>
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

export const NumberRange = observer(
  (props: NumberRangeProps) => (
    <NumberRangeBase
      {...useFormilyFieldProps(props, {
        error: true,
        tooltip: true,
        required: true,
        label: true,
        fullWidth: true,
      })}
    />
  ),
  {
    displayName: "iimm.Mui.Formily.NumberRange",
  }
);
