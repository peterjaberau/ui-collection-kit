import type { ReactNode } from "react";
import { useControllableValue, useMemoizedFn, useSafeState } from "ahooks";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  type FormGroupProps,
  IconButton,
  Skeleton,
  type SxProps,
  Tooltip,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { isEqual, isInArray } from "@iimm/shared";

import { useFetchOptions } from "../../hooks";
import { FormItemBase, type FormItemExtraProps, type FormItemBaseProps } from "../../layout/FormItem/FormItemBase";
import type { FieldBaseProps, IFieldOptionItem, IFieldPropOptions, RefreshOptionsProps } from "../../types";


export const CheckboxGroupBase = (props: CheckboxGroupBaseProps) => {
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
    options: optionsProp,
    // eslint-disable-next-line no-unused-vars
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
    children,
    noField,
    noFormLayout,
    withFormItem = true,
    readOnly,
    disabled,
    minCount,
    maxCount,
    layout = "horizontal",
    itemSx,
    labelPlacement,
    row,
    icon,
    checkedIcon,
    size = "small",
    color,
    // eslint-disable-next-line no-unused-vars
    showRefresh,
    refresh: refreshProp,
    onRefreshChange: onRefreshChangeProp,
    refreshText = "刷新选项",
    refreshIcon = <Refresh sx={{ color: "#eb2f96" }} />,
    keepFeedbackSpace,
    ...restProps
  } = props;
  const [refresh, onRefreshChange] = useControllableValue(props, {
    trigger: "onRefreshChange",
    valuePropName: "refresh",
    defaultValue: 0,
  });
  const [loading, setLoading] = useSafeState(false);
  const [optionsValues, setOptionsValues] = useSafeState<CheckboxOptionItem[]>([]);
  const [value, onChange] = useControllableValue(props);
  const options = useFetchOptions<CheckboxOptionItem>(optionsProp, {
    onLoading: setLoading,
    callback: (opts) => setOptionsValues(opts.map((ele) => ele.value)),
    deps: refresh,
  });

  const doRefresh = useMemoizedFn(() => {
    onRefreshChange((+refresh || 0) + 1);
  });

  const handleChange = useMemoizedFn((e, optionValue) => {
    if (readOnly) {
      return;
    }
    const checked = e.target.checked;
    let newValue = [...(value || [])];
    const optionIndex = newValue.findIndex((ele) => isEqual(ele, optionValue));
    if (optionIndex === -1) {
      if (checked) {
        newValue.push(optionValue);
      }
    } else if (!checked) {
      newValue.splice(optionIndex, 1);
    }
    newValue.sort((a, b) => {
      const indexA = options.findIndex((opt) => isEqual(a, opt.value));
      const indexB = options.findIndex((opt) => isEqual(b, opt.value));
      return indexA - indexB;
    });
    newValue = newValue.filter((item) => isInArray(item, optionsValues));
    let shouldUpdate = true;
    if (
      (minCount !== undefined && newValue.length < minCount) ||
      (maxCount !== undefined && newValue.length > maxCount)
    ) {
      shouldUpdate = false;
    }
    if (shouldUpdate) {
      onChange(newValue);
    }
  });

  const dom = loading ? (
    <Skeleton variant="rectangular" animation="wave" width={"100%"}>
      <Checkbox />
    </Skeleton>
  ) : (
    <FormGroup row={row ?? layout === "horizontal"} {...restProps}>
      {options.map((item, index) => (
        <FormControlLabel
          key={index}
          label={item.label ?? ""}
          labelPlacement={labelPlacement}
          control={
            <Checkbox
              size={item.size ?? size}
              color={(item.color as any) ?? color}
              disabled={item.disabled ?? disabled}
              checked={isInArray(item.value, value)}
              onChange={(e) => handleChange(e, item.value)}
              icon={item.icon ?? icon}
              checkedIcon={item.checkedIcon ?? checkedIcon}
              required={item.required}
              sx={item.sx ?? itemSx}
            />
          }
        />
      ))}
      {showRefresh && !readOnly && !disabled && (
        <FormControlLabel
          className="refresh-icon-i"
          label={refreshText}
          control={
            <Tooltip arrow placement="top" title={refreshText}>
              <IconButton size={size} onClick={doRefresh}>
                {refreshIcon}
              </IconButton>
            </Tooltip>
          }
        />
      )}
    </FormGroup>
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

export interface CheckboxGroupBaseProps
  extends FieldBaseProps<any[]>,
    Omit<FormGroupProps, "sx" | "defaultValue" | "value" | "onChange">,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FormItemExtraProps,
    RefreshOptionsProps {
  /** 选项或返回选项的函数。
   *选项值：{value,label,color?,size?,disabled?,icon?,required?,checkedIcon?}
   */
  options?: IFieldPropOptions<any, string | number, CheckboxOptionItem>;
  minCount?: number;
  maxCount?: number;
  layout?: "horizontal" | "vertical";
  /** 传递给每个checkbox项 */
  itemSx?: SxProps;
  /** 传递给FormGroup */
  sx?: SxProps;
  labelPlacement?: "bottom" | "end" | "start" | "top";
  /** 未选中时的图标 */
  icon?: ReactNode;
  /** 选中时的图标 */
  checkedIcon?: ReactNode;
  size?: "medium" | "small";
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | string;
}

interface CheckboxOptionItem<V = any, L extends ReactNode = ReactNode> extends IFieldOptionItem<V, L> {
  size?: CheckboxProps["size"];
  color?: CheckboxProps["color"];
  icon?: CheckboxProps["icon"];
  checkedIcon?: CheckboxProps["checkedIcon"];
  required?: boolean;
  sx?: SxProps;
}
