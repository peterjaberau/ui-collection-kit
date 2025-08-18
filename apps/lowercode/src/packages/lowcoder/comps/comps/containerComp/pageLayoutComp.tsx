import { CompParams } from "#lowcoder-core/index";
import { ToDataType } from "#lowcoder/comps/generators/multi";
import { NameConfigDisabled, NameConfigHidden, withExposingConfigs, NameConfig, CompDepsConfig } from "#lowcoder/comps/generators/withExposing";
import { withMethodExposing } from "#lowcoder/comps/generators/withMethodExposing";
import { NameGenerator } from "#lowcoder/comps/utils/nameGenerator";
import { Section, sectionNames } from "#lowcoder-design/index";
import { oldContainerParamsToNew } from "../containerBase";
import { toSimpleContainerData } from "../containerBase/simpleContainerComp";
import { disabledPropertyView, hiddenPropertyView } from "#lowcoder/comps/utils/propertyUtils";
import { trans } from "#lowcoder/i18n";
import { BoolCodeControl } from "#lowcoder/comps/controls/codeControl";
import { DisabledContext } from "#lowcoder/comps/generators/uiCompBuilder";
import React, { useContext, useEffect, useState } from "react";
import { EditorContext } from "#lowcoder/comps/editorState";

import {
  ContainerChildren,
  ContainerCompBuilder,
} from "../pageLayoutComp/pageLayoutCompBuilder";
import { PageLayout } from "../pageLayoutComp/pageLayout";
import { AnimationStyle } from "#lowcoder/comps/controls/styleControlConstants";
import { styleControl } from "#lowcoder/comps/controls/styleControl";

export const ContainerBaseComp = (function () {
  const childrenMap: any = {
    disabled: BoolCodeControl,
    animationStyle: styleControl(AnimationStyle , 'animationStyle'),
  };

  return new ContainerCompBuilder(childrenMap, (props, dispatch) => {

    const [siderCollapsed, setSiderCollapsed] = useState(false);

    return (
      <DisabledContext.Provider value={props.disabled}>
        <PageLayout {...props} siderCollapsed={siderCollapsed} setSiderCollapsed={setSiderCollapsed} />
      </DisabledContext.Provider>
    );
  })
    .setPropertyViewFn((children) => {
      return (
        <>
          {(useContext(EditorContext).editorModeStatus === "logic" || useContext(EditorContext).editorModeStatus === "both") && (
            <Section name={sectionNames.interaction}>
              {disabledPropertyView(children)}
              {hiddenPropertyView(children)}
              { children.container.appSelectorPropertyView()}
            </Section>
          )}

          {(useContext(EditorContext).editorModeStatus === "layout" || useContext(EditorContext).editorModeStatus === "both") && (
            <><Section name={sectionNames.layout}>
              {children.container.getPropertyView()}
            </Section>
            <Section name={sectionNames.style}>
              { children.container.stylePropertyView() }
              </Section>
              <Section name={sectionNames.animationStyle} hasTooltip={true}>
                {children.animationStyle.getPropertyView()}
              </Section>
            {children.container.children.showHeader.getView() && (
              <Section name={"Header Style"}>
                { children.container.headerStylePropertyView() }
              </Section>
            )}
            {children.container.children.showSider.getView() && (
              <Section name={"Sider Style"}>
                { children.container.siderStylePropertyView() }
              </Section>
            )}
            <Section name={"Body Style"}>
              { children.container.bodyStylePropertyView() }
            </Section>
            {children.container.children.showFooter.getView() && (
              <Section name={"Footer Style"}>
                { children.container.footerStylePropertyView() }
              </Section>
            )}
            </>
          )}
        </>
      );
    })
    .build();
})();

// Compatible with old data
function convertOldContainerParams(params: CompParams<any>) {
  // convert older params to old params
  let tempParams = oldContainerParamsToNew(params);

  if (tempParams.value) {
    const container = tempParams.value.container;
    // old params
    if (container && (container.hasOwnProperty("layout") || container.hasOwnProperty("items"))) {
      const autoHeight = tempParams.value.autoHeight;
      const scrollbars = tempParams.value.scrollbars;
      return {
        ...tempParams,
        value: {
          container: {
            showHeader: true,
            body: { 0: { view: container } },
            showFooter: false,
            showSider: true,
            autoHeight: autoHeight,
            contentScrollbars: scrollbars,
          },
        },
      };
    }
  }
  return tempParams;
}


class ContainerTmpComp extends ContainerBaseComp {
  constructor(params: CompParams<any>) {
    super(convertOldContainerParams(params));
  }
}

const PageLayoutCompTmP = withExposingConfigs(ContainerTmpComp, [
  NameConfigHidden,
  NameConfigDisabled,

  new NameConfig("container", trans("export.ratingValueDesc")),
  new CompDepsConfig(
    "siderCollapsed",
    (comp) => ({ data : comp.children.container.children.siderCollapsed.nodeWithoutCache()}),
    (input) => input.data.value, trans("listView.itemsDesc")
  ),
]);

export const PageLayoutComp = withMethodExposing(PageLayoutCompTmP, [

  {
    method: {
      name: "setSiderCollapsed",
      description: "Set the Sider of the PageLayout to be collapsed or not",
      params: [{ name: "collapsed", type: "boolean" }],
    },
    execute: (comp, values) => {
      const collapsed = !!values[0]; // Ensure boolean value
      comp.children.container.children.siderCollapsed.dispatchChangeValueAction(collapsed);
    },
  }
]);

type ContainerDataType = ToDataType<ContainerChildren<{}>>;

export function defaultPageLayoutData(
  compName: string,
  nameGenerator: NameGenerator
): ContainerDataType {
  return {
    container: {
      header: toSimpleContainerData([
        {
          item: {
            compType: "navigation",
            name: nameGenerator.genItemName("pageNavigation"),
            comp: {
              logoUrl: "",
              hidden: false,
              items: [
                {
                  label: "Home",
                  hidden: false,
                  active: false,
                },
                {
                  label: "Services",
                  hidden: false,
                  active: false,
                  items: [
                    {
                      label: "Lowcode Platform",
                      hidden: false,
                      active: false,
                    },
                    {
                      label: "App Development",
                      hidden: false,
                      active: false,
                    },
                  ],
                },
                {
                  label: "About",
                  hidden: false,
                  active: false,
                },
              ],
            },
          },
          layoutItem: {
            i: "",
            h: 6,
            w: 24,
            x: 0,
            y: 0,
          },
        },
      ]),
    },
  };
}
