import { ReactNode } from "react";
import { useCreation, useControllableValue, useSafeState, useMemoizedFn } from "ahooks";
import { Box, type BoxProps, IconButton, type IconButtonProps, Skeleton, Tooltip } from "@mui/material";
import { IconArrowBigLeft, IconArrowBigRight, IconRefresh } from "@tabler/icons-react";
import { isEqual, isInArray, intersection, differenceSet as not, union } from "@iimm/shared";
import { useOverflow } from "@iimm/react-shared";

import { useFetchOptions } from "../../hooks";
import { FormItemBase, type FormItemBaseProps, type FormItemExtraProps } from "../../layout";
import { ListCard, type ListCardCommonProps } from "./ListCard";
import type { IFieldPropOptions, FieldBaseProps, RefreshOptionsProps } from "../../types";

const defaultTitles = ["可选项", "已选项"];

export const TransferBase = (props: TransferBaseProps) => {
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
    options: optionsProp,
    listSx: listSxProp,
    cardSx: cardSxProp,
    cardHeaderSx,
    searchProps,
    itemCheckboxProps,
    listItemTextProps,
    iconButtonProps,
    keepExtraItems = true,
    width,
    minWidth = 200,
    maxWidth,
    height,
    minHeight = 250,
    maxHeight = "85vh",
    containerBoxProps,
    overflowThreshold = 40,
    overflowRatio = 1.5,
    readOnly,
    disabled,
    showSearch,
    showSelectAll = true,
    titles = defaultTitles,
    // eslint-disable-next-line no-unused-vars
    showRefresh,
    refresh: refreshProp,
    onRefreshChange: onRefreshChangeProp,
    refreshText = "刷新选项",
    refreshIcon = <IconRefresh color="#eb2f96" />,
    keepFeedbackSpace,
  } = props;
  /** value是右侧的值(可能存在不显示的不在列表里的值) */
  const [value, setValue] = useControllableValue<any[]>(props, { defaultValue: [] });
  const [refresh, onRefreshChange] = useControllableValue(props, {
    trigger: "onRefreshChange",
    valuePropName: "refresh",
  });
  const [checked, setChecked] = useSafeState<any[]>([]);
  const [loading, setLoading] = useSafeState(false);
  const [optionsValues, setOptionsValues] = useSafeState<any[]>([]);
  const options = useFetchOptions(optionsProp, {
    onLoading: setLoading,
    callback: (items) => setOptionsValues(items.map((ele) => ele.value)),
    deps: refresh,
  });

  const doRefresh = useMemoizedFn(() => {
    onRefreshChange(refresh + 1);
  });

  const postValue = useMemoizedFn((values) => {
    let v = Array.isArray(values) ? [...values] : [];
    if (!v.length) {
      return [];
    }
    const list = optionsValues || [];
    if (!keepExtraItems) {
      v = v.filter((item) => isInArray(item, list));
    }
    return v;
  });

  const handleToggle = useMemoizedFn((value) => {
    const currentIndex = checked.findIndex((ele) => isEqual(value, ele));
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  });

  const handleToggleAll = useMemoizedFn((items) => {
    let newChecked = [];
    const enabledItems = items.filter((item: any) => !options.find((ele) => isEqual(item, ele.value))?.disabled);
    if (intersection(checked, enabledItems).length === enabledItems.length) {
      newChecked = not(checked, enabledItems);
    } else {
      newChecked = union(checked, enabledItems);
    }
    newChecked = intersection(newChecked, optionsValues);
    setChecked(newChecked);
  });

  const left = useCreation(() => {
    return not(optionsValues, value);
  }, [optionsValues, value]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, value);

  const onClickToLeft = useMemoizedFn(() => {
    if (readOnly || disabled) return;
    const newValue = postValue(not(value, rightChecked));
    setValue(newValue);
    setChecked(not(checked, rightChecked));
  });

  const onClickToRight = useMemoizedFn(() => {
    if (readOnly || disabled) return;
    const newValue = postValue(union(value, leftChecked));
    setValue(newValue);
    setChecked(not(checked, leftChecked));
  });

  const { overflow, containerRef, contentRef, containerWidth } = useOverflow(overflowThreshold, overflowRatio);

  const cardSx = useCreation(() => {
    const sx: any = { ...(cardSxProp || {}) };
    if (width) sx.width = width;
    if (minWidth) sx.minWidth = minWidth;
    if (maxWidth || containerWidth) {
      sx.maxWidth = maxWidth || containerWidth;
    }
    return sx;
  }, [cardSxProp, width, minWidth, maxWidth, containerWidth]);

  const listSx = useCreation(() => {
    const sx: any = { ...(listSxProp || {}) };
    if (height) sx.height = height;
    if (minHeight) sx.minHeight = minHeight;
    if (maxHeight) sx.maxHeight = maxHeight;
    return sx;
  }, [listSxProp, height, minHeight, maxHeight]);

  const dom = (
    <Box
      ref={containerRef}
      display="flex"
      gap={"4px"}
      alignItems="center"
      justifyContent="center"
      flexDirection={overflow ? "column" : "row"}
      {...(containerBoxProps || {})}
    >
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={width ?? minWidth ?? maxWidth}
          height={height ?? minHeight ?? maxHeight}
          animation="wave"
        />
      ) : (
        <ListCard
          ref={contentRef as any}
          error={error}
          readOnly={readOnly}
          disabled={disabled}
          items={left}
          options={options}
          handleToggle={handleToggle}
          handleToggleAll={handleToggleAll}
          checked={checked}
          setChecked={setChecked}
          showSearch={showSearch}
          showSelectAll={showSelectAll}
          title={Array.isArray(titles) ? titles[0] : titles}
          listSx={listSx}
          cardSx={cardSx}
          cardHeaderSx={cardHeaderSx}
          searchProps={searchProps}
          listItemTextProps={listItemTextProps}
          itemCheckboxProps={itemCheckboxProps}
        />
      )}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          transform: overflow ? "rotate(90deg)" : undefined,
        }}
      >
        <IconButton
          color="primary"
          {...(iconButtonProps || {})}
          onClick={onClickToRight}
          disabled={disabled || readOnly || !leftChecked?.length}
        >
          <IconArrowBigRight />
        </IconButton>
        <IconButton
          color="primary"
          tabIndex={-1}
          {...(iconButtonProps || {})}
          onClick={onClickToLeft}
          disabled={disabled || readOnly || !rightChecked?.length}
        >
          <IconArrowBigLeft />
        </IconButton>
        {showRefresh && !readOnly && !disabled && (
          <Tooltip arrow placement="top" title={refreshText}>
            <IconButton onClick={doRefresh} className="refresh-icon-i" tabIndex={-1}>
              {refreshIcon}
            </IconButton>
          </Tooltip>
        )}
      </Box>
      {loading ? (
        <Skeleton variant="rectangular" width={width} height={height ?? minHeight ?? maxHeight} animation="wave" />
      ) : (
        <ListCard
          error={error}
          readOnly={readOnly}
          disabled={disabled}
          items={intersection(value, optionsValues)}
          options={options}
          handleToggle={handleToggle}
          handleToggleAll={handleToggleAll}
          checked={checked}
          setChecked={setChecked}
          showSearch={showSearch}
          showSelectAll={showSelectAll}
          title={Array.isArray(titles) ? titles[1] : titles}
          listSx={listSx}
          cardSx={cardSx}
          cardHeaderSx={cardHeaderSx}
          searchProps={searchProps}
          listItemTextProps={listItemTextProps}
          itemCheckboxProps={itemCheckboxProps}
        />
      )}
    </Box>
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

export interface TransferBaseProps
  extends FieldBaseProps<any[]>,
    ListCardCommonProps,
    Omit<FormItemBaseProps, "className" | "style" | "prefixCls">,
    FormItemExtraProps,
    RefreshOptionsProps {
  options?: IFieldPropOptions;
  /** 保留不在options里的已选但不显示的值? */
  keepExtraItems?: boolean;
  titles?: ReactNode | [leftTitle: ReactNode, rightTitle: ReactNode];
  /** 每个框的宽度 */
  width?: number | string;
  /** 每个框内容的高度 */
  height?: number | string;
  /** 每个框内容的min高度 */
  minHeight?: number | string;
  /** 每个框内容的max高度 */
  maxHeight?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  /** 判断是否需要卡片竖排的限度(ratio个卡片的宽度加上该限度不应大于容器宽度)
   * @default  40
   */
  overflowThreshold?: number;
  /** 判断是否需要卡片竖排首个卡片宽度的倍数(ratio个卡片的宽度加上该限度不应大于容器宽度)
   * @default 1.5
   */
  overflowRatio?: number;
  /**
   * 箭头按钮的props
   */
  iconButtonProps?: IconButtonProps;
  /** 最外层的Box组件的props */
  containerBoxProps?: BoxProps;
}
