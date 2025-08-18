import { getBottomResIcon } from "#lowcoder/util/bottomResUtils";
import { jsonValueStateControl } from "#lowcoder/comps/controls/codeStateControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { bottomResListComp } from "#lowcoder/comps/generators/bottomResList";
import { NameConfig, withExposingConfigs } from "#lowcoder/comps/generators/withExposing";
import { withMethodExposing } from "#lowcoder/comps/generators/withMethodExposing";
import { trans } from "#lowcoder/i18n";
import _ from "lodash";
import { DocLink } from "#lowcoder-design/index";
import { BottomTabs } from "#lowcoder/pages/editor/bottom/BottomTabs";
import { ReactNode, useState } from "react";
import { BottomResComp, BottomResCompResult, BottomResTypeEnum } from "#lowcoder/types/bottomRes";
import { JSONObject } from "#lowcoder/util/jsonTypes";
import { QueryTutorials } from "#lowcoder/util/tutorialUtils";
import { SimpleNameComp } from "./simpleNameComp";
import { markdownCompCss, TacoMarkDown } from "#lowcoder-design/index";
import SupaDemoDisplay from "#lowcoder/comps/utils/supademoDisplay";

const TemporaryStateItemCompBase = new MultiCompBuilder(
    {
      name: SimpleNameComp,
      value: jsonValueStateControl(null),
    },
    () => null as any
  )
  .setPropertyViewFn((children) => {
    return (
        <BottomTabs
          type={BottomResTypeEnum.TempState}
          tabsConfig={[
            {
              key: "general",
              title: trans("query.generalTab"),
              children: children.value.propertyView({
                label: trans("temporaryState.value"),
                tooltip: trans("temporaryState.valueTooltip"),
                placement: "bottom",
                extraChildren: QueryTutorials.tempState && (
                  <><br/><TacoMarkDown>{trans("temporaryState.documentationText")}</TacoMarkDown><br/><DocLink style={{ marginTop: 8 }} href={QueryTutorials.tempState} title={trans("temporaryState.documentationText")}>
                    {trans("temporaryState.docLink")}
                  </DocLink><br/><br/>

                  <SupaDemoDisplay
                    url={trans("supademos.temporarystate")}
                    modalWidth="80%"
                    modalTop="20px"
                  />
                  </>
                ),
              }),
            },
          ]}
          tabTitle={children.name.getView()}
          status=""
        />
      );
  })
  .build();

class TemporaryStateAsBottomRes extends TemporaryStateItemCompBase implements BottomResComp {
  result(): BottomResCompResult | null {
    return null;
  }
  type(): BottomResTypeEnum {
    return BottomResTypeEnum.TempState;
  }
  id(): string {
    return this.name();
  }
  name(): string {
    return this.children.name.getView();
  }
  icon(): ReactNode {
    return getBottomResIcon(BottomResTypeEnum.TempState);
  }
}

const TemporaryStateItemCompWithMethodExpose = withMethodExposing(TemporaryStateAsBottomRes, [
  {
    method: {
      name: "setValue",
      params: [
        {
          name: "value",
          type: "JSONValue",
        },
      ],
      description: "",
    },
    execute: async (comp, params) => {
      return new Promise(async (resolve) => {
        await comp.children.value.change(params?.[0]);
        resolve(params?.[0])
      })
    },
  },
  {
    method: {
      name: "setIn",
      params: [
        {
          name: "path",
          type: "arrayNumberString",
        },
        {
          name: "value",
          type: "JSONValue",
        },
      ],
      description: "",
    },
    execute: async (comp, params) => {
      return new Promise(async (resolve) => {
        const { value: prev, onChange } = comp.children.value.getView();
        const [path, value] = params;
        if (
          !Array.isArray(path) ||
          !path.every((i) => typeof i === "string" || typeof i === "number")
        ) {
          throw new Error(trans("temporaryState.pathTypeError"));
        }
        if (!_.isPlainObject(prev) && !Array.isArray(prev)) {
          throw new Error(
            trans("temporaryState.unStructuredError", {
              path: JSON.stringify(path),
              prev: JSON.stringify(prev),
            })
          );
        }
        const nextValue = _.set(_.cloneDeep(prev as JSONObject), path as (string | number)[], value);
        await onChange(nextValue);
        resolve(nextValue);
      })
    },
  },
]);

export const TemporaryStateItemComp = withExposingConfigs(TemporaryStateItemCompWithMethodExpose, [
  new NameConfig("value", trans("temporaryState.valueDesc")),
]);

export const TemporaryStateListComp = bottomResListComp(
  TemporaryStateItemComp,
  BottomResTypeEnum.TempState,
  { value: "null" },
  "state"
);
