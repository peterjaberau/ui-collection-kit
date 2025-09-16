'use client'
import { FlexLayoutMain } from "#demos/flexlayout"
import { useState, useEffect } from 'react'

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (mounted ? <FlexLayoutMain /> : null);
}
