"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@ui-kit/components"

export const ToasterWithAction = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.success({
          title: "Update successful",
          description: "File saved successfully to the server",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Click me
    </Button>
  )
}
