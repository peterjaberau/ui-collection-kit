import { useRef, type ReactNode } from "react";
import { useControllableValue, useMemoizedFn, useSafeState, useKeyPress } from "ahooks";
import { Box, Chip, Divider, IconButton, InputBase, Paper, Stack } from "@mui/material";
import type { BoxProps, ChipProps, IconButtonProps, InputBaseProps, PaperProps, StackProps } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import TelegramIcon from "@mui/icons-material/Telegram";

import { FormItemBase, type FormItemBaseProps, type FormItemExtraProps } from "../../layout";
import type { FieldBaseProps } from "../../types";

const defaultAddIcon = <TelegramIcon />;

export const KeyWordsBase = (props: KeyWordsBaseProps) => {
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
    disabled,
    showClear = true,
    autoClear = true,
    textConvert,
    chipsBoxProps,
    containerStackProps,
    InputBaseProps,
    AddIcon = defaultAddIcon,
    AddButtonProps,
    chipProps,
    renderChip,
    InputBasePaperProps,
    keepFeedbackSpace,
  } = props;
  const ref = useRef(null);
  const [text, setText] = useSafeState("");
  const [value, onChange] = useControllableValue<string[]>(props, { defaultValue: [] });
  const onTextChange = useMemoizedFn((e) => {
    const v = (e.target.value || "").trim();
    setText(v);
  });
  const handleAddKeyWord = useMemoizedFn(() => {
    const txt = typeof textConvert === "function" ? textConvert(text) : text;
    if (!txt) {
      return;
    }
    if (!value?.includes(txt)) {
      const newValue = [...(value || [])];
      newValue.push(txt);
      onChange(newValue);
    }
    if (autoClear) {
      setText("");
    }
  });

  const handleRemoveKeyWord = useMemoizedFn((kw) => {
    const index = (value || []).findIndex((ele) => ele === kw);
    if (index !== -1) {
      const newValue = [...value];
      newValue.splice(index, 1);
      onChange(newValue);
    }
  });

  useKeyPress(["enter"], () => handleAddKeyWord(), { events: ["keyup"], target: ref });

  const dom = (
    <Stack spacing={1} {...(containerStackProps || {})} direction="column">
      {!readOnly && !disabled ? (
        <Paper
          {...(InputBasePaperProps || {})}
          sx={{
            p: "0px 4px",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            boxShadow: "0px 0px 1px 0px grey",
            ...(InputBasePaperProps?.sx || {}),
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="输入关键字并添加"
            {...(InputBaseProps || {})}
            value={text}
            onChange={onTextChange}
            ref={ref}
          />
          {showClear && !!text ? (
            <IconButton size="small" sx={{ color: "InactiveCaptionText" }} onClick={() => setText("")}>
              <ClearIcon />
            </IconButton>
          ) : null}
          <Divider
            orientation="vertical"
            sx={{
              height: 28,
            }}
          />
          <IconButton
            color="primary"
            disabled={!text || disabled}
            {...(AddButtonProps || {})}
            onClick={handleAddKeyWord}
          >
            {AddIcon}
          </IconButton>
        </Paper>
      ) : null}
      <Box display="flex" flexWrap="wrap" width="100%" alignItems="center" gap={0.5} {...(chipsBoxProps || {})}>
        {(value || []).map((ele, index) => {
          if (typeof renderChip === "function") {
            const Node = renderChip({
              item: ele,
              index,
              items: value,
              disabled: disabled || readOnly,
              handleRemoveKeyWord,
            });
            return Node || null;
          }
          return (
            <Chip
              key={ele}
              label={ele}
              variant={"outlined"}
              disabled={disabled}
              color={error ? "error" : index % 2 ? "secondary" : "info"}
              {...(chipProps || {})}
              onDelete={readOnly || disabled ? undefined : () => handleRemoveKeyWord(ele)}
            />
          );
        })}
      </Box>
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

interface IRenderChipParam {
  item: string;
  index: number;
  items: string[];
  disabled?: boolean;
  handleRemoveKeyWord: (keyword: string) => void;
}

export interface KeyWordsBaseProps
  extends FieldBaseProps<string[]>,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FormItemExtraProps {
  /** 文本输入框显示清空按钮? */
  showClear?: boolean;
  /** 点击添加后自动清空文本内容？ */
  autoClear?: boolean;
  /** 添加的文本转换成要格式化后的文本 */
  textConvert?: (keyword: string | number) => string;
  /** 最外层的垂直Stack的props */
  containerStackProps?: StackProps;
  /** 包裹输入框的Paper组件的props */
  InputBasePaperProps?: PaperProps;
  /** 输入文本框的组件InputBase的props */
  InputBaseProps?: Omit<InputBaseProps, "ref" | "value" | "onChange">;
  AddIcon?: ReactNode;
  AddButtonProps?: Omit<IconButtonProps, "onClick">;
  chipProps?: Omit<ChipProps, "onDelete">;
  renderChip?: (param: IRenderChipParam) => ReactNode;
  /** 包裹chips的Box组件的props */
  chipsBoxProps?: BoxProps;
}
