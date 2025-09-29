import { isObject, getNewWidgetPropsByUpdateSlice } from '#codemirror-illa/utils'
import { searchComponentFromMap } from './selectors'
import { klona } from "klona/json"

export const updateComponentPropsReducer = ({ context, event }: any) => {



  const { displayName, updateSlice } = event.payload

  // console.log('-------updateComponentPropsReducer-------', {
  //   displayName,
  //   updateSlice, context
  // })

  if (!isObject(updateSlice) || !displayName) {
    return
  }


  const node = searchComponentFromMap(context, displayName)
  if (!node) return
  const widgetProps = node.props || {}
  const clonedWidgetProps = klona(widgetProps)



  node.props = getNewWidgetPropsByUpdateSlice(updateSlice, clonedWidgetProps)

  // console.log('-------updateComponentPropsReducer-------', {
  //   clonedWidgetProps,
  //   node,
  //   displayName,
  //   updateSlice,
  //   context
  // })

}
