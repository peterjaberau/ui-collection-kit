import type { WidgetEntity } from "ce/entities/DataTree/types";
import type { DataTree } from "entities/DataTree/dataTreeTypes";
import { ENTITY_TYPE } from "ce/entities/DataTree/types";
import { builderURL } from "ce/RouteBuilder";
import type { EntityNavigationData } from "entities/DataTree/dataTreeTypes";
import { createNavData } from "./common";

export const getWidgetChildrenNavData = (
  widgetName: string,
  widgetType: string,
  dataTree: DataTree,
  basePageId: string,
) => {
  const dataTreeWidget: WidgetEntity = dataTree[widgetName] as WidgetEntity;

  if (widgetType === "FORM_WIDGET") {
    const children: EntityNavigationData = {};
    const formChildren: EntityNavigationData = {};

    if (dataTreeWidget) {
      Object.keys(dataTreeWidget.data || {}).forEach((childWidgetName) => {
        const childWidgetId = (dataTree[childWidgetName] as WidgetEntity)
          .widgetId;

        formChildren[childWidgetName] = createNavData({
          id: `${widgetName}.data.${childWidgetName}`,
          name: childWidgetName,
          type: ENTITY_TYPE.WIDGET,
          url: builderURL({ basePageId, hash: childWidgetId }),
          children: {},
        });
      });
    }

    return { childNavData: children };
  }
};
