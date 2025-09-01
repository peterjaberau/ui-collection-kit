"use client"
import { useWidget } from "#actors/hooks/widgets/useWidget"
import React from "react"
import { Text } from "@chakra-ui/react"
import { DevLayer } from "./DevLayer"

export const getProfile = {
  widgetName: "Text",
}

export const getDefaults = {
  text: "Hello {{appsmith.user.name || appsmith.user.email}}",
  textStyle: "md",
  version: 1,
}

const TextWidget: any = (props: any) => {
  const { widgetId: propWidgetId } = props
  const { compareEvaluated, widget, widgetEvaluated  } = useWidget({ widgetId: propWidgetId})

  return (
    <DevLayer
      path={propWidgetId}
      payload={{
        compareEvaluated: compareEvaluated(["text"]),
        widget,
        widgetEvaluated,
      }}
      tagName={`TextWidget ${propWidgetId}`}
      variant="surface"
      type="widget"
    >
      <Text {...getDefaults} {...props}>
        {widget.text || getDefaults.text}
        {/*{props.text || getDefaults.text}*/}
      </Text>
    </DevLayer>
  )
}

export default TextWidget
