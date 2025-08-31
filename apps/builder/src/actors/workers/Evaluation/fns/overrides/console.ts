import { uuid4 } from "@sentry/utils"
import { ENTITY_TYPE, Severity } from "#actor-constants"
import { klona } from "klona/lite"
import TriggerEmitter from "../utils/TriggerEmitter"
import ExecutionMetaData from "../utils/ExecutionMetaData"

class UserLog {
  private isEnabled = true

  enable() {
    this.isEnabled = true
  }

  disable() {
    this.isEnabled = false
  }

  private emitter?: any

  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private saveLog(method: any, data: any[]) {
    const parsed = this.parseLogs(method, data)

    this.emitter?.emit("process_logs", parsed)
  }

  public overrideConsoleAPI() {
    this.emitter = TriggerEmitter
    const { debug, error, info, log, table, warn } = console

    console = {
      ...console,
      // TODO: Fix this the next time the file is edited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table: (...args: any) => {
        if (!this.isEnabled) return

        table.call(this, args)
        this.saveLog("table", args)
      },
      // TODO: Fix this the next time the file is edited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error: (...args: any) => {
        if (!this.isEnabled) return

        error.apply(this, args)
        this.saveLog("error", args)
      },
      // TODO: Fix this the next time the file is edited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      log: (...args: any) => {
        if (!this.isEnabled) return

        log.apply(this, args)
        this.saveLog("log", args)
      },
      // TODO: Fix this the next time the file is edited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      debug: (...args: any) => {
        if (!this.isEnabled) return

        debug.apply(this, args)
        this.saveLog("debug", args)
      },
      // TODO: Fix this the next time the file is edited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      warn: (...args: any) => {
        if (!this.isEnabled) return

        warn.apply(this, args)
        this.saveLog("warn", args)
      },
      // TODO: Fix this the next time the file is edited
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      info: (...args: any) => {
        if (!this.isEnabled) return

        info.apply(this, args)
        this.saveLog("info", args)
      },
    }
  }

  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private replaceFunctionWithNamesFromObjects(data: any) {
    if (typeof data === "function") return `func() ${data.name}`

    if (!data || typeof data !== "object") return data

    if (data instanceof Promise) return "Promise"

    // TODO: Fix this the next time the file is edited
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const acc: any = Object.prototype.toString.call(data) === "[object Array]" ? [] : {}

    return Object.keys(data).reduce((acc, key) => {
      acc[key] = this.replaceFunctionWithNamesFromObjects(data[key])

      return acc
    }, acc)
  }

  private sanitizeData(data: any): any {
    try {
      const returnData = this.replaceFunctionWithNamesFromObjects(data)

      return returnData
    } catch (e) {
      return [`There was some error: ${e} ${JSON.stringify(data)}`]
    }
  }

  private getSource = (triggerMeta?: any): any => {
    const type = triggerMeta?.source?.entityType || ENTITY_TYPE.JSACTION
    const name = triggerMeta?.source?.name || triggerMeta?.triggerPropertyName || ""
    const propertyPath = triggerMeta?.triggerPropertyName || ""
    const id = triggerMeta?.source?.id || ""

    return { type, name, id, propertyPath }
  }

  // parses the incoming log and converts it to the log object
  private parseLogs(method: any, data: unknown[]): any {
    // Create an ID
    const id = uuid4()
    const timestamp = Date.now().toString()
    // Parse the methods
    let output = data
    // For logs UI we only keep 3 levels of severity, info, warn, error
    let severity = Severity.INFO

    if (method === "error") {
      severity = Severity.ERROR
      output = data.map((error) => {
        return (error as Error).stack || error
      })
    } else if (method === "warn") {
      severity = Severity.WARNING
    }

    const { triggerMeta } = ExecutionMetaData.getExecutionMetaData()

    return {
      method,
      id,
      data: this.sanitizeData(klona(output)),
      timestamp,
      severity,
      source: this.getSource(triggerMeta),
    }
  }
}

const userLogs = new UserLog()

export default userLogs
