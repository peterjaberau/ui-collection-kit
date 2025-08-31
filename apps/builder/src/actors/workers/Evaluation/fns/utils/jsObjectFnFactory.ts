import { isPromise } from "#actor-workers/Evaluation/JSObject/utils"
import TriggerEmitter from "./TriggerEmitter"
import { BatchKey } from "#actor-constants"
import ExecutionMetaData from "./ExecutionMetaData"

function addMetaDataToError(e: any, fnName: string, fnString: string) {
  e.source = e.source || fnName
  e.userScript = e.userScript || fnString

  return e
}

declare global {
  interface Window {
    // @ts-ignore
    structuredClone: (value: any, options?: any) => any
  }
}

function saveExecutionData({ executionResponse, jsFnFullName }: any) {
  TriggerEmitter.emit(BatchKey.process_batched_fn_execution, {
    name: jsFnFullName,
    data: executionResponse,
  })
}

export function jsObjectFunctionFactory(
  fn: (...args: any) => any,
  name: string,
  postProcessors: any[] = [saveExecutionData],
) {
  return function (this: unknown, ...args: any) {
    if (!ExecutionMetaData.getExecutionMetaData().enableJSFnPostProcessors) {
      let result

      try {
        result = fn.call(this, ...args)

        return result
      } catch (e: any) {
        e = addMetaDataToError(e, name, fn.toString())
        throw e
      }
    }

    const executionMetaData = ExecutionMetaData.getExecutionMetaData()

    try {
      const result = fn.call(this, ...args)

      if (isPromise(result)) {
        result.then((res) => {
          postProcessors.forEach((p) =>
            p({
              executionMetaData,
              jsFnFullName: name,
              executionResponse: res,
              isSuccess: true,
            }),
          )

          return res
        })
        result.catch((e) => {
          e = addMetaDataToError(e, name, fn.toString())
          postProcessors.forEach((p) =>
            p({
              executionMetaData,
              jsFnFullName: name,
              executionResponse: undefined,
              isSuccess: true,
            }),
          )
          throw e
        })
      } else {
        postProcessors.forEach((p) =>
          p({
            executionMetaData,
            jsFnFullName: name,
            executionResponse: result,
            isSuccess: true,
          }),
        )
      }

      return result
    } catch (e: any) {
      e = addMetaDataToError(e, name, fn.toString())
      postProcessors.forEach((postProcessor) => {
        postProcessor({
          executionMetaData,
          jsFnFullName: name,
          executionResponse: undefined,
          isSuccess: false,
        })
      })
      throw e
    }
  }
}
