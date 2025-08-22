import { LuCode } from "react-icons/lu"
import i18n from "@/i18n/config"
import { DefaultCenter, DefaultMarkers } from "./content"

export const MAP_WIDGET_CONFIG: any = {
  type: "MAP_WIDGET",
  displayName: "map",
  widgetName: i18n.t("widget.map.name"),
  icon: <LuCode />,
  keywords: ["MAP", "地图"],
  sessionType: "PRESENTATION",
  w: 20,
  h: 50,
  version: 0,
  defaults: {
    latitudeFieldName: "lat",
    longitudeFieldName: "lng",
    hidden: false,
    center: `{{${DefaultCenter}}}`,
    zoom: "{{3}}",
    markers: `{{${DefaultMarkers}}}`,
    loading: "{{false}}",
    enableAddMark: "{{true}}",
    enableSearch: "{{true}}",
    enableClustering: false,
    selectMarker: "{{{}}}",
  },
}
