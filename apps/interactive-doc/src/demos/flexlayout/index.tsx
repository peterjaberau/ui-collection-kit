"use client"
import { Layout, Model } from "#modules/flex-layout"
import "#modules/flex-layout/style.css"
import { WidgetRenderer } from "./components/widgets"
import { layoutOptions } from "./actors/flexlayout.store"
import "./app.css"
import { Button } from "@chakra-ui/react"
import { IconRenderer } from "./components/icons"

const createButton = (
  title: string,
  key: string,
  handler: React.MouseEventHandler | undefined,
  content: React.ReactNode,
) => {
  return (
    <button
      className="flexlayout__tab_toolbar_button"
      title={title}
      key={key}
      style={{ display: "flex", alignItems: "center" }}
      onClick={handler}
    >
      {content}
    </button>
  )
}

export function FlexLayoutMain() {
  const model = Model.fromJson(layoutOptions.default)

  const factory = (node: any) => {
    const componentName = node.getComponent()
    return <WidgetRenderer componentName={componentName} node={node} />
  }

  const onRenderTab = (node: TabNode, renderValues: ITabRenderValues) => {
    if (node.attributes.icon) {
      renderValues.leading = <IconRenderer iconName={node.attributes.icon} />
    } else {
      renderValues.leading = undefined
    }

    // // renderValues.content = (<div>hello</div>);
    // // renderValues.content += " *";
    // // renderValues.leading = <img style={{width:"1em", height:"1em"}}src="images/folder.svg"/>;
    // if (layoutFile === "newfeatures" && node.getComponent() === "newfeatures") {
    //   renderValues.buttons.push(createButton("Tab settings", "settingbtn", undefined, <SettingsIcon />));
    // }
    //
    // // playwright testing
    // if (layoutFile?.startsWith("test_")) {
    //   if (node.getId() === "onRenderTab1") {
    //     renderValues.leading = <img src="images/settings.svg" key="1" style={{ width: "1em", height: "1em" }} />
    //     renderValues.content = "onRenderTab1";
    //     renderValues.buttons.push(<img src="images/folder.svg" key="1" style={{ width: "1em", height: "1em" }} />);
    //   } else if (node.getId() === "onRenderTab2") {
    //     renderValues.leading = <img src="images/settings.svg" key="1" style={{ width: "1em", height: "1em" }} />
    //     renderValues.content = "onRenderTab2";
    //     renderValues.buttons.push(<img src="images/folder.svg" key="1" style={{ width: "1em", height: "1em" }} />);
    //   }
    // }
  }

  const onRenderTabSet = (node: TabSetNode | BorderNode, renderValues: ITabSetRenderValues) => {
    // console.log('---onRenderTabSet----', {
    //   node,
    //   renderValues
    // })
    // if (node.getName() === 'OpenLayers Map') {
    //
    // }
  }

  return <Layout model={model} factory={factory} onRenderTab={onRenderTab} onRenderTabSet={onRenderTabSet} />
}
