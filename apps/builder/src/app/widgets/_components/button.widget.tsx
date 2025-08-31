"use client"
import React from "react"
import { Button } from "@chakra-ui/react"
import { DevLayer } from "./DevLayer"
import { useWidget } from "#actors-hook/widgets/useWidget"

export const getProfile = {
  widgetName: "Button",
  version: 1,
}

export const getDefaults = {
  text: "Button",
  variant: "solid",
  size: "md",
  spinnerPlacement: "start",
  loading: false,
  loadingText: null,
}

const ButtonWidget: any = (props: any) => {
  const { widgetId: propWidgetId } = props
  const { compareEvaluated, widget, widgetEvaluated } = useWidget({ widgetId: propWidgetId})


  const executeAction = (e: any) => {}
  const handleActionComplete = () => {}

  return (
    <DevLayer
      path={propWidgetId} payload={{
      compareEvaluated: compareEvaluated(['text']), widget, widgetEvaluated}}
      tagName={`Button  Widget ${propWidgetId}`} variant="surface" type="widget">
      <Button
        {...getDefaults}
        {...props}
        onClick={() => {
          executeAction({
            triggerPropertyName: "onClick",
            dynamicString: 'this.props.onClick',
            event: {
              type: 'EventType.ON_CLICK',
              callback: 'this.handleActionComplete'
            }
          })
        }}
      >
        {widget.text || getDefaults.text}
      </Button>
    </DevLayer>
  )
}

export default ButtonWidget
