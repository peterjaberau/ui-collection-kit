import { ComponentState, PropsWithoutRef, useEffect, useRef } from "react"

export function usePrevious<T>(value: PropsWithoutRef<T> | ComponentState) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
