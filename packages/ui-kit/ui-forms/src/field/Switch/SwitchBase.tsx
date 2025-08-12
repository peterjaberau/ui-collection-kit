import { useControllableValue } from "ahooks";
import { Switch as MuiSwitch, Stack, useTheme, type SwitchProps as MuiSwitchProps } from "@mui/material";

import { FormItemBase, type FormItemBaseProps } from "../../layout";

export const SwitchBase = (props: SwitchBaseProps) => {
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
    readOnly,
    left,
    right,
    spacing,
    color = "primary",
    edge,
    keepFeedbackSpace,
    ...restProps
  } = props;

  const [value, onChange] = useControllableValue(props);

  const theme = useTheme();

  const dom = (
    <Stack direction="row" alignItems="center" spacing={spacing}>
      {!!left && (
        <span
          onClick={() => {
            if (!readOnly && !props.disabled) onChange(false);
          }}
        >
          <label
            style={{
              cursor: readOnly || props.disabled ? "default" : "pointer",
              color: error && !value ? "red" : undefined,
            }}
          >
            {left}
          </label>
        </span>
      )}
      <MuiSwitch
        required={required}
        checked={!!value}
        onChange={(e) => {
          if (!readOnly) onChange(e.target.checked);
        }}
        edge={edge ?? (left ? false : "start")}
        {...restProps}
      />
      {!!right && (
        <span
          onClick={() => {
            if (!readOnly && !props.disabled) onChange(true);
          }}
        >
          <label
            style={{
              cursor: readOnly || props.disabled ? "default" : "pointer",
              // @ts-ignore
              color: value ? (error ? "red" : theme.palette?.[color]?.dark) : undefined,
            }}
          >
            {right}
          </label>
        </span>
      )}
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

export interface SwitchBaseProps
  extends Omit<MuiSwitchProps, "onChange" | "checked">,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls"> {
  value?: boolean;
  onChange?: (v?: boolean) => void;

  readOnly?: boolean;
  error?: boolean;
  spacing?: number;
  left?: React.ReactNode;
  right?: React.ReactNode;

  /** 不从Field获取信息 */
  noField?: boolean;
  /** 不从FormLayout获取fullWidth信息 */
  noFormLayout?: boolean;
  /** 外层包裹FormItemBase? */
  withFormItem?: boolean;
  /** 当 withFormItem=true时传递给FormItemBase的className*/
  formItemCls?: string;
  /** 当 withFormItem=true时传递给FormItemBase的style*/
  formItemStyle?: React.CSSProperties;
  /** 当 withFormItem=true时，传递给formItem的内部className的前缀，可以在引入自定义样式时使用
   * @default iimm 可以通过样式覆盖来修改FormItem内部样式(不需要传递此值)
   */
  formItemPrefixCls?: string;
}
