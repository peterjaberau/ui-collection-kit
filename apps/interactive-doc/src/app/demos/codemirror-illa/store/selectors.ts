export function searchComponentFromMap(components: any, findDisplayName: string | null) {
  // console.log('-------updateComponentPropsReducer-------', {
  //   components, findDisplayName
  // })

  if (components == null || findDisplayName == null) {
    return null
  }
  return components[findDisplayName]
}
