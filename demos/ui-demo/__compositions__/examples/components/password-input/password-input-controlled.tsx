"use client"

import { PasswordInput } from "@ui-collection-kit/ui"
import { useState } from "react"

export const PasswordInputControlled = () => {
  const [value, setValue] = useState("")
  return (
    <PasswordInput value={value} onChange={(e) => setValue(e.target.value)} />
  )
}
