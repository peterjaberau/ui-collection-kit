import { createStore } from "@xstate/store"
import { produce } from "immer"
import { createStoreHook } from "@xstate/store/react"

export const useSidekickStore = createStoreHook({
  context: {
    activeId: null,
    activeHistory: [],
    currentPrompt: "",
    activeTitle: "",
    historyOpened: false,
    activeRequest: null,
    activeResponse: null,
    thinkingText: "",
  } as any,
  on: {
    loadSample: (context) => ({
      ...context
    }),

    toggleHistory: (context) =>
      produce(context, (draft: any) => {
        draft.historyOpened = !draft.historyOpened
      }),

    resetChat: (_context) => ({
      activeId: null,
      activeHistory: [],
      currentPrompt: "",
      activeTitle: "",
      historyOpened: false,
      activeRequest: null,
      activeResponse: null,
      thinkingText: "",
    }),

    restoreChat: (_context, event: { chat: any }) => ({
      activeId: event.chat.id,
      activeHistory: event.chat.history,
      currentPrompt: "",
      activeTitle: event.chat.title,
      historyOpened: false,
      activeRequest: null,
      activeResponse: null,
      thinkingText: "",
    }),

    updatePrompt: (context, event: { prompt: any }) =>
      produce(context, (draft: any) => {
        draft.currentPrompt = event.prompt
      }),

    startRequest: (context, event: { message: any }) =>
      produce(context, (draft: any) => {
        draft.thinkingText = ""
        draft.activeRequest = {
          id: null,
          content: event.message,
          role: "user",
          sent_at: new Date(),
        }
        draft.currentPrompt = ""
      }),

    applyEvent: (context, event: { type: any; data: any; [key: string]: any }) =>
      produce(context, (draft: any) => {
        switch (event.type) {
          case "start": {
            draft.activeId = event.chatOf(event.data.id)
            draft.activeRequest = {
              id: event.messageOf(event.data.request.id),
              content: event.data.request.content,
              role: "user",
              sent_at: new Date(),
            }
            draft.activeResponse = {
              id: event.messageOf(event.data.response.id),
              content: event.data.response.content,
              role: "assistant",
              sent_at: new Date(),
            }
            break
          }
          case "sources": {
            if (!draft.activeResponse) return
            draft.activeResponse.sources = event.data
            break
          }
          case "title": {
            draft.activeTitle = event.data
            break
          }
          case "thinking": {
            draft.thinkingText = event.data
            break
          }
          case "response": {
            if (!draft.activeResponse) return
            if (event.data.complete) {
              draft.activeResponse.content = event.data.content
            } else {
              draft.activeResponse.content += event.data.content
            }
            break
          }
        }
      }),

    completeRequest: (context) =>
      produce(context, (draft: any) => {
        if (draft.activeRequest) {
          draft.activeHistory.push(draft.activeRequest)
        }

        if (draft.activeResponse) {
          draft.activeHistory.push(draft.activeResponse)
        }

        draft.activeRequest = null
        draft.activeResponse = null
        draft.thinkingText = ""
      }),
  },
})
