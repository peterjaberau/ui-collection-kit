import { LocalizationProvider, zhCN } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import zh from "dayjs/locale/zh-cn";
import type { LocalizationProviderProps } from "@mui/x-date-pickers";

export interface DateTimeLocalizationProvider extends Omit<LocalizationProviderProps, "dateAdapter"> {
  dateAdapter?: LocalizationProviderProps["dateAdapter"];
}

export const DateTimeLocalizationProvider = (props: DateTimeLocalizationProvider) => {
  const {
    dateAdapter = AdapterDayjs,
    adapterLocale = zh,
    localeText = zhCN.components.MuiLocalizationProvider.defaultProps.localeText,
    children,
    ...restProps
  } = props;
  return (
    <LocalizationProvider
      dateAdapter={dateAdapter}
      adapterLocale={adapterLocale}
      localeText={localeText}
      {...restProps}
    >
      {children}
    </LocalizationProvider>
  );
};

DateTimeLocalizationProvider.displayName = "iimm.Mui.Formily.DateTimeLocalizationProvider";
