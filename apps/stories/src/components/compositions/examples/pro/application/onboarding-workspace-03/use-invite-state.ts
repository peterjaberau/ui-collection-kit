'use client'

import { useRef, useState } from 'react'

const newMember = () => ({ email: '', role: 'Member' })

export const useInviteState = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [fields, setFields] = useState<{ email: string; role: string }[]>(
    Array(3).fill(newMember()),
  )

  const addMember = () => {
    const nextFields = [...fields, newMember()]
    setFields(nextFields)
    const selector = `[data-index="${nextFields.length - 1}"]`
    requestAnimationFrame(() => {
      const newInput = containerRef.current?.querySelector<HTMLElement>(selector)
      newInput?.focus({ preventScroll: true })
    })
  }

  const removeMember = (index: number) => {
    const nextFields = fields.filter((_, i) => i !== index)
    setFields(nextFields)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newFields = [...fields]
    newFields[index].email = e.target.value
    setFields(newFields)
  }

  const handleRoleChange = (value: string, index: number) => {
    const newFields = [...fields]
    newFields[index].role = value
    setFields(newFields)
  }

  return {
    containerRef,
    fields,
    add: addMember,
    remove: removeMember,
    setEmail: handleChange,
    setRole: handleRoleChange,
  }
}

export interface InviteState extends ReturnType<typeof useInviteState> {}
