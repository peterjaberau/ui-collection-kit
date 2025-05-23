import { stringifyState } from '@ui-collection-kit/stringify-state'
import { useLayoutEffect } from 'react'

interface Service {
  initialContext: { id: string }
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  state: Record<string, any>
  subscribe: (callback: () => void) => () => void
}

export const useDebugger = (service: Service) => {
  useLayoutEffect(() => {
    const syncPre = () => {
      let group = document.getElementById('__ui-collection-kit-debug')

      if (!group) {
        group = document.createElement('div')
        group.id = '__ui-collection-kit-debug'
        Object.assign(group.style, {
          position: 'fixed',
          top: '0',
          right: '0',
          zIndex: '9999',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          boxSizing: 'border-box',
        })

        document.body.appendChild(group)
      }

      const id = service.initialContext.id
      let pre = document.getElementById(id)

      if (!pre) {
        pre = document.createElement('pre')
        pre.id = id
        Object.assign(pre.style, {
          padding: '4px',
          background: 'white',
          border: '1px solid black',
          borderRadius: '4px',
          maxHeight: '300px',
          overflow: 'auto',
        })
        group.appendChild(pre)
      }

      pre.textContent = stringifyState(service.state)

      return () => {
        pre.remove()
      }
    }

    const removePre = syncPre()
    const unsubscribe = service.subscribe(syncPre)
    return () => {
      removePre()
      unsubscribe()
    }
  }, [service])
}
