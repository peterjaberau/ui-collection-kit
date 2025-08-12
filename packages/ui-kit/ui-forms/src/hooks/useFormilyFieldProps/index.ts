import type { ReactNode } from "react";
import { useField } from "@formily/react";
import { isVoidField } from "@formily/core";

import { useFormLayout } from "../../layout/FormLayout";
import type { ICommonProps } from "../../types";
import type { CommonLayoutProps } from "../../layout/FormLayout";

interface IUseFormilyFieldConfig {
  label?: boolean;
  required?: boolean;
  error?: boolean;
  tooltip?: boolean;
  options?: boolean;
  display?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  feedbackText?: boolean;
  feedbackStatus?: boolean;
  fullWidth?: boolean;
  labelPosition?: boolean;
  labelAlign?: boolean;
  labelWidth?: boolean;
  labelWrap?: boolean;
  wrapperAlign?: boolean;
  wrapperWidth?: boolean;
  wrapperWrap?: boolean;
  colon?: boolean;
  tooltipIcon?: boolean;
  tooltipLayout?: boolean;
  showFeedback?: boolean;
  feedbackLayout?: boolean;
  noFormLayout?: boolean;
  showInnerLabel?: boolean;
  keepFeedbackSpace?: boolean;
}

interface IProps extends ICommonProps, CommonLayoutProps {
  label?: ReactNode;
  tooltip?: ReactNode;
  defaultValue?: any;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  required?: boolean;
  options?: any;
  display?: "visible" | "hidden" | "none" | string;
  feedbackStatus?: "error" | "warning" | "success" | "pending" | string;
  feedbackText?: ReactNode;
  noFormLayout?: boolean;
  withFormItem?: boolean;
}

import { UseFormilyFieldPropsFormFieldBaseConfig, UseFormilyFieldPropsFormItemConfig } from "../../utils";

/** hooks used to process FormItem and field item props can obtain layout, label, error and other information from FormLayout or Field*/
export function useFormilyFieldProps<T extends IProps = IProps>(props: T, extraConfig: IUseFormilyFieldConfig = {}) {
  const formatProps: T = {
    ...props,
  };
  const layout = useFormLayout();
  const withFormItem = props?.withFormItem ?? (props?.noFormLayout ? undefined : layout?.withFormItem);
  formatProps.withFormItem = withFormItem;
  const field = useField();
  if ((props?.noField || !field) && (!layout || props?.noFormLayout)) return formatProps;

  let config = {} as IUseFormilyFieldConfig;
  if (withFormItem) {
    config = {
      ...UseFormilyFieldPropsFormItemConfig,
      ...UseFormilyFieldPropsFormFieldBaseConfig,
      ...(extraConfig || {}),
    };
  } else {
    config = { ...UseFormilyFieldPropsFormFieldBaseConfig, ...(extraConfig || {}) };
  }
  if (layout && !props?.noFormLayout) {
    formatProps.noField = props.noField ?? layout.noField;
    if (config?.fullWidth) formatProps.fullWidth = props.fullWidth ?? layout?.fullWidth;
    if (config?.labelPosition) formatProps.labelPosition = props.labelPosition ?? layout.labelPosition;
    if (config?.labelAlign) formatProps.labelAlign = props.labelAlign ?? layout.labelAlign;
    if (config?.labelWidth) formatProps.labelWidth = props.labelWidth ?? layout.labelWidth;
    if (config?.labelWrap) formatProps.labelWrap = props.labelWrap ?? layout.labelWrap;
    if (config?.wrapperAlign) formatProps.wrapperAlign = props.wrapperAlign ?? layout.wrapperAlign;
    if (config?.wrapperWidth) formatProps.wrapperWidth = props.wrapperWidth ?? layout.wrapperWidth;
    if (config?.wrapperWrap) formatProps.wrapperWrap = props.wrapperWrap ?? layout.wrapperWrap;
    if (config?.colon) formatProps.colon = props.colon ?? layout.colon;
    if (config?.tooltipIcon) formatProps.tooltipIcon = props.tooltipIcon ?? layout.tooltipIcon;
    if (config?.tooltipLayout) formatProps.tooltipLayout = props.tooltipLayout ?? layout.tooltipLayout;
    if (config?.showFeedback) formatProps.showFeedback = props.showFeedback ?? layout.showFeedback;
    if (config?.feedbackLayout) formatProps.feedbackLayout = props.feedbackLayout ?? layout.feedbackLayout;
    if (config?.showInnerLabel) formatProps.showInnerLabel = props.showInnerLabel ?? layout.showInnerLabel;
    if (config?.keepFeedbackSpace) formatProps.keepFeedbackSpace = props.keepFeedbackSpace ?? layout.keepFeedbackSpace;
  }
  if (field && !props.noField) {
    if (config?.display) {
      formatProps.display = props.display ?? field.display;
    }
    if (config?.label) {
      formatProps.label = props.label ?? field.title;
    }
    if (config?.tooltip) {
      formatProps.tooltip = props?.tooltip ?? field.description;
    }
  }
  if (formatProps.noField || !field || isVoidField(field)) {
    return formatProps;
  }
  if (config?.defaultValue) {
    formatProps.defaultValue = field.initialValue ?? props.defaultValue;
  }
  if (config?.disabled) {
    formatProps.disabled = props.disabled ?? field.disabled;
  }
  if (config?.readOnly) {
    formatProps.readOnly = props.readOnly ?? field.readOnly;
  }
  if (config?.error) {
    formatProps.error = props.error ?? field.selfInvalid;
  }
  if (config?.required) {
    const takeRequired = () => {
      if (field.required && field.pattern !== "readPretty") {
        return true;
      }
      if ("required" in props) {
        return props.required;
      }
      return false;
    };
    formatProps.required = takeRequired();
  }
  if (config?.options) {
    formatProps.options = field.dataSource ?? props.options;
  }
  if (config?.feedbackStatus) {
    formatProps.feedbackStatus =
      props.feedbackStatus ??
      (field.validating ? "pending" : field.decoratorProps.feedbackStatus || field.validateStatus);
  }
  if (config?.feedbackText) {
    const takeMessage = () => {
      if (field.validating) return;
      if (props.feedbackText) return props.feedbackText;
      const split = (messages: any[]) => {
        return messages.reduce((buf, text, index) => {
          if (!text) return buf;
          return index < messages.length - 1 ? buf.concat([text, ", "]) : buf.concat([text]);
        }, []);
      };
      if (field.selfErrors.length) return split(field.selfErrors);
      if (field.selfWarnings.length) return split(field.selfWarnings);
      if (field.selfSuccesses.length) return split(field.selfSuccesses);
    };
    formatProps.feedbackText = takeMessage();
  }
  return formatProps;
}
