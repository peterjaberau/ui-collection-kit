import { isObject, getNewWidgetPropsByUpdateSlice } from '#codemirror-illa/utils'
import { searchComponentFromMap } from './utils'
import { klona } from "klona/json"

export const updateComponentPropsReducer = ({ context, event }: any) => {
  const { displayName, updateSlice } = event.payload

  if (!isObject(updateSlice) || !displayName) {
    return
  }

  const node = searchComponentFromMap(context, displayName)
  if (!node) return
  const widgetProps = node.props || {}
  const clonedWidgetProps = klona(widgetProps)

  node.props = getNewWidgetPropsByUpdateSlice(updateSlice, clonedWidgetProps)

}
