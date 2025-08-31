export default class ExecutionMetaData {
  private static triggerMeta?: any
  private static eventType?: any
  private static enableJSVarUpdateTracking = true
  private static enableJSFnPostProcessors = true

  static setExecutionMetaData(metaData: {
    triggerMeta?: any
    eventType?: any
    enableJSFnPostProcessors?: boolean
    enableJSVarUpdateTracking?: boolean
  }) {
    const metaDataEntries: any = Object.entries(metaData)

    for (const [key, value] of metaDataEntries as any) {
      // @ts-ignore
      ExecutionMetaData[key] = value
    }
  }
  static getExecutionMetaData() {
    const { source, triggerKind, triggerPropertyName } = ExecutionMetaData.triggerMeta || {}

    return {
      triggerMeta: {
        source: { ...source } as any,
        triggerPropertyName,
        triggerKind,

        onPageLoad: false,
      },
      eventType: ExecutionMetaData.eventType,
      enableJSVarUpdateTracking: ExecutionMetaData.enableJSVarUpdateTracking,
      enableJSFnPostProcessors: ExecutionMetaData.enableJSFnPostProcessors,
    }
  }
}
