"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@ui-collection-kit/ui"

export const ToasterClosable = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "info",
          closable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}
