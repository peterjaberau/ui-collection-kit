import { useEffect } from "react"
import { useEditor } from "../editor/use-editor"

export function EventListenerPlugin(props: { on: (event: any) => void }) {
  const editor: any = useEditor()

  useEffect(() => {
    const subscription = editor.on("*", props.on)

    return () => {
      subscription.unsubscribe()
    }
  }, [editor, props.on])

  return null
}
