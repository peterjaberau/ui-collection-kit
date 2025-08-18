import { ToDataType } from "#lowcoder/comps/generators/multi";
import { NameGenerator } from "#lowcoder/comps/utils/nameGenerator";
import { toSimpleContainerData } from "../containerBase/simpleContainerComp";
import {
  ContainerChildren,
} from "../triContainerComp/triContainerCompBuilder";
import { trans } from "#lowcoder/i18n";

type ContainerDataType = ToDataType<ContainerChildren<{}>>;

export function defaultCollapsibleContainerData(
  compName: string,
  nameGenerator: NameGenerator
): ContainerDataType {
  return {
    container: {
      header: toSimpleContainerData([
        {
          item: {
            compType: "text",
            name: nameGenerator.genItemName("collapsibleTitle"),
            comp: {
              text: "### " + trans("container.title"),
            },
          },
          layoutItem: {
            i: "",
            h: 8,
            w: 13,
            x: 0,
            y: 0,
          },
        },
        {
          item: {
            compType: "toggleButton",
            name: nameGenerator.genItemName("collapsibleToggle"),
            comp: {
              value: "true",
              showText: false,
              alignment: 'right',
              showBorder: false,
            },
          },
          layoutItem: {
            i: "",
            h: 5,
            w: 10,
            x: 14,
            y: 0,
          },
        },
      ]),
      showBody: `{{collapsibleToggle${Number(nameGenerator.genItemName("collapsibleToggle").slice(-1)) - 1}.value}}`
    },
  };
}
