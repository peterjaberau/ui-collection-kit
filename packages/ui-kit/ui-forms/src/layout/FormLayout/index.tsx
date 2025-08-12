import { createContext, useContext, type ReactNode, type PropsWithChildren, Children } from "react";
import { observer, useForm } from "@formily/react";
import { useCreation } from "ahooks";
import { Grid, type GridProps } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";

export const FormLayoutContext = createContext<IFormLayoutContext>(null as unknown as IFormLayoutContext);
export const useFormLayout = () => useContext<IFormLayoutContext>(FormLayoutContext);

function getItemColsProps<T extends FormLayoutCols = FormLayoutCols>(props?: T) {
  const { xs, sm, md, lg, xl } = props || {};
  const newProps = {} as T;
  if (hasValue(xs)) newProps.xs = xs;
  if (hasValue(sm)) newProps.sm = sm;
  if (hasValue(md)) newProps.md = md;
  if (hasValue(lg)) newProps.lg = lg;
  if (hasValue(xl)) newProps.xl = xl;
  return newProps;
}

const hasValue = (size?: GridProps["xs"]) => !!size || size == 0 || size === false;

const defaultTooltipIcon = <HelpOutline fontSize="small" />;
const defaultLayoutCols: FormLayoutCols = { xs: 6, sm: 4, md: 3, xl: 2 };

export const FormLayout = observer(
  (props: PropsWithChildren<FormLayoutProps>) => {
    const {
      // eslint-disable-next-line no-unused-vars
      colon,
      labelAlign,
      labelPosition,
      wrapperAlign,
      labelWrap,
      labelWidth = 80,
      wrapperWidth,
      wrapperWrap,
      fullWidth = true,
      tooltipIcon = defaultTooltipIcon,
      tooltipLayout = "icon",
      showFeedback,
      feedbackLayout = "text",
      withFormItem = true,
      showInnerLabel,
      xs,
      sm,
      md,
      lg,
      xl,
      defaultCols = defaultLayoutCols,
      noField,
      noForm,
      children,
      spacing = 0.5,
      keepFeedbackSpace,
      ...restProps
    } = props;
    const itemBaseProps = getItemColsProps(
      hasValue(xs) || hasValue(sm) || hasValue(md) || hasValue(lg) || hasValue(xl)
        ? { xs, sm, md, lg, xl }
        : defaultCols
    );
    const form = useForm();
    const layout = useCreation<IFormLayoutContext>(
      () => ({
        colon,
        labelAlign,
        labelPosition,
        wrapperAlign,
        labelWrap,
        labelWidth,
        wrapperWidth,
        wrapperWrap,
        fullWidth,
        tooltipIcon,
        tooltipLayout,
        showFeedback,
        feedbackLayout,
        noField,
        withFormItem,
        showInnerLabel,
        keepFeedbackSpace,
      }),
      [
        colon,
        labelAlign,
        labelPosition,
        wrapperAlign,
        labelWrap,
        labelWidth,
        wrapperWidth,
        wrapperWrap,
        fullWidth,
        tooltipIcon,
        tooltipLayout,
        showFeedback,
        feedbackLayout,
        noField,
        withFormItem,
        showInnerLabel,
        keepFeedbackSpace,
      ]
    );
    return (
      <FormLayoutContext.Provider value={layout}>
        <Grid spacing={spacing} {...restProps} container>
          {Children.map(children, (child) => {
            if (!child) {
              return null;
            }
            if (["Grid", "Grid2"].includes((child as any)?.type?.displayName || (child as any)?.type?.render?.name)) {
              return child;
            }
            if (
              !noForm &&
              form &&
              ["Field", "ObjectField", "ArrayField", "VoidField"].includes(
                (child as any)?.type?.displayName || (child as any)?.type?.render?.name
              )
            ) {
              const name = (child as any)?.props?.name;
              if (!name) {
                return null;
              }
              const display = form?.query(`${name}`)?.take()?.display ?? form?.query(`*.${name}`)?.take()?.display;
              if (display && display !== "visible") {
                return null;
              }
            }
            return (
              <Grid item {...{ ...itemBaseProps, ...getItemColsProps((child as any)?.props) }}>
                {child}
              </Grid>
            );
          })}
        </Grid>
      </FormLayoutContext.Provider>
    );
  },
  { displayName: "iimm.Mui.Formily.FormLayout" }
);

export interface FormLayoutCols {
  xs?: GridProps["xs"];
  sm?: GridProps["xs"];
  md?: GridProps["xs"];
  lg?: GridProps["xs"];
  xl?: GridProps["xs"];
}

interface IFormLayoutContext extends CommonLayoutProps {
  /** 传递给下层formField，是否包裹FormItemBase
   * @default true
   */
  withFormItem?: boolean;
}

export interface CommonLayoutProps {
  /** Input Select组件显示border上的标签 */
  showInnerLabel?: boolean;
  /** lable/title显示的位置 */
  labelPosition?: "top" | "left" | "inner";
  labelWidth?: number | string;
  labelAlign?: "left" | "right";
  labelWrap?: boolean;
  wrapperAlign?: "left" | "right";
  wrapperWrap?: boolean;
  wrapperWidth?: number | string;
  /**
   * 子项fullWidth?
   * @default true
   */
  fullWidth?: boolean;
  /** label/title显示冒号? */
  colon?: boolean;
  tooltipIcon?: ReactNode;
  /** 帮助文本显示方式, text:在问题上显示tooltip, icon:在图标上显示tooltip */
  tooltipLayout?: "text" | "icon";
  /** 显示反馈/错误信息? */
  showFeedback?: boolean;
  /** 反馈/错误文本显示方式： text：以文本方式显示在组件下方, popover:以在图片上的tooltip方式显示在组件右侧 */
  feedbackLayout?: "popover" | "text";
  /** 手动指定不从外层Field获取信息 */
  noField?: boolean;
  keepFeedbackSpace?: boolean;
}

export interface FormLayoutProps extends IFormLayoutContext, Omit<GridProps, "item"> {
  /** 手动指定无需获取form信息 */
  noForm?: boolean;
  /** 默认Grid布局
   * @default { xs: 6, sm: 4, md: 3, xl: 2 }
   */
  defaultCols?: FormLayoutCols;
}
