import type { CSSProperties, ReactNode } from "react";
import { useControllableValue, useMemoizedFn, useSafeState } from "ahooks";
import { FormControlLabel, Radio, RadioGroup as MuiRadioGroup, Skeleton, SxProps, IconButton } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { isEqual } from "@iimm/shared";

import { useFetchOptions } from "../../hooks";
import { FormItemBase, type FormItemBaseProps } from "../../layout";
import { COLORS } from "../../utils";
import type { IFieldPropOptions, FieldBaseProps, RefreshOptionsProps } from "../../types";

export const RadioGroupBase = (props: RadioGroupBaseProps) => {
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
    layout = "horizontal",
    sx,
    size,
    color,
    disabled,
    itemSx,
    readOnly,
    labelPlacement,
    icon,
    checkedIcon,
    row,
    // eslint-disable-next-line no-unused-vars
    showRefresh,
    refresh: refreshProp,
    onRefreshChange: onRefreshChangeProp,
    refreshText = "刷新选项",
    refreshIcon = <Refresh sx={{ color: "#eb2f96" }} />,
    name,
    keepFeedbackSpace,
    ...restProps
  } = props;
  const [loading, setLoading] = useSafeState(false);
  const [refresh, onRefreshChange] = useControllableValue(props, {
    trigger: "onRefreshChange",
    valuePropName: "refresh",
    defaultValue: 0,
  });
  const options = useFetchOptions(optionsProp, { onLoading: setLoading, deps: refresh });
  const [value, onChange] = useControllableValue(props);

  const doRefresh = useMemoizedFn(() => {
    onRefreshChange((+refresh || 0) + 1);
  });

  const handleChange = useMemoizedFn((value) => {
    if (!readOnly) onChange(value ?? null);
  });

  const dom = loading ? (
    <Skeleton variant="rectangular" animation="wave" width={"100%"}>
      <Radio />
    </Skeleton>
  ) : (
    <MuiRadioGroup row={row ?? layout === "horizontal"} name={name} sx={sx} {...restProps}>
      {options.map((item, index) => (
        <FormControlLabel
          key={index}
          label={item.label ?? ""}
          value={item.value}
          labelPlacement={labelPlacement}
          control={
            <Radio
              size={item?.size ?? size}
              color={item.color && COLORS.includes(item.color) ? item.color : color}
              disabled={item.disabled ?? disabled}
              icon={item.icon ?? icon}
              checkedIcon={item.checkedIcon ?? checkedIcon}
              required={item.required}
              sx={item.sx ?? itemSx}
              value={item.value}
              onChange={() => handleChange(item.value)}
              checked={isEqual(item.value, value)}
            />
          }
        />
      ))}
      {showRefresh && !readOnly && !disabled && (
        <FormControlLabel
          className="refresh-icon-i"
          label={refreshText}
          control={
            <IconButton
              size={size}
              onClick={doRefresh}
              title={typeof refreshText === "string" ? refreshText : undefined}
            >
              {refreshIcon}
            </IconButton>
          }
        />
      )}
    </MuiRadioGroup>
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

export interface RadioGroupBaseProps
  extends FieldBaseProps<any>,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    RefreshOptionsProps {
  /** 选项或返回选项的函数。
   *选项值：{value,label,color?,size?,disabled?,icon?,required?,checkedIcon?}
   */
  options?: IFieldPropOptions;
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
  name?: string;

  /** 不从Field获取信息 */
  noField?: boolean;
  /** 不从FormLayout获取fullWidth信息 */
  noFormLayout?: boolean;
  /** 外层包裹FormItemBase? */
  withFormItem?: boolean;
  /** 当 withFormItem=true时传递给FormItemBase的className*/
  formItemCls?: string;
  /** 当 withFormItem=true时传递给FormItemBase的style*/
  formItemStyle?: CSSProperties;
  /** 当 withFormItem=true时，传递给formItem的内部className的前缀，可以在引入自定义样式时使用
   * @default iimm 可以通过样式覆盖来修改FormItem内部样式(不需要传递此值)
   */
  formItemPrefixCls?: string;
  row?: boolean;
}
