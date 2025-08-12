import type { CSSProperties, ReactNode } from "react";
import { useCreation } from "ahooks";
import { observer } from "@formily/react";
import { Tooltip } from "@mui/material";
import {
  ErrorOutlineOutlined,
  HighlightOffOutlined,
  CheckCircleOutline,
  RemoveOutlined,
  HelpOutline,
} from "@mui/icons-material";
import { Popover } from "mui-component";
import { useOverflow } from "@iimm/react-shared";
import cls from "classnames";

import './style.css'
import type { CommonLayoutProps } from "../FormLayout";

export interface FormItemBaseProps extends Omit<CommonLayoutProps, "noField"> {
  /** formItem内部className的前缀，可以在引入自定义样式时使用
   * @default iimm 可以通过样式覆盖来修改FormItem内部样式(不需要传递此值)
   */
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  noLabel?: boolean;
  label?: ReactNode;
  /** 传递给包裹的FormItem的labelStyle */
  labelStyle?: CSSProperties;
  wrapperStyle?: CSSProperties;
  tooltip?: ReactNode;
  required?: boolean;
  feedbackStatus?: "error" | "warning" | "success" | "pending" | "default" | (string & {});
  feedbackText?: ReactNode;
  feedbackIcon?: ReactNode;
  /** formItem下部额外内容 */
  extra?: ReactNode;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  /** formItem下部额外内容的className */
  extraCls?: string;
  feedbackCls?: string;
  /** 当不显示label/title时是否保持label/title所占空间？ */
  keepTopSpace?: boolean;
  /** 在没有内容时使用空格填充feedback?
   * @default true
   */
  keepFeedbackSpace?: boolean;
  error?: boolean;
  children?: ReactNode;
}

/** 当包裹内容时，一些用来传递给FormItemBase的props,主要用来自定义组件 */
export interface FormItemExtraProps {
  /** 不从Field获取信息 */
  noField?: boolean;
  /** 不从FormLayout获取fullWidth等信息 */
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

const ICON_MAP: Record<string, ReactNode> = {
  error: <HighlightOffOutlined fontSize="small" />,
  success: <CheckCircleOutline fontSize="small" />,
  warning: <ErrorOutlineOutlined fontSize="small" />,
};

export const FormItemBase = observer(
  (props: FormItemBaseProps) => {
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
      labelStyle: labelSx,
      wrapperStyle: wrapperSx,
      tooltip,
      required,
      feedbackStatus,
      feedbackText,
      feedbackIcon,
      extra,
      addonBefore,
      addonAfter,
      children,
      className,
      style,
      error,
      feedbackCls,
      extraCls,
      keepTopSpace,
      keepFeedbackSpace,
    } = props;
    const prefix = `def-form-item`;
    const { overflow, containerRef, contentRef } = useOverflow();
    const labelStyle = useCreation(() => {
      const sx = labelSx || {};
      if (labelWidth && labelPosition === "left") {
        sx.width = labelWidth === "auto" ? undefined : labelWidth;
        sx.maxWidth = labelWidth === "auto" ? undefined : labelWidth;
      }
      return sx;
    }, [labelSx, labelWidth, labelPosition]);
    const wrapperStyle = useCreation(() => {
      const sx = wrapperSx || {};
      if (wrapperWidth) {
        sx.width = wrapperWidth === "auto" ? undefined : wrapperWidth;
        sx.maxWidth = wrapperWidth === "auto" ? undefined : wrapperWidth;
      }
      return sx;
    }, [wrapperSx, wrapperWidth]);
    const getOverflowTooltip = () => {
      if (overflow) {
        return (
          <div>
            <div>{label}</div>
            {!!tooltip && tooltip === "text" && <div>{tooltip}</div>}
          </div>
        );
      }
    };
    const renderLabelText = () => {
      if (labelPosition === "inner" && keepTopSpace) {
        return (
          <div className={`${prefix}-label-content`}>
            <span>
              <label>&nbsp;</label>
            </span>
          </div>
        );
      }
      const labelChildren = (
        <div
          className={cls({
            [`${prefix}-label-content`]: true,
            // @ts-ignore
          })}
          ref={containerRef as any}
        >
          <span ref={contentRef}>
            {required && <span className={`${prefix}-required`}>{"*"}</span>}
            <label>{label}</label>
          </span>
        </div>
      );
      if ((tooltipLayout === "text" && tooltip) || overflow) {
        return (
          <Tooltip placement="top" arrow title={getOverflowTooltip()}>
            {labelChildren}
          </Tooltip>
        );
      }
      return labelChildren;
    };
    const renderTooltipIcon = () => {
      if (tooltip && (tooltipLayout === "icon" || !tooltipLayout) && labelPosition !== "inner") {
        return (
          <span>
            <Tooltip placement="top" title={tooltip} arrow>
              <span style={{ cursor: "help" }}>{tooltipIcon ?? <HelpOutline fontSize="small" />}</span>
            </Tooltip>
          </span>
        );
      }
    };
    const renderLabel = () => {
      if (noLabel || !label || (labelPosition === "inner" && !keepTopSpace)) return null;
      return (
        <div
          style={labelStyle}
          className={cls({
            [`${prefix}-label`]: true,
            [`${prefix}-label-tooltip`]: !!tooltip && tooltipLayout === "text" && labelPosition !== "inner",
          })}
        >
          {renderLabelText()}
          {renderTooltipIcon()}
          {label !== " " && labelPosition !== "inner" && !!colon && <span className={`${prefix}-colon`}>:</span>}
        </div>
      );
    };
    return (
      <div
        style={style}
        className={cls({
          [`${prefix}`]: true,
          [`${prefix}-${feedbackStatus}`]: !!feedbackStatus,
          [`${prefix}-feedback-has-text`]: !!feedbackText,
          [`${prefix}-fullness`]: !!fullWidth || !!feedbackIcon,
          [`${prefix}-label-align-${labelAlign}`]: true,
          [`${prefix}-control-align-${wrapperAlign}`]: true,
          [`${prefix}-label-wrap`]: !!labelWrap,
          [`${prefix}-control-wrap`]: !!wrapperWrap,
          [`${className}`]: !!className,
        })}
      >
        <div
          className={cls({
            [`${prefix}-row`]: labelPosition === "left",
            [`${prefix}-column`]: labelPosition === "top" || !labelPosition,
            [`${prefix}-error`]: !!error,
            [`${prefix}-${feedbackStatus}-help`]: ["warning", "error"].includes(feedbackStatus as string),
            [`${prefix}-default-help`]: !["warning", "error"].includes(feedbackStatus as string) && !error,
          })}
        >
          {renderLabel()}
          <div className={`${prefix}-control`}>
            <div className={cls(`${prefix}-control-content`)}>
              {!!addonBefore && <div className={cls(`${prefix}-addon-before`)}>{addonBefore}</div>}
              <div
                style={wrapperStyle}
                className={cls({
                  [`${prefix}-control-content-component`]: true,
                  [`${prefix}-control-content-component-has-feedback-icon`]: feedbackLayout === "popover",
                })}
              >
                {children}
                {showFeedback &&
                  feedbackLayout === "popover" &&
                  (["warning", "error", "success"].includes(feedbackStatus as string) ? (
                    <Popover
                      triggerType="hover"
                      trigger={
                        <div
                          className={cls({
                            [`${prefix}-feedback-icon}`]: true,
                            [`${prefix}-${feedbackStatus}-help`]: !!feedbackStatus,
                          })}
                        >
                          {feedbackIcon ?? ICON_MAP[feedbackStatus as string]}
                        </div>
                      }
                      content={
                        <div className={cls({ [`${prefix}-help`]: true })}>
                          <span className={`${prefix}-${feedbackStatus}-help`}>
                            {ICON_MAP[feedbackStatus as string]}
                          </span>
                          {feedbackText}
                        </div>
                      }
                    />
                  ) : (
                    <div
                      className={cls({
                        [`${prefix}-feedback-icon}`]: true,
                        [`${prefix}-blank-help`]: true,
                      })}
                    >
                      {feedbackIcon ?? <RemoveOutlined fontSize="small" />}
                    </div>
                  ))}
              </div>
              {!!addonAfter && <div className={cls(`${prefix}-addon-after`)}>{addonAfter}</div>}
            </div>
          </div>
        </div>
        {showFeedback && feedbackLayout !== "popover" && (
          <div
            className={cls({
              [`${prefix}-${feedbackStatus}-help`]: !!feedbackStatus,
              [`${prefix}-help`]: true,
              [`${feedbackCls}`]: !!feedbackCls,
            })}
          >
            {feedbackText || (keepFeedbackSpace !== false && <>&nbsp;</>)}
          </div>
        )}
        {!!extra && <div className={cls({ [`${prefix}-extra`]: true, [`${extraCls}`]: !!extraCls })}>{extra}</div>}
      </div>
    );
  },
  { displayName: "iimm.Mui.Formily.FormItemBase" }
);
