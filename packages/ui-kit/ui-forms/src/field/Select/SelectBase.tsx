import { type CSSProperties, type ReactNode, useRef } from "react";
import { useCreation, useControllableValue, useMemoizedFn, useSafeState, useDeepCompareEffect } from "ahooks";
import { Autocomplete, type AutocompleteProps, IconButton, TextField, type FormLabelProps } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { isEqual, isInArray } from "@iimm/shared";

import { useFetchOptions } from "../../hooks";
import { renderInnerLabel } from "../../utils";
import { FormItemBase, type FormItemBaseProps, type FormItemExtraProps } from "../../layout";
import type { FieldBaseProps, IFieldOptionItem, IFieldPropOptions, RefreshOptionsProps } from "../../types";

export const SelectBase = (props: SelectBaseProps) => {
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
    showInnerLabel,
    innerLabelProps,
    // eslint-disable-next-line no-unused-vars
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
    noField,
    noFormLayout,
    withFormItem,
    allowExtraValue,
    placeholder,
    variant = "outlined",
    disableCloseOnSelect,
    // eslint-disable-next-line no-unused-vars
    showRefresh,
    refresh: refreshProp,
    onRefreshChange: onRefreshChangeProp,
    refreshText = "刷新选项",
    refreshIcon = <Refresh />,
    size = "small",
    keepFeedbackSpace,
    autoSelectSingleOption,
    ...restProps
  } = props;
  const fetchRef = useRef(false);
  const [refresh, onRefreshChange] = useControllableValue(props, {
    trigger: "onRefreshChange",
    valuePropName: "refresh",
    defaultValue: 0,
  });
  const [loading, setLoading] = useSafeState(false);
  const readOnly = useCreation(() => !!(props.readOnly || props.disabled), [props.readOnly, props.disabled]);
  const [value, onChange] = useControllableValue<any>(props);
  const options = useFetchOptions(optionsProp, { onLoading: setLoading, deps: refresh, fetchRef });

  const doRefresh = useMemoizedFn(() => {
    onRefreshChange((+refresh || 0) + 1);
  });

  const onValidChange = useMemoizedFn((e, v) => {
    if (allowExtraValue) {
      onChange(v);
    } else {
      const optValues = (options || []).map((ele) => ele.value);
      let value = props.multiple
        ? v
          ? v.filter((ele: IFieldOptionItem) => isInArray(ele.value, optValues))
          : v
        : !v || isInArray(v.value, optValues)
          ? v
          : null;
      if (autoSelectSingleOption && !props.multiple && !value) {
        const validOptions = (options || []).filter((x) => !x.disabled);
        if (validOptions.length === 1) {
          value = validOptions[0];
        }
      }
      onChange(value);
    }
  });

  const syncOptionsValue = useMemoizedFn(() => {
    onValidChange(undefined, value);
  });

  const autoSelectSingleOptionFn = useMemoizedFn(() => {
    if (readOnly) return;
    if (props.multiple) return;
    if (!autoSelectSingleOption) return;
    const validOption = (options || []).filter((x) => !x.disabled);
    if (validOption.length === 1 && !value) {
      onChange(validOption[0]);
    }
  });

  useDeepCompareEffect(() => {
    if (!readOnly) {
      if (!allowExtraValue && fetchRef.current) {
        syncOptionsValue();
      } else if (autoSelectSingleOption && !props.multiple) {
        autoSelectSingleOptionFn();
      }
    }
  }, [options, allowExtraValue, readOnly, autoSelectSingleOption, !!props.multiple]);

  const dom = (
    <Autocomplete
      loading={loading}
      options={options}
      value={value || (props.multiple ? [] : null)}
      fullWidth={fullWidth}
      onChange={onValidChange}
      isOptionEqualToValue={(op: any, v: any) => isEqual(op.value, v?.value)}
      disableCloseOnSelect={disableCloseOnSelect ?? props.multiple}
      renderInput={(params) => (
        <TextField
          placeholder={placeholder}
          {...(readOnly || !showRefresh
            ? params
            : {
                ...params,
                InputProps: {
                  ...(params.InputProps || {}),
                  endAdornment: (
                    <>
                      <IconButton
                        className="refresh-icon-i"
                        size="small"
                        title={refreshText}
                        onClick={doRefresh}
                        sx={{ p: 0 }}
                      >
                        {refreshIcon}
                      </IconButton>
                      {params?.InputProps?.endAdornment}
                    </>
                  ),
                },
              })}
          error={error}
          variant={variant}
          label={renderInnerLabel({ showInnerLabel, label, error, required, innerLabelProps, tooltip })}
        />
      )}
      getOptionDisabled={(option: any) => !!option?.disabled}
      size={size}
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

export interface SelectBaseProps<V extends IFieldOptionItem = IFieldOptionItem>
  extends FieldBaseProps<V | V[] | null | undefined>,
    Partial<
      Omit<
        AutocompleteProps<unknown, boolean | undefined, boolean | undefined, boolean | undefined>,
        "value" | "onChange" | "defaultValue" | "options"
      >
    >,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    RefreshOptionsProps,
    FormItemExtraProps {
  options?: IFieldPropOptions;
  /**当只有一个可选项时自动选择？仅单选模式时生效 */
  autoSelectSingleOption?: boolean;
  label?: string;
  /** 显示内部label? */
  /** 仅showInnerLabel=true时传递给内部Label */
  innerLabelProps?: FormLabelProps;
  showInnerLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  tooltip?: ReactNode;
  variant?: "outlined" | "filled" | "standard";
  /** 允许不再options里的值? */
  allowExtraValue?: boolean;

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
}
