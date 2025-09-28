import { useEffect, useState } from "react"
import { tooltips } from "@codemirror/view"

export function useTooltipExtension() {
  const [extension, setExtension] = useState<any[]>([])

  useEffect(() => {
    const wrapper =
      document.querySelector<HTMLElement>(".illaCodeMirrorWrapper") ||
      document.body

    setExtension([
      tooltips({
        position: "absolute",
        parent: wrapper,
      }),
    ])
  }, [])

  return extension
}
