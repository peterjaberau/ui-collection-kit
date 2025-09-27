import { Diagnostic } from "@codemirror/lint"
import { EditorView } from "@codemirror/view"
import { Text } from "@codemirror/state"
import jsonata from "jsonata"

interface CustomFunctionContext {
  responses: any[]
}

export const CUSTOM_FUNCTIONS_MAP = {
  GET_ANSWER: {
    func(this: CustomFunctionContext, questionTitle: string): any[] {
      const responses = this.responses
      if (!Array.isArray(responses)) {
        return []
      }
      return responses
        .filter((response: any) => response.title === questionTitle)
        .map((response: any) => response.answer)
    },
    signature: "<s:a>",
  },
  HAS_KEYWORD: {
    func(this: CustomFunctionContext, keyword: string): boolean {
      const responses = this.responses
      if (!Array.isArray(responses)) {
        return false
      }
      const lowerKeyword = keyword.toLowerCase()
      return responses.some((response: any) => response.title && response.title.toLowerCase().includes(lowerKeyword))
    },
    signature: "<s:b>",
  },
  MAP_SCORES: {
    func(this: CustomFunctionContext, mapping: Record<string, any>): any[] {
      const responses = this.responses
      if (!Array.isArray(responses)) {
        return []
      }
      return responses.map((response: any) => {
        const answerKey = String(response.answer)
        return mapping[answerKey] || null
      })
    },
    signature: "<o:a>",
  },
  CALCULATE_WEIGHTED_SCORE: {
    func(this: CustomFunctionContext, weights: Record<string, number>): number {
      const responses = this.responses
      if (!Array.isArray(responses)) {
        return 0
      }
      return responses.reduce((sum: number, response: any) => {
        const weight = weights[response.title]
        return sum + response.answer * (weight || 0)
      }, 0)
    },
    signature: "<o:n>",
  },
  CALCULATE_WEIGHTED_AVERAGE: {
    func(this: CustomFunctionContext, weights: Record<string, number>): number {
      const responses = this.responses
      if (!Array.isArray(responses)) {
        return 0
      }

      let weightedSum = 0
      let totalWeights = 0

      responses.forEach((response: any) => {
        const weight = weights[response.title]
        if (weight !== undefined && weight !== null) {
          weightedSum += response.answer * weight
          totalWeights += weight
        }
      })

      return totalWeights > 0 ? weightedSum / totalWeights : 0
    },
    signature: "<o:n>",
  },
  SUM_SCORES: {
    func(this: CustomFunctionContext, scoreField: string): number {
      const responses = this.responses
      if (!Array.isArray(responses)) {
        return 0
      }
      return responses.reduce((sum: number, response: any) => {
        const value = response[scoreField]
        return sum + (typeof value === "number" ? value : 0)
      }, 0)
    },
    signature: "<s:n>",
  },
  CLASSIFY_SCORE: {
    func(this: CustomFunctionContext, score: number, thresholds: Record<string, string>): string {
      const thresholdKeys = Object.keys(thresholds)
      const applicableThresholds = thresholdKeys.map((key) => Number(key)).filter((threshold) => score >= threshold)

      if (applicableThresholds.length === 0) {
        return "unclassified"
      }

      const maxThreshold = Math.max(...applicableThresholds)
      return thresholds[String(maxThreshold)] as any
    },
    signature: "<no:s>",
  },
  MATRIX_LOOKUP: {
    func(this: CustomFunctionContext, matrix: Record<string, any>, rowKey: string, colKey: string): any {
      const row = matrix[rowKey]
      return row ? row[colKey] : undefined
    },
    signature: "<oss:x>",
  },
  ESCALATE_IF: {
    func(this: CustomFunctionContext, condition: boolean, message: string): { escalate: boolean; message?: string } {
      return {
        escalate: Boolean(condition),
        message: condition ? message : undefined,
      }
    },
    signature: "<bs:o>",
  },
  CLASSIFY_BOOLEAN: {
    func(this: CustomFunctionContext, value: boolean, trueLabel: string, falseLabel: string): string {
      return value ? trueLabel : falseLabel
    },
    signature: "<bss:s>",
  },
}

function registerCustomFunctionsIfNeeded(program: any, code: string): string[] {
  const trimmedCode = code.trim()

  const allFunctions = Object.keys(CUSTOM_FUNCTIONS_MAP)

  allFunctions.forEach((functionName) => {
    const { func } = CUSTOM_FUNCTIONS_MAP[functionName as keyof typeof CUSTOM_FUNCTIONS_MAP]
    try {
      program.assign(functionName, func)
    } catch (error) {
      console.warn(`Failed to register function ${functionName}:`, error)
    }
  })

  const usedFunctions = allFunctions.filter((functionName) => {
    const regex = new RegExp("\\$" + functionName + "\\s*\\(", "g")
    return regex.test(trimmedCode)
  })

  return usedFunctions
}

export const jsonataParseLinter =
  (customFunctions?: Record<string, { func: Function; signature: string }>) =>
  (view: EditorView): Diagnostic[] => {
    const documentText = view.state.doc.toString()

    if (documentText.trim().length === 0) {
      return []
    }

    try {
      const program = jsonata(documentText)

      Object.keys(CUSTOM_FUNCTIONS_MAP).forEach((functionName) => {
        const { func } = CUSTOM_FUNCTIONS_MAP[functionName as keyof typeof CUSTOM_FUNCTIONS_MAP]
        try {
          program.assign(functionName, func)
        } catch (error) {
          console.warn(`Failed to register function ${functionName}:`, error)
        }
      })

      if (customFunctions) {
        Object.keys(customFunctions).forEach((functionName) => {
          if (documentText.includes("$" + functionName)) {
            const { func }: any = customFunctions[functionName]
            program.assign(functionName, func)
          }
        })
      }

      try {
        const result = program.evaluate({ responses: [] })
        if (result && typeof result.then === "function") {
          result.catch(() => {})
          return []
        }
      } catch (evalError: any) {
        if (evalError.code && evalError.code.startsWith("T1")) {
          throw evalError
        }
      }
    } catch (error: any) {
      if ("position" in error) {
        const pos = getErrorPosition(error, view.state.doc)
        return [
          {
            from: pos,
            message: error.message,
            severity: "error",
            to: pos,
          },
        ]
      } else {
        throw error
      }
    }
    return []
  }

function getErrorPosition(error: any, doc: Text): number {
  return Math.min(error.position, doc.length)
}
