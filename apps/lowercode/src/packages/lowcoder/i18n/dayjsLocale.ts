import { language } from "#lowcoder/i18n";

export function getDayJSLocale() {
  switch (language) {
    case "zh":
      return "zh-cn";
    default:
      return "en-gb";
  }
}
