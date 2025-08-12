import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { isVoidField } from "@formily/core"
import { connect, mapProps, ReactFC } from "@formily/react"
import { Popover, Tooltip } from "antd"
import cls from "classnames"
import React, { useState } from "react"
import { FormLayoutShallowContext } from "../form-layout"
import { pickDataProps, usePrefixCls } from "../__builtins__"
import { useFormItemLayout, useOverflow } from "./hooks"
import { Field as ChakraField, Text, HStack, Box, Popover as ChakraPopover, Portal } from "@chakra-ui/react"
import useStyle from "./style"
import { IFormItemProps } from "./types"

export * from "./hooks"
export * from "./types"

type ComposeFormItem = ReactFC<IFormItemProps> & {
  BaseItem: ReactFC<IFormItemProps>
}

const ICON_MAP: any = {
  error: <CloseCircleOutlined />,
  success: <CheckCircleOutlined />,
  warning: <ExclamationCircleOutlined />,
} as const

export const BaseItem: React.FC<React.PropsWithChildren<IFormItemProps>> = ({ children, ...props }) => {
  const [active, setActive] = useState(false)
  const formLayout = useFormItemLayout(props)

  const { containerRef, contentRef, overflow } = useOverflow<HTMLDivElement, HTMLSpanElement>()
  const {
    label,
    style,
    layout,
    colon = true,
    addonBefore,
    addonAfter,
    asterisk,
    feedbackStatus,
    extra,
    feedbackText,
    fullness,
    feedbackLayout,
    feedbackIcon,
    getPopupContainer,
    inset,
    bordered = true,
    labelWidth,
    wrapperWidth,
    labelCol,
    wrapperCol,
    labelAlign,
    wrapperAlign = "left",
    size,
    labelWrap,
    wrapperWrap,
    tooltipLayout,
    tooltip,
    tooltipIcon,
  } = formLayout
  const labelStyle = { ...formLayout.labelStyle }
  const wrapperStyle = { ...formLayout.wrapperStyle }
  const prefixCls = usePrefixCls("formily-item", props)
  const [wrapSSR, hashId] = useStyle(prefixCls)
  // fixedWidth
  let enableCol = false
  if (labelWidth || wrapperWidth) {
    if (labelWidth) {
      labelStyle.width = labelWidth === "auto" ? undefined : labelWidth
      labelStyle.maxWidth = labelWidth === "auto" ? undefined : labelWidth
    }
    if (wrapperWidth) {
      wrapperStyle.width = wrapperWidth === "auto" ? undefined : wrapperWidth
      wrapperStyle.maxWidth = wrapperWidth === "auto" ? undefined : wrapperWidth
    }
    // Wrapper mode
  }
  if (labelCol || wrapperCol) {
    if (!labelStyle.width && !wrapperStyle.width && layout !== "vertical") {
      enableCol = true
    }
  }

  const formatChildren =
    feedbackLayout === "popover" ? (
      <ChakraPopover.Root open={!!feedbackText} positioning={{ placement: "bottom-end" }}>
        <ChakraPopover.Trigger asChild>
          <>
            {children}
          </>
        </ChakraPopover.Trigger>
        <Portal>
          <ChakraPopover.Positioner>
            <ChakraPopover.Content>
              <ChakraPopover.Arrow />
              <ChakraPopover.Body>
                <ChakraPopover.Title>
                  {feedbackStatus ? ICON_MAP[feedbackStatus] : null} {feedbackText}
                </ChakraPopover.Title>

              </ChakraPopover.Body>
            </ChakraPopover.Content>
          </ChakraPopover.Positioner>
        </Portal>
      </ChakraPopover.Root>
    ) : (
      children
    )

  const gridStyles: React.CSSProperties = {}

  const getOverflowTooltip = () => {
    if (overflow) {
      return (
        <div>
          <div>{label}</div>
          <div>{tooltip}</div>
        </div>
      )
    }
    return tooltip
  }

  const renderLabelText = () => {
    const labelChildren = (
      <div className={`${prefixCls}-label-content`} ref={containerRef}>
        <span ref={contentRef}>
          {asterisk && <span className={`${prefixCls}-asterisk`}>{"*"}</span>}
          <label>{label}</label>
        </span>
      </div>
    )

    if ((tooltipLayout === "text" && tooltip) || overflow) {
      return (
        <Tooltip placement="top" title={getOverflowTooltip()}>
          {labelChildren}
        </Tooltip>
      )
    }
    return labelChildren
  }

  const renderTooltipIcon = () => {
    if (tooltip && tooltipLayout === "icon" && !overflow) {
      return (
        <span className={`${prefixCls}-label-tooltip-icon`}>
          <Tooltip placement="top" title={tooltip}>
            {tooltipIcon}
          </Tooltip>
        </span>
      )
    }
  }

  const renderLabel = () => {
    if (!label) return null
    return (
      <div
        className={cls({
          [`${prefixCls}-label`]: true,
          [`${prefixCls}-label-tooltip`]: (tooltip && tooltipLayout === "text") || overflow,
          [`${prefixCls}-item-col-${labelCol}`]: enableCol && !!labelCol,
        })}
        style={labelStyle}
      >
        {renderLabelText()}
        {renderTooltipIcon()}
        {label !== " " && <span className={`${prefixCls}-colon`}>{colon ? ":" : ""}</span>}
      </div>
    )
  }

  return (
    <ChakraField.Root
      orientation={props.layout}
      {...pickDataProps(props)}
      css={{
        ...style,
        ...gridStyles,
        w: "full",
      }}
      data-grid-span={props.gridSpan}
    >
      <ChakraField.Label>
        {label}
        {asterisk && <ChakraField.RequiredIndicator />}
      </ChakraField.Label>
      <HStack w="full" justify="space-between" align="center">
        <HStack>{addonBefore && <Box>{addonBefore}</Box>}</HStack>
        <HStack flex={1}>
          <FormLayoutShallowContext.Provider value={{}}>{formatChildren}</FormLayoutShallowContext.Provider>
        </HStack>
        <HStack justify="flex-end">
          {feedbackIcon && <Box>{feedbackIcon}</Box>}
          {addonAfter && <Box>{addonAfter}</Box>}
        </HStack>
      </HStack>

      {!!feedbackText && feedbackLayout !== "popover" && feedbackLayout !== "none" && <Box>{feedbackText}</Box>}
      {extra && <Box>{extra}</Box>}
    </ChakraField.Root>
  )
}

// Adaptation
export const FormItem: ComposeFormItem = Object.assign(
  connect(
    BaseItem,
    mapProps((props, field) => {
      if (isVoidField(field))
        return {
          label: field.title || props.label,
          asterisk: props.asterisk,
          extra: props.extra || field.description,
        }
      if (!field) return props
      const takeFeedbackStatus = () => {
        if (field.validating) return "pending"
        return field.decoratorProps.feedbackStatus || field.validateStatus
      }
      const takeMessage = () => {
        const split = (messages: any[]) => {
          return messages.reduce((buf, text, index) => {
            if (!text) return buf
            return index < messages.length - 1 ? buf.concat([text, ", "]) : buf.concat([text])
          }, [])
        }
        if (field.validating) return
        if (props.feedbackText) return props.feedbackText
        if (field.selfErrors.length) return split(field.selfErrors)
        if (field.selfWarnings.length) return split(field.selfWarnings)
        if (field.selfSuccesses.length) return split(field.selfSuccesses)
      }
      const takeAsterisk = () => {
        if ("asterisk" in props) {
          return props.asterisk
        }
        if (field.required && field.pattern !== "readPretty") {
          return true
        }
        return false
      }
      return {
        label: props.label || field.title,
        feedbackStatus: takeFeedbackStatus(),
        feedbackText: takeMessage(),
        asterisk: takeAsterisk(),
        extra: props.extra || field.description,
      }
    }),
  ),
  {
    BaseItem,
  },
)

export default FormItem
