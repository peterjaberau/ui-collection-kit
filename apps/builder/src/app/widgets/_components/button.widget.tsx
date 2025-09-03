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
  const { compareEvaluated, widget, widgetEvaluated, trigger } = useWidget({ widgetId: propWidgetId })

  // const executeAction = (e: any) => {
  //   console.log("Execute Action", e)
  // }
  const handleActionComplete = () => {}

  return (
    <DevLayer
      path={propWidgetId}
      payload={{
        compareEvaluated: compareEvaluated(["onClick"]),
        widget,
        widgetEvaluated,
      }}
      tagName={`Button  Widget ${propWidgetId}`}
      variant="surface"
      type="widget"
    >
      <Button
        {...getDefaults}
        {...props}
        onClick={() => trigger({
          triggerPropertyName: "onClick",
          dynamicString: widget.onClick,
          event: {
            type: "ON_CLICK",
          },
          source: {
            id: widget.widgetId,
            name: widget.widgetName,
            entityType: "WIDGET",
          },
          widgetId: widget.widgetId,
        })}
      >
        {widget.text || getDefaults.text}
      </Button>
    </DevLayer>
  )
}

/*


executeAction(actionPayload: ExecuteTriggerPayload): void {
    const { executeAction } = this.context;

    executeAction &&
      executeAction({
        ...actionPayload,
        source: {
          id: this.props.widgetId,
          name: this.props.widgetName,
        },
      });

    actionPayload.triggerPropertyName &&
      AppsmithConsole.info({
        text: `Event ${actionPayload.triggerPropertyName} fired`,
        source: {
          type: ENTITY_TYPE.WIDGET,
          id: this.props.widgetId,
          name: this.props.widgetName,
        },
      });
  }
 */

export default ButtonWidget
