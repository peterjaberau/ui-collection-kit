interface TextUIPart {
  type: 'text'
  text: string
  state?: 'streaming' | 'done'
}

interface ReasoningUIPart {
  type: 'reasoning'
  text: string
  state?: 'streaming' | 'done'
}

interface SourceUrlUIPart {
  type: 'source-url'
  sourceId: string
  url: string
  title?: string
}

interface SourceDocumentUIPart {
  type: 'source-document'
  sourceId: string
  mediaType: string
  title: string
  filename?: string
}

interface FileUIPart {
  type: 'file'
  mediaType: string
  filename?: string
  url: string
}

type ToolInvocation = {
  type: `tool-${string}`
  toolCallId: string
} & (
  | {
      type: `tool-${string}`
      toolCallId: string
    }
  | {
      state: 'input-streaming'
      input: any
      providerExecuted?: boolean
      output?: never
      errorText?: never
    }
  | {
      state: 'input-available'
      input: any
      providerExecuted?: boolean
      output?: never
      errorText?: never
    }
  | {
      state: 'output-available'
      input: any
      output: any
      errorText?: never
      providerExecuted?: boolean
    }
  | {
      state: 'output-error'
      input: any
      rawInput?: unknown
      output?: never
      errorText: string
    }
)

interface ToolInvocationUIPart {
  type: 'tool-invocation'
  toolInvocation: ToolInvocation
}

export interface Message {
  id: string
  createdAt?: Date
  streaming?: boolean
  attachments?: Array<{
    contentType: string
    name: string
    size: number
    url: string
  }>
  role: 'user' | 'assistant'
  parts: Array<
    | TextUIPart
    | ReasoningUIPart
    | ToolInvocationUIPart
    | FileUIPart
    | SourceUrlUIPart
    | SourceDocumentUIPart
  >
}

interface Project {
  id: string
  title: string
  messages: Message[]
  url: string
}

export const project: Project = {
  id: 'project_001',
  title: 'Implement useDebouncedValue',
  url: 'localhost:5173/',
  messages: [
    {
      id: 'msg_user_001',
      role: 'user',
      parts: [
        {
          type: 'text',
          text: "Could you implement a TypeScript React hook useDebouncedValue and show how I'd use it to debounce a search input?",
        },
      ],
    },
    {
      id: 'msg_reasoning_001',
      role: 'assistant',
      parts: [
        {
          type: 'reasoning',
          text: 'I will create a generic hook with a configurable delay, clear timers on changes/unmount, and demonstrate usage with a search field.\n\n- Define hook signature: useDebouncedValue<T>(value: T, delayMs?: number): T\n- Use useEffect + setTimeout to update debounced value after delay\n- Clear timeout on value/delay change and on unmount to avoid leaks\n- Show example with an input field debounced before firing a query',
        },
      ],
    },
    {
      id: 'msg_assistant_001',
      role: 'assistant',
      parts: [
        {
          type: 'text',
          text: `\n\n### Hook\n\n\`\`\`tsx\nimport { useEffect, useRef, useState } from 'react'\n\nexport function useDebouncedValue<T>(value: T, delayMs = 300): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value)\n  const timeoutRef = useRef<number | null>(null)\n\n  useEffect(() => {\n    if (timeoutRef.current !== null) {\n      window.clearTimeout(timeoutRef.current)\n    }\n\n    timeoutRef.current = window.setTimeout(() => {\n      setDebouncedValue(value)\n    }, delayMs)\n\n    return () => {\n      if (timeoutRef.current !== null) {\n        window.clearTimeout(timeoutRef.current)\n      }\n    }\n  }, [value, delayMs])\n\n  return debouncedValue\n}\n\n\`\`\`\n\n### Usage\n\n\`\`\`tsx\nimport { useState } from 'react'\n// import { useDebouncedValue } from './use-debounced-value'\n\nexport function SearchInput() {\n  const [query, setQuery] = useState('')\n  const debouncedQuery = useDebouncedValue(query, 400)\n\n  // Pretend to fetch when debouncedQuery changes\n  // useEffect(() => {\n  //   fetch(\`/api/search?q=\\$\{encodeURIComponent(debouncedQuery)}\`)\n  // }, [debouncedQuery])\n\n  return (\n    <div>\n      <input\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n        placeholder="Search components..."\n      />\n      <p>Debounced: {debouncedQuery}</p>\n    </div>\n  )\n}\n\n\`\`\``,
        },
      ],
    },
  ],
}
