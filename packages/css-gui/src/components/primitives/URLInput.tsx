'use client'
import { ChangeEvent, useId } from 'react'
import { Label } from './Label'
import { chakra } from '@chakra-ui/react'
type URLInputProps = {
  value: string
  onChange: (newValue: string) => void
  label?: string
}

export const URLInput = ({ label, value, onChange }: URLInputProps) => {
  const id = useId()
  const fullId = `${id}-url`

  return (
    <Label htmlFor={fullId}>
      {label ?? 'URL'}
      <chakra.input
        id={fullId}
        type="url"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value)
        }}
        css={{
          minHeight: '1.6em',
          width: '100%',
        }}
      />
    </Label>
  )
}
