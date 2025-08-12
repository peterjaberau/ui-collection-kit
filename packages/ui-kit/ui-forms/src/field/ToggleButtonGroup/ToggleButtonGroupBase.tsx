import { useSafeState, useMemoizedFn, useControllableValue, useCreation } from "ahooks";
import {
  Checkbox,
  Skeleton,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButton as MuiToggleButton,
  Tooltip,
  IconButton,
} from "@mui/material";
import type { SxProps, ToggleButtonGroupProps as MuiToggleButtonGroupProps } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { isEqual, isInArray } from "@iimm/shared";

import { FormItemBase, type FormItemBaseProps, type FormItemExtraProps } from "../../layout";
import { COLORS } from "../../utils";
import { useFetchOptions } from "../../hooks";
import type { FieldBaseProps, IFieldPropOptions, RefreshOptionsProps } from "../../types";

const defaultItemSx: any = { fontWeight: "bold" };

export const ToggleButtonGroupBase = (props: ToggleButtonGroupBaseProps) => {
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
    noField,
    noFormLayout,
    withFormItem,
    minCount,
    maxCount,
    exclusive,
    orientation,
    layout,
    size = "small",
    color = "primary",
    disabled,
    readOnly,
    itemSx: itemSxProp = defaultItemSx,
    itemWidth,
    itemMinWidth = 50,
    itemMaxWidth,
    itemFullWidth,
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
  const [value, onChange] = useControllableValue<any>(props);
  const [optionsValues, setOptionsValues] = useSafeState<any[]>([]);

  const doRefresh = useMemoizedFn(() => {
    onRefreshChange((+refresh || 0) + 1);
  });

  const options = useFetchOptions(optionsProp, {
    onLoading: setLoading,
    callback: (opts) => setOptionsValues(opts.map((ele) => ele.value)),
    deps: refresh,
  });

  const itemSx = useCreation(() => {
    if (!itemWidth && !itemMaxWidth && !itemMinWidth) return itemSxProp;
    const sx: any = { ...(itemSxProp || {}) };
    if (!itemFullWidth && itemWidth) {
      sx.width = itemWidth;
    }
    if (itemMinWidth) sx.minWidth = itemMinWidth;
    if (itemMaxWidth) sx.maxWidth = itemMaxWidth;
    return sx;
  }, [itemSxProp, itemWidth, itemFullWidth, itemMinWidth, itemMaxWidth]);

  const handleChange = useMemoizedFn((v) => {
    if (readOnly) {
      return;
    }
    if (exclusive) {
      if (!(minCount === 1 && v !== undefined)) {
        onChange(v);
      }
    } else {
      const newValue = [...(value || [])];
      if (isInArray(v, newValue)) {
        const index = newValue.findIndex((ele) => isEqual(v, ele));
        newValue.splice(index, 1);
      } else {
        newValue.push(v);
      }
      if (
        !(
          (minCount !== undefined && newValue.length < minCount) ||
          (maxCount !== undefined && newValue.length > maxCount)
        )
      ) {
        newValue.sort((a, b) => {
          const indexA = options.findIndex((opt) => isEqual(a, opt.value));
          const indexB = options.findIndex((opt) => isEqual(b, opt.value));
          return indexA - indexB;
        });
        onChange(newValue.filter((item) => isInArray(item, optionsValues)));
      }
    }
  });

  const dom = loading ? (
    <Skeleton variant="rectangular" animation="wave" width={"100%"}>
      <Checkbox />
    </Skeleton>
  ) : (
    <MuiToggleButtonGroup
      orientation={orientation ?? layout}
      disabled={disabled}
      exclusive={exclusive}
      fullWidth={itemFullWidth}
      size={size}
      color={color}
      {...restProps}
    >
      {options.map((item, index) => (
        <MuiToggleButton
          key={index}
          size={item?.size ?? size}
          color={item.color && COLORS.includes(item.color) ? item.color : color}
          disabled={item.disabled ?? disabled}
          value={item.value}
          onClick={() => handleChange(item.value)}
          selected={exclusive ? isEqual(item.value, value) : isInArray(item.value, value)}
          sx={item?.sx ?? itemSx}
        >
          {item.label}
        </MuiToggleButton>
      ))}
      {showRefresh && !readOnly && !disabled && (
        <Tooltip arrow placement="top" title={refreshText}>
          <IconButton size={size} onClick={doRefresh} className="refresh-icon-i">
            {refreshIcon}
          </IconButton>
        </Tooltip>
      )}
    </MuiToggleButtonGroup>
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

export interface ToggleButtonGroupBaseProps<V = any>
  extends FieldBaseProps<V | V[]>,
    Omit<MuiToggleButtonGroupProps, "value" | "onChange" | "defaultValue">,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FormItemExtraProps,
    RefreshOptionsProps {
  options?: IFieldPropOptions;
  minCount?: number;
  maxCount?: number;
  layout?: "horizontal" | "vertical";
  itemSx?: SxProps;
  itemFullWidth?: boolean;
  itemWidth?: number | string;
  itemMinWidth?: number | string;
  itemMaxWidth?: number | string;
}
