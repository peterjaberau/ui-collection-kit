import { LuCode } from "react-icons/lu"
import i18n from "@/i18n/config"
import { RESIZE_DIRECTION, WidgetConfig } from "@/widgetLibrary/interface"

export const TAGS_WIDGET_CONFIG: WidgetConfig = {
  displayName: "tags",
  type: "TAGS_WIDGET",
  widgetName: i18n.t("widget.tags.name"),
  icon: <LuCode />,
  keywords: ["tags", "标签"],
  sessionType: "PRESENTATION",
  w: 8,
  h: 3,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  version: 0,
  defaults: {
    value: '{{["Dog", "Cat", "Rabbit"]}}',
    alignment: "flex-start",
    hidden: false,
    selectedTag: undefined,
  },
}
