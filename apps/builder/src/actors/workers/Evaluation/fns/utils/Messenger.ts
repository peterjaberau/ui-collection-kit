/* eslint-disable no-console */
import { WorkerErrorTypes } from "#actor-constants"
import { uniqueId } from "lodash"
import { MessageType } from "#actor-constants"
import { sendMessage } from "#actor-utils"
import { getErrorMessage } from "#actor-workers/Evaluation/errorModifier"

async function responseHandler(requestId: string): Promise<any> {
  return new Promise((resolve) => {
    const listener = (event: MessageEvent) => {
      const { body, messageId, messageType } = event.data

      if (messageId === requestId && messageType === MessageType.RESPONSE) {
        resolve(body.data)
        self.removeEventListener("message", listener)
      }
    }

    self.addEventListener("message", listener)
  })
}

const defaultErrorHandler: any = (
  messageId: string,
  startTime: number,
  endTime: number,
  responseData: unknown,
  e: unknown,
) => {
  console.error(e)
  sendMessage.call(self, {
    messageId,
    messageType: MessageType.RESPONSE,
    body: {
      startTime,
      endTime,
      data: {
        errors: [
          {
            type: WorkerErrorTypes.CLONE_ERROR,
            message: (e as Error)?.message,
            errorMessage: getErrorMessage(e as Error, WorkerErrorTypes.CLONE_ERROR),
            context: JSON.stringify(responseData),
          },
        ],
      },
    },
  })
}

export class WorkerMessenger {
  static async request(payload: any) {
    const messageId = uniqueId(`request-${payload.method}-`)

    sendMessage.call(self, {
      messageId,
      messageType: MessageType.REQUEST,
      body: payload,
    })
    const response = await responseHandler(messageId)

    return response
  }

  static ping(payload: any) {
    try {
      sendMessage.call(self, {
        messageType: MessageType.DEFAULT,
        body: payload,
      })
    } catch (e) {
      // TODO: Pass in a error handler to allow custom error handling.
      console.error(e)
      sendMessage.call(self, {
        messageType: MessageType.DEFAULT,
        body: {
          data: {
            errors: [
              {
                type: WorkerErrorTypes.CLONE_ERROR,
                message: (e as Error)?.message,
              },
            ],
          },
        },
      })
    }
  }

  static respond(messageId: string, data: unknown, startTime: number, endTime: number, onErrorHandler?: any) {
    try {
      sendMessage.call(self, {
        messageId,
        messageType: MessageType.RESPONSE,
        body: { data, startTime, endTime },
      })
    } catch (e) {
      const errorHandler = onErrorHandler || defaultErrorHandler

      try {
        errorHandler(messageId, startTime, endTime, data, e)
      } catch {
        defaultErrorHandler(messageId, startTime, endTime, data, e)
      }
    }
  }
}
